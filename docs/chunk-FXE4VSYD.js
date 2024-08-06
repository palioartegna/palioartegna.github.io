import {
  RouterModule,
  __export,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-X2J6LXQ4.js";

// src/assets/data/scores.json
var scores_exports = {};
__export(scores_exports, {
  default: () => scores_default,
  "game-scores": () => game_scores,
  global: () => global
});
var global = [
  {
    player: "Salt",
    points: 61,
    jolly: true
  },
  {
    player: "Sotcjiscjel",
    points: 42,
    jolly: true
  },
  {
    player: "Vile",
    points: 33
  },
  {
    player: "Somont",
    points: 31
  },
  {
    player: "Surnins",
    points: 30
  }
];
var game_scores = {
  "Taglio del Ceppo Maschile": [
    {
      player: "Sotcjiscjel",
      points: 5
    },
    {
      player: "Somont",
      points: 7
    },
    {
      player: "Salt",
      points: 10,
      jolly: true
    },
    {
      player: "Vile",
      points: 3
    },
    {
      player: "Surnins",
      points: 1
    }
  ],
  "Taglio del Ceppo Femminile": [
    {
      player: "Sotcjiscjel",
      points: 5,
      jolly: true
    },
    {
      player: "Somont",
      points: 7
    },
    {
      player: "Salt",
      points: 10
    },
    {
      player: "Vile",
      points: 3
    },
    {
      player: "Surnins",
      points: 1
    }
  ],
  "Corsa coi Sacchi": [
    {
      player: "Surnins",
      points: 10
    },
    {
      player: "Salt",
      points: 7
    },
    {
      player: "Sotcjiscjel",
      points: 5
    },
    {
      player: "Vile",
      points: 3
    },
    {
      player: "Somont",
      points: 1
    }
  ],
  "Strade Mate": [
    {
      player: "Vile",
      points: 10
    },
    {
      player: "Salt",
      points: 7
    },
    {
      player: "Surnins",
      points: 5
    },
    {
      player: "Somont",
      points: 3
    },
    {
      player: "Sotcjiscjel",
      points: 1
    }
  ],
  Staffetta: [
    {
      player: "Sotcjiscjel",
      points: 10
    },
    {
      player: "Surnins",
      points: 7
    },
    {
      player: "Salt",
      points: 5
    },
    {
      player: "Vile",
      points: 3
    },
    {
      player: "Somont",
      points: 1
    }
  ],
  Cibb\u00E8: [
    {
      player: "Vile",
      points: 10
    },
    {
      player: "Salt",
      points: 7
    },
    {
      player: "Somont",
      points: 5
    },
    {
      player: "Surnins",
      points: 3
    },
    {
      player: "Sotcjiscjel",
      points: 1
    }
  ],
  Bocce: [
    {
      player: "Sotcjiscjel",
      points: 10
    },
    {
      player: "Somont",
      points: 7
    },
    {
      player: "Salt",
      points: 5
    },
    {
      player: "Surnins",
      points: 3
    },
    {
      player: "Vile",
      points: 1
    }
  ]
};
var scores_default = {
  global,
  "game-scores": game_scores
};

// src/app/features/website/leaderboards/leaderboard.ts
var Leaderboard = class _Leaderboard {
  static fromScores(scores) {
    return new _Leaderboard(scores);
  }
  constructor(participants) {
    this.participants = participants;
  }
  getTopThree() {
    return this.participants.sort((a, b) => b.points - a.points).slice(0, 3);
  }
  getWinner() {
    return this.participants.sort((a, b) => b.points - a.points)[0];
  }
  getSortedParticipants() {
    return this.participants.sort((a, b) => b.points);
  }
};

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
}, dependencies: [DecorateParticipantsPipe], styles: ["\n\n/*# sourceMappingURL=single-leaderboard.component.css.map */"] });
var SingleLeaderboardComponent = _SingleLeaderboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SingleLeaderboardComponent, { className: "SingleLeaderboardComponent" });
})();

