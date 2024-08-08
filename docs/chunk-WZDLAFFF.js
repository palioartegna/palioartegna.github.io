import {
  Leaderboard,
  scores_exports
} from "./chunk-RKXD3MVR.js";
import {
  RouterModule,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YMSUI2PT.js";

// src/app/features/website/leaderboards/single-leaderboard/single-leaderboard.component.ts
var _c0 = (a0, a1, a2) => ({ "h-full": a0, "h-1/2": a1, "h-2/6": a2 });
function SingleLeaderboardComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const participant_r2 = ctx.$implicit;
    const index_r3 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(participant_r2.player);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pureFunction3(4, _c0, index_r3 === 0, index_r3 === 1, index_r3 === 2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", index_r3 + 1, "\xB0 ");
  }
}
function SingleLeaderboardComponent_For_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
}
var _c1 = (a0) => ({ "background-image": a0 });
function SingleLeaderboardComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275template(7, SingleLeaderboardComponent_For_8_Conditional_7_Template, 1, 0, "img", 13);
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const participant_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(6, _c1, "linear-gradient(to right, " + ctx_r1.colors[participant_r7.player] + ", transparent 80%"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", participant_r7.rank, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(participant_r7.player);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(7, participant_r7.jolly ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", participant_r7.points, " ");
  }
}
var colors = {
  "Salt": "rgba(0,60,255,0.50)",
  "Sotcjiscjel": "rgba(255,221,0,0.50)",
  "Vile": "rgba(0,0,0,0.50)",
  "Somont": "rgba(37,195,0,0.50)",
  "Surnins": "rgba(255,0,0,0.50)"
};
var _DecorateParticipantsPipe = class _DecorateParticipantsPipe {
  transform(participants) {
    return participants.map((participant, index) => {
      return __spreadProps(__spreadValues({}, participant), {
        rank: index + 1
      });
    });
  }
};
_DecorateParticipantsPipe.\u0275fac = function DecorateParticipantsPipe_Factory(t) {
  return new (t || _DecorateParticipantsPipe)();
};
_DecorateParticipantsPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "decorateParticipants", type: _DecorateParticipantsPipe, pure: true, standalone: true });
var DecorateParticipantsPipe = _DecorateParticipantsPipe;
var _SingleLeaderboardComponent = class _SingleLeaderboardComponent {
  constructor() {
    this.colors = colors;
  }
  ngOnInit() {
    console.log("Leaderboard", this.leaderboard);
  }
};
_SingleLeaderboardComponent.\u0275fac = function SingleLeaderboardComponent_Factory(t) {
  return new (t || _SingleLeaderboardComponent)();
};
_SingleLeaderboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SingleLeaderboardComponent, selectors: [["single-leaderboard"]], inputs: { leaderboard: "leaderboard" }, decls: 10, vars: 2, consts: [[1, "w-full", "h-full", "flex-col", "flex", "gap-5"], [1, "relative", "w-full", "h-1/3", "min-h-64", "flex", "justify-around", "items-end", "px-4"], [1, "absolute", "z-10", "overflow-scroll", "h-full", "w-full"], [1, "relative", "rounded-2xl", "mt-[80%]", "h-5/6", "overflow-hidden", "backdrop-blur", "drop-shadow-2xl", "w-full", "bg-white/30", "flex", "flex-col", "justify-start", "items-center"], [1, "w-1/5", "absolute", "top-2", "border-4", "border-gray-500", "rounded-2xl", "mb-2"], [1, "w-3/12", "h-full", "flex", "flex-col", "justify-end", "items-center"], [1, "font-bold", "text-xl"], [1, "text-center", "font-bold", "text-4xl", "flex", "justify-center", "items-center", "bg-gray-500/30", "w-full", "backdrop-blur", "rounded-3xl"], [1, "flex", "p-3", "pb-5", "gap-4", "h-1/6", "w-full"], [1, "w-1/12", "flex", "items-center", "text-3xl"], [1, "w-2/12", "text-2xl", "font-bold", "flex", "flex-col", "justify-center"], [1, ""], [1, "flex", "items-center", "justify-end", "grow", "gap-2"], ["class", "h-4 aspect-square", "src", "assets/images/joker-hat-svgrepo-com.svg"], [1, "text-xl", "flex", "items-center"], ["src", "assets/images/joker-hat-svgrepo-com.svg", 1, "h-4", "aspect-square"], ["class", "w-3/12 h-full flex flex-col justify-end items-center"], ["class", "flex  p-3 pb-5 gap-4 h-1/6 w-full ", 3, "style"]], template: function SingleLeaderboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275repeaterCreate(2, SingleLeaderboardComponent_For_3_Template, 5, 8, "div", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2)(5, "div", 3);
    \u0275\u0275element(6, "div", 4);
    \u0275\u0275repeaterCreate(7, SingleLeaderboardComponent_For_8_Template, 10, 8, "div", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(9, "decorateParticipants");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.leaderboard.getTopThree());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(9, 0, ctx.leaderboard.participants));
  }
}, dependencies: [DecorateParticipantsPipe] });
var SingleLeaderboardComponent = _SingleLeaderboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SingleLeaderboardComponent, { className: "SingleLeaderboardComponent", filePath: "src/app/features/website/leaderboards/single-leaderboard/single-leaderboard.component.ts", lineNumber: 36 });
})();

// src/app/features/website/leaderboards/leaderboards.component.ts
var colors2 = {
  "Salt": "rgba(0,60,255,0.50)",
  "Sotcjiscjel": "rgba(255,221,0,0.50)",
  "Vile": "rgba(0,0,0,0.50)",
  "Somont": "rgba(37,195,0,0.50)",
  "Surnins": "rgba(255,0,0,0.50)"
};
var _LeaderboardsComponent = class _LeaderboardsComponent {
  constructor() {
    this.scores = scores_exports;
    this.Leaderboard = Leaderboard;
    this.colors = colors2;
  }
  ngOnInit() {
  }
};
_LeaderboardsComponent.\u0275fac = function LeaderboardsComponent_Factory(t) {
  return new (t || _LeaderboardsComponent)();
};
_LeaderboardsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaderboardsComponent, selectors: [["app-leaderboard"]], decls: 4, vars: 1, consts: [[1, "w-full", "relative", "h-full", "overflow-hidden", "flex", "flex-col", "items-center", "gap-5"], [1, "text-3xl", "font-bold", "p-2"], [1, "w-full", "h-full", 3, "leaderboard"]], template: function LeaderboardsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
    \u0275\u0275text(2, "CLASSIFICA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "single-leaderboard", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("leaderboard", ctx.Leaderboard.fromScores(ctx.scores["global"]));
  }
}, dependencies: [SingleLeaderboardComponent] });
var LeaderboardsComponent = _LeaderboardsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaderboardsComponent, { className: "LeaderboardsComponent", filePath: "src/app/features/website/leaderboards/leaderboards.component.ts", lineNumber: 21 });
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
    loadChildren: () => import("./chunk-4MPCG5AB.js").then((m) => m.GamesRoutingModule)
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
