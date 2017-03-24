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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__81528_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__81528_SHARP_));
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
var seq__81533 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__81534 = null;
var count__81535 = (0);
var i__81536 = (0);
while(true){
if((i__81536 < count__81535)){
var n = cljs.core._nth.call(null,chunk__81534,i__81536);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__81537 = seq__81533;
var G__81538 = chunk__81534;
var G__81539 = count__81535;
var G__81540 = (i__81536 + (1));
seq__81533 = G__81537;
chunk__81534 = G__81538;
count__81535 = G__81539;
i__81536 = G__81540;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__81533);
if(temp__4657__auto__){
var seq__81533__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81533__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__81533__$1);
var G__81541 = cljs.core.chunk_rest.call(null,seq__81533__$1);
var G__81542 = c__25936__auto__;
var G__81543 = cljs.core.count.call(null,c__25936__auto__);
var G__81544 = (0);
seq__81533 = G__81541;
chunk__81534 = G__81542;
count__81535 = G__81543;
i__81536 = G__81544;
continue;
} else {
var n = cljs.core.first.call(null,seq__81533__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__81545 = cljs.core.next.call(null,seq__81533__$1);
var G__81546 = null;
var G__81547 = (0);
var G__81548 = (0);
seq__81533 = G__81545;
chunk__81534 = G__81546;
count__81535 = G__81547;
i__81536 = G__81548;
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

var seq__81600_81611 = cljs.core.seq.call(null,deps);
var chunk__81601_81612 = null;
var count__81602_81613 = (0);
var i__81603_81614 = (0);
while(true){
if((i__81603_81614 < count__81602_81613)){
var dep_81615 = cljs.core._nth.call(null,chunk__81601_81612,i__81603_81614);
topo_sort_helper_STAR_.call(null,dep_81615,(depth + (1)),state);

var G__81616 = seq__81600_81611;
var G__81617 = chunk__81601_81612;
var G__81618 = count__81602_81613;
var G__81619 = (i__81603_81614 + (1));
seq__81600_81611 = G__81616;
chunk__81601_81612 = G__81617;
count__81602_81613 = G__81618;
i__81603_81614 = G__81619;
continue;
} else {
var temp__4657__auto___81620 = cljs.core.seq.call(null,seq__81600_81611);
if(temp__4657__auto___81620){
var seq__81600_81621__$1 = temp__4657__auto___81620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81600_81621__$1)){
var c__25936__auto___81622 = cljs.core.chunk_first.call(null,seq__81600_81621__$1);
var G__81623 = cljs.core.chunk_rest.call(null,seq__81600_81621__$1);
var G__81624 = c__25936__auto___81622;
var G__81625 = cljs.core.count.call(null,c__25936__auto___81622);
var G__81626 = (0);
seq__81600_81611 = G__81623;
chunk__81601_81612 = G__81624;
count__81602_81613 = G__81625;
i__81603_81614 = G__81626;
continue;
} else {
var dep_81627 = cljs.core.first.call(null,seq__81600_81621__$1);
topo_sort_helper_STAR_.call(null,dep_81627,(depth + (1)),state);

var G__81628 = cljs.core.next.call(null,seq__81600_81621__$1);
var G__81629 = null;
var G__81630 = (0);
var G__81631 = (0);
seq__81600_81611 = G__81628;
chunk__81601_81612 = G__81629;
count__81602_81613 = G__81630;
i__81603_81614 = G__81631;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__81604){
var vec__81608 = p__81604;
var seq__81609 = cljs.core.seq.call(null,vec__81608);
var first__81610 = cljs.core.first.call(null,seq__81609);
var seq__81609__$1 = cljs.core.next.call(null,seq__81609);
var x = first__81610;
var xs = seq__81609__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__81608,seq__81609,first__81610,seq__81609__$1,x,xs,get_deps__$1){
return (function (p1__81549_SHARP_){
return clojure.set.difference.call(null,p1__81549_SHARP_,x);
});})(vec__81608,seq__81609,first__81610,seq__81609__$1,x,xs,get_deps__$1))
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
var seq__81644 = cljs.core.seq.call(null,provides);
var chunk__81645 = null;
var count__81646 = (0);
var i__81647 = (0);
while(true){
if((i__81647 < count__81646)){
var prov = cljs.core._nth.call(null,chunk__81645,i__81647);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__81648_81656 = cljs.core.seq.call(null,requires);
var chunk__81649_81657 = null;
var count__81650_81658 = (0);
var i__81651_81659 = (0);
while(true){
if((i__81651_81659 < count__81650_81658)){
var req_81660 = cljs.core._nth.call(null,chunk__81649_81657,i__81651_81659);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_81660,prov);

var G__81661 = seq__81648_81656;
var G__81662 = chunk__81649_81657;
var G__81663 = count__81650_81658;
var G__81664 = (i__81651_81659 + (1));
seq__81648_81656 = G__81661;
chunk__81649_81657 = G__81662;
count__81650_81658 = G__81663;
i__81651_81659 = G__81664;
continue;
} else {
var temp__4657__auto___81665 = cljs.core.seq.call(null,seq__81648_81656);
if(temp__4657__auto___81665){
var seq__81648_81666__$1 = temp__4657__auto___81665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81648_81666__$1)){
var c__25936__auto___81667 = cljs.core.chunk_first.call(null,seq__81648_81666__$1);
var G__81668 = cljs.core.chunk_rest.call(null,seq__81648_81666__$1);
var G__81669 = c__25936__auto___81667;
var G__81670 = cljs.core.count.call(null,c__25936__auto___81667);
var G__81671 = (0);
seq__81648_81656 = G__81668;
chunk__81649_81657 = G__81669;
count__81650_81658 = G__81670;
i__81651_81659 = G__81671;
continue;
} else {
var req_81672 = cljs.core.first.call(null,seq__81648_81666__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_81672,prov);

var G__81673 = cljs.core.next.call(null,seq__81648_81666__$1);
var G__81674 = null;
var G__81675 = (0);
var G__81676 = (0);
seq__81648_81656 = G__81673;
chunk__81649_81657 = G__81674;
count__81650_81658 = G__81675;
i__81651_81659 = G__81676;
continue;
}
} else {
}
}
break;
}

