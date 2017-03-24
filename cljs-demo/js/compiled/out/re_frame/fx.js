// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__29992 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__29993 = null;
var count__29994 = (0);
var i__29995 = (0);
while(true){
if((i__29995 < count__29994)){
var vec__29996 = cljs.core._nth.call(null,chunk__29993,i__29995);
var effect_k = cljs.core.nth.call(null,vec__29996,(0),null);
var value = cljs.core.nth.call(null,vec__29996,(1),null);
var temp__4655__auto___30002 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___30002)){
var effect_fn_30003 = temp__4655__auto___30002;
effect_fn_30003.call(null,value);
} else {
}

var G__30004 = seq__29992;
var G__30005 = chunk__29993;
var G__30006 = count__29994;
var G__30007 = (i__29995 + (1));
seq__29992 = G__30004;
chunk__29993 = G__30005;
count__29994 = G__30006;
i__29995 = G__30007;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29992);
if(temp__4657__auto__){
var seq__29992__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29992__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__29992__$1);
var G__30008 = cljs.core.chunk_rest.call(null,seq__29992__$1);
var G__30009 = c__25936__auto__;
var G__30010 = cljs.core.count.call(null,c__25936__auto__);
var G__30011 = (0);
seq__29992 = G__30008;
chunk__29993 = G__30009;
count__29994 = G__30010;
i__29995 = G__30011;
continue;
} else {
var vec__29999 = cljs.core.first.call(null,seq__29992__$1);
var effect_k = cljs.core.nth.call(null,vec__29999,(0),null);
var value = cljs.core.nth.call(null,vec__29999,(1),null);
var temp__4655__auto___30012 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___30012)){
var effect_fn_30013 = temp__4655__auto___30012;
effect_fn_30013.call(null,value);
} else {
}

var G__30014 = cljs.core.next.call(null,seq__29992__$1);
var G__30015 = null;
var G__30016 = (0);
var G__30017 = (0);
seq__29992 = G__30014;
chunk__29993 = G__30015;
count__29994 = G__30016;
i__29995 = G__30017;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__30018 = cljs.core.seq.call(null,value);
var chunk__30019 = null;
var count__30020 = (0);
var i__30021 = (0);
while(true){
if((i__30021 < count__30020)){
var map__30022 = cljs.core._nth.call(null,chunk__30019,i__30021);
var map__30022__$1 = ((((!((map__30022 == null)))?((((map__30022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30022):map__30022);
var effect = map__30022__$1;
var ms = cljs.core.get.call(null,map__30022__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30022__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__30018,chunk__30019,count__30020,i__30021,map__30022,map__30022__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__30018,chunk__30019,count__30020,i__30021,map__30022,map__30022__$1,effect,ms,dispatch))
,ms);
}

var G__30026 = seq__30018;
var G__30027 = chunk__30019;
var G__30028 = count__30020;
var G__30029 = (i__30021 + (1));
seq__30018 = G__30026;
chunk__30019 = G__30027;
count__30020 = G__30028;
i__30021 = G__30029;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30018);
if(temp__4657__auto__){
var seq__30018__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30018__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__30018__$1);
var G__30030 = cljs.core.chunk_rest.call(null,seq__30018__$1);
var G__30031 = c__25936__auto__;
var G__30032 = cljs.core.count.call(null,c__25936__auto__);
var G__30033 = (0);
seq__30018 = G__30030;
chunk__30019 = G__30031;
count__30020 = G__30032;
i__30021 = G__30033;
continue;
} else {
var map__30024 = cljs.core.first.call(null,seq__30018__$1);
var map__30024__$1 = ((((!((map__30024 == null)))?((((map__30024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30024):map__30024);
var effect = map__30024__$1;
var ms = cljs.core.get.call(null,map__30024__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30024__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__30018,chunk__30019,count__30020,i__30021,map__30024,map__30024__$1,effect,ms,dispatch,seq__30018__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__30018,chunk__30019,count__30020,i__30021,map__30024,map__30024__$1,effect,ms,dispatch,seq__30018__$1,temp__4657__auto__))
,ms);
}

var G__30034 = cljs.core.next.call(null,seq__30018__$1);
var G__30035 = null;
var G__30036 = (0);
var G__30037 = (0);
seq__30018 = G__30034;
chunk__30019 = G__30035;
count__30020 = G__30036;
i__30021 = G__30037;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__30038 = cljs.core.seq.call(null,value);
var chunk__30039 = null;
var count__30040 = (0);
var i__30041 = (0);
while(true){
if((i__30041 < count__30040)){
var event = cljs.core._nth.call(null,chunk__30039,i__30041);
re_frame.router.dispatch.call(null,event);

var G__30042 = seq__30038;
var G__30043 = chunk__30039;
var G__30044 = count__30040;
var G__30045 = (i__30041 + (1));
seq__30038 = G__30042;
chunk__30039 = G__30043;
count__30040 = G__30044;
i__30041 = G__30045;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30038);
if(temp__4657__auto__){
var seq__30038__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30038__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__30038__$1);
var G__30046 = cljs.core.chunk_rest.call(null,seq__30038__$1);
var G__30047 = c__25936__auto__;
var G__30048 = cljs.core.count.call(null,c__25936__auto__);
var G__30049 = (0);
seq__30038 = G__30046;
chunk__30039 = G__30047;
count__30040 = G__30048;
i__30041 = G__30049;
continue;
} else {
var event = cljs.core.first.call(null,seq__30038__$1);
re_frame.router.dispatch.call(null,event);

var G__30050 = cljs.core.next.call(null,seq__30038__$1);
var G__30051 = null;
var G__30052 = (0);
var G__30053 = (0);
seq__30038 = G__30050;
chunk__30039 = G__30051;
count__30040 = G__30052;
i__30041 = G__30053;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__30054 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__30055 = null;
var count__30056 = (0);
var i__30057 = (0);
while(true){
if((i__30057 < count__30056)){
var event = cljs.core._nth.call(null,chunk__30055,i__30057);
clear_event.call(null,event);

var G__30058 = seq__30054;
var G__30059 = chunk__30055;
var G__30060 = count__30056;
var G__30061 = (i__30057 + (1));
seq__30054 = G__30058;
chunk__30055 = G__30059;
count__30056 = G__30060;
i__30057 = G__30061;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30054);
if(temp__4657__auto__){
var seq__30054__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30054__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__30054__$1);
var G__30062 = cljs.core.chunk_rest.call(null,seq__30054__$1);
var G__30063 = c__25936__auto__;
var G__30064 = cljs.core.count.call(null,c__25936__auto__);
var G__30065 = (0);
seq__30054 = G__30062;
chunk__30055 = G__30063;
count__30056 = G__30064;
i__30057 = G__30065;
continue;
} else {
var event = cljs.core.first.call(null,seq__30054__$1);
clear_event.call(null,event);

var G__30066 = cljs.core.next.call(null,seq__30054__$1);
var G__30067 = null;
var G__30068 = (0);
var G__30069 = (0);
seq__30054 = G__30066;
chunk__30055 = G__30067;
count__30056 = G__30068;
i__30057 = G__30069;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1488439824726