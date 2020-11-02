/**
* MIT License
*
* Copyright (c) 2020 wompmacho
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/


class Notifications {

  create(notificationId = null, options) {
    // notificationId is optional
    if(typeof notificationId === 'object') {
      options = notificationId;
      notificationId = null;
    }

    return new Promise((res, rej) => {
      // resolve args = notificationId:string 
      chrome.notifications.create(notificationId, options, res);
    });
  }

  update(notificationId, options) {
    return new Promise((res, rej) => {
      // resolve args = wasUpdated:boolean
      chrome.notifications.update(notificationId, options, res);
    });
  }

  clear(notificationId) {
    return new Promise((res, rej) => {
      // resolve args = wasCleared:boolean
      chrome.notifications.clear(notificationId, res);
    });
  }

  getAll() {
    return new Promise((res, rej) => {
      // resolve args = notifications:object
      chrome.notifications.getAll(res);
    });
  }

  getPermissionLevel() {
    return new Promise((res, rej) => {
      // resolve args = level:PermissionLevel (https://developer.chrome.com/apps/notifications#type-PermissionLevel)
      chrome.notifications.getPermissionLevel(res);
    });
  }

  listen(event, notificationId = null, callback) {
    // event = 'onClosed' | 'onClicked' | 'onButtonClicked' | 'onPermissionLevelChanged' | 'onShowSettings'
    // notificationId is optional
    if(typeof notificationId === 'function') {
      callback = notificationId;
      notificationId = null;
    }

    if(event === 'onPermissionLevelChanged' || event === 'onShowSettings') {
      return this._nonNotificationIdListen(event, callback);
    }

    /**
     * https://developer.chrome.com/apps/notifications#events
     * 
     * Resolve args (by event):
     * onClosed = notificationId:string, byUser:boolean
     * onClicked = notificationId:string
     * onButtonClicked = notificationId:string, buttonIndex:integer
     * 
     * onPermissionLevelChanged = level:PermissionLevel (https://developer.chrome.com/apps/notifications#type-PermissionLevel)
     * onShowSettings = (none)
     */

    // This callback relates only to those events that have notificationId arg
    const ListenerCallback = (() => {
      if(notificationId !== null) {
        return (passedNotificationId, ...args) => {
          if(notificationId === passedNotificationId) {
            callback(passedNotificationId, ...args);
          }
        };
      } else {
        return callback;
      }
    })();


    chrome.notifications[event].addListener(ListenerCallback);
  }

  _nonNotificationIdListen(event, callback) {
    chrome.notifications[event].addListener(callback);
  }
}

export default Notifications;
