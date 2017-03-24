// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__27769){
var vec__27770 = p__27769;
var i = cljs.core.nth.call(null,vec__27770,(0),null);
var v = cljs.core.nth.call(null,vec__27770,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__27776 = seg;
var gcol = cljs.core.nth.call(null,vec__27776,(0),null);
var source = cljs.core.nth.call(null,vec__27776,(1),null);
var line = cljs.core.nth.call(null,vec__27776,(2),null);
var col = cljs.core.nth.call(null,vec__27776,(3),null);
var name = cljs.core.nth.call(null,vec__27776,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__27785 = seg;
var gcol = cljs.core.nth.call(null,vec__27785,(0),null);
var source = cljs.core.nth.call(null,vec__27785,(1),null);
var line = cljs.core.nth.call(null,vec__27785,(2),null);
var col = cljs.core.nth.call(null,vec__27785,(3),null);
var name = cljs.core.nth.call(null,vec__27785,(4),null);
var vec__27788 = relseg;
var rgcol = cljs.core.nth.call(null,vec__27788,(0),null);
var rsource = cljs.core.nth.call(null,vec__27788,(1),null);
var rline = cljs.core.nth.call(null,vec__27788,(2),null);
var rcol = cljs.core.nth.call(null,vec__27788,(3),null);
var rname = cljs.core.nth.call(null,vec__27788,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__25125__auto__ = source;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__25125__auto__ = line;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__25125__auto__ = col;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__25125__auto__ = name;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__27793 = segmap;
var map__27793__$1 = ((((!((map__27793 == null)))?((((map__27793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27793):map__27793);
var gcol = cljs.core.get.call(null,map__27793__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__27793__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__27793__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__27793__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__27793__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__27793,map__27793__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__27793,map__27793__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__27793,map__27793__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__27793,map__27793__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__27793,map__27793__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__27793,map__27793__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args27795 = [];
var len__26200__auto___27801 = arguments.length;
var i__26201__auto___27802 = (0);
while(true){
if((i__26201__auto___27802 < len__26200__auto___27801)){
args27795.push((arguments[i__26201__auto___27802]));

var G__27803 = (i__26201__auto___27802 + (1));
i__26201__auto___27802 = G__27803;
continue;
} else {
}
break;
}

var G__27797 = args27795.length;
switch (G__27797) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27795.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__27798 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__27805 = cljs.core.next.call(null,segs__$1);
var G__27806 = nrelseg;
var G__27807 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__27805;
relseg__$1 = G__27806;
result__$1 = G__27807;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__27798,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__27798,(1),null);
var G__27808 = (gline + (1));
var G__27809 = cljs.core.next.call(null,lines__$1);
var G__27810 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__27811 = result__$1;
gline = G__27808;
lines__$1 = G__27809;
relseg = G__27810;
result = G__27811;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__27815 = segmap;
var map__27815__$1 = ((((!((map__27815 == null)))?((((map__27815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27815):map__27815);
var gcol = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__27815,map__27815__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__27815,map__27815__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__27812_SHARP_){
return cljs.core.conj.call(null,p1__27812_SHARP_,d__$1);
});})(map__27815,map__27815__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__27815,map__27815__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args27817 = [];
var len__26200__auto___27823 = arguments.length;
var i__26201__auto___27824 = (0);
while(true){
if((i__26201__auto___27824 < len__26200__auto___27823)){
args27817.push((arguments[i__26201__auto___27824]));

var G__27825 = (i__26201__auto___27824 + (1));
i__26201__auto___27824 = G__27825;
continue;
} else {
}
break;
}

var G__27819 = args27817.length;
switch (G__27819) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27817.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__27820 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__27827 = cljs.core.next.call(null,segs__$1);
var G__27828 = nrelseg;
var G__27829 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__27827;
relseg__$1 = G__27828;
result__$1 = G__27829;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__27820,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__27820,(1),null);
var G__27830 = (gline + (1));
var G__27831 = cljs.core.next.call(null,lines__$1);
var G__27832 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__27833 = result__$1;
gline = G__27830;
lines__$1 = G__27831;
relseg = G__27832;
result = G__27833;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__27846){
var vec__27847 = p__27846;
var _ = cljs.core.nth.call(null,vec__27847,(0),null);
var source = cljs.core.nth.call(null,vec__27847,(1),null);
var line = cljs.core.nth.call(null,vec__27847,(2),null);
var col = cljs.core.nth.call(null,vec__27847,(3),null);
var name = cljs.core.nth.call(null,vec__27847,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__27850){
var vec__27851 = p__27850;
var gcol = cljs.core.nth.call(null,vec__27851,(0),null);
var sidx = cljs.core.nth.call(null,vec__27851,(1),null);
var line = cljs.core.nth.call(null,vec__27851,(2),null);
var col = cljs.core.nth.call(null,vec__27851,(3),null);
var name = cljs.core.nth.call(null,vec__27851,(4),null);
var seg = vec__27851;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__27851,gcol,sidx,line,col,name,seg,relseg){
return (function (p__27854){
var vec__27855 = p__27854;
var _ = cljs.core.nth.call(null,vec__27855,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__27855,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__27855,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__27855,(3),null);
var lname = cljs.core.nth.call(null,vec__27855,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__25125__auto__ = name;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__27851,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__25125__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__27943 = cljs.core.seq.call(null,infos);
var chunk__27944 = null;
var count__27945 = (0);
var i__27946 = (0);
while(true){
if((i__27946 < count__27945)){
var info = cljs.core._nth.call(null,chunk__27944,i__27946);
var segv_28025 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_28026 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28027 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_28026 > (lc_28027 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__27943,chunk__27944,count__27945,i__27946,segv_28025,gline_28026,lc_28027,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_28026 - (lc_28027 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28025], null));
});})(seq__27943,chunk__27944,count__27945,i__27946,segv_28025,gline_28026,lc_28027,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__27943,chunk__27944,count__27945,i__27946,segv_28025,gline_28026,lc_28027,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28026], null),cljs.core.conj,segv_28025);
});})(seq__27943,chunk__27944,count__27945,i__27946,segv_28025,gline_28026,lc_28027,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__28028 = seq__27943;
var G__28029 = chunk__27944;
var G__28030 = count__27945;
var G__28031 = (i__27946 + (1));
seq__27943 = G__28028;
chunk__27944 = G__28029;
count__27945 = G__28030;
i__27946 = G__28031;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27943);
if(temp__4657__auto__){
var seq__27943__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27943__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__27943__$1);
var G__28032 = cljs.core.chunk_rest.call(null,seq__27943__$1);
var G__28033 = c__25936__auto__;
var G__28034 = cljs.core.count.call(null,c__25936__auto__);
var G__28035 = (0);
seq__27943 = G__28032;
chunk__27944 = G__28033;
count__27945 = G__28034;
i__27946 = G__28035;
continue;
} else {
var info = cljs.core.first.call(null,seq__27943__$1);
var segv_28036 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_28037 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28038 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_28037 > (lc_28038 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__27943,chunk__27944,count__27945,i__27946,segv_28036,gline_28037,lc_28038,info,seq__27943__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_28037 - (lc_28038 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28036], null));
});})(seq__27943,chunk__27944,count__27945,i__27946,segv_28036,gline_28037,lc_28038,info,seq__27943__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__27943,chunk__27944,count__27945,i__27946,segv_28036,gline_28037,lc_28038,info,seq__27943__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28037], null),cljs.core.conj,segv_28036);
});})(seq__27943,chunk__27944,count__27945,i__27946,segv_28036,gline_28037,lc_28038,info,seq__27943__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__28039 = cljs.core.next.call(null,seq__27943__$1);
var G__28040 = null;
var G__28041 = (0);
var G__28042 = (0);
seq__27943 = G__28039;
chunk__27944 = G__28040;
count__27945 = G__28041;
i__27946 = G__28042;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__27947_28043 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__27948_28044 = null;
var count__27949_28045 = (0);
var i__27950_28046 = (0);
while(true){
if((i__27950_28046 < count__27949_28045)){
var vec__27951_28047 = cljs.core._nth.call(null,chunk__27948_28044,i__27950_28046);
var source_idx_28048 = cljs.core.nth.call(null,vec__27951_28047,(0),null);
var vec__27954_28049 = cljs.core.nth.call(null,vec__27951_28047,(1),null);
var __28050 = cljs.core.nth.call(null,vec__27954_28049,(0),null);
var lines_28051__$1 = cljs.core.nth.call(null,vec__27954_28049,(1),null);
var seq__27957_28052 = cljs.core.seq.call(null,lines_28051__$1);
var chunk__27958_28053 = null;
var count__27959_28054 = (0);
var i__27960_28055 = (0);
while(true){
if((i__27960_28055 < count__27959_28054)){
var vec__27961_28056 = cljs.core._nth.call(null,chunk__27958_28053,i__27960_28055);
var line_28057 = cljs.core.nth.call(null,vec__27961_28056,(0),null);
var cols_28058 = cljs.core.nth.call(null,vec__27961_28056,(1),null);
var seq__27964_28059 = cljs.core.seq.call(null,cols_28058);
var chunk__27965_28060 = null;
var count__27966_28061 = (0);
var i__27967_28062 = (0);
while(true){
if((i__27967_28062 < count__27966_28061)){
var vec__27968_28063 = cljs.core._nth.call(null,chunk__27965_28060,i__27967_28062);
var col_28064 = cljs.core.nth.call(null,vec__27968_28063,(0),null);
var infos_28065 = cljs.core.nth.call(null,vec__27968_28063,(1),null);
encode_cols.call(null,infos_28065,source_idx_28048,line_28057,col_28064);

var G__28066 = seq__27964_28059;
var G__28067 = chunk__27965_28060;
var G__28068 = count__27966_28061;
var G__28069 = (i__27967_28062 + (1));
seq__27964_28059 = G__28066;
chunk__27965_28060 = G__28067;
count__27966_28061 = G__28068;
i__27967_28062 = G__28069;
continue;
} else {
var temp__4657__auto___28070 = cljs.core.seq.call(null,seq__27964_28059);
if(temp__4657__auto___28070){
var seq__27964_28071__$1 = temp__4657__auto___28070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27964_28071__$1)){
var c__25936__auto___28072 = cljs.core.chunk_first.call(null,seq__27964_28071__$1);
var G__28073 = cljs.core.chunk_rest.call(null,seq__27964_28071__$1);
var G__28074 = c__25936__auto___28072;
var G__28075 = cljs.core.count.call(null,c__25936__auto___28072);
var G__28076 = (0);
seq__27964_28059 = G__28073;
chunk__27965_28060 = G__28074;
count__27966_28061 = G__28075;
i__27967_28062 = G__28076;
continue;
} else {
var vec__27971_28077 = cljs.core.first.call(null,seq__27964_28071__$1);
var col_28078 = cljs.core.nth.call(null,vec__27971_28077,(0),null);
var infos_28079 = cljs.core.nth.call(null,vec__27971_28077,(1),null);
encode_cols.call(null,infos_28079,source_idx_28048,line_28057,col_28078);

var G__28080 = cljs.core.next.call(null,seq__27964_28071__$1);
var G__28081 = null;
var G__28082 = (0);
var G__28083 = (0);
seq__27964_28059 = G__28080;
chunk__27965_28060 = G__28081;
count__27966_28061 = G__28082;
i__27967_28062 = G__28083;
continue;
}
} else {
}
}
break;
}

var G__28084 = seq__27957_28052;
var G__28085 = chunk__27958_28053;
var G__28086 = count__27959_28054;
var G__28087 = (i__27960_28055 + (1));
seq__27957_28052 = G__28084;
chunk__27958_28053 = G__28085;
count__27959_28054 = G__28086;
i__27960_28055 = G__28087;
continue;
} else {
var temp__4657__auto___28088 = cljs.core.seq.call(null,seq__27957_28052);
if(temp__4657__auto___28088){
var seq__27957_28089__$1 = temp__4657__auto___28088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27957_28089__$1)){
var c__25936__auto___28090 = cljs.core.chunk_first.call(null,seq__27957_28089__$1);
var G__28091 = cljs.core.chunk_rest.call(null,seq__27957_28089__$1);
var G__28092 = c__25936__auto___28090;
var G__28093 = cljs.core.count.call(null,c__25936__auto___28090);
var G__28094 = (0);
seq__27957_28052 = G__28091;
chunk__27958_28053 = G__28092;
count__27959_28054 = G__28093;
i__27960_28055 = G__28094;
continue;
} else {
var vec__27974_28095 = cljs.core.first.call(null,seq__27957_28089__$1);
var line_28096 = cljs.core.nth.call(null,vec__27974_28095,(0),null);
var cols_28097 = cljs.core.nth.call(null,vec__27974_28095,(1),null);
var seq__27977_28098 = cljs.core.seq.call(null,cols_28097);
var chunk__27978_28099 = null;
var count__27979_28100 = (0);
var i__27980_28101 = (0);
while(true){
if((i__27980_28101 < count__27979_28100)){
var vec__27981_28102 = cljs.core._nth.call(null,chunk__27978_28099,i__27980_28101);
var col_28103 = cljs.core.nth.call(null,vec__27981_28102,(0),null);
var infos_28104 = cljs.core.nth.call(null,vec__27981_28102,(1),null);
encode_cols.call(null,infos_28104,source_idx_28048,line_28096,col_28103);

var G__28105 = seq__27977_28098;
var G__28106 = chunk__27978_28099;
var G__28107 = count__27979_28100;
var G__28108 = (i__27980_28101 + (1));
seq__27977_28098 = G__28105;
chunk__27978_28099 = G__28106;
count__27979_28100 = G__28107;
i__27980_28101 = G__28108;
continue;
} else {
var temp__4657__auto___28109__$1 = cljs.core.seq.call(null,seq__27977_28098);
if(temp__4657__auto___28109__$1){
var seq__27977_28110__$1 = temp__4657__auto___28109__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27977_28110__$1)){
var c__25936__auto___28111 = cljs.core.chunk_first.call(null,seq__27977_28110__$1);
var G__28112 = cljs.core.chunk_rest.call(null,seq__27977_28110__$1);
var G__28113 = c__25936__auto___28111;
var G__28114 = cljs.core.count.call(null,c__25936__auto___28111);
var G__28115 = (0);
seq__27977_28098 = G__28112;
chunk__27978_28099 = G__28113;
count__27979_28100 = G__28114;
i__27980_28101 = G__28115;
continue;
} else {
var vec__27984_28116 = cljs.core.first.call(null,seq__27977_28110__$1);
var col_28117 = cljs.core.nth.call(null,vec__27984_28116,(0),null);
var infos_28118 = cljs.core.nth.call(null,vec__27984_28116,(1),null);
encode_cols.call(null,infos_28118,source_idx_28048,line_28096,col_28117);

var G__28119 = cljs.core.next.call(null,seq__27977_28110__$1);
var G__28120 = null;
var G__28121 = (0);
var G__28122 = (0);
seq__27977_28098 = G__28119;
chunk__27978_28099 = G__28120;
count__27979_28100 = G__28121;
i__27980_28101 = G__28122;
continue;
}
} else {
}
}
break;
}

var G__28123 = cljs.core.next.call(null,seq__27957_28089__$1);
var G__28124 = null;
var G__28125 = (0);
var G__28126 = (0);
seq__27957_28052 = G__28123;
chunk__27958_28053 = G__28124;
count__27959_28054 = G__28125;
i__27960_28055 = G__28126;
continue;
}
} else {
}
}
break;
}

