// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__28585 = s;
var map__28585__$1 = ((((!((map__28585 == null)))?((((map__28585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28585):map__28585);
var name = cljs.core.get.call(null,map__28585__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__28585__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__28588 = info;
var map__28589 = G__28588;
var map__28589__$1 = ((((!((map__28589 == null)))?((((map__28589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28589):map__28589);
var shadow = cljs.core.get.call(null,map__28589__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__28588__$1 = G__28588;
while(true){
var d__$2 = d__$1;
var map__28591 = G__28588__$1;
var map__28591__$1 = ((((!((map__28591 == null)))?((((map__28591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28591):map__28591);
var shadow__$1 = cljs.core.get.call(null,map__28591__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__28593 = (d__$2 + (1));
var G__28594 = shadow__$1;
d__$1 = G__28593;
G__28588__$1 = G__28594;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__28595){
var map__28600 = p__28595;
var map__28600__$1 = ((((!((map__28600 == null)))?((((map__28600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28600):map__28600);
var name_var = map__28600__$1;
var name = cljs.core.get.call(null,map__28600__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__28600__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__28602 = info;
var map__28602__$1 = ((((!((map__28602 == null)))?((((map__28602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28602):map__28602);
var ns = cljs.core.get.call(null,map__28602__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__28602__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args28604 = [];
var len__26200__auto___28607 = arguments.length;
var i__26201__auto___28608 = (0);
while(true){
if((i__26201__auto___28608 < len__26200__auto___28607)){
args28604.push((arguments[i__26201__auto___28608]));

var G__28609 = (i__26201__auto___28608 + (1));
i__26201__auto___28608 = G__28609;
continue;
} else {
}
break;
}

var G__28606 = args28604.length;
switch (G__28606) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28604.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__28612 = cp;
switch (G__28612) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return [cljs.core.str("\\u"),cljs.core.str(pad),cljs.core.str(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__28618_28622 = cljs.core.seq.call(null,s);
var chunk__28619_28623 = null;
var count__28620_28624 = (0);
var i__28621_28625 = (0);
while(true){
if((i__28621_28625 < count__28620_28624)){
var c_28626 = cljs.core._nth.call(null,chunk__28619_28623,i__28621_28625);
sb.append(cljs.compiler.escape_char.call(null,c_28626));

var G__28627 = seq__28618_28622;
var G__28628 = chunk__28619_28623;
var G__28629 = count__28620_28624;
var G__28630 = (i__28621_28625 + (1));
seq__28618_28622 = G__28627;
chunk__28619_28623 = G__28628;
count__28620_28624 = G__28629;
i__28621_28625 = G__28630;
continue;
} else {
var temp__4657__auto___28631 = cljs.core.seq.call(null,seq__28618_28622);
if(temp__4657__auto___28631){
var seq__28618_28632__$1 = temp__4657__auto___28631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28618_28632__$1)){
var c__25936__auto___28633 = cljs.core.chunk_first.call(null,seq__28618_28632__$1);
var G__28634 = cljs.core.chunk_rest.call(null,seq__28618_28632__$1);
var G__28635 = c__25936__auto___28633;
var G__28636 = cljs.core.count.call(null,c__25936__auto___28633);
var G__28637 = (0);
seq__28618_28622 = G__28634;
chunk__28619_28623 = G__28635;
count__28620_28624 = G__28636;
i__28621_28625 = G__28637;
continue;
} else {
var c_28638 = cljs.core.first.call(null,seq__28618_28632__$1);
sb.append(cljs.compiler.escape_char.call(null,c_28638));

var G__28639 = cljs.core.next.call(null,seq__28618_28632__$1);
var G__28640 = null;
var G__28641 = (0);
var G__28642 = (0);
seq__28618_28622 = G__28639;
chunk__28619_28623 = G__28640;
count__28620_28624 = G__28641;
i__28621_28625 = G__28642;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__26050__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26051__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26052__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26053__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26054__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26054__auto__,method_table__26050__auto__,prefer_table__26051__auto__,method_cache__26052__auto__,cached_hierarchy__26053__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__26734__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__26734__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__28648_28653 = ast;
var map__28648_28654__$1 = ((((!((map__28648_28653 == null)))?((((map__28648_28653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28648_28653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28648_28653):map__28648_28653);
var env_28655 = cljs.core.get.call(null,map__28648_28654__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_28655))){
var map__28650_28656 = env_28655;
var map__28650_28657__$1 = ((((!((map__28650_28656 == null)))?((((map__28650_28656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28650_28656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28650_28656):map__28650_28656);
var line_28658 = cljs.core.get.call(null,map__28650_28657__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28659 = cljs.core.get.call(null,map__28650_28657__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__28650_28656,map__28650_28657__$1,line_28658,column_28659,map__28648_28653,map__28648_28654__$1,env_28655,val__26734__auto__){
return (function (m){
var minfo = (function (){var G__28652 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__28652,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__28652;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_28658 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__28650_28656,map__28650_28657__$1,line_28658,column_28659,map__28648_28653,map__28648_28654__$1,env_28655,val__26734__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_28659)?(column_28659 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__28650_28656,map__28650_28657__$1,line_28658,column_28659,map__28648_28653,map__28648_28654__$1,env_28655,val__26734__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__28650_28656,map__28650_28657__$1,line_28658,column_28659,map__28648_28653,map__28648_28654__$1,env_28655,val__26734__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__28650_28656,map__28650_28657__$1,line_28658,column_28659,map__28648_28653,map__28648_28654__$1,env_28655,val__26734__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__28650_28656,map__28650_28657__$1,line_28658,column_28659,map__28648_28653,map__28648_28654__$1,env_28655,val__26734__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__26734__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__26207__auto__ = [];
var len__26200__auto___28666 = arguments.length;
var i__26201__auto___28667 = (0);
while(true){
if((i__26201__auto___28667 < len__26200__auto___28666)){
args__26207__auto__.push((arguments[i__26201__auto___28667]));

var G__28668 = (i__26201__auto___28667 + (1));
i__26201__auto___28667 = G__28668;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__28662_28669 = cljs.core.seq.call(null,xs);
var chunk__28663_28670 = null;
var count__28664_28671 = (0);
var i__28665_28672 = (0);
while(true){
if((i__28665_28672 < count__28664_28671)){
var x_28673 = cljs.core._nth.call(null,chunk__28663_28670,i__28665_28672);
if((x_28673 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_28673)){
cljs.compiler.emit.call(null,x_28673);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_28673)){
cljs.core.apply.call(null,cljs.compiler.emits,x_28673);
} else {
if(goog.isFunction(x_28673)){
x_28673.call(null);
} else {
var s_28674 = cljs.core.print_str.call(null,x_28673);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__28662_28669,chunk__28663_28670,count__28664_28671,i__28665_28672,s_28674,x_28673){
return (function (p1__28660_SHARP_){
return (p1__28660_SHARP_ + cljs.core.count.call(null,s_28674));
});})(seq__28662_28669,chunk__28663_28670,count__28664_28671,i__28665_28672,s_28674,x_28673))
);
}

cljs.core.print.call(null,s_28674);

}
}
}
}

var G__28675 = seq__28662_28669;
var G__28676 = chunk__28663_28670;
var G__28677 = count__28664_28671;
var G__28678 = (i__28665_28672 + (1));
seq__28662_28669 = G__28675;
chunk__28663_28670 = G__28676;
count__28664_28671 = G__28677;
i__28665_28672 = G__28678;
continue;
} else {
var temp__4657__auto___28679 = cljs.core.seq.call(null,seq__28662_28669);
if(temp__4657__auto___28679){
var seq__28662_28680__$1 = temp__4657__auto___28679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28662_28680__$1)){
var c__25936__auto___28681 = cljs.core.chunk_first.call(null,seq__28662_28680__$1);
var G__28682 = cljs.core.chunk_rest.call(null,seq__28662_28680__$1);
var G__28683 = c__25936__auto___28681;
var G__28684 = cljs.core.count.call(null,c__25936__auto___28681);
var G__28685 = (0);
seq__28662_28669 = G__28682;
chunk__28663_28670 = G__28683;
count__28664_28671 = G__28684;
i__28665_28672 = G__28685;
continue;
} else {
var x_28686 = cljs.core.first.call(null,seq__28662_28680__$1);
if((x_28686 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_28686)){
cljs.compiler.emit.call(null,x_28686);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_28686)){
cljs.core.apply.call(null,cljs.compiler.emits,x_28686);
} else {
if(goog.isFunction(x_28686)){
x_28686.call(null);
} else {
var s_28687 = cljs.core.print_str.call(null,x_28686);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__28662_28669,chunk__28663_28670,count__28664_28671,i__28665_28672,s_28687,x_28686,seq__28662_28680__$1,temp__4657__auto___28679){
return (function (p1__28660_SHARP_){
return (p1__28660_SHARP_ + cljs.core.count.call(null,s_28687));
});})(seq__28662_28669,chunk__28663_28670,count__28664_28671,i__28665_28672,s_28687,x_28686,seq__28662_28680__$1,temp__4657__auto___28679))
);
}

cljs.core.print.call(null,s_28687);

}
}
}
}

var G__28688 = cljs.core.next.call(null,seq__28662_28680__$1);
var G__28689 = null;
var G__28690 = (0);
var G__28691 = (0);
seq__28662_28669 = G__28688;
chunk__28663_28670 = G__28689;
count__28664_28671 = G__28690;
i__28665_28672 = G__28691;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq28661){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28661));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__26207__auto__ = [];
var len__26200__auto___28696 = arguments.length;
var i__26201__auto___28697 = (0);
while(true){
if((i__26201__auto___28697 < len__26200__auto___28696)){
args__26207__auto__.push((arguments[i__26201__auto___28697]));

var G__28698 = (i__26201__auto___28697 + (1));
i__26201__auto___28697 = G__28698;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__28693){
var map__28694 = p__28693;
var map__28694__$1 = ((((!((map__28694 == null)))?((((map__28694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28694):map__28694);
var m = map__28694__$1;
var gen_line = cljs.core.get.call(null,map__28694__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq28692){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28692));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__26111__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28701_28703 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28702_28704 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28701_28703,_STAR_print_fn_STAR_28702_28704,sb__26111__auto__){
return (function (x__26112__auto__){
return sb__26111__auto__.append(x__26112__auto__);
});})(_STAR_print_newline_STAR_28701_28703,_STAR_print_fn_STAR_28702_28704,sb__26111__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28702_28704;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28701_28703;
}
return [cljs.core.str(sb__26111__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__26050__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26051__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26052__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26053__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26054__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26054__auto__,method_table__26050__auto__,prefer_table__26051__auto__,method_cache__26052__auto__,cached_hierarchy__26053__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__28705 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__28705,(0),null);
var flags = cljs.core.nth.call(null,vec__28705,(1),null);
var pattern = cljs.core.nth.call(null,vec__28705,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__28709){
var map__28710 = p__28709;
var map__28710__$1 = ((((!((map__28710 == null)))?((((map__28710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28710):map__28710);
var arg = map__28710__$1;
var info = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__25125__auto__ = js_module_name;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__28569__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__28712 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__28712);
} else {
return G__28712;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__28713){
var map__28714 = p__28713;
var map__28714__$1 = ((((!((map__28714 == null)))?((((map__28714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28714):map__28714);
var arg = map__28714__$1;
var env = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__28716 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__28716__$1 = ((((!((map__28716 == null)))?((((map__28716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28716):map__28716);
var name = cljs.core.get.call(null,map__28716__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__28569__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__28718){
var map__28719 = p__28718;
var map__28719__$1 = ((((!((map__28719 == null)))?((((map__28719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28719):map__28719);
var expr = cljs.core.get.call(null,map__28719__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__28719__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__28719__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28569__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__28721_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__28721_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__28722){
var map__28723 = p__28722;
var map__28723__$1 = ((((!((map__28723 == null)))?((((map__28723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28723):map__28723);
var env = cljs.core.get.call(null,map__28723__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__28723__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__28723__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__28569__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__28725){
var map__28726 = p__28725;
var map__28726__$1 = ((((!((map__28726 == null)))?((((map__28726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28726):map__28726);
var items = cljs.core.get.call(null,map__28726__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28726__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28569__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__28728){
var map__28729 = p__28728;
var map__28729__$1 = ((((!((map__28729 == null)))?((((map__28729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28729):map__28729);
var items = cljs.core.get.call(null,map__28729__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28729__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28569__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_28731 = cljs.core.count.call(null,items);
if((cnt_28731 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_28731,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__28732_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__28732_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__28733){
var map__28734 = p__28733;
var map__28734__$1 = ((((!((map__28734 == null)))?((((map__28734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28734):map__28734);
var items = cljs.core.get.call(null,map__28734__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28734__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28569__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__28736){
var map__28737 = p__28736;
var map__28737__$1 = ((((!((map__28737 == null)))?((((map__28737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28737):map__28737);
var items = cljs.core.get.call(null,map__28737__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__28737__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__28737__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28569__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___28755 = cljs.core.seq.call(null,items);
if(temp__4657__auto___28755){
var items_28756__$1 = temp__4657__auto___28755;
var vec__28739_28757 = items_28756__$1;
var seq__28740_28758 = cljs.core.seq.call(null,vec__28739_28757);
var first__28741_28759 = cljs.core.first.call(null,seq__28740_28758);
var seq__28740_28760__$1 = cljs.core.next.call(null,seq__28740_28758);
var vec__28742_28761 = first__28741_28759;
var k_28762 = cljs.core.nth.call(null,vec__28742_28761,(0),null);
var v_28763 = cljs.core.nth.call(null,vec__28742_28761,(1),null);
var r_28764 = seq__28740_28760__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_28762),"\": ",v_28763);

var seq__28745_28765 = cljs.core.seq.call(null,r_28764);
var chunk__28746_28766 = null;
var count__28747_28767 = (0);
var i__28748_28768 = (0);
while(true){
if((i__28748_28768 < count__28747_28767)){
var vec__28749_28769 = cljs.core._nth.call(null,chunk__28746_28766,i__28748_28768);
var k_28770__$1 = cljs.core.nth.call(null,vec__28749_28769,(0),null);
var v_28771__$1 = cljs.core.nth.call(null,vec__28749_28769,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_28770__$1),"\": ",v_28771__$1);

var G__28772 = seq__28745_28765;
var G__28773 = chunk__28746_28766;
var G__28774 = count__28747_28767;
var G__28775 = (i__28748_28768 + (1));
seq__28745_28765 = G__28772;
chunk__28746_28766 = G__28773;
count__28747_28767 = G__28774;
i__28748_28768 = G__28775;
continue;
} else {
var temp__4657__auto___28776__$1 = cljs.core.seq.call(null,seq__28745_28765);
if(temp__4657__auto___28776__$1){
var seq__28745_28777__$1 = temp__4657__auto___28776__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28745_28777__$1)){
var c__25936__auto___28778 = cljs.core.chunk_first.call(null,seq__28745_28777__$1);
var G__28779 = cljs.core.chunk_rest.call(null,seq__28745_28777__$1);
var G__28780 = c__25936__auto___28778;
var G__28781 = cljs.core.count.call(null,c__25936__auto___28778);
var G__28782 = (0);
seq__28745_28765 = G__28779;
chunk__28746_28766 = G__28780;
count__28747_28767 = G__28781;
i__28748_28768 = G__28782;
continue;
} else {
var vec__28752_28783 = cljs.core.first.call(null,seq__28745_28777__$1);
var k_28784__$1 = cljs.core.nth.call(null,vec__28752_28783,(0),null);
var v_28785__$1 = cljs.core.nth.call(null,vec__28752_28783,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_28784__$1),"\": ",v_28785__$1);

var G__28786 = cljs.core.next.call(null,seq__28745_28777__$1);
var G__28787 = null;
var G__28788 = (0);
var G__28789 = (0);
seq__28745_28765 = G__28786;
chunk__28746_28766 = G__28787;
count__28747_28767 = G__28788;
i__28748_28768 = G__28789;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__28790){
var map__28791 = p__28790;
var map__28791__$1 = ((((!((map__28791 == null)))?((((map__28791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28791):map__28791);
var form = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__28569__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__28793){
var map__28796 = p__28793;
var map__28796__$1 = ((((!((map__28796 == null)))?((((map__28796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28796):map__28796);
var op = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__25113__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__25113__auto__){
var and__25113__auto____$1 = form;
if(cljs.core.truth_(and__25113__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__25113__auto____$1;
}
} else {
return and__25113__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__28798){
var map__28801 = p__28798;
var map__28801__$1 = ((((!((map__28801 == null)))?((((map__28801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28801):map__28801);
var op = cljs.core.get.call(null,map__28801__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__28801__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__25125__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__28803){
var map__28804 = p__28803;
var map__28804__$1 = ((((!((map__28804 == null)))?((((map__28804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28804):map__28804);
var test = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__25125__auto__ = unchecked;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__28806){
var map__28807 = p__28806;
var map__28807__$1 = ((((!((map__28807 == null)))?((((map__28807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28807):map__28807);
var v = cljs.core.get.call(null,map__28807__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__28807__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__28807__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__28807__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__28807__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__28809_28827 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__28810_28828 = null;
var count__28811_28829 = (0);
var i__28812_28830 = (0);
while(true){
if((i__28812_28830 < count__28811_28829)){
var vec__28813_28831 = cljs.core._nth.call(null,chunk__28810_28828,i__28812_28830);
var ts_28832 = cljs.core.nth.call(null,vec__28813_28831,(0),null);
var then_28833 = cljs.core.nth.call(null,vec__28813_28831,(1),null);
var seq__28816_28834 = cljs.core.seq.call(null,ts_28832);
var chunk__28817_28835 = null;
var count__28818_28836 = (0);
var i__28819_28837 = (0);
while(true){
if((i__28819_28837 < count__28818_28836)){
var test_28838 = cljs.core._nth.call(null,chunk__28817_28835,i__28819_28837);
cljs.compiler.emitln.call(null,"case ",test_28838,":");

var G__28839 = seq__28816_28834;
var G__28840 = chunk__28817_28835;
var G__28841 = count__28818_28836;
var G__28842 = (i__28819_28837 + (1));
seq__28816_28834 = G__28839;
chunk__28817_28835 = G__28840;
count__28818_28836 = G__28841;
i__28819_28837 = G__28842;
continue;
} else {
var temp__4657__auto___28843 = cljs.core.seq.call(null,seq__28816_28834);
if(temp__4657__auto___28843){
var seq__28816_28844__$1 = temp__4657__auto___28843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28816_28844__$1)){
var c__25936__auto___28845 = cljs.core.chunk_first.call(null,seq__28816_28844__$1);
var G__28846 = cljs.core.chunk_rest.call(null,seq__28816_28844__$1);
var G__28847 = c__25936__auto___28845;
var G__28848 = cljs.core.count.call(null,c__25936__auto___28845);
var G__28849 = (0);
seq__28816_28834 = G__28846;
chunk__28817_28835 = G__28847;
count__28818_28836 = G__28848;
i__28819_28837 = G__28849;
continue;
} else {
var test_28850 = cljs.core.first.call(null,seq__28816_28844__$1);
cljs.compiler.emitln.call(null,"case ",test_28850,":");

var G__28851 = cljs.core.next.call(null,seq__28816_28844__$1);
var G__28852 = null;
var G__28853 = (0);
var G__28854 = (0);
seq__28816_28834 = G__28851;
chunk__28817_28835 = G__28852;
count__28818_28836 = G__28853;
i__28819_28837 = G__28854;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_28833);
} else {
cljs.compiler.emitln.call(null,then_28833);
}

cljs.compiler.emitln.call(null,"break;");

var G__28855 = seq__28809_28827;
var G__28856 = chunk__28810_28828;
var G__28857 = count__28811_28829;
var G__28858 = (i__28812_28830 + (1));
seq__28809_28827 = G__28855;
chunk__28810_28828 = G__28856;
count__28811_28829 = G__28857;
i__28812_28830 = G__28858;
continue;
} else {
var temp__4657__auto___28859 = cljs.core.seq.call(null,seq__28809_28827);
if(temp__4657__auto___28859){
var seq__28809_28860__$1 = temp__4657__auto___28859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28809_28860__$1)){
var c__25936__auto___28861 = cljs.core.chunk_first.call(null,seq__28809_28860__$1);
var G__28862 = cljs.core.chunk_rest.call(null,seq__28809_28860__$1);
var G__28863 = c__25936__auto___28861;
var G__28864 = cljs.core.count.call(null,c__25936__auto___28861);
var G__28865 = (0);
seq__28809_28827 = G__28862;
chunk__28810_28828 = G__28863;
count__28811_28829 = G__28864;
i__28812_28830 = G__28865;
continue;
} else {
var vec__28820_28866 = cljs.core.first.call(null,seq__28809_28860__$1);
var ts_28867 = cljs.core.nth.call(null,vec__28820_28866,(0),null);
var then_28868 = cljs.core.nth.call(null,vec__28820_28866,(1),null);
var seq__28823_28869 = cljs.core.seq.call(null,ts_28867);
var chunk__28824_28870 = null;
var count__28825_28871 = (0);
var i__28826_28872 = (0);
while(true){
if((i__28826_28872 < count__28825_28871)){
var test_28873 = cljs.core._nth.call(null,chunk__28824_28870,i__28826_28872);
cljs.compiler.emitln.call(null,"case ",test_28873,":");

var G__28874 = seq__28823_28869;
var G__28875 = chunk__28824_28870;
var G__28876 = count__28825_28871;
var G__28877 = (i__28826_28872 + (1));
seq__28823_28869 = G__28874;
chunk__28824_28870 = G__28875;
count__28825_28871 = G__28876;
i__28826_28872 = G__28877;
continue;
} else {
var temp__4657__auto___28878__$1 = cljs.core.seq.call(null,seq__28823_28869);
if(temp__4657__auto___28878__$1){
var seq__28823_28879__$1 = temp__4657__auto___28878__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28823_28879__$1)){
var c__25936__auto___28880 = cljs.core.chunk_first.call(null,seq__28823_28879__$1);
var G__28881 = cljs.core.chunk_rest.call(null,seq__28823_28879__$1);
var G__28882 = c__25936__auto___28880;
var G__28883 = cljs.core.count.call(null,c__25936__auto___28880);
var G__28884 = (0);
seq__28823_28869 = G__28881;
chunk__28824_28870 = G__28882;
count__28825_28871 = G__28883;
i__28826_28872 = G__28884;
continue;
} else {
var test_28885 = cljs.core.first.call(null,seq__28823_28879__$1);
cljs.compiler.emitln.call(null,"case ",test_28885,":");

var G__28886 = cljs.core.next.call(null,seq__28823_28879__$1);
var G__28887 = null;
var G__28888 = (0);
var G__28889 = (0);
seq__28823_28869 = G__28886;
chunk__28824_28870 = G__28887;
count__28825_28871 = G__28888;
i__28826_28872 = G__28889;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_28868);
} else {
cljs.compiler.emitln.call(null,then_28868);
}

cljs.compiler.emitln.call(null,"break;");

var G__28890 = cljs.core.next.call(null,seq__28809_28860__$1);
var G__28891 = null;
var G__28892 = (0);
var G__28893 = (0);
seq__28809_28827 = G__28890;
chunk__28810_28828 = G__28891;
count__28811_28829 = G__28892;
i__28812_28830 = G__28893;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__28894){
var map__28895 = p__28894;
var map__28895__$1 = ((((!((map__28895 == null)))?((((map__28895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28895):map__28895);
var throw$ = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__28902 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__28902,(0),null);
var rstr = cljs.core.nth.call(null,vec__28902,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__28902,fstr,rstr,ret_t,axstr){
return (function (p1__28897_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__28897_SHARP_);
});})(idx,vec__28902,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__28905 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__28905),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__28905;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__28906_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__28906_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__28913 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__28914 = cljs.core.seq.call(null,vec__28913);
var first__28915 = cljs.core.first.call(null,seq__28914);
var seq__28914__$1 = cljs.core.next.call(null,seq__28914);
var p = first__28915;
var first__28915__$1 = cljs.core.first.call(null,seq__28914__$1);
var seq__28914__$2 = cljs.core.next.call(null,seq__28914__$1);
var ts = first__28915__$1;
var first__28915__$2 = cljs.core.first.call(null,seq__28914__$2);
var seq__28914__$3 = cljs.core.next.call(null,seq__28914__$2);
var n = first__28915__$2;
var xs = seq__28914__$3;
if(cljs.core.truth_((function (){var and__25113__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__25113__auto__){
var and__25113__auto____$1 = ts;
if(cljs.core.truth_(and__25113__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__25113__auto____$1;
}
} else {
return and__25113__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__28916 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__28917 = cljs.core.seq.call(null,vec__28916);
var first__28918 = cljs.core.first.call(null,seq__28917);
var seq__28917__$1 = cljs.core.next.call(null,seq__28917);
var p = first__28918;
var first__28918__$1 = cljs.core.first.call(null,seq__28917__$1);
var seq__28917__$2 = cljs.core.next.call(null,seq__28917__$1);
var ts = first__28918__$1;
var xs = seq__28917__$2;
if(cljs.core.truth_((function (){var and__25113__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__25113__auto__){
var and__25113__auto____$1 = ts;
if(cljs.core.truth_(and__25113__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__25113__auto____$1;
}
} else {
return and__25113__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args28920 = [];
var len__26200__auto___28956 = arguments.length;
var i__26201__auto___28957 = (0);
while(true){
if((i__26201__auto___28957 < len__26200__auto___28956)){
args28920.push((arguments[i__26201__auto___28957]));

var G__28958 = (i__26201__auto___28957 + (1));
i__26201__auto___28957 = G__28958;
continue;
} else {
}
break;
}

var G__28922 = args28920.length;
switch (G__28922) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28920.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__28944 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__28919_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__28919_SHARP_);
} else {
return p1__28919_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__28945 = cljs.core.seq.call(null,vec__28944);
var first__28946 = cljs.core.first.call(null,seq__28945);
var seq__28945__$1 = cljs.core.next.call(null,seq__28945);
var x = first__28946;
var ys = seq__28945__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__28947 = cljs.core.seq.call(null,ys);
var chunk__28948 = null;
var count__28949 = (0);
var i__28950 = (0);
while(true){
if((i__28950 < count__28949)){
var next_line = cljs.core._nth.call(null,chunk__28948,i__28950);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__28960 = seq__28947;
var G__28961 = chunk__28948;
var G__28962 = count__28949;
var G__28963 = (i__28950 + (1));
seq__28947 = G__28960;
chunk__28948 = G__28961;
count__28949 = G__28962;
i__28950 = G__28963;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28947);
if(temp__4657__auto__){
var seq__28947__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28947__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__28947__$1);
var G__28964 = cljs.core.chunk_rest.call(null,seq__28947__$1);
var G__28965 = c__25936__auto__;
var G__28966 = cljs.core.count.call(null,c__25936__auto__);
var G__28967 = (0);
seq__28947 = G__28964;
chunk__28948 = G__28965;
count__28949 = G__28966;
i__28950 = G__28967;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__28947__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__28968 = cljs.core.next.call(null,seq__28947__$1);
var G__28969 = null;
var G__28970 = (0);
var G__28971 = (0);
seq__28947 = G__28968;
chunk__28948 = G__28969;
count__28949 = G__28970;
i__28950 = G__28971;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__28951_28972 = cljs.core.seq.call(null,docs__$2);
var chunk__28952_28973 = null;
var count__28953_28974 = (0);
var i__28954_28975 = (0);
while(true){
if((i__28954_28975 < count__28953_28974)){
var e_28976 = cljs.core._nth.call(null,chunk__28952_28973,i__28954_28975);
if(cljs.core.truth_(e_28976)){
print_comment_lines.call(null,e_28976);
} else {
}

var G__28977 = seq__28951_28972;
var G__28978 = chunk__28952_28973;
var G__28979 = count__28953_28974;
var G__28980 = (i__28954_28975 + (1));
seq__28951_28972 = G__28977;
chunk__28952_28973 = G__28978;
count__28953_28974 = G__28979;
i__28954_28975 = G__28980;
continue;
} else {
var temp__4657__auto___28981 = cljs.core.seq.call(null,seq__28951_28972);
if(temp__4657__auto___28981){
var seq__28951_28982__$1 = temp__4657__auto___28981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28951_28982__$1)){
var c__25936__auto___28983 = cljs.core.chunk_first.call(null,seq__28951_28982__$1);
var G__28984 = cljs.core.chunk_rest.call(null,seq__28951_28982__$1);
var G__28985 = c__25936__auto___28983;
var G__28986 = cljs.core.count.call(null,c__25936__auto___28983);
var G__28987 = (0);
seq__28951_28972 = G__28984;
chunk__28952_28973 = G__28985;
count__28953_28974 = G__28986;
i__28954_28975 = G__28987;
continue;
} else {
var e_28988 = cljs.core.first.call(null,seq__28951_28982__$1);
if(cljs.core.truth_(e_28988)){
print_comment_lines.call(null,e_28988);
} else {
}

var G__28989 = cljs.core.next.call(null,seq__28951_28982__$1);
var G__28990 = null;
var G__28991 = (0);
var G__28992 = (0);
seq__28951_28972 = G__28989;
chunk__28952_28973 = G__28990;
count__28953_28974 = G__28991;
i__28954_28975 = G__28992;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__25113__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__28994_SHARP_){
return goog.string.startsWith(p1__28994_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__25113__auto__)){
var and__25113__auto____$1 = opts;
if(cljs.core.truth_(and__25113__auto____$1)){
var and__25113__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__25113__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__25113__auto____$2;
}
} else {
return and__25113__auto____$1;
}
} else {
return and__25113__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__28995){
var map__28996 = p__28995;
var map__28996__$1 = ((((!((map__28996 == null)))?((((map__28996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28996):map__28996);
var name = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__28996__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__25125__auto__ = init;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__25113__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__25113__auto__)){
return test;
} else {
return and__25113__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__28998){
var map__29019 = p__28998;
var map__29019__$1 = ((((!((map__29019 == null)))?((((map__29019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29019):map__29019);
var name = cljs.core.get.call(null,map__29019__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__29019__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__29019__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__29021_29039 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__29022_29040 = null;
var count__29023_29041 = (0);
var i__29024_29042 = (0);
while(true){
if((i__29024_29042 < count__29023_29041)){
var vec__29025_29043 = cljs.core._nth.call(null,chunk__29022_29040,i__29024_29042);
var i_29044 = cljs.core.nth.call(null,vec__29025_29043,(0),null);
var param_29045 = cljs.core.nth.call(null,vec__29025_29043,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_29045);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__29046 = seq__29021_29039;
var G__29047 = chunk__29022_29040;
var G__29048 = count__29023_29041;
var G__29049 = (i__29024_29042 + (1));
seq__29021_29039 = G__29046;
chunk__29022_29040 = G__29047;
count__29023_29041 = G__29048;
i__29024_29042 = G__29049;
continue;
} else {
var temp__4657__auto___29050 = cljs.core.seq.call(null,seq__29021_29039);
if(temp__4657__auto___29050){
var seq__29021_29051__$1 = temp__4657__auto___29050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29021_29051__$1)){
var c__25936__auto___29052 = cljs.core.chunk_first.call(null,seq__29021_29051__$1);
var G__29053 = cljs.core.chunk_rest.call(null,seq__29021_29051__$1);
var G__29054 = c__25936__auto___29052;
var G__29055 = cljs.core.count.call(null,c__25936__auto___29052);
var G__29056 = (0);
seq__29021_29039 = G__29053;
chunk__29022_29040 = G__29054;
count__29023_29041 = G__29055;
i__29024_29042 = G__29056;
continue;
} else {
var vec__29028_29057 = cljs.core.first.call(null,seq__29021_29051__$1);
var i_29058 = cljs.core.nth.call(null,vec__29028_29057,(0),null);
var param_29059 = cljs.core.nth.call(null,vec__29028_29057,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_29059);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__29060 = cljs.core.next.call(null,seq__29021_29051__$1);
var G__29061 = null;
var G__29062 = (0);
var G__29063 = (0);
seq__29021_29039 = G__29060;
chunk__29022_29040 = G__29061;
count__29023_29041 = G__29062;
i__29024_29042 = G__29063;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__29031_29064 = cljs.core.seq.call(null,params);
var chunk__29032_29065 = null;
var count__29033_29066 = (0);
var i__29034_29067 = (0);
while(true){
if((i__29034_29067 < count__29033_29066)){
var param_29068 = cljs.core._nth.call(null,chunk__29032_29065,i__29034_29067);
cljs.compiler.emit.call(null,param_29068);

if(cljs.core._EQ_.call(null,param_29068,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29069 = seq__29031_29064;
var G__29070 = chunk__29032_29065;
var G__29071 = count__29033_29066;
var G__29072 = (i__29034_29067 + (1));
seq__29031_29064 = G__29069;
chunk__29032_29065 = G__29070;
count__29033_29066 = G__29071;
i__29034_29067 = G__29072;
continue;
} else {
var temp__4657__auto___29073 = cljs.core.seq.call(null,seq__29031_29064);
if(temp__4657__auto___29073){
var seq__29031_29074__$1 = temp__4657__auto___29073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29031_29074__$1)){
var c__25936__auto___29075 = cljs.core.chunk_first.call(null,seq__29031_29074__$1);
var G__29076 = cljs.core.chunk_rest.call(null,seq__29031_29074__$1);
var G__29077 = c__25936__auto___29075;
var G__29078 = cljs.core.count.call(null,c__25936__auto___29075);
var G__29079 = (0);
seq__29031_29064 = G__29076;
chunk__29032_29065 = G__29077;
count__29033_29066 = G__29078;
i__29034_29067 = G__29079;
continue;
} else {
var param_29080 = cljs.core.first.call(null,seq__29031_29074__$1);
cljs.compiler.emit.call(null,param_29080);

if(cljs.core._EQ_.call(null,param_29080,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29081 = cljs.core.next.call(null,seq__29031_29074__$1);
var G__29082 = null;
var G__29083 = (0);
var G__29084 = (0);
seq__29031_29064 = G__29081;
chunk__29032_29065 = G__29082;
count__29033_29066 = G__29083;
i__29034_29067 = G__29084;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__29035_29085 = cljs.core.seq.call(null,params);
var chunk__29036_29086 = null;
var count__29037_29087 = (0);
var i__29038_29088 = (0);
while(true){
if((i__29038_29088 < count__29037_29087)){
var param_29089 = cljs.core._nth.call(null,chunk__29036_29086,i__29038_29088);
cljs.compiler.emit.call(null,param_29089);

if(cljs.core._EQ_.call(null,param_29089,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29090 = seq__29035_29085;
var G__29091 = chunk__29036_29086;
var G__29092 = count__29037_29087;
var G__29093 = (i__29038_29088 + (1));
seq__29035_29085 = G__29090;
chunk__29036_29086 = G__29091;
count__29037_29087 = G__29092;
i__29038_29088 = G__29093;
continue;
} else {
var temp__4657__auto___29094 = cljs.core.seq.call(null,seq__29035_29085);
if(temp__4657__auto___29094){
var seq__29035_29095__$1 = temp__4657__auto___29094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29035_29095__$1)){
var c__25936__auto___29096 = cljs.core.chunk_first.call(null,seq__29035_29095__$1);
var G__29097 = cljs.core.chunk_rest.call(null,seq__29035_29095__$1);
var G__29098 = c__25936__auto___29096;
var G__29099 = cljs.core.count.call(null,c__25936__auto___29096);
var G__29100 = (0);
seq__29035_29085 = G__29097;
chunk__29036_29086 = G__29098;
count__29037_29087 = G__29099;
i__29038_29088 = G__29100;
continue;
} else {
var param_29101 = cljs.core.first.call(null,seq__29035_29095__$1);
cljs.compiler.emit.call(null,param_29101);

if(cljs.core._EQ_.call(null,param_29101,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29102 = cljs.core.next.call(null,seq__29035_29095__$1);
var G__29103 = null;
var G__29104 = (0);
var G__29105 = (0);
seq__29035_29085 = G__29102;
chunk__29036_29086 = G__29103;
count__29037_29087 = G__29104;
i__29038_29088 = G__29105;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__29110 = cljs.core.seq.call(null,params);
var chunk__29111 = null;
var count__29112 = (0);
var i__29113 = (0);
while(true){
if((i__29113 < count__29112)){
var param = cljs.core._nth.call(null,chunk__29111,i__29113);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29114 = seq__29110;
var G__29115 = chunk__29111;
var G__29116 = count__29112;
var G__29117 = (i__29113 + (1));
seq__29110 = G__29114;
chunk__29111 = G__29115;
count__29112 = G__29116;
i__29113 = G__29117;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29110);
if(temp__4657__auto__){
var seq__29110__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29110__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__29110__$1);
var G__29118 = cljs.core.chunk_rest.call(null,seq__29110__$1);
var G__29119 = c__25936__auto__;
var G__29120 = cljs.core.count.call(null,c__25936__auto__);
var G__29121 = (0);
seq__29110 = G__29118;
chunk__29111 = G__29119;
count__29112 = G__29120;
i__29113 = G__29121;
continue;
} else {
var param = cljs.core.first.call(null,seq__29110__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29122 = cljs.core.next.call(null,seq__29110__$1);
var G__29123 = null;
var G__29124 = (0);
var G__29125 = (0);
seq__29110 = G__29122;
chunk__29111 = G__29123;
count__29112 = G__29124;
i__29113 = G__29125;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__29126){
var map__29129 = p__29126;
var map__29129__$1 = ((((!((map__29129 == null)))?((((map__29129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29129):map__29129);
var type = cljs.core.get.call(null,map__29129__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__29129__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__29129__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__29129__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__29129__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29129__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__29129__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__29129__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__28569__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__29131){
var map__29142 = p__29131;
var map__29142__$1 = ((((!((map__29142 == null)))?((((map__29142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29142):map__29142);
var f = map__29142__$1;
var type = cljs.core.get.call(null,map__29142__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__29142__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__29142__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__29142__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__29142__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29142__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__29142__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__29142__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__28569__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_29152__$1 = (function (){var or__25125__auto__ = name;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_29153 = cljs.compiler.munge.call(null,name_29152__$1);
var delegate_name_29154 = [cljs.core.str(mname_29153),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_29154," = function (");

var seq__29144_29155 = cljs.core.seq.call(null,params);
var chunk__29145_29156 = null;
var count__29146_29157 = (0);
var i__29147_29158 = (0);
while(true){
if((i__29147_29158 < count__29146_29157)){
var param_29159 = cljs.core._nth.call(null,chunk__29145_29156,i__29147_29158);
cljs.compiler.emit.call(null,param_29159);

if(cljs.core._EQ_.call(null,param_29159,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29160 = seq__29144_29155;
var G__29161 = chunk__29145_29156;
var G__29162 = count__29146_29157;
var G__29163 = (i__29147_29158 + (1));
seq__29144_29155 = G__29160;
chunk__29145_29156 = G__29161;
count__29146_29157 = G__29162;
i__29147_29158 = G__29163;
continue;
} else {
var temp__4657__auto___29164 = cljs.core.seq.call(null,seq__29144_29155);
if(temp__4657__auto___29164){
var seq__29144_29165__$1 = temp__4657__auto___29164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29144_29165__$1)){
var c__25936__auto___29166 = cljs.core.chunk_first.call(null,seq__29144_29165__$1);
var G__29167 = cljs.core.chunk_rest.call(null,seq__29144_29165__$1);
var G__29168 = c__25936__auto___29166;
var G__29169 = cljs.core.count.call(null,c__25936__auto___29166);
var G__29170 = (0);
seq__29144_29155 = G__29167;
chunk__29145_29156 = G__29168;
count__29146_29157 = G__29169;
i__29147_29158 = G__29170;
continue;
} else {
var param_29171 = cljs.core.first.call(null,seq__29144_29165__$1);
cljs.compiler.emit.call(null,param_29171);

if(cljs.core._EQ_.call(null,param_29171,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29172 = cljs.core.next.call(null,seq__29144_29165__$1);
var G__29173 = null;
var G__29174 = (0);
var G__29175 = (0);
seq__29144_29155 = G__29172;
chunk__29145_29156 = G__29173;
count__29146_29157 = G__29174;
i__29147_29158 = G__29175;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_29153," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_29176 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_29176,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_29154,".call(this,");

var seq__29148_29177 = cljs.core.seq.call(null,params);
var chunk__29149_29178 = null;
var count__29150_29179 = (0);
var i__29151_29180 = (0);
while(true){
if((i__29151_29180 < count__29150_29179)){
var param_29181 = cljs.core._nth.call(null,chunk__29149_29178,i__29151_29180);
cljs.compiler.emit.call(null,param_29181);

if(cljs.core._EQ_.call(null,param_29181,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29182 = seq__29148_29177;
var G__29183 = chunk__29149_29178;
var G__29184 = count__29150_29179;
var G__29185 = (i__29151_29180 + (1));
seq__29148_29177 = G__29182;
chunk__29149_29178 = G__29183;
count__29150_29179 = G__29184;
i__29151_29180 = G__29185;
continue;
} else {
var temp__4657__auto___29186 = cljs.core.seq.call(null,seq__29148_29177);
if(temp__4657__auto___29186){
var seq__29148_29187__$1 = temp__4657__auto___29186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29148_29187__$1)){
var c__25936__auto___29188 = cljs.core.chunk_first.call(null,seq__29148_29187__$1);
var G__29189 = cljs.core.chunk_rest.call(null,seq__29148_29187__$1);
var G__29190 = c__25936__auto___29188;
var G__29191 = cljs.core.count.call(null,c__25936__auto___29188);
var G__29192 = (0);
seq__29148_29177 = G__29189;
chunk__29149_29178 = G__29190;
count__29150_29179 = G__29191;
i__29151_29180 = G__29192;
continue;
} else {
var param_29193 = cljs.core.first.call(null,seq__29148_29187__$1);
cljs.compiler.emit.call(null,param_29193);

if(cljs.core._EQ_.call(null,param_29193,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29194 = cljs.core.next.call(null,seq__29148_29187__$1);
var G__29195 = null;
var G__29196 = (0);
var G__29197 = (0);
seq__29148_29177 = G__29194;
chunk__29149_29178 = G__29195;
count__29150_29179 = G__29196;
i__29151_29180 = G__29197;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_29153,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_29153,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_29152__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_29153,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_29154,";");

cljs.compiler.emitln.call(null,"return ",mname_29153,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__29201){
var map__29202 = p__29201;
var map__29202__$1 = ((((!((map__29202 == null)))?((((map__29202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29202):map__29202);
var name = cljs.core.get.call(null,map__29202__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__29202__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__29202__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__29202__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__29202__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__29202__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__29202__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__29202,map__29202__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__29198_SHARP_){
var and__25113__auto__ = p1__29198_SHARP_;
if(cljs.core.truth_(and__25113__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__29198_SHARP_));
} else {
return and__25113__auto__;
}
});})(map__29202,map__29202__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_29237__$1 = (function (){var or__25125__auto__ = name;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_29238 = cljs.compiler.munge.call(null,name_29237__$1);
var maxparams_29239 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_29240 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_29237__$1,mname_29238,maxparams_29239,loop_locals,map__29202,map__29202__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_29238),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_29237__$1,mname_29238,maxparams_29239,loop_locals,map__29202,map__29202__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_29241 = cljs.core.sort_by.call(null,((function (name_29237__$1,mname_29238,maxparams_29239,mmap_29240,loop_locals,map__29202,map__29202__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__29199_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__29199_SHARP_)));
});})(name_29237__$1,mname_29238,maxparams_29239,mmap_29240,loop_locals,map__29202,map__29202__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_29240));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_29238," = null;");

var seq__29204_29242 = cljs.core.seq.call(null,ms_29241);
var chunk__29205_29243 = null;
var count__29206_29244 = (0);
var i__29207_29245 = (0);
while(true){
if((i__29207_29245 < count__29206_29244)){
var vec__29208_29246 = cljs.core._nth.call(null,chunk__29205_29243,i__29207_29245);
var n_29247 = cljs.core.nth.call(null,vec__29208_29246,(0),null);
var meth_29248 = cljs.core.nth.call(null,vec__29208_29246,(1),null);
cljs.compiler.emits.call(null,"var ",n_29247," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29248))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_29248);
} else {
cljs.compiler.emit_fn_method.call(null,meth_29248);
}

cljs.compiler.emitln.call(null,";");

var G__29249 = seq__29204_29242;
var G__29250 = chunk__29205_29243;
var G__29251 = count__29206_29244;
var G__29252 = (i__29207_29245 + (1));
seq__29204_29242 = G__29249;
chunk__29205_29243 = G__29250;
count__29206_29244 = G__29251;
i__29207_29245 = G__29252;
continue;
} else {
var temp__4657__auto___29253 = cljs.core.seq.call(null,seq__29204_29242);
if(temp__4657__auto___29253){
var seq__29204_29254__$1 = temp__4657__auto___29253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29204_29254__$1)){
var c__25936__auto___29255 = cljs.core.chunk_first.call(null,seq__29204_29254__$1);
var G__29256 = cljs.core.chunk_rest.call(null,seq__29204_29254__$1);
var G__29257 = c__25936__auto___29255;
var G__29258 = cljs.core.count.call(null,c__25936__auto___29255);
var G__29259 = (0);
seq__29204_29242 = G__29256;
chunk__29205_29243 = G__29257;
count__29206_29244 = G__29258;
i__29207_29245 = G__29259;
continue;
} else {
var vec__29211_29260 = cljs.core.first.call(null,seq__29204_29254__$1);
var n_29261 = cljs.core.nth.call(null,vec__29211_29260,(0),null);
var meth_29262 = cljs.core.nth.call(null,vec__29211_29260,(1),null);
cljs.compiler.emits.call(null,"var ",n_29261," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29262))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_29262);
} else {
cljs.compiler.emit_fn_method.call(null,meth_29262);
}

cljs.compiler.emitln.call(null,";");

var G__29263 = cljs.core.next.call(null,seq__29204_29254__$1);
var G__29264 = null;
var G__29265 = (0);
var G__29266 = (0);
seq__29204_29242 = G__29263;
chunk__29205_29243 = G__29264;
count__29206_29244 = G__29265;
i__29207_29245 = G__29266;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_29238," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_29239),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_29239)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_29239));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__29214_29267 = cljs.core.seq.call(null,ms_29241);
var chunk__29215_29268 = null;
var count__29216_29269 = (0);
var i__29217_29270 = (0);
while(true){
if((i__29217_29270 < count__29216_29269)){
var vec__29218_29271 = cljs.core._nth.call(null,chunk__29215_29268,i__29217_29270);
var n_29272 = cljs.core.nth.call(null,vec__29218_29271,(0),null);
var meth_29273 = cljs.core.nth.call(null,vec__29218_29271,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29273))){
cljs.compiler.emitln.call(null,"default:");

var restarg_29274 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_29274," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_29275 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_29274," = new cljs.core.IndexedSeq(",a_29275,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_29272,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_29239)),(((cljs.core.count.call(null,maxparams_29239) > (1)))?", ":null),restarg_29274,");");
} else {
var pcnt_29276 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29273));
cljs.compiler.emitln.call(null,"case ",pcnt_29276,":");

cljs.compiler.emitln.call(null,"return ",n_29272,".call(this",(((pcnt_29276 === (0)))?null:cljs.core._conj.call(null,(function (){var x__25959__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_29276,maxparams_29239));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),",")),");");
}

var G__29277 = seq__29214_29267;
var G__29278 = chunk__29215_29268;
var G__29279 = count__29216_29269;
var G__29280 = (i__29217_29270 + (1));
seq__29214_29267 = G__29277;
chunk__29215_29268 = G__29278;
count__29216_29269 = G__29279;
i__29217_29270 = G__29280;
continue;
} else {
var temp__4657__auto___29281 = cljs.core.seq.call(null,seq__29214_29267);
if(temp__4657__auto___29281){
var seq__29214_29282__$1 = temp__4657__auto___29281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29214_29282__$1)){
var c__25936__auto___29283 = cljs.core.chunk_first.call(null,seq__29214_29282__$1);
var G__29284 = cljs.core.chunk_rest.call(null,seq__29214_29282__$1);
var G__29285 = c__25936__auto___29283;
var G__29286 = cljs.core.count.call(null,c__25936__auto___29283);
var G__29287 = (0);
seq__29214_29267 = G__29284;
chunk__29215_29268 = G__29285;
count__29216_29269 = G__29286;
i__29217_29270 = G__29287;
continue;
} else {
var vec__29221_29288 = cljs.core.first.call(null,seq__29214_29282__$1);
var n_29289 = cljs.core.nth.call(null,vec__29221_29288,(0),null);
var meth_29290 = cljs.core.nth.call(null,vec__29221_29288,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29290))){
cljs.compiler.emitln.call(null,"default:");

var restarg_29291 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_29291," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_29292 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_29291," = new cljs.core.IndexedSeq(",a_29292,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_29289,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_29239)),(((cljs.core.count.call(null,maxparams_29239) > (1)))?", ":null),restarg_29291,");");
} else {
var pcnt_29293 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29290));
cljs.compiler.emitln.call(null,"case ",pcnt_29293,":");

cljs.compiler.emitln.call(null,"return ",n_29289,".call(this",(((pcnt_29293 === (0)))?null:cljs.core._conj.call(null,(function (){var x__25959__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_29293,maxparams_29239));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25959__auto__);
})(),",")),");");
}

var G__29294 = cljs.core.next.call(null,seq__29214_29282__$1);
var G__29295 = null;
var G__29296 = (0);
var G__29297 = (0);
seq__29214_29267 = G__29294;
chunk__29215_29268 = G__29295;
count__29216_29269 = G__29296;
i__29217_29270 = G__29297;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_29238,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_29238,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_29237__$1,mname_29238,maxparams_29239,mmap_29240,ms_29241,loop_locals,map__29202,map__29202__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__29200_SHARP_){
var vec__29224 = p1__29200_SHARP_;
var n = cljs.core.nth.call(null,vec__29224,(0),null);
var m = cljs.core.nth.call(null,vec__29224,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_29237__$1,mname_29238,maxparams_29239,mmap_29240,ms_29241,loop_locals,map__29202,map__29202__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_29241),".cljs$lang$applyTo;");
} else {
}

var seq__29227_29298 = cljs.core.seq.call(null,ms_29241);
var chunk__29228_29299 = null;
var count__29229_29300 = (0);
var i__29230_29301 = (0);
while(true){
if((i__29230_29301 < count__29229_29300)){
var vec__29231_29302 = cljs.core._nth.call(null,chunk__29228_29299,i__29230_29301);
var n_29303 = cljs.core.nth.call(null,vec__29231_29302,(0),null);
var meth_29304 = cljs.core.nth.call(null,vec__29231_29302,(1),null);
var c_29305 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29304));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29304))){
cljs.compiler.emitln.call(null,mname_29238,".cljs$core$IFn$_invoke$arity$variadic = ",n_29303,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_29238,".cljs$core$IFn$_invoke$arity$",c_29305," = ",n_29303,";");
}

var G__29306 = seq__29227_29298;
var G__29307 = chunk__29228_29299;
var G__29308 = count__29229_29300;
var G__29309 = (i__29230_29301 + (1));
seq__29227_29298 = G__29306;
chunk__29228_29299 = G__29307;
count__29229_29300 = G__29308;
i__29230_29301 = G__29309;
continue;
} else {
var temp__4657__auto___29310 = cljs.core.seq.call(null,seq__29227_29298);
if(temp__4657__auto___29310){
var seq__29227_29311__$1 = temp__4657__auto___29310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29227_29311__$1)){
var c__25936__auto___29312 = cljs.core.chunk_first.call(null,seq__29227_29311__$1);
var G__29313 = cljs.core.chunk_rest.call(null,seq__29227_29311__$1);
var G__29314 = c__25936__auto___29312;
var G__29315 = cljs.core.count.call(null,c__25936__auto___29312);
var G__29316 = (0);
seq__29227_29298 = G__29313;
chunk__29228_29299 = G__29314;
count__29229_29300 = G__29315;
i__29230_29301 = G__29316;
continue;
} else {
var vec__29234_29317 = cljs.core.first.call(null,seq__29227_29311__$1);
var n_29318 = cljs.core.nth.call(null,vec__29234_29317,(0),null);
var meth_29319 = cljs.core.nth.call(null,vec__29234_29317,(1),null);
var c_29320 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29319));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29319))){
cljs.compiler.emitln.call(null,mname_29238,".cljs$core$IFn$_invoke$arity$variadic = ",n_29318,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_29238,".cljs$core$IFn$_invoke$arity$",c_29320," = ",n_29318,";");
}

var G__29321 = cljs.core.next.call(null,seq__29227_29311__$1);
var G__29322 = null;
var G__29323 = (0);
var G__29324 = (0);
seq__29227_29298 = G__29321;
chunk__29228_29299 = G__29322;
count__29229_29300 = G__29323;
i__29230_29301 = G__29324;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_29238,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__29325){
var map__29326 = p__29325;
var map__29326__$1 = ((((!((map__29326 == null)))?((((map__29326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29326):map__29326);
var statements = cljs.core.get.call(null,map__29326__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__29326__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__29326__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__25113__auto__ = statements;
if(cljs.core.truth_(and__25113__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__25113__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__29328_29332 = cljs.core.seq.call(null,statements);
var chunk__29329_29333 = null;
var count__29330_29334 = (0);
var i__29331_29335 = (0);
while(true){
if((i__29331_29335 < count__29330_29334)){
var s_29336 = cljs.core._nth.call(null,chunk__29329_29333,i__29331_29335);
cljs.compiler.emitln.call(null,s_29336);

var G__29337 = seq__29328_29332;
var G__29338 = chunk__29329_29333;
var G__29339 = count__29330_29334;
var G__29340 = (i__29331_29335 + (1));
seq__29328_29332 = G__29337;
chunk__29329_29333 = G__29338;
count__29330_29334 = G__29339;
i__29331_29335 = G__29340;
continue;
} else {
var temp__4657__auto___29341 = cljs.core.seq.call(null,seq__29328_29332);
if(temp__4657__auto___29341){
var seq__29328_29342__$1 = temp__4657__auto___29341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29328_29342__$1)){
var c__25936__auto___29343 = cljs.core.chunk_first.call(null,seq__29328_29342__$1);
var G__29344 = cljs.core.chunk_rest.call(null,seq__29328_29342__$1);
var G__29345 = c__25936__auto___29343;
var G__29346 = cljs.core.count.call(null,c__25936__auto___29343);
var G__29347 = (0);
seq__29328_29332 = G__29344;
chunk__29329_29333 = G__29345;
count__29330_29334 = G__29346;
i__29331_29335 = G__29347;
continue;
} else {
var s_29348 = cljs.core.first.call(null,seq__29328_29342__$1);
cljs.compiler.emitln.call(null,s_29348);

var G__29349 = cljs.core.next.call(null,seq__29328_29342__$1);
var G__29350 = null;
var G__29351 = (0);
var G__29352 = (0);
seq__29328_29332 = G__29349;
chunk__29329_29333 = G__29350;
count__29330_29334 = G__29351;
i__29331_29335 = G__29352;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__25113__auto__ = statements;
if(cljs.core.truth_(and__25113__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__25113__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__29353){
var map__29354 = p__29353;
var map__29354__$1 = ((((!((map__29354 == null)))?((((map__29354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29354):map__29354);
var env = cljs.core.get.call(null,map__29354__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__29354__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__29354__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__29354__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__29354__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__25125__auto__ = name;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__29356,is_loop){
var map__29368 = p__29356;
var map__29368__$1 = ((((!((map__29368 == null)))?((((map__29368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29368):map__29368);
var bindings = cljs.core.get.call(null,map__29368__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__29368__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29368__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_29370_29379 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_29370_29379,context,map__29368,map__29368__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_29370_29379,context,map__29368,map__29368__$1,bindings,expr,env))
,bindings):null));

try{var seq__29371_29380 = cljs.core.seq.call(null,bindings);
var chunk__29372_29381 = null;
var count__29373_29382 = (0);
var i__29374_29383 = (0);
while(true){
if((i__29374_29383 < count__29373_29382)){
var map__29375_29384 = cljs.core._nth.call(null,chunk__29372_29381,i__29374_29383);
var map__29375_29385__$1 = ((((!((map__29375_29384 == null)))?((((map__29375_29384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29375_29384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29375_29384):map__29375_29384);
var binding_29386 = map__29375_29385__$1;
var init_29387 = cljs.core.get.call(null,map__29375_29385__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_29386);

cljs.compiler.emitln.call(null," = ",init_29387,";");

var G__29388 = seq__29371_29380;
var G__29389 = chunk__29372_29381;
var G__29390 = count__29373_29382;
var G__29391 = (i__29374_29383 + (1));
seq__29371_29380 = G__29388;
chunk__29372_29381 = G__29389;
count__29373_29382 = G__29390;
i__29374_29383 = G__29391;
continue;
} else {
var temp__4657__auto___29392 = cljs.core.seq.call(null,seq__29371_29380);
if(temp__4657__auto___29392){
var seq__29371_29393__$1 = temp__4657__auto___29392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29371_29393__$1)){
var c__25936__auto___29394 = cljs.core.chunk_first.call(null,seq__29371_29393__$1);
var G__29395 = cljs.core.chunk_rest.call(null,seq__29371_29393__$1);
var G__29396 = c__25936__auto___29394;
var G__29397 = cljs.core.count.call(null,c__25936__auto___29394);
var G__29398 = (0);
seq__29371_29380 = G__29395;
chunk__29372_29381 = G__29396;
count__29373_29382 = G__29397;
i__29374_29383 = G__29398;
continue;
} else {
var map__29377_29399 = cljs.core.first.call(null,seq__29371_29393__$1);
var map__29377_29400__$1 = ((((!((map__29377_29399 == null)))?((((map__29377_29399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29377_29399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29377_29399):map__29377_29399);
var binding_29401 = map__29377_29400__$1;
var init_29402 = cljs.core.get.call(null,map__29377_29400__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_29401);

cljs.compiler.emitln.call(null," = ",init_29402,";");

var G__29403 = cljs.core.next.call(null,seq__29371_29393__$1);
var G__29404 = null;
var G__29405 = (0);
var G__29406 = (0);
seq__29371_29380 = G__29403;
chunk__29372_29381 = G__29404;
count__29373_29382 = G__29405;
i__29374_29383 = G__29406;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_29370_29379;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__29407){
var map__29408 = p__29407;
var map__29408__$1 = ((((!((map__29408 == null)))?((((map__29408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29408):map__29408);
var frame = cljs.core.get.call(null,map__29408__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__29408__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__29408__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__26040__auto___29410 = cljs.core.count.call(null,exprs);
var i_29411 = (0);
while(true){
if((i_29411 < n__26040__auto___29410)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_29411)," = ",exprs.call(null,i_29411),";");

var G__29412 = (i_29411 + (1));
i_29411 = G__29412;
continue;
} else {
}
break;
}

var n__26040__auto___29413 = cljs.core.count.call(null,exprs);
var i_29414 = (0);
while(true){
if((i_29414 < n__26040__auto___29413)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_29414))," = ",temps.call(null,i_29414),";");

var G__29415 = (i_29414 + (1));
i_29414 = G__29415;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__29416){
var map__29417 = p__29416;
var map__29417__$1 = ((((!((map__29417 == null)))?((((map__29417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29417):map__29417);
var bindings = cljs.core.get.call(null,map__29417__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__29417__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29417__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__29419_29427 = cljs.core.seq.call(null,bindings);
var chunk__29420_29428 = null;
var count__29421_29429 = (0);
var i__29422_29430 = (0);
while(true){
if((i__29422_29430 < count__29421_29429)){
var map__29423_29431 = cljs.core._nth.call(null,chunk__29420_29428,i__29422_29430);
var map__29423_29432__$1 = ((((!((map__29423_29431 == null)))?((((map__29423_29431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29423_29431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29423_29431):map__29423_29431);
var binding_29433 = map__29423_29432__$1;
var init_29434 = cljs.core.get.call(null,map__29423_29432__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_29433)," = ",init_29434,";");

var G__29435 = seq__29419_29427;
var G__29436 = chunk__29420_29428;
var G__29437 = count__29421_29429;
var G__29438 = (i__29422_29430 + (1));
seq__29419_29427 = G__29435;
chunk__29420_29428 = G__29436;
count__29421_29429 = G__29437;
i__29422_29430 = G__29438;
continue;
} else {
var temp__4657__auto___29439 = cljs.core.seq.call(null,seq__29419_29427);
if(temp__4657__auto___29439){
var seq__29419_29440__$1 = temp__4657__auto___29439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29419_29440__$1)){
var c__25936__auto___29441 = cljs.core.chunk_first.call(null,seq__29419_29440__$1);
var G__29442 = cljs.core.chunk_rest.call(null,seq__29419_29440__$1);
var G__29443 = c__25936__auto___29441;
var G__29444 = cljs.core.count.call(null,c__25936__auto___29441);
var G__29445 = (0);
seq__29419_29427 = G__29442;
chunk__29420_29428 = G__29443;
count__29421_29429 = G__29444;
i__29422_29430 = G__29445;
continue;
} else {
var map__29425_29446 = cljs.core.first.call(null,seq__29419_29440__$1);
var map__29425_29447__$1 = ((((!((map__29425_29446 == null)))?((((map__29425_29446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29425_29446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29425_29446):map__29425_29446);
var binding_29448 = map__29425_29447__$1;
var init_29449 = cljs.core.get.call(null,map__29425_29447__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_29448)," = ",init_29449,";");

var G__29450 = cljs.core.next.call(null,seq__29419_29440__$1);
var G__29451 = null;
var G__29452 = (0);
var G__29453 = (0);
seq__29419_29427 = G__29450;
chunk__29420_29428 = G__29451;
count__29421_29429 = G__29452;
i__29422_29430 = G__29453;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__29456){
var map__29457 = p__29456;
var map__29457__$1 = ((((!((map__29457 == null)))?((((map__29457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29457):map__29457);
var expr = map__29457__$1;
var f = cljs.core.get.call(null,map__29457__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__29457__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__29457__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__25113__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__25113__auto__)){
var and__25113__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__25113__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__25113__auto____$1;
}
} else {
return and__25113__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__25113__auto__ = protocol;
if(cljs.core.truth_(and__25113__auto__)){
var and__25113__auto____$1 = tag;
if(cljs.core.truth_(and__25113__auto____$1)){
var or__25125__auto__ = (function (){var and__25113__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__25113__auto____$2)){
var and__25113__auto____$3 = protocol;
if(cljs.core.truth_(and__25113__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__25113__auto____$3;
}
} else {
return and__25113__auto____$2;
}
})();
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
var and__25113__auto____$2 = (function (){var or__25125__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__25125__auto____$1)){
return or__25125__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__25113__auto____$2)){
var or__25125__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__25125__auto____$1){
return or__25125__auto____$1;
} else {
var and__25113__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__25113__auto____$3){
var and__25113__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__25113__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__25113__auto____$4;
}
} else {
return and__25113__auto____$3;
}
}
} else {
return and__25113__auto____$2;
}
}
} else {
return and__25113__auto____$1;
}
} else {
return and__25113__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__25125__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__25125__auto__){
return or__25125__auto__;
} else {
var temp__4657__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__29459 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__25113__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__25113__auto__)){
return (arity > mfa);
} else {
return and__25113__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29457,map__29457__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29457,map__29457__$1,expr,f,args,env){
return (function (p1__29454_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__29454_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29457,map__29457__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29457,map__29457__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29457,map__29457__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29457,map__29457__$1,expr,f,args,env){
return (function (p1__29455_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__29455_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29457,map__29457__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29457,map__29457__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__29459,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__29459,(1),null);
var env__28569__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_29462 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_29462,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_29463 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_29463,args)),(((mfa_29463 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_29463,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__25125__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
var or__25125__auto____$1 = js_QMARK_;
if(or__25125__auto____$1){
return or__25125__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__25113__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__25113__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__25113__auto__;
}
})())){
var fprop_29464 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_29464," ? ",f__$1,fprop_29464,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__29465){
var map__29466 = p__29465;
var map__29466__$1 = ((((!((map__29466 == null)))?((((map__29466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29466):map__29466);
var ctor = cljs.core.get.call(null,map__29466__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__29466__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__29466__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28569__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__29468){
var map__29469 = p__29468;
var map__29469__$1 = ((((!((map__29469 == null)))?((((map__29469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29469):map__29469);
var target = cljs.core.get.call(null,map__29469__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__29469__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__29469__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28569__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__29475_29479 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__29476_29480 = null;
var count__29477_29481 = (0);
var i__29478_29482 = (0);
while(true){
if((i__29478_29482 < count__29477_29481)){
var lib_29483 = cljs.core._nth.call(null,chunk__29476_29480,i__29478_29482);
if(cljs.core.truth_((function (){var or__25125__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29483),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29483),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__25125__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29483),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29483),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29483),"');");

}
}

var G__29484 = seq__29475_29479;
var G__29485 = chunk__29476_29480;
var G__29486 = count__29477_29481;
var G__29487 = (i__29478_29482 + (1));
seq__29475_29479 = G__29484;
chunk__29476_29480 = G__29485;
count__29477_29481 = G__29486;
i__29478_29482 = G__29487;
continue;
} else {
var temp__4657__auto___29488 = cljs.core.seq.call(null,seq__29475_29479);
if(temp__4657__auto___29488){
var seq__29475_29489__$1 = temp__4657__auto___29488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29475_29489__$1)){
var c__25936__auto___29490 = cljs.core.chunk_first.call(null,seq__29475_29489__$1);
var G__29491 = cljs.core.chunk_rest.call(null,seq__29475_29489__$1);
var G__29492 = c__25936__auto___29490;
var G__29493 = cljs.core.count.call(null,c__25936__auto___29490);
var G__29494 = (0);
seq__29475_29479 = G__29491;
chunk__29476_29480 = G__29492;
count__29477_29481 = G__29493;
i__29478_29482 = G__29494;
continue;
} else {
var lib_29495 = cljs.core.first.call(null,seq__29475_29489__$1);
if(cljs.core.truth_((function (){var or__25125__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29495),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29495),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__25125__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29495),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29495),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29495),"');");

}
}

var G__29496 = cljs.core.next.call(null,seq__29475_29489__$1);
var G__29497 = null;
var G__29498 = (0);
var G__29499 = (0);
seq__29475_29479 = G__29496;
chunk__29476_29480 = G__29497;
count__29477_29481 = G__29498;
i__29478_29482 = G__29499;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__29500){
var map__29501 = p__29500;
var map__29501__$1 = ((((!((map__29501 == null)))?((((map__29501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29501):map__29501);
var name = cljs.core.get.call(null,map__29501__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__29501__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__29501__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__29501__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__29501__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__29501__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__29503){
var map__29504 = p__29503;
var map__29504__$1 = ((((!((map__29504 == null)))?((((map__29504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29504):map__29504);
var t = cljs.core.get.call(null,map__29504__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__29504__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__29504__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__29504__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__29504__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__29506_29524 = cljs.core.seq.call(null,protocols);
var chunk__29507_29525 = null;
var count__29508_29526 = (0);
var i__29509_29527 = (0);
while(true){
if((i__29509_29527 < count__29508_29526)){
var protocol_29528 = cljs.core._nth.call(null,chunk__29507_29525,i__29509_29527);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_29528)].join('')),"}");

var G__29529 = seq__29506_29524;
var G__29530 = chunk__29507_29525;
var G__29531 = count__29508_29526;
var G__29532 = (i__29509_29527 + (1));
seq__29506_29524 = G__29529;
chunk__29507_29525 = G__29530;
count__29508_29526 = G__29531;
i__29509_29527 = G__29532;
continue;
} else {
var temp__4657__auto___29533 = cljs.core.seq.call(null,seq__29506_29524);
if(temp__4657__auto___29533){
var seq__29506_29534__$1 = temp__4657__auto___29533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29506_29534__$1)){
var c__25936__auto___29535 = cljs.core.chunk_first.call(null,seq__29506_29534__$1);
var G__29536 = cljs.core.chunk_rest.call(null,seq__29506_29534__$1);
var G__29537 = c__25936__auto___29535;
var G__29538 = cljs.core.count.call(null,c__25936__auto___29535);
var G__29539 = (0);
seq__29506_29524 = G__29536;
chunk__29507_29525 = G__29537;
count__29508_29526 = G__29538;
i__29509_29527 = G__29539;
continue;
} else {
var protocol_29540 = cljs.core.first.call(null,seq__29506_29534__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_29540)].join('')),"}");

var G__29541 = cljs.core.next.call(null,seq__29506_29534__$1);
var G__29542 = null;
var G__29543 = (0);
var G__29544 = (0);
seq__29506_29524 = G__29541;
chunk__29507_29525 = G__29542;
count__29508_29526 = G__29543;
i__29509_29527 = G__29544;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__29510_29545 = cljs.core.seq.call(null,fields__$1);
var chunk__29511_29546 = null;
var count__29512_29547 = (0);
var i__29513_29548 = (0);
while(true){
if((i__29513_29548 < count__29512_29547)){
var fld_29549 = cljs.core._nth.call(null,chunk__29511_29546,i__29513_29548);
cljs.compiler.emitln.call(null,"this.",fld_29549," = ",fld_29549,";");

var G__29550 = seq__29510_29545;
var G__29551 = chunk__29511_29546;
var G__29552 = count__29512_29547;
var G__29553 = (i__29513_29548 + (1));
seq__29510_29545 = G__29550;
chunk__29511_29546 = G__29551;
count__29512_29547 = G__29552;
i__29513_29548 = G__29553;
continue;
} else {
var temp__4657__auto___29554 = cljs.core.seq.call(null,seq__29510_29545);
if(temp__4657__auto___29554){
var seq__29510_29555__$1 = temp__4657__auto___29554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29510_29555__$1)){
var c__25936__auto___29556 = cljs.core.chunk_first.call(null,seq__29510_29555__$1);
var G__29557 = cljs.core.chunk_rest.call(null,seq__29510_29555__$1);
var G__29558 = c__25936__auto___29556;
var G__29559 = cljs.core.count.call(null,c__25936__auto___29556);
var G__29560 = (0);
seq__29510_29545 = G__29557;
chunk__29511_29546 = G__29558;
count__29512_29547 = G__29559;
i__29513_29548 = G__29560;
continue;
} else {
var fld_29561 = cljs.core.first.call(null,seq__29510_29555__$1);
cljs.compiler.emitln.call(null,"this.",fld_29561," = ",fld_29561,";");

var G__29562 = cljs.core.next.call(null,seq__29510_29555__$1);
var G__29563 = null;
var G__29564 = (0);
var G__29565 = (0);
seq__29510_29545 = G__29562;
chunk__29511_29546 = G__29563;
count__29512_29547 = G__29564;
i__29513_29548 = G__29565;
continue;
}
} else {
}
}
break;
}

var seq__29514_29566 = cljs.core.seq.call(null,pmasks);
var chunk__29515_29567 = null;
var count__29516_29568 = (0);
var i__29517_29569 = (0);
while(true){
if((i__29517_29569 < count__29516_29568)){
var vec__29518_29570 = cljs.core._nth.call(null,chunk__29515_29567,i__29517_29569);
var pno_29571 = cljs.core.nth.call(null,vec__29518_29570,(0),null);
var pmask_29572 = cljs.core.nth.call(null,vec__29518_29570,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29571,"$ = ",pmask_29572,";");

var G__29573 = seq__29514_29566;
var G__29574 = chunk__29515_29567;
var G__29575 = count__29516_29568;
var G__29576 = (i__29517_29569 + (1));
seq__29514_29566 = G__29573;
chunk__29515_29567 = G__29574;
count__29516_29568 = G__29575;
i__29517_29569 = G__29576;
continue;
} else {
var temp__4657__auto___29577 = cljs.core.seq.call(null,seq__29514_29566);
if(temp__4657__auto___29577){
var seq__29514_29578__$1 = temp__4657__auto___29577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29514_29578__$1)){
var c__25936__auto___29579 = cljs.core.chunk_first.call(null,seq__29514_29578__$1);
var G__29580 = cljs.core.chunk_rest.call(null,seq__29514_29578__$1);
var G__29581 = c__25936__auto___29579;
var G__29582 = cljs.core.count.call(null,c__25936__auto___29579);
var G__29583 = (0);
seq__29514_29566 = G__29580;
chunk__29515_29567 = G__29581;
count__29516_29568 = G__29582;
i__29517_29569 = G__29583;
continue;
} else {
var vec__29521_29584 = cljs.core.first.call(null,seq__29514_29578__$1);
var pno_29585 = cljs.core.nth.call(null,vec__29521_29584,(0),null);
var pmask_29586 = cljs.core.nth.call(null,vec__29521_29584,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29585,"$ = ",pmask_29586,";");

var G__29587 = cljs.core.next.call(null,seq__29514_29578__$1);
var G__29588 = null;
var G__29589 = (0);
var G__29590 = (0);
seq__29514_29566 = G__29587;
chunk__29515_29567 = G__29588;
count__29516_29568 = G__29589;
i__29517_29569 = G__29590;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__29591){
var map__29592 = p__29591;
var map__29592__$1 = ((((!((map__29592 == null)))?((((map__29592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29592):map__29592);
var t = cljs.core.get.call(null,map__29592__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__29592__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__29592__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__29592__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__29592__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__29594_29612 = cljs.core.seq.call(null,protocols);
var chunk__29595_29613 = null;
var count__29596_29614 = (0);
var i__29597_29615 = (0);
while(true){
if((i__29597_29615 < count__29596_29614)){
var protocol_29616 = cljs.core._nth.call(null,chunk__29595_29613,i__29597_29615);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_29616)].join('')),"}");

var G__29617 = seq__29594_29612;
var G__29618 = chunk__29595_29613;
var G__29619 = count__29596_29614;
var G__29620 = (i__29597_29615 + (1));
seq__29594_29612 = G__29617;
chunk__29595_29613 = G__29618;
count__29596_29614 = G__29619;
i__29597_29615 = G__29620;
continue;
} else {
var temp__4657__auto___29621 = cljs.core.seq.call(null,seq__29594_29612);
if(temp__4657__auto___29621){
var seq__29594_29622__$1 = temp__4657__auto___29621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29594_29622__$1)){
var c__25936__auto___29623 = cljs.core.chunk_first.call(null,seq__29594_29622__$1);
var G__29624 = cljs.core.chunk_rest.call(null,seq__29594_29622__$1);
var G__29625 = c__25936__auto___29623;
var G__29626 = cljs.core.count.call(null,c__25936__auto___29623);
var G__29627 = (0);
seq__29594_29612 = G__29624;
chunk__29595_29613 = G__29625;
count__29596_29614 = G__29626;
i__29597_29615 = G__29627;
continue;
} else {
var protocol_29628 = cljs.core.first.call(null,seq__29594_29622__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_29628)].join('')),"}");

var G__29629 = cljs.core.next.call(null,seq__29594_29622__$1);
var G__29630 = null;
var G__29631 = (0);
var G__29632 = (0);
seq__29594_29612 = G__29629;
chunk__29595_29613 = G__29630;
count__29596_29614 = G__29631;
i__29597_29615 = G__29632;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__29598_29633 = cljs.core.seq.call(null,fields__$1);
var chunk__29599_29634 = null;
var count__29600_29635 = (0);
var i__29601_29636 = (0);
while(true){
if((i__29601_29636 < count__29600_29635)){
var fld_29637 = cljs.core._nth.call(null,chunk__29599_29634,i__29601_29636);
cljs.compiler.emitln.call(null,"this.",fld_29637," = ",fld_29637,";");

var G__29638 = seq__29598_29633;
var G__29639 = chunk__29599_29634;
var G__29640 = count__29600_29635;
var G__29641 = (i__29601_29636 + (1));
seq__29598_29633 = G__29638;
chunk__29599_29634 = G__29639;
count__29600_29635 = G__29640;
i__29601_29636 = G__29641;
continue;
} else {
var temp__4657__auto___29642 = cljs.core.seq.call(null,seq__29598_29633);
if(temp__4657__auto___29642){
var seq__29598_29643__$1 = temp__4657__auto___29642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29598_29643__$1)){
var c__25936__auto___29644 = cljs.core.chunk_first.call(null,seq__29598_29643__$1);
var G__29645 = cljs.core.chunk_rest.call(null,seq__29598_29643__$1);
var G__29646 = c__25936__auto___29644;
var G__29647 = cljs.core.count.call(null,c__25936__auto___29644);
var G__29648 = (0);
seq__29598_29633 = G__29645;
chunk__29599_29634 = G__29646;
count__29600_29635 = G__29647;
i__29601_29636 = G__29648;
continue;
} else {
var fld_29649 = cljs.core.first.call(null,seq__29598_29643__$1);
cljs.compiler.emitln.call(null,"this.",fld_29649," = ",fld_29649,";");

var G__29650 = cljs.core.next.call(null,seq__29598_29643__$1);
var G__29651 = null;
var G__29652 = (0);
var G__29653 = (0);
seq__29598_29633 = G__29650;
chunk__29599_29634 = G__29651;
count__29600_29635 = G__29652;
i__29601_29636 = G__29653;
continue;
}
} else {
}
}
break;
}

var seq__29602_29654 = cljs.core.seq.call(null,pmasks);
var chunk__29603_29655 = null;
var count__29604_29656 = (0);
var i__29605_29657 = (0);
while(true){
if((i__29605_29657 < count__29604_29656)){
var vec__29606_29658 = cljs.core._nth.call(null,chunk__29603_29655,i__29605_29657);
var pno_29659 = cljs.core.nth.call(null,vec__29606_29658,(0),null);
var pmask_29660 = cljs.core.nth.call(null,vec__29606_29658,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29659,"$ = ",pmask_29660,";");

var G__29661 = seq__29602_29654;
var G__29662 = chunk__29603_29655;
var G__29663 = count__29604_29656;
var G__29664 = (i__29605_29657 + (1));
seq__29602_29654 = G__29661;
chunk__29603_29655 = G__29662;
count__29604_29656 = G__29663;
i__29605_29657 = G__29664;
continue;
} else {
var temp__4657__auto___29665 = cljs.core.seq.call(null,seq__29602_29654);
if(temp__4657__auto___29665){
var seq__29602_29666__$1 = temp__4657__auto___29665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29602_29666__$1)){
var c__25936__auto___29667 = cljs.core.chunk_first.call(null,seq__29602_29666__$1);
var G__29668 = cljs.core.chunk_rest.call(null,seq__29602_29666__$1);
var G__29669 = c__25936__auto___29667;
var G__29670 = cljs.core.count.call(null,c__25936__auto___29667);
var G__29671 = (0);
seq__29602_29654 = G__29668;
chunk__29603_29655 = G__29669;
count__29604_29656 = G__29670;
i__29605_29657 = G__29671;
continue;
} else {
var vec__29609_29672 = cljs.core.first.call(null,seq__29602_29666__$1);
var pno_29673 = cljs.core.nth.call(null,vec__29609_29672,(0),null);
var pmask_29674 = cljs.core.nth.call(null,vec__29609_29672,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29673,"$ = ",pmask_29674,";");

var G__29675 = cljs.core.next.call(null,seq__29602_29666__$1);
var G__29676 = null;
var G__29677 = (0);
var G__29678 = (0);
seq__29602_29654 = G__29675;
chunk__29603_29655 = G__29676;
count__29604_29656 = G__29677;
i__29605_29657 = G__29678;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__29679){
var map__29680 = p__29679;
var map__29680__$1 = ((((!((map__29680 == null)))?((((map__29680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29680):map__29680);
var target = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28569__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__29682){
var map__29683 = p__29682;
var map__29683__$1 = ((((!((map__29683 == null)))?((((map__29683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29683):map__29683);
var op = cljs.core.get.call(null,map__29683__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__29683__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__29683__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__29683__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__29683__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__25113__auto__ = code;
if(cljs.core.truth_(and__25113__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__25113__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__28569__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28569__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__29697 = cljs.core.seq.call(null,table);
var chunk__29698 = null;
var count__29699 = (0);
var i__29700 = (0);
while(true){
if((i__29700 < count__29699)){
var vec__29701 = cljs.core._nth.call(null,chunk__29698,i__29700);
var sym = cljs.core.nth.call(null,vec__29701,(0),null);
var value = cljs.core.nth.call(null,vec__29701,(1),null);
var ns_29707 = cljs.core.namespace.call(null,sym);
var name_29708 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__29709 = seq__29697;
var G__29710 = chunk__29698;
var G__29711 = count__29699;
var G__29712 = (i__29700 + (1));
seq__29697 = G__29709;
chunk__29698 = G__29710;
count__29699 = G__29711;
i__29700 = G__29712;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29697);
if(temp__4657__auto__){
var seq__29697__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29697__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__29697__$1);
var G__29713 = cljs.core.chunk_rest.call(null,seq__29697__$1);
var G__29714 = c__25936__auto__;
var G__29715 = cljs.core.count.call(null,c__25936__auto__);
var G__29716 = (0);
seq__29697 = G__29713;
chunk__29698 = G__29714;
count__29699 = G__29715;
i__29700 = G__29716;
continue;
} else {
var vec__29704 = cljs.core.first.call(null,seq__29697__$1);
var sym = cljs.core.nth.call(null,vec__29704,(0),null);
var value = cljs.core.nth.call(null,vec__29704,(1),null);
var ns_29717 = cljs.core.namespace.call(null,sym);
var name_29718 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__29719 = cljs.core.next.call(null,seq__29697__$1);
var G__29720 = null;
var G__29721 = (0);
var G__29722 = (0);
seq__29697 = G__29719;
chunk__29698 = G__29720;
count__29699 = G__29721;
i__29700 = G__29722;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map?rel=1490344425529