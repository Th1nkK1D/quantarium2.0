(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["story"],{2897:function(t,e,r){},"7eb3":function(t,e,r){"use strict";var n=r("ecf8"),s=r.n(n);s.a},a739:function(t,e,r){t.exports=r.p+"img/qitty.2bc71b3f.svg"},c0d4:function(t,e,r){"use strict";var n=r("2897"),s=r.n(n);s.a},ecf8:function(t,e,r){},f098:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fx fx-col story-mode"},[void 0!==t.storyIsDone&&t.storyIsDone?n("div",{staticClass:"ending-menu"},[n("div",{staticClass:"menu-buttons"},[n("h2",[t._v("Story mode is completed!")]),n("a",{on:{click:function(e){return t.initStory()}}},[t._v("Replay story mode")]),n("router-link",{attrs:{to:"/"}},[t._v("Return to main menu")])],1)]):n("div",{staticClass:"fx fx-col stage"},[t.composerIsDisplayed?n("div",{staticClass:"composer-wrapper"},[t.narrativeIsPending?n("div",{staticClass:"blocker"}):t._e(),n("QubitComposer")],1):t._e(),n("div",{staticClass:"fx fx-row",style:"height: "+(t.composerIsDisplayed?"20%":"100%")},[n("NarrativeDisplay",{attrs:{narratorState:t.narrator,narrativeIsPending:t.narrativeIsPending}})],1),n("img",{staticClass:"qitty",style:{bottom:t.composerIsDisplayed?"-12vh":"25vh"},attrs:{src:r("a739")}})])])},s=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),o=r("bd86"),a=r("2f62"),c=r("42b7"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fx-row narrative-display"},[r("div",{staticClass:"fx-x2 content",on:{click:function(e){return t.onClickNext()}}},[r("vue-typed-js",{key:t.displayedText,ref:"typer",attrs:{strings:[t.displayedText],typeSpeed:15,cursorChar:""},on:{onComplete:function(e){t.typingIsDone=!0}}},[r("span",{staticClass:"typing"})]),r("div",{class:"next-btn"+(t.narrativeIsPending&&t.typingIsDone?"":" is-hide")},[t._v(" "+t._s(t.langSwitch(["next","ถัดไป"]))+" > ")]),t._m(0)],1),r("div",{staticClass:"fx-x1"})])},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fx holder"},[r("div",{staticClass:"triangle"})])}];function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={name:"NarrativeDisplay",props:{narratorState:Object,narrativeIsPending:Boolean},data:function(){return{typingIsDone:!1}},computed:f({},Object(a["c"])(["langSwitch"]),{displayedText:function(){return this.langSwitch(this.narratorState.text)}}),methods:f({},Object(a["b"])(["fireEvent"]),{onClickNext:function(){this.narrativeIsPending&&this.typingIsDone&&(this.typingIsDone=!1,this.fireEvent({trigger:"narrator-text-read"}))}})},y=d,b=(r("c0d4"),r("2877")),v=Object(b["a"])(y,p,l,!1,null,"80617c3c",null),O=v.exports;function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={name:"StoryMode",components:{QubitComposer:c["a"],NarrativeDisplay:O},computed:m({},Object(a["d"])(["narrator"]),{},Object(a["c"])(["narrativeIsPending","composerIsDisplayed","storyIsDone"])),methods:m({},Object(a["b"])(["loadAllScenes","resetComposer"]),{initStory:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.resetComposer();case 2:return t.next=4,this.loadAllScenes();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}),mounted:function(){this.initStory()}},j=h,w=(r("7eb3"),Object(b["a"])(j,n,s,!1,null,"14ef9e4e",null));e["default"]=w.exports}}]);
//# sourceMappingURL=story.e5615050.js.map