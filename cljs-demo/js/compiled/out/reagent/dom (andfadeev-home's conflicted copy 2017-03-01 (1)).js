// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25125__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_114021 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_114021){
return (function (){
var _STAR_always_update_STAR_114022 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_114022;
}});})(_STAR_always_update_STAR_114021))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_114021;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args114023 = [];
var len__26200__auto___114026 = arguments.length;
var i__26201__auto___114027 = (0);
while(true){
if((i__26201__auto___114027 < len__26200__auto___114026)){
args114023.push((arguments[i__26201__auto___114027]));

var G__114028 = (i__26201__auto___114027 + (1));
i__26201__auto___114027 = G__114028;
continue;
} else {
}
break;
}

var G__114025 = args114023.length;
switch (G__114025) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args114023.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__114034_114038 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__114035_114039 = null;
var count__114036_114040 = (0);
var i__114037_114041 = (0);
while(true){
if((i__114037_114041 < count__114036_114040)){
var v_114042 = cljs.core._nth.call(null,chunk__114035_114039,i__114037_114041);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_114042);

var G__114043 = seq__114034_114038;
var G__114044 = chunk__114035_114039;
var G__114045 = count__114036_114040;
var G__114046 = (i__114037_114041 + (1));
seq__114034_114038 = G__114043;
chunk__114035_114039 = G__114044;
count__114036_114040 = G__114045;
i__114037_114041 = G__114046;
continue;
} else {
var temp__4657__auto___114047 = cljs.core.seq.call(null,seq__114034_114038);
if(temp__4657__auto___114047){
var seq__114034_114048__$1 = temp__4657__auto___114047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__114034_114048__$1)){
var c__25936__auto___114049 = cljs.core.chunk_first.call(null,seq__114034_114048__$1);
var G__114050 = cljs.core.chunk_rest.call(null,seq__114034_114048__$1);
var G__114051 = c__25936__auto___114049;
var G__114052 = cljs.core.count.call(null,c__25936__auto___114049);
var G__114053 = (0);
seq__114034_114038 = G__114050;
chunk__114035_114039 = G__114051;
count__114036_114040 = G__114052;
i__114037_114041 = G__114053;
continue;
} else {
var v_114054 = cljs.core.first.call(null,seq__114034_114048__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_114054);

var G__114055 = cljs.core.next.call(null,seq__114034_114048__$1);
var G__114056 = null;
var G__114057 = (0);
var G__114058 = (0);
seq__114034_114038 = G__114055;
chunk__114035_114039 = G__114056;
count__114036_114040 = G__114057;
i__114037_114041 = G__114058;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1488400160373