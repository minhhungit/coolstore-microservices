(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{198:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"microservices-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microservices-development","aria-hidden":"true"}},[e._v("#")]),e._v(" Microservices Development")]),e._v(" "),a("h2",{attrs:{id:"local-development-craftmanship"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-development-craftmanship","aria-hidden":"true"}},[e._v("#")]),e._v(" Local Development Craftmanship")]),e._v(" "),a("h3",{attrs:{id:"netcorekit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netcorekit","aria-hidden":"true"}},[e._v("#")]),e._v(" NetCoreKit")]),e._v(" "),a("p",[e._v("All .NET microservices are developed by using "),a("a",{attrs:{href:"https://github.com/cloudnative-netcore/netcorekit",target:"_blank",rel:"noopener noreferrer"}},[e._v("NetCoreKit"),a("OutboundLink")],1),e._v(" library. So we need to make it as a "),a("code",[e._v("submodule")]),e._v(" in "),a("code",[e._v("coolstore-microservices")]),e._v(" project.")]),e._v(" "),a("h4",{attrs:{id:"remove-submodule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-submodule","aria-hidden":"true"}},[e._v("#")]),e._v(" Remove submodule")]),e._v(" "),a("p",[e._v("If you have already added submodules for "),a("code",[e._v("netcorekit")]),e._v(", then you need to remove it first. Let doing following steps to remove it.")]),e._v(" "),a("p",[e._v("At root of "),a("code",[e._v("coolstore-microservices")]),e._v(" project, run command below")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> rm -Rf src\\netcorekit\n> rm -rf .git\\modules\\src\n")])])]),a("p",[e._v("Then open up "),a("code",[e._v(".git\\config")]),e._v(" file, and delete the section with "),a("code",[e._v("src\\netcorekit")]),e._v(".")]),e._v(" "),a("p",[e._v("Refs:")]),e._v(" "),a("ul",[a("li",[e._v("https://stackoverflow.com/questions/12218420/add-a-submodule-which-cant-be-removed-from-the-index/39189599")]),e._v(" "),a("li",[e._v("https://stackoverflow.com/questions/43789152/git-removing-submodule-error")])]),e._v(" "),a("h4",{attrs:{id:"add-submodule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-submodule","aria-hidden":"true"}},[e._v("#")]),e._v(" Add submodule")]),e._v(" "),a("p",[e._v("Run the command at the root of "),a("code",[e._v("coolstore-microservices")]),e._v(" project as following")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> git submodule add https://github.com/cloudnative-netcore/netcorekit src/netcorekit\n")])])]),a("p",[e._v("It should create a file "),a("code",[e._v(".gitmodules")]),e._v(" with the content as below")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[submodule "src/netcorekit"]\n\tpath = src/netcorekit\n\turl = https://github.com/cloudnative-netcore/netcorekit\n\tignore = dirty\n')])])]),a("h4",{attrs:{id:"update-submodule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-submodule","aria-hidden":"true"}},[e._v("#")]),e._v(" Update submodule")]),e._v(" "),a("p",[e._v("To update the content from "),a("code",[e._v("NetCoreKit")]),e._v(" project, run")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> git submodule foreach git pull origin master\n")])])]),a("p",[e._v("Reference at https://stackoverflow.com/questions/5828324/update-git-submodule-to-latest-commit-on-origin")]),e._v(" "),a("p",[a("em",[e._v("Notes")]),e._v(": we can also check out a branch or a tag at https://stackoverflow.com/questions/1777854/how-can-i-specify-a-branch-tag-when-adding-a-git-submodule")]),e._v(" "),a("h3",{attrs:{id:"identity-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#identity-server","aria-hidden":"true"}},[e._v("#")]),e._v(" Identity Server")]),e._v(" "),a("ul",[a("li",[e._v("IdentityServer4")])]),e._v(" "),a("h4",{attrs:{id:"postman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postman","aria-hidden":"true"}},[e._v("#")]),e._v(" Postman")]),e._v(" "),a("p",[a("img",{attrs:{src:"/coolstore-microservices/postman-graphql.png",alt:""}})]),e._v(" "),a("blockquote",[a("p",[e._v("TODO")])]),e._v(" "),a("h4",{attrs:{id:"open-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Open API")]),e._v(" "),a("blockquote",[a("p",[e._v("TODO")])]),e._v(" "),a("h4",{attrs:{id:"graphql-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graphql-server","aria-hidden":"true"}},[e._v("#")]),e._v(" GraphQL Server")]),e._v(" "),a("blockquote",[a("p",[e._v("TODO")])]),e._v(" "),a("h4",{attrs:{id:"front-and-back-office-websites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#front-and-back-office-websites","aria-hidden":"true"}},[e._v("#")]),e._v(" Front and Back Office Websites")]),e._v(" "),a("blockquote",[a("p",[e._v("TODO")])]),e._v(" "),a("h3",{attrs:{id:"grpc-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc-service","aria-hidden":"true"}},[e._v("#")]),e._v(" gRPC Service")]),e._v(" "),a("ul",[a("li",[e._v("Grpc")]),e._v(" "),a("li",[e._v("Google.Protobuf")]),e._v(" "),a("li",[e._v("Google.Api.Gax.Grpc")])]),e._v(" "),a("p",[e._v("Before you can generate "),a("code",[e._v("gRPC")]),e._v(" files for all microservices in this project you need to install some of tool as below")]),e._v(" "),a("h4",{attrs:{id:"install-protoc-gen-swagger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-protoc-gen-swagger","aria-hidden":"true"}},[e._v("#")]),e._v(" Install "),a("code",[e._v("protoc-gen-swagger")])]),e._v(" "),a("p",[e._v("This will help to generate "),a("code",[e._v("Open Api")]),e._v(" file (former is "),a("code",[e._v("Swagger")]),e._v("), and used in "),a("code",[e._v("./src/services/open-api")]),e._v(" service")]),e._v(" "),a("p",[e._v("More information can be found at https://github.com/grpc-ecosystem/grpc-gateway")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger\n")])])]),a("p",[e._v("At the root of each microservice, we put one "),a("code",[e._v("bash")]),e._v(" script with named "),a("code",[e._v("cmd_gen_proto.sh")]),e._v(" so that you can generate standalone "),a("code",[e._v("gRPC")]),e._v(" files for each service, and if you want to generate "),a("code",[e._v("gRPC")]),e._v(" files for all of them, then you can access and run at "),a("code",[e._v("./deploys/scripts/gen-protos.sh")])]),e._v(" "),a("h3",{attrs:{id:"envoy-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#envoy-proxy","aria-hidden":"true"}},[e._v("#")]),e._v(" Envoy Proxy")]),e._v(" "),a("ul",[a("li",[e._v("envoy-proxy")])]),e._v(" "),a("blockquote",[a("p",[e._v("TODO")])]),e._v(" "),a("h3",{attrs:{id:"open-api-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-api-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Open Api")]),e._v(" "),a("ul",[a("li",[e._v("Swashbuckle.AspNetCore.SwaggerUI")])]),e._v(" "),a("blockquote",[a("p",[e._v("TODO")])]),e._v(" "),a("h3",{attrs:{id:"graphql-server-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graphql-server-2","aria-hidden":"true"}},[e._v("#")]),e._v(" GraphQL Server")]),e._v(" "),a("ul",[a("li",[e._v("tanka.graphql")]),e._v(" "),a("li",[e._v("tanka.graphql.server")]),e._v(" "),a("li",[e._v("GraphQL.Server.Ui.Playground")]),e._v(" "),a("li",[e._v("GraphQL.Server.Ui.Voyager")])]),e._v(" "),a("blockquote",[a("p",[e._v("TODO")])]),e._v(" "),a("h3",{attrs:{id:"front-and-back-office-websites-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#front-and-back-office-websites-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Front and back office websites")]),e._v(" "),a("h4",{attrs:{id:"front-office-website"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#front-office-website","aria-hidden":"true"}},[e._v("#")]),e._v(" Front office website")]),e._v(" "),a("ul",[a("li",[e._v("vuejs")]),e._v(" "),a("li",[e._v("webpack")])]),e._v(" "),a("blockquote",[a("p",[e._v("TODO")])]),e._v(" "),a("h4",{attrs:{id:"back-office-website"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#back-office-website","aria-hidden":"true"}},[e._v("#")]),e._v(" Back office website")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("create-react-app")])]),e._v(" "),a("li",[a("p",[e._v("apollo-client")])]),e._v(" "),a("li",[a("p",[e._v("tanka-graphql-client")])]),e._v(" "),a("li",[a("p",[e._v("At the root of "),a("code",[e._v("src/backoffice")]),e._v(", we create a "),a("code",[e._v(".env")]),e._v(" with content as below")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("REACT_APP_GRAPHQL_ENDPOINT=http://localhost:5011\nREACT_APP_AUTHORITY=http://localhost:56219\nREACT_APP_ROOT_URL=http://localhost:3000\nREACT_APP_CLIENT_ID=backoffice\n")])])]),a("p",[e._v("This will point to the local graphql endpoint. When we deploy it to production, we will ovewrite it with another configuration")]),e._v(" "),a("ul",[a("li",[e._v("Then we run "),a("code",[e._v("yarn start")]),e._v(" to start development the "),a("code",[e._v("back-office")]),e._v(" app")])]),e._v(" "),a("h2",{attrs:{id:"up-and-running-with-docker-and-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#up-and-running-with-docker-and-docker-compose","aria-hidden":"true"}},[e._v("#")]),e._v(" Up and Running with Docker and Docker Compose")]),e._v(" "),a("h3",{attrs:{id:"environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Environment variables")]),e._v(" "),a("p",[e._v("To developing in the localhost, we need to add "),a("code",[e._v(".env")]),e._v(" file and put it to the root of "),a("code",[e._v("coolstore-microservices")]),e._v(" project. The content of it as below")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("WEB_PORT=8084\nBACKOFFICE_PORT=3000\n\nOPENAPI_SVR_PORT=5010\nGRAPHQL_SVR_PORT=5011\nIDP_SVR_PORT=8085\n\nCATALOG_SVC_PORT=5002\nCART_SVC_PORT=5003\nINVENTORY_SVC_PORT=5004\nRATING_SVC_PORT=5007\n\nMONGODB_PORT=27017\nMYSQLDB_PORT=3306\n\nHOST_IP=<localhost ip get from ipconfig>\n")])])]),a("h3",{attrs:{id:"protobuf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protobuf","aria-hidden":"true"}},[e._v("#")]),e._v(" Protobuf")]),e._v(" "),a("p",[e._v("In each microservices, we also have "),a("code",[e._v("cmd_gen_proto.sh")]),e._v(" to use "),a("code",[e._v("protobuf")]),e._v(" tools which generates "),a("code",[e._v("C#")]),e._v(" target file for .NET microservice project.")]),e._v(" "),a("h3",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),a("p",[e._v("In each microservices, we also have "),a("code",[e._v("cmd_build_image.sh")]),e._v(" to build the standalone service and tag it with "),a("code",[e._v("vndg")]),e._v(" prefix.")]),e._v(" "),a("h3",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Compose")]),e._v(" "),a("p",[e._v("To make the development easy, we've usually used "),a("code",[e._v("docker-compose")]),e._v(" to boost up all microservices and related components. We can make it run or debug the local microservices using this approach")]),e._v(" "),a("p",[e._v("Library and tool:")]),e._v(" "),a("ul",[a("li",[e._v("Docker Compose")]),e._v(" "),a("li",[e._v("Envoy Proxy")]),e._v(" "),a("li",[e._v("Open Api")]),e._v(" "),a("li",[e._v("Rest and gRPC protocols")])]),e._v(" "),a("p",[e._v("We support 4 modes of docker-compose at the moment:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("docker-compose.yml")]),e._v(": full running with all services, server and web endpoints")]),e._v(" "),a("li",[a("code",[e._v("docker-compose-graphql.yml")]),e._v(": only graphql endpoints with its backoffice app")]),e._v(" "),a("li",[a("code",[e._v("docker-compose-graphql.headless.yml")]),e._v(": only headless graphql endpoints")]),e._v(" "),a("li",[a("code",[e._v("docker-compose-graphql.dev.yml")]),e._v(": only microservices")])]),e._v(" "),a("h4",{attrs:{id:"list-of-endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-of-endpoints","aria-hidden":"true"}},[e._v("#")]),e._v(" List of endpoints")]),e._v(" "),a("h5",{attrs:{id:"envoy-proxy-endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#envoy-proxy-endpoints","aria-hidden":"true"}},[e._v("#")]),e._v(" Envoy Proxy Endpoints")]),e._v(" "),a("ul",[a("li",[e._v("Main Uri: http://localhost:8082")]),e._v(" "),a("li",[e._v("Admin Uri: http://localhost:8081")])]),e._v(" "),a("h5",{attrs:{id:"web-ui-endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-ui-endpoint","aria-hidden":"true"}},[e._v("#")]),e._v(" Web UI Endpoint")]),e._v(" "),a("ul",[a("li",[e._v("http://localhost:8084")])]),e._v(" "),a("h5",{attrs:{id:"identity-server-endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#identity-server-endpoint","aria-hidden":"true"}},[e._v("#")]),e._v(" Identity Server Endpoint")]),e._v(" "),a("ul",[a("li",[e._v("http://localhost:8085")])]),e._v(" "),a("h5",{attrs:{id:"open-api-endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-api-endpoint","aria-hidden":"true"}},[e._v("#")]),e._v(" Open Api Endpoint")]),e._v(" "),a("ul",[a("li",[e._v("http://localhost:8082/oai/")])]),e._v(" "),a("h5",{attrs:{id:"graphql-endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graphql-endpoint","aria-hidden":"true"}},[e._v("#")]),e._v(" GraphQL Endpoint")]),e._v(" "),a("ul",[a("li",[e._v("http://localhost:8082/gql/graphiql")]),e._v(" "),a("li",[e._v("http://localhost:8082/gql/playground")]),e._v(" "),a("li",[e._v("http://localhost:8082/gql/voyager")])]),e._v(" "),a("h4",{attrs:{id:"debugging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debugging","aria-hidden":"true"}},[e._v("#")]),e._v(" Debugging")]),e._v(" "),a("p",[e._v("Let says we want to debug "),a("code",[e._v("cart-service")]),e._v(" so we need to do some steps below")]),e._v(" "),a("h5",{attrs:{id:"step-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("em",[e._v("Step 1")]),e._v(":")]),e._v(" "),a("p",[e._v("Open "),a("code",[e._v("docker-compose.yml")]),e._v(", find the section below, then comment or remove it")]),e._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("cart-service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" cart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("service\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'vndg/cs-cart-service'")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" always\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" Features__EfCore__MySqlDb__FQDN=mysqldb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3306")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'5003:5003'")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("expose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'5003'")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" .\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("dockerfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ./src/services/cart/Dockerfile\n")])])]),a("h5",{attrs:{id:"step-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("em",[e._v("Step 2")]),e._v(":")]),e._v(" "),a("p",[e._v("Open "),a("code",[e._v("src/deploys/dockers/envoy-proxy/envoy.yaml")]),e._v(" file, then change a bit as below")]),e._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" cart_grpc_service\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("connect_timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 0.25s\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" static\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("lb_policy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" round_robin\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("http2_protocol_options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("socket_address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 192.168.137.1\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("port_value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5006")]),e._v("\n")])])]),a("p",[a("code",[e._v("type")]),e._v(" should change to "),a("code",[e._v("static")]),e._v(", and "),a("code",[e._v("address")]),e._v(" should be your real IP of the laptop you run")]),e._v(" "),a("p",[e._v("Then, on the command prompt type "),a("code",[e._v("bash")]),e._v(", and "),a("code",[e._v("./deploys/dockers/envoy-proxy/cmd_build_image.sh")])]),e._v(" "),a("h5",{attrs:{id:"step-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("em",[e._v("Step 3")]),e._v(":")]),e._v(" "),a("p",[e._v("Run "),a("code",[e._v("docker-compose up")])]),e._v(" "),a("h5",{attrs:{id:"step-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-4","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("em",[e._v("Step 4")]),e._v(":")]),e._v(" "),a("p",[e._v("Run your gRPC service in debug mode")]),e._v(" "),a("h5",{attrs:{id:"step-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-5","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("em",[e._v("Step 5")]),e._v(":")]),e._v(" "),a("p",[e._v("Go to "),a("code",[e._v("http://localhost:8082/oai/swagger/index.html")]),e._v(", click to any "),a("code",[e._v("cart-service")]),e._v(" endpoints in there")]),e._v(" "),a("p",[e._v("Enjoy your hack!")]),e._v(" "),a("h2",{attrs:{id:"up-and-running-manually-on-docker-for-desktop-and-aks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#up-and-running-manually-on-docker-for-desktop-and-aks","aria-hidden":"true"}},[e._v("#")]),e._v(" Up and running manually on Docker for desktop and AKS")]),e._v(" "),a("h3",{attrs:{id:"docker-for-desktop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-for-desktop","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker for desktop")]),e._v(" "),a("h4",{attrs:{id:"step-1-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 1")]),e._v(" "),a("p",[e._v("Make sure we have "),a("strong",[a("code",[e._v("Docker for Desktop")])]),e._v(" running with "),a("strong",[a("code",[e._v("Kubernetes")])]),e._v(" option enabled. We need to install "),a("strong",[a("code",[e._v("kubectl")])]),e._v(", "),a("strong",[a("code",[e._v("helm")])]),e._v(" and "),a("strong",[a("code",[e._v("istioctl")])]),e._v(" on the build machine as well.")]),e._v(" "),a("h4",{attrs:{id:"step-2-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 2")]),e._v(" "),a("p",[e._v("From current console, type "),a("code",[e._v("bash")]),e._v(" to enter "),a("code",[e._v("Linux Subsystem (Ubuntu)")])]),e._v(" "),a("h4",{attrs:{id:"step-3-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 3")]),e._v(" "),a("p",[e._v("Then "),a("code",[e._v("cd")]),e._v(" into your root of project")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ./deploys/scripts/build-images.sh\n")])])]),a("p",[e._v("It should run and package all docker images.")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Notes")])]),e._v(": it normally takes around 20 minutes for the first time")]),e._v(" "),a("h4",{attrs:{id:"step-4-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-4-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 4")]),e._v(" "),a("p",[e._v("Download and install "),a("a",{attrs:{href:"https://github.com/istio/istio/releases/tag/1.1.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("istio-1.1.1"),a("OutboundLink")],1),e._v(" on the box, and unzip it into somewhere, then initialize it with following commands")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("istio-1.1.1 path"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n$ kubectl create -f install/kubernetes/helm/helm-service-account.yaml\n$ helm init --service-account tiller --upgrade\n$ helm "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" install/kubernetes/helm/istio --name istio --namespace istio-system\n")])])]),a("p",[e._v("More information about installing "),a("code",[e._v("istio")]),e._v(" can be found at https://istio.io/docs/setup/kubernetes/helm-install")]),e._v(" "),a("h4",{attrs:{id:"step-5-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-5-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 5")]),e._v(" "),a("p",[e._v("Apply "),a("code",[e._v("istioctl")]),e._v(" command to "),a("code",[e._v("coolstore")]),e._v(" chart (please create k8s folder in folder deploys)")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ helm template deploys/charts/coolstore -f deploys/charts/coolstore/values.dev.yaml "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" deploys/out/coolstore.local.yaml\n$ istioctl kube-inject -f deploys/out/coolstore.local.yaml "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" kubectl apply -f -\n")])])]),a("h4",{attrs:{id:"step-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-6","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 6")]),e._v(" "),a("p",[e._v("Add hosts file with following content")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1 api.coolstore.local\n127.0.0.1 id.coolstore.local\n127.0.0.1 coolstore.local\n127.0.0.1 backoffice.coolstore.local\n")])])]),a("p",[e._v("Waiting for the container provision completed")]),e._v(" "),a("h4",{attrs:{id:"step-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-7","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 7")]),e._v(" "),a("p",[e._v("Install "),a("code",[e._v("coolstore-istio")]),e._v(" chart")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ helm "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" deploys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("charts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("coolstore-istio --name coolstore-istio\n")])])]),a("h4",{attrs:{id:"step-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-8","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 8")]),e._v(" "),a("p",[e._v("Install "),a("code",[e._v("envoy-proxy")]),e._v(" stuffs for routing directly from Rest to internal gRPC services")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl apply -f deploys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("k8s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("istio-sidecar-injector.yaml\n$ kubectl apply -f deploys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("k8s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("envoy-filter.yaml\n")])])]),a("h4",{attrs:{id:"step-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-9","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 9")]),e._v(" "),a("p",[e._v("Access to following URLs")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -I http://coolstore.local "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# website")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -I http://backoffice.coolstore.local "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# backoffice website")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -I http://api.coolstore.local "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# api gateway")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -I http://id.coolstore.local "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# identity provider")]),e._v("\n")])])]),a("h4",{attrs:{id:"step-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-10","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 10")]),e._v(" "),a("p",[e._v("Clean up "),a("code",[e._v("coolstore")]),e._v(" chart as")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl delete -f deployment/istio/coolstore.local.yaml\n$ helm delete coolstore-istio --purge\n$ helm delete istio --purge\n")])])]),a("p",[a("strong",[a("em",[e._v("Notes")])]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Global path: set "),a("code",[e._v("PATH")]),e._v(" for "),a("code",[e._v("docker")]),e._v(", "),a("code",[e._v("kubectl")]),e._v(", "),a("code",[e._v("helm")]),e._v(", and "),a("code",[e._v("istioctl")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Run with Nginx (not recommendation): if you want to run just only "),a("code",[e._v("Kubernetes")]),e._v(" + "),a("code",[e._v("nginx-ingress")]),e._v(" go to "),a("code",[e._v("deploys/charts/coolstore/values.yaml")]),e._v(", and modify as following")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("nginx:\n   enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n")])])]),a("p",[e._v("Then run the "),a("code",[e._v("helm")]),e._v(" command as")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ helm "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --name cs-nginx stable/nginx-ingress\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"azure-kubernetes-service-aks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-kubernetes-service-aks","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure Kubernetes Service (AKS)")]),e._v(" "),a("h4",{attrs:{id:"step-1-install-docker-for-windows-and-enable-kubernetes-ubuntu-wsl-kubectl-istioctl-helm-and-az"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-install-docker-for-windows-and-enable-kubernetes-ubuntu-wsl-kubectl-istioctl-helm-and-az","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 1: Install Docker for Windows and enable Kubernetes, Ubuntu WSL, kubectl, istioctl, helm and az")]),e._v(" "),a("h4",{attrs:{id:"step-2-create-coolstore-aks-enabled-rbac-minimum-should-have-3-nodes-istio-pilot-needs-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-coolstore-aks-enabled-rbac-minimum-should-have-3-nodes-istio-pilot-needs-it","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 2: Create coolstore AKS, enabled RBAC. Minimum should have 3 nodes (istio pilot needs it)")]),e._v(" "),a("p",[a("img",{attrs:{src:"/coolstore-microservices/create-cluster-aks-1.png",alt:""}})]),e._v(" "),a("p",[e._v("And make sure checking to "),a("code",[e._v("enable RBAC")]),e._v(" as following")]),e._v(" "),a("p",[a("img",{attrs:{src:"/coolstore-microservices/create-cluster-aks-2.png",alt:""}})]),e._v(" "),a("p",[e._v("Follow up with next steps to finish creating the cluster. It normally takes around "),a("code",[e._v("20 to 30 minutes")]),e._v(".")]),e._v(" "),a("p",[e._v("After it finished, we should be able to access to the "),a("code",[e._v("Kubernetes Dashboard")]),e._v(" with following steps")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ az aks get-credentials --resource-group coolstore --name coolstore\n$ kubectl proxy\n")])])]),a("p",[e._v("But now, you will not be able to access to Kubernetes Dashboard. Then we need to add several steps then")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl create clusterrolebinding kubernetes-dashboard -n kube-system --clusterrole"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("cluster-admin --serviceaccount"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kube-system:kubernetes-dashboard\n")])])]),a("p",[e._v("Get the "),a("code",[e._v("token")]),e._v(" subsequently")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl get secret "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("kubectl get serviceaccount kubernetes-dashboard -n kube-system -o "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("jsonpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{.secrets[0].name}"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -n kube-system -o "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("jsonpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{.data.token}"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" base64 --decode\n")])])]),a("p",[e._v("Paste the token to login page as http://localhost:8001/api/v1/namespaces/kube-system/services/kubernetes-dashboard/proxy/#!/login")]),e._v(" "),a("h4",{attrs:{id:"step-3-install-istio-on-aks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-install-istio-on-aks","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 3: Install Istio on AKS")]),e._v(" "),a("p",[e._v("Due to some of the timeout issues for helm at now so that I couldn’t use helm to install, but "),a("code",[e._v("export")]),e._v(" it to yaml file, then using kubectl to create it on AKS. "),a("code",[e._v("Download istio 1.0.0")]),e._v(", then upzip to somewhere on the machine. Following command to export and deploy it to AKS")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ helm template install/kubernetes/helm/istio --namespace istio-system "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" istio-dump.yaml\n$ kubectl create -f istio-dump.yaml\n$ kubectl create -f istio-dump.yaml\n")])])]),a("h4",{attrs:{id:"step-4-install-coolstore-on-aks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-4-install-coolstore-on-aks","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 4: Install Coolstore on AKS")]),e._v(" "),a("p",[e._v("Get the "),a("code",[e._v("internal istio-ingress IP")]),e._v(" by using")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl get services istio-ingressgateway -n istio-system -o"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("jsonpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(".spec.clusterIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Create the "),a("code",[e._v("values.aks.yaml")]),e._v(" with content like")]),e._v(" "),a("p",[e._v("gateway:\nip: 10.0.106.82")]),e._v(" "),a("p",[e._v("Then run helm command")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ helm template deploys/charts/coolstore -f deploys/charts/coolstore/values.aks.yaml "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" deploys/k8s/dev-all-in-one.aks.yaml\n")])])]),a("p",[e._v("Finally, we "),a("code",[e._v("inject sidecar")]),e._v(" with this command")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ istioctl kube-inject -f deploys/k8s/dev-all-in-one.aks.yaml "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" kubectl apply -f -\n")])])]),a("h4",{attrs:{id:"step-5-put-mapping-for-hosts-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-5-put-mapping-for-hosts-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 5: Put mapping for hosts file")]),e._v(" "),a("p",[e._v("Get "),a("code",[e._v("external IP")]),e._v(" on istio ingress by using")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl get svc -n istio-system\n")])])]),a("p",[e._v("It should print out something like")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nistio-ingressgateway LoadBalancer "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.106")]),e._v(".52.19 localhost "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v(":31380/TCP,443:31390/TCP,31400:31400/TCP,15011:32131/TCP,8060:30958/TCP,15030:31983/TCP,15031:30365/TCP 8d\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),a("p",[e._v("Then, we only need to copy "),a("code",[e._v("10.106.52.19")]),e._v(" to "),a("code",[e._v("C:\\Windows\\System32\\drivers\\etc\\hosts")]),e._v(" file as following")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.106")]),e._v(".52.19 id.coolstore.aks\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.106")]),e._v(".52.19 api.coolstore.aks\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.106")]),e._v(".52.19 coolstore.aks\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.106")]),e._v(".52.19 backoffice.coolstore.aks\n")])])]),a("p",[e._v("From now on, we can access website at "),a("code",[e._v("http://coolstore.aks")]),e._v(", backoffice website at "),a("code",[e._v("http://backoffice.coolstore.aks")]),e._v(", identity provider at "),a("code",[e._v("http://id.coolstore.aks")]),e._v(", and api gateway at "),a("code",[e._v("http://api.coolstore.aks")])]),e._v(" "),a("p",[e._v("Let say we access to "),a("code",[e._v("http://api.coolstore.aks/oai/swagger/index.html")]),e._v(", then we should see")]),e._v(" "),a("p",[a("img",{attrs:{src:"/coolstore-microservices/open-api.png",alt:""}})]),e._v(" "),a("p",[e._v("More information at https://hackernoon.com/5-steps-to-bring-coolstores-service-mesh-to-azure-kubernetes-service-aks-9cd1a5aa008a")]),e._v(" "),a("h2",{attrs:{id:"up-and-running-with-kubernetes-and-istio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#up-and-running-with-kubernetes-and-istio","aria-hidden":"true"}},[e._v("#")]),e._v(" Up and Running with Kubernetes and Istio")]),e._v(" "),a("h3",{attrs:{id:"kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes","aria-hidden":"true"}},[e._v("#")]),e._v(" Kubernetes")]),e._v(" "),a("p",[e._v("TODO")]),e._v(" "),a("h3",{attrs:{id:"istio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#istio","aria-hidden":"true"}},[e._v("#")]),e._v(" Istio")]),e._v(" "),a("p",[e._v("TODO")]),e._v(" "),a("h4",{attrs:{id:"logging-and-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging-and-monitoring","aria-hidden":"true"}},[e._v("#")]),e._v(" Logging and Monitoring")]),e._v(" "),a("p",[e._v("TODO")]),e._v(" "),a("h3",{attrs:{id:"ci-cd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ci-cd","aria-hidden":"true"}},[e._v("#")]),e._v(" CI/CD")]),e._v(" "),a("p",[e._v("TODO")])])}),[],!1,null,null,null);t.default=r.exports}}]);