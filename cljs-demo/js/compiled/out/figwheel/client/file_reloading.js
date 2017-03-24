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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33614_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33614_SHARP_));
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
var seq__33619 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33620 = null;
var count__33621 = (0);
var i__33622 = (0);
while(true){
if((i__33622 < count__33621)){
var n = cljs.core._nth.call(null,chunk__33620,i__33622);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33623 = seq__33619;
var G__33624 = chunk__33620;
var G__33625 = count__33621;
var G__33626 = (i__33622 + (1));
seq__33619 = G__33623;
chunk__33620 = G__33624;
count__33621 = G__33625;
i__33622 = G__33626;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33619);
if(temp__4657__auto__){
var seq__33619__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33619__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__33619__$1);
var G__33627 = cljs.core.chunk_rest.call(null,seq__33619__$1);
var G__33628 = c__25936__auto__;
var G__33629 = cljs.core.count.call(null,c__25936__auto__);
var G__33630 = (0);
seq__33619 = G__33627;
chunk__33620 = G__33628;
count__33621 = G__33629;
i__33622 = G__33630;
continue;
} else {
var n = cljs.core.first.call(null,seq__33619__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33631 = cljs.core.next.call(null,seq__33619__$1);
var G__33632 = null;
var G__33633 = (0);
var G__33634 = (0);
seq__33619 = G__33631;
chunk__33620 = G__33632;
count__33621 = G__33633;
i__33622 = G__33634;
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

var seq__33685_33696 = cljs.core.seq.call(null,deps);
var chunk__33686_33697 = null;
var count__33687_33698 = (0);
var i__33688_33699 = (0);
while(true){
if((i__33688_33699 < count__33687_33698)){
var dep_33700 = cljs.core._nth.call(null,chunk__33686_33697,i__33688_33699);
topo_sort_helper_STAR_.call(null,dep_33700,(depth + (1)),state);

var G__33701 = seq__33685_33696;
var G__33702 = chunk__33686_33697;
var G__33703 = count__33687_33698;
var G__33704 = (i__33688_33699 + (1));
seq__33685_33696 = G__33701;
chunk__33686_33697 = G__33702;
count__33687_33698 = G__33703;
i__33688_33699 = G__33704;
continue;
} else {
var temp__4657__auto___33705 = cljs.core.seq.call(null,seq__33685_33696);
if(temp__4657__auto___33705){
var seq__33685_33706__$1 = temp__4657__auto___33705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33685_33706__$1)){
var c__25936__auto___33707 = cljs.core.chunk_first.call(null,seq__33685_33706__$1);
var G__33708 = cljs.core.chunk_rest.call(null,seq__33685_33706__$1);
var G__33709 = c__25936__auto___33707;
var G__33710 = cljs.core.count.call(null,c__25936__auto___33707);
var G__33711 = (0);
seq__33685_33696 = G__33708;
chunk__33686_33697 = G__33709;
count__33687_33698 = G__33710;
i__33688_33699 = G__33711;
continue;
} else {
var dep_33712 = cljs.core.first.call(null,seq__33685_33706__$1);
topo_sort_helper_STAR_.call(null,dep_33712,(depth + (1)),state);

var G__33713 = cljs.core.next.call(null,seq__33685_33706__$1);
var G__33714 = null;
var G__33715 = (0);
var G__33716 = (0);
seq__33685_33696 = G__33713;
chunk__33686_33697 = G__33714;
count__33687_33698 = G__33715;
i__33688_33699 = G__33716;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33689){
var vec__33693 = p__33689;
var seq__33694 = cljs.core.seq.call(null,vec__33693);
var first__33695 = cljs.core.first.call(null,seq__33694);
var seq__33694__$1 = cljs.core.next.call(null,seq__33694);
var x = first__33695;
var xs = seq__33694__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33693,seq__33694,first__33695,seq__33694__$1,x,xs,get_deps__$1){
return (function (p1__33635_SHARP_){
return clojure.set.difference.call(null,p1__33635_SHARP_,x);
});})(vec__33693,seq__33694,first__33695,seq__33694__$1,x,xs,get_deps__$1))
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
var seq__33729 = cljs.core.seq.call(null,provides);
var chunk__33730 = null;
var count__33731 = (0);
var i__33732 = (0);
while(true){
if((i__33732 < count__33731)){
var prov = cljs.core._nth.call(null,chunk__33730,i__33732);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33733_33741 = cljs.core.seq.call(null,requires);
var chunk__33734_33742 = null;
var count__33735_33743 = (0);
var i__33736_33744 = (0);
while(true){
if((i__33736_33744 < count__33735_33743)){
var req_33745 = cljs.core._nth.call(null,chunk__33734_33742,i__33736_33744);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33745,prov);

var G__33746 = seq__33733_33741;
var G__33747 = chunk__33734_33742;
var G__33748 = count__33735_33743;
var G__33749 = (i__33736_33744 + (1));
seq__33733_33741 = G__33746;
chunk__33734_33742 = G__33747;
count__33735_33743 = G__33748;
i__33736_33744 = G__33749;
continue;
} else {
var temp__4657__auto___33750 = cljs.core.seq.call(null,seq__33733_33741);
if(temp__4657__auto___33750){
var seq__33733_33751__$1 = temp__4657__auto___33750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33733_33751__$1)){
var c__25936__auto___33752 = cljs.core.chunk_first.call(null,seq__33733_33751__$1);
var G__33753 = cljs.core.chunk_rest.call(null,seq__33733_33751__$1);
var G__33754 = c__25936__auto___33752;
var G__33755 = cljs.core.count.call(null,c__25936__auto___33752);
var G__33756 = (0);
seq__33733_33741 = G__33753;
chunk__33734_33742 = G__33754;
count__33735_33743 = G__33755;
i__33736_33744 = G__33756;
continue;
} else {
var req_33757 = cljs.core.first.call(null,seq__33733_33751__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33757,prov);

var G__33758 = cljs.core.next.call(null,seq__33733_33751__$1);
var G__33759 = null;
var G__33760 = (0);
var G__33761 = (0);
seq__33733_33741 = G__33758;
chunk__33734_33742 = G__33759;
count__33735_33743 = G__33760;
i__33736_33744 = G__33761;
continue;
}
} else {
}
}
break;
}

