// Compiled by ClojureScript 1.9.229 {}
goog.provide('service_purchase_cljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('service_purchase_cljs.views');
goog.require('service_purchase_cljs.routes');
goog.require('service_purchase_cljs.events');
goog.require('service_purchase_cljs.config');
goog.require('re_frame.core');
goog.require('service_purchase_cljs.subs');
service_purchase_cljs.core.dev_setup = (function service_purchase_cljs$core$dev_setup(){
if(cljs.core.truth_(service_purchase_cljs.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
service_purchase_cljs.core.mount_root = (function service_purchase_cljs$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [service_purchase_cljs.views.main_panel], null),document.getElementById("app"));
});
service_purchase_cljs.core.init = (function service_purchase_cljs$core$init(){
service_purchase_cljs.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

service_purchase_cljs.core.dev_setup.call(null);

return service_purchase_cljs.core.mount_root.call(null);
});
goog.exportSymbol('service_purchase_cljs.core.init', service_purchase_cljs.core.init);

//# sourceMappingURL=core.js.map?rel=1488396746960