var G__81677 = seq__81644;
var G__81678 = chunk__81645;
var G__81679 = count__81646;
var G__81680 = (i__81647 + (1));
seq__81644 = G__81677;
chunk__81645 = G__81678;
count__81646 = G__81679;
i__81647 = G__81680;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__81644);
if(temp__4657__auto__){
var seq__81644__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81644__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__81644__$1);
var G__81681 = cljs.core.chunk_rest.call(null,seq__81644__$1);
var G__81682 = c__25936__auto__;
var G__81683 = cljs.core.count.call(null,c__25936__auto__);
var G__81684 = (0);
seq__81644 = G__81681;
chunk__81645 = G__81682;
count__81646 = G__81683;
i__81647 = G__81684;
continue;
} else {
var prov = cljs.core.first.call(null,seq__81644__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__81652_81685 = cljs.core.seq.call(null,requires);
var chunk__81653_81686 = null;
var count__81654_81687 = (0);
var i__81655_81688 = (0);
while(true){
if((i__81655_81688 < count__81654_81687)){
var req_81689 = cljs.core._nth.call(null,chunk__81653_81686,i__81655_81688);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_81689,prov);

var G__81690 = seq__81652_81685;
var G__81691 = chunk__81653_81686;
var G__81692 = count__81654_81687;
var G__81693 = (i__81655_81688 + (1));
seq__81652_81685 = G__81690;
chunk__81653_81686 = G__81691;
count__81654_81687 = G__81692;
i__81655_81688 = G__81693;
continue;
} else {
var temp__4657__auto___81694__$1 = cljs.core.seq.call(null,seq__81652_81685);
if(temp__4657__auto___81694__$1){
var seq__81652_81695__$1 = temp__4657__auto___81694__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81652_81695__$1)){
var c__25936__auto___81696 = cljs.core.chunk_first.call(null,seq__81652_81695__$1);
var G__81697 = cljs.core.chunk_rest.call(null,seq__81652_81695__$1);
var G__81698 = c__25936__auto___81696;
var G__81699 = cljs.core.count.call(null,c__25936__auto___81696);
var G__81700 = (0);
seq__81652_81685 = G__81697;
chunk__81653_81686 = G__81698;
count__81654_81687 = G__81699;
i__81655_81688 = G__81700;
continue;
} else {
var req_81701 = cljs.core.first.call(null,seq__81652_81695__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_81701,prov);

var G__81702 = cljs.core.next.call(null,seq__81652_81695__$1);
var G__81703 = null;
var G__81704 = (0);
var G__81705 = (0);
seq__81652_81685 = G__81702;
chunk__81653_81686 = G__81703;
count__81654_81687 = G__81704;
i__81655_81688 = G__81705;
continue;
}
} else {
}
}
break;
}

