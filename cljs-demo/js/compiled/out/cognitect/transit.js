// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__29878_29882 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__29879_29883 = null;
var count__29880_29884 = (0);
var i__29881_29885 = (0);
while(true){
if((i__29881_29885 < count__29880_29884)){
var k_29886 = cljs.core._nth.call(null,chunk__29879_29883,i__29881_29885);
var v_29887 = (b[k_29886]);
(a[k_29886] = v_29887);

var G__29888 = seq__29878_29882;
var G__29889 = chunk__29879_29883;
var G__29890 = count__29880_29884;
var G__29891 = (i__29881_29885 + (1));
seq__29878_29882 = G__29888;
chunk__29879_29883 = G__29889;
count__29880_29884 = G__29890;
i__29881_29885 = G__29891;
continue;
} else {
var temp__4657__auto___29892 = cljs.core.seq.call(null,seq__29878_29882);
if(temp__4657__auto___29892){
var seq__29878_29893__$1 = temp__4657__auto___29892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29878_29893__$1)){
var c__25936__auto___29894 = cljs.core.chunk_first.call(null,seq__29878_29893__$1);
var G__29895 = cljs.core.chunk_rest.call(null,seq__29878_29893__$1);
var G__29896 = c__25936__auto___29894;
var G__29897 = cljs.core.count.call(null,c__25936__auto___29894);
var G__29898 = (0);
seq__29878_29882 = G__29895;
chunk__29879_29883 = G__29896;
count__29880_29884 = G__29897;
i__29881_29885 = G__29898;
continue;
} else {
var k_29899 = cljs.core.first.call(null,seq__29878_29893__$1);
var v_29900 = (b[k_29899]);
(a[k_29899] = v_29900);

var G__29901 = cljs.core.next.call(null,seq__29878_29893__$1);
var G__29902 = null;
var G__29903 = (0);
var G__29904 = (0);
seq__29878_29882 = G__29901;
chunk__29879_29883 = G__29902;
count__29880_29884 = G__29903;
i__29881_29885 = G__29904;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args29905 = [];
var len__26200__auto___29908 = arguments.length;
var i__26201__auto___29909 = (0);
while(true){
if((i__26201__auto___29909 < len__26200__auto___29908)){
args29905.push((arguments[i__26201__auto___29909]));

var G__29910 = (i__26201__auto___29909 + (1));
i__26201__auto___29909 = G__29910;
continue;
} else {
}
break;
}

var G__29907 = args29905.length;
switch (G__29907) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29905.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__29912 = (i + (2));
var G__29913 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__29912;
ret = G__29913;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__29914_29918 = cljs.core.seq.call(null,v);
var chunk__29915_29919 = null;
var count__29916_29920 = (0);
var i__29917_29921 = (0);
while(true){
if((i__29917_29921 < count__29916_29920)){
var x_29922 = cljs.core._nth.call(null,chunk__29915_29919,i__29917_29921);
ret.push(x_29922);

var G__29923 = seq__29914_29918;
var G__29924 = chunk__29915_29919;
var G__29925 = count__29916_29920;
var G__29926 = (i__29917_29921 + (1));
seq__29914_29918 = G__29923;
chunk__29915_29919 = G__29924;
count__29916_29920 = G__29925;
i__29917_29921 = G__29926;
continue;
} else {
var temp__4657__auto___29927 = cljs.core.seq.call(null,seq__29914_29918);
if(temp__4657__auto___29927){
var seq__29914_29928__$1 = temp__4657__auto___29927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29914_29928__$1)){
var c__25936__auto___29929 = cljs.core.chunk_first.call(null,seq__29914_29928__$1);
var G__29930 = cljs.core.chunk_rest.call(null,seq__29914_29928__$1);
var G__29931 = c__25936__auto___29929;
var G__29932 = cljs.core.count.call(null,c__25936__auto___29929);
var G__29933 = (0);
seq__29914_29918 = G__29930;
chunk__29915_29919 = G__29931;
count__29916_29920 = G__29932;
i__29917_29921 = G__29933;
continue;
} else {
var x_29934 = cljs.core.first.call(null,seq__29914_29928__$1);
ret.push(x_29934);

var G__29935 = cljs.core.next.call(null,seq__29914_29928__$1);
var G__29936 = null;
var G__29937 = (0);
var G__29938 = (0);
seq__29914_29918 = G__29935;
chunk__29915_29919 = G__29936;
count__29916_29920 = G__29937;
i__29917_29921 = G__29938;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__29939_29943 = cljs.core.seq.call(null,v);
var chunk__29940_29944 = null;
var count__29941_29945 = (0);
var i__29942_29946 = (0);
while(true){
if((i__29942_29946 < count__29941_29945)){
var x_29947 = cljs.core._nth.call(null,chunk__29940_29944,i__29942_29946);
ret.push(x_29947);

var G__29948 = seq__29939_29943;
var G__29949 = chunk__29940_29944;
var G__29950 = count__29941_29945;
var G__29951 = (i__29942_29946 + (1));
seq__29939_29943 = G__29948;
chunk__29940_29944 = G__29949;
count__29941_29945 = G__29950;
i__29942_29946 = G__29951;
continue;
} else {
var temp__4657__auto___29952 = cljs.core.seq.call(null,seq__29939_29943);
if(temp__4657__auto___29952){
var seq__29939_29953__$1 = temp__4657__auto___29952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29939_29953__$1)){
var c__25936__auto___29954 = cljs.core.chunk_first.call(null,seq__29939_29953__$1);
var G__29955 = cljs.core.chunk_rest.call(null,seq__29939_29953__$1);
var G__29956 = c__25936__auto___29954;
var G__29957 = cljs.core.count.call(null,c__25936__auto___29954);
var G__29958 = (0);
seq__29939_29943 = G__29955;
chunk__29940_29944 = G__29956;
count__29941_29945 = G__29957;
i__29942_29946 = G__29958;
continue;
} else {
var x_29959 = cljs.core.first.call(null,seq__29939_29953__$1);
ret.push(x_29959);

var G__29960 = cljs.core.next.call(null,seq__29939_29953__$1);
var G__29961 = null;
var G__29962 = (0);
var G__29963 = (0);
seq__29939_29943 = G__29960;
chunk__29940_29944 = G__29961;
count__29941_29945 = G__29962;
i__29942_29946 = G__29963;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__29964_29968 = cljs.core.seq.call(null,v);
var chunk__29965_29969 = null;
var count__29966_29970 = (0);
var i__29967_29971 = (0);
while(true){
if((i__29967_29971 < count__29966_29970)){
var x_29972 = cljs.core._nth.call(null,chunk__29965_29969,i__29967_29971);
ret.push(x_29972);

var G__29973 = seq__29964_29968;
var G__29974 = chunk__29965_29969;
var G__29975 = count__29966_29970;
var G__29976 = (i__29967_29971 + (1));
seq__29964_29968 = G__29973;
chunk__29965_29969 = G__29974;
count__29966_29970 = G__29975;
i__29967_29971 = G__29976;
continue;
} else {
var temp__4657__auto___29977 = cljs.core.seq.call(null,seq__29964_29968);
if(temp__4657__auto___29977){
var seq__29964_29978__$1 = temp__4657__auto___29977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29964_29978__$1)){
var c__25936__auto___29979 = cljs.core.chunk_first.call(null,seq__29964_29978__$1);
var G__29980 = cljs.core.chunk_rest.call(null,seq__29964_29978__$1);
var G__29981 = c__25936__auto___29979;
var G__29982 = cljs.core.count.call(null,c__25936__auto___29979);
var G__29983 = (0);
seq__29964_29968 = G__29980;
chunk__29965_29969 = G__29981;
count__29966_29970 = G__29982;
i__29967_29971 = G__29983;
continue;
} else {
var x_29984 = cljs.core.first.call(null,seq__29964_29978__$1);
ret.push(x_29984);

var G__29985 = cljs.core.next.call(null,seq__29964_29978__$1);
var G__29986 = null;
var G__29987 = (0);
var G__29988 = (0);
seq__29964_29968 = G__29985;
chunk__29965_29969 = G__29986;
count__29966_29970 = G__29987;
i__29967_29971 = G__29988;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args29989 = [];
var len__26200__auto___30004 = arguments.length;
var i__26201__auto___30005 = (0);
while(true){
if((i__26201__auto___30005 < len__26200__auto___30004)){
args29989.push((arguments[i__26201__auto___30005]));

var G__30006 = (i__26201__auto___30005 + (1));
i__26201__auto___30005 = G__30006;
continue;
} else {
}
break;
}

var G__29991 = args29989.length;
switch (G__29991) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29989.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__29992 = obj;
G__29992.push(kfn.call(null,k),vfn.call(null,v));

return G__29992;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x29993 = cljs.core.clone.call(null,handlers);
x29993.forEach = ((function (x29993,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__29994 = cljs.core.seq.call(null,coll);
var chunk__29995 = null;
var count__29996 = (0);
var i__29997 = (0);
while(true){
if((i__29997 < count__29996)){
var vec__29998 = cljs.core._nth.call(null,chunk__29995,i__29997);
var k = cljs.core.nth.call(null,vec__29998,(0),null);
var v = cljs.core.nth.call(null,vec__29998,(1),null);
f.call(null,v,k);

var G__30008 = seq__29994;
var G__30009 = chunk__29995;
var G__30010 = count__29996;
var G__30011 = (i__29997 + (1));
seq__29994 = G__30008;
chunk__29995 = G__30009;
count__29996 = G__30010;
i__29997 = G__30011;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29994);
if(temp__4657__auto__){
var seq__29994__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29994__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__29994__$1);
var G__30012 = cljs.core.chunk_rest.call(null,seq__29994__$1);
var G__30013 = c__25936__auto__;
var G__30014 = cljs.core.count.call(null,c__25936__auto__);
var G__30015 = (0);
seq__29994 = G__30012;
chunk__29995 = G__30013;
count__29996 = G__30014;
i__29997 = G__30015;
continue;
} else {
var vec__30001 = cljs.core.first.call(null,seq__29994__$1);
var k = cljs.core.nth.call(null,vec__30001,(0),null);
var v = cljs.core.nth.call(null,vec__30001,(1),null);
f.call(null,v,k);

var G__30016 = cljs.core.next.call(null,seq__29994__$1);
var G__30017 = null;
var G__30018 = (0);
var G__30019 = (0);
seq__29994 = G__30016;
chunk__29995 = G__30017;
count__29996 = G__30018;
i__29997 = G__30019;
continue;
}
} else {
return null;
}
}
break;
}
});})(x29993,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x29993;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args30020 = [];
var len__26200__auto___30026 = arguments.length;
var i__26201__auto___30027 = (0);
while(true){
if((i__26201__auto___30027 < len__26200__auto___30026)){
args30020.push((arguments[i__26201__auto___30027]));

var G__30028 = (i__26201__auto___30027 + (1));
i__26201__auto___30027 = G__30028;
continue;
} else {
}
break;
}

var G__30022 = args30020.length;
switch (G__30022) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30020.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit30023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit30023 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta30024){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta30024 = meta30024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit30023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30025,meta30024__$1){
var self__ = this;
var _30025__$1 = this;
return (new cognitect.transit.t_cognitect$transit30023(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta30024__$1));
});

cognitect.transit.t_cognitect$transit30023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30025){
var self__ = this;
var _30025__$1 = this;
return self__.meta30024;
});

cognitect.transit.t_cognitect$transit30023.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit30023.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit30023.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit30023.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit30023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta30024","meta30024",-144604471,null)], null);
});

cognitect.transit.t_cognitect$transit30023.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit30023.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit30023";

cognitect.transit.t_cognitect$transit30023.cljs$lang$ctorPrWriter = (function (this__25731__auto__,writer__25732__auto__,opt__25733__auto__){
return cljs.core._write.call(null,writer__25732__auto__,"cognitect.transit/t_cognitect$transit30023");
});

cognitect.transit.__GT_t_cognitect$transit30023 = (function cognitect$transit$__GT_t_cognitect$transit30023(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta30024){
return (new cognitect.transit.t_cognitect$transit30023(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta30024));
});

}

return (new cognitect.transit.t_cognitect$transit30023(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__25125__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1490344425869