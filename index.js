var Playback = require('playback');
var JST = require('./jst');
var Events = require('events')
var Mediator = require('mediator')

var assign = require('lodash.assign')

var PlayerInfo = require("player_info")

class RtmpHls extends Playback {
  get name() { return 'rtmp_hls' }
  get tagName() { return 'div' }
  get attributes() {
  	return {
  		'data-rtmp-hls': ''
  	}
  }

  constructor(options){
  	super(options)
  	var _this = this

  	this.options = options

  	this.playbacks = {}
  	this.initCount = 0

  	this.hlsPlayback = {};
  	this.rtmpPlayback = {};

  	PlayerInfo.playbackPlugins.forEach(function (playback) { 
  		//console.log(playback.prototype.name);
  		if(playback.prototype.name == 'hls'){
  			_this.hlsPlayback = playback;
  		}else if(playback.prototype.name == 'rtmp'){
  			_this.rtmpPlayback = playback;
  		}else{
  			//console.log('ignoring '+playback.prototype.name)
  		}
	});

	this.currentState = 'STOPPED'
	this.currentPlayer = 'RTMP'

	this.settings = {default: ['seekbar']}
    this.settings.left = ["playpause"]
    this.settings.right = ["fullscreen"]
    this.settings.seekEnabled = false

  	var rtmpOptions = assign(options, {src: options.rtmpSource})
	this.RTMP = new this.rtmpPlayback(rtmpOptions);

	var hlsOptions = assign(options, {src: options.hlsSource, capLevelToStage: true})
	this.HLS = new this.hlsPlayback(hlsOptions);


	this.RTMP.once(Events.PLAYBACK_READY, () => this.bootstrap())
	this.HLS.once(Events.PLAYBACK_READY, () => this.bootstrap())

	//this.bootstrap()

  }

  switchPlayer(newPlayer){
  	this.currentPlayer = newPlayer

  	if(newPlayer == 'HLS'){
  		$('[data-rtmp]').css('visibility', 'hidden')
  		$('[data-hls]').css('visibility', 'visible')
  	}else if(newPlayer == 'RTMP'){
  		$('[data-rtmp]').css('visibility', 'visible')
  		$('[data-hls]').css('visibility', 'hidden')
  	}else{
  		throw new Error('Unknown player type to switch to')
  	}

  }


  addFulltimeListeners(){
  	//Every x seconds the HLS player when paused will refresh the m3u8 and latest TS and update duration. How convenient
  	this.HLS.on(Events.PLAYBACK_TIMEUPDATE, (hlsPos, hlsDur) => {
  		if(!this.isPlaying()) return

  		this.duration = hlsDur
  		var pos = (this.currentPlayer == 'HLS')?hlsPos:hlsDur //Only use the HLS position if we're using the HLS player
  		this.trigger(Events.PLAYBACK_TIMEUPDATE, pos, this.duration, this.name)
    })
  }

  addRtmpListeners(){
  	//Bubble RTMP live events back up
  	this.RTMP.on(Events.PLAYBACK_BUFFERFULL, () => this.setPlaybackState('PLAYBACK_BUFFERFULL'))
  	this.RTMP.on(Events.PLAYBACK_BUFFERING, () => this.setPlaybackState('PLAYBACK_BUFFERING'))
  	this.RTMP.on(Events.PLAYBACK_PLAY, () => this.setPlaybackState('PLAYING'))
  }

  removeRtmpListeners(){
  	this.RTMP.off(Events.PLAYBACK_BUFFERFULL)
  	this.RTMP.off(Events.PLAYBACK_BUFFERING)
  	this.RTMP.off(Events.PLAYBACK_PLAY)
  }


  addHlsListeners(){
  	//Bubble RTMP live events back up
  	this.HLS.on(Events.PLAYBACK_BUFFERFULL, () => this.setPlaybackState('PLAYING'))
  	//this.RTMP.on(Events.PLAYBACK_BUFFERING, () => this.setPlaybackState('PLAYBACK_BUFFERING'))
  }

  removeHlsListeners(){
  	this.HLS.off(Events.PLAYBACK_BUFFERFULL)
  }