var G__81706 = cljs.core.next.call(null,seq__81644__$1);
var G__81707 = null;
var G__81708 = (0);
var G__81709 = (0);
seq__81644 = G__81706;
chunk__81645 = G__81707;
count__81646 = G__81708;
i__81647 = G__81709;
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
var seq__81714_81718 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__81715_81719 = null;
var count__81716_81720 = (0);
var i__81717_81721 = (0);
while(true){
if((i__81717_81721 < count__81716_81720)){
var ns_81722 = cljs.core._nth.call(null,chunk__81715_81719,i__81717_81721);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_81722);

var G__81723 = seq__81714_81718;
var G__81724 = chunk__81715_81719;
var G__81725 = count__81716_81720;
var G__81726 = (i__81717_81721 + (1));
seq__81714_81718 = G__81723;
chunk__81715_81719 = G__81724;
count__81716_81720 = G__81725;
i__81717_81721 = G__81726;
continue;
} else {
var temp__4657__auto___81727 = cljs.core.seq.call(null,seq__81714_81718);
if(temp__4657__auto___81727){
var seq__81714_81728__$1 = temp__4657__auto___81727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81714_81728__$1)){
var c__25936__auto___81729 = cljs.core.chunk_first.call(null,seq__81714_81728__$1);
var G__81730 = cljs.core.chunk_rest.call(null,seq__81714_81728__$1);
var G__81731 = c__25936__auto___81729;
var G__81732 = cljs.core.count.call(null,c__25936__auto___81729);
var G__81733 = (0);
seq__81714_81718 = G__81730;
chunk__81715_81719 = G__81731;
count__81716_81720 = G__81732;
i__81717_81721 = G__81733;
continue;
} else {
var ns_81734 = cljs.core.first.call(null,seq__81714_81728__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_81734);

var G__81735 = cljs.core.next.call(null,seq__81714_81728__$1);
var G__81736 = null;
var G__81737 = (0);
var G__81738 = (0);
seq__81714_81718 = G__81735;
chunk__81715_81719 = G__81736;
count__81716_81720 = G__81737;
i__81717_81721 = G__81738;
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
var G__81739__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__81739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81740__i = 0, G__81740__a = new Array(arguments.length -  0);
while (G__81740__i < G__81740__a.length) {G__81740__a[G__81740__i] = arguments[G__81740__i + 0]; ++G__81740__i;}
  args = new cljs.core.IndexedSeq(G__81740__a,0);
} 
return G__81739__delegate.call(this,args);};
G__81739.cljs$lang$maxFixedArity = 0;
G__81739.cljs$lang$applyTo = (function (arglist__81741){
var args = cljs.core.seq(arglist__81741);
return G__81739__delegate(args);
});
G__81739.cljs$core$IFn$_invoke$arity$variadic = G__81739__delegate;
return G__81739;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__81742 = cljs.core._EQ_;
var expr__81743 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__81742.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__81743))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__81742,expr__81743){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__81742,expr__81743))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__81742,expr__81743){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e81745){if((e81745 instanceof Error)){
var e = e81745;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e81745;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__81742,expr__81743))
} else {
if(cljs.core.truth_(pred__81742.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__81743))){
return ((function (pred__81742,expr__81743){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__81742,expr__81743){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__81742,expr__81743))
);

return deferred.addErrback(((function (deferred,pred__81742,expr__81743){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__81742,expr__81743))
);
});
;})(pred__81742,expr__81743))
} else {
if(cljs.core.truth_(pred__81742.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__81743))){
return ((function (pred__81742,expr__81743){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e81746){if((e81746 instanceof Error)){
var e = e81746;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e81746;

}
}})());
});
;})(pred__81742,expr__81743))
} else {
return ((function (pred__81742,expr__81743){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__81742,expr__81743))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__81747,callback){
var map__81750 = p__81747;
var map__81750__$1 = ((((!((map__81750 == null)))?((((map__81750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81750):map__81750);
var file_msg = map__81750__$1;
var request_url = cljs.core.get.call(null,map__81750__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__81750,map__81750__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__81750,map__81750__$1,file_msg,request_url))
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
return (function (state_81774){
var state_val_81775 = (state_81774[(1)]);
if((state_val_81775 === (7))){
var inst_81770 = (state_81774[(2)]);
var state_81774__$1 = state_81774;
var statearr_81776_81796 = state_81774__$1;
(statearr_81776_81796[(2)] = inst_81770);

(statearr_81776_81796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81775 === (1))){
var state_81774__$1 = state_81774;
var statearr_81777_81797 = state_81774__$1;
(statearr_81777_81797[(2)] = null);

(statearr_81777_81797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81775 === (4))){
var inst_81754 = (state_81774[(7)]);
var inst_81754__$1 = (state_81774[(2)]);
var state_81774__$1 = (function (){var statearr_81778 = state_81774;
(statearr_81778[(7)] = inst_81754__$1);

return statearr_81778;
})();
if(cljs.core.truth_(inst_81754__$1)){
var statearr_81779_81798 = state_81774__$1;
(statearr_81779_81798[(1)] = (5));

} else {
var statearr_81780_81799 = state_81774__$1;
(statearr_81780_81799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81775 === (6))){
var state_81774__$1 = state_81774;
var statearr_81781_81800 = state_81774__$1;
(statearr_81781_81800[(2)] = null);

(statearr_81781_81800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81775 === (3))){
var inst_81772 = (state_81774[(2)]);
var state_81774__$1 = state_81774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81774__$1,inst_81772);
} else {
if((state_val_81775 === (2))){
var state_81774__$1 = state_81774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81774__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_81775 === (11))){
var inst_81766 = (state_81774[(2)]);
var state_81774__$1 = (function (){var statearr_81782 = state_81774;
(statearr_81782[(8)] = inst_81766);

return statearr_81782;
})();
var statearr_81783_81801 = state_81774__$1;
(statearr_81783_81801[(2)] = null);

(statearr_81783_81801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81775 === (9))){
var inst_81758 = (state_81774[(9)]);
var inst_81760 = (state_81774[(10)]);
var inst_81762 = inst_81760.call(null,inst_81758);
var state_81774__$1 = state_81774;
var statearr_81784_81802 = state_81774__$1;
(statearr_81784_81802[(2)] = inst_81762);

(statearr_81784_81802[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81775 === (5))){
var inst_81754 = (state_81774[(7)]);
var inst_81756 = figwheel.client.file_reloading.blocking_load.call(null,inst_81754);
var state_81774__$1 = state_81774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81774__$1,(8),inst_81756);
} else {
if((state_val_81775 === (10))){
var inst_81758 = (state_81774[(9)]);
var inst_81764 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_81758);
var state_81774__$1 = state_81774;
var statearr_81785_81803 = state_81774__$1;
(statearr_81785_81803[(2)] = inst_81764);

(statearr_81785_81803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81775 === (8))){
var inst_81760 = (state_81774[(10)]);
var inst_81754 = (state_81774[(7)]);
var inst_81758 = (state_81774[(2)]);
var inst_81759 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_81760__$1 = cljs.core.get.call(null,inst_81759,inst_81754);
var state_81774__$1 = (function (){var statearr_81786 = state_81774;
(statearr_81786[(9)] = inst_81758);

(statearr_81786[(10)] = inst_81760__$1);

return statearr_81786;
})();
if(cljs.core.truth_(inst_81760__$1)){
var statearr_81787_81804 = state_81774__$1;
(statearr_81787_81804[(1)] = (9));

} else {
var statearr_81788_81805 = state_81774__$1;
(statearr_81788_81805[(1)] = (10));

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
var statearr_81792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_81792[(0)] = figwheel$client$file_reloading$state_machine__28287__auto__);

(statearr_81792[(1)] = (1));

return statearr_81792;
});
var figwheel$client$file_reloading$state_machine__28287__auto____1 = (function (state_81774){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_81774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e81793){if((e81793 instanceof Object)){
var ex__28290__auto__ = e81793;
var statearr_81794_81806 = state_81774;
(statearr_81794_81806[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81807 = state_81774;
state_81774 = G__81807;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28287__auto__ = function(state_81774){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28287__auto____1.call(this,state_81774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28287__auto____0;
figwheel$client$file_reloading$state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28287__auto____1;
return figwheel$client$file_reloading$state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__))
})();
var state__28400__auto__ = (function (){var statearr_81795 = f__28399__auto__.call(null);
(statearr_81795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_81795;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__81808,callback){
var map__81811 = p__81808;
var map__81811__$1 = ((((!((map__81811 == null)))?((((map__81811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81811):map__81811);
var file_msg = map__81811__$1;
var namespace = cljs.core.get.call(null,map__81811__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__81811,map__81811__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__81811,map__81811__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__81813){
var map__81816 = p__81813;
var map__81816__$1 = ((((!((map__81816 == null)))?((((map__81816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81816):map__81816);
var file_msg = map__81816__$1;
var namespace = cljs.core.get.call(null,map__81816__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__81818){
var map__81821 = p__81818;
var map__81821__$1 = ((((!((map__81821 == null)))?((((map__81821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81821):map__81821);
var file_msg = map__81821__$1;
var namespace = cljs.core.get.call(null,map__81821__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__81823,callback){
var map__81826 = p__81823;
var map__81826__$1 = ((((!((map__81826 == null)))?((((map__81826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81826):map__81826);
var file_msg = map__81826__$1;
var request_url = cljs.core.get.call(null,map__81826__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__81826__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28398__auto___81930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto___81930,out){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto___81930,out){
return (function (state_81912){
var state_val_81913 = (state_81912[(1)]);
if((state_val_81913 === (1))){
var inst_81886 = cljs.core.seq.call(null,files);
var inst_81887 = cljs.core.first.call(null,inst_81886);
var inst_81888 = cljs.core.next.call(null,inst_81886);
var inst_81889 = files;
var state_81912__$1 = (function (){var statearr_81914 = state_81912;
(statearr_81914[(7)] = inst_81887);

(statearr_81914[(8)] = inst_81888);

(statearr_81914[(9)] = inst_81889);

return statearr_81914;
})();
var statearr_81915_81931 = state_81912__$1;
(statearr_81915_81931[(2)] = null);

(statearr_81915_81931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81913 === (2))){
var inst_81895 = (state_81912[(10)]);
var inst_81889 = (state_81912[(9)]);
var inst_81894 = cljs.core.seq.call(null,inst_81889);
var inst_81895__$1 = cljs.core.first.call(null,inst_81894);
var inst_81896 = cljs.core.next.call(null,inst_81894);
var inst_81897 = (inst_81895__$1 == null);
var inst_81898 = cljs.core.not.call(null,inst_81897);
var state_81912__$1 = (function (){var statearr_81916 = state_81912;
(statearr_81916[(10)] = inst_81895__$1);

(statearr_81916[(11)] = inst_81896);

return statearr_81916;
})();
if(inst_81898){
var statearr_81917_81932 = state_81912__$1;
(statearr_81917_81932[(1)] = (4));

} else {
var statearr_81918_81933 = state_81912__$1;
(statearr_81918_81933[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81913 === (3))){
var inst_81910 = (state_81912[(2)]);
var state_81912__$1 = state_81912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81912__$1,inst_81910);
} else {
if((state_val_81913 === (4))){
var inst_81895 = (state_81912[(10)]);
var inst_81900 = figwheel.client.file_reloading.reload_js_file.call(null,inst_81895);
var state_81912__$1 = state_81912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81912__$1,(7),inst_81900);
} else {
if((state_val_81913 === (5))){
var inst_81906 = cljs.core.async.close_BANG_.call(null,out);
var state_81912__$1 = state_81912;
var statearr_81919_81934 = state_81912__$1;
(statearr_81919_81934[(2)] = inst_81906);

(statearr_81919_81934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81913 === (6))){
var inst_81908 = (state_81912[(2)]);
var state_81912__$1 = state_81912;
var statearr_81920_81935 = state_81912__$1;
(statearr_81920_81935[(2)] = inst_81908);

(statearr_81920_81935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81913 === (7))){
var inst_81896 = (state_81912[(11)]);
var inst_81902 = (state_81912[(2)]);
var inst_81903 = cljs.core.async.put_BANG_.call(null,out,inst_81902);
var inst_81889 = inst_81896;
var state_81912__$1 = (function (){var statearr_81921 = state_81912;
(statearr_81921[(12)] = inst_81903);

(statearr_81921[(9)] = inst_81889);

return statearr_81921;
})();
var statearr_81922_81936 = state_81912__$1;
(statearr_81922_81936[(2)] = null);

(statearr_81922_81936[(1)] = (2));


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
});})(c__28398__auto___81930,out))
;
return ((function (switch__28286__auto__,c__28398__auto___81930,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____0 = (function (){
var statearr_81926 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81926[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__);

(statearr_81926[(1)] = (1));

return statearr_81926;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____1 = (function (state_81912){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_81912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e81927){if((e81927 instanceof Object)){
var ex__28290__auto__ = e81927;
var statearr_81928_81937 = state_81912;
(statearr_81928_81937[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81938 = state_81912;
state_81912 = G__81938;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__ = function(state_81912){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____1.call(this,state_81912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto___81930,out))
})();
var state__28400__auto__ = (function (){var statearr_81929 = f__28399__auto__.call(null);
(statearr_81929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto___81930);

return statearr_81929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto___81930,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__81939,opts){
var map__81943 = p__81939;
var map__81943__$1 = ((((!((map__81943 == null)))?((((map__81943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81943):map__81943);
var eval_body__$1 = cljs.core.get.call(null,map__81943__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__81943__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e81945){var e = e81945;
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
return (function (p1__81946_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__81946_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__81955){
var vec__81956 = p__81955;
var k = cljs.core.nth.call(null,vec__81956,(0),null);
var v = cljs.core.nth.call(null,vec__81956,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__81959){
var vec__81960 = p__81959;
var k = cljs.core.nth.call(null,vec__81960,(0),null);
var v = cljs.core.nth.call(null,vec__81960,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__81966,p__81967){
var map__82214 = p__81966;
var map__82214__$1 = ((((!((map__82214 == null)))?((((map__82214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82214):map__82214);
var opts = map__82214__$1;
var before_jsload = cljs.core.get.call(null,map__82214__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__82214__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__82214__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__82215 = p__81967;
var map__82215__$1 = ((((!((map__82215 == null)))?((((map__82215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82215):map__82215);
var msg = map__82215__$1;
var files = cljs.core.get.call(null,map__82215__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__82215__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__82215__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_82368){
var state_val_82369 = (state_82368[(1)]);
if((state_val_82369 === (7))){
var inst_82231 = (state_82368[(7)]);
var inst_82229 = (state_82368[(8)]);
var inst_82232 = (state_82368[(9)]);
var inst_82230 = (state_82368[(10)]);
var inst_82237 = cljs.core._nth.call(null,inst_82230,inst_82232);
var inst_82238 = figwheel.client.file_reloading.eval_body.call(null,inst_82237,opts);
var inst_82239 = (inst_82232 + (1));
var tmp82370 = inst_82231;
var tmp82371 = inst_82229;
var tmp82372 = inst_82230;
var inst_82229__$1 = tmp82371;
var inst_82230__$1 = tmp82372;
var inst_82231__$1 = tmp82370;
var inst_82232__$1 = inst_82239;
var state_82368__$1 = (function (){var statearr_82373 = state_82368;
(statearr_82373[(7)] = inst_82231__$1);

(statearr_82373[(8)] = inst_82229__$1);

(statearr_82373[(9)] = inst_82232__$1);

(statearr_82373[(11)] = inst_82238);

(statearr_82373[(10)] = inst_82230__$1);

return statearr_82373;
})();
var statearr_82374_82460 = state_82368__$1;
(statearr_82374_82460[(2)] = null);

(statearr_82374_82460[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (20))){
var inst_82272 = (state_82368[(12)]);
var inst_82280 = figwheel.client.file_reloading.sort_files.call(null,inst_82272);
var state_82368__$1 = state_82368;
var statearr_82375_82461 = state_82368__$1;
(statearr_82375_82461[(2)] = inst_82280);

(statearr_82375_82461[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (27))){
var state_82368__$1 = state_82368;
var statearr_82376_82462 = state_82368__$1;
(statearr_82376_82462[(2)] = null);

(statearr_82376_82462[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (1))){
var inst_82221 = (state_82368[(13)]);
var inst_82218 = before_jsload.call(null,files);
var inst_82219 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_82220 = (function (){return ((function (inst_82221,inst_82218,inst_82219,state_val_82369,c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__81963_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__81963_SHARP_);
});
;})(inst_82221,inst_82218,inst_82219,state_val_82369,c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82221__$1 = cljs.core.filter.call(null,inst_82220,files);
var inst_82222 = cljs.core.not_empty.call(null,inst_82221__$1);
var state_82368__$1 = (function (){var statearr_82377 = state_82368;
(statearr_82377[(14)] = inst_82218);

(statearr_82377[(15)] = inst_82219);

(statearr_82377[(13)] = inst_82221__$1);

return statearr_82377;
})();
if(cljs.core.truth_(inst_82222)){
var statearr_82378_82463 = state_82368__$1;
(statearr_82378_82463[(1)] = (2));

} else {
var statearr_82379_82464 = state_82368__$1;
(statearr_82379_82464[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (24))){
var state_82368__$1 = state_82368;
var statearr_82380_82465 = state_82368__$1;
(statearr_82380_82465[(2)] = null);

(statearr_82380_82465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (39))){
var inst_82322 = (state_82368[(16)]);
var state_82368__$1 = state_82368;
var statearr_82381_82466 = state_82368__$1;
(statearr_82381_82466[(2)] = inst_82322);

(statearr_82381_82466[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (46))){
var inst_82363 = (state_82368[(2)]);
var state_82368__$1 = state_82368;
var statearr_82382_82467 = state_82368__$1;
(statearr_82382_82467[(2)] = inst_82363);

(statearr_82382_82467[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (4))){
var inst_82266 = (state_82368[(2)]);
var inst_82267 = cljs.core.List.EMPTY;
var inst_82268 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_82267);
var inst_82269 = (function (){return ((function (inst_82266,inst_82267,inst_82268,state_val_82369,c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__81964_SHARP_){
var and__25113__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__81964_SHARP_);
if(cljs.core.truth_(and__25113__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__81964_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__81964_SHARP_)));
} else {
return and__25113__auto__;
}
});
;})(inst_82266,inst_82267,inst_82268,state_val_82369,c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82270 = cljs.core.filter.call(null,inst_82269,files);
var inst_82271 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_82272 = cljs.core.concat.call(null,inst_82270,inst_82271);
var state_82368__$1 = (function (){var statearr_82383 = state_82368;
(statearr_82383[(17)] = inst_82266);

(statearr_82383[(12)] = inst_82272);

(statearr_82383[(18)] = inst_82268);

return statearr_82383;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_82384_82468 = state_82368__$1;
(statearr_82384_82468[(1)] = (16));

} else {
var statearr_82385_82469 = state_82368__$1;
(statearr_82385_82469[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (15))){
var inst_82256 = (state_82368[(2)]);
var state_82368__$1 = state_82368;
var statearr_82386_82470 = state_82368__$1;
(statearr_82386_82470[(2)] = inst_82256);

(statearr_82386_82470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (21))){
var inst_82282 = (state_82368[(19)]);
var inst_82282__$1 = (state_82368[(2)]);
var inst_82283 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_82282__$1);
var state_82368__$1 = (function (){var statearr_82387 = state_82368;
(statearr_82387[(19)] = inst_82282__$1);

return statearr_82387;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82368__$1,(22),inst_82283);
} else {
if((state_val_82369 === (31))){
var inst_82366 = (state_82368[(2)]);
var state_82368__$1 = state_82368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82368__$1,inst_82366);
} else {
if((state_val_82369 === (32))){
var inst_82322 = (state_82368[(16)]);
var inst_82327 = inst_82322.cljs$lang$protocol_mask$partition0$;
var inst_82328 = (inst_82327 & (64));
var inst_82329 = inst_82322.cljs$core$ISeq$;
var inst_82330 = (inst_82328) || (inst_82329);
var state_82368__$1 = state_82368;
if(cljs.core.truth_(inst_82330)){
var statearr_82388_82471 = state_82368__$1;
(statearr_82388_82471[(1)] = (35));

} else {
var statearr_82389_82472 = state_82368__$1;
(statearr_82389_82472[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (40))){
var inst_82343 = (state_82368[(20)]);
var inst_82342 = (state_82368[(2)]);
var inst_82343__$1 = cljs.core.get.call(null,inst_82342,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_82344 = cljs.core.get.call(null,inst_82342,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_82345 = cljs.core.not_empty.call(null,inst_82343__$1);
var state_82368__$1 = (function (){var statearr_82390 = state_82368;
(statearr_82390[(20)] = inst_82343__$1);

(statearr_82390[(21)] = inst_82344);

return statearr_82390;
})();
if(cljs.core.truth_(inst_82345)){
var statearr_82391_82473 = state_82368__$1;
(statearr_82391_82473[(1)] = (41));

} else {
var statearr_82392_82474 = state_82368__$1;
(statearr_82392_82474[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (33))){
var state_82368__$1 = state_82368;
var statearr_82393_82475 = state_82368__$1;
(statearr_82393_82475[(2)] = false);

(statearr_82393_82475[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (13))){
var inst_82242 = (state_82368[(22)]);
var inst_82246 = cljs.core.chunk_first.call(null,inst_82242);
var inst_82247 = cljs.core.chunk_rest.call(null,inst_82242);
var inst_82248 = cljs.core.count.call(null,inst_82246);
var inst_82229 = inst_82247;
var inst_82230 = inst_82246;
var inst_82231 = inst_82248;
var inst_82232 = (0);
var state_82368__$1 = (function (){var statearr_82394 = state_82368;
(statearr_82394[(7)] = inst_82231);

(statearr_82394[(8)] = inst_82229);

(statearr_82394[(9)] = inst_82232);

(statearr_82394[(10)] = inst_82230);

return statearr_82394;
})();
var statearr_82395_82476 = state_82368__$1;
(statearr_82395_82476[(2)] = null);

(statearr_82395_82476[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (22))){
var inst_82282 = (state_82368[(19)]);
var inst_82286 = (state_82368[(23)]);
var inst_82285 = (state_82368[(24)]);
var inst_82290 = (state_82368[(25)]);
var inst_82285__$1 = (state_82368[(2)]);
var inst_82286__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_82285__$1);
var inst_82287 = (function (){var all_files = inst_82282;
var res_SINGLEQUOTE_ = inst_82285__$1;
var res = inst_82286__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_82282,inst_82286,inst_82285,inst_82290,inst_82285__$1,inst_82286__$1,state_val_82369,c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__81965_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__81965_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_82282,inst_82286,inst_82285,inst_82290,inst_82285__$1,inst_82286__$1,state_val_82369,c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82288 = cljs.core.filter.call(null,inst_82287,inst_82285__$1);
var inst_82289 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_82290__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_82289);
var inst_82291 = cljs.core.not_empty.call(null,inst_82290__$1);
var state_82368__$1 = (function (){var statearr_82396 = state_82368;
(statearr_82396[(23)] = inst_82286__$1);

(statearr_82396[(26)] = inst_82288);

(statearr_82396[(24)] = inst_82285__$1);

(statearr_82396[(25)] = inst_82290__$1);

return statearr_82396;
})();
if(cljs.core.truth_(inst_82291)){
var statearr_82397_82477 = state_82368__$1;
(statearr_82397_82477[(1)] = (23));

} else {
var statearr_82398_82478 = state_82368__$1;
(statearr_82398_82478[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (36))){
var state_82368__$1 = state_82368;
var statearr_82399_82479 = state_82368__$1;
(statearr_82399_82479[(2)] = false);

(statearr_82399_82479[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (41))){
var inst_82343 = (state_82368[(20)]);
var inst_82347 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_82348 = cljs.core.map.call(null,inst_82347,inst_82343);
var inst_82349 = cljs.core.pr_str.call(null,inst_82348);
var inst_82350 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_82349)].join('');
var inst_82351 = figwheel.client.utils.log.call(null,inst_82350);
var state_82368__$1 = state_82368;
var statearr_82400_82480 = state_82368__$1;
(statearr_82400_82480[(2)] = inst_82351);

(statearr_82400_82480[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (43))){
var inst_82344 = (state_82368[(21)]);
var inst_82354 = (state_82368[(2)]);
var inst_82355 = cljs.core.not_empty.call(null,inst_82344);
var state_82368__$1 = (function (){var statearr_82401 = state_82368;
(statearr_82401[(27)] = inst_82354);

return statearr_82401;
})();
if(cljs.core.truth_(inst_82355)){
var statearr_82402_82481 = state_82368__$1;
(statearr_82402_82481[(1)] = (44));

} else {
var statearr_82403_82482 = state_82368__$1;
(statearr_82403_82482[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (29))){
var inst_82282 = (state_82368[(19)]);
var inst_82286 = (state_82368[(23)]);
var inst_82322 = (state_82368[(16)]);
var inst_82288 = (state_82368[(26)]);
var inst_82285 = (state_82368[(24)]);
var inst_82290 = (state_82368[(25)]);
var inst_82318 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_82321 = (function (){var all_files = inst_82282;
var res_SINGLEQUOTE_ = inst_82285;
var res = inst_82286;
var files_not_loaded = inst_82288;
var dependencies_that_loaded = inst_82290;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82282,inst_82286,inst_82322,inst_82288,inst_82285,inst_82290,inst_82318,state_val_82369,c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__82320){
var map__82404 = p__82320;
var map__82404__$1 = ((((!((map__82404 == null)))?((((map__82404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82404):map__82404);
var namespace = cljs.core.get.call(null,map__82404__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82282,inst_82286,inst_82322,inst_82288,inst_82285,inst_82290,inst_82318,state_val_82369,c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82322__$1 = cljs.core.group_by.call(null,inst_82321,inst_82288);
var inst_82324 = (inst_82322__$1 == null);
var inst_82325 = cljs.core.not.call(null,inst_82324);
var state_82368__$1 = (function (){var statearr_82406 = state_82368;
(statearr_82406[(28)] = inst_82318);

(statearr_82406[(16)] = inst_82322__$1);

return statearr_82406;
})();
if(inst_82325){
var statearr_82407_82483 = state_82368__$1;
(statearr_82407_82483[(1)] = (32));

} else {
var statearr_82408_82484 = state_82368__$1;
(statearr_82408_82484[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (44))){
var inst_82344 = (state_82368[(21)]);
var inst_82357 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_82344);
var inst_82358 = cljs.core.pr_str.call(null,inst_82357);
var inst_82359 = [cljs.core.str("not required: "),cljs.core.str(inst_82358)].join('');
var inst_82360 = figwheel.client.utils.log.call(null,inst_82359);
var state_82368__$1 = state_82368;
var statearr_82409_82485 = state_82368__$1;
(statearr_82409_82485[(2)] = inst_82360);

(statearr_82409_82485[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (6))){
var inst_82263 = (state_82368[(2)]);
var state_82368__$1 = state_82368;
var statearr_82410_82486 = state_82368__$1;
(statearr_82410_82486[(2)] = inst_82263);

(statearr_82410_82486[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (28))){
var inst_82288 = (state_82368[(26)]);
var inst_82315 = (state_82368[(2)]);
var inst_82316 = cljs.core.not_empty.call(null,inst_82288);
var state_82368__$1 = (function (){var statearr_82411 = state_82368;
(statearr_82411[(29)] = inst_82315);

return statearr_82411;
})();
if(cljs.core.truth_(inst_82316)){
var statearr_82412_82487 = state_82368__$1;
(statearr_82412_82487[(1)] = (29));

} else {
var statearr_82413_82488 = state_82368__$1;
(statearr_82413_82488[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (25))){
var inst_82286 = (state_82368[(23)]);
var inst_82302 = (state_82368[(2)]);
var inst_82303 = cljs.core.not_empty.call(null,inst_82286);
var state_82368__$1 = (function (){var statearr_82414 = state_82368;
(statearr_82414[(30)] = inst_82302);

return statearr_82414;
})();
if(cljs.core.truth_(inst_82303)){
var statearr_82415_82489 = state_82368__$1;
(statearr_82415_82489[(1)] = (26));

} else {
var statearr_82416_82490 = state_82368__$1;
(statearr_82416_82490[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (34))){
var inst_82337 = (state_82368[(2)]);
var state_82368__$1 = state_82368;
if(cljs.core.truth_(inst_82337)){
var statearr_82417_82491 = state_82368__$1;
(statearr_82417_82491[(1)] = (38));

} else {
var statearr_82418_82492 = state_82368__$1;
(statearr_82418_82492[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (17))){
var state_82368__$1 = state_82368;
var statearr_82419_82493 = state_82368__$1;
(statearr_82419_82493[(2)] = recompile_dependents);

(statearr_82419_82493[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (3))){
var state_82368__$1 = state_82368;
var statearr_82420_82494 = state_82368__$1;
(statearr_82420_82494[(2)] = null);

(statearr_82420_82494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (12))){
var inst_82259 = (state_82368[(2)]);
var state_82368__$1 = state_82368;
var statearr_82421_82495 = state_82368__$1;
(statearr_82421_82495[(2)] = inst_82259);

(statearr_82421_82495[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (2))){
var inst_82221 = (state_82368[(13)]);
var inst_82228 = cljs.core.seq.call(null,inst_82221);
var inst_82229 = inst_82228;
var inst_82230 = null;
var inst_82231 = (0);
var inst_82232 = (0);
var state_82368__$1 = (function (){var statearr_82422 = state_82368;
(statearr_82422[(7)] = inst_82231);

(statearr_82422[(8)] = inst_82229);

(statearr_82422[(9)] = inst_82232);

(statearr_82422[(10)] = inst_82230);

return statearr_82422;
})();
var statearr_82423_82496 = state_82368__$1;
(statearr_82423_82496[(2)] = null);

(statearr_82423_82496[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (23))){
var inst_82282 = (state_82368[(19)]);
var inst_82286 = (state_82368[(23)]);
var inst_82288 = (state_82368[(26)]);
var inst_82285 = (state_82368[(24)]);
var inst_82290 = (state_82368[(25)]);
var inst_82293 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_82295 = (function (){var all_files = inst_82282;
var res_SINGLEQUOTE_ = inst_82285;
var res = inst_82286;
var files_not_loaded = inst_82288;
var dependencies_that_loaded = inst_82290;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82282,inst_82286,inst_82288,inst_82285,inst_82290,inst_82293,state_val_82369,c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__82294){
var map__82424 = p__82294;
var map__82424__$1 = ((((!((map__82424 == null)))?((((map__82424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82424):map__82424);
var request_url = cljs.core.get.call(null,map__82424__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82282,inst_82286,inst_82288,inst_82285,inst_82290,inst_82293,state_val_82369,c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82296 = cljs.core.reverse.call(null,inst_82290);
var inst_82297 = cljs.core.map.call(null,inst_82295,inst_82296);
var inst_82298 = cljs.core.pr_str.call(null,inst_82297);
var inst_82299 = figwheel.client.utils.log.call(null,inst_82298);
var state_82368__$1 = (function (){var statearr_82426 = state_82368;
(statearr_82426[(31)] = inst_82293);

return statearr_82426;
})();
var statearr_82427_82497 = state_82368__$1;
(statearr_82427_82497[(2)] = inst_82299);

(statearr_82427_82497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (35))){
var state_82368__$1 = state_82368;
var statearr_82428_82498 = state_82368__$1;
(statearr_82428_82498[(2)] = true);

(statearr_82428_82498[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (19))){
var inst_82272 = (state_82368[(12)]);
var inst_82278 = figwheel.client.file_reloading.expand_files.call(null,inst_82272);
var state_82368__$1 = state_82368;
var statearr_82429_82499 = state_82368__$1;
(statearr_82429_82499[(2)] = inst_82278);

(statearr_82429_82499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (11))){
var state_82368__$1 = state_82368;
var statearr_82430_82500 = state_82368__$1;
(statearr_82430_82500[(2)] = null);

(statearr_82430_82500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (9))){
var inst_82261 = (state_82368[(2)]);
var state_82368__$1 = state_82368;
var statearr_82431_82501 = state_82368__$1;
(statearr_82431_82501[(2)] = inst_82261);

(statearr_82431_82501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (5))){
var inst_82231 = (state_82368[(7)]);
var inst_82232 = (state_82368[(9)]);
var inst_82234 = (inst_82232 < inst_82231);
var inst_82235 = inst_82234;
var state_82368__$1 = state_82368;
if(cljs.core.truth_(inst_82235)){
var statearr_82432_82502 = state_82368__$1;
(statearr_82432_82502[(1)] = (7));

} else {
var statearr_82433_82503 = state_82368__$1;
(statearr_82433_82503[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (14))){
var inst_82242 = (state_82368[(22)]);
var inst_82251 = cljs.core.first.call(null,inst_82242);
var inst_82252 = figwheel.client.file_reloading.eval_body.call(null,inst_82251,opts);
var inst_82253 = cljs.core.next.call(null,inst_82242);
var inst_82229 = inst_82253;
var inst_82230 = null;
var inst_82231 = (0);
var inst_82232 = (0);
var state_82368__$1 = (function (){var statearr_82434 = state_82368;
(statearr_82434[(7)] = inst_82231);

(statearr_82434[(8)] = inst_82229);

(statearr_82434[(9)] = inst_82232);

(statearr_82434[(32)] = inst_82252);

(statearr_82434[(10)] = inst_82230);

return statearr_82434;
})();
var statearr_82435_82504 = state_82368__$1;
(statearr_82435_82504[(2)] = null);

(statearr_82435_82504[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (45))){
var state_82368__$1 = state_82368;
var statearr_82436_82505 = state_82368__$1;
(statearr_82436_82505[(2)] = null);

(statearr_82436_82505[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (26))){
var inst_82282 = (state_82368[(19)]);
var inst_82286 = (state_82368[(23)]);
var inst_82288 = (state_82368[(26)]);
var inst_82285 = (state_82368[(24)]);
var inst_82290 = (state_82368[(25)]);
var inst_82305 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_82307 = (function (){var all_files = inst_82282;
var res_SINGLEQUOTE_ = inst_82285;
var res = inst_82286;
var files_not_loaded = inst_82288;
var dependencies_that_loaded = inst_82290;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82282,inst_82286,inst_82288,inst_82285,inst_82290,inst_82305,state_val_82369,c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__82306){
var map__82437 = p__82306;
var map__82437__$1 = ((((!((map__82437 == null)))?((((map__82437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82437):map__82437);
var namespace = cljs.core.get.call(null,map__82437__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__82437__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82282,inst_82286,inst_82288,inst_82285,inst_82290,inst_82305,state_val_82369,c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82308 = cljs.core.map.call(null,inst_82307,inst_82286);
var inst_82309 = cljs.core.pr_str.call(null,inst_82308);
var inst_82310 = figwheel.client.utils.log.call(null,inst_82309);
var inst_82311 = (function (){var all_files = inst_82282;
var res_SINGLEQUOTE_ = inst_82285;
var res = inst_82286;
var files_not_loaded = inst_82288;
var dependencies_that_loaded = inst_82290;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82282,inst_82286,inst_82288,inst_82285,inst_82290,inst_82305,inst_82307,inst_82308,inst_82309,inst_82310,state_val_82369,c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_82282,inst_82286,inst_82288,inst_82285,inst_82290,inst_82305,inst_82307,inst_82308,inst_82309,inst_82310,state_val_82369,c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_82312 = setTimeout(inst_82311,(10));
var state_82368__$1 = (function (){var statearr_82439 = state_82368;
(statearr_82439[(33)] = inst_82305);

(statearr_82439[(34)] = inst_82310);

return statearr_82439;
})();
var statearr_82440_82506 = state_82368__$1;
(statearr_82440_82506[(2)] = inst_82312);

(statearr_82440_82506[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (16))){
var state_82368__$1 = state_82368;
var statearr_82441_82507 = state_82368__$1;
(statearr_82441_82507[(2)] = reload_dependents);

(statearr_82441_82507[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (38))){
var inst_82322 = (state_82368[(16)]);
var inst_82339 = cljs.core.apply.call(null,cljs.core.hash_map,inst_82322);
var state_82368__$1 = state_82368;
var statearr_82442_82508 = state_82368__$1;
(statearr_82442_82508[(2)] = inst_82339);

(statearr_82442_82508[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (30))){
var state_82368__$1 = state_82368;
var statearr_82443_82509 = state_82368__$1;
(statearr_82443_82509[(2)] = null);

(statearr_82443_82509[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (10))){
var inst_82242 = (state_82368[(22)]);
var inst_82244 = cljs.core.chunked_seq_QMARK_.call(null,inst_82242);
var state_82368__$1 = state_82368;
if(inst_82244){
var statearr_82444_82510 = state_82368__$1;
(statearr_82444_82510[(1)] = (13));

} else {
var statearr_82445_82511 = state_82368__$1;
(statearr_82445_82511[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (18))){
var inst_82276 = (state_82368[(2)]);
var state_82368__$1 = state_82368;
if(cljs.core.truth_(inst_82276)){
var statearr_82446_82512 = state_82368__$1;
(statearr_82446_82512[(1)] = (19));

} else {
var statearr_82447_82513 = state_82368__$1;
(statearr_82447_82513[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (42))){
var state_82368__$1 = state_82368;
var statearr_82448_82514 = state_82368__$1;
(statearr_82448_82514[(2)] = null);

(statearr_82448_82514[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (37))){
var inst_82334 = (state_82368[(2)]);
var state_82368__$1 = state_82368;
var statearr_82449_82515 = state_82368__$1;
(statearr_82449_82515[(2)] = inst_82334);

(statearr_82449_82515[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82369 === (8))){
var inst_82229 = (state_82368[(8)]);
var inst_82242 = (state_82368[(22)]);
var inst_82242__$1 = cljs.core.seq.call(null,inst_82229);
var state_82368__$1 = (function (){var statearr_82450 = state_82368;
(statearr_82450[(22)] = inst_82242__$1);

return statearr_82450;
})();
if(inst_82242__$1){
var statearr_82451_82516 = state_82368__$1;
(statearr_82451_82516[(1)] = (10));

} else {
var statearr_82452_82517 = state_82368__$1;
(statearr_82452_82517[(1)] = (11));

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
});})(c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28286__auto__,c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____0 = (function (){
var statearr_82456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82456[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__);

(statearr_82456[(1)] = (1));

return statearr_82456;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____1 = (function (state_82368){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_82368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e82457){if((e82457 instanceof Object)){
var ex__28290__auto__ = e82457;
var statearr_82458_82518 = state_82368;
(statearr_82458_82518[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82519 = state_82368;
state_82368 = G__82519;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__ = function(state_82368){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____1.call(this,state_82368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28400__auto__ = (function (){var statearr_82459 = f__28399__auto__.call(null);
(statearr_82459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_82459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto__,map__82214,map__82214__$1,opts,before_jsload,on_jsload,reload_dependents,map__82215,map__82215__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28398__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__82522,link){
var map__82525 = p__82522;
var map__82525__$1 = ((((!((map__82525 == null)))?((((map__82525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82525):map__82525);
var file = cljs.core.get.call(null,map__82525__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__82525,map__82525__$1,file){
return (function (p1__82520_SHARP_,p2__82521_SHARP_){
if(cljs.core._EQ_.call(null,p1__82520_SHARP_,p2__82521_SHARP_)){
return p1__82520_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__82525,map__82525__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__82531){
var map__82532 = p__82531;
var map__82532__$1 = ((((!((map__82532 == null)))?((((map__82532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82532):map__82532);
var match_length = cljs.core.get.call(null,map__82532__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__82532__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__82527_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__82527_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__82534_SHARP_,p2__82535_SHARP_){
return cljs.core.assoc.call(null,p1__82534_SHARP_,cljs.core.get.call(null,p2__82535_SHARP_,key),p2__82535_SHARP_);
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
var loaded_f_datas_82536 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_82536);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_82536);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__82537,p__82538){
var map__82543 = p__82537;
var map__82543__$1 = ((((!((map__82543 == null)))?((((map__82543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82543):map__82543);
var on_cssload = cljs.core.get.call(null,map__82543__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__82544 = p__82538;
var map__82544__$1 = ((((!((map__82544 == null)))?((((map__82544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82544):map__82544);
var files_msg = map__82544__$1;
var files = cljs.core.get.call(null,map__82544__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1488398274497