var G__33762 = seq__33729;
var G__33763 = chunk__33730;
var G__33764 = count__33731;
var G__33765 = (i__33732 + (1));
seq__33729 = G__33762;
chunk__33730 = G__33763;
count__33731 = G__33764;
i__33732 = G__33765;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33729);
if(temp__4657__auto__){
var seq__33729__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33729__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__33729__$1);
var G__33766 = cljs.core.chunk_rest.call(null,seq__33729__$1);
var G__33767 = c__25936__auto__;
var G__33768 = cljs.core.count.call(null,c__25936__auto__);
var G__33769 = (0);
seq__33729 = G__33766;
chunk__33730 = G__33767;
count__33731 = G__33768;
i__33732 = G__33769;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33729__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33737_33770 = cljs.core.seq.call(null,requires);
var chunk__33738_33771 = null;
var count__33739_33772 = (0);
var i__33740_33773 = (0);
while(true){
if((i__33740_33773 < count__33739_33772)){
var req_33774 = cljs.core._nth.call(null,chunk__33738_33771,i__33740_33773);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33774,prov);

var G__33775 = seq__33737_33770;
var G__33776 = chunk__33738_33771;
var G__33777 = count__33739_33772;
var G__33778 = (i__33740_33773 + (1));
seq__33737_33770 = G__33775;
chunk__33738_33771 = G__33776;
count__33739_33772 = G__33777;
i__33740_33773 = G__33778;
continue;
} else {
var temp__4657__auto___33779__$1 = cljs.core.seq.call(null,seq__33737_33770);
if(temp__4657__auto___33779__$1){
var seq__33737_33780__$1 = temp__4657__auto___33779__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33737_33780__$1)){
var c__25936__auto___33781 = cljs.core.chunk_first.call(null,seq__33737_33780__$1);
var G__33782 = cljs.core.chunk_rest.call(null,seq__33737_33780__$1);
var G__33783 = c__25936__auto___33781;
var G__33784 = cljs.core.count.call(null,c__25936__auto___33781);
var G__33785 = (0);
seq__33737_33770 = G__33782;
chunk__33738_33771 = G__33783;
count__33739_33772 = G__33784;
i__33740_33773 = G__33785;
continue;
} else {
var req_33786 = cljs.core.first.call(null,seq__33737_33780__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33786,prov);

var G__33787 = cljs.core.next.call(null,seq__33737_33780__$1);
var G__33788 = null;
var G__33789 = (0);
var G__33790 = (0);
seq__33737_33770 = G__33787;
chunk__33738_33771 = G__33788;
count__33739_33772 = G__33789;
i__33740_33773 = G__33790;
continue;
}
} else {
}
}
break;
}

