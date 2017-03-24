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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__81795_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__81795_SHARP_));
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
var seq__81800 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__81801 = null;
var count__81802 = (0);
var i__81803 = (0);
while(true){
if((i__81803 < count__81802)){
var n = cljs.core._nth.call(null,chunk__81801,i__81803);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__81804 = seq__81800;
var G__81805 = chunk__81801;
var G__81806 = count__81802;
var G__81807 = (i__81803 + (1));
seq__81800 = G__81804;
chunk__81801 = G__81805;
count__81802 = G__81806;
i__81803 = G__81807;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__81800);
if(temp__4657__auto__){
var seq__81800__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81800__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__81800__$1);
var G__81808 = cljs.core.chunk_rest.call(null,seq__81800__$1);
var G__81809 = c__25936__auto__;
var G__81810 = cljs.core.count.call(null,c__25936__auto__);
var G__81811 = (0);
seq__81800 = G__81808;
chunk__81801 = G__81809;
count__81802 = G__81810;
i__81803 = G__81811;
continue;
} else {
var n = cljs.core.first.call(null,seq__81800__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__81812 = cljs.core.next.call(null,seq__81800__$1);
var G__81813 = null;
var G__81814 = (0);
var G__81815 = (0);
seq__81800 = G__81812;
chunk__81801 = G__81813;
count__81802 = G__81814;
i__81803 = G__81815;
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

var seq__81866_81877 = cljs.core.seq.call(null,deps);
var chunk__81867_81878 = null;
var count__81868_81879 = (0);
var i__81869_81880 = (0);
while(true){
if((i__81869_81880 < count__81868_81879)){
var dep_81881 = cljs.core._nth.call(null,chunk__81867_81878,i__81869_81880);
topo_sort_helper_STAR_.call(null,dep_81881,(depth + (1)),state);

var G__81882 = seq__81866_81877;
var G__81883 = chunk__81867_81878;
var G__81884 = count__81868_81879;
var G__81885 = (i__81869_81880 + (1));
seq__81866_81877 = G__81882;
chunk__81867_81878 = G__81883;
count__81868_81879 = G__81884;
i__81869_81880 = G__81885;
continue;
} else {
var temp__4657__auto___81886 = cljs.core.seq.call(null,seq__81866_81877);
if(temp__4657__auto___81886){
var seq__81866_81887__$1 = temp__4657__auto___81886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81866_81887__$1)){
var c__25936__auto___81888 = cljs.core.chunk_first.call(null,seq__81866_81887__$1);
var G__81889 = cljs.core.chunk_rest.call(null,seq__81866_81887__$1);
var G__81890 = c__25936__auto___81888;
var G__81891 = cljs.core.count.call(null,c__25936__auto___81888);
var G__81892 = (0);
seq__81866_81877 = G__81889;
chunk__81867_81878 = G__81890;
count__81868_81879 = G__81891;
i__81869_81880 = G__81892;
continue;
} else {
var dep_81893 = cljs.core.first.call(null,seq__81866_81887__$1);
topo_sort_helper_STAR_.call(null,dep_81893,(depth + (1)),state);

var G__81894 = cljs.core.next.call(null,seq__81866_81887__$1);
var G__81895 = null;
var G__81896 = (0);
var G__81897 = (0);
seq__81866_81877 = G__81894;
chunk__81867_81878 = G__81895;
count__81868_81879 = G__81896;
i__81869_81880 = G__81897;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__81870){
var vec__81874 = p__81870;
var seq__81875 = cljs.core.seq.call(null,vec__81874);
var first__81876 = cljs.core.first.call(null,seq__81875);
var seq__81875__$1 = cljs.core.next.call(null,seq__81875);
var x = first__81876;
var xs = seq__81875__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__81874,seq__81875,first__81876,seq__81875__$1,x,xs,get_deps__$1){
return (function (p1__81816_SHARP_){
return clojure.set.difference.call(null,p1__81816_SHARP_,x);
});})(vec__81874,seq__81875,first__81876,seq__81875__$1,x,xs,get_deps__$1))
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
var seq__81910 = cljs.core.seq.call(null,provides);
var chunk__81911 = null;
var count__81912 = (0);
var i__81913 = (0);
while(true){
if((i__81913 < count__81912)){
var prov = cljs.core._nth.call(null,chunk__81911,i__81913);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__81914_81922 = cljs.core.seq.call(null,requires);
var chunk__81915_81923 = null;
var count__81916_81924 = (0);
var i__81917_81925 = (0);
while(true){
if((i__81917_81925 < count__81916_81924)){
var req_81926 = cljs.core._nth.call(null,chunk__81915_81923,i__81917_81925);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_81926,prov);

var G__81927 = seq__81914_81922;
var G__81928 = chunk__81915_81923;
var G__81929 = count__81916_81924;
var G__81930 = (i__81917_81925 + (1));
seq__81914_81922 = G__81927;
chunk__81915_81923 = G__81928;
count__81916_81924 = G__81929;
i__81917_81925 = G__81930;
continue;
} else {
var temp__4657__auto___81931 = cljs.core.seq.call(null,seq__81914_81922);
if(temp__4657__auto___81931){
var seq__81914_81932__$1 = temp__4657__auto___81931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81914_81932__$1)){
var c__25936__auto___81933 = cljs.core.chunk_first.call(null,seq__81914_81932__$1);
var G__81934 = cljs.core.chunk_rest.call(null,seq__81914_81932__$1);
var G__81935 = c__25936__auto___81933;
var G__81936 = cljs.core.count.call(null,c__25936__auto___81933);
var G__81937 = (0);
seq__81914_81922 = G__81934;
chunk__81915_81923 = G__81935;
count__81916_81924 = G__81936;
i__81917_81925 = G__81937;
continue;
} else {
var req_81938 = cljs.core.first.call(null,seq__81914_81932__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_81938,prov);

var G__81939 = cljs.core.next.call(null,seq__81914_81932__$1);
var G__81940 = null;
var G__81941 = (0);
var G__81942 = (0);
seq__81914_81922 = G__81939;
chunk__81915_81923 = G__81940;
count__81916_81924 = G__81941;
i__81917_81925 = G__81942;
continue;
}
} else {
}
}
break;
}

