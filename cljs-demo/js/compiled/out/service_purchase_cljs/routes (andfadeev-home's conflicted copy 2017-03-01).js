// Compiled by ClojureScript 1.9.229 {}
goog.provide('service_purchase_cljs.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
service_purchase_cljs.routes.hook_browser_navigation_BANG_ = (function service_purchase_cljs$routes$hook_browser_navigation_BANG_(){
var G__49712 = (new goog.History());
goog.events.listen(G__49712,goog.history.EventType.NAVIGATE,((function (G__49712){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__49712))
);

G__49712.setEnabled(true);

return G__49712;
});
service_purchase_cljs.routes.app_routes = (function service_purchase_cljs$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__34818__auto___49743 = (function (params__34819__auto__){
if(cljs.core.map_QMARK_.call(null,params__34819__auto__)){
var map__49728 = params__34819__auto__;
var map__49728__$1 = ((((!((map__49728 == null)))?((((map__49728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49728):map__49728);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34819__auto__)){
var vec__49730 = params__34819__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__34818__auto___49743);


var action__34818__auto___49744 = (function (params__34819__auto__){
if(cljs.core.map_QMARK_.call(null,params__34819__auto__)){
var map__49733 = params__34819__auto__;
var map__49733__$1 = ((((!((map__49733 == null)))?((((map__49733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49733):map__49733);
var account_id = cljs.core.get.call(null,map__49733__$1,new cljs.core.Keyword(null,"account-id","account-id",-860833743));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"account-page","account-page",62230647),account_id], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34819__auto__)){
var vec__49735 = params__34819__auto__;
var account_id = cljs.core.nth.call(null,vec__49735,(0),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"account-page","account-page",62230647),account_id], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/account/:account-id",action__34818__auto___49744);


var action__34818__auto___49745 = (function (params__34819__auto__){
if(cljs.core.map_QMARK_.call(null,params__34819__auto__)){
var map__49738 = params__34819__auto__;
var map__49738__$1 = ((((!((map__49738 == null)))?((((map__49738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49738):map__49738);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34819__auto__)){
var vec__49740 = params__34819__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__34818__auto___49745);


return service_purchase_cljs.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1488396328216