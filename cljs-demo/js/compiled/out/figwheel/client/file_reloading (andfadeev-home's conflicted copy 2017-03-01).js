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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__65545_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__65545_SHARP_));
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
var seq__65550 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__65551 = null;
var count__65552 = (0);
var i__65553 = (0);
while(true){
if((i__65553 < count__65552)){
var n = cljs.core._nth.call(null,chunk__65551,i__65553);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__65554 = seq__65550;
var G__65555 = chunk__65551;
var G__65556 = count__65552;
var G__65557 = (i__65553 + (1));
seq__65550 = G__65554;
chunk__65551 = G__65555;
count__65552 = G__65556;
i__65553 = G__65557;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__65550);
if(temp__4657__auto__){
var seq__65550__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65550__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__65550__$1);
var G__65558 = cljs.core.chunk_rest.call(null,seq__65550__$1);
var G__65559 = c__25936__auto__;
var G__65560 = cljs.core.count.call(null,c__25936__auto__);
var G__65561 = (0);
seq__65550 = G__65558;
chunk__65551 = G__65559;
count__65552 = G__65560;
i__65553 = G__65561;
continue;
} else {
var n = cljs.core.first.call(null,seq__65550__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__65562 = cljs.core.next.call(null,seq__65550__$1);
var G__65563 = null;
var G__65564 = (0);
var G__65565 = (0);
seq__65550 = G__65562;
chunk__65551 = G__65563;
count__65552 = G__65564;
i__65553 = G__65565;
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

var seq__65616_65627 = cljs.core.seq.call(null,deps);
var chunk__65617_65628 = null;
var count__65618_65629 = (0);
var i__65619_65630 = (0);
while(true){
if((i__65619_65630 < count__65618_65629)){
var dep_65631 = cljs.core._nth.call(null,chunk__65617_65628,i__65619_65630);
topo_sort_helper_STAR_.call(null,dep_65631,(depth + (1)),state);

var G__65632 = seq__65616_65627;
var G__65633 = chunk__65617_65628;
var G__65634 = count__65618_65629;
var G__65635 = (i__65619_65630 + (1));
seq__65616_65627 = G__65632;
chunk__65617_65628 = G__65633;
count__65618_65629 = G__65634;
i__65619_65630 = G__65635;
continue;
} else {
var temp__4657__auto___65636 = cljs.core.seq.call(null,seq__65616_65627);
if(temp__4657__auto___65636){
var seq__65616_65637__$1 = temp__4657__auto___65636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65616_65637__$1)){
var c__25936__auto___65638 = cljs.core.chunk_first.call(null,seq__65616_65637__$1);
var G__65639 = cljs.core.chunk_rest.call(null,seq__65616_65637__$1);
var G__65640 = c__25936__auto___65638;
var G__65641 = cljs.core.count.call(null,c__25936__auto___65638);
var G__65642 = (0);
seq__65616_65627 = G__65639;
chunk__65617_65628 = G__65640;
count__65618_65629 = G__65641;
i__65619_65630 = G__65642;
continue;
} else {
var dep_65643 = cljs.core.first.call(null,seq__65616_65637__$1);
topo_sort_helper_STAR_.call(null,dep_65643,(depth + (1)),state);

var G__65644 = cljs.core.next.call(null,seq__65616_65637__$1);
var G__65645 = null;
var G__65646 = (0);
var G__65647 = (0);
seq__65616_65627 = G__65644;
chunk__65617_65628 = G__65645;
count__65618_65629 = G__65646;
i__65619_65630 = G__65647;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__65620){
var vec__65624 = p__65620;
var seq__65625 = cljs.core.seq.call(null,vec__65624);
var first__65626 = cljs.core.first.call(null,seq__65625);
var seq__65625__$1 = cljs.core.next.call(null,seq__65625);
var x = first__65626;
var xs = seq__65625__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__65624,seq__65625,first__65626,seq__65625__$1,x,xs,get_deps__$1){
return (function (p1__65566_SHARP_){
return clojure.set.difference.call(null,p1__65566_SHARP_,x);
});})(vec__65624,seq__65625,first__65626,seq__65625__$1,x,xs,get_deps__$1))
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
var seq__65660 = cljs.core.seq.call(null,provides);
var chunk__65661 = null;
var count__65662 = (0);
var i__65663 = (0);
while(true){
if((i__65663 < count__65662)){
var prov = cljs.core._nth.call(null,chunk__65661,i__65663);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__65664_65672 = cljs.core.seq.call(null,requires);
var chunk__65665_65673 = null;
var count__65666_65674 = (0);
var i__65667_65675 = (0);
while(true){
if((i__65667_65675 < count__65666_65674)){
var req_65676 = cljs.core._nth.call(null,chunk__65665_65673,i__65667_65675);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65676,prov);

var G__65677 = seq__65664_65672;
var G__65678 = chunk__65665_65673;
var G__65679 = count__65666_65674;
var G__65680 = (i__65667_65675 + (1));
seq__65664_65672 = G__65677;
chunk__65665_65673 = G__65678;
count__65666_65674 = G__65679;
i__65667_65675 = G__65680;
continue;
} else {
var temp__4657__auto___65681 = cljs.core.seq.call(null,seq__65664_65672);
if(temp__4657__auto___65681){
var seq__65664_65682__$1 = temp__4657__auto___65681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65664_65682__$1)){
var c__25936__auto___65683 = cljs.core.chunk_first.call(null,seq__65664_65682__$1);
var G__65684 = cljs.core.chunk_rest.call(null,seq__65664_65682__$1);
var G__65685 = c__25936__auto___65683;
var G__65686 = cljs.core.count.call(null,c__25936__auto___65683);
var G__65687 = (0);
seq__65664_65672 = G__65684;
chunk__65665_65673 = G__65685;
count__65666_65674 = G__65686;
i__65667_65675 = G__65687;
continue;
} else {
var req_65688 = cljs.core.first.call(null,seq__65664_65682__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65688,prov);

var G__65689 = cljs.core.next.call(null,seq__65664_65682__$1);
var G__65690 = null;
var G__65691 = (0);
var G__65692 = (0);
seq__65664_65672 = G__65689;
chunk__65665_65673 = G__65690;
count__65666_65674 = G__65691;
i__65667_65675 = G__65692;
continue;
}
} else {
}
}
break;
}

var G__65693 = seq__65660;
var G__65694 = chunk__65661;
var G__65695 = count__65662;
var G__65696 = (i__65663 + (1));
seq__65660 = G__65693;
chunk__65661 = G__65694;
count__65662 = G__65695;
i__65663 = G__65696;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__65660);
if(temp__4657__auto__){
var seq__65660__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65660__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__65660__$1);
var G__65697 = cljs.core.chunk_rest.call(null,seq__65660__$1);
var G__65698 = c__25936__auto__;
var G__65699 = cljs.core.count.call(null,c__25936__auto__);
var G__65700 = (0);
seq__65660 = G__65697;
chunk__65661 = G__65698;
count__65662 = G__65699;
i__65663 = G__65700;
continue;
} else {
var prov = cljs.core.first.call(null,seq__65660__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__65668_65701 = cljs.core.seq.call(null,requires);
var chunk__65669_65702 = null;
var count__65670_65703 = (0);
var i__65671_65704 = (0);
while(true){
if((i__65671_65704 < count__65670_65703)){
var req_65705 = cljs.core._nth.call(null,chunk__65669_65702,i__65671_65704);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65705,prov);

var G__65706 = seq__65668_65701;
var G__65707 = chunk__65669_65702;
var G__65708 = count__65670_65703;
var G__65709 = (i__65671_65704 + (1));
seq__65668_65701 = G__65706;
chunk__65669_65702 = G__65707;
count__65670_65703 = G__65708;
i__65671_65704 = G__65709;
continue;
} else {
var temp__4657__auto___65710__$1 = cljs.core.seq.call(null,seq__65668_65701);
if(temp__4657__auto___65710__$1){
var seq__65668_65711__$1 = temp__4657__auto___65710__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65668_65711__$1)){
var c__25936__auto___65712 = cljs.core.chunk_first.call(null,seq__65668_65711__$1);
var G__65713 = cljs.core.chunk_rest.call(null,seq__65668_65711__$1);
var G__65714 = c__25936__auto___65712;
var G__65715 = cljs.core.count.call(null,c__25936__auto___65712);
var G__65716 = (0);
seq__65668_65701 = G__65713;
chunk__65669_65702 = G__65714;
count__65670_65703 = G__65715;
i__65671_65704 = G__65716;
continue;
} else {
var req_65717 = cljs.core.first.call(null,seq__65668_65711__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65717,prov);

var G__65718 = cljs.core.next.call(null,seq__65668_65711__$1);
var G__65719 = null;
var G__65720 = (0);
var G__65721 = (0);
seq__65668_65701 = G__65718;
chunk__65669_65702 = G__65719;
count__65670_65703 = G__65720;
i__65671_65704 = G__65721;
continue;
}
} else {
}
}
break;
}