var G__81943 = seq__81910;
var G__81944 = chunk__81911;
var G__81945 = count__81912;
var G__81946 = (i__81913 + (1));
seq__81910 = G__81943;
chunk__81911 = G__81944;
count__81912 = G__81945;
i__81913 = G__81946;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__81910);
if(temp__4657__auto__){
var seq__81910__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81910__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__81910__$1);
var G__81947 = cljs.core.chunk_rest.call(null,seq__81910__$1);
var G__81948 = c__25936__auto__;
var G__81949 = cljs.core.count.call(null,c__25936__auto__);
var G__81950 = (0);
seq__81910 = G__81947;
chunk__81911 = G__81948;
count__81912 = G__81949;
i__81913 = G__81950;
continue;
} else {
var prov = cljs.core.first.call(null,seq__81910__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__81918_81951 = cljs.core.seq.call(null,requires);
var chunk__81919_81952 = null;
var count__81920_81953 = (0);
var i__81921_81954 = (0);
while(true){
if((i__81921_81954 < count__81920_81953)){
var req_81955 = cljs.core._nth.call(null,chunk__81919_81952,i__81921_81954);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_81955,prov);

var G__81956 = seq__81918_81951;
var G__81957 = chunk__81919_81952;
var G__81958 = count__81920_81953;
var G__81959 = (i__81921_81954 + (1));
seq__81918_81951 = G__81956;
chunk__81919_81952 = G__81957;
count__81920_81953 = G__81958;
i__81921_81954 = G__81959;
continue;
} else {
var temp__4657__auto___81960__$1 = cljs.core.seq.call(null,seq__81918_81951);
if(temp__4657__auto___81960__$1){
var seq__81918_81961__$1 = temp__4657__auto___81960__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81918_81961__$1)){
var c__25936__auto___81962 = cljs.core.chunk_first.call(null,seq__81918_81961__$1);
var G__81963 = cljs.core.chunk_rest.call(null,seq__81918_81961__$1);
var G__81964 = c__25936__auto___81962;
var G__81965 = cljs.core.count.call(null,c__25936__auto___81962);
var G__81966 = (0);
seq__81918_81951 = G__81963;
chunk__81919_81952 = G__81964;
count__81920_81953 = G__81965;
i__81921_81954 = G__81966;
continue;
} else {
var req_81967 = cljs.core.first.call(null,seq__81918_81961__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_81967,prov);

var G__81968 = cljs.core.next.call(null,seq__81918_81961__$1);
var G__81969 = null;
var G__81970 = (0);
var G__81971 = (0);
seq__81918_81951 = G__81968;
chunk__81919_81952 = G__81969;
count__81920_81953 = G__81970;
i__81921_81954 = G__81971;
continue;
}
} else {
}
}
break;
}

