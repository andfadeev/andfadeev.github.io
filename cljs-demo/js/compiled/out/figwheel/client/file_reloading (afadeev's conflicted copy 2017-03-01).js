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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__65745_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__65745_SHARP_));
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
var seq__65750 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__65751 = null;
var count__65752 = (0);
var i__65753 = (0);
while(true){
if((i__65753 < count__65752)){
var n = cljs.core._nth.call(null,chunk__65751,i__65753);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__65754 = seq__65750;
var G__65755 = chunk__65751;
var G__65756 = count__65752;
var G__65757 = (i__65753 + (1));
seq__65750 = G__65754;
chunk__65751 = G__65755;
count__65752 = G__65756;
i__65753 = G__65757;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__65750);
if(temp__4657__auto__){
var seq__65750__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65750__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__65750__$1);
var G__65758 = cljs.core.chunk_rest.call(null,seq__65750__$1);
var G__65759 = c__25936__auto__;
var G__65760 = cljs.core.count.call(null,c__25936__auto__);
var G__65761 = (0);
seq__65750 = G__65758;
chunk__65751 = G__65759;
count__65752 = G__65760;
i__65753 = G__65761;
continue;
} else {
var n = cljs.core.first.call(null,seq__65750__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__65762 = cljs.core.next.call(null,seq__65750__$1);
var G__65763 = null;
var G__65764 = (0);
var G__65765 = (0);
seq__65750 = G__65762;
chunk__65751 = G__65763;
count__65752 = G__65764;
i__65753 = G__65765;
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

var seq__65816_65827 = cljs.core.seq.call(null,deps);
var chunk__65817_65828 = null;
var count__65818_65829 = (0);
var i__65819_65830 = (0);
while(true){
if((i__65819_65830 < count__65818_65829)){
var dep_65831 = cljs.core._nth.call(null,chunk__65817_65828,i__65819_65830);
topo_sort_helper_STAR_.call(null,dep_65831,(depth + (1)),state);

var G__65832 = seq__65816_65827;
var G__65833 = chunk__65817_65828;
var G__65834 = count__65818_65829;
var G__65835 = (i__65819_65830 + (1));
seq__65816_65827 = G__65832;
chunk__65817_65828 = G__65833;
count__65818_65829 = G__65834;
i__65819_65830 = G__65835;
continue;
} else {
var temp__4657__auto___65836 = cljs.core.seq.call(null,seq__65816_65827);
if(temp__4657__auto___65836){
var seq__65816_65837__$1 = temp__4657__auto___65836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65816_65837__$1)){
var c__25936__auto___65838 = cljs.core.chunk_first.call(null,seq__65816_65837__$1);
var G__65839 = cljs.core.chunk_rest.call(null,seq__65816_65837__$1);
var G__65840 = c__25936__auto___65838;
var G__65841 = cljs.core.count.call(null,c__25936__auto___65838);
var G__65842 = (0);
seq__65816_65827 = G__65839;
chunk__65817_65828 = G__65840;
count__65818_65829 = G__65841;
i__65819_65830 = G__65842;
continue;
} else {
var dep_65843 = cljs.core.first.call(null,seq__65816_65837__$1);
topo_sort_helper_STAR_.call(null,dep_65843,(depth + (1)),state);

var G__65844 = cljs.core.next.call(null,seq__65816_65837__$1);
var G__65845 = null;
var G__65846 = (0);
var G__65847 = (0);
seq__65816_65827 = G__65844;
chunk__65817_65828 = G__65845;
count__65818_65829 = G__65846;
i__65819_65830 = G__65847;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__65820){
var vec__65824 = p__65820;
var seq__65825 = cljs.core.seq.call(null,vec__65824);
var first__65826 = cljs.core.first.call(null,seq__65825);
var seq__65825__$1 = cljs.core.next.call(null,seq__65825);
var x = first__65826;
var xs = seq__65825__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__65824,seq__65825,first__65826,seq__65825__$1,x,xs,get_deps__$1){
return (function (p1__65766_SHARP_){
return clojure.set.difference.call(null,p1__65766_SHARP_,x);
});})(vec__65824,seq__65825,first__65826,seq__65825__$1,x,xs,get_deps__$1))
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
var seq__65860 = cljs.core.seq.call(null,provides);
var chunk__65861 = null;
var count__65862 = (0);
var i__65863 = (0);
while(true){
if((i__65863 < count__65862)){
var prov = cljs.core._nth.call(null,chunk__65861,i__65863);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__65864_65872 = cljs.core.seq.call(null,requires);
var chunk__65865_65873 = null;
var count__65866_65874 = (0);
var i__65867_65875 = (0);
while(true){
if((i__65867_65875 < count__65866_65874)){
var req_65876 = cljs.core._nth.call(null,chunk__65865_65873,i__65867_65875);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65876,prov);

var G__65877 = seq__65864_65872;
var G__65878 = chunk__65865_65873;
var G__65879 = count__65866_65874;
var G__65880 = (i__65867_65875 + (1));
seq__65864_65872 = G__65877;
chunk__65865_65873 = G__65878;
count__65866_65874 = G__65879;
i__65867_65875 = G__65880;
continue;
} else {
var temp__4657__auto___65881 = cljs.core.seq.call(null,seq__65864_65872);
if(temp__4657__auto___65881){
var seq__65864_65882__$1 = temp__4657__auto___65881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65864_65882__$1)){
var c__25936__auto___65883 = cljs.core.chunk_first.call(null,seq__65864_65882__$1);
var G__65884 = cljs.core.chunk_rest.call(null,seq__65864_65882__$1);
var G__65885 = c__25936__auto___65883;
var G__65886 = cljs.core.count.call(null,c__25936__auto___65883);
var G__65887 = (0);
seq__65864_65872 = G__65884;
chunk__65865_65873 = G__65885;
count__65866_65874 = G__65886;
i__65867_65875 = G__65887;
continue;
} else {
var req_65888 = cljs.core.first.call(null,seq__65864_65882__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65888,prov);

var G__65889 = cljs.core.next.call(null,seq__65864_65882__$1);
var G__65890 = null;
var G__65891 = (0);
var G__65892 = (0);
seq__65864_65872 = G__65889;
chunk__65865_65873 = G__65890;
count__65866_65874 = G__65891;
i__65867_65875 = G__65892;
continue;
}
} else {
}
}
break;
}

var G__65893 = seq__65860;
var G__65894 = chunk__65861;
var G__65895 = count__65862;
var G__65896 = (i__65863 + (1));
seq__65860 = G__65893;
chunk__65861 = G__65894;
count__65862 = G__65895;
i__65863 = G__65896;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__65860);
if(temp__4657__auto__){
var seq__65860__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65860__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__65860__$1);
var G__65897 = cljs.core.chunk_rest.call(null,seq__65860__$1);
var G__65898 = c__25936__auto__;
var G__65899 = cljs.core.count.call(null,c__25936__auto__);
var G__65900 = (0);
seq__65860 = G__65897;
chunk__65861 = G__65898;
count__65862 = G__65899;
i__65863 = G__65900;
continue;
} else {
var prov = cljs.core.first.call(null,seq__65860__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__65868_65901 = cljs.core.seq.call(null,requires);
var chunk__65869_65902 = null;
var count__65870_65903 = (0);
var i__65871_65904 = (0);
while(true){
if((i__65871_65904 < count__65870_65903)){
var req_65905 = cljs.core._nth.call(null,chunk__65869_65902,i__65871_65904);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65905,prov);

var G__65906 = seq__65868_65901;
var G__65907 = chunk__65869_65902;
var G__65908 = count__65870_65903;
var G__65909 = (i__65871_65904 + (1));
seq__65868_65901 = G__65906;
chunk__65869_65902 = G__65907;
count__65870_65903 = G__65908;
i__65871_65904 = G__65909;
continue;
} else {
var temp__4657__auto___65910__$1 = cljs.core.seq.call(null,seq__65868_65901);
if(temp__4657__auto___65910__$1){
var seq__65868_65911__$1 = temp__4657__auto___65910__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65868_65911__$1)){
var c__25936__auto___65912 = cljs.core.chunk_first.call(null,seq__65868_65911__$1);
var G__65913 = cljs.core.chunk_rest.call(null,seq__65868_65911__$1);
var G__65914 = c__25936__auto___65912;
var G__65915 = cljs.core.count.call(null,c__25936__auto___65912);
var G__65916 = (0);
seq__65868_65901 = G__65913;
chunk__65869_65902 = G__65914;
count__65870_65903 = G__65915;
i__65871_65904 = G__65916;
continue;
} else {
var req_65917 = cljs.core.first.call(null,seq__65868_65911__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65917,prov);

var G__65918 = cljs.core.next.call(null,seq__65868_65911__$1);
var G__65919 = null;
var G__65920 = (0);
var G__65921 = (0);
seq__65868_65901 = G__65918;
chunk__65869_65902 = G__65919;
count__65870_65903 = G__65920;
i__65871_65904 = G__65921;
continue;
}
} else {
}
}
break;
}

