"use strict";(self.webpackChunkpersonal_data_market=self.webpackChunkpersonal_data_market||[]).push([[512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},o="Peopledata DID Registration",s={unversionedId:"peopledata-did/did-registration",id:"peopledata-did/did-registration",title:"Peopledata DID Registration",description:"1. Abstract",source:"@site/docs/peopledata-did/did-registration.md",sourceDirName:"peopledata-did",slug:"/peopledata-did/did-registration",permalink:"/docs/peopledata-did/did-registration",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Peopledata DID Specification(draft version 0.1.0)",permalink:"/docs/peopledata-did/peopledata-did-specification"}},l={},d=[{value:"1. Abstract",id:"1-abstract",level:2},{value:"2. Status of the DIF DID Registration",id:"2-status-of-the-dif-did-registration",level:2},{value:"3. Terminology",id:"3-terminology",level:2},{value:"4. Architecture Modes",id:"4-architecture-modes",level:2},{value:"4.1 Internal Secret Mode",id:"41-internal-secret-mode",level:3},{value:"4.1.1 storeSecrets Option",id:"411-storesecrets-option",level:4},{value:"4.1.2 returnSecrets Option",id:"412-returnsecrets-option",level:4},{value:"4.1.3 Considerations",id:"413-considerations",level:4},{value:"4.2 External Secret Mode",id:"42-external-secret-mode",level:3},{value:"4.3 Client-managed Secret Mode",id:"43-client-managed-secret-mode",level:3},{value:"5. Operations",id:"5-operations",level:2},{value:"5.1 <code>create()</code>",id:"51-create",level:3},{value:"5.2 <code>delete()</code>",id:"52-delete",level:3},{value:"5.3 <code>deactive()</code>",id:"53-deactive",level:3}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"peopledata-did-registration"},"Peopledata DID Registration"),(0,r.kt)("h2",{id:"1-abstract"},"1. Abstract"),(0,r.kt)("p",null,"Each DID method specifies how to create/resolve/update/deactivate DIDs within a given verifiable data registry. How exactly this works can be very different depending on the DID method and may involve various steps, architectural components, and network communication. "),(0,r.kt)("p",null,"The process of resolving a DID to a DID document by executing the read() operation is well-understood and specified in the DID Resolution specification. This document complements the concept of a \u201cDID Resolver\u201d by also defining a \u201cDID Registrar\u201d component that can execute the three remaining create/update/deactivate operations via a common interface."),(0,r.kt)("p",null,"This specification does NOT specify a DID method. It does NOT specify how to build a verifiable data registry, only a \u201cDID Registrar\u201d component that can interact with a verifiable data registry. This specification also does NOT suggest that private keys should be controlled by any other entity than the DID controller."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Peopledata-did-registrar")," is developemnt under ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/did-registration/"},"DIF's did-registration specification"),"."),(0,r.kt)("h2",{id:"2-status-of-the-dif-did-registration"},"2. Status of the DIF DID Registration"),(0,r.kt)("p",null,"DID Registration is a draft specification under development within the ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/"},"Decentralized Identity Foundation:DIF"),", and designed to incorporate the requirements and learnings from related work of the most active industry players into a shared specification that meets the collective needs of the community. This spec is regularly updated to reflect relevant changes, and we encourage active engagement on GitHub (see above) and other mediums (e.g. DIF) where this work is being done."),(0,r.kt)("h2",{id:"3-terminology"},"3. Terminology"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Decentralized Identifier (DID)"),"\nA globally unique persistent identifier that does not require a centralized registration authority and is often generated and/or registered cryptographically.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DID Method"),"\nA definition of how a specific DID scheme implementeds the precise operations by which DIDs are created, resolved and deactivated and DID documents are written and updated.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DID Document"),"\nA set of data describing the DID subject, service and verification methods, that the DID subject or a DID delegate can use to authenticate itself and prove its association with the DID.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DID Registrar"),"\nA software and/or hardware component that implements the DID create/update/deactivate functions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DID Resolver"),"\nA software and/or hardware component that implements the DID resolution function.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Wallet"),"\nA software and/or hardware component that can securely store DIDs and associated private keys and other sensitive cryptographic key material. Wallets implement various interfaces for cryptographic key generation, signing, verification, and other operations."))),(0,r.kt)("h2",{id:"4-architecture-modes"},"4. Architecture Modes"),(0,r.kt)("p",null,"The DID create/update/deactivate functions raise architectural questions around key management, since they typically involve the generation and use of private keys and other secrets."),(0,r.kt)("p",null,"With regard to key management, a DID Registrar can operate in the following modes:"),(0,r.kt)("h3",{id:"41-internal-secret-mode"},"4.1 Internal Secret Mode"),(0,r.kt)("p",null,"In this mode, the DID Registrar is responsible for generating the DID controller keys used by DID operations. This means that the DID Registrar is considered a highly trusted component which should be fully under the control of a DID controller. If it is operated as a remotely hosted service, secure connection protocols such as TLS, DIDComm, etc. MUST be used."),(0,r.kt)("p",null,"This mode has two options that control how DID controller keys are handled."),(0,r.kt)("h4",{id:"411-storesecrets-option"},"4.1.1 storeSecrets Option"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"storeSecrets")," option is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", then the DID Registrar maintains an internal wallet where DIDs and DID controller keys can be stored. The DID controller keys can then be used in future DID operations. For example, if a ",(0,r.kt)("inlineCode",{parentName:"p"},"create()")," operation is executed, then a subsequent ",(0,r.kt)("inlineCode",{parentName:"p"},"update()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"deactivate()")," operation will be able to use existing DID controller keys stored in the DID Registrar."),(0,r.kt)("p",null,"[TODO]",": Mention potential import/export of keys, and how this could relate to other specs such as Universal Wallet or WebKMS or the WebCrypto API."),(0,r.kt)("h4",{id:"412-returnsecrets-option"},"4.1.2 returnSecrets Option"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"returnSecrets")," option is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", then the DID Registrar will return generated DID controller keys to the client."),(0,r.kt)("h4",{id:"413-considerations"},"4.1.3 Considerations"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"storeSecrets")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"returnSecrets")," options can be enabled or disabled independently. A DID Registrar may define default values for these options, and/or it may allow a client to set them via the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," input field."),(0,r.kt)("p",null,"Note that if neither option is enabled, then control over a DID may get permanently lost, since the DID Registrar operating in ",(0,r.kt)("inlineCode",{parentName:"p"},"Internal Secret Mode")," will generate DID controller keys internally, but it will neither store them nor return them to a client."),(0,r.kt)("p",null,"If a DID Registrar is configured with options ",(0,r.kt)("inlineCode",{parentName:"p"},"storeSecrets=false")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"returnSecrets=true"),", then a DID Registrar with option ",(0,r.kt)("inlineCode",{parentName:"p"},"storeSecrets=true")," can be simulated by building a \u201cwrapping DID Registrar\u201d around an \u201cinner DID Registrar\u201d."),(0,r.kt)("p",null,"Diagram showing Internal Secret Mode\n",(0,r.kt)("img",{src:n(7788).Z,width:"603",height:"492"})),(0,r.kt)("h3",{id:"42-external-secret-mode"},"4.2 External Secret Mode"),(0,r.kt)("p",null,"In this mode, the DID Registrar does not itself have access to the secrets used by DID operations, but it has a way of accessing an external wallet in order to perform cryptographic operations such as generating signatures."),(0,r.kt)("p",null,"[TODO]",": Mention how this could relate to other specs such as ","[Universal Wallet]"," or ","[WebKMS]"," or the ","[WebCrypto API]","."),(0,r.kt)("p",null,"Diagram showing External Secret Mode\n",(0,r.kt)("img",{src:n(946).Z,width:"714",height:"493"})),(0,r.kt)("h3",{id:"43-client-managed-secret-mode"},"4.3 Client-managed Secret Mode"),(0,r.kt)("p",null,"In this mode, the DID Registrar does not itself have access to the secrets used by DID operations, but it will ask the client to perform cryptographic operations such as generating signatures."),(0,r.kt)("p",null,"TODO: Discuss how the did:ion use case fits in, where the client supplies the public keys / commitments during the create operation."),(0,r.kt)("p",null,"Diagram showing Client-Managed Secret Mode\n",(0,r.kt)("img",{src:n(1042).Z,width:"571",height:"493"})),(0,r.kt)("h2",{id:"5-operations"},"5. Operations"),(0,r.kt)("h3",{id:"51-create"},"5.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"create()")),(0,r.kt)("p",null,"This function creates a new DID and associated DID document, according to a known DID method, using various options and optionally an initial DID document."),(0,r.kt)("h3",{id:"52-delete"},"5.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"delete()")),(0,r.kt)("p",null,"delete an identifier."),(0,r.kt)("h3",{id:"53-deactive"},"5.3 ",(0,r.kt)("inlineCode",{parentName:"h3"},"deactive()")))}p.isMDXComponent=!0},1042:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/diagram-mode-client-managed-secret-ac9f306299fac7a8e9ec6bf213251289.png"},946:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/diagram-mode-external-secret-7abe752e6489e785ecaf38adcb977595.png"},7788:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/diagram-mode-internal-secret-5a120577722556b1827743e2b259a7e8.png"}}]);