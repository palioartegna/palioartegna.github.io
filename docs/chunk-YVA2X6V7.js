import {
  RouterModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-EYNZP2UF.js";

// src/app/features/features-routing.module.ts
var routes = [
  {
    path: "",
    loadChildren: () => import("./chunk-5L3D5F7P.js").then((m) => m.WebsiteRoutingModule)
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
