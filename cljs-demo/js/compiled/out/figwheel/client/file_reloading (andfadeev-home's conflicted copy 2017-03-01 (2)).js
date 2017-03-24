// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25125__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25125__auto__){
return or__25125__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25125__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__119310_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__119310_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__119315 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__119316 = null;
var count__119317 = (0);
var i__119318 = (0);
while(true){
if((i__119318 < count__119317)){
var n = cljs.core._nth.call(null,chunk__119316,i__119318);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__119319 = seq__119315;
var G__119320 = chunk__119316;
var G__119321 = count__119317;
var G__119322 = (i__119318 + (1));
seq__119315 = G__119319;
chunk__119316 = G__119320;
count__119317 = G__119321;
i__119318 = G__119322;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__119315);
if(temp__4657__auto__){
var seq__119315__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119315__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__119315__$1);
var G__119323 = cljs.core.chunk_rest.call(null,seq__119315__$1);
var G__119324 = c__25936__auto__;
var G__119325 = cljs.core.count.call(null,c__25936__auto__);
var G__119326 = (0);
seq__119315 = G__119323;
chunk__119316 = G__119324;
count__119317 = G__119325;
i__119318 = G__119326;
continue;
} else {
var n = cljs.core.first.call(null,seq__119315__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__119327 = cljs.core.next.call(null,seq__119315__$1);
var G__119328 = null;
var G__119329 = (0);
var G__119330 = (0);
seq__119315 = G__119327;
chunk__119316 = G__119328;
count__119317 = G__119329;
i__119318 = G__119330;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__119381_119392 = cljs.core.seq.call(null,deps);
var chunk__119382_119393 = null;
var count__119383_119394 = (0);
var i__119384_119395 = (0);
while(true){
if((i__119384_119395 < count__119383_119394)){
var dep_119396 = cljs.core._nth.call(null,chunk__119382_119393,i__119384_119395);
topo_sort_helper_STAR_.call(null,dep_119396,(depth + (1)),state);

var G__119397 = seq__119381_119392;
var G__119398 = chunk__119382_119393;
var G__119399 = count__119383_119394;
var G__119400 = (i__119384_119395 + (1));
seq__119381_119392 = G__119397;
chunk__119382_119393 = G__119398;
count__119383_119394 = G__119399;
i__119384_119395 = G__119400;
continue;
} else {
var temp__4657__auto___119401 = cljs.core.seq.call(null,seq__119381_119392);
if(temp__4657__auto___119401){
var seq__119381_119402__$1 = temp__4657__auto___119401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119381_119402__$1)){
var c__25936__auto___119403 = cljs.core.chunk_first.call(null,seq__119381_119402__$1);
var G__119404 = cljs.core.chunk_rest.call(null,seq__119381_119402__$1);
var G__119405 = c__25936__auto___119403;
var G__119406 = cljs.core.count.call(null,c__25936__auto___119403);
var G__119407 = (0);
seq__119381_119392 = G__119404;
chunk__119382_119393 = G__119405;
count__119383_119394 = G__119406;
i__119384_119395 = G__119407;
continue;
} else {
var dep_119408 = cljs.core.first.call(null,seq__119381_119402__$1);
topo_sort_helper_STAR_.call(null,dep_119408,(depth + (1)),state);

var G__119409 = cljs.core.next.call(null,seq__119381_119402__$1);
var G__119410 = null;
var G__119411 = (0);
var G__119412 = (0);
seq__119381_119392 = G__119409;
chunk__119382_119393 = G__119410;
count__119383_119394 = G__119411;
i__119384_119395 = G__119412;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__119385){
var vec__119389 = p__119385;
var seq__119390 = cljs.core.seq.call(null,vec__119389);
var first__119391 = cljs.core.first.call(null,seq__119390);
var seq__119390__$1 = cljs.core.next.call(null,seq__119390);
var x = first__119391;
var xs = seq__119390__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__119389,seq__119390,first__119391,seq__119390__$1,x,xs,get_deps__$1){
return (function (p1__119331_SHARP_){
return clojure.set.difference.call(null,p1__119331_SHARP_,x);
});})(vec__119389,seq__119390,first__119391,seq__119390__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__119425 = cljs.core.seq.call(null,provides);
var chunk__119426 = null;
var count__119427 = (0);
var i__119428 = (0);
while(true){
if((i__119428 < count__119427)){
var prov = cljs.core._nth.call(null,chunk__119426,i__119428);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__119429_119437 = cljs.core.seq.call(null,requires);
var chunk__119430_119438 = null;
var count__119431_119439 = (0);
var i__119432_119440 = (0);
while(true){
if((i__119432_119440 < count__119431_119439)){
var req_119441 = cljs.core._nth.call(null,chunk__119430_119438,i__119432_119440);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_119441,prov);

var G__119442 = seq__119429_119437;
var G__119443 = chunk__119430_119438;
var G__119444 = count__119431_119439;
var G__119445 = (i__119432_119440 + (1));
seq__119429_119437 = G__119442;
chunk__119430_119438 = G__119443;
count__119431_119439 = G__119444;
i__119432_119440 = G__119445;
continue;
} else {
var temp__4657__auto___119446 = cljs.core.seq.call(null,seq__119429_119437);
if(temp__4657__auto___119446){
var seq__119429_119447__$1 = temp__4657__auto___119446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119429_119447__$1)){
var c__25936__auto___119448 = cljs.core.chunk_first.call(null,seq__119429_119447__$1);
var G__119449 = cljs.core.chunk_rest.call(null,seq__119429_119447__$1);
var G__119450 = c__25936__auto___119448;
var G__119451 = cljs.core.count.call(null,c__25936__auto___119448);
var G__119452 = (0);
seq__119429_119437 = G__119449;
chunk__119430_119438 = G__119450;
count__119431_119439 = G__119451;
i__119432_119440 = G__119452;
continue;
} else {
var req_119453 = cljs.core.first.call(null,seq__119429_119447__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_119453,prov);

var G__119454 = cljs.core.next.call(null,seq__119429_119447__$1);
var G__119455 = null;
var G__119456 = (0);
var G__119457 = (0);
seq__119429_119437 = G__119454;
chunk__119430_119438 = G__119455;
count__119431_119439 = G__119456;
i__119432_119440 = G__119457;
continue;
}
} else {
}
}
break;
}

var G__119458 = seq__119425;
var G__119459 = chunk__119426;
var G__119460 = count__119427;
var G__119461 = (i__119428 + (1));
seq__119425 = G__119458;
chunk__119426 = G__119459;
count__119427 = G__119460;
i__119428 = G__119461;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__119425);
if(temp__4657__auto__){
var seq__119425__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119425__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__119425__$1);
var G__119462 = cljs.core.chunk_rest.call(null,seq__119425__$1);
var G__119463 = c__25936__auto__;
var G__119464 = cljs.core.count.call(null,c__25936__auto__);
var G__119465 = (0);
seq__119425 = G__119462;
chunk__119426 = G__119463;
count__119427 = G__119464;
i__119428 = G__119465;
continue;
} else {
var prov = cljs.core.first.call(null,seq__119425__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__119433_119466 = cljs.core.seq.call(null,requires);
var chunk__119434_119467 = null;
var count__119435_119468 = (0);
var i__119436_119469 = (0);
while(true){
if((i__119436_119469 < count__119435_119468)){
var req_119470 = cljs.core._nth.call(null,chunk__119434_119467,i__119436_119469);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_119470,prov);

var G__119471 = seq__119433_119466;
var G__119472 = chunk__119434_119467;
var G__119473 = count__119435_119468;
var G__119474 = (i__119436_119469 + (1));
seq__119433_119466 = G__119471;
chunk__119434_119467 = G__119472;
count__119435_119468 = G__119473;
i__119436_119469 = G__119474;
continue;
} else {
var temp__4657__auto___119475__$1 = cljs.core.seq.call(null,seq__119433_119466);
if(temp__4657__auto___119475__$1){
var seq__119433_119476__$1 = temp__4657__auto___119475__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119433_119476__$1)){
var c__25936__auto___119477 = cljs.core.chunk_first.call(null,seq__119433_119476__$1);
var G__119478 = cljs.core.chunk_rest.call(null,seq__119433_119476__$1);
var G__119479 = c__25936__auto___119477;
var G__119480 = cljs.core.count.call(null,c__25936__auto___119477);
var G__119481 = (0);
seq__119433_119466 = G__119478;
chunk__119434_119467 = G__119479;
count__119435_119468 = G__119480;
i__119436_119469 = G__119481;
continue;
} else {
var req_119482 = cljs.core.first.call(null,seq__119433_119476__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_119482,prov);

var G__119483 = cljs.core.next.call(null,seq__119433_119476__$1);
var G__119484 = null;
var G__119485 = (0);
var G__119486 = (0);
seq__119433_119466 = G__119483;
chunk__119434_119467 = G__119484;
count__119435_119468 = G__119485;
i__119436_119469 = G__119486;
continue;
}
} else {
}
}
break;
}

