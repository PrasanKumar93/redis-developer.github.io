(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var s=a(3),n=a(7),i=(a(0),a(361)),r=(a(363),{id:"index-herokugo",title:"Deploy a Go app on Heroku using Redis",sidebar_label:"How to deploy a Go based application on Heroku using Redis",slug:"/create/heroku/herokugo",authors:["ajeet"]}),o={unversionedId:"create/heroku/herokugo/index-herokugo",id:"create/heroku/herokugo/index-herokugo",isDocsHomePage:!1,title:"Deploy a Go app on Heroku using Redis",description:"Heroku is a PaaS (platform as a service) for building and running software applications in the cloud. Heroku today supports programming languages such as Java, Python, Ruby, Node.js and Go. Heroku manages your app portfolio in a straightforward Dashboard or with a CLI. Heroku's horizontally scalable, share-nothing architecture is designed for building services in today's world of containerized applications.",source:"@site/docs/create/heroku/herokugo/index-herokugo.mdx",slug:"/create/heroku/herokugo",permalink:"/create/heroku/herokugo",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/heroku/herokugo/index-herokugo.mdx",version:"current",lastUpdatedAt:1647145632,sidebar_label:"How to deploy a Go based application on Heroku using Redis",sidebar:"docs",previous:{title:"Deploy a Ruby app on Heroku using Redis",permalink:"/create/heroku/herokuruby"},next:{title:"Azure Cache for Redis",permalink:"/create/azure"}},c=[{value:"Step 1. Create a Redis Enterprise Cloud Database",id:"step-1-create-a-redis-enterprise-cloud-database",children:[]},{value:"Step 2. Create a Heroku account",id:"step-2-create-a-heroku-account",children:[]},{value:"Step 3. Install the Heroku CLI on your system",id:"step-3-install-the-heroku-cli-on-your-system",children:[]},{value:"Step 4. Login to Heroku",id:"step-4-login-to-heroku",children:[]},{value:"Step 5. Connect your application to Redis Enterprise Cloud",id:"step-5-connect-your-application-to-redis-enterprise-cloud",children:[]},{value:"Step 6. Setting up Environment Variables",id:"step-6-setting-up-environment-variables",children:[]},{value:"Step 7. Deploy your code",id:"step-7-deploy-your-code",children:[]},{value:"Step 8. Accessing the application",id:"step-8-accessing-the-application",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"How is the data stored?",id:"how-is-the-data-stored",children:[]},{value:"How is the data accessed?",id:"how-is-the-data-accessed",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],l={toc:c};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Heroku is a PaaS (platform as a service) for building and running software applications in the cloud. Heroku today supports programming languages such as Java, Python, Ruby, Node.js and Go. Heroku manages your app portfolio in a straightforward Dashboard or with a CLI. Heroku's horizontally scalable, share-nothing architecture is designed for building services in today's world of containerized applications. "),Object(i.b)("p",null,"Here are few popular terminologies used in Heroku:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Dynos: The Heroku Platform uses the container model to run and scale all Heroku apps. The containers used at Heroku are called \u201cdynos". Dynos are isolated, virtualized Linux containers that are designed to execute code based on a user-specified command.'),Object(i.b)("li",{parentName:"ul"},"Buildpack: It is a config script for the build automation process, describing how a container image should be created."),Object(i.b)("li",{parentName:"ul"},"Add-ons: These are tools and services for extending a Heroku application's functionality, such as data storage and processing, monitoring, or analytics."),Object(i.b)("li",{parentName:"ul"},"Heroku CLI: It is a tool for building and running Heroku apps from within the terminal. (Docker, too, uses its own CLI for working with the platform.)"),Object(i.b)("li",{parentName:"ul"},"Git: It is a popular version control system for tracking changes to a software's source code. Heroku makes it easy to manage your app deployments with git, and has built-in integrations with the GitHub hosting platform for git repositories.")),Object(i.b)("p",null,"Heroku recognizes an app as being written in Go by the existence of a ",Object(i.b)("inlineCode",{parentName:"p"},"go.mod")," file in the root directory. Heroku also supports govendor, godep & GB, but this tutorial focuses only on Go modules. Here's a quickstart guide to deploy Go apps on Heroku using Redis. We will be deploying a sample Chat application written in Go."),Object(i.b)("h3",{id:"step-1-create-a-redis-enterprise-cloud-database"},"Step 1. Create a Redis Enterprise Cloud Database"),Object(i.b)("p",null,"Create your free Redis Enterprise Cloud account by visiting ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"https://redis.com/try-free"}),"this link"),"."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(s.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(s.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"TIP")),Object(i.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For a limited time, use ",Object(i.b)("strong",{parentName:"p"},"TIGER200")," to get ",Object(i.b)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),Object(i.b)("p",{parentName:"div"},"\ud83c\udf89 ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"https://redis.com/try-free"}),"Click here to sign up")))),Object(i.b)("p",null,Object(i.b)("img",{alt:"recloud",src:a(757).default})),Object(i.b)("p",null,Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"/create/rediscloud"}),"Follow this link to create a Redis Enterprise Cloud")," subscription and database as shown below:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:a(758).default})),Object(i.b)("p",null,"The database endpoint URL is unique so will be different in your case. Save the URL details, port and password for future reference. "),Object(i.b)("h3",{id:"step-2-create-a-heroku-account"},"Step 2. Create a Heroku account"),Object(i.b)("p",null,"If you are using Heroku for the first time, create your new Heroku account ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"https://signup.heroku.com/login"}),"through this link"),"."),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:a(759).default})),Object(i.b)("h3",{id:"step-3-install-the-heroku-cli-on-your-system"},"Step 3. Install the Heroku CLI on your system"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-macos"})," brew install heroku\n")),Object(i.b)("h3",{id:"step-4-login-to-heroku"},"Step 4. Login to Heroku"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"})," heroku login\n heroku: Press any key to open up the browser to login or q to exit:\n Opening browser to https://cli-auth.heroku.com/auth/cli/browser/XXXXXXXXXXA\n Logging in... done\n Logged in as your_email_address\n")),Object(i.b)("h3",{id:"step-5-connect-your-application-to-redis-enterprise-cloud"},"Step 5. Connect your application to Redis Enterprise Cloud"),Object(i.b)("p",null,"For this demonstration, we will be using a ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"https://github.com/redis-developer/basic-redis-chat-demo-go"}),"Sample Redis Chat app"),"."),Object(i.b)("h4",{id:"clone-the-repository"},"Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/basic-redis-chat-demo-go\n")),Object(i.b)("p",null,"Run the commands below to get a functioning Git repository that contains a simple application as well as a ",Object(i.b)("inlineCode",{parentName:"p"},"app.json")," file."),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"heroku create\nCreating app... done, \u2b22 stark-island-03510\nhttps://stark-island-03510.herokuapp.com/ | https://git.heroku.com/stark-island-03510.git\n")),Object(i.b)("h3",{id:"step-6-setting-up-environment-variables"},"Step 6. Setting up Environment Variables"),Object(i.b)("p",null,'Go to the Heroku dashboard, click "Settings" and set the following parameters under Config Vars:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"SERVER_ADDRESS=:5555"),Object(i.b)("li",{parentName:"ul"},"CLIENT_LOCATION=/api/public"),Object(i.b)("li",{parentName:"ul"},"REDIS_HOST="),Object(i.b)("li",{parentName:"ul"},"REDIS_PASSWORD=")),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:a(760).default})),Object(i.b)("p",null,"You now have a functioning Git repository that contains a simple application as well as a ",Object(i.b)("inlineCode",{parentName:"p"},"app.json")," file."),Object(i.b)("h3",{id:"step-7-deploy-your-code"},"Step 7. Deploy your code"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"$ git push heroku\n")),Object(i.b)("p",null,"Wait for few seconds and you will see the messages below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"remote: \nremote: Verifying deploy... done.\nTo https://git.heroku.com/stark-island-03510\n * [new branch]      master -> master\n")),Object(i.b)("h3",{id:"step-8-accessing-the-application"},"Step 8. Accessing the application"),Object(i.b)("p",null,"Open ",Object(i.b)("inlineCode",{parentName:"p"},"https://stark-island-03510.herokuapp.com/")," to access your application on the browser.\nPlease note that the Web URL is unique, hence it will be different in your case."),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:a(761).default})),Object(i.b)("h3",{id:"how-does-it-work"},"How does it work?"),Object(i.b)("p",null,"The chat server works as a basic REST API which involves managing sessions and handling the user state in the chat rooms (besides the WebSocket/real-time part).\nWhen the server starts, the initialization step occurs. At first, a new Redis connection is established and the code checks whether or not to load the demo data."),Object(i.b)("h4",{id:"initialization"},"Initialization"),Object(i.b)("p",null,"For simplicity, a key named ",Object(i.b)("inlineCode",{parentName:"p"},"total_users")," is checked: if it does not exist, we fill the Redis database with initial data. ",Object(i.b)("inlineCode",{parentName:"p"},"EXISTS total_users")," (checks if the key exists).\nThe demo data initialization is handled in multiple steps:"),Object(i.b)("h4",{id:"creating-demo-users"},"Creating demo users"),Object(i.b)("p",null,"We create a new user id: ",Object(i.b)("inlineCode",{parentName:"p"},"INCR total_users"),". Then we set a user ID lookup key by user name: e.g. "),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{}),"SET username:nick user:1\n")),Object(i.b)("p",null,"And finally, the rest of the data is written to a Redis hash: "),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),'  HSET user:1 username "nick" password "bcrypt_hashed_password".\n')),Object(i.b)("p",null,'Additionally, each user is added to the default "General" room.\nFor handling rooms for each user, we have a set that holds the room ids. Here\'s an example command of how to add the room: '),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),' SADD user:1:rooms "0"\n')),Object(i.b)("p",null,"Next, we need to populate private messages between users. At first, private rooms are created: if a private room needs to be established, for each user a room id: ",Object(i.b)("inlineCode",{parentName:"p"},"room:1:2")," is generated, where numbers correspond to the user ids in ascending order."),Object(i.b)("p",null,"E.g. Create a private room between 2 users: "),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"})," SADD user:1:rooms 1:2 and SADD user:2:rooms 1:2\n")),Object(i.b)("p",null,"Then we add messages to this room by writing to a sorted set: "),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"})," ZADD room:1:2 1615480369 \"{'from': 1, 'date': 1615480369, 'message': 'Hello', 'roomId': '1:2'}\"\n")),Object(i.b)("p",null,"We use a stringified JSON object for keeping the message structure and simplify the implementation details for this demo-app."),Object(i.b)("p",null,'Populate the "General" room with messages. Messages are added to the sorted set with id of the "General" room: ',Object(i.b)("inlineCode",{parentName:"p"},"room:0"),"."),Object(i.b)("h4",{id:"pubsub"},"Pub/sub"),Object(i.b)("p",null,"After initialization, a pub/sub subscription is created: ",Object(i.b)("inlineCode",{parentName:"p"},"SUBSCRIBE MESSAGES"),". At the same time, each server instance will run a listener on a message on this channel to receive real-time updates."),Object(i.b)("p",null,"Again, for simplicity, each message is serialized to JSON, which we parse and then handle in the same manner, as WebSocket messages."),Object(i.b)("p",null,"Pub/sub allows us to connect multiple servers written in different languages without taking into consideration the implementation detail of each server."),Object(i.b)("h4",{id:"real-time-chat-and-session-handling"},"Real-time chat and session handling"),Object(i.b)("p",null,"A WebSocket/real-time server is instantiated, which then listens for the next events:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Connection. A new user is connected. At this point, a user ID is captured and saved to the session (which is cached in Redis). Note, that session caching is language/library-specific and it's used here purely for persistence and maintaining the state between server reloads.")),Object(i.b)("p",null,"A global set with online_users key is used for keeping the online state for each user. So on a new connection, a user ID is written to that set:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"})," SADD online_users 1\n")),Object(i.b)("p",null,"Here we have added a user with id 1 to the set ",Object(i.b)("inlineCode",{parentName:"p"},"online_users")),Object(i.b)("p",null,"After that, a message is broadcast to the clients to notify them that a new user is joined the chat."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Disconnect. It works similarly to the connection event, except we need to remove the user for online_users set and notify the clients: ",Object(i.b)("inlineCode",{parentName:"p"},"SREM online_users 1")," (makes user with id 1 offline).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Message. A user sends a message, and it needs to be broadcast to the other clients. The pub/sub also allows us to broadcast this message to all server instances which are connected to this Redis server:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(s.a)({parentName:"pre"},{})," PUBLISH message \"{'serverId': 4132, 'type':'message', 'data': {'from': 1, 'date': 1615480369, 'message': 'Hello', 'roomId': '1:2'}}\"\n")))),Object(i.b)("p",null,"Note we send additional data related to the type of the message and the server id. Server id is used to discard the messages by the server instance which sends them since it is connected to the same MESSAGES channel."),Object(i.b)("p",null,"The type field of the serialized JSON corresponds to the real-time method we use for real-time communication (connect/disconnect/message)."),Object(i.b)("p",null,"The data is method-specific information. In the example above it's related to the new message."),Object(i.b)("h3",{id:"how-is-the-data-stored"},"How is the data stored?"),Object(i.b)("p",null,"Redis is used mainly as a database to keep the user/messages data and for sending messages between connected servers."),Object(i.b)("p",null,"The real-time functionality is handled by Socket.IO for server-client messaging. Additionally each server instance subscribes to the ",Object(i.b)("inlineCode",{parentName:"p"},"MESSAGES")," pub/sub channel and dispatches messages once they arrive. Note that, the server transports pub/sub messages with a separate event stream (handled by Server Sent Events), this is due to the need to run the pub/sub message loop separately from socket.io signals."),Object(i.b)("p",null,"The chat data is stored in various keys and various data types.\nUser data is stored in a hash where each user entry contains the next values:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"username: unique user name;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"password: hashed password")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Additionally a set of rooms is associated with user")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Rooms are sorted sets which contains messages where score is the timestamp for each message")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Each room has a name associated with it")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'The "online" set is global for all users is used for keeping track on which user is online.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"User hashes are accessed by key ",Object(i.b)("inlineCode",{parentName:"p"},"user:{userId}"),". The data for it stored with ",Object(i.b)("inlineCode",{parentName:"p"},"HSET")," key field data. User id is calculated by incrementing the ",Object(i.b)("inlineCode",{parentName:"p"},"total_users")," key (",Object(i.b)("inlineCode",{parentName:"p"},"INCR total_users"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Usernames are stored as separate keys (",Object(i.b)("inlineCode",{parentName:"p"},"username:{username}"),") which returns the userId for quicker access and stored with ",Object(i.b)("inlineCode",{parentName:"p"},"SET username:{username} {userId}"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Rooms that a user belongs to are stored at ",Object(i.b)("inlineCode",{parentName:"p"},"user:{userId}:rooms")," as a set of room ids. A room is added by the ",Object(i.b)("inlineCode",{parentName:"p"},"SADD user:{userId}:rooms {roomId}")," command.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Messages are stored at ",Object(i.b)("inlineCode",{parentName:"p"},"room:{roomId}")," key in a sorted set (as mentioned above). They are added with the ",Object(i.b)("inlineCode",{parentName:"p"},"ZADD room:{roomId} {timestamp} {message}")," command. The message is serialized to an app-specific JSON string."))),Object(i.b)("h3",{id:"how-is-the-data-accessed"},"How is the data accessed?"),Object(i.b)("p",null,"Get User ",Object(i.b)("inlineCode",{parentName:"p"},"HGETALL user:{id}"),". "),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"})," HGETALL user:2\n")),Object(i.b)("p",null,"which gets data for the user with id: 2."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Online users: ",Object(i.b)("inlineCode",{parentName:"p"},"SMEMBERS online_users"),". This will return ids of users who are online")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get the ids of rooms that a user is in: ",Object(i.b)("inlineCode",{parentName:"p"},"SMEMBERS user:{id}:rooms"),".\nExample: "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(s.a)({parentName:"pre"},{})," SMEMBERS user:2:rooms\n")))),Object(i.b)("p",null,"This will return IDs of rooms for the user whose ID is 2"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get a list of messages: ",Object(i.b)("inlineCode",{parentName:"p"},"ZREVRANGE room:{roomId} {offset_start} {offset_end}"),".\nExample: "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(s.a)({parentName:"pre"},{})," ZREVRANGE room:1:2 0 50\n")),Object(i.b)("p",{parentName:"li"},"This returns 50 messages with 0 offsets for the private room between users with IDs 1 and 2."))),Object(i.b)("h3",{id:"next-steps"},"Next Steps"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"/explore/redisinsight/"}),"Connecting to the database using RedisInsight")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"https://launchpad.redis.com/"}),"Accessing Go-based apps over Redis LaunchPad")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"/create/heroku/herokujava"}),"Deploy Java apps on Heroku using Redis")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"/create/heroku/herokujava"}),"Deploy NodeJS apps on Heroku using Redis"))))}b.isMDXComponent=!0},363:function(e,t,a){"use strict";var s=a(0),n=a.n(s),i=a(361),r=a(368);a(362),a(59);t.a=function(e){var t=n.a.useState(!1),a=t[0],s=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return s(!a)}})))),a&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(i.a,{components:r.a},e.children)))}},757:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/try-free-52c2cec515e5862b2f5021faf0fbbe53.png"},758:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/launch_database-d6e7a8de08c8e55f50cb035f63b9eb31.png"},759:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/create_heroku-adefbcbc7fe61ec48d1a65a3172f9f58.png"},760:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/heroku_environment-3187ff80b22764869b3d1e2d011ced15.png"},761:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/heroku_chatapp_go-c5f1df97f3c706ed435200ae6643b82d.png"}}]);