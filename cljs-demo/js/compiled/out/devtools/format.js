// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25788__auto__ = (((value == null))?null:value);
var m__25789__auto__ = (devtools.format._header[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,value);
} else {
var m__25789__auto____$1 = (devtools.format._header["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25788__auto__ = (((value == null))?null:value);
var m__25789__auto__ = (devtools.format._has_body[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,value);
} else {
var m__25789__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25788__auto__ = (((value == null))?null:value);
var m__25789__auto__ = (devtools.format._body[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,value);
} else {
var m__25789__auto____$1 = (devtools.format._body["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39137__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39137__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39137__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39137__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39136__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39136__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39137__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39137__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39137__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39137__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39136__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39136__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39137__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39137__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39137__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39137__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39136__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39136__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39137__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39137__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39137__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39137__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39136__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39136__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39137__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39137__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39137__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39137__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39136__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39136__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39137__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39137__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39137__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39137__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39136__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39136__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39137__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39137__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39137__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39137__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39136__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39136__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__26207__auto__ = [];
var len__26200__auto___128799 = arguments.length;
var i__26201__auto___128800 = (0);
while(true){
if((i__26201__auto___128800 < len__26200__auto___128799)){
args__26207__auto__.push((arguments[i__26201__auto___128800]));

var G__128801 = (i__26201__auto___128800 + (1));
i__26201__auto___128800 = G__128801;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq128798){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq128798));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__26207__auto__ = [];
var len__26200__auto___128803 = arguments.length;
var i__26201__auto___128804 = (0);
while(true){
if((i__26201__auto___128804 < len__26200__auto___128803)){
args__26207__auto__.push((arguments[i__26201__auto___128804]));

var G__128805 = (i__26201__auto___128804 + (1));
i__26201__auto___128804 = G__128805;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq128802){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq128802));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__26207__auto__ = [];
var len__26200__auto___128807 = arguments.length;
var i__26201__auto___128808 = (0);
while(true){
if((i__26201__auto___128808 < len__26200__auto___128807)){
args__26207__auto__.push((arguments[i__26201__auto___128808]));

var G__128809 = (i__26201__auto___128808 + (1));
i__26201__auto___128808 = G__128809;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq128806){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq128806));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__26207__auto__ = [];
var len__26200__auto___128811 = arguments.length;
var i__26201__auto___128812 = (0);
while(true){
if((i__26201__auto___128812 < len__26200__auto___128811)){
args__26207__auto__.push((arguments[i__26201__auto___128812]));

var G__128813 = (i__26201__auto___128812 + (1));
i__26201__auto___128812 = G__128813;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq128810){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq128810));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__26207__auto__ = [];
var len__26200__auto___128815 = arguments.length;
var i__26201__auto___128816 = (0);
while(true){
if((i__26201__auto___128816 < len__26200__auto___128815)){
args__26207__auto__.push((arguments[i__26201__auto___128816]));

var G__128817 = (i__26201__auto___128816 + (1));
i__26201__auto___128816 = G__128817;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq128814){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq128814));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__26207__auto__ = [];
var len__26200__auto___128819 = arguments.length;
var i__26201__auto___128820 = (0);
while(true){
if((i__26201__auto___128820 < len__26200__auto___128819)){
args__26207__auto__.push((arguments[i__26201__auto___128820]));

var G__128821 = (i__26201__auto___128820 + (1));
i__26201__auto___128820 = G__128821;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq128818){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq128818));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__26207__auto__ = [];
var len__26200__auto___128823 = arguments.length;
var i__26201__auto___128824 = (0);
while(true){
if((i__26201__auto___128824 < len__26200__auto___128823)){
args__26207__auto__.push((arguments[i__26201__auto___128824]));

var G__128825 = (i__26201__auto___128824 + (1));
i__26201__auto___128824 = G__128825;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq128822){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq128822));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__26207__auto__ = [];
var len__26200__auto___128833 = arguments.length;
var i__26201__auto___128834 = (0);
while(true){
if((i__26201__auto___128834 < len__26200__auto___128833)){
args__26207__auto__.push((arguments[i__26201__auto___128834]));

var G__128835 = (i__26201__auto___128834 + (1));
i__26201__auto___128834 = G__128835;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((1) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26208__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__128829){
var vec__128830 = p__128829;
var state_override = cljs.core.nth.call(null,vec__128830,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__128830,state_override){
return (function (p1__128826_SHARP_){
return cljs.core.merge.call(null,p1__128826_SHARP_,state_override);
});})(vec__128830,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq128827){
var G__128828 = cljs.core.first.call(null,seq128827);
var seq128827__$1 = cljs.core.next.call(null,seq128827);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__128828,seq128827__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__26207__auto__ = [];
var len__26200__auto___128837 = arguments.length;
var i__26201__auto___128838 = (0);
while(true){
if((i__26201__auto___128838 < len__26200__auto___128837)){
args__26207__auto__.push((arguments[i__26201__auto___128838]));

var G__128839 = (i__26201__auto___128838 + (1));
i__26201__auto___128838 = G__128839;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq128836){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq128836));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__26207__auto__ = [];
var len__26200__auto___128842 = arguments.length;
var i__26201__auto___128843 = (0);
while(true){
if((i__26201__auto___128843 < len__26200__auto___128842)){
args__26207__auto__.push((arguments[i__26201__auto___128843]));

var G__128844 = (i__26201__auto___128843 + (1));
i__26201__auto___128843 = G__128844;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((1) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26208__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq128840){
var G__128841 = cljs.core.first.call(null,seq128840);
var seq128840__$1 = cljs.core.next.call(null,seq128840);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__128841,seq128840__$1);
});


//# sourceMappingURL=format.js.map?rel=1488400201957