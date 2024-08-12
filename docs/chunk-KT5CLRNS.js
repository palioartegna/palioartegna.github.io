import {
  Leaderboard,
  "game-scores" as game_scores,
  scores_exports
} from "./chunk-7Q4HXC73.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EYNZP2UF.js";

// src/app/utils.ts
var colors = {
  "Salt": "rgba(0,60,255,0.50)",
  "Sotcjiscjel": "rgba(255,221,0,0.50)",
  "Vile": "rgba(0,0,0,0.50)",
  "Somont": "rgba(37,195,0,0.50)",
  "Surnins": "rgba(255,0,0,0.50)"
};

// src/app/features/website/games/games.component.ts
function GamesComponent_For_5_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const participant_r8 = ctx.$implicit;
    const index_r9 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", index_r9 + 1, "\xB0");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(participant_r8.player);
  }
}
function GamesComponent_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, GamesComponent_For_5_Conditional_6_For_2_Template, 5, 2, "div", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const game_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r6.Leaderboard.fromScores(ctx_r6.gameScores[game_r1]["leaderboard"]).getSortedParticipants());
  }
}
var _c0 = (a0) => ({ "background-image": a0 });
var _c1 = (a1, a2) => [".", a1, a2];
function GamesComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 4)(2, "span", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 6);
    \u0275\u0275text(5, "keyboard_arrow_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, GamesComponent_For_5_Conditional_6_Template, 3, 0, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const game_r1 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(5, _c0, "linear-gradient(to right, " + (ctx_r0.getLeaderboard(game_r1) ? ctx_r0.colors[ctx_r0.getLeaderboard(game_r1).getWinner().player] : "rgba(160, 160, 160, 0.5) 0%") + ", transparent 100%"));
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(7, _c1, ctx_r0.gameScores[game_r1].type, game_r1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(6, ctx_r0.gameScores[game_r1]["leaderboard"] ? 6 : -1);
  }
}
var _GamesComponent = class _GamesComponent {
  constructor() {
    this.games = Object.keys(this.gameScores).reverse();
    this.tab = "global";
    this.Leaderboard = Leaderboard;
    this.colors = colors;
  }
  getLeaderboard(game) {
    if (!this.gameScores[game]["leaderboard"])
      return void 0;
    return Leaderboard.fromScores(this.gameScores[game]["leaderboard"]);
  }
  get gameScores() {
    return game_scores;
  }
};
_GamesComponent.\u0275fac = function GamesComponent_Factory(t) {
  return new (t || _GamesComponent)();
};
_GamesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GamesComponent, selectors: [["app-games"]], decls: 6, vars: 0, consts: [[1, "w-full", "relative", "h-full", "overflow-hidden", "flex", "flex-col", "items-center", "gap-5"], [1, "text-3xl", "font-bold", "p-2"], [1, "flex-col", "flex", "gap-2", "w-full", "overflow-scroll", "drop-shadow-xl", "p-5"], [1, "w-full", "rounded-2xl", "px-2", "py-1", "backdrop-blur", "drop-shadow-xl", "focus:bg-white/80", 3, "routerLink"], [1, "flex", "justify-between"], [1, "font-bold"], [1, "material-icons-outlined"], ["class", "flex items-end h-12 justify-between w-11/12  overflow-hidden "], [1, "flex", "items-end", "h-12", "justify-between", "w-11/12", "overflow-hidden"], [1, "flex", "flex-col", "items-center", "justify-center"], [1, "overflow-hidden", "text-ellipsis"], ["class", "flex flex-col items-center justify-center"], ["class", " w-full rounded-2xl px-2 py-1 backdrop-blur drop-shadow-xl focus:bg-white/80", 3, "routerLink", "style"]], template: function GamesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
    \u0275\u0275text(2, "GIOCHI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275repeaterCreate(4, GamesComponent_For_5_Template, 7, 10, "div", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.games);
  }
}, dependencies: [RouterLink] });
var GamesComponent = _GamesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GamesComponent, { className: "GamesComponent", filePath: "src/app/features/website/games/games.component.ts", lineNumber: 17 });
})();

