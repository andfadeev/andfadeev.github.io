// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frisk.help');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('re_frame.registrar');
re_frisk.help.fx = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db","db",993250759),"reset! app-db with a new value. Expects a map. / re-frame's internal",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),"`dispatch` one event. Expects a single vector. / re-frame's internal",new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),"`dispatch` more than one event. Expects a list or vector of events. Something for which sequential? returns true. / re-frame's internal",new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),"Removes a previously registered event handler. Expects either a single id (typically a keyword), or a seq of ids. / re-frame's internal",new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),"`dispatch` one or more events after given delays. Expects a collection of maps with two keys:  :`ms` and `:dispatch`. / re-frame's internal"], null);
re_frisk.help.cofx = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),"Adds to coeffects the value in `app-db`, under the key `:db`. / re-frame's internal"], null);
re_frisk.help.intrcp = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),"An interceptor which injects re-frame :db coeffect. / re-frame's internal",new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),"An interceptor which actions a `context's` (side) `:effects`. For each key in the `:effects` map, call the `effects handler` previously registered using `reg-fx`. / re-frame's internal",new cljs.core.Keyword(null,"db-handler","db-handler",579530098),"An interceptor which wraps the kind of event handler given to `reg-event-db`. These handlers take two arguments;  `db` and `event`, and they return `db`. / re-frame's internal",new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097),"An interceptor which wraps the kind of event handler given to `reg-event-fx`. These handlers take two arguments;  `coeffects` and `event`, and they return `effects`. / re-frame's internal"], null);
re_frisk.help.intrcp_fn = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),"Function which adds to coeffects the value in `app-db`, under the key `:db`. / re-frame's internal",new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),"Function which calls the `effects handler` previously registered using `reg-fx` for each key in the `:effects` map. / re-frame's internal",new cljs.core.Keyword(null,"db-handler","db-handler",579530098),"Function which calls the handler given to `reg-event-db`. This handler take two arguments;  `db` and `event`, and returns `db`. / re-frame's internal",new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097),"Function which calls the handler given to `reg-event-fx`. This handler take two arguments;  `coeffects` and `event`, and returns `effects`. / re-frame's internal"], null);
re_frisk.help.re_frame_event = (function re_frisk$help$re_frame_event(){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (a){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,a)],[(function (){var intc = cljs.core.map.call(null,(function (p1__30656_SHARP_,p2__30657_SHARP_){
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30656_SHARP_),(((cljs.core._EQ_.call(null,p2__30657_SHARP_,(0))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30656_SHARP_),new cljs.core.Keyword(null,"coeffects","coeffects",497912985))))?new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):(((cljs.core._EQ_.call(null,p2__30657_SHARP_,(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30656_SHARP_),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050))))?new cljs.core.Keyword(null,"do-fx","do-fx",1194163050).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30656_SHARP_),new cljs.core.Keyword(null,"db-handler","db-handler",579530098)))?new cljs.core.Keyword(null,"db-handler","db-handler",579530098).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30656_SHARP_),new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097)))?new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):"id"
))))], true, false),(cljs.core.truth_(new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(p1__30656_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),(((cljs.core._EQ_.call(null,p2__30657_SHARP_,(0))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30656_SHARP_),new cljs.core.Keyword(null,"coeffects","coeffects",497912985))))?new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30656_SHARP_),new cljs.core.Keyword(null,"db-handler","db-handler",579530098)))?new cljs.core.Keyword(null,"db-handler","db-handler",579530098).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30656_SHARP_),new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097)))?new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):"fn"
)))], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(p1__30656_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"after","after",594996914),(((cljs.core._EQ_.call(null,p2__30657_SHARP_,(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30656_SHARP_),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050))))?new cljs.core.Keyword(null,"do-fx","do-fx",1194163050).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):"fn"
)], null):null));
}),cljs.core.second.call(null,a),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.second.call(null,a))));
return cljs.core.PersistentHashMap.fromArrays([[cljs.core.str(cljs.core.count.call(null,intc)),cljs.core.str(" interceptors")].join('')],[intc]);
})()]);
}),cljs.core.filter.call(null,(function (p1__30658_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.key.call(null,p1__30658_SHARP_),new cljs.core.Keyword("re-frisk","update-db","re-frisk/update-db",-658524246));
}),cljs.core.deref.call(null,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler));
}))))));
});
re_frisk.help.re_frame_sub = (function re_frisk$help$re_frame_sub(){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__30659_SHARP_){
var k = cljs.core.first.call(null,p1__30659_SHARP_);
return cljs.core.PersistentHashMap.fromArrays([k],[re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))]);
}),cljs.core.filter.call(null,(function (p1__30660_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.first.call(null,p1__30660_SHARP_),new cljs.core.Keyword("re-frisk.help","db","re-frisk.help/db",447571859));
}),cljs.core.deref.call(null,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler));
}))))));
});
re_frisk.help.re_frame_fx = (function re_frisk$help$re_frame_fx(){
return cljs.core.map.call(null,(function (p1__30661_SHARP_){
if(cljs.core.truth_(p1__30661_SHARP_.call(null,re_frisk.help.fx))){
return cljs.core.PersistentArrayMap.fromArray([p1__30661_SHARP_,p1__30661_SHARP_.call(null,re_frisk.help.fx)], true, false);
} else {
return p1__30661_SHARP_;
}
}),cljs.core.keys.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler))));
});
re_frisk.help.re_frame_cofx = (function re_frisk$help$re_frame_cofx(){
return cljs.core.map.call(null,(function (p1__30662_SHARP_){
if(cljs.core.truth_(p1__30662_SHARP_.call(null,re_frisk.help.cofx))){
return cljs.core.PersistentArrayMap.fromArray([p1__30662_SHARP_,p1__30662_SHARP_.call(null,re_frisk.help.cofx)], true, false);
} else {
return p1__30662_SHARP_;
}
}),cljs.core.keys.call(null,new cljs.core.Keyword(null,"cofx","cofx",2013202907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler))));
});
re_frisk.help.re_frame_handlers = (function re_frisk$help$re_frame_handlers(kind__GT_id__GT_handler_QMARK_){
if(cljs.core.truth_((function (){var and__25113__auto__ = kind__GT_id__GT_handler_QMARK_;
if(cljs.core.truth_(and__25113__auto__)){
return re_frame.registrar.kind__GT_id__GT_handler;
} else {
return and__25113__auto__;
}
})())){
var event = reagent.ratom.make_reaction.call(null,(function (){
return re_frisk.help.re_frame_event.call(null);
}));
var sub = reagent.ratom.make_reaction.call(null,((function (event){
return (function (){
return re_frisk.help.re_frame_sub.call(null);
});})(event))
);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind->id->handler","kind->id->handler",-214642779),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.PersistentArrayMap.fromArray([cljs.core.count.call(null,cljs.core.deref.call(null,event)),event], true, false),new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.PersistentArrayMap.fromArray([cljs.core.count.call(null,cljs.core.deref.call(null,sub)),sub], true, false),new cljs.core.Keyword(null,"fx","fx",-1237829572),reagent.ratom.make_reaction.call(null,((function (event,sub){
return (function (){
return re_frisk.help.re_frame_fx.call(null);
});})(event,sub))
),new cljs.core.Keyword(null,"cofx","cofx",2013202907),reagent.ratom.make_reaction.call(null,((function (event,sub){
return (function (){
return re_frisk.help.re_frame_cofx.call(null);
});})(event,sub))
)], null)], null);
} else {
return null;
}
});

//# sourceMappingURL=help.js.map?rel=1490344428906