var G__33791 = cljs.core.next.call(null,seq__33729__$1);
var G__33792 = null;
var G__33793 = (0);
var G__33794 = (0);
seq__33729 = G__33791;
chunk__33730 = G__33792;
count__33731 = G__33793;
i__33732 = G__33794;
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
var seq__33799_33803 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33800_33804 = null;
var count__33801_33805 = (0);
var i__33802_33806 = (0);
while(true){
if((i__33802_33806 < count__33801_33805)){
var ns_33807 = cljs.core._nth.call(null,chunk__33800_33804,i__33802_33806);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33807);

var G__33808 = seq__33799_33803;
var G__33809 = chunk__33800_33804;
var G__33810 = count__33801_33805;
var G__33811 = (i__33802_33806 + (1));
seq__33799_33803 = G__33808;
chunk__33800_33804 = G__33809;
count__33801_33805 = G__33810;
i__33802_33806 = G__33811;
continue;
} else {
var temp__4657__auto___33812 = cljs.core.seq.call(null,seq__33799_33803);
if(temp__4657__auto___33812){
var seq__33799_33813__$1 = temp__4657__auto___33812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33799_33813__$1)){
var c__25936__auto___33814 = cljs.core.chunk_first.call(null,seq__33799_33813__$1);
var G__33815 = cljs.core.chunk_rest.call(null,seq__33799_33813__$1);
var G__33816 = c__25936__auto___33814;
var G__33817 = cljs.core.count.call(null,c__25936__auto___33814);
var G__33818 = (0);
seq__33799_33803 = G__33815;
chunk__33800_33804 = G__33816;
count__33801_33805 = G__33817;
i__33802_33806 = G__33818;
continue;
} else {
var ns_33819 = cljs.core.first.call(null,seq__33799_33813__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33819);

var G__33820 = cljs.core.next.call(null,seq__33799_33813__$1);
var G__33821 = null;
var G__33822 = (0);
var G__33823 = (0);
seq__33799_33803 = G__33820;
chunk__33800_33804 = G__33821;
count__33801_33805 = G__33822;
i__33802_33806 = G__33823;
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
var G__33824__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33825__i = 0, G__33825__a = new Array(arguments.length -  0);
while (G__33825__i < G__33825__a.length) {G__33825__a[G__33825__i] = arguments[G__33825__i + 0]; ++G__33825__i;}
  args = new cljs.core.IndexedSeq(G__33825__a,0);
} 
return G__33824__delegate.call(this,args);};
G__33824.cljs$lang$maxFixedArity = 0;
G__33824.cljs$lang$applyTo = (function (arglist__33826){
var args = cljs.core.seq(arglist__33826);
return G__33824__delegate(args);
});
G__33824.cljs$core$IFn$_invoke$arity$variadic = G__33824__delegate;
return G__33824;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33827 = cljs.core._EQ_;
var expr__33828 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33827.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33828))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33827,expr__33828){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33827,expr__33828))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33827,expr__33828){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33830){if((e33830 instanceof Error)){
var e = e33830;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33830;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33827,expr__33828))
} else {
if(cljs.core.truth_(pred__33827.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33828))){
return ((function (pred__33827,expr__33828){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__33827,expr__33828){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__33827,expr__33828))
);

return deferred.addErrback(((function (deferred,pred__33827,expr__33828){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__33827,expr__33828))
);
});
;})(pred__33827,expr__33828))
} else {
if(cljs.core.truth_(pred__33827.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33828))){
return ((function (pred__33827,expr__33828){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33831){if((e33831 instanceof Error)){
var e = e33831;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33831;

}
}})());
});
;})(pred__33827,expr__33828))
} else {
return ((function (pred__33827,expr__33828){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33827,expr__33828))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33832,callback){
var map__33835 = p__33832;
var map__33835__$1 = ((((!((map__33835 == null)))?((((map__33835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33835):map__33835);
var file_msg = map__33835__$1;
var request_url = cljs.core.get.call(null,map__33835__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33835,map__33835__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33835,map__33835__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28271__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28271__auto__){
return (function (){
var f__28272__auto__ = (function (){var switch__28250__auto__ = ((function (c__28271__auto__){
return (function (state_33859){
var state_val_33860 = (state_33859[(1)]);
if((state_val_33860 === (7))){
var inst_33855 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
var statearr_33861_33881 = state_33859__$1;
(statearr_33861_33881[(2)] = inst_33855);

(statearr_33861_33881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (1))){
var state_33859__$1 = state_33859;
var statearr_33862_33882 = state_33859__$1;
(statearr_33862_33882[(2)] = null);

(statearr_33862_33882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (4))){
var inst_33839 = (state_33859[(7)]);
var inst_33839__$1 = (state_33859[(2)]);
var state_33859__$1 = (function (){var statearr_33863 = state_33859;
(statearr_33863[(7)] = inst_33839__$1);

return statearr_33863;
})();
if(cljs.core.truth_(inst_33839__$1)){
var statearr_33864_33883 = state_33859__$1;
(statearr_33864_33883[(1)] = (5));

} else {
var statearr_33865_33884 = state_33859__$1;
(statearr_33865_33884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (6))){
var state_33859__$1 = state_33859;
var statearr_33866_33885 = state_33859__$1;
(statearr_33866_33885[(2)] = null);

(statearr_33866_33885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (3))){
var inst_33857 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33859__$1,inst_33857);
} else {
if((state_val_33860 === (2))){
var state_33859__$1 = state_33859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33859__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33860 === (11))){
var inst_33851 = (state_33859[(2)]);
var state_33859__$1 = (function (){var statearr_33867 = state_33859;
(statearr_33867[(8)] = inst_33851);

return statearr_33867;
})();
var statearr_33868_33886 = state_33859__$1;
(statearr_33868_33886[(2)] = null);

(statearr_33868_33886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (9))){
var inst_33845 = (state_33859[(9)]);
var inst_33843 = (state_33859[(10)]);
var inst_33847 = inst_33845.call(null,inst_33843);
var state_33859__$1 = state_33859;
var statearr_33869_33887 = state_33859__$1;
(statearr_33869_33887[(2)] = inst_33847);

(statearr_33869_33887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (5))){
var inst_33839 = (state_33859[(7)]);
var inst_33841 = figwheel.client.file_reloading.blocking_load.call(null,inst_33839);
var state_33859__$1 = state_33859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33859__$1,(8),inst_33841);
} else {
if((state_val_33860 === (10))){
var inst_33843 = (state_33859[(10)]);
var inst_33849 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33843);
var state_33859__$1 = state_33859;
var statearr_33870_33888 = state_33859__$1;
(statearr_33870_33888[(2)] = inst_33849);

(statearr_33870_33888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (8))){
var inst_33839 = (state_33859[(7)]);
var inst_33845 = (state_33859[(9)]);
var inst_33843 = (state_33859[(2)]);
var inst_33844 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33845__$1 = cljs.core.get.call(null,inst_33844,inst_33839);
var state_33859__$1 = (function (){var statearr_33871 = state_33859;
(statearr_33871[(9)] = inst_33845__$1);

(statearr_33871[(10)] = inst_33843);

return statearr_33871;
})();
if(cljs.core.truth_(inst_33845__$1)){
var statearr_33872_33889 = state_33859__$1;
(statearr_33872_33889[(1)] = (9));

} else {
var statearr_33873_33890 = state_33859__$1;
(statearr_33873_33890[(1)] = (10));

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
});})(c__28271__auto__))
;
return ((function (switch__28250__auto__,c__28271__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28251__auto__ = null;
var figwheel$client$file_reloading$state_machine__28251__auto____0 = (function (){
var statearr_33877 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33877[(0)] = figwheel$client$file_reloading$state_machine__28251__auto__);

(statearr_33877[(1)] = (1));

return statearr_33877;
});
var figwheel$client$file_reloading$state_machine__28251__auto____1 = (function (state_33859){
while(true){
var ret_value__28252__auto__ = (function (){try{while(true){
var result__28253__auto__ = switch__28250__auto__.call(null,state_33859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28253__auto__;
}
break;
}
}catch (e33878){if((e33878 instanceof Object)){
var ex__28254__auto__ = e33878;
var statearr_33879_33891 = state_33859;
(statearr_33879_33891[(5)] = ex__28254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33892 = state_33859;
state_33859 = G__33892;
continue;
} else {
return ret_value__28252__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28251__auto__ = function(state_33859){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28251__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28251__auto____1.call(this,state_33859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28251__auto____0;
figwheel$client$file_reloading$state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28251__auto____1;
return figwheel$client$file_reloading$state_machine__28251__auto__;
})()
;})(switch__28250__auto__,c__28271__auto__))
})();
var state__28273__auto__ = (function (){var statearr_33880 = f__28272__auto__.call(null);
(statearr_33880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28271__auto__);

return statearr_33880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28273__auto__);
});})(c__28271__auto__))
);

return c__28271__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33893,callback){
var map__33896 = p__33893;
var map__33896__$1 = ((((!((map__33896 == null)))?((((map__33896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33896):map__33896);
var file_msg = map__33896__$1;
var namespace = cljs.core.get.call(null,map__33896__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33896,map__33896__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33896,map__33896__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33898){
var map__33901 = p__33898;
var map__33901__$1 = ((((!((map__33901 == null)))?((((map__33901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33901):map__33901);
var file_msg = map__33901__$1;
var namespace = cljs.core.get.call(null,map__33901__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33903){
var map__33906 = p__33903;
var map__33906__$1 = ((((!((map__33906 == null)))?((((map__33906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33906):map__33906);
var file_msg = map__33906__$1;
var namespace = cljs.core.get.call(null,map__33906__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33908,callback){
var map__33911 = p__33908;
var map__33911__$1 = ((((!((map__33911 == null)))?((((map__33911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33911):map__33911);
var file_msg = map__33911__$1;
var request_url = cljs.core.get.call(null,map__33911__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33911__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28271__auto___34015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28271__auto___34015,out){
return (function (){
var f__28272__auto__ = (function (){var switch__28250__auto__ = ((function (c__28271__auto___34015,out){
return (function (state_33997){
var state_val_33998 = (state_33997[(1)]);
if((state_val_33998 === (1))){
var inst_33971 = cljs.core.seq.call(null,files);
var inst_33972 = cljs.core.first.call(null,inst_33971);
var inst_33973 = cljs.core.next.call(null,inst_33971);
var inst_33974 = files;
var state_33997__$1 = (function (){var statearr_33999 = state_33997;
(statearr_33999[(7)] = inst_33973);

(statearr_33999[(8)] = inst_33974);

(statearr_33999[(9)] = inst_33972);

return statearr_33999;
})();
var statearr_34000_34016 = state_33997__$1;
(statearr_34000_34016[(2)] = null);

(statearr_34000_34016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33998 === (2))){
var inst_33974 = (state_33997[(8)]);
var inst_33980 = (state_33997[(10)]);
var inst_33979 = cljs.core.seq.call(null,inst_33974);
var inst_33980__$1 = cljs.core.first.call(null,inst_33979);
var inst_33981 = cljs.core.next.call(null,inst_33979);
var inst_33982 = (inst_33980__$1 == null);
var inst_33983 = cljs.core.not.call(null,inst_33982);
var state_33997__$1 = (function (){var statearr_34001 = state_33997;
(statearr_34001[(11)] = inst_33981);

(statearr_34001[(10)] = inst_33980__$1);

return statearr_34001;
})();
if(inst_33983){
var statearr_34002_34017 = state_33997__$1;
(statearr_34002_34017[(1)] = (4));

} else {
var statearr_34003_34018 = state_33997__$1;
(statearr_34003_34018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33998 === (3))){
var inst_33995 = (state_33997[(2)]);
var state_33997__$1 = state_33997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33997__$1,inst_33995);
} else {
if((state_val_33998 === (4))){
var inst_33980 = (state_33997[(10)]);
var inst_33985 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33980);
var state_33997__$1 = state_33997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33997__$1,(7),inst_33985);
} else {
if((state_val_33998 === (5))){
var inst_33991 = cljs.core.async.close_BANG_.call(null,out);
var state_33997__$1 = state_33997;
var statearr_34004_34019 = state_33997__$1;
(statearr_34004_34019[(2)] = inst_33991);

(statearr_34004_34019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33998 === (6))){
var inst_33993 = (state_33997[(2)]);
var state_33997__$1 = state_33997;
var statearr_34005_34020 = state_33997__$1;
(statearr_34005_34020[(2)] = inst_33993);

(statearr_34005_34020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33998 === (7))){
var inst_33981 = (state_33997[(11)]);
var inst_33987 = (state_33997[(2)]);
var inst_33988 = cljs.core.async.put_BANG_.call(null,out,inst_33987);
var inst_33974 = inst_33981;
var state_33997__$1 = (function (){var statearr_34006 = state_33997;
(statearr_34006[(12)] = inst_33988);

(statearr_34006[(8)] = inst_33974);

return statearr_34006;
})();
var statearr_34007_34021 = state_33997__$1;
(statearr_34007_34021[(2)] = null);

(statearr_34007_34021[(1)] = (2));


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
});})(c__28271__auto___34015,out))
;
return ((function (switch__28250__auto__,c__28271__auto___34015,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28251__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28251__auto____0 = (function (){
var statearr_34011 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34011[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28251__auto__);

(statearr_34011[(1)] = (1));

return statearr_34011;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28251__auto____1 = (function (state_33997){
while(true){
var ret_value__28252__auto__ = (function (){try{while(true){
var result__28253__auto__ = switch__28250__auto__.call(null,state_33997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28253__auto__;
}
break;
}
}catch (e34012){if((e34012 instanceof Object)){
var ex__28254__auto__ = e34012;
var statearr_34013_34022 = state_33997;
(statearr_34013_34022[(5)] = ex__28254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34023 = state_33997;
state_33997 = G__34023;
continue;
} else {
return ret_value__28252__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28251__auto__ = function(state_33997){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28251__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28251__auto____1.call(this,state_33997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28251__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28251__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28251__auto__;
})()
;})(switch__28250__auto__,c__28271__auto___34015,out))
})();
var state__28273__auto__ = (function (){var statearr_34014 = f__28272__auto__.call(null);
(statearr_34014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28271__auto___34015);

return statearr_34014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28273__auto__);
});})(c__28271__auto___34015,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34024,opts){
var map__34028 = p__34024;
var map__34028__$1 = ((((!((map__34028 == null)))?((((map__34028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34028):map__34028);
var eval_body__$1 = cljs.core.get.call(null,map__34028__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34028__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34030){var e = e34030;
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
return (function (p1__34031_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34031_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34040){
var vec__34041 = p__34040;
var k = cljs.core.nth.call(null,vec__34041,(0),null);
var v = cljs.core.nth.call(null,vec__34041,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34044){
var vec__34045 = p__34044;
var k = cljs.core.nth.call(null,vec__34045,(0),null);
var v = cljs.core.nth.call(null,vec__34045,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34051,p__34052){
var map__34299 = p__34051;
var map__34299__$1 = ((((!((map__34299 == null)))?((((map__34299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34299):map__34299);
var opts = map__34299__$1;
var before_jsload = cljs.core.get.call(null,map__34299__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34299__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34299__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34300 = p__34052;
var map__34300__$1 = ((((!((map__34300 == null)))?((((map__34300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34300):map__34300);
var msg = map__34300__$1;
var files = cljs.core.get.call(null,map__34300__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34300__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34300__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28271__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28272__auto__ = (function (){var switch__28250__auto__ = ((function (c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34453){
var state_val_34454 = (state_34453[(1)]);
if((state_val_34454 === (7))){
var inst_34315 = (state_34453[(7)]);
var inst_34317 = (state_34453[(8)]);
var inst_34314 = (state_34453[(9)]);
var inst_34316 = (state_34453[(10)]);
var inst_34322 = cljs.core._nth.call(null,inst_34315,inst_34317);
var inst_34323 = figwheel.client.file_reloading.eval_body.call(null,inst_34322,opts);
var inst_34324 = (inst_34317 + (1));
var tmp34455 = inst_34315;
var tmp34456 = inst_34314;
var tmp34457 = inst_34316;
var inst_34314__$1 = tmp34456;
var inst_34315__$1 = tmp34455;
var inst_34316__$1 = tmp34457;
var inst_34317__$1 = inst_34324;
var state_34453__$1 = (function (){var statearr_34458 = state_34453;
(statearr_34458[(7)] = inst_34315__$1);

(statearr_34458[(8)] = inst_34317__$1);

(statearr_34458[(9)] = inst_34314__$1);

(statearr_34458[(11)] = inst_34323);

(statearr_34458[(10)] = inst_34316__$1);

return statearr_34458;
})();
var statearr_34459_34545 = state_34453__$1;
(statearr_34459_34545[(2)] = null);

(statearr_34459_34545[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (20))){
var inst_34357 = (state_34453[(12)]);
var inst_34365 = figwheel.client.file_reloading.sort_files.call(null,inst_34357);
var state_34453__$1 = state_34453;
var statearr_34460_34546 = state_34453__$1;
(statearr_34460_34546[(2)] = inst_34365);

(statearr_34460_34546[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (27))){
var state_34453__$1 = state_34453;
var statearr_34461_34547 = state_34453__$1;
(statearr_34461_34547[(2)] = null);

(statearr_34461_34547[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (1))){
var inst_34306 = (state_34453[(13)]);
var inst_34303 = before_jsload.call(null,files);
var inst_34304 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34305 = (function (){return ((function (inst_34306,inst_34303,inst_34304,state_val_34454,c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34048_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34048_SHARP_);
});
;})(inst_34306,inst_34303,inst_34304,state_val_34454,c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34306__$1 = cljs.core.filter.call(null,inst_34305,files);
var inst_34307 = cljs.core.not_empty.call(null,inst_34306__$1);
var state_34453__$1 = (function (){var statearr_34462 = state_34453;
(statearr_34462[(13)] = inst_34306__$1);

(statearr_34462[(14)] = inst_34303);

(statearr_34462[(15)] = inst_34304);

return statearr_34462;
})();
if(cljs.core.truth_(inst_34307)){
var statearr_34463_34548 = state_34453__$1;
(statearr_34463_34548[(1)] = (2));

} else {
var statearr_34464_34549 = state_34453__$1;
(statearr_34464_34549[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (24))){
var state_34453__$1 = state_34453;
var statearr_34465_34550 = state_34453__$1;
(statearr_34465_34550[(2)] = null);

(statearr_34465_34550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (39))){
var inst_34407 = (state_34453[(16)]);
var state_34453__$1 = state_34453;
var statearr_34466_34551 = state_34453__$1;
(statearr_34466_34551[(2)] = inst_34407);

(statearr_34466_34551[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (46))){
var inst_34448 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
var statearr_34467_34552 = state_34453__$1;
(statearr_34467_34552[(2)] = inst_34448);

(statearr_34467_34552[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (4))){
var inst_34351 = (state_34453[(2)]);
var inst_34352 = cljs.core.List.EMPTY;
var inst_34353 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34352);
var inst_34354 = (function (){return ((function (inst_34351,inst_34352,inst_34353,state_val_34454,c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34049_SHARP_){
var and__25113__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34049_SHARP_);
if(cljs.core.truth_(and__25113__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34049_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34049_SHARP_)));
} else {
return and__25113__auto__;
}
});
;})(inst_34351,inst_34352,inst_34353,state_val_34454,c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34355 = cljs.core.filter.call(null,inst_34354,files);
var inst_34356 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34357 = cljs.core.concat.call(null,inst_34355,inst_34356);
var state_34453__$1 = (function (){var statearr_34468 = state_34453;
(statearr_34468[(17)] = inst_34353);

(statearr_34468[(12)] = inst_34357);

(statearr_34468[(18)] = inst_34351);

return statearr_34468;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34469_34553 = state_34453__$1;
(statearr_34469_34553[(1)] = (16));

} else {
var statearr_34470_34554 = state_34453__$1;
(statearr_34470_34554[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (15))){
var inst_34341 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
var statearr_34471_34555 = state_34453__$1;
(statearr_34471_34555[(2)] = inst_34341);

(statearr_34471_34555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (21))){
var inst_34367 = (state_34453[(19)]);
var inst_34367__$1 = (state_34453[(2)]);
var inst_34368 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34367__$1);
var state_34453__$1 = (function (){var statearr_34472 = state_34453;
(statearr_34472[(19)] = inst_34367__$1);

return statearr_34472;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34453__$1,(22),inst_34368);
} else {
if((state_val_34454 === (31))){
var inst_34451 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34453__$1,inst_34451);
} else {
if((state_val_34454 === (32))){
var inst_34407 = (state_34453[(16)]);
var inst_34412 = inst_34407.cljs$lang$protocol_mask$partition0$;
var inst_34413 = (inst_34412 & (64));
var inst_34414 = inst_34407.cljs$core$ISeq$;
var inst_34415 = (inst_34413) || (inst_34414);
var state_34453__$1 = state_34453;
if(cljs.core.truth_(inst_34415)){
var statearr_34473_34556 = state_34453__$1;
(statearr_34473_34556[(1)] = (35));

} else {
var statearr_34474_34557 = state_34453__$1;
(statearr_34474_34557[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (40))){
var inst_34428 = (state_34453[(20)]);
var inst_34427 = (state_34453[(2)]);
var inst_34428__$1 = cljs.core.get.call(null,inst_34427,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34429 = cljs.core.get.call(null,inst_34427,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34430 = cljs.core.not_empty.call(null,inst_34428__$1);
var state_34453__$1 = (function (){var statearr_34475 = state_34453;
(statearr_34475[(20)] = inst_34428__$1);

(statearr_34475[(21)] = inst_34429);

return statearr_34475;
})();
if(cljs.core.truth_(inst_34430)){
var statearr_34476_34558 = state_34453__$1;
(statearr_34476_34558[(1)] = (41));

} else {
var statearr_34477_34559 = state_34453__$1;
(statearr_34477_34559[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (33))){
var state_34453__$1 = state_34453;
var statearr_34478_34560 = state_34453__$1;
(statearr_34478_34560[(2)] = false);

(statearr_34478_34560[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (13))){
var inst_34327 = (state_34453[(22)]);
var inst_34331 = cljs.core.chunk_first.call(null,inst_34327);
var inst_34332 = cljs.core.chunk_rest.call(null,inst_34327);
var inst_34333 = cljs.core.count.call(null,inst_34331);
var inst_34314 = inst_34332;
var inst_34315 = inst_34331;
var inst_34316 = inst_34333;
var inst_34317 = (0);
var state_34453__$1 = (function (){var statearr_34479 = state_34453;
(statearr_34479[(7)] = inst_34315);

(statearr_34479[(8)] = inst_34317);

(statearr_34479[(9)] = inst_34314);

(statearr_34479[(10)] = inst_34316);

return statearr_34479;
})();
var statearr_34480_34561 = state_34453__$1;
(statearr_34480_34561[(2)] = null);

(statearr_34480_34561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (22))){
var inst_34367 = (state_34453[(19)]);
var inst_34370 = (state_34453[(23)]);
var inst_34375 = (state_34453[(24)]);
var inst_34371 = (state_34453[(25)]);
var inst_34370__$1 = (state_34453[(2)]);
var inst_34371__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34370__$1);
var inst_34372 = (function (){var all_files = inst_34367;
var res_SINGLEQUOTE_ = inst_34370__$1;
var res = inst_34371__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34367,inst_34370,inst_34375,inst_34371,inst_34370__$1,inst_34371__$1,state_val_34454,c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34050_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34050_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34367,inst_34370,inst_34375,inst_34371,inst_34370__$1,inst_34371__$1,state_val_34454,c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34373 = cljs.core.filter.call(null,inst_34372,inst_34370__$1);
var inst_34374 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34375__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34374);
var inst_34376 = cljs.core.not_empty.call(null,inst_34375__$1);
var state_34453__$1 = (function (){var statearr_34481 = state_34453;
(statearr_34481[(26)] = inst_34373);

(statearr_34481[(23)] = inst_34370__$1);

(statearr_34481[(24)] = inst_34375__$1);

(statearr_34481[(25)] = inst_34371__$1);

return statearr_34481;
})();
if(cljs.core.truth_(inst_34376)){
var statearr_34482_34562 = state_34453__$1;
(statearr_34482_34562[(1)] = (23));

} else {
var statearr_34483_34563 = state_34453__$1;
(statearr_34483_34563[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (36))){
var state_34453__$1 = state_34453;
var statearr_34484_34564 = state_34453__$1;
(statearr_34484_34564[(2)] = false);

(statearr_34484_34564[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (41))){
var inst_34428 = (state_34453[(20)]);
var inst_34432 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34433 = cljs.core.map.call(null,inst_34432,inst_34428);
var inst_34434 = cljs.core.pr_str.call(null,inst_34433);
var inst_34435 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34434)].join('');
var inst_34436 = figwheel.client.utils.log.call(null,inst_34435);
var state_34453__$1 = state_34453;
var statearr_34485_34565 = state_34453__$1;
(statearr_34485_34565[(2)] = inst_34436);

(statearr_34485_34565[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (43))){
var inst_34429 = (state_34453[(21)]);
var inst_34439 = (state_34453[(2)]);
var inst_34440 = cljs.core.not_empty.call(null,inst_34429);
var state_34453__$1 = (function (){var statearr_34486 = state_34453;
(statearr_34486[(27)] = inst_34439);

return statearr_34486;
})();
if(cljs.core.truth_(inst_34440)){
var statearr_34487_34566 = state_34453__$1;
(statearr_34487_34566[(1)] = (44));

} else {
var statearr_34488_34567 = state_34453__$1;
(statearr_34488_34567[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (29))){
var inst_34407 = (state_34453[(16)]);
var inst_34373 = (state_34453[(26)]);
var inst_34367 = (state_34453[(19)]);
var inst_34370 = (state_34453[(23)]);
var inst_34375 = (state_34453[(24)]);
var inst_34371 = (state_34453[(25)]);
var inst_34403 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34406 = (function (){var all_files = inst_34367;
var res_SINGLEQUOTE_ = inst_34370;
var res = inst_34371;
var files_not_loaded = inst_34373;
var dependencies_that_loaded = inst_34375;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34407,inst_34373,inst_34367,inst_34370,inst_34375,inst_34371,inst_34403,state_val_34454,c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34405){
var map__34489 = p__34405;
var map__34489__$1 = ((((!((map__34489 == null)))?((((map__34489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34489):map__34489);
var namespace = cljs.core.get.call(null,map__34489__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34407,inst_34373,inst_34367,inst_34370,inst_34375,inst_34371,inst_34403,state_val_34454,c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34407__$1 = cljs.core.group_by.call(null,inst_34406,inst_34373);
var inst_34409 = (inst_34407__$1 == null);
var inst_34410 = cljs.core.not.call(null,inst_34409);
var state_34453__$1 = (function (){var statearr_34491 = state_34453;
(statearr_34491[(16)] = inst_34407__$1);

(statearr_34491[(28)] = inst_34403);

return statearr_34491;
})();
if(inst_34410){
var statearr_34492_34568 = state_34453__$1;
(statearr_34492_34568[(1)] = (32));

} else {
var statearr_34493_34569 = state_34453__$1;
(statearr_34493_34569[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (44))){
var inst_34429 = (state_34453[(21)]);
var inst_34442 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34429);
var inst_34443 = cljs.core.pr_str.call(null,inst_34442);
var inst_34444 = [cljs.core.str("not required: "),cljs.core.str(inst_34443)].join('');
var inst_34445 = figwheel.client.utils.log.call(null,inst_34444);
var state_34453__$1 = state_34453;
var statearr_34494_34570 = state_34453__$1;
(statearr_34494_34570[(2)] = inst_34445);

(statearr_34494_34570[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (6))){
var inst_34348 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
var statearr_34495_34571 = state_34453__$1;
(statearr_34495_34571[(2)] = inst_34348);

(statearr_34495_34571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (28))){
var inst_34373 = (state_34453[(26)]);
var inst_34400 = (state_34453[(2)]);
var inst_34401 = cljs.core.not_empty.call(null,inst_34373);
var state_34453__$1 = (function (){var statearr_34496 = state_34453;
(statearr_34496[(29)] = inst_34400);

return statearr_34496;
})();
if(cljs.core.truth_(inst_34401)){
var statearr_34497_34572 = state_34453__$1;
(statearr_34497_34572[(1)] = (29));

} else {
var statearr_34498_34573 = state_34453__$1;
(statearr_34498_34573[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (25))){
var inst_34371 = (state_34453[(25)]);
var inst_34387 = (state_34453[(2)]);
var inst_34388 = cljs.core.not_empty.call(null,inst_34371);
var state_34453__$1 = (function (){var statearr_34499 = state_34453;
(statearr_34499[(30)] = inst_34387);

return statearr_34499;
})();
if(cljs.core.truth_(inst_34388)){
var statearr_34500_34574 = state_34453__$1;
(statearr_34500_34574[(1)] = (26));

} else {
var statearr_34501_34575 = state_34453__$1;
(statearr_34501_34575[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (34))){
var inst_34422 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
if(cljs.core.truth_(inst_34422)){
var statearr_34502_34576 = state_34453__$1;
(statearr_34502_34576[(1)] = (38));

} else {
var statearr_34503_34577 = state_34453__$1;
(statearr_34503_34577[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (17))){
var state_34453__$1 = state_34453;
var statearr_34504_34578 = state_34453__$1;
(statearr_34504_34578[(2)] = recompile_dependents);

(statearr_34504_34578[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (3))){
var state_34453__$1 = state_34453;
var statearr_34505_34579 = state_34453__$1;
(statearr_34505_34579[(2)] = null);

(statearr_34505_34579[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (12))){
var inst_34344 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
var statearr_34506_34580 = state_34453__$1;
(statearr_34506_34580[(2)] = inst_34344);

(statearr_34506_34580[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (2))){
var inst_34306 = (state_34453[(13)]);
var inst_34313 = cljs.core.seq.call(null,inst_34306);
var inst_34314 = inst_34313;
var inst_34315 = null;
var inst_34316 = (0);
var inst_34317 = (0);
var state_34453__$1 = (function (){var statearr_34507 = state_34453;
(statearr_34507[(7)] = inst_34315);

(statearr_34507[(8)] = inst_34317);

(statearr_34507[(9)] = inst_34314);

(statearr_34507[(10)] = inst_34316);

return statearr_34507;
})();
var statearr_34508_34581 = state_34453__$1;
(statearr_34508_34581[(2)] = null);

(statearr_34508_34581[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (23))){
var inst_34373 = (state_34453[(26)]);
var inst_34367 = (state_34453[(19)]);
var inst_34370 = (state_34453[(23)]);
var inst_34375 = (state_34453[(24)]);
var inst_34371 = (state_34453[(25)]);
var inst_34378 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34380 = (function (){var all_files = inst_34367;
var res_SINGLEQUOTE_ = inst_34370;
var res = inst_34371;
var files_not_loaded = inst_34373;
var dependencies_that_loaded = inst_34375;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34373,inst_34367,inst_34370,inst_34375,inst_34371,inst_34378,state_val_34454,c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34379){
var map__34509 = p__34379;
var map__34509__$1 = ((((!((map__34509 == null)))?((((map__34509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34509):map__34509);
var request_url = cljs.core.get.call(null,map__34509__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34373,inst_34367,inst_34370,inst_34375,inst_34371,inst_34378,state_val_34454,c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34381 = cljs.core.reverse.call(null,inst_34375);
var inst_34382 = cljs.core.map.call(null,inst_34380,inst_34381);
var inst_34383 = cljs.core.pr_str.call(null,inst_34382);
var inst_34384 = figwheel.client.utils.log.call(null,inst_34383);
var state_34453__$1 = (function (){var statearr_34511 = state_34453;
(statearr_34511[(31)] = inst_34378);

return statearr_34511;
})();
var statearr_34512_34582 = state_34453__$1;
(statearr_34512_34582[(2)] = inst_34384);

(statearr_34512_34582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (35))){
var state_34453__$1 = state_34453;
var statearr_34513_34583 = state_34453__$1;
(statearr_34513_34583[(2)] = true);

(statearr_34513_34583[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (19))){
var inst_34357 = (state_34453[(12)]);
var inst_34363 = figwheel.client.file_reloading.expand_files.call(null,inst_34357);
var state_34453__$1 = state_34453;
var statearr_34514_34584 = state_34453__$1;
(statearr_34514_34584[(2)] = inst_34363);

(statearr_34514_34584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (11))){
var state_34453__$1 = state_34453;
var statearr_34515_34585 = state_34453__$1;
(statearr_34515_34585[(2)] = null);

(statearr_34515_34585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (9))){
var inst_34346 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
var statearr_34516_34586 = state_34453__$1;
(statearr_34516_34586[(2)] = inst_34346);

(statearr_34516_34586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (5))){
var inst_34317 = (state_34453[(8)]);
var inst_34316 = (state_34453[(10)]);
var inst_34319 = (inst_34317 < inst_34316);
var inst_34320 = inst_34319;
var state_34453__$1 = state_34453;
if(cljs.core.truth_(inst_34320)){
var statearr_34517_34587 = state_34453__$1;
(statearr_34517_34587[(1)] = (7));

} else {
var statearr_34518_34588 = state_34453__$1;
(statearr_34518_34588[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (14))){
var inst_34327 = (state_34453[(22)]);
var inst_34336 = cljs.core.first.call(null,inst_34327);
var inst_34337 = figwheel.client.file_reloading.eval_body.call(null,inst_34336,opts);
var inst_34338 = cljs.core.next.call(null,inst_34327);
var inst_34314 = inst_34338;
var inst_34315 = null;
var inst_34316 = (0);
var inst_34317 = (0);
var state_34453__$1 = (function (){var statearr_34519 = state_34453;
(statearr_34519[(7)] = inst_34315);

(statearr_34519[(8)] = inst_34317);

(statearr_34519[(32)] = inst_34337);

(statearr_34519[(9)] = inst_34314);

(statearr_34519[(10)] = inst_34316);

return statearr_34519;
})();
var statearr_34520_34589 = state_34453__$1;
(statearr_34520_34589[(2)] = null);

(statearr_34520_34589[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (45))){
var state_34453__$1 = state_34453;
var statearr_34521_34590 = state_34453__$1;
(statearr_34521_34590[(2)] = null);

(statearr_34521_34590[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (26))){
var inst_34373 = (state_34453[(26)]);
var inst_34367 = (state_34453[(19)]);
var inst_34370 = (state_34453[(23)]);
var inst_34375 = (state_34453[(24)]);
var inst_34371 = (state_34453[(25)]);
var inst_34390 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34392 = (function (){var all_files = inst_34367;
var res_SINGLEQUOTE_ = inst_34370;
var res = inst_34371;
var files_not_loaded = inst_34373;
var dependencies_that_loaded = inst_34375;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34373,inst_34367,inst_34370,inst_34375,inst_34371,inst_34390,state_val_34454,c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34391){
var map__34522 = p__34391;
var map__34522__$1 = ((((!((map__34522 == null)))?((((map__34522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34522):map__34522);
var namespace = cljs.core.get.call(null,map__34522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34522__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34373,inst_34367,inst_34370,inst_34375,inst_34371,inst_34390,state_val_34454,c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34393 = cljs.core.map.call(null,inst_34392,inst_34371);
var inst_34394 = cljs.core.pr_str.call(null,inst_34393);
var inst_34395 = figwheel.client.utils.log.call(null,inst_34394);
var inst_34396 = (function (){var all_files = inst_34367;
var res_SINGLEQUOTE_ = inst_34370;
var res = inst_34371;
var files_not_loaded = inst_34373;
var dependencies_that_loaded = inst_34375;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34373,inst_34367,inst_34370,inst_34375,inst_34371,inst_34390,inst_34392,inst_34393,inst_34394,inst_34395,state_val_34454,c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34373,inst_34367,inst_34370,inst_34375,inst_34371,inst_34390,inst_34392,inst_34393,inst_34394,inst_34395,state_val_34454,c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34397 = setTimeout(inst_34396,(10));
var state_34453__$1 = (function (){var statearr_34524 = state_34453;
(statearr_34524[(33)] = inst_34395);

(statearr_34524[(34)] = inst_34390);

return statearr_34524;
})();
var statearr_34525_34591 = state_34453__$1;
(statearr_34525_34591[(2)] = inst_34397);

(statearr_34525_34591[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (16))){
var state_34453__$1 = state_34453;
var statearr_34526_34592 = state_34453__$1;
(statearr_34526_34592[(2)] = reload_dependents);

(statearr_34526_34592[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (38))){
var inst_34407 = (state_34453[(16)]);
var inst_34424 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34407);
var state_34453__$1 = state_34453;
var statearr_34527_34593 = state_34453__$1;
(statearr_34527_34593[(2)] = inst_34424);

(statearr_34527_34593[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (30))){
var state_34453__$1 = state_34453;
var statearr_34528_34594 = state_34453__$1;
(statearr_34528_34594[(2)] = null);

(statearr_34528_34594[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (10))){
var inst_34327 = (state_34453[(22)]);
var inst_34329 = cljs.core.chunked_seq_QMARK_.call(null,inst_34327);
var state_34453__$1 = state_34453;
if(inst_34329){
var statearr_34529_34595 = state_34453__$1;
(statearr_34529_34595[(1)] = (13));

} else {
var statearr_34530_34596 = state_34453__$1;
(statearr_34530_34596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (18))){
var inst_34361 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
if(cljs.core.truth_(inst_34361)){
var statearr_34531_34597 = state_34453__$1;
(statearr_34531_34597[(1)] = (19));

} else {
var statearr_34532_34598 = state_34453__$1;
(statearr_34532_34598[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (42))){
var state_34453__$1 = state_34453;
var statearr_34533_34599 = state_34453__$1;
(statearr_34533_34599[(2)] = null);

(statearr_34533_34599[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (37))){
var inst_34419 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
var statearr_34534_34600 = state_34453__$1;
(statearr_34534_34600[(2)] = inst_34419);

(statearr_34534_34600[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (8))){
var inst_34314 = (state_34453[(9)]);
var inst_34327 = (state_34453[(22)]);
var inst_34327__$1 = cljs.core.seq.call(null,inst_34314);
var state_34453__$1 = (function (){var statearr_34535 = state_34453;
(statearr_34535[(22)] = inst_34327__$1);

return statearr_34535;
})();
if(inst_34327__$1){
var statearr_34536_34601 = state_34453__$1;
(statearr_34536_34601[(1)] = (10));

} else {
var statearr_34537_34602 = state_34453__$1;
(statearr_34537_34602[(1)] = (11));

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
});})(c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28250__auto__,c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28251__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28251__auto____0 = (function (){
var statearr_34541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34541[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28251__auto__);

(statearr_34541[(1)] = (1));

return statearr_34541;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28251__auto____1 = (function (state_34453){
while(true){
var ret_value__28252__auto__ = (function (){try{while(true){
var result__28253__auto__ = switch__28250__auto__.call(null,state_34453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28253__auto__;
}
break;
}
}catch (e34542){if((e34542 instanceof Object)){
var ex__28254__auto__ = e34542;
var statearr_34543_34603 = state_34453;
(statearr_34543_34603[(5)] = ex__28254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34604 = state_34453;
state_34453 = G__34604;
continue;
} else {
return ret_value__28252__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28251__auto__ = function(state_34453){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28251__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28251__auto____1.call(this,state_34453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28251__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28251__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28251__auto__;
})()
;})(switch__28250__auto__,c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28273__auto__ = (function (){var statearr_34544 = f__28272__auto__.call(null);
(statearr_34544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28271__auto__);

return statearr_34544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28273__auto__);
});})(c__28271__auto__,map__34299,map__34299__$1,opts,before_jsload,on_jsload,reload_dependents,map__34300,map__34300__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28271__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34607,link){
var map__34610 = p__34607;
var map__34610__$1 = ((((!((map__34610 == null)))?((((map__34610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34610):map__34610);
var file = cljs.core.get.call(null,map__34610__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34610,map__34610__$1,file){
return (function (p1__34605_SHARP_,p2__34606_SHARP_){
if(cljs.core._EQ_.call(null,p1__34605_SHARP_,p2__34606_SHARP_)){
return p1__34605_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34610,map__34610__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34616){
var map__34617 = p__34616;
var map__34617__$1 = ((((!((map__34617 == null)))?((((map__34617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34617):map__34617);
var match_length = cljs.core.get.call(null,map__34617__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34617__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34612_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34612_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34619_SHARP_,p2__34620_SHARP_){
return cljs.core.assoc.call(null,p1__34619_SHARP_,cljs.core.get.call(null,p2__34620_SHARP_,key),p2__34620_SHARP_);
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
var loaded_f_datas_34621 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34621);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34621);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34622,p__34623){
var map__34628 = p__34622;
var map__34628__$1 = ((((!((map__34628 == null)))?((((map__34628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34628):map__34628);
var on_cssload = cljs.core.get.call(null,map__34628__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34629 = p__34623;
var map__34629__$1 = ((((!((map__34629 == null)))?((((map__34629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34629):map__34629);
var files_msg = map__34629__$1;
var files = cljs.core.get.call(null,map__34629__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1488439828602