var G__28127 = seq__27947_28043;
var G__28128 = chunk__27948_28044;
var G__28129 = count__27949_28045;
var G__28130 = (i__27950_28046 + (1));
seq__27947_28043 = G__28127;
chunk__27948_28044 = G__28128;
count__27949_28045 = G__28129;
i__27950_28046 = G__28130;
continue;
} else {
var temp__4657__auto___28131 = cljs.core.seq.call(null,seq__27947_28043);
if(temp__4657__auto___28131){
var seq__27947_28132__$1 = temp__4657__auto___28131;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27947_28132__$1)){
var c__25936__auto___28133 = cljs.core.chunk_first.call(null,seq__27947_28132__$1);
var G__28134 = cljs.core.chunk_rest.call(null,seq__27947_28132__$1);
var G__28135 = c__25936__auto___28133;
var G__28136 = cljs.core.count.call(null,c__25936__auto___28133);
var G__28137 = (0);
seq__27947_28043 = G__28134;
chunk__27948_28044 = G__28135;
count__27949_28045 = G__28136;
i__27950_28046 = G__28137;
continue;
} else {
var vec__27987_28138 = cljs.core.first.call(null,seq__27947_28132__$1);
var source_idx_28139 = cljs.core.nth.call(null,vec__27987_28138,(0),null);
var vec__27990_28140 = cljs.core.nth.call(null,vec__27987_28138,(1),null);
var __28141 = cljs.core.nth.call(null,vec__27990_28140,(0),null);
var lines_28142__$1 = cljs.core.nth.call(null,vec__27990_28140,(1),null);
var seq__27993_28143 = cljs.core.seq.call(null,lines_28142__$1);
var chunk__27994_28144 = null;
var count__27995_28145 = (0);
var i__27996_28146 = (0);
while(true){
if((i__27996_28146 < count__27995_28145)){
var vec__27997_28147 = cljs.core._nth.call(null,chunk__27994_28144,i__27996_28146);
var line_28148 = cljs.core.nth.call(null,vec__27997_28147,(0),null);
var cols_28149 = cljs.core.nth.call(null,vec__27997_28147,(1),null);
var seq__28000_28150 = cljs.core.seq.call(null,cols_28149);
var chunk__28001_28151 = null;
var count__28002_28152 = (0);
var i__28003_28153 = (0);
while(true){
if((i__28003_28153 < count__28002_28152)){
var vec__28004_28154 = cljs.core._nth.call(null,chunk__28001_28151,i__28003_28153);
var col_28155 = cljs.core.nth.call(null,vec__28004_28154,(0),null);
var infos_28156 = cljs.core.nth.call(null,vec__28004_28154,(1),null);
encode_cols.call(null,infos_28156,source_idx_28139,line_28148,col_28155);

var G__28157 = seq__28000_28150;
var G__28158 = chunk__28001_28151;
var G__28159 = count__28002_28152;
var G__28160 = (i__28003_28153 + (1));
seq__28000_28150 = G__28157;
chunk__28001_28151 = G__28158;
count__28002_28152 = G__28159;
i__28003_28153 = G__28160;
continue;
} else {
var temp__4657__auto___28161__$1 = cljs.core.seq.call(null,seq__28000_28150);
if(temp__4657__auto___28161__$1){
var seq__28000_28162__$1 = temp__4657__auto___28161__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28000_28162__$1)){
var c__25936__auto___28163 = cljs.core.chunk_first.call(null,seq__28000_28162__$1);
var G__28164 = cljs.core.chunk_rest.call(null,seq__28000_28162__$1);
var G__28165 = c__25936__auto___28163;
var G__28166 = cljs.core.count.call(null,c__25936__auto___28163);
var G__28167 = (0);
seq__28000_28150 = G__28164;
chunk__28001_28151 = G__28165;
count__28002_28152 = G__28166;
i__28003_28153 = G__28167;
continue;
} else {
var vec__28007_28168 = cljs.core.first.call(null,seq__28000_28162__$1);
var col_28169 = cljs.core.nth.call(null,vec__28007_28168,(0),null);
var infos_28170 = cljs.core.nth.call(null,vec__28007_28168,(1),null);
encode_cols.call(null,infos_28170,source_idx_28139,line_28148,col_28169);

var G__28171 = cljs.core.next.call(null,seq__28000_28162__$1);
var G__28172 = null;
var G__28173 = (0);
var G__28174 = (0);
seq__28000_28150 = G__28171;
chunk__28001_28151 = G__28172;
count__28002_28152 = G__28173;
i__28003_28153 = G__28174;
continue;
}
} else {
}
}
break;
}

var G__28175 = seq__27993_28143;
var G__28176 = chunk__27994_28144;
var G__28177 = count__27995_28145;
var G__28178 = (i__27996_28146 + (1));
seq__27993_28143 = G__28175;
chunk__27994_28144 = G__28176;
count__27995_28145 = G__28177;
i__27996_28146 = G__28178;
continue;
} else {
var temp__4657__auto___28179__$1 = cljs.core.seq.call(null,seq__27993_28143);
if(temp__4657__auto___28179__$1){
var seq__27993_28180__$1 = temp__4657__auto___28179__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27993_28180__$1)){
var c__25936__auto___28181 = cljs.core.chunk_first.call(null,seq__27993_28180__$1);
var G__28182 = cljs.core.chunk_rest.call(null,seq__27993_28180__$1);
var G__28183 = c__25936__auto___28181;
var G__28184 = cljs.core.count.call(null,c__25936__auto___28181);
var G__28185 = (0);
seq__27993_28143 = G__28182;
chunk__27994_28144 = G__28183;
count__27995_28145 = G__28184;
i__27996_28146 = G__28185;
continue;
} else {
var vec__28010_28186 = cljs.core.first.call(null,seq__27993_28180__$1);
var line_28187 = cljs.core.nth.call(null,vec__28010_28186,(0),null);
var cols_28188 = cljs.core.nth.call(null,vec__28010_28186,(1),null);
var seq__28013_28189 = cljs.core.seq.call(null,cols_28188);
var chunk__28014_28190 = null;
var count__28015_28191 = (0);
var i__28016_28192 = (0);
while(true){
if((i__28016_28192 < count__28015_28191)){
var vec__28017_28193 = cljs.core._nth.call(null,chunk__28014_28190,i__28016_28192);
var col_28194 = cljs.core.nth.call(null,vec__28017_28193,(0),null);
var infos_28195 = cljs.core.nth.call(null,vec__28017_28193,(1),null);
encode_cols.call(null,infos_28195,source_idx_28139,line_28187,col_28194);

var G__28196 = seq__28013_28189;
var G__28197 = chunk__28014_28190;
var G__28198 = count__28015_28191;
var G__28199 = (i__28016_28192 + (1));
seq__28013_28189 = G__28196;
chunk__28014_28190 = G__28197;
count__28015_28191 = G__28198;
i__28016_28192 = G__28199;
continue;
} else {
var temp__4657__auto___28200__$2 = cljs.core.seq.call(null,seq__28013_28189);
if(temp__4657__auto___28200__$2){
var seq__28013_28201__$1 = temp__4657__auto___28200__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28013_28201__$1)){
var c__25936__auto___28202 = cljs.core.chunk_first.call(null,seq__28013_28201__$1);
var G__28203 = cljs.core.chunk_rest.call(null,seq__28013_28201__$1);
var G__28204 = c__25936__auto___28202;
var G__28205 = cljs.core.count.call(null,c__25936__auto___28202);
var G__28206 = (0);
seq__28013_28189 = G__28203;
chunk__28014_28190 = G__28204;
count__28015_28191 = G__28205;
i__28016_28192 = G__28206;
continue;
} else {
var vec__28020_28207 = cljs.core.first.call(null,seq__28013_28201__$1);
var col_28208 = cljs.core.nth.call(null,vec__28020_28207,(0),null);
var infos_28209 = cljs.core.nth.call(null,vec__28020_28207,(1),null);
encode_cols.call(null,infos_28209,source_idx_28139,line_28187,col_28208);

var G__28210 = cljs.core.next.call(null,seq__28013_28201__$1);
var G__28211 = null;
var G__28212 = (0);
var G__28213 = (0);
seq__28013_28189 = G__28210;
chunk__28014_28190 = G__28211;
count__28015_28191 = G__28212;
i__28016_28192 = G__28213;
continue;
}
} else {
}
}
break;
}

