// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__29813_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__29813_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___29814 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___29814)){
var not_i_29815 = temp__4657__auto___29814;
if(cljs.core.fn_QMARK_.call(null,not_i_29815)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_29815);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_29815);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_29830 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_29831 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__29788__auto___29844 = re_frame.interop.now.call(null);
var duration__29789__auto___29845 = (end__29788__auto___29844 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__29832_29846 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__29833_29847 = null;
var count__29834_29848 = (0);
var i__29835_29849 = (0);
while(true){
if((i__29835_29849 < count__29834_29848)){
var vec__29836_29850 = cljs.core._nth.call(null,chunk__29833_29847,i__29835_29849);
var k__29790__auto___29851 = cljs.core.nth.call(null,vec__29836_29850,(0),null);
var cb__29791__auto___29852 = cljs.core.nth.call(null,vec__29836_29850,(1),null);
try{cb__29791__auto___29852.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29789__auto___29845,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e29839){if((e29839 instanceof java.lang.Exception)){
var e__29792__auto___29853 = e29839;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29790__auto___29851,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__29792__auto___29853);
} else {
throw e29839;

}
}
var G__29854 = seq__29832_29846;
var G__29855 = chunk__29833_29847;
var G__29856 = count__29834_29848;
var G__29857 = (i__29835_29849 + (1));
seq__29832_29846 = G__29854;
chunk__29833_29847 = G__29855;
count__29834_29848 = G__29856;
i__29835_29849 = G__29857;
continue;
} else {
var temp__4657__auto___29858 = cljs.core.seq.call(null,seq__29832_29846);
if(temp__4657__auto___29858){
var seq__29832_29859__$1 = temp__4657__auto___29858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29832_29859__$1)){
var c__25936__auto___29860 = cljs.core.chunk_first.call(null,seq__29832_29859__$1);
var G__29861 = cljs.core.chunk_rest.call(null,seq__29832_29859__$1);
var G__29862 = c__25936__auto___29860;
var G__29863 = cljs.core.count.call(null,c__25936__auto___29860);
var G__29864 = (0);
seq__29832_29846 = G__29861;
chunk__29833_29847 = G__29862;
count__29834_29848 = G__29863;
i__29835_29849 = G__29864;
continue;
} else {
var vec__29840_29865 = cljs.core.first.call(null,seq__29832_29859__$1);
var k__29790__auto___29866 = cljs.core.nth.call(null,vec__29840_29865,(0),null);
var cb__29791__auto___29867 = cljs.core.nth.call(null,vec__29840_29865,(1),null);
try{cb__29791__auto___29867.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29789__auto___29845,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e29843){if((e29843 instanceof java.lang.Exception)){
var e__29792__auto___29868 = e29843;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29790__auto___29866,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__29792__auto___29868);
} else {
throw e29843;

}
}
var G__29869 = cljs.core.next.call(null,seq__29832_29859__$1);
var G__29870 = null;
var G__29871 = (0);
var G__29872 = (0);
seq__29832_29846 = G__29869;
chunk__29833_29847 = G__29870;
count__29834_29848 = G__29871;
i__29835_29849 = G__29872;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_29831;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_29830;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1488439824492