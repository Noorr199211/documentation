(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),p=n("pD55"),s=n("8Aig"),b=n("ReZb"),m=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=n("gnlW"),f=n("mwnC"),O=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var w=N,v=n("MfeC");function C(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},i)))}C.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=C,E=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,N=o.description,C=o.status,P=o.source,W=o.additionalContributors,H=void 0===W?[]:W,B=v.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:b.a,Note:m.a,Prompt:d,PromptReply:h,Screenshot:g.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:y,description:N}),r.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),N))),null!=B?r.a.createElement(T,null,r.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:B,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:n.tableOfContents.items})):null,r.a.createElement(I,null,C||P?r.a.createElement(l.k,{mb:3,alignItems:"center"},C?r.a.createElement(j.a,{status:C}):null,r.a.createElement(l.e,{mx:"auto"}),P?r.a.createElement(O.a,{href:P}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(H.map((function(e){return{login:e}})))}))))))}},"xHH/":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm dist-tag add <pkg>@<version> [<tag>]\nnpm dist-tag rm <pkg> <tag>\nnpm dist-tag ls [<pkg>]\n\naliases: dist-tags\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"Add, remove, and enumerate distribution tags on a package:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"add: Tags the specified version of the package with the specified tag, or\nthe ",Object(l.b)("inlineCode",{parentName:"p"},"--tag")," config if not specified. If you have two-factor\nauthentication on auth-and-writes then you’ll need to include a one-time\npassword on the command line with ",Object(l.b)("inlineCode",{parentName:"p"},"--otp <one-time password>"),", or at the\nOTP prompt.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"rm: Clear a tag that is no longer in use from the package. If you have\ntwo-factor authentication on auth-and-writes then you’ll need to include\na one-time password on the command line with ",Object(l.b)("inlineCode",{parentName:"p"},"--otp <one-time password>"),",\nor at the OTP prompt.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ls: Show all of the dist-tags for a package, defaulting to the package in\nthe current prefix. This is the default action if none is specified."))),Object(l.b)("p",null,"A tag can be used when installing packages as a reference to a version instead\nof using a specific version number:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm install <name>@<tag>\n")),Object(l.b)("p",null,"When installing dependencies, a preferred tagged version may be specified:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm install --tag <tag>\n")),Object(l.b)("p",null,"(This also applies to any other commands that resolve and install\ndependencies, such as ",Object(l.b)("inlineCode",{parentName:"p"},"npm dedupe"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm update"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"npm audit fix"),".)"),Object(l.b)("p",null,"Publishing a package sets the ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," tag to the published version unless the\n",Object(l.b)("inlineCode",{parentName:"p"},"--tag")," option is used. For example, ",Object(l.b)("inlineCode",{parentName:"p"},"npm publish --tag=beta"),"."),Object(l.b)("p",null,"By default, ",Object(l.b)("inlineCode",{parentName:"p"},"npm install <pkg>")," (without any ",Object(l.b)("inlineCode",{parentName:"p"},"@<version>")," or ",Object(l.b)("inlineCode",{parentName:"p"},"@<tag>"),"\nspecifier) installs the ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," tag."),Object(l.b)("h3",null,"Purpose"),Object(l.b)("p",null,"Tags can be used to provide an alias instead of version numbers."),Object(l.b)("p",null,"For example, a project might choose to have multiple streams of development\nand use a different tag for each stream, e.g., ",Object(l.b)("inlineCode",{parentName:"p"},"stable"),", ",Object(l.b)("inlineCode",{parentName:"p"},"beta"),", ",Object(l.b)("inlineCode",{parentName:"p"},"dev"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"canary"),"."),Object(l.b)("p",null,"By default, the ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," tag is used by npm to identify the current version\nof a package, and ",Object(l.b)("inlineCode",{parentName:"p"},"npm install <pkg>")," (without any ",Object(l.b)("inlineCode",{parentName:"p"},"@<version>")," or ",Object(l.b)("inlineCode",{parentName:"p"},"@<tag>"),"\nspecifier) installs the ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," tag. Typically, projects only use the\n",Object(l.b)("inlineCode",{parentName:"p"},"latest")," tag for stable release versions, and use other tags for unstable\nversions such as prereleases."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"next")," tag is used by some projects to identify the upcoming version."),Object(l.b)("p",null,"Other than ",Object(l.b)("inlineCode",{parentName:"p"},"latest"),", no tag has any special significance to npm itself."),Object(l.b)("h3",null,"Caveats"),Object(l.b)("p",null,"This command used to be known as ",Object(l.b)("inlineCode",{parentName:"p"},"npm tag"),", which only created new tags,\nand so had a different syntax."),Object(l.b)("p",null,"Tags must share a namespace with version numbers, because they are\nspecified in the same slot: ",Object(l.b)("inlineCode",{parentName:"p"},"npm install <pkg>@<version>")," vs\n",Object(l.b)("inlineCode",{parentName:"p"},"npm install <pkg>@<tag>"),"."),Object(l.b)("p",null,"Tags that can be interpreted as valid semver ranges will be rejected. For\nexample, ",Object(l.b)("inlineCode",{parentName:"p"},"v1.4")," cannot be used as a tag, because it is interpreted by\nsemver as ",Object(l.b)("inlineCode",{parentName:"p"},">=1.4.0 <1.5.0"),".  See ",Object(l.b)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6082"},"https://github.com/npm/npm/issues/6082"),"."),Object(l.b)("p",null,"The simplest way to avoid semver problems with tags is to use tags that do\nnot begin with a number or the letter ",Object(l.b)("inlineCode",{parentName:"p"},"v"),"."),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default:"),Object(l.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(l.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(l.b)("p",null,"Valid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Workspace names"),Object(l.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(l.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result in selecting all\nworkspaces within that folder)")),Object(l.b)("p",null,"When set for the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(l.b)("p",null,"Set to true to run the command in the context of ",Object(l.b)("strong",{parentName:"p"},"all")," configured\nworkspaces."),Object(l.b)("p",null,"Explicitly setting this to false will cause commands like ",Object(l.b)("inlineCode",{parentName:"p"},"install")," to\nignore workspaces altogether. When not set explicitly:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Commands that operate on the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," tree (install, update, etc.)\nwill link workspaces into the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder. - Commands that do\nother things (test, exec, publish, etc.) will operate on the root project,\n",Object(l.b)("em",{parentName:"li"},"unless")," one or more workspaces are specified in the ",Object(l.b)("inlineCode",{parentName:"li"},"workspace")," config.")),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"include-workspace-root")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Include the workspace root when workspaces are enabled for a command."),Object(l.b)("p",null,"When false, specifying individual workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config, or\nall workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspaces")," flag, will cause npm to operate only on\nthe specified workspaces, and not on the root project."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-publish"},"npm publish")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-install"},"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-dedupe"},"npm dedupe")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/using-npm/registry"},"npm registry")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-config"},"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/npmrc"},"npmrc"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-dist-tag-md-640a08c6abe3cd589bef.js.map