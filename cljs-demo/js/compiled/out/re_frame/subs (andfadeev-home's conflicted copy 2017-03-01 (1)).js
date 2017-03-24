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
var seq__114539_114549 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__114540_114550 = null;
var count__114541_114551 = (0);
var i__114542_114552 = (0);
while(true){
if((i__114542_114552 < count__114541_114551)){
var vec__114543_114553 = cljs.core._nth.call(null,chunk__114540_114550,i__114542_114552);
var k_114554 = cljs.core.nth.call(null,vec__114543_114553,(0),null);
var rxn_114555 = cljs.core.nth.call(null,vec__114543_114553,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_114555);

var G__114556 = seq__114539_114549;
var G__114557 = chunk__114540_114550;
var G__114558 = count__114541_114551;
var G__114559 = (i__114542_114552 + (1));
seq__114539_114549 = G__114556;
chunk__114540_114550 = G__114557;
count__114541_114551 = G__114558;
i__114542_114552 = G__114559;
continue;
} else {
var temp__4657__auto___114560 = cljs.core.seq.call(null,seq__114539_114549);
if(temp__4657__auto___114560){
var seq__114539_114561__$1 = temp__4657__auto___114560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114539_114561__$1)){
var c__25936__auto___114562 = cljs.core.chunk_first.call(null,seq__114539_114561__$1);
var G__114563 = cljs.core.chunk_rest.call(null,seq__114539_114561__$1);
var G__114564 = c__25936__auto___114562;
var G__114565 = cljs.core.count.call(null,c__25936__auto___114562);
var G__114566 = (0);
seq__114539_114549 = G__114563;
chunk__114540_114550 = G__114564;
count__114541_114551 = G__114565;
i__114542_114552 = G__114566;
continue;
} else {
var vec__114546_114567 = cljs.core.first.call(null,seq__114539_114561__$1);
var k_114568 = cljs.core.nth.call(null,vec__114546_114567,(0),null);
var rxn_114569 = cljs.core.nth.call(null,vec__114546_114567,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_114569);

var G__114570 = cljs.core.next.call(null,seq__114539_114561__$1);
var G__114571 = null;
var G__114572 = (0);
var G__114573 = (0);
seq__114539_114549 = G__114570;
chunk__114540_114550 = G__114571;
count__114541_114551 = G__114572;
i__114542_114552 = G__114573;
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
var _STAR_current_trace_STAR_114587 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32682__auto___114600 = re_frame.interop.now.call(null);
var duration__32683__auto___114601 = (end__32682__auto___114600 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__114588_114602 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__114589_114603 = null;
var count__114590_114604 = (0);
var i__114591_114605 = (0);
while(true){
if((i__114591_114605 < count__114590_114604)){
var vec__114592_114606 = cljs.core._nth.call(null,chunk__114589_114603,i__114591_114605);
var k__32684__auto___114607 = cljs.core.nth.call(null,vec__114592_114606,(0),null);
var cb__32685__auto___114608 = cljs.core.nth.call(null,vec__114592_114606,(1),null);
try{cb__32685__auto___114608.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___114601,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114595){if((e114595 instanceof java.lang.Exception)){
var e__32686__auto___114609 = e114595;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___114607,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___114609);
} else {
throw e114595;

}
}
var G__114610 = seq__114588_114602;
var G__114611 = chunk__114589_114603;
var G__114612 = count__114590_114604;
var G__114613 = (i__114591_114605 + (1));
seq__114588_114602 = G__114610;
chunk__114589_114603 = G__114611;
count__114590_114604 = G__114612;
i__114591_114605 = G__114613;
continue;
} else {
var temp__4657__auto___114614 = cljs.core.seq.call(null,seq__114588_114602);
if(temp__4657__auto___114614){
var seq__114588_114615__$1 = temp__4657__auto___114614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114588_114615__$1)){
var c__25936__auto___114616 = cljs.core.chunk_first.call(null,seq__114588_114615__$1);
var G__114617 = cljs.core.chunk_rest.call(null,seq__114588_114615__$1);
var G__114618 = c__25936__auto___114616;
var G__114619 = cljs.core.count.call(null,c__25936__auto___114616);
var G__114620 = (0);
seq__114588_114602 = G__114617;
chunk__114589_114603 = G__114618;
count__114590_114604 = G__114619;
i__114591_114605 = G__114620;
continue;
} else {
var vec__114596_114621 = cljs.core.first.call(null,seq__114588_114615__$1);
var k__32684__auto___114622 = cljs.core.nth.call(null,vec__114596_114621,(0),null);
var cb__32685__auto___114623 = cljs.core.nth.call(null,vec__114596_114621,(1),null);
try{cb__32685__auto___114623.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___114601,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114599){if((e114599 instanceof java.lang.Exception)){
var e__32686__auto___114624 = e114599;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___114622,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___114624);
} else {
throw e114599;

}
}
var G__114625 = cljs.core.next.call(null,seq__114588_114615__$1);
var G__114626 = null;
var G__114627 = (0);
var G__114628 = (0);
seq__114588_114602 = G__114625;
chunk__114589_114603 = G__114626;
count__114590_114604 = G__114627;
i__114591_114605 = G__114628;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_114587;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___114629 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___114629;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args114630 = [];
var len__26200__auto___114633 = arguments.length;
var i__26201__auto___114634 = (0);
while(true){
if((i__26201__auto___114634 < len__26200__auto___114633)){
args114630.push((arguments[i__26201__auto___114634]));

var G__114635 = (i__26201__auto___114634 + (1));
i__26201__auto___114634 = G__114635;
continue;
} else {
}
break;
}

var G__114632 = args114630.length;
switch (G__114632) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args114630.length)].join('')));

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
var args114637 = [];
var len__26200__auto___114666 = arguments.length;
var i__26201__auto___114667 = (0);
while(true){
if((i__26201__auto___114667 < len__26200__auto___114666)){
args114637.push((arguments[i__26201__auto___114667]));

var G__114668 = (i__26201__auto___114667 + (1));
i__26201__auto___114667 = G__114668;
continue;
} else {
}
break;
}

