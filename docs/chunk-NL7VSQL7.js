import {
  RouterModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-X2J6LXQ4.js";

// src/app/features/features-routing.module.ts
var routes = [
  {
    path: "",
    loadChildren: () => import("./chunk-4ZGRAT6Q.js").then((m) => m.WebsiteRoutingModule)
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
//# sourceMappingURL=chunk-NL7VSQL7.js.map
