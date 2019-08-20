(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(147),s=t(150),l=t(151),o=(t(34),t(75)),c=t.n(o),u=t(163),g=t.n(u),d=t(164),m=t.n(d),f=(t(165),t(166),t(167)),p=t.n(f),h=function(){Object(a.useEffect)(function(){p.a.initHighlightingOnLoad()},[])},v=function(e){var n=e.tag,t=void 0===n?"div":n,a=e.className,i=e.children,s=e.lang,l=void 0===s?"css":s,o=c()(e,["tag","className","children","lang"]);h();var u={Highlight:g()("Highlight",a),HighlightCode:g()("hljs",l)},d=m()(i);return r.a.createElement(t,Object.assign({},o,{className:u.Highlight}),r.a.createElement("pre",null,r.a.createElement("code",{className:u.HighlightCode},d)))};n.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement(s.a,null,r.a.createElement("section",{className:"Hero Hero--primary Hero--large"},r.a.createElement("div",{className:"Hero-body Hero-body--centerized"},r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"Heading u-MarginBottom-xlarge u-Align-center",style:{maxWidth:"600px",margin:"0 auto"}},r.a.createElement("h1",{className:"Title u-MarginBottom-xsmall"},"Formare"),r.a.createElement("h3",{className:"Subtitle u-Color-light"},"A modern and lightweight CSS framework for building web interfaces hassle-free")),r.a.createElement("div",{className:"u-Align-center",style:{maxWidth:"480px",margin:"0 auto"}},r.a.createElement("div",{className:"u-MarginBottom-xlarge"},r.a.createElement(v,{lang:"shell"},"\n                  $ npm install formare\n                  // or\n                  $ yarn add formare\n                  ")),r.a.createElement("div",{className:"u-Flex-row u-JustifyContent-center"},r.a.createElement(i.a,{href:"/docs/start",className:"Button Button--secondary Button--large"},r.a.createElement("i",{className:"Icon fas fa-rocket u-MarginRight-large"}),"Get started!")))))),r.a.createElement("section",{className:"Section u-PaddingTop-large u-PaddingBottom-large"},r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"Heading"},r.a.createElement("h3",{className:"Title"},"Why Formare?"),r.a.createElement("h5",{className:"Subtitle u-Color-gray"},"Formare isn't just another framework, here's why."))))))}},147:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(4),s=t.n(i),l=t(33),o=t.n(l);t.d(n,"a",function(){return o.a});t(148),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},148:function(e,n,t){var a;e.exports=(a=t(149))&&a.default||a},149:function(e,n,t){"use strict";t.r(n);t(34);var a=t(0),r=t.n(a),i=t(4),s=t.n(i),l=t(55),o=t(2),c=function(e){var n=e.location,t=o.default.getResourcesForPathnameSync(n.pathname);return t?r.a.createElement(l.a,Object.assign({location:n,pageResources:t},t.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},n.default=c},150:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(4),s=t.n(i),l=t(147),o=function(e){e.siteTitle;return r.a.createElement("header",{className:"MainHeader"},r.a.createElement("div",{className:"Navbar Navbar--primary"},r.a.createElement("div",{className:"Container Container--fullWidth u-Flex u-Flex-row"},r.a.createElement(c,null),r.a.createElement(u,null))))},c=function(){return r.a.createElement("div",{className:"Navbar-block"},r.a.createElement(l.a,{to:"/",className:"u-FontSize-xlarge u-FontWeight-semibold u-Color-light"},"Formare"))},u=function(){return r.a.createElement("div",{className:"Navbar-block"},r.a.createElement("nav",{className:"Nav"}))};o.propTypes={siteTitle:s.a.string},o.defaultProps={siteTitle:""};var g=o,d=(t(153),function(e){var n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement("main",null,n))});d.propTypes={children:s.a.node.isRequired};n.a=d},151:function(e,n,t){"use strict";var a=t(152),r=t(0),i=t.n(r),s=t(4),l=t.n(s),o=t(155),c=t.n(o),u=function(e){var n=e.description,t=e.lang,r=e.meta,s=e.keywords,l=e.title,o=a.data.site,u=n||o.siteMetadata.description,g=[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}];return i.a.createElement(c.a,{htmlAttributes:{lang:t},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:g.concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})};u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},n.a=u},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Formare",description:"A modern, lightweight and simple CSS Framework for building web interfaces hassle-free.",author:"David Kurnia Kristiadi @dkk94"}}}}},163:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var s=r.apply(null,a);s&&e.push(s)}else if("object"===i)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},164:function(e,n,t){"use strict";e.exports=function(e){var n=void 0;n="string"==typeof e?[e]:e.raw;for(var t="",a=0;a<n.length;a++)t+=n[a].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),a<(arguments.length<=1?0:arguments.length-1)&&(t+=arguments.length<=a+1?void 0:arguments[a+1]);var r=t.split("\n"),i=null;return r.forEach(function(e){var n=e.match(/^(\s+)\S+/);if(n){var t=n[1].length;i=i?Math.min(i,t):t}}),null!==i&&(t=r.map(function(e){return" "===e[0]?e.slice(i):e}).join("\n")),(t=t.trim()).replace(/\\n/g,"\n")}},167:function(e,n,t){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;(function(e){var n,t=[],a=Object.keys,r={},i={},s=/^(no-?highlight|plain|text)$/i,l=/\blang(?:uage)?-([\w-]+)\b/i,o=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,c="</span>",u={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function g(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function d(e){return e.nodeName.toLowerCase()}function m(e,n){var t=e&&e.exec(n);return t&&0===t.index}function f(e){return s.test(e)}function p(e){var n,t={},a=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return a.forEach(function(e){for(n in e)t[n]=e[n]}),t}function h(e){var n=[];return function e(t,a){for(var r=t.firstChild;r;r=r.nextSibling)3===r.nodeType?a+=r.nodeValue.length:1===r.nodeType&&(n.push({event:"start",offset:a,node:r}),a=e(r,a),d(r).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:r}));return a}(e,0),n}function v(e){if(n&&!e.langApiRestored){for(var t in e.langApiRestored=!0,n)e[t]&&(e[n[t]]=e[t]);(e.contains||[]).concat(e.variants||[]).forEach(v)}}function E(e){function n(e){return e&&e.source||e}function t(t,a){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(a?"g":""))}!function r(i,s){if(i.compiled)return;i.compiled=!0;i.keywords=i.keywords||i.beginKeywords;if(i.keywords){var l={},o=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");l[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof i.keywords?o("keyword",i.keywords):a(i.keywords).forEach(function(e){o(e,i.keywords[e])}),i.keywords=l}i.lexemesRe=t(i.lexemes||/\w+/,!0);s&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")\\b"),i.begin||(i.begin=/\B|\b/),i.beginRe=t(i.begin),i.endSameAsBegin&&(i.end=i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(i.endRe=t(i.end)),i.terminator_end=n(i.end)||"",i.endsWithParent&&s.terminator_end&&(i.terminator_end+=(i.end?"|":"")+s.terminator_end));i.illegal&&(i.illegalRe=t(i.illegal));null==i.relevance&&(i.relevance=1);i.contains||(i.contains=[]);i.contains=Array.prototype.concat.apply([],i.contains.map(function(e){return function(e){e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(n){return p(e,{variants:null},n)}));return e.cached_variants||e.endsWithParent&&[p(e)]||[e]}("self"===e?i:e)}));i.contains.forEach(function(e){r(e,i)});i.starts&&r(i.starts,s);var c=i.contains.map(function(e){return e.beginKeywords?"\\.?(?:"+e.begin+")\\.?":e.begin}).concat([i.terminator_end,i.illegal]).map(n).filter(Boolean);i.terminators=c.length?t(function(e,t){for(var a=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,i="",s=0;s<e.length;s++){var l=r,o=n(e[s]);for(s>0&&(i+=t);o.length>0;){var c=a.exec(o);if(null==c){i+=o;break}i+=o.substring(0,c.index),o=o.substring(c.index+c[0].length),"\\"==c[0][0]&&c[1]?i+="\\"+String(Number(c[1])+l):(i+=c[0],"("==c[0]&&r++)}}return i}(c,"|"),!0):{exec:function(){return null}}}(e)}function b(e,n,t,a){function i(e,n){var t=f.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function s(e,n,t,a){var r=a?"":u.classPrefix,i='<span class="'+r,s=t?"":c;return(i+=e+'">')+n+s}function l(){R+=null!=h.subLanguage?function(){var e="string"==typeof h.subLanguage;if(e&&!r[h.subLanguage])return g(w);var n=e?b(h.subLanguage,w,!0,v[h.subLanguage]):N(w,h.subLanguage.length?h.subLanguage:void 0);h.relevance>0&&(y+=n.relevance);e&&(v[h.subLanguage]=n.top);return s(n.language,n.value,!1,!0)}():function(){var e,n,t,a;if(!h.keywords)return g(w);a="",n=0,h.lexemesRe.lastIndex=0,t=h.lexemesRe.exec(w);for(;t;)a+=g(w.substring(n,t.index)),(e=i(h,t))?(y+=e[1],a+=s(e[0],g(t[0]))):a+=g(t[0]),n=h.lexemesRe.lastIndex,t=h.lexemesRe.exec(w);return a+g(w.substr(n))}(),w=""}function o(e){R+=e.className?s(e.className,"",!0):"",h=Object.create(e,{parent:{value:h}})}function d(e,n){if(w+=e,null==n)return l(),0;var a=function(e,n){var t,a;for(t=0,a=n.contains.length;t<a;t++)if(m(n.contains[t].beginRe,e))return n.contains[t].endSameAsBegin&&(n.contains[t].endRe=(r=n.contains[t].beginRe.exec(e)[0],new RegExp(r.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m"))),n.contains[t];var r}(n,h);if(a)return a.skip?w+=n:(a.excludeBegin&&(w+=n),l(),a.returnBegin||a.excludeBegin||(w=n)),o(a),a.returnBegin?0:n.length;var r=function e(n,t){if(m(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(h,n);if(r){var i=h;i.skip?w+=n:(i.returnEnd||i.excludeEnd||(w+=n),l(),i.excludeEnd&&(w=n));do{h.className&&(R+=c),h.skip||h.subLanguage||(y+=h.relevance),h=h.parent}while(h!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),o(r.starts)),i.returnEnd?0:n.length}if(function(e,n){return!t&&m(n.illegalRe,e)}(n,h))throw new Error('Illegal lexeme "'+n+'" for mode "'+(h.className||"<unnamed>")+'"');return w+=n,n.length||1}var f=_(e);if(!f)throw new Error('Unknown language: "'+e+'"');E(f);var p,h=a||f,v={},R="";for(p=h;p!==f;p=p.parent)p.className&&(R=s(p.className,"",!0)+R);var w="",y=0;try{for(var x,M,S=0;h.terminators.lastIndex=S,x=h.terminators.exec(n);)M=d(n.substring(S,x.index),x[0]),S=x.index+M;for(d(n.substr(S)),p=h;p.parent;p=p.parent)p.className&&(R+=c);return{relevance:y,value:R,language:e,top:h}}catch(C){if(C.message&&-1!==C.message.indexOf("Illegal"))return{relevance:0,value:g(n)};throw C}}function N(e,n){n=n||u.languages||a(r);var t={relevance:0,value:g(e)},i=t;return n.filter(_).filter(x).forEach(function(n){var a=b(n,e,!1);a.language=n,a.relevance>i.relevance&&(i=a),a.relevance>t.relevance&&(i=t,t=a)}),i.language&&(t.second_best=i),t}function R(e){return u.tabReplace||u.useBR?e.replace(o,function(e,n){return u.useBR&&"\n"===e?"<br>":u.tabReplace?n.replace(/\t/g,u.tabReplace):""}):e}function w(e){var n,a,r,s,o,c=function(e){var n,t,a,r,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=l.exec(i))return _(t[1])?t[1]:"no-highlight";for(i=i.split(/\s+/),n=0,a=i.length;n<a;n++)if(f(r=i[n])||_(r))return r}(e);f(c)||(u.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,o=n.textContent,r=c?b(c,o,!0):N(o),(a=h(n)).length&&((s=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=r.value,r.value=function(e,n,a){var r=0,i="",s=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function o(e){i+="<"+d(e)+t.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+g(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function c(e){i+="</"+d(e)+">"}function u(e){("start"===e.event?o:c)(e.node)}for(;e.length||n.length;){var m=l();if(i+=g(a.substring(r,m[0].offset)),r=m[0].offset,m===e){s.reverse().forEach(c);do{u(m.splice(0,1)[0]),m=l()}while(m===e&&m.length&&m[0].offset===r);s.reverse().forEach(o)}else"start"===m[0].event?s.push(m[0].node):s.pop(),u(m.splice(0,1)[0])}return i+g(a.substr(r))}(a,h(s),o)),r.value=R(r.value),e.innerHTML=r.value,e.className=function(e,n,t){var a=n?i[n]:t,r=[e.trim()];e.match(/\bhljs\b/)||r.push("hljs");-1===e.indexOf(a)&&r.push(a);return r.join(" ").trim()}(e.className,c,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function y(){if(!y.called){y.called=!0;var e=document.querySelectorAll("pre code");t.forEach.call(e,w)}}function _(e){return e=(e||"").toLowerCase(),r[e]||r[i[e]]}function x(e){var n=_(e);return n&&!n.disableAutodetect}e.highlight=b,e.highlightAuto=N,e.fixMarkup=R,e.highlightBlock=w,e.configure=function(e){u=p(u,e)},e.initHighlighting=y,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",y,!1),addEventListener("load",y,!1)},e.registerLanguage=function(n,t){var a=r[n]=t(e);v(a),a.aliases&&a.aliases.forEach(function(e){i[e]=n})},e.listLanguages=function(){return a(r)},e.getLanguage=_,e.autoDetection=x,e.inherit=p,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,t,a){var r=e.inherit({className:"comment",begin:n,end:t,contains:[]},a||{});return r.contains.push(e.PHRASAL_WORDS_MODE),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0}})(n)}()}}]);
//# sourceMappingURL=component---src-pages-index-js-5a0c94b20fa27486e836.js.map