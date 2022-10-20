var fpCollect =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var fpCollect = function () {
    var UNKNOWN = 'unknown';
    var ERROR = 'error';

    var DEFAULT_ATTRIBUTES = {
        plugins: false,
        mimeTypes: false,
        userAgent: false,
        platform: false,
        languages: false,
        screen: false,
        touchScreen: false,
        videoCard: false,
        multimediaDevices: true,
        productSub: false,
        navigatorPrototype: false,
        etsl: false,
        screenDesc: false,
        phantomJS: false,
        nightmareJS: false,
        selenium: false,
        webDriver: false,
        webDriverValue: false,
        errorsGenerated: false,
        resOverflow: false,
        accelerometerUsed: true,
        screenMediaQuery: false,
        hasChrome: false,
        detailChrome: false,
        permissions: true,
        iframeChrome: false,
        debugTool: false,
        battery: false,
        deviceMemory: false,
        tpCanvas: true,
        sequentum: false,
        audioCodecs: false,
        videoCodecs: false
    };

    var defaultAttributeToFunction = {
        userAgent: function userAgent() {
            return navigator.userAgent;
        },
        plugins: function plugins() {
            var pluginsRes = [];

            var _loop = function _loop(i) {
                var plugin = navigator.plugins[i];
                var pluginStr = [plugin.name, plugin.description, plugin.filename, plugin.version].join("::");
                var mimeTypes = [];
                Object.keys(plugin).forEach(function (mt) {
                    mimeTypes.push([plugin[mt].type, plugin[mt].suffixes, plugin[mt].description].join("~"));
                });
                mimeTypes = mimeTypes.join(",");
                pluginsRes.push(pluginStr + "__" + mimeTypes);
            };

            for (var i = 0; i < navigator.plugins.length; i++) {
                _loop(i);
            }
            return pluginsRes;
        },
        mimeTypes: function mimeTypes() {
            var mimeTypes = [];
            for (var i = 0; i < navigator.mimeTypes.length; i++) {
                var mt = navigator.mimeTypes[i];
                mimeTypes.push([mt.description, mt.type, mt.suffixes].join("~~"));
            }
            return mimeTypes;
        },
        platform: function platform() {
            if (navigator.platform) {
                return navigator.platform;
            }
            return UNKNOWN;
        },
        languages: function languages() {
            if (navigator.languages) {
                return navigator.languages;
            }
            return UNKNOWN;
        },
        screen: function (_screen) {
            function screen() {
                return _screen.apply(this, arguments);
            }

            screen.toString = function () {
                return _screen.toString();
            };

            return screen;
        }(function () {
            return {
                wInnerHeight: window.innerHeight,
                wOuterHeight: window.outerHeight,
                wOuterWidth: window.outerWidth,
                wInnerWidth: window.innerWidth,
                wScreenX: window.screenX,
                wPageXOffset: window.pageXOffset,
                wPageYOffset: window.pageYOffset,
                cWidth: document.body.clientWidth,
                cHeight: document.body.clientHeight,
                sWidth: screen.width,
                sHeight: screen.height,
                sAvailWidth: screen.availWidth,
                sAvailHeight: screen.availHeight,
                sColorDepth: screen.colorDepth,
                sPixelDepth: screen.pixelDepth,
                wDevicePixelRatio: window.devicePixelRatio
            };
        }),
        touchScreen: function touchScreen() {
            var maxTouchPoints = 0;
            var touchEvent = false;
            if (typeof navigator.maxTouchPoints !== "undefined") {
                maxTouchPoints = navigator.maxTouchPoints;
            } else if (typeof navigator.msMaxTouchPoints !== "undefined") {
                maxTouchPoints = navigator.msMaxTouchPoints;
            }
            try {
                document.createEvent("TouchEvent");
                touchEvent = true;
            } catch (_) {}

            var touchStart = "ontouchstart" in window;
            return [maxTouchPoints, touchEvent, touchStart];
        },
        videoCard: function videoCard() {
            try {
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
                var webGLVendor = void 0,
                    webGLRenderer = void 0;
                if (ctx.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") >= 0) {
                    webGLVendor = ctx.getParameter(ctx.getExtension('WEBGL_debug_renderer_info').UNMASKED_VENDOR_WEBGL);
                    webGLRenderer = ctx.getParameter(ctx.getExtension('WEBGL_debug_renderer_info').UNMASKED_RENDERER_WEBGL);
                } else {
                    webGLVendor = "Not supported";
                    webGLRenderer = "Not supported";
                }
                return [webGLVendor, webGLRenderer];
            } catch (e) {
                return "Not supported;;;Not supported";
            }
        },
        multimediaDevices: function multimediaDevices() {
            return new Promise(function (resolve) {
                var deviceToCount = {
                    "audiooutput": 0,
                    "audioinput": 0,
                    "videoinput": 0
                };

                if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && navigator.mediaDevices.enumerateDevices.name !== "bound reportBlock") {
                    // bound reportBlock occurs with Brave
                    navigator.mediaDevices.enumerateDevices().then(function (devices) {
                        if (typeof devices !== "undefined") {
                            var name = void 0;
                            for (var i = 0; i < devices.length; i++) {
                                name = [devices[i].kind];
                                deviceToCount[name] = deviceToCount[name] + 1;
                            }
                            resolve({
                                speakers: deviceToCount.audiooutput,
                                micros: deviceToCount.audioinput,
                                webcams: deviceToCount.videoinput
                            });
                        } else {
                            resolve({
                                speakers: 0,
                                micros: 0,
                                webcams: 0
                            });
                        }
                    });
                } else if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && navigator.mediaDevices.enumerateDevices.name === "bound reportBlock") {
                    resolve({
                        'devicesBlockedByBrave': true
                    });
                } else {
                    resolve({
                        speakers: 0,
                        micros: 0,
                        webcams: 0
                    });
                }
            });
        },
        productSub: function productSub() {
            return navigator.productSub;
        },
        navigatorPrototype: function navigatorPrototype() {
            var obj = window.navigator;
            var protoNavigator = [];
            do {
                Object.getOwnPropertyNames(obj).forEach(function (name) {
                    protoNavigator.push(name);
                });
            } while (obj = Object.getPrototypeOf(obj));

            var res = void 0;
            var finalProto = [];
            protoNavigator.forEach(function (prop) {
                var objDesc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(navigator), prop);
                if (objDesc !== undefined) {
                    if (objDesc.value !== undefined) {
                        res = objDesc.value.toString();
                    } else if (objDesc.get !== undefined) {
                        res = objDesc.get.toString();
                    }
                } else {
                    res = "";
                }
                finalProto.push(prop + "~~~" + res);
            });
            return finalProto;
        },
        etsl: function etsl() {
            return eval.toString().length;
        },
        screenDesc: function screenDesc() {
            try {
                return Object.getOwnPropertyDescriptor(Object.getPrototypeOf(screen), "width").get.toString();
            } catch (e) {
                return ERROR;
            }
        },
        nightmareJS: function nightmareJS() {
            return !!window.__nightmare;
        },
        phantomJS: function phantomJS() {
            return ['callPhantom' in window, '_phantom' in window, 'phantom' in window];
        },
        selenium: function selenium() {
            return ['webdriver' in window, '_Selenium_IDE_Recorder' in window, 'callSelenium' in window, '_selenium' in window, '__webdriver_script_fn' in document, '__driver_evaluate' in document, '__webdriver_evaluate' in document, '__selenium_evaluate' in document, '__fxdriver_evaluate' in document, '__driver_unwrapped' in document, '__webdriver_unwrapped' in document, '__selenium_unwrapped' in document, '__fxdriver_unwrapped' in document, '__webdriver_script_func' in document, document.documentElement.getAttribute("selenium") !== null, document.documentElement.getAttribute("webdriver") !== null, document.documentElement.getAttribute("driver") !== null];
        },
        webDriver: function webDriver() {
            return 'webdriver' in navigator;
        },
        webDriverValue: function webDriverValue() {
            return navigator.webdriver;
        },
        errorsGenerated: function errorsGenerated() {
            var errors = [];
            try {
                azeaze + 3;
            } catch (e) {
                errors.push(e.message);
                errors.push(e.fileName);
                errors.push(e.lineNumber);
                errors.push(e.description);
                errors.push(e.number);
                errors.push(e.columnNumber);
                try {
                    errors.push(e.toSource().toString());
                } catch (e) {
                    errors.push(undefined);
                }
            }

            try {
                new WebSocket('itsgonnafail');
            } catch (e) {
                errors.push(e.message);
            }
            return errors;
        },
        resOverflow: function resOverflow() {
            var depth = 0;
            var errorMessage = '';
            var errorName = '';
            var errorStacklength = 0;

            function iWillBetrayYouWithMyLongName() {
                try {
                    depth++;
                    iWillBetrayYouWithMyLongName();
                } catch (e) {
                    errorMessage = e.message;
                    errorName = e.name;
                    errorStacklength = e.stack.toString().length;
                }
            }

            iWillBetrayYouWithMyLongName();
            return {
                depth: depth,
                errorMessage: errorMessage,
                errorName: errorName,
                errorStacklength: errorStacklength
            };
        },
        accelerometerUsed: function accelerometerUsed() {
            return new Promise(function (resolve) {
                window.ondevicemotion = function (event) {
                    if (event.accelerationIncludingGravity.x !== null) {
                        return resolve(true);
                    }
                };

                setTimeout(function () {
                    return resolve(false);
                }, 300);
            });
        },
        screenMediaQuery: function screenMediaQuery() {
            return window.matchMedia('(min-width: ' + (window.innerWidth - 1) + 'px)').matches;
        },
        hasChrome: function hasChrome() {
            return !!window.chrome;
        },
        detailChrome: function detailChrome() {
            if (!window.chrome) return UNKNOWN;

            var res = {};

            try {
                ["webstore", "runtime", "app", "csi", "loadTimes"].forEach(function (property) {
                    res[property] = window.chrome[property].constructor.toString().length;
                });
            } catch (e) {
                res.properties = UNKNOWN;
            }

            try {
                window.chrome.runtime.connect('');
            } catch (e) {
                res.connect = e.message.length;
            }
            try {
                window.chrome.runtime.sendMessage();
            } catch (e) {
                res.sendMessage = e.message.length;
            }

            return res;
        },
        permissions: function permissions() {
            return new Promise(function (resolve) {
                navigator.permissions.query({ name: 'notifications' }).then(function (val) {
                    resolve({
                        state: val.state,
                        permission: Notification.permission
                    });
                });
            });
        },
        iframeChrome: function iframeChrome() {
            var iframe = document.createElement('iframe');
            iframe.srcdoc = 'blank page';
            document.body.appendChild(iframe);

            var result = _typeof(iframe.contentWindow.chrome);
            iframe.remove();

            return result;
        },
        debugTool: function debugTool() {
            var cpt = 0;
            var regexp = /./;
            regexp.toString = function () {
                cpt++;
                return 'spooky';
            };
            console.debug(regexp);
            return cpt > 1;
        },
        battery: function battery() {
            return 'getBattery' in window.navigator;
        },
        deviceMemory: function deviceMemory() {
            return navigator.deviceMemory || 0;
        },
        tpCanvas: function tpCanvas() {
            return new Promise(function (resolve) {
                try {
                    var img = new Image();
                    var canvasCtx = document.createElement('canvas').getContext('2d');
                    img.onload = function () {
                        canvasCtx.drawImage(img, 0, 0);
                        resolve(canvasCtx.getImageData(0, 0, 1, 1).data);
                    };

                    img.onerror = function () {
                        resolve(ERROR);
                    };
                    img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=';
                } catch (e) {
                    resolve(ERROR);
                }
            });
        },
        sequentum: function sequentum() {
            return window.external && window.external.toString && window.external.toString().indexOf('Sequentum') > -1;
        },
        audioCodecs: function audioCodecs() {
            var audioElt = document.createElement("audio");

            if (audioElt.canPlayType) {
                return {
                    ogg: audioElt.canPlayType('audio/ogg; codecs="vorbis"'),
                    mp3: audioElt.canPlayType('audio/mpeg;'),
                    wav: audioElt.canPlayType('audio/wav; codecs="1"'),
                    m4a: audioElt.canPlayType('audio/x-m4a;'),
                    aac: audioElt.canPlayType('audio/aac;')
                };
            }
            return {
                ogg: UNKNOWN,
                mp3: UNKNOWN,
                wav: UNKNOWN,
                m4a: UNKNOWN,
                aac: UNKNOWN
            };
        },
        videoCodecs: function videoCodecs() {
            var videoElt = document.createElement("video");

            if (videoElt.canPlayType) {
                return {
                    ogg: videoElt.canPlayType('video/ogg; codecs="theora"'),
                    h264: videoElt.canPlayType('video/mp4; codecs="avc1.42E01E"'),
                    webm: videoElt.canPlayType('video/webm; codecs="vp8, vorbis"')
                };
            }
            return {
                ogg: UNKNOWN,
                h264: UNKNOWN,
                webm: UNKNOWN
            };
        }
    };

    var addCustomFunction = function addCustomFunction(name, isAsync, f) {
        DEFAULT_ATTRIBUTES[name] = isAsync;
        defaultAttributeToFunction[name] = f;
    };

    var generateFingerprint = function generateFingerprint() {
        return new Promise(function (resolve) {
            var promises = [];
            var fingerprint = {};
            Object.keys(DEFAULT_ATTRIBUTES).forEach(function (attribute) {
                fingerprint[attribute] = {};
                if (DEFAULT_ATTRIBUTES[attribute]) {
                    promises.push(new Promise(function (resolve) {
                        defaultAttributeToFunction[attribute]().then(function (val) {
                            fingerprint[attribute] = val;
                            return resolve();
                        }).catch(function (e) {
                            fingerprint[attribute] = {
                                error: true,
                                message: e.toString()
                            };
                            return resolve();
                        });
                    }));
                } else {
                    try {
                        fingerprint[attribute] = defaultAttributeToFunction[attribute]();
                    } catch (e) {
                        fingerprint[attribute] = {
                            error: true,
                            message: e.toString()
                        };
                    }
                }
            });
            return Promise.all(promises).then(function () {
                return resolve(fingerprint);
            });
        });
    };

    return {
        addCustomFunction: addCustomFunction,
        generateFingerprint: generateFingerprint
    };
}();

module.exports = fpCollect;

/***/ })
/******/ ]);