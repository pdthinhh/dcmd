(function(){function y(x,k,r){var g=document.createElement("script");g.type="text/javascript";g.async=!0;g.src=x;2<=arguments.length&&(g.onload=k,g.onreadystatechange=function(){4!=g.readyState&&"complete"!=g.readyState||k()});g.onerror=function(){if("undefined"!=typeof r)try{r()}catch(w){}};document.getElementsByTagName("head")[0].appendChild(g)}function A(){function x(){if("undefined"==typeof b[__admPageloadid]){var e=document.domain+"";0===e.indexOf("m.")&&(e=e.replace("m.",""),-1!="kenh14.vn,dantri.com.vn,soha.vn,cafef.vn,cafebiz.vn,vneconomy.vn,afamily.vn".idnexOf(e)&&
y("https://media1.admicro.vn/js_pr/adpage_"+e.replace(/\./g,"_")+".js"));for(var a in b)"lightbox"==b[a].type&&(0<b[a].data.length&&g(b[a]),delete eleData[a],delete b[a]);b[__admPageloadid]={type:"lightbox",pgid:__admPageloadid,hostname:location.hostname,path:encodeURIComponent(location.pathname),data:[],vp:t.wdWidth()+"x"+t.wdHeight(),sr:screen.width+"x"+screen.height};window.setTimeout(function(){u("lightbox",__admPageloadid)},500)}window.setTimeout(function(){x()},500)}function k(b,a,f){"addEventListener"in
b?b.addEventListener(a,f):"attachEvent"in b&&b.attachEvent("on"+a,f)}function r(){var e=!1,a;for(a in b){if("undefined"!=typeof l[a]&&0<l[a].data.length){for(var f=0,c=l[a].data.length;f<c;f++)b[a].data.push(l[a].data[f]);delete b[a]}1>b[a].data.length?delete b[a]:e=!0}f="";try{if((f=localStorage.getItem("prTrackingsend"))&&""!=f){var d=JSON.parse(f);if(d)for(a in d)b[a]=d[a]}}catch(h){}e&&localStorage.setItem("prTrackingsend",JSON.stringify(b))}function g(b){(function(a){var f=window.XMLHttpRequest?
new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");f.open("POST","//amcdn.vn/pr_track?dmn="+b.hostname+"&path="+b.path+"&lsn="+b.pgid+"&dg="+__admloadPageIdc+"&sl=0&sr="+b.sr+"&vp="+b.vp+"&pty="+b.type,!0);f.onload=function(){};f.send(a)})(JSON.stringify(b.data))}function w(e,a,f){var c=new VisSense(e),d=e.nodeName,h="";try{if("Video"==d||"IMG"==d){var g=e.getAttribute("src")||e.getAttribute("data-original");g&&(h=m(g)+"")}else h=m(e.innerText)+""}catch(E){}if("IMG"==d||"VIDEO"==d)e.addEventListener("click",
function(e){e=!1;if("undefined"!=typeof b[a])for(var c=0,v=b[a].data.length;c<v;c++)if(b[a].data[c].bid===f+""&&"click"==b[a].data[c].ety){e=!0;"undefined"!=typeof b[a]&&(b[a].data[c].eval=parseInt(b[a].data[c].eval)+1+"");break}e||"undefined"!=typeof b[a]&&b[a].data.push({bid:f+"",bty:d,eval:"1",eti:"0",ety:"click",eid:h})}),"VIDEO"==d&&(e.addEventListener("play",function(e){e=!1;if("undefined"!=typeof b[a])for(var c=0,v=b[a].data.length;c<v;c++)if(b[a].data[c].bid===f+""&&"play"==b[a].data[c].ety){e=
!0;"undefined"!=typeof b[a]&&(b[a].data[c].eval=parseInt(b[a].data[c].eval)+1+"");break}e||"undefined"!=typeof b[a]&&b[a].data.push({bid:f+"",bty:d,eval:"1",eti:"0",ety:"play",eid:h})}),e.addEventListener("pause",function(e){e=!1;if("undefined"!=typeof b[a])for(var c=0,v=b[a].data.length;c<v;c++)if(b[a].data[c].bid===f+""&&"pause"==b[a].data[c].ety){e=!0;"undefined"!=typeof b[a]&&(b[a].data[c].eval=parseInt(b[a].data[c].eval)+1+"");break}e||"undefined"!=typeof b[a]&&b[a].data.push({bid:f+"",bty:d,
eval:"1",eti:"0",ety:"pause",eid:h})}));if(0===f)"undefined"!=typeof b&&"undefined"!=typeof b[a]&&"undefined"==typeof b[a].sendtrack&&(b[a].sendtrack=!0,(new Image).src="//amcdn.vn/pr_track?dmn="+encodeURIComponent(b[a].hostname)+"&path="+encodeURIComponent(b[a].path)+"&lsn="+a+"&dg="+__admloadPageIdc+"&sl=0&sr="+b[a].sr+"&vp="+b[a].vp+"&pty="+b[a].type+"&bty="+d+"&eid="+h+"&ety=view&eti=0&eval=0&bid="+f+"&rd="+Math.random());else c.onPercentageTimeTestPassed(function(){"undefined"==typeof l[a]&&
(l[a]={type:b[a].type,pgid:a,hostname:b[a].hostname,path:b[a].path,data:[],sr:b[a].sr,vp:b[a].vp});l[a].data.push({bid:f+"",bty:d,eval:"0",eti:"0",ety:"view",eid:h})},{percentageLimit:.3,timeLimit:300,interval:300})}function u(c,a){var f=document.domain+"",e="lightbox"==c?p[f].lightbox:p[f]["default"];"undefined"==typeof eleData[a]&&(eleData[a]=[]);e=document.querySelectorAll(e);0===e.length&&""!=p[f].emagazine&&(e=".k14-sp-wrapper "+"h1 h2 h3 h4 h5 p img video".split(" ").join(", .k14-sp-wrapper "),
e=document.querySelectorAll(e));f=0;for(var d=e.length;f<d;f++){var h=e[f];if(-1==eleData[a].indexOf(h))switch(eleData[a].push(h),h.nodeName){case "P":h.parentNode.className&&""!=h.parentNode.className&&-1!=h.parentNode.className.indexOf("CMS_Caption")||w(h,a,f);break;default:w(h,a,f)}}"undefined"!=typeof b[a]&&"lightbox"==c?window.setTimeout(function(){u(c,a)},1E3):"page"==c&&3>arguments.length&&AdmonDomReady(function(){u(c,a,!0)})}var t={wdHeight:function(){var b,a=document;"number"==typeof window.innerWidth?
b=window.innerHeight:a.documentElement&&a.documentElement.clientHeight?b=a.documentElement.clientHeight:a.body&&a.body.clientHeight&&(b=a.body.clientHeight);return b},wdWidth:function(){var b,a=document;"number"==typeof window.innerWidth?b=window.innerWidth:a.documentElement&&a.documentElement.clientWidth?b=a.documentElement.clientWidth:a.body&&a.body.clientWidth&&(b=a.body.clientWidth);return b}},m=function(b){var a;if(!(a=window.crcTable)){a=window;for(var c,d=[],e=0;256>e;e++){c=e;for(var h=0;8>
h;h++)c=c&1?3988292384^c>>>1:c>>>1;d[e]=c}a=a.crcTable=d}c=-1;for(d=0;d<b.length;d++)c=c>>>8^a[(c^b.charCodeAt(d))&255];return(c^-1)>>>0};if("beforeunload"in window||"onbeforeunload"in window)-1!=navigator.userAgent.indexOf("Firefox")?k(window,"unload",function(){r()}):k(window,"beforeunload",function(){r()});try{var q=localStorage.getItem("prTrackingsend");if(q&&""!=q){try{var c=JSON.parse(q),d;for(d in c)g(c[d])}catch(e){}localStorage.removeItem("prTrackingsend")}}catch(e){}var b={},l={},B=function(){for(var b in l)try{3<=
l[b].data.length&&(g(l[b]),delete l[b])}catch(a){}window.setTimeout(function(){B()},2E3)};window.setTimeout(function(){B()},2E3);window.eleData={};b[__admPageloadid]={type:"page",pgid:__admPageloadid,hostname:location.hostname,path:encodeURIComponent(location.pathname),data:[],sr:screen.width+"x"+screen.height,vp:t.wdWidth()+"x"+t.wdHeight()};"dantri.com.vn"==document.domain?/([0-9]+)\.htm/g.exec(document.URL+"")&&u("page",__admPageloadid):"undefined"!=typeof _ADM_Channel&&-1!=_ADM_Channel.indexOf("detail")&&
u("page",__admPageloadid);x()}var C=function(){function m(c){try{var d=c.parentNode;if("BODY"!=d.tagName){var b=d.getAttribute("data-marked-zoneid");if(b)return b;if("BODY"!=d.tagName)return m(d)}}catch(l){}return""}function k(){if(""!=strSend){var c="//lg1.logging.admicro.vn/tl?dt=1&ii="+strSend+"&d="+encodeURIComponent(location.host)+"&p="+encodeURIComponent(location.pathname)+(window.__AdmsendRandom||"");(new Image).src=c;strSend=""}window.setTimeout(function(){k()},2E3)}function r(c,d){VisSense(d).onPercentageTimeTestPassed(function(){strSend=
""==strSend?c:strSend+","+c},{percentageLimit:.5,timeLimit:1E3,interval:300})}function g(c,d,b){"addEventListener"in c?c.addEventListener(d,b):"attachEvent"in c&&c.attachEvent("on"+d,b)}function w(){try{var c=window.location.href,d=/[-/r]([0-9]+)(.chn|.html|.htm)$/;if(d.test(c)){var b=d.exec(c)[1];c=/[/-]([0-9]+)$/;null!=localStorage.getItem("idtrackingnew")&&parseInt(c.exec(localStorage.getItem("idtrackingnew"))[1])===parseInt(b)&&((new Image).src="//lg1.logging.admicro.vn/tl?dt=1&ii="+localStorage.getItem("postrackingnew")+
"-"+localStorage.getItem("idtrackingnew")+"&d="+encodeURIComponent(location.host)+"&p="+encodeURIComponent(location.pathname)+"&cov=1&rd="+localStorage.getItem("__AdmsendRandom"),localStorage.removeItem("idtrackingnew"),localStorage.removeItem("postrackingnew"),localStorage.removeItem("__AdmsendRandom"))}}catch(l){}}window.arrDom=[];strSend="";hg=0;(function(c){var d;c={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(d in c)if(d in
document){var b=c[d];break}return function(c){c&&document.addEventListener(b,c);return!document[d]}})();var u=function(c){try{if(10!=c.which){var d=c.target,b="";"a"!=d.localName&&(d=c.target.parentNode);if("a"==d.localName){var l=d.href,g=/[-/r]([0-9]+)(.chn|.html|.htm)$/;if(g.test(l)){var e=g.exec(l);if(null!=e&&2<=e.length){var a=m(d);if(null==a||""==a)if(d=d.parentNode,a=d.getAttribute("data-marked-zoneid"),null==a||""==a)if(d=d.parentNode,a=d.getAttribute("data-marked-zoneid"),null==a||""==a)d=
d.parentNode,a=d.getAttribute("data-marked-zoneid");var f=c.pageY,v=c.pageX,k=location.pathname+"";c="l";-1!=k.indexOf("/")?c="h":g.test(k)&&(c="d");b=c+(1200>=f?1:2E3>=f?2:3)+b+"-"+e[1];null!=a&&""!=a&&(b=a+"-"+e[1]);localStorage.setItem("idtrackingnew",b);localStorage.setItem("postrackingnew",f+"_"+v);localStorage.setItem("__AdmsendRandom",window.__AdmsendRandom||"");window.setTimeout(function(){w()},1E3)}}}}}catch(h){}};document.addEventListener("mousedown",function(c){u(c)});w();try{var t=function(){q&&
clearTimeout(q);q=setTimeout(function(){try{document.body.scrollHeight>hg+100&&p()}catch(c){}clearTimeout(q)},2E3)},p=function(){function c(b,a){a=a||"";for(var c=b.querySelectorAll("a"),d=/[-/r]([0-9]+)(.chn|.html|.htm)$/,e=[],h=0,g=c.length;h<g;h++){var l=d.exec(c[h].href);if(null!=l&&2<=l.length){if(-1==e.indexOf(l[1])){e.push(l[1]);c[h].parentNode.querySelector("img");var k="";if(""!=a)k+=a+"-"+l[1];else{k=c[h];var m=document,n="";"object"==typeof k?n=k:m.getElementById?n=m.getElementById(k):
m.all&&(n=m.all[k]);if(null!=n){yPos=n.offsetTop;for(tempEl=n.offsetParent;null!=tempEl;)yPos+=tempEl.offsetTop,tempEl=tempEl.offsetParent;k=yPos}else k=150;m=location.pathname+"";n="l";-1!=m.indexOf("/")?n="h":d.test(m)&&(n="d");k=n+(1200>=k?1:2E3>=k?2:3)+"-"+l[1]}r(k,c[h])}arrDom.push(c[h])}}}function d(b,a){a=a||"";var e=b.querySelectorAll("li");if(0<e.length)for(var g=0,k=e.length;g<k;g++)d(e[g],a),c(e[g],a);else c(b,a)}for(var b=document.querySelectorAll("[data-marked-zoneid]"),g=0,k=b.length;g<
k;g++)d(b[g],b[g].getAttribute("data-marked-zoneid"));d(document);c(document)};p();k();var q;try{hg=document.body.scrollHeight}catch(c){}t();g(document,"scroll",t)}catch(c){}},D=document.domain+"",p={"kenh14.vn":{lightbox:".lb-news-content "+"h1 h2 h3 h4 h5 p img video".split(" ").join(", .lb-news-content "),"default":".klw-body-top h1,.klw-body-top .klw-new-content "+"h2 h3 h4 h5 p img video".split(" ").join(", .klw-body-top .klw-new-content "),emagazine:".k14-sp-wrapper "+"h1 h2 h3 h4 h5 p img video".split(" ").join(", .k14-sp-wrapper ")},
"soha.vn":{lightbox:".lb-news-content .news-detail "+"h1 h2 h3 h4 h5 p img video".split(" ").join(",.lb-news-content .news-detail "),"default":".news-detail article "+"h1 h2 h3 h4 h5 p img video".split(" ").join(", .news-detail article "),emagazine:".k14-sp-wrapper "+"h1 h2 h3 h4 h5 p img video".split(" ").join(", .k14-sp-wrapper ")},"dantri.com.vn":{lightbox:".container .adm-leftsection"+"h1 h2 h3 h4 h5 p img video".split(" ").join(",.container .adm-leftsection "),"default":".container .adm-leftsection"+
"h1 h2 h3 h4 h5 p img video".split(" ").join(",.container .adm-leftsection "),emagazine:""},"cafef.vn":{lightbox:".lb-news-content .news-detail"+"h1 h2 h3 h4 h5 p img video".split(" ").join(", .lb-news-content .news-detail "),"default":".content_cate .left_cate "+"h1 h2 h3 h4 h5 p img video".split(" ").join(", .content_cate .left_cate "),emagazine:".k14-sp-wrapper "+"h1 h2 h3 h4 h5 p img video".split(" ").join(", .k14-sp-wrapper ")},"cafebiz.vn":{lightbox:".lb-news-content "+"h1 h2 h3 h4 h5 p img video".split(" ").join(", .lb-news-content .news-detail "),
"default":".newscontent h1,.newscontent .content "+"h2 h3 h4 h5 p img video".split(" ").join(",.newscontent .content "),emagazine:".k14-sp-wrapper "+"h1 h2 h3 h4 h5 p img video".split(" ").join(", .k14-sp-wrapper ")},"genk.vn":{lightbox:".lb-news-content "+"h1 h2 h3 h4 h5 p img video".split(" ").join(", .lb-news-content .news-detail "),"default":".kmcw-content img, .kbwc-body h1,.kbwc-body .klw-new-content "+"h2 h3 h4 h5 p img video".split(" ").join(",.kbwc-body .klw-new-content "),emagazine:""},
"gamek.vn":{lightbox:".contentleft h1,.contentleft .rightdetail "+"h2 h3 h4 h5 p img video".split(" ").join(",.contentleft .rightdetail "),"default":".contentleft h1,.contentleft .rightdetail "+"h2 h3 h4 h5 p img video".split(" ").join(",.contentleft .rightdetail "),emagazine:""},"afamily.vn":{lightbox:".lb-news-content .news-detail "+"h1 h2 h3 h4 h5 p img video".split(" ").join(",.lb-news-content .news-detail"),"default":".afc-body h1,.afc-body .afcb-content "+"h2 h3 h4 h5 p img video".split(" ").join(",.afc-body .afcb-content "),
emagazine:".k14-sp-wrapper "+"h1 h2 h3 h4 h5 p img video".split(" ").join(", .k14-sp-wrapper ")},"autopro.com.vn":{lightbox:".maindetail .news-details "+"h1 h2 h3 h4 h5 p img video".split(" ").join(",.maindetail .contentleft "),"default":".maindetail .news-details "+"h1 h2 h3 h4 h5 p img video".split(" ").join(",.maindetail .news-details "),emagazine:".kbw-minicover-wrapper img"+"h1 h2 h3 h4 h5 p img video".split(" ").join(",.maindetail .news-details ")},"vneconomy.vn":{lightbox:".totaldetail .contentleft "+
"h1 h2 h3 h4 h5 p img video".split(" ").join(",.totaldetail .contentleft "),"default":".totaldetail .contentleft "+"h1 h2 h3 h4 h5 p img video".split(" ").join(",.totaldetail .contentleft "),emagazine:""},"nld.com.vn":{lightbox:".body-content "+"h1 h2 h3 h4 h5 p img video".split(" ").join(",.body-content "),"default":".body-content "+"h1 h2 h3 h4 h5 p img video".split(" ").join(",.body-content "),emagazine:""}};"undefined"==typeof VisSense?y("//media1.admicro.vn/core/visen.js",function(){AdmonDomReady(function(){C()});
"undefined"!=typeof p[D]&&A()}):(AdmonDomReady(function(){C()}),"undefined"!=typeof p[D]&&A());if("undefined"==typeof Admlogtime)try{var z=document.domain+"",m=z;0===z.indexOf("m.")&&(m=z.replace("m.",""));-1!=m.indexOf("dantri.com.vn")&&(m="dantri.com.vn");-1!="kenh14.vn,dantri.com.vn,soha.vn,cafef.vn,cafebiz.vn,vneconomy.vn,afamily.vn".indexOf(m)&&y("https://media1.admicro.vn/js_pr/adpage_"+m.replace(/\./g,"_")+".js")}catch(x){}})();