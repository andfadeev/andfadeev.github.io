// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('reagent.ratom');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25905__auto__ = (function re_com$util$fmap_$_iter__114958(s__114959){
return (new cljs.core.LazySeq(null,(function (){
var s__114959__$1 = s__114959;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__114959__$1);
if(temp__4657__auto__){
var s__114959__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__114959__$2)){
var c__25903__auto__ = cljs.core.chunk_first.call(null,s__114959__$2);
var size__25904__auto__ = cljs.core.count.call(null,c__25903__auto__);
var b__114961 = cljs.core.chunk_buffer.call(null,size__25904__auto__);
if((function (){var i__114960 = (0);
while(true){
if((i__114960 < size__25904__auto__)){
var vec__114968 = cljs.core._nth.call(null,c__25903__auto__,i__114960);
var k = cljs.core.nth.call(null,vec__114968,(0),null);
var val = cljs.core.nth.call(null,vec__114968,(1),null);
cljs.core.chunk_append.call(null,b__114961,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__114974 = (i__114960 + (1));
i__114960 = G__114974;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__114961),re_com$util$fmap_$_iter__114958.call(null,cljs.core.chunk_rest.call(null,s__114959__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__114961),null);
}
} else {
var vec__114971 = cljs.core.first.call(null,s__114959__$2);
var k = cljs.core.nth.call(null,vec__114971,(0),null);
var val = cljs.core.nth.call(null,vec__114971,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__114958.call(null,cljs.core.rest.call(null,s__114959__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25905__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__26207__auto__ = [];
var len__26200__auto___114976 = arguments.length;
var i__26201__auto___114977 = (0);
while(true){
if((i__26201__auto___114977 < len__26200__auto___114976)){
args__26207__auto__.push((arguments[i__26201__auto___114977]));

var G__114978 = (i__26201__auto___114977 + (1));
i__26201__auto___114977 = G__114978;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq114975){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq114975));
});

/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *   
 */
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (val_or_atom.cljs$core$IDeref$))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 * 
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 * 
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 * 
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
re_com.util.deref_or_value_peek = (function re_com$util$deref_or_value_peek(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (val_or_atom.cljs$core$IDeref$))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof reagent.ratom.Track)){
return cljs.core.deref.call(null,val_or_atom);
} else {
if((val_or_atom instanceof reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__26207__auto__ = [];
var len__26200__auto___114985 = arguments.length;
var i__26201__auto___114986 = (0);
while(true){
if((i__26201__auto___114986 < len__26200__auto___114985)){
args__26207__auto__.push((arguments[i__26201__auto___114986]));

var G__114987 = (i__26201__auto___114986 + (1));
i__26201__auto___114986 = G__114987;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((1) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26208__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str((cljs.core.truth_(negative)?(- val):val)),cljs.core.str("px")].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq114983){
var G__114984 = cljs.core.first.call(null,seq114983);
var seq114983__$1 = cljs.core.next.call(null,seq114983);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__114984,seq114983__$1);
});

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__26207__auto__ = [];
var len__26200__auto___114994 = arguments.length;
var i__26201__auto___114995 = (0);
while(true){
if((i__26201__auto___114995 < len__26200__auto___114994)){
args__26207__auto__.push((arguments[i__26201__auto___114995]));

var G__114996 = (i__26201__auto___114995 + (1));
i__26201__auto___114995 = G__114996;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__114991){
var map__114992 = p__114991;
var map__114992__$1 = ((((!((map__114992 == null)))?((((map__114992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__114992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__114992):map__114992);
var id_fn = cljs.core.get.call(null,map__114992__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__114992,map__114992__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__114992,map__114992__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq114988){
var G__114989 = cljs.core.first.call(null,seq114988);
var seq114988__$1 = cljs.core.next.call(null,seq114988);
var G__114990 = cljs.core.first.call(null,seq114988__$1);
var seq114988__$2 = cljs.core.next.call(null,seq114988__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__114989,G__114990,seq114988__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__26207__auto__ = [];
var len__26200__auto___115004 = arguments.length;
var i__26201__auto___115005 = (0);
while(true){
if((i__26201__auto___115005 < len__26200__auto___115004)){
args__26207__auto__.push((arguments[i__26201__auto___115005]));

var G__115006 = (i__26201__auto___115005 + (1));
i__26201__auto___115005 = G__115006;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__115001){
var map__115002 = p__115001;
var map__115002__$1 = ((((!((map__115002 == null)))?((((map__115002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115002):map__115002);
var id_fn = cljs.core.get.call(null,map__115002__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__115002,map__115002__$1,id_fn){
return (function (p1__114997_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__114997_SHARP_),id);
});})(map__115002,map__115002__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq114998){
var G__114999 = cljs.core.first.call(null,seq114998);
var seq114998__$1 = cljs.core.next.call(null,seq114998);
var G__115000 = cljs.core.first.call(null,seq114998__$1);
var seq114998__$2 = cljs.core.next.call(null,seq114998__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__114999,G__115000,seq114998__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__26207__auto__ = [];
var len__26200__auto___115014 = arguments.length;
var i__26201__auto___115015 = (0);
while(true){
if((i__26201__auto___115015 < len__26200__auto___115014)){
args__26207__auto__.push((arguments[i__26201__auto___115015]));

var G__115016 = (i__26201__auto___115015 + (1));
i__26201__auto___115015 = G__115016;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((2) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26208__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__115011){
var map__115012 = p__115011;
var map__115012__$1 = ((((!((map__115012 == null)))?((((map__115012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115012):map__115012);
var id_fn = cljs.core.get.call(null,map__115012__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__115012,map__115012__$1,id_fn){
return (function (p1__115007_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__115007_SHARP_),id);
});})(map__115012,map__115012__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq115008){
var G__115009 = cljs.core.first.call(null,seq115008);
var seq115008__$1 = cljs.core.next.call(null,seq115008);
var G__115010 = cljs.core.first.call(null,seq115008__$1);
var seq115008__$2 = cljs.core.next.call(null,seq115008__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__115009,G__115010,seq115008__$2);
});

/**
 * (for [[index item first? last?] (enumerate coll)] ...)  
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__115017 = current_node.parentNode;
var G__115018 = (sum_scroll_left + current_node.scrollLeft);
var G__115019 = (sum_scroll_top + current_node.scrollTop);
current_node = G__115017;
sum_scroll_left = G__115018;
sum_scroll_top = G__115019;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Answer a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date.getYear(),local_date.getMonth(),local_date.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=util.js.map?rel=1488400161927