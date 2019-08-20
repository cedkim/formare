(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(160),i=n(8),o=n.n(i),s=n(165),l=n.n(s),u=n(157),m=n(156),p=(n(168),function(){var e=Object(a.useContext)(u.a).routes,t={Menu:l()("DocsMenu"),MenuList:l()("DocsMenu-list"),MenuItem:l()("DocsMenu-item")},n=function(e){var n=e.routes;return console.log(n),n.map(function(e){var n=e.path,a=e.title;return r.a.createElement("li",{className:t.MenuItem},r.a.createElement(m.a,{className:t.MenuLink,activeClassName:"is-active",to:n},a))})};return r.a.createElement("aside",{className:t.Menu},r.a.createElement("ul",{className:t.MenuList},e.map(function(e){var a=e.title,c=e.path,i=e.hasChildren;return t=o()({},t,{MenuLink:l()("DocsMenu-link",i?"DocsMenu-link--hasChildren":null)}),r.a.createElement("li",{className:t.MenuItem},r.a.createElement(m.a,{className:t.MenuLink,activeClassName:"is-active",to:c},a),i?r.a.createElement(n,{routes:i}):null)})))}),d=function(e){var t=e.children;return r.a.createElement(c.a,null,r.a.createElement("div",{className:"Docs"},r.a.createElement(p,null),r.a.createElement("article",{className:"DocsContent"},t)))},f=n(173),v=n.n(f),h=n(159),g=n(4),E=n.n(g),N=n(166),y=n.n(N),b=function(e){var t=e.description,n=e.lang,a=e.meta,c=e.keywords,i=e.title,o=h.data.site,s=t||o.siteMetadata.description,l=[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}];return r.a.createElement(y.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:l.concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(a)})};b.defaultProps={lang:"en",meta:[],keywords:[],description:""},b.propTypes={description:E.a.string,lang:E.a.string,meta:E.a.arrayOf(E.a.object),keywords:E.a.arrayOf(E.a.string),title:E.a.string.isRequired};var M=b;n.d(t,"query",function(){return k});var k="2550124423";t.default=function(e){var t=e.data.mdx,n=t.code,a=t.frontmatter;return r.a.createElement(d,null,r.a.createElement(M,{title:t.frontmatter.title}),r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"DocsContent-heading"},r.a.createElement("h2",{className:"DocsContent-title"},a.title),r.a.createElement("h4",{className:"DocsContent-subtitle"},a.description)),r.a.createElement("div",{className:"DocsContent-content"},r.a.createElement(v.a,null,n.body))))}},155:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},156:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(4),i=n.n(c),o=n(38),s=n.n(o);n.d(t,"a",function(){return s.a});n(155),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},157:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),r=n.n(a),c=r.a.createContext({});t.b=function(e){var t=e.children,n=Object(a.useState)([{path:"/docs/getting-started",title:"Getting Started"},{path:"/docs/quick-start",title:"Quick Start"},{path:"/docs/components",title:"Components"}])[0];return r.a.createElement(c.Provider,{value:{routes:n}},t)}},158:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),c=n(0),i=n.n(c),o=n(4),s=n.n(o),l=n(58),u=n(2),m=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(l.a,r()({location:t,pageResources:n},n.json)):null};m.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=m},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Formare",description:"A modern, lightweight and simple CSS Framework for building web interfaces hassle-free.",author:"David Kurnia Kristiadi @dkk94"}}}}},160:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(4),i=n.n(c),o=n(156),s=function(e){e.siteTitle;return r.a.createElement("header",{className:"MainHeader"},r.a.createElement("div",{className:"Navbar Navbar--primary"},r.a.createElement("div",{className:"Container Container--fullWidth u-Flex u-Flex-row"},r.a.createElement(l,null),r.a.createElement(u,null))))},l=function(){return r.a.createElement("div",{className:"Navbar-block u-PaddingLeft u-PaddingRight-large"},r.a.createElement(o.a,{to:"/",className:"u-FontSize-xlarge u-FontWeight-semibold u-Color-light"},"Formare"))},u=function(){return r.a.createElement("div",{className:"Navbar-block"},r.a.createElement("nav",{className:"Nav"},r.a.createElement("ul",{className:"Nav-list"},r.a.createElement("li",{className:"Nav-item"},r.a.createElement(o.a,{className:"Nav-link",to:"/docs/getting-started",activeClassName:"is-active"},"Documentation")),r.a.createElement("li",{className:"Nav-item"},r.a.createElement(o.a,{className:"Nav-link",to:"/docs/getting-started",activeClassName:"is-active"},"Github")))))};s.propTypes={siteTitle:i.a.string},s.defaultProps={siteTitle:""};var m=s,p=n(157),d=(n(162),n(163),n(161)),f=n(164);d.b.add(f.a,f.c,f.b);var v=function(e){var t=e.children;return r.a.createElement(p.b,null,r.a.createElement(m,null),r.a.createElement("main",{className:"MainBody"},t))};v.propTypes={children:i.a.node.isRequired};t.a=v},165:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===c)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},173:function(e,t,n){var a=n(174);n(59),n(40),n(29),n(176);var r=n(8),c=n(82),i=n(0),o=n(55),s=o.useMDXComponents,l=o.mdx,u=n(72).useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,m=c(e,["scope","components","children"]),p=s(n),d=u(t),f=i.useMemo(function(){if(!o)return null;var e=r({React:i,mdx:l},d),t=Object.keys(e),n=t.map(function(t){return e[t]});return a(Function,["_fn"].concat(t,[""+o])).apply(void 0,[{}].concat(n))},[o,t]);return i.createElement(f,r({components:p},m))}},174:function(e,t,n){var a=n(175);function r(t,n,c){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=r=function(e,t,n){var r=[null];r.push.apply(r,t);var c=new(Function.bind.apply(e,r));return n&&a(c,n.prototype),c}:e.exports=r=Reflect.construct,r.apply(null,arguments)}e.exports=r},175:function(e,t){function n(t,a){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,a)}e.exports=n},176:function(e,t,n){var a=n(28),r=n(27);n(177)("keys",function(){return function(e){return r(a(e))}})},177:function(e,t,n){var a=n(10),r=n(20),c=n(21);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],i={};i[e]=t(n),a(a.S+a.F*c(function(){n(1)}),"Object",i)}}}]);
//# sourceMappingURL=component---src-templates-docs-template-js-159435a941db480f05a4.js.map