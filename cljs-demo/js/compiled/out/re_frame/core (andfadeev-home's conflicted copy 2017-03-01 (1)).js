// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.core');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.subs');
goog.require('clojure.set');
goog.require('re_frame.cofx');
goog.require('re_frame.interceptor');
goog.require('re_frame.fx');
goog.require('re_frame.events');
goog.require('re_frame.loggers');
goog.require('re_frame.registrar');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.std_interceptors');
re_frame.core.dispatch = re_frame.router.dispatch;
re_frame.core.dispatch_sync = re_frame.router.dispatch_sync;
re_frame.core.__GT_interceptor = re_frame.interceptor.__GT_interceptor;
re_frame.core.enqueue = re_frame.interceptor.enqueue;
re_frame.core.get_coeffect = re_frame.interceptor.get_coeffect;
re_frame.core.get_effect = re_frame.interceptor.get_effect;
re_frame.core.assoc_effect = re_frame.interceptor.assoc_effect;
re_frame.core.assoc_coeffect = re_frame.interceptor.assoc_coeffect;
re_frame.core.debug = re_frame.std_interceptors.debug;
re_frame.core.path = re_frame.std_interceptors.path;
re_frame.core.enrich = re_frame.std_interceptors.enrich;
re_frame.core.trim_v = re_frame.std_interceptors.trim_v;
re_frame.core.after = re_frame.std_interceptors.after;
re_frame.core.on_changes = re_frame.std_interceptors.on_changes;
/**
 * Associate a given `query id` with a given subscription handler function `handler-fn`
 * which is expected to take two arguments: app-db and query vector, and return
 * a `reaction`.
 * 
 *   This is a low level, advanced function.  You should probably be using reg-sub
 *   instead.
 */
re_frame.core.reg_sub_raw = (function re_frame$core$reg_sub_raw(query_id,handler_fn){
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,handler_fn);
});
re_frame.core.reg_sub = re_frame.subs.reg_sub;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.clear_sub = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.subs.kind);
re_frame.core.clear_subscription_cache_BANG_ = re_frame.subs.clear_subscription_cache_BANG_;
re_frame.core.reg_fx = re_frame.fx.register;
re_frame.core.clear_fx = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.fx.kind);
re_frame.core.reg_cofx = re_frame.cofx.register;
re_frame.core.inject_cofx = re_frame.cofx.inject_cofx;
re_frame.core.clear_cofx = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.cofx.kind);
re_frame.core.clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
/**
 * Register the given `id`, typically a keyword, with the combination of
 *   `db-handler` and an interceptor chain.
 *   `db-handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors, possibly nested (needs flattening).
 *   `db-handler` is wrapped in an interceptor and added to the end of the chain, so in the end
 * there is only a chain.
 * The necessary effects and coeffects handler are added to the front of the
 * interceptor chain.  These interceptors ensure that app-db is available and updated.
 */
re_frame.core.reg_event_db = (function re_frame$core$reg_event_db(var_args){
var args114873 = [];
var len__26200__auto___114876 = arguments.length;
var i__26201__auto___114877 = (0);
while(true){
if((i__26201__auto___114877 < len__26200__auto___114876)){
args114873.push((arguments[i__26201__auto___114877]));

var G__114878 = (i__26201__auto___114877 + (1));
i__26201__auto___114877 = G__114878;
continue;
} else {
}
break;
}

var G__114875 = args114873.length;
switch (G__114875) {
case 2:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args114873.length)].join('')));

}
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,db_handler){
return re_frame.core.reg_event_db.call(null,id,null,db_handler);
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,db_handler){
return re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.db_handler__GT_interceptor.call(null,db_handler)], null));
});

re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

re_frame.core.reg_event_fx = (function re_frame$core$reg_event_fx(var_args){
var args114880 = [];
var len__26200__auto___114883 = arguments.length;
var i__26201__auto___114884 = (0);
while(true){
if((i__26201__auto___114884 < len__26200__auto___114883)){
args114880.push((arguments[i__26201__auto___114884]));

var G__114885 = (i__26201__auto___114884 + (1));
i__26201__auto___114884 = G__114885;
continue;
} else {
}
break;
}

var G__114882 = args114880.length;
switch (G__114882) {
case 2:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args114880.length)].join('')));

}
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,fx_handler){
return re_frame.core.reg_event_fx.call(null,id,null,fx_handler);
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,fx_handler){
return re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.fx_handler__GT_interceptor.call(null,fx_handler)], null));
});

re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

re_frame.core.reg_event_ctx = (function re_frame$core$reg_event_ctx(var_args){
var args114887 = [];
var len__26200__auto___114890 = arguments.length;
var i__26201__auto___114891 = (0);
while(true){
if((i__26201__auto___114891 < len__26200__auto___114890)){
args114887.push((arguments[i__26201__auto___114891]));

var G__114892 = (i__26201__auto___114891 + (1));
i__26201__auto___114891 = G__114892;
continue;
} else {
}
break;
}

var G__114889 = args114887.length;
switch (G__114889) {
case 2:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args114887.length)].join('')));

}
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_ctx.call(null,id,null,handler);
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.ctx_handler__GT_interceptor.call(null,handler)], null));
});

