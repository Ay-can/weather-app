(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,':root {\n  --primary-clr: rgb(50, 52, 55);\n  --secondary-clr: rgb(226, 183, 20);\n  --blue-clr: rgb(0, 101, 116);\n  --green-clr: rgb(46, 156, 95);\n  --grey-clr: rgb(100, 102, 105);\n  --font-clr: rgb(255, 255, 255);\n}\n\nbody {\n  margin: 0 320px;\n  padding-bottom: 120px;\n  min-height: 100vh;\n  background-color: var(--primary-clr);\n\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n  color: var(--font-clr);\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n\n  box-sizing: border-box;\n}\n\nbody > * {\n  flex: 1;\n}\n\nh1,\nh3 {\n  margin: 0;\n}\n\nh2 {\n  padding: 4px 0px;\n}\n\n#weather-status {\n  font-size: 1.2rem;\n  font-weight: 800;\n  margin-top: 0;\n}\n\n#temperature {\n  font-weight: 800;\n  font-size: 4rem;\n  margin: 0;\n  align-self: center;\n}\n\n.current-weather-container {\n  display: grid;\n  grid-template-rows: 20% 2fr 1fr;\n\n  flex: 1;\n}\n\n.current-weather-location {\n  display: flex;\n  justify-content: center;\n}\n\n.temperature-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.weather-temperature {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n\n.weather-location {\n  text-align: center;\n}\n\nsvg {\n  width: 100px;\n  height: 100px;\n  fill: var(--secondary-clr);\n}\n\nform {\n  width: inherit;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: center;\n}\n\ninput {\n  margin: 16px;\n  width: 40%;\n  padding: 16px;\n  border-radius: 10px;\n  outline: none;\n  border: none;\n  background-color: var(--grey-clr);\n}\n\ninput:focus {\n  color: var(--secondary-clr);\n}\n\n::placeholder {\n  color: var(--font-clr);\n  font-weight: 800;\n}\n\n.weather-additional-info {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 16px;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 2px dashed var(--secondary-clr);\n  border-radius: 10px;\n  padding: 16px;\n}\n\n.info > * {\n  margin: 0;\n  padding: 0;\n  flex: 1;\n  font-weight: 800;\n}\n\n.forecast-hours-container {\n  width: 100%;\n  flex: 1;\n}\n\n.hours {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));\n  gap: 16px;\n}\n\n.hour {\n  padding: 16px;\n  border: 2px dashed var(--green-clr);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: 800;\n}\n\n.hour > * {\n  margin: 0;\n}\n\n.temperature-content {\n  display: flex;\n  justify-content: center;\n}\n\n.days {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n}\n\n#temperature-icon {\n  align-self: center;\n}\n\n.temperature-minmax-container {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n}\n\n.temperature-minmax-container > * {\n  font-weight: 800;\n  font-size: 1rem;\n}\n\n.days {\n  gap: 16px;\n}\n\n.day {\n  border: 2px dashed var(--blue-clr);\n  border-radius: 10px;\n  padding: 16px;\n  text-align: center;\n  font-weight: 800;\n}\n\n.change-temperature-buttons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n}\n\n.change-temperature-buttons > * {\n  padding: 6px 20px;\n  border: 2px dashed var(--green-clr);\n  background-color: var(--primary-clr);\n  color: var(--secondary-clr);\n}\n\n.change-temperature-buttons > *:hover {\n  cursor: pointer;\n  background-color: var(--blue-clr);\n}\n\n.change-temperature-buttons > *:active {\n  position: relative;\n  top: 4px;\n}\n',""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var u=e[c],s=r.base?u[0]+r.base:u[0],d=o[s]||0,l="".concat(s," ").concat(d);o[s]=d+1;var m=n(l),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==m)t[m].references++,t[m].updater(h);else{var f=a(h,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var u=r(e,a),s=0;s<o.length;s++){var d=n(o[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=u}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),i=n.n(o),c=n(659),u=n.n(c),s=n(56),d=n.n(s),l=n(540),m=n.n(l),h=n(113),f=n.n(h),p=n(208),g={};async function w(e){const t="https://api.weatherapi.com/v1/forecast.json?key=9502aa35a4e74be39f0170815242106&q=&days=3&aqi=no&alerts=no".replace("q=",`q=${e}`),n=await fetch(t,{mode:"cors"});return await n.json()}g.styleTagTransform=f(),g.setAttributes=d(),g.insert=u().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),a()(p.A,g),p.A&&p.A.locals&&p.A.locals;const y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function b(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const v={date:b({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:b({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:b({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},x={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function M(e){return(t,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,a=n?.width?String(n.width):t;r=e.formattingValues[a]||e.formattingValues[t]}else{const t=e.defaultWidth,a=n?.width?String(n.width):e.defaultWidth;r=e.values[a]||e.values[t]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const k={ordinalNumber:(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:M({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:M({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:M({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:M({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:M({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function S(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;const i=o[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(c)?function(e,t){for(let t=0;t<e.length;t++)if(e[t].test(i))return t}(c):function(e,t){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t].test(i))return t}(c);let s;return s=e.valueCallback?e.valueCallback(u):u,s=n.valueCallback?n.valueCallback(s):s,{value:s,rest:t.slice(i.length)}}}const C={ordinalNumber:(T={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)},(e,t={})=>{const n=e.match(T.matchPattern);if(!n)return null;const r=n[0],a=e.match(T.parsePattern);if(!a)return null;let o=T.valueCallback?T.valueCallback(a[0]):a[0];return o=t.valueCallback?t.valueCallback(o):o,{value:o,rest:e.slice(r.length)}}),era:S({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:S({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:S({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:S({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var T;const P={code:"en-US",formatDistance:(e,t,n)=>{let r;const a=y[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:v,formatRelative:(e,t,n,r)=>x[e],localize:k,match:C,options:{weekStartsOn:0,firstWeekContainsDate:1}};let D={};function E(){return D}Math.pow(10,8);const W=6048e5,q=864e5;function j(e){const t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):"number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?new Date(e):new Date(NaN)}function O(e){const t=j(e);return t.setHours(0,0,0,0),t}function N(e){const t=j(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Y(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function H(e){const t=j(e);return function(e,t){const n=O(e),r=O(t),a=+n-N(n),o=+r-N(r);return Math.round((a-o)/q)}(t,function(e){const t=j(e),n=Y(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}(t))+1}function F(e,t){const n=E(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=j(e),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function L(e){return F(e,{weekStartsOn:1})}function A(e){const t=j(e),n=t.getFullYear(),r=Y(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=L(r),o=Y(e,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=L(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function $(e){const t=j(e),n=+L(t)-+function(e){const t=A(e),n=Y(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),L(n)}(t);return Math.round(n/W)+1}function z(e,t){const n=j(e),r=n.getFullYear(),a=E(),o=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=Y(e,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const c=F(i,t),u=Y(e,0);u.setFullYear(r,0,o),u.setHours(0,0,0,0);const s=F(u,t);return n.getTime()>=c.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function Q(e,t){const n=j(e),r=+F(n,t)-+function(e,t){const n=E(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=z(e,t),o=Y(e,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),F(o,t)}(n,t);return Math.round(r/W)+1}function B(e,t){return(e<0?"-":"")+Math.abs(e).toString().padStart(t,"0")}const G={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return B("yy"===t?r%100:r,t.length)},M(e,t){const n=e.getMonth();return"M"===t?String(n+1):B(n+1,2)},d:(e,t)=>B(e.getDate(),t.length),a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(e,t)=>B(e.getHours()%12||12,t.length),H:(e,t)=>B(e.getHours(),t.length),m:(e,t)=>B(e.getMinutes(),t.length),s:(e,t)=>B(e.getSeconds(),t.length),S(e,t){const n=t.length,r=e.getMilliseconds();return B(Math.trunc(r*Math.pow(10,n-3)),t.length)}},I={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){const t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:"year"})}return G.y(e,t)},Y:function(e,t,n,r){const a=z(e,r),o=a>0?a:1-a;return"YY"===t?B(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):B(o,t.length)},R:function(e,t){return B(A(e),t.length)},u:function(e,t){return B(e.getFullYear(),t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return B(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return B(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return G.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return B(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=Q(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):B(a,t.length)},I:function(e,t,n){const r=$(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):B(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getDate(),{unit:"date"}):G.d(e,t)},D:function(e,t,n){const r=H(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):B(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return B(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return B(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return B(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){let t=e.getHours()%12;return 0===t&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return G.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getHours(),{unit:"hour"}):G.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):B(r,t.length)},k:function(e,t,n){let r=e.getHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):B(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):G.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getSeconds(),{unit:"second"}):G.s(e,t)},S:function(e,t){return G.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return _(r);case"XXXX":case"XX":return J(r);default:return J(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return _(r);case"xxxx":case"xx":return J(r);default:return J(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+X(r,":");default:return"GMT"+J(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+X(r,":");default:return"GMT"+J(r,":")}},t:function(e,t,n){return B(Math.trunc(e.getTime()/1e3),t.length)},T:function(e,t,n){return B(e.getTime(),t.length)}};function X(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+t+B(o,2)}function _(e,t){return e%60==0?(e>0?"-":"+")+B(Math.abs(e)/60,2):J(e,t)}function J(e,t=""){const n=e>0?"-":"+",r=Math.abs(e);return n+B(Math.trunc(r/60),2)+t+B(r%60,2)}const U=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},R=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},V={p:R,P:(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return U(e,t);let o;switch(r){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;default:o=t.dateTime({width:"full"})}return o.replace("{{date}}",U(r,t)).replace("{{time}}",R(a,t))}},K=/^D+$/,Z=/^Y+$/,ee=["D","DD","YY","YYYY"];function te(e){if(!(t=e,t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)||"number"==typeof e))return!1;var t;const n=j(e);return!isNaN(Number(n))}const ne=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,re=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ae=/^'([^]*?)'?$/,oe=/''/g,ie=/[a-zA-Z]/;function ce(e,t,n){const r=E(),a=n?.locale??r.locale??P,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=j(e);if(!te(c))throw new RangeError("Invalid time value");let u=t.match(re).map((e=>{const t=e[0];return"p"===t||"P"===t?(0,V[t])(e,a.formatLong):e})).join("").match(ne).map((e=>{if("''"===e)return{isToken:!1,value:"'"};const t=e[0];if("'"===t)return{isToken:!1,value:ue(e)};if(I[t])return{isToken:!0,value:e};if(t.match(ie))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}}));a.localize.preprocessor&&(u=a.localize.preprocessor(c,u));const s={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return u.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(e){return Z.test(e)}(o)||!n?.useAdditionalDayOfYearTokens&&function(e){return K.test(e)}(o))&&function(e,t,n){const r=function(e,t,n){const r="Y"===e[0]?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(e,t,n);if(console.warn(r),ee.includes(e))throw new RangeError(r)}(o,t,String(e)),(0,I[o[0]])(c,o,a.localize,s)})).join("")}function ue(e){const t=e.match(ae);return t?t[1].replace(oe,"'"):e}const se=n.p+"6e550cbcdbcf6295d262.png",de=n.p+"bfea0e9337aee0c74b9f.png",le=n.p+"fc188cea8761d408360a.png",me=document.querySelector(".weather-location"),he=document.querySelector(".temperature-container"),fe=document.querySelector(".temperature-minmax-container"),pe=document.querySelector(".weather-additional-info"),ge=document.querySelector(".hours"),we=document.querySelector(".days");function ye(e,t,n,r=""){const a=document.createElement("div"),o=document.createElement("p"),i=document.createElement("p"),c=new Image(45,45);return a.classList.add("info"),c.classList.add("logo"),o.innerText=e,i.innerText=`${t} ${r}`,c.src=n,a.appendChild(c),a.appendChild(o),a.appendChild(i),a}function be(){me.replaceChildren(),pe.replaceChildren(),ge.replaceChildren(),we.replaceChildren(),he.replaceChildren(),fe.replaceChildren()}function ve(e,t){!function(e){const t=document.createElement("h1"),n=document.createElement("h3");t.innerText=e.location.name,n.innerText=e.location.country,me.appendChild(t),me.appendChild(n)}(e),function(e,t){he.replaceChildren();const n=document.createElement("p"),r=new Image(80,80);n.id="temperature",r.id="temperature-icon",n.innerText=t?`${e.current.temp_c}℃`:`${e.current.temp_f}℉`,r.src=e.current.condition.icon,he.appendChild(r),he.appendChild(n)}(e,t),function(e,t){fe.replaceChildren();const n=document.createElement("p"),r=document.createElement("p");let a=t?e.forecast.forecastday[0].day.mintemp_c:e.forecast.forecastday[0].day.mintemp_f,o=t?e.forecast.forecastday[0].day.maxtemp_c:e.forecast.forecastday[0].day.maxtemp_f;n.innerText=t?`Min: ${a}℃`:`Min: ${a}℉`,r.innerText=t?`Max: ${o}℃`:`Max: ${o}℉`,fe.appendChild(n),fe.appendChild(r),he.appendChild(fe)}(e,t),function(e,t){const n=t?"km/h":"mp/h",r=ye("UV",e.current.uv,se),a=ye("Wind",e.current.wind_kph,de,n),o=ye("Humidity",e.current.humidity,le,"%");pe.appendChild(r),pe.appendChild(a),pe.appendChild(o)}(e,t),function(e,t){const n=function(e){const t=new Date(e.location.localtime).getHours(),n=e.forecast.forecastday[0].hour,r=[];for(let e=0;e<7;e++)r.push(n[(t+e)%24]);return r}(e);n.forEach((e=>{const n=document.createElement("div"),r=new Image(45,45),a=document.createElement("p"),o=document.createElement("p"),i=ce(new Date(e.time),"p");n.classList.add("hour"),r.src=e.condition.icon,a.innerText=i,o.innerText=t?`${e.temp_c}℃`:`${e.temp_f}℉`,n.appendChild(r),n.appendChild(a),n.appendChild(o),ge.appendChild(n)}))}(e,t),function(e,t){e.forecast.forecastday.forEach((e=>{const n=document.createElement("div"),r=new Image(40,40),a=document.createElement("p"),o=document.createElement("p"),i=document.createElement("p");n.classList.add("day"),r.src=e.day.condition.icon,a.innerText=ce(new Date(e.date),"PPPP"),o.innerText=t?`Min: ${e.day.mintemp_c}℃`:`Min: ${e.day.mintemp_f}℉`,i.innerText=t?`Max: ${e.day.maxtemp_c}℃`:`Max: ${e.day.maxtemp_f}℉`,n.appendChild(r),n.appendChild(a),n.appendChild(o),n.appendChild(i),we.appendChild(n)}))}(e,t)}const xe=document.querySelector("form"),Me=document.querySelector("#celcius"),ke=document.querySelector("#fahrenheit"),Se=document.querySelector("input");let Ce;xe.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),be(),w(Se.value).then((e=>{ve(e,!0),Ce=e})))})),Me.addEventListener("click",(()=>{be(),ve(Ce,!0)})),ke.addEventListener("click",(()=>{be(),ve(Ce,!1)})),w("amsterdam").then((e=>{ve(e,!0),Ce=e}))})();