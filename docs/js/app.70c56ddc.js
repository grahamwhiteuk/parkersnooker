(function(e){function t(t){for(var a,r,s=t[0],i=t[1],l=t[2],u=0,h=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&h.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ea50f372"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"07a44037"}[e]+".css",c=i.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===c))return t()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){l=h[s],u=l.getAttribute("data-href");if(u===a||u===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],d.parentNode.removeChild(d),n(o)},d.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var h=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",h.name="ChunkLoadError",h.type=a,h.request=r,n[1](h)}c[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"053b":function(e,t,n){"use strict";var a=n("7a23"),r=function(e){return Object(a["x"])("data-v-eadf2b1a"),e=e(),Object(a["v"])(),e},c={id:"ps-fixtures-results"},o={class:"panel"},s=r((function(){return Object(a["h"])("div",{class:"panel-heading"}," Fixtures and Results ",-1)})),i={class:"panel-body"},l={class:"striped"},u=["innerHTML"];function h(e,t,n,r,h,d){return Object(a["u"])(),Object(a["g"])("div",c,[Object(a["h"])("div",o,[s,Object(a["J"])(Object(a["h"])("div",i,[Object(a["h"])("table",l,[Object(a["h"])("tbody",null,[(Object(a["u"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(e.storeState.csv[n.year],(function(e){return Object(a["u"])(),Object(a["g"])("tr",{key:e},[Object(a["h"])("td",null,Object(a["E"])(e[1])+" "+Object(a["E"])(e[2]),1),Object(a["h"])("td",null,Object(a["E"])(e[3]),1),Object(a["h"])("td",null,Object(a["E"])(e[4])+"-"+Object(a["E"])(e[5]),1),Object(a["h"])("td",null,Object(a["E"])(e[6]),1)])})),128))])])],512),[[a["G"],e.storeState.groups[n.year]]]),Object(a["J"])(Object(a["h"])("div",{innerHTML:d.message,class:"panel-body"},null,8,u),[[a["G"],!e.storeState.groups[n.year]]])])])}n("99af"),n("d3b7"),n("ddb0"),n("4e82"),n("b0c0");var d=n("4360"),f={name:"FixturesResults",props:{year:{type:String,default:function(){return d["a"].getCurrentTournament()}}},data:function(){return{storeState:d["a"].state}},computed:{message:function(){if(d["a"].state.csv[this.year]&&d["a"].state.csv[this.year].error){var e="Something went wrong, if this keeps happening please let Graham know<br />Error: ".concat(d["a"].state.csv[this.year].error.status);return d["a"].state.csv[this.year].error.statusText&&""!==d["a"].state.csv[this.year].error.statusText?"".concat(e,", ").concat(d["a"].state.csv[this.year].error.statusText):e}return"Loading..."}},created:function(){d["a"].csvIsSet(this.year)||this.getCSVArray()},methods:{getCSVArray:function(){var e=this,t=d["a"].getSheetUrl(this.year);document.body.style.cursor="wait",fetch(t).then((function(t){t.ok?t.json().then((function(t){var n=t.values;n.shift(),e.csvToLeagueTable(n),d["a"].setCSV(e.year,n),document.body.style.cursor="default"})):(d["a"].setCSV(e.year,{error:{status:t.status,statusText:t.statusText}}),document.body.style.cursor="default")}))},csvToLeagueTable:function(e){for(var t={},n=[],a={name:"",group:"A",matchesPlayed:0,matchesWon:0,matchesLost:0,framesWon:0,framesLost:0,highBreak:0,results:[]},r=0;r<e.length;r++){var c=e[r][0];if(""!==c){var o=e[r][3],s=parseInt(e[r][4])||0,i=parseInt(e[r][5])||0,l=e[r][6],u=parseInt(e[r][7])||0,h=parseInt(e[r][8])||0;Object.prototype.hasOwnProperty.call(t,o)||(t[o]={},Object.assign(t[o],a)),-1===n.indexOf(c)&&(n.push(c),n.sort()),t[o].name=o,t[o].group=c,s+i>0&&(t[o].matchesPlayed+=1),s>i?t[o].matchesWon+=1:i>s&&(t[o].matchesLost+=1),t[o].framesWon+=s,t[o].framesLost+=i,u>t[o].highBreak&&(t[o].highBreak=u),t[o].results.push(e[r]),Object.prototype.hasOwnProperty.call(t,l)||(t[l]={},Object.assign(t[l],a)),-1===n.indexOf(c)&&(n.push(c),n.sort()),t[l].name=l,t[l].group=c,s+i>0&&(t[l].matchesPlayed+=1),s>i?t[l].matchesLost+=1:i>s&&(t[l].matchesWon+=1),t[l].framesLost+=s,t[l].framesWon+=i,h>t[l].highBreak&&(t[l].highBreak=h),t[l].results.push(e[r])}}var f=[];for(var b in t)f.push(t[b]);var p=this.multisort(f,["matchesWon","framesWon","highBreak"],["DESC","DESC","DESC"],this.tie_breaker);d["a"].setLeagueTable(this.year,p),d["a"].setGroups(this.year,n)},multisort:function(e,t,n,a){if("undefined"===typeof t){t=[];for(var r=0;r<e[0].length;r++)t.push(r)}if("undefined"===typeof n){n=[];for(var c=0;c<e[0].length;c++)n.push("ASC")}function o(e,t,n,r,c){var s="DESC"===r[c]?1:0,i=!isNaN(+e[n[c]]-+t[n[c]]),l=i?+e[n[c]]:e[n[c]].toLowerCase(),u=i?+t[n[c]]:t[n[c]].toLowerCase();return l<u?0===s?-1:1:l===u?n.length-1>c?o(e,t,n,r,c+1):a(e,t):0===s?1:-1}return e.sort((function(e,a){return o(e,a,t,n,0)}))},tieBreaker:function(e,t){for(var n in e.results)if(e.results[n][3]===t.name||e.results[n][6]===t.name){var a=0,r=0;return e.results[n][3]===t.name?(a=e.results[n][4],r=e.results[n][5]):(a=e.results[n][5],r=e.results[n][4]),a>r?1:-1}return 0}}},b=(n("fbf8"),n("6b0d")),p=n.n(b);const g=p()(f,[["render",h],["__scopeId","data-v-eadf2b1a"]]);t["a"]=g},2113:function(e,t,n){"use strict";n("b0c0");var a=n("7a23"),r=function(e){return Object(a["x"])("data-v-ecbf5faa"),e=e(),Object(a["v"])(),e},c={id:"ps-group-stages"},o={class:"panel"},s=r((function(){return Object(a["h"])("div",{class:"panel-heading"}," Group Stages ",-1)})),i={class:"panel-body"},l={class:"panel-title"},u={class:"striped bordered"},h=r((function(){return Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",{rowspan:"2"},"Player"),Object(a["h"])("th",{colspan:"3"},"Matches"),Object(a["h"])("th",{colspan:"2"},"Frames"),Object(a["h"])("th",{rowspan:"2"},"High Break")]),Object(a["h"])("tr",null,[Object(a["h"])("th",null,"P"),Object(a["h"])("th",null,"W"),Object(a["h"])("th",null,"L"),Object(a["h"])("th",null,"W"),Object(a["h"])("th",null,"L")])],-1)})),d=r((function(){return Object(a["h"])("div",{class:"small"},[Object(a["j"])(" Group stages are ordered by: "),Object(a["h"])("ol",null,[Object(a["h"])("li",null,"matches won"),Object(a["h"])("li",null,"frames won"),Object(a["h"])("li",null,"highest break"),Object(a["h"])("li",null,"head to head result")])],-1)})),f=["innerHTML"];function b(e,t,n,r,b,p){return Object(a["u"])(),Object(a["g"])("div",c,[Object(a["h"])("div",o,[s,Object(a["J"])(Object(a["h"])("div",i,[(Object(a["u"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(e.storeState.groups[n.year],(function(e){return Object(a["u"])(),Object(a["g"])("div",{key:e},[Object(a["h"])("div",l,"Group "+Object(a["E"])(e),1),Object(a["h"])("table",u,[h,Object(a["h"])("tbody",null,[(Object(a["u"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(p.rowInGroup(e),(function(e){return Object(a["u"])(),Object(a["g"])("tr",{key:e},[Object(a["h"])("td",null,Object(a["E"])(e.name),1),Object(a["h"])("td",null,Object(a["E"])(e.matchesPlayed),1),Object(a["h"])("td",null,Object(a["E"])(e.matchesWon),1),Object(a["h"])("td",null,Object(a["E"])(e.matchesLost),1),Object(a["h"])("td",null,Object(a["E"])(e.framesWon),1),Object(a["h"])("td",null,Object(a["E"])(e.framesLost),1),Object(a["h"])("td",null,Object(a["E"])(e.highBreak),1)])})),128))])])])})),128)),d],512),[[a["G"],e.storeState.groups[n.year]]]),Object(a["J"])(Object(a["h"])("div",{innerHTML:p.message,class:"panel-body"},null,8,f),[[a["G"],!e.storeState.groups[n.year]]])])])}n("99af"),n("4de4");var p=n("4360"),g={name:"GroupStages",props:{year:{type:String,default:function(){return p["a"].state.currentYear}}},data:function(){return{storeState:p["a"].state}},computed:{message:function(){if(p["a"].state.csv[this.year]&&p["a"].state.csv[this.year].error){var e="Something went wrong, if this keeps happening please let Graham know<br />Error: ".concat(p["a"].state.csv[this.year].error.status);return p["a"].state.csv[this.year].error.statusText&&""!==p["a"].state.csv[this.year].error.statusText?"".concat(e,", ").concat(p["a"].state.csv[this.year].error.statusText):e}return"Loading..."}},methods:{rowInGroup:function(e){return p["a"].state.leagueTable[this.year]?p["a"].state.leagueTable[this.year].filter((function(t){if(t.group===e)return t})):[]}}},v=(n("651b"),n("6b0d")),m=n.n(v);const O=m()(g,[["render",b],["__scopeId","data-v-ecbf5faa"]]);t["a"]=O},"24a4":function(e,t,n){},3693:function(e,t,n){"use strict";var a=n("7a23"),r=function(e){return Object(a["x"])("data-v-3c6a2493"),e=e(),Object(a["v"])(),e},c={class:"panel"},o=r((function(){return Object(a["h"])("div",{class:"panel-heading"}," Photos ",-1)})),s={class:"panel-body"},i={class:"flex-container"},l=["src","alt","title","onClick"],u={class:"fullSizeImage"},h=["src"],d=r((function(){return Object(a["h"])("div",{class:"exitOverlay"},[Object(a["h"])("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},[Object(a["h"])("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})])],-1)})),f=r((function(){return Object(a["h"])("svg",{width:"36px",height:"36px",viewBox:"0 0 24 24"},[Object(a["h"])("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})],-1)})),b=[f],p=r((function(){return Object(a["h"])("svg",{width:"36px",height:"36px",viewBox:"0 0 24 24"},[Object(a["h"])("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"})],-1)})),g=[p];function v(e,t,n,r,f,p){var v=Object(a["C"])("touch");return Object(a["J"])((Object(a["u"])(),Object(a["g"])("div",c,[o,Object(a["h"])("div",s,[Object(a["h"])("div",i,[(Object(a["u"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(f.IMGs,(function(e,t){return Object(a["u"])(),Object(a["g"])("div",{key:t},[Object(a["h"])("img",{class:"thumbnail",src:e.url_s,alt:e.title,title:e.title,height:"135",onClick:function(e){return p.thumbClick(t)}},null,8,l)])})),128))])]),Object(a["k"])(a["b"],{name:"fade"},{default:Object(a["I"])((function(){return[f.carouselShowing?(Object(a["u"])(),Object(a["g"])("div",{key:0,onClick:t[3]||(t[3]=function(){return p.overlayClick&&p.overlayClick.apply(p,arguments)}),ref:"overlay",class:"ps-click-overlay",onKeydown:[t[4]||(t[4]=Object(a["K"])((function(){return p.overlayClick&&p.overlayClick.apply(p,arguments)}),["esc"])),t[5]||(t[5]=Object(a["K"])((function(){return p.leftArrowClick&&p.leftArrowClick.apply(p,arguments)}),["left"])),t[6]||(t[6]=Object(a["K"])((function(){return p.rightArrowClick&&p.rightArrowClick.apply(p,arguments)}),["right"]))],tabindex:"0"},[Object(a["h"])("div",u,[Object(a["k"])(a["b"],{name:"fadefast",mode:"out-in"},{default:Object(a["I"])((function(){return[Object(a["J"])((Object(a["u"])(),Object(a["g"])("img",{src:f.fullSizeImageSrc,key:f.fullSizeImageSrc,onClick:t[0]||(t[0]=Object(a["L"])((function(){}),["stop"]))},null,8,h)),[[v,p.leftArrowClick,"swipe",{left:!0}],[v,p.rightArrowClick,"swipe",{right:!0}]])]})),_:1})]),d,Object(a["h"])("div",{onClick:t[1]||(t[1]=Object(a["L"])((function(){return p.leftArrowClick&&p.leftArrowClick.apply(p,arguments)}),["stop"])),class:"arrowSwitcherLeft"},b),Object(a["h"])("div",{onClick:t[2]||(t[2]=Object(a["L"])((function(){return p.rightArrowClick&&p.rightArrowClick.apply(p,arguments)}),["stop"])),class:"arrowSwitcherRight"},g)],544)):Object(a["f"])("",!0)]})),_:1})],512)),[[a["G"],f.imagesLoaded]])}n("d3b7"),n("159b");var m=n("4360"),O={name:"Carousel",props:["year"],data:function(){return{IMGs:[],imagesLoaded:!1,carouselShowing:!1,fullSizeImageIndex:0,fullSizeImageSrc:""}},created:function(){var e=this;if(m["a"].state.flickr[this.year])return this.IMGs=m["a"].state.flickr[this.year],this.fullSizeImageSrc=this.IMGs[this.fullSizeImageIndex].url_l,void(this.imagesLoaded=!0);var t=m["a"].getFlickrPhotoAlbumUrl(this.year);fetch(t).then((function(t){t.ok?t.json().then((function(t){t.photoset.photo.forEach((function(t){e.IMGs.push({url_sq:t.url_sq,url_s:t.url_s,url_l:t.url_l,url_o:t.url_o,title:t.title})})),m["a"].setFlickrAlbum(e.year,e.IMGs),e.fullSizeImageSrc=e.IMGs[e.fullSizeImageIndex].url_l,e.imagesLoaded=!0})):console.log("Unable to load photos")}))},methods:{thumbClick:function(e){var t=this;this.fullSizeImageIndex=e,this.fullSizeImageSrc=this.IMGs[this.fullSizeImageIndex].url_l,this.carouselShowing=!0,this.$nextTick((function(){t.$refs.overlay.focus()})),this.prefetchLeft(),this.prefetchRight()},overlayClick:function(e){this.carouselShowing=!0!==this.carouselShowing},leftArrowClick:function(e){this.fullSizeImageIndex--,this.fullSizeImageIndex<0&&(this.fullSizeImageIndex=this.IMGs.length-1),this.fullSizeImageSrc=this.IMGs[this.fullSizeImageIndex].url_l,this.prefetchLeft()},rightArrowClick:function(e){this.fullSizeImageIndex++,this.fullSizeImageIndex>=this.IMGs.length&&(this.fullSizeImageIndex=0),this.fullSizeImageSrc=this.IMGs[this.fullSizeImageIndex].url_l,this.prefetchRight()},prefetchLeft:function(){var e=this.fullSizeImageIndex-1;e<0&&(e=this.IMGs.length-1);var t=new Image;t.src=this.IMGs[e].url_l},prefetchRight:function(){var e=this.fullSizeImageIndex+1;e>=this.IMGs.length&&(e=0);var t=new Image;t.src=this.IMGs[e].url_l}}},j=(n("c1b9"),n("6b0d")),y=n.n(j);const k=y()(O,[["render",v],["__scopeId","data-v-3c6a2493"]]);t["a"]=k},4360:function(e,t,n){"use strict";n("99af"),n("4e82"),n("b64b");var a=n("7a23"),r={debug:!1,config:{apiKey:"AIzaSyCTO0nZ3L4NyfxBeReiR5THZs2ANYw-8mw",sheets:{2010:null,2011:null,2013:null,2014:null,2016:"19ufPv05ULH9XemwCVMzX5wLogOJEHaFRlluYhXADGBs",2017:"1B8I8QmSdHKtpNwMjWtmp1hB1OsRqexfho7sOAl5ACeY",2018:"1bIvEAlqQgKGdemokaiew_WZfQ1Yyu2UR1N1EtLCVTRU",2019:"10ie9e4iCmJXAEb37_G5rBx3OK2LdcvyCHTmrW0yHVGg",2020:"1eGSiEy9SezmPw6EPlzD_lFs9r2WfczN7qLlHKE0DN6k"},flickr:{albums:{2013:"72157720035606133",2014:"72157720090540915",2017:"72157720046492177",2018:"72157720039478621",2019:"72157720035472464",2020:"72157720034759029"}}},state:Object(a["y"])({csv:{},leagueTable:{},groups:{},flickr:{}}),getFlickrPhotoAlbumUrl:function(e){var t="e9c5b4ee4c5b245d22b73c36c7b5cbd2",n="194221941@N06",a=this.config.flickr.albums[e],r="https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=".concat(t,"&photoset_id=").concat(a,"&user_id=").concat(n,"&extras=url_o%2Curl_sq%2Curl_l%2Curl_s%2Cmedia&privacy_filter=1&format=json&nojsoncallback=1");return this.debug&&(console.log("getFlickrPhotoAlbumUrl(".concat(e,")")),console.log(r)),r},getSheetUrl:function(e){var t="https://content-sheets.googleapis.com/v4/spreadsheets/".concat(this.config.sheets[e],"/values/A1%3AZ99?key=").concat(this.config.apiKey);return this.debug&&(console.log("getSheetUrl(".concat(e,")")),console.log(t)),t},setCSV:function(e,t){this.debug&&(console.log("setCSV(".concat(e,")")),console.log(t)),this.state.csv[e]=t},csvIsSet:function(e){return this.debug&&console.log("csvIsSet(".concat(e,")")),!!this.state.csv[e]},setLeagueTable:function(e,t){this.debug&&(console.log("setLeagueTable(".concat(e,")")),console.log(t)),this.state.leagueTable[e]=t},setGroups:function(e,t){this.debug&&(console.log("setGroups(".concat(e,")")),console.log(t)),this.state.groups[e]=t},getTournaments:function(){return Object.keys(this.config.sheets).sort().reverse()},getCurrentTournament:function(){return Object.keys(this.config.sheets).sort().reverse()[0]},setFlickrAlbum:function(e,t){this.debug&&(console.log("setFlickrAlbum(".concat(e,")")),console.log(t)),this.state.flickr[e]=t}};t["a"]=r},"4db6":function(e,t,n){},5491:function(e,t,n){"use strict";n("6de1")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"ps-content"};function c(e,t,n,c,o,s){var i=Object(a["B"])("TopBar"),l=Object(a["B"])("router-view");return Object(a["u"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(i),Object(a["h"])("div",r,[Object(a["k"])(l)])],64)}var o=function(e){return Object(a["x"])("data-v-7eda7e96"),e=e(),Object(a["v"])(),e},s={id:"ps-top-bar"},i=o((function(){return Object(a["h"])("div",{id:"ps-top-bar-title"},"Parker Snooker",-1)})),l=o((function(){return Object(a["h"])("span",{class:"caret"},null,-1)}));function u(e,t,n,r,c,o){var u=Object(a["B"])("router-link");return Object(a["u"])(),Object(a["g"])(a["a"],null,[Object(a["h"])("div",s,[i,Object(a["h"])("div",{onClick:t[0]||(t[0]=function(){return o.clickMenu&&o.clickMenu.apply(o,arguments)}),id:"ps-top-bar-menu",class:Object(a["q"])({active:e.menuShowing})},[Object(a["j"])(Object(a["E"])(e.menuTitle),1),l],2)]),Object(a["k"])(a["b"],{name:"fade"},{default:Object(a["I"])((function(){return[Object(a["J"])(Object(a["h"])("div",{onClick:t[1]||(t[1]=function(){return o.clickMenu&&o.clickMenu.apply(o,arguments)}),id:"ps-tournament-menu"},[(Object(a["u"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(e.years,(function(t){return Object(a["J"])((Object(a["u"])(),Object(a["e"])(u,{key:t,class:"menuLink",to:t},{default:Object(a["I"])((function(){return[Object(a["j"])(Object(a["E"])(t),1)]})),_:2},1032,["to"])),[[a["G"],e.menuTitle!=t]])})),128))],512),[[a["G"],e.menuShowing]])]})),_:1}),Object(a["k"])(a["b"],{name:"fade"},{default:Object(a["I"])((function(){return[e.menuShowing?(Object(a["u"])(),Object(a["g"])("div",{key:0,onClick:t[2]||(t[2]=function(){return o.clickMenu&&o.clickMenu.apply(o,arguments)}),id:"ps-click-overlay"})):Object(a["f"])("",!0)]})),_:1})],64)}n("b0c0");var h=n("4360"),d={name:"TopBar",data:function(){return{menuShowing:!1,menuTitle:"",years:[]}},watch:{$route:function(e,t){"home"===e.name?this.menuTitle=h["a"].getCurrentTournament():this.menuTitle=e.name}},created:function(){this.years=h["a"].getTournaments()},methods:{clickMenu:function(e){this.menuShowing=!0!==this.menuShowing;var t=e.target.innerText;""!==t&&(this.menuTitle=t)}}},f=(n("cb17"),n("6b0d")),b=n.n(f);const p=b()(d,[["render",u],["__scopeId","data-v-7eda7e96"]]);var g=p,v={name:"app",components:{TopBar:g}};n("5491");const m=b()(v,[["render",c]]);var O=m,j=n("9483");Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var y=n("6c02"),k=Object(a["i"])('<div class="panel" data-v-faaa5654><div class="panel-heading" data-v-faaa5654> Final Stages </div><div class="justify-center" data-v-faaa5654><div class="panel-body" data-v-faaa5654><div class="panel-title" data-v-faaa5654>Details</div><p data-v-faaa5654>Finals day is Sunday 1st March with the plate final starting at 2:30pm. The main final will follow the conclusion of the plate final. Dress code for all finalists is waistecoat and tie. A chilli will be provided (both veggi and meat options) followed by a cheese platter but please bring your own drinks.</p><div class="panel-title" data-v-faaa5654>Winner</div><p data-v-faaa5654>Richard Parker</p><div class="panel-title" data-v-faaa5654>Final</div><p data-v-faaa5654>Richard Parker 2-0 James Wright</p><div class="panel-title" data-v-faaa5654>Semi Finals</div><p data-v-faaa5654>Semi Final 1: Graham White 0-2 Richard Parker</p><p data-v-faaa5654>Semi Final 2: Wayne Rogers 1-2 James Wright</p><div class="panel-title" data-v-faaa5654>The plate (Doubles)</div><p data-v-faaa5654>Bob Dickson and Wayne Rogers 0-2 Nigel Kaye and Graham White</p></div></div></div>',1);function w(e,t,n,r,c,o){var s=Object(a["B"])("Videos"),i=Object(a["B"])("Carousel"),l=Object(a["B"])("GroupStages"),u=Object(a["B"])("FixturesResults");return Object(a["u"])(),Object(a["g"])("div",null,[Object(a["k"])(s,{videoIds:["f76IguHHAVo","Ndyk2ZVAVoo","5X7Z2pk9NSQ","5ibVgCPhmWY","qsbmtUiWFpM"]}),Object(a["k"])(i,{year:"2020"}),k,Object(a["k"])(l,{year:"2020"}),Object(a["k"])(u,{year:"2020"})])}var S=n("2113"),I=n("053b"),C=n("3693"),x=n("85f6"),_={name:"Year2020",components:{GroupStages:S["a"],FixturesResults:I["a"],Carousel:C["a"],Videos:x["a"]}};n("8466");const T=b()(_,[["render",w],["__scopeId","data-v-faaa5654"]]);var L=T,A=[{path:"/",name:"home",component:L},{path:"/2020",name:"2020",component:L},{path:"/2019",name:"2019",component:function(){return n.e("about").then(n.bind(null,"462e"))}},{path:"/2018",name:"2018",component:function(){return n.e("about").then(n.bind(null,"e90b"))}},{path:"/2017",name:"2017",component:function(){return n.e("about").then(n.bind(null,"a105"))}},{path:"/2016",name:"2016",component:function(){return n.e("about").then(n.bind(null,"82d0"))}},{path:"/2014",name:"2014",component:function(){return n.e("about").then(n.bind(null,"ac7d"))}},{path:"/2013",name:"2013",component:function(){return n.e("about").then(n.bind(null,"1222"))}},{path:"/2011",name:"2011",component:function(){return n.e("about").then(n.bind(null,"3729"))}},{path:"/2010",name:"2010",component:function(){return n.e("about").then(n.bind(null,"9412"))}},{path:"/:pathMatch(.*)*",name:"not-found",redirect:{name:"home"}}],G=Object(y["a"])({history:Object(y["b"])("/"),routes:A}),E=G,M=n("9a7e");Object(a["d"])(O).use(E).use(M["a"]).mount("#app")},"5b21":function(e,t,n){},"651b":function(e,t,n){"use strict";n("ff77")},"6db7":function(e,t,n){},"6de1":function(e,t,n){},8466:function(e,t,n){"use strict";n("6db7")},"85f6":function(e,t,n){"use strict";var a=n("7a23"),r=function(e){return Object(a["x"])("data-v-212ca94d"),e=e(),Object(a["v"])(),e},c={class:"panel"},o=r((function(){return Object(a["h"])("div",{class:"panel-heading"}," Videos ",-1)})),s={class:"panel-body"},i={class:"flex-container"},l=["src"];function u(e,t,n,r,u,h){return Object(a["u"])(),Object(a["g"])("div",null,[Object(a["h"])("div",c,[o,Object(a["h"])("div",s,[Object(a["h"])("div",i,[(Object(a["u"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(n.videoIds,(function(e){return Object(a["u"])(),Object(a["g"])("iframe",{key:e,src:"https://www.youtube.com/embed/"+e,frameborder:"0",allowfullscreen:""},null,8,l)})),128))])])])])}var h={name:"Videos",props:["videoIds"]},d=(n("8d97"),n("6b0d")),f=n.n(d);const b=f()(h,[["render",u],["__scopeId","data-v-212ca94d"]]);t["a"]=b},"8d97":function(e,t,n){"use strict";n("5b21")},c1b9:function(e,t,n){"use strict";n("24a4")},cb17:function(e,t,n){"use strict";n("4db6")},d945:function(e,t,n){},fbf8:function(e,t,n){"use strict";n("d945")},ff77:function(e,t,n){}});