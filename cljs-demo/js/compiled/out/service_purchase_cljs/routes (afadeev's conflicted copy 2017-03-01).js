// Compiled by ClojureScript 1.9.229 {}
goog.provide('service_purchase_cljs.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
service_purchase_cljs.routes.hook_browser_navigation_BANG_ = (function service_purchase_cljs$routes$hook_browser_navigation_BANG_(){
var G__49876 = (new goog.History());
goog.events.listen(G__49876,goog.history.EventType.NAVIGATE,((function (G__49876){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__49876))
);

G__49876.setEnabled(true);

return G__49876;
});
service_purchase_cljs.routes.app_routes = (function service_purchase_cljs$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__34813__auto___49907 = (function (params__34814__auto__){
if(cljs.core.map_QMARK_.call(null,params__34814__auto__)){
var map__49892 = params__34814__auto__;
var map__49892__$1 = ((((!((map__49892 == null)))?((((map__49892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49892):map__49892);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34814__auto__)){
var vec__49894 = params__34814__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__34813__auto___49907);


var action__34813__auto___49908 = (function (params__34814__auto__){
if(cljs.core.map_QMARK_.call(null,params__34814__auto__)){
var map__49897 = params__34814__auto__;
var map__49897__$1 = ((((!((map__49897 == null)))?((((map__49897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49897):map__49897);
var account_id = cljs.core.get.call(null,map__49897__$1,new cljs.core.Keyword(null,"account-id","account-id",-860833743));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"account-page","account-page",62230647)], null));

return console.log([cljs.core.str("account-id "),cljs.core.str(account_id)].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34814__auto__)){
var vec__49899 = params__34814__auto__;
var account_id = cljs.core.nth.call(null,vec__49899,(0),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"account-page","account-page",62230647)], null));

return console.log([cljs.core.str("account-id "),cljs.core.str(account_id)].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/account/:account-id",action__34813__auto___49908);


var action__34813__auto___49909 = (function (params__34814__auto__){
if(cljs.core.map_QMARK_.call(null,params__34814__auto__)){
var map__49902 = params__34814__auto__;
var map__49902__$1 = ((((!((map__49902 == null)))?((((map__49902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49902):map__49902);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34814__auto__)){
var vec__49904 = params__34814__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__34813__auto___49909);


return service_purchase_cljs.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1488395506443