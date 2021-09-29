(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{205:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return d}));var n=t(3),a=t(7),i=(t(0),t(251)),s={id:"index-usingruby",title:"How to query Graph data in Redis with Ruby",sidebar_label:"RedisGraph and Ruby",slug:"/howtos/redisgraph/using-ruby"},o={unversionedId:"howtos/redisgraph/using-ruby/index-usingruby",id:"howtos/redisgraph/using-ruby/index-usingruby",isDocsHomePage:!1,title:"How to query Graph data in Redis with Ruby",description:"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code.",source:"@site/docs/howtos/redisgraph/using-ruby/index-usingruby.mdx",slug:"/howtos/redisgraph/using-ruby",permalink:"/howtos/redisgraph/using-ruby",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/using-ruby/index-usingruby.mdx",version:"current",sidebar_label:"RedisGraph and Ruby",sidebar:"docs",previous:{title:"How to query Graph data in Redis with Python",permalink:"/howtos/redisgraph/using-python"},next:{title:"How to query Graph data in Redis with JavaScript",permalink:"/howtos/redisgraph/using-javascript"}},p=[{value:"RedisGraph Ruby Client",id:"redisgraph-ruby-client",children:[{value:"Step 1. Run RedisMod Docker container",id:"step-1-run-redismod-docker-container",children:[]},{value:"Step 2. Verify if RedisGraph module is loaded",id:"step-2-verify-if-redisgraph-module-is-loaded",children:[]},{value:"Step 3. Loading the RedisGraph Ruby Module",id:"step-3-loading-the-redisgraph-ruby-module",children:[]},{value:"Step 4. Install the prerequisites",id:"step-4-install-the-prerequisites",children:[]},{value:"Step 5. Write a Ruby code",id:"step-5-write-a-ruby-code",children:[]},{value:"Step 6. Execute the Ruby code",id:"step-6-execute-the-ruby-code",children:[]},{value:"Step 7. Monitor the Graph query",id:"step-7-monitor-the-graph-query",children:[]},{value:"References",id:"references",children:[]}]}],l={toc:p};function d(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code."),Object(i.b)("h2",{id:"redisgraph-ruby-client"},"RedisGraph Ruby Client"),Object(i.b)("p",null,"redisgraph-rb is a Ruby gem client for the RedisGraph module. It relies on redis-rb for Redis connection management and provides support for graph QUERY, EXPLAIN, and DELETE commands."),Object(i.b)("p",null,"Follow the steps below to get started with RedisGraph with Ruby:"),Object(i.b)("h3",{id:"step-1-run-redismod-docker-container"},"Step 1. Run RedisMod Docker container"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," docker run -p 6379:6379 --name redislabs/redismodCopy\n")),Object(i.b)("h3",{id:"step-2-verify-if-redisgraph-module-is-loaded"},"Step 2. Verify if RedisGraph module is loaded"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," info modules\n # Modules\n module:name=graph,ver=20405,api=1,filters=0,usedby=[],using=[],options=[]\n")),Object(i.b)("h3",{id:"step-3-loading-the-redisgraph-ruby-module"},"Step 3. Loading the RedisGraph Ruby Module"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," gem install redisgraph\n Fetching redisgraph-2.0.3.gem\n Successfully installed redisgraph-2.0.3\n 1 gem installed\n\n")),Object(i.b)("h3",{id:"step-4-install-the-prerequisites"},"Step 4. Install the prerequisites"),Object(i.b)("p",null,"To ensure prerequisites are installed, run the following: bundle install"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," bundle install\n")),Object(i.b)("h3",{id:"step-5-write-a-ruby-code"},"Step 5. Write a Ruby code"),Object(i.b)("p",null,'Copy the below sample code and save it in a file "test.rb"'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),' require \'redisgraph\'\n \n graphname = "sample"\n\n r = RedisGraph.new(graphname)\n\n cmd = """CREATE (:person {name: \'Jim\', age: 29})-[:works]->(:employer {name: \'Dunder Mifflin\'})"""\n response = r.query(cmd)\n response.stats\n\n cmd = """MATCH ()-[:works]->(e:employer) RETURN e"""\n\n response = r.query(cmd)\n\n response.print_resultset\n')),Object(i.b)("h3",{id:"step-6-execute-the-ruby-code"},"Step 6. Execute the Ruby code"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"  ruby test.rb \n")),Object(i.b)("h3",{id:"step-7-monitor-the-graph-query"},"Step 7. Monitor the Graph query"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' redis-cli \n 127.0.0.1:6379> monitor\n OK\n 1632716792.038955 [0 172.17.0.1:57804] "info"\n 1632716792.041201 [0 172.17.0.1:57804] "GRAPH.QUERY" "sample" "CREATE (:person {name: \'Jim\', age: 29})-[:works]->(:employer {name: \'Dunder Mifflin\'})" "--compact"\n 1632716792.042751 [0 172.17.0.1:57804] "GRAPH.QUERY" "sample" "MATCH ()-[:works]->(e:employer) RETURN e" "--compact"\n 1632716792.044241 [0 172.17.0.1:57804] "GRAPH.QUERY" "sample" "CALL db.propertyKeys()"\n 1632716812.060458 [0 172.17.0.1:57962] "COMMAND"\n 1632716813.148710 [0 172.17.0.1:57962] "GRAPH.QUERY" "sample" "CREATE (:person {name: \'Jim\', age: 29})-[:works]->(:employer {name: \'Dunder Mifflin\'})" "--compact"\n\n')),Object(i.b)("h3",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/howtos/redisgraphmovies/"}),"Building Movies database app using RedisGraph and NodeJS")),Object(i.b)("li",{parentName:"ul"},"Learn more about RedisGraph in the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisgraph/?_ga=2.186887980.520518125.1606546041-1440690046.1604964523"}),"Quickstart")," tutorial."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/explore/redisinsight/redisgraph"}),"Query, Visualize and Manipulate Graphs using RedisGraph Browser Tool"))),Object(i.b)("h2",{id:""}),Object(i.b)("div",null,Object(i.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(i.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}d.isMDXComponent=!0},251:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return h}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=d(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(t),b=n,h=u["".concat(s,".").concat(b)]||u[b]||c[b]||i;return t?a.a.createElement(h,o(o({ref:r},l),{},{components:t})):a.a.createElement(h,o({ref:r},l))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=b;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);