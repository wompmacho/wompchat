import PersistentSyncStorage from 'src/helpers/PersistentSyncStorage';
import Emote from './Emote';


class Emotes {
  constructor() {
    this.dictionary = new Map();

    //  identification for popup
    this.twitch_Dictionary = new Map();
    this.bttv_Dictionary = new Map();
    this.franker_Dictionary = new Map();
    this.specialEmotesDictionary = new Map();


    this.init = this.init.bind(this);
  }

  init() {
    return Promise.all([
      (PersistentSyncStorage.data.options.enableBTTVEmotes && this.loadBTTVEmote()),
      (PersistentSyncStorage.data.options.enableFrankerEmotes && this.loadFrankerEmotes()),
      (PersistentSyncStorage.data.options.enableTwitchEmotes && this.loadTwitchEmotes()),
      (this.specialEmotes())
    ]);
  }
  
  /////////////////////////////////////////////////////////////////////////////////

  get(key) {
    return this.dictionary.get(key);
  }

  set(key, value) {
    return this.dictionary.set(key, new Emote(value));
  }

  has(key) {
    return this.dictionary.has(key);
  }


  //////////////////////////////////////////////////////////////////

  bbtv_ToDict(json){
    for (let index = 0; index < json.length; index++) {
      
      const { emote, total } = json[index];

      const url = `https://cdn.betterttv.net/emote/${emote.id}/3x`;

      this.dictionary.set(emote.code, new Emote({ code: emote.code, url }));
      this.bttv_Dictionary.set(emote.code, new Emote({ code: emote.code, url }));
    }
  }

  bbtv_cached_ToDict(json){
    for (let index = 0; index < json.length; index++) {
      
      const { id, code } = json[index];

      const url = `https://cdn.betterttv.net/emote/${id}/3x`;

      this.dictionary.set(code, new Emote({ code: code, url }));
      this.bttv_Dictionary.set(code, new Emote({ code: code, url }));
    } 
  }

  // loadEmote is where we collect an object array of emotes from bttv api
  async loadBTTVEmote(){

    // top 100 emotes query = ?limit=100&offset=100
    const bttv_top_api_url = "https://api.betterttv.net/3/emotes/shared/top?limit=100";
    const bttv_top_api_response = await fetch(bttv_top_api_url);
    var top_Json = await bttv_top_api_response.json();

    // tredning emotes
    const bttv_trending_api_url = "https://api.betterttv.net/3/emotes/shared/trending?limit=100";
    const bttv_trending_api_response = await fetch(bttv_trending_api_url);
    var trending_Json = await bttv_trending_api_response.json();

    // global emotes are weird, stored in seperate cache and do not give all the normal attributes
    const bttv_global_api_url = "https://api.betterttv.net/3/cached/emotes/global";
    const bttv_global_api_response = await fetch(bttv_global_api_url);
    var global_Json = await bttv_global_api_response.json();

    this.bbtv_ToDict(top_Json);
    this.bbtv_ToDict(trending_Json);
    this.bbtv_cached_ToDict(global_Json);
  }

  ////////////////////////////////////////////////////////////////

  frankerToDict(json){
    for (let index = 0; index < json.emoticons.length; index++) {
      
      const { name, urls } = json.emoticons[index];

      var url = "";
      if(urls[4] != undefined){
        url = urls[4];
      }else if(urls[2] != undefined){
        url = urls[2];
      }else{
        url = urls[1];
      }

      //  fix for overlay, remove "//" at start of url 
      var protocol = "https:";
      url = protocol.concat(url);

      this.dictionary.set(name, new Emote({ code: name, url }));
      this.franker_Dictionary.set(name, new Emote({ code: name, url }));
    }
  }

  // loadFrankerEmotes is where we collect an object array of emotes from franker api
  async loadFrankerEmotes(){

    const franker_top_api_url = "https://api.frankerfacez.com/v1/emoticons?sort=count-desc";
    
    const first50Response = await fetch(franker_top_api_url);
    var first50json = await first50Response.json();
    var next50Link = first50json._links.next;
    const second50Response = await fetch(next50Link);
    var second50json = await second50Response.json();

    // Top 100
    this.frankerToDict(first50json);
    this.frankerToDict(second50json);
  }
  
  ////////////////////////////////////////////////////////////////

  twitchToDict(json){
    for (let index = 0; index < json.emotes.length; index++) {
      
      const { code, id } = json.emotes[index];

      const url = `https://static-cdn.jtvnw.net/emoticons/v1/${id}/3.0`;

      this.dictionary.set(code, new Emote({ code: code, url }));
      this.twitch_Dictionary.set(code, new Emote({ code: code, url }));
    }
  }

  // loadTwitchEmotes is where we collect an object array of emotes from twitch api
  async loadTwitchEmotes(){

    //  https://api.twitchemotes.com/api/v4/channels/0 - twitch globals - 232 items
    //  https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 - cdn

    // Global
    const twitch_global_api_url = "https://api.twitchemotes.com/api/v4/channels/0";
    const twitch_global_api_response = await fetch(twitch_global_api_url);
    var twitch_global_Json = await twitch_global_api_response.json();

    this.twitchToDict(twitch_global_Json);
  }

  // ♥
  specialEmotes(){

    var emoteObj = {
      "emotes": [
        {
          "code": "wompWTF", 
          "url": "https://static-cdn.jtvnw.net/emoticons/v1/301653066/3.0"
        },
        {
          "code": "wompISeeYou", 
          "url": "https://static-cdn.jtvnw.net/emoticons/v1/301506153/3.0"
        },
        {
          "code": "wompCry", 
          "url": "https://static-cdn.jtvnw.net/emoticons/v1/301506193/3.0"
        },
        {
          "code": "BabyCorona", 
          "url": "https://static-cdn.jtvnw.net/emoticons/v1/301629296/3.0"
        },
        {
          "code": "LEL", 
          "url": "https://static-cdn.jtvnw.net/emoticons/v1/431249/3.0"
        }
      ]
    };

    for (let index = 0; index < emoteObj.emotes.length; index++) {
      const element = emoteObj[index];
      const { code, url } = emoteObj.emotes[index];
      this.dictionary.set(code, new Emote({ code: code, url}));
      this.specialEmotesDictionary.set(code, new Emote({ code: code, url}));
    }    
  }
}// End Emotes

export default new Emotes;