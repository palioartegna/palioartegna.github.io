import {
  Leaderboard,
  global,
  scores_exports
} from "./chunk-7Q4HXC73.js";
import {
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleMap,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EYNZP2UF.js";

// src/app/features/website/leaderboards/leaderboards.component.ts
var _c0 = (a0) => ({ "background-color": a0 });
function LeaderboardsComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const participant_r1 = ctx.$implicit;
    const index_r2 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    let tmp_3_0;
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(6, _c0, ctx_r0.colors[participant_r1.player]));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(participant_r1.player);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(participant_r1.points);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_3_0 = participant_r1.points - ctx_r0.mainLeaderboard.getWinner().points) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", index_r2 + 1, "\xB0");
  }
}
var colors = {
  "Salt": "rgba(0,60,255,0.50)",
  "Sotcjiscjel": "rgba(255,221,0,0.50)",
  "Vile": "rgba(0,0,0,0.50)",
  "Somont": "rgba(37,195,0,0.50)",
  "Surnins": "rgba(255,0,0,0.50)"
};
var _LeaderboardsComponent = class _LeaderboardsComponent {
  constructor() {
    this.mainLeaderboard = new Leaderboard(global);
    this.scores = scores_exports;
    this.Leaderboard = Leaderboard;
    this.colors = colors;
  }
  ngOnInit() {
  }
};
_LeaderboardsComponent.\u0275fac = function LeaderboardsComponent_Factory(t) {
  return new (t || _LeaderboardsComponent)();
};
_LeaderboardsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaderboardsComponent, selectors: [["app-leaderboard"]], decls: 21, vars: 1, consts: [[1, "w-full", "relative", "h-full", "overflow-scroll", "flex", "flex-col", "items-start", "gap-7", "p-5"], [1, "text-3xl", "w-full", "font-bold", "p-2", "text-center"], [1, "flex", "flex-col", "gap-1", "w-full", "drop-shadow-xl"], [1, "text-xl", "font-bold", "p-2"], [1, "flex", "justify-between", "drop-shadow-xl", "rounded-2xl", "backdrop-blur", "bg-white/30", "items-center", "px-5", "py-2", "w-full"], [1, "grow"], [1, "w-1/5"], [1, "w-1/5", "text-center"], [1, "w-1/5", "text-right"], [1, "w-full", "mt-5", "flex", "flex-col", "gap-1"], [1, "w-full", "bg-black", "border-gray-300"], [1, "bg-gray-300", "backdrop-blur", "drop-shadow-xl", "rounded-2xl", "p-2", 3, "routerLink"], [1, "flex", "justify-between", "drop-shadow-xl", "rounded-2xl", "items-center", "p-5", "w-full"], ["class", "flex justify-between drop-shadow-xl rounded-2xl  items-center p-5 w-full", 3, "style"]], template: function LeaderboardsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
    \u0275\u0275text(2, "PALIO 2024");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "p", 3);
    \u0275\u0275text(5, "CLASSIFICA ATTUALE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "span", 5);
    \u0275\u0275text(8, "Borgo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 6);
    \u0275\u0275text(10, "Punti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 7);
    \u0275\u0275text(12, "Gap");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 8);
    \u0275\u0275text(14, "n\xB0");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(15, LeaderboardsComponent_For_16_Template, 9, 8, "div", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 9);
    \u0275\u0275element(18, "hr", 10);
    \u0275\u0275elementStart(19, "div", 11);
    \u0275\u0275text(20, "Vai ai singoli giochi ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx.mainLeaderboard.getSortedParticipants());
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", "/games");
  }
}, dependencies: [RouterLink] });
var LeaderboardsComponent = _LeaderboardsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaderboardsComponent, { className: "LeaderboardsComponent", filePath: "src/app/features/website/leaderboards/leaderboards.component.ts", lineNumber: 22 });
})();

// src/app/features/website/website-routing.module.ts
var routes = [
  {
    path: "",
    data: {
      // sidenav: 'none',
    },
    component: LeaderboardsComponent
  },
  {
    path: "games",
    loadChildren: () => import("./chunk-KT5CLRNS.js").then((m) => m.GamesRoutingModule)
  },
  {
    path: "leaderboard",
    component: LeaderboardsComponent
  }
  // {
  //   'path': 'calendar',
  //   component: CalendarComponent
  // }
];
var _WebsiteRoutingModule = class _WebsiteRoutingModule {
};
_WebsiteRoutingModule.\u0275fac = function WebsiteRoutingModule_Factory(t) {
  return new (t || _WebsiteRoutingModule)();
};
_WebsiteRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WebsiteRoutingModule });
_WebsiteRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var WebsiteRoutingModule = _WebsiteRoutingModule;
export {
  WebsiteRoutingModule,
  routes
};
