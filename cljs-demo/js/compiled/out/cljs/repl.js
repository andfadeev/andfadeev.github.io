// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34634){
var map__34659 = p__34634;
var map__34659__$1 = ((((!((map__34659 == null)))?((((map__34659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34659):map__34659);
var m = map__34659__$1;
var n = cljs.core.get.call(null,map__34659__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34659__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34661_34683 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34662_34684 = null;
var count__34663_34685 = (0);
var i__34664_34686 = (0);
while(true){
if((i__34664_34686 < count__34663_34685)){
var f_34687 = cljs.core._nth.call(null,chunk__34662_34684,i__34664_34686);
cljs.core.println.call(null,"  ",f_34687);

var G__34688 = seq__34661_34683;
var G__34689 = chunk__34662_34684;
var G__34690 = count__34663_34685;
var G__34691 = (i__34664_34686 + (1));
seq__34661_34683 = G__34688;
chunk__34662_34684 = G__34689;
count__34663_34685 = G__34690;
i__34664_34686 = G__34691;
continue;
} else {
var temp__4657__auto___34692 = cljs.core.seq.call(null,seq__34661_34683);
if(temp__4657__auto___34692){
var seq__34661_34693__$1 = temp__4657__auto___34692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34661_34693__$1)){
var c__25936__auto___34694 = cljs.core.chunk_first.call(null,seq__34661_34693__$1);
var G__34695 = cljs.core.chunk_rest.call(null,seq__34661_34693__$1);
var G__34696 = c__25936__auto___34694;
var G__34697 = cljs.core.count.call(null,c__25936__auto___34694);
var G__34698 = (0);
seq__34661_34683 = G__34695;
chunk__34662_34684 = G__34696;
count__34663_34685 = G__34697;
i__34664_34686 = G__34698;
continue;
} else {
var f_34699 = cljs.core.first.call(null,seq__34661_34693__$1);
cljs.core.println.call(null,"  ",f_34699);

var G__34700 = cljs.core.next.call(null,seq__34661_34693__$1);
var G__34701 = null;
var G__34702 = (0);
var G__34703 = (0);
seq__34661_34683 = G__34700;
chunk__34662_34684 = G__34701;
count__34663_34685 = G__34702;
i__34664_34686 = G__34703;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34704 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25125__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34704);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34704)))?cljs.core.second.call(null,arglists_34704):arglists_34704));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34665_34705 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34666_34706 = null;
var count__34667_34707 = (0);
var i__34668_34708 = (0);
while(true){
if((i__34668_34708 < count__34667_34707)){
var vec__34669_34709 = cljs.core._nth.call(null,chunk__34666_34706,i__34668_34708);
var name_34710 = cljs.core.nth.call(null,vec__34669_34709,(0),null);
var map__34672_34711 = cljs.core.nth.call(null,vec__34669_34709,(1),null);
var map__34672_34712__$1 = ((((!((map__34672_34711 == null)))?((((map__34672_34711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34672_34711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34672_34711):map__34672_34711);
var doc_34713 = cljs.core.get.call(null,map__34672_34712__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34714 = cljs.core.get.call(null,map__34672_34712__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34710);

cljs.core.println.call(null," ",arglists_34714);

if(cljs.core.truth_(doc_34713)){
cljs.core.println.call(null," ",doc_34713);
} else {
}

var G__34715 = seq__34665_34705;
var G__34716 = chunk__34666_34706;
var G__34717 = count__34667_34707;
var G__34718 = (i__34668_34708 + (1));
seq__34665_34705 = G__34715;
chunk__34666_34706 = G__34716;
count__34667_34707 = G__34717;
i__34668_34708 = G__34718;
continue;
} else {
var temp__4657__auto___34719 = cljs.core.seq.call(null,seq__34665_34705);
if(temp__4657__auto___34719){
var seq__34665_34720__$1 = temp__4657__auto___34719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34665_34720__$1)){
var c__25936__auto___34721 = cljs.core.chunk_first.call(null,seq__34665_34720__$1);
var G__34722 = cljs.core.chunk_rest.call(null,seq__34665_34720__$1);
var G__34723 = c__25936__auto___34721;
var G__34724 = cljs.core.count.call(null,c__25936__auto___34721);
var G__34725 = (0);
seq__34665_34705 = G__34722;
chunk__34666_34706 = G__34723;
count__34667_34707 = G__34724;
i__34668_34708 = G__34725;
continue;
} else {
var vec__34674_34726 = cljs.core.first.call(null,seq__34665_34720__$1);
var name_34727 = cljs.core.nth.call(null,vec__34674_34726,(0),null);
var map__34677_34728 = cljs.core.nth.call(null,vec__34674_34726,(1),null);
var map__34677_34729__$1 = ((((!((map__34677_34728 == null)))?((((map__34677_34728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34677_34728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34677_34728):map__34677_34728);
var doc_34730 = cljs.core.get.call(null,map__34677_34729__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34731 = cljs.core.get.call(null,map__34677_34729__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34727);

cljs.core.println.call(null," ",arglists_34731);

if(cljs.core.truth_(doc_34730)){
cljs.core.println.call(null," ",doc_34730);
} else {
}

var G__34732 = cljs.core.next.call(null,seq__34665_34720__$1);
var G__34733 = null;
var G__34734 = (0);
var G__34735 = (0);
seq__34665_34705 = G__34732;
chunk__34666_34706 = G__34733;
count__34667_34707 = G__34734;
i__34668_34708 = G__34735;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__34679 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34680 = null;
var count__34681 = (0);
var i__34682 = (0);
while(true){
if((i__34682 < count__34681)){
var role = cljs.core._nth.call(null,chunk__34680,i__34682);
var temp__4657__auto___34736__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34736__$1)){
var spec_34737 = temp__4657__auto___34736__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34737));
} else {
}

var G__34738 = seq__34679;
var G__34739 = chunk__34680;
var G__34740 = count__34681;
var G__34741 = (i__34682 + (1));
seq__34679 = G__34738;
chunk__34680 = G__34739;
count__34681 = G__34740;
i__34682 = G__34741;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__34679);
if(temp__4657__auto____$1){
var seq__34679__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34679__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__34679__$1);
var G__34742 = cljs.core.chunk_rest.call(null,seq__34679__$1);
var G__34743 = c__25936__auto__;
var G__34744 = cljs.core.count.call(null,c__25936__auto__);
var G__34745 = (0);
seq__34679 = G__34742;
chunk__34680 = G__34743;
count__34681 = G__34744;
i__34682 = G__34745;
continue;
} else {
var role = cljs.core.first.call(null,seq__34679__$1);
var temp__4657__auto___34746__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34746__$2)){
var spec_34747 = temp__4657__auto___34746__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34747));
} else {
}

var G__34748 = cljs.core.next.call(null,seq__34679__$1);
var G__34749 = null;
var G__34750 = (0);
var G__34751 = (0);
seq__34679 = G__34748;
chunk__34680 = G__34749;
count__34681 = G__34750;
i__34682 = G__34751;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1488439828667