var G__114639 = args114637.length;
switch (G__114639) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args114637.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_114640 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___114670 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___114670;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___114671 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___114671;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___114672 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___114672;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32682__auto___114673 = re_frame.interop.now.call(null);
var duration__32683__auto___114674 = (end__32682__auto___114673 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__114641_114675 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__114642_114676 = null;
var count__114643_114677 = (0);
var i__114644_114678 = (0);
while(true){
if((i__114644_114678 < count__114643_114677)){
var vec__114645_114679 = cljs.core._nth.call(null,chunk__114642_114676,i__114644_114678);
var k__32684__auto___114680 = cljs.core.nth.call(null,vec__114645_114679,(0),null);
var cb__32685__auto___114681 = cljs.core.nth.call(null,vec__114645_114679,(1),null);
try{cb__32685__auto___114681.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___114674,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114648){if((e114648 instanceof java.lang.Exception)){
var e__32686__auto___114682 = e114648;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___114680,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___114682);
} else {
throw e114648;

}
}
var G__114683 = seq__114641_114675;
var G__114684 = chunk__114642_114676;
var G__114685 = count__114643_114677;
var G__114686 = (i__114644_114678 + (1));
seq__114641_114675 = G__114683;
chunk__114642_114676 = G__114684;
count__114643_114677 = G__114685;
i__114644_114678 = G__114686;
continue;
} else {
var temp__4657__auto___114687 = cljs.core.seq.call(null,seq__114641_114675);
if(temp__4657__auto___114687){
var seq__114641_114688__$1 = temp__4657__auto___114687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114641_114688__$1)){
var c__25936__auto___114689 = cljs.core.chunk_first.call(null,seq__114641_114688__$1);
var G__114690 = cljs.core.chunk_rest.call(null,seq__114641_114688__$1);
var G__114691 = c__25936__auto___114689;
var G__114692 = cljs.core.count.call(null,c__25936__auto___114689);
var G__114693 = (0);
seq__114641_114675 = G__114690;
chunk__114642_114676 = G__114691;
count__114643_114677 = G__114692;
i__114644_114678 = G__114693;
continue;
} else {
var vec__114649_114694 = cljs.core.first.call(null,seq__114641_114688__$1);
var k__32684__auto___114695 = cljs.core.nth.call(null,vec__114649_114694,(0),null);
var cb__32685__auto___114696 = cljs.core.nth.call(null,vec__114649_114694,(1),null);
try{cb__32685__auto___114696.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___114674,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114652){if((e114652 instanceof java.lang.Exception)){
var e__32686__auto___114697 = e114652;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___114695,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___114697);
} else {
throw e114652;

}
}
var G__114698 = cljs.core.next.call(null,seq__114641_114688__$1);
var G__114699 = null;
var G__114700 = (0);
var G__114701 = (0);
seq__114641_114675 = G__114698;
chunk__114642_114676 = G__114699;
count__114643_114677 = G__114700;
i__114644_114678 = G__114701;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_114640;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___114702 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___114702;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___114703 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___114703;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___114704 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___114704;

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
var _STAR_current_trace_STAR_114653 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___114705 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___114705;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___114706 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___114706;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___114707 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___114707)){
var not_reactive_114708 = temp__4657__auto___114707;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_114708);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___114709 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___114709;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_114653){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_114653))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_114653){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_114653))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_114653){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_114653))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32682__auto___114710 = re_frame.interop.now.call(null);
var duration__32683__auto___114711 = (end__32682__auto___114710 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__114654_114712 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__114655_114713 = null;
var count__114656_114714 = (0);
var i__114657_114715 = (0);
while(true){
if((i__114657_114715 < count__114656_114714)){
var vec__114658_114716 = cljs.core._nth.call(null,chunk__114655_114713,i__114657_114715);
var k__32684__auto___114717 = cljs.core.nth.call(null,vec__114658_114716,(0),null);
var cb__32685__auto___114718 = cljs.core.nth.call(null,vec__114658_114716,(1),null);
try{cb__32685__auto___114718.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___114711,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114661){if((e114661 instanceof java.lang.Exception)){
var e__32686__auto___114719 = e114661;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___114717,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___114719);
} else {
throw e114661;

}
}
var G__114720 = seq__114654_114712;
var G__114721 = chunk__114655_114713;
var G__114722 = count__114656_114714;
var G__114723 = (i__114657_114715 + (1));
seq__114654_114712 = G__114720;
chunk__114655_114713 = G__114721;
count__114656_114714 = G__114722;
i__114657_114715 = G__114723;
continue;
} else {
var temp__4657__auto___114724 = cljs.core.seq.call(null,seq__114654_114712);
if(temp__4657__auto___114724){
var seq__114654_114725__$1 = temp__4657__auto___114724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114654_114725__$1)){
var c__25936__auto___114726 = cljs.core.chunk_first.call(null,seq__114654_114725__$1);
var G__114727 = cljs.core.chunk_rest.call(null,seq__114654_114725__$1);
var G__114728 = c__25936__auto___114726;
var G__114729 = cljs.core.count.call(null,c__25936__auto___114726);
var G__114730 = (0);
seq__114654_114712 = G__114727;
chunk__114655_114713 = G__114728;
count__114656_114714 = G__114729;
i__114657_114715 = G__114730;
continue;
} else {
var vec__114662_114731 = cljs.core.first.call(null,seq__114654_114725__$1);
var k__32684__auto___114732 = cljs.core.nth.call(null,vec__114662_114731,(0),null);
var cb__32685__auto___114733 = cljs.core.nth.call(null,vec__114662_114731,(1),null);
try{cb__32685__auto___114733.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___114711,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114665){if((e114665 instanceof java.lang.Exception)){
var e__32686__auto___114734 = e114665;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___114732,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___114734);
} else {
throw e114665;

}
}
var G__114735 = cljs.core.next.call(null,seq__114654_114725__$1);
var G__114736 = null;
var G__114737 = (0);
var G__114738 = (0);
seq__114654_114712 = G__114735;
chunk__114655_114713 = G__114736;
count__114656_114714 = G__114737;
i__114657_114715 = G__114738;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_114653;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___114739 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___114739;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___114740 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___114740;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___114741 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___114741)){
var not_reactive_114742 = temp__4657__auto___114741;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_114742);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___114743 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___114743;

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
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__114748){
var vec__114749 = p__114748;
var k = cljs.core.nth.call(null,vec__114749,(0),null);
var v = cljs.core.nth.call(null,vec__114749,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__32699__auto___114752 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__32699__auto___114752;

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
var len__26200__auto___114808 = arguments.length;
var i__26201__auto___114809 = (0);
while(true){
if((i__26201__auto___114809 < len__26200__auto___114808)){
args__26207__auto__.push((arguments[i__26201__auto___114809]));

var G__114810 = (i__26201__auto___114809 + (1));
i__26201__auto___114809 = G__114810;
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
var inputs_fn = (function (){var G__114755 = cljs.core.count.call(null,input_args);
switch (G__114755) {
case (0):
return ((function (G__114755,computation_fn,input_args,err_header){
return (function() {
var G__114812 = null;
var G__114812__1 = (function (_){
return re_frame.db.app_db;
});
var G__114812__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__114812 = function(_,___$1){
switch(arguments.length){
case 1:
return G__114812__1.call(this,_);
case 2:
return G__114812__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__114812.cljs$core$IFn$_invoke$arity$1 = G__114812__1;
G__114812.cljs$core$IFn$_invoke$arity$2 = G__114812__2;
return G__114812;
})()
;})(G__114755,computation_fn,input_args,err_header))

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
return ((function (G__114755,computation_fn,input_args,err_header){
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
;})(G__114755,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,vecs,G__114755,computation_fn,input_args,err_header){
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
;})(pairs,vecs,G__114755,computation_fn,input_args,err_header))

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
var _STAR_current_trace_STAR_114782 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32682__auto___114813 = re_frame.interop.now.call(null);
var duration__32683__auto___114814 = (end__32682__auto___114813 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__114783_114815 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__114784_114816 = null;
var count__114785_114817 = (0);
var i__114786_114818 = (0);
while(true){
if((i__114786_114818 < count__114785_114817)){
var vec__114787_114819 = cljs.core._nth.call(null,chunk__114784_114816,i__114786_114818);
var k__32684__auto___114820 = cljs.core.nth.call(null,vec__114787_114819,(0),null);
var cb__32685__auto___114821 = cljs.core.nth.call(null,vec__114787_114819,(1),null);
try{cb__32685__auto___114821.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___114814,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114790){if((e114790 instanceof java.lang.Exception)){
var e__32686__auto___114822 = e114790;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___114820,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___114822);
} else {
throw e114790;

}
}
var G__114823 = seq__114783_114815;
var G__114824 = chunk__114784_114816;
var G__114825 = count__114785_114817;
var G__114826 = (i__114786_114818 + (1));
seq__114783_114815 = G__114823;
chunk__114784_114816 = G__114824;
count__114785_114817 = G__114825;
i__114786_114818 = G__114826;
continue;
} else {
var temp__4657__auto___114827 = cljs.core.seq.call(null,seq__114783_114815);
if(temp__4657__auto___114827){
var seq__114783_114828__$1 = temp__4657__auto___114827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114783_114828__$1)){
var c__25936__auto___114829 = cljs.core.chunk_first.call(null,seq__114783_114828__$1);
var G__114830 = cljs.core.chunk_rest.call(null,seq__114783_114828__$1);
var G__114831 = c__25936__auto___114829;
var G__114832 = cljs.core.count.call(null,c__25936__auto___114829);
var G__114833 = (0);
seq__114783_114815 = G__114830;
chunk__114784_114816 = G__114831;
count__114785_114817 = G__114832;
i__114786_114818 = G__114833;
continue;
} else {
var vec__114791_114834 = cljs.core.first.call(null,seq__114783_114828__$1);
var k__32684__auto___114835 = cljs.core.nth.call(null,vec__114791_114834,(0),null);
var cb__32685__auto___114836 = cljs.core.nth.call(null,vec__114791_114834,(1),null);
try{cb__32685__auto___114836.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___114814,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114794){if((e114794 instanceof java.lang.Exception)){
var e__32686__auto___114837 = e114794;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___114835,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___114837);
} else {
throw e114794;

}
}
var G__114838 = cljs.core.next.call(null,seq__114783_114828__$1);
var G__114839 = null;
var G__114840 = (0);
var G__114841 = (0);
seq__114783_114815 = G__114838;
chunk__114784_114816 = G__114839;
count__114785_114817 = G__114840;
i__114786_114818 = G__114841;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_114782;
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
var _STAR_current_trace_STAR_114795 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32682__auto___114842 = re_frame.interop.now.call(null);
var duration__32683__auto___114843 = (end__32682__auto___114842 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__114796_114844 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__114797_114845 = null;
var count__114798_114846 = (0);
var i__114799_114847 = (0);
while(true){
if((i__114799_114847 < count__114798_114846)){
var vec__114800_114848 = cljs.core._nth.call(null,chunk__114797_114845,i__114799_114847);
var k__32684__auto___114849 = cljs.core.nth.call(null,vec__114800_114848,(0),null);
var cb__32685__auto___114850 = cljs.core.nth.call(null,vec__114800_114848,(1),null);
try{cb__32685__auto___114850.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___114843,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114803){if((e114803 instanceof java.lang.Exception)){
var e__32686__auto___114851 = e114803;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___114849,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___114851);
} else {
throw e114803;

}
}
var G__114852 = seq__114796_114844;
var G__114853 = chunk__114797_114845;
var G__114854 = count__114798_114846;
var G__114855 = (i__114799_114847 + (1));
seq__114796_114844 = G__114852;
chunk__114797_114845 = G__114853;
count__114798_114846 = G__114854;
i__114799_114847 = G__114855;
continue;
} else {
var temp__4657__auto___114856 = cljs.core.seq.call(null,seq__114796_114844);
if(temp__4657__auto___114856){
var seq__114796_114857__$1 = temp__4657__auto___114856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114796_114857__$1)){
var c__25936__auto___114858 = cljs.core.chunk_first.call(null,seq__114796_114857__$1);
var G__114859 = cljs.core.chunk_rest.call(null,seq__114796_114857__$1);
var G__114860 = c__25936__auto___114858;
var G__114861 = cljs.core.count.call(null,c__25936__auto___114858);
var G__114862 = (0);
seq__114796_114844 = G__114859;
chunk__114797_114845 = G__114860;
count__114798_114846 = G__114861;
i__114799_114847 = G__114862;
continue;
} else {
var vec__114804_114863 = cljs.core.first.call(null,seq__114796_114857__$1);
var k__32684__auto___114864 = cljs.core.nth.call(null,vec__114804_114863,(0),null);
var cb__32685__auto___114865 = cljs.core.nth.call(null,vec__114804_114863,(1),null);
try{cb__32685__auto___114865.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___114843,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e114807){if((e114807 instanceof java.lang.Exception)){
var e__32686__auto___114866 = e114807;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___114864,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___114866);
} else {
throw e114807;

}
}
var G__114867 = cljs.core.next.call(null,seq__114796_114857__$1);
var G__114868 = null;
var G__114869 = (0);
var G__114870 = (0);
seq__114796_114844 = G__114867;
chunk__114797_114845 = G__114868;
count__114798_114846 = G__114869;
i__114799_114847 = G__114870;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_114795;
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

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq114753){
var G__114754 = cljs.core.first.call(null,seq114753);
var seq114753__$1 = cljs.core.next.call(null,seq114753);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__114754,seq114753__$1);
});


//# sourceMappingURL=subs.js.map?rel=1488400161676