var G__65722 = cljs.core.next.call(null,seq__65660__$1);
var G__65723 = null;
var G__65724 = (0);
var G__65725 = (0);
seq__65660 = G__65722;
chunk__65661 = G__65723;
count__65662 = G__65724;
i__65663 = G__65725;
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
var seq__65730_65734 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__65731_65735 = null;
var count__65732_65736 = (0);
var i__65733_65737 = (0);
while(true){
if((i__65733_65737 < count__65732_65736)){
var ns_65738 = cljs.core._nth.call(null,chunk__65731_65735,i__65733_65737);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_65738);

var G__65739 = seq__65730_65734;
var G__65740 = chunk__65731_65735;
var G__65741 = count__65732_65736;
var G__65742 = (i__65733_65737 + (1));
seq__65730_65734 = G__65739;
chunk__65731_65735 = G__65740;
count__65732_65736 = G__65741;
i__65733_65737 = G__65742;
continue;
} else {
var temp__4657__auto___65743 = cljs.core.seq.call(null,seq__65730_65734);
if(temp__4657__auto___65743){
var seq__65730_65744__$1 = temp__4657__auto___65743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65730_65744__$1)){
var c__25936__auto___65745 = cljs.core.chunk_first.call(null,seq__65730_65744__$1);
var G__65746 = cljs.core.chunk_rest.call(null,seq__65730_65744__$1);
var G__65747 = c__25936__auto___65745;
var G__65748 = cljs.core.count.call(null,c__25936__auto___65745);
var G__65749 = (0);
seq__65730_65734 = G__65746;
chunk__65731_65735 = G__65747;
count__65732_65736 = G__65748;
i__65733_65737 = G__65749;
continue;
} else {
var ns_65750 = cljs.core.first.call(null,seq__65730_65744__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_65750);

var G__65751 = cljs.core.next.call(null,seq__65730_65744__$1);
var G__65752 = null;
var G__65753 = (0);
var G__65754 = (0);
seq__65730_65734 = G__65751;
chunk__65731_65735 = G__65752;
count__65732_65736 = G__65753;
i__65733_65737 = G__65754;
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
var G__65755__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__65755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65756__i = 0, G__65756__a = new Array(arguments.length -  0);
while (G__65756__i < G__65756__a.length) {G__65756__a[G__65756__i] = arguments[G__65756__i + 0]; ++G__65756__i;}
  args = new cljs.core.IndexedSeq(G__65756__a,0);
} 
return G__65755__delegate.call(this,args);};
G__65755.cljs$lang$maxFixedArity = 0;
G__65755.cljs$lang$applyTo = (function (arglist__65757){
var args = cljs.core.seq(arglist__65757);
return G__65755__delegate(args);
});
G__65755.cljs$core$IFn$_invoke$arity$variadic = G__65755__delegate;
return G__65755;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__65758 = cljs.core._EQ_;
var expr__65759 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__65758.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__65759))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__65758,expr__65759){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__65758,expr__65759))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__65758,expr__65759){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e65761){if((e65761 instanceof Error)){
var e = e65761;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e65761;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__65758,expr__65759))
} else {
if(cljs.core.truth_(pred__65758.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__65759))){
return ((function (pred__65758,expr__65759){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__65758,expr__65759){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__65758,expr__65759))
);

return deferred.addErrback(((function (deferred,pred__65758,expr__65759){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__65758,expr__65759))
);
});
;})(pred__65758,expr__65759))
} else {
if(cljs.core.truth_(pred__65758.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__65759))){
return ((function (pred__65758,expr__65759){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e65762){if((e65762 instanceof Error)){
var e = e65762;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e65762;

}
}})());
});
;})(pred__65758,expr__65759))
} else {
return ((function (pred__65758,expr__65759){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__65758,expr__65759))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__65763,callback){
var map__65766 = p__65763;
var map__65766__$1 = ((((!((map__65766 == null)))?((((map__65766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65766):map__65766);
var file_msg = map__65766__$1;
var request_url = cljs.core.get.call(null,map__65766__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__65766,map__65766__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__65766,map__65766__$1,file_msg,request_url))
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
return (function (state_65790){
var state_val_65791 = (state_65790[(1)]);
if((state_val_65791 === (7))){
var inst_65786 = (state_65790[(2)]);
var state_65790__$1 = state_65790;
var statearr_65792_65812 = state_65790__$1;
(statearr_65792_65812[(2)] = inst_65786);

(statearr_65792_65812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65791 === (1))){
var state_65790__$1 = state_65790;
var statearr_65793_65813 = state_65790__$1;
(statearr_65793_65813[(2)] = null);

(statearr_65793_65813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65791 === (4))){
var inst_65770 = (state_65790[(7)]);
var inst_65770__$1 = (state_65790[(2)]);
var state_65790__$1 = (function (){var statearr_65794 = state_65790;
(statearr_65794[(7)] = inst_65770__$1);

return statearr_65794;
})();
if(cljs.core.truth_(inst_65770__$1)){
var statearr_65795_65814 = state_65790__$1;
(statearr_65795_65814[(1)] = (5));

} else {
var statearr_65796_65815 = state_65790__$1;
(statearr_65796_65815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65791 === (6))){
var state_65790__$1 = state_65790;
var statearr_65797_65816 = state_65790__$1;
(statearr_65797_65816[(2)] = null);

(statearr_65797_65816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65791 === (3))){
var inst_65788 = (state_65790[(2)]);
var state_65790__$1 = state_65790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65790__$1,inst_65788);
} else {
if((state_val_65791 === (2))){
var state_65790__$1 = state_65790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65790__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_65791 === (11))){
var inst_65782 = (state_65790[(2)]);
var state_65790__$1 = (function (){var statearr_65798 = state_65790;
(statearr_65798[(8)] = inst_65782);

return statearr_65798;
})();
var statearr_65799_65817 = state_65790__$1;
(statearr_65799_65817[(2)] = null);

(statearr_65799_65817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65791 === (9))){
var inst_65774 = (state_65790[(9)]);
var inst_65776 = (state_65790[(10)]);
var inst_65778 = inst_65776.call(null,inst_65774);
var state_65790__$1 = state_65790;
var statearr_65800_65818 = state_65790__$1;
(statearr_65800_65818[(2)] = inst_65778);

(statearr_65800_65818[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65791 === (5))){
var inst_65770 = (state_65790[(7)]);
var inst_65772 = figwheel.client.file_reloading.blocking_load.call(null,inst_65770);
var state_65790__$1 = state_65790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65790__$1,(8),inst_65772);
} else {
if((state_val_65791 === (10))){
var inst_65774 = (state_65790[(9)]);
var inst_65780 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_65774);
var state_65790__$1 = state_65790;
var statearr_65801_65819 = state_65790__$1;
(statearr_65801_65819[(2)] = inst_65780);

(statearr_65801_65819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65791 === (8))){
var inst_65770 = (state_65790[(7)]);
var inst_65776 = (state_65790[(10)]);
var inst_65774 = (state_65790[(2)]);
var inst_65775 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_65776__$1 = cljs.core.get.call(null,inst_65775,inst_65770);
var state_65790__$1 = (function (){var statearr_65802 = state_65790;
(statearr_65802[(9)] = inst_65774);

(statearr_65802[(10)] = inst_65776__$1);

return statearr_65802;
})();
if(cljs.core.truth_(inst_65776__$1)){
var statearr_65803_65820 = state_65790__$1;
(statearr_65803_65820[(1)] = (9));

} else {
var statearr_65804_65821 = state_65790__$1;
(statearr_65804_65821[(1)] = (10));

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
var statearr_65808 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65808[(0)] = figwheel$client$file_reloading$state_machine__28287__auto__);

(statearr_65808[(1)] = (1));

return statearr_65808;
});
var figwheel$client$file_reloading$state_machine__28287__auto____1 = (function (state_65790){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_65790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e65809){if((e65809 instanceof Object)){
var ex__28290__auto__ = e65809;
var statearr_65810_65822 = state_65790;
(statearr_65810_65822[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65823 = state_65790;
state_65790 = G__65823;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28287__auto__ = function(state_65790){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28287__auto____1.call(this,state_65790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28287__auto____0;
figwheel$client$file_reloading$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28287__auto____1;
return figwheel$client$file_reloading$state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__))
})();
var state__28400__auto__ = (function (){var statearr_65811 = f__28399__auto__.call(null);
(statearr_65811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_65811;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__65824,callback){
var map__65827 = p__65824;
var map__65827__$1 = ((((!((map__65827 == null)))?((((map__65827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65827):map__65827);
var file_msg = map__65827__$1;
var namespace = cljs.core.get.call(null,map__65827__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__65827,map__65827__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__65827,map__65827__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__65829){
var map__65832 = p__65829;
var map__65832__$1 = ((((!((map__65832 == null)))?((((map__65832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65832):map__65832);
var file_msg = map__65832__$1;
var namespace = cljs.core.get.call(null,map__65832__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__65834){
var map__65837 = p__65834;
var map__65837__$1 = ((((!((map__65837 == null)))?((((map__65837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65837):map__65837);
var file_msg = map__65837__$1;
var namespace = cljs.core.get.call(null,map__65837__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__65839,callback){
var map__65842 = p__65839;
var map__65842__$1 = ((((!((map__65842 == null)))?((((map__65842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65842):map__65842);
var file_msg = map__65842__$1;
var request_url = cljs.core.get.call(null,map__65842__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__65842__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28398__auto___65946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto___65946,out){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto___65946,out){
return (function (state_65928){
var state_val_65929 = (state_65928[(1)]);
if((state_val_65929 === (1))){
var inst_65902 = cljs.core.seq.call(null,files);
var inst_65903 = cljs.core.first.call(null,inst_65902);
var inst_65904 = cljs.core.next.call(null,inst_65902);
var inst_65905 = files;
var state_65928__$1 = (function (){var statearr_65930 = state_65928;
(statearr_65930[(7)] = inst_65904);

(statearr_65930[(8)] = inst_65905);

(statearr_65930[(9)] = inst_65903);

return statearr_65930;
})();
var statearr_65931_65947 = state_65928__$1;
(statearr_65931_65947[(2)] = null);

(statearr_65931_65947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65929 === (2))){
var inst_65911 = (state_65928[(10)]);
var inst_65905 = (state_65928[(8)]);
var inst_65910 = cljs.core.seq.call(null,inst_65905);
var inst_65911__$1 = cljs.core.first.call(null,inst_65910);
var inst_65912 = cljs.core.next.call(null,inst_65910);
var inst_65913 = (inst_65911__$1 == null);
var inst_65914 = cljs.core.not.call(null,inst_65913);
var state_65928__$1 = (function (){var statearr_65932 = state_65928;
(statearr_65932[(10)] = inst_65911__$1);

(statearr_65932[(11)] = inst_65912);

return statearr_65932;
})();
if(inst_65914){
var statearr_65933_65948 = state_65928__$1;
(statearr_65933_65948[(1)] = (4));

} else {
var statearr_65934_65949 = state_65928__$1;
(statearr_65934_65949[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65929 === (3))){
var inst_65926 = (state_65928[(2)]);
var state_65928__$1 = state_65928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65928__$1,inst_65926);
} else {
if((state_val_65929 === (4))){
var inst_65911 = (state_65928[(10)]);
var inst_65916 = figwheel.client.file_reloading.reload_js_file.call(null,inst_65911);
var state_65928__$1 = state_65928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65928__$1,(7),inst_65916);
} else {
if((state_val_65929 === (5))){
var inst_65922 = cljs.core.async.close_BANG_.call(null,out);
var state_65928__$1 = state_65928;
var statearr_65935_65950 = state_65928__$1;
(statearr_65935_65950[(2)] = inst_65922);

(statearr_65935_65950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65929 === (6))){
var inst_65924 = (state_65928[(2)]);
var state_65928__$1 = state_65928;
var statearr_65936_65951 = state_65928__$1;
(statearr_65936_65951[(2)] = inst_65924);

(statearr_65936_65951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65929 === (7))){
var inst_65912 = (state_65928[(11)]);
var inst_65918 = (state_65928[(2)]);
var inst_65919 = cljs.core.async.put_BANG_.call(null,out,inst_65918);
var inst_65905 = inst_65912;
var state_65928__$1 = (function (){var statearr_65937 = state_65928;
(statearr_65937[(12)] = inst_65919);

(statearr_65937[(8)] = inst_65905);

return statearr_65937;
})();
var statearr_65938_65952 = state_65928__$1;
(statearr_65938_65952[(2)] = null);

(statearr_65938_65952[(1)] = (2));


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
});})(c__28398__auto___65946,out))
;
return ((function (switch__28286__auto__,c__28398__auto___65946,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____0 = (function (){
var statearr_65942 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65942[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__);

(statearr_65942[(1)] = (1));

return statearr_65942;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____1 = (function (state_65928){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_65928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e65943){if((e65943 instanceof Object)){
var ex__28290__auto__ = e65943;
var statearr_65944_65953 = state_65928;
(statearr_65944_65953[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65954 = state_65928;
state_65928 = G__65954;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__ = function(state_65928){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____1.call(this,state_65928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto___65946,out))
})();
var state__28400__auto__ = (function (){var statearr_65945 = f__28399__auto__.call(null);
(statearr_65945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto___65946);

return statearr_65945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto___65946,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__65955,opts){
var map__65959 = p__65955;
var map__65959__$1 = ((((!((map__65959 == null)))?((((map__65959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65959):map__65959);
var eval_body__$1 = cljs.core.get.call(null,map__65959__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__65959__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e65961){var e = e65961;
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
return (function (p1__65962_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__65962_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__65971){
var vec__65972 = p__65971;
var k = cljs.core.nth.call(null,vec__65972,(0),null);
var v = cljs.core.nth.call(null,vec__65972,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__65975){
var vec__65976 = p__65975;
var k = cljs.core.nth.call(null,vec__65976,(0),null);
var v = cljs.core.nth.call(null,vec__65976,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__65982,p__65983){
var map__66230 = p__65982;
var map__66230__$1 = ((((!((map__66230 == null)))?((((map__66230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66230):map__66230);
var opts = map__66230__$1;
var before_jsload = cljs.core.get.call(null,map__66230__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__66230__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__66230__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__66231 = p__65983;
var map__66231__$1 = ((((!((map__66231 == null)))?((((map__66231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66231):map__66231);
var msg = map__66231__$1;
var files = cljs.core.get.call(null,map__66231__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__66231__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__66231__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_66384){
var state_val_66385 = (state_66384[(1)]);
if((state_val_66385 === (7))){
var inst_66248 = (state_66384[(7)]);
var inst_66245 = (state_66384[(8)]);
var inst_66247 = (state_66384[(9)]);
var inst_66246 = (state_66384[(10)]);
var inst_66253 = cljs.core._nth.call(null,inst_66246,inst_66248);
var inst_66254 = figwheel.client.file_reloading.eval_body.call(null,inst_66253,opts);
var inst_66255 = (inst_66248 + (1));
var tmp66386 = inst_66245;
var tmp66387 = inst_66247;
var tmp66388 = inst_66246;
var inst_66245__$1 = tmp66386;
var inst_66246__$1 = tmp66388;
var inst_66247__$1 = tmp66387;
var inst_66248__$1 = inst_66255;
var state_66384__$1 = (function (){var statearr_66389 = state_66384;
(statearr_66389[(11)] = inst_66254);

(statearr_66389[(7)] = inst_66248__$1);

(statearr_66389[(8)] = inst_66245__$1);

(statearr_66389[(9)] = inst_66247__$1);

(statearr_66389[(10)] = inst_66246__$1);

return statearr_66389;
})();
var statearr_66390_66476 = state_66384__$1;
(statearr_66390_66476[(2)] = null);

(statearr_66390_66476[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (20))){
var inst_66288 = (state_66384[(12)]);
var inst_66296 = figwheel.client.file_reloading.sort_files.call(null,inst_66288);
var state_66384__$1 = state_66384;
var statearr_66391_66477 = state_66384__$1;
(statearr_66391_66477[(2)] = inst_66296);

(statearr_66391_66477[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (27))){
var state_66384__$1 = state_66384;
var statearr_66392_66478 = state_66384__$1;
(statearr_66392_66478[(2)] = null);

(statearr_66392_66478[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (1))){
var inst_66237 = (state_66384[(13)]);
var inst_66234 = before_jsload.call(null,files);
var inst_66235 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_66236 = (function (){return ((function (inst_66237,inst_66234,inst_66235,state_val_66385,c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__65979_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__65979_SHARP_);
});
;})(inst_66237,inst_66234,inst_66235,state_val_66385,c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66237__$1 = cljs.core.filter.call(null,inst_66236,files);
var inst_66238 = cljs.core.not_empty.call(null,inst_66237__$1);
var state_66384__$1 = (function (){var statearr_66393 = state_66384;
(statearr_66393[(13)] = inst_66237__$1);

(statearr_66393[(14)] = inst_66235);

(statearr_66393[(15)] = inst_66234);

return statearr_66393;
})();
if(cljs.core.truth_(inst_66238)){
var statearr_66394_66479 = state_66384__$1;
(statearr_66394_66479[(1)] = (2));

} else {
var statearr_66395_66480 = state_66384__$1;
(statearr_66395_66480[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (24))){
var state_66384__$1 = state_66384;
var statearr_66396_66481 = state_66384__$1;
(statearr_66396_66481[(2)] = null);

(statearr_66396_66481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (39))){
var inst_66338 = (state_66384[(16)]);
var state_66384__$1 = state_66384;
var statearr_66397_66482 = state_66384__$1;
(statearr_66397_66482[(2)] = inst_66338);

(statearr_66397_66482[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (46))){
var inst_66379 = (state_66384[(2)]);
var state_66384__$1 = state_66384;
var statearr_66398_66483 = state_66384__$1;
(statearr_66398_66483[(2)] = inst_66379);

(statearr_66398_66483[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (4))){
var inst_66282 = (state_66384[(2)]);
var inst_66283 = cljs.core.List.EMPTY;
var inst_66284 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_66283);
var inst_66285 = (function (){return ((function (inst_66282,inst_66283,inst_66284,state_val_66385,c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__65980_SHARP_){
var and__25113__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__65980_SHARP_);
if(cljs.core.truth_(and__25113__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__65980_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__65980_SHARP_)));
} else {
return and__25113__auto__;
}
});
;})(inst_66282,inst_66283,inst_66284,state_val_66385,c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66286 = cljs.core.filter.call(null,inst_66285,files);
var inst_66287 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_66288 = cljs.core.concat.call(null,inst_66286,inst_66287);
var state_66384__$1 = (function (){var statearr_66399 = state_66384;
(statearr_66399[(17)] = inst_66284);

(statearr_66399[(18)] = inst_66282);

(statearr_66399[(12)] = inst_66288);

return statearr_66399;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_66400_66484 = state_66384__$1;
(statearr_66400_66484[(1)] = (16));

} else {
var statearr_66401_66485 = state_66384__$1;
(statearr_66401_66485[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (15))){
var inst_66272 = (state_66384[(2)]);
var state_66384__$1 = state_66384;
var statearr_66402_66486 = state_66384__$1;
(statearr_66402_66486[(2)] = inst_66272);

(statearr_66402_66486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (21))){
var inst_66298 = (state_66384[(19)]);
var inst_66298__$1 = (state_66384[(2)]);
var inst_66299 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_66298__$1);
var state_66384__$1 = (function (){var statearr_66403 = state_66384;
(statearr_66403[(19)] = inst_66298__$1);

return statearr_66403;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66384__$1,(22),inst_66299);
} else {
if((state_val_66385 === (31))){
var inst_66382 = (state_66384[(2)]);
var state_66384__$1 = state_66384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66384__$1,inst_66382);
} else {
if((state_val_66385 === (32))){
var inst_66338 = (state_66384[(16)]);
var inst_66343 = inst_66338.cljs$lang$protocol_mask$partition0$;
var inst_66344 = (inst_66343 & (64));
var inst_66345 = inst_66338.cljs$core$ISeq$;
var inst_66346 = (inst_66344) || (inst_66345);
var state_66384__$1 = state_66384;
if(cljs.core.truth_(inst_66346)){
var statearr_66404_66487 = state_66384__$1;
(statearr_66404_66487[(1)] = (35));

} else {
var statearr_66405_66488 = state_66384__$1;
(statearr_66405_66488[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (40))){
var inst_66359 = (state_66384[(20)]);
var inst_66358 = (state_66384[(2)]);
var inst_66359__$1 = cljs.core.get.call(null,inst_66358,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_66360 = cljs.core.get.call(null,inst_66358,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_66361 = cljs.core.not_empty.call(null,inst_66359__$1);
var state_66384__$1 = (function (){var statearr_66406 = state_66384;
(statearr_66406[(21)] = inst_66360);

(statearr_66406[(20)] = inst_66359__$1);

return statearr_66406;
})();
if(cljs.core.truth_(inst_66361)){
var statearr_66407_66489 = state_66384__$1;
(statearr_66407_66489[(1)] = (41));

} else {
var statearr_66408_66490 = state_66384__$1;
(statearr_66408_66490[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (33))){
var state_66384__$1 = state_66384;
var statearr_66409_66491 = state_66384__$1;
(statearr_66409_66491[(2)] = false);

(statearr_66409_66491[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (13))){
var inst_66258 = (state_66384[(22)]);
var inst_66262 = cljs.core.chunk_first.call(null,inst_66258);
var inst_66263 = cljs.core.chunk_rest.call(null,inst_66258);
var inst_66264 = cljs.core.count.call(null,inst_66262);
var inst_66245 = inst_66263;
var inst_66246 = inst_66262;
var inst_66247 = inst_66264;
var inst_66248 = (0);
var state_66384__$1 = (function (){var statearr_66410 = state_66384;
(statearr_66410[(7)] = inst_66248);

(statearr_66410[(8)] = inst_66245);

(statearr_66410[(9)] = inst_66247);

(statearr_66410[(10)] = inst_66246);

return statearr_66410;
})();
var statearr_66411_66492 = state_66384__$1;
(statearr_66411_66492[(2)] = null);

(statearr_66411_66492[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (22))){
var inst_66301 = (state_66384[(23)]);
var inst_66306 = (state_66384[(24)]);
var inst_66298 = (state_66384[(19)]);
var inst_66302 = (state_66384[(25)]);
var inst_66301__$1 = (state_66384[(2)]);
var inst_66302__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_66301__$1);
var inst_66303 = (function (){var all_files = inst_66298;
var res_SINGLEQUOTE_ = inst_66301__$1;
var res = inst_66302__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_66301,inst_66306,inst_66298,inst_66302,inst_66301__$1,inst_66302__$1,state_val_66385,c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__65981_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__65981_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_66301,inst_66306,inst_66298,inst_66302,inst_66301__$1,inst_66302__$1,state_val_66385,c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66304 = cljs.core.filter.call(null,inst_66303,inst_66301__$1);
var inst_66305 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_66306__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_66305);
var inst_66307 = cljs.core.not_empty.call(null,inst_66306__$1);
var state_66384__$1 = (function (){var statearr_66412 = state_66384;
(statearr_66412[(23)] = inst_66301__$1);

(statearr_66412[(26)] = inst_66304);

(statearr_66412[(24)] = inst_66306__$1);

(statearr_66412[(25)] = inst_66302__$1);

return statearr_66412;
})();
if(cljs.core.truth_(inst_66307)){
var statearr_66413_66493 = state_66384__$1;
(statearr_66413_66493[(1)] = (23));

} else {
var statearr_66414_66494 = state_66384__$1;
(statearr_66414_66494[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (36))){
var state_66384__$1 = state_66384;
var statearr_66415_66495 = state_66384__$1;
(statearr_66415_66495[(2)] = false);

(statearr_66415_66495[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (41))){
var inst_66359 = (state_66384[(20)]);
var inst_66363 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_66364 = cljs.core.map.call(null,inst_66363,inst_66359);
var inst_66365 = cljs.core.pr_str.call(null,inst_66364);
var inst_66366 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_66365)].join('');
var inst_66367 = figwheel.client.utils.log.call(null,inst_66366);
var state_66384__$1 = state_66384;
var statearr_66416_66496 = state_66384__$1;
(statearr_66416_66496[(2)] = inst_66367);

(statearr_66416_66496[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (43))){
var inst_66360 = (state_66384[(21)]);
var inst_66370 = (state_66384[(2)]);
var inst_66371 = cljs.core.not_empty.call(null,inst_66360);
var state_66384__$1 = (function (){var statearr_66417 = state_66384;
(statearr_66417[(27)] = inst_66370);

return statearr_66417;
})();
if(cljs.core.truth_(inst_66371)){
var statearr_66418_66497 = state_66384__$1;
(statearr_66418_66497[(1)] = (44));

} else {
var statearr_66419_66498 = state_66384__$1;
(statearr_66419_66498[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (29))){
var inst_66301 = (state_66384[(23)]);
var inst_66304 = (state_66384[(26)]);
var inst_66306 = (state_66384[(24)]);
var inst_66298 = (state_66384[(19)]);
var inst_66302 = (state_66384[(25)]);
var inst_66338 = (state_66384[(16)]);
var inst_66334 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_66337 = (function (){var all_files = inst_66298;
var res_SINGLEQUOTE_ = inst_66301;
var res = inst_66302;
var files_not_loaded = inst_66304;
var dependencies_that_loaded = inst_66306;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66301,inst_66304,inst_66306,inst_66298,inst_66302,inst_66338,inst_66334,state_val_66385,c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66336){
var map__66420 = p__66336;
var map__66420__$1 = ((((!((map__66420 == null)))?((((map__66420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66420):map__66420);
var namespace = cljs.core.get.call(null,map__66420__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66301,inst_66304,inst_66306,inst_66298,inst_66302,inst_66338,inst_66334,state_val_66385,c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66338__$1 = cljs.core.group_by.call(null,inst_66337,inst_66304);
var inst_66340 = (inst_66338__$1 == null);
var inst_66341 = cljs.core.not.call(null,inst_66340);
var state_66384__$1 = (function (){var statearr_66422 = state_66384;
(statearr_66422[(28)] = inst_66334);

(statearr_66422[(16)] = inst_66338__$1);

return statearr_66422;
})();
if(inst_66341){
var statearr_66423_66499 = state_66384__$1;
(statearr_66423_66499[(1)] = (32));

} else {
var statearr_66424_66500 = state_66384__$1;
(statearr_66424_66500[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (44))){
var inst_66360 = (state_66384[(21)]);
var inst_66373 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_66360);
var inst_66374 = cljs.core.pr_str.call(null,inst_66373);
var inst_66375 = [cljs.core.str("not required: "),cljs.core.str(inst_66374)].join('');
var inst_66376 = figwheel.client.utils.log.call(null,inst_66375);
var state_66384__$1 = state_66384;
var statearr_66425_66501 = state_66384__$1;
(statearr_66425_66501[(2)] = inst_66376);

(statearr_66425_66501[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (6))){
var inst_66279 = (state_66384[(2)]);
var state_66384__$1 = state_66384;
var statearr_66426_66502 = state_66384__$1;
(statearr_66426_66502[(2)] = inst_66279);

(statearr_66426_66502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (28))){
var inst_66304 = (state_66384[(26)]);
var inst_66331 = (state_66384[(2)]);
var inst_66332 = cljs.core.not_empty.call(null,inst_66304);
var state_66384__$1 = (function (){var statearr_66427 = state_66384;
(statearr_66427[(29)] = inst_66331);

return statearr_66427;
})();
if(cljs.core.truth_(inst_66332)){
var statearr_66428_66503 = state_66384__$1;
(statearr_66428_66503[(1)] = (29));

} else {
var statearr_66429_66504 = state_66384__$1;
(statearr_66429_66504[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (25))){
var inst_66302 = (state_66384[(25)]);
var inst_66318 = (state_66384[(2)]);
var inst_66319 = cljs.core.not_empty.call(null,inst_66302);
var state_66384__$1 = (function (){var statearr_66430 = state_66384;
(statearr_66430[(30)] = inst_66318);

return statearr_66430;
})();
if(cljs.core.truth_(inst_66319)){
var statearr_66431_66505 = state_66384__$1;
(statearr_66431_66505[(1)] = (26));

} else {
var statearr_66432_66506 = state_66384__$1;
(statearr_66432_66506[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (34))){
var inst_66353 = (state_66384[(2)]);
var state_66384__$1 = state_66384;
if(cljs.core.truth_(inst_66353)){
var statearr_66433_66507 = state_66384__$1;
(statearr_66433_66507[(1)] = (38));

} else {
var statearr_66434_66508 = state_66384__$1;
(statearr_66434_66508[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (17))){
var state_66384__$1 = state_66384;
var statearr_66435_66509 = state_66384__$1;
(statearr_66435_66509[(2)] = recompile_dependents);

(statearr_66435_66509[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (3))){
var state_66384__$1 = state_66384;
var statearr_66436_66510 = state_66384__$1;
(statearr_66436_66510[(2)] = null);

(statearr_66436_66510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (12))){
var inst_66275 = (state_66384[(2)]);
var state_66384__$1 = state_66384;
var statearr_66437_66511 = state_66384__$1;
(statearr_66437_66511[(2)] = inst_66275);

(statearr_66437_66511[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (2))){
var inst_66237 = (state_66384[(13)]);
var inst_66244 = cljs.core.seq.call(null,inst_66237);
var inst_66245 = inst_66244;
var inst_66246 = null;
var inst_66247 = (0);
var inst_66248 = (0);
var state_66384__$1 = (function (){var statearr_66438 = state_66384;
(statearr_66438[(7)] = inst_66248);

(statearr_66438[(8)] = inst_66245);

(statearr_66438[(9)] = inst_66247);

(statearr_66438[(10)] = inst_66246);

return statearr_66438;
})();
var statearr_66439_66512 = state_66384__$1;
(statearr_66439_66512[(2)] = null);

(statearr_66439_66512[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (23))){
var inst_66301 = (state_66384[(23)]);
var inst_66304 = (state_66384[(26)]);
var inst_66306 = (state_66384[(24)]);
var inst_66298 = (state_66384[(19)]);
var inst_66302 = (state_66384[(25)]);
var inst_66309 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_66311 = (function (){var all_files = inst_66298;
var res_SINGLEQUOTE_ = inst_66301;
var res = inst_66302;
var files_not_loaded = inst_66304;
var dependencies_that_loaded = inst_66306;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66301,inst_66304,inst_66306,inst_66298,inst_66302,inst_66309,state_val_66385,c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66310){
var map__66440 = p__66310;
var map__66440__$1 = ((((!((map__66440 == null)))?((((map__66440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66440):map__66440);
var request_url = cljs.core.get.call(null,map__66440__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66301,inst_66304,inst_66306,inst_66298,inst_66302,inst_66309,state_val_66385,c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66312 = cljs.core.reverse.call(null,inst_66306);
var inst_66313 = cljs.core.map.call(null,inst_66311,inst_66312);
var inst_66314 = cljs.core.pr_str.call(null,inst_66313);
var inst_66315 = figwheel.client.utils.log.call(null,inst_66314);
var state_66384__$1 = (function (){var statearr_66442 = state_66384;
(statearr_66442[(31)] = inst_66309);

return statearr_66442;
})();
var statearr_66443_66513 = state_66384__$1;
(statearr_66443_66513[(2)] = inst_66315);

(statearr_66443_66513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (35))){
var state_66384__$1 = state_66384;
var statearr_66444_66514 = state_66384__$1;
(statearr_66444_66514[(2)] = true);

(statearr_66444_66514[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (19))){
var inst_66288 = (state_66384[(12)]);
var inst_66294 = figwheel.client.file_reloading.expand_files.call(null,inst_66288);
var state_66384__$1 = state_66384;
var statearr_66445_66515 = state_66384__$1;
(statearr_66445_66515[(2)] = inst_66294);

(statearr_66445_66515[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (11))){
var state_66384__$1 = state_66384;
var statearr_66446_66516 = state_66384__$1;
(statearr_66446_66516[(2)] = null);

(statearr_66446_66516[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (9))){
var inst_66277 = (state_66384[(2)]);
var state_66384__$1 = state_66384;
var statearr_66447_66517 = state_66384__$1;
(statearr_66447_66517[(2)] = inst_66277);

(statearr_66447_66517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (5))){
var inst_66248 = (state_66384[(7)]);
var inst_66247 = (state_66384[(9)]);
var inst_66250 = (inst_66248 < inst_66247);
var inst_66251 = inst_66250;
var state_66384__$1 = state_66384;
if(cljs.core.truth_(inst_66251)){
var statearr_66448_66518 = state_66384__$1;
(statearr_66448_66518[(1)] = (7));

} else {
var statearr_66449_66519 = state_66384__$1;
(statearr_66449_66519[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (14))){
var inst_66258 = (state_66384[(22)]);
var inst_66267 = cljs.core.first.call(null,inst_66258);
var inst_66268 = figwheel.client.file_reloading.eval_body.call(null,inst_66267,opts);
var inst_66269 = cljs.core.next.call(null,inst_66258);
var inst_66245 = inst_66269;
var inst_66246 = null;
var inst_66247 = (0);
var inst_66248 = (0);
var state_66384__$1 = (function (){var statearr_66450 = state_66384;
(statearr_66450[(32)] = inst_66268);

(statearr_66450[(7)] = inst_66248);

(statearr_66450[(8)] = inst_66245);

(statearr_66450[(9)] = inst_66247);

(statearr_66450[(10)] = inst_66246);

return statearr_66450;
})();
var statearr_66451_66520 = state_66384__$1;
(statearr_66451_66520[(2)] = null);

(statearr_66451_66520[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (45))){
var state_66384__$1 = state_66384;
var statearr_66452_66521 = state_66384__$1;
(statearr_66452_66521[(2)] = null);

(statearr_66452_66521[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (26))){
var inst_66301 = (state_66384[(23)]);
var inst_66304 = (state_66384[(26)]);
var inst_66306 = (state_66384[(24)]);
var inst_66298 = (state_66384[(19)]);
var inst_66302 = (state_66384[(25)]);
var inst_66321 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_66323 = (function (){var all_files = inst_66298;
var res_SINGLEQUOTE_ = inst_66301;
var res = inst_66302;
var files_not_loaded = inst_66304;
var dependencies_that_loaded = inst_66306;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66301,inst_66304,inst_66306,inst_66298,inst_66302,inst_66321,state_val_66385,c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66322){
var map__66453 = p__66322;
var map__66453__$1 = ((((!((map__66453 == null)))?((((map__66453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66453):map__66453);
var namespace = cljs.core.get.call(null,map__66453__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__66453__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66301,inst_66304,inst_66306,inst_66298,inst_66302,inst_66321,state_val_66385,c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66324 = cljs.core.map.call(null,inst_66323,inst_66302);
var inst_66325 = cljs.core.pr_str.call(null,inst_66324);
var inst_66326 = figwheel.client.utils.log.call(null,inst_66325);
var inst_66327 = (function (){var all_files = inst_66298;
var res_SINGLEQUOTE_ = inst_66301;
var res = inst_66302;
var files_not_loaded = inst_66304;
var dependencies_that_loaded = inst_66306;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66301,inst_66304,inst_66306,inst_66298,inst_66302,inst_66321,inst_66323,inst_66324,inst_66325,inst_66326,state_val_66385,c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66301,inst_66304,inst_66306,inst_66298,inst_66302,inst_66321,inst_66323,inst_66324,inst_66325,inst_66326,state_val_66385,c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66328 = setTimeout(inst_66327,(10));
var state_66384__$1 = (function (){var statearr_66455 = state_66384;
(statearr_66455[(33)] = inst_66326);

(statearr_66455[(34)] = inst_66321);

return statearr_66455;
})();
var statearr_66456_66522 = state_66384__$1;
(statearr_66456_66522[(2)] = inst_66328);

(statearr_66456_66522[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (16))){
var state_66384__$1 = state_66384;
var statearr_66457_66523 = state_66384__$1;
(statearr_66457_66523[(2)] = reload_dependents);

(statearr_66457_66523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (38))){
var inst_66338 = (state_66384[(16)]);
var inst_66355 = cljs.core.apply.call(null,cljs.core.hash_map,inst_66338);
var state_66384__$1 = state_66384;
var statearr_66458_66524 = state_66384__$1;
(statearr_66458_66524[(2)] = inst_66355);

(statearr_66458_66524[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (30))){
var state_66384__$1 = state_66384;
var statearr_66459_66525 = state_66384__$1;
(statearr_66459_66525[(2)] = null);

(statearr_66459_66525[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (10))){
var inst_66258 = (state_66384[(22)]);
var inst_66260 = cljs.core.chunked_seq_QMARK_.call(null,inst_66258);
var state_66384__$1 = state_66384;
if(inst_66260){
var statearr_66460_66526 = state_66384__$1;
(statearr_66460_66526[(1)] = (13));

} else {
var statearr_66461_66527 = state_66384__$1;
(statearr_66461_66527[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (18))){
var inst_66292 = (state_66384[(2)]);
var state_66384__$1 = state_66384;
if(cljs.core.truth_(inst_66292)){
var statearr_66462_66528 = state_66384__$1;
(statearr_66462_66528[(1)] = (19));

} else {
var statearr_66463_66529 = state_66384__$1;
(statearr_66463_66529[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (42))){
var state_66384__$1 = state_66384;
var statearr_66464_66530 = state_66384__$1;
(statearr_66464_66530[(2)] = null);

(statearr_66464_66530[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (37))){
var inst_66350 = (state_66384[(2)]);
var state_66384__$1 = state_66384;
var statearr_66465_66531 = state_66384__$1;
(statearr_66465_66531[(2)] = inst_66350);

(statearr_66465_66531[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66385 === (8))){
var inst_66258 = (state_66384[(22)]);
var inst_66245 = (state_66384[(8)]);
var inst_66258__$1 = cljs.core.seq.call(null,inst_66245);
var state_66384__$1 = (function (){var statearr_66466 = state_66384;
(statearr_66466[(22)] = inst_66258__$1);

return statearr_66466;
})();
if(inst_66258__$1){
var statearr_66467_66532 = state_66384__$1;
(statearr_66467_66532[(1)] = (10));

} else {
var statearr_66468_66533 = state_66384__$1;
(statearr_66468_66533[(1)] = (11));

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
});})(c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28286__auto__,c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____0 = (function (){
var statearr_66472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66472[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__);

(statearr_66472[(1)] = (1));

return statearr_66472;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____1 = (function (state_66384){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_66384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e66473){if((e66473 instanceof Object)){
var ex__28290__auto__ = e66473;
var statearr_66474_66535 = state_66384;
(statearr_66474_66535[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66536 = state_66384;
state_66384 = G__66536;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__ = function(state_66384){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____1.call(this,state_66384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28400__auto__ = (function (){var statearr_66475 = f__28399__auto__.call(null);
(statearr_66475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_66475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto__,map__66230,map__66230__$1,opts,before_jsload,on_jsload,reload_dependents,map__66231,map__66231__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28398__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__66539,link){
var map__66542 = p__66539;
var map__66542__$1 = ((((!((map__66542 == null)))?((((map__66542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66542):map__66542);
var file = cljs.core.get.call(null,map__66542__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__66542,map__66542__$1,file){
return (function (p1__66537_SHARP_,p2__66538_SHARP_){
if(cljs.core._EQ_.call(null,p1__66537_SHARP_,p2__66538_SHARP_)){
return p1__66537_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__66542,map__66542__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__66548){
var map__66549 = p__66548;
var map__66549__$1 = ((((!((map__66549 == null)))?((((map__66549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66549):map__66549);
var match_length = cljs.core.get.call(null,map__66549__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__66549__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__66544_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__66544_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__66551_SHARP_,p2__66552_SHARP_){
return cljs.core.assoc.call(null,p1__66551_SHARP_,cljs.core.get.call(null,p2__66552_SHARP_,key),p2__66552_SHARP_);
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
var loaded_f_datas_66553 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_66553);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_66553);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__66554,p__66555){
var map__66560 = p__66554;
var map__66560__$1 = ((((!((map__66560 == null)))?((((map__66560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66560):map__66560);
var on_cssload = cljs.core.get.call(null,map__66560__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__66561 = p__66555;
var map__66561__$1 = ((((!((map__66561 == null)))?((((map__66561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66561):map__66561);
var files_msg = map__66561__$1;
var files = cljs.core.get.call(null,map__66561__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1488396753324