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
var make_chain = (function (p1__89056_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__89056_SHARP_));
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

var temp__4657__auto___89057 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___89057)){
var not_i_89058 = temp__4657__auto___89057;
if(cljs.core.fn_QMARK_.call(null,not_i_89058)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_89058);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_89058);
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
var _STAR_handling_STAR_89073 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_89074 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32682__auto___89087 = re_frame.interop.now.call(null);
var duration__32683__auto___89088 = (end__32682__auto___89087 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__89075_89089 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__89076_89090 = null;
var count__89077_89091 = (0);
var i__89078_89092 = (0);
while(true){
if((i__89078_89092 < count__89077_89091)){
var vec__89079_89093 = cljs.core._nth.call(null,chunk__89076_89090,i__89078_89092);
var k__32684__auto___89094 = cljs.core.nth.call(null,vec__89079_89093,(0),null);
var cb__32685__auto___89095 = cljs.core.nth.call(null,vec__89079_89093,(1),null);
try{cb__32685__auto___89095.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___89088,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e89082){if((e89082 instanceof java.lang.Exception)){
var e__32686__auto___89096 = e89082;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___89094,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___89096);
} else {
throw e89082;

}
}
var G__89097 = seq__89075_89089;
var G__89098 = chunk__89076_89090;
var G__89099 = count__89077_89091;
var G__89100 = (i__89078_89092 + (1));
seq__89075_89089 = G__89097;
chunk__89076_89090 = G__89098;
count__89077_89091 = G__89099;
i__89078_89092 = G__89100;
continue;
} else {
var temp__4657__auto___89101 = cljs.core.seq.call(null,seq__89075_89089);
if(temp__4657__auto___89101){
var seq__89075_89102__$1 = temp__4657__auto___89101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89075_89102__$1)){
var c__25936__auto___89103 = cljs.core.chunk_first.call(null,seq__89075_89102__$1);
var G__89104 = cljs.core.chunk_rest.call(null,seq__89075_89102__$1);
var G__89105 = c__25936__auto___89103;
var G__89106 = cljs.core.count.call(null,c__25936__auto___89103);
var G__89107 = (0);
seq__89075_89089 = G__89104;
chunk__89076_89090 = G__89105;
count__89077_89091 = G__89106;
i__89078_89092 = G__89107;
continue;
} else {
var vec__89083_89108 = cljs.core.first.call(null,seq__89075_89102__$1);
var k__32684__auto___89109 = cljs.core.nth.call(null,vec__89083_89108,(0),null);
var cb__32685__auto___89110 = cljs.core.nth.call(null,vec__89083_89108,(1),null);
try{cb__32685__auto___89110.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32683__auto___89088,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e89086){if((e89086 instanceof java.lang.Exception)){
var e__32686__auto___89111 = e89086;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32684__auto___89109,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32686__auto___89111);
} else {
throw e89086;

}
}
var G__89112 = cljs.core.next.call(null,seq__89075_89102__$1);
var G__89113 = null;
var G__89114 = (0);
var G__89115 = (0);
seq__89075_89089 = G__89112;
chunk__89076_89090 = G__89113;
count__89077_89091 = G__89114;
i__89078_89092 = G__89115;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_89074;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_89073;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1488399650349