var G__81972 = cljs.core.next.call(null,seq__81910__$1);
var G__81973 = null;
var G__81974 = (0);
var G__81975 = (0);
seq__81910 = G__81972;
chunk__81911 = G__81973;
count__81912 = G__81974;
i__81913 = G__81975;
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
var seq__81980_81984 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__81981_81985 = null;
var count__81982_81986 = (0);
var i__81983_81987 = (0);
while(true){
if((i__81983_81987 < count__81982_81986)){
var ns_81988 = cljs.core._nth.call(null,chunk__81981_81985,i__81983_81987);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_81988);

var G__81989 = seq__81980_81984;
var G__81990 = chunk__81981_81985;
var G__81991 = count__81982_81986;
var G__81992 = (i__81983_81987 + (1));
seq__81980_81984 = G__81989;
chunk__81981_81985 = G__81990;
count__81982_81986 = G__81991;
i__81983_81987 = G__81992;
continue;
} else {
var temp__4657__auto___81993 = cljs.core.seq.call(null,seq__81980_81984);
if(temp__4657__auto___81993){
var seq__81980_81994__$1 = temp__4657__auto___81993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81980_81994__$1)){
var c__25936__auto___81995 = cljs.core.chunk_first.call(null,seq__81980_81994__$1);
var G__81996 = cljs.core.chunk_rest.call(null,seq__81980_81994__$1);
var G__81997 = c__25936__auto___81995;
var G__81998 = cljs.core.count.call(null,c__25936__auto___81995);
var G__81999 = (0);
seq__81980_81984 = G__81996;
chunk__81981_81985 = G__81997;
count__81982_81986 = G__81998;
i__81983_81987 = G__81999;
continue;
} else {
var ns_82000 = cljs.core.first.call(null,seq__81980_81994__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_82000);

var G__82001 = cljs.core.next.call(null,seq__81980_81994__$1);
var G__82002 = null;
var G__82003 = (0);
var G__82004 = (0);
seq__81980_81984 = G__82001;
chunk__81981_81985 = G__82002;
count__81982_81986 = G__82003;
i__81983_81987 = G__82004;
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
var G__82005__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__82005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82006__i = 0, G__82006__a = new Array(arguments.length -  0);
while (G__82006__i < G__82006__a.length) {G__82006__a[G__82006__i] = arguments[G__82006__i + 0]; ++G__82006__i;}
  args = new cljs.core.IndexedSeq(G__82006__a,0);
} 
return G__82005__delegate.call(this,args);};
G__82005.cljs$lang$maxFixedArity = 0;
G__82005.cljs$lang$applyTo = (function (arglist__82007){
var args = cljs.core.seq(arglist__82007);
return G__82005__delegate(args);
});
G__82005.cljs$core$IFn$_invoke$arity$variadic = G__82005__delegate;
return G__82005;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__82008 = cljs.core._EQ_;
var expr__82009 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__82008.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__82009))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__82008,expr__82009){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__82008,expr__82009))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__82008,expr__82009){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e82011){if((e82011 instanceof Error)){
var e = e82011;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e82011;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__82008,expr__82009))
} else {
if(cljs.core.truth_(pred__82008.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__82009))){
return ((function (pred__82008,expr__82009){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__82008,expr__82009){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__82008,expr__82009))
);

return deferred.addErrback(((function (deferred,pred__82008,expr__82009){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__82008,expr__82009))
);
});
;})(pred__82008,expr__82009))
} else {
if(cljs.core.truth_(pred__82008.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__82009))){
return ((function (pred__82008,expr__82009){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e82012){if((e82012 instanceof Error)){
var e = e82012;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e82012;

}
}})());
});
;})(pred__82008,expr__82009))
} else {
return ((function (pred__82008,expr__82009){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__82008,expr__82009))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__82013,callback){
var map__82016 = p__82013;
var map__82016__$1 = ((((!((map__82016 == null)))?((((map__82016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82016):map__82016);
var file_msg = map__82016__$1;
var request_url = cljs.core.get.call(null,map__82016__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__82016,map__82016__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__82016,map__82016__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto__){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto__){
return (function (state_82040){
var state_val_82041 = (state_82040[(1)]);
if((state_val_82041 === (7))){
var inst_82036 = (state_82040[(2)]);
var state_82040__$1 = state_82040;
var statearr_82042_82062 = state_82040__$1;
(statearr_82042_82062[(2)] = inst_82036);

(statearr_82042_82062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82041 === (1))){
var state_82040__$1 = state_82040;
var statearr_82043_82063 = state_82040__$1;
(statearr_82043_82063[(2)] = null);

(statearr_82043_82063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82041 === (4))){
var inst_82020 = (state_82040[(7)]);
var inst_82020__$1 = (state_82040[(2)]);
var state_82040__$1 = (function (){var statearr_82044 = state_82040;
(statearr_82044[(7)] = inst_82020__$1);

return statearr_82044;
})();
if(cljs.core.truth_(inst_82020__$1)){
var statearr_82045_82064 = state_82040__$1;
(statearr_82045_82064[(1)] = (5));

} else {
var statearr_82046_82065 = state_82040__$1;
(statearr_82046_82065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82041 === (6))){
var state_82040__$1 = state_82040;
var statearr_82047_82066 = state_82040__$1;
(statearr_82047_82066[(2)] = null);

(statearr_82047_82066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82041 === (3))){
var inst_82038 = (state_82040[(2)]);
var state_82040__$1 = state_82040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82040__$1,inst_82038);
} else {
if((state_val_82041 === (2))){
var state_82040__$1 = state_82040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82040__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_82041 === (11))){
var inst_82032 = (state_82040[(2)]);
var state_82040__$1 = (function (){var statearr_82048 = state_82040;
(statearr_82048[(8)] = inst_82032);

return statearr_82048;
})();
var statearr_82049_82067 = state_82040__$1;
(statearr_82049_82067[(2)] = null);

(statearr_82049_82067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82041 === (9))){
var inst_82024 = (state_82040[(9)]);
var inst_82026 = (state_82040[(10)]);
var inst_82028 = inst_82026.call(null,inst_82024);
var state_82040__$1 = state_82040;
var statearr_82050_82068 = state_82040__$1;
(statearr_82050_82068[(2)] = inst_82028);

(statearr_82050_82068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82041 === (5))){
var inst_82020 = (state_82040[(7)]);
var inst_82022 = figwheel.client.file_reloading.blocking_load.call(null,inst_82020);
var state_82040__$1 = state_82040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82040__$1,(8),inst_82022);
} else {
if((state_val_82041 === (10))){
var inst_82024 = (state_82040[(9)]);
var inst_82030 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_82024);
var state_82040__$1 = state_82040;
var statearr_82051_82069 = state_82040__$1;
(statearr_82051_82069[(2)] = inst_82030);

(statearr_82051_82069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82041 === (8))){
var inst_82020 = (state_82040[(7)]);
var inst_82026 = (state_82040[(10)]);
var inst_82024 = (state_82040[(2)]);
var inst_82025 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_82026__$1 = cljs.core.get.call(null,inst_82025,inst_82020);
var state_82040__$1 = (function (){var statearr_82052 = state_82040;
(statearr_82052[(9)] = inst_82024);

(statearr_82052[(10)] = inst_82026__$1);

return statearr_82052;
})();
if(cljs.core.truth_(inst_82026__$1)){
var statearr_82053_82070 = state_82040__$1;
(statearr_82053_82070[(1)] = (9));

} else {
var statearr_82054_82071 = state_82040__$1;
(statearr_82054_82071[(1)] = (10));

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
});})(c__28337__auto__))
;
return ((function (switch__28225__auto__,c__28337__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28226__auto__ = null;
var figwheel$client$file_reloading$state_machine__28226__auto____0 = (function (){
var statearr_82058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_82058[(0)] = figwheel$client$file_reloading$state_machine__28226__auto__);

(statearr_82058[(1)] = (1));

return statearr_82058;
});
var figwheel$client$file_reloading$state_machine__28226__auto____1 = (function (state_82040){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_82040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e82059){if((e82059 instanceof Object)){
var ex__28229__auto__ = e82059;
var statearr_82060_82072 = state_82040;
(statearr_82060_82072[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82073 = state_82040;
state_82040 = G__82073;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28226__auto__ = function(state_82040){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28226__auto____1.call(this,state_82040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28226__auto____0;
figwheel$client$file_reloading$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28226__auto____1;
return figwheel$client$file_reloading$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto__))
})();
var state__28339__auto__ = (function (){var statearr_82061 = f__28338__auto__.call(null);
(statearr_82061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto__);

return statearr_82061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto__))
);

return c__28337__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__82074,callback){
var map__82077 = p__82074;
var map__82077__$1 = ((((!((map__82077 == null)))?((((map__82077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82077):map__82077);
var file_msg = map__82077__$1;
var namespace = cljs.core.get.call(null,map__82077__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__82077,map__82077__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__82077,map__82077__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__82079){
var map__82082 = p__82079;
var map__82082__$1 = ((((!((map__82082 == null)))?((((map__82082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82082):map__82082);
var file_msg = map__82082__$1;
var namespace = cljs.core.get.call(null,map__82082__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__82084){
var map__82087 = p__82084;
var map__82087__$1 = ((((!((map__82087 == null)))?((((map__82087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82087):map__82087);
var file_msg = map__82087__$1;
var namespace = cljs.core.get.call(null,map__82087__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__82089,callback){
var map__82092 = p__82089;
var map__82092__$1 = ((((!((map__82092 == null)))?((((map__82092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82092):map__82092);
var file_msg = map__82092__$1;
var request_url = cljs.core.get.call(null,map__82092__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__82092__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28337__auto___82196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___82196,out){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___82196,out){
return (function (state_82178){
var state_val_82179 = (state_82178[(1)]);
if((state_val_82179 === (1))){
var inst_82152 = cljs.core.seq.call(null,files);
var inst_82153 = cljs.core.first.call(null,inst_82152);
var inst_82154 = cljs.core.next.call(null,inst_82152);
var inst_82155 = files;
var state_82178__$1 = (function (){var statearr_82180 = state_82178;
(statearr_82180[(7)] = inst_82155);

(statearr_82180[(8)] = inst_82154);

(statearr_82180[(9)] = inst_82153);

return statearr_82180;
})();
var statearr_82181_82197 = state_82178__$1;
(statearr_82181_82197[(2)] = null);

(statearr_82181_82197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82179 === (2))){
var inst_82155 = (state_82178[(7)]);
var inst_82161 = (state_82178[(10)]);
var inst_82160 = cljs.core.seq.call(null,inst_82155);
var inst_82161__$1 = cljs.core.first.call(null,inst_82160);
var inst_82162 = cljs.core.next.call(null,inst_82160);
var inst_82163 = (inst_82161__$1 == null);
var inst_82164 = cljs.core.not.call(null,inst_82163);
var state_82178__$1 = (function (){var statearr_82182 = state_82178;
(statearr_82182[(10)] = inst_82161__$1);

(statearr_82182[(11)] = inst_82162);

return statearr_82182;
})();
if(inst_82164){
var statearr_82183_82198 = state_82178__$1;
(statearr_82183_82198[(1)] = (4));

} else {
var statearr_82184_82199 = state_82178__$1;
(statearr_82184_82199[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82179 === (3))){
var inst_82176 = (state_82178[(2)]);
var state_82178__$1 = state_82178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82178__$1,inst_82176);
} else {
if((state_val_82179 === (4))){
var inst_82161 = (state_82178[(10)]);
var inst_82166 = figwheel.client.file_reloading.reload_js_file.call(null,inst_82161);
var state_82178__$1 = state_82178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82178__$1,(7),inst_82166);
} else {
if((state_val_82179 === (5))){
var inst_82172 = cljs.core.async.close_BANG_.call(null,out);
var state_82178__$1 = state_82178;
var statearr_82185_82200 = state_82178__$1;
(statearr_82185_82200[(2)] = inst_82172);

(statearr_82185_82200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82179 === (6))){
var inst_82174 = (state_82178[(2)]);
var state_82178__$1 = state_82178;
var statearr_82186_82201 = state_82178__$1;
(statearr_82186_82201[(2)] = inst_82174);

(statearr_82186_82201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82179 === (7))){
var inst_82162 = (state_82178[(11)]);
var inst_82168 = (state_82178[(2)]);
var inst_82169 = cljs.core.async.put_BANG_.call(null,out,inst_82168);
var inst_82155 = inst_82162;
var state_82178__$1 = (function (){var statearr_82187 = state_82178;
(statearr_82187[(7)] = inst_82155);

(statearr_82187[(12)] = inst_82169);

return statearr_82187;
})();
var statearr_82188_82202 = state_82178__$1;
(statearr_82188_82202[(2)] = null);

(statearr_82188_82202[(1)] = (2));


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
});})(c__28337__auto___82196,out))
;
return ((function (switch__28225__auto__,c__28337__auto___82196,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____0 = (function (){
var statearr_82192 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82192[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__);

(statearr_82192[(1)] = (1));

return statearr_82192;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____1 = (function (state_82178){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_82178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e82193){if((e82193 instanceof Object)){
var ex__28229__auto__ = e82193;
var statearr_82194_82203 = state_82178;
(statearr_82194_82203[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82204 = state_82178;
state_82178 = G__82204;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__ = function(state_82178){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____1.call(this,state_82178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___82196,out))
})();
var state__28339__auto__ = (function (){var statearr_82195 = f__28338__auto__.call(null);
(statearr_82195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___82196);

return statearr_82195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___82196,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__82205,opts){
var map__82209 = p__82205;
var map__82209__$1 = ((((!((map__82209 == null)))?((((map__82209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82209):map__82209);
var eval_body__$1 = cljs.core.get.call(null,map__82209__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__82209__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e82211){var e = e82211;
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
return (function (p1__82212_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__82212_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__82221){
var vec__82222 = p__82221;
var k = cljs.core.nth.call(null,vec__82222,(0),null);
var v = cljs.core.nth.call(null,vec__82222,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__82225){
var vec__82226 = p__82225;
var k = cljs.core.nth.call(null,vec__82226,(0),null);
var v = cljs.core.nth.call(null,vec__82226,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__82232,p__82233){
var map__82480 = p__82232;
var map__82480__$1 = ((((!((map__82480 == null)))?((((map__82480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82480):map__82480);
var opts = map__82480__$1;
var before_jsload = cljs.core.get.call(null,map__82480__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__82480__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__82480__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__82481 = p__82233;
var map__82481__$1 = ((((!((map__82481 == null)))?((((map__82481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82481):map__82481);
var msg = map__82481__$1;
var files = cljs.core.get.call(null,map__82481__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__82481__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__82481__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_82634){
var state_val_82635 = (state_82634[(1)]);
if((state_val_82635 === (7))){
var inst_82498 = (state_82634[(7)]);
var inst_82495 = (state_82634[(8)]);
var inst_82496 = (state_82634[(9)]);
var inst_82497 = (state_82634[(10)]);
var inst_82503 = cljs.core._nth.call(null,inst_82496,inst_82498);
var inst_82504 = figwheel.client.file_reloading.eval_body.call(null,inst_82503,opts);
var inst_82505 = (inst_82498 + (1));
var tmp82636 = inst_82495;
var tmp82637 = inst_82496;
var tmp82638 = inst_82497;
var inst_82495__$1 = tmp82636;
var inst_82496__$1 = tmp82637;
var inst_82497__$1 = tmp82638;
var inst_82498__$1 = inst_82505;
var state_82634__$1 = (function (){var statearr_82639 = state_82634;
(statearr_82639[(7)] = inst_82498__$1);

(statearr_82639[(8)] = inst_82495__$1);

(statearr_82639[(9)] = inst_82496__$1);

(statearr_82639[(11)] = inst_82504);

(statearr_82639[(10)] = inst_82497__$1);

return statearr_82639;
})();
var statearr_82640_82726 = state_82634__$1;
(statearr_82640_82726[(2)] = null);

(statearr_82640_82726[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (20))){
var inst_82538 = (state_82634[(12)]);
var inst_82546 = figwheel.client.file_reloading.sort_files.call(null,inst_82538);
var state_82634__$1 = state_82634;
var statearr_82641_82727 = state_82634__$1;
(statearr_82641_82727[(2)] = inst_82546);

(statearr_82641_82727[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (27))){
var state_82634__$1 = state_82634;
var statearr_82642_82728 = state_82634__$1;
(statearr_82642_82728[(2)] = null);

(statearr_82642_82728[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (1))){
var inst_82487 = (state_82634[(13)]);
var inst_82484 = before_jsload.call(null,files);
var inst_82485 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_82486 = (function (){return ((function (inst_82487,inst_82484,inst_82485,state_val_82635,c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__82229_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__82229_SHARP_);
});
;})(inst_82487,inst_82484,inst_82485,state_val_82635,c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82487__$1 = cljs.core.filter.call(null,inst_82486,files);
var inst_82488 = cljs.core.not_empty.call(null,inst_82487__$1);
var state_82634__$1 = (function (){var statearr_82643 = state_82634;
(statearr_82643[(14)] = inst_82484);

(statearr_82643[(15)] = inst_82485);

(statearr_82643[(13)] = inst_82487__$1);

return statearr_82643;
})();
if(cljs.core.truth_(inst_82488)){
var statearr_82644_82729 = state_82634__$1;
(statearr_82644_82729[(1)] = (2));

} else {
var statearr_82645_82730 = state_82634__$1;
(statearr_82645_82730[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (24))){
var state_82634__$1 = state_82634;
var statearr_82646_82731 = state_82634__$1;
(statearr_82646_82731[(2)] = null);

(statearr_82646_82731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (39))){
var inst_82588 = (state_82634[(16)]);
var state_82634__$1 = state_82634;
var statearr_82647_82732 = state_82634__$1;
(statearr_82647_82732[(2)] = inst_82588);

(statearr_82647_82732[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (46))){
var inst_82629 = (state_82634[(2)]);
var state_82634__$1 = state_82634;
var statearr_82648_82733 = state_82634__$1;
(statearr_82648_82733[(2)] = inst_82629);

(statearr_82648_82733[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (4))){
var inst_82532 = (state_82634[(2)]);
var inst_82533 = cljs.core.List.EMPTY;
var inst_82534 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_82533);
var inst_82535 = (function (){return ((function (inst_82532,inst_82533,inst_82534,state_val_82635,c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__82230_SHARP_){
var and__25113__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__82230_SHARP_);
if(cljs.core.truth_(and__25113__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__82230_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__82230_SHARP_)));
} else {
return and__25113__auto__;
}
});
;})(inst_82532,inst_82533,inst_82534,state_val_82635,c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82536 = cljs.core.filter.call(null,inst_82535,files);
var inst_82537 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_82538 = cljs.core.concat.call(null,inst_82536,inst_82537);
var state_82634__$1 = (function (){var statearr_82649 = state_82634;
(statearr_82649[(17)] = inst_82532);

(statearr_82649[(12)] = inst_82538);

(statearr_82649[(18)] = inst_82534);

return statearr_82649;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_82650_82734 = state_82634__$1;
(statearr_82650_82734[(1)] = (16));

} else {
var statearr_82651_82735 = state_82634__$1;
(statearr_82651_82735[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (15))){
var inst_82522 = (state_82634[(2)]);
var state_82634__$1 = state_82634;
var statearr_82652_82736 = state_82634__$1;
(statearr_82652_82736[(2)] = inst_82522);

(statearr_82652_82736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (21))){
var inst_82548 = (state_82634[(19)]);
var inst_82548__$1 = (state_82634[(2)]);
var inst_82549 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_82548__$1);
var state_82634__$1 = (function (){var statearr_82653 = state_82634;
(statearr_82653[(19)] = inst_82548__$1);

return statearr_82653;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82634__$1,(22),inst_82549);
} else {
if((state_val_82635 === (31))){
var inst_82632 = (state_82634[(2)]);
var state_82634__$1 = state_82634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82634__$1,inst_82632);
} else {
if((state_val_82635 === (32))){
var inst_82588 = (state_82634[(16)]);
var inst_82593 = inst_82588.cljs$lang$protocol_mask$partition0$;
var inst_82594 = (inst_82593 & (64));
var inst_82595 = inst_82588.cljs$core$ISeq$;
var inst_82596 = (inst_82594) || (inst_82595);
var state_82634__$1 = state_82634;
if(cljs.core.truth_(inst_82596)){
var statearr_82654_82737 = state_82634__$1;
(statearr_82654_82737[(1)] = (35));

} else {
var statearr_82655_82738 = state_82634__$1;
(statearr_82655_82738[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (40))){
var inst_82609 = (state_82634[(20)]);
var inst_82608 = (state_82634[(2)]);
var inst_82609__$1 = cljs.core.get.call(null,inst_82608,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_82610 = cljs.core.get.call(null,inst_82608,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_82611 = cljs.core.not_empty.call(null,inst_82609__$1);
var state_82634__$1 = (function (){var statearr_82656 = state_82634;
(statearr_82656[(21)] = inst_82610);

(statearr_82656[(20)] = inst_82609__$1);

return statearr_82656;
})();
if(cljs.core.truth_(inst_82611)){
var statearr_82657_82739 = state_82634__$1;
(statearr_82657_82739[(1)] = (41));

} else {
var statearr_82658_82740 = state_82634__$1;
(statearr_82658_82740[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (33))){
var state_82634__$1 = state_82634;
var statearr_82659_82741 = state_82634__$1;
(statearr_82659_82741[(2)] = false);

(statearr_82659_82741[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (13))){
var inst_82508 = (state_82634[(22)]);
var inst_82512 = cljs.core.chunk_first.call(null,inst_82508);
var inst_82513 = cljs.core.chunk_rest.call(null,inst_82508);
var inst_82514 = cljs.core.count.call(null,inst_82512);
var inst_82495 = inst_82513;
var inst_82496 = inst_82512;
var inst_82497 = inst_82514;
var inst_82498 = (0);
var state_82634__$1 = (function (){var statearr_82660 = state_82634;
(statearr_82660[(7)] = inst_82498);

(statearr_82660[(8)] = inst_82495);

(statearr_82660[(9)] = inst_82496);

(statearr_82660[(10)] = inst_82497);

return statearr_82660;
})();
var statearr_82661_82742 = state_82634__$1;
(statearr_82661_82742[(2)] = null);

(statearr_82661_82742[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (22))){
var inst_82548 = (state_82634[(19)]);
var inst_82552 = (state_82634[(23)]);
var inst_82556 = (state_82634[(24)]);
var inst_82551 = (state_82634[(25)]);
var inst_82551__$1 = (state_82634[(2)]);
var inst_82552__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_82551__$1);
var inst_82553 = (function (){var all_files = inst_82548;
var res_SINGLEQUOTE_ = inst_82551__$1;
var res = inst_82552__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_82548,inst_82552,inst_82556,inst_82551,inst_82551__$1,inst_82552__$1,state_val_82635,c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__82231_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__82231_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_82548,inst_82552,inst_82556,inst_82551,inst_82551__$1,inst_82552__$1,state_val_82635,c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82554 = cljs.core.filter.call(null,inst_82553,inst_82551__$1);
var inst_82555 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_82556__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_82555);
var inst_82557 = cljs.core.not_empty.call(null,inst_82556__$1);
var state_82634__$1 = (function (){var statearr_82662 = state_82634;
(statearr_82662[(26)] = inst_82554);

(statearr_82662[(23)] = inst_82552__$1);

(statearr_82662[(24)] = inst_82556__$1);

(statearr_82662[(25)] = inst_82551__$1);

return statearr_82662;
})();
if(cljs.core.truth_(inst_82557)){
var statearr_82663_82743 = state_82634__$1;
(statearr_82663_82743[(1)] = (23));

} else {
var statearr_82664_82744 = state_82634__$1;
(statearr_82664_82744[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (36))){
var state_82634__$1 = state_82634;
var statearr_82665_82745 = state_82634__$1;
(statearr_82665_82745[(2)] = false);

(statearr_82665_82745[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (41))){
var inst_82609 = (state_82634[(20)]);
var inst_82613 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_82614 = cljs.core.map.call(null,inst_82613,inst_82609);
var inst_82615 = cljs.core.pr_str.call(null,inst_82614);
var inst_82616 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_82615)].join('');
var inst_82617 = figwheel.client.utils.log.call(null,inst_82616);
var state_82634__$1 = state_82634;
var statearr_82666_82746 = state_82634__$1;
(statearr_82666_82746[(2)] = inst_82617);

(statearr_82666_82746[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (43))){
var inst_82610 = (state_82634[(21)]);
var inst_82620 = (state_82634[(2)]);
var inst_82621 = cljs.core.not_empty.call(null,inst_82610);
var state_82634__$1 = (function (){var statearr_82667 = state_82634;
(statearr_82667[(27)] = inst_82620);

return statearr_82667;
})();
if(cljs.core.truth_(inst_82621)){
var statearr_82668_82747 = state_82634__$1;
(statearr_82668_82747[(1)] = (44));

} else {
var statearr_82669_82748 = state_82634__$1;
(statearr_82669_82748[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (29))){
var inst_82554 = (state_82634[(26)]);
var inst_82548 = (state_82634[(19)]);
var inst_82552 = (state_82634[(23)]);
var inst_82556 = (state_82634[(24)]);
var inst_82551 = (state_82634[(25)]);
var inst_82588 = (state_82634[(16)]);
var inst_82584 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_82587 = (function (){var all_files = inst_82548;
var res_SINGLEQUOTE_ = inst_82551;
var res = inst_82552;
var files_not_loaded = inst_82554;
var dependencies_that_loaded = inst_82556;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82554,inst_82548,inst_82552,inst_82556,inst_82551,inst_82588,inst_82584,state_val_82635,c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__82586){
var map__82670 = p__82586;
var map__82670__$1 = ((((!((map__82670 == null)))?((((map__82670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82670):map__82670);
var namespace = cljs.core.get.call(null,map__82670__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82554,inst_82548,inst_82552,inst_82556,inst_82551,inst_82588,inst_82584,state_val_82635,c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82588__$1 = cljs.core.group_by.call(null,inst_82587,inst_82554);
var inst_82590 = (inst_82588__$1 == null);
var inst_82591 = cljs.core.not.call(null,inst_82590);
var state_82634__$1 = (function (){var statearr_82672 = state_82634;
(statearr_82672[(28)] = inst_82584);

(statearr_82672[(16)] = inst_82588__$1);

return statearr_82672;
})();
if(inst_82591){
var statearr_82673_82749 = state_82634__$1;
(statearr_82673_82749[(1)] = (32));

} else {
var statearr_82674_82750 = state_82634__$1;
(statearr_82674_82750[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (44))){
var inst_82610 = (state_82634[(21)]);
var inst_82623 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_82610);
var inst_82624 = cljs.core.pr_str.call(null,inst_82623);
var inst_82625 = [cljs.core.str("not required: "),cljs.core.str(inst_82624)].join('');
var inst_82626 = figwheel.client.utils.log.call(null,inst_82625);
var state_82634__$1 = state_82634;
var statearr_82675_82751 = state_82634__$1;
(statearr_82675_82751[(2)] = inst_82626);

(statearr_82675_82751[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (6))){
var inst_82529 = (state_82634[(2)]);
var state_82634__$1 = state_82634;
var statearr_82676_82752 = state_82634__$1;
(statearr_82676_82752[(2)] = inst_82529);

(statearr_82676_82752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (28))){
var inst_82554 = (state_82634[(26)]);
var inst_82581 = (state_82634[(2)]);
var inst_82582 = cljs.core.not_empty.call(null,inst_82554);
var state_82634__$1 = (function (){var statearr_82677 = state_82634;
(statearr_82677[(29)] = inst_82581);

return statearr_82677;
})();
if(cljs.core.truth_(inst_82582)){
var statearr_82678_82753 = state_82634__$1;
(statearr_82678_82753[(1)] = (29));

} else {
var statearr_82679_82754 = state_82634__$1;
(statearr_82679_82754[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (25))){
var inst_82552 = (state_82634[(23)]);
var inst_82568 = (state_82634[(2)]);
var inst_82569 = cljs.core.not_empty.call(null,inst_82552);
var state_82634__$1 = (function (){var statearr_82680 = state_82634;
(statearr_82680[(30)] = inst_82568);

return statearr_82680;
})();
if(cljs.core.truth_(inst_82569)){
var statearr_82681_82755 = state_82634__$1;
(statearr_82681_82755[(1)] = (26));

} else {
var statearr_82682_82756 = state_82634__$1;
(statearr_82682_82756[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (34))){
var inst_82603 = (state_82634[(2)]);
var state_82634__$1 = state_82634;
if(cljs.core.truth_(inst_82603)){
var statearr_82683_82757 = state_82634__$1;
(statearr_82683_82757[(1)] = (38));

} else {
var statearr_82684_82758 = state_82634__$1;
(statearr_82684_82758[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (17))){
var state_82634__$1 = state_82634;
var statearr_82685_82759 = state_82634__$1;
(statearr_82685_82759[(2)] = recompile_dependents);

(statearr_82685_82759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (3))){
var state_82634__$1 = state_82634;
var statearr_82686_82760 = state_82634__$1;
(statearr_82686_82760[(2)] = null);

(statearr_82686_82760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (12))){
var inst_82525 = (state_82634[(2)]);
var state_82634__$1 = state_82634;
var statearr_82687_82761 = state_82634__$1;
(statearr_82687_82761[(2)] = inst_82525);

(statearr_82687_82761[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (2))){
var inst_82487 = (state_82634[(13)]);
var inst_82494 = cljs.core.seq.call(null,inst_82487);
var inst_82495 = inst_82494;
var inst_82496 = null;
var inst_82497 = (0);
var inst_82498 = (0);
var state_82634__$1 = (function (){var statearr_82688 = state_82634;
(statearr_82688[(7)] = inst_82498);

(statearr_82688[(8)] = inst_82495);

(statearr_82688[(9)] = inst_82496);

(statearr_82688[(10)] = inst_82497);

return statearr_82688;
})();
var statearr_82689_82762 = state_82634__$1;
(statearr_82689_82762[(2)] = null);

(statearr_82689_82762[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (23))){
var inst_82554 = (state_82634[(26)]);
var inst_82548 = (state_82634[(19)]);
var inst_82552 = (state_82634[(23)]);
var inst_82556 = (state_82634[(24)]);
var inst_82551 = (state_82634[(25)]);
var inst_82559 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_82561 = (function (){var all_files = inst_82548;
var res_SINGLEQUOTE_ = inst_82551;
var res = inst_82552;
var files_not_loaded = inst_82554;
var dependencies_that_loaded = inst_82556;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82554,inst_82548,inst_82552,inst_82556,inst_82551,inst_82559,state_val_82635,c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__82560){
var map__82690 = p__82560;
var map__82690__$1 = ((((!((map__82690 == null)))?((((map__82690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82690):map__82690);
var request_url = cljs.core.get.call(null,map__82690__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82554,inst_82548,inst_82552,inst_82556,inst_82551,inst_82559,state_val_82635,c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82562 = cljs.core.reverse.call(null,inst_82556);
var inst_82563 = cljs.core.map.call(null,inst_82561,inst_82562);
var inst_82564 = cljs.core.pr_str.call(null,inst_82563);
var inst_82565 = figwheel.client.utils.log.call(null,inst_82564);
var state_82634__$1 = (function (){var statearr_82692 = state_82634;
(statearr_82692[(31)] = inst_82559);

return statearr_82692;
})();
var statearr_82693_82763 = state_82634__$1;
(statearr_82693_82763[(2)] = inst_82565);

(statearr_82693_82763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (35))){
var state_82634__$1 = state_82634;
var statearr_82694_82764 = state_82634__$1;
(statearr_82694_82764[(2)] = true);

(statearr_82694_82764[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (19))){
var inst_82538 = (state_82634[(12)]);
var inst_82544 = figwheel.client.file_reloading.expand_files.call(null,inst_82538);
var state_82634__$1 = state_82634;
var statearr_82695_82765 = state_82634__$1;
(statearr_82695_82765[(2)] = inst_82544);

(statearr_82695_82765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (11))){
var state_82634__$1 = state_82634;
var statearr_82696_82766 = state_82634__$1;
(statearr_82696_82766[(2)] = null);

(statearr_82696_82766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (9))){
var inst_82527 = (state_82634[(2)]);
var state_82634__$1 = state_82634;
var statearr_82697_82767 = state_82634__$1;
(statearr_82697_82767[(2)] = inst_82527);

(statearr_82697_82767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (5))){
var inst_82498 = (state_82634[(7)]);
var inst_82497 = (state_82634[(10)]);
var inst_82500 = (inst_82498 < inst_82497);
var inst_82501 = inst_82500;
var state_82634__$1 = state_82634;
if(cljs.core.truth_(inst_82501)){
var statearr_82698_82768 = state_82634__$1;
(statearr_82698_82768[(1)] = (7));

} else {
var statearr_82699_82769 = state_82634__$1;
(statearr_82699_82769[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (14))){
var inst_82508 = (state_82634[(22)]);
var inst_82517 = cljs.core.first.call(null,inst_82508);
var inst_82518 = figwheel.client.file_reloading.eval_body.call(null,inst_82517,opts);
var inst_82519 = cljs.core.next.call(null,inst_82508);
var inst_82495 = inst_82519;
var inst_82496 = null;
var inst_82497 = (0);
var inst_82498 = (0);
var state_82634__$1 = (function (){var statearr_82700 = state_82634;
(statearr_82700[(7)] = inst_82498);

(statearr_82700[(8)] = inst_82495);

(statearr_82700[(9)] = inst_82496);

(statearr_82700[(10)] = inst_82497);

(statearr_82700[(32)] = inst_82518);

return statearr_82700;
})();
var statearr_82701_82770 = state_82634__$1;
(statearr_82701_82770[(2)] = null);

(statearr_82701_82770[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (45))){
var state_82634__$1 = state_82634;
var statearr_82702_82771 = state_82634__$1;
(statearr_82702_82771[(2)] = null);

(statearr_82702_82771[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (26))){
var inst_82554 = (state_82634[(26)]);
var inst_82548 = (state_82634[(19)]);
var inst_82552 = (state_82634[(23)]);
var inst_82556 = (state_82634[(24)]);
var inst_82551 = (state_82634[(25)]);
var inst_82571 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_82573 = (function (){var all_files = inst_82548;
var res_SINGLEQUOTE_ = inst_82551;
var res = inst_82552;
var files_not_loaded = inst_82554;
var dependencies_that_loaded = inst_82556;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82554,inst_82548,inst_82552,inst_82556,inst_82551,inst_82571,state_val_82635,c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__82572){
var map__82703 = p__82572;
var map__82703__$1 = ((((!((map__82703 == null)))?((((map__82703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82703):map__82703);
var namespace = cljs.core.get.call(null,map__82703__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__82703__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82554,inst_82548,inst_82552,inst_82556,inst_82551,inst_82571,state_val_82635,c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82574 = cljs.core.map.call(null,inst_82573,inst_82552);
var inst_82575 = cljs.core.pr_str.call(null,inst_82574);
var inst_82576 = figwheel.client.utils.log.call(null,inst_82575);
var inst_82577 = (function (){var all_files = inst_82548;
var res_SINGLEQUOTE_ = inst_82551;
var res = inst_82552;
var files_not_loaded = inst_82554;
var dependencies_that_loaded = inst_82556;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82554,inst_82548,inst_82552,inst_82556,inst_82551,inst_82571,inst_82573,inst_82574,inst_82575,inst_82576,state_val_82635,c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82554,inst_82548,inst_82552,inst_82556,inst_82551,inst_82571,inst_82573,inst_82574,inst_82575,inst_82576,state_val_82635,c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82578 = setTimeout(inst_82577,(10));
var state_82634__$1 = (function (){var statearr_82705 = state_82634;
(statearr_82705[(33)] = inst_82571);

(statearr_82705[(34)] = inst_82576);

return statearr_82705;
})();
var statearr_82706_82772 = state_82634__$1;
(statearr_82706_82772[(2)] = inst_82578);

(statearr_82706_82772[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (16))){
var state_82634__$1 = state_82634;
var statearr_82707_82773 = state_82634__$1;
(statearr_82707_82773[(2)] = reload_dependents);

(statearr_82707_82773[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (38))){
var inst_82588 = (state_82634[(16)]);
var inst_82605 = cljs.core.apply.call(null,cljs.core.hash_map,inst_82588);
var state_82634__$1 = state_82634;
var statearr_82708_82774 = state_82634__$1;
(statearr_82708_82774[(2)] = inst_82605);

(statearr_82708_82774[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (30))){
var state_82634__$1 = state_82634;
var statearr_82709_82775 = state_82634__$1;
(statearr_82709_82775[(2)] = null);

(statearr_82709_82775[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (10))){
var inst_82508 = (state_82634[(22)]);
var inst_82510 = cljs.core.chunked_seq_QMARK_.call(null,inst_82508);
var state_82634__$1 = state_82634;
if(inst_82510){
var statearr_82710_82776 = state_82634__$1;
(statearr_82710_82776[(1)] = (13));

} else {
var statearr_82711_82777 = state_82634__$1;
(statearr_82711_82777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (18))){
var inst_82542 = (state_82634[(2)]);
var state_82634__$1 = state_82634;
if(cljs.core.truth_(inst_82542)){
var statearr_82712_82778 = state_82634__$1;
(statearr_82712_82778[(1)] = (19));

} else {
var statearr_82713_82779 = state_82634__$1;
(statearr_82713_82779[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (42))){
var state_82634__$1 = state_82634;
var statearr_82714_82780 = state_82634__$1;
(statearr_82714_82780[(2)] = null);

(statearr_82714_82780[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (37))){
var inst_82600 = (state_82634[(2)]);
var state_82634__$1 = state_82634;
var statearr_82715_82781 = state_82634__$1;
(statearr_82715_82781[(2)] = inst_82600);

(statearr_82715_82781[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82635 === (8))){
var inst_82495 = (state_82634[(8)]);
var inst_82508 = (state_82634[(22)]);
var inst_82508__$1 = cljs.core.seq.call(null,inst_82495);
var state_82634__$1 = (function (){var statearr_82716 = state_82634;
(statearr_82716[(22)] = inst_82508__$1);

return statearr_82716;
})();
if(inst_82508__$1){
var statearr_82717_82782 = state_82634__$1;
(statearr_82717_82782[(1)] = (10));

} else {
var statearr_82718_82783 = state_82634__$1;
(statearr_82718_82783[(1)] = (11));

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
});})(c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28225__auto__,c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____0 = (function (){
var statearr_82722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82722[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__);

(statearr_82722[(1)] = (1));

return statearr_82722;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____1 = (function (state_82634){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_82634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e82723){if((e82723 instanceof Object)){
var ex__28229__auto__ = e82723;
var statearr_82724_82784 = state_82634;
(statearr_82724_82784[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82785 = state_82634;
state_82634 = G__82785;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__ = function(state_82634){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____1.call(this,state_82634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28339__auto__ = (function (){var statearr_82725 = f__28338__auto__.call(null);
(statearr_82725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto__);

return statearr_82725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto__,map__82480,map__82480__$1,opts,before_jsload,on_jsload,reload_dependents,map__82481,map__82481__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28337__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__82788,link){
var map__82791 = p__82788;
var map__82791__$1 = ((((!((map__82791 == null)))?((((map__82791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82791):map__82791);
var file = cljs.core.get.call(null,map__82791__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__82791,map__82791__$1,file){
return (function (p1__82786_SHARP_,p2__82787_SHARP_){
if(cljs.core._EQ_.call(null,p1__82786_SHARP_,p2__82787_SHARP_)){
return p1__82786_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__82791,map__82791__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__82797){
var map__82798 = p__82797;
var map__82798__$1 = ((((!((map__82798 == null)))?((((map__82798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82798):map__82798);
var match_length = cljs.core.get.call(null,map__82798__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__82798__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__82793_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__82793_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__82800_SHARP_,p2__82801_SHARP_){
return cljs.core.assoc.call(null,p1__82800_SHARP_,cljs.core.get.call(null,p2__82801_SHARP_,key),p2__82801_SHARP_);
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
var loaded_f_datas_82802 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_82802);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_82802);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__82803,p__82804){
var map__82809 = p__82803;
var map__82809__$1 = ((((!((map__82809 == null)))?((((map__82809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82809):map__82809);
var on_cssload = cljs.core.get.call(null,map__82809__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__82810 = p__82804;
var map__82810__$1 = ((((!((map__82810 == null)))?((((map__82810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82810):map__82810);
var files_msg = map__82810__$1;
var files = cljs.core.get.call(null,map__82810__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1488396832161