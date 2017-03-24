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
var seq__114372 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__114373 = null;
var count__114374 = (0);
var i__114375 = (0);
while(true){
if((i__114375 < count__114374)){
var vec__114376 = cljs.core._nth.call(null,chunk__114373,i__114375);
var effect_k = cljs.core.nth.call(null,vec__114376,(0),null);
var value = cljs.core.nth.call(null,vec__114376,(1),null);
var temp__4655__auto___114382 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___114382)){
var effect_fn_114383 = temp__4655__auto___114382;
effect_fn_114383.call(null,value);
} else {
}

var G__114384 = seq__114372;
var G__114385 = chunk__114373;
var G__114386 = count__114374;
var G__114387 = (i__114375 + (1));
seq__114372 = G__114384;
chunk__114373 = G__114385;
count__114374 = G__114386;
i__114375 = G__114387;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__114372);
if(temp__4657__auto__){
var seq__114372__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114372__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__114372__$1);
var G__114388 = cljs.core.chunk_rest.call(null,seq__114372__$1);
var G__114389 = c__25936__auto__;
var G__114390 = cljs.core.count.call(null,c__25936__auto__);
var G__114391 = (0);
seq__114372 = G__114388;
chunk__114373 = G__114389;
count__114374 = G__114390;
i__114375 = G__114391;
continue;
} else {
var vec__114379 = cljs.core.first.call(null,seq__114372__$1);
var effect_k = cljs.core.nth.call(null,vec__114379,(0),null);
var value = cljs.core.nth.call(null,vec__114379,(1),null);
var temp__4655__auto___114392 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___114392)){
var effect_fn_114393 = temp__4655__auto___114392;
effect_fn_114393.call(null,value);
} else {
}

var G__114394 = cljs.core.next.call(null,seq__114372__$1);
var G__114395 = null;
var G__114396 = (0);
var G__114397 = (0);
seq__114372 = G__114394;
chunk__114373 = G__114395;
count__114374 = G__114396;
i__114375 = G__114397;
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
var seq__114398 = cljs.core.seq.call(null,value);
var chunk__114399 = null;
var count__114400 = (0);
var i__114401 = (0);
while(true){
if((i__114401 < count__114400)){
var map__114402 = cljs.core._nth.call(null,chunk__114399,i__114401);
var map__114402__$1 = ((((!((map__114402 == null)))?((((map__114402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__114402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__114402):map__114402);
var effect = map__114402__$1;
var ms = cljs.core.get.call(null,map__114402__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__114402__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__114398,chunk__114399,count__114400,i__114401,map__114402,map__114402__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__114398,chunk__114399,count__114400,i__114401,map__114402,map__114402__$1,effect,ms,dispatch))
,ms);
}

var G__114406 = seq__114398;
var G__114407 = chunk__114399;
var G__114408 = count__114400;
var G__114409 = (i__114401 + (1));
seq__114398 = G__114406;
chunk__114399 = G__114407;
count__114400 = G__114408;
i__114401 = G__114409;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__114398);
if(temp__4657__auto__){
var seq__114398__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114398__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__114398__$1);
var G__114410 = cljs.core.chunk_rest.call(null,seq__114398__$1);
var G__114411 = c__25936__auto__;
var G__114412 = cljs.core.count.call(null,c__25936__auto__);
var G__114413 = (0);
seq__114398 = G__114410;
chunk__114399 = G__114411;
count__114400 = G__114412;
i__114401 = G__114413;
continue;
} else {
var map__114404 = cljs.core.first.call(null,seq__114398__$1);
var map__114404__$1 = ((((!((map__114404 == null)))?((((map__114404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__114404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__114404):map__114404);
var effect = map__114404__$1;
var ms = cljs.core.get.call(null,map__114404__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__114404__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__114398,chunk__114399,count__114400,i__114401,map__114404,map__114404__$1,effect,ms,dispatch,seq__114398__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__114398,chunk__114399,count__114400,i__114401,map__114404,map__114404__$1,effect,ms,dispatch,seq__114398__$1,temp__4657__auto__))
,ms);
}

var G__114414 = cljs.core.next.call(null,seq__114398__$1);
var G__114415 = null;
var G__114416 = (0);
var G__114417 = (0);
seq__114398 = G__114414;
chunk__114399 = G__114415;
count__114400 = G__114416;
i__114401 = G__114417;
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

var seq__114418 = cljs.core.seq.call(null,value);
var chunk__114419 = null;
var count__114420 = (0);
var i__114421 = (0);
while(true){
if((i__114421 < count__114420)){
var event = cljs.core._nth.call(null,chunk__114419,i__114421);
re_frame.router.dispatch.call(null,event);

var G__114422 = seq__114418;
var G__114423 = chunk__114419;
var G__114424 = count__114420;
var G__114425 = (i__114421 + (1));
seq__114418 = G__114422;
chunk__114419 = G__114423;
count__114420 = G__114424;
i__114421 = G__114425;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__114418);
if(temp__4657__auto__){
var seq__114418__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114418__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__114418__$1);
var G__114426 = cljs.core.chunk_rest.call(null,seq__114418__$1);
var G__114427 = c__25936__auto__;
var G__114428 = cljs.core.count.call(null,c__25936__auto__);
var G__114429 = (0);
seq__114418 = G__114426;
chunk__114419 = G__114427;
count__114420 = G__114428;
i__114421 = G__114429;
continue;
} else {
var event = cljs.core.first.call(null,seq__114418__$1);
re_frame.router.dispatch.call(null,event);

var G__114430 = cljs.core.next.call(null,seq__114418__$1);
var G__114431 = null;
var G__114432 = (0);
var G__114433 = (0);
seq__114418 = G__114430;
chunk__114419 = G__114431;
count__114420 = G__114432;
i__114421 = G__114433;
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
var seq__114434 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__114435 = null;
var count__114436 = (0);
var i__114437 = (0);
while(true){
if((i__114437 < count__114436)){
var event = cljs.core._nth.call(null,chunk__114435,i__114437);
clear_event.call(null,event);

var G__114438 = seq__114434;
var G__114439 = chunk__114435;
var G__114440 = count__114436;
var G__114441 = (i__114437 + (1));
seq__114434 = G__114438;
chunk__114435 = G__114439;
count__114436 = G__114440;
i__114437 = G__114441;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__114434);
if(temp__4657__auto__){
var seq__114434__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114434__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__114434__$1);
var G__114442 = cljs.core.chunk_rest.call(null,seq__114434__$1);
var G__114443 = c__25936__auto__;
var G__114444 = cljs.core.count.call(null,c__25936__auto__);
var G__114445 = (0);
seq__114434 = G__114442;
chunk__114435 = G__114443;
count__114436 = G__114444;
i__114437 = G__114445;
continue;
} else {
var event = cljs.core.first.call(null,seq__114434__$1);
clear_event.call(null,event);

var G__114446 = cljs.core.next.call(null,seq__114434__$1);
var G__114447 = null;
var G__114448 = (0);
var G__114449 = (0);
seq__114434 = G__114446;
chunk__114435 = G__114447;
count__114436 = G__114448;
i__114437 = G__114449;
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

//# sourceMappingURL=fx.js.map?rel=1488400161146