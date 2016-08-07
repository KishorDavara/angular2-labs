webpackJsonp([1],{325:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=n(3),a=n(238),c=n(326),l=n(329),s=n(333),f=function(){function e(){}return e=o([i.NgModule({imports:[a.RouterModule.forChild(s.LAZY_ROUTES)],declarations:[c.LazyComponent,l.LazyDumbComponent]}),r("design:paramtypes",[])],e)}();t.LazyModule=f},326:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=n(3),a=function(){function e(){}return e=o([i.Component({selector:"labs-lazy",template:n(327),styles:[n(328)]}),r("design:paramtypes",[])],e)}();t.LazyComponent=a},327:function(e,t){e.exports='<h4> Lazy Component </h4>\r\n<ul class="nav nav-pills">\r\n  <li class="nav-item">\r\n    <a class="nav-link" routerLink="." routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" >Lazy</a>\r\n  </li>\r\n  <li class="nav-item">\r\n    <a class="nav-link" routerLink="villain" routerLinkActive="active">Villains</a>\r\n  </li>\r\n</ul>\r\n\r\n<p> This component is lazily loaded i.e. the code for this module is loaded lazily </p>\r\n\r\n<div class="card">\r\n  <div class="card-block">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n<p style="font-size: bigger">Villain is again Lazily loaded</p>\r\n'},328:305,329:function(e,t,n){"use strict";function o(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}o(n(330))},330:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=n(3),a=function(){function e(){}return e=o([i.Component({selector:"labs-lazy-dumb",template:n(331),styles:[n(332)]}),r("design:paramtypes",[])],e)}();t.LazyDumbComponent=a},331:function(e,t){e.exports="<p>\r\n  This is Just a Lazy Dumb component residing in Lazy Component.<br >\r\n  Javascript code is loaded for this component along with LazyModule code<br ><br >\r\n\r\n  <code>LazyDumbComponent</code> is declared in <code>LazyModule</code> and hence is available for all components inside module<br>\r\n  So, <code>&lt;labs-lazy-dumb&gt;</code> is inside <code>lazy.component.html</code>, but it is not part of directives of <code>LazyComponent</code> decorator.\r\n\r\n</p>\r\n"},332:305,333:function(e,t,n){"use strict";var o=n(326),r=n(329),i=n(312);t.LAZY_ROUTES=[{path:"",component:o.LazyComponent,children:[{path:"",component:r.LazyDumbComponent},{path:"villain",loadChildren:i.loadModule(function(){return new Promise(function(e){n.e(2,function(t){e(n(334).VillainModule)})})})}]}]}});
//# sourceMappingURL=1.49cc7f97c0035fd72571.chunk.js.map