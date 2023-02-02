//  
//  ExternalWebRuntime.js
//  ExternalWebRuntime
//  
//  Created by Logan Collins on 9/23/15.
//  Copyright (c) 2014 Panic Inc. All rights reserved.
//  

(function() {
    class NovaExternalWebRuntime {
        constructor() {
            this.messageHandlers = {};
            this.connection = null;
            this.queuedMessages = [];
        }
        
        start() {
            // Start a WebSocket connection back to the preview server
            // Only establish a WebSocket connection if not running in the app preview
            if (!this.runningInAppPreview) {
                var connection = new WebSocket("ws://" + location.host + "/nova-webruntime/");
                
                var runtime = this;
                
                connection.onopen = (e) => {
                    runtime.didConnect();
                }
                
                connection.onmessage = (e) => {
                    var message = JSON.parse(e.data);
                    if (message) {
                        runtime.receive(message);
                    }
                }
                
                this.connection = connection;
            }
        }
        
        didConnect() {
            for (let message of this.queuedMessages) {
                this.sendMessage(message);
            }
            this.queuedMessages = []
        }
        
        stop() {
            if (this.connection) {
                this.connection.close();
                this.connection = null;
            }
        }
        
        // Returns true if the page is loaded in a Nova preview web view
        get runningInAppPreview() {
            return (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.nova);
        }
        
        get canSend() {
            return (this.connection !== null);
        }
        
        // Funnel point for all API method invocations
        // Ex: runtime.send('methodName', arg1, arg2, arg3);
        send() {
            if (arguments.length == 0) {
                throw "invoke() must be called with at least one argument (the method name)";
            }
            
            if (!this.connection) {
                return;
            }
            
            // Method name
            var name = arguments[0];
            if (typeof name != 'string') {
                throw "Method name must be a string";
            }
            
            if (!this.canSend) {
                return;
            }
            
            // Method arguments
            var args = [];
            for (var i=1; i<arguments.length; i++) {
                var arg = arguments[i];
                args.push(arg);
            }
            
            // Message
            var message = {
                name: name,
                args: args
            };
            
            let readyState = this.connection.readyState;
            if (readyState == 0) {
                // Connecting, enqueue message
                this.queuedMessages.push(message);
                return;
            }
            else if (readyState == 2 || readyState == 3) {
                // Closing or Closed
                return;
            }
            
            this.sendMessage(message);
        }
        
        sendMessage(message) {
            // Invoke message handler
            var messageString = JSON.stringify(message);
            this.connection.send(messageString);
        }
        
        // Funnel point for all messages received from the API host app
        // Should not be directly invoked by the API or client
        receive(message) {
            var messageName = message["name"];
            if (typeof messageName != 'string') {
                throw "Message name must be a string";
            }
            
            var args = message["args"];
            
            var handlerFunc = this.messageHandlers[messageName];
            
            var result = undefined;
            
            // Invoke the function
            try {
                result = handlerFunc.apply(null, args);
            }
            catch (e) {
                console.exception(e.toString());
                return undefined;
            }
            
            return result;
        }
        
        // Installs a handler for a given message name
        addMessageHandler(messageName, func) {
            if (typeof messageName != 'string') {
                throw "Message name must be a string";
            }
            if (typeof func != 'function') {
                throw "Message handler must be a function";
            }
            this.messageHandlers[messageName] = func;
        }
        
        // Removes a handler for a given message
        removeMessageHandler(messageName) {
            if (typeof messageName != 'string') {
                throw "Message name must be a string";
            }
            delete this.messageHandlers[messageName]
        }
    }
    
    NovaExternalWebRuntimeSharedInstance = new NovaExternalWebRuntime();
    NovaExternalWebRuntimeSharedInstance.start();
    
    // Reload
    NovaExternalWebRuntimeSharedInstance.addMessageHandler('reload', function() {
        location.reload();
    });
    
    // Invoked on page show
    window.addEventListener('pageshow', function () {
        let result = {};
        
        result.url = document.URL;
        
        // Stylesheets
        let styleSheets = document.styleSheets;
        let styleSheetObjs = [];
        for (let i = 0; i < styleSheets.length; i++) {
            let styleSheet = styleSheets[i];
            
            let styleSheetObj = {};
            styleSheetObj.title = styleSheet.title;
            styleSheetObj.href = styleSheet.href;
            styleSheetObj.type = styleSheet.type;
            styleSheetObj.disabled = styleSheet.disabled;
            styleSheetObjs.push(styleSheetObj);
        }
        result.styleSheets = styleSheetObjs;
        
        // Scripts
        let scripts = document.scripts;
        let scriptObjs = [];
        for (let i = 0; i < scripts.length; i++) {
            let script = scripts[i];
            if (!script.src) {
                continue;
            }
            
            let scriptObj = {};
            scriptObj.src = script.src;
            scriptObj.type = script.type;
            scriptObjs.push(scriptObj);
        }
        result.scripts = scriptObjs;
        
        NovaExternalWebRuntimeSharedInstance.send('pageshow', result);
    });
})();
