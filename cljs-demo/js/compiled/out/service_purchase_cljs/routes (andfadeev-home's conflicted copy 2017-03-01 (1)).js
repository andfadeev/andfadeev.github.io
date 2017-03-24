// Compiled by ClojureScript 1.9.229 {}
goog.provide('service_purchase_cljs.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
service_purchase_cljs.routes.hook_browser_navigation_BANG_ = (function service_purchase_cljs$routes$hook_browser_navigation_BANG_(){
var G__117741 = (new goog.History());
goog.events.listen(G__117741,goog.history.EventType.NAVIGATE,((function (G__117741){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__117741))
);

G__117741.setEnabled(true);

return G__117741;
});
service_purchase_cljs.routes.app_routes = (function service_purchase_cljs$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__34818__auto___117772 = (function (params__34819__auto__){
if(cljs.core.map_QMARK_.call(null,params__34819__auto__)){
var map__117757 = params__34819__auto__;
var map__117757__$1 = ((((!((map__117757 == null)))?((((map__117757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__117757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117757):map__117757);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34819__auto__)){
var vec__117759 = params__34819__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__34818__auto___117772);


var action__34818__auto___117773 = (function (params__34819__auto__){
if(cljs.core.map_QMARK_.call(null,params__34819__auto__)){
var map__117762 = params__34819__auto__;
var map__117762__$1 = ((((!((map__117762 == null)))?((((map__117762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__117762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117762):map__117762);
var account_id = cljs.core.get.call(null,map__117762__$1,new cljs.core.Keyword(null,"account-id","account-id",-860833743));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"account-page","account-page",62230647),account_id], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34819__auto__)){
var vec__117764 = params__34819__auto__;
var account_id = cljs.core.nth.call(null,vec__117764,(0),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"account-page","account-page",62230647),account_id], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/account/:account-id",action__34818__auto___117773);


var action__34818__auto___117774 = (function (params__34819__auto__){
if(cljs.core.map_QMARK_.call(null,params__34819__auto__)){
var map__117767 = params__34819__auto__;
var map__117767__$1 = ((((!((map__117767 == null)))?((((map__117767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__117767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__117767):map__117767);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34819__auto__)){
var vec__117769 = params__34819__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__34818__auto___117774);


return service_purchase_cljs.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1488400170076