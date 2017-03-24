// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__120330){
var map__120355 = p__120330;
var map__120355__$1 = ((((!((map__120355 == null)))?((((map__120355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120355):map__120355);
var m = map__120355__$1;
var n = cljs.core.get.call(null,map__120355__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__120355__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__120357_120379 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__120358_120380 = null;
var count__120359_120381 = (0);
var i__120360_120382 = (0);
while(true){
if((i__120360_120382 < count__120359_120381)){
var f_120383 = cljs.core._nth.call(null,chunk__120358_120380,i__120360_120382);
cljs.core.println.call(null,"  ",f_120383);

var G__120384 = seq__120357_120379;
var G__120385 = chunk__120358_120380;
var G__120386 = count__120359_120381;
var G__120387 = (i__120360_120382 + (1));
seq__120357_120379 = G__120384;
chunk__120358_120380 = G__120385;
count__120359_120381 = G__120386;
i__120360_120382 = G__120387;
continue;
} else {
var temp__4657__auto___120388 = cljs.core.seq.call(null,seq__120357_120379);
if(temp__4657__auto___120388){
var seq__120357_120389__$1 = temp__4657__auto___120388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__120357_120389__$1)){
var c__25936__auto___120390 = cljs.core.chunk_first.call(null,seq__120357_120389__$1);
var G__120391 = cljs.core.chunk_rest.call(null,seq__120357_120389__$1);
var G__120392 = c__25936__auto___120390;
var G__120393 = cljs.core.count.call(null,c__25936__auto___120390);
var G__120394 = (0);
seq__120357_120379 = G__120391;
chunk__120358_120380 = G__120392;
count__120359_120381 = G__120393;
i__120360_120382 = G__120394;
continue;
} else {
var f_120395 = cljs.core.first.call(null,seq__120357_120389__$1);
cljs.core.println.call(null,"  ",f_120395);

var G__120396 = cljs.core.next.call(null,seq__120357_120389__$1);
var G__120397 = null;
var G__120398 = (0);
var G__120399 = (0);
seq__120357_120379 = G__120396;
chunk__120358_120380 = G__120397;
count__120359_120381 = G__120398;
i__120360_120382 = G__120399;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_120400 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25125__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_120400);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_120400)))?cljs.core.second.call(null,arglists_120400):arglists_120400));
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
var seq__120361_120401 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__120362_120402 = null;
var count__120363_120403 = (0);
var i__120364_120404 = (0);
while(true){
if((i__120364_120404 < count__120363_120403)){
var vec__120365_120405 = cljs.core._nth.call(null,chunk__120362_120402,i__120364_120404);
var name_120406 = cljs.core.nth.call(null,vec__120365_120405,(0),null);
var map__120368_120407 = cljs.core.nth.call(null,vec__120365_120405,(1),null);
var map__120368_120408__$1 = ((((!((map__120368_120407 == null)))?((((map__120368_120407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120368_120407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120368_120407):map__120368_120407);
var doc_120409 = cljs.core.get.call(null,map__120368_120408__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_120410 = cljs.core.get.call(null,map__120368_120408__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_120406);

cljs.core.println.call(null," ",arglists_120410);

if(cljs.core.truth_(doc_120409)){
cljs.core.println.call(null," ",doc_120409);
} else {
}

var G__120411 = seq__120361_120401;
var G__120412 = chunk__120362_120402;
var G__120413 = count__120363_120403;
var G__120414 = (i__120364_120404 + (1));
seq__120361_120401 = G__120411;
chunk__120362_120402 = G__120412;
count__120363_120403 = G__120413;
i__120364_120404 = G__120414;
continue;
} else {
var temp__4657__auto___120415 = cljs.core.seq.call(null,seq__120361_120401);
if(temp__4657__auto___120415){
var seq__120361_120416__$1 = temp__4657__auto___120415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__120361_120416__$1)){
var c__25936__auto___120417 = cljs.core.chunk_first.call(null,seq__120361_120416__$1);
var G__120418 = cljs.core.chunk_rest.call(null,seq__120361_120416__$1);
var G__120419 = c__25936__auto___120417;
var G__120420 = cljs.core.count.call(null,c__25936__auto___120417);
var G__120421 = (0);
seq__120361_120401 = G__120418;
chunk__120362_120402 = G__120419;
count__120363_120403 = G__120420;
i__120364_120404 = G__120421;
continue;
} else {
var vec__120370_120422 = cljs.core.first.call(null,seq__120361_120416__$1);
var name_120423 = cljs.core.nth.call(null,vec__120370_120422,(0),null);
var map__120373_120424 = cljs.core.nth.call(null,vec__120370_120422,(1),null);
var map__120373_120425__$1 = ((((!((map__120373_120424 == null)))?((((map__120373_120424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120373_120424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120373_120424):map__120373_120424);
var doc_120426 = cljs.core.get.call(null,map__120373_120425__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_120427 = cljs.core.get.call(null,map__120373_120425__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_120423);

cljs.core.println.call(null," ",arglists_120427);

if(cljs.core.truth_(doc_120426)){
cljs.core.println.call(null," ",doc_120426);
} else {
}

var G__120428 = cljs.core.next.call(null,seq__120361_120416__$1);
var G__120429 = null;
var G__120430 = (0);
var G__120431 = (0);
seq__120361_120401 = G__120428;
chunk__120362_120402 = G__120429;
count__120363_120403 = G__120430;
i__120364_120404 = G__120431;
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

var seq__120375 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__120376 = null;
var count__120377 = (0);
var i__120378 = (0);
while(true){
if((i__120378 < count__120377)){
var role = cljs.core._nth.call(null,chunk__120376,i__120378);
var temp__4657__auto___120432__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___120432__$1)){
var spec_120433 = temp__4657__auto___120432__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_120433));
} else {
}

var G__120434 = seq__120375;
var G__120435 = chunk__120376;
var G__120436 = count__120377;
var G__120437 = (i__120378 + (1));
seq__120375 = G__120434;
chunk__120376 = G__120435;
count__120377 = G__120436;
i__120378 = G__120437;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__120375);
if(temp__4657__auto____$1){
var seq__120375__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__120375__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__120375__$1);
var G__120438 = cljs.core.chunk_rest.call(null,seq__120375__$1);
var G__120439 = c__25936__auto__;
var G__120440 = cljs.core.count.call(null,c__25936__auto__);
var G__120441 = (0);
seq__120375 = G__120438;
chunk__120376 = G__120439;
count__120377 = G__120440;
i__120378 = G__120441;
continue;
} else {
var role = cljs.core.first.call(null,seq__120375__$1);
var temp__4657__auto___120442__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___120442__$2)){
var spec_120443 = temp__4657__auto___120442__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_120443));
} else {
}

var G__120444 = cljs.core.next.call(null,seq__120375__$1);
var G__120445 = null;
var G__120446 = (0);
var G__120447 = (0);
seq__120375 = G__120444;
chunk__120376 = G__120445;
count__120377 = G__120446;
i__120378 = G__120447;
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

//# sourceMappingURL=repl.js.map?rel=1488400174520