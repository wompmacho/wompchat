const message_container =  document.getElementById("message_container");


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

      if (request.message == "messageNode"){
        message_container.innerHTML += request.node;
        message_container.scrollBy(message_container.scrollHeight);
        return;
      }
});