  bootstrap(){
  	if(++this.initCount != 2) return

  	this.el.width = "100%"
    this.el.height = "100%"

    this.addFulltimeListeners()

    this.currentState = 'IDLE'
    this.settings.seekEnabled = true
    this.trigger(Events.PLAYBACK_SETTINGSUPDATE, this.name)
    this.trigger(Events.PLAYBACK_PLAYBACKSTATE)
    this.trigger(Events.PLAYBACK_READY, this.name)

  }

  play(){
  	if(this.currentState == 'IDLE'){
  		this.addRtmpListeners()
  		this.HLS.once(Events.PLAYBACK_BUFFERFULL, () => this.HLS.pause())
  		this.HLS.play()
    	this.RTMP.play()
  	}

  }

  isPlaying() {
  	return this.currentState == 'PLAYING'
  }

  getPlaybackType() {
  	return 'live'
  }

  getDuration(){
  	return this.duration
  }

  setPlaybackState(state) {
    if (["PLAYING_BUFFERING", "PAUSED_BUFFERING"].indexOf(state) >= 0)  {
      this.trigger(Events.PLAYBACK_BUFFERING, this.name)
      this.updateCurrentState(state)
    } else if (["PLAYING", "PAUSED"].indexOf(state) >= 0) {
      if (["PLAYING_BUFFERING", "PAUSED_BUFFERING", "IDLE"].indexOf(this.currentState) >= 0) {
        this.trigger(Events.PLAYBACK_BUFFERFULL, this.name)
      }
      this.updateCurrentState(state)
    } else if (state === "IDLE") {
      this.updateCurrentState(state)
      this.trigger(Events.PLAYBACK_TIMEUPDATE, 0, this.el.getDuration(), this.name)
      this.trigger(Events.PLAYBACK_ENDED, this.name)
    }
  }

  updateCurrentState(state) {
    this.currentState = state
    this.trigger(Events.PLAYBACK_PLAYBACKSTATE)
    if (state === "PLAYING") {
      this.trigger(Events.PLAYBACK_PLAY, this.name)
    } else if (state === "PAUSED") {
      this.trigger(Events.PLAYBACK_PAUSE, this.name)
    }
  }

  updateDvr(dvrInUse) {
    this.trigger(Events.PLAYBACK_DVR, dvrInUse)
    this.trigger(Events.PLAYBACK_STATS_ADD, {'dvr': dvrInUse})
  }


  pause(){
  	this.HLS.seek(-1);
  	this.switchPlayer('HLS')
  	this.RTMP.pause();
  	this.updateDvr(true);
  }

  seek(time){
  	//Time is a percentage of the duration. If the user gets within 97 percent (time==97 then go to RTMP)
  	//Seek to RTMP, go back to live
  	if(time >= 97 || time < 0){
  		this.switchPlayer('RTMP')
  		this.removeHlsListeners()
  		this.HLS.seek(-1)
  		this.HLS.pause()
  		this.addRtmpListeners()
  		this.RTMP.play()
  		this.updateDvr(false)
  	}else{
  	//Seek to HLS position	
  		if(this.currentPlayer != 'HLS'){
	  		this.switchPlayer('HLS')
	  		this.RTMP.stop()
	  		this.removeRtmpListeners()
	  		this.addHlsListeners()
	  		this.HLS.play()
	  		this.updateDvr(true)
  		}

  		this.HLS.seek(time)

  		if(!this.HLS.isPlaying()) this.HLS.play()
  	}
  	
  }

  stop(){
  	this.currentState == 'STOPPED'
  	this.RTMP.stop()
  }

  render() {
  	this.el.id = 'rtmp-hls'
    console.log("rendering", this.name)
    this.$el.html('');
    var style = $('<style>').html(JST.CSS[this.name])
    this.$el.append(style)
    this.$el.append(this.RTMP.render().el)
    this.$el.append(this.HLS.render().el)

    //this.settings = {'left': ["playstop"], 'default': ['seekbar'], 'right': ['fullscreen']}
    //this.settings.seekEnabled = false
    //this.trigger(Events.PLAYBACK_SETTINGSUPDATE, this.name)

    return this;
  }

}

RtmpHls.canPlay = function(source) {
	console.log(source);
  //should return true for the supported media source
  return (source.indexOf('rtmp+hls://') > -1);
};


module.exports = window.RtmpHls = RtmpHls;
