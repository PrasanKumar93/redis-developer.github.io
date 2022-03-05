(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{176:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(335)),o=(a(340),a(341),a(336),a(337),{id:"index-spring",title:"Spring",sidebar_label:"Overview",slug:"/develop/java/spring/",authors:["bsb"]}),s={unversionedId:"develop/java/spring/index-spring",id:"develop/java/spring/index-spring",isDocsHomePage:!1,title:"Spring",description:"Data-Driven Applications with Spring Boot and Redis",source:"@site/docs/develop/java/spring/getting-started.mdx",slug:"/develop/java/spring/",permalink:"/develop/java/spring/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/getting-started.mdx",version:"current",lastUpdatedAt:1646402901,sidebar_label:"Overview",sidebar:"docs",previous:{title:"Java and Redis",permalink:"/develop/java"},next:{title:"Redis OM - Spring",permalink:"/develop/java/spring/redis-om/redis-om-spring"}},c=[],l={toc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"data-driven-applications-with-spring-boot-and-redis"},"Data-Driven Applications with Spring Boot and Redis"),Object(i.b)("p",null,'Spring Boot is the most powerful and popular way to easily create stand-alone,\nproduction-grade Spring based Applications that you can "just run".'),Object(i.b)("p",null,"Paired with Redis, Spring and Spring Boot give unrivaled versatility. For a quick,\ntour of some of the cool things you can do with Spring and Redis checkout the session by\nJosh Long and Brian Sam-Bodden at RedisConf 2021:"),Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Yq8Cc7eOgF8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}d.isMDXComponent=!0},337:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(335),o=a(342);a(336),a(59);t.a=function(e){var t=r.a.useState(!1),a=t[0],n=t[1];return r.a.createElement("div",{className:"ri-container"},r.a.createElement("div",{className:"ri-description-short"},r.a.createElement("div",{className:"ri-icon"},r.a.createElement("span",{className:"fe fe-zap"})),r.a.createElement("div",{className:"ri-detail"},r.a.createElement("div",{className:"ri-title"},r.a.createElement("a",{href:e.page},e.title)),r.a.createElement("div",{className:"ri-description"},e.description,r.a.Children.count(e.children)>0&&r.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!a)}})))),a&&r.a.createElement("div",{className:"ri-description-long"},r.a.createElement(i.a,{components:o.a},e.children)))}},338:function(e,t,a){"use strict";var n=a(0),r=a(339);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},339:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},340:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(338),o=a(343),s=a(60),c=a.n(s),l=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,u=e.values,p=e.groupId,m=e.className,v=Object(i.a)(),f=v.tabGroupChoices,b=v.setTabGroupChoices,g=Object(n.useState)(s),h=g[0],w=g[1],j=n.Children.toArray(e.children);if(null!=p){var O=f[p];null!=O&&O!==h&&u.some((function(e){return e.value===O}))&&w(O)}var y=function(e){w(e),null!=p&&b(p,e)},E=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},341:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);