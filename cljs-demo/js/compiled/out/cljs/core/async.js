// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args122096 = [];
var len__26200__auto___122102 = arguments.length;
var i__26201__auto___122103 = (0);
while(true){
if((i__26201__auto___122103 < len__26200__auto___122102)){
args122096.push((arguments[i__26201__auto___122103]));

var G__122104 = (i__26201__auto___122103 + (1));
i__26201__auto___122103 = G__122104;
continue;
} else {
}
break;
}

var G__122098 = args122096.length;
switch (G__122098) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args122096.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async122099 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async122099 = (function (f,blockable,meta122100){
this.f = f;
this.blockable = blockable;
this.meta122100 = meta122100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async122099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_122101,meta122100__$1){
var self__ = this;
var _122101__$1 = this;
return (new cljs.core.async.t_cljs$core$async122099(self__.f,self__.blockable,meta122100__$1));
});

cljs.core.async.t_cljs$core$async122099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_122101){
var self__ = this;
var _122101__$1 = this;
return self__.meta122100;
});

cljs.core.async.t_cljs$core$async122099.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async122099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async122099.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async122099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async122099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta122100","meta122100",1850931339,null)], null);
});

cljs.core.async.t_cljs$core$async122099.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async122099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async122099";

cljs.core.async.t_cljs$core$async122099.cljs$lang$ctorPrWriter = (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cljs.core.async/t_cljs$core$async122099");
});

cljs.core.async.__GT_t_cljs$core$async122099 = (function cljs$core$async$__GT_t_cljs$core$async122099(f__$1,blockable__$1,meta122100){
return (new cljs.core.async.t_cljs$core$async122099(f__$1,blockable__$1,meta122100));
});

}

return (new cljs.core.async.t_cljs$core$async122099(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args122108 = [];
var len__26200__auto___122111 = arguments.length;
var i__26201__auto___122112 = (0);
while(true){
if((i__26201__auto___122112 < len__26200__auto___122111)){
args122108.push((arguments[i__26201__auto___122112]));

var G__122113 = (i__26201__auto___122112 + (1));
i__26201__auto___122112 = G__122113;
continue;
} else {
}
break;
}

var G__122110 = args122108.length;
switch (G__122110) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args122108.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args122115 = [];
var len__26200__auto___122118 = arguments.length;
var i__26201__auto___122119 = (0);
while(true){
if((i__26201__auto___122119 < len__26200__auto___122118)){
args122115.push((arguments[i__26201__auto___122119]));

var G__122120 = (i__26201__auto___122119 + (1));
i__26201__auto___122119 = G__122120;
continue;
} else {
}
break;
}

var G__122117 = args122115.length;
switch (G__122117) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args122115.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args122122 = [];
var len__26200__auto___122125 = arguments.length;
var i__26201__auto___122126 = (0);
while(true){
if((i__26201__auto___122126 < len__26200__auto___122125)){
args122122.push((arguments[i__26201__auto___122126]));

var G__122127 = (i__26201__auto___122126 + (1));
i__26201__auto___122126 = G__122127;
continue;
} else {
}
break;
}

var G__122124 = args122122.length;
switch (G__122124) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args122122.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_122129 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_122129);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_122129,ret){
return (function (){
return fn1.call(null,val_122129);
});})(val_122129,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args122130 = [];
var len__26200__auto___122133 = arguments.length;
var i__26201__auto___122134 = (0);
while(true){
if((i__26201__auto___122134 < len__26200__auto___122133)){
args122130.push((arguments[i__26201__auto___122134]));

var G__122135 = (i__26201__auto___122134 + (1));
i__26201__auto___122134 = G__122135;
continue;
} else {
}
break;
}

var G__122132 = args122130.length;
switch (G__122132) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args122130.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26040__auto___122137 = n;
var x_122138 = (0);
while(true){
if((x_122138 < n__26040__auto___122137)){
(a[x_122138] = (0));

var G__122139 = (x_122138 + (1));
x_122138 = G__122139;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__122140 = (i + (1));
i = G__122140;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async122144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async122144 = (function (alt_flag,flag,meta122145){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta122145 = meta122145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async122144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_122146,meta122145__$1){
var self__ = this;
var _122146__$1 = this;
return (new cljs.core.async.t_cljs$core$async122144(self__.alt_flag,self__.flag,meta122145__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async122144.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_122146){
var self__ = this;
var _122146__$1 = this;
return self__.meta122145;
});})(flag))
;

cljs.core.async.t_cljs$core$async122144.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async122144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async122144.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async122144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async122144.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta122145","meta122145",-449323147,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async122144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async122144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async122144";

cljs.core.async.t_cljs$core$async122144.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cljs.core.async/t_cljs$core$async122144");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async122144 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async122144(alt_flag__$1,flag__$1,meta122145){
return (new cljs.core.async.t_cljs$core$async122144(alt_flag__$1,flag__$1,meta122145));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async122144(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async122150 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async122150 = (function (alt_handler,flag,cb,meta122151){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta122151 = meta122151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async122150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_122152,meta122151__$1){
var self__ = this;
var _122152__$1 = this;
return (new cljs.core.async.t_cljs$core$async122150(self__.alt_handler,self__.flag,self__.cb,meta122151__$1));
});

cljs.core.async.t_cljs$core$async122150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_122152){
var self__ = this;
var _122152__$1 = this;
return self__.meta122151;
});

cljs.core.async.t_cljs$core$async122150.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async122150.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async122150.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async122150.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async122150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta122151","meta122151",-1021737954,null)], null);
});

cljs.core.async.t_cljs$core$async122150.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async122150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async122150";

cljs.core.async.t_cljs$core$async122150.cljs$lang$ctorPrWriter = (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cljs.core.async/t_cljs$core$async122150");
});

cljs.core.async.__GT_t_cljs$core$async122150 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async122150(alt_handler__$1,flag__$1,cb__$1,meta122151){
return (new cljs.core.async.t_cljs$core$async122150(alt_handler__$1,flag__$1,cb__$1,meta122151));
});

}

