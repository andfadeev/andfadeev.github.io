// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32118 = arguments.length;
var i__26201__auto___32119 = (0);
while(true){
if((i__26201__auto___32119 < len__26200__auto___32118)){
args__26207__auto__.push((arguments[i__26201__auto___32119]));

var G__32120 = (i__26201__auto___32119 + (1));
i__26201__auto___32119 = G__32120;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__25959__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})());
var G__32121 = threaded;
var G__32122 = cljs.core.next.call(null,forms__$1);
x__$1 = G__32121;
forms__$1 = G__32122;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq32114){
var G__32115 = cljs.core.first.call(null,seq32114);
var seq32114__$1 = cljs.core.next.call(null,seq32114);
var G__32116 = cljs.core.first.call(null,seq32114__$1);
var seq32114__$2 = cljs.core.next.call(null,seq32114__$1);
var G__32117 = cljs.core.first.call(null,seq32114__$2);
var seq32114__$3 = cljs.core.next.call(null,seq32114__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32115,G__32116,G__32117,seq32114__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32127 = arguments.length;
var i__26201__auto___32128 = (0);
while(true){
if((i__26201__auto___32128 < len__26200__auto___32127)){
args__26207__auto__.push((arguments[i__26201__auto___32128]));

var G__32129 = (i__26201__auto___32128 + (1));
i__26201__auto___32128 = G__32129;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__25959__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__25959__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})());
var G__32130 = threaded;
var G__32131 = cljs.core.next.call(null,forms__$1);
x__$1 = G__32130;
forms__$1 = G__32131;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq32123){
var G__32124 = cljs.core.first.call(null,seq32123);
var seq32123__$1 = cljs.core.next.call(null,seq32123);
var G__32125 = cljs.core.first.call(null,seq32123__$1);
var seq32123__$2 = cljs.core.next.call(null,seq32123__$1);
var G__32126 = cljs.core.first.call(null,seq32123__$2);
var seq32123__$3 = cljs.core.next.call(null,seq32123__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32124,G__32125,G__32126,seq32123__$3);
});


cljs.core$macros.__GT__GT_.cljs$lang$macro = true;
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var args32132 = [];
var len__26200__auto___32140 = arguments.length;
var i__26201__auto___32141 = (0);
while(true){
if((i__26201__auto___32141 < len__26200__auto___32140)){
args32132.push((arguments[i__26201__auto___32141]));

var G__32142 = (i__26201__auto___32141 + (1));
i__26201__auto___32141 = G__32142;
continue;
} else {
}
break;
}

var G__32139 = args32132.length;
switch (G__32139) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32132.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq32133){
var G__32134 = cljs.core.first.call(null,seq32133);
var seq32133__$1 = cljs.core.next.call(null,seq32133);
var G__32135 = cljs.core.first.call(null,seq32133__$1);
var seq32133__$2 = cljs.core.next.call(null,seq32133__$1);
var G__32136 = cljs.core.first.call(null,seq32133__$2);
var seq32133__$3 = cljs.core.next.call(null,seq32133__$2);
var G__32137 = cljs.core.first.call(null,seq32133__$3);
var seq32133__$4 = cljs.core.next.call(null,seq32133__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__32134,G__32135,G__32136,G__32137,seq32133__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32147 = arguments.length;
var i__26201__auto___32148 = (0);
while(true){
if((i__26201__auto___32148 < len__26200__auto___32147)){
args__26207__auto__.push((arguments[i__26201__auto___32148]));

var G__32149 = (i__26201__auto___32148 + (1));
i__26201__auto___32148 = G__32149;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq32144){
var G__32145 = cljs.core.first.call(null,seq32144);
var seq32144__$1 = cljs.core.next.call(null,seq32144);
var G__32146 = cljs.core.first.call(null,seq32144__$1);
var seq32144__$2 = cljs.core.next.call(null,seq32144__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__32145,G__32146,seq32144__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32153 = arguments.length;
var i__26201__auto___32154 = (0);
while(true){
if((i__26201__auto___32154 < len__26200__auto___32153)){
args__26207__auto__.push((arguments[i__26201__auto___32154]));

var G__32155 = (i__26201__auto___32154 + (1));
i__26201__auto___32154 = G__32155;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__25959__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__25959__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$2);
})(),x__25959__auto____$1);
})(),x__25959__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq32150){
var G__32151 = cljs.core.first.call(null,seq32150);
var seq32150__$1 = cljs.core.next.call(null,seq32150);
var G__32152 = cljs.core.first.call(null,seq32150__$1);
var seq32150__$2 = cljs.core.next.call(null,seq32150__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__32151,G__32152,seq32150__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32160 = arguments.length;
var i__26201__auto___32161 = (0);
while(true){
if((i__26201__auto___32161 < len__26200__auto___32160)){
args__26207__auto__.push((arguments[i__26201__auto___32161]));

var G__32162 = (i__26201__auto___32161 + (1));
i__26201__auto___32161 = G__32162;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__32156_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25959__auto__ = cljs.core.vary_meta.call(null,p1__32156_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq32157){
var G__32158 = cljs.core.first.call(null,seq32157);
var seq32157__$1 = cljs.core.next.call(null,seq32157);
var G__32159 = cljs.core.first.call(null,seq32157__$1);
var seq32157__$2 = cljs.core.next.call(null,seq32157__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__32158,G__32159,seq32157__$2);
});


cljs.core$macros.declare.cljs$lang$macro = true;
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32167 = arguments.length;
var i__26201__auto___32168 = (0);
while(true){
if((i__26201__auto___32168 < len__26200__auto___32167)){
args__26207__auto__.push((arguments[i__26201__auto___32168]));

var G__32169 = (i__26201__auto___32168 + (1));
i__26201__auto___32168 = G__32169;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__25959__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq32163){
var G__32164 = cljs.core.first.call(null,seq32163);
var seq32163__$1 = cljs.core.next.call(null,seq32163);
var G__32165 = cljs.core.first.call(null,seq32163__$1);
var seq32163__$2 = cljs.core.next.call(null,seq32163__$1);
var G__32166 = cljs.core.first.call(null,seq32163__$2);
var seq32163__$3 = cljs.core.next.call(null,seq32163__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__32164,G__32165,G__32166,seq32163__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__32170 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__32171 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__32170;
s = G__32171;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,((function (impls){
return (function (p__32176){
var vec__32177 = p__32176;
var t = cljs.core.nth.call(null,vec__32177,(0),null);
var fs = cljs.core.nth.call(null,vec__32177,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__25959__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),fs)));
});})(impls))
,impls))));
});
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32184 = arguments.length;
var i__26201__auto___32185 = (0);
while(true){
if((i__26201__auto___32185 < len__26200__auto___32184)){
args__26207__auto__.push((arguments[i__26201__auto___32185]));

var G__32186 = (i__26201__auto___32185 + (1));
i__26201__auto___32185 = G__32186;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq32180){
var G__32181 = cljs.core.first.call(null,seq32180);
var seq32180__$1 = cljs.core.next.call(null,seq32180);
var G__32182 = cljs.core.first.call(null,seq32180__$1);
var seq32180__$2 = cljs.core.next.call(null,seq32180__$1);
var G__32183 = cljs.core.first.call(null,seq32180__$2);
var seq32180__$3 = cljs.core.next.call(null,seq32180__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__32181,G__32182,G__32183,seq32180__$3);
});


