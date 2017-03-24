// Compiled by ClojureScript 1.9.229 {}
goog.provide('service_purchase_cljs.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
service_purchase_cljs.routes.hook_browser_navigation_BANG_ = (function service_purchase_cljs$routes$hook_browser_navigation_BANG_(){
var G__45478 = (new goog.History());
goog.events.listen(G__45478,goog.history.EventType.NAVIGATE,((function (G__45478){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__45478))
);

G__45478.setEnabled(true);

return G__45478;
});
service_purchase_cljs.routes.app_routes = (function service_purchase_cljs$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__31740__auto___45519 = (function (params__31741__auto__){
if(cljs.core.map_QMARK_.call(null,params__31741__auto__)){
var map__45499 = params__31741__auto__;
var map__45499__$1 = ((((!((map__45499 == null)))?((((map__45499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45499):map__45499);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31741__auto__)){
var vec__45501 = params__31741__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__31740__auto___45519);


var action__31740__auto___45520 = (function (params__31741__auto__){
if(cljs.core.map_QMARK_.call(null,params__31741__auto__)){
var map__45504 = params__31741__auto__;
var map__45504__$1 = ((((!((map__45504 == null)))?((((map__45504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45504):map__45504);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"service-purchase","service-purchase",-856947222)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31741__auto__)){
var vec__45506 = params__31741__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"service-purchase","service-purchase",-856947222)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/service-purchase",action__31740__auto___45520);


var action__31740__auto___45521 = (function (params__31741__auto__){
if(cljs.core.map_QMARK_.call(null,params__31741__auto__)){
var map__45509 = params__31741__auto__;
var map__45509__$1 = ((((!((map__45509 == null)))?((((map__45509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45509):map__45509);
var account_id = cljs.core.get.call(null,map__45509__$1,new cljs.core.Keyword(null,"account-id","account-id",-860833743));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"account-page","account-page",62230647),account_id], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31741__auto__)){
var vec__45511 = params__31741__auto__;
var account_id = cljs.core.nth.call(null,vec__45511,(0),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"account-page","account-page",62230647),account_id], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/account/:account-id",action__31740__auto___45521);


var action__31740__auto___45522 = (function (params__31741__auto__){
if(cljs.core.map_QMARK_.call(null,params__31741__auto__)){
var map__45514 = params__31741__auto__;
var map__45514__$1 = ((((!((map__45514 == null)))?((((map__45514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45514):map__45514);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31741__auto__)){
var vec__45516 = params__31741__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__31740__auto___45522);


return service_purchase_cljs.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1488456061348