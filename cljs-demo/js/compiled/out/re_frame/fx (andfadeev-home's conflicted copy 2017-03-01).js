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
var seq__89200 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__89201 = null;
var count__89202 = (0);
var i__89203 = (0);
while(true){
if((i__89203 < count__89202)){
var vec__89204 = cljs.core._nth.call(null,chunk__89201,i__89203);
var effect_k = cljs.core.nth.call(null,vec__89204,(0),null);
var value = cljs.core.nth.call(null,vec__89204,(1),null);
var temp__4655__auto___89210 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___89210)){
var effect_fn_89211 = temp__4655__auto___89210;
effect_fn_89211.call(null,value);
} else {
}

var G__89212 = seq__89200;
var G__89213 = chunk__89201;
var G__89214 = count__89202;
var G__89215 = (i__89203 + (1));
seq__89200 = G__89212;
chunk__89201 = G__89213;
count__89202 = G__89214;
i__89203 = G__89215;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__89200);
if(temp__4657__auto__){
var seq__89200__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89200__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__89200__$1);
var G__89216 = cljs.core.chunk_rest.call(null,seq__89200__$1);
var G__89217 = c__25936__auto__;
var G__89218 = cljs.core.count.call(null,c__25936__auto__);
var G__89219 = (0);
seq__89200 = G__89216;
chunk__89201 = G__89217;
count__89202 = G__89218;
i__89203 = G__89219;
continue;
} else {
var vec__89207 = cljs.core.first.call(null,seq__89200__$1);
var effect_k = cljs.core.nth.call(null,vec__89207,(0),null);
var value = cljs.core.nth.call(null,vec__89207,(1),null);
var temp__4655__auto___89220 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___89220)){
var effect_fn_89221 = temp__4655__auto___89220;
effect_fn_89221.call(null,value);
} else {
}

var G__89222 = cljs.core.next.call(null,seq__89200__$1);
var G__89223 = null;
var G__89224 = (0);
var G__89225 = (0);
seq__89200 = G__89222;
chunk__89201 = G__89223;
count__89202 = G__89224;
i__89203 = G__89225;
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
var seq__89226 = cljs.core.seq.call(null,value);
var chunk__89227 = null;
var count__89228 = (0);
var i__89229 = (0);
while(true){
if((i__89229 < count__89228)){
var map__89230 = cljs.core._nth.call(null,chunk__89227,i__89229);
var map__89230__$1 = ((((!((map__89230 == null)))?((((map__89230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89230):map__89230);
var effect = map__89230__$1;
var ms = cljs.core.get.call(null,map__89230__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__89230__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__89226,chunk__89227,count__89228,i__89229,map__89230,map__89230__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__89226,chunk__89227,count__89228,i__89229,map__89230,map__89230__$1,effect,ms,dispatch))
,ms);
}

var G__89234 = seq__89226;
var G__89235 = chunk__89227;
var G__89236 = count__89228;
var G__89237 = (i__89229 + (1));
seq__89226 = G__89234;
chunk__89227 = G__89235;
count__89228 = G__89236;
i__89229 = G__89237;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__89226);
if(temp__4657__auto__){
var seq__89226__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89226__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__89226__$1);
var G__89238 = cljs.core.chunk_rest.call(null,seq__89226__$1);
var G__89239 = c__25936__auto__;
var G__89240 = cljs.core.count.call(null,c__25936__auto__);
var G__89241 = (0);
seq__89226 = G__89238;
chunk__89227 = G__89239;
count__89228 = G__89240;
i__89229 = G__89241;
continue;
} else {
var map__89232 = cljs.core.first.call(null,seq__89226__$1);
var map__89232__$1 = ((((!((map__89232 == null)))?((((map__89232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89232):map__89232);
var effect = map__89232__$1;
var ms = cljs.core.get.call(null,map__89232__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__89232__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__89226,chunk__89227,count__89228,i__89229,map__89232,map__89232__$1,effect,ms,dispatch,seq__89226__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__89226,chunk__89227,count__89228,i__89229,map__89232,map__89232__$1,effect,ms,dispatch,seq__89226__$1,temp__4657__auto__))
,ms);
}

var G__89242 = cljs.core.next.call(null,seq__89226__$1);
var G__89243 = null;
var G__89244 = (0);
var G__89245 = (0);
seq__89226 = G__89242;
chunk__89227 = G__89243;
count__89228 = G__89244;
i__89229 = G__89245;
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

var seq__89246 = cljs.core.seq.call(null,value);
var chunk__89247 = null;
var count__89248 = (0);
var i__89249 = (0);
while(true){
if((i__89249 < count__89248)){
var event = cljs.core._nth.call(null,chunk__89247,i__89249);
re_frame.router.dispatch.call(null,event);

var G__89250 = seq__89246;
var G__89251 = chunk__89247;
var G__89252 = count__89248;
var G__89253 = (i__89249 + (1));
seq__89246 = G__89250;
chunk__89247 = G__89251;
count__89248 = G__89252;
i__89249 = G__89253;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__89246);
if(temp__4657__auto__){
var seq__89246__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89246__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__89246__$1);
var G__89254 = cljs.core.chunk_rest.call(null,seq__89246__$1);
var G__89255 = c__25936__auto__;
var G__89256 = cljs.core.count.call(null,c__25936__auto__);
var G__89257 = (0);
seq__89246 = G__89254;
chunk__89247 = G__89255;
count__89248 = G__89256;
i__89249 = G__89257;
continue;
} else {
var event = cljs.core.first.call(null,seq__89246__$1);
re_frame.router.dispatch.call(null,event);

var G__89258 = cljs.core.next.call(null,seq__89246__$1);
var G__89259 = null;
var G__89260 = (0);
var G__89261 = (0);
seq__89246 = G__89258;
chunk__89247 = G__89259;
count__89248 = G__89260;
i__89249 = G__89261;
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
var seq__89262 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__89263 = null;
var count__89264 = (0);
var i__89265 = (0);
while(true){
if((i__89265 < count__89264)){
var event = cljs.core._nth.call(null,chunk__89263,i__89265);
clear_event.call(null,event);

var G__89266 = seq__89262;
var G__89267 = chunk__89263;
var G__89268 = count__89264;
var G__89269 = (i__89265 + (1));
seq__89262 = G__89266;
chunk__89263 = G__89267;
count__89264 = G__89268;
i__89265 = G__89269;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__89262);
if(temp__4657__auto__){
var seq__89262__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89262__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__89262__$1);
var G__89270 = cljs.core.chunk_rest.call(null,seq__89262__$1);
var G__89271 = c__25936__auto__;
var G__89272 = cljs.core.count.call(null,c__25936__auto__);
var G__89273 = (0);
seq__89262 = G__89270;
chunk__89263 = G__89271;
count__89264 = G__89272;
i__89265 = G__89273;
continue;
} else {
var event = cljs.core.first.call(null,seq__89262__$1);
clear_event.call(null,event);

var G__89274 = cljs.core.next.call(null,seq__89262__$1);
var G__89275 = null;
var G__89276 = (0);
var G__89277 = (0);
seq__89262 = G__89274;
chunk__89263 = G__89275;
count__89264 = G__89276;
i__89265 = G__89277;
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

//# sourceMappingURL=fx.js.map?rel=1488399650699