var G__119487 = cljs.core.next.call(null,seq__119425__$1);
var G__119488 = null;
var G__119489 = (0);
var G__119490 = (0);
seq__119425 = G__119487;
chunk__119426 = G__119488;
count__119427 = G__119489;
i__119428 = G__119490;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__119495_119499 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__119496_119500 = null;
var count__119497_119501 = (0);
var i__119498_119502 = (0);
while(true){
if((i__119498_119502 < count__119497_119501)){
var ns_119503 = cljs.core._nth.call(null,chunk__119496_119500,i__119498_119502);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_119503);

var G__119504 = seq__119495_119499;
var G__119505 = chunk__119496_119500;
var G__119506 = count__119497_119501;
var G__119507 = (i__119498_119502 + (1));
seq__119495_119499 = G__119504;
chunk__119496_119500 = G__119505;
count__119497_119501 = G__119506;
i__119498_119502 = G__119507;
continue;
} else {
var temp__4657__auto___119508 = cljs.core.seq.call(null,seq__119495_119499);
if(temp__4657__auto___119508){
var seq__119495_119509__$1 = temp__4657__auto___119508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119495_119509__$1)){
var c__25936__auto___119510 = cljs.core.chunk_first.call(null,seq__119495_119509__$1);
var G__119511 = cljs.core.chunk_rest.call(null,seq__119495_119509__$1);
var G__119512 = c__25936__auto___119510;
var G__119513 = cljs.core.count.call(null,c__25936__auto___119510);
var G__119514 = (0);
seq__119495_119499 = G__119511;
chunk__119496_119500 = G__119512;
count__119497_119501 = G__119513;
i__119498_119502 = G__119514;
continue;
} else {
var ns_119515 = cljs.core.first.call(null,seq__119495_119509__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_119515);

var G__119516 = cljs.core.next.call(null,seq__119495_119509__$1);
var G__119517 = null;
var G__119518 = (0);
var G__119519 = (0);
seq__119495_119499 = G__119516;
chunk__119496_119500 = G__119517;
count__119497_119501 = G__119518;
i__119498_119502 = G__119519;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25125__auto__ = goog.require__;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__119520__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__119520 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__119521__i = 0, G__119521__a = new Array(arguments.length -  0);
while (G__119521__i < G__119521__a.length) {G__119521__a[G__119521__i] = arguments[G__119521__i + 0]; ++G__119521__i;}
  args = new cljs.core.IndexedSeq(G__119521__a,0);
} 
return G__119520__delegate.call(this,args);};
G__119520.cljs$lang$maxFixedArity = 0;
G__119520.cljs$lang$applyTo = (function (arglist__119522){
var args = cljs.core.seq(arglist__119522);
return G__119520__delegate(args);
});
G__119520.cljs$core$IFn$_invoke$arity$variadic = G__119520__delegate;
return G__119520;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__119523 = cljs.core._EQ_;
var expr__119524 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__119523.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__119524))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__119523,expr__119524){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__119523,expr__119524))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__119523,expr__119524){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e119526){if((e119526 instanceof Error)){
var e = e119526;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e119526;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__119523,expr__119524))
} else {
if(cljs.core.truth_(pred__119523.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__119524))){
return ((function (pred__119523,expr__119524){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__119523,expr__119524){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__119523,expr__119524))
);

return deferred.addErrback(((function (deferred,pred__119523,expr__119524){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__119523,expr__119524))
);
});
;})(pred__119523,expr__119524))
} else {
if(cljs.core.truth_(pred__119523.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__119524))){
return ((function (pred__119523,expr__119524){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e119527){if((e119527 instanceof Error)){
var e = e119527;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e119527;

}
}})());
});
;})(pred__119523,expr__119524))
} else {
return ((function (pred__119523,expr__119524){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__119523,expr__119524))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__119528,callback){
var map__119531 = p__119528;
var map__119531__$1 = ((((!((map__119531 == null)))?((((map__119531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119531):map__119531);
var file_msg = map__119531__$1;
var request_url = cljs.core.get.call(null,map__119531__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__119531,map__119531__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__119531,map__119531__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto__){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto__){
return (function (state_119555){
var state_val_119556 = (state_119555[(1)]);
if((state_val_119556 === (7))){
var inst_119551 = (state_119555[(2)]);
var state_119555__$1 = state_119555;
var statearr_119557_119577 = state_119555__$1;
(statearr_119557_119577[(2)] = inst_119551);

(statearr_119557_119577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119556 === (1))){
var state_119555__$1 = state_119555;
var statearr_119558_119578 = state_119555__$1;
(statearr_119558_119578[(2)] = null);

(statearr_119558_119578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119556 === (4))){
var inst_119535 = (state_119555[(7)]);
var inst_119535__$1 = (state_119555[(2)]);
var state_119555__$1 = (function (){var statearr_119559 = state_119555;
(statearr_119559[(7)] = inst_119535__$1);

return statearr_119559;
})();
if(cljs.core.truth_(inst_119535__$1)){
var statearr_119560_119579 = state_119555__$1;
(statearr_119560_119579[(1)] = (5));

} else {
var statearr_119561_119580 = state_119555__$1;
(statearr_119561_119580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119556 === (6))){
var state_119555__$1 = state_119555;
var statearr_119562_119581 = state_119555__$1;
(statearr_119562_119581[(2)] = null);

(statearr_119562_119581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119556 === (3))){
var inst_119553 = (state_119555[(2)]);
var state_119555__$1 = state_119555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_119555__$1,inst_119553);
} else {
if((state_val_119556 === (2))){
var state_119555__$1 = state_119555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_119555__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_119556 === (11))){
var inst_119547 = (state_119555[(2)]);
var state_119555__$1 = (function (){var statearr_119563 = state_119555;
(statearr_119563[(8)] = inst_119547);

return statearr_119563;
})();
var statearr_119564_119582 = state_119555__$1;
(statearr_119564_119582[(2)] = null);

(statearr_119564_119582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119556 === (9))){
var inst_119539 = (state_119555[(9)]);
var inst_119541 = (state_119555[(10)]);
var inst_119543 = inst_119541.call(null,inst_119539);
var state_119555__$1 = state_119555;
var statearr_119565_119583 = state_119555__$1;
(statearr_119565_119583[(2)] = inst_119543);

(statearr_119565_119583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119556 === (5))){
var inst_119535 = (state_119555[(7)]);
var inst_119537 = figwheel.client.file_reloading.blocking_load.call(null,inst_119535);
var state_119555__$1 = state_119555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_119555__$1,(8),inst_119537);
} else {
if((state_val_119556 === (10))){
var inst_119539 = (state_119555[(9)]);
var inst_119545 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_119539);
var state_119555__$1 = state_119555;
var statearr_119566_119584 = state_119555__$1;
(statearr_119566_119584[(2)] = inst_119545);

(statearr_119566_119584[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119556 === (8))){
var inst_119535 = (state_119555[(7)]);
var inst_119541 = (state_119555[(10)]);
var inst_119539 = (state_119555[(2)]);
var inst_119540 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_119541__$1 = cljs.core.get.call(null,inst_119540,inst_119535);
var state_119555__$1 = (function (){var statearr_119567 = state_119555;
(statearr_119567[(9)] = inst_119539);

(statearr_119567[(10)] = inst_119541__$1);

return statearr_119567;
})();
if(cljs.core.truth_(inst_119541__$1)){
var statearr_119568_119585 = state_119555__$1;
(statearr_119568_119585[(1)] = (9));

} else {
var statearr_119569_119586 = state_119555__$1;
(statearr_119569_119586[(1)] = (10));

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
});})(c__28398__auto__))
;
return ((function (switch__28286__auto__,c__28398__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28287__auto__ = null;
var figwheel$client$file_reloading$state_machine__28287__auto____0 = (function (){
var statearr_119573 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_119573[(0)] = figwheel$client$file_reloading$state_machine__28287__auto__);

(statearr_119573[(1)] = (1));

return statearr_119573;
});
var figwheel$client$file_reloading$state_machine__28287__auto____1 = (function (state_119555){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_119555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e119574){if((e119574 instanceof Object)){
var ex__28290__auto__ = e119574;
var statearr_119575_119587 = state_119555;
(statearr_119575_119587[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_119555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e119574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__119588 = state_119555;
state_119555 = G__119588;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28287__auto__ = function(state_119555){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28287__auto____1.call(this,state_119555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28287__auto____0;
figwheel$client$file_reloading$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28287__auto____1;
return figwheel$client$file_reloading$state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__))
})();
var state__28400__auto__ = (function (){var statearr_119576 = f__28399__auto__.call(null);
(statearr_119576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_119576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto__))
);

return c__28398__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__119589,callback){
var map__119592 = p__119589;
var map__119592__$1 = ((((!((map__119592 == null)))?((((map__119592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119592):map__119592);
var file_msg = map__119592__$1;
var namespace = cljs.core.get.call(null,map__119592__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__119592,map__119592__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__119592,map__119592__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__119594){
var map__119597 = p__119594;
var map__119597__$1 = ((((!((map__119597 == null)))?((((map__119597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119597):map__119597);
var file_msg = map__119597__$1;
var namespace = cljs.core.get.call(null,map__119597__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__119599){
var map__119602 = p__119599;
var map__119602__$1 = ((((!((map__119602 == null)))?((((map__119602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119602):map__119602);
var file_msg = map__119602__$1;
var namespace = cljs.core.get.call(null,map__119602__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25113__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25113__auto__){
var or__25125__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
var or__25125__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25125__auto____$1)){
return or__25125__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25113__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__119604,callback){
var map__119607 = p__119604;
var map__119607__$1 = ((((!((map__119607 == null)))?((((map__119607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119607):map__119607);
var file_msg = map__119607__$1;
var request_url = cljs.core.get.call(null,map__119607__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__119607__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28398__auto___119711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto___119711,out){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto___119711,out){
return (function (state_119693){
var state_val_119694 = (state_119693[(1)]);
if((state_val_119694 === (1))){
var inst_119667 = cljs.core.seq.call(null,files);
var inst_119668 = cljs.core.first.call(null,inst_119667);
var inst_119669 = cljs.core.next.call(null,inst_119667);
var inst_119670 = files;
var state_119693__$1 = (function (){var statearr_119695 = state_119693;
(statearr_119695[(7)] = inst_119669);

(statearr_119695[(8)] = inst_119670);

(statearr_119695[(9)] = inst_119668);

return statearr_119695;
})();
var statearr_119696_119712 = state_119693__$1;
(statearr_119696_119712[(2)] = null);

(statearr_119696_119712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119694 === (2))){
var inst_119670 = (state_119693[(8)]);
var inst_119676 = (state_119693[(10)]);
var inst_119675 = cljs.core.seq.call(null,inst_119670);
var inst_119676__$1 = cljs.core.first.call(null,inst_119675);
var inst_119677 = cljs.core.next.call(null,inst_119675);
var inst_119678 = (inst_119676__$1 == null);
var inst_119679 = cljs.core.not.call(null,inst_119678);
var state_119693__$1 = (function (){var statearr_119697 = state_119693;
(statearr_119697[(10)] = inst_119676__$1);

(statearr_119697[(11)] = inst_119677);

return statearr_119697;
})();
if(inst_119679){
var statearr_119698_119713 = state_119693__$1;
(statearr_119698_119713[(1)] = (4));

} else {
var statearr_119699_119714 = state_119693__$1;
(statearr_119699_119714[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119694 === (3))){
var inst_119691 = (state_119693[(2)]);
var state_119693__$1 = state_119693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_119693__$1,inst_119691);
} else {
if((state_val_119694 === (4))){
var inst_119676 = (state_119693[(10)]);
var inst_119681 = figwheel.client.file_reloading.reload_js_file.call(null,inst_119676);
var state_119693__$1 = state_119693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_119693__$1,(7),inst_119681);
} else {
if((state_val_119694 === (5))){
var inst_119687 = cljs.core.async.close_BANG_.call(null,out);
var state_119693__$1 = state_119693;
var statearr_119700_119715 = state_119693__$1;
(statearr_119700_119715[(2)] = inst_119687);

(statearr_119700_119715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119694 === (6))){
var inst_119689 = (state_119693[(2)]);
var state_119693__$1 = state_119693;
var statearr_119701_119716 = state_119693__$1;
(statearr_119701_119716[(2)] = inst_119689);

(statearr_119701_119716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119694 === (7))){
var inst_119677 = (state_119693[(11)]);
var inst_119683 = (state_119693[(2)]);
var inst_119684 = cljs.core.async.put_BANG_.call(null,out,inst_119683);
var inst_119670 = inst_119677;
var state_119693__$1 = (function (){var statearr_119702 = state_119693;
(statearr_119702[(8)] = inst_119670);

(statearr_119702[(12)] = inst_119684);

return statearr_119702;
})();
var statearr_119703_119717 = state_119693__$1;
(statearr_119703_119717[(2)] = null);

(statearr_119703_119717[(1)] = (2));


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
});})(c__28398__auto___119711,out))
;
return ((function (switch__28286__auto__,c__28398__auto___119711,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____0 = (function (){
var statearr_119707 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_119707[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__);

(statearr_119707[(1)] = (1));

return statearr_119707;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____1 = (function (state_119693){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_119693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e119708){if((e119708 instanceof Object)){
var ex__28290__auto__ = e119708;
var statearr_119709_119718 = state_119693;
(statearr_119709_119718[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_119693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e119708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__119719 = state_119693;
state_119693 = G__119719;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__ = function(state_119693){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____1.call(this,state_119693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto___119711,out))
})();
var state__28400__auto__ = (function (){var statearr_119710 = f__28399__auto__.call(null);
(statearr_119710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto___119711);

return statearr_119710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto___119711,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__119720,opts){
var map__119724 = p__119720;
var map__119724__$1 = ((((!((map__119724 == null)))?((((map__119724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119724):map__119724);
var eval_body__$1 = cljs.core.get.call(null,map__119724__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__119724__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25113__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25113__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25113__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e119726){var e = e119726;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__119727_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__119727_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__119736){
var vec__119737 = p__119736;
var k = cljs.core.nth.call(null,vec__119737,(0),null);
var v = cljs.core.nth.call(null,vec__119737,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__119740){
var vec__119741 = p__119740;
var k = cljs.core.nth.call(null,vec__119741,(0),null);
var v = cljs.core.nth.call(null,vec__119741,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__119747,p__119748){
var map__119995 = p__119747;
var map__119995__$1 = ((((!((map__119995 == null)))?((((map__119995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119995):map__119995);
var opts = map__119995__$1;
var before_jsload = cljs.core.get.call(null,map__119995__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__119995__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__119995__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__119996 = p__119748;
var map__119996__$1 = ((((!((map__119996 == null)))?((((map__119996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119996):map__119996);
var msg = map__119996__$1;
var files = cljs.core.get.call(null,map__119996__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__119996__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__119996__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_120149){
var state_val_120150 = (state_120149[(1)]);
if((state_val_120150 === (7))){
var inst_120012 = (state_120149[(7)]);
var inst_120013 = (state_120149[(8)]);
var inst_120011 = (state_120149[(9)]);
var inst_120010 = (state_120149[(10)]);
var inst_120018 = cljs.core._nth.call(null,inst_120011,inst_120013);
var inst_120019 = figwheel.client.file_reloading.eval_body.call(null,inst_120018,opts);
var inst_120020 = (inst_120013 + (1));
var tmp120151 = inst_120012;
var tmp120152 = inst_120011;
var tmp120153 = inst_120010;
var inst_120010__$1 = tmp120153;
var inst_120011__$1 = tmp120152;
var inst_120012__$1 = tmp120151;
var inst_120013__$1 = inst_120020;
var state_120149__$1 = (function (){var statearr_120154 = state_120149;
(statearr_120154[(7)] = inst_120012__$1);

(statearr_120154[(8)] = inst_120013__$1);

(statearr_120154[(9)] = inst_120011__$1);

(statearr_120154[(10)] = inst_120010__$1);

(statearr_120154[(11)] = inst_120019);

return statearr_120154;
})();
var statearr_120155_120241 = state_120149__$1;
(statearr_120155_120241[(2)] = null);

(statearr_120155_120241[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (20))){
var inst_120053 = (state_120149[(12)]);
var inst_120061 = figwheel.client.file_reloading.sort_files.call(null,inst_120053);
var state_120149__$1 = state_120149;
var statearr_120156_120242 = state_120149__$1;
(statearr_120156_120242[(2)] = inst_120061);

(statearr_120156_120242[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (27))){
var state_120149__$1 = state_120149;
var statearr_120157_120243 = state_120149__$1;
(statearr_120157_120243[(2)] = null);

(statearr_120157_120243[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (1))){
var inst_120002 = (state_120149[(13)]);
var inst_119999 = before_jsload.call(null,files);
var inst_120000 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_120001 = (function (){return ((function (inst_120002,inst_119999,inst_120000,state_val_120150,c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__119744_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__119744_SHARP_);
});
;})(inst_120002,inst_119999,inst_120000,state_val_120150,c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_120002__$1 = cljs.core.filter.call(null,inst_120001,files);
var inst_120003 = cljs.core.not_empty.call(null,inst_120002__$1);
var state_120149__$1 = (function (){var statearr_120158 = state_120149;
(statearr_120158[(14)] = inst_120000);

(statearr_120158[(15)] = inst_119999);

(statearr_120158[(13)] = inst_120002__$1);

return statearr_120158;
})();
if(cljs.core.truth_(inst_120003)){
var statearr_120159_120244 = state_120149__$1;
(statearr_120159_120244[(1)] = (2));

} else {
var statearr_120160_120245 = state_120149__$1;
(statearr_120160_120245[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (24))){
var state_120149__$1 = state_120149;
var statearr_120161_120246 = state_120149__$1;
(statearr_120161_120246[(2)] = null);

(statearr_120161_120246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (39))){
var inst_120103 = (state_120149[(16)]);
var state_120149__$1 = state_120149;
var statearr_120162_120247 = state_120149__$1;
(statearr_120162_120247[(2)] = inst_120103);

(statearr_120162_120247[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (46))){
var inst_120144 = (state_120149[(2)]);
var state_120149__$1 = state_120149;
var statearr_120163_120248 = state_120149__$1;
(statearr_120163_120248[(2)] = inst_120144);

(statearr_120163_120248[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (4))){
var inst_120047 = (state_120149[(2)]);
var inst_120048 = cljs.core.List.EMPTY;
var inst_120049 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_120048);
var inst_120050 = (function (){return ((function (inst_120047,inst_120048,inst_120049,state_val_120150,c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__119745_SHARP_){
var and__25113__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__119745_SHARP_);
if(cljs.core.truth_(and__25113__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__119745_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__119745_SHARP_)));
} else {
return and__25113__auto__;
}
});
;})(inst_120047,inst_120048,inst_120049,state_val_120150,c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_120051 = cljs.core.filter.call(null,inst_120050,files);
var inst_120052 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_120053 = cljs.core.concat.call(null,inst_120051,inst_120052);
var state_120149__$1 = (function (){var statearr_120164 = state_120149;
(statearr_120164[(17)] = inst_120049);

(statearr_120164[(12)] = inst_120053);

(statearr_120164[(18)] = inst_120047);

return statearr_120164;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_120165_120249 = state_120149__$1;
(statearr_120165_120249[(1)] = (16));

} else {
var statearr_120166_120250 = state_120149__$1;
(statearr_120166_120250[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (15))){
var inst_120037 = (state_120149[(2)]);
var state_120149__$1 = state_120149;
var statearr_120167_120251 = state_120149__$1;
(statearr_120167_120251[(2)] = inst_120037);

(statearr_120167_120251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (21))){
var inst_120063 = (state_120149[(19)]);
var inst_120063__$1 = (state_120149[(2)]);
var inst_120064 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_120063__$1);
var state_120149__$1 = (function (){var statearr_120168 = state_120149;
(statearr_120168[(19)] = inst_120063__$1);

return statearr_120168;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_120149__$1,(22),inst_120064);
} else {
if((state_val_120150 === (31))){
var inst_120147 = (state_120149[(2)]);
var state_120149__$1 = state_120149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_120149__$1,inst_120147);
} else {
if((state_val_120150 === (32))){
var inst_120103 = (state_120149[(16)]);
var inst_120108 = inst_120103.cljs$lang$protocol_mask$partition0$;
var inst_120109 = (inst_120108 & (64));
var inst_120110 = inst_120103.cljs$core$ISeq$;
var inst_120111 = (inst_120109) || (inst_120110);
var state_120149__$1 = state_120149;
if(cljs.core.truth_(inst_120111)){
var statearr_120169_120252 = state_120149__$1;
(statearr_120169_120252[(1)] = (35));

} else {
var statearr_120170_120253 = state_120149__$1;
(statearr_120170_120253[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (40))){
var inst_120124 = (state_120149[(20)]);
var inst_120123 = (state_120149[(2)]);
var inst_120124__$1 = cljs.core.get.call(null,inst_120123,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_120125 = cljs.core.get.call(null,inst_120123,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_120126 = cljs.core.not_empty.call(null,inst_120124__$1);
var state_120149__$1 = (function (){var statearr_120171 = state_120149;
(statearr_120171[(20)] = inst_120124__$1);

(statearr_120171[(21)] = inst_120125);

return statearr_120171;
})();
if(cljs.core.truth_(inst_120126)){
var statearr_120172_120254 = state_120149__$1;
(statearr_120172_120254[(1)] = (41));

} else {
var statearr_120173_120255 = state_120149__$1;
(statearr_120173_120255[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (33))){
var state_120149__$1 = state_120149;
var statearr_120174_120256 = state_120149__$1;
(statearr_120174_120256[(2)] = false);

(statearr_120174_120256[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (13))){
var inst_120023 = (state_120149[(22)]);
var inst_120027 = cljs.core.chunk_first.call(null,inst_120023);
var inst_120028 = cljs.core.chunk_rest.call(null,inst_120023);
var inst_120029 = cljs.core.count.call(null,inst_120027);
var inst_120010 = inst_120028;
var inst_120011 = inst_120027;
var inst_120012 = inst_120029;
var inst_120013 = (0);
var state_120149__$1 = (function (){var statearr_120175 = state_120149;
(statearr_120175[(7)] = inst_120012);

(statearr_120175[(8)] = inst_120013);

(statearr_120175[(9)] = inst_120011);

(statearr_120175[(10)] = inst_120010);

return statearr_120175;
})();
var statearr_120176_120257 = state_120149__$1;
(statearr_120176_120257[(2)] = null);

(statearr_120176_120257[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (22))){
var inst_120066 = (state_120149[(23)]);
var inst_120071 = (state_120149[(24)]);
var inst_120063 = (state_120149[(19)]);
var inst_120067 = (state_120149[(25)]);
var inst_120066__$1 = (state_120149[(2)]);
var inst_120067__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_120066__$1);
var inst_120068 = (function (){var all_files = inst_120063;
var res_SINGLEQUOTE_ = inst_120066__$1;
var res = inst_120067__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_120066,inst_120071,inst_120063,inst_120067,inst_120066__$1,inst_120067__$1,state_val_120150,c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__119746_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__119746_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_120066,inst_120071,inst_120063,inst_120067,inst_120066__$1,inst_120067__$1,state_val_120150,c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_120069 = cljs.core.filter.call(null,inst_120068,inst_120066__$1);
var inst_120070 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_120071__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_120070);
var inst_120072 = cljs.core.not_empty.call(null,inst_120071__$1);
var state_120149__$1 = (function (){var statearr_120177 = state_120149;
(statearr_120177[(23)] = inst_120066__$1);

(statearr_120177[(26)] = inst_120069);

(statearr_120177[(24)] = inst_120071__$1);

(statearr_120177[(25)] = inst_120067__$1);

return statearr_120177;
})();
if(cljs.core.truth_(inst_120072)){
var statearr_120178_120258 = state_120149__$1;
(statearr_120178_120258[(1)] = (23));

} else {
var statearr_120179_120259 = state_120149__$1;
(statearr_120179_120259[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (36))){
var state_120149__$1 = state_120149;
var statearr_120180_120260 = state_120149__$1;
(statearr_120180_120260[(2)] = false);

(statearr_120180_120260[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (41))){
var inst_120124 = (state_120149[(20)]);
var inst_120128 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_120129 = cljs.core.map.call(null,inst_120128,inst_120124);
var inst_120130 = cljs.core.pr_str.call(null,inst_120129);
var inst_120131 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_120130)].join('');
var inst_120132 = figwheel.client.utils.log.call(null,inst_120131);
var state_120149__$1 = state_120149;
var statearr_120181_120261 = state_120149__$1;
(statearr_120181_120261[(2)] = inst_120132);

(statearr_120181_120261[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (43))){
var inst_120125 = (state_120149[(21)]);
var inst_120135 = (state_120149[(2)]);
var inst_120136 = cljs.core.not_empty.call(null,inst_120125);
var state_120149__$1 = (function (){var statearr_120182 = state_120149;
(statearr_120182[(27)] = inst_120135);

return statearr_120182;
})();
if(cljs.core.truth_(inst_120136)){
var statearr_120183_120262 = state_120149__$1;
(statearr_120183_120262[(1)] = (44));

} else {
var statearr_120184_120263 = state_120149__$1;
(statearr_120184_120263[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (29))){
var inst_120066 = (state_120149[(23)]);
var inst_120069 = (state_120149[(26)]);
var inst_120103 = (state_120149[(16)]);
var inst_120071 = (state_120149[(24)]);
var inst_120063 = (state_120149[(19)]);
var inst_120067 = (state_120149[(25)]);
var inst_120099 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_120102 = (function (){var all_files = inst_120063;
var res_SINGLEQUOTE_ = inst_120066;
var res = inst_120067;
var files_not_loaded = inst_120069;
var dependencies_that_loaded = inst_120071;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_120066,inst_120069,inst_120103,inst_120071,inst_120063,inst_120067,inst_120099,state_val_120150,c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__120101){
var map__120185 = p__120101;
var map__120185__$1 = ((((!((map__120185 == null)))?((((map__120185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120185):map__120185);
var namespace = cljs.core.get.call(null,map__120185__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_120066,inst_120069,inst_120103,inst_120071,inst_120063,inst_120067,inst_120099,state_val_120150,c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_120103__$1 = cljs.core.group_by.call(null,inst_120102,inst_120069);
var inst_120105 = (inst_120103__$1 == null);
var inst_120106 = cljs.core.not.call(null,inst_120105);
var state_120149__$1 = (function (){var statearr_120187 = state_120149;
(statearr_120187[(28)] = inst_120099);

(statearr_120187[(16)] = inst_120103__$1);

return statearr_120187;
})();
if(inst_120106){
var statearr_120188_120264 = state_120149__$1;
(statearr_120188_120264[(1)] = (32));

} else {
var statearr_120189_120265 = state_120149__$1;
(statearr_120189_120265[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (44))){
var inst_120125 = (state_120149[(21)]);
var inst_120138 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_120125);
var inst_120139 = cljs.core.pr_str.call(null,inst_120138);
var inst_120140 = [cljs.core.str("not required: "),cljs.core.str(inst_120139)].join('');
var inst_120141 = figwheel.client.utils.log.call(null,inst_120140);
var state_120149__$1 = state_120149;
var statearr_120190_120266 = state_120149__$1;
(statearr_120190_120266[(2)] = inst_120141);

(statearr_120190_120266[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (6))){
var inst_120044 = (state_120149[(2)]);
var state_120149__$1 = state_120149;
var statearr_120191_120267 = state_120149__$1;
(statearr_120191_120267[(2)] = inst_120044);

(statearr_120191_120267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (28))){
var inst_120069 = (state_120149[(26)]);
var inst_120096 = (state_120149[(2)]);
var inst_120097 = cljs.core.not_empty.call(null,inst_120069);
var state_120149__$1 = (function (){var statearr_120192 = state_120149;
(statearr_120192[(29)] = inst_120096);

return statearr_120192;
})();
if(cljs.core.truth_(inst_120097)){
var statearr_120193_120268 = state_120149__$1;
(statearr_120193_120268[(1)] = (29));

} else {
var statearr_120194_120269 = state_120149__$1;
(statearr_120194_120269[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (25))){
var inst_120067 = (state_120149[(25)]);
var inst_120083 = (state_120149[(2)]);
var inst_120084 = cljs.core.not_empty.call(null,inst_120067);
var state_120149__$1 = (function (){var statearr_120195 = state_120149;
(statearr_120195[(30)] = inst_120083);

return statearr_120195;
})();
if(cljs.core.truth_(inst_120084)){
var statearr_120196_120270 = state_120149__$1;
(statearr_120196_120270[(1)] = (26));

} else {
var statearr_120197_120271 = state_120149__$1;
(statearr_120197_120271[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (34))){
var inst_120118 = (state_120149[(2)]);
var state_120149__$1 = state_120149;
if(cljs.core.truth_(inst_120118)){
var statearr_120198_120272 = state_120149__$1;
(statearr_120198_120272[(1)] = (38));

} else {
var statearr_120199_120273 = state_120149__$1;
(statearr_120199_120273[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (17))){
var state_120149__$1 = state_120149;
var statearr_120200_120274 = state_120149__$1;
(statearr_120200_120274[(2)] = recompile_dependents);

(statearr_120200_120274[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (3))){
var state_120149__$1 = state_120149;
var statearr_120201_120275 = state_120149__$1;
(statearr_120201_120275[(2)] = null);

(statearr_120201_120275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (12))){
var inst_120040 = (state_120149[(2)]);
var state_120149__$1 = state_120149;
var statearr_120202_120276 = state_120149__$1;
(statearr_120202_120276[(2)] = inst_120040);

(statearr_120202_120276[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (2))){
var inst_120002 = (state_120149[(13)]);
var inst_120009 = cljs.core.seq.call(null,inst_120002);
var inst_120010 = inst_120009;
var inst_120011 = null;
var inst_120012 = (0);
var inst_120013 = (0);
var state_120149__$1 = (function (){var statearr_120203 = state_120149;
(statearr_120203[(7)] = inst_120012);

(statearr_120203[(8)] = inst_120013);

(statearr_120203[(9)] = inst_120011);

(statearr_120203[(10)] = inst_120010);

return statearr_120203;
})();
var statearr_120204_120277 = state_120149__$1;
(statearr_120204_120277[(2)] = null);

(statearr_120204_120277[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (23))){
var inst_120066 = (state_120149[(23)]);
var inst_120069 = (state_120149[(26)]);
var inst_120071 = (state_120149[(24)]);
var inst_120063 = (state_120149[(19)]);
var inst_120067 = (state_120149[(25)]);
var inst_120074 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_120076 = (function (){var all_files = inst_120063;
var res_SINGLEQUOTE_ = inst_120066;
var res = inst_120067;
var files_not_loaded = inst_120069;
var dependencies_that_loaded = inst_120071;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_120066,inst_120069,inst_120071,inst_120063,inst_120067,inst_120074,state_val_120150,c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__120075){
var map__120205 = p__120075;
var map__120205__$1 = ((((!((map__120205 == null)))?((((map__120205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120205):map__120205);
var request_url = cljs.core.get.call(null,map__120205__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_120066,inst_120069,inst_120071,inst_120063,inst_120067,inst_120074,state_val_120150,c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_120077 = cljs.core.reverse.call(null,inst_120071);
var inst_120078 = cljs.core.map.call(null,inst_120076,inst_120077);
var inst_120079 = cljs.core.pr_str.call(null,inst_120078);
var inst_120080 = figwheel.client.utils.log.call(null,inst_120079);
var state_120149__$1 = (function (){var statearr_120207 = state_120149;
(statearr_120207[(31)] = inst_120074);

return statearr_120207;
})();
var statearr_120208_120278 = state_120149__$1;
(statearr_120208_120278[(2)] = inst_120080);

(statearr_120208_120278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (35))){
var state_120149__$1 = state_120149;
var statearr_120209_120279 = state_120149__$1;
(statearr_120209_120279[(2)] = true);

(statearr_120209_120279[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (19))){
var inst_120053 = (state_120149[(12)]);
var inst_120059 = figwheel.client.file_reloading.expand_files.call(null,inst_120053);
var state_120149__$1 = state_120149;
var statearr_120210_120280 = state_120149__$1;
(statearr_120210_120280[(2)] = inst_120059);

(statearr_120210_120280[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (11))){
var state_120149__$1 = state_120149;
var statearr_120211_120281 = state_120149__$1;
(statearr_120211_120281[(2)] = null);

(statearr_120211_120281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (9))){
var inst_120042 = (state_120149[(2)]);
var state_120149__$1 = state_120149;
var statearr_120212_120282 = state_120149__$1;
(statearr_120212_120282[(2)] = inst_120042);

(statearr_120212_120282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (5))){
var inst_120012 = (state_120149[(7)]);
var inst_120013 = (state_120149[(8)]);
var inst_120015 = (inst_120013 < inst_120012);
var inst_120016 = inst_120015;
var state_120149__$1 = state_120149;
if(cljs.core.truth_(inst_120016)){
var statearr_120213_120283 = state_120149__$1;
(statearr_120213_120283[(1)] = (7));

} else {
var statearr_120214_120284 = state_120149__$1;
(statearr_120214_120284[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (14))){
var inst_120023 = (state_120149[(22)]);
var inst_120032 = cljs.core.first.call(null,inst_120023);
var inst_120033 = figwheel.client.file_reloading.eval_body.call(null,inst_120032,opts);
var inst_120034 = cljs.core.next.call(null,inst_120023);
var inst_120010 = inst_120034;
var inst_120011 = null;
var inst_120012 = (0);
var inst_120013 = (0);
var state_120149__$1 = (function (){var statearr_120215 = state_120149;
(statearr_120215[(7)] = inst_120012);

(statearr_120215[(8)] = inst_120013);

(statearr_120215[(9)] = inst_120011);

(statearr_120215[(10)] = inst_120010);

(statearr_120215[(32)] = inst_120033);

return statearr_120215;
})();
var statearr_120216_120285 = state_120149__$1;
(statearr_120216_120285[(2)] = null);

(statearr_120216_120285[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (45))){
var state_120149__$1 = state_120149;
var statearr_120217_120286 = state_120149__$1;
(statearr_120217_120286[(2)] = null);

(statearr_120217_120286[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (26))){
var inst_120066 = (state_120149[(23)]);
var inst_120069 = (state_120149[(26)]);
var inst_120071 = (state_120149[(24)]);
var inst_120063 = (state_120149[(19)]);
var inst_120067 = (state_120149[(25)]);
var inst_120086 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_120088 = (function (){var all_files = inst_120063;
var res_SINGLEQUOTE_ = inst_120066;
var res = inst_120067;
var files_not_loaded = inst_120069;
var dependencies_that_loaded = inst_120071;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_120066,inst_120069,inst_120071,inst_120063,inst_120067,inst_120086,state_val_120150,c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__120087){
var map__120218 = p__120087;
var map__120218__$1 = ((((!((map__120218 == null)))?((((map__120218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120218):map__120218);
var namespace = cljs.core.get.call(null,map__120218__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__120218__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_120066,inst_120069,inst_120071,inst_120063,inst_120067,inst_120086,state_val_120150,c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_120089 = cljs.core.map.call(null,inst_120088,inst_120067);
var inst_120090 = cljs.core.pr_str.call(null,inst_120089);
var inst_120091 = figwheel.client.utils.log.call(null,inst_120090);
var inst_120092 = (function (){var all_files = inst_120063;
var res_SINGLEQUOTE_ = inst_120066;
var res = inst_120067;
var files_not_loaded = inst_120069;
var dependencies_that_loaded = inst_120071;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_120066,inst_120069,inst_120071,inst_120063,inst_120067,inst_120086,inst_120088,inst_120089,inst_120090,inst_120091,state_val_120150,c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_120066,inst_120069,inst_120071,inst_120063,inst_120067,inst_120086,inst_120088,inst_120089,inst_120090,inst_120091,state_val_120150,c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_120093 = setTimeout(inst_120092,(10));
var state_120149__$1 = (function (){var statearr_120220 = state_120149;
(statearr_120220[(33)] = inst_120091);

(statearr_120220[(34)] = inst_120086);

return statearr_120220;
})();
var statearr_120221_120287 = state_120149__$1;
(statearr_120221_120287[(2)] = inst_120093);

(statearr_120221_120287[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (16))){
var state_120149__$1 = state_120149;
var statearr_120222_120288 = state_120149__$1;
(statearr_120222_120288[(2)] = reload_dependents);

(statearr_120222_120288[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (38))){
var inst_120103 = (state_120149[(16)]);
var inst_120120 = cljs.core.apply.call(null,cljs.core.hash_map,inst_120103);
var state_120149__$1 = state_120149;
var statearr_120223_120289 = state_120149__$1;
(statearr_120223_120289[(2)] = inst_120120);

(statearr_120223_120289[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (30))){
var state_120149__$1 = state_120149;
var statearr_120224_120290 = state_120149__$1;
(statearr_120224_120290[(2)] = null);

(statearr_120224_120290[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (10))){
var inst_120023 = (state_120149[(22)]);
var inst_120025 = cljs.core.chunked_seq_QMARK_.call(null,inst_120023);
var state_120149__$1 = state_120149;
if(inst_120025){
var statearr_120225_120291 = state_120149__$1;
(statearr_120225_120291[(1)] = (13));

} else {
var statearr_120226_120292 = state_120149__$1;
(statearr_120226_120292[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (18))){
var inst_120057 = (state_120149[(2)]);
var state_120149__$1 = state_120149;
if(cljs.core.truth_(inst_120057)){
var statearr_120227_120293 = state_120149__$1;
(statearr_120227_120293[(1)] = (19));

} else {
var statearr_120228_120294 = state_120149__$1;
(statearr_120228_120294[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (42))){
var state_120149__$1 = state_120149;
var statearr_120229_120295 = state_120149__$1;
(statearr_120229_120295[(2)] = null);

(statearr_120229_120295[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (37))){
var inst_120115 = (state_120149[(2)]);
var state_120149__$1 = state_120149;
var statearr_120230_120296 = state_120149__$1;
(statearr_120230_120296[(2)] = inst_120115);

(statearr_120230_120296[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120150 === (8))){
var inst_120010 = (state_120149[(10)]);
var inst_120023 = (state_120149[(22)]);
var inst_120023__$1 = cljs.core.seq.call(null,inst_120010);
var state_120149__$1 = (function (){var statearr_120231 = state_120149;
(statearr_120231[(22)] = inst_120023__$1);

return statearr_120231;
})();
if(inst_120023__$1){
var statearr_120232_120297 = state_120149__$1;
(statearr_120232_120297[(1)] = (10));

} else {
var statearr_120233_120298 = state_120149__$1;
(statearr_120233_120298[(1)] = (11));

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
}
});})(c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28286__auto__,c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____0 = (function (){
var statearr_120237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_120237[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__);

(statearr_120237[(1)] = (1));

return statearr_120237;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____1 = (function (state_120149){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_120149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e120238){if((e120238 instanceof Object)){
var ex__28290__auto__ = e120238;
var statearr_120239_120299 = state_120149;
(statearr_120239_120299[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_120149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e120238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120300 = state_120149;
state_120149 = G__120300;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__ = function(state_120149){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____1.call(this,state_120149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28400__auto__ = (function (){var statearr_120240 = f__28399__auto__.call(null);
(statearr_120240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_120240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto__,map__119995,map__119995__$1,opts,before_jsload,on_jsload,reload_dependents,map__119996,map__119996__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28398__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__120303,link){
var map__120306 = p__120303;
var map__120306__$1 = ((((!((map__120306 == null)))?((((map__120306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120306):map__120306);
var file = cljs.core.get.call(null,map__120306__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__120306,map__120306__$1,file){
return (function (p1__120301_SHARP_,p2__120302_SHARP_){
if(cljs.core._EQ_.call(null,p1__120301_SHARP_,p2__120302_SHARP_)){
return p1__120301_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__120306,map__120306__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__120312){
var map__120313 = p__120312;
var map__120313__$1 = ((((!((map__120313 == null)))?((((map__120313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120313):map__120313);
var match_length = cljs.core.get.call(null,map__120313__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__120313__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__120308_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__120308_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__120315_SHARP_,p2__120316_SHARP_){
return cljs.core.assoc.call(null,p1__120315_SHARP_,cljs.core.get.call(null,p2__120316_SHARP_,key),p2__120316_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_120317 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_120317);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_120317);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__120318,p__120319){
var map__120324 = p__120318;
var map__120324__$1 = ((((!((map__120324 == null)))?((((map__120324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120324):map__120324);
var on_cssload = cljs.core.get.call(null,map__120324__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__120325 = p__120319;
var map__120325__$1 = ((((!((map__120325 == null)))?((((map__120325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120325):map__120325);
var files_msg = map__120325__$1;
var files = cljs.core.get.call(null,map__120325__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1488400174399