// src/app/features/website/games/tournament/tournament.component.ts
function TournamentComponent_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const participant_r3 = ctx.$implicit;
    const index_r4 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", index_r4 + 1, "\xB0");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(participant_r3.player);
  }
}
function TournamentComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, TournamentComponent_Conditional_3_For_2_Template, 5, 2, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.game.leaderboard.getSortedParticipants());
  }
}
var _c02 = (a0) => ({ "background-image": a0 });
function TournamentComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8)(7, "span", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const round_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(6, _c02, "linear-gradient(to right, " + ctx_r1.colors[round_r8.players[0]] + "20%,rgb(120, 120, 120, 0.3) 50%," + ctx_r1.colors[round_r8.players[1]] + "80%"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(round_r8.players[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(round_r8.scores[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(round_r8.players[1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(round_r8.scores[1]);
  }
}
var TournamentGame = class {
  constructor(name, rounds, leaderboard) {
    this.name = name;
    this.rounds = rounds;
    if (leaderboard)
      this.leaderboard = Leaderboard.fromScores(leaderboard);
  }
};
var _TournamentComponent = class _TournamentComponent {
  constructor() {
    this.activatedRoute = inject(ActivatedRoute);
    this.colors = colors;
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      let game = game_scores[params["gameName"]];
      this.game = new TournamentGame(params["gameName"], game["rounds"], game["leaderboard"]);
      console.log(this.game);
    });
  }
};
_TournamentComponent.\u0275fac = function TournamentComponent_Factory(t) {
  return new (t || _TournamentComponent)();
};
_TournamentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TournamentComponent, selectors: [["app-tournament"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 2, consts: [[1, "w-full", "relative", "h-full", "flex", "flex-col", "overflow-scroll", "pb-10", "items-center", "gap-5", "p-2"], [1, "text-3xl", "font-bold", "p-2", "text-center"], ["class", "flex w-full justify-between border-gray-600 border-4 bg-gray-300/20 backdrop-blur p-3 rounded-2xl"], [1, "flex", "flex-col", "w-full", "gap-1"], [1, "flex", "w-full", "justify-between", "border-gray-600", "border-4", "bg-gray-300/20", "backdrop-blur", "p-3", "rounded-2xl"], [1, "flex", "flex-col", "items-center", "justify-center"], ["class", "flex flex-col items-center justify-center"], [1, "flex", "items-center", "justify-between", "p-2", "rounded-2xl", "w-full", "backdrop-blur", "drop-shadow"], [1, "flex-col", "flex", "w-1/3", "items-center", "justify-between"], [1, "text-xl", "font-bold", "text-center"], ["class", "flex items-center justify-between p-2 rounded-2xl w-full backdrop-blur drop-shadow", 3, "style"]], template: function TournamentComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TournamentComponent_Conditional_3_Template, 3, 0, "div", 2);
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275repeaterCreate(5, TournamentComponent_For_6_Template, 11, 8, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.game.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, ctx.game.leaderboard ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.game.rounds);
  }
} });
var TournamentComponent = _TournamentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TournamentComponent, { className: "TournamentComponent", filePath: "src/app/features/website/games/tournament/tournament.component.ts", lineNumber: 29 });
})();

// src/app/features/website/games/challenge/challenge.component.ts
var _c03 = (a0) => ({ "background-color": a0 });
function ChallengeComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8, " emoji_events ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const participant_r1 = ctx.$implicit;
    const index_r2 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(11, _c03, ctx_r0.colors[participant_r1.player]));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", index_r2 + 1, "\xB0");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(participant_r1.player);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.game.scores[participant_r1.player]);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-yellow-500", ctx_r0.game["leaderboard"].getWinner().player === participant_r1.player)("text-gray-500", ctx_r0.game["leaderboard"].getTopThree()[1].player === participant_r1.player)("text-amber-700", ctx_r0.game["leaderboard"].getTopThree()[2].player === participant_r1.player);
  }
}
var ChallengeGame = class {
  constructor(name, scores, leaderboard) {
    this.name = name;
    this.scores = scores;
    this.leaderboard = Leaderboard.fromScores(leaderboard);
  }
};
var _ChallengeComponent = class _ChallengeComponent {
  constructor() {
    this.activatedRoute = inject(ActivatedRoute);
    this.Leaderboard = Leaderboard;
    this.colors = colors;
    this.scores = scores_exports;
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      let game = game_scores[params["gameName"]];
      this.game = new ChallengeGame(params["gameName"], game["scores"], game["leaderboard"]);
    });
  }
};
_ChallengeComponent.\u0275fac = function ChallengeComponent_Factory(t) {
  return new (t || _ChallengeComponent)();
};
_ChallengeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChallengeComponent, selectors: [["app-challenge"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "w-full", "relative", "h-full", "overflow-hidden", "flex", "flex-col", "items-center", "gap-5", "p-2"], [1, "text-3xl", "font-bold", "p-2", "text-center"], [1, "flex", "flex-col", "w-full", "gap-1"], [1, "flex", "items-center", "justify-center", "p-2", "rounded-2xl", "w-full"], [1, "w-1/6", "text-left", "text-xl"], [1, "w-2/6", "text-left", "text-xl"], [1, "w-2/6", "text-center", "text-xl"], [1, "w-1/6", "text-3xl", "text-right", "material-icons-outlined", "drop-shadow", "text-black"], ["class", "flex items-center justify-center p-2 rounded-2xl w-full", 3, "style"]], template: function ChallengeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275repeaterCreate(4, ChallengeComponent_For_5_Template, 9, 13, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.game.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.game.leaderboard.getSortedParticipants());
  }
} });
var ChallengeComponent = _ChallengeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChallengeComponent, { className: "ChallengeComponent", filePath: "src/app/features/website/games/challenge/challenge.component.ts", lineNumber: 30 });
})();

// src/app/features/website/games/games-routing.module.ts
var routes = [
  {
    path: "",
    component: GamesComponent
  },
  {
    path: "tournament/:gameName",
    component: TournamentComponent
  },
  {
    path: "challenge/:gameName",
    component: ChallengeComponent
  }
];
var _GamesRoutingModule = class _GamesRoutingModule {
};
_GamesRoutingModule.\u0275fac = function GamesRoutingModule_Factory(t) {
  return new (t || _GamesRoutingModule)();
};
_GamesRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _GamesRoutingModule });
_GamesRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var GamesRoutingModule = _GamesRoutingModule;
export {
  GamesRoutingModule
};
