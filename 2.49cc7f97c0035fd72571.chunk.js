webpackJsonp([2],{334:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(3),r=n(116),l=n(238),s=n(335),c=n(339),f=n(342),u=function(){function e(){}return e=i([a.NgModule({imports:[r.CommonModule,l.RouterModule.forChild(f.VILLAIN_ROUTES)],declarations:[s.VillainListComponent,c.VillainDetailComponent]}),o("design:paramtypes",[])],e)}();t.VillainModule=u},335:function(e,t,n){"use strict";function i(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}i(n(336))},336:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(3),r=[{id:100,name:"Loki"},{id:102,name:"Thanos"},{id:103,name:"Ultron"},{id:105,name:"Ronan"},{id:176,name:"Green Goblin"},{id:234,name:"Red Skull"},{id:431,name:"Agent Stryker"}],l=function(){function e(){this.villains=[]}return e.prototype.ngOnInit=function(){this.villains=r},e=i([a.Component({selector:"labs-villain-list",template:n(337),styles:[n(338)]}),o("design:paramtypes",[])],e)}();t.VillainListComponent=l},337:function(e,t){e.exports='<h4>Villains of Marvel Universe</h4>\r\n<div class="list-group">\r\n  <a class="list-group-item list-group-item-action" *ngFor="let villain of villains"\r\n    [routerLink]="villain.id">{{villain.name}}</a>\r\n</div>\r\n'},338:305,339:function(e,t,n){"use strict";function i(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}i(n(340))},340:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(3),r=n(238),l=[{id:100,name:"Loki Laufeyson",movies:["Avengers","Thor","Avengers: Age of Ultron","Thor: The Dark World"]},{id:102,name:"Thanos",movies:["Guardians of the Galaxy","Avengers: Age of Ultron"]},{id:103,name:"Ultron",movies:["Avengers: Age of Ultron"]},{id:105,name:"Ronan",movies:["Guardians of the Galaxy"]},{id:176,name:"Green Goblin (Norman Osborn)",movies:["SpiderMan"]},{id:234,name:"Red Skull (Johann Shmidt)",movies:["Captain America: The First Avenger"]},{id:431,name:"Agent William Stryker",movies:["X-Men Origins: Wolverine","X2","X-Men: Days of Future Past"]}],s=function(){function e(e){this.activatedRoute=e,this.villain={}}return e.prototype.ngOnInit=function(){var e=+this.activatedRoute.snapshot.params.id;this.villain=l.filter(function(t){return t.id===e})[0]},e=i([a.Component({selector:"labs-villain-detail",template:n(341)}),o("design:paramtypes",[r.ActivatedRoute])],e)}();t.VillainDetailComponent=s},341:function(e,t){e.exports='<h4>Details of Villain: {{ villain.name }} </h4>\r\n\r\nSeen in Movies\r\n<ul>\r\n  <li *ngFor="let movie of villain.movies; let last=last">{{movie}}</li>\r\n</ul>\r\n\r\n\r\n<br >\r\n<br >\r\n<a class="btn btn-secondary" routerLink="..">List Villains</a>\r\n'},342:function(e,t,n){"use strict";var i=n(335),o=n(339);t.VILLAIN_ROUTES=[{path:"",component:i.VillainListComponent},{path:":id",component:o.VillainDetailComponent}]}});
//# sourceMappingURL=2.49cc7f97c0035fd72571.chunk.js.map