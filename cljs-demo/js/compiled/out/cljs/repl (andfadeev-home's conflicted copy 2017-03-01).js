// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__106829){
var map__106854 = p__106829;
var map__106854__$1 = ((((!((map__106854 == null)))?((((map__106854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__106854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106854):map__106854);
var m = map__106854__$1;
var n = cljs.core.get.call(null,map__106854__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__106854__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__106856_106878 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__106857_106879 = null;
var count__106858_106880 = (0);
var i__106859_106881 = (0);
while(true){
if((i__106859_106881 < count__106858_106880)){
var f_106882 = cljs.core._nth.call(null,chunk__106857_106879,i__106859_106881);
cljs.core.println.call(null,"  ",f_106882);

var G__106883 = seq__106856_106878;
var G__106884 = chunk__106857_106879;
var G__106885 = count__106858_106880;
var G__106886 = (i__106859_106881 + (1));
seq__106856_106878 = G__106883;
chunk__106857_106879 = G__106884;
count__106858_106880 = G__106885;
i__106859_106881 = G__106886;
continue;
} else {
var temp__4657__auto___106887 = cljs.core.seq.call(null,seq__106856_106878);
if(temp__4657__auto___106887){
var seq__106856_106888__$1 = temp__4657__auto___106887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106856_106888__$1)){
var c__25936__auto___106889 = cljs.core.chunk_first.call(null,seq__106856_106888__$1);
var G__106890 = cljs.core.chunk_rest.call(null,seq__106856_106888__$1);
var G__106891 = c__25936__auto___106889;
var G__106892 = cljs.core.count.call(null,c__25936__auto___106889);
var G__106893 = (0);
seq__106856_106878 = G__106890;
chunk__106857_106879 = G__106891;
count__106858_106880 = G__106892;
i__106859_106881 = G__106893;
continue;
} else {
var f_106894 = cljs.core.first.call(null,seq__106856_106888__$1);
cljs.core.println.call(null,"  ",f_106894);

var G__106895 = cljs.core.next.call(null,seq__106856_106888__$1);
var G__106896 = null;
var G__106897 = (0);
var G__106898 = (0);
seq__106856_106878 = G__106895;
chunk__106857_106879 = G__106896;
count__106858_106880 = G__106897;
i__106859_106881 = G__106898;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_106899 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25125__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_106899);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_106899)))?cljs.core.second.call(null,arglists_106899):arglists_106899));
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
var seq__106860_106900 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__106861_106901 = null;
var count__106862_106902 = (0);
var i__106863_106903 = (0);
while(true){
if((i__106863_106903 < count__106862_106902)){
var vec__106864_106904 = cljs.core._nth.call(null,chunk__106861_106901,i__106863_106903);
var name_106905 = cljs.core.nth.call(null,vec__106864_106904,(0),null);
var map__106867_106906 = cljs.core.nth.call(null,vec__106864_106904,(1),null);
var map__106867_106907__$1 = ((((!((map__106867_106906 == null)))?((((map__106867_106906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__106867_106906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106867_106906):map__106867_106906);
var doc_106908 = cljs.core.get.call(null,map__106867_106907__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_106909 = cljs.core.get.call(null,map__106867_106907__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_106905);

cljs.core.println.call(null," ",arglists_106909);

if(cljs.core.truth_(doc_106908)){
cljs.core.println.call(null," ",doc_106908);
} else {
}

var G__106910 = seq__106860_106900;
var G__106911 = chunk__106861_106901;
var G__106912 = count__106862_106902;
var G__106913 = (i__106863_106903 + (1));
seq__106860_106900 = G__106910;
chunk__106861_106901 = G__106911;
count__106862_106902 = G__106912;
i__106863_106903 = G__106913;
continue;
} else {
var temp__4657__auto___106914 = cljs.core.seq.call(null,seq__106860_106900);
if(temp__4657__auto___106914){
var seq__106860_106915__$1 = temp__4657__auto___106914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106860_106915__$1)){
var c__25936__auto___106916 = cljs.core.chunk_first.call(null,seq__106860_106915__$1);
var G__106917 = cljs.core.chunk_rest.call(null,seq__106860_106915__$1);
var G__106918 = c__25936__auto___106916;
var G__106919 = cljs.core.count.call(null,c__25936__auto___106916);
var G__106920 = (0);
seq__106860_106900 = G__106917;
chunk__106861_106901 = G__106918;
count__106862_106902 = G__106919;
i__106863_106903 = G__106920;
continue;
} else {
var vec__106869_106921 = cljs.core.first.call(null,seq__106860_106915__$1);
var name_106922 = cljs.core.nth.call(null,vec__106869_106921,(0),null);
var map__106872_106923 = cljs.core.nth.call(null,vec__106869_106921,(1),null);
var map__106872_106924__$1 = ((((!((map__106872_106923 == null)))?((((map__106872_106923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__106872_106923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106872_106923):map__106872_106923);
var doc_106925 = cljs.core.get.call(null,map__106872_106924__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_106926 = cljs.core.get.call(null,map__106872_106924__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_106922);

cljs.core.println.call(null," ",arglists_106926);

if(cljs.core.truth_(doc_106925)){
cljs.core.println.call(null," ",doc_106925);
} else {
}

var G__106927 = cljs.core.next.call(null,seq__106860_106915__$1);
var G__106928 = null;
var G__106929 = (0);
var G__106930 = (0);
seq__106860_106900 = G__106927;
chunk__106861_106901 = G__106928;
count__106862_106902 = G__106929;
i__106863_106903 = G__106930;
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

var seq__106874 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__106875 = null;
var count__106876 = (0);
var i__106877 = (0);
while(true){
if((i__106877 < count__106876)){
var role = cljs.core._nth.call(null,chunk__106875,i__106877);
var temp__4657__auto___106931__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___106931__$1)){
var spec_106932 = temp__4657__auto___106931__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_106932));
} else {
}

var G__106933 = seq__106874;
var G__106934 = chunk__106875;
var G__106935 = count__106876;
var G__106936 = (i__106877 + (1));
seq__106874 = G__106933;
chunk__106875 = G__106934;
count__106876 = G__106935;
i__106877 = G__106936;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__106874);
if(temp__4657__auto____$1){
var seq__106874__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106874__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__106874__$1);
var G__106937 = cljs.core.chunk_rest.call(null,seq__106874__$1);
var G__106938 = c__25936__auto__;
var G__106939 = cljs.core.count.call(null,c__25936__auto__);
var G__106940 = (0);
seq__106874 = G__106937;
chunk__106875 = G__106938;
count__106876 = G__106939;
i__106877 = G__106940;
continue;
} else {
var role = cljs.core.first.call(null,seq__106874__$1);
var temp__4657__auto___106941__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___106941__$2)){
var spec_106942 = temp__4657__auto___106941__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_106942));
} else {
}

var G__106943 = cljs.core.next.call(null,seq__106874__$1);
var G__106944 = null;
var G__106945 = (0);
var G__106946 = (0);
seq__106874 = G__106943;
chunk__106875 = G__106944;
count__106876 = G__106945;
i__106877 = G__106946;
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

//# sourceMappingURL=repl.js.map?rel=1488399918940