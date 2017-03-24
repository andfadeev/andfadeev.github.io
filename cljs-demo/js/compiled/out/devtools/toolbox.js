// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.toolbox');
goog.require('cljs.core');
goog.require('devtools.protocols');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.markup');
/**
 * This is a simple wrapper for logging "busy" objects.
 *   This is especially handy when you happen to be logging javascript objects with many properties.
 *   Standard javascript console renderer tends to print a lot of infomation in the header in some cases and that can make
 *   console output pretty busy. By using envelope you can force your own short header and let the details expand on demand
 *   via disclosure triangle. The header can be styled and you can optionally specify preferred wrapping tag (advanced).
 */
devtools.toolbox.envelope = (function devtools$toolbox$envelope(var_args){
var args38387 = [];
var len__26200__auto___38393 = arguments.length;
var i__26201__auto___38394 = (0);
while(true){
if((i__26201__auto___38394 < len__26200__auto___38393)){
args38387.push((arguments[i__26201__auto___38394]));

var G__38395 = (i__26201__auto___38394 + (1));
i__26201__auto___38394 = G__38395;
continue;
} else {
}
break;
}

var G__38389 = args38387.length;
switch (G__38389) {
case 1:
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38387.length)].join('')));

}
});

devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return devtools.toolbox.envelope.call(null,obj,new cljs.core.Keyword(null,"default-envelope-header","default-envelope-header",-90723598));
});

devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$2 = (function (obj,header){
return devtools.toolbox.envelope.call(null,obj,header,new cljs.core.Keyword(null,"default-envelope-style","default-envelope-style",-1676750479));
});

devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$3 = (function (obj,header,style){
return devtools.toolbox.envelope.call(null,obj,header,style,new cljs.core.Keyword(null,"span","span",1394872991));
});

devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$4 = (function (obj,header,style,tag){
if(typeof devtools.toolbox.t_devtools$toolbox38390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devtools.protocols.IFormat}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devtools.toolbox.t_devtools$toolbox38390 = (function (obj,header,style,tag,meta38391){
this.obj = obj;
this.header = header;
this.style = style;
this.tag = tag;
this.meta38391 = meta38391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devtools.toolbox.t_devtools$toolbox38390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38392,meta38391__$1){
var self__ = this;
var _38392__$1 = this;
return (new devtools.toolbox.t_devtools$toolbox38390(self__.obj,self__.header,self__.style,self__.tag,meta38391__$1));
});

devtools.toolbox.t_devtools$toolbox38390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38392){
var self__ = this;
var _38392__$1 = this;
return self__.meta38391;
});

devtools.toolbox.t_devtools$toolbox38390.prototype.devtools$protocols$IFormat$ = true;

devtools.toolbox.t_devtools$toolbox38390.prototype.devtools$protocols$IFormat$_header$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return devtools.formatters.templating.render_markup.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.tag,self__.style], null),((cljs.core.fn_QMARK_.call(null,self__.header))?self__.header.call(null,self__.obj):self__.header)], null));
});

devtools.toolbox.t_devtools$toolbox38390.prototype.devtools$protocols$IFormat$_has_body$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

devtools.toolbox.t_devtools$toolbox38390.prototype.devtools$protocols$IFormat$_body$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_body_GT_.call(null,devtools.formatters.markup._LT_standard_body_reference_GT_.call(null,self__.obj)));
});

devtools.toolbox.t_devtools$toolbox38390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta38391","meta38391",421146743,null)], null);
});

devtools.toolbox.t_devtools$toolbox38390.cljs$lang$type = true;

devtools.toolbox.t_devtools$toolbox38390.cljs$lang$ctorStr = "devtools.toolbox/t_devtools$toolbox38390";

devtools.toolbox.t_devtools$toolbox38390.cljs$lang$ctorPrWriter = (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"devtools.toolbox/t_devtools$toolbox38390");
});

devtools.toolbox.__GT_t_devtools$toolbox38390 = (function devtools$toolbox$__GT_t_devtools$toolbox38390(obj__$1,header__$1,style__$1,tag__$1,meta38391){
return (new devtools.toolbox.t_devtools$toolbox38390(obj__$1,header__$1,style__$1,tag__$1,meta38391));
});

}

return (new devtools.toolbox.t_devtools$toolbox38390(obj,header,style,tag,cljs.core.PersistentArrayMap.EMPTY));
});

devtools.toolbox.envelope.cljs$lang$maxFixedArity = 4;

/**
 * Forces object to be rendered by cljs-devtools during console logging.
 * 
 *   Unfortunately custom formatters subsystem in DevTools is not applied to primitive values like numbers, strings, null, etc.
 *   This wrapper can be used as a workaround if you really need to force cljs-devtools rendering:
 * 
 *  (.log js/console nil) ; will render 'null'
 *  (.log js/console (force-format nil)) ; will render 'nil' and not 'null'
 * 
 *   See https://github.com/binaryage/cljs-devtools/issues/17
 *   
 */
devtools.toolbox.force_format = (function devtools$toolbox$force_format(obj){
return devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_surrogate_GT_.call(null,obj));
});

//# sourceMappingURL=toolbox.js.map?rel=1488439832388