(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(165),s=a(169);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:"404 Not found"}),r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))}},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(43),c=a.n(l);a.d(t,"a",function(){return c.a});a(162),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},162:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},163:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=a(0),s=a.n(i),l=a(4),c=a.n(l),o=a(62),u=a(2),m=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return a?s.a.createElement(o.a,r()({location:t,pageResources:a},a.json)):null};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=m},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Formare",description:"A modern, lightweight and simple CSS Framework for building web interfaces hassle-free.",author:"David Kurnia Kristiadi @dkk94"}}}}},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(161),c=function(e){e.siteTitle;return r.a.createElement("header",{className:"MainHeader"},r.a.createElement("div",{className:"Navbar Navbar--primary"},r.a.createElement("div",{className:"Container Container--fullWidth u-Flex u-Flex-row"},r.a.createElement(o,null),r.a.createElement(u,null))))},o=function(){return r.a.createElement("div",{className:"Navbar-block u-PaddingLeft u-PaddingRight-large"},r.a.createElement(l.a,{to:"/",className:"u-FontSize-xlarge u-FontWeight-semibold u-Color-light"},"Formare"))},u=function(){return r.a.createElement("div",{className:"Navbar-block"},r.a.createElement("nav",{className:"Nav"},r.a.createElement("ul",{className:"Nav-list"},r.a.createElement("li",{className:"Nav-item"},r.a.createElement(l.a,{className:"Nav-link",to:"/docs/getting-started",activeClassName:"is-active"},"Getting Started")),r.a.createElement("li",{className:"Nav-item"},r.a.createElement(l.a,{className:"Nav-link",to:"/docs/getting-started",activeClassName:"is-active"},"Github")))))};c.propTypes={siteTitle:s.a.string},c.defaultProps={siteTitle:""};var m=c,d=(a(166),a(167),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement("main",{className:"MainBody"},t))});d.propTypes={children:s.a.node.isRequired};t.a=d},169:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),s=a(4),l=a.n(s),c=a(168),o=a.n(c),u=function(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description,m=[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}];return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:m.concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})};u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u}}]);
//# sourceMappingURL=component---src-pages-404-js-aa7c319150147f8527cf.js.map