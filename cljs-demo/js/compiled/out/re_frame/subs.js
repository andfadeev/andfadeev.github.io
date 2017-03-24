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
var seq__30159_30169 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__30160_30170 = null;
var count__30161_30171 = (0);
var i__30162_30172 = (0);
while(true){
if((i__30162_30172 < count__30161_30171)){
var vec__30163_30173 = cljs.core._nth.call(null,chunk__30160_30170,i__30162_30172);
var k_30174 = cljs.core.nth.call(null,vec__30163_30173,(0),null);
var rxn_30175 = cljs.core.nth.call(null,vec__30163_30173,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_30175);

var G__30176 = seq__30159_30169;
var G__30177 = chunk__30160_30170;
var G__30178 = count__30161_30171;
var G__30179 = (i__30162_30172 + (1));
seq__30159_30169 = G__30176;
chunk__30160_30170 = G__30177;
count__30161_30171 = G__30178;
i__30162_30172 = G__30179;
continue;
} else {
var temp__4657__auto___30180 = cljs.core.seq.call(null,seq__30159_30169);
if(temp__4657__auto___30180){
var seq__30159_30181__$1 = temp__4657__auto___30180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30159_30181__$1)){
var c__25936__auto___30182 = cljs.core.chunk_first.call(null,seq__30159_30181__$1);
var G__30183 = cljs.core.chunk_rest.call(null,seq__30159_30181__$1);
var G__30184 = c__25936__auto___30182;
var G__30185 = cljs.core.count.call(null,c__25936__auto___30182);
var G__30186 = (0);
seq__30159_30169 = G__30183;
chunk__30160_30170 = G__30184;
count__30161_30171 = G__30185;
i__30162_30172 = G__30186;
continue;
} else {
var vec__30166_30187 = cljs.core.first.call(null,seq__30159_30181__$1);
var k_30188 = cljs.core.nth.call(null,vec__30166_30187,(0),null);
var rxn_30189 = cljs.core.nth.call(null,vec__30166_30187,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_30189);

var G__30190 = cljs.core.next.call(null,seq__30159_30181__$1);
var G__30191 = null;
var G__30192 = (0);
var G__30193 = (0);
seq__30159_30169 = G__30190;
chunk__30160_30170 = G__30191;
count__30161_30171 = G__30192;
i__30162_30172 = G__30193;
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
var _STAR_current_trace_STAR_30207 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__29788__auto___30220 = re_frame.interop.now.call(null);
var duration__29789__auto___30221 = (end__29788__auto___30220 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__30208_30222 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__30209_30223 = null;
var count__30210_30224 = (0);
var i__30211_30225 = (0);
while(true){
if((i__30211_30225 < count__30210_30224)){
var vec__30212_30226 = cljs.core._nth.call(null,chunk__30209_30223,i__30211_30225);
var k__29790__auto___30227 = cljs.core.nth.call(null,vec__30212_30226,(0),null);
var cb__29791__auto___30228 = cljs.core.nth.call(null,vec__30212_30226,(1),null);
try{cb__29791__auto___30228.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29789__auto___30221,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e30215){if((e30215 instanceof java.lang.Exception)){
var e__29792__auto___30229 = e30215;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29790__auto___30227,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__29792__auto___30229);
} else {
throw e30215;

}
}
var G__30230 = seq__30208_30222;
var G__30231 = chunk__30209_30223;
var G__30232 = count__30210_30224;
var G__30233 = (i__30211_30225 + (1));
seq__30208_30222 = G__30230;
chunk__30209_30223 = G__30231;
count__30210_30224 = G__30232;
i__30211_30225 = G__30233;
continue;
} else {
var temp__4657__auto___30234 = cljs.core.seq.call(null,seq__30208_30222);
if(temp__4657__auto___30234){
var seq__30208_30235__$1 = temp__4657__auto___30234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30208_30235__$1)){
var c__25936__auto___30236 = cljs.core.chunk_first.call(null,seq__30208_30235__$1);
var G__30237 = cljs.core.chunk_rest.call(null,seq__30208_30235__$1);
var G__30238 = c__25936__auto___30236;
var G__30239 = cljs.core.count.call(null,c__25936__auto___30236);
var G__30240 = (0);
seq__30208_30222 = G__30237;
chunk__30209_30223 = G__30238;
count__30210_30224 = G__30239;
i__30211_30225 = G__30240;
continue;
} else {
var vec__30216_30241 = cljs.core.first.call(null,seq__30208_30235__$1);
var k__29790__auto___30242 = cljs.core.nth.call(null,vec__30216_30241,(0),null);
var cb__29791__auto___30243 = cljs.core.nth.call(null,vec__30216_30241,(1),null);
try{cb__29791__auto___30243.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29789__auto___30221,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e30219){if((e30219 instanceof java.lang.Exception)){
var e__29792__auto___30244 = e30219;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29790__auto___30242,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__29792__auto___30244);
} else {
throw e30219;

}
}
var G__30245 = cljs.core.next.call(null,seq__30208_30235__$1);
var G__30246 = null;
var G__30247 = (0);
var G__30248 = (0);
seq__30208_30222 = G__30245;
chunk__30209_30223 = G__30246;
count__30210_30224 = G__30247;
i__30211_30225 = G__30248;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_30207;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__29805__auto___30249 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__29805__auto___30249;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args30250 = [];
var len__26200__auto___30253 = arguments.length;
var i__26201__auto___30254 = (0);
while(true){
if((i__26201__auto___30254 < len__26200__auto___30253)){
args30250.push((arguments[i__26201__auto___30254]));

var G__30255 = (i__26201__auto___30254 + (1));
i__26201__auto___30254 = G__30255;
continue;
} else {
}
break;
}

var G__30252 = args30250.length;
switch (G__30252) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30250.length)].join('')));

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
var args30257 = [];
var len__26200__auto___30286 = arguments.length;
var i__26201__auto___30287 = (0);
while(true){
if((i__26201__auto___30287 < len__26200__auto___30286)){
args30257.push((arguments[i__26201__auto___30287]));

var G__30288 = (i__26201__auto___30287 + (1));
i__26201__auto___30287 = G__30288;
continue;
} else {
}
break;
}

