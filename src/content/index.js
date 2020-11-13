import "src/stylus/content.styl";
import ChatScroller from "./ChatScroller";
import ChatWatcher from "./ChatWatcher";
import RouteWatcher from "./RouteWatcher";

import {
  isLivestream, isYoutubeGaming,
  isYoutubeEmbed, isYoutubeVanilla,
  isPopOut
} from "src/helpers/Identification";

import PersistentSyncStorage from "src/helpers/PersistentSyncStorage";

let MAIN = null;
const theater_wrapper = document.createElement('theater_wrapper');
document.body.appendChild(theater_wrapper);
var alreadyTheater = false;

// ---
class Main {
  constructor() {
    this.chatWatcher = null;
    this.chatScroller = null;
    this.routeWatcher = null;
    this.onRouteChange = this.onRouteChange.bind(this);
    this.load();

  }

  load() {
    this.routeWatcher = new RouteWatcher();
    this.routeWatcher.on("change", this.onRouteChange);
    this.onRouteChange();
  }

  onRouteChange() {
    if(isLivestream() && ((isYoutubeGaming()) || (isYoutubeVanilla()) || (isYoutubeEmbed()) || isPopOut())) {
      this.init();
    }

    if(isLivestream()) {
      if (PersistentSyncStorage.data.options.theaterModeFix) {
        if(document.getElementById('player-container') != null && document.getElementById('player-theater-container') != null){
          theaterMode();
        }
      }
    }
  }//  end onRouteChange

  setDefaults() {

      // Set Hide Welcome Banner
      if (PersistentSyncStorage.data.options.alternateLineColor) {
        document.querySelector('#items.style-scope.yt-live-chat-item-list-renderer').classList.add('alternateLineColor');
      }
    
    ///////////////////////////////////////////////////////////////////

    // Welcome Banner
    var welcomBanner = document.querySelector("yt-live-chat-viewer-engagement-message-renderer");

    // Set Hide Welcome Banner
    if (PersistentSyncStorage.data.options.hideWelcomBanner) {
      welcomBanner.classList.add("hideElement");
    }

    ///////////////////////////////////////////////////////////////////

    //Live Chat Default Option
    if (PersistentSyncStorage.data.options.setLiveChat) {
      document.getElementsByClassName("yt-simple-endpoint style-scope yt-dropdown-menu").item(1).click();
    } else {
      // do nothing, let user pick option if not set as default in options menu
    }

    ///////////////////////////////////////////////////////////////////

    //Live Chat Default Option
    if (PersistentSyncStorage.data.options.setGreenScreen) {
      var chat = document.querySelector('yt-live-chat-item-list-renderer');
      chat.classList.add('green_sceen');
    } else {
      // do nothing, let user pick option if not set as default in options menu
    }
  }

  init() {

    this.chatWatcher = new ChatWatcher();
    this.chatWatcher.init();
    this.chatScroller = new ChatScroller();
    this.chatScroller.init();

    this.setDefaults();
    console.log("INIT");

  }// end init
}// end main

// --- Every Frame Loaded
PersistentSyncStorage.on("ready", () => {
  MAIN = new Main();
});

function checkMode(){

  if(alreadyTheater){
    console.log('enterTheater');
    alreadyTheater = false;
    enterTheaterMode();
  }else{
    //  is reverse because at the time of check dom elements havent moved yet
    if(document.getElementById('player-theater-container').contains(document.getElementById('player-container'))){
      console.log('exitTheater');
      exitTheaterMode();
    }else{ 
      console.log('enterTheater');
      enterTheaterMode();
    }
  }
}

function enterTheaterMode() {

  const movie_player = document.getElementById('movie_player');
  const chat_frame = document.getElementById('chatframe');
  const info_frame = document.getElementById('info-contents');

  const masthead_container = document.getElementById('masthead-container');
  
  masthead_container.hidden = true;
  
  theater_wrapper.classList.add('theater_wrapper_fix');
  movie_player.classList.add('movie_player_fix');
  chat_frame.classList.add('chat_frame_fix');
  info_frame.classList.add('info_contents_fix');

  theater_wrapper.append(info_frame);
  theater_wrapper.append(movie_player);
  theater_wrapper.append(chat_frame);

  document.body.classList.add('body_Fix');


}// end enterTheaterMode

function exitTheaterMode(){

  const movie_player = document.getElementById('movie_player');
  const chat_frame = document.getElementById('chatframe');
  const info_frame = document.getElementById('info-contents');

  const movie_player_container = document.getElementById('player-container'); 
  const player_container_parent = document.getElementById('player-container-inner');

  const chat_frame_parent = document.getElementById('chat'); 
  const info_frame_before = document.getElementById('meta');  

  const masthead_container = document.getElementById('masthead-container');

  masthead_container.hidden = false;

  theater_wrapper.classList.remove('theater_wrapper_fix');
  movie_player.classList.remove('movie_player_fix');
  chat_frame.classList.remove('chat_frame_fix');
  info_frame.classList.remove('info_contents_fix');

  movie_player_container.prepend(movie_player);
  player_container_parent.prepend(movie_player_container);
  chat_frame_parent.prepend(chat_frame);
  info_frame_before.before(info_frame);

  document.body.classList.remove('body_Fix');
}

function theaterMode(){

  var theaterButton = document.querySelector('button.ytp-size-button.ytp-button');

  if(theaterButton){

    if(document.getElementById('player-theater-container').contains(document.getElementById('player-container'))){

      //  for when page loads first time - check is reversed after this
      alreadyTheater = true;
      checkMode();
    }

    //  add button
    theaterButton.addEventListener('click', checkMode, false);
  }
}