var G__65922 = cljs.core.next.call(null,seq__65860__$1);
var G__65923 = null;
var G__65924 = (0);
var G__65925 = (0);
seq__65860 = G__65922;
chunk__65861 = G__65923;
count__65862 = G__65924;
i__65863 = G__65925;
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
var seq__65930_65934 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__65931_65935 = null;
var count__65932_65936 = (0);
var i__65933_65937 = (0);
while(true){
if((i__65933_65937 < count__65932_65936)){
var ns_65938 = cljs.core._nth.call(null,chunk__65931_65935,i__65933_65937);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_65938);

var G__65939 = seq__65930_65934;
var G__65940 = chunk__65931_65935;
var G__65941 = count__65932_65936;
var G__65942 = (i__65933_65937 + (1));
seq__65930_65934 = G__65939;
chunk__65931_65935 = G__65940;
count__65932_65936 = G__65941;
i__65933_65937 = G__65942;
continue;
} else {
var temp__4657__auto___65943 = cljs.core.seq.call(null,seq__65930_65934);
if(temp__4657__auto___65943){
var seq__65930_65944__$1 = temp__4657__auto___65943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65930_65944__$1)){
var c__25936__auto___65945 = cljs.core.chunk_first.call(null,seq__65930_65944__$1);
var G__65946 = cljs.core.chunk_rest.call(null,seq__65930_65944__$1);
var G__65947 = c__25936__auto___65945;
var G__65948 = cljs.core.count.call(null,c__25936__auto___65945);
var G__65949 = (0);
seq__65930_65934 = G__65946;
chunk__65931_65935 = G__65947;
count__65932_65936 = G__65948;
i__65933_65937 = G__65949;
continue;
} else {
var ns_65950 = cljs.core.first.call(null,seq__65930_65944__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_65950);

var G__65951 = cljs.core.next.call(null,seq__65930_65944__$1);
var G__65952 = null;
var G__65953 = (0);
var G__65954 = (0);
seq__65930_65934 = G__65951;
chunk__65931_65935 = G__65952;
count__65932_65936 = G__65953;
i__65933_65937 = G__65954;
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
var G__65955__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__65955 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65956__i = 0, G__65956__a = new Array(arguments.length -  0);
while (G__65956__i < G__65956__a.length) {G__65956__a[G__65956__i] = arguments[G__65956__i + 0]; ++G__65956__i;}
  args = new cljs.core.IndexedSeq(G__65956__a,0);
} 
return G__65955__delegate.call(this,args);};
G__65955.cljs$lang$maxFixedArity = 0;
G__65955.cljs$lang$applyTo = (function (arglist__65957){
var args = cljs.core.seq(arglist__65957);
return G__65955__delegate(args);
});
G__65955.cljs$core$IFn$_invoke$arity$variadic = G__65955__delegate;
return G__65955;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__65958 = cljs.core._EQ_;
var expr__65959 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__65958.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__65959))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__65958,expr__65959){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__65958,expr__65959))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__65958,expr__65959){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e65961){if((e65961 instanceof Error)){
var e = e65961;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e65961;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__65958,expr__65959))
} else {
if(cljs.core.truth_(pred__65958.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__65959))){
return ((function (pred__65958,expr__65959){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__65958,expr__65959){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__65958,expr__65959))
);

return deferred.addErrback(((function (deferred,pred__65958,expr__65959){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__65958,expr__65959))
);
});
;})(pred__65958,expr__65959))
} else {
if(cljs.core.truth_(pred__65958.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__65959))){
return ((function (pred__65958,expr__65959){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e65962){if((e65962 instanceof Error)){
var e = e65962;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e65962;

}
}})());
});
;})(pred__65958,expr__65959))
} else {
return ((function (pred__65958,expr__65959){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__65958,expr__65959))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__65963,callback){
var map__65966 = p__65963;
var map__65966__$1 = ((((!((map__65966 == null)))?((((map__65966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65966):map__65966);
var file_msg = map__65966__$1;
var request_url = cljs.core.get.call(null,map__65966__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__65966,map__65966__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__65966,map__65966__$1,file_msg,request_url))
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
return (function (state_65990){
var state_val_65991 = (state_65990[(1)]);
if((state_val_65991 === (7))){
var inst_65986 = (state_65990[(2)]);
var state_65990__$1 = state_65990;
var statearr_65992_66012 = state_65990__$1;
(statearr_65992_66012[(2)] = inst_65986);

(statearr_65992_66012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65991 === (1))){
var state_65990__$1 = state_65990;
var statearr_65993_66013 = state_65990__$1;
(statearr_65993_66013[(2)] = null);

(statearr_65993_66013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65991 === (4))){
var inst_65970 = (state_65990[(7)]);
var inst_65970__$1 = (state_65990[(2)]);
var state_65990__$1 = (function (){var statearr_65994 = state_65990;
(statearr_65994[(7)] = inst_65970__$1);

return statearr_65994;
})();
if(cljs.core.truth_(inst_65970__$1)){
var statearr_65995_66014 = state_65990__$1;
(statearr_65995_66014[(1)] = (5));

} else {
var statearr_65996_66015 = state_65990__$1;
(statearr_65996_66015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65991 === (6))){
var state_65990__$1 = state_65990;
var statearr_65997_66016 = state_65990__$1;
(statearr_65997_66016[(2)] = null);

(statearr_65997_66016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65991 === (3))){
var inst_65988 = (state_65990[(2)]);
var state_65990__$1 = state_65990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65990__$1,inst_65988);
} else {
if((state_val_65991 === (2))){
var state_65990__$1 = state_65990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65990__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_65991 === (11))){
var inst_65982 = (state_65990[(2)]);
var state_65990__$1 = (function (){var statearr_65998 = state_65990;
(statearr_65998[(8)] = inst_65982);

return statearr_65998;
})();
var statearr_65999_66017 = state_65990__$1;
(statearr_65999_66017[(2)] = null);

(statearr_65999_66017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65991 === (9))){
var inst_65976 = (state_65990[(9)]);
var inst_65974 = (state_65990[(10)]);
var inst_65978 = inst_65976.call(null,inst_65974);
var state_65990__$1 = state_65990;
var statearr_66000_66018 = state_65990__$1;
(statearr_66000_66018[(2)] = inst_65978);

(statearr_66000_66018[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65991 === (5))){
var inst_65970 = (state_65990[(7)]);
var inst_65972 = figwheel.client.file_reloading.blocking_load.call(null,inst_65970);
var state_65990__$1 = state_65990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65990__$1,(8),inst_65972);
} else {
if((state_val_65991 === (10))){
var inst_65974 = (state_65990[(10)]);
var inst_65980 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_65974);
var state_65990__$1 = state_65990;
var statearr_66001_66019 = state_65990__$1;
(statearr_66001_66019[(2)] = inst_65980);

(statearr_66001_66019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65991 === (8))){
var inst_65970 = (state_65990[(7)]);
var inst_65976 = (state_65990[(9)]);
var inst_65974 = (state_65990[(2)]);
var inst_65975 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_65976__$1 = cljs.core.get.call(null,inst_65975,inst_65970);
var state_65990__$1 = (function (){var statearr_66002 = state_65990;
(statearr_66002[(9)] = inst_65976__$1);

(statearr_66002[(10)] = inst_65974);

return statearr_66002;
})();
if(cljs.core.truth_(inst_65976__$1)){
var statearr_66003_66020 = state_65990__$1;
(statearr_66003_66020[(1)] = (9));

} else {
var statearr_66004_66021 = state_65990__$1;
(statearr_66004_66021[(1)] = (10));

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
var statearr_66008 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66008[(0)] = figwheel$client$file_reloading$state_machine__28226__auto__);

(statearr_66008[(1)] = (1));

return statearr_66008;
});
var figwheel$client$file_reloading$state_machine__28226__auto____1 = (function (state_65990){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_65990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e66009){if((e66009 instanceof Object)){
var ex__28229__auto__ = e66009;
var statearr_66010_66022 = state_65990;
(statearr_66010_66022[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66023 = state_65990;
state_65990 = G__66023;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28226__auto__ = function(state_65990){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28226__auto____1.call(this,state_65990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28226__auto____0;
figwheel$client$file_reloading$state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28226__auto____1;
return figwheel$client$file_reloading$state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto__))
})();
var state__28339__auto__ = (function (){var statearr_66011 = f__28338__auto__.call(null);
(statearr_66011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto__);

return statearr_66011;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__66024,callback){
var map__66027 = p__66024;
var map__66027__$1 = ((((!((map__66027 == null)))?((((map__66027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66027):map__66027);
var file_msg = map__66027__$1;
var namespace = cljs.core.get.call(null,map__66027__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__66027,map__66027__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__66027,map__66027__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__66029){
var map__66032 = p__66029;
var map__66032__$1 = ((((!((map__66032 == null)))?((((map__66032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66032):map__66032);
var file_msg = map__66032__$1;
var namespace = cljs.core.get.call(null,map__66032__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__66034){
var map__66037 = p__66034;
var map__66037__$1 = ((((!((map__66037 == null)))?((((map__66037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66037):map__66037);
var file_msg = map__66037__$1;
var namespace = cljs.core.get.call(null,map__66037__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__66039,callback){
var map__66042 = p__66039;
var map__66042__$1 = ((((!((map__66042 == null)))?((((map__66042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66042):map__66042);
var file_msg = map__66042__$1;
var request_url = cljs.core.get.call(null,map__66042__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__66042__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28337__auto___66146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___66146,out){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___66146,out){
return (function (state_66128){
var state_val_66129 = (state_66128[(1)]);
if((state_val_66129 === (1))){
var inst_66102 = cljs.core.seq.call(null,files);
var inst_66103 = cljs.core.first.call(null,inst_66102);
var inst_66104 = cljs.core.next.call(null,inst_66102);
var inst_66105 = files;
var state_66128__$1 = (function (){var statearr_66130 = state_66128;
(statearr_66130[(7)] = inst_66103);

(statearr_66130[(8)] = inst_66105);

(statearr_66130[(9)] = inst_66104);

return statearr_66130;
})();
var statearr_66131_66147 = state_66128__$1;
(statearr_66131_66147[(2)] = null);

(statearr_66131_66147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66129 === (2))){
var inst_66111 = (state_66128[(10)]);
var inst_66105 = (state_66128[(8)]);
var inst_66110 = cljs.core.seq.call(null,inst_66105);
var inst_66111__$1 = cljs.core.first.call(null,inst_66110);
var inst_66112 = cljs.core.next.call(null,inst_66110);
var inst_66113 = (inst_66111__$1 == null);
var inst_66114 = cljs.core.not.call(null,inst_66113);
var state_66128__$1 = (function (){var statearr_66132 = state_66128;
(statearr_66132[(10)] = inst_66111__$1);

(statearr_66132[(11)] = inst_66112);

return statearr_66132;
})();
if(inst_66114){
var statearr_66133_66148 = state_66128__$1;
(statearr_66133_66148[(1)] = (4));

} else {
var statearr_66134_66149 = state_66128__$1;
(statearr_66134_66149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66129 === (3))){
var inst_66126 = (state_66128[(2)]);
var state_66128__$1 = state_66128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66128__$1,inst_66126);
} else {
if((state_val_66129 === (4))){
var inst_66111 = (state_66128[(10)]);
var inst_66116 = figwheel.client.file_reloading.reload_js_file.call(null,inst_66111);
var state_66128__$1 = state_66128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66128__$1,(7),inst_66116);
} else {
if((state_val_66129 === (5))){
var inst_66122 = cljs.core.async.close_BANG_.call(null,out);
var state_66128__$1 = state_66128;
var statearr_66135_66150 = state_66128__$1;
(statearr_66135_66150[(2)] = inst_66122);

(statearr_66135_66150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66129 === (6))){
var inst_66124 = (state_66128[(2)]);
var state_66128__$1 = state_66128;
var statearr_66136_66151 = state_66128__$1;
(statearr_66136_66151[(2)] = inst_66124);

(statearr_66136_66151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66129 === (7))){
var inst_66112 = (state_66128[(11)]);
var inst_66118 = (state_66128[(2)]);
var inst_66119 = cljs.core.async.put_BANG_.call(null,out,inst_66118);
var inst_66105 = inst_66112;
var state_66128__$1 = (function (){var statearr_66137 = state_66128;
(statearr_66137[(12)] = inst_66119);

(statearr_66137[(8)] = inst_66105);

return statearr_66137;
})();
var statearr_66138_66152 = state_66128__$1;
(statearr_66138_66152[(2)] = null);

(statearr_66138_66152[(1)] = (2));


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
});})(c__28337__auto___66146,out))
;
return ((function (switch__28225__auto__,c__28337__auto___66146,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____0 = (function (){
var statearr_66142 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66142[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__);

(statearr_66142[(1)] = (1));

return statearr_66142;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____1 = (function (state_66128){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_66128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e66143){if((e66143 instanceof Object)){
var ex__28229__auto__ = e66143;
var statearr_66144_66153 = state_66128;
(statearr_66144_66153[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66154 = state_66128;
state_66128 = G__66154;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__ = function(state_66128){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____1.call(this,state_66128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___66146,out))
})();
var state__28339__auto__ = (function (){var statearr_66145 = f__28338__auto__.call(null);
(statearr_66145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___66146);

return statearr_66145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___66146,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__66155,opts){
var map__66159 = p__66155;
var map__66159__$1 = ((((!((map__66159 == null)))?((((map__66159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66159):map__66159);
var eval_body__$1 = cljs.core.get.call(null,map__66159__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__66159__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e66161){var e = e66161;
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
return (function (p1__66162_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__66162_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__66171){
var vec__66172 = p__66171;
var k = cljs.core.nth.call(null,vec__66172,(0),null);
var v = cljs.core.nth.call(null,vec__66172,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__66175){
var vec__66176 = p__66175;
var k = cljs.core.nth.call(null,vec__66176,(0),null);
var v = cljs.core.nth.call(null,vec__66176,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__66182,p__66183){
var map__66430 = p__66182;
var map__66430__$1 = ((((!((map__66430 == null)))?((((map__66430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66430):map__66430);
var opts = map__66430__$1;
var before_jsload = cljs.core.get.call(null,map__66430__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__66430__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__66430__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__66431 = p__66183;
var map__66431__$1 = ((((!((map__66431 == null)))?((((map__66431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66431):map__66431);
var msg = map__66431__$1;
var files = cljs.core.get.call(null,map__66431__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__66431__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__66431__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_66584){
var state_val_66585 = (state_66584[(1)]);
if((state_val_66585 === (7))){
var inst_66447 = (state_66584[(7)]);
var inst_66445 = (state_66584[(8)]);
var inst_66448 = (state_66584[(9)]);
var inst_66446 = (state_66584[(10)]);
var inst_66453 = cljs.core._nth.call(null,inst_66446,inst_66448);
var inst_66454 = figwheel.client.file_reloading.eval_body.call(null,inst_66453,opts);
var inst_66455 = (inst_66448 + (1));
var tmp66586 = inst_66447;
var tmp66587 = inst_66445;
var tmp66588 = inst_66446;
var inst_66445__$1 = tmp66587;
var inst_66446__$1 = tmp66588;
var inst_66447__$1 = tmp66586;
var inst_66448__$1 = inst_66455;
var state_66584__$1 = (function (){var statearr_66589 = state_66584;
(statearr_66589[(7)] = inst_66447__$1);

(statearr_66589[(8)] = inst_66445__$1);

(statearr_66589[(9)] = inst_66448__$1);

(statearr_66589[(11)] = inst_66454);

(statearr_66589[(10)] = inst_66446__$1);

return statearr_66589;
})();
var statearr_66590_66676 = state_66584__$1;
(statearr_66590_66676[(2)] = null);

(statearr_66590_66676[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (20))){
var inst_66488 = (state_66584[(12)]);
var inst_66496 = figwheel.client.file_reloading.sort_files.call(null,inst_66488);
var state_66584__$1 = state_66584;
var statearr_66591_66677 = state_66584__$1;
(statearr_66591_66677[(2)] = inst_66496);

(statearr_66591_66677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (27))){
var state_66584__$1 = state_66584;
var statearr_66592_66678 = state_66584__$1;
(statearr_66592_66678[(2)] = null);

(statearr_66592_66678[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (1))){
var inst_66437 = (state_66584[(13)]);
var inst_66434 = before_jsload.call(null,files);
var inst_66435 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_66436 = (function (){return ((function (inst_66437,inst_66434,inst_66435,state_val_66585,c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__66179_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__66179_SHARP_);
});
;})(inst_66437,inst_66434,inst_66435,state_val_66585,c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66437__$1 = cljs.core.filter.call(null,inst_66436,files);
var inst_66438 = cljs.core.not_empty.call(null,inst_66437__$1);
var state_66584__$1 = (function (){var statearr_66593 = state_66584;
(statearr_66593[(14)] = inst_66434);

(statearr_66593[(15)] = inst_66435);

(statearr_66593[(13)] = inst_66437__$1);

return statearr_66593;
})();
if(cljs.core.truth_(inst_66438)){
var statearr_66594_66679 = state_66584__$1;
(statearr_66594_66679[(1)] = (2));

} else {
var statearr_66595_66680 = state_66584__$1;
(statearr_66595_66680[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (24))){
var state_66584__$1 = state_66584;
var statearr_66596_66681 = state_66584__$1;
(statearr_66596_66681[(2)] = null);

(statearr_66596_66681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (39))){
var inst_66538 = (state_66584[(16)]);
var state_66584__$1 = state_66584;
var statearr_66597_66682 = state_66584__$1;
(statearr_66597_66682[(2)] = inst_66538);

(statearr_66597_66682[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (46))){
var inst_66579 = (state_66584[(2)]);
var state_66584__$1 = state_66584;
var statearr_66598_66683 = state_66584__$1;
(statearr_66598_66683[(2)] = inst_66579);

(statearr_66598_66683[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (4))){
var inst_66482 = (state_66584[(2)]);
var inst_66483 = cljs.core.List.EMPTY;
var inst_66484 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_66483);
var inst_66485 = (function (){return ((function (inst_66482,inst_66483,inst_66484,state_val_66585,c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__66180_SHARP_){
var and__25113__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__66180_SHARP_);
if(cljs.core.truth_(and__25113__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__66180_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__66180_SHARP_)));
} else {
return and__25113__auto__;
}
});
;})(inst_66482,inst_66483,inst_66484,state_val_66585,c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66486 = cljs.core.filter.call(null,inst_66485,files);
var inst_66487 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_66488 = cljs.core.concat.call(null,inst_66486,inst_66487);
var state_66584__$1 = (function (){var statearr_66599 = state_66584;
(statearr_66599[(17)] = inst_66484);

(statearr_66599[(12)] = inst_66488);

(statearr_66599[(18)] = inst_66482);

return statearr_66599;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_66600_66684 = state_66584__$1;
(statearr_66600_66684[(1)] = (16));

} else {
var statearr_66601_66685 = state_66584__$1;
(statearr_66601_66685[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (15))){
var inst_66472 = (state_66584[(2)]);
var state_66584__$1 = state_66584;
var statearr_66602_66686 = state_66584__$1;
(statearr_66602_66686[(2)] = inst_66472);

(statearr_66602_66686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (21))){
var inst_66498 = (state_66584[(19)]);
var inst_66498__$1 = (state_66584[(2)]);
var inst_66499 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_66498__$1);
var state_66584__$1 = (function (){var statearr_66603 = state_66584;
(statearr_66603[(19)] = inst_66498__$1);

return statearr_66603;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66584__$1,(22),inst_66499);
} else {
if((state_val_66585 === (31))){
var inst_66582 = (state_66584[(2)]);
var state_66584__$1 = state_66584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66584__$1,inst_66582);
} else {
if((state_val_66585 === (32))){
var inst_66538 = (state_66584[(16)]);
var inst_66543 = inst_66538.cljs$lang$protocol_mask$partition0$;
var inst_66544 = (inst_66543 & (64));
var inst_66545 = inst_66538.cljs$core$ISeq$;
var inst_66546 = (inst_66544) || (inst_66545);
var state_66584__$1 = state_66584;
if(cljs.core.truth_(inst_66546)){
var statearr_66604_66687 = state_66584__$1;
(statearr_66604_66687[(1)] = (35));

} else {
var statearr_66605_66688 = state_66584__$1;
(statearr_66605_66688[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (40))){
var inst_66559 = (state_66584[(20)]);
var inst_66558 = (state_66584[(2)]);
var inst_66559__$1 = cljs.core.get.call(null,inst_66558,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_66560 = cljs.core.get.call(null,inst_66558,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_66561 = cljs.core.not_empty.call(null,inst_66559__$1);
var state_66584__$1 = (function (){var statearr_66606 = state_66584;
(statearr_66606[(20)] = inst_66559__$1);

(statearr_66606[(21)] = inst_66560);

return statearr_66606;
})();
if(cljs.core.truth_(inst_66561)){
var statearr_66607_66689 = state_66584__$1;
(statearr_66607_66689[(1)] = (41));

} else {
var statearr_66608_66690 = state_66584__$1;
(statearr_66608_66690[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (33))){
var state_66584__$1 = state_66584;
var statearr_66609_66691 = state_66584__$1;
(statearr_66609_66691[(2)] = false);

(statearr_66609_66691[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (13))){
var inst_66458 = (state_66584[(22)]);
var inst_66462 = cljs.core.chunk_first.call(null,inst_66458);
var inst_66463 = cljs.core.chunk_rest.call(null,inst_66458);
var inst_66464 = cljs.core.count.call(null,inst_66462);
var inst_66445 = inst_66463;
var inst_66446 = inst_66462;
var inst_66447 = inst_66464;
var inst_66448 = (0);
var state_66584__$1 = (function (){var statearr_66610 = state_66584;
(statearr_66610[(7)] = inst_66447);

(statearr_66610[(8)] = inst_66445);

(statearr_66610[(9)] = inst_66448);

(statearr_66610[(10)] = inst_66446);

return statearr_66610;
})();
var statearr_66611_66692 = state_66584__$1;
(statearr_66611_66692[(2)] = null);

(statearr_66611_66692[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (22))){
var inst_66498 = (state_66584[(19)]);
var inst_66502 = (state_66584[(23)]);
var inst_66501 = (state_66584[(24)]);
var inst_66506 = (state_66584[(25)]);
var inst_66501__$1 = (state_66584[(2)]);
var inst_66502__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_66501__$1);
var inst_66503 = (function (){var all_files = inst_66498;
var res_SINGLEQUOTE_ = inst_66501__$1;
var res = inst_66502__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_66498,inst_66502,inst_66501,inst_66506,inst_66501__$1,inst_66502__$1,state_val_66585,c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__66181_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__66181_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_66498,inst_66502,inst_66501,inst_66506,inst_66501__$1,inst_66502__$1,state_val_66585,c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66504 = cljs.core.filter.call(null,inst_66503,inst_66501__$1);
var inst_66505 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_66506__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_66505);
var inst_66507 = cljs.core.not_empty.call(null,inst_66506__$1);
var state_66584__$1 = (function (){var statearr_66612 = state_66584;
(statearr_66612[(23)] = inst_66502__$1);

(statearr_66612[(26)] = inst_66504);

(statearr_66612[(24)] = inst_66501__$1);

(statearr_66612[(25)] = inst_66506__$1);

return statearr_66612;
})();
if(cljs.core.truth_(inst_66507)){
var statearr_66613_66693 = state_66584__$1;
(statearr_66613_66693[(1)] = (23));

} else {
var statearr_66614_66694 = state_66584__$1;
(statearr_66614_66694[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (36))){
var state_66584__$1 = state_66584;
var statearr_66615_66695 = state_66584__$1;
(statearr_66615_66695[(2)] = false);

(statearr_66615_66695[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (41))){
var inst_66559 = (state_66584[(20)]);
var inst_66563 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_66564 = cljs.core.map.call(null,inst_66563,inst_66559);
var inst_66565 = cljs.core.pr_str.call(null,inst_66564);
var inst_66566 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_66565)].join('');
var inst_66567 = figwheel.client.utils.log.call(null,inst_66566);
var state_66584__$1 = state_66584;
var statearr_66616_66696 = state_66584__$1;
(statearr_66616_66696[(2)] = inst_66567);

(statearr_66616_66696[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (43))){
var inst_66560 = (state_66584[(21)]);
var inst_66570 = (state_66584[(2)]);
var inst_66571 = cljs.core.not_empty.call(null,inst_66560);
var state_66584__$1 = (function (){var statearr_66617 = state_66584;
(statearr_66617[(27)] = inst_66570);

return statearr_66617;
})();
if(cljs.core.truth_(inst_66571)){
var statearr_66618_66697 = state_66584__$1;
(statearr_66618_66697[(1)] = (44));

} else {
var statearr_66619_66698 = state_66584__$1;
(statearr_66619_66698[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (29))){
var inst_66498 = (state_66584[(19)]);
var inst_66502 = (state_66584[(23)]);
var inst_66538 = (state_66584[(16)]);
var inst_66504 = (state_66584[(26)]);
var inst_66501 = (state_66584[(24)]);
var inst_66506 = (state_66584[(25)]);
var inst_66534 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_66537 = (function (){var all_files = inst_66498;
var res_SINGLEQUOTE_ = inst_66501;
var res = inst_66502;
var files_not_loaded = inst_66504;
var dependencies_that_loaded = inst_66506;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66498,inst_66502,inst_66538,inst_66504,inst_66501,inst_66506,inst_66534,state_val_66585,c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66536){
var map__66620 = p__66536;
var map__66620__$1 = ((((!((map__66620 == null)))?((((map__66620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66620):map__66620);
var namespace = cljs.core.get.call(null,map__66620__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66498,inst_66502,inst_66538,inst_66504,inst_66501,inst_66506,inst_66534,state_val_66585,c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66538__$1 = cljs.core.group_by.call(null,inst_66537,inst_66504);
var inst_66540 = (inst_66538__$1 == null);
var inst_66541 = cljs.core.not.call(null,inst_66540);
var state_66584__$1 = (function (){var statearr_66622 = state_66584;
(statearr_66622[(16)] = inst_66538__$1);

(statearr_66622[(28)] = inst_66534);

return statearr_66622;
})();
if(inst_66541){
var statearr_66623_66699 = state_66584__$1;
(statearr_66623_66699[(1)] = (32));

} else {
var statearr_66624_66700 = state_66584__$1;
(statearr_66624_66700[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (44))){
var inst_66560 = (state_66584[(21)]);
var inst_66573 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_66560);
var inst_66574 = cljs.core.pr_str.call(null,inst_66573);
var inst_66575 = [cljs.core.str("not required: "),cljs.core.str(inst_66574)].join('');
var inst_66576 = figwheel.client.utils.log.call(null,inst_66575);
var state_66584__$1 = state_66584;
var statearr_66625_66701 = state_66584__$1;
(statearr_66625_66701[(2)] = inst_66576);

(statearr_66625_66701[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (6))){
var inst_66479 = (state_66584[(2)]);
var state_66584__$1 = state_66584;
var statearr_66626_66702 = state_66584__$1;
(statearr_66626_66702[(2)] = inst_66479);

(statearr_66626_66702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (28))){
var inst_66504 = (state_66584[(26)]);
var inst_66531 = (state_66584[(2)]);
var inst_66532 = cljs.core.not_empty.call(null,inst_66504);
var state_66584__$1 = (function (){var statearr_66627 = state_66584;
(statearr_66627[(29)] = inst_66531);

return statearr_66627;
})();
if(cljs.core.truth_(inst_66532)){
var statearr_66628_66703 = state_66584__$1;
(statearr_66628_66703[(1)] = (29));

} else {
var statearr_66629_66704 = state_66584__$1;
(statearr_66629_66704[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (25))){
var inst_66502 = (state_66584[(23)]);
var inst_66518 = (state_66584[(2)]);
var inst_66519 = cljs.core.not_empty.call(null,inst_66502);
var state_66584__$1 = (function (){var statearr_66630 = state_66584;
(statearr_66630[(30)] = inst_66518);

return statearr_66630;
})();
if(cljs.core.truth_(inst_66519)){
var statearr_66631_66705 = state_66584__$1;
(statearr_66631_66705[(1)] = (26));

} else {
var statearr_66632_66706 = state_66584__$1;
(statearr_66632_66706[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (34))){
var inst_66553 = (state_66584[(2)]);
var state_66584__$1 = state_66584;
if(cljs.core.truth_(inst_66553)){
var statearr_66633_66707 = state_66584__$1;
(statearr_66633_66707[(1)] = (38));

} else {
var statearr_66634_66708 = state_66584__$1;
(statearr_66634_66708[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (17))){
var state_66584__$1 = state_66584;
var statearr_66635_66709 = state_66584__$1;
(statearr_66635_66709[(2)] = recompile_dependents);

(statearr_66635_66709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (3))){
var state_66584__$1 = state_66584;
var statearr_66636_66710 = state_66584__$1;
(statearr_66636_66710[(2)] = null);

(statearr_66636_66710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (12))){
var inst_66475 = (state_66584[(2)]);
var state_66584__$1 = state_66584;
var statearr_66637_66711 = state_66584__$1;
(statearr_66637_66711[(2)] = inst_66475);

(statearr_66637_66711[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (2))){
var inst_66437 = (state_66584[(13)]);
var inst_66444 = cljs.core.seq.call(null,inst_66437);
var inst_66445 = inst_66444;
var inst_66446 = null;
var inst_66447 = (0);
var inst_66448 = (0);
var state_66584__$1 = (function (){var statearr_66638 = state_66584;
(statearr_66638[(7)] = inst_66447);

(statearr_66638[(8)] = inst_66445);

(statearr_66638[(9)] = inst_66448);

(statearr_66638[(10)] = inst_66446);

return statearr_66638;
})();
var statearr_66639_66712 = state_66584__$1;
(statearr_66639_66712[(2)] = null);

(statearr_66639_66712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (23))){
var inst_66498 = (state_66584[(19)]);
var inst_66502 = (state_66584[(23)]);
var inst_66504 = (state_66584[(26)]);
var inst_66501 = (state_66584[(24)]);
var inst_66506 = (state_66584[(25)]);
var inst_66509 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_66511 = (function (){var all_files = inst_66498;
var res_SINGLEQUOTE_ = inst_66501;
var res = inst_66502;
var files_not_loaded = inst_66504;
var dependencies_that_loaded = inst_66506;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66498,inst_66502,inst_66504,inst_66501,inst_66506,inst_66509,state_val_66585,c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66510){
var map__66640 = p__66510;
var map__66640__$1 = ((((!((map__66640 == null)))?((((map__66640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66640):map__66640);
var request_url = cljs.core.get.call(null,map__66640__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66498,inst_66502,inst_66504,inst_66501,inst_66506,inst_66509,state_val_66585,c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66512 = cljs.core.reverse.call(null,inst_66506);
var inst_66513 = cljs.core.map.call(null,inst_66511,inst_66512);
var inst_66514 = cljs.core.pr_str.call(null,inst_66513);
var inst_66515 = figwheel.client.utils.log.call(null,inst_66514);
var state_66584__$1 = (function (){var statearr_66642 = state_66584;
(statearr_66642[(31)] = inst_66509);

return statearr_66642;
})();
var statearr_66643_66713 = state_66584__$1;
(statearr_66643_66713[(2)] = inst_66515);

(statearr_66643_66713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (35))){
var state_66584__$1 = state_66584;
var statearr_66644_66714 = state_66584__$1;
(statearr_66644_66714[(2)] = true);

(statearr_66644_66714[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (19))){
var inst_66488 = (state_66584[(12)]);
var inst_66494 = figwheel.client.file_reloading.expand_files.call(null,inst_66488);
var state_66584__$1 = state_66584;
var statearr_66645_66715 = state_66584__$1;
(statearr_66645_66715[(2)] = inst_66494);

(statearr_66645_66715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (11))){
var state_66584__$1 = state_66584;
var statearr_66646_66716 = state_66584__$1;
(statearr_66646_66716[(2)] = null);

(statearr_66646_66716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (9))){
var inst_66477 = (state_66584[(2)]);
var state_66584__$1 = state_66584;
var statearr_66647_66717 = state_66584__$1;
(statearr_66647_66717[(2)] = inst_66477);

(statearr_66647_66717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (5))){
var inst_66447 = (state_66584[(7)]);
var inst_66448 = (state_66584[(9)]);
var inst_66450 = (inst_66448 < inst_66447);
var inst_66451 = inst_66450;
var state_66584__$1 = state_66584;
if(cljs.core.truth_(inst_66451)){
var statearr_66648_66718 = state_66584__$1;
(statearr_66648_66718[(1)] = (7));

} else {
var statearr_66649_66719 = state_66584__$1;
(statearr_66649_66719[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (14))){
var inst_66458 = (state_66584[(22)]);
var inst_66467 = cljs.core.first.call(null,inst_66458);
var inst_66468 = figwheel.client.file_reloading.eval_body.call(null,inst_66467,opts);
var inst_66469 = cljs.core.next.call(null,inst_66458);
var inst_66445 = inst_66469;
var inst_66446 = null;
var inst_66447 = (0);
var inst_66448 = (0);
var state_66584__$1 = (function (){var statearr_66650 = state_66584;
(statearr_66650[(7)] = inst_66447);

(statearr_66650[(8)] = inst_66445);

(statearr_66650[(9)] = inst_66448);

(statearr_66650[(32)] = inst_66468);

(statearr_66650[(10)] = inst_66446);

return statearr_66650;
})();
var statearr_66651_66720 = state_66584__$1;
(statearr_66651_66720[(2)] = null);

(statearr_66651_66720[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (45))){
var state_66584__$1 = state_66584;
var statearr_66652_66721 = state_66584__$1;
(statearr_66652_66721[(2)] = null);

(statearr_66652_66721[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (26))){
var inst_66498 = (state_66584[(19)]);
var inst_66502 = (state_66584[(23)]);
var inst_66504 = (state_66584[(26)]);
var inst_66501 = (state_66584[(24)]);
var inst_66506 = (state_66584[(25)]);
var inst_66521 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_66523 = (function (){var all_files = inst_66498;
var res_SINGLEQUOTE_ = inst_66501;
var res = inst_66502;
var files_not_loaded = inst_66504;
var dependencies_that_loaded = inst_66506;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66498,inst_66502,inst_66504,inst_66501,inst_66506,inst_66521,state_val_66585,c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66522){
var map__66653 = p__66522;
var map__66653__$1 = ((((!((map__66653 == null)))?((((map__66653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66653):map__66653);
var namespace = cljs.core.get.call(null,map__66653__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__66653__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66498,inst_66502,inst_66504,inst_66501,inst_66506,inst_66521,state_val_66585,c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66524 = cljs.core.map.call(null,inst_66523,inst_66502);
var inst_66525 = cljs.core.pr_str.call(null,inst_66524);
var inst_66526 = figwheel.client.utils.log.call(null,inst_66525);
var inst_66527 = (function (){var all_files = inst_66498;
var res_SINGLEQUOTE_ = inst_66501;
var res = inst_66502;
var files_not_loaded = inst_66504;
var dependencies_that_loaded = inst_66506;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66498,inst_66502,inst_66504,inst_66501,inst_66506,inst_66521,inst_66523,inst_66524,inst_66525,inst_66526,state_val_66585,c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66498,inst_66502,inst_66504,inst_66501,inst_66506,inst_66521,inst_66523,inst_66524,inst_66525,inst_66526,state_val_66585,c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66528 = setTimeout(inst_66527,(10));
var state_66584__$1 = (function (){var statearr_66655 = state_66584;
(statearr_66655[(33)] = inst_66521);

(statearr_66655[(34)] = inst_66526);

return statearr_66655;
})();
var statearr_66656_66722 = state_66584__$1;
(statearr_66656_66722[(2)] = inst_66528);

(statearr_66656_66722[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (16))){
var state_66584__$1 = state_66584;
var statearr_66657_66723 = state_66584__$1;
(statearr_66657_66723[(2)] = reload_dependents);

(statearr_66657_66723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (38))){
var inst_66538 = (state_66584[(16)]);
var inst_66555 = cljs.core.apply.call(null,cljs.core.hash_map,inst_66538);
var state_66584__$1 = state_66584;
var statearr_66658_66724 = state_66584__$1;
(statearr_66658_66724[(2)] = inst_66555);

(statearr_66658_66724[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (30))){
var state_66584__$1 = state_66584;
var statearr_66659_66725 = state_66584__$1;
(statearr_66659_66725[(2)] = null);

(statearr_66659_66725[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (10))){
var inst_66458 = (state_66584[(22)]);
var inst_66460 = cljs.core.chunked_seq_QMARK_.call(null,inst_66458);
var state_66584__$1 = state_66584;
if(inst_66460){
var statearr_66660_66726 = state_66584__$1;
(statearr_66660_66726[(1)] = (13));

} else {
var statearr_66661_66727 = state_66584__$1;
(statearr_66661_66727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (18))){
var inst_66492 = (state_66584[(2)]);
var state_66584__$1 = state_66584;
if(cljs.core.truth_(inst_66492)){
var statearr_66662_66728 = state_66584__$1;
(statearr_66662_66728[(1)] = (19));

} else {
var statearr_66663_66729 = state_66584__$1;
(statearr_66663_66729[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (42))){
var state_66584__$1 = state_66584;
var statearr_66664_66730 = state_66584__$1;
(statearr_66664_66730[(2)] = null);

(statearr_66664_66730[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (37))){
var inst_66550 = (state_66584[(2)]);
var state_66584__$1 = state_66584;
var statearr_66665_66731 = state_66584__$1;
(statearr_66665_66731[(2)] = inst_66550);

(statearr_66665_66731[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66585 === (8))){
var inst_66445 = (state_66584[(8)]);
var inst_66458 = (state_66584[(22)]);
var inst_66458__$1 = cljs.core.seq.call(null,inst_66445);
var state_66584__$1 = (function (){var statearr_66666 = state_66584;
(statearr_66666[(22)] = inst_66458__$1);

return statearr_66666;
})();
if(inst_66458__$1){
var statearr_66667_66732 = state_66584__$1;
(statearr_66667_66732[(1)] = (10));

} else {
var statearr_66668_66733 = state_66584__$1;
(statearr_66668_66733[(1)] = (11));

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
});})(c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28225__auto__,c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____0 = (function (){
var statearr_66672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66672[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__);

(statearr_66672[(1)] = (1));

return statearr_66672;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____1 = (function (state_66584){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_66584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e66673){if((e66673 instanceof Object)){
var ex__28229__auto__ = e66673;
var statearr_66674_66734 = state_66584;
(statearr_66674_66734[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66735 = state_66584;
state_66584 = G__66735;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__ = function(state_66584){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____1.call(this,state_66584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28339__auto__ = (function (){var statearr_66675 = f__28338__auto__.call(null);
(statearr_66675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto__);

return statearr_66675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto__,map__66430,map__66430__$1,opts,before_jsload,on_jsload,reload_dependents,map__66431,map__66431__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28337__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__66738,link){
var map__66741 = p__66738;
var map__66741__$1 = ((((!((map__66741 == null)))?((((map__66741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66741):map__66741);
var file = cljs.core.get.call(null,map__66741__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__66741,map__66741__$1,file){
return (function (p1__66736_SHARP_,p2__66737_SHARP_){
if(cljs.core._EQ_.call(null,p1__66736_SHARP_,p2__66737_SHARP_)){
return p1__66736_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__66741,map__66741__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__66747){
var map__66748 = p__66747;
var map__66748__$1 = ((((!((map__66748 == null)))?((((map__66748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66748):map__66748);
var match_length = cljs.core.get.call(null,map__66748__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__66748__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__66743_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__66743_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__66750_SHARP_,p2__66751_SHARP_){
return cljs.core.assoc.call(null,p1__66750_SHARP_,cljs.core.get.call(null,p2__66751_SHARP_,key),p2__66751_SHARP_);
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
var loaded_f_datas_66752 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_66752);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_66752);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__66753,p__66754){
var map__66759 = p__66753;
var map__66759__$1 = ((((!((map__66759 == null)))?((((map__66759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66759):map__66759);
var on_cssload = cljs.core.get.call(null,map__66759__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__66760 = p__66754;
var map__66760__$1 = ((((!((map__66760 == null)))?((((map__66760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66760):map__66760);
var files_msg = map__66760__$1;
var files = cljs.core.get.call(null,map__66760__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1488396406521