var G__30259 = args30257.length;
switch (G__30259) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30257.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_30260 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__29805__auto___30290 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__29805__auto___30290;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__29805__auto___30291 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__29805__auto___30291;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__29805__auto___30292 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__29805__auto___30292;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__29788__auto___30293 = re_frame.interop.now.call(null);
var duration__29789__auto___30294 = (end__29788__auto___30293 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__30261_30295 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__30262_30296 = null;
var count__30263_30297 = (0);
var i__30264_30298 = (0);
while(true){
if((i__30264_30298 < count__30263_30297)){
var vec__30265_30299 = cljs.core._nth.call(null,chunk__30262_30296,i__30264_30298);
var k__29790__auto___30300 = cljs.core.nth.call(null,vec__30265_30299,(0),null);
var cb__29791__auto___30301 = cljs.core.nth.call(null,vec__30265_30299,(1),null);
try{cb__29791__auto___30301.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29789__auto___30294,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e30268){if((e30268 instanceof java.lang.Exception)){
var e__29792__auto___30302 = e30268;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29790__auto___30300,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__29792__auto___30302);
} else {
throw e30268;

}
}
var G__30303 = seq__30261_30295;
var G__30304 = chunk__30262_30296;
var G__30305 = count__30263_30297;
var G__30306 = (i__30264_30298 + (1));
seq__30261_30295 = G__30303;
chunk__30262_30296 = G__30304;
count__30263_30297 = G__30305;
i__30264_30298 = G__30306;
continue;
} else {
var temp__4657__auto___30307 = cljs.core.seq.call(null,seq__30261_30295);
if(temp__4657__auto___30307){
var seq__30261_30308__$1 = temp__4657__auto___30307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30261_30308__$1)){
var c__25936__auto___30309 = cljs.core.chunk_first.call(null,seq__30261_30308__$1);
var G__30310 = cljs.core.chunk_rest.call(null,seq__30261_30308__$1);
var G__30311 = c__25936__auto___30309;
var G__30312 = cljs.core.count.call(null,c__25936__auto___30309);
var G__30313 = (0);
seq__30261_30295 = G__30310;
chunk__30262_30296 = G__30311;
count__30263_30297 = G__30312;
i__30264_30298 = G__30313;
continue;
} else {
var vec__30269_30314 = cljs.core.first.call(null,seq__30261_30308__$1);
var k__29790__auto___30315 = cljs.core.nth.call(null,vec__30269_30314,(0),null);
var cb__29791__auto___30316 = cljs.core.nth.call(null,vec__30269_30314,(1),null);
try{cb__29791__auto___30316.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29789__auto___30294,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e30272){if((e30272 instanceof java.lang.Exception)){
var e__29792__auto___30317 = e30272;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29790__auto___30315,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__29792__auto___30317);
} else {
throw e30272;

}
}
var G__30318 = cljs.core.next.call(null,seq__30261_30308__$1);
var G__30319 = null;
var G__30320 = (0);
var G__30321 = (0);
seq__30261_30295 = G__30318;
chunk__30262_30296 = G__30319;
count__30263_30297 = G__30320;
i__30264_30298 = G__30321;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_30260;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__29805__auto___30322 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__29805__auto___30322;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__29805__auto___30323 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__29805__auto___30323;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__29805__auto___30324 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__29805__auto___30324;

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
var _STAR_current_trace_STAR_30273 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__29805__auto___30325 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__29805__auto___30325;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__29805__auto___30326 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__29805__auto___30326;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___30327 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___30327)){
var not_reactive_30328 = temp__4657__auto___30327;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_30328);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__29805__auto___30329 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__29805__auto___30329;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_30273){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_30273))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_30273){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_30273))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_30273){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_30273))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__29788__auto___30330 = re_frame.interop.now.call(null);
var duration__29789__auto___30331 = (end__29788__auto___30330 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__30274_30332 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__30275_30333 = null;
var count__30276_30334 = (0);
var i__30277_30335 = (0);
while(true){
if((i__30277_30335 < count__30276_30334)){
var vec__30278_30336 = cljs.core._nth.call(null,chunk__30275_30333,i__30277_30335);
var k__29790__auto___30337 = cljs.core.nth.call(null,vec__30278_30336,(0),null);
var cb__29791__auto___30338 = cljs.core.nth.call(null,vec__30278_30336,(1),null);
try{cb__29791__auto___30338.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29789__auto___30331,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e30281){if((e30281 instanceof java.lang.Exception)){
var e__29792__auto___30339 = e30281;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29790__auto___30337,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__29792__auto___30339);
} else {
throw e30281;

}
}
var G__30340 = seq__30274_30332;
var G__30341 = chunk__30275_30333;
var G__30342 = count__30276_30334;
var G__30343 = (i__30277_30335 + (1));
seq__30274_30332 = G__30340;
chunk__30275_30333 = G__30341;
count__30276_30334 = G__30342;
i__30277_30335 = G__30343;
continue;
} else {
var temp__4657__auto___30344 = cljs.core.seq.call(null,seq__30274_30332);
if(temp__4657__auto___30344){
var seq__30274_30345__$1 = temp__4657__auto___30344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30274_30345__$1)){
var c__25936__auto___30346 = cljs.core.chunk_first.call(null,seq__30274_30345__$1);
var G__30347 = cljs.core.chunk_rest.call(null,seq__30274_30345__$1);
var G__30348 = c__25936__auto___30346;
var G__30349 = cljs.core.count.call(null,c__25936__auto___30346);
var G__30350 = (0);
seq__30274_30332 = G__30347;
chunk__30275_30333 = G__30348;
count__30276_30334 = G__30349;
i__30277_30335 = G__30350;
continue;
} else {
var vec__30282_30351 = cljs.core.first.call(null,seq__30274_30345__$1);
var k__29790__auto___30352 = cljs.core.nth.call(null,vec__30282_30351,(0),null);
var cb__29791__auto___30353 = cljs.core.nth.call(null,vec__30282_30351,(1),null);
try{cb__29791__auto___30353.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29789__auto___30331,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e30285){if((e30285 instanceof java.lang.Exception)){
var e__29792__auto___30354 = e30285;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29790__auto___30352,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__29792__auto___30354);
} else {
throw e30285;

}
}
var G__30355 = cljs.core.next.call(null,seq__30274_30345__$1);
var G__30356 = null;
var G__30357 = (0);
var G__30358 = (0);
seq__30274_30332 = G__30355;
chunk__30275_30333 = G__30356;
count__30276_30334 = G__30357;
i__30277_30335 = G__30358;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_30273;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__29805__auto___30359 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__29805__auto___30359;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__29805__auto___30360 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__29805__auto___30360;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___30361 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___30361)){
var not_reactive_30362 = temp__4657__auto___30361;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_30362);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__29805__auto___30363 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__29805__auto___30363;

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
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__30368){
var vec__30369 = p__30368;
var k = cljs.core.nth.call(null,vec__30369,(0),null);
var v = cljs.core.nth.call(null,vec__30369,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__29805__auto___30372 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__29805__auto___30372;

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
var len__26200__auto___30428 = arguments.length;
var i__26201__auto___30429 = (0);
while(true){
if((i__26201__auto___30429 < len__26200__auto___30428)){
args__26207__auto__.push((arguments[i__26201__auto___30429]));

var G__30430 = (i__26201__auto___30429 + (1));
i__26201__auto___30429 = G__30430;
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
var inputs_fn = (function (){var G__30375 = cljs.core.count.call(null,input_args);
switch (G__30375) {
case (0):
return ((function (G__30375,computation_fn,input_args,err_header){
return (function() {
var G__30432 = null;
var G__30432__1 = (function (_){
return re_frame.db.app_db;
});
var G__30432__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__30432 = function(_,___$1){
switch(arguments.length){
case 1:
return G__30432__1.call(this,_);
case 2:
return G__30432__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30432.cljs$core$IFn$_invoke$arity$1 = G__30432__1;
G__30432.cljs$core$IFn$_invoke$arity$2 = G__30432__2;
return G__30432;
})()
;})(G__30375,computation_fn,input_args,err_header))

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
return ((function (G__30375,computation_fn,input_args,err_header){
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
;})(G__30375,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,vecs,G__30375,computation_fn,input_args,err_header){
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
;})(pairs,vecs,G__30375,computation_fn,input_args,err_header))

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
var _STAR_current_trace_STAR_30402 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__29788__auto___30433 = re_frame.interop.now.call(null);
var duration__29789__auto___30434 = (end__29788__auto___30433 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__30403_30435 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__30404_30436 = null;
var count__30405_30437 = (0);
var i__30406_30438 = (0);
while(true){
if((i__30406_30438 < count__30405_30437)){
var vec__30407_30439 = cljs.core._nth.call(null,chunk__30404_30436,i__30406_30438);
var k__29790__auto___30440 = cljs.core.nth.call(null,vec__30407_30439,(0),null);
var cb__29791__auto___30441 = cljs.core.nth.call(null,vec__30407_30439,(1),null);
try{cb__29791__auto___30441.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29789__auto___30434,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e30410){if((e30410 instanceof java.lang.Exception)){
var e__29792__auto___30442 = e30410;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29790__auto___30440,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__29792__auto___30442);
} else {
throw e30410;

}
}
var G__30443 = seq__30403_30435;
var G__30444 = chunk__30404_30436;
var G__30445 = count__30405_30437;
var G__30446 = (i__30406_30438 + (1));
seq__30403_30435 = G__30443;
chunk__30404_30436 = G__30444;
count__30405_30437 = G__30445;
i__30406_30438 = G__30446;
continue;
} else {
var temp__4657__auto___30447 = cljs.core.seq.call(null,seq__30403_30435);
if(temp__4657__auto___30447){
var seq__30403_30448__$1 = temp__4657__auto___30447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30403_30448__$1)){
var c__25936__auto___30449 = cljs.core.chunk_first.call(null,seq__30403_30448__$1);
var G__30450 = cljs.core.chunk_rest.call(null,seq__30403_30448__$1);
var G__30451 = c__25936__auto___30449;
var G__30452 = cljs.core.count.call(null,c__25936__auto___30449);
var G__30453 = (0);
seq__30403_30435 = G__30450;
chunk__30404_30436 = G__30451;
count__30405_30437 = G__30452;
i__30406_30438 = G__30453;
continue;
} else {
var vec__30411_30454 = cljs.core.first.call(null,seq__30403_30448__$1);
var k__29790__auto___30455 = cljs.core.nth.call(null,vec__30411_30454,(0),null);
var cb__29791__auto___30456 = cljs.core.nth.call(null,vec__30411_30454,(1),null);
try{cb__29791__auto___30456.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29789__auto___30434,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e30414){if((e30414 instanceof java.lang.Exception)){
var e__29792__auto___30457 = e30414;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29790__auto___30455,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__29792__auto___30457);
} else {
throw e30414;

}
}
var G__30458 = cljs.core.next.call(null,seq__30403_30448__$1);
var G__30459 = null;
var G__30460 = (0);
var G__30461 = (0);
seq__30403_30435 = G__30458;
chunk__30404_30436 = G__30459;
count__30405_30437 = G__30460;
i__30406_30438 = G__30461;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_30402;
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
var _STAR_current_trace_STAR_30415 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__29788__auto___30462 = re_frame.interop.now.call(null);
var duration__29789__auto___30463 = (end__29788__auto___30462 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__30416_30464 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__30417_30465 = null;
var count__30418_30466 = (0);
var i__30419_30467 = (0);
while(true){
if((i__30419_30467 < count__30418_30466)){
var vec__30420_30468 = cljs.core._nth.call(null,chunk__30417_30465,i__30419_30467);
var k__29790__auto___30469 = cljs.core.nth.call(null,vec__30420_30468,(0),null);
var cb__29791__auto___30470 = cljs.core.nth.call(null,vec__30420_30468,(1),null);
try{cb__29791__auto___30470.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29789__auto___30463,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e30423){if((e30423 instanceof java.lang.Exception)){
var e__29792__auto___30471 = e30423;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29790__auto___30469,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__29792__auto___30471);
} else {
throw e30423;

}
}
var G__30472 = seq__30416_30464;
var G__30473 = chunk__30417_30465;
var G__30474 = count__30418_30466;
var G__30475 = (i__30419_30467 + (1));
seq__30416_30464 = G__30472;
chunk__30417_30465 = G__30473;
count__30418_30466 = G__30474;
i__30419_30467 = G__30475;
continue;
} else {
var temp__4657__auto___30476 = cljs.core.seq.call(null,seq__30416_30464);
if(temp__4657__auto___30476){
var seq__30416_30477__$1 = temp__4657__auto___30476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30416_30477__$1)){
var c__25936__auto___30478 = cljs.core.chunk_first.call(null,seq__30416_30477__$1);
var G__30479 = cljs.core.chunk_rest.call(null,seq__30416_30477__$1);
var G__30480 = c__25936__auto___30478;
var G__30481 = cljs.core.count.call(null,c__25936__auto___30478);
var G__30482 = (0);
seq__30416_30464 = G__30479;
chunk__30417_30465 = G__30480;
count__30418_30466 = G__30481;
i__30419_30467 = G__30482;
continue;
} else {
var vec__30424_30483 = cljs.core.first.call(null,seq__30416_30477__$1);
var k__29790__auto___30484 = cljs.core.nth.call(null,vec__30424_30483,(0),null);
var cb__29791__auto___30485 = cljs.core.nth.call(null,vec__30424_30483,(1),null);
try{cb__29791__auto___30485.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29789__auto___30463,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e30427){if((e30427 instanceof java.lang.Exception)){
var e__29792__auto___30486 = e30427;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29790__auto___30484,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__29792__auto___30486);
} else {
throw e30427;

}
}
var G__30487 = cljs.core.next.call(null,seq__30416_30477__$1);
var G__30488 = null;
var G__30489 = (0);
var G__30490 = (0);
seq__30416_30464 = G__30487;
chunk__30417_30465 = G__30488;
count__30418_30466 = G__30489;
i__30419_30467 = G__30490;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_30415;
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

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq30373){
var G__30374 = cljs.core.first.call(null,seq30373);
var seq30373__$1 = cljs.core.next.call(null,seq30373);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__30374,seq30373__$1);
});


//# sourceMappingURL=subs.js.map?rel=1488439825022