import './stylus/content.styl';
import './stylus/chat_overlay.styl';


const message_container =  document.getElementById("message_container");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if(sender.origin == "https://www.youtube.com"){
      
      if (request.message == "preloadMessages"){
        message_container.prepend(convertToHTMLElm(request.node));
        message_container.scrollIntoView({block: 'end'});
      }

      if (request.message == "newMessage"){
        message_container.append(convertToHTMLElm(request.node));
        message_container.scrollIntoView({block: 'end'});
      }

      if (request.message == "removeMessage"){
        destroyMessage(convertToHTMLElm(request.node));
      }
    }
  }
);

function convertToHTMLElm(node){

  //var node = new DOMParser().parseFromString(node, 'text/html').documentElement;
  var temp = document.createElement('div');
  temp.innerHTML = node;
  node = temp.firstChild;

  return node;
}

function destroyMessage(node){

  const messageId = node.getAttribute('message-id');

  console.log(messageId);
  console.log(message);

  const message = document.querySelectorAll(`[message-id=${messageId}]`);
  if(message != undefined){
    message.destroy();
  }
}