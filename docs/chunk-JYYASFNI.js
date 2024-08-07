import {
  RouterModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-YUXYEPCK.js";

// src/app/features/features-routing.module.ts
var routes = [
  {
    path: "",
    loadChildren: () => import("./chunk-XI3N2L53.js").then((m) => m.WebsiteRoutingModule)
  }
];
var _FeaturesRoutingModule = class _FeaturesRoutingModule {
};
_FeaturesRoutingModule.\u0275fac = function FeaturesRoutingModule_Factory(t) {
  return new (t || _FeaturesRoutingModule)();
};
_FeaturesRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FeaturesRoutingModule });
_FeaturesRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var FeaturesRoutingModule = _FeaturesRoutingModule;
export {
  FeaturesRoutingModule,
  routes
};
//# sourceMappingURL=chunk-JYYASFNI.js.map
