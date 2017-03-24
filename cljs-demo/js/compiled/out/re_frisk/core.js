// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frisk.core');
goog.require('cljs.core');
goog.require('re_frisk.help');
goog.require('reagent.core');
goog.require('re_frisk.devtool');
goog.require('reagent.ratom');
goog.require('re_frisk.data');
goog.require('re_frisk_shell.core');
goog.require('re_frame.core');
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value){
var cntx = cljs.core.first.call(null,value).call(null,new cljs.core.Keyword(null,"contexts","contexts",4351546).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)));
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_events,cljs.core.conj,(cljs.core.truth_(cntx)?cljs.core.assoc.call(null,cntx,new cljs.core.Keyword(null,"event","event",301435442),value):value));
});
re_frisk.core.render_re_frisk = (function re_frisk$core$render_re_frisk(params){
var div = document.createElement("div");
document.body.appendChild(div);

onbeforeunload = ((function (div){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"win","win",-1624642689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)))){
return new cljs.core.Keyword(null,"win","win",-1624642689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)).alert("Application has been closed or refreshed. Debugger has been stoped!");
} else {
return null;
}
});})(div))
;

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.core.re_frisk_shell,re_frisk.data.re_frame_data,re_frisk.data.deb_data,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),re_frisk.devtool.open_debugger_window], null),params)], null),div);
});
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__26207__auto__ = [];
var len__26200__auto___30672 = arguments.length;
var i__26201__auto___30673 = (0);
while(true){
if((i__26201__auto___30673 < len__26200__auto___30672)){
args__26207__auto__.push((arguments[i__26201__auto___30673]));

var G__30674 = (i__26201__auto___30673 + (1));
i__26201__auto___30673 = G__30674;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__30666){
var vec__30667 = p__30666;
var map__30670 = cljs.core.nth.call(null,vec__30667,(0),null);
var map__30670__$1 = ((((!((map__30670 == null)))?((((map__30670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30670):map__30670);
var opts = map__30670__$1;
var kind__GT_id__GT_handler_QMARK_ = cljs.core.get.call(null,map__30670__$1,new cljs.core.Keyword(null,"kind->id->handler?","kind->id->handler?",1592665864));
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
if(cljs.core.truth_(re_frame.core.reg_sub)){
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709),((function (vec__30667,map__30670,map__30670__$1,opts,kind__GT_id__GT_handler_QMARK_){
return (function (db,_){
return db;
});})(vec__30667,map__30670,map__30670__$1,opts,kind__GT_id__GT_handler_QMARK_))
);
} else {
re_frame.core.register_sub.call(null,new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709),((function (vec__30667,map__30670,map__30670__$1,opts,kind__GT_id__GT_handler_QMARK_){
return (function (db,_){
return reagent.ratom.make_reaction.call(null,((function (vec__30667,map__30670,map__30670__$1,opts,kind__GT_id__GT_handler_QMARK_){
return (function (){
return cljs.core.deref.call(null,db);
});})(vec__30667,map__30670,map__30670__$1,opts,kind__GT_id__GT_handler_QMARK_))
);
});})(vec__30667,map__30670,map__30670__$1,opts,kind__GT_id__GT_handler_QMARK_))
);
}

cljs.core.reset_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.merge.call(null,re_frisk.help.re_frame_handlers.call(null,kind__GT_id__GT_handler_QMARK_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db","app-db",865606302),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709)], null))], null)));

cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"prefs","prefs",-1818938470),opts);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"events?","events?",-780512682).cljs$core$IFn$_invoke$arity$1(opts),false)){
} else {
re_frame.core.add_post_event_callback.call(null,re_frisk.core.post_event_callback);
}

return setTimeout(re_frisk.core.render_re_frisk,(100),opts);
}
});

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq30665){
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30665));
});

re_frisk.core.enable_frisk_BANG_ = (function re_frisk$core$enable_frisk_BANG_(var_args){
var args__26207__auto__ = [];
var len__26200__auto___30676 = arguments.length;
var i__26201__auto___30677 = (0);
while(true){
if((i__26201__auto___30677 < len__26200__auto___30676)){
args__26207__auto__.push((arguments[i__26201__auto___30677]));

var G__30678 = (i__26201__auto___30677 + (1));
i__26201__auto___30677 = G__30678;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

return setTimeout(re_frisk.core.render_re_frisk,(100),cljs.core.first.call(null,params));
}
});

re_frisk.core.enable_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_frisk_BANG_.cljs$lang$applyTo = (function (seq30675){
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30675));
});

re_frisk.core.add_data = (function re_frisk$core$add_data(key,data){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc,key,data);
});
re_frisk.core.add_in_data = (function re_frisk$core$add_in_data(keys,data){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,keys,data);
});
re_frisk.core.watch_context = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"re-frisk-watch-context","re-frisk-watch-context",1102368726),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contexts","contexts",4351546),cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context))),new cljs.core.Keyword(null,"before","before",-1633692388)], null),context);

return context;
}));
re_frisk.core.reg_view = (function re_frisk$core$reg_view(view,subs,events){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"events","events",1792552201)], null),cljs.core.set.call(null,events));

cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"subs","subs",-186681991)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__30679_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__30679_SHARP_],[re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30679_SHARP_], null))]);
}),subs)));

var seq__30684 = cljs.core.seq.call(null,subs);
var chunk__30685 = null;
var count__30686 = (0);
var i__30687 = (0);
while(true){
if((i__30687 < count__30686)){
var s = cljs.core._nth.call(null,chunk__30685,i__30687);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));

var G__30688 = seq__30684;
var G__30689 = chunk__30685;
var G__30690 = count__30686;
var G__30691 = (i__30687 + (1));
seq__30684 = G__30688;
chunk__30685 = G__30689;
count__30686 = G__30690;
i__30687 = G__30691;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30684);
if(temp__4657__auto__){
var seq__30684__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30684__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__30684__$1);
var G__30692 = cljs.core.chunk_rest.call(null,seq__30684__$1);
var G__30693 = c__25936__auto__;
var G__30694 = cljs.core.count.call(null,c__25936__auto__);
var G__30695 = (0);
seq__30684 = G__30692;
chunk__30685 = G__30693;
count__30686 = G__30694;
i__30687 = G__30695;
continue;
} else {
var s = cljs.core.first.call(null,seq__30684__$1);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));

var G__30696 = cljs.core.next.call(null,seq__30684__$1);
var G__30697 = null;
var G__30698 = (0);
var G__30699 = (0);
seq__30684 = G__30696;
chunk__30685 = G__30697;
count__30686 = G__30698;
i__30687 = G__30699;
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
});
re_frisk.core.unmount_view = (function re_frisk$core$unmount_view(view){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,view);
} else {
return null;
}
});
(function (){var or__25125__auto__ = re_frame.core.reg_event_db;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return re_frame.core.register_handler;
}
})().call(null,new cljs.core.Keyword("re-frisk","update-db","re-frisk/update-db",-658524246),(function (_,p__30700){
var vec__30701 = p__30700;
var ___$1 = cljs.core.nth.call(null,vec__30701,(0),null);
var value = cljs.core.nth.call(null,vec__30701,(1),null);
return value;
}));

//# sourceMappingURL=core.js.map?rel=1490344428947