return (new cljs.core.async.t_cljs$core$async122150(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__122153_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__122153_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__122154_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__122154_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25125__auto__ = wport;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return port;
}
})()], null));
} else {
var G__122155 = (i + (1));
i = G__122155;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25125__auto__ = ret;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25113__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25113__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25113__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26207__auto__ = [];
var len__26200__auto___122161 = arguments.length;
var i__26201__auto___122162 = (0);
while(true){
if((i__26201__auto___122162 < len__26200__auto___122161)){
args__26207__auto__.push((arguments[i__26201__auto___122162]));

var G__122163 = (i__26201__auto___122162 + (1));
i__26201__auto___122162 = G__122163;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((1) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26208__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__122158){
var map__122159 = p__122158;
var map__122159__$1 = ((((!((map__122159 == null)))?((((map__122159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__122159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__122159):map__122159);
var opts = map__122159__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq122156){
var G__122157 = cljs.core.first.call(null,seq122156);
var seq122156__$1 = cljs.core.next.call(null,seq122156);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__122157,seq122156__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args122164 = [];
var len__26200__auto___122214 = arguments.length;
var i__26201__auto___122215 = (0);
while(true){
if((i__26201__auto___122215 < len__26200__auto___122214)){
args122164.push((arguments[i__26201__auto___122215]));

var G__122216 = (i__26201__auto___122215 + (1));
i__26201__auto___122215 = G__122216;
continue;
} else {
}
break;
}

var G__122166 = args122164.length;
switch (G__122166) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args122164.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28337__auto___122218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___122218){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___122218){
return (function (state_122190){
var state_val_122191 = (state_122190[(1)]);
if((state_val_122191 === (7))){
var inst_122186 = (state_122190[(2)]);
var state_122190__$1 = state_122190;
var statearr_122192_122219 = state_122190__$1;
(statearr_122192_122219[(2)] = inst_122186);

(statearr_122192_122219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122191 === (1))){
var state_122190__$1 = state_122190;
var statearr_122193_122220 = state_122190__$1;
(statearr_122193_122220[(2)] = null);

(statearr_122193_122220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122191 === (4))){
var inst_122169 = (state_122190[(7)]);
var inst_122169__$1 = (state_122190[(2)]);
var inst_122170 = (inst_122169__$1 == null);
var state_122190__$1 = (function (){var statearr_122194 = state_122190;
(statearr_122194[(7)] = inst_122169__$1);

return statearr_122194;
})();
if(cljs.core.truth_(inst_122170)){
var statearr_122195_122221 = state_122190__$1;
(statearr_122195_122221[(1)] = (5));

} else {
var statearr_122196_122222 = state_122190__$1;
(statearr_122196_122222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122191 === (13))){
var state_122190__$1 = state_122190;
var statearr_122197_122223 = state_122190__$1;
(statearr_122197_122223[(2)] = null);

(statearr_122197_122223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122191 === (6))){
var inst_122169 = (state_122190[(7)]);
var state_122190__$1 = state_122190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_122190__$1,(11),to,inst_122169);
} else {
if((state_val_122191 === (3))){
var inst_122188 = (state_122190[(2)]);
var state_122190__$1 = state_122190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_122190__$1,inst_122188);
} else {
if((state_val_122191 === (12))){
var state_122190__$1 = state_122190;
var statearr_122198_122224 = state_122190__$1;
(statearr_122198_122224[(2)] = null);

(statearr_122198_122224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122191 === (2))){
var state_122190__$1 = state_122190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_122190__$1,(4),from);
} else {
if((state_val_122191 === (11))){
var inst_122179 = (state_122190[(2)]);
var state_122190__$1 = state_122190;
if(cljs.core.truth_(inst_122179)){
var statearr_122199_122225 = state_122190__$1;
(statearr_122199_122225[(1)] = (12));

} else {
var statearr_122200_122226 = state_122190__$1;
(statearr_122200_122226[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122191 === (9))){
var state_122190__$1 = state_122190;
var statearr_122201_122227 = state_122190__$1;
(statearr_122201_122227[(2)] = null);

(statearr_122201_122227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122191 === (5))){
var state_122190__$1 = state_122190;
if(cljs.core.truth_(close_QMARK_)){
var statearr_122202_122228 = state_122190__$1;
(statearr_122202_122228[(1)] = (8));

} else {
var statearr_122203_122229 = state_122190__$1;
(statearr_122203_122229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122191 === (14))){
var inst_122184 = (state_122190[(2)]);
var state_122190__$1 = state_122190;
var statearr_122204_122230 = state_122190__$1;
(statearr_122204_122230[(2)] = inst_122184);

(statearr_122204_122230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122191 === (10))){
var inst_122176 = (state_122190[(2)]);
var state_122190__$1 = state_122190;
var statearr_122205_122231 = state_122190__$1;
(statearr_122205_122231[(2)] = inst_122176);

(statearr_122205_122231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122191 === (8))){
var inst_122173 = cljs.core.async.close_BANG_.call(null,to);
var state_122190__$1 = state_122190;
var statearr_122206_122232 = state_122190__$1;
(statearr_122206_122232[(2)] = inst_122173);

(statearr_122206_122232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto___122218))
;
return ((function (switch__28225__auto__,c__28337__auto___122218){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_122210 = [null,null,null,null,null,null,null,null];
(statearr_122210[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_122210[(1)] = (1));

return statearr_122210;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_122190){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_122190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e122211){if((e122211 instanceof Object)){
var ex__28229__auto__ = e122211;
var statearr_122212_122233 = state_122190;
(statearr_122212_122233[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_122190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122234 = state_122190;
state_122190 = G__122234;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_122190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_122190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___122218))
})();
var state__28339__auto__ = (function (){var statearr_122213 = f__28338__auto__.call(null);
(statearr_122213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___122218);

return statearr_122213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___122218))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__122422){
var vec__122423 = p__122422;
var v = cljs.core.nth.call(null,vec__122423,(0),null);
var p = cljs.core.nth.call(null,vec__122423,(1),null);
var job = vec__122423;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28337__auto___122609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___122609,res,vec__122423,v,p,job,jobs,results){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___122609,res,vec__122423,v,p,job,jobs,results){
return (function (state_122430){
var state_val_122431 = (state_122430[(1)]);
if((state_val_122431 === (1))){
var state_122430__$1 = state_122430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_122430__$1,(2),res,v);
} else {
if((state_val_122431 === (2))){
var inst_122427 = (state_122430[(2)]);
var inst_122428 = cljs.core.async.close_BANG_.call(null,res);
var state_122430__$1 = (function (){var statearr_122432 = state_122430;
(statearr_122432[(7)] = inst_122427);

return statearr_122432;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_122430__$1,inst_122428);
} else {
return null;
}
}
});})(c__28337__auto___122609,res,vec__122423,v,p,job,jobs,results))
;
return ((function (switch__28225__auto__,c__28337__auto___122609,res,vec__122423,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0 = (function (){
var statearr_122436 = [null,null,null,null,null,null,null,null];
(statearr_122436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__);

(statearr_122436[(1)] = (1));

return statearr_122436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1 = (function (state_122430){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_122430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e122437){if((e122437 instanceof Object)){
var ex__28229__auto__ = e122437;
var statearr_122438_122610 = state_122430;
(statearr_122438_122610[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_122430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122611 = state_122430;
state_122430 = G__122611;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = function(state_122430){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1.call(this,state_122430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___122609,res,vec__122423,v,p,job,jobs,results))
})();
var state__28339__auto__ = (function (){var statearr_122439 = f__28338__auto__.call(null);
(statearr_122439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___122609);

return statearr_122439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___122609,res,vec__122423,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__122440){
var vec__122441 = p__122440;
var v = cljs.core.nth.call(null,vec__122441,(0),null);
var p = cljs.core.nth.call(null,vec__122441,(1),null);
var job = vec__122441;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26040__auto___122612 = n;
var __122613 = (0);
while(true){
if((__122613 < n__26040__auto___122612)){
var G__122444_122614 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__122444_122614) {
case "compute":
var c__28337__auto___122616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__122613,c__28337__auto___122616,G__122444_122614,n__26040__auto___122612,jobs,results,process,async){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (__122613,c__28337__auto___122616,G__122444_122614,n__26040__auto___122612,jobs,results,process,async){
return (function (state_122457){
var state_val_122458 = (state_122457[(1)]);
if((state_val_122458 === (1))){
var state_122457__$1 = state_122457;
var statearr_122459_122617 = state_122457__$1;
(statearr_122459_122617[(2)] = null);

(statearr_122459_122617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122458 === (2))){
var state_122457__$1 = state_122457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_122457__$1,(4),jobs);
} else {
if((state_val_122458 === (3))){
var inst_122455 = (state_122457[(2)]);
var state_122457__$1 = state_122457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_122457__$1,inst_122455);
} else {
if((state_val_122458 === (4))){
var inst_122447 = (state_122457[(2)]);
var inst_122448 = process.call(null,inst_122447);
var state_122457__$1 = state_122457;
if(cljs.core.truth_(inst_122448)){
var statearr_122460_122618 = state_122457__$1;
(statearr_122460_122618[(1)] = (5));

} else {
var statearr_122461_122619 = state_122457__$1;
(statearr_122461_122619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122458 === (5))){
var state_122457__$1 = state_122457;
var statearr_122462_122620 = state_122457__$1;
(statearr_122462_122620[(2)] = null);

(statearr_122462_122620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122458 === (6))){
var state_122457__$1 = state_122457;
var statearr_122463_122621 = state_122457__$1;
(statearr_122463_122621[(2)] = null);

(statearr_122463_122621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122458 === (7))){
var inst_122453 = (state_122457[(2)]);
var state_122457__$1 = state_122457;
var statearr_122464_122622 = state_122457__$1;
(statearr_122464_122622[(2)] = inst_122453);

(statearr_122464_122622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__122613,c__28337__auto___122616,G__122444_122614,n__26040__auto___122612,jobs,results,process,async))
;
return ((function (__122613,switch__28225__auto__,c__28337__auto___122616,G__122444_122614,n__26040__auto___122612,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0 = (function (){
var statearr_122468 = [null,null,null,null,null,null,null];
(statearr_122468[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__);

(statearr_122468[(1)] = (1));

return statearr_122468;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1 = (function (state_122457){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_122457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e122469){if((e122469 instanceof Object)){
var ex__28229__auto__ = e122469;
var statearr_122470_122623 = state_122457;
(statearr_122470_122623[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_122457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122624 = state_122457;
state_122457 = G__122624;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = function(state_122457){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1.call(this,state_122457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__;
})()
;})(__122613,switch__28225__auto__,c__28337__auto___122616,G__122444_122614,n__26040__auto___122612,jobs,results,process,async))
})();
var state__28339__auto__ = (function (){var statearr_122471 = f__28338__auto__.call(null);
(statearr_122471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___122616);

return statearr_122471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(__122613,c__28337__auto___122616,G__122444_122614,n__26040__auto___122612,jobs,results,process,async))
);


break;
case "async":
var c__28337__auto___122625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__122613,c__28337__auto___122625,G__122444_122614,n__26040__auto___122612,jobs,results,process,async){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (__122613,c__28337__auto___122625,G__122444_122614,n__26040__auto___122612,jobs,results,process,async){
return (function (state_122484){
var state_val_122485 = (state_122484[(1)]);
if((state_val_122485 === (1))){
var state_122484__$1 = state_122484;
var statearr_122486_122626 = state_122484__$1;
(statearr_122486_122626[(2)] = null);

(statearr_122486_122626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122485 === (2))){
var state_122484__$1 = state_122484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_122484__$1,(4),jobs);
} else {
if((state_val_122485 === (3))){
var inst_122482 = (state_122484[(2)]);
var state_122484__$1 = state_122484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_122484__$1,inst_122482);
} else {
if((state_val_122485 === (4))){
var inst_122474 = (state_122484[(2)]);
var inst_122475 = async.call(null,inst_122474);
var state_122484__$1 = state_122484;
if(cljs.core.truth_(inst_122475)){
var statearr_122487_122627 = state_122484__$1;
(statearr_122487_122627[(1)] = (5));

} else {
var statearr_122488_122628 = state_122484__$1;
(statearr_122488_122628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122485 === (5))){
var state_122484__$1 = state_122484;
var statearr_122489_122629 = state_122484__$1;
(statearr_122489_122629[(2)] = null);

(statearr_122489_122629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122485 === (6))){
var state_122484__$1 = state_122484;
var statearr_122490_122630 = state_122484__$1;
(statearr_122490_122630[(2)] = null);

(statearr_122490_122630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122485 === (7))){
var inst_122480 = (state_122484[(2)]);
var state_122484__$1 = state_122484;
var statearr_122491_122631 = state_122484__$1;
(statearr_122491_122631[(2)] = inst_122480);

(statearr_122491_122631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__122613,c__28337__auto___122625,G__122444_122614,n__26040__auto___122612,jobs,results,process,async))
;
return ((function (__122613,switch__28225__auto__,c__28337__auto___122625,G__122444_122614,n__26040__auto___122612,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0 = (function (){
var statearr_122495 = [null,null,null,null,null,null,null];
(statearr_122495[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__);

(statearr_122495[(1)] = (1));

return statearr_122495;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1 = (function (state_122484){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_122484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e122496){if((e122496 instanceof Object)){
var ex__28229__auto__ = e122496;
var statearr_122497_122632 = state_122484;
(statearr_122497_122632[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_122484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122633 = state_122484;
state_122484 = G__122633;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = function(state_122484){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1.call(this,state_122484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__;
})()
;})(__122613,switch__28225__auto__,c__28337__auto___122625,G__122444_122614,n__26040__auto___122612,jobs,results,process,async))
})();
var state__28339__auto__ = (function (){var statearr_122498 = f__28338__auto__.call(null);
(statearr_122498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___122625);

return statearr_122498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(__122613,c__28337__auto___122625,G__122444_122614,n__26040__auto___122612,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__122634 = (__122613 + (1));
__122613 = G__122634;
continue;
} else {
}
break;
}

var c__28337__auto___122635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___122635,jobs,results,process,async){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___122635,jobs,results,process,async){
return (function (state_122520){
var state_val_122521 = (state_122520[(1)]);
if((state_val_122521 === (1))){
var state_122520__$1 = state_122520;
var statearr_122522_122636 = state_122520__$1;
(statearr_122522_122636[(2)] = null);

(statearr_122522_122636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122521 === (2))){
var state_122520__$1 = state_122520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_122520__$1,(4),from);
} else {
if((state_val_122521 === (3))){
var inst_122518 = (state_122520[(2)]);
var state_122520__$1 = state_122520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_122520__$1,inst_122518);
} else {
if((state_val_122521 === (4))){
var inst_122501 = (state_122520[(7)]);
var inst_122501__$1 = (state_122520[(2)]);
var inst_122502 = (inst_122501__$1 == null);
var state_122520__$1 = (function (){var statearr_122523 = state_122520;
(statearr_122523[(7)] = inst_122501__$1);

return statearr_122523;
})();
if(cljs.core.truth_(inst_122502)){
var statearr_122524_122637 = state_122520__$1;
(statearr_122524_122637[(1)] = (5));

} else {
var statearr_122525_122638 = state_122520__$1;
(statearr_122525_122638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122521 === (5))){
var inst_122504 = cljs.core.async.close_BANG_.call(null,jobs);
var state_122520__$1 = state_122520;
var statearr_122526_122639 = state_122520__$1;
(statearr_122526_122639[(2)] = inst_122504);

(statearr_122526_122639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122521 === (6))){
var inst_122501 = (state_122520[(7)]);
var inst_122506 = (state_122520[(8)]);
var inst_122506__$1 = cljs.core.async.chan.call(null,(1));
var inst_122507 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_122508 = [inst_122501,inst_122506__$1];
var inst_122509 = (new cljs.core.PersistentVector(null,2,(5),inst_122507,inst_122508,null));
var state_122520__$1 = (function (){var statearr_122527 = state_122520;
(statearr_122527[(8)] = inst_122506__$1);

return statearr_122527;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_122520__$1,(8),jobs,inst_122509);
} else {
if((state_val_122521 === (7))){
var inst_122516 = (state_122520[(2)]);
var state_122520__$1 = state_122520;
var statearr_122528_122640 = state_122520__$1;
(statearr_122528_122640[(2)] = inst_122516);

(statearr_122528_122640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122521 === (8))){
var inst_122506 = (state_122520[(8)]);
var inst_122511 = (state_122520[(2)]);
var state_122520__$1 = (function (){var statearr_122529 = state_122520;
(statearr_122529[(9)] = inst_122511);

return statearr_122529;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_122520__$1,(9),results,inst_122506);
} else {
if((state_val_122521 === (9))){
var inst_122513 = (state_122520[(2)]);
var state_122520__$1 = (function (){var statearr_122530 = state_122520;
(statearr_122530[(10)] = inst_122513);

return statearr_122530;
})();
var statearr_122531_122641 = state_122520__$1;
(statearr_122531_122641[(2)] = null);

(statearr_122531_122641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__28337__auto___122635,jobs,results,process,async))
;
return ((function (switch__28225__auto__,c__28337__auto___122635,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0 = (function (){
var statearr_122535 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_122535[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__);

(statearr_122535[(1)] = (1));

return statearr_122535;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1 = (function (state_122520){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_122520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e122536){if((e122536 instanceof Object)){
var ex__28229__auto__ = e122536;
var statearr_122537_122642 = state_122520;
(statearr_122537_122642[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_122520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122643 = state_122520;
state_122520 = G__122643;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = function(state_122520){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1.call(this,state_122520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___122635,jobs,results,process,async))
})();
var state__28339__auto__ = (function (){var statearr_122538 = f__28338__auto__.call(null);
(statearr_122538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___122635);

return statearr_122538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___122635,jobs,results,process,async))
);


var c__28337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto__,jobs,results,process,async){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto__,jobs,results,process,async){
return (function (state_122576){
var state_val_122577 = (state_122576[(1)]);
if((state_val_122577 === (7))){
var inst_122572 = (state_122576[(2)]);
var state_122576__$1 = state_122576;
var statearr_122578_122644 = state_122576__$1;
(statearr_122578_122644[(2)] = inst_122572);

(statearr_122578_122644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122577 === (20))){
var state_122576__$1 = state_122576;
var statearr_122579_122645 = state_122576__$1;
(statearr_122579_122645[(2)] = null);

(statearr_122579_122645[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122577 === (1))){
var state_122576__$1 = state_122576;
var statearr_122580_122646 = state_122576__$1;
(statearr_122580_122646[(2)] = null);

(statearr_122580_122646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122577 === (4))){
var inst_122541 = (state_122576[(7)]);
var inst_122541__$1 = (state_122576[(2)]);
var inst_122542 = (inst_122541__$1 == null);
var state_122576__$1 = (function (){var statearr_122581 = state_122576;
(statearr_122581[(7)] = inst_122541__$1);

return statearr_122581;
})();
if(cljs.core.truth_(inst_122542)){
var statearr_122582_122647 = state_122576__$1;
(statearr_122582_122647[(1)] = (5));

} else {
var statearr_122583_122648 = state_122576__$1;
(statearr_122583_122648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122577 === (15))){
var inst_122554 = (state_122576[(8)]);
var state_122576__$1 = state_122576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_122576__$1,(18),to,inst_122554);
} else {
if((state_val_122577 === (21))){
var inst_122567 = (state_122576[(2)]);
var state_122576__$1 = state_122576;
var statearr_122584_122649 = state_122576__$1;
(statearr_122584_122649[(2)] = inst_122567);

(statearr_122584_122649[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122577 === (13))){
var inst_122569 = (state_122576[(2)]);
var state_122576__$1 = (function (){var statearr_122585 = state_122576;
(statearr_122585[(9)] = inst_122569);

return statearr_122585;
})();
var statearr_122586_122650 = state_122576__$1;
(statearr_122586_122650[(2)] = null);

(statearr_122586_122650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122577 === (6))){
var inst_122541 = (state_122576[(7)]);
var state_122576__$1 = state_122576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_122576__$1,(11),inst_122541);
} else {
if((state_val_122577 === (17))){
var inst_122562 = (state_122576[(2)]);
var state_122576__$1 = state_122576;
if(cljs.core.truth_(inst_122562)){
var statearr_122587_122651 = state_122576__$1;
(statearr_122587_122651[(1)] = (19));

} else {
var statearr_122588_122652 = state_122576__$1;
(statearr_122588_122652[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122577 === (3))){
var inst_122574 = (state_122576[(2)]);
var state_122576__$1 = state_122576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_122576__$1,inst_122574);
} else {
if((state_val_122577 === (12))){
var inst_122551 = (state_122576[(10)]);
var state_122576__$1 = state_122576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_122576__$1,(14),inst_122551);
} else {
if((state_val_122577 === (2))){
var state_122576__$1 = state_122576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_122576__$1,(4),results);
} else {
if((state_val_122577 === (19))){
var state_122576__$1 = state_122576;
var statearr_122589_122653 = state_122576__$1;
(statearr_122589_122653[(2)] = null);

(statearr_122589_122653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122577 === (11))){
var inst_122551 = (state_122576[(2)]);
var state_122576__$1 = (function (){var statearr_122590 = state_122576;
(statearr_122590[(10)] = inst_122551);

return statearr_122590;
})();
var statearr_122591_122654 = state_122576__$1;
(statearr_122591_122654[(2)] = null);

(statearr_122591_122654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122577 === (9))){
var state_122576__$1 = state_122576;
var statearr_122592_122655 = state_122576__$1;
(statearr_122592_122655[(2)] = null);

(statearr_122592_122655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122577 === (5))){
var state_122576__$1 = state_122576;
if(cljs.core.truth_(close_QMARK_)){
var statearr_122593_122656 = state_122576__$1;
(statearr_122593_122656[(1)] = (8));

} else {
var statearr_122594_122657 = state_122576__$1;
(statearr_122594_122657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122577 === (14))){
var inst_122554 = (state_122576[(8)]);
var inst_122556 = (state_122576[(11)]);
var inst_122554__$1 = (state_122576[(2)]);
var inst_122555 = (inst_122554__$1 == null);
var inst_122556__$1 = cljs.core.not.call(null,inst_122555);
var state_122576__$1 = (function (){var statearr_122595 = state_122576;
(statearr_122595[(8)] = inst_122554__$1);

(statearr_122595[(11)] = inst_122556__$1);

return statearr_122595;
})();
if(inst_122556__$1){
var statearr_122596_122658 = state_122576__$1;
(statearr_122596_122658[(1)] = (15));

} else {
var statearr_122597_122659 = state_122576__$1;
(statearr_122597_122659[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122577 === (16))){
var inst_122556 = (state_122576[(11)]);
var state_122576__$1 = state_122576;
var statearr_122598_122660 = state_122576__$1;
(statearr_122598_122660[(2)] = inst_122556);

(statearr_122598_122660[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122577 === (10))){
var inst_122548 = (state_122576[(2)]);
var state_122576__$1 = state_122576;
var statearr_122599_122661 = state_122576__$1;
(statearr_122599_122661[(2)] = inst_122548);

(statearr_122599_122661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122577 === (18))){
var inst_122559 = (state_122576[(2)]);
var state_122576__$1 = state_122576;
var statearr_122600_122662 = state_122576__$1;
(statearr_122600_122662[(2)] = inst_122559);

(statearr_122600_122662[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122577 === (8))){
var inst_122545 = cljs.core.async.close_BANG_.call(null,to);
var state_122576__$1 = state_122576;
var statearr_122601_122663 = state_122576__$1;
(statearr_122601_122663[(2)] = inst_122545);

(statearr_122601_122663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto__,jobs,results,process,async))
;
return ((function (switch__28225__auto__,c__28337__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0 = (function (){
var statearr_122605 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_122605[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__);

(statearr_122605[(1)] = (1));

return statearr_122605;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1 = (function (state_122576){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_122576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e122606){if((e122606 instanceof Object)){
var ex__28229__auto__ = e122606;
var statearr_122607_122664 = state_122576;
(statearr_122607_122664[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_122576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122665 = state_122576;
state_122576 = G__122665;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__ = function(state_122576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1.call(this,state_122576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28226__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto__,jobs,results,process,async))
})();
var state__28339__auto__ = (function (){var statearr_122608 = f__28338__auto__.call(null);
(statearr_122608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto__);

return statearr_122608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto__,jobs,results,process,async))
);

return c__28337__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args122666 = [];
var len__26200__auto___122669 = arguments.length;
var i__26201__auto___122670 = (0);
while(true){
if((i__26201__auto___122670 < len__26200__auto___122669)){
args122666.push((arguments[i__26201__auto___122670]));

var G__122671 = (i__26201__auto___122670 + (1));
i__26201__auto___122670 = G__122671;
continue;
} else {
}
break;
}

var G__122668 = args122666.length;
switch (G__122668) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args122666.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args122673 = [];
var len__26200__auto___122676 = arguments.length;
var i__26201__auto___122677 = (0);
while(true){
if((i__26201__auto___122677 < len__26200__auto___122676)){
args122673.push((arguments[i__26201__auto___122677]));

var G__122678 = (i__26201__auto___122677 + (1));
i__26201__auto___122677 = G__122678;
continue;
} else {
}
break;
}

var G__122675 = args122673.length;
switch (G__122675) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args122673.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args122680 = [];
var len__26200__auto___122733 = arguments.length;
var i__26201__auto___122734 = (0);
while(true){
if((i__26201__auto___122734 < len__26200__auto___122733)){
args122680.push((arguments[i__26201__auto___122734]));

var G__122735 = (i__26201__auto___122734 + (1));
i__26201__auto___122734 = G__122735;
continue;
} else {
}
break;
}

var G__122682 = args122680.length;
switch (G__122682) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args122680.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28337__auto___122737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___122737,tc,fc){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___122737,tc,fc){
return (function (state_122708){
var state_val_122709 = (state_122708[(1)]);
if((state_val_122709 === (7))){
var inst_122704 = (state_122708[(2)]);
var state_122708__$1 = state_122708;
var statearr_122710_122738 = state_122708__$1;
(statearr_122710_122738[(2)] = inst_122704);

(statearr_122710_122738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122709 === (1))){
var state_122708__$1 = state_122708;
var statearr_122711_122739 = state_122708__$1;
(statearr_122711_122739[(2)] = null);

(statearr_122711_122739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122709 === (4))){
var inst_122685 = (state_122708[(7)]);
var inst_122685__$1 = (state_122708[(2)]);
var inst_122686 = (inst_122685__$1 == null);
var state_122708__$1 = (function (){var statearr_122712 = state_122708;
(statearr_122712[(7)] = inst_122685__$1);

return statearr_122712;
})();
if(cljs.core.truth_(inst_122686)){
var statearr_122713_122740 = state_122708__$1;
(statearr_122713_122740[(1)] = (5));

} else {
var statearr_122714_122741 = state_122708__$1;
(statearr_122714_122741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122709 === (13))){
var state_122708__$1 = state_122708;
var statearr_122715_122742 = state_122708__$1;
(statearr_122715_122742[(2)] = null);

(statearr_122715_122742[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122709 === (6))){
var inst_122685 = (state_122708[(7)]);
var inst_122691 = p.call(null,inst_122685);
var state_122708__$1 = state_122708;
if(cljs.core.truth_(inst_122691)){
var statearr_122716_122743 = state_122708__$1;
(statearr_122716_122743[(1)] = (9));

} else {
var statearr_122717_122744 = state_122708__$1;
(statearr_122717_122744[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122709 === (3))){
var inst_122706 = (state_122708[(2)]);
var state_122708__$1 = state_122708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_122708__$1,inst_122706);
} else {
if((state_val_122709 === (12))){
var state_122708__$1 = state_122708;
var statearr_122718_122745 = state_122708__$1;
(statearr_122718_122745[(2)] = null);

(statearr_122718_122745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122709 === (2))){
var state_122708__$1 = state_122708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_122708__$1,(4),ch);
} else {
if((state_val_122709 === (11))){
var inst_122685 = (state_122708[(7)]);
var inst_122695 = (state_122708[(2)]);
var state_122708__$1 = state_122708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_122708__$1,(8),inst_122695,inst_122685);
} else {
if((state_val_122709 === (9))){
var state_122708__$1 = state_122708;
var statearr_122719_122746 = state_122708__$1;
(statearr_122719_122746[(2)] = tc);

(statearr_122719_122746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122709 === (5))){
var inst_122688 = cljs.core.async.close_BANG_.call(null,tc);
var inst_122689 = cljs.core.async.close_BANG_.call(null,fc);
var state_122708__$1 = (function (){var statearr_122720 = state_122708;
(statearr_122720[(8)] = inst_122688);

return statearr_122720;
})();
var statearr_122721_122747 = state_122708__$1;
(statearr_122721_122747[(2)] = inst_122689);

(statearr_122721_122747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122709 === (14))){
var inst_122702 = (state_122708[(2)]);
var state_122708__$1 = state_122708;
var statearr_122722_122748 = state_122708__$1;
(statearr_122722_122748[(2)] = inst_122702);

(statearr_122722_122748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122709 === (10))){
var state_122708__$1 = state_122708;
var statearr_122723_122749 = state_122708__$1;
(statearr_122723_122749[(2)] = fc);

(statearr_122723_122749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122709 === (8))){
var inst_122697 = (state_122708[(2)]);
var state_122708__$1 = state_122708;
if(cljs.core.truth_(inst_122697)){
var statearr_122724_122750 = state_122708__$1;
(statearr_122724_122750[(1)] = (12));

} else {
var statearr_122725_122751 = state_122708__$1;
(statearr_122725_122751[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto___122737,tc,fc))
;
return ((function (switch__28225__auto__,c__28337__auto___122737,tc,fc){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_122729 = [null,null,null,null,null,null,null,null,null];
(statearr_122729[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_122729[(1)] = (1));

return statearr_122729;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_122708){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_122708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e122730){if((e122730 instanceof Object)){
var ex__28229__auto__ = e122730;
var statearr_122731_122752 = state_122708;
(statearr_122731_122752[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_122708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122753 = state_122708;
state_122708 = G__122753;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_122708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_122708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___122737,tc,fc))
})();
var state__28339__auto__ = (function (){var statearr_122732 = f__28338__auto__.call(null);
(statearr_122732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___122737);

return statearr_122732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___122737,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto__){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto__){
return (function (state_122817){
var state_val_122818 = (state_122817[(1)]);
if((state_val_122818 === (7))){
var inst_122813 = (state_122817[(2)]);
var state_122817__$1 = state_122817;
var statearr_122819_122840 = state_122817__$1;
(statearr_122819_122840[(2)] = inst_122813);

(statearr_122819_122840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122818 === (1))){
var inst_122797 = init;
var state_122817__$1 = (function (){var statearr_122820 = state_122817;
(statearr_122820[(7)] = inst_122797);

return statearr_122820;
})();
var statearr_122821_122841 = state_122817__$1;
(statearr_122821_122841[(2)] = null);

(statearr_122821_122841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122818 === (4))){
var inst_122800 = (state_122817[(8)]);
var inst_122800__$1 = (state_122817[(2)]);
var inst_122801 = (inst_122800__$1 == null);
var state_122817__$1 = (function (){var statearr_122822 = state_122817;
(statearr_122822[(8)] = inst_122800__$1);

return statearr_122822;
})();
if(cljs.core.truth_(inst_122801)){
var statearr_122823_122842 = state_122817__$1;
(statearr_122823_122842[(1)] = (5));

} else {
var statearr_122824_122843 = state_122817__$1;
(statearr_122824_122843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122818 === (6))){
var inst_122797 = (state_122817[(7)]);
var inst_122804 = (state_122817[(9)]);
var inst_122800 = (state_122817[(8)]);
var inst_122804__$1 = f.call(null,inst_122797,inst_122800);
var inst_122805 = cljs.core.reduced_QMARK_.call(null,inst_122804__$1);
var state_122817__$1 = (function (){var statearr_122825 = state_122817;
(statearr_122825[(9)] = inst_122804__$1);

return statearr_122825;
})();
if(inst_122805){
var statearr_122826_122844 = state_122817__$1;
(statearr_122826_122844[(1)] = (8));

} else {
var statearr_122827_122845 = state_122817__$1;
(statearr_122827_122845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122818 === (3))){
var inst_122815 = (state_122817[(2)]);
var state_122817__$1 = state_122817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_122817__$1,inst_122815);
} else {
if((state_val_122818 === (2))){
var state_122817__$1 = state_122817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_122817__$1,(4),ch);
} else {
if((state_val_122818 === (9))){
var inst_122804 = (state_122817[(9)]);
var inst_122797 = inst_122804;
var state_122817__$1 = (function (){var statearr_122828 = state_122817;
(statearr_122828[(7)] = inst_122797);

return statearr_122828;
})();
var statearr_122829_122846 = state_122817__$1;
(statearr_122829_122846[(2)] = null);

(statearr_122829_122846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122818 === (5))){
var inst_122797 = (state_122817[(7)]);
var state_122817__$1 = state_122817;
var statearr_122830_122847 = state_122817__$1;
(statearr_122830_122847[(2)] = inst_122797);

(statearr_122830_122847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122818 === (10))){
var inst_122811 = (state_122817[(2)]);
var state_122817__$1 = state_122817;
var statearr_122831_122848 = state_122817__$1;
(statearr_122831_122848[(2)] = inst_122811);

(statearr_122831_122848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122818 === (8))){
var inst_122804 = (state_122817[(9)]);
var inst_122807 = cljs.core.deref.call(null,inst_122804);
var state_122817__$1 = state_122817;
var statearr_122832_122849 = state_122817__$1;
(statearr_122832_122849[(2)] = inst_122807);

(statearr_122832_122849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto__))
;
return ((function (switch__28225__auto__,c__28337__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28226__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28226__auto____0 = (function (){
var statearr_122836 = [null,null,null,null,null,null,null,null,null,null];
(statearr_122836[(0)] = cljs$core$async$reduce_$_state_machine__28226__auto__);

(statearr_122836[(1)] = (1));

return statearr_122836;
});
var cljs$core$async$reduce_$_state_machine__28226__auto____1 = (function (state_122817){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_122817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e122837){if((e122837 instanceof Object)){
var ex__28229__auto__ = e122837;
var statearr_122838_122850 = state_122817;
(statearr_122838_122850[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_122817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122851 = state_122817;
state_122817 = G__122851;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28226__auto__ = function(state_122817){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28226__auto____1.call(this,state_122817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28226__auto____0;
cljs$core$async$reduce_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28226__auto____1;
return cljs$core$async$reduce_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto__))
})();
var state__28339__auto__ = (function (){var statearr_122839 = f__28338__auto__.call(null);
(statearr_122839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto__);

return statearr_122839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto__))
);

return c__28337__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args122852 = [];
var len__26200__auto___122904 = arguments.length;
var i__26201__auto___122905 = (0);
while(true){
if((i__26201__auto___122905 < len__26200__auto___122904)){
args122852.push((arguments[i__26201__auto___122905]));

var G__122906 = (i__26201__auto___122905 + (1));
i__26201__auto___122905 = G__122906;
continue;
} else {
}
break;
}

var G__122854 = args122852.length;
switch (G__122854) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args122852.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto__){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto__){
return (function (state_122879){
var state_val_122880 = (state_122879[(1)]);
if((state_val_122880 === (7))){
var inst_122861 = (state_122879[(2)]);
var state_122879__$1 = state_122879;
var statearr_122881_122908 = state_122879__$1;
(statearr_122881_122908[(2)] = inst_122861);

(statearr_122881_122908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122880 === (1))){
var inst_122855 = cljs.core.seq.call(null,coll);
var inst_122856 = inst_122855;
var state_122879__$1 = (function (){var statearr_122882 = state_122879;
(statearr_122882[(7)] = inst_122856);

return statearr_122882;
})();
var statearr_122883_122909 = state_122879__$1;
(statearr_122883_122909[(2)] = null);

(statearr_122883_122909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122880 === (4))){
var inst_122856 = (state_122879[(7)]);
var inst_122859 = cljs.core.first.call(null,inst_122856);
var state_122879__$1 = state_122879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_122879__$1,(7),ch,inst_122859);
} else {
if((state_val_122880 === (13))){
var inst_122873 = (state_122879[(2)]);
var state_122879__$1 = state_122879;
var statearr_122884_122910 = state_122879__$1;
(statearr_122884_122910[(2)] = inst_122873);

(statearr_122884_122910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122880 === (6))){
var inst_122864 = (state_122879[(2)]);
var state_122879__$1 = state_122879;
if(cljs.core.truth_(inst_122864)){
var statearr_122885_122911 = state_122879__$1;
(statearr_122885_122911[(1)] = (8));

} else {
var statearr_122886_122912 = state_122879__$1;
(statearr_122886_122912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122880 === (3))){
var inst_122877 = (state_122879[(2)]);
var state_122879__$1 = state_122879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_122879__$1,inst_122877);
} else {
if((state_val_122880 === (12))){
var state_122879__$1 = state_122879;
var statearr_122887_122913 = state_122879__$1;
(statearr_122887_122913[(2)] = null);

(statearr_122887_122913[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122880 === (2))){
var inst_122856 = (state_122879[(7)]);
var state_122879__$1 = state_122879;
if(cljs.core.truth_(inst_122856)){
var statearr_122888_122914 = state_122879__$1;
(statearr_122888_122914[(1)] = (4));

} else {
var statearr_122889_122915 = state_122879__$1;
(statearr_122889_122915[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122880 === (11))){
var inst_122870 = cljs.core.async.close_BANG_.call(null,ch);
var state_122879__$1 = state_122879;
var statearr_122890_122916 = state_122879__$1;
(statearr_122890_122916[(2)] = inst_122870);

(statearr_122890_122916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122880 === (9))){
var state_122879__$1 = state_122879;
if(cljs.core.truth_(close_QMARK_)){
var statearr_122891_122917 = state_122879__$1;
(statearr_122891_122917[(1)] = (11));

} else {
var statearr_122892_122918 = state_122879__$1;
(statearr_122892_122918[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122880 === (5))){
var inst_122856 = (state_122879[(7)]);
var state_122879__$1 = state_122879;
var statearr_122893_122919 = state_122879__$1;
(statearr_122893_122919[(2)] = inst_122856);

(statearr_122893_122919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122880 === (10))){
var inst_122875 = (state_122879[(2)]);
var state_122879__$1 = state_122879;
var statearr_122894_122920 = state_122879__$1;
(statearr_122894_122920[(2)] = inst_122875);

(statearr_122894_122920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122880 === (8))){
var inst_122856 = (state_122879[(7)]);
var inst_122866 = cljs.core.next.call(null,inst_122856);
var inst_122856__$1 = inst_122866;
var state_122879__$1 = (function (){var statearr_122895 = state_122879;
(statearr_122895[(7)] = inst_122856__$1);

return statearr_122895;
})();
var statearr_122896_122921 = state_122879__$1;
(statearr_122896_122921[(2)] = null);

(statearr_122896_122921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto__))
;
return ((function (switch__28225__auto__,c__28337__auto__){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_122900 = [null,null,null,null,null,null,null,null];
(statearr_122900[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_122900[(1)] = (1));

return statearr_122900;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_122879){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_122879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e122901){if((e122901 instanceof Object)){
var ex__28229__auto__ = e122901;
var statearr_122902_122922 = state_122879;
(statearr_122902_122922[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_122879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122923 = state_122879;
state_122879 = G__122923;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_122879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_122879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto__))
})();
var state__28339__auto__ = (function (){var statearr_122903 = f__28338__auto__.call(null);
(statearr_122903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto__);

return statearr_122903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto__))
);

return c__28337__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25788__auto__ = (((_ == null))?null:_);
var m__25789__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,_);
} else {
var m__25789__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25788__auto__ = (((m == null))?null:m);
var m__25789__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25789__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25788__auto__ = (((m == null))?null:m);
var m__25789__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,m,ch);
} else {
var m__25789__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25788__auto__ = (((m == null))?null:m);
var m__25789__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,m);
} else {
var m__25789__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async123149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async123149 = (function (mult,ch,cs,meta123150){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta123150 = meta123150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async123149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_123151,meta123150__$1){
var self__ = this;
var _123151__$1 = this;
return (new cljs.core.async.t_cljs$core$async123149(self__.mult,self__.ch,self__.cs,meta123150__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async123149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_123151){
var self__ = this;
var _123151__$1 = this;
return self__.meta123150;
});})(cs))
;

cljs.core.async.t_cljs$core$async123149.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async123149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async123149.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async123149.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async123149.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async123149.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async123149.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta123150","meta123150",-212755402,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async123149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async123149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async123149";

cljs.core.async.t_cljs$core$async123149.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cljs.core.async/t_cljs$core$async123149");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async123149 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async123149(mult__$1,ch__$1,cs__$1,meta123150){
return (new cljs.core.async.t_cljs$core$async123149(mult__$1,ch__$1,cs__$1,meta123150));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async123149(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28337__auto___123374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___123374,cs,m,dchan,dctr,done){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___123374,cs,m,dchan,dctr,done){
return (function (state_123286){
var state_val_123287 = (state_123286[(1)]);
if((state_val_123287 === (7))){
var inst_123282 = (state_123286[(2)]);
var state_123286__$1 = state_123286;
var statearr_123288_123375 = state_123286__$1;
(statearr_123288_123375[(2)] = inst_123282);

(statearr_123288_123375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (20))){
var inst_123185 = (state_123286[(7)]);
var inst_123197 = cljs.core.first.call(null,inst_123185);
var inst_123198 = cljs.core.nth.call(null,inst_123197,(0),null);
var inst_123199 = cljs.core.nth.call(null,inst_123197,(1),null);
var state_123286__$1 = (function (){var statearr_123289 = state_123286;
(statearr_123289[(8)] = inst_123198);

return statearr_123289;
})();
if(cljs.core.truth_(inst_123199)){
var statearr_123290_123376 = state_123286__$1;
(statearr_123290_123376[(1)] = (22));

} else {
var statearr_123291_123377 = state_123286__$1;
(statearr_123291_123377[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (27))){
var inst_123229 = (state_123286[(9)]);
var inst_123234 = (state_123286[(10)]);
var inst_123227 = (state_123286[(11)]);
var inst_123154 = (state_123286[(12)]);
var inst_123234__$1 = cljs.core._nth.call(null,inst_123227,inst_123229);
var inst_123235 = cljs.core.async.put_BANG_.call(null,inst_123234__$1,inst_123154,done);
var state_123286__$1 = (function (){var statearr_123292 = state_123286;
(statearr_123292[(10)] = inst_123234__$1);

return statearr_123292;
})();
if(cljs.core.truth_(inst_123235)){
var statearr_123293_123378 = state_123286__$1;
(statearr_123293_123378[(1)] = (30));

} else {
var statearr_123294_123379 = state_123286__$1;
(statearr_123294_123379[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (1))){
var state_123286__$1 = state_123286;
var statearr_123295_123380 = state_123286__$1;
(statearr_123295_123380[(2)] = null);

(statearr_123295_123380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (24))){
var inst_123185 = (state_123286[(7)]);
var inst_123204 = (state_123286[(2)]);
var inst_123205 = cljs.core.next.call(null,inst_123185);
var inst_123163 = inst_123205;
var inst_123164 = null;
var inst_123165 = (0);
var inst_123166 = (0);
var state_123286__$1 = (function (){var statearr_123296 = state_123286;
(statearr_123296[(13)] = inst_123165);

(statearr_123296[(14)] = inst_123163);

(statearr_123296[(15)] = inst_123164);

(statearr_123296[(16)] = inst_123204);

(statearr_123296[(17)] = inst_123166);

return statearr_123296;
})();
var statearr_123297_123381 = state_123286__$1;
(statearr_123297_123381[(2)] = null);

(statearr_123297_123381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (39))){
var state_123286__$1 = state_123286;
var statearr_123301_123382 = state_123286__$1;
(statearr_123301_123382[(2)] = null);

(statearr_123301_123382[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (4))){
var inst_123154 = (state_123286[(12)]);
var inst_123154__$1 = (state_123286[(2)]);
var inst_123155 = (inst_123154__$1 == null);
var state_123286__$1 = (function (){var statearr_123302 = state_123286;
(statearr_123302[(12)] = inst_123154__$1);

return statearr_123302;
})();
if(cljs.core.truth_(inst_123155)){
var statearr_123303_123383 = state_123286__$1;
(statearr_123303_123383[(1)] = (5));

} else {
var statearr_123304_123384 = state_123286__$1;
(statearr_123304_123384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (15))){
var inst_123165 = (state_123286[(13)]);
var inst_123163 = (state_123286[(14)]);
var inst_123164 = (state_123286[(15)]);
var inst_123166 = (state_123286[(17)]);
var inst_123181 = (state_123286[(2)]);
var inst_123182 = (inst_123166 + (1));
var tmp123298 = inst_123165;
var tmp123299 = inst_123163;
var tmp123300 = inst_123164;
var inst_123163__$1 = tmp123299;
var inst_123164__$1 = tmp123300;
var inst_123165__$1 = tmp123298;
var inst_123166__$1 = inst_123182;
var state_123286__$1 = (function (){var statearr_123305 = state_123286;
(statearr_123305[(13)] = inst_123165__$1);

(statearr_123305[(14)] = inst_123163__$1);

(statearr_123305[(15)] = inst_123164__$1);

(statearr_123305[(18)] = inst_123181);

(statearr_123305[(17)] = inst_123166__$1);

return statearr_123305;
})();
var statearr_123306_123385 = state_123286__$1;
(statearr_123306_123385[(2)] = null);

(statearr_123306_123385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (21))){
var inst_123208 = (state_123286[(2)]);
var state_123286__$1 = state_123286;
var statearr_123310_123386 = state_123286__$1;
(statearr_123310_123386[(2)] = inst_123208);

(statearr_123310_123386[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (31))){
var inst_123234 = (state_123286[(10)]);
var inst_123238 = done.call(null,null);
var inst_123239 = cljs.core.async.untap_STAR_.call(null,m,inst_123234);
var state_123286__$1 = (function (){var statearr_123311 = state_123286;
(statearr_123311[(19)] = inst_123238);

return statearr_123311;
})();
var statearr_123312_123387 = state_123286__$1;
(statearr_123312_123387[(2)] = inst_123239);

(statearr_123312_123387[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (32))){
var inst_123228 = (state_123286[(20)]);
var inst_123226 = (state_123286[(21)]);
var inst_123229 = (state_123286[(9)]);
var inst_123227 = (state_123286[(11)]);
var inst_123241 = (state_123286[(2)]);
var inst_123242 = (inst_123229 + (1));
var tmp123307 = inst_123228;
var tmp123308 = inst_123226;
var tmp123309 = inst_123227;
var inst_123226__$1 = tmp123308;
var inst_123227__$1 = tmp123309;
var inst_123228__$1 = tmp123307;
var inst_123229__$1 = inst_123242;
var state_123286__$1 = (function (){var statearr_123313 = state_123286;
(statearr_123313[(20)] = inst_123228__$1);

(statearr_123313[(21)] = inst_123226__$1);

(statearr_123313[(9)] = inst_123229__$1);

(statearr_123313[(11)] = inst_123227__$1);

(statearr_123313[(22)] = inst_123241);

return statearr_123313;
})();
var statearr_123314_123388 = state_123286__$1;
(statearr_123314_123388[(2)] = null);

(statearr_123314_123388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (40))){
var inst_123254 = (state_123286[(23)]);
var inst_123258 = done.call(null,null);
var inst_123259 = cljs.core.async.untap_STAR_.call(null,m,inst_123254);
var state_123286__$1 = (function (){var statearr_123315 = state_123286;
(statearr_123315[(24)] = inst_123258);

return statearr_123315;
})();
var statearr_123316_123389 = state_123286__$1;
(statearr_123316_123389[(2)] = inst_123259);

(statearr_123316_123389[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (33))){
var inst_123245 = (state_123286[(25)]);
var inst_123247 = cljs.core.chunked_seq_QMARK_.call(null,inst_123245);
var state_123286__$1 = state_123286;
if(inst_123247){
var statearr_123317_123390 = state_123286__$1;
(statearr_123317_123390[(1)] = (36));

} else {
var statearr_123318_123391 = state_123286__$1;
(statearr_123318_123391[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (13))){
var inst_123175 = (state_123286[(26)]);
var inst_123178 = cljs.core.async.close_BANG_.call(null,inst_123175);
var state_123286__$1 = state_123286;
var statearr_123319_123392 = state_123286__$1;
(statearr_123319_123392[(2)] = inst_123178);

(statearr_123319_123392[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (22))){
var inst_123198 = (state_123286[(8)]);
var inst_123201 = cljs.core.async.close_BANG_.call(null,inst_123198);
var state_123286__$1 = state_123286;
var statearr_123320_123393 = state_123286__$1;
(statearr_123320_123393[(2)] = inst_123201);

(statearr_123320_123393[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (36))){
var inst_123245 = (state_123286[(25)]);
var inst_123249 = cljs.core.chunk_first.call(null,inst_123245);
var inst_123250 = cljs.core.chunk_rest.call(null,inst_123245);
var inst_123251 = cljs.core.count.call(null,inst_123249);
var inst_123226 = inst_123250;
var inst_123227 = inst_123249;
var inst_123228 = inst_123251;
var inst_123229 = (0);
var state_123286__$1 = (function (){var statearr_123321 = state_123286;
(statearr_123321[(20)] = inst_123228);

(statearr_123321[(21)] = inst_123226);

(statearr_123321[(9)] = inst_123229);

(statearr_123321[(11)] = inst_123227);

return statearr_123321;
})();
var statearr_123322_123394 = state_123286__$1;
(statearr_123322_123394[(2)] = null);

(statearr_123322_123394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (41))){
var inst_123245 = (state_123286[(25)]);
var inst_123261 = (state_123286[(2)]);
var inst_123262 = cljs.core.next.call(null,inst_123245);
var inst_123226 = inst_123262;
var inst_123227 = null;
var inst_123228 = (0);
var inst_123229 = (0);
var state_123286__$1 = (function (){var statearr_123323 = state_123286;
(statearr_123323[(20)] = inst_123228);

(statearr_123323[(21)] = inst_123226);

(statearr_123323[(9)] = inst_123229);

(statearr_123323[(27)] = inst_123261);

(statearr_123323[(11)] = inst_123227);

return statearr_123323;
})();
var statearr_123324_123395 = state_123286__$1;
(statearr_123324_123395[(2)] = null);

(statearr_123324_123395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (43))){
var state_123286__$1 = state_123286;
var statearr_123325_123396 = state_123286__$1;
(statearr_123325_123396[(2)] = null);

(statearr_123325_123396[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (29))){
var inst_123270 = (state_123286[(2)]);
var state_123286__$1 = state_123286;
var statearr_123326_123397 = state_123286__$1;
(statearr_123326_123397[(2)] = inst_123270);

(statearr_123326_123397[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (44))){
var inst_123279 = (state_123286[(2)]);
var state_123286__$1 = (function (){var statearr_123327 = state_123286;
(statearr_123327[(28)] = inst_123279);

return statearr_123327;
})();
var statearr_123328_123398 = state_123286__$1;
(statearr_123328_123398[(2)] = null);

(statearr_123328_123398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (6))){
var inst_123218 = (state_123286[(29)]);
var inst_123217 = cljs.core.deref.call(null,cs);
var inst_123218__$1 = cljs.core.keys.call(null,inst_123217);
var inst_123219 = cljs.core.count.call(null,inst_123218__$1);
var inst_123220 = cljs.core.reset_BANG_.call(null,dctr,inst_123219);
var inst_123225 = cljs.core.seq.call(null,inst_123218__$1);
var inst_123226 = inst_123225;
var inst_123227 = null;
var inst_123228 = (0);
var inst_123229 = (0);
var state_123286__$1 = (function (){var statearr_123329 = state_123286;
(statearr_123329[(20)] = inst_123228);

(statearr_123329[(30)] = inst_123220);

(statearr_123329[(21)] = inst_123226);

(statearr_123329[(9)] = inst_123229);

(statearr_123329[(29)] = inst_123218__$1);

(statearr_123329[(11)] = inst_123227);

return statearr_123329;
})();
var statearr_123330_123399 = state_123286__$1;
(statearr_123330_123399[(2)] = null);

(statearr_123330_123399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (28))){
var inst_123226 = (state_123286[(21)]);
var inst_123245 = (state_123286[(25)]);
var inst_123245__$1 = cljs.core.seq.call(null,inst_123226);
var state_123286__$1 = (function (){var statearr_123331 = state_123286;
(statearr_123331[(25)] = inst_123245__$1);

return statearr_123331;
})();
if(inst_123245__$1){
var statearr_123332_123400 = state_123286__$1;
(statearr_123332_123400[(1)] = (33));

} else {
var statearr_123333_123401 = state_123286__$1;
(statearr_123333_123401[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (25))){
var inst_123228 = (state_123286[(20)]);
var inst_123229 = (state_123286[(9)]);
var inst_123231 = (inst_123229 < inst_123228);
var inst_123232 = inst_123231;
var state_123286__$1 = state_123286;
if(cljs.core.truth_(inst_123232)){
var statearr_123334_123402 = state_123286__$1;
(statearr_123334_123402[(1)] = (27));

} else {
var statearr_123335_123403 = state_123286__$1;
(statearr_123335_123403[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (34))){
var state_123286__$1 = state_123286;
var statearr_123336_123404 = state_123286__$1;
(statearr_123336_123404[(2)] = null);

(statearr_123336_123404[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (17))){
var state_123286__$1 = state_123286;
var statearr_123337_123405 = state_123286__$1;
(statearr_123337_123405[(2)] = null);

(statearr_123337_123405[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (3))){
var inst_123284 = (state_123286[(2)]);
var state_123286__$1 = state_123286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_123286__$1,inst_123284);
} else {
if((state_val_123287 === (12))){
var inst_123213 = (state_123286[(2)]);
var state_123286__$1 = state_123286;
var statearr_123338_123406 = state_123286__$1;
(statearr_123338_123406[(2)] = inst_123213);

(statearr_123338_123406[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (2))){
var state_123286__$1 = state_123286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_123286__$1,(4),ch);
} else {
if((state_val_123287 === (23))){
var state_123286__$1 = state_123286;
var statearr_123339_123407 = state_123286__$1;
(statearr_123339_123407[(2)] = null);

(statearr_123339_123407[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (35))){
var inst_123268 = (state_123286[(2)]);
var state_123286__$1 = state_123286;
var statearr_123340_123408 = state_123286__$1;
(statearr_123340_123408[(2)] = inst_123268);

(statearr_123340_123408[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (19))){
var inst_123185 = (state_123286[(7)]);
var inst_123189 = cljs.core.chunk_first.call(null,inst_123185);
var inst_123190 = cljs.core.chunk_rest.call(null,inst_123185);
var inst_123191 = cljs.core.count.call(null,inst_123189);
var inst_123163 = inst_123190;
var inst_123164 = inst_123189;
var inst_123165 = inst_123191;
var inst_123166 = (0);
var state_123286__$1 = (function (){var statearr_123341 = state_123286;
(statearr_123341[(13)] = inst_123165);

(statearr_123341[(14)] = inst_123163);

(statearr_123341[(15)] = inst_123164);

(statearr_123341[(17)] = inst_123166);

return statearr_123341;
})();
var statearr_123342_123409 = state_123286__$1;
(statearr_123342_123409[(2)] = null);

(statearr_123342_123409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (11))){
var inst_123163 = (state_123286[(14)]);
var inst_123185 = (state_123286[(7)]);
var inst_123185__$1 = cljs.core.seq.call(null,inst_123163);
var state_123286__$1 = (function (){var statearr_123343 = state_123286;
(statearr_123343[(7)] = inst_123185__$1);

return statearr_123343;
})();
if(inst_123185__$1){
var statearr_123344_123410 = state_123286__$1;
(statearr_123344_123410[(1)] = (16));

} else {
var statearr_123345_123411 = state_123286__$1;
(statearr_123345_123411[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (9))){
var inst_123215 = (state_123286[(2)]);
var state_123286__$1 = state_123286;
var statearr_123346_123412 = state_123286__$1;
(statearr_123346_123412[(2)] = inst_123215);

(statearr_123346_123412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (5))){
var inst_123161 = cljs.core.deref.call(null,cs);
var inst_123162 = cljs.core.seq.call(null,inst_123161);
var inst_123163 = inst_123162;
var inst_123164 = null;
var inst_123165 = (0);
var inst_123166 = (0);
var state_123286__$1 = (function (){var statearr_123347 = state_123286;
(statearr_123347[(13)] = inst_123165);

(statearr_123347[(14)] = inst_123163);

(statearr_123347[(15)] = inst_123164);

(statearr_123347[(17)] = inst_123166);

return statearr_123347;
})();
var statearr_123348_123413 = state_123286__$1;
(statearr_123348_123413[(2)] = null);

(statearr_123348_123413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (14))){
var state_123286__$1 = state_123286;
var statearr_123349_123414 = state_123286__$1;
(statearr_123349_123414[(2)] = null);

(statearr_123349_123414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (45))){
var inst_123276 = (state_123286[(2)]);
var state_123286__$1 = state_123286;
var statearr_123350_123415 = state_123286__$1;
(statearr_123350_123415[(2)] = inst_123276);

(statearr_123350_123415[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (26))){
var inst_123218 = (state_123286[(29)]);
var inst_123272 = (state_123286[(2)]);
var inst_123273 = cljs.core.seq.call(null,inst_123218);
var state_123286__$1 = (function (){var statearr_123351 = state_123286;
(statearr_123351[(31)] = inst_123272);

return statearr_123351;
})();
if(inst_123273){
var statearr_123352_123416 = state_123286__$1;
(statearr_123352_123416[(1)] = (42));

} else {
var statearr_123353_123417 = state_123286__$1;
(statearr_123353_123417[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (16))){
var inst_123185 = (state_123286[(7)]);
var inst_123187 = cljs.core.chunked_seq_QMARK_.call(null,inst_123185);
var state_123286__$1 = state_123286;
if(inst_123187){
var statearr_123354_123418 = state_123286__$1;
(statearr_123354_123418[(1)] = (19));

} else {
var statearr_123355_123419 = state_123286__$1;
(statearr_123355_123419[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (38))){
var inst_123265 = (state_123286[(2)]);
var state_123286__$1 = state_123286;
var statearr_123356_123420 = state_123286__$1;
(statearr_123356_123420[(2)] = inst_123265);

(statearr_123356_123420[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (30))){
var state_123286__$1 = state_123286;
var statearr_123357_123421 = state_123286__$1;
(statearr_123357_123421[(2)] = null);

(statearr_123357_123421[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (10))){
var inst_123164 = (state_123286[(15)]);
var inst_123166 = (state_123286[(17)]);
var inst_123174 = cljs.core._nth.call(null,inst_123164,inst_123166);
var inst_123175 = cljs.core.nth.call(null,inst_123174,(0),null);
var inst_123176 = cljs.core.nth.call(null,inst_123174,(1),null);
var state_123286__$1 = (function (){var statearr_123358 = state_123286;
(statearr_123358[(26)] = inst_123175);

return statearr_123358;
})();
if(cljs.core.truth_(inst_123176)){
var statearr_123359_123422 = state_123286__$1;
(statearr_123359_123422[(1)] = (13));

} else {
var statearr_123360_123423 = state_123286__$1;
(statearr_123360_123423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (18))){
var inst_123211 = (state_123286[(2)]);
var state_123286__$1 = state_123286;
var statearr_123361_123424 = state_123286__$1;
(statearr_123361_123424[(2)] = inst_123211);

(statearr_123361_123424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (42))){
var state_123286__$1 = state_123286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_123286__$1,(45),dchan);
} else {
if((state_val_123287 === (37))){
var inst_123254 = (state_123286[(23)]);
var inst_123154 = (state_123286[(12)]);
var inst_123245 = (state_123286[(25)]);
var inst_123254__$1 = cljs.core.first.call(null,inst_123245);
var inst_123255 = cljs.core.async.put_BANG_.call(null,inst_123254__$1,inst_123154,done);
var state_123286__$1 = (function (){var statearr_123362 = state_123286;
(statearr_123362[(23)] = inst_123254__$1);

return statearr_123362;
})();
if(cljs.core.truth_(inst_123255)){
var statearr_123363_123425 = state_123286__$1;
(statearr_123363_123425[(1)] = (39));

} else {
var statearr_123364_123426 = state_123286__$1;
(statearr_123364_123426[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123287 === (8))){
var inst_123165 = (state_123286[(13)]);
var inst_123166 = (state_123286[(17)]);
var inst_123168 = (inst_123166 < inst_123165);
var inst_123169 = inst_123168;
var state_123286__$1 = state_123286;
if(cljs.core.truth_(inst_123169)){
var statearr_123365_123427 = state_123286__$1;
(statearr_123365_123427[(1)] = (10));

} else {
var statearr_123366_123428 = state_123286__$1;
(statearr_123366_123428[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto___123374,cs,m,dchan,dctr,done))
;
return ((function (switch__28225__auto__,c__28337__auto___123374,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28226__auto__ = null;
var cljs$core$async$mult_$_state_machine__28226__auto____0 = (function (){
var statearr_123370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_123370[(0)] = cljs$core$async$mult_$_state_machine__28226__auto__);

(statearr_123370[(1)] = (1));

return statearr_123370;
});
var cljs$core$async$mult_$_state_machine__28226__auto____1 = (function (state_123286){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_123286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e123371){if((e123371 instanceof Object)){
var ex__28229__auto__ = e123371;
var statearr_123372_123429 = state_123286;
(statearr_123372_123429[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_123286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e123371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123430 = state_123286;
state_123286 = G__123430;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28226__auto__ = function(state_123286){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28226__auto____1.call(this,state_123286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28226__auto____0;
cljs$core$async$mult_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28226__auto____1;
return cljs$core$async$mult_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___123374,cs,m,dchan,dctr,done))
})();
var state__28339__auto__ = (function (){var statearr_123373 = f__28338__auto__.call(null);
(statearr_123373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___123374);

return statearr_123373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___123374,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args123431 = [];
var len__26200__auto___123434 = arguments.length;
var i__26201__auto___123435 = (0);
while(true){
if((i__26201__auto___123435 < len__26200__auto___123434)){
args123431.push((arguments[i__26201__auto___123435]));

var G__123436 = (i__26201__auto___123435 + (1));
i__26201__auto___123435 = G__123436;
continue;
} else {
}
break;
}

var G__123433 = args123431.length;
switch (G__123433) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args123431.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25788__auto__ = (((m == null))?null:m);
var m__25789__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,m,ch);
} else {
var m__25789__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25788__auto__ = (((m == null))?null:m);
var m__25789__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,m,ch);
} else {
var m__25789__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25788__auto__ = (((m == null))?null:m);
var m__25789__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,m);
} else {
var m__25789__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25788__auto__ = (((m == null))?null:m);
var m__25789__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,m,state_map);
} else {
var m__25789__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25788__auto__ = (((m == null))?null:m);
var m__25789__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,m,mode);
} else {
var m__25789__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26207__auto__ = [];
var len__26200__auto___123448 = arguments.length;
var i__26201__auto___123449 = (0);
while(true){
if((i__26201__auto___123449 < len__26200__auto___123448)){
args__26207__auto__.push((arguments[i__26201__auto___123449]));

var G__123450 = (i__26201__auto___123449 + (1));
i__26201__auto___123449 = G__123450;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__123442){
var map__123443 = p__123442;
var map__123443__$1 = ((((!((map__123443 == null)))?((((map__123443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__123443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__123443):map__123443);
var opts = map__123443__$1;
var statearr_123445_123451 = state;
(statearr_123445_123451[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__123443,map__123443__$1,opts){
return (function (val){
var statearr_123446_123452 = state;
(statearr_123446_123452[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__123443,map__123443__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_123447_123453 = state;
(statearr_123447_123453[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq123438){
var G__123439 = cljs.core.first.call(null,seq123438);
var seq123438__$1 = cljs.core.next.call(null,seq123438);
var G__123440 = cljs.core.first.call(null,seq123438__$1);
var seq123438__$2 = cljs.core.next.call(null,seq123438__$1);
var G__123441 = cljs.core.first.call(null,seq123438__$2);
var seq123438__$3 = cljs.core.next.call(null,seq123438__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__123439,G__123440,G__123441,seq123438__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async123619 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async123619 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta123620){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta123620 = meta123620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async123619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_123621,meta123620__$1){
var self__ = this;
var _123621__$1 = this;
return (new cljs.core.async.t_cljs$core$async123619(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta123620__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async123619.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_123621){
var self__ = this;
var _123621__$1 = this;
return self__.meta123620;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async123619.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async123619.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async123619.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async123619.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async123619.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async123619.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async123619.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async123619.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async123619.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta123620","meta123620",1350403235,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async123619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async123619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async123619";

cljs.core.async.t_cljs$core$async123619.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cljs.core.async/t_cljs$core$async123619");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async123619 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async123619(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta123620){
return (new cljs.core.async.t_cljs$core$async123619(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta123620));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async123619(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28337__auto___123784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___123784,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___123784,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_123721){
var state_val_123722 = (state_123721[(1)]);
if((state_val_123722 === (7))){
var inst_123637 = (state_123721[(2)]);
var state_123721__$1 = state_123721;
var statearr_123723_123785 = state_123721__$1;
(statearr_123723_123785[(2)] = inst_123637);

(statearr_123723_123785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (20))){
var inst_123649 = (state_123721[(7)]);
var state_123721__$1 = state_123721;
var statearr_123724_123786 = state_123721__$1;
(statearr_123724_123786[(2)] = inst_123649);

(statearr_123724_123786[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (27))){
var state_123721__$1 = state_123721;
var statearr_123725_123787 = state_123721__$1;
(statearr_123725_123787[(2)] = null);

(statearr_123725_123787[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (1))){
var inst_123625 = (state_123721[(8)]);
var inst_123625__$1 = calc_state.call(null);
var inst_123627 = (inst_123625__$1 == null);
var inst_123628 = cljs.core.not.call(null,inst_123627);
var state_123721__$1 = (function (){var statearr_123726 = state_123721;
(statearr_123726[(8)] = inst_123625__$1);

return statearr_123726;
})();
if(inst_123628){
var statearr_123727_123788 = state_123721__$1;
(statearr_123727_123788[(1)] = (2));

} else {
var statearr_123728_123789 = state_123721__$1;
(statearr_123728_123789[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (24))){
var inst_123695 = (state_123721[(9)]);
var inst_123681 = (state_123721[(10)]);
var inst_123672 = (state_123721[(11)]);
var inst_123695__$1 = inst_123672.call(null,inst_123681);
var state_123721__$1 = (function (){var statearr_123729 = state_123721;
(statearr_123729[(9)] = inst_123695__$1);

return statearr_123729;
})();
if(cljs.core.truth_(inst_123695__$1)){
var statearr_123730_123790 = state_123721__$1;
(statearr_123730_123790[(1)] = (29));

} else {
var statearr_123731_123791 = state_123721__$1;
(statearr_123731_123791[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (4))){
var inst_123640 = (state_123721[(2)]);
var state_123721__$1 = state_123721;
if(cljs.core.truth_(inst_123640)){
var statearr_123732_123792 = state_123721__$1;
(statearr_123732_123792[(1)] = (8));

} else {
var statearr_123733_123793 = state_123721__$1;
(statearr_123733_123793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (15))){
var inst_123666 = (state_123721[(2)]);
var state_123721__$1 = state_123721;
if(cljs.core.truth_(inst_123666)){
var statearr_123734_123794 = state_123721__$1;
(statearr_123734_123794[(1)] = (19));

} else {
var statearr_123735_123795 = state_123721__$1;
(statearr_123735_123795[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (21))){
var inst_123671 = (state_123721[(12)]);
var inst_123671__$1 = (state_123721[(2)]);
var inst_123672 = cljs.core.get.call(null,inst_123671__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_123673 = cljs.core.get.call(null,inst_123671__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_123674 = cljs.core.get.call(null,inst_123671__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_123721__$1 = (function (){var statearr_123736 = state_123721;
(statearr_123736[(12)] = inst_123671__$1);

(statearr_123736[(13)] = inst_123673);

(statearr_123736[(11)] = inst_123672);

return statearr_123736;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_123721__$1,(22),inst_123674);
} else {
if((state_val_123722 === (31))){
var inst_123703 = (state_123721[(2)]);
var state_123721__$1 = state_123721;
if(cljs.core.truth_(inst_123703)){
var statearr_123737_123796 = state_123721__$1;
(statearr_123737_123796[(1)] = (32));

} else {
var statearr_123738_123797 = state_123721__$1;
(statearr_123738_123797[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (32))){
var inst_123680 = (state_123721[(14)]);
var state_123721__$1 = state_123721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_123721__$1,(35),out,inst_123680);
} else {
if((state_val_123722 === (33))){
var inst_123671 = (state_123721[(12)]);
var inst_123649 = inst_123671;
var state_123721__$1 = (function (){var statearr_123739 = state_123721;
(statearr_123739[(7)] = inst_123649);

return statearr_123739;
})();
var statearr_123740_123798 = state_123721__$1;
(statearr_123740_123798[(2)] = null);

(statearr_123740_123798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (13))){
var inst_123649 = (state_123721[(7)]);
var inst_123656 = inst_123649.cljs$lang$protocol_mask$partition0$;
var inst_123657 = (inst_123656 & (64));
var inst_123658 = inst_123649.cljs$core$ISeq$;
var inst_123659 = (inst_123657) || (inst_123658);
var state_123721__$1 = state_123721;
if(cljs.core.truth_(inst_123659)){
var statearr_123741_123799 = state_123721__$1;
(statearr_123741_123799[(1)] = (16));

} else {
var statearr_123742_123800 = state_123721__$1;
(statearr_123742_123800[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (22))){
var inst_123680 = (state_123721[(14)]);
var inst_123681 = (state_123721[(10)]);
var inst_123679 = (state_123721[(2)]);
var inst_123680__$1 = cljs.core.nth.call(null,inst_123679,(0),null);
var inst_123681__$1 = cljs.core.nth.call(null,inst_123679,(1),null);
var inst_123682 = (inst_123680__$1 == null);
var inst_123683 = cljs.core._EQ_.call(null,inst_123681__$1,change);
var inst_123684 = (inst_123682) || (inst_123683);
var state_123721__$1 = (function (){var statearr_123743 = state_123721;
(statearr_123743[(14)] = inst_123680__$1);

(statearr_123743[(10)] = inst_123681__$1);

return statearr_123743;
})();
if(cljs.core.truth_(inst_123684)){
var statearr_123744_123801 = state_123721__$1;
(statearr_123744_123801[(1)] = (23));

} else {
var statearr_123745_123802 = state_123721__$1;
(statearr_123745_123802[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (36))){
var inst_123671 = (state_123721[(12)]);
var inst_123649 = inst_123671;
var state_123721__$1 = (function (){var statearr_123746 = state_123721;
(statearr_123746[(7)] = inst_123649);

return statearr_123746;
})();
var statearr_123747_123803 = state_123721__$1;
(statearr_123747_123803[(2)] = null);

(statearr_123747_123803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (29))){
var inst_123695 = (state_123721[(9)]);
var state_123721__$1 = state_123721;
var statearr_123748_123804 = state_123721__$1;
(statearr_123748_123804[(2)] = inst_123695);

(statearr_123748_123804[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (6))){
var state_123721__$1 = state_123721;
var statearr_123749_123805 = state_123721__$1;
(statearr_123749_123805[(2)] = false);

(statearr_123749_123805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (28))){
var inst_123691 = (state_123721[(2)]);
var inst_123692 = calc_state.call(null);
var inst_123649 = inst_123692;
var state_123721__$1 = (function (){var statearr_123750 = state_123721;
(statearr_123750[(15)] = inst_123691);

(statearr_123750[(7)] = inst_123649);

return statearr_123750;
})();
var statearr_123751_123806 = state_123721__$1;
(statearr_123751_123806[(2)] = null);

(statearr_123751_123806[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (25))){
var inst_123717 = (state_123721[(2)]);
var state_123721__$1 = state_123721;
var statearr_123752_123807 = state_123721__$1;
(statearr_123752_123807[(2)] = inst_123717);

(statearr_123752_123807[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (34))){
var inst_123715 = (state_123721[(2)]);
var state_123721__$1 = state_123721;
var statearr_123753_123808 = state_123721__$1;
(statearr_123753_123808[(2)] = inst_123715);

(statearr_123753_123808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (17))){
var state_123721__$1 = state_123721;
var statearr_123754_123809 = state_123721__$1;
(statearr_123754_123809[(2)] = false);

(statearr_123754_123809[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (3))){
var state_123721__$1 = state_123721;
var statearr_123755_123810 = state_123721__$1;
(statearr_123755_123810[(2)] = false);

(statearr_123755_123810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (12))){
var inst_123719 = (state_123721[(2)]);
var state_123721__$1 = state_123721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_123721__$1,inst_123719);
} else {
if((state_val_123722 === (2))){
var inst_123625 = (state_123721[(8)]);
var inst_123630 = inst_123625.cljs$lang$protocol_mask$partition0$;
var inst_123631 = (inst_123630 & (64));
var inst_123632 = inst_123625.cljs$core$ISeq$;
var inst_123633 = (inst_123631) || (inst_123632);
var state_123721__$1 = state_123721;
if(cljs.core.truth_(inst_123633)){
var statearr_123756_123811 = state_123721__$1;
(statearr_123756_123811[(1)] = (5));

} else {
var statearr_123757_123812 = state_123721__$1;
(statearr_123757_123812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (23))){
var inst_123680 = (state_123721[(14)]);
var inst_123686 = (inst_123680 == null);
var state_123721__$1 = state_123721;
if(cljs.core.truth_(inst_123686)){
var statearr_123758_123813 = state_123721__$1;
(statearr_123758_123813[(1)] = (26));

} else {
var statearr_123759_123814 = state_123721__$1;
(statearr_123759_123814[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (35))){
var inst_123706 = (state_123721[(2)]);
var state_123721__$1 = state_123721;
if(cljs.core.truth_(inst_123706)){
var statearr_123760_123815 = state_123721__$1;
(statearr_123760_123815[(1)] = (36));

} else {
var statearr_123761_123816 = state_123721__$1;
(statearr_123761_123816[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (19))){
var inst_123649 = (state_123721[(7)]);
var inst_123668 = cljs.core.apply.call(null,cljs.core.hash_map,inst_123649);
var state_123721__$1 = state_123721;
var statearr_123762_123817 = state_123721__$1;
(statearr_123762_123817[(2)] = inst_123668);

(statearr_123762_123817[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (11))){
var inst_123649 = (state_123721[(7)]);
var inst_123653 = (inst_123649 == null);
var inst_123654 = cljs.core.not.call(null,inst_123653);
var state_123721__$1 = state_123721;
if(inst_123654){
var statearr_123763_123818 = state_123721__$1;
(statearr_123763_123818[(1)] = (13));

} else {
var statearr_123764_123819 = state_123721__$1;
(statearr_123764_123819[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (9))){
var inst_123625 = (state_123721[(8)]);
var state_123721__$1 = state_123721;
var statearr_123765_123820 = state_123721__$1;
(statearr_123765_123820[(2)] = inst_123625);

(statearr_123765_123820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (5))){
var state_123721__$1 = state_123721;
var statearr_123766_123821 = state_123721__$1;
(statearr_123766_123821[(2)] = true);

(statearr_123766_123821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (14))){
var state_123721__$1 = state_123721;
var statearr_123767_123822 = state_123721__$1;
(statearr_123767_123822[(2)] = false);

(statearr_123767_123822[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (26))){
var inst_123681 = (state_123721[(10)]);
var inst_123688 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_123681);
var state_123721__$1 = state_123721;
var statearr_123768_123823 = state_123721__$1;
(statearr_123768_123823[(2)] = inst_123688);

(statearr_123768_123823[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (16))){
var state_123721__$1 = state_123721;
var statearr_123769_123824 = state_123721__$1;
(statearr_123769_123824[(2)] = true);

(statearr_123769_123824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (38))){
var inst_123711 = (state_123721[(2)]);
var state_123721__$1 = state_123721;
var statearr_123770_123825 = state_123721__$1;
(statearr_123770_123825[(2)] = inst_123711);

(statearr_123770_123825[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (30))){
var inst_123673 = (state_123721[(13)]);
var inst_123681 = (state_123721[(10)]);
var inst_123672 = (state_123721[(11)]);
var inst_123698 = cljs.core.empty_QMARK_.call(null,inst_123672);
var inst_123699 = inst_123673.call(null,inst_123681);
var inst_123700 = cljs.core.not.call(null,inst_123699);
var inst_123701 = (inst_123698) && (inst_123700);
var state_123721__$1 = state_123721;
var statearr_123771_123826 = state_123721__$1;
(statearr_123771_123826[(2)] = inst_123701);

(statearr_123771_123826[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (10))){
var inst_123625 = (state_123721[(8)]);
var inst_123645 = (state_123721[(2)]);
var inst_123646 = cljs.core.get.call(null,inst_123645,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_123647 = cljs.core.get.call(null,inst_123645,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_123648 = cljs.core.get.call(null,inst_123645,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_123649 = inst_123625;
var state_123721__$1 = (function (){var statearr_123772 = state_123721;
(statearr_123772[(16)] = inst_123647);

(statearr_123772[(17)] = inst_123646);

(statearr_123772[(18)] = inst_123648);

(statearr_123772[(7)] = inst_123649);

return statearr_123772;
})();
var statearr_123773_123827 = state_123721__$1;
(statearr_123773_123827[(2)] = null);

(statearr_123773_123827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (18))){
var inst_123663 = (state_123721[(2)]);
var state_123721__$1 = state_123721;
var statearr_123774_123828 = state_123721__$1;
(statearr_123774_123828[(2)] = inst_123663);

(statearr_123774_123828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (37))){
var state_123721__$1 = state_123721;
var statearr_123775_123829 = state_123721__$1;
(statearr_123775_123829[(2)] = null);

(statearr_123775_123829[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123722 === (8))){
var inst_123625 = (state_123721[(8)]);
var inst_123642 = cljs.core.apply.call(null,cljs.core.hash_map,inst_123625);
var state_123721__$1 = state_123721;
var statearr_123776_123830 = state_123721__$1;
(statearr_123776_123830[(2)] = inst_123642);

(statearr_123776_123830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto___123784,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28225__auto__,c__28337__auto___123784,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28226__auto__ = null;
var cljs$core$async$mix_$_state_machine__28226__auto____0 = (function (){
var statearr_123780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_123780[(0)] = cljs$core$async$mix_$_state_machine__28226__auto__);

(statearr_123780[(1)] = (1));

return statearr_123780;
});
var cljs$core$async$mix_$_state_machine__28226__auto____1 = (function (state_123721){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_123721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e123781){if((e123781 instanceof Object)){
var ex__28229__auto__ = e123781;
var statearr_123782_123831 = state_123721;
(statearr_123782_123831[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_123721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e123781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123832 = state_123721;
state_123721 = G__123832;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28226__auto__ = function(state_123721){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28226__auto____1.call(this,state_123721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28226__auto____0;
cljs$core$async$mix_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28226__auto____1;
return cljs$core$async$mix_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___123784,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28339__auto__ = (function (){var statearr_123783 = f__28338__auto__.call(null);
(statearr_123783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___123784);

return statearr_123783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___123784,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25788__auto__ = (((p == null))?null:p);
var m__25789__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25789__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25788__auto__ = (((p == null))?null:p);
var m__25789__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,p,v,ch);
} else {
var m__25789__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args123833 = [];
var len__26200__auto___123836 = arguments.length;
var i__26201__auto___123837 = (0);
while(true){
if((i__26201__auto___123837 < len__26200__auto___123836)){
args123833.push((arguments[i__26201__auto___123837]));

var G__123838 = (i__26201__auto___123837 + (1));
i__26201__auto___123837 = G__123838;
continue;
} else {
}
break;
}

var G__123835 = args123833.length;
switch (G__123835) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args123833.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25788__auto__ = (((p == null))?null:p);
var m__25789__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,p);
} else {
var m__25789__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25788__auto__ = (((p == null))?null:p);
var m__25789__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,p,v);
} else {
var m__25789__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args123841 = [];
var len__26200__auto___123966 = arguments.length;
var i__26201__auto___123967 = (0);
while(true){
if((i__26201__auto___123967 < len__26200__auto___123966)){
args123841.push((arguments[i__26201__auto___123967]));

var G__123968 = (i__26201__auto___123967 + (1));
i__26201__auto___123967 = G__123968;
continue;
} else {
}
break;
}

var G__123843 = args123841.length;
switch (G__123843) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args123841.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25125__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25125__auto__,mults){
return (function (p1__123840_SHARP_){
if(cljs.core.truth_(p1__123840_SHARP_.call(null,topic))){
return p1__123840_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__123840_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25125__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async123844 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async123844 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta123845){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta123845 = meta123845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async123844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_123846,meta123845__$1){
var self__ = this;
var _123846__$1 = this;
return (new cljs.core.async.t_cljs$core$async123844(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta123845__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async123844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_123846){
var self__ = this;
var _123846__$1 = this;
return self__.meta123845;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async123844.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async123844.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async123844.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async123844.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async123844.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async123844.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async123844.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async123844.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta123845","meta123845",-575889529,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async123844.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async123844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async123844";

cljs.core.async.t_cljs$core$async123844.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cljs.core.async/t_cljs$core$async123844");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async123844 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async123844(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta123845){
return (new cljs.core.async.t_cljs$core$async123844(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta123845));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async123844(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28337__auto___123970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___123970,mults,ensure_mult,p){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___123970,mults,ensure_mult,p){
return (function (state_123918){
var state_val_123919 = (state_123918[(1)]);
if((state_val_123919 === (7))){
var inst_123914 = (state_123918[(2)]);
var state_123918__$1 = state_123918;
var statearr_123920_123971 = state_123918__$1;
(statearr_123920_123971[(2)] = inst_123914);

(statearr_123920_123971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (20))){
var state_123918__$1 = state_123918;
var statearr_123921_123972 = state_123918__$1;
(statearr_123921_123972[(2)] = null);

(statearr_123921_123972[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (1))){
var state_123918__$1 = state_123918;
var statearr_123922_123973 = state_123918__$1;
(statearr_123922_123973[(2)] = null);

(statearr_123922_123973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (24))){
var inst_123897 = (state_123918[(7)]);
var inst_123906 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_123897);
var state_123918__$1 = state_123918;
var statearr_123923_123974 = state_123918__$1;
(statearr_123923_123974[(2)] = inst_123906);

(statearr_123923_123974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (4))){
var inst_123849 = (state_123918[(8)]);
var inst_123849__$1 = (state_123918[(2)]);
var inst_123850 = (inst_123849__$1 == null);
var state_123918__$1 = (function (){var statearr_123924 = state_123918;
(statearr_123924[(8)] = inst_123849__$1);

return statearr_123924;
})();
if(cljs.core.truth_(inst_123850)){
var statearr_123925_123975 = state_123918__$1;
(statearr_123925_123975[(1)] = (5));

} else {
var statearr_123926_123976 = state_123918__$1;
(statearr_123926_123976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (15))){
var inst_123891 = (state_123918[(2)]);
var state_123918__$1 = state_123918;
var statearr_123927_123977 = state_123918__$1;
(statearr_123927_123977[(2)] = inst_123891);

(statearr_123927_123977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (21))){
var inst_123911 = (state_123918[(2)]);
var state_123918__$1 = (function (){var statearr_123928 = state_123918;
(statearr_123928[(9)] = inst_123911);

return statearr_123928;
})();
var statearr_123929_123978 = state_123918__$1;
(statearr_123929_123978[(2)] = null);

(statearr_123929_123978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (13))){
var inst_123873 = (state_123918[(10)]);
var inst_123875 = cljs.core.chunked_seq_QMARK_.call(null,inst_123873);
var state_123918__$1 = state_123918;
if(inst_123875){
var statearr_123930_123979 = state_123918__$1;
(statearr_123930_123979[(1)] = (16));

} else {
var statearr_123931_123980 = state_123918__$1;
(statearr_123931_123980[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (22))){
var inst_123903 = (state_123918[(2)]);
var state_123918__$1 = state_123918;
if(cljs.core.truth_(inst_123903)){
var statearr_123932_123981 = state_123918__$1;
(statearr_123932_123981[(1)] = (23));

} else {
var statearr_123933_123982 = state_123918__$1;
(statearr_123933_123982[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (6))){
var inst_123899 = (state_123918[(11)]);
var inst_123849 = (state_123918[(8)]);
var inst_123897 = (state_123918[(7)]);
var inst_123897__$1 = topic_fn.call(null,inst_123849);
var inst_123898 = cljs.core.deref.call(null,mults);
var inst_123899__$1 = cljs.core.get.call(null,inst_123898,inst_123897__$1);
var state_123918__$1 = (function (){var statearr_123934 = state_123918;
(statearr_123934[(11)] = inst_123899__$1);

(statearr_123934[(7)] = inst_123897__$1);

return statearr_123934;
})();
if(cljs.core.truth_(inst_123899__$1)){
var statearr_123935_123983 = state_123918__$1;
(statearr_123935_123983[(1)] = (19));

} else {
var statearr_123936_123984 = state_123918__$1;
(statearr_123936_123984[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (25))){
var inst_123908 = (state_123918[(2)]);
var state_123918__$1 = state_123918;
var statearr_123937_123985 = state_123918__$1;
(statearr_123937_123985[(2)] = inst_123908);

(statearr_123937_123985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (17))){
var inst_123873 = (state_123918[(10)]);
var inst_123882 = cljs.core.first.call(null,inst_123873);
var inst_123883 = cljs.core.async.muxch_STAR_.call(null,inst_123882);
var inst_123884 = cljs.core.async.close_BANG_.call(null,inst_123883);
var inst_123885 = cljs.core.next.call(null,inst_123873);
var inst_123859 = inst_123885;
var inst_123860 = null;
var inst_123861 = (0);
var inst_123862 = (0);
var state_123918__$1 = (function (){var statearr_123938 = state_123918;
(statearr_123938[(12)] = inst_123861);

(statearr_123938[(13)] = inst_123859);

(statearr_123938[(14)] = inst_123862);

(statearr_123938[(15)] = inst_123884);

(statearr_123938[(16)] = inst_123860);

return statearr_123938;
})();
var statearr_123939_123986 = state_123918__$1;
(statearr_123939_123986[(2)] = null);

(statearr_123939_123986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (3))){
var inst_123916 = (state_123918[(2)]);
var state_123918__$1 = state_123918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_123918__$1,inst_123916);
} else {
if((state_val_123919 === (12))){
var inst_123893 = (state_123918[(2)]);
var state_123918__$1 = state_123918;
var statearr_123940_123987 = state_123918__$1;
(statearr_123940_123987[(2)] = inst_123893);

(statearr_123940_123987[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (2))){
var state_123918__$1 = state_123918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_123918__$1,(4),ch);
} else {
if((state_val_123919 === (23))){
var state_123918__$1 = state_123918;
var statearr_123941_123988 = state_123918__$1;
(statearr_123941_123988[(2)] = null);

(statearr_123941_123988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (19))){
var inst_123899 = (state_123918[(11)]);
var inst_123849 = (state_123918[(8)]);
var inst_123901 = cljs.core.async.muxch_STAR_.call(null,inst_123899);
var state_123918__$1 = state_123918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_123918__$1,(22),inst_123901,inst_123849);
} else {
if((state_val_123919 === (11))){
var inst_123873 = (state_123918[(10)]);
var inst_123859 = (state_123918[(13)]);
var inst_123873__$1 = cljs.core.seq.call(null,inst_123859);
var state_123918__$1 = (function (){var statearr_123942 = state_123918;
(statearr_123942[(10)] = inst_123873__$1);

return statearr_123942;
})();
if(inst_123873__$1){
var statearr_123943_123989 = state_123918__$1;
(statearr_123943_123989[(1)] = (13));

} else {
var statearr_123944_123990 = state_123918__$1;
(statearr_123944_123990[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (9))){
var inst_123895 = (state_123918[(2)]);
var state_123918__$1 = state_123918;
var statearr_123945_123991 = state_123918__$1;
(statearr_123945_123991[(2)] = inst_123895);

(statearr_123945_123991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (5))){
var inst_123856 = cljs.core.deref.call(null,mults);
var inst_123857 = cljs.core.vals.call(null,inst_123856);
var inst_123858 = cljs.core.seq.call(null,inst_123857);
var inst_123859 = inst_123858;
var inst_123860 = null;
var inst_123861 = (0);
var inst_123862 = (0);
var state_123918__$1 = (function (){var statearr_123946 = state_123918;
(statearr_123946[(12)] = inst_123861);

(statearr_123946[(13)] = inst_123859);

(statearr_123946[(14)] = inst_123862);

(statearr_123946[(16)] = inst_123860);

return statearr_123946;
})();
var statearr_123947_123992 = state_123918__$1;
(statearr_123947_123992[(2)] = null);

(statearr_123947_123992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (14))){
var state_123918__$1 = state_123918;
var statearr_123951_123993 = state_123918__$1;
(statearr_123951_123993[(2)] = null);

(statearr_123951_123993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (16))){
var inst_123873 = (state_123918[(10)]);
var inst_123877 = cljs.core.chunk_first.call(null,inst_123873);
var inst_123878 = cljs.core.chunk_rest.call(null,inst_123873);
var inst_123879 = cljs.core.count.call(null,inst_123877);
var inst_123859 = inst_123878;
var inst_123860 = inst_123877;
var inst_123861 = inst_123879;
var inst_123862 = (0);
var state_123918__$1 = (function (){var statearr_123952 = state_123918;
(statearr_123952[(12)] = inst_123861);

(statearr_123952[(13)] = inst_123859);

(statearr_123952[(14)] = inst_123862);

(statearr_123952[(16)] = inst_123860);

return statearr_123952;
})();
var statearr_123953_123994 = state_123918__$1;
(statearr_123953_123994[(2)] = null);

(statearr_123953_123994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (10))){
var inst_123861 = (state_123918[(12)]);
var inst_123859 = (state_123918[(13)]);
var inst_123862 = (state_123918[(14)]);
var inst_123860 = (state_123918[(16)]);
var inst_123867 = cljs.core._nth.call(null,inst_123860,inst_123862);
var inst_123868 = cljs.core.async.muxch_STAR_.call(null,inst_123867);
var inst_123869 = cljs.core.async.close_BANG_.call(null,inst_123868);
var inst_123870 = (inst_123862 + (1));
var tmp123948 = inst_123861;
var tmp123949 = inst_123859;
var tmp123950 = inst_123860;
var inst_123859__$1 = tmp123949;
var inst_123860__$1 = tmp123950;
var inst_123861__$1 = tmp123948;
var inst_123862__$1 = inst_123870;
var state_123918__$1 = (function (){var statearr_123954 = state_123918;
(statearr_123954[(17)] = inst_123869);

(statearr_123954[(12)] = inst_123861__$1);

(statearr_123954[(13)] = inst_123859__$1);

(statearr_123954[(14)] = inst_123862__$1);

(statearr_123954[(16)] = inst_123860__$1);

return statearr_123954;
})();
var statearr_123955_123995 = state_123918__$1;
(statearr_123955_123995[(2)] = null);

(statearr_123955_123995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (18))){
var inst_123888 = (state_123918[(2)]);
var state_123918__$1 = state_123918;
var statearr_123956_123996 = state_123918__$1;
(statearr_123956_123996[(2)] = inst_123888);

(statearr_123956_123996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123919 === (8))){
var inst_123861 = (state_123918[(12)]);
var inst_123862 = (state_123918[(14)]);
var inst_123864 = (inst_123862 < inst_123861);
var inst_123865 = inst_123864;
var state_123918__$1 = state_123918;
if(cljs.core.truth_(inst_123865)){
var statearr_123957_123997 = state_123918__$1;
(statearr_123957_123997[(1)] = (10));

} else {
var statearr_123958_123998 = state_123918__$1;
(statearr_123958_123998[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto___123970,mults,ensure_mult,p))
;
return ((function (switch__28225__auto__,c__28337__auto___123970,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_123962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_123962[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_123962[(1)] = (1));

return statearr_123962;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_123918){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_123918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e123963){if((e123963 instanceof Object)){
var ex__28229__auto__ = e123963;
var statearr_123964_123999 = state_123918;
(statearr_123964_123999[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_123918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e123963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__124000 = state_123918;
state_123918 = G__124000;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_123918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_123918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___123970,mults,ensure_mult,p))
})();
var state__28339__auto__ = (function (){var statearr_123965 = f__28338__auto__.call(null);
(statearr_123965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___123970);

return statearr_123965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___123970,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args124001 = [];
var len__26200__auto___124004 = arguments.length;
var i__26201__auto___124005 = (0);
while(true){
if((i__26201__auto___124005 < len__26200__auto___124004)){
args124001.push((arguments[i__26201__auto___124005]));

var G__124006 = (i__26201__auto___124005 + (1));
i__26201__auto___124005 = G__124006;
continue;
} else {
}
break;
}

var G__124003 = args124001.length;
switch (G__124003) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args124001.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args124008 = [];
var len__26200__auto___124011 = arguments.length;
var i__26201__auto___124012 = (0);
while(true){
if((i__26201__auto___124012 < len__26200__auto___124011)){
args124008.push((arguments[i__26201__auto___124012]));

var G__124013 = (i__26201__auto___124012 + (1));
i__26201__auto___124012 = G__124013;
continue;
} else {
}
break;
}

var G__124010 = args124008.length;
switch (G__124010) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args124008.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args124015 = [];
var len__26200__auto___124086 = arguments.length;
var i__26201__auto___124087 = (0);
while(true){
if((i__26201__auto___124087 < len__26200__auto___124086)){
args124015.push((arguments[i__26201__auto___124087]));

var G__124088 = (i__26201__auto___124087 + (1));
i__26201__auto___124087 = G__124088;
continue;
} else {
}
break;
}

var G__124017 = args124015.length;
switch (G__124017) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args124015.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28337__auto___124090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___124090,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___124090,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_124056){
var state_val_124057 = (state_124056[(1)]);
if((state_val_124057 === (7))){
var state_124056__$1 = state_124056;
var statearr_124058_124091 = state_124056__$1;
(statearr_124058_124091[(2)] = null);

(statearr_124058_124091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124057 === (1))){
var state_124056__$1 = state_124056;
var statearr_124059_124092 = state_124056__$1;
(statearr_124059_124092[(2)] = null);

(statearr_124059_124092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124057 === (4))){
var inst_124020 = (state_124056[(7)]);
var inst_124022 = (inst_124020 < cnt);
var state_124056__$1 = state_124056;
if(cljs.core.truth_(inst_124022)){
var statearr_124060_124093 = state_124056__$1;
(statearr_124060_124093[(1)] = (6));

} else {
var statearr_124061_124094 = state_124056__$1;
(statearr_124061_124094[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124057 === (15))){
var inst_124052 = (state_124056[(2)]);
var state_124056__$1 = state_124056;
var statearr_124062_124095 = state_124056__$1;
(statearr_124062_124095[(2)] = inst_124052);

(statearr_124062_124095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124057 === (13))){
var inst_124045 = cljs.core.async.close_BANG_.call(null,out);
var state_124056__$1 = state_124056;
var statearr_124063_124096 = state_124056__$1;
(statearr_124063_124096[(2)] = inst_124045);

(statearr_124063_124096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124057 === (6))){
var state_124056__$1 = state_124056;
var statearr_124064_124097 = state_124056__$1;
(statearr_124064_124097[(2)] = null);

(statearr_124064_124097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124057 === (3))){
var inst_124054 = (state_124056[(2)]);
var state_124056__$1 = state_124056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_124056__$1,inst_124054);
} else {
if((state_val_124057 === (12))){
var inst_124042 = (state_124056[(8)]);
var inst_124042__$1 = (state_124056[(2)]);
var inst_124043 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_124042__$1);
var state_124056__$1 = (function (){var statearr_124065 = state_124056;
(statearr_124065[(8)] = inst_124042__$1);

return statearr_124065;
})();
if(cljs.core.truth_(inst_124043)){
var statearr_124066_124098 = state_124056__$1;
(statearr_124066_124098[(1)] = (13));

} else {
var statearr_124067_124099 = state_124056__$1;
(statearr_124067_124099[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124057 === (2))){
var inst_124019 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_124020 = (0);
var state_124056__$1 = (function (){var statearr_124068 = state_124056;
(statearr_124068[(9)] = inst_124019);

(statearr_124068[(7)] = inst_124020);

return statearr_124068;
})();
var statearr_124069_124100 = state_124056__$1;
(statearr_124069_124100[(2)] = null);

(statearr_124069_124100[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124057 === (11))){
var inst_124020 = (state_124056[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_124056,(10),Object,null,(9));
var inst_124029 = chs__$1.call(null,inst_124020);
var inst_124030 = done.call(null,inst_124020);
var inst_124031 = cljs.core.async.take_BANG_.call(null,inst_124029,inst_124030);
var state_124056__$1 = state_124056;
var statearr_124070_124101 = state_124056__$1;
(statearr_124070_124101[(2)] = inst_124031);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_124056__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124057 === (9))){
var inst_124020 = (state_124056[(7)]);
var inst_124033 = (state_124056[(2)]);
var inst_124034 = (inst_124020 + (1));
var inst_124020__$1 = inst_124034;
var state_124056__$1 = (function (){var statearr_124071 = state_124056;
(statearr_124071[(7)] = inst_124020__$1);

(statearr_124071[(10)] = inst_124033);

return statearr_124071;
})();
var statearr_124072_124102 = state_124056__$1;
(statearr_124072_124102[(2)] = null);

(statearr_124072_124102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124057 === (5))){
var inst_124040 = (state_124056[(2)]);
var state_124056__$1 = (function (){var statearr_124073 = state_124056;
(statearr_124073[(11)] = inst_124040);

return statearr_124073;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_124056__$1,(12),dchan);
} else {
if((state_val_124057 === (14))){
var inst_124042 = (state_124056[(8)]);
var inst_124047 = cljs.core.apply.call(null,f,inst_124042);
var state_124056__$1 = state_124056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_124056__$1,(16),out,inst_124047);
} else {
if((state_val_124057 === (16))){
var inst_124049 = (state_124056[(2)]);
var state_124056__$1 = (function (){var statearr_124074 = state_124056;
(statearr_124074[(12)] = inst_124049);

return statearr_124074;
})();
var statearr_124075_124103 = state_124056__$1;
(statearr_124075_124103[(2)] = null);

(statearr_124075_124103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124057 === (10))){
var inst_124024 = (state_124056[(2)]);
var inst_124025 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_124056__$1 = (function (){var statearr_124076 = state_124056;
(statearr_124076[(13)] = inst_124024);

return statearr_124076;
})();
var statearr_124077_124104 = state_124056__$1;
(statearr_124077_124104[(2)] = inst_124025);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_124056__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124057 === (8))){
var inst_124038 = (state_124056[(2)]);
var state_124056__$1 = state_124056;
var statearr_124078_124105 = state_124056__$1;
(statearr_124078_124105[(2)] = inst_124038);

(statearr_124078_124105[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto___124090,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28225__auto__,c__28337__auto___124090,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_124082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_124082[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_124082[(1)] = (1));

return statearr_124082;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_124056){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_124056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e124083){if((e124083 instanceof Object)){
var ex__28229__auto__ = e124083;
var statearr_124084_124106 = state_124056;
(statearr_124084_124106[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_124056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e124083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__124107 = state_124056;
state_124056 = G__124107;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_124056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_124056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___124090,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28339__auto__ = (function (){var statearr_124085 = f__28338__auto__.call(null);
(statearr_124085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___124090);

return statearr_124085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___124090,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args124109 = [];
var len__26200__auto___124167 = arguments.length;
var i__26201__auto___124168 = (0);
while(true){
if((i__26201__auto___124168 < len__26200__auto___124167)){
args124109.push((arguments[i__26201__auto___124168]));

var G__124169 = (i__26201__auto___124168 + (1));
i__26201__auto___124168 = G__124169;
continue;
} else {
}
break;
}

var G__124111 = args124109.length;
switch (G__124111) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args124109.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28337__auto___124171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___124171,out){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___124171,out){
return (function (state_124143){
var state_val_124144 = (state_124143[(1)]);
if((state_val_124144 === (7))){
var inst_124123 = (state_124143[(7)]);
var inst_124122 = (state_124143[(8)]);
var inst_124122__$1 = (state_124143[(2)]);
var inst_124123__$1 = cljs.core.nth.call(null,inst_124122__$1,(0),null);
var inst_124124 = cljs.core.nth.call(null,inst_124122__$1,(1),null);
var inst_124125 = (inst_124123__$1 == null);
var state_124143__$1 = (function (){var statearr_124145 = state_124143;
(statearr_124145[(7)] = inst_124123__$1);

(statearr_124145[(9)] = inst_124124);

(statearr_124145[(8)] = inst_124122__$1);

return statearr_124145;
})();
if(cljs.core.truth_(inst_124125)){
var statearr_124146_124172 = state_124143__$1;
(statearr_124146_124172[(1)] = (8));

} else {
var statearr_124147_124173 = state_124143__$1;
(statearr_124147_124173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124144 === (1))){
var inst_124112 = cljs.core.vec.call(null,chs);
var inst_124113 = inst_124112;
var state_124143__$1 = (function (){var statearr_124148 = state_124143;
(statearr_124148[(10)] = inst_124113);

return statearr_124148;
})();
var statearr_124149_124174 = state_124143__$1;
(statearr_124149_124174[(2)] = null);

(statearr_124149_124174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124144 === (4))){
var inst_124113 = (state_124143[(10)]);
var state_124143__$1 = state_124143;
return cljs.core.async.ioc_alts_BANG_.call(null,state_124143__$1,(7),inst_124113);
} else {
if((state_val_124144 === (6))){
var inst_124139 = (state_124143[(2)]);
var state_124143__$1 = state_124143;
var statearr_124150_124175 = state_124143__$1;
(statearr_124150_124175[(2)] = inst_124139);

(statearr_124150_124175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124144 === (3))){
var inst_124141 = (state_124143[(2)]);
var state_124143__$1 = state_124143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_124143__$1,inst_124141);
} else {
if((state_val_124144 === (2))){
var inst_124113 = (state_124143[(10)]);
var inst_124115 = cljs.core.count.call(null,inst_124113);
var inst_124116 = (inst_124115 > (0));
var state_124143__$1 = state_124143;
if(cljs.core.truth_(inst_124116)){
var statearr_124152_124176 = state_124143__$1;
(statearr_124152_124176[(1)] = (4));

} else {
var statearr_124153_124177 = state_124143__$1;
(statearr_124153_124177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124144 === (11))){
var inst_124113 = (state_124143[(10)]);
var inst_124132 = (state_124143[(2)]);
var tmp124151 = inst_124113;
var inst_124113__$1 = tmp124151;
var state_124143__$1 = (function (){var statearr_124154 = state_124143;
(statearr_124154[(10)] = inst_124113__$1);

(statearr_124154[(11)] = inst_124132);

return statearr_124154;
})();
var statearr_124155_124178 = state_124143__$1;
(statearr_124155_124178[(2)] = null);

(statearr_124155_124178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124144 === (9))){
var inst_124123 = (state_124143[(7)]);
var state_124143__$1 = state_124143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_124143__$1,(11),out,inst_124123);
} else {
if((state_val_124144 === (5))){
var inst_124137 = cljs.core.async.close_BANG_.call(null,out);
var state_124143__$1 = state_124143;
var statearr_124156_124179 = state_124143__$1;
(statearr_124156_124179[(2)] = inst_124137);

(statearr_124156_124179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124144 === (10))){
var inst_124135 = (state_124143[(2)]);
var state_124143__$1 = state_124143;
var statearr_124157_124180 = state_124143__$1;
(statearr_124157_124180[(2)] = inst_124135);

(statearr_124157_124180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124144 === (8))){
var inst_124123 = (state_124143[(7)]);
var inst_124113 = (state_124143[(10)]);
var inst_124124 = (state_124143[(9)]);
var inst_124122 = (state_124143[(8)]);
var inst_124127 = (function (){var cs = inst_124113;
var vec__124118 = inst_124122;
var v = inst_124123;
var c = inst_124124;
return ((function (cs,vec__124118,v,c,inst_124123,inst_124113,inst_124124,inst_124122,state_val_124144,c__28337__auto___124171,out){
return (function (p1__124108_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__124108_SHARP_);
});
;})(cs,vec__124118,v,c,inst_124123,inst_124113,inst_124124,inst_124122,state_val_124144,c__28337__auto___124171,out))
})();
var inst_124128 = cljs.core.filterv.call(null,inst_124127,inst_124113);
var inst_124113__$1 = inst_124128;
var state_124143__$1 = (function (){var statearr_124158 = state_124143;
(statearr_124158[(10)] = inst_124113__$1);

return statearr_124158;
})();
var statearr_124159_124181 = state_124143__$1;
(statearr_124159_124181[(2)] = null);

(statearr_124159_124181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto___124171,out))
;
return ((function (switch__28225__auto__,c__28337__auto___124171,out){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_124163 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_124163[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_124163[(1)] = (1));

return statearr_124163;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_124143){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_124143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e124164){if((e124164 instanceof Object)){
var ex__28229__auto__ = e124164;
var statearr_124165_124182 = state_124143;
(statearr_124165_124182[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_124143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e124164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__124183 = state_124143;
state_124143 = G__124183;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_124143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_124143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___124171,out))
})();
var state__28339__auto__ = (function (){var statearr_124166 = f__28338__auto__.call(null);
(statearr_124166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___124171);

return statearr_124166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___124171,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args124184 = [];
var len__26200__auto___124233 = arguments.length;
var i__26201__auto___124234 = (0);
while(true){
if((i__26201__auto___124234 < len__26200__auto___124233)){
args124184.push((arguments[i__26201__auto___124234]));

var G__124235 = (i__26201__auto___124234 + (1));
i__26201__auto___124234 = G__124235;
continue;
} else {
}
break;
}

var G__124186 = args124184.length;
switch (G__124186) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args124184.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28337__auto___124237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___124237,out){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___124237,out){
return (function (state_124210){
var state_val_124211 = (state_124210[(1)]);
if((state_val_124211 === (7))){
var inst_124192 = (state_124210[(7)]);
var inst_124192__$1 = (state_124210[(2)]);
var inst_124193 = (inst_124192__$1 == null);
var inst_124194 = cljs.core.not.call(null,inst_124193);
var state_124210__$1 = (function (){var statearr_124212 = state_124210;
(statearr_124212[(7)] = inst_124192__$1);

return statearr_124212;
})();
if(inst_124194){
var statearr_124213_124238 = state_124210__$1;
(statearr_124213_124238[(1)] = (8));

} else {
var statearr_124214_124239 = state_124210__$1;
(statearr_124214_124239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124211 === (1))){
var inst_124187 = (0);
var state_124210__$1 = (function (){var statearr_124215 = state_124210;
(statearr_124215[(8)] = inst_124187);

return statearr_124215;
})();
var statearr_124216_124240 = state_124210__$1;
(statearr_124216_124240[(2)] = null);

(statearr_124216_124240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124211 === (4))){
var state_124210__$1 = state_124210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_124210__$1,(7),ch);
} else {
if((state_val_124211 === (6))){
var inst_124205 = (state_124210[(2)]);
var state_124210__$1 = state_124210;
var statearr_124217_124241 = state_124210__$1;
(statearr_124217_124241[(2)] = inst_124205);

(statearr_124217_124241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124211 === (3))){
var inst_124207 = (state_124210[(2)]);
var inst_124208 = cljs.core.async.close_BANG_.call(null,out);
var state_124210__$1 = (function (){var statearr_124218 = state_124210;
(statearr_124218[(9)] = inst_124207);

return statearr_124218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_124210__$1,inst_124208);
} else {
if((state_val_124211 === (2))){
var inst_124187 = (state_124210[(8)]);
var inst_124189 = (inst_124187 < n);
var state_124210__$1 = state_124210;
if(cljs.core.truth_(inst_124189)){
var statearr_124219_124242 = state_124210__$1;
(statearr_124219_124242[(1)] = (4));

} else {
var statearr_124220_124243 = state_124210__$1;
(statearr_124220_124243[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124211 === (11))){
var inst_124187 = (state_124210[(8)]);
var inst_124197 = (state_124210[(2)]);
var inst_124198 = (inst_124187 + (1));
var inst_124187__$1 = inst_124198;
var state_124210__$1 = (function (){var statearr_124221 = state_124210;
(statearr_124221[(10)] = inst_124197);

(statearr_124221[(8)] = inst_124187__$1);

return statearr_124221;
})();
var statearr_124222_124244 = state_124210__$1;
(statearr_124222_124244[(2)] = null);

(statearr_124222_124244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124211 === (9))){
var state_124210__$1 = state_124210;
var statearr_124223_124245 = state_124210__$1;
(statearr_124223_124245[(2)] = null);

(statearr_124223_124245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124211 === (5))){
var state_124210__$1 = state_124210;
var statearr_124224_124246 = state_124210__$1;
(statearr_124224_124246[(2)] = null);

(statearr_124224_124246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124211 === (10))){
var inst_124202 = (state_124210[(2)]);
var state_124210__$1 = state_124210;
var statearr_124225_124247 = state_124210__$1;
(statearr_124225_124247[(2)] = inst_124202);

(statearr_124225_124247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124211 === (8))){
var inst_124192 = (state_124210[(7)]);
var state_124210__$1 = state_124210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_124210__$1,(11),out,inst_124192);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto___124237,out))
;
return ((function (switch__28225__auto__,c__28337__auto___124237,out){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_124229 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_124229[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_124229[(1)] = (1));

return statearr_124229;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_124210){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_124210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e124230){if((e124230 instanceof Object)){
var ex__28229__auto__ = e124230;
var statearr_124231_124248 = state_124210;
(statearr_124231_124248[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_124210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e124230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__124249 = state_124210;
state_124210 = G__124249;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_124210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_124210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___124237,out))
})();
var state__28339__auto__ = (function (){var statearr_124232 = f__28338__auto__.call(null);
(statearr_124232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___124237);

return statearr_124232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___124237,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async124257 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async124257 = (function (map_LT_,f,ch,meta124258){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta124258 = meta124258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async124257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_124259,meta124258__$1){
var self__ = this;
var _124259__$1 = this;
return (new cljs.core.async.t_cljs$core$async124257(self__.map_LT_,self__.f,self__.ch,meta124258__$1));
});

cljs.core.async.t_cljs$core$async124257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_124259){
var self__ = this;
var _124259__$1 = this;
return self__.meta124258;
});

cljs.core.async.t_cljs$core$async124257.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async124257.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async124257.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async124257.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async124257.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async124260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async124260 = (function (map_LT_,f,ch,meta124258,_,fn1,meta124261){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta124258 = meta124258;
this._ = _;
this.fn1 = fn1;
this.meta124261 = meta124261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async124260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_124262,meta124261__$1){
var self__ = this;
var _124262__$1 = this;
return (new cljs.core.async.t_cljs$core$async124260(self__.map_LT_,self__.f,self__.ch,self__.meta124258,self__._,self__.fn1,meta124261__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async124260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_124262){
var self__ = this;
var _124262__$1 = this;
return self__.meta124261;
});})(___$1))
;

cljs.core.async.t_cljs$core$async124260.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async124260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async124260.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async124260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__124250_SHARP_){
return f1.call(null,(((p1__124250_SHARP_ == null))?null:self__.f.call(null,p1__124250_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async124260.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta124258","meta124258",-1986547892,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async124257","cljs.core.async/t_cljs$core$async124257",-1332317017,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta124261","meta124261",-1117131484,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async124260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async124260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async124260";

cljs.core.async.t_cljs$core$async124260.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cljs.core.async/t_cljs$core$async124260");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async124260 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async124260(map_LT___$1,f__$1,ch__$1,meta124258__$1,___$2,fn1__$1,meta124261){
return (new cljs.core.async.t_cljs$core$async124260(map_LT___$1,f__$1,ch__$1,meta124258__$1,___$2,fn1__$1,meta124261));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async124260(self__.map_LT_,self__.f,self__.ch,self__.meta124258,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25113__auto__ = ret;
if(cljs.core.truth_(and__25113__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25113__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async124257.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async124257.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async124257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta124258","meta124258",-1986547892,null)], null);
});

cljs.core.async.t_cljs$core$async124257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async124257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async124257";

cljs.core.async.t_cljs$core$async124257.cljs$lang$ctorPrWriter = (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cljs.core.async/t_cljs$core$async124257");
});

cljs.core.async.__GT_t_cljs$core$async124257 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async124257(map_LT___$1,f__$1,ch__$1,meta124258){
return (new cljs.core.async.t_cljs$core$async124257(map_LT___$1,f__$1,ch__$1,meta124258));
});

}

return (new cljs.core.async.t_cljs$core$async124257(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async124266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async124266 = (function (map_GT_,f,ch,meta124267){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta124267 = meta124267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async124266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_124268,meta124267__$1){
var self__ = this;
var _124268__$1 = this;
return (new cljs.core.async.t_cljs$core$async124266(self__.map_GT_,self__.f,self__.ch,meta124267__$1));
});

cljs.core.async.t_cljs$core$async124266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_124268){
var self__ = this;
var _124268__$1 = this;
return self__.meta124267;
});

cljs.core.async.t_cljs$core$async124266.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async124266.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async124266.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async124266.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async124266.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async124266.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async124266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta124267","meta124267",921949212,null)], null);
});

cljs.core.async.t_cljs$core$async124266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async124266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async124266";

cljs.core.async.t_cljs$core$async124266.cljs$lang$ctorPrWriter = (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cljs.core.async/t_cljs$core$async124266");
});

cljs.core.async.__GT_t_cljs$core$async124266 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async124266(map_GT___$1,f__$1,ch__$1,meta124267){
return (new cljs.core.async.t_cljs$core$async124266(map_GT___$1,f__$1,ch__$1,meta124267));
});

}

return (new cljs.core.async.t_cljs$core$async124266(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async124272 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async124272 = (function (filter_GT_,p,ch,meta124273){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta124273 = meta124273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async124272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_124274,meta124273__$1){
var self__ = this;
var _124274__$1 = this;
return (new cljs.core.async.t_cljs$core$async124272(self__.filter_GT_,self__.p,self__.ch,meta124273__$1));
});

cljs.core.async.t_cljs$core$async124272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_124274){
var self__ = this;
var _124274__$1 = this;
return self__.meta124273;
});

cljs.core.async.t_cljs$core$async124272.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async124272.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async124272.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async124272.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async124272.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async124272.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async124272.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async124272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta124273","meta124273",1597922320,null)], null);
});

cljs.core.async.t_cljs$core$async124272.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async124272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async124272";

cljs.core.async.t_cljs$core$async124272.cljs$lang$ctorPrWriter = (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cljs.core.async/t_cljs$core$async124272");
});

cljs.core.async.__GT_t_cljs$core$async124272 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async124272(filter_GT___$1,p__$1,ch__$1,meta124273){
return (new cljs.core.async.t_cljs$core$async124272(filter_GT___$1,p__$1,ch__$1,meta124273));
});

}

return (new cljs.core.async.t_cljs$core$async124272(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args124275 = [];
var len__26200__auto___124319 = arguments.length;
var i__26201__auto___124320 = (0);
while(true){
if((i__26201__auto___124320 < len__26200__auto___124319)){
args124275.push((arguments[i__26201__auto___124320]));

var G__124321 = (i__26201__auto___124320 + (1));
i__26201__auto___124320 = G__124321;
continue;
} else {
}
break;
}

var G__124277 = args124275.length;
switch (G__124277) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args124275.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28337__auto___124323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___124323,out){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___124323,out){
return (function (state_124298){
var state_val_124299 = (state_124298[(1)]);
if((state_val_124299 === (7))){
var inst_124294 = (state_124298[(2)]);
var state_124298__$1 = state_124298;
var statearr_124300_124324 = state_124298__$1;
(statearr_124300_124324[(2)] = inst_124294);

(statearr_124300_124324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124299 === (1))){
var state_124298__$1 = state_124298;
var statearr_124301_124325 = state_124298__$1;
(statearr_124301_124325[(2)] = null);

(statearr_124301_124325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124299 === (4))){
var inst_124280 = (state_124298[(7)]);
var inst_124280__$1 = (state_124298[(2)]);
var inst_124281 = (inst_124280__$1 == null);
var state_124298__$1 = (function (){var statearr_124302 = state_124298;
(statearr_124302[(7)] = inst_124280__$1);

return statearr_124302;
})();
if(cljs.core.truth_(inst_124281)){
var statearr_124303_124326 = state_124298__$1;
(statearr_124303_124326[(1)] = (5));

} else {
var statearr_124304_124327 = state_124298__$1;
(statearr_124304_124327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124299 === (6))){
var inst_124280 = (state_124298[(7)]);
var inst_124285 = p.call(null,inst_124280);
var state_124298__$1 = state_124298;
if(cljs.core.truth_(inst_124285)){
var statearr_124305_124328 = state_124298__$1;
(statearr_124305_124328[(1)] = (8));

} else {
var statearr_124306_124329 = state_124298__$1;
(statearr_124306_124329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124299 === (3))){
var inst_124296 = (state_124298[(2)]);
var state_124298__$1 = state_124298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_124298__$1,inst_124296);
} else {
if((state_val_124299 === (2))){
var state_124298__$1 = state_124298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_124298__$1,(4),ch);
} else {
if((state_val_124299 === (11))){
var inst_124288 = (state_124298[(2)]);
var state_124298__$1 = state_124298;
var statearr_124307_124330 = state_124298__$1;
(statearr_124307_124330[(2)] = inst_124288);

(statearr_124307_124330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124299 === (9))){
var state_124298__$1 = state_124298;
var statearr_124308_124331 = state_124298__$1;
(statearr_124308_124331[(2)] = null);

(statearr_124308_124331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124299 === (5))){
var inst_124283 = cljs.core.async.close_BANG_.call(null,out);
var state_124298__$1 = state_124298;
var statearr_124309_124332 = state_124298__$1;
(statearr_124309_124332[(2)] = inst_124283);

(statearr_124309_124332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124299 === (10))){
var inst_124291 = (state_124298[(2)]);
var state_124298__$1 = (function (){var statearr_124310 = state_124298;
(statearr_124310[(8)] = inst_124291);

return statearr_124310;
})();
var statearr_124311_124333 = state_124298__$1;
(statearr_124311_124333[(2)] = null);

(statearr_124311_124333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124299 === (8))){
var inst_124280 = (state_124298[(7)]);
var state_124298__$1 = state_124298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_124298__$1,(11),out,inst_124280);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto___124323,out))
;
return ((function (switch__28225__auto__,c__28337__auto___124323,out){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_124315 = [null,null,null,null,null,null,null,null,null];
(statearr_124315[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_124315[(1)] = (1));

return statearr_124315;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_124298){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_124298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e124316){if((e124316 instanceof Object)){
var ex__28229__auto__ = e124316;
var statearr_124317_124334 = state_124298;
(statearr_124317_124334[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_124298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e124316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__124335 = state_124298;
state_124298 = G__124335;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_124298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_124298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___124323,out))
})();
var state__28339__auto__ = (function (){var statearr_124318 = f__28338__auto__.call(null);
(statearr_124318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___124323);

return statearr_124318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___124323,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args124336 = [];
var len__26200__auto___124339 = arguments.length;
var i__26201__auto___124340 = (0);
while(true){
if((i__26201__auto___124340 < len__26200__auto___124339)){
args124336.push((arguments[i__26201__auto___124340]));

var G__124341 = (i__26201__auto___124340 + (1));
i__26201__auto___124340 = G__124341;
continue;
} else {
}
break;
}

var G__124338 = args124336.length;
switch (G__124338) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args124336.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto__){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto__){
return (function (state_124508){
var state_val_124509 = (state_124508[(1)]);
if((state_val_124509 === (7))){
var inst_124504 = (state_124508[(2)]);
var state_124508__$1 = state_124508;
var statearr_124510_124551 = state_124508__$1;
(statearr_124510_124551[(2)] = inst_124504);

(statearr_124510_124551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (20))){
var inst_124474 = (state_124508[(7)]);
var inst_124485 = (state_124508[(2)]);
var inst_124486 = cljs.core.next.call(null,inst_124474);
var inst_124460 = inst_124486;
var inst_124461 = null;
var inst_124462 = (0);
var inst_124463 = (0);
var state_124508__$1 = (function (){var statearr_124511 = state_124508;
(statearr_124511[(8)] = inst_124485);

(statearr_124511[(9)] = inst_124460);

(statearr_124511[(10)] = inst_124463);

(statearr_124511[(11)] = inst_124461);

(statearr_124511[(12)] = inst_124462);

return statearr_124511;
})();
var statearr_124512_124552 = state_124508__$1;
(statearr_124512_124552[(2)] = null);

(statearr_124512_124552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (1))){
var state_124508__$1 = state_124508;
var statearr_124513_124553 = state_124508__$1;
(statearr_124513_124553[(2)] = null);

(statearr_124513_124553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (4))){
var inst_124449 = (state_124508[(13)]);
var inst_124449__$1 = (state_124508[(2)]);
var inst_124450 = (inst_124449__$1 == null);
var state_124508__$1 = (function (){var statearr_124514 = state_124508;
(statearr_124514[(13)] = inst_124449__$1);

return statearr_124514;
})();
if(cljs.core.truth_(inst_124450)){
var statearr_124515_124554 = state_124508__$1;
(statearr_124515_124554[(1)] = (5));

} else {
var statearr_124516_124555 = state_124508__$1;
(statearr_124516_124555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (15))){
var state_124508__$1 = state_124508;
var statearr_124520_124556 = state_124508__$1;
(statearr_124520_124556[(2)] = null);

(statearr_124520_124556[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (21))){
var state_124508__$1 = state_124508;
var statearr_124521_124557 = state_124508__$1;
(statearr_124521_124557[(2)] = null);

(statearr_124521_124557[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (13))){
var inst_124460 = (state_124508[(9)]);
var inst_124463 = (state_124508[(10)]);
var inst_124461 = (state_124508[(11)]);
var inst_124462 = (state_124508[(12)]);
var inst_124470 = (state_124508[(2)]);
var inst_124471 = (inst_124463 + (1));
var tmp124517 = inst_124460;
var tmp124518 = inst_124461;
var tmp124519 = inst_124462;
var inst_124460__$1 = tmp124517;
var inst_124461__$1 = tmp124518;
var inst_124462__$1 = tmp124519;
var inst_124463__$1 = inst_124471;
var state_124508__$1 = (function (){var statearr_124522 = state_124508;
(statearr_124522[(9)] = inst_124460__$1);

(statearr_124522[(10)] = inst_124463__$1);

(statearr_124522[(11)] = inst_124461__$1);

(statearr_124522[(12)] = inst_124462__$1);

(statearr_124522[(14)] = inst_124470);

return statearr_124522;
})();
var statearr_124523_124558 = state_124508__$1;
(statearr_124523_124558[(2)] = null);

(statearr_124523_124558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (22))){
var state_124508__$1 = state_124508;
var statearr_124524_124559 = state_124508__$1;
(statearr_124524_124559[(2)] = null);

(statearr_124524_124559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (6))){
var inst_124449 = (state_124508[(13)]);
var inst_124458 = f.call(null,inst_124449);
var inst_124459 = cljs.core.seq.call(null,inst_124458);
var inst_124460 = inst_124459;
var inst_124461 = null;
var inst_124462 = (0);
var inst_124463 = (0);
var state_124508__$1 = (function (){var statearr_124525 = state_124508;
(statearr_124525[(9)] = inst_124460);

(statearr_124525[(10)] = inst_124463);

(statearr_124525[(11)] = inst_124461);

(statearr_124525[(12)] = inst_124462);

return statearr_124525;
})();
var statearr_124526_124560 = state_124508__$1;
(statearr_124526_124560[(2)] = null);

(statearr_124526_124560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (17))){
var inst_124474 = (state_124508[(7)]);
var inst_124478 = cljs.core.chunk_first.call(null,inst_124474);
var inst_124479 = cljs.core.chunk_rest.call(null,inst_124474);
var inst_124480 = cljs.core.count.call(null,inst_124478);
var inst_124460 = inst_124479;
var inst_124461 = inst_124478;
var inst_124462 = inst_124480;
var inst_124463 = (0);
var state_124508__$1 = (function (){var statearr_124527 = state_124508;
(statearr_124527[(9)] = inst_124460);

(statearr_124527[(10)] = inst_124463);

(statearr_124527[(11)] = inst_124461);

(statearr_124527[(12)] = inst_124462);

return statearr_124527;
})();
var statearr_124528_124561 = state_124508__$1;
(statearr_124528_124561[(2)] = null);

(statearr_124528_124561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (3))){
var inst_124506 = (state_124508[(2)]);
var state_124508__$1 = state_124508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_124508__$1,inst_124506);
} else {
if((state_val_124509 === (12))){
var inst_124494 = (state_124508[(2)]);
var state_124508__$1 = state_124508;
var statearr_124529_124562 = state_124508__$1;
(statearr_124529_124562[(2)] = inst_124494);

(statearr_124529_124562[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (2))){
var state_124508__$1 = state_124508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_124508__$1,(4),in$);
} else {
if((state_val_124509 === (23))){
var inst_124502 = (state_124508[(2)]);
var state_124508__$1 = state_124508;
var statearr_124530_124563 = state_124508__$1;
(statearr_124530_124563[(2)] = inst_124502);

(statearr_124530_124563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (19))){
var inst_124489 = (state_124508[(2)]);
var state_124508__$1 = state_124508;
var statearr_124531_124564 = state_124508__$1;
(statearr_124531_124564[(2)] = inst_124489);

(statearr_124531_124564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (11))){
var inst_124474 = (state_124508[(7)]);
var inst_124460 = (state_124508[(9)]);
var inst_124474__$1 = cljs.core.seq.call(null,inst_124460);
var state_124508__$1 = (function (){var statearr_124532 = state_124508;
(statearr_124532[(7)] = inst_124474__$1);

return statearr_124532;
})();
if(inst_124474__$1){
var statearr_124533_124565 = state_124508__$1;
(statearr_124533_124565[(1)] = (14));

} else {
var statearr_124534_124566 = state_124508__$1;
(statearr_124534_124566[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (9))){
var inst_124496 = (state_124508[(2)]);
var inst_124497 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_124508__$1 = (function (){var statearr_124535 = state_124508;
(statearr_124535[(15)] = inst_124496);

return statearr_124535;
})();
if(cljs.core.truth_(inst_124497)){
var statearr_124536_124567 = state_124508__$1;
(statearr_124536_124567[(1)] = (21));

} else {
var statearr_124537_124568 = state_124508__$1;
(statearr_124537_124568[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (5))){
var inst_124452 = cljs.core.async.close_BANG_.call(null,out);
var state_124508__$1 = state_124508;
var statearr_124538_124569 = state_124508__$1;
(statearr_124538_124569[(2)] = inst_124452);

(statearr_124538_124569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (14))){
var inst_124474 = (state_124508[(7)]);
var inst_124476 = cljs.core.chunked_seq_QMARK_.call(null,inst_124474);
var state_124508__$1 = state_124508;
if(inst_124476){
var statearr_124539_124570 = state_124508__$1;
(statearr_124539_124570[(1)] = (17));

} else {
var statearr_124540_124571 = state_124508__$1;
(statearr_124540_124571[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (16))){
var inst_124492 = (state_124508[(2)]);
var state_124508__$1 = state_124508;
var statearr_124541_124572 = state_124508__$1;
(statearr_124541_124572[(2)] = inst_124492);

(statearr_124541_124572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124509 === (10))){
var inst_124463 = (state_124508[(10)]);
var inst_124461 = (state_124508[(11)]);
var inst_124468 = cljs.core._nth.call(null,inst_124461,inst_124463);
var state_124508__$1 = state_124508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_124508__$1,(13),out,inst_124468);
} else {
if((state_val_124509 === (18))){
var inst_124474 = (state_124508[(7)]);
var inst_124483 = cljs.core.first.call(null,inst_124474);
var state_124508__$1 = state_124508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_124508__$1,(20),out,inst_124483);
} else {
if((state_val_124509 === (8))){
var inst_124463 = (state_124508[(10)]);
var inst_124462 = (state_124508[(12)]);
var inst_124465 = (inst_124463 < inst_124462);
var inst_124466 = inst_124465;
var state_124508__$1 = state_124508;
if(cljs.core.truth_(inst_124466)){
var statearr_124542_124573 = state_124508__$1;
(statearr_124542_124573[(1)] = (10));

} else {
var statearr_124543_124574 = state_124508__$1;
(statearr_124543_124574[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto__))
;
return ((function (switch__28225__auto__,c__28337__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28226__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28226__auto____0 = (function (){
var statearr_124547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_124547[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28226__auto__);

(statearr_124547[(1)] = (1));

return statearr_124547;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28226__auto____1 = (function (state_124508){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_124508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e124548){if((e124548 instanceof Object)){
var ex__28229__auto__ = e124548;
var statearr_124549_124575 = state_124508;
(statearr_124549_124575[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_124508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e124548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__124576 = state_124508;
state_124508 = G__124576;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28226__auto__ = function(state_124508){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28226__auto____1.call(this,state_124508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28226__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28226__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto__))
})();
var state__28339__auto__ = (function (){var statearr_124550 = f__28338__auto__.call(null);
(statearr_124550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto__);

return statearr_124550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto__))
);

return c__28337__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args124577 = [];
var len__26200__auto___124580 = arguments.length;
var i__26201__auto___124581 = (0);
while(true){
if((i__26201__auto___124581 < len__26200__auto___124580)){
args124577.push((arguments[i__26201__auto___124581]));

var G__124582 = (i__26201__auto___124581 + (1));
i__26201__auto___124581 = G__124582;
continue;
} else {
}
break;
}

var G__124579 = args124577.length;
switch (G__124579) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args124577.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args124584 = [];
var len__26200__auto___124587 = arguments.length;
var i__26201__auto___124588 = (0);
while(true){
if((i__26201__auto___124588 < len__26200__auto___124587)){
args124584.push((arguments[i__26201__auto___124588]));

var G__124589 = (i__26201__auto___124588 + (1));
i__26201__auto___124588 = G__124589;
continue;
} else {
}
break;
}

var G__124586 = args124584.length;
switch (G__124586) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args124584.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args124591 = [];
var len__26200__auto___124642 = arguments.length;
var i__26201__auto___124643 = (0);
while(true){
if((i__26201__auto___124643 < len__26200__auto___124642)){
args124591.push((arguments[i__26201__auto___124643]));

var G__124644 = (i__26201__auto___124643 + (1));
i__26201__auto___124643 = G__124644;
continue;
} else {
}
break;
}

var G__124593 = args124591.length;
switch (G__124593) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args124591.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28337__auto___124646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___124646,out){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___124646,out){
return (function (state_124617){
var state_val_124618 = (state_124617[(1)]);
if((state_val_124618 === (7))){
var inst_124612 = (state_124617[(2)]);
var state_124617__$1 = state_124617;
var statearr_124619_124647 = state_124617__$1;
(statearr_124619_124647[(2)] = inst_124612);

(statearr_124619_124647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124618 === (1))){
var inst_124594 = null;
var state_124617__$1 = (function (){var statearr_124620 = state_124617;
(statearr_124620[(7)] = inst_124594);

return statearr_124620;
})();
var statearr_124621_124648 = state_124617__$1;
(statearr_124621_124648[(2)] = null);

(statearr_124621_124648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124618 === (4))){
var inst_124597 = (state_124617[(8)]);
var inst_124597__$1 = (state_124617[(2)]);
var inst_124598 = (inst_124597__$1 == null);
var inst_124599 = cljs.core.not.call(null,inst_124598);
var state_124617__$1 = (function (){var statearr_124622 = state_124617;
(statearr_124622[(8)] = inst_124597__$1);

return statearr_124622;
})();
if(inst_124599){
var statearr_124623_124649 = state_124617__$1;
(statearr_124623_124649[(1)] = (5));

} else {
var statearr_124624_124650 = state_124617__$1;
(statearr_124624_124650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124618 === (6))){
var state_124617__$1 = state_124617;
var statearr_124625_124651 = state_124617__$1;
(statearr_124625_124651[(2)] = null);

(statearr_124625_124651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124618 === (3))){
var inst_124614 = (state_124617[(2)]);
var inst_124615 = cljs.core.async.close_BANG_.call(null,out);
var state_124617__$1 = (function (){var statearr_124626 = state_124617;
(statearr_124626[(9)] = inst_124614);

return statearr_124626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_124617__$1,inst_124615);
} else {
if((state_val_124618 === (2))){
var state_124617__$1 = state_124617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_124617__$1,(4),ch);
} else {
if((state_val_124618 === (11))){
var inst_124597 = (state_124617[(8)]);
var inst_124606 = (state_124617[(2)]);
var inst_124594 = inst_124597;
var state_124617__$1 = (function (){var statearr_124627 = state_124617;
(statearr_124627[(10)] = inst_124606);

(statearr_124627[(7)] = inst_124594);

return statearr_124627;
})();
var statearr_124628_124652 = state_124617__$1;
(statearr_124628_124652[(2)] = null);

(statearr_124628_124652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124618 === (9))){
var inst_124597 = (state_124617[(8)]);
var state_124617__$1 = state_124617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_124617__$1,(11),out,inst_124597);
} else {
if((state_val_124618 === (5))){
var inst_124597 = (state_124617[(8)]);
var inst_124594 = (state_124617[(7)]);
var inst_124601 = cljs.core._EQ_.call(null,inst_124597,inst_124594);
var state_124617__$1 = state_124617;
if(inst_124601){
var statearr_124630_124653 = state_124617__$1;
(statearr_124630_124653[(1)] = (8));

} else {
var statearr_124631_124654 = state_124617__$1;
(statearr_124631_124654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124618 === (10))){
var inst_124609 = (state_124617[(2)]);
var state_124617__$1 = state_124617;
var statearr_124632_124655 = state_124617__$1;
(statearr_124632_124655[(2)] = inst_124609);

(statearr_124632_124655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124618 === (8))){
var inst_124594 = (state_124617[(7)]);
var tmp124629 = inst_124594;
var inst_124594__$1 = tmp124629;
var state_124617__$1 = (function (){var statearr_124633 = state_124617;
(statearr_124633[(7)] = inst_124594__$1);

return statearr_124633;
})();
var statearr_124634_124656 = state_124617__$1;
(statearr_124634_124656[(2)] = null);

(statearr_124634_124656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto___124646,out))
;
return ((function (switch__28225__auto__,c__28337__auto___124646,out){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_124638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_124638[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_124638[(1)] = (1));

return statearr_124638;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_124617){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_124617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e124639){if((e124639 instanceof Object)){
var ex__28229__auto__ = e124639;
var statearr_124640_124657 = state_124617;
(statearr_124640_124657[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_124617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e124639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__124658 = state_124617;
state_124617 = G__124658;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_124617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_124617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___124646,out))
})();
var state__28339__auto__ = (function (){var statearr_124641 = f__28338__auto__.call(null);
(statearr_124641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___124646);

return statearr_124641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___124646,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args124659 = [];
var len__26200__auto___124729 = arguments.length;
var i__26201__auto___124730 = (0);
while(true){
if((i__26201__auto___124730 < len__26200__auto___124729)){
args124659.push((arguments[i__26201__auto___124730]));

var G__124731 = (i__26201__auto___124730 + (1));
i__26201__auto___124730 = G__124731;
continue;
} else {
}
break;
}

var G__124661 = args124659.length;
switch (G__124661) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args124659.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28337__auto___124733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___124733,out){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___124733,out){
return (function (state_124699){
var state_val_124700 = (state_124699[(1)]);
if((state_val_124700 === (7))){
var inst_124695 = (state_124699[(2)]);
var state_124699__$1 = state_124699;
var statearr_124701_124734 = state_124699__$1;
(statearr_124701_124734[(2)] = inst_124695);

(statearr_124701_124734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124700 === (1))){
var inst_124662 = (new Array(n));
var inst_124663 = inst_124662;
var inst_124664 = (0);
var state_124699__$1 = (function (){var statearr_124702 = state_124699;
(statearr_124702[(7)] = inst_124663);

(statearr_124702[(8)] = inst_124664);

return statearr_124702;
})();
var statearr_124703_124735 = state_124699__$1;
(statearr_124703_124735[(2)] = null);

(statearr_124703_124735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124700 === (4))){
var inst_124667 = (state_124699[(9)]);
var inst_124667__$1 = (state_124699[(2)]);
var inst_124668 = (inst_124667__$1 == null);
var inst_124669 = cljs.core.not.call(null,inst_124668);
var state_124699__$1 = (function (){var statearr_124704 = state_124699;
(statearr_124704[(9)] = inst_124667__$1);

return statearr_124704;
})();
if(inst_124669){
var statearr_124705_124736 = state_124699__$1;
(statearr_124705_124736[(1)] = (5));

} else {
var statearr_124706_124737 = state_124699__$1;
(statearr_124706_124737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124700 === (15))){
var inst_124689 = (state_124699[(2)]);
var state_124699__$1 = state_124699;
var statearr_124707_124738 = state_124699__$1;
(statearr_124707_124738[(2)] = inst_124689);

(statearr_124707_124738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124700 === (13))){
var state_124699__$1 = state_124699;
var statearr_124708_124739 = state_124699__$1;
(statearr_124708_124739[(2)] = null);

(statearr_124708_124739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124700 === (6))){
var inst_124664 = (state_124699[(8)]);
var inst_124685 = (inst_124664 > (0));
var state_124699__$1 = state_124699;
if(cljs.core.truth_(inst_124685)){
var statearr_124709_124740 = state_124699__$1;
(statearr_124709_124740[(1)] = (12));

} else {
var statearr_124710_124741 = state_124699__$1;
(statearr_124710_124741[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124700 === (3))){
var inst_124697 = (state_124699[(2)]);
var state_124699__$1 = state_124699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_124699__$1,inst_124697);
} else {
if((state_val_124700 === (12))){
var inst_124663 = (state_124699[(7)]);
var inst_124687 = cljs.core.vec.call(null,inst_124663);
var state_124699__$1 = state_124699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_124699__$1,(15),out,inst_124687);
} else {
if((state_val_124700 === (2))){
var state_124699__$1 = state_124699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_124699__$1,(4),ch);
} else {
if((state_val_124700 === (11))){
var inst_124679 = (state_124699[(2)]);
var inst_124680 = (new Array(n));
var inst_124663 = inst_124680;
var inst_124664 = (0);
var state_124699__$1 = (function (){var statearr_124711 = state_124699;
(statearr_124711[(7)] = inst_124663);

(statearr_124711[(8)] = inst_124664);

(statearr_124711[(10)] = inst_124679);

return statearr_124711;
})();
var statearr_124712_124742 = state_124699__$1;
(statearr_124712_124742[(2)] = null);

(statearr_124712_124742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124700 === (9))){
var inst_124663 = (state_124699[(7)]);
var inst_124677 = cljs.core.vec.call(null,inst_124663);
var state_124699__$1 = state_124699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_124699__$1,(11),out,inst_124677);
} else {
if((state_val_124700 === (5))){
var inst_124663 = (state_124699[(7)]);
var inst_124664 = (state_124699[(8)]);
var inst_124672 = (state_124699[(11)]);
var inst_124667 = (state_124699[(9)]);
var inst_124671 = (inst_124663[inst_124664] = inst_124667);
var inst_124672__$1 = (inst_124664 + (1));
var inst_124673 = (inst_124672__$1 < n);
var state_124699__$1 = (function (){var statearr_124713 = state_124699;
(statearr_124713[(11)] = inst_124672__$1);

(statearr_124713[(12)] = inst_124671);

return statearr_124713;
})();
if(cljs.core.truth_(inst_124673)){
var statearr_124714_124743 = state_124699__$1;
(statearr_124714_124743[(1)] = (8));

} else {
var statearr_124715_124744 = state_124699__$1;
(statearr_124715_124744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124700 === (14))){
var inst_124692 = (state_124699[(2)]);
var inst_124693 = cljs.core.async.close_BANG_.call(null,out);
var state_124699__$1 = (function (){var statearr_124717 = state_124699;
(statearr_124717[(13)] = inst_124692);

return statearr_124717;
})();
var statearr_124718_124745 = state_124699__$1;
(statearr_124718_124745[(2)] = inst_124693);

(statearr_124718_124745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124700 === (10))){
var inst_124683 = (state_124699[(2)]);
var state_124699__$1 = state_124699;
var statearr_124719_124746 = state_124699__$1;
(statearr_124719_124746[(2)] = inst_124683);

(statearr_124719_124746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124700 === (8))){
var inst_124663 = (state_124699[(7)]);
var inst_124672 = (state_124699[(11)]);
var tmp124716 = inst_124663;
var inst_124663__$1 = tmp124716;
var inst_124664 = inst_124672;
var state_124699__$1 = (function (){var statearr_124720 = state_124699;
(statearr_124720[(7)] = inst_124663__$1);

(statearr_124720[(8)] = inst_124664);

return statearr_124720;
})();
var statearr_124721_124747 = state_124699__$1;
(statearr_124721_124747[(2)] = null);

(statearr_124721_124747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto___124733,out))
;
return ((function (switch__28225__auto__,c__28337__auto___124733,out){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_124725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_124725[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_124725[(1)] = (1));

return statearr_124725;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_124699){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_124699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e124726){if((e124726 instanceof Object)){
var ex__28229__auto__ = e124726;
var statearr_124727_124748 = state_124699;
(statearr_124727_124748[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_124699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e124726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__124749 = state_124699;
state_124699 = G__124749;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_124699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_124699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___124733,out))
})();
var state__28339__auto__ = (function (){var statearr_124728 = f__28338__auto__.call(null);
(statearr_124728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___124733);

return statearr_124728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___124733,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args124750 = [];
var len__26200__auto___124824 = arguments.length;
var i__26201__auto___124825 = (0);
while(true){
if((i__26201__auto___124825 < len__26200__auto___124824)){
args124750.push((arguments[i__26201__auto___124825]));

var G__124826 = (i__26201__auto___124825 + (1));
i__26201__auto___124825 = G__124826;
continue;
} else {
}
break;
}

var G__124752 = args124750.length;
switch (G__124752) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args124750.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28337__auto___124828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___124828,out){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___124828,out){
return (function (state_124794){
var state_val_124795 = (state_124794[(1)]);
if((state_val_124795 === (7))){
var inst_124790 = (state_124794[(2)]);
var state_124794__$1 = state_124794;
var statearr_124796_124829 = state_124794__$1;
(statearr_124796_124829[(2)] = inst_124790);

(statearr_124796_124829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124795 === (1))){
var inst_124753 = [];
var inst_124754 = inst_124753;
var inst_124755 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_124794__$1 = (function (){var statearr_124797 = state_124794;
(statearr_124797[(7)] = inst_124755);

(statearr_124797[(8)] = inst_124754);

return statearr_124797;
})();
var statearr_124798_124830 = state_124794__$1;
(statearr_124798_124830[(2)] = null);

(statearr_124798_124830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124795 === (4))){
var inst_124758 = (state_124794[(9)]);
var inst_124758__$1 = (state_124794[(2)]);
var inst_124759 = (inst_124758__$1 == null);
var inst_124760 = cljs.core.not.call(null,inst_124759);
var state_124794__$1 = (function (){var statearr_124799 = state_124794;
(statearr_124799[(9)] = inst_124758__$1);

return statearr_124799;
})();
if(inst_124760){
var statearr_124800_124831 = state_124794__$1;
(statearr_124800_124831[(1)] = (5));

} else {
var statearr_124801_124832 = state_124794__$1;
(statearr_124801_124832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124795 === (15))){
var inst_124784 = (state_124794[(2)]);
var state_124794__$1 = state_124794;
var statearr_124802_124833 = state_124794__$1;
(statearr_124802_124833[(2)] = inst_124784);

(statearr_124802_124833[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124795 === (13))){
var state_124794__$1 = state_124794;
var statearr_124803_124834 = state_124794__$1;
(statearr_124803_124834[(2)] = null);

(statearr_124803_124834[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124795 === (6))){
var inst_124754 = (state_124794[(8)]);
var inst_124779 = inst_124754.length;
var inst_124780 = (inst_124779 > (0));
var state_124794__$1 = state_124794;
if(cljs.core.truth_(inst_124780)){
var statearr_124804_124835 = state_124794__$1;
(statearr_124804_124835[(1)] = (12));

} else {
var statearr_124805_124836 = state_124794__$1;
(statearr_124805_124836[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124795 === (3))){
var inst_124792 = (state_124794[(2)]);
var state_124794__$1 = state_124794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_124794__$1,inst_124792);
} else {
if((state_val_124795 === (12))){
var inst_124754 = (state_124794[(8)]);
var inst_124782 = cljs.core.vec.call(null,inst_124754);
var state_124794__$1 = state_124794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_124794__$1,(15),out,inst_124782);
} else {
if((state_val_124795 === (2))){
var state_124794__$1 = state_124794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_124794__$1,(4),ch);
} else {
if((state_val_124795 === (11))){
var inst_124758 = (state_124794[(9)]);
var inst_124762 = (state_124794[(10)]);
var inst_124772 = (state_124794[(2)]);
var inst_124773 = [];
var inst_124774 = inst_124773.push(inst_124758);
var inst_124754 = inst_124773;
var inst_124755 = inst_124762;
var state_124794__$1 = (function (){var statearr_124806 = state_124794;
(statearr_124806[(11)] = inst_124772);

(statearr_124806[(7)] = inst_124755);

(statearr_124806[(8)] = inst_124754);

(statearr_124806[(12)] = inst_124774);

return statearr_124806;
})();
var statearr_124807_124837 = state_124794__$1;
(statearr_124807_124837[(2)] = null);

(statearr_124807_124837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124795 === (9))){
var inst_124754 = (state_124794[(8)]);
var inst_124770 = cljs.core.vec.call(null,inst_124754);
var state_124794__$1 = state_124794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_124794__$1,(11),out,inst_124770);
} else {
if((state_val_124795 === (5))){
var inst_124755 = (state_124794[(7)]);
var inst_124758 = (state_124794[(9)]);
var inst_124762 = (state_124794[(10)]);
var inst_124762__$1 = f.call(null,inst_124758);
var inst_124763 = cljs.core._EQ_.call(null,inst_124762__$1,inst_124755);
var inst_124764 = cljs.core.keyword_identical_QMARK_.call(null,inst_124755,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_124765 = (inst_124763) || (inst_124764);
var state_124794__$1 = (function (){var statearr_124808 = state_124794;
(statearr_124808[(10)] = inst_124762__$1);

return statearr_124808;
})();
if(cljs.core.truth_(inst_124765)){
var statearr_124809_124838 = state_124794__$1;
(statearr_124809_124838[(1)] = (8));

} else {
var statearr_124810_124839 = state_124794__$1;
(statearr_124810_124839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124795 === (14))){
var inst_124787 = (state_124794[(2)]);
var inst_124788 = cljs.core.async.close_BANG_.call(null,out);
var state_124794__$1 = (function (){var statearr_124812 = state_124794;
(statearr_124812[(13)] = inst_124787);

return statearr_124812;
})();
var statearr_124813_124840 = state_124794__$1;
(statearr_124813_124840[(2)] = inst_124788);

(statearr_124813_124840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124795 === (10))){
var inst_124777 = (state_124794[(2)]);
var state_124794__$1 = state_124794;
var statearr_124814_124841 = state_124794__$1;
(statearr_124814_124841[(2)] = inst_124777);

(statearr_124814_124841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124795 === (8))){
var inst_124758 = (state_124794[(9)]);
var inst_124754 = (state_124794[(8)]);
var inst_124762 = (state_124794[(10)]);
var inst_124767 = inst_124754.push(inst_124758);
var tmp124811 = inst_124754;
var inst_124754__$1 = tmp124811;
var inst_124755 = inst_124762;
var state_124794__$1 = (function (){var statearr_124815 = state_124794;
(statearr_124815[(7)] = inst_124755);

(statearr_124815[(8)] = inst_124754__$1);

(statearr_124815[(14)] = inst_124767);

return statearr_124815;
})();
var statearr_124816_124842 = state_124794__$1;
(statearr_124816_124842[(2)] = null);

(statearr_124816_124842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto___124828,out))
;
return ((function (switch__28225__auto__,c__28337__auto___124828,out){
return (function() {
var cljs$core$async$state_machine__28226__auto__ = null;
var cljs$core$async$state_machine__28226__auto____0 = (function (){
var statearr_124820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_124820[(0)] = cljs$core$async$state_machine__28226__auto__);

(statearr_124820[(1)] = (1));

return statearr_124820;
});
var cljs$core$async$state_machine__28226__auto____1 = (function (state_124794){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_124794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e124821){if((e124821 instanceof Object)){
var ex__28229__auto__ = e124821;
var statearr_124822_124843 = state_124794;
(statearr_124822_124843[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_124794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e124821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__124844 = state_124794;
state_124794 = G__124844;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
cljs$core$async$state_machine__28226__auto__ = function(state_124794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28226__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28226__auto____1.call(this,state_124794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28226__auto____0;
cljs$core$async$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28226__auto____1;
return cljs$core$async$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___124828,out))
})();
var state__28339__auto__ = (function (){var statearr_124823 = f__28338__auto__.call(null);
(statearr_124823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___124828);

return statearr_124823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___124828,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1488400198851