// src/app/features/website/leaderboards/leaderboards.component.ts
function LeaderboardsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "single-leaderboard", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("leaderboard", ctx_r0.selectedLeaderboard);
  }
}
function LeaderboardsComponent_Conditional_17_For_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const participant_r10 = ctx.$implicit;
    const index_r11 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", index_r11 + 1, "\xB0");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(participant_r10.player);
  }
}
var _c02 = (a0) => ({ "background-image": a0 });
var _c12 = (a0, a1) => ({ "h-0": a0, "h-16": a1 });
function LeaderboardsComponent_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("click", function LeaderboardsComponent_Conditional_17_For_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const _r8 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(_r8.checked = !_r8.checked);
    });
    \u0275\u0275element(1, "input", 16, 17);
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6, "keyboard_arrow_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 20);
    \u0275\u0275repeaterCreate(8, LeaderboardsComponent_Conditional_17_For_2_For_9_Template, 5, 2, "div", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const game_r3 = ctx.$implicit;
    const _r8 = \u0275\u0275reference(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(5, _c02, "linear-gradient(to right, " + ctx_r2.colors[ctx_r2.Leaderboard.fromScores(ctx_r2.gameScores[game_r3]).getWinner().player] + ", transparent 99%"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", game_r3, " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275pureFunction2(7, _c12, !_r8.checked, _r8.checked));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.Leaderboard.fromScores(ctx_r2.gameScores[game_r3]).getSortedParticipants());
  }
}
function LeaderboardsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, LeaderboardsComponent_Conditional_17_For_2_Template, 10, 10, "div", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.games);
  }
}
var _c2 = (a0) => ({ "bg-gray-50/80": a0 });
var colors2 = {
  "Salt": "rgba(0,60,255,0.50)",
  "Sotcjiscjel": "rgba(255,221,0,0.50)",
  "Vile": "rgba(0,0,0,0.50)",
  "Somont": "rgba(37,195,0,0.50)",
  "Surnins": "rgba(255,0,0,0.50)"
};
var _LeaderboardsComponent = class _LeaderboardsComponent {
  constructor() {
    this.selectedLeaderboard = Leaderboard.fromScores(global);
    this.games = Object.keys(this.gameScores);
    this.tab = "global";
    this.scores = scores_exports;
    this.Leaderboard = Leaderboard;
    this.colors = colors2;
  }
  // selectedLeaderboard:Leaderboard|null = null
  ngOnInit() {
    for (let game of this.games) {
    }
  }
  get gameScores() {
    return game_scores;
  }
};
_LeaderboardsComponent.\u0275fac = function LeaderboardsComponent_Factory(t) {
  return new (t || _LeaderboardsComponent)();
};
_LeaderboardsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaderboardsComponent, selectors: [["app-leaderboard"]], decls: 18, vars: 9, consts: [[1, "bg-gray-700", "-z-10", "fixed", "inset-0", "w-full", "h-full"], [1, "flex", "w-full", "h-full", "shrink-0", "items-center", "justify-center"], [1, "relative", "md:max-h-[800px]", "md:max-w-[390px]", "w-full", "h-full"], [1, "max-md:hidden", "absolute", "rounded-l", "bg-black", "w-1.5", "h-20", "-left-1.5", "top-36"], [1, "max-md:hidden", "absolute", "rounded-l", "bg-black", "w-1.5", "h-20", "-left-1.5", "top-60"], [1, "max-md:hidden", "absolute", "rounded-r", "bg-black", "w-1.5", "h-28", "-right-1.5", "top-44"], [1, "relative", "md:pt-5", "bg-white", "md:border-[9px]", "md:border-black", "md:rounded-[50px]", "overflow-hidden", "w-full", "h-full"], ["src", "assets/images/Sfondo.jpg", 1, "absolute", "w-full", "h-full", "top-0", "left-0", "object-cover", "opacity-55"], [1, "w-full", "relative", "h-full", "overflow-hidden", "flex", "flex-col", "items-center", "gap-5"], [1, "text-3xl", "font-bold", "p-2"], [1, "relative", "flex", "w-1/2", "border", "border-gray-50", "rounded-2xl", "p-0.5"], [1, "w-1/2", "duration-300", "transition-all", "text-center", "h-full", "rounded-2xl", 3, "click"], ["class", "w-full h-full", 3, "leaderboard"], [1, "w-full", "h-full", 3, "leaderboard"], [1, "flex-col", "flex", "gap-1", "w-full", "overflow-scroll"], [1, "w-full", "rounded-2xl", "p-5", 3, "click"], ["type", "checkbox", 1, "hidden"], ["checkbox", ""], [1, "flex", "justify-between"], [1, "material-icons-outlined"], [1, "flex", "items-end", "transition-all", "duration-200", "justify-between", "w-full", "mt-1", "overflow-hidden"], [1, "flex", "flex-col", "items-center", "justify-center"], ["class", "flex flex-col items-center justify-center"], ["class", " w-full rounded-2xl p-5", 3, "style"]], template: function LeaderboardsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275element(7, "img", 7);
    \u0275\u0275elementStart(8, "div", 8)(9, "p", 9);
    \u0275\u0275text(10, "CLASSIFICA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 11);
    \u0275\u0275listener("click", function LeaderboardsComponent_Template_div_click_12_listener() {
      return ctx.selectedLeaderboard = ctx.Leaderboard.fromScores(ctx.scores["global"]);
    });
    \u0275\u0275text(13, " Globale ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 11);
    \u0275\u0275listener("click", function LeaderboardsComponent_Template_div_click_14_listener() {
      return ctx.selectedLeaderboard = null;
    });
    \u0275\u0275text(15, " Giochi ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, LeaderboardsComponent_Conditional_16_Template, 1, 1, "single-leaderboard", 12)(17, LeaderboardsComponent_Conditional_17_Template, 3, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275classMap(\u0275\u0275pureFunction1(5, _c2, ctx.selectedLeaderboard));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275pureFunction1(7, _c2, !ctx.selectedLeaderboard));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(16, ctx.selectedLeaderboard ? 16 : 17);
  }
}, dependencies: [SingleLeaderboardComponent], styles: ["\n\n/*# sourceMappingURL=leaderboards.component.css.map */"] });
var LeaderboardsComponent = _LeaderboardsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaderboardsComponent, { className: "LeaderboardsComponent" });
})();

// src/app/features/website/website-routing.module.ts
var routes = [
  {
    path: "",
    data: {
      sidenav: "none"
    },
    component: LeaderboardsComponent
  }
  // {
  //   path: 'games',
  //   component: GamesComponent
  // },
  // {
  //   path: 'leaderboard',
  //   component: LeaderboardsComponent
  // },
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
//# sourceMappingURL=chunk-FXE4VSYD.js.map