var G__28214 = cljs.core.next.call(null,seq__27993_28180__$1);
var G__28215 = null;
var G__28216 = (0);
var G__28217 = (0);
seq__27993_28143 = G__28214;
chunk__27994_28144 = G__28215;
count__27995_28145 = G__28216;
i__27996_28146 = G__28217;
continue;
}
} else {
}
}
break;
}

var G__28218 = cljs.core.next.call(null,seq__27947_28132__$1);
var G__28219 = null;
var G__28220 = (0);
var G__28221 = (0);
seq__27947_28043 = G__28218;
chunk__27948_28044 = G__28219;
count__27949_28045 = G__28220;
i__27950_28046 = G__28221;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__28023 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__27858_SHARP_){
return [cljs.core.str(p1__27858_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__27859_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__27859_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__27860_SHARP_){
return clojure.string.join.call(null,",",p1__27860_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__28024 = G__28023;
goog.object.set(G__28024,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__28024;
} else {
return G__28023;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__28231 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__28231,(0),null);
var col_map = cljs.core.nth.call(null,vec__28231,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__28234 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__28234,(0),null);
var infos = cljs.core.nth.call(null,vec__28234,(1),null);
var G__28240 = cljs.core.next.call(null,col_map_seq);
var G__28241 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__28234,col,infos,vec__28231,line,col_map){
return (function (v,p__28237){
var map__28238 = p__28237;
var map__28238__$1 = ((((!((map__28238 == null)))?((((map__28238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28238):map__28238);
var gline = cljs.core.get.call(null,map__28238__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__28238__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__28234,col,infos,vec__28231,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__28240;
new_cols = G__28241;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__28242 = cljs.core.next.call(null,line_map_seq);
var G__28243 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__28242;
new_lines = G__28243;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__28306_28368 = cljs.core.seq.call(null,reverse_map);
var chunk__28307_28369 = null;
var count__28308_28370 = (0);
var i__28309_28371 = (0);
while(true){
if((i__28309_28371 < count__28308_28370)){
var vec__28310_28372 = cljs.core._nth.call(null,chunk__28307_28369,i__28309_28371);
var line_28373 = cljs.core.nth.call(null,vec__28310_28372,(0),null);
var columns_28374 = cljs.core.nth.call(null,vec__28310_28372,(1),null);
var seq__28313_28375 = cljs.core.seq.call(null,columns_28374);
var chunk__28314_28376 = null;
var count__28315_28377 = (0);
var i__28316_28378 = (0);
while(true){
if((i__28316_28378 < count__28315_28377)){
var vec__28317_28379 = cljs.core._nth.call(null,chunk__28314_28376,i__28316_28378);
var column_28380 = cljs.core.nth.call(null,vec__28317_28379,(0),null);
var column_info_28381 = cljs.core.nth.call(null,vec__28317_28379,(1),null);
var seq__28320_28382 = cljs.core.seq.call(null,column_info_28381);
var chunk__28321_28383 = null;
var count__28322_28384 = (0);
var i__28323_28385 = (0);
while(true){
if((i__28323_28385 < count__28322_28384)){
var map__28324_28386 = cljs.core._nth.call(null,chunk__28321_28383,i__28323_28385);
var map__28324_28387__$1 = ((((!((map__28324_28386 == null)))?((((map__28324_28386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28324_28386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28324_28386):map__28324_28386);
var gline_28388 = cljs.core.get.call(null,map__28324_28387__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28389 = cljs.core.get.call(null,map__28324_28387__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28390 = cljs.core.get.call(null,map__28324_28387__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28388], null),cljs.core.fnil.call(null,((function (seq__28320_28382,chunk__28321_28383,count__28322_28384,i__28323_28385,seq__28313_28375,chunk__28314_28376,count__28315_28377,i__28316_28378,seq__28306_28368,chunk__28307_28369,count__28308_28370,i__28309_28371,map__28324_28386,map__28324_28387__$1,gline_28388,gcol_28389,name_28390,vec__28317_28379,column_28380,column_info_28381,vec__28310_28372,line_28373,columns_28374,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28389], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28373,new cljs.core.Keyword(null,"col","col",-1959363084),column_28380,new cljs.core.Keyword(null,"name","name",1843675177),name_28390], null));
});})(seq__28320_28382,chunk__28321_28383,count__28322_28384,i__28323_28385,seq__28313_28375,chunk__28314_28376,count__28315_28377,i__28316_28378,seq__28306_28368,chunk__28307_28369,count__28308_28370,i__28309_28371,map__28324_28386,map__28324_28387__$1,gline_28388,gcol_28389,name_28390,vec__28317_28379,column_28380,column_info_28381,vec__28310_28372,line_28373,columns_28374,inverted))
,cljs.core.sorted_map.call(null)));

var G__28391 = seq__28320_28382;
var G__28392 = chunk__28321_28383;
var G__28393 = count__28322_28384;
var G__28394 = (i__28323_28385 + (1));
seq__28320_28382 = G__28391;
chunk__28321_28383 = G__28392;
count__28322_28384 = G__28393;
i__28323_28385 = G__28394;
continue;
} else {
var temp__4657__auto___28395 = cljs.core.seq.call(null,seq__28320_28382);
if(temp__4657__auto___28395){
var seq__28320_28396__$1 = temp__4657__auto___28395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28320_28396__$1)){
var c__25936__auto___28397 = cljs.core.chunk_first.call(null,seq__28320_28396__$1);
var G__28398 = cljs.core.chunk_rest.call(null,seq__28320_28396__$1);
var G__28399 = c__25936__auto___28397;
var G__28400 = cljs.core.count.call(null,c__25936__auto___28397);
var G__28401 = (0);
seq__28320_28382 = G__28398;
chunk__28321_28383 = G__28399;
count__28322_28384 = G__28400;
i__28323_28385 = G__28401;
continue;
} else {
var map__28326_28402 = cljs.core.first.call(null,seq__28320_28396__$1);
var map__28326_28403__$1 = ((((!((map__28326_28402 == null)))?((((map__28326_28402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28326_28402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28326_28402):map__28326_28402);
var gline_28404 = cljs.core.get.call(null,map__28326_28403__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28405 = cljs.core.get.call(null,map__28326_28403__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28406 = cljs.core.get.call(null,map__28326_28403__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28404], null),cljs.core.fnil.call(null,((function (seq__28320_28382,chunk__28321_28383,count__28322_28384,i__28323_28385,seq__28313_28375,chunk__28314_28376,count__28315_28377,i__28316_28378,seq__28306_28368,chunk__28307_28369,count__28308_28370,i__28309_28371,map__28326_28402,map__28326_28403__$1,gline_28404,gcol_28405,name_28406,seq__28320_28396__$1,temp__4657__auto___28395,vec__28317_28379,column_28380,column_info_28381,vec__28310_28372,line_28373,columns_28374,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28405], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28373,new cljs.core.Keyword(null,"col","col",-1959363084),column_28380,new cljs.core.Keyword(null,"name","name",1843675177),name_28406], null));
});})(seq__28320_28382,chunk__28321_28383,count__28322_28384,i__28323_28385,seq__28313_28375,chunk__28314_28376,count__28315_28377,i__28316_28378,seq__28306_28368,chunk__28307_28369,count__28308_28370,i__28309_28371,map__28326_28402,map__28326_28403__$1,gline_28404,gcol_28405,name_28406,seq__28320_28396__$1,temp__4657__auto___28395,vec__28317_28379,column_28380,column_info_28381,vec__28310_28372,line_28373,columns_28374,inverted))
,cljs.core.sorted_map.call(null)));

var G__28407 = cljs.core.next.call(null,seq__28320_28396__$1);
var G__28408 = null;
var G__28409 = (0);
var G__28410 = (0);
seq__28320_28382 = G__28407;
chunk__28321_28383 = G__28408;
count__28322_28384 = G__28409;
i__28323_28385 = G__28410;
continue;
}
} else {
}
}
break;
}

var G__28411 = seq__28313_28375;
var G__28412 = chunk__28314_28376;
var G__28413 = count__28315_28377;
var G__28414 = (i__28316_28378 + (1));
seq__28313_28375 = G__28411;
chunk__28314_28376 = G__28412;
count__28315_28377 = G__28413;
i__28316_28378 = G__28414;
continue;
} else {
var temp__4657__auto___28415 = cljs.core.seq.call(null,seq__28313_28375);
if(temp__4657__auto___28415){
var seq__28313_28416__$1 = temp__4657__auto___28415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28313_28416__$1)){
var c__25936__auto___28417 = cljs.core.chunk_first.call(null,seq__28313_28416__$1);
var G__28418 = cljs.core.chunk_rest.call(null,seq__28313_28416__$1);
var G__28419 = c__25936__auto___28417;
var G__28420 = cljs.core.count.call(null,c__25936__auto___28417);
var G__28421 = (0);
seq__28313_28375 = G__28418;
chunk__28314_28376 = G__28419;
count__28315_28377 = G__28420;
i__28316_28378 = G__28421;
continue;
} else {
var vec__28328_28422 = cljs.core.first.call(null,seq__28313_28416__$1);
var column_28423 = cljs.core.nth.call(null,vec__28328_28422,(0),null);
var column_info_28424 = cljs.core.nth.call(null,vec__28328_28422,(1),null);
var seq__28331_28425 = cljs.core.seq.call(null,column_info_28424);
var chunk__28332_28426 = null;
var count__28333_28427 = (0);
var i__28334_28428 = (0);
while(true){
if((i__28334_28428 < count__28333_28427)){
var map__28335_28429 = cljs.core._nth.call(null,chunk__28332_28426,i__28334_28428);
var map__28335_28430__$1 = ((((!((map__28335_28429 == null)))?((((map__28335_28429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28335_28429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28335_28429):map__28335_28429);
var gline_28431 = cljs.core.get.call(null,map__28335_28430__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28432 = cljs.core.get.call(null,map__28335_28430__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28433 = cljs.core.get.call(null,map__28335_28430__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28431], null),cljs.core.fnil.call(null,((function (seq__28331_28425,chunk__28332_28426,count__28333_28427,i__28334_28428,seq__28313_28375,chunk__28314_28376,count__28315_28377,i__28316_28378,seq__28306_28368,chunk__28307_28369,count__28308_28370,i__28309_28371,map__28335_28429,map__28335_28430__$1,gline_28431,gcol_28432,name_28433,vec__28328_28422,column_28423,column_info_28424,seq__28313_28416__$1,temp__4657__auto___28415,vec__28310_28372,line_28373,columns_28374,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28432], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28373,new cljs.core.Keyword(null,"col","col",-1959363084),column_28423,new cljs.core.Keyword(null,"name","name",1843675177),name_28433], null));
});})(seq__28331_28425,chunk__28332_28426,count__28333_28427,i__28334_28428,seq__28313_28375,chunk__28314_28376,count__28315_28377,i__28316_28378,seq__28306_28368,chunk__28307_28369,count__28308_28370,i__28309_28371,map__28335_28429,map__28335_28430__$1,gline_28431,gcol_28432,name_28433,vec__28328_28422,column_28423,column_info_28424,seq__28313_28416__$1,temp__4657__auto___28415,vec__28310_28372,line_28373,columns_28374,inverted))
,cljs.core.sorted_map.call(null)));

var G__28434 = seq__28331_28425;
var G__28435 = chunk__28332_28426;
var G__28436 = count__28333_28427;
var G__28437 = (i__28334_28428 + (1));
seq__28331_28425 = G__28434;
chunk__28332_28426 = G__28435;
count__28333_28427 = G__28436;
i__28334_28428 = G__28437;
continue;
} else {
var temp__4657__auto___28438__$1 = cljs.core.seq.call(null,seq__28331_28425);
if(temp__4657__auto___28438__$1){
var seq__28331_28439__$1 = temp__4657__auto___28438__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28331_28439__$1)){
var c__25936__auto___28440 = cljs.core.chunk_first.call(null,seq__28331_28439__$1);
var G__28441 = cljs.core.chunk_rest.call(null,seq__28331_28439__$1);
var G__28442 = c__25936__auto___28440;
var G__28443 = cljs.core.count.call(null,c__25936__auto___28440);
var G__28444 = (0);
seq__28331_28425 = G__28441;
chunk__28332_28426 = G__28442;
count__28333_28427 = G__28443;
i__28334_28428 = G__28444;
continue;
} else {
var map__28337_28445 = cljs.core.first.call(null,seq__28331_28439__$1);
var map__28337_28446__$1 = ((((!((map__28337_28445 == null)))?((((map__28337_28445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28337_28445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28337_28445):map__28337_28445);
var gline_28447 = cljs.core.get.call(null,map__28337_28446__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28448 = cljs.core.get.call(null,map__28337_28446__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28449 = cljs.core.get.call(null,map__28337_28446__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28447], null),cljs.core.fnil.call(null,((function (seq__28331_28425,chunk__28332_28426,count__28333_28427,i__28334_28428,seq__28313_28375,chunk__28314_28376,count__28315_28377,i__28316_28378,seq__28306_28368,chunk__28307_28369,count__28308_28370,i__28309_28371,map__28337_28445,map__28337_28446__$1,gline_28447,gcol_28448,name_28449,seq__28331_28439__$1,temp__4657__auto___28438__$1,vec__28328_28422,column_28423,column_info_28424,seq__28313_28416__$1,temp__4657__auto___28415,vec__28310_28372,line_28373,columns_28374,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28448], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28373,new cljs.core.Keyword(null,"col","col",-1959363084),column_28423,new cljs.core.Keyword(null,"name","name",1843675177),name_28449], null));
});})(seq__28331_28425,chunk__28332_28426,count__28333_28427,i__28334_28428,seq__28313_28375,chunk__28314_28376,count__28315_28377,i__28316_28378,seq__28306_28368,chunk__28307_28369,count__28308_28370,i__28309_28371,map__28337_28445,map__28337_28446__$1,gline_28447,gcol_28448,name_28449,seq__28331_28439__$1,temp__4657__auto___28438__$1,vec__28328_28422,column_28423,column_info_28424,seq__28313_28416__$1,temp__4657__auto___28415,vec__28310_28372,line_28373,columns_28374,inverted))
,cljs.core.sorted_map.call(null)));

var G__28450 = cljs.core.next.call(null,seq__28331_28439__$1);
var G__28451 = null;
var G__28452 = (0);
var G__28453 = (0);
seq__28331_28425 = G__28450;
chunk__28332_28426 = G__28451;
count__28333_28427 = G__28452;
i__28334_28428 = G__28453;
continue;
}
} else {
}
}
break;
}

var G__28454 = cljs.core.next.call(null,seq__28313_28416__$1);
var G__28455 = null;
var G__28456 = (0);
var G__28457 = (0);
seq__28313_28375 = G__28454;
chunk__28314_28376 = G__28455;
count__28315_28377 = G__28456;
i__28316_28378 = G__28457;
continue;
}
} else {
}
}
break;
}

var G__28458 = seq__28306_28368;
var G__28459 = chunk__28307_28369;
var G__28460 = count__28308_28370;
var G__28461 = (i__28309_28371 + (1));
seq__28306_28368 = G__28458;
chunk__28307_28369 = G__28459;
count__28308_28370 = G__28460;
i__28309_28371 = G__28461;
continue;
} else {
var temp__4657__auto___28462 = cljs.core.seq.call(null,seq__28306_28368);
if(temp__4657__auto___28462){
var seq__28306_28463__$1 = temp__4657__auto___28462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28306_28463__$1)){
var c__25936__auto___28464 = cljs.core.chunk_first.call(null,seq__28306_28463__$1);
var G__28465 = cljs.core.chunk_rest.call(null,seq__28306_28463__$1);
var G__28466 = c__25936__auto___28464;
var G__28467 = cljs.core.count.call(null,c__25936__auto___28464);
var G__28468 = (0);
seq__28306_28368 = G__28465;
chunk__28307_28369 = G__28466;
count__28308_28370 = G__28467;
i__28309_28371 = G__28468;
continue;
} else {
var vec__28339_28469 = cljs.core.first.call(null,seq__28306_28463__$1);
var line_28470 = cljs.core.nth.call(null,vec__28339_28469,(0),null);
var columns_28471 = cljs.core.nth.call(null,vec__28339_28469,(1),null);
var seq__28342_28472 = cljs.core.seq.call(null,columns_28471);
var chunk__28343_28473 = null;
var count__28344_28474 = (0);
var i__28345_28475 = (0);
while(true){
if((i__28345_28475 < count__28344_28474)){
var vec__28346_28476 = cljs.core._nth.call(null,chunk__28343_28473,i__28345_28475);
var column_28477 = cljs.core.nth.call(null,vec__28346_28476,(0),null);
var column_info_28478 = cljs.core.nth.call(null,vec__28346_28476,(1),null);
var seq__28349_28479 = cljs.core.seq.call(null,column_info_28478);
var chunk__28350_28480 = null;
var count__28351_28481 = (0);
var i__28352_28482 = (0);
while(true){
if((i__28352_28482 < count__28351_28481)){
var map__28353_28483 = cljs.core._nth.call(null,chunk__28350_28480,i__28352_28482);
var map__28353_28484__$1 = ((((!((map__28353_28483 == null)))?((((map__28353_28483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28353_28483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28353_28483):map__28353_28483);
var gline_28485 = cljs.core.get.call(null,map__28353_28484__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28486 = cljs.core.get.call(null,map__28353_28484__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28487 = cljs.core.get.call(null,map__28353_28484__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28485], null),cljs.core.fnil.call(null,((function (seq__28349_28479,chunk__28350_28480,count__28351_28481,i__28352_28482,seq__28342_28472,chunk__28343_28473,count__28344_28474,i__28345_28475,seq__28306_28368,chunk__28307_28369,count__28308_28370,i__28309_28371,map__28353_28483,map__28353_28484__$1,gline_28485,gcol_28486,name_28487,vec__28346_28476,column_28477,column_info_28478,vec__28339_28469,line_28470,columns_28471,seq__28306_28463__$1,temp__4657__auto___28462,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28486], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28470,new cljs.core.Keyword(null,"col","col",-1959363084),column_28477,new cljs.core.Keyword(null,"name","name",1843675177),name_28487], null));
});})(seq__28349_28479,chunk__28350_28480,count__28351_28481,i__28352_28482,seq__28342_28472,chunk__28343_28473,count__28344_28474,i__28345_28475,seq__28306_28368,chunk__28307_28369,count__28308_28370,i__28309_28371,map__28353_28483,map__28353_28484__$1,gline_28485,gcol_28486,name_28487,vec__28346_28476,column_28477,column_info_28478,vec__28339_28469,line_28470,columns_28471,seq__28306_28463__$1,temp__4657__auto___28462,inverted))
,cljs.core.sorted_map.call(null)));

var G__28488 = seq__28349_28479;
var G__28489 = chunk__28350_28480;
var G__28490 = count__28351_28481;
var G__28491 = (i__28352_28482 + (1));
seq__28349_28479 = G__28488;
chunk__28350_28480 = G__28489;
count__28351_28481 = G__28490;
i__28352_28482 = G__28491;
continue;
} else {
var temp__4657__auto___28492__$1 = cljs.core.seq.call(null,seq__28349_28479);
if(temp__4657__auto___28492__$1){
var seq__28349_28493__$1 = temp__4657__auto___28492__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28349_28493__$1)){
var c__25936__auto___28494 = cljs.core.chunk_first.call(null,seq__28349_28493__$1);
var G__28495 = cljs.core.chunk_rest.call(null,seq__28349_28493__$1);
var G__28496 = c__25936__auto___28494;
var G__28497 = cljs.core.count.call(null,c__25936__auto___28494);
var G__28498 = (0);
seq__28349_28479 = G__28495;
chunk__28350_28480 = G__28496;
count__28351_28481 = G__28497;
i__28352_28482 = G__28498;
continue;
} else {
var map__28355_28499 = cljs.core.first.call(null,seq__28349_28493__$1);
var map__28355_28500__$1 = ((((!((map__28355_28499 == null)))?((((map__28355_28499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28355_28499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28355_28499):map__28355_28499);
var gline_28501 = cljs.core.get.call(null,map__28355_28500__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28502 = cljs.core.get.call(null,map__28355_28500__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28503 = cljs.core.get.call(null,map__28355_28500__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28501], null),cljs.core.fnil.call(null,((function (seq__28349_28479,chunk__28350_28480,count__28351_28481,i__28352_28482,seq__28342_28472,chunk__28343_28473,count__28344_28474,i__28345_28475,seq__28306_28368,chunk__28307_28369,count__28308_28370,i__28309_28371,map__28355_28499,map__28355_28500__$1,gline_28501,gcol_28502,name_28503,seq__28349_28493__$1,temp__4657__auto___28492__$1,vec__28346_28476,column_28477,column_info_28478,vec__28339_28469,line_28470,columns_28471,seq__28306_28463__$1,temp__4657__auto___28462,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28502], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28470,new cljs.core.Keyword(null,"col","col",-1959363084),column_28477,new cljs.core.Keyword(null,"name","name",1843675177),name_28503], null));
});})(seq__28349_28479,chunk__28350_28480,count__28351_28481,i__28352_28482,seq__28342_28472,chunk__28343_28473,count__28344_28474,i__28345_28475,seq__28306_28368,chunk__28307_28369,count__28308_28370,i__28309_28371,map__28355_28499,map__28355_28500__$1,gline_28501,gcol_28502,name_28503,seq__28349_28493__$1,temp__4657__auto___28492__$1,vec__28346_28476,column_28477,column_info_28478,vec__28339_28469,line_28470,columns_28471,seq__28306_28463__$1,temp__4657__auto___28462,inverted))
,cljs.core.sorted_map.call(null)));

var G__28504 = cljs.core.next.call(null,seq__28349_28493__$1);
var G__28505 = null;
var G__28506 = (0);
var G__28507 = (0);
seq__28349_28479 = G__28504;
chunk__28350_28480 = G__28505;
count__28351_28481 = G__28506;
i__28352_28482 = G__28507;
continue;
}
} else {
}
}
break;
}

var G__28508 = seq__28342_28472;
var G__28509 = chunk__28343_28473;
var G__28510 = count__28344_28474;
var G__28511 = (i__28345_28475 + (1));
seq__28342_28472 = G__28508;
chunk__28343_28473 = G__28509;
count__28344_28474 = G__28510;
i__28345_28475 = G__28511;
continue;
} else {
var temp__4657__auto___28512__$1 = cljs.core.seq.call(null,seq__28342_28472);
if(temp__4657__auto___28512__$1){
var seq__28342_28513__$1 = temp__4657__auto___28512__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28342_28513__$1)){
var c__25936__auto___28514 = cljs.core.chunk_first.call(null,seq__28342_28513__$1);
var G__28515 = cljs.core.chunk_rest.call(null,seq__28342_28513__$1);
var G__28516 = c__25936__auto___28514;
var G__28517 = cljs.core.count.call(null,c__25936__auto___28514);
var G__28518 = (0);
seq__28342_28472 = G__28515;
chunk__28343_28473 = G__28516;
count__28344_28474 = G__28517;
i__28345_28475 = G__28518;
continue;
} else {
var vec__28357_28519 = cljs.core.first.call(null,seq__28342_28513__$1);
var column_28520 = cljs.core.nth.call(null,vec__28357_28519,(0),null);
var column_info_28521 = cljs.core.nth.call(null,vec__28357_28519,(1),null);
var seq__28360_28522 = cljs.core.seq.call(null,column_info_28521);
var chunk__28361_28523 = null;
var count__28362_28524 = (0);
var i__28363_28525 = (0);
while(true){
if((i__28363_28525 < count__28362_28524)){
var map__28364_28526 = cljs.core._nth.call(null,chunk__28361_28523,i__28363_28525);
var map__28364_28527__$1 = ((((!((map__28364_28526 == null)))?((((map__28364_28526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28364_28526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28364_28526):map__28364_28526);
var gline_28528 = cljs.core.get.call(null,map__28364_28527__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28529 = cljs.core.get.call(null,map__28364_28527__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28530 = cljs.core.get.call(null,map__28364_28527__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28528], null),cljs.core.fnil.call(null,((function (seq__28360_28522,chunk__28361_28523,count__28362_28524,i__28363_28525,seq__28342_28472,chunk__28343_28473,count__28344_28474,i__28345_28475,seq__28306_28368,chunk__28307_28369,count__28308_28370,i__28309_28371,map__28364_28526,map__28364_28527__$1,gline_28528,gcol_28529,name_28530,vec__28357_28519,column_28520,column_info_28521,seq__28342_28513__$1,temp__4657__auto___28512__$1,vec__28339_28469,line_28470,columns_28471,seq__28306_28463__$1,temp__4657__auto___28462,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28529], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28470,new cljs.core.Keyword(null,"col","col",-1959363084),column_28520,new cljs.core.Keyword(null,"name","name",1843675177),name_28530], null));
});})(seq__28360_28522,chunk__28361_28523,count__28362_28524,i__28363_28525,seq__28342_28472,chunk__28343_28473,count__28344_28474,i__28345_28475,seq__28306_28368,chunk__28307_28369,count__28308_28370,i__28309_28371,map__28364_28526,map__28364_28527__$1,gline_28528,gcol_28529,name_28530,vec__28357_28519,column_28520,column_info_28521,seq__28342_28513__$1,temp__4657__auto___28512__$1,vec__28339_28469,line_28470,columns_28471,seq__28306_28463__$1,temp__4657__auto___28462,inverted))
,cljs.core.sorted_map.call(null)));

var G__28531 = seq__28360_28522;
var G__28532 = chunk__28361_28523;
var G__28533 = count__28362_28524;
var G__28534 = (i__28363_28525 + (1));
seq__28360_28522 = G__28531;
chunk__28361_28523 = G__28532;
count__28362_28524 = G__28533;
i__28363_28525 = G__28534;
continue;
} else {
var temp__4657__auto___28535__$2 = cljs.core.seq.call(null,seq__28360_28522);
if(temp__4657__auto___28535__$2){
var seq__28360_28536__$1 = temp__4657__auto___28535__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28360_28536__$1)){
var c__25936__auto___28537 = cljs.core.chunk_first.call(null,seq__28360_28536__$1);
var G__28538 = cljs.core.chunk_rest.call(null,seq__28360_28536__$1);
var G__28539 = c__25936__auto___28537;
var G__28540 = cljs.core.count.call(null,c__25936__auto___28537);
var G__28541 = (0);
seq__28360_28522 = G__28538;
chunk__28361_28523 = G__28539;
count__28362_28524 = G__28540;
i__28363_28525 = G__28541;
continue;
} else {
var map__28366_28542 = cljs.core.first.call(null,seq__28360_28536__$1);
var map__28366_28543__$1 = ((((!((map__28366_28542 == null)))?((((map__28366_28542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28366_28542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28366_28542):map__28366_28542);
var gline_28544 = cljs.core.get.call(null,map__28366_28543__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_28545 = cljs.core.get.call(null,map__28366_28543__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_28546 = cljs.core.get.call(null,map__28366_28543__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28544], null),cljs.core.fnil.call(null,((function (seq__28360_28522,chunk__28361_28523,count__28362_28524,i__28363_28525,seq__28342_28472,chunk__28343_28473,count__28344_28474,i__28345_28475,seq__28306_28368,chunk__28307_28369,count__28308_28370,i__28309_28371,map__28366_28542,map__28366_28543__$1,gline_28544,gcol_28545,name_28546,seq__28360_28536__$1,temp__4657__auto___28535__$2,vec__28357_28519,column_28520,column_info_28521,seq__28342_28513__$1,temp__4657__auto___28512__$1,vec__28339_28469,line_28470,columns_28471,seq__28306_28463__$1,temp__4657__auto___28462,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_28545], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28470,new cljs.core.Keyword(null,"col","col",-1959363084),column_28520,new cljs.core.Keyword(null,"name","name",1843675177),name_28546], null));
});})(seq__28360_28522,chunk__28361_28523,count__28362_28524,i__28363_28525,seq__28342_28472,chunk__28343_28473,count__28344_28474,i__28345_28475,seq__28306_28368,chunk__28307_28369,count__28308_28370,i__28309_28371,map__28366_28542,map__28366_28543__$1,gline_28544,gcol_28545,name_28546,seq__28360_28536__$1,temp__4657__auto___28535__$2,vec__28357_28519,column_28520,column_info_28521,seq__28342_28513__$1,temp__4657__auto___28512__$1,vec__28339_28469,line_28470,columns_28471,seq__28306_28463__$1,temp__4657__auto___28462,inverted))
,cljs.core.sorted_map.call(null)));

var G__28547 = cljs.core.next.call(null,seq__28360_28536__$1);
var G__28548 = null;
var G__28549 = (0);
var G__28550 = (0);
seq__28360_28522 = G__28547;
chunk__28361_28523 = G__28548;
count__28362_28524 = G__28549;
i__28363_28525 = G__28550;
continue;
}
} else {
}
}
break;
}

var G__28551 = cljs.core.next.call(null,seq__28342_28513__$1);
var G__28552 = null;
var G__28553 = (0);
var G__28554 = (0);
seq__28342_28472 = G__28551;
chunk__28343_28473 = G__28552;
count__28344_28474 = G__28553;
i__28345_28475 = G__28554;
continue;
}
} else {
}
}
break;
}

var G__28555 = cljs.core.next.call(null,seq__28306_28463__$1);
var G__28556 = null;
var G__28557 = (0);
var G__28558 = (0);
seq__28306_28368 = G__28555;
chunk__28307_28369 = G__28556;
count__28308_28370 = G__28557;
i__28309_28371 = G__28558;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1490344424895