var Playback = require('playback');
var JST = require('../jst.js');
var RTMP = require('./rtmp.js');
var HLS = require('./hls.js');
var Mediator = require('mediator')
var Events = require('events')


class RtmpHls extends Playback {
  get name() { return 'rtmp_hls' }
  get tagName() { return 'div' }
  get attributes() {
    return {
      'style': 'width: 100%; height: 100%;',
    }
  }
  //get template() { return JST.rtmphls }

  constructor(options){
  	super(options)
    this.options = options

    console.log(options)

    this.options.rtmp.source = this.options.rtmp.src || this.options.rtmp.source  

    //Get the two classes we need for playing and assign them locally
    this.RTMP = new RTMP(this.options.rtmp)
    this.HLS = new HLS(this.options.hls)

    this.activePlayer = 'RTMP'

    this.playbackType = 'live'
    this.settings = {'left': ["playstop"], 'default': ['seekbar'], 'right': ['fullscreen']}

    this.bootstrap()
    this.trigger(Events.PLAYBACK_MEDIACONTROL_ENABLE);

  }


  rtmpListeners(){
  	//Mediator.on(this.RTMP.uniqueId + ':progress', this.progress, this)
    Mediator.on(this.RTMP.uniqueId + ':timeupdate', this.updateTime, this)
    //Mediator.on(this.RTMP.uniqueId + ':statechanged', this.checkState, this)
    //Mediator.on(this.RTMP.uniqueId + ':flashready', this.bootstrap, this)
  }

  updateTime(){

  	this.trigger(Events.PLAYBACK_TIMEUPDATE, this.HLS.getDuration(), this.HLS.getDuration(), this.name)
  }


  bootstrap() {
  	var self = this

  	this.currentState = "IDLE"
  	this.isReady = true
  	self.trigger(Events.PLAYBACK_READY, this.name)

  	Mediator.once(this.HLS.cid + ':manifestloaded', function(){
  		//self.RTMP.play()
  		

  		self.rtmpListeners()

  	})

  }

  getDuration(){
  	return this.HLS.getDuration()
  }

  play() {
  	this[this.activePlayer].play()
  	this.currentState = "PLAYING"
  	this.trigger(Events.PLAYBACK_PLAY, this.name)


  	 //this.trigger(Events.PLAYBACK_TIMEUPDATE, this.HLS.getDuration(), this.HLS.getDuration(), this.name)
  }

  isPlaying(){
  	 if (this[this.activePlayer].currentState) {
      return !!(this[this.activePlayer].currentState.match(/playing/i))
    }
    return false
  }

  pause() {
  	this[this.activePlayer].pause()
  }

  stop() {
  	this[this.activePlayer].stop()
  }


  render() {
  	//Render the players
  	this.HLS.render();
    //var hlsPlayer = $('<div id="hlsPlayer"></div>').html();
    //this.$el.append(this.HLS.el);

    this.RTMP.render();
    //var rtmpPlayer = $('<div id="rtmpPlayer" style= "width: 100%; height: 100%;"></div>').html(this.RTMP.el);
    this.$el.append(this.RTMP.el);

 
    var style = $('<style>').html(JST.CSS[this.name])
    this.$el.append(style)
    console.log(this.el)
    return this;
  }

}

RtmpHls.canPlay = function(source) {
  //should return true for the supported media source
  return true;
};


module.exports = window.RtmpHls = RtmpHls;