cljs.core$macros.extend_protocol.cljs$lang$macro = true;
cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__32187 = cljs.core.next.call(null,params__$1);
var G__32188 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__32189 = lets;
params__$1 = G__32187;
new_params = G__32188;
lets = G__32189;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__32190 = cljs.core.next.call(null,params__$1);
var G__32191 = cljs.core.conj.call(null,new_params,gparam);
var G__32192 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__32190;
new_params = G__32191;
lets = G__32192;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}
break;
}
}
});
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32199 = arguments.length;
var i__26201__auto___32200 = (0);
while(true){
if((i__26201__auto___32200 < len__26200__auto___32199)){
args__26207__auto__.push((arguments[i__26201__auto___32200]));

var G__32201 = (i__26201__auto___32200 + (1));
i__26201__auto___32200 = G__32201;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__25959__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first.call(null,sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__32196 = sig;
var seq__32197 = cljs.core.seq.call(null,vec__32196);
var first__32198 = cljs.core.first.call(null,seq__32197);
var seq__32197__$1 = cljs.core.next.call(null,seq__32197);
var params = first__32198;
var body = seq__32197__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__25125__auto__ = conds;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__25959__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.map.call(null,((function (vec__32196,seq__32197,first__32198,seq__32197__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__25959__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});})(vec__32196,seq__32197,first__32198,seq__32197__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__32196,seq__32197,first__32198,seq__32197__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__25959__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});})(vec__32196,seq__32197,first__32198,seq__32197__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq32193){
var G__32194 = cljs.core.first.call(null,seq32193);
var seq32193__$1 = cljs.core.next.call(null,seq32193);
var G__32195 = cljs.core.first.call(null,seq32193__$1);
var seq32193__$2 = cljs.core.next.call(null,seq32193__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__32194,G__32195,seq32193__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32206 = arguments.length;
var i__26201__auto___32207 = (0);
while(true){
if((i__26201__auto___32207 < len__26200__auto___32206)){
args__26207__auto__.push((arguments[i__26201__auto___32207]));

var G__32208 = (i__26201__auto___32207 + (1));
i__26201__auto___32207 = G__32208;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq32202){
var G__32203 = cljs.core.first.call(null,seq32202);
var seq32202__$1 = cljs.core.next.call(null,seq32202);
var G__32204 = cljs.core.first.call(null,seq32202__$1);
var seq32202__$2 = cljs.core.next.call(null,seq32202__$1);
var G__32205 = cljs.core.first.call(null,seq32202__$2);
var seq32202__$3 = cljs.core.next.call(null,seq32202__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__32203,G__32204,G__32205,seq32202__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args32210 = [];
var len__26200__auto___32219 = arguments.length;
var i__26201__auto___32220 = (0);
while(true){
if((i__26201__auto___32220 < len__26200__auto___32219)){
args32210.push((arguments[i__26201__auto___32220]));

var G__32221 = (i__26201__auto___32220 + (1));
i__26201__auto___32220 = G__32221;
continue;
} else {
}
break;
}

var G__32218 = args32210.length;
switch (G__32218) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32210.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__26219__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__25959__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32209__auto__","temp__32209__auto__",498519856,null)),(function (){var x__25959__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32209__auto__","temp__32209__auto__",498519856,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32209__auto__","temp__32209__auto__",498519856,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq32211){
var G__32212 = cljs.core.first.call(null,seq32211);
var seq32211__$1 = cljs.core.next.call(null,seq32211);
var G__32213 = cljs.core.first.call(null,seq32211__$1);
var seq32211__$2 = cljs.core.next.call(null,seq32211__$1);
var G__32214 = cljs.core.first.call(null,seq32211__$2);
var seq32211__$3 = cljs.core.next.call(null,seq32211__$2);
var G__32215 = cljs.core.first.call(null,seq32211__$3);
var seq32211__$4 = cljs.core.next.call(null,seq32211__$3);
var G__32216 = cljs.core.first.call(null,seq32211__$4);
var seq32211__$5 = cljs.core.next.call(null,seq32211__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__32212,G__32213,G__32214,G__32215,G__32216,seq32211__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args32223 = [];
var len__26200__auto___32226 = arguments.length;
var i__26201__auto___32227 = (0);
while(true){
if((i__26201__auto___32227 < len__26200__auto___32226)){
args32223.push((arguments[i__26201__auto___32227]));

var G__32228 = (i__26201__auto___32227 + (1));
i__26201__auto___32227 = G__32228;
continue;
} else {
}
break;
}

var G__32225 = args32223.length;
switch (G__32225) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args32223.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25959__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__25959__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;


cljs.core$macros.if_not.cljs$lang$macro = true;
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32235 = arguments.length;
var i__26201__auto___32236 = (0);
while(true){
if((i__26201__auto___32236 < len__26200__auto___32235)){
args__26207__auto__.push((arguments[i__26201__auto___32236]));

var G__32237 = (i__26201__auto___32236 + (1));
i__26201__auto___32236 = G__32237;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__32230_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__32230_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq32231){
var G__32232 = cljs.core.first.call(null,seq32231);
var seq32231__$1 = cljs.core.next.call(null,seq32231);
var G__32233 = cljs.core.first.call(null,seq32231__$1);
var seq32231__$2 = cljs.core.next.call(null,seq32231__$1);
var G__32234 = cljs.core.first.call(null,seq32231__$2);
var seq32231__$3 = cljs.core.next.call(null,seq32231__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__32232,G__32233,G__32234,seq32231__$3);
});


cljs.core$macros.letfn.cljs$lang$macro = true;
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a Java method as
 *   a first-class fn. name may be type-hinted with the method receiver's
 *   type in order to avoid reflective calls.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32242 = arguments.length;
var i__26201__auto___32243 = (0);
while(true){
if((i__26201__auto___32243 < len__26200__auto___32242)){
args__26207__auto__.push((arguments[i__26201__auto___32243]));

var G__32244 = (i__26201__auto___32243 + (1));
i__26201__auto___32243 = G__32244;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq32238){
var G__32239 = cljs.core.first.call(null,seq32238);
var seq32238__$1 = cljs.core.next.call(null,seq32238);
var G__32240 = cljs.core.first.call(null,seq32238__$1);
var seq32238__$2 = cljs.core.next.call(null,seq32238__$1);
var G__32241 = cljs.core.first.call(null,seq32238__$2);
var seq32238__$3 = cljs.core.next.call(null,seq32238__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__32239,G__32240,G__32241,seq32238__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32249 = arguments.length;
var i__26201__auto___32250 = (0);
while(true){
if((i__26201__auto___32250 < len__26200__auto___32249)){
args__26207__auto__.push((arguments[i__26201__auto___32250]));

var G__32251 = (i__26201__auto___32250 + (1));
i__26201__auto___32250 = G__32251;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__25959__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq32245){
var G__32246 = cljs.core.first.call(null,seq32245);
var seq32245__$1 = cljs.core.next.call(null,seq32245);
var G__32247 = cljs.core.first.call(null,seq32245__$1);
var seq32245__$2 = cljs.core.next.call(null,seq32245__$1);
var G__32248 = cljs.core.first.call(null,seq32245__$2);
var seq32245__$3 = cljs.core.next.call(null,seq32245__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__32246,G__32247,G__32248,seq32245__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32260 = arguments.length;
var i__26201__auto___32261 = (0);
while(true){
if((i__26201__auto___32261 < len__26200__auto___32260)){
args__26207__auto__.push((arguments[i__26201__auto___32261]));

var G__32262 = (i__26201__auto___32261 + (1));
i__26201__auto___32261 = G__32262;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__32257 = bindings;
var x = cljs.core.nth.call(null,vec__32257,(0),null);
var xs = cljs.core.nth.call(null,vec__32257,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__32252__auto__","xs__32252__auto__",-679740783,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25959__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__32252__auto__","xs__32252__auto__",-679740783,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq32253){
var G__32254 = cljs.core.first.call(null,seq32253);
var seq32253__$1 = cljs.core.next.call(null,seq32253);
var G__32255 = cljs.core.first.call(null,seq32253__$1);
var seq32253__$2 = cljs.core.next.call(null,seq32253__$1);
var G__32256 = cljs.core.first.call(null,seq32253__$2);
var seq32253__$3 = cljs.core.next.call(null,seq32253__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__32254,G__32255,G__32256,seq32253__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32268 = arguments.length;
var i__26201__auto___32269 = (0);
while(true){
if((i__26201__auto___32269 < len__26200__auto___32268)){
args__26207__auto__.push((arguments[i__26201__auto___32269]));

var G__32270 = (i__26201__auto___32269 + (1));
i__26201__auto___32269 = G__32270;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32263__auto__","temp__32263__auto__",-999201508,null)),(function (){var x__25959__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32263__auto__","temp__32263__auto__",-999201508,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32263__auto__","temp__32263__auto__",-999201508,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq32264){
var G__32265 = cljs.core.first.call(null,seq32264);
var seq32264__$1 = cljs.core.next.call(null,seq32264);
var G__32266 = cljs.core.first.call(null,seq32264__$1);
var seq32264__$2 = cljs.core.next.call(null,seq32264__$1);
var G__32267 = cljs.core.first.call(null,seq32264__$2);
var seq32264__$3 = cljs.core.next.call(null,seq32264__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__32265,G__32266,G__32267,seq32264__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32275 = arguments.length;
var i__26201__auto___32276 = (0);
while(true){
if((i__26201__auto___32276 < len__26200__auto___32275)){
args__26207__auto__.push((arguments[i__26201__auto___32276]));

var G__32277 = (i__26201__auto___32276 + (1));
i__26201__auto___32276 = G__32277;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__25959__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),null),x__25959__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq32271){
var G__32272 = cljs.core.first.call(null,seq32271);
var seq32271__$1 = cljs.core.next.call(null,seq32271);
var G__32273 = cljs.core.first.call(null,seq32271__$1);
var seq32271__$2 = cljs.core.next.call(null,seq32271__$1);
var G__32274 = cljs.core.first.call(null,seq32271__$2);
var seq32271__$3 = cljs.core.next.call(null,seq32271__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__32272,G__32273,G__32274,seq32271__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32282 = arguments.length;
var i__26201__auto___32283 = (0);
while(true){
if((i__26201__auto___32283 < len__26200__auto___32282)){
args__26207__auto__.push((arguments[i__26201__auto___32283]));

var G__32284 = (i__26201__auto___32283 + (1));
i__26201__auto___32283 = G__32284;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25959__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body,(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq32278){
var G__32279 = cljs.core.first.call(null,seq32278);
var seq32278__$1 = cljs.core.next.call(null,seq32278);
var G__32280 = cljs.core.first.call(null,seq32278__$1);
var seq32278__$2 = cljs.core.next.call(null,seq32278__$1);
var G__32281 = cljs.core.first.call(null,seq32278__$2);
var seq32278__$3 = cljs.core.next.call(null,seq32278__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__32279,G__32280,G__32281,seq32278__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32293 = arguments.length;
var i__26201__auto___32294 = (0);
while(true){
if((i__26201__auto___32294 < len__26200__auto___32293)){
args__26207__auto__.push((arguments[i__26201__auto___32294]));

var G__32295 = (i__26201__auto___32294 + (1));
i__26201__auto___32294 = G__32295;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__32289){
var vec__32290 = p__32289;
var test = cljs.core.nth.call(null,vec__32290,(0),null);
var step = cljs.core.nth.call(null,vec__32290,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__25959__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq32285){
var G__32286 = cljs.core.first.call(null,seq32285);
var seq32285__$1 = cljs.core.next.call(null,seq32285);
var G__32287 = cljs.core.first.call(null,seq32285__$1);
var seq32285__$2 = cljs.core.next.call(null,seq32285__$1);
var G__32288 = cljs.core.first.call(null,seq32285__$2);
var seq32285__$3 = cljs.core.next.call(null,seq32285__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32286,G__32287,G__32288,seq32285__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32304 = arguments.length;
var i__26201__auto___32305 = (0);
while(true){
if((i__26201__auto___32305 < len__26200__auto___32304)){
args__26207__auto__.push((arguments[i__26201__auto___32305]));

var G__32306 = (i__26201__auto___32305 + (1));
i__26201__auto___32305 = G__32306;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__32300){
var vec__32301 = p__32300;
var test = cljs.core.nth.call(null,vec__32301,(0),null);
var step = cljs.core.nth.call(null,vec__32301,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__25959__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq32296){
var G__32297 = cljs.core.first.call(null,seq32296);
var seq32296__$1 = cljs.core.next.call(null,seq32296);
var G__32298 = cljs.core.first.call(null,seq32296__$1);
var seq32296__$2 = cljs.core.next.call(null,seq32296__$1);
var G__32299 = cljs.core.first.call(null,seq32296__$2);
var seq32296__$3 = cljs.core.next.call(null,seq32296__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32297,G__32298,G__32299,seq32296__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32312 = arguments.length;
var i__26201__auto___32313 = (0);
while(true){
if((i__26201__auto___32313 < len__26200__auto___32312)){
args__26207__auto__.push((arguments[i__26201__auto___32313]));

var G__32314 = (i__26201__auto___32313 + (1));
i__26201__auto___32313 = G__32314;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((4) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26208__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq32307){
var G__32308 = cljs.core.first.call(null,seq32307);
var seq32307__$1 = cljs.core.next.call(null,seq32307);
var G__32309 = cljs.core.first.call(null,seq32307__$1);
var seq32307__$2 = cljs.core.next.call(null,seq32307__$1);
var G__32310 = cljs.core.first.call(null,seq32307__$2);
var seq32307__$3 = cljs.core.next.call(null,seq32307__$2);
var G__32311 = cljs.core.first.call(null,seq32307__$3);
var seq32307__$4 = cljs.core.next.call(null,seq32307__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32308,G__32309,G__32310,G__32311,seq32307__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32319 = arguments.length;
var i__26201__auto___32320 = (0);
while(true){
if((i__26201__auto___32320 < len__26200__auto___32319)){
args__26207__auto__.push((arguments[i__26201__auto___32320]));

var G__32321 = (i__26201__auto___32320 + (1));
i__26201__auto___32320 = G__32321;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25959__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__25959__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq32315){
var G__32316 = cljs.core.first.call(null,seq32315);
var seq32315__$1 = cljs.core.next.call(null,seq32315);
var G__32317 = cljs.core.first.call(null,seq32315__$1);
var seq32315__$2 = cljs.core.next.call(null,seq32315__$1);
var G__32318 = cljs.core.first.call(null,seq32315__$2);
var seq32315__$3 = cljs.core.next.call(null,seq32315__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32316,G__32317,G__32318,seq32315__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32326 = arguments.length;
var i__26201__auto___32327 = (0);
while(true){
if((i__26201__auto___32327 < len__26200__auto___32326)){
args__26207__auto__.push((arguments[i__26201__auto___32327]));

var G__32328 = (i__26201__auto___32327 + (1));
i__26201__auto___32327 = G__32328;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25959__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__25959__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq32322){
var G__32323 = cljs.core.first.call(null,seq32322);
var seq32322__$1 = cljs.core.next.call(null,seq32322);
var G__32324 = cljs.core.first.call(null,seq32322__$1);
var seq32322__$2 = cljs.core.next.call(null,seq32322__$1);
var G__32325 = cljs.core.first.call(null,seq32322__$2);
var seq32322__$3 = cljs.core.next.call(null,seq32322__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32323,G__32324,G__32325,seq32322__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args32330 = [];
var len__26200__auto___32339 = arguments.length;
var i__26201__auto___32340 = (0);
while(true){
if((i__26201__auto___32340 < len__26200__auto___32339)){
args32330.push((arguments[i__26201__auto___32340]));

var G__32341 = (i__26201__auto___32340 + (1));
i__26201__auto___32340 = G__32341;
continue;
} else {
}
break;
}

var G__32338 = args32330.length;
switch (G__32338) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32330.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__26219__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__25959__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32329__auto__","temp__32329__auto__",1188807073,null)),(function (){var x__25959__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32329__auto__","temp__32329__auto__",1188807073,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32329__auto__","temp__32329__auto__",1188807073,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq32331){
var G__32332 = cljs.core.first.call(null,seq32331);
var seq32331__$1 = cljs.core.next.call(null,seq32331);
var G__32333 = cljs.core.first.call(null,seq32331__$1);
var seq32331__$2 = cljs.core.next.call(null,seq32331__$1);
var G__32334 = cljs.core.first.call(null,seq32331__$2);
var seq32331__$3 = cljs.core.next.call(null,seq32331__$2);
var G__32335 = cljs.core.first.call(null,seq32331__$3);
var seq32331__$4 = cljs.core.next.call(null,seq32331__$3);
var G__32336 = cljs.core.first.call(null,seq32331__$4);
var seq32331__$5 = cljs.core.next.call(null,seq32331__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__32332,G__32333,G__32334,G__32335,G__32336,seq32331__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_some.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32348 = arguments.length;
var i__26201__auto___32349 = (0);
while(true){
if((i__26201__auto___32349 < len__26200__auto___32348)){
args__26207__auto__.push((arguments[i__26201__auto___32349]));

var G__32350 = (i__26201__auto___32349 + (1));
i__26201__auto___32349 = G__32350;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32343__auto__","temp__32343__auto__",-1146894670,null)),(function (){var x__25959__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32343__auto__","temp__32343__auto__",-1146894670,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32343__auto__","temp__32343__auto__",-1146894670,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq32344){
var G__32345 = cljs.core.first.call(null,seq32344);
var seq32344__$1 = cljs.core.next.call(null,seq32344);
var G__32346 = cljs.core.first.call(null,seq32344__$1);
var seq32344__$2 = cljs.core.next.call(null,seq32344__$1);
var G__32347 = cljs.core.first.call(null,seq32344__$2);
var seq32344__$3 = cljs.core.next.call(null,seq32344__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__32345,G__32346,G__32347,seq32344__$3);
});


cljs.core$macros.when_some.cljs$lang$macro = true;
/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__32351_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__32351_SHARP_)){
return cljs.core.first.call(null,p1__32351_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__32351_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__32351_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__32352_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__32352_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error([cljs.core.str("Parameter declaration \""),cljs.core.str(cljs.core.first.call(null,bad_args)),cljs.core.str("\" should be a vector")].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__32353 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__32354 = cljs.core.next.call(null,fdecls);
ret = G__32353;
fdecls = G__32354;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__25959__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.defonce.cljs$lang$macro = true;
cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var gseq = cljs.core.gensym.call(null,"seq__");
var gfirst = cljs.core.gensym.call(null,"first__");
var has_rest = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.call(null,bvec__$1,gvec,val);
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__25959__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__32364 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__32365 = n;
var G__32366 = cljs.core.nnext.call(null,bs);
var G__32367 = true;
ret = G__32364;
n = G__32365;
bs = G__32366;
seen_rest_QMARK_ = G__32367;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__32368 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__25959__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__25959__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__25959__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__25959__auto____$1);
})(),x__25959__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__32369 = (n + (1));
var G__32370 = cljs.core.next.call(null,bs);
var G__32371 = seen_rest_QMARK_;
ret = G__32368;
n = G__32369;
bs = G__32370;
seen_rest_QMARK_ = G__32371;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__25959__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__25959__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__32355_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__25125__auto__ = mkns;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core.namespace.call(null,p1__32355_SHARP_);
}
})(),cljs.core.name.call(null,p1__32355_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__32356_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25959__auto__ = cljs.core.symbol.call(null,(function (){var or__25125__auto__ = mkns;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core.namespace.call(null,p1__32356_SHARP_);
}
})(),cljs.core.name.call(null,p1__32356_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"strs")){
return cljs.core.assoc.call(null,transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,b__$1));
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__32357_SHARP_,p2__32358_SHARP_){
return cljs.core.assoc.call(null,p1__32357_SHARP_,p2__32358_SHARP_,cljs.core.val.call(null,entry).call(null,p2__32358_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || (bb.cljs$core$INamed$))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__25959__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$2);
})(),x__25959__auto____$1);
})(),x__25959__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__25959__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__32372 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__32373 = cljs.core.next.call(null,bes);
ret = G__32372;
bes = G__32373;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error([cljs.core.str("Unsupported binding form: "),cljs.core.str(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__4655__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__32359_SHARP_){
return (cljs.core.first.call(null,p1__32359_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error([cljs.core.str("Unsupported binding key: "),cljs.core.str(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
/**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.call(null,[cljs.core.str(cljs.core._STAR_ns_STAR_),cljs.core.str("/"),cljs.core.str(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__25959__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25959__auto__ = [cljs.core.str("/** @define {"),cljs.core.str(type),cljs.core.str("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__25959__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.goog_define.cljs$lang$macro = true;
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32378 = arguments.length;
var i__26201__auto___32379 = (0);
while(true){
if((i__26201__auto___32379 < len__26200__auto___32378)){
args__26207__auto__.push((arguments[i__26201__auto___32379]));

var G__32380 = (i__26201__auto___32379 + (1));
i__26201__auto___32379 = G__32380;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__25959__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq32374){
var G__32375 = cljs.core.first.call(null,seq32374);
var seq32374__$1 = cljs.core.next.call(null,seq32374);
var G__32376 = cljs.core.first.call(null,seq32374__$1);
var seq32374__$2 = cljs.core.next.call(null,seq32374__$1);
var G__32377 = cljs.core.first.call(null,seq32374__$2);
var seq32374__$3 = cljs.core.next.call(null,seq32374__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__32375,G__32376,G__32377,seq32374__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32389 = arguments.length;
var i__26201__auto___32390 = (0);
while(true){
if((i__26201__auto___32390 < len__26200__auto___32389)){
args__26207__auto__.push((arguments[i__26201__auto___32390]));

var G__32391 = (i__26201__auto___32390 + (1));
i__26201__auto___32390 = G__32391;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__25959__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__32385){
var vec__32386 = p__32385;
var b = cljs.core.nth.call(null,vec__32386,(0),null);
var v = cljs.core.nth.call(null,vec__32386,(1),null);
var g = cljs.core.nth.call(null,vec__32386,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq32381){
var G__32382 = cljs.core.first.call(null,seq32381);
var seq32381__$1 = cljs.core.next.call(null,seq32381);
var G__32383 = cljs.core.first.call(null,seq32381__$1);
var seq32381__$2 = cljs.core.next.call(null,seq32381__$1);
var G__32384 = cljs.core.first.call(null,seq32381__$2);
var seq32381__$3 = cljs.core.next.call(null,seq32381__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__32382,G__32383,G__32384,seq32381__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__32392_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__32392_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__32393){
var vec__32394 = p__32393;
var p = cljs.core.nth.call(null,vec__32394,(0),null);
var b = cljs.core.nth.call(null,vec__32394,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32400 = arguments.length;
var i__26201__auto___32401 = (0);
while(true){
if((i__26201__auto___32401 < len__26200__auto___32400)){
args__26207__auto__.push((arguments[i__26201__auto___32401]));

var G__32402 = (i__26201__auto___32401 + (1));
i__26201__auto___32401 = G__32402;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq32397){
var G__32398 = cljs.core.first.call(null,seq32397);
var seq32397__$1 = cljs.core.next.call(null,seq32397);
var G__32399 = cljs.core.first.call(null,seq32397__$1);
var seq32397__$2 = cljs.core.next.call(null,seq32397__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__32398,G__32399,seq32397__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__25113__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__25113__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__25113__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args32406 = [];
var len__26200__auto___32413 = arguments.length;
var i__26201__auto___32414 = (0);
while(true){
if((i__26201__auto___32414 < len__26200__auto___32413)){
args32406.push((arguments[i__26201__auto___32414]));

var G__32415 = (i__26201__auto___32414 + (1));
i__26201__auto___32414 = G__32415;
continue;
} else {
}
break;
}

var G__32412 = args32406.length;
switch (G__32412) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32406.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26219__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__32403_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__32403_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__32404_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__32404_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25959__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__32405__auto__","and__32405__auto__",-910786672,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__32405__auto__","and__32405__auto__",-910786672,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__32405__auto__","and__32405__auto__",-910786672,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq32407){
var G__32408 = cljs.core.first.call(null,seq32407);
var seq32407__$1 = cljs.core.next.call(null,seq32407);
var G__32409 = cljs.core.first.call(null,seq32407__$1);
var seq32407__$2 = cljs.core.next.call(null,seq32407__$1);
var G__32410 = cljs.core.first.call(null,seq32407__$2);
var seq32407__$3 = cljs.core.next.call(null,seq32407__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__32408,G__32409,G__32410,seq32407__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);


cljs.core$macros.and.cljs$lang$macro = true;
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var args32420 = [];
var len__26200__auto___32427 = arguments.length;
var i__26201__auto___32428 = (0);
while(true){
if((i__26201__auto___32428 < len__26200__auto___32427)){
args32420.push((arguments[i__26201__auto___32428]));

var G__32429 = (i__26201__auto___32428 + (1));
i__26201__auto___32428 = G__32429;
continue;
} else {
}
break;
}

var G__32426 = args32420.length;
switch (G__32426) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32420.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26219__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__32417_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__32417_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__32418_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__32418_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25959__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__32419__auto__","or__32419__auto__",-1178371759,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__32419__auto__","or__32419__auto__",-1178371759,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__32419__auto__","or__32419__auto__",-1178371759,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq32421){
var G__32422 = cljs.core.first.call(null,seq32421);
var seq32421__$1 = cljs.core.next.call(null,seq32421);
var G__32423 = cljs.core.first.call(null,seq32421__$1);
var seq32421__$2 = cljs.core.next.call(null,seq32421__$1);
var G__32424 = cljs.core.first.call(null,seq32421__$2);
var seq32421__$3 = cljs.core.next.call(null,seq32421__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__32422,G__32423,G__32424,seq32421__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__25959__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__25959__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__32435 = clojure.string.split.call(null,comment,/\n/);
var seq__32436 = cljs.core.seq.call(null,vec__32435);
var first__32437 = cljs.core.first.call(null,seq__32436);
var seq__32436__$1 = cljs.core.next.call(null,seq__32436);
var x = first__32437;
var ys = seq__32436__$1;
return cljs.core._conj.call(null,(function (){var x__25959__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__32435,seq__32436,first__32437,seq__32436__$1,x,ys){
return (function (p1__32431_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__32431_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__32435,seq__32436,first__32437,seq__32436__$1,x,ys))
,ys))),cljs.core.str(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str("~{} = /** @type {"),cljs.core.str(t),cljs.core.str("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__25959__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$2);
})(),x__25959__auto____$1);
})(),x__25959__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__25959__auto__ = [cljs.core.str("/**"),cljs.core.str(comment),cljs.core.str("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__32438__auto__","c__32438__auto__",-93879598,null)),(function (){var x__25959__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32439__auto__","x__32439__auto__",-398052497,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32439__auto__","x__32439__auto__",-398052497,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__32438__auto__","c__32438__auto__",-93879598,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args32440 = [];
var len__26200__auto___32448 = arguments.length;
var i__26201__auto___32449 = (0);
while(true){
if((i__26201__auto___32449 < len__26200__auto___32448)){
args32440.push((arguments[i__26201__auto___32449]));

var G__32450 = (i__26201__auto___32449 + (1));
i__26201__auto___32449 = G__32450;
continue;
} else {
}
break;
}

var G__32447 = args32440.length;
switch (G__32447) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32440.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25959__auto__ = [cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq32441){
var G__32442 = cljs.core.first.call(null,seq32441);
var seq32441__$1 = cljs.core.next.call(null,seq32441);
var G__32443 = cljs.core.first.call(null,seq32441__$1);
var seq32441__$2 = cljs.core.next.call(null,seq32441__$1);
var G__32444 = cljs.core.first.call(null,seq32441__$2);
var seq32441__$3 = cljs.core.next.call(null,seq32441__$2);
var G__32445 = cljs.core.first.call(null,seq32441__$3);
var seq32441__$4 = cljs.core.next.call(null,seq32441__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__32442,G__32443,G__32444,G__32445,seq32441__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args32452 = [];
var len__26200__auto___32461 = arguments.length;
var i__26201__auto___32462 = (0);
while(true){
if((i__26201__auto___32462 < len__26200__auto___32461)){
args32452.push((arguments[i__26201__auto___32462]));

var G__32463 = (i__26201__auto___32462 + (1));
i__26201__auto___32462 = G__32463;
continue;
} else {
}
break;
}

var G__32460 = args32452.length;
switch (G__32460) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32452.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__26219__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$2);
})(),x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25959__auto__ = [cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq32453){
var G__32454 = cljs.core.first.call(null,seq32453);
var seq32453__$1 = cljs.core.next.call(null,seq32453);
var G__32455 = cljs.core.first.call(null,seq32453__$1);
var seq32453__$2 = cljs.core.next.call(null,seq32453__$1);
var G__32456 = cljs.core.first.call(null,seq32453__$2);
var seq32453__$3 = cljs.core.next.call(null,seq32453__$2);
var G__32457 = cljs.core.first.call(null,seq32453__$3);
var seq32453__$4 = cljs.core.next.call(null,seq32453__$3);
var G__32458 = cljs.core.first.call(null,seq32453__$4);
var seq32453__$5 = cljs.core.next.call(null,seq32453__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__32454,G__32455,G__32456,G__32457,G__32458,seq32453__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args32465 = [];
var len__26200__auto___32473 = arguments.length;
var i__26201__auto___32474 = (0);
while(true){
if((i__26201__auto___32474 < len__26200__auto___32473)){
args32465.push((arguments[i__26201__auto___32474]));

var G__32475 = (i__26201__auto___32474 + (1));
i__26201__auto___32474 = G__32475;
continue;
} else {
}
break;
}

var G__32472 = args32465.length;
switch (G__32472) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32465.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq32466){
var G__32467 = cljs.core.first.call(null,seq32466);
var seq32466__$1 = cljs.core.next.call(null,seq32466);
var G__32468 = cljs.core.first.call(null,seq32466__$1);
var seq32466__$2 = cljs.core.next.call(null,seq32466__$1);
var G__32469 = cljs.core.first.call(null,seq32466__$2);
var seq32466__$3 = cljs.core.next.call(null,seq32466__$2);
var G__32470 = cljs.core.first.call(null,seq32466__$3);
var seq32466__$4 = cljs.core.next.call(null,seq32466__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__32467,G__32468,G__32469,G__32470,seq32466__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._PLUS_.cljs$lang$macro = true;
cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.byte$.cljs$lang$macro = true;
cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.short$.cljs$lang$macro = true;
cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.float$.cljs$lang$macro = true;
cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.double$.cljs$lang$macro = true;
cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_byte.cljs$lang$macro = true;
cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_char.cljs$lang$macro = true;
cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_short.cljs$lang$macro = true;
cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_float.cljs$lang$macro = true;
cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_double.cljs$lang$macro = true;
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32480 = arguments.length;
var i__26201__auto___32481 = (0);
while(true){
if((i__26201__auto___32481 < len__26200__auto___32480)){
args__26207__auto__.push((arguments[i__26201__auto___32481]));

var G__32482 = (i__26201__auto___32481 + (1));
i__26201__auto___32481 = G__32482;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq32477){
var G__32478 = cljs.core.first.call(null,seq32477);
var seq32477__$1 = cljs.core.next.call(null,seq32477);
var G__32479 = cljs.core.first.call(null,seq32477__$1);
var seq32477__$2 = cljs.core.next.call(null,seq32477__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__32478,G__32479,seq32477__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32486 = arguments.length;
var i__26201__auto___32487 = (0);
while(true){
if((i__26201__auto___32487 < len__26200__auto___32486)){
args__26207__auto__.push((arguments[i__26201__auto___32487]));

var G__32488 = (i__26201__auto___32487 + (1));
i__26201__auto___32487 = G__32488;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq32483){
var G__32484 = cljs.core.first.call(null,seq32483);
var seq32483__$1 = cljs.core.next.call(null,seq32483);
var G__32485 = cljs.core.first.call(null,seq32483__$1);
var seq32483__$2 = cljs.core.next.call(null,seq32483__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__32484,G__32485,seq32483__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32492 = arguments.length;
var i__26201__auto___32493 = (0);
while(true){
if((i__26201__auto___32493 < len__26200__auto___32492)){
args__26207__auto__.push((arguments[i__26201__auto___32493]));

var G__32494 = (i__26201__auto___32493 + (1));
i__26201__auto___32493 = G__32494;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq32489){
var G__32490 = cljs.core.first.call(null,seq32489);
var seq32489__$1 = cljs.core.next.call(null,seq32489);
var G__32491 = cljs.core.first.call(null,seq32489__$1);
var seq32489__$2 = cljs.core.next.call(null,seq32489__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__32490,G__32491,seq32489__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32498 = arguments.length;
var i__26201__auto___32499 = (0);
while(true){
if((i__26201__auto___32499 < len__26200__auto___32498)){
args__26207__auto__.push((arguments[i__26201__auto___32499]));

var G__32500 = (i__26201__auto___32499 + (1));
i__26201__auto___32499 = G__32500;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq32495){
var G__32496 = cljs.core.first.call(null,seq32495);
var seq32495__$1 = cljs.core.next.call(null,seq32495);
var G__32497 = cljs.core.first.call(null,seq32495__$1);
var seq32495__$2 = cljs.core.next.call(null,seq32495__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__32496,G__32497,seq32495__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32504 = arguments.length;
var i__26201__auto___32505 = (0);
while(true){
if((i__26201__auto___32505 < len__26200__auto___32504)){
args__26207__auto__.push((arguments[i__26201__auto___32505]));

var G__32506 = (i__26201__auto___32505 + (1));
i__26201__auto___32505 = G__32506;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq32501){
var G__32502 = cljs.core.first.call(null,seq32501);
var seq32501__$1 = cljs.core.next.call(null,seq32501);
var G__32503 = cljs.core.first.call(null,seq32501__$1);
var seq32501__$2 = cljs.core.next.call(null,seq32501__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__32502,G__32503,seq32501__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mod","cljs.core$macros/mod",2132457375,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32510 = arguments.length;
var i__26201__auto___32511 = (0);
while(true){
if((i__26201__auto___32511 < len__26200__auto___32510)){
args__26207__auto__.push((arguments[i__26201__auto___32511]));

var G__32512 = (i__26201__auto___32511 + (1));
i__26201__auto___32511 = G__32512;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq32507){
var G__32508 = cljs.core.first.call(null,seq32507);
var seq32507__$1 = cljs.core.next.call(null,seq32507);
var G__32509 = cljs.core.first.call(null,seq32507__$1);
var seq32507__$2 = cljs.core.next.call(null,seq32507__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__32508,G__32509,seq32507__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32516 = arguments.length;
var i__26201__auto___32517 = (0);
while(true){
if((i__26201__auto___32517 < len__26200__auto___32516)){
args__26207__auto__.push((arguments[i__26201__auto___32517]));

var G__32518 = (i__26201__auto___32517 + (1));
i__26201__auto___32517 = G__32518;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq32513){
var G__32514 = cljs.core.first.call(null,seq32513);
var seq32513__$1 = cljs.core.next.call(null,seq32513);
var G__32515 = cljs.core.first.call(null,seq32513__$1);
var seq32513__$2 = cljs.core.next.call(null,seq32513__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__32514,G__32515,seq32513__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args32519 = [];
var len__26200__auto___32527 = arguments.length;
var i__26201__auto___32528 = (0);
while(true){
if((i__26201__auto___32528 < len__26200__auto___32527)){
args32519.push((arguments[i__26201__auto___32528]));

var G__32529 = (i__26201__auto___32528 + (1));
i__26201__auto___32528 = G__32529;
continue;
} else {
}
break;
}

var G__32526 = args32519.length;
switch (G__32526) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32519.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq32520){
var G__32521 = cljs.core.first.call(null,seq32520);
var seq32520__$1 = cljs.core.next.call(null,seq32520);
var G__32522 = cljs.core.first.call(null,seq32520__$1);
var seq32520__$2 = cljs.core.next.call(null,seq32520__$1);
var G__32523 = cljs.core.first.call(null,seq32520__$2);
var seq32520__$3 = cljs.core.next.call(null,seq32520__$2);
var G__32524 = cljs.core.first.call(null,seq32520__$3);
var seq32520__$4 = cljs.core.next.call(null,seq32520__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__32521,G__32522,G__32523,G__32524,seq32520__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args32531 = [];
var len__26200__auto___32539 = arguments.length;
var i__26201__auto___32540 = (0);
while(true){
if((i__26201__auto___32540 < len__26200__auto___32539)){
args32531.push((arguments[i__26201__auto___32540]));

var G__32541 = (i__26201__auto___32540 + (1));
i__26201__auto___32540 = G__32541;
continue;
} else {
}
break;
}

var G__32538 = args32531.length;
switch (G__32538) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32531.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq32532){
var G__32533 = cljs.core.first.call(null,seq32532);
var seq32532__$1 = cljs.core.next.call(null,seq32532);
var G__32534 = cljs.core.first.call(null,seq32532__$1);
var seq32532__$2 = cljs.core.next.call(null,seq32532__$1);
var G__32535 = cljs.core.first.call(null,seq32532__$2);
var seq32532__$3 = cljs.core.next.call(null,seq32532__$2);
var G__32536 = cljs.core.first.call(null,seq32532__$3);
var seq32532__$4 = cljs.core.next.call(null,seq32532__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__32533,G__32534,G__32535,G__32536,seq32532__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args32543 = [];
var len__26200__auto___32551 = arguments.length;
var i__26201__auto___32552 = (0);
while(true){
if((i__26201__auto___32552 < len__26200__auto___32551)){
args32543.push((arguments[i__26201__auto___32552]));

var G__32553 = (i__26201__auto___32552 + (1));
i__26201__auto___32552 = G__32553;
continue;
} else {
}
break;
}

var G__32550 = args32543.length;
switch (G__32550) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32543.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq32544){
var G__32545 = cljs.core.first.call(null,seq32544);
var seq32544__$1 = cljs.core.next.call(null,seq32544);
var G__32546 = cljs.core.first.call(null,seq32544__$1);
var seq32544__$2 = cljs.core.next.call(null,seq32544__$1);
var G__32547 = cljs.core.first.call(null,seq32544__$2);
var seq32544__$3 = cljs.core.next.call(null,seq32544__$2);
var G__32548 = cljs.core.first.call(null,seq32544__$3);
var seq32544__$4 = cljs.core.next.call(null,seq32544__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__32545,G__32546,G__32547,G__32548,seq32544__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args32555 = [];
var len__26200__auto___32563 = arguments.length;
var i__26201__auto___32564 = (0);
while(true){
if((i__26201__auto___32564 < len__26200__auto___32563)){
args32555.push((arguments[i__26201__auto___32564]));

var G__32565 = (i__26201__auto___32564 + (1));
i__26201__auto___32564 = G__32565;
continue;
} else {
}
break;
}

var G__32562 = args32555.length;
switch (G__32562) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32555.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq32556){
var G__32557 = cljs.core.first.call(null,seq32556);
var seq32556__$1 = cljs.core.next.call(null,seq32556);
var G__32558 = cljs.core.first.call(null,seq32556__$1);
var seq32556__$2 = cljs.core.next.call(null,seq32556__$1);
var G__32559 = cljs.core.first.call(null,seq32556__$2);
var seq32556__$3 = cljs.core.next.call(null,seq32556__$2);
var G__32560 = cljs.core.first.call(null,seq32556__$3);
var seq32556__$4 = cljs.core.next.call(null,seq32556__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__32557,G__32558,G__32559,G__32560,seq32556__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args32567 = [];
var len__26200__auto___32575 = arguments.length;
var i__26201__auto___32576 = (0);
while(true){
if((i__26201__auto___32576 < len__26200__auto___32575)){
args32567.push((arguments[i__26201__auto___32576]));

var G__32577 = (i__26201__auto___32576 + (1));
i__26201__auto___32576 = G__32577;
continue;
} else {
}
break;
}

var G__32574 = args32567.length;
switch (G__32574) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32567.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq32568){
var G__32569 = cljs.core.first.call(null,seq32568);
var seq32568__$1 = cljs.core.next.call(null,seq32568);
var G__32570 = cljs.core.first.call(null,seq32568__$1);
var seq32568__$2 = cljs.core.next.call(null,seq32568__$1);
var G__32571 = cljs.core.first.call(null,seq32568__$2);
var seq32568__$3 = cljs.core.next.call(null,seq32568__$2);
var G__32572 = cljs.core.first.call(null,seq32568__$3);
var seq32568__$4 = cljs.core.next.call(null,seq32568__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__32569,G__32570,G__32571,G__32572,seq32568__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args32579 = [];
var len__26200__auto___32587 = arguments.length;
var i__26201__auto___32588 = (0);
while(true){
if((i__26201__auto___32588 < len__26200__auto___32587)){
args32579.push((arguments[i__26201__auto___32588]));

var G__32589 = (i__26201__auto___32588 + (1));
i__26201__auto___32588 = G__32589;
continue;
} else {
}
break;
}

var G__32586 = args32579.length;
switch (G__32586) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32579.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq32580){
var G__32581 = cljs.core.first.call(null,seq32580);
var seq32580__$1 = cljs.core.next.call(null,seq32580);
var G__32582 = cljs.core.first.call(null,seq32580__$1);
var seq32580__$2 = cljs.core.next.call(null,seq32580__$1);
var G__32583 = cljs.core.first.call(null,seq32580__$2);
var seq32580__$3 = cljs.core.next.call(null,seq32580__$2);
var G__32584 = cljs.core.first.call(null,seq32580__$3);
var seq32580__$4 = cljs.core.next.call(null,seq32580__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__32581,G__32582,G__32583,G__32584,seq32580__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args32591 = [];
var len__26200__auto___32599 = arguments.length;
var i__26201__auto___32600 = (0);
while(true){
if((i__26201__auto___32600 < len__26200__auto___32599)){
args32591.push((arguments[i__26201__auto___32600]));

var G__32601 = (i__26201__auto___32600 + (1));
i__26201__auto___32600 = G__32601;
continue;
} else {
}
break;
}

var G__32598 = args32591.length;
switch (G__32598) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32591.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq32592){
var G__32593 = cljs.core.first.call(null,seq32592);
var seq32592__$1 = cljs.core.next.call(null,seq32592);
var G__32594 = cljs.core.first.call(null,seq32592__$1);
var seq32592__$2 = cljs.core.next.call(null,seq32592__$1);
var G__32595 = cljs.core.first.call(null,seq32592__$2);
var seq32592__$3 = cljs.core.next.call(null,seq32592__$2);
var G__32596 = cljs.core.first.call(null,seq32592__$3);
var seq32592__$4 = cljs.core.next.call(null,seq32592__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__32593,G__32594,G__32595,G__32596,seq32592__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args32603 = [];
var len__26200__auto___32611 = arguments.length;
var i__26201__auto___32612 = (0);
while(true){
if((i__26201__auto___32612 < len__26200__auto___32611)){
args32603.push((arguments[i__26201__auto___32612]));

var G__32613 = (i__26201__auto___32612 + (1));
i__26201__auto___32612 = G__32613;
continue;
} else {
}
break;
}

var G__32610 = args32603.length;
switch (G__32610) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32603.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq32604){
var G__32605 = cljs.core.first.call(null,seq32604);
var seq32604__$1 = cljs.core.next.call(null,seq32604);
var G__32606 = cljs.core.first.call(null,seq32604__$1);
var seq32604__$2 = cljs.core.next.call(null,seq32604__$1);
var G__32607 = cljs.core.first.call(null,seq32604__$2);
var seq32604__$3 = cljs.core.next.call(null,seq32604__$2);
var G__32608 = cljs.core.first.call(null,seq32604__$3);
var seq32604__$4 = cljs.core.next.call(null,seq32604__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__32605,G__32606,G__32607,G__32608,seq32604__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args32615 = [];
var len__26200__auto___32623 = arguments.length;
var i__26201__auto___32624 = (0);
while(true){
if((i__26201__auto___32624 < len__26200__auto___32623)){
args32615.push((arguments[i__26201__auto___32624]));

var G__32625 = (i__26201__auto___32624 + (1));
i__26201__auto___32624 = G__32625;
continue;
} else {
}
break;
}

var G__32622 = args32615.length;
switch (G__32622) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32615.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq32616){
var G__32617 = cljs.core.first.call(null,seq32616);
var seq32616__$1 = cljs.core.next.call(null,seq32616);
var G__32618 = cljs.core.first.call(null,seq32616__$1);
var seq32616__$2 = cljs.core.next.call(null,seq32616__$1);
var G__32619 = cljs.core.first.call(null,seq32616__$2);
var seq32616__$3 = cljs.core.next.call(null,seq32616__$2);
var G__32620 = cljs.core.first.call(null,seq32616__$3);
var seq32616__$4 = cljs.core.next.call(null,seq32616__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__32617,G__32618,G__32619,G__32620,seq32616__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args32629 = [];
var len__26200__auto___32637 = arguments.length;
var i__26201__auto___32638 = (0);
while(true){
if((i__26201__auto___32638 < len__26200__auto___32637)){
args32629.push((arguments[i__26201__auto___32638]));

var G__32639 = (i__26201__auto___32638 + (1));
i__26201__auto___32638 = G__32639;
continue;
} else {
}
break;
}

var G__32636 = args32629.length;
switch (G__32636) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32629.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32627__auto__","x__32627__auto__",2022294983,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32628__auto__","y__32628__auto__",-220241598,null)),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32627__auto__","x__32627__auto__",2022294983,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32628__auto__","y__32628__auto__",-220241598,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32627__auto__","x__32627__auto__",2022294983,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32628__auto__","y__32628__auto__",-220241598,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq32630){
var G__32631 = cljs.core.first.call(null,seq32630);
var seq32630__$1 = cljs.core.next.call(null,seq32630);
var G__32632 = cljs.core.first.call(null,seq32630__$1);
var seq32630__$2 = cljs.core.next.call(null,seq32630__$1);
var G__32633 = cljs.core.first.call(null,seq32630__$2);
var seq32630__$3 = cljs.core.next.call(null,seq32630__$2);
var G__32634 = cljs.core.first.call(null,seq32630__$3);
var seq32630__$4 = cljs.core.next.call(null,seq32630__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__32631,G__32632,G__32633,G__32634,seq32630__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args32643 = [];
var len__26200__auto___32651 = arguments.length;
var i__26201__auto___32652 = (0);
while(true){
if((i__26201__auto___32652 < len__26200__auto___32651)){
args32643.push((arguments[i__26201__auto___32652]));

var G__32653 = (i__26201__auto___32652 + (1));
i__26201__auto___32652 = G__32653;
continue;
} else {
}
break;
}

var G__32650 = args32643.length;
switch (G__32650) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32643.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32641__auto__","x__32641__auto__",1596199222,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32642__auto__","y__32642__auto__",-868955561,null)),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32641__auto__","x__32641__auto__",1596199222,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32642__auto__","y__32642__auto__",-868955561,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32641__auto__","x__32641__auto__",1596199222,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32642__auto__","y__32642__auto__",-868955561,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq32644){
var G__32645 = cljs.core.first.call(null,seq32644);
var seq32644__$1 = cljs.core.next.call(null,seq32644);
var G__32646 = cljs.core.first.call(null,seq32644__$1);
var seq32644__$2 = cljs.core.next.call(null,seq32644__$1);
var G__32647 = cljs.core.first.call(null,seq32644__$2);
var seq32644__$3 = cljs.core.next.call(null,seq32644__$2);
var G__32648 = cljs.core.first.call(null,seq32644__$3);
var seq32644__$4 = cljs.core.next.call(null,seq32644__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__32645,G__32646,G__32647,G__32648,seq32644__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args32655 = [];
var len__26200__auto___32663 = arguments.length;
var i__26201__auto___32664 = (0);
while(true){
if((i__26201__auto___32664 < len__26200__auto___32663)){
args32655.push((arguments[i__26201__auto___32664]));

var G__32665 = (i__26201__auto___32664 + (1));
i__26201__auto___32664 = G__32665;
continue;
} else {
}
break;
}

var G__32662 = args32655.length;
switch (G__32662) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32655.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq32656){
var G__32657 = cljs.core.first.call(null,seq32656);
var seq32656__$1 = cljs.core.next.call(null,seq32656);
var G__32658 = cljs.core.first.call(null,seq32656__$1);
var seq32656__$2 = cljs.core.next.call(null,seq32656__$1);
var G__32659 = cljs.core.first.call(null,seq32656__$2);
var seq32656__$3 = cljs.core.next.call(null,seq32656__$2);
var G__32660 = cljs.core.first.call(null,seq32656__$3);
var seq32656__$4 = cljs.core.next.call(null,seq32656__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__32657,G__32658,G__32659,G__32660,seq32656__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args32667 = [];
var len__26200__auto___32675 = arguments.length;
var i__26201__auto___32676 = (0);
while(true){
if((i__26201__auto___32676 < len__26200__auto___32675)){
args32667.push((arguments[i__26201__auto___32676]));

var G__32677 = (i__26201__auto___32676 + (1));
i__26201__auto___32676 = G__32677;
continue;
} else {
}
break;
}

var G__32674 = args32667.length;
switch (G__32674) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32667.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq32668){
var G__32669 = cljs.core.first.call(null,seq32668);
var seq32668__$1 = cljs.core.next.call(null,seq32668);
var G__32670 = cljs.core.first.call(null,seq32668__$1);
var seq32668__$2 = cljs.core.next.call(null,seq32668__$1);
var G__32671 = cljs.core.first.call(null,seq32668__$2);
var seq32668__$3 = cljs.core.next.call(null,seq32668__$2);
var G__32672 = cljs.core.first.call(null,seq32668__$3);
var seq32668__$4 = cljs.core.next.call(null,seq32668__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__32669,G__32670,G__32671,G__32672,seq32668__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args32679 = [];
var len__26200__auto___32687 = arguments.length;
var i__26201__auto___32688 = (0);
while(true){
if((i__26201__auto___32688 < len__26200__auto___32687)){
args32679.push((arguments[i__26201__auto___32688]));

var G__32689 = (i__26201__auto___32688 + (1));
i__26201__auto___32688 = G__32689;
continue;
} else {
}
break;
}

var G__32686 = args32679.length;
switch (G__32686) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32679.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq32680){
var G__32681 = cljs.core.first.call(null,seq32680);
var seq32680__$1 = cljs.core.next.call(null,seq32680);
var G__32682 = cljs.core.first.call(null,seq32680__$1);
var seq32680__$2 = cljs.core.next.call(null,seq32680__$1);
var G__32683 = cljs.core.first.call(null,seq32680__$2);
var seq32680__$3 = cljs.core.next.call(null,seq32680__$2);
var G__32684 = cljs.core.first.call(null,seq32680__$3);
var seq32680__$4 = cljs.core.next.call(null,seq32680__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__32681,G__32682,G__32683,G__32684,seq32680__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args32691 = [];
var len__26200__auto___32699 = arguments.length;
var i__26201__auto___32700 = (0);
while(true){
if((i__26201__auto___32700 < len__26200__auto___32699)){
args32691.push((arguments[i__26201__auto___32700]));

var G__32701 = (i__26201__auto___32700 + (1));
i__26201__auto___32700 = G__32701;
continue;
} else {
}
break;
}

var G__32698 = args32691.length;
switch (G__32698) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32691.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq32692){
var G__32693 = cljs.core.first.call(null,seq32692);
var seq32692__$1 = cljs.core.next.call(null,seq32692);
var G__32694 = cljs.core.first.call(null,seq32692__$1);
var seq32692__$2 = cljs.core.next.call(null,seq32692__$1);
var G__32695 = cljs.core.first.call(null,seq32692__$2);
var seq32692__$3 = cljs.core.next.call(null,seq32692__$2);
var G__32696 = cljs.core.first.call(null,seq32692__$3);
var seq32692__$4 = cljs.core.next.call(null,seq32692__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__32693,G__32694,G__32695,G__32696,seq32692__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args32703 = [];
var len__26200__auto___32711 = arguments.length;
var i__26201__auto___32712 = (0);
while(true){
if((i__26201__auto___32712 < len__26200__auto___32711)){
args32703.push((arguments[i__26201__auto___32712]));

var G__32713 = (i__26201__auto___32712 + (1));
i__26201__auto___32712 = G__32713;
continue;
} else {
}
break;
}

var G__32710 = args32703.length;
switch (G__32710) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args32703.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq32704){
var G__32705 = cljs.core.first.call(null,seq32704);
var seq32704__$1 = cljs.core.next.call(null,seq32704);
var G__32706 = cljs.core.first.call(null,seq32704__$1);
var seq32704__$2 = cljs.core.next.call(null,seq32704__$1);
var G__32707 = cljs.core.first.call(null,seq32704__$2);
var seq32704__$3 = cljs.core.next.call(null,seq32704__$2);
var G__32708 = cljs.core.first.call(null,seq32704__$3);
var seq32704__$4 = cljs.core.next.call(null,seq32704__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__32705,G__32706,G__32707,G__32708,seq32704__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__25959__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32715__auto__","h__32715__auto__",1265818979,null)),(function (){var x__25959__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32715__auto__","h__32715__auto__",1265818979,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32715__auto__","h__32715__auto__",1265818979,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32715__auto__","h__32715__auto__",1265818979,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32715__auto__","h__32715__auto__",1265818979,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32715__auto__","h__32715__auto__",1265818979,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__25959__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32716__auto__","x__32716__auto__",-1663220511,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32716__auto__","x__32716__auto__",-1663220511,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32724 = arguments.length;
var i__26201__auto___32725 = (0);
while(true){
if((i__26201__auto___32725 < len__26200__auto___32724)){
args__26207__auto__.push((arguments[i__26201__auto___32725]));

var G__32726 = (i__26201__auto___32725 + (1));
i__26201__auto___32725 = G__32726;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((6) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__26208__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq32717){
var G__32718 = cljs.core.first.call(null,seq32717);
var seq32717__$1 = cljs.core.next.call(null,seq32717);
var G__32719 = cljs.core.first.call(null,seq32717__$1);
var seq32717__$2 = cljs.core.next.call(null,seq32717__$1);
var G__32720 = cljs.core.first.call(null,seq32717__$2);
var seq32717__$3 = cljs.core.next.call(null,seq32717__$2);
var G__32721 = cljs.core.first.call(null,seq32717__$3);
var seq32717__$4 = cljs.core.next.call(null,seq32717__$3);
var G__32722 = cljs.core.first.call(null,seq32717__$4);
var seq32717__$5 = cljs.core.next.call(null,seq32717__$4);
var G__32723 = cljs.core.first.call(null,seq32717__$5);
var seq32717__$6 = cljs.core.next.call(null,seq32717__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__32718,G__32719,G__32720,G__32721,G__32722,G__32723,seq32717__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = clojure.walk.postwalk.call(null,(function (p1__32727_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__32727_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__32727_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__32727_SHARP_));
} else {
return p1__32727_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__32728,fkv){
var vec__32732 = p__32728;
var f1 = cljs.core.nth.call(null,vec__32732,(0),null);
var k = cljs.core.nth.call(null,vec__32732,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});

cljs.core$macros.rfn.cljs$lang$macro = true;
cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (-seq f)))))
 *   == (\f \o \o))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32738 = arguments.length;
var i__26201__auto___32739 = (0);
while(true){
if((i__26201__auto___32739 < len__26200__auto___32738)){
args__26207__auto__.push((arguments[i__26201__auto___32739]));

var G__32740 = (i__26201__auto___32739 + (1));
i__26201__auto___32739 = G__32740;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str("t_"),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__25959__auto__ = cljs.core.symbol.call(null,[cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__25959__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__25959__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25959__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),locals,(function (){var x__25959__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25959__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),locals,(function (){var x__25959__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq32735){
var G__32736 = cljs.core.first.call(null,seq32735);
var seq32735__$1 = cljs.core.next.call(null,seq32735);
var G__32737 = cljs.core.first.call(null,seq32735__$1);
var seq32735__$2 = cljs.core.next.call(null,seq32735__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__32736,G__32737,seq32735__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32745 = arguments.length;
var i__26201__auto___32746 = (0);
while(true){
if((i__26201__auto___32746 < len__26200__auto___32745)){
args__26207__auto__.push((arguments[i__26201__auto___32746]));

var G__32747 = (i__26201__auto___32746 + (1));
i__26201__auto___32746 = G__32747;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq32741){
var G__32742 = cljs.core.first.call(null,seq32741);
var seq32741__$1 = cljs.core.next.call(null,seq32741);
var G__32743 = cljs.core.first.call(null,seq32741__$1);
var seq32741__$2 = cljs.core.next.call(null,seq32741__$1);
var G__32744 = cljs.core.first.call(null,seq32741__$2);
var seq32741__$3 = cljs.core.next.call(null,seq32741__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32742,G__32743,G__32744,seq32741__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32752 = arguments.length;
var i__26201__auto___32753 = (0);
while(true){
if((i__26201__auto___32753 < len__26200__auto___32752)){
args__26207__auto__.push((arguments[i__26201__auto___32753]));

var G__32754 = (i__26201__auto___32753 + (1));
i__26201__auto___32753 = G__32754;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__25959__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq32748){
var G__32749 = cljs.core.first.call(null,seq32748);
var seq32748__$1 = cljs.core.next.call(null,seq32748);
var G__32750 = cljs.core.first.call(null,seq32748__$1);
var seq32748__$2 = cljs.core.next.call(null,seq32748__$1);
var G__32751 = cljs.core.first.call(null,seq32748__$2);
var seq32748__$3 = cljs.core.next.call(null,seq32748__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__32749,G__32750,G__32751,seq32748__$3);
});


cljs.core$macros.specify.cljs$lang$macro = true;
cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_this.cljs$lang$macro = true;
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32759 = arguments.length;
var i__26201__auto___32760 = (0);
while(true){
if((i__26201__auto___32760 < len__26200__auto___32759)){
args__26207__auto__.push((arguments[i__26201__auto___32760]));

var G__32761 = (i__26201__auto___32760 + (1));
i__26201__auto___32760 = G__32761;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq32755){
var G__32756 = cljs.core.first.call(null,seq32755);
var seq32755__$1 = cljs.core.next.call(null,seq32755);
var G__32757 = cljs.core.first.call(null,seq32755__$1);
var seq32755__$2 = cljs.core.next.call(null,seq32755__$1);
var G__32758 = cljs.core.first.call(null,seq32755__$2);
var seq32755__$3 = cljs.core.next.call(null,seq32755__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__32756,G__32757,G__32758,seq32755__$3);
});


cljs.core$macros.this_as.cljs$lang$macro = true;
cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__4655__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__25113__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__25113__auto__)){
var and__25113__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__25113__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__25113__auto____$1;
}
} else {
return and__25113__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__4655__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__4655__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve: "),cljs.core.str(sym)].join('')),cljs.core.str("\n"),cljs.core.str("ret")].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__32762 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__32763 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__32762;
s = G__32763;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__32764){
var vec__32772 = p__32764;
var p = cljs.core.nth.call(null,vec__32772,(0),null);
var sigs = cljs.core.nth.call(null,vec__32772,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25959__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__32772,p,sigs){
return (function (p__32775){
var vec__32776 = p__32775;
var seq__32777 = cljs.core.seq.call(null,vec__32776);
var first__32778 = cljs.core.first.call(null,seq__32777);
var seq__32777__$1 = cljs.core.next.call(null,seq__32777);
var f = first__32778;
var meths = seq__32777__$1;
var form = vec__32776;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25959__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});})(psym,pfn_prefix,vec__32772,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__26050__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26051__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26052__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26053__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26054__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__26050__auto__,prefer_table__26051__auto__,method_cache__26052__auto__,cached_hierarchy__26053__auto__,hierarchy__26054__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__26050__auto__,prefer_table__26051__auto__,method_cache__26052__auto__,cached_hierarchy__26053__auto__,hierarchy__26054__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26054__auto__,method_table__26050__auto__,prefer_table__26051__auto__,method_cache__26052__auto__,cached_hierarchy__26053__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__25959__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__25959__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__25959__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__32779){
var vec__32786 = p__32779;
var seq__32787 = cljs.core.seq.call(null,vec__32786);
var first__32788 = cljs.core.first.call(null,seq__32787);
var seq__32787__$1 = cljs.core.next.call(null,seq__32787);
var vec__32789 = first__32788;
var seq__32790 = cljs.core.seq.call(null,vec__32789);
var first__32791 = cljs.core.first.call(null,seq__32790);
var seq__32790__$1 = cljs.core.next.call(null,seq__32790);
var this$ = first__32791;
var args = seq__32790__$1;
var sig = vec__32789;
var body = seq__32787__$1;
var x__25959__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__32792){
var vec__32799 = p__32792;
var seq__32800 = cljs.core.seq.call(null,vec__32799);
var first__32801 = cljs.core.first.call(null,seq__32800);
var seq__32800__$1 = cljs.core.next.call(null,seq__32800);
var vec__32802 = first__32801;
var seq__32803 = cljs.core.seq.call(null,vec__32802);
var first__32804 = cljs.core.first.call(null,seq__32803);
var seq__32803__$1 = cljs.core.next.call(null,seq__32803);
var this$ = first__32804;
var args = seq__32803__$1;
var sig = vec__32802;
var body = seq__32800__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__25959__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__32805){
var vec__32812 = p__32805;
var seq__32813 = cljs.core.seq.call(null,vec__32812);
var first__32814 = cljs.core.first.call(null,seq__32813);
var seq__32813__$1 = cljs.core.next.call(null,seq__32813);
var vec__32815 = first__32814;
var seq__32816 = cljs.core.seq.call(null,vec__32815);
var first__32817 = cljs.core.first.call(null,seq__32816);
var seq__32816__$1 = cljs.core.next.call(null,seq__32816);
var this$ = first__32817;
var args = seq__32816__$1;
var sig = vec__32815;
var body = seq__32813__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__25959__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__32818){
var vec__32825 = p__32818;
var seq__32826 = cljs.core.seq.call(null,vec__32825);
var first__32827 = cljs.core.first.call(null,seq__32826);
var seq__32826__$1 = cljs.core.next.call(null,seq__32826);
var vec__32828 = first__32827;
var seq__32829 = cljs.core.seq.call(null,vec__32828);
var first__32830 = cljs.core.first.call(null,seq__32829);
var seq__32829__$1 = cljs.core.next.call(null,seq__32829);
var this$ = first__32830;
var args = seq__32829__$1;
var sig = vec__32828;
var body = seq__32826__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__25959__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__32839){
var vec__32840 = p__32839;
var seq__32841 = cljs.core.seq.call(null,vec__32840);
var first__32842 = cljs.core.first.call(null,seq__32841);
var seq__32841__$1 = cljs.core.next.call(null,seq__32841);
var f = first__32842;
var meths = seq__32841__$1;
var form = vec__32840;
var vec__32843 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__32843,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__32843,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__32843,f__$1,meths__$1,vec__32840,seq__32841,first__32842,seq__32841__$1,f,meths,form){
return (function (p1__32831_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__32831_SHARP_);
});})(vec__32843,f__$1,meths__$1,vec__32840,seq__32841,first__32842,seq__32841__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__32847){
var vec__32851 = p__32847;
var seq__32852 = cljs.core.seq.call(null,vec__32851);
var first__32853 = cljs.core.first.call(null,seq__32852);
var seq__32852__$1 = cljs.core.next.call(null,seq__32852);
var f = first__32853;
var meths = seq__32852__$1;
var form = vec__32851;
return cljs.core.map.call(null,((function (vec__32851,seq__32852,first__32853,seq__32852__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});})(vec__32851,seq__32852,first__32853,seq__32852__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__32851,seq__32852,first__32853,seq__32852__$1,f,meths,form){
return (function (p1__32846_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__32846_SHARP_);
});})(vec__32851,seq__32852,first__32853,seq__32852__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__32855){
var vec__32859 = p__32855;
var seq__32860 = cljs.core.seq.call(null,vec__32859);
var first__32861 = cljs.core.first.call(null,seq__32860);
var seq__32860__$1 = cljs.core.next.call(null,seq__32860);
var f = first__32861;
var meths = seq__32860__$1;
var form = vec__32859;
var meths__$1 = cljs.core.map.call(null,((function (vec__32859,seq__32860,first__32861,seq__32860__$1,f,meths,form){
return (function (p1__32854_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__32854_SHARP_);
});})(vec__32859,seq__32860,first__32861,seq__32860__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__25959__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__25959__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__25959__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__25959__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__32862){
var vec__32870 = p__32862;
var seq__32871 = cljs.core.seq.call(null,vec__32870);
var first__32872 = cljs.core.first.call(null,seq__32871);
var seq__32871__$1 = cljs.core.next.call(null,seq__32871);
var f = first__32872;
var meths = seq__32871__$1;
var form = vec__32870;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__32870,seq__32871,first__32872,seq__32871__$1,f,meths,form){
return (function (p__32873){
var vec__32874 = p__32873;
var seq__32875 = cljs.core.seq.call(null,vec__32874);
var first__32876 = cljs.core.first.call(null,seq__32875);
var seq__32875__$1 = cljs.core.next.call(null,seq__32875);
var sig = first__32876;
var body = seq__32875__$1;
var meth = vec__32874;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});})(pf,vec__32870,seq__32871,first__32872,seq__32871__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__32877){
var vec__32881 = p__32877;
var p = cljs.core.nth.call(null,vec__32881,(0),null);
var sigs = cljs.core.nth.call(null,vec__32881,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__32881,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__32881,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__32887 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__32887,(0),null);
var sigs = cljs.core.nth.call(null,vec__32887,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_32890 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_32890))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([c], true),cljs.core.map.call(null,cljs.core.count,decmeths))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__32891 = cljs.core.next.call(null,sigs__$1);
var G__32892 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__32891;
seen = G__32892;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_32899 = cljs.core.PersistentHashSet.EMPTY;
var methods_32900__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_32900__$1)){
var vec__32896_32901 = cljs.core.first.call(null,methods_32900__$1);
var fname_32902 = cljs.core.nth.call(null,vec__32896_32901,(0),null);
var method_32903 = vec__32896_32901;
if(cljs.core.contains_QMARK_.call(null,seen_32899,fname_32902)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_32902], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_32903);

var G__32904 = cljs.core.conj.call(null,seen_32899,fname_32902);
var G__32905 = cljs.core.next.call(null,methods_32900__$1);
seen_32899 = G__32904;
methods_32900__$1 = G__32905;
continue;
} else {
}
break;
}

var G__32906 = cljs.core.conj.call(null,protos,proto);
var G__32907 = impls__$2;
protos = G__32906;
impls__$1 = G__32907;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y & zs] ...))
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32916 = arguments.length;
var i__26201__auto___32917 = (0);
while(true){
if((i__26201__auto___32917 < len__26200__auto___32916)){
args__26207__auto__.push((arguments[i__26201__auto___32917]));

var G__32918 = (i__26201__auto___32917 + (1));
i__26201__auto___32917 = G__32918;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__32913 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__32913,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__32913,(1),null);
if(cljs.core.truth_((function (){var and__25113__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__25113__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__25113__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__32913,type,assign_impls){
return (function (p1__32908_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__32908_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__32913,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq32909){
var G__32910 = cljs.core.first.call(null,seq32909);
var seq32909__$1 = cljs.core.next.call(null,seq32909);
var G__32911 = cljs.core.first.call(null,seq32909__$1);
var seq32909__$2 = cljs.core.next.call(null,seq32909__$1);
var G__32912 = cljs.core.first.call(null,seq32909__$2);
var seq32909__$3 = cljs.core.next.call(null,seq32909__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__32910,G__32911,G__32912,seq32909__$3);
});


cljs.core$macros.extend_type.cljs$lang$macro = true;
cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__32920){
var vec__32924 = p__32920;
var f = cljs.core.nth.call(null,vec__32924,(0),null);
var sigs = cljs.core.nth.call(null,vec__32924,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__32924,f,sigs){
return (function (p1__32919_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__32919_SHARP_),cljs.core.nnext.call(null,p1__32919_SHARP_));
});})(vec__32924,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args32927 = [];
var len__26200__auto___32930 = arguments.length;
var i__26201__auto___32931 = (0);
while(true){
if((i__26201__auto___32931 < len__26200__auto___32930)){
args32927.push((arguments[i__26201__auto___32931]));

var G__32932 = (i__26201__auto___32931 + (1));
i__26201__auto___32931 = G__32932;
continue;
} else {
}
break;
}

var G__32929 = args32927.length;
switch (G__32929) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32927.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__32934 = ret__$1;
var G__32935 = specs__$2;
ret = G__32934;
specs__$1 = G__32935;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__32936_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__32936_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__25959__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25959__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str(case$),cljs.core.str(" "),cljs.core.str(name),cljs.core.str(", no fields vector given.")].join('')));
}
});
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32948 = arguments.length;
var i__26201__auto___32949 = (0);
while(true){
if((i__26201__auto___32949 < len__26200__auto___32948)){
args__26207__auto__.push((arguments[i__26201__auto___32949]));

var G__32950 = (i__26201__auto___32949 + (1));
i__26201__auto___32949 = G__32950;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((4) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26208__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__32945 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__32945,(0),null);
var pmasks = cljs.core.nth.call(null,vec__32945,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__25959__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__25959__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__25959__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__25959__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__25959__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__25959__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32937__auto__","this__32937__auto__",1746565897,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32938__auto__","writer__32938__auto__",1862916151,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__32939__auto__","opt__32939__auto__",-138430384,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32938__auto__","writer__32938__auto__",1862916151,null)),(function (){var x__25959__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq32940){
var G__32941 = cljs.core.first.call(null,seq32940);
var seq32940__$1 = cljs.core.next.call(null,seq32940);
var G__32942 = cljs.core.first.call(null,seq32940__$1);
var seq32940__$2 = cljs.core.next.call(null,seq32940__$1);
var G__32943 = cljs.core.first.call(null,seq32940__$2);
var seq32940__$3 = cljs.core.next.call(null,seq32940__$2);
var G__32944 = cljs.core.first.call(null,seq32940__$3);
var seq32940__$4 = cljs.core.next.call(null,seq32940__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__32941,G__32942,G__32943,G__32944,seq32940__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__32951_SHARP_){
return cljs.core.with_meta.call(null,p1__32951_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32952__auto__","this__32952__auto__",-1527650694,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25959__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32953__auto__","this__32953__auto__",1489773821,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32953__auto__","this__32953__auto__",1489773821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32954__auto__","this__32954__auto__",-1065140700,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__32955__auto__","other__32955__auto__",485326183,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__32955__auto__","other__32955__auto__",485326183,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32954__auto__","this__32954__auto__",-1065140700,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__32955__auto__","other__32955__auto__",485326183,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32954__auto__","this__32954__auto__",-1065140700,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__32955__auto__","other__32955__auto__",485326183,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32956__auto__","this__32956__auto__",-1585125646,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32957__auto__","this__32957__auto__",-2141655523,null)),(function (){var x__25959__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25959__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32958__auto__","this__32958__auto__",-248958974,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32959__auto__","k__32959__auto__",-809293185,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32958__auto__","this__32958__auto__",-248958974,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32959__auto__","k__32959__auto__",-809293185,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32960__auto__","this__32960__auto__",505981183,null)),(function (){var x__25959__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__32961__auto__","else__32961__auto__",-1421125202,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__25959__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__25959__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__32961__auto__","else__32961__auto__",-1421125202,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32962__auto__","this__32962__auto__",-1501412206,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__25959__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32963__auto__","this__32963__auto__",-955342378,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__32964__auto__","entry__32964__auto__",1850330829,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__32964__auto__","entry__32964__auto__",1850330829,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32963__auto__","this__32963__auto__",-955342378,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__32964__auto__","entry__32964__auto__",1850330829,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__32964__auto__","entry__32964__auto__",1850330829,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32963__auto__","this__32963__auto__",-955342378,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__32964__auto__","entry__32964__auto__",1850330829,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32965__auto__","this__32965__auto__",-219549096,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32966__auto__","k__32966__auto__",-323226511,null)),(function (){var x__25959__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32966__auto__","k__32966__auto__",-323226511,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25959__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32966__auto__","k__32966__auto__",-323226511,null)),(function (){var x__25959__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32967__auto__","this__32967__auto__",157146294,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32968__auto__","k__32968__auto__",2074839894,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__25959__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32968__auto__","k__32968__auto__",2074839894,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__25959__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32967__auto__","this__32967__auto__",157146294,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32968__auto__","k__32968__auto__",2074839894,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25959__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32968__auto__","k__32968__auto__",2074839894,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32970__auto__","this__32970__auto__",-389425732,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__32969_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25959__auto__ = cljs.core.keyword.call(null,p1__32969_SHARP_);
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = p1__32969_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__25959__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32972__auto__","this__32972__auto__",-328191617,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32973__auto__","writer__32973__auto__",1144037190,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__32974__auto__","opts__32974__auto__",1628691581,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__32975__auto__","pr-pair__32975__auto__",1951759499,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__32976__auto__","keyval__32976__auto__",-513734471,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32973__auto__","writer__32973__auto__",1144037190,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__32974__auto__","opts__32974__auto__",1628691581,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__32976__auto__","keyval__32976__auto__",-513734471,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32973__auto__","writer__32973__auto__",1144037190,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__32975__auto__","pr-pair__32975__auto__",1951759499,null)),(function (){var x__25959__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__32974__auto__","opts__32974__auto__",1628691581,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__32971_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25959__auto__ = cljs.core.keyword.call(null,p1__32971_SHARP_);
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = p1__32971_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())))], null));
var vec__32980 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__32980,(0),null);
var pmasks = cljs.core.nth.call(null,vec__32980,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__25959__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__25959__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__25959__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25959__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__25959__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__26207__auto__ = [];
var len__26200__auto___32990 = arguments.length;
var i__26201__auto___32991 = (0);
while(true){
if((i__26201__auto___32991 < len__26200__auto___32990)){
args__26207__auto__.push((arguments[i__26201__auto___32991]));

var G__32992 = (i__26201__auto___32991 + (1));
i__26201__auto___32991 = G__32992;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((4) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26208__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__25959__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__25959__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__25959__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32983__auto__","this__32983__auto__",1122822449,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__25959__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__25959__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32983__auto__","this__32983__auto__",1122822449,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32984__auto__","writer__32984__auto__",1971178655,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32984__auto__","writer__32984__auto__",1971178655,null)),(function (){var x__25959__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq32985){
var G__32986 = cljs.core.first.call(null,seq32985);
var seq32985__$1 = cljs.core.next.call(null,seq32985);
var G__32987 = cljs.core.first.call(null,seq32985__$1);
var seq32985__$2 = cljs.core.next.call(null,seq32985__$1);
var G__32988 = cljs.core.first.call(null,seq32985__$2);
var seq32985__$3 = cljs.core.next.call(null,seq32985__$2);
var G__32989 = cljs.core.first.call(null,seq32985__$3);
var seq32985__$4 = cljs.core.next.call(null,seq32985__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__32986,G__32987,G__32988,G__32989,seq32985__$4);
});


cljs.core$macros.defrecord.cljs$lang$macro = true;
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33020 = arguments.length;
var i__26201__auto___33021 = (0);
while(true){
if((i__26201__auto___33021 < len__26200__auto___33020)){
args__26207__auto__.push((arguments[i__26201__auto___33021]));

var G__33022 = (i__26201__auto___33021 + (1));
i__26201__auto___33021 = G__33022;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__32999 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__32999,(0),null);
var methods$ = cljs.core.nth.call(null,vec__32999,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__32999,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__32999,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__33002 = cljs.core.seq.call(null,methods$);
var chunk__33003 = null;
var count__33004 = (0);
var i__33005 = (0);
while(true){
if((i__33005 < count__33004)){
var vec__33006 = cljs.core._nth.call(null,chunk__33003,i__33005);
var seq__33007 = cljs.core.seq.call(null,vec__33006);
var first__33008 = cljs.core.first.call(null,seq__33007);
var seq__33007__$1 = cljs.core.next.call(null,seq__33007);
var mname = first__33008;
var arities = seq__33007__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__33023 = seq__33002;
var G__33024 = chunk__33003;
var G__33025 = count__33004;
var G__33026 = (i__33005 + (1));
seq__33002 = G__33023;
chunk__33003 = G__33024;
count__33004 = G__33025;
i__33005 = G__33026;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33002);
if(temp__4657__auto__){
var seq__33002__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33002__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__33002__$1);
var G__33027 = cljs.core.chunk_rest.call(null,seq__33002__$1);
var G__33028 = c__25936__auto__;
var G__33029 = cljs.core.count.call(null,c__25936__auto__);
var G__33030 = (0);
seq__33002 = G__33027;
chunk__33003 = G__33028;
count__33004 = G__33029;
i__33005 = G__33030;
continue;
} else {
var vec__33009 = cljs.core.first.call(null,seq__33002__$1);
var seq__33010 = cljs.core.seq.call(null,vec__33009);
var first__33011 = cljs.core.first.call(null,seq__33010);
var seq__33010__$1 = cljs.core.next.call(null,seq__33010);
var mname = first__33011;
var arities = seq__33010__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__33031 = cljs.core.next.call(null,seq__33002__$1);
var G__33032 = null;
var G__33033 = (0);
var G__33034 = (0);
seq__33002 = G__33031;
chunk__33003 = G__33032;
count__33004 = G__33033;
i__33005 = G__33034;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__32999,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = sig;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25959__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32993__auto__","x__32993__auto__",-534379957,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25959__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25959__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32994__auto__","m__32994__auto__",-1507117950,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25959__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32993__auto__","x__32993__auto__",-534379957,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32994__auto__","m__32994__auto__",-1507117950,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32994__auto__","m__32994__auto__",-1507117950,null)),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32994__auto__","m__32994__auto__",-1507117950,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25959__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32994__auto__","m__32994__auto__",-1507117950,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32994__auto__","m__32994__auto__",-1507117950,null)),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__25959__auto__ = [cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});})(p,vec__32999,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__32999,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__33012){
var vec__33013 = p__33012;
var seq__33014 = cljs.core.seq.call(null,vec__33013);
var first__33015 = cljs.core.first.call(null,seq__33014);
var seq__33014__$1 = cljs.core.next.call(null,seq__33014);
var fname = first__33015;
var sigs = seq__33014__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__32999,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__32999,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__33016){
var vec__33017 = p__33016;
var seq__33018 = cljs.core.seq.call(null,vec__33017);
var first__33019 = cljs.core.first.call(null,seq__33018);
var seq__33018__$1 = cljs.core.next.call(null,seq__33018);
var fname = first__33019;
var sigs = seq__33018__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__25959__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__33017,seq__33018,first__33019,seq__33018__$1,fname,sigs,p,vec__32999,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__33017,seq__33018,first__33019,seq__33018__$1,fname,sigs,p,vec__32999,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__32999,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__25959__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq32995){
var G__32996 = cljs.core.first.call(null,seq32995);
var seq32995__$1 = cljs.core.next.call(null,seq32995);
var G__32997 = cljs.core.first.call(null,seq32995__$1);
var seq32995__$2 = cljs.core.next.call(null,seq32995__$1);
var G__32998 = cljs.core.first.call(null,seq32995__$2);
var seq32995__$3 = cljs.core.next.call(null,seq32995__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__32996,G__32997,G__32998,seq32995__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__33038 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__33038,(0),null);
var bit = cljs.core.nth.call(null,vec__33038,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__25959__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__25959__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;
/**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__33044 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__33044,(0),null);
var bit = cljs.core.nth.call(null,vec__33044,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25959__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__25959__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__25959__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__25959__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__25959__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__25959__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__25959__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}
});

cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33050 = arguments.length;
var i__26201__auto___33051 = (0);
while(true){
if((i__26201__auto___33051 < len__26200__auto___33050)){
args__26207__auto__.push((arguments[i__26201__auto___33051]));

var G__33052 = (i__26201__auto___33051 + (1));
i__26201__auto___33051 = G__33052;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq33047){
var G__33048 = cljs.core.first.call(null,seq33047);
var seq33047__$1 = cljs.core.next.call(null,seq33047);
var G__33049 = cljs.core.first.call(null,seq33047__$1);
var seq33047__$2 = cljs.core.next.call(null,seq33047__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__33048,G__33049,seq33047__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33056 = arguments.length;
var i__26201__auto___33057 = (0);
while(true){
if((i__26201__auto___33057 < len__26200__auto___33056)){
args__26207__auto__.push((arguments[i__26201__auto___33057]));

var G__33058 = (i__26201__auto___33057 + (1));
i__26201__auto___33057 = G__33058;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq33053){
var G__33054 = cljs.core.first.call(null,seq33053);
var seq33053__$1 = cljs.core.next.call(null,seq33053);
var G__33055 = cljs.core.first.call(null,seq33053__$1);
var seq33053__$2 = cljs.core.next.call(null,seq33053__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__33054,G__33055,seq33053__$2);
});


cljs.core$macros.delay.cljs$lang$macro = true;
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33067 = arguments.length;
var i__26201__auto___33068 = (0);
while(true){
if((i__26201__auto___33068 < len__26200__auto___33067)){
args__26207__auto__.push((arguments[i__26201__auto___33068]));

var G__33069 = (i__26201__auto___33068 + (1));
i__26201__auto___33068 = G__33069;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__33063){
var vec__33064 = p__33063;
var k = cljs.core.nth.call(null,vec__33064,(0),null);
var v = cljs.core.nth.call(null,vec__33064,(1),null);
return cljs.core._conj.call(null,(function (){var x__25959__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq33059){
var G__33060 = cljs.core.first.call(null,seq33059);
var seq33059__$1 = cljs.core.next.call(null,seq33059);
var G__33061 = cljs.core.first.call(null,seq33059__$1);
var seq33059__$2 = cljs.core.next.call(null,seq33059__$1);
var G__33062 = cljs.core.first.call(null,seq33059__$2);
var seq33059__$3 = cljs.core.next.call(null,seq33059__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__33060,G__33061,G__33062,seq33059__$3);
});


cljs.core$macros.with_redefs.cljs$lang$macro = true;
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33074 = arguments.length;
var i__26201__auto___33075 = (0);
while(true){
if((i__26201__auto___33075 < len__26200__auto___33074)){
args__26207__auto__.push((arguments[i__26201__auto___33075]));

var G__33076 = (i__26201__auto___33075 + (1));
i__26201__auto___33075 = G__33076;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__25959__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq33070){
var G__33071 = cljs.core.first.call(null,seq33070);
var seq33070__$1 = cljs.core.next.call(null,seq33070);
var G__33072 = cljs.core.first.call(null,seq33070__$1);
var seq33070__$2 = cljs.core.next.call(null,seq33070__$1);
var G__33073 = cljs.core.first.call(null,seq33070__$2);
var seq33070__$3 = cljs.core.next.call(null,seq33070__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__33071,G__33072,G__33073,seq33070__$3);
});


cljs.core$macros.binding.cljs$lang$macro = true;
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33095 = arguments.length;
var i__26201__auto___33096 = (0);
while(true){
if((i__26201__auto___33096 < len__26200__auto___33095)){
args__26207__auto__.push((arguments[i__26201__auto___33096]));

var G__33097 = (i__26201__auto___33096 + (1));
i__26201__auto___33096 = G__33097;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((4) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26208__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__33089 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__33092 = cljs.core.nth.call(null,vec__33089,(0),null);
var a = cljs.core.nth.call(null,vec__33092,(0),null);
var b = cljs.core.nth.call(null,vec__33092,(1),null);
var c = cljs.core.nth.call(null,vec__33092,(2),null);
var clause = vec__33092;
var more = cljs.core.nth.call(null,vec__33089,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__25959__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__33077__auto__","p__33077__auto__",517841313,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__33077__auto__","p__33077__auto__",517841313,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq33078){
var G__33079 = cljs.core.first.call(null,seq33078);
var seq33078__$1 = cljs.core.next.call(null,seq33078);
var G__33080 = cljs.core.first.call(null,seq33078__$1);
var seq33078__$2 = cljs.core.next.call(null,seq33078__$1);
var G__33081 = cljs.core.first.call(null,seq33078__$2);
var seq33078__$3 = cljs.core.next.call(null,seq33078__$2);
var G__33082 = cljs.core.first.call(null,seq33078__$3);
var seq33078__$4 = cljs.core.next.call(null,seq33078__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__33079,G__33080,G__33081,G__33082,seq33078__$4);
});


cljs.core$macros.condp.cljs$lang$macro = true;
cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error([cljs.core.str("Duplicate case test constant '"),cljs.core.str(test),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" on line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__25113__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__25113__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__25113__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33118 = arguments.length;
var i__26201__auto___33119 = (0);
while(true){
if((i__26201__auto___33119 < len__26200__auto___33118)){
args__26207__auto__.push((arguments[i__26201__auto___33119]));

var G__33120 = (i__26201__auto___33119 + (1));
i__26201__auto___33119 = G__33120;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__25959__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__33106){
var vec__33107 = p__33106;
var test = cljs.core.nth.call(null,vec__33107,(0),null);
var expr = cljs.core.nth.call(null,vec__33107,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__33107,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__25959__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__33107,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__25959__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var esym = cljs.core.gensym.call(null);
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (default$,env,pairs,esym,tests){
return (function (p1__33098_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__33098_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__33099_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__33099_SHARP_)){
return cljs.core.vec.call(null,p1__33099_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33099_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__25959__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__33101_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__33101_SHARP_)){
return cljs.core.vec.call(null,p1__33101_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33101_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__33100_SHARP_){
return [cljs.core.str(p1__33100_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__25959__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__25959__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__25959__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__33114){
var vec__33115 = p__33114;
var m = cljs.core.nth.call(null,vec__33115,(0),null);
var c = cljs.core.nth.call(null,vec__33115,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__25959__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__25959__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq33102){
var G__33103 = cljs.core.first.call(null,seq33102);
var seq33102__$1 = cljs.core.next.call(null,seq33102);
var G__33104 = cljs.core.first.call(null,seq33102__$1);
var seq33102__$2 = cljs.core.next.call(null,seq33102__$1);
var G__33105 = cljs.core.first.call(null,seq33102__$2);
var seq33102__$3 = cljs.core.next.call(null,seq33102__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__33103,G__33104,G__33105,seq33102__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args33121 = [];
var len__26200__auto___33124 = arguments.length;
var i__26201__auto___33125 = (0);
while(true){
if((i__26201__auto___33125 < len__26200__auto___33124)){
args33121.push((arguments[i__26201__auto___33125]));

var G__33126 = (i__26201__auto___33125 + (1));
i__26201__auto___33125 = G__33126;
continue;
} else {
}
break;
}

var G__33123 = args33121.length;
switch (G__33123) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args33121.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25959__auto__ = [cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__25959__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__25959__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;


cljs.core$macros.assert.cljs$lang$macro = true;
/**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__33214){
var vec__33215 = p__33214;
var k = cljs.core.nth.call(null,vec__33215,(0),null);
var v = cljs.core.nth.call(null,vec__33215,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__33295__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__33295 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__33296__i = 0, G__33296__a = new Array(arguments.length -  0);
while (G__33296__i < G__33296__a.length) {G__33296__a[G__33296__i] = arguments[G__33296__i + 0]; ++G__33296__i;}
  msg = new cljs.core.IndexedSeq(G__33296__a,0);
} 
return G__33295__delegate.call(this,msg);};
G__33295.cljs$lang$maxFixedArity = 0;
G__33295.cljs$lang$applyTo = (function (arglist__33297){
var msg = cljs.core.seq(arglist__33297);
return G__33295__delegate(msg);
});
G__33295.cljs$core$IFn$_invoke$arity$variadic = G__33295__delegate;
return G__33295;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__33218){
var vec__33257 = p__33218;
var seq__33258 = cljs.core.seq.call(null,vec__33257);
var first__33259 = cljs.core.first.call(null,seq__33258);
var seq__33258__$1 = cljs.core.next.call(null,seq__33258);
var vec__33260 = first__33259;
var seq__33261 = cljs.core.seq.call(null,vec__33260);
var first__33262 = cljs.core.first.call(null,seq__33261);
var seq__33261__$1 = cljs.core.next.call(null,seq__33261);
var bind = first__33262;
var first__33262__$1 = cljs.core.first.call(null,seq__33261__$1);
var seq__33261__$2 = cljs.core.next.call(null,seq__33261__$1);
var expr = first__33262__$1;
var mod_pairs = seq__33261__$2;
var vec__33263 = seq__33258__$1;
var vec__33266 = cljs.core.nth.call(null,vec__33263,(0),null);
var _ = cljs.core.nth.call(null,vec__33266,(0),null);
var next_expr = cljs.core.nth.call(null,vec__33266,(1),null);
var next_groups = vec__33263;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__33257,seq__33258,first__33259,seq__33258__$1,vec__33260,seq__33261,first__33262,seq__33261__$1,bind,first__33262__$1,seq__33261__$2,expr,mod_pairs,vec__33263,vec__33266,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__33269){
var vec__33276 = p__33269;
var seq__33277 = cljs.core.seq.call(null,vec__33276);
var first__33278 = cljs.core.first.call(null,seq__33277);
var seq__33277__$1 = cljs.core.next.call(null,seq__33277);
var vec__33279 = first__33278;
var k = cljs.core.nth.call(null,vec__33279,(0),null);
var v = cljs.core.nth.call(null,vec__33279,(1),null);
var pair = vec__33279;
var etc = seq__33277__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25959__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__33128__auto__","iterys__33128__auto__",1422343416,null)),(function (){var x__25959__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__33129__auto__","fs__33129__auto__",1684732755,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__33128__auto__","iterys__33128__auto__",1422343416,null)),(function (){var x__25959__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__33129__auto__","fs__33129__auto__",1684732755,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__33129__auto__","fs__33129__auto__",1684732755,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__25959__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__33257,seq__33258,first__33259,seq__33258__$1,vec__33260,seq__33261,first__33262,seq__33261__$1,bind,first__33262__$1,seq__33261__$2,expr,mod_pairs,vec__33263,vec__33266,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__33257,seq__33258,first__33259,seq__33258__$1,vec__33260,seq__33261,first__33262,seq__33261__$1,bind,first__33262__$1,seq__33261__$2,expr,mod_pairs,vec__33263,vec__33266,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__33282){
var vec__33289 = p__33282;
var seq__33290 = cljs.core.seq.call(null,vec__33289);
var first__33291 = cljs.core.first.call(null,seq__33290);
var seq__33290__$1 = cljs.core.next.call(null,seq__33290);
var vec__33292 = first__33291;
var k = cljs.core.nth.call(null,vec__33292,(0),null);
var v = cljs.core.nth.call(null,vec__33292,(1),null);
var pair = vec__33292;
var etc = seq__33290__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25959__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__25959__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__25959__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__25959__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__33257,seq__33258,first__33259,seq__33258__$1,vec__33260,seq__33261,first__33262,seq__33261__$1,bind,first__33262__$1,seq__33261__$2,expr,mod_pairs,vec__33263,vec__33266,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__33130__auto__","c__33130__auto__",-2002560838,null)),(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/afadeev/Dropbox/cljs/service-purchase-cljs/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2314),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2314),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__33131__auto__","size__33131__auto__",-596723365,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__33130__auto__","c__33130__auto__",-2002560838,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__33131__auto__","size__33131__auto__",-596723365,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25959__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__33131__auto__","size__33131__auto__",-596723365,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__33130__auto__","c__33130__auto__",-2002560838,null)),(function (){var x__25959__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__25959__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__25959__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__25959__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__33132__auto__","iter__33132__auto__",-811480825,null)),(function (){var x__25959__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__33132__auto__","iter__33132__auto__",-811480825,null)),(function (){var x__25959__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33303 = arguments.length;
var i__26201__auto___33304 = (0);
while(true){
if((i__26201__auto___33304 < len__26200__auto___33303)){
args__26207__auto__.push((arguments[i__26201__auto___33304]));

var G__33305 = (i__26201__auto___33304 + (1));
i__26201__auto___33304 = G__33305;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__33306__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__33306 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__33307__i = 0, G__33307__a = new Array(arguments.length -  0);
while (G__33307__i < G__33307__a.length) {G__33307__a[G__33307__i] = arguments[G__33307__i + 0]; ++G__33307__i;}
  msg = new cljs.core.IndexedSeq(G__33307__a,0);
} 
return G__33306__delegate.call(this,msg);};
G__33306.cljs$lang$maxFixedArity = 0;
G__33306.cljs$lang$applyTo = (function (arglist__33308){
var msg = cljs.core.seq(arglist__33308);
return G__33306__delegate(msg);
});
G__33306.cljs$core$IFn$_invoke$arity$variadic = G__33306__delegate;
return G__33306;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__25959__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25959__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25959__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25959__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__25959__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25959__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25959__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__25959__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25959__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__25959__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25959__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__25959__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__33298__auto__","c__33298__auto__",268701350,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__25959__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__25959__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__33298__auto__","c__33298__auto__",268701350,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__33298__auto__","c__33298__auto__",268701350,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__25959__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq33299){
var G__33300 = cljs.core.first.call(null,seq33299);
var seq33299__$1 = cljs.core.next.call(null,seq33299);
var G__33301 = cljs.core.first.call(null,seq33299__$1);
var seq33299__$2 = cljs.core.next.call(null,seq33299__$1);
var G__33302 = cljs.core.first.call(null,seq33299__$2);
var seq33299__$3 = cljs.core.next.call(null,seq33299__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__33300,G__33301,G__33302,seq33299__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33312 = arguments.length;
var i__26201__auto___33313 = (0);
while(true){
if((i__26201__auto___33313 < len__26200__auto___33312)){
args__26207__auto__.push((arguments[i__26201__auto___33313]));

var G__33314 = (i__26201__auto___33313 + (1));
i__26201__auto___33313 = G__33314;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq33309){
var G__33310 = cljs.core.first.call(null,seq33309);
var seq33309__$1 = cljs.core.next.call(null,seq33309);
var G__33311 = cljs.core.first.call(null,seq33309__$1);
var seq33309__$2 = cljs.core.next.call(null,seq33309__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__33310,G__33311,seq33309__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args33318 = [];
var len__26200__auto___33326 = arguments.length;
var i__26201__auto___33327 = (0);
while(true){
if((i__26201__auto___33327 < len__26200__auto___33326)){
args33318.push((arguments[i__26201__auto___33327]));

var G__33328 = (i__26201__auto___33327 + (1));
i__26201__auto___33327 = G__33328;
continue;
} else {
}
break;
}

var G__33325 = args33318.length;
switch (G__33325) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args33318.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26219__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__25959__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__25959__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__33315__auto__","dims__33315__auto__",-2121921775,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__33316__auto__","dimarray__33316__auto__",-259035836,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__25959__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__33317__auto__","i__33317__auto__",-292089205,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__33316__auto__","dimarray__33316__auto__",-259035836,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__33316__auto__","dimarray__33316__auto__",-259035836,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__33317__auto__","i__33317__auto__",-292089205,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__33315__auto__","dims__33315__auto__",-2121921775,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__33316__auto__","dimarray__33316__auto__",-259035836,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq33319){
var G__33320 = cljs.core.first.call(null,seq33319);
var seq33319__$1 = cljs.core.next.call(null,seq33319);
var G__33321 = cljs.core.first.call(null,seq33319__$1);
var seq33319__$2 = cljs.core.next.call(null,seq33319__$1);
var G__33322 = cljs.core.first.call(null,seq33319__$2);
var seq33319__$3 = cljs.core.next.call(null,seq33319__$2);
var G__33323 = cljs.core.first.call(null,seq33319__$3);
var seq33319__$4 = cljs.core.next.call(null,seq33319__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__33320,G__33321,G__33322,G__33323,seq33319__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args33331 = [];
var len__26200__auto___33338 = arguments.length;
var i__26201__auto___33339 = (0);
while(true){
if((i__26201__auto___33339 < len__26200__auto___33338)){
args33331.push((arguments[i__26201__auto___33339]));

var G__33340 = (i__26201__auto___33339 + (1));
i__26201__auto___33339 = G__33340;
continue;
} else {
}
break;
}

var G__33337 = args33331.length;
switch (G__33337) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args33331.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26219__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,_AMPERSAND_env,x)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__33330__auto__","x__33330__auto__",-229800905,null)),(function (){var x__25959__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__33330__auto__","x__33330__auto__",-229800905,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq33332){
var G__33333 = cljs.core.first.call(null,seq33332);
var seq33332__$1 = cljs.core.next.call(null,seq33332);
var G__33334 = cljs.core.first.call(null,seq33332__$1);
var seq33332__$2 = cljs.core.next.call(null,seq33332__$1);
var G__33335 = cljs.core.first.call(null,seq33332__$2);
var seq33332__$3 = cljs.core.next.call(null,seq33332__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__33333,G__33334,G__33335,seq33332__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args33342 = [];
var len__26200__auto___33348 = arguments.length;
var i__26201__auto___33349 = (0);
while(true){
if((i__26201__auto___33349 < len__26200__auto___33348)){
args33342.push((arguments[i__26201__auto___33349]));

var G__33350 = (i__26201__auto___33349 + (1));
i__26201__auto___33349 = G__33350;
continue;
} else {
}
break;
}

var G__33347 = args33342.length;
switch (G__33347) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args33342.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26219__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25959__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq33343){
var G__33344 = cljs.core.first.call(null,seq33343);
var seq33343__$1 = cljs.core.next.call(null,seq33343);
var G__33345 = cljs.core.first.call(null,seq33343__$1);
var seq33343__$2 = cljs.core.next.call(null,seq33343__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__33344,G__33345,seq33343__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args33354 = [];
var len__26200__auto___33360 = arguments.length;
var i__26201__auto___33361 = (0);
while(true){
if((i__26201__auto___33361 < len__26200__auto___33360)){
args33354.push((arguments[i__26201__auto___33361]));

var G__33362 = (i__26201__auto___33361 + (1));
i__26201__auto___33361 = G__33362;
continue;
} else {
}
break;
}

var G__33359 = args33354.length;
switch (G__33359) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args33354.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26219__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__33352_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33352_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__33353_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__33353_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25959__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq33355){
var G__33356 = cljs.core.first.call(null,seq33355);
var seq33355__$1 = cljs.core.next.call(null,seq33355);
var G__33357 = cljs.core.first.call(null,seq33355__$1);
var seq33355__$2 = cljs.core.next.call(null,seq33355__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__33356,G__33357,seq33355__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args33364 = [];
var len__26200__auto___33370 = arguments.length;
var i__26201__auto___33371 = (0);
while(true){
if((i__26201__auto___33371 < len__26200__auto___33370)){
args33364.push((arguments[i__26201__auto___33371]));

var G__33372 = (i__26201__auto___33371 + (1));
i__26201__auto___33371 = G__33372;
continue;
} else {
}
break;
}

var G__33369 = args33364.length;
switch (G__33369) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args33364.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26219__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq33365){
var G__33366 = cljs.core.first.call(null,seq33365);
var seq33365__$1 = cljs.core.next.call(null,seq33365);
var G__33367 = cljs.core.first.call(null,seq33365__$1);
var seq33365__$2 = cljs.core.next.call(null,seq33365__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__33366,G__33367,seq33365__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args33376 = [];
var len__26200__auto___33382 = arguments.length;
var i__26201__auto___33383 = (0);
while(true){
if((i__26201__auto___33383 < len__26200__auto___33382)){
args33376.push((arguments[i__26201__auto___33383]));

var G__33384 = (i__26201__auto___33383 + (1));
i__26201__auto___33383 = G__33384;
continue;
} else {
}
break;
}

var G__33381 = args33376.length;
switch (G__33381) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26219__auto__ = (new cljs.core.IndexedSeq(args33376.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26219__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__33374_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33374_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__33375_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__33375_SHARP_);
}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25959__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq33377){
var G__33378 = cljs.core.first.call(null,seq33377);
var seq33377__$1 = cljs.core.next.call(null,seq33377);
var G__33379 = cljs.core.first.call(null,seq33377__$1);
var seq33377__$2 = cljs.core.next.call(null,seq33377__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__33378,G__33379,seq33377__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33401 = arguments.length;
var i__26201__auto___33402 = (0);
while(true){
if((i__26201__auto___33402 < len__26200__auto___33401)){
args__26207__auto__.push((arguments[i__26201__auto___33402]));

var G__33403 = (i__26201__auto___33402 + (1));
i__26201__auto___33402 = G__33403;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__33389){
var vec__33390 = p__33389;
var k = cljs.core.nth.call(null,vec__33390,(0),null);
var _ = cljs.core.nth.call(null,vec__33390,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__25959__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__33393){
var vec__33394 = p__33393;
var k = cljs.core.nth.call(null,vec__33394,(0),null);
var v = cljs.core.nth.call(null,vec__33394,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25959__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__33397){
var vec__33398 = p__33397;
var k = cljs.core.nth.call(null,vec__33398,(0),null);
var v = cljs.core.nth.call(null,vec__33398,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25959__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__25959__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq33386){
var G__33387 = cljs.core.first.call(null,seq33386);
var seq33386__$1 = cljs.core.next.call(null,seq33386);
var G__33388 = cljs.core.first.call(null,seq33386__$1);
var seq33386__$2 = cljs.core.next.call(null,seq33386__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__33387,G__33388,seq33386__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});

cljs.core$macros.alength.cljs$lang$macro = true;
/**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__33404__auto__","a__33404__auto__",-951296989,null)),(function (){var x__25959__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__33404__auto__","a__33404__auto__",-951296989,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25959__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__33404__auto__","a__33404__auto__",-951296989,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25959__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__25959__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__33405__auto__","a__33405__auto__",-2036389271,null)),(function (){var x__25959__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__25959__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25959__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__33405__auto__","a__33405__auto__",-2036389271,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__25959__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.areduce.cljs$lang$macro = true;
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33411 = arguments.length;
var i__26201__auto___33412 = (0);
while(true){
if((i__26201__auto___33412 < len__26200__auto___33411)){
args__26207__auto__.push((arguments[i__26201__auto___33412]));

var G__33413 = (i__26201__auto___33412 + (1));
i__26201__auto___33412 = G__33413;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__33406__auto__","n__33406__auto__",-512742461,null)),(function (){var x__25959__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25959__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__33406__auto__","n__33406__auto__",-512742461,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body,(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__25959__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq33407){
var G__33408 = cljs.core.first.call(null,seq33407);
var seq33407__$1 = cljs.core.next.call(null,seq33407);
var G__33409 = cljs.core.first.call(null,seq33407__$1);
var seq33407__$2 = cljs.core.next.call(null,seq33407__$1);
var G__33410 = cljs.core.first.call(null,seq33407__$2);
var seq33407__$3 = cljs.core.next.call(null,seq33407__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__33408,G__33409,G__33410,seq33407__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33417 = arguments.length;
var i__26201__auto___33418 = (0);
while(true){
if((i__26201__auto___33418 < len__26200__auto___33417)){
args__26207__auto__.push((arguments[i__26201__auto___33418]));

var G__33419 = (i__26201__auto___33418 + (1));
i__26201__auto___33418 = G__33419;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((1) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26208__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__33414_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__33414_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq33415){
var G__33416 = cljs.core.first.call(null,seq33415);
var seq33415__$1 = cljs.core.next.call(null,seq33415);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__33416,seq33415__$1);
});

/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33429 = arguments.length;
var i__26201__auto___33430 = (0);
while(true){
if((i__26201__auto___33430 < len__26200__auto___33429)){
args__26207__auto__.push((arguments[i__26201__auto___33430]));

var G__33431 = (i__26201__auto___33430 + (1));
i__26201__auto___33430 = G__33431;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__33420__auto__","method-table__33420__auto__",1554206795,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25959__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__33421__auto__","prefer-table__33421__auto__",317926562,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25959__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__33422__auto__","method-cache__33422__auto__",-1044945934,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25959__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__33423__auto__","cached-hierarchy__33423__auto__",-1565635207,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25959__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__33424__auto__","hierarchy__33424__auto__",-36810637,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__25959__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__25959__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__33424__auto__","hierarchy__33424__auto__",-36810637,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__33420__auto__","method-table__33420__auto__",1554206795,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__33421__auto__","prefer-table__33421__auto__",317926562,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__33422__auto__","method-cache__33422__auto__",-1044945934,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__33423__auto__","cached-hierarchy__33423__auto__",-1565635207,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq33425){
var G__33426 = cljs.core.first.call(null,seq33425);
var seq33425__$1 = cljs.core.next.call(null,seq33425);
var G__33427 = cljs.core.first.call(null,seq33425__$1);
var seq33425__$2 = cljs.core.next.call(null,seq33425__$1);
var G__33428 = cljs.core.first.call(null,seq33425__$2);
var seq33425__$3 = cljs.core.next.call(null,seq33425__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__33426,G__33427,G__33428,seq33425__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33437 = arguments.length;
var i__26201__auto___33438 = (0);
while(true){
if((i__26201__auto___33438 < len__26200__auto___33437)){
args__26207__auto__.push((arguments[i__26201__auto___33438]));

var G__33439 = (i__26201__auto___33438 + (1));
i__26201__auto___33438 = G__33439;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((4) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26208__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq33432){
var G__33433 = cljs.core.first.call(null,seq33432);
var seq33432__$1 = cljs.core.next.call(null,seq33432);
var G__33434 = cljs.core.first.call(null,seq33432__$1);
var seq33432__$2 = cljs.core.next.call(null,seq33432__$1);
var G__33435 = cljs.core.first.call(null,seq33432__$2);
var seq33432__$3 = cljs.core.next.call(null,seq33432__$2);
var G__33436 = cljs.core.first.call(null,seq33432__$3);
var seq33432__$4 = cljs.core.next.call(null,seq33432__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__33433,G__33434,G__33435,G__33436,seq33432__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__33440__auto__","start__33440__auto__",-1195526921,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__33441__auto__","ret__33441__auto__",957912145,null)),(function (){var x__25959__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__33440__auto__","start__33440__auto__",-1195526921,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__33441__auto__","ret__33441__auto__",957912145,null)))));
});

cljs.core$macros.time.cljs$lang$macro = true;
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33456 = arguments.length;
var i__26201__auto___33457 = (0);
while(true){
if((i__26201__auto___33457 < len__26200__auto___33456)){
args__26207__auto__.push((arguments[i__26201__auto___33457]));

var G__33458 = (i__26201__auto___33457 + (1));
i__26201__auto___33457 = G__33458;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((5) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__26208__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__33453){
var map__33454 = p__33453;
var map__33454__$1 = ((((!((map__33454 == null)))?((((map__33454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33454):map__33454);
var print_fn = cljs.core.get.call(null,map__33454__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__33442__auto__","start__33442__auto__",121766955,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__33443__auto__","ret__33443__auto__",-688074258,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___33444__auto__","___33444__auto__",780526582,null)),(function (){var x__25959__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__33445__auto__","end__33445__auto__",891859436,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__33446__auto__","elapsed__33446__auto__",1352149916,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__33445__auto__","end__33445__auto__",891859436,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__33442__auto__","start__33442__auto__",121766955,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__25959__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__25959__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__25959__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__33446__auto__","elapsed__33446__auto__",1352149916,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq33447){
var G__33448 = cljs.core.first.call(null,seq33447);
var seq33447__$1 = cljs.core.next.call(null,seq33447);
var G__33449 = cljs.core.first.call(null,seq33447__$1);
var seq33447__$2 = cljs.core.next.call(null,seq33447__$1);
var G__33450 = cljs.core.first.call(null,seq33447__$2);
var seq33447__$3 = cljs.core.next.call(null,seq33447__$2);
var G__33451 = cljs.core.first.call(null,seq33447__$3);
var seq33447__$4 = cljs.core.next.call(null,seq33447__$3);
var G__33452 = cljs.core.first.call(null,seq33447__$4);
var seq33447__$5 = cljs.core.next.call(null,seq33447__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__33448,G__33449,G__33450,G__33451,G__33452,seq33447__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args33459 = [];
var len__26200__auto___33462 = arguments.length;
var i__26201__auto___33463 = (0);
while(true){
if((i__26201__auto___33463 < len__26200__auto___33462)){
args33459.push((arguments[i__26201__auto___33463]));

var G__33464 = (i__26201__auto___33463 + (1));
i__26201__auto___33463 = G__33464;
continue;
} else {
}
break;
}

var G__33461 = args33459.length;
switch (G__33461) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33459.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__25959__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__25959__auto__ = prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33471 = arguments.length;
var i__26201__auto___33472 = (0);
while(true){
if((i__26201__auto___33472 < len__26200__auto___33471)){
args__26207__auto__.push((arguments[i__26201__auto___33472]));

var G__33473 = (i__26201__auto___33472 + (1));
i__26201__auto___33472 = G__33473;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__33466__auto__","sb__33466__auto__",1426709918,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__33467__auto__","x__33467__auto__",2084301992,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__33466__auto__","sb__33466__auto__",1426709918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__33467__auto__","x__33467__auto__",2084301992,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__33466__auto__","sb__33466__auto__",1426709918,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq33468){
var G__33469 = cljs.core.first.call(null,seq33468);
var seq33468__$1 = cljs.core.next.call(null,seq33468);
var G__33470 = cljs.core.first.call(null,seq33468__$1);
var seq33468__$2 = cljs.core.next.call(null,seq33468__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__33469,G__33470,seq33468__$2);
});


cljs.core$macros.with_out_str.cljs$lang$macro = true;
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33478 = arguments.length;
var i__26201__auto___33479 = (0);
while(true){
if((i__26201__auto___33479 < len__26200__auto___33478)){
args__26207__auto__.push((arguments[i__26201__auto___33479]));

var G__33480 = (i__26201__auto___33479 + (1));
i__26201__auto___33479 = G__33480;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__33474_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25959__auto__ = p1__33474_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq33475){
var G__33476 = cljs.core.first.call(null,seq33475);
var seq33475__$1 = cljs.core.next.call(null,seq33475);
var G__33477 = cljs.core.first.call(null,seq33475__$1);
var seq33475__$2 = cljs.core.next.call(null,seq33475__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__33476,G__33477,seq33475__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25959__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__25959__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33481__auto__","this__33481__auto__",193781045,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33481__auto__","this__33481__auto__",193781045,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__33482){
var vec__33494 = p__33482;
var quote = cljs.core.nth.call(null,vec__33494,(0),null);
var ns = cljs.core.nth.call(null,vec__33494,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__25959__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__33494,quote,ns){
return (function (p__33501){
var vec__33502 = p__33501;
var sym = cljs.core.nth.call(null,vec__33502,(0),null);
var _ = cljs.core.nth.call(null,vec__33502,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__25959__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__25959__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
});})(vec__33494,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__33505,p__33506){
var vec__33513 = p__33505;
var quote0 = cljs.core.nth.call(null,vec__33513,(0),null);
var ns = cljs.core.nth.call(null,vec__33513,(1),null);
var vec__33516 = p__33506;
var quote1 = cljs.core.nth.call(null,vec__33516,(0),null);
var sym = cljs.core.nth.call(null,vec__33516,(1),null);
if((cljs.core._EQ_.call(null,quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__25959__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.compiler.munge.call(null,[cljs.core.str(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33524 = arguments.length;
var i__26201__auto___33525 = (0);
while(true){
if((i__26201__auto___33525 < len__26200__auto___33524)){
args__26207__auto__.push((arguments[i__26201__auto___33525]));

var G__33526 = (i__26201__auto___33525 + (1));
i__26201__auto___33525 = G__33526;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((4) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26208__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__25959__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__25959__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq33519){
var G__33520 = cljs.core.first.call(null,seq33519);
var seq33519__$1 = cljs.core.next.call(null,seq33519);
var G__33521 = cljs.core.first.call(null,seq33519__$1);
var seq33519__$2 = cljs.core.next.call(null,seq33519__$1);
var G__33522 = cljs.core.first.call(null,seq33519__$2);
var seq33519__$3 = cljs.core.next.call(null,seq33519__$2);
var G__33523 = cljs.core.first.call(null,seq33519__$3);
var seq33519__$4 = cljs.core.next.call(null,seq33519__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33520,G__33521,G__33522,G__33523,seq33519__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33531 = arguments.length;
var i__26201__auto___33532 = (0);
while(true){
if((i__26201__auto___33532 < len__26200__auto___33531)){
args__26207__auto__.push((arguments[i__26201__auto___33532]));

var G__33533 = (i__26201__auto___33532 + (1));
i__26201__auto___33532 = G__33533;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq33527){
var G__33528 = cljs.core.first.call(null,seq33527);
var seq33527__$1 = cljs.core.next.call(null,seq33527);
var G__33529 = cljs.core.first.call(null,seq33527__$1);
var seq33527__$2 = cljs.core.next.call(null,seq33527__$1);
var G__33530 = cljs.core.first.call(null,seq33527__$2);
var seq33527__$3 = cljs.core.next.call(null,seq33527__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__33528,G__33529,G__33530,seq33527__$3);
});


cljs.core$macros.locking.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__25959__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;
/**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand-1 must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__25959__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.macroexpand_1.cljs$lang$macro = true;
/**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__33534 = form_SINGLEQUOTE_;
var G__33535 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__33534;
form_SINGLEQUOTE_ = G__33535;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__25959__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}
break;
}
});

cljs.core$macros.macroexpand.cljs$lang$macro = true;
cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__25113__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__25113__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__25113__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args33536 = [];
var len__26200__auto___33543 = arguments.length;
var i__26201__auto___33544 = (0);
while(true){
if((i__26201__auto___33544 < len__26200__auto___33543)){
args33536.push((arguments[i__26201__auto___33544]));

var G__33545 = (i__26201__auto___33544 + (1));
i__26201__auto___33544 = G__33545;
continue;
} else {
}
break;
}

var G__33538 = args33536.length;
switch (G__33538) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33536.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__33539,solo){
var vec__33540 = p__33539;
var seq__33541 = cljs.core.seq.call(null,vec__33540);
var first__33542 = cljs.core.first.call(null,seq__33541);
var seq__33541__$1 = cljs.core.next.call(null,seq__33541);
var arglist = first__33542;
var body = seq__33541__$1;
var method = vec__33540;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__33540,seq__33541,first__33542,seq__33541__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__33540,seq__33541,first__33542,seq__33541__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__33540,seq__33541,first__33542,seq__33541__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__33540,seq__33541,first__33542,seq__33541__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__33540,seq__33541,first__33542,seq__33541__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/afadeev/Dropbox/cljs/service-purchase-cljs/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2764),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2764),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/afadeev/Dropbox/cljs/service-purchase-cljs/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2765),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2765),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
});})(sig,restarg,vec__33540,seq__33541,first__33542,seq__33541__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__33540,seq__33541,first__33542,seq__33541__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),params,(function (){var x__25959__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25959__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}
});})(sig,restarg,vec__33540,seq__33541,first__33542,seq__33541__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())))):null),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__33547__auto__","len__33547__auto__",1760857769,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__33548__auto__","i__33548__auto__",-1857275809,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__33548__auto__","i__33548__auto__",-1857275809,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__33547__auto__","len__33547__auto__",1760857769,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__25959__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__33548__auto__","i__33548__auto__",-1857275809,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__33548__auto__","i__33548__auto__",-1857275809,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__33551,emit_var_QMARK_){
var vec__33558 = p__33551;
var vec__33561 = cljs.core.nth.call(null,vec__33558,(0),null);
var seq__33562 = cljs.core.seq.call(null,vec__33561);
var first__33563 = cljs.core.first.call(null,seq__33562);
var seq__33562__$1 = cljs.core.next.call(null,seq__33562);
var arglist = first__33563;
var body = seq__33562__$1;
var method = vec__33561;
var fdecl = vec__33558;
var dest_args = ((function (vec__33558,vec__33561,seq__33562,first__33563,seq__33562__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__33558,vec__33561,seq__33562,first__33563,seq__33562__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});})(vec__33558,vec__33561,seq__33562,first__33563,seq__33562__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__33558,vec__33561,seq__33562,first__33563,seq__33562__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__25959__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__33549__auto__","args__33549__auto__",1847079399,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__33549__auto__","args__33549__auto__",1847079399,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__33550__auto__","argseq__33550__auto__",2100280000,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25959__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__33549__auto__","args__33549__auto__",1847079399,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/afadeev/Dropbox/cljs/service-purchase-cljs/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2812),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2812),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__33549__auto__","args__33549__auto__",1847079399,null)),(function (){var x__25959__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__33550__auto__","argseq__33550__auto__",2100280000,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__25959__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__33588){
var vec__33592 = p__33588;
var seq__33593 = cljs.core.seq.call(null,vec__33592);
var first__33594 = cljs.core.first.call(null,seq__33593);
var seq__33593__$1 = cljs.core.next.call(null,seq__33593);
var sig = first__33594;
var body = seq__33593__$1;
var method = vec__33592;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__33564_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__33564_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25959__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__25959__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__25959__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__33565_SHARP_){
return fixed_arity.call(null,rname,p1__33565_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__25959__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25959__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__33566__auto__","argseq__33566__auto__",702513873,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/afadeev/Dropbox/cljs/service-purchase-cljs/resources/public/js/compiled/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2870),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2870),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__25959__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__33566__auto__","argseq__33566__auto__",702513873,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__25959__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__25959__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25959__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),(function (){var x__25959__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__25959__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})())));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__25959__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__25959__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__25959__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__33595__i = 0, G__33595__a = new Array(arguments.length -  3);
while (G__33595__i < G__33595__a.length) {G__33595__a[G__33595__i] = arguments[G__33595__i + 3]; ++G__33595__i;}
  fdecl = new cljs.core.IndexedSeq(G__33595__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__33596){
var _AMPERSAND_form = cljs.core.first(arglist__33596);
arglist__33596 = cljs.core.next(arglist__33596);
var _AMPERSAND_env = cljs.core.first(arglist__33596);
arglist__33596 = cljs.core.next(arglist__33596);
var name = cljs.core.first(arglist__33596);
var fdecl = cljs.core.rest(arglist__33596);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__26207__auto__ = [];
var len__26200__auto___33601 = arguments.length;
var i__26201__auto___33602 = (0);
while(true){
if((i__26201__auto___33602 < len__26200__auto___33601)){
args__26207__auto__.push((arguments[i__26201__auto___33602]));

var G__33603 = (i__26201__auto___33602 + (1));
i__26201__auto___33602 = G__33603;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__25959__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__33604 = cljs.core.cons.call(null,f,p);
var G__33605 = cljs.core.next.call(null,args__$1);
p = G__33604;
args__$1 = G__33605;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__33606 = cljs.core.cons.call(null,f,p);
var G__33607 = cljs.core.next.call(null,args__$1);
p = G__33606;
args__$1 = G__33607;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__33608 = cljs.core.next.call(null,fd);
fd = G__33608;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__33609 = cljs.core.next.call(null,fd);
fd = G__33609;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__25959__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__33610 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__33611 = cljs.core.next.call(null,ds);
acc = G__33610;
ds = G__33611;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__33612 = cljs.core.next.call(null,p);
var G__33613 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__33612;
d = G__33613;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj.call(null,(function (){var x__25959__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = cljs.core._conj.call(null,(function (){var x__25959__auto____$1 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25959__auto____$1 = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__25959__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto____$1);
})(),x__25959__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq33597){
var G__33598 = cljs.core.first.call(null,seq33597);
var seq33597__$1 = cljs.core.next.call(null,seq33597);
var G__33599 = cljs.core.first.call(null,seq33597__$1);
var seq33597__$2 = cljs.core.next.call(null,seq33597__$1);
var G__33600 = cljs.core.first.call(null,seq33597__$2);
var seq33597__$3 = cljs.core.next.call(null,seq33597__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__33598,G__33599,G__33600,seq33597__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map?rel=1490344444043