// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Runs on-dispose for all subscriptions we have in the subscription cache.
 *   Used to force recreation of new subscriptions. Should only be necessary
 *   in development.
 * 
 *   The on-dispose functions for the subscriptions will remove themselves from the
 *   cache.
 * 
 *   Useful when reloading Figwheel code after a React exception, as React components
 *   aren't cleaned up properly. This means a subscription's on-dispose function isn't
 *   run when the components are destroyed. If a bad subscription caused your exception,
 *   then you can't fix it without reloading your browser.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__89339_89349 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__89340_89350 = null;
var count__89341_89351 = (0);
var i__89342_89352 = (0);
while(true){
if((i__89342_89352 < count__89341_89351)){
var vec__89343_89353 = cljs.core._nth.call(null,chunk__89340_89350,i__89342_89352);
var k_89354 = cljs.core.nth.call(null,vec__89343_89353,(0),null);
var rxn_89355 = cljs.core.nth.call(null,vec__89343_89353,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_89355);

var G__89356 = seq__89339_89349;
var G__89357 = chunk__89340_89350;
var G__89358 = count__89341_89351;
var G__89359 = (i__89342_89352 + (1));
seq__89339_89349 = G__89356;
chunk__89340_89350 = G__89357;
count__89341_89351 = G__89358;
i__89342_89352 = G__89359;
continue;
} else {
var temp__4657__auto___89360 = cljs.core.seq.call(null,seq__89339_89349);
if(temp__4657__auto___89360){
var seq__89339_89361__$1 = temp__4657__auto___89360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89339_89361__$1)){
var c__25936__auto___89362 = cljs.core.chunk_first.call(null,seq__89339_89361__$1);
var G__89363 = cljs.core.chunk_rest.call(null,seq__89339_89361__$1);
var G__89364 = c__25936__auto___89362;
var G__89365 = cljs.core.count.call(null,c__25936__auto___89362);
var G__89366 = (0);
seq__89339_89349 = G__89363;
chunk__89340_89350 = G__89364;
count__89341_89351 = G__89365;
i__89342_89352 = G__89366;
continue;
} else {
var vec__89346_89367 = cljs.core.first.call(null,seq__89339_89361__$1);
var k_89368 = cljs.core.nth.call(null,vec__89346_89367,(0),null);
var rxn_89369 = cljs.core.nth.call(null,vec__89346_89367,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_89369);

var G__89370 = cljs.core.next.call(null,seq__89339_89361__$1);
var G__89371 = null;
var G__89372 = (0);
var G__89373 = (0);
seq__89339_89349 = G__89370;
chunk__89340_89350 = G__89371;
count__89341_89351 = G__89372;
i__89342_89352 = G__89373;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_89387 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32682__auto___89400 = re_frame.interop.now.call(null);
var duration__32683__auto___89401 = (end__32682__auto___89400 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__89388_89402 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__89389_89403 = null;
var count__89390_89404 = (0);
var i__89391_89405 = (0);
while(true){
if((i__89391_89405 < count__89390_89404)){
var vec__89392_89406 = cljs.core._nth.call(null,chunk__89389_89403,i__89391_89405);
var k__32684__auto___89407 = cljs.core.nth.call(null,vec__89392_89406,(0),null);
var cb__32685__auto___89408 = cljs.core.nth.call(null,vec__89392_89406,(1),null);
try{cb__32685__auto___89408.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___89401,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e89395){if((e89395 instanceof java.lang.Exception)){
var e__32686__auto___89409 = e89395;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___89407,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___89409);
} else {
throw e89395;

}
}
var G__89410 = seq__89388_89402;
var G__89411 = chunk__89389_89403;
var G__89412 = count__89390_89404;
var G__89413 = (i__89391_89405 + (1));
seq__89388_89402 = G__89410;
chunk__89389_89403 = G__89411;
count__89390_89404 = G__89412;
i__89391_89405 = G__89413;
continue;
} else {
var temp__4657__auto___89414 = cljs.core.seq.call(null,seq__89388_89402);
if(temp__4657__auto___89414){
var seq__89388_89415__$1 = temp__4657__auto___89414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89388_89415__$1)){
var c__25936__auto___89416 = cljs.core.chunk_first.call(null,seq__89388_89415__$1);
var G__89417 = cljs.core.chunk_rest.call(null,seq__89388_89415__$1);
var G__89418 = c__25936__auto___89416;
var G__89419 = cljs.core.count.call(null,c__25936__auto___89416);
var G__89420 = (0);
seq__89388_89402 = G__89417;
chunk__89389_89403 = G__89418;
count__89390_89404 = G__89419;
i__89391_89405 = G__89420;
continue;
} else {
var vec__89396_89421 = cljs.core.first.call(null,seq__89388_89415__$1);
var k__32684__auto___89422 = cljs.core.nth.call(null,vec__89396_89421,(0),null);
var cb__32685__auto___89423 = cljs.core.nth.call(null,vec__89396_89421,(1),null);
try{cb__32685__auto___89423.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___89401,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e89399){if((e89399 instanceof java.lang.Exception)){
var e__32686__auto___89424 = e89399;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___89422,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___89424);
} else {
throw e89399;

}
}
var G__89425 = cljs.core.next.call(null,seq__89388_89415__$1);
var G__89426 = null;
var G__89427 = (0);
var G__89428 = (0);
seq__89388_89402 = G__89425;
chunk__89389_89403 = G__89426;
count__89390_89404 = G__89427;
i__89391_89405 = G__89428;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_89387;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___89429 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___89429;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args89430 = [];
var len__26200__auto___89433 = arguments.length;
var i__26201__auto___89434 = (0);
while(true){
if((i__26201__auto___89434 < len__26200__auto___89433)){
args89430.push((arguments[i__26201__auto___89434]));

var G__89435 = (i__26201__auto___89434 + (1));
i__26201__auto___89434 = G__89435;
continue;
} else {
}
break;
}

var G__89432 = args89430.length;
switch (G__89432) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89430.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args89437 = [];
var len__26200__auto___89466 = arguments.length;
var i__26201__auto___89467 = (0);
while(true){
if((i__26201__auto___89467 < len__26200__auto___89466)){
args89437.push((arguments[i__26201__auto___89467]));

var G__89468 = (i__26201__auto___89467 + (1));
i__26201__auto___89467 = G__89468;
continue;
} else {
}
break;
}

var G__89439 = args89437.length;
switch (G__89439) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89437.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_89440 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___89470 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___89470;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___89471 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___89471;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___89472 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___89472;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32682__auto___89473 = re_frame.interop.now.call(null);
var duration__32683__auto___89474 = (end__32682__auto___89473 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__89441_89475 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__89442_89476 = null;
var count__89443_89477 = (0);
var i__89444_89478 = (0);
while(true){
if((i__89444_89478 < count__89443_89477)){
var vec__89445_89479 = cljs.core._nth.call(null,chunk__89442_89476,i__89444_89478);
var k__32684__auto___89480 = cljs.core.nth.call(null,vec__89445_89479,(0),null);
var cb__32685__auto___89481 = cljs.core.nth.call(null,vec__89445_89479,(1),null);
try{cb__32685__auto___89481.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___89474,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e89448){if((e89448 instanceof java.lang.Exception)){
var e__32686__auto___89482 = e89448;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___89480,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___89482);
} else {
throw e89448;

}
}
var G__89483 = seq__89441_89475;
var G__89484 = chunk__89442_89476;
var G__89485 = count__89443_89477;
var G__89486 = (i__89444_89478 + (1));
seq__89441_89475 = G__89483;
chunk__89442_89476 = G__89484;
count__89443_89477 = G__89485;
i__89444_89478 = G__89486;
continue;
} else {
var temp__4657__auto___89487 = cljs.core.seq.call(null,seq__89441_89475);
if(temp__4657__auto___89487){
var seq__89441_89488__$1 = temp__4657__auto___89487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89441_89488__$1)){
var c__25936__auto___89489 = cljs.core.chunk_first.call(null,seq__89441_89488__$1);
var G__89490 = cljs.core.chunk_rest.call(null,seq__89441_89488__$1);
var G__89491 = c__25936__auto___89489;
var G__89492 = cljs.core.count.call(null,c__25936__auto___89489);
var G__89493 = (0);
seq__89441_89475 = G__89490;
chunk__89442_89476 = G__89491;
count__89443_89477 = G__89492;
i__89444_89478 = G__89493;
continue;
} else {
var vec__89449_89494 = cljs.core.first.call(null,seq__89441_89488__$1);
var k__32684__auto___89495 = cljs.core.nth.call(null,vec__89449_89494,(0),null);
var cb__32685__auto___89496 = cljs.core.nth.call(null,vec__89449_89494,(1),null);
try{cb__32685__auto___89496.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___89474,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e89452){if((e89452 instanceof java.lang.Exception)){
var e__32686__auto___89497 = e89452;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___89495,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___89497);
} else {
throw e89452;

}
}
var G__89498 = cljs.core.next.call(null,seq__89441_89488__$1);
var G__89499 = null;
var G__89500 = (0);
var G__89501 = (0);
seq__89441_89475 = G__89498;
chunk__89442_89476 = G__89499;
count__89443_89477 = G__89500;
i__89444_89478 = G__89501;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_89440;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___89502 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___89502;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___89503 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___89503;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___89504 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___89504;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_89453 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___89505 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___89505;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___89506 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___89506;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___89507 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___89507)){
var not_reactive_89508 = temp__4657__auto___89507;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_89508);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___89509 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___89509;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_89453){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_89453))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_89453){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_89453))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_89453){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_89453))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32682__auto___89510 = re_frame.interop.now.call(null);
var duration__32683__auto___89511 = (end__32682__auto___89510 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__89454_89512 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__89455_89513 = null;
var count__89456_89514 = (0);
var i__89457_89515 = (0);
while(true){
if((i__89457_89515 < count__89456_89514)){
var vec__89458_89516 = cljs.core._nth.call(null,chunk__89455_89513,i__89457_89515);
var k__32684__auto___89517 = cljs.core.nth.call(null,vec__89458_89516,(0),null);
var cb__32685__auto___89518 = cljs.core.nth.call(null,vec__89458_89516,(1),null);
try{cb__32685__auto___89518.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___89511,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e89461){if((e89461 instanceof java.lang.Exception)){
var e__32686__auto___89519 = e89461;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___89517,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___89519);
} else {
throw e89461;

}
}
var G__89520 = seq__89454_89512;
var G__89521 = chunk__89455_89513;
var G__89522 = count__89456_89514;
var G__89523 = (i__89457_89515 + (1));
seq__89454_89512 = G__89520;
chunk__89455_89513 = G__89521;
count__89456_89514 = G__89522;
i__89457_89515 = G__89523;
continue;
} else {
var temp__4657__auto___89524 = cljs.core.seq.call(null,seq__89454_89512);
if(temp__4657__auto___89524){
var seq__89454_89525__$1 = temp__4657__auto___89524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89454_89525__$1)){
var c__25936__auto___89526 = cljs.core.chunk_first.call(null,seq__89454_89525__$1);
var G__89527 = cljs.core.chunk_rest.call(null,seq__89454_89525__$1);
var G__89528 = c__25936__auto___89526;
var G__89529 = cljs.core.count.call(null,c__25936__auto___89526);
var G__89530 = (0);
seq__89454_89512 = G__89527;
chunk__89455_89513 = G__89528;
count__89456_89514 = G__89529;
i__89457_89515 = G__89530;
continue;
} else {
var vec__89462_89531 = cljs.core.first.call(null,seq__89454_89525__$1);
var k__32684__auto___89532 = cljs.core.nth.call(null,vec__89462_89531,(0),null);
var cb__32685__auto___89533 = cljs.core.nth.call(null,vec__89462_89531,(1),null);
try{cb__32685__auto___89533.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___89511,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e89465){if((e89465 instanceof java.lang.Exception)){
var e__32686__auto___89534 = e89465;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___89532,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___89534);
} else {
throw e89465;

}
}
var G__89535 = cljs.core.next.call(null,seq__89454_89525__$1);
var G__89536 = null;
var G__89537 = (0);
var G__89538 = (0);
seq__89454_89512 = G__89535;
chunk__89455_89513 = G__89536;
count__89456_89514 = G__89537;
i__89457_89515 = G__89538;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_89453;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___89539 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___89539;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___89540 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___89540;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___89541 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___89541)){
var not_reactive_89542 = temp__4657__auto___89541;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_89542);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___89543 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___89543;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__89548){
var vec__89549 = p__89548;
var k = cljs.core.nth.call(null,vec__89549,(0),null);
var v = cljs.core.nth.call(null,vec__89549,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___89552 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___89552;

} else {
}

return signals__$1;
});
/**
 * Associate the given `query id` with a handler function and an optional signal function.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation function, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__26207__auto__ = [];
var len__26200__auto___89608 = arguments.length;
var i__26201__auto___89609 = (0);
while(true){
if((i__26201__auto___89609 < len__26200__auto___89608)){
args__26207__auto__.push((arguments[i__26201__auto___89609]));

var G__89610 = (i__26201__auto___89609 + (1));
i__26201__auto___89609 = G__89610;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((1) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26208__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = [cljs.core.str("re-frame: reg-sub for "),cljs.core.str(query_id),cljs.core.str(", ")].join('');
var inputs_fn = (function (){var G__89555 = cljs.core.count.call(null,input_args);
switch (G__89555) {
case (0):
return ((function (G__89555,computation_fn,input_args,err_header){
return (function() {
var G__89612 = null;
var G__89612__1 = (function (_){
return re_frame.db.app_db;
});
var G__89612__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__89612 = function(_,___$1){
switch(arguments.length){
case 1:
return G__89612__1.call(this,_);
case 2:
return G__89612__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__89612.cljs$core$IFn$_invoke$arity$1 = G__89612__1;
G__89612.cljs$core$IFn$_invoke$arity$2 = G__89612__2;
return G__89612;
})()
;})(G__89555,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
return ((function (G__89555,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(G__89555,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,vecs,G__89555,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,vecs,G__89555,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_89582 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32682__auto___89613 = re_frame.interop.now.call(null);
var duration__32683__auto___89614 = (end__32682__auto___89613 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__89583_89615 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__89584_89616 = null;
var count__89585_89617 = (0);
var i__89586_89618 = (0);
while(true){
if((i__89586_89618 < count__89585_89617)){
var vec__89587_89619 = cljs.core._nth.call(null,chunk__89584_89616,i__89586_89618);
var k__32684__auto___89620 = cljs.core.nth.call(null,vec__89587_89619,(0),null);
var cb__32685__auto___89621 = cljs.core.nth.call(null,vec__89587_89619,(1),null);
try{cb__32685__auto___89621.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___89614,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e89590){if((e89590 instanceof java.lang.Exception)){
var e__32686__auto___89622 = e89590;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___89620,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___89622);
} else {
throw e89590;

}
}
var G__89623 = seq__89583_89615;
var G__89624 = chunk__89584_89616;
var G__89625 = count__89585_89617;
var G__89626 = (i__89586_89618 + (1));
seq__89583_89615 = G__89623;
chunk__89584_89616 = G__89624;
count__89585_89617 = G__89625;
i__89586_89618 = G__89626;
continue;
} else {
var temp__4657__auto___89627 = cljs.core.seq.call(null,seq__89583_89615);
if(temp__4657__auto___89627){
var seq__89583_89628__$1 = temp__4657__auto___89627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89583_89628__$1)){
var c__25936__auto___89629 = cljs.core.chunk_first.call(null,seq__89583_89628__$1);
var G__89630 = cljs.core.chunk_rest.call(null,seq__89583_89628__$1);
var G__89631 = c__25936__auto___89629;
var G__89632 = cljs.core.count.call(null,c__25936__auto___89629);
var G__89633 = (0);
seq__89583_89615 = G__89630;
chunk__89584_89616 = G__89631;
count__89585_89617 = G__89632;
i__89586_89618 = G__89633;
continue;
} else {
var vec__89591_89634 = cljs.core.first.call(null,seq__89583_89628__$1);
var k__32684__auto___89635 = cljs.core.nth.call(null,vec__89591_89634,(0),null);
var cb__32685__auto___89636 = cljs.core.nth.call(null,vec__89591_89634,(1),null);
try{cb__32685__auto___89636.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___89614,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e89594){if((e89594 instanceof java.lang.Exception)){
var e__32686__auto___89637 = e89594;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___89635,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___89637);
} else {
throw e89594;

}
}
var G__89638 = cljs.core.next.call(null,seq__89583_89628__$1);
var G__89639 = null;
var G__89640 = (0);
var G__89641 = (0);
seq__89583_89615 = G__89638;
chunk__89584_89616 = G__89639;
count__89585_89617 = G__89640;
i__89586_89618 = G__89641;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_89582;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_89595 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32682__auto___89642 = re_frame.interop.now.call(null);
var duration__32683__auto___89643 = (end__32682__auto___89642 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__89596_89644 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__89597_89645 = null;
var count__89598_89646 = (0);
var i__89599_89647 = (0);
while(true){
if((i__89599_89647 < count__89598_89646)){
var vec__89600_89648 = cljs.core._nth.call(null,chunk__89597_89645,i__89599_89647);
var k__32684__auto___89649 = cljs.core.nth.call(null,vec__89600_89648,(0),null);
var cb__32685__auto___89650 = cljs.core.nth.call(null,vec__89600_89648,(1),null);
try{cb__32685__auto___89650.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___89643,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e89603){if((e89603 instanceof java.lang.Exception)){
var e__32686__auto___89651 = e89603;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___89649,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___89651);
} else {
throw e89603;

}
}
var G__89652 = seq__89596_89644;
var G__89653 = chunk__89597_89645;
var G__89654 = count__89598_89646;
var G__89655 = (i__89599_89647 + (1));
seq__89596_89644 = G__89652;
chunk__89597_89645 = G__89653;
count__89598_89646 = G__89654;
i__89599_89647 = G__89655;
continue;
} else {
var temp__4657__auto___89656 = cljs.core.seq.call(null,seq__89596_89644);
if(temp__4657__auto___89656){
var seq__89596_89657__$1 = temp__4657__auto___89656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89596_89657__$1)){
var c__25936__auto___89658 = cljs.core.chunk_first.call(null,seq__89596_89657__$1);
var G__89659 = cljs.core.chunk_rest.call(null,seq__89596_89657__$1);
var G__89660 = c__25936__auto___89658;
var G__89661 = cljs.core.count.call(null,c__25936__auto___89658);
var G__89662 = (0);
seq__89596_89644 = G__89659;
chunk__89597_89645 = G__89660;
count__89598_89646 = G__89661;
i__89599_89647 = G__89662;
continue;
} else {
var vec__89604_89663 = cljs.core.first.call(null,seq__89596_89657__$1);
var k__32684__auto___89664 = cljs.core.nth.call(null,vec__89604_89663,(0),null);
var cb__32685__auto___89665 = cljs.core.nth.call(null,vec__89604_89663,(1),null);
try{cb__32685__auto___89665.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___89643,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e89607){if((e89607 instanceof java.lang.Exception)){
var e__32686__auto___89666 = e89607;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___89664,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___89666);
} else {
throw e89607;

}
}
var G__89667 = cljs.core.next.call(null,seq__89596_89657__$1);
var G__89668 = null;
var G__89669 = (0);
var G__89670 = (0);
seq__89596_89644 = G__89667;
chunk__89597_89645 = G__89668;
count__89598_89646 = G__89669;
i__89599_89647 = G__89670;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_89595;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq89553){
var G__89554 = cljs.core.first.call(null,seq89553);
var seq89553__$1 = cljs.core.next.call(null,seq89553);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__89554,seq89553__$1);
});


//# sourceMappingURL=subs.js.map?rel=1488399651459