re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

re_frame.core.set_loggers_BANG_ = re_frame.loggers.set_loggers_BANG_;
re_frame.core.console = re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
re_frame.core.make_restore_fn = (function re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref.call(null,re_frame.db.app_db);
var subs_cache = cljs.core.deref.call(null,re_frame.subs.query__GT_reaction);
return ((function (handlers,app_db,subs_cache){
return (function (){
var original_subs_114902 = cljs.core.set.call(null,cljs.core.vals.call(null,subs_cache));
var current_subs_114903 = cljs.core.set.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)));
var seq__114898_114904 = cljs.core.seq.call(null,clojure.set.difference.call(null,current_subs_114903,original_subs_114902));
var chunk__114899_114905 = null;
var count__114900_114906 = (0);
var i__114901_114907 = (0);
while(true){
if((i__114901_114907 < count__114900_114906)){
var sub_114908 = cljs.core._nth.call(null,chunk__114899_114905,i__114901_114907);
re_frame.interop.dispose_BANG_.call(null,sub_114908);

var G__114909 = seq__114898_114904;
var G__114910 = chunk__114899_114905;
var G__114911 = count__114900_114906;
var G__114912 = (i__114901_114907 + (1));
seq__114898_114904 = G__114909;
chunk__114899_114905 = G__114910;
count__114900_114906 = G__114911;
i__114901_114907 = G__114912;
continue;
} else {
var temp__4657__auto___114913 = cljs.core.seq.call(null,seq__114898_114904);
if(temp__4657__auto___114913){
var seq__114898_114914__$1 = temp__4657__auto___114913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114898_114914__$1)){
var c__25936__auto___114915 = cljs.core.chunk_first.call(null,seq__114898_114914__$1);
var G__114916 = cljs.core.chunk_rest.call(null,seq__114898_114914__$1);
var G__114917 = c__25936__auto___114915;
var G__114918 = cljs.core.count.call(null,c__25936__auto___114915);
var G__114919 = (0);
seq__114898_114904 = G__114916;
chunk__114899_114905 = G__114917;
count__114900_114906 = G__114918;
i__114901_114907 = G__114919;
continue;
} else {
var sub_114920 = cljs.core.first.call(null,seq__114898_114914__$1);
re_frame.interop.dispose_BANG_.call(null,sub_114920);

var G__114921 = cljs.core.next.call(null,seq__114898_114914__$1);
var G__114922 = null;
var G__114923 = (0);
var G__114924 = (0);
seq__114898_114904 = G__114921;
chunk__114899_114905 = G__114922;
count__114900_114906 = G__114923;
i__114901_114907 = G__114924;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_.call(null,re_frame.db.app_db,app_db);

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
re_frame.core.add_post_event_callback = (function re_frame$core$add_post_event_callback(var_args){
var args114925 = [];
var len__26200__auto___114928 = arguments.length;
var i__26201__auto___114929 = (0);
while(true){
if((i__26201__auto___114929 < len__26200__auto___114928)){
args114925.push((arguments[i__26201__auto___114929]));

var G__114930 = (i__26201__auto___114929 + (1));
i__26201__auto___114929 = G__114930;
continue;
} else {
}
break;
}

var G__114927 = args114925.length;
switch (G__114927) {
case 1:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args114925.length)].join('')));

}
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_frame.core.add_post_event_callback.call(null,f,f);
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return re_frame.router.add_post_event_callback.call(null,re_frame.router.event_queue,id,f);
});

re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

re_frame.core.remove_post_event_callback = (function re_frame$core$remove_post_event_callback(id){
return re_frame.router.remove_post_event_callback.call(null,re_frame.router.event_queue,id);
});
re_frame.core.register_handler = (function re_frame$core$register_handler(var_args){
var args__26207__auto__ = [];
var len__26200__auto___114933 = arguments.length;
var i__26201__auto___114934 = (0);
while(true){
if((i__26201__auto___114934 < len__26200__auto___114933)){
args__26207__auto__.push((arguments[i__26201__auto___114934]));

var G__114935 = (i__26201__auto___114934 + (1));
i__26201__auto___114934 = G__114935;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of ",[cljs.core.str(cljs.core.first.call(null,args))].join(''),")");

return cljs.core.apply.call(null,re_frame.core.reg_event_db,args);
});

re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

re_frame.core.register_handler.cljs$lang$applyTo = (function (seq114932){
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq114932));
});

re_frame.core.register_sub = (function re_frame$core$register_sub(var_args){
var args__26207__auto__ = [];
var len__26200__auto___114937 = arguments.length;
var i__26201__auto___114938 = (0);
while(true){
if((i__26201__auto___114938 < len__26200__auto___114937)){
args__26207__auto__.push((arguments[i__26201__auto___114938]));

var G__114939 = (i__26201__auto___114938 + (1));
i__26201__auto___114938 = G__114939;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of ",[cljs.core.str(cljs.core.first.call(null,args))].join(''),")");

return cljs.core.apply.call(null,re_frame.core.reg_sub_raw,args);
});

re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

re_frame.core.register_sub.cljs$lang$applyTo = (function (seq114936){
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq114936));
});


//# sourceMappingURL=core.js.map?rel=1488400161793