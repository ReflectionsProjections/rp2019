(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1059:function(e,i,n){__NEXT_REGISTER_PAGE("/startup_fair",function(){return e.exports=n(1060),{page:e.exports.default}})},1060:function(e,i,n){"use strict";n.r(i);var r=n(0),s=n.n(r),t=n(424),o=n(127);i.default=function(){return s.a.createElement(o.a,{filepath:t.isMobile?"/static/startup-fair-map.jpg":"/static/startup-fair-map.pdf"})}},127:function(e,i,n){"use strict";var r=n(0);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function t(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,i){return!i||"object"!==s(i)&&"function"!=typeof i?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):i}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,i){return(l=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}var d=function(e){function i(){return function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,i),o(this,a(i).apply(this,arguments))}var n,s,d;return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&l(e,i)}(i,r["Component"]),n=i,(s=[{key:"componentDidMount",value:function(){var e=this.props.filepath;window.location=e}},{key:"render",value:function(){return null}}])&&t(n.prototype,s),d&&t(n,d),i}();i.a=d},424:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r,s=n(0),t=(r=s)&&"object"==typeof r&&"default"in r?r.default:r,o=new(n(551)),a=o.getBrowser(),l=(o.getCPU(),o.getDevice()),d=o.getEngine(),u=o.getOS(),c=o.getUA(),w=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i};function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function b(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,i){return(h=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y="mobile",E="tablet",O="smarttv",k="console",x="wearable",N=void 0,S="Chrome",T="Firefox",C="Opera",V="Yandex",A="Safari",_="Internet Explorer",P="Edge",j="Chromium",M="IE",F="Mobile Safari",L="iOS",B="Android",z="Windows Phone",W={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},R=function(e,i,n,r,s){return{isBrowser:e,browserMajorVersion:w(i.major),browserFullVersion:w(i.version),browserName:w(i.name),engineName:w(n.name),engineVersion:w(n.version),osName:w(r.name),osVersion:w(r.version),userAgent:w(s)}},D=function(e,i,n,r){return function(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?b(n,!0).forEach(function(i){p(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}({},e,{vendor:w(i.vendor),model:w(i.model),os:w(n.name),osVersion:w(n.version),ua:w(r)})},I=function(e,i,n,r){return{isSmartTV:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(r)}},U=function(e,i,n,r){return{isConsole:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(r)}},G=function(e,i,n,r){return{isWearable:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(r)}},q=function(e){switch(e){case y:return{isMobile:!0};case E:return{isTablet:!0};case O:return{isSmartTV:!0};case k:return{isConsole:!0};case x:return{isWearable:!0};case N:return{isBrowser:!0};default:return W}}(l.type);var H=l.type===O,X=l.type===k,Q=l.type===x,Y=a.name===F,$=a.name===j,K=function(){switch(l.type){case y:case E:return!0;default:return!1}}(),Z=l.type===y,J=l.type===E,ee=l.type===N,ie=u.name===B,ne=u.name===z,re=u.name===L,se=a.name===S,te=a.name===T,oe=a.name===A||a.name===F,ae=a.name===C,le=a.name===_||a.name===M,de=w(u.version),ue=w(u.name),ce=w(a.version),we=w(a.major),me=w(a.name),fe=w(l.vendor),pe=w(l.model),be=w(d.name),ve=w(d.version),he=w(c),ge=a.name===P,ye=a.name===V,Ee=w(l.type,"");i.AndroidView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,o=e.style;return ie?i?t.createElement(s.Fragment,null,n):t.createElement("div",{className:r,style:o},n):null},i.BrowserView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,o=e.style;return ee?i?t.createElement(s.Fragment,null,n):t.createElement("div",{className:r,style:o},n):null},i.ConsoleView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,o=e.style;return X?i?t.createElement(s.Fragment,null,n):t.createElement("div",{className:r,style:o},n):null},i.CustomView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,o=e.style;return e.condition?i?t.createElement(s.Fragment,null,n):t.createElement("div",{className:r,style:o},n):null},i.IEView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,o=e.style;return le?i?t.createElement(s.Fragment,null,n):t.createElement("div",{className:r,style:o},n):null},i.IOSView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,o=e.style;return re?i?t.createElement(s.Fragment,null,n):t.createElement("div",{className:r,style:o},n):null},i.MobileOnlyView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,o=e.style;return Z?i?t.createElement(s.Fragment,null,n):t.createElement("div",{className:r,style:o},n):null},i.MobileView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,o=e.style;return K?i?t.createElement(s.Fragment,null,n):t.createElement("div",{className:r,style:o},n):null},i.SmartTVView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,o=e.style;return H?i?t.createElement(s.Fragment,null,n):t.createElement("div",{className:r,style:o},n):null},i.TabletView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,o=e.style;return J?i?t.createElement(s.Fragment,null,n):t.createElement("div",{className:r,style:o},n):null},i.WearableView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,o=e.style;return Q?i?t.createElement(s.Fragment,null,n):t.createElement("div",{className:r,style:o},n):null},i.WinPhoneView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,o=e.style;return ne?i?t.createElement(s.Fragment,null,n):t.createElement("div",{className:r,style:o},n):null},i.browserName=me,i.browserVersion=we,i.deviceDetect=function(){var e=q.isBrowser,i=q.isMobile,n=q.isTablet,r=q.isSmartTV,s=q.isConsole,t=q.isWearable;return e?R(e,a,d,u,c):r?I(r,d,u,c):s?U(s,d,u,c):i?D(q,l,u,c):n?D(q,l,u,c):t?G(t,d,u,c):void 0},i.deviceType=Ee,i.engineName=be,i.engineVersion=ve,i.fullBrowserVersion=ce,i.getUA=he,i.isAndroid=ie,i.isBrowser=ee,i.isChrome=se,i.isChromium=$,i.isConsole=X,i.isEdge=ge,i.isFirefox=te,i.isIE=le,i.isIOS=re,i.isMobile=K,i.isMobileOnly=Z,i.isMobileSafari=Y,i.isOpera=ae,i.isSafari=oe,i.isSmartTV=H,i.isTablet=J,i.isWearable=Q,i.isWinPhone=ne,i.isYandex=ye,i.mobileModel=pe,i.mobileVendor=fe,i.osName=ue,i.osVersion=de,i.withOrientationChange=function(e){return function(i){function n(e){var i,r,s;return function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,(i=!(s=v(n).call(this,e))||"object"!=typeof s&&"function"!=typeof s?g(r):s).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(g(i)),i.onOrientationChange=i.onOrientationChange.bind(g(i)),i.onPageLoad=i.onPageLoad.bind(g(i)),i.state={isLandscape:!1,isPortrait:!1},i}var r,s,o;return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&h(e,i)}(n,t.Component),r=n,(s=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"==typeof window?"undefined":m(window))&&K&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return t.createElement(e,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait})}}])&&f(r.prototype,s),o&&f(r,o),n}()}},551:function(e,i,n){var r;
/*!
 * UAParser.js v0.7.20
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
/*!
 * UAParser.js v0.7.20
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
!function(s,t){"use strict";var o="model",a="name",l="type",d="vendor",u="version",c="mobile",w="tablet",m={extend:function(e,i){var n={};for(var r in e)i[r]&&i[r].length%2==0?n[r]=i[r].concat(e[r]):n[r]=e[r];return n},has:function(e,i){return"string"==typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},f={rgx:function(e,i){for(var n,r,s,t,o,a,l=0;l<i.length&&!o;){var d=i[l],u=i[l+1];for(n=r=0;n<d.length&&!o;)if(o=d[n++].exec(e))for(s=0;s<u.length;s++)a=o[++r],"object"==typeof(t=u[s])&&t.length>0?2==t.length?"function"==typeof t[1]?this[t[0]]=t[1].call(this,a):this[t[0]]=t[1]:3==t.length?"function"!=typeof t[1]||t[1].exec&&t[1].test?this[t[0]]=a?a.replace(t[1],t[2]):void 0:this[t[0]]=a?t[1].call(this,a,t[2]):void 0:4==t.length&&(this[t[0]]=a?t[3].call(this,a.replace(t[1],t[2])):void 0):this[t]=a||void 0;l+=2}},str:function(e,i){for(var n in i)if("object"==typeof i[n]&&i[n].length>0){for(var r=0;r<i[n].length;r++)if(m.has(i[n][r],e))return"?"===n?void 0:n}else if(m.has(i[n],e))return"?"===n?void 0:n;return e}},p={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},b={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,u],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],u],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],u],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[a,u],[/(konqueror)\/([\w\.]+)/i],[[a,"Konqueror"],u],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],u],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],u],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],u],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],u],[/(focus)\/([\w\.]+)/i],[[a,"Firefox Focus"],u],[/(opt)\/([\w\.]+)/i],[[a,"Opera Touch"],u],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],u],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],u],[/(windowswechat qbcore)\/([\w\.]+)/i],[[a,"WeChat(Win) Desktop"],u],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],u],[/(brave)\/([\w\.]+)/i],[[a,"Brave"],u],[/(qqbrowserlite)\/([\w\.]+)/i],[a,u],[/(QQ)\/([\d\.]+)/i],[a,u],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,u],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[a,u],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,u],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[u,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[u,[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[a,u],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[u,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],u],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],u],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[u,[a,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[a,"Sailfish Browser"],u],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,u],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],u],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],u],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],u],[/fxios\/([\w\.-]+)/i],[u,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[u,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[u,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[u,f.str,p.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[a,u],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],u],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",m.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",m.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",m.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[o,d,[l,w]],[/applecoremedia\/[\w\.]+ \((ipad)/],[o,[d,"Apple"],[l,w]],[/(apple\s{0,1}tv)/i],[[o,"Apple TV"],[d,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[d,o,[l,w]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[o,[d,"Amazon"],[l,w]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[o,f.str,p.device.amazon.model],[d,"Amazon"],[l,c]],[/android.+aft([bms])\sbuild/i],[o,[d,"Amazon"],[l,"smarttv"]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[o,d,[l,c]],[/\((ip[honed|\s\w*]+);/i],[o,[d,"Apple"],[l,c]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[d,o,[l,c]],[/\(bb10;\s(\w+)/i],[o,[d,"BlackBerry"],[l,c]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[o,[d,"Asus"],[l,w]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[d,"Sony"],[o,"Xperia Tablet"],[l,w]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[o,[d,"Sony"],[l,c]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[d,o,[l,"console"]],[/android.+;\s(shield)\sbuild/i],[o,[d,"Nvidia"],[l,"console"]],[/(playstation\s[34portablevi]+)/i],[o,[d,"Sony"],[l,"console"]],[/(sprint\s(\w+))/i],[[d,f.str,p.device.sprint.vendor],[o,f.str,p.device.sprint.model],[l,c]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[d,[o,/_/g," "],[l,c]],[/(nexus\s9)/i],[o,[d,"HTC"],[l,w]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[o,[d,"Huawei"],[l,c]],[/(microsoft);\s(lumia[\s\w]+)/i],[d,o,[l,c]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[o,[d,"Microsoft"],[l,"console"]],[/(kin\.[onetw]{3})/i],[[o,/\./g," "],[d,"Microsoft"],[l,c]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[o,[d,"Motorola"],[l,c]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[o,[d,"Motorola"],[l,w]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[d,m.trim],[o,m.trim],[l,"smarttv"]],[/hbbtv.+maple;(\d+)/i],[[o,/^/,"SmartTV"],[d,"Samsung"],[l,"smarttv"]],[/\(dtv[\);].+(aquos)/i],[o,[d,"Sharp"],[l,"smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[d,"Samsung"],o,[l,w]],[/smart-tv.+(samsung)/i],[d,[l,"smarttv"],o],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[d,"Samsung"],o,[l,c]],[/sie-(\w*)/i],[o,[d,"Siemens"],[l,c]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[d,"Nokia"],o,[l,c]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[o,[d,"Acer"],[l,w]],[/android.+([vl]k\-?\d{3})\s+build/i],[o,[d,"LG"],[l,w]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[d,"LG"],o,[l,w]],[/(lg) netcast\.tv/i],[d,o,[l,"smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[o,[d,"LG"],[l,c]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[d,o,[l,w]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[o,[d,"Lenovo"],[l,w]],[/(lenovo)[_\s-]?([\w-]+)/i],[d,o,[l,c]],[/linux;.+((jolla));/i],[d,o,[l,c]],[/((pebble))app\/[\d\.]+\s/i],[d,o,[l,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[d,o,[l,c]],[/crkey/i],[[o,"Chromecast"],[d,"Google"]],[/android.+;\s(glass)\s\d/i],[o,[d,"Google"],[l,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[o,[d,"Google"],[l,w]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[o,[d,"Google"],[l,c]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[o,/_/g," "],[d,"Xiaomi"],[l,c]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[o,/_/g," "],[d,"Xiaomi"],[l,w]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[o,[d,"Meizu"],[l,c]],[/(mz)-([\w-]{2,})/i],[[d,"Meizu"],o,[l,c]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[o,[d,"OnePlus"],[l,c]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[o,[d,"RCA"],[l,w]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[o,[d,"Dell"],[l,w]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[o,[d,"Verizon"],[l,w]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[d,"Barnes & Noble"],o,[l,w]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[o,[d,"NuVision"],[l,w]],[/android.+;\s(k88)\sbuild/i],[o,[d,"ZTE"],[l,w]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[o,[d,"Swiss"],[l,c]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[o,[d,"Swiss"],[l,w]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[o,[d,"Zeki"],[l,w]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[d,"Dragon Touch"],o,[l,w]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[o,[d,"Insignia"],[l,w]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[o,[d,"NextBook"],[l,w]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[d,"Voice"],o,[l,c]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[d,"LvTel"],o,[l,c]],[/android.+;\s(PH-1)\s/i],[o,[d,"Essential"],[l,c]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[o,[d,"Envizen"],[l,w]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[d,o,[l,w]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[o,[d,"MachSpeed"],[l,w]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[d,o,[l,w]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[o,[d,"Rotor"],[l,w]],[/android.+(KS(.+))\s+build/i],[o,[d,"Amazon"],[l,w]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[d,o,[l,w]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[l,m.lowerize],d,o],[/[\s\/\(](smart-?tv)[;\)]/i],[[l,"smarttv"]],[/(android[\w\.\s\-]{0,9});.+build/i],[o,[d,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[u,[a,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)/i],[[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,u],[/rv\:([\w\.]{1,9}).+(gecko)/i],[u,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,u],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[u,f.str,p.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[u,f.str,p.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],u],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[a,u],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],u],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],u],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,u],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],u],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],u],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,u],[/(haiku)\s(\w+)/i],[a,u],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[u,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[u,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,u]]},v=function(e,i){if("object"==typeof e&&(i=e,e=void 0),!(this instanceof v))return new v(e,i).getResult();var n=e||(s&&s.navigator&&s.navigator.userAgent?s.navigator.userAgent:""),r=i?m.extend(b,i):b;return this.getBrowser=function(){var e={name:void 0,version:void 0};return f.rgx.call(e,n,r.browser),e.major=m.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return f.rgx.call(e,n,r.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return f.rgx.call(e,n,r.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return f.rgx.call(e,n,r.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return f.rgx.call(e,n,r.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};v.VERSION="0.7.20",v.BROWSER={NAME:a,MAJOR:"major",VERSION:u},v.CPU={ARCHITECTURE:"architecture"},v.DEVICE={MODEL:o,VENDOR:d,TYPE:l,CONSOLE:"console",MOBILE:c,SMARTTV:"smarttv",TABLET:w,WEARABLE:"wearable",EMBEDDED:"embedded"},v.ENGINE={NAME:a,VERSION:u},v.OS={NAME:a,VERSION:u},void 0!==i?(void 0!==e&&e.exports&&(i=e.exports=v),i.UAParser=v):void 0===(r=function(){return v}.call(i,n,i,e))||(e.exports=r);var h=s&&(s.jQuery||s.Zepto);if(void 0!==h&&!h.ua){var g=new v;h.ua=g.getResult(),h.ua.get=function(){return g.getUA()},h.ua.set=function(e){g.setUA(e);var i=g.getResult();for(var n in i)h.ua[n]=i[n]}}}("object"==typeof window?window:this)}},[[1059,0,1]]]);