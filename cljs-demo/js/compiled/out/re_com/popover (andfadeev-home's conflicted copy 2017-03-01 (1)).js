// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_com.popover');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.ratom');
re_com.popover.point = (function re_com$popover$point(x,y){
return [cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(" ")].join('');
});
/**
 * Return the vector of the two keywords formed by splitting another keyword 'kw' on an internal delimiter (usually '-')
 * (split-keyword  :above-left  "-") => [:above :left]
 */
re_com.popover.split_keyword = (function re_com$popover$split_keyword(kw,delimiter){
var keywords = clojure.string.split.call(null,[cljs.core.str(kw)].join(''),cljs.core.re_pattern.call(null,[cljs.core.str("["),cljs.core.str(delimiter),cljs.core.str(":]")].join('')));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,keywords.call(null,(1))),cljs.core.keyword.call(null,keywords.call(null,(2)))], null);
});
/**
 * A button with a big X in it, placed to the right of the popover title
 */
re_com.popover.close_button = (function re_com$popover$close_button(showing_QMARK_,close_callback,style){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_(close_callback)){
close_callback.call(null);
} else {
cljs.core.reset_BANG_.call(null,showing_QMARK_,false);
}

return null;
}),new cljs.core.Keyword(null,"class","class",-2030961996),"close",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"34px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"26px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"4px",new cljs.core.Keyword(null,"right","right",-452581833),"2px"], null),style)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"zmdi zmdi-hc-fw-rc zmdi-close"], null)], null)], null);
});
/**
 * Determine values for :left :right :top :bottom CSS styles.
 * - pop-orient    What side of the anchor the popover will be attached to. One of :above :below :left :right
 * - p-width       The px width of the popover after it has been rendered
 * - p-height      The px height of the popover after it has been rendered
 * - pop-offset    The number of pixels the popover is offset from it's natural position in relation to the popover-arrow (ugh, hard to explain)
 * - arrow-length  The px length of the arrow (from the point to middle of arrow base)
 * - arrow-gap     The px distance between the anchor and the arrow tip. Positive numbers push the popover away from the anchor
 *   
 */
re_com.popover.calc_popover_pos = (function re_com$popover$calc_popover_pos(pop_orient,p_width,p_height,pop_offset,arrow_length,arrow_gap){
var total_offset = (arrow_length + arrow_gap);
var popover_left = (function (){var G__115127 = (((pop_orient instanceof cljs.core.Keyword))?pop_orient.fqn:null);
switch (G__115127) {
case "left":
return "initial";

break;
case "right":
return re_com.util.px.call(null,total_offset);

break;
case "above":
return re_com.util.px.call(null,(cljs.core.truth_(pop_offset)?pop_offset:(p_width / (2))),new cljs.core.Keyword(null,"negative","negative",-1562068438));

break;
case "below":
return re_com.util.px.call(null,(cljs.core.truth_(pop_offset)?pop_offset:(p_width / (2))),new cljs.core.Keyword(null,"negative","negative",-1562068438));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(pop_orient)].join('')));

}
})();
var popover_top = (function (){var G__115128 = (((pop_orient instanceof cljs.core.Keyword))?pop_orient.fqn:null);
switch (G__115128) {
case "left":
return re_com.util.px.call(null,(cljs.core.truth_(pop_offset)?pop_offset:(p_height / (2))),new cljs.core.Keyword(null,"negative","negative",-1562068438));

break;
case "right":
return re_com.util.px.call(null,(cljs.core.truth_(pop_offset)?pop_offset:(p_height / (2))),new cljs.core.Keyword(null,"negative","negative",-1562068438));

break;
case "above":
return "initial";

break;
case "below":
return re_com.util.px.call(null,total_offset);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(pop_orient)].join('')));

}
})();
var popover_right = (function (){var G__115129 = (((pop_orient instanceof cljs.core.Keyword))?pop_orient.fqn:null);
switch (G__115129) {
case "left":
return re_com.util.px.call(null,total_offset);

break;
case "right":
return null;

break;
case "above":
return null;

break;
case "below":
return null;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(pop_orient)].join('')));

}
})();
var popover_bottom = (function (){var G__115130 = (((pop_orient instanceof cljs.core.Keyword))?pop_orient.fqn:null);
switch (G__115130) {
case "left":
return null;

break;
case "right":
return null;

break;
case "above":
return re_com.util.px.call(null,total_offset);

break;
case "below":
return null;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(pop_orient)].join('')));

}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),popover_left,new cljs.core.Keyword(null,"top","top",-1856271961),popover_top,new cljs.core.Keyword(null,"right","right",-452581833),popover_right,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),popover_bottom], null);
});
/**
 * Calculate the optimal :position value that results in the least amount of clipping by the screen edges
 *   Taken from: https://github.com/Lambda-X/cljs-repl-web/blob/0.3.1/src/cljs/cljs_repl_web/views/utils.cljs#L52
 *   Thanks to @richiardiandrea and @tomek for this code
 */
re_com.popover.calculate_optimal_position = (function re_com$popover$calculate_optimal_position(p__115135){
var vec__115139 = p__115135;
var x = cljs.core.nth.call(null,vec__115139,(0),null);
var y = cljs.core.nth.call(null,vec__115139,(1),null);
var w = window.innerWidth;
var h = window.innerHeight;
var h_threshold_left = cljs.core.quot.call(null,w,(3));
var h_threshold_cent = ((2) * h_threshold_left);
var h_position = (((x < h_threshold_left))?"right":(((x < h_threshold_cent))?"center":"left"
));
var v_threshold = cljs.core.quot.call(null,h,(2));
var v_position = (((y < v_threshold))?"below":"above");
return cljs.core.keyword.call(null,[cljs.core.str(v_position),cljs.core.str("-"),cljs.core.str(h_position)].join(''));
});
/**
 * Given a node reference, calculate the absolute x and y coordinates of the node's midpoint
 */
re_com.popover.calc_element_midpoint = (function re_com$popover$calc_element_midpoint(node){
var bounding_rect = node.getBoundingClientRect();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((bounding_rect.right + bounding_rect.left) / (2)),((bounding_rect.bottom + bounding_rect.top) / (2))], null);
});
/**
 * Render the triangle which connects the popover to the anchor (using SVG)
 */
re_com.popover.popover_arrow = (function re_com$popover$popover_arrow(orientation,pop_offset,arrow_length,arrow_width,grey_arrow_QMARK_,no_border_QMARK_,popover_color){
var half_arrow_width = (arrow_width / (2));
var arrow_shape = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str(re_com.popover.point.call(null,(0),(0))),cljs.core.str(re_com.popover.point.call(null,arrow_length,half_arrow_width)),cljs.core.str(re_com.popover.point.call(null,(0),arrow_width))].join(''),new cljs.core.Keyword(null,"right","right",-452581833),[cljs.core.str(re_com.popover.point.call(null,arrow_length,(0))),cljs.core.str(re_com.popover.point.call(null,(0),half_arrow_width)),cljs.core.str(re_com.popover.point.call(null,arrow_length,arrow_width))].join(''),new cljs.core.Keyword(null,"above","above",-1286866470),[cljs.core.str(re_com.popover.point.call(null,(0),(0))),cljs.core.str(re_com.popover.point.call(null,half_arrow_width,arrow_length)),cljs.core.str(re_com.popover.point.call(null,arrow_width,(0)))].join(''),new cljs.core.Keyword(null,"below","below",-926774883),[cljs.core.str(re_com.popover.point.call(null,(0),arrow_length)),cljs.core.str(re_com.popover.point.call(null,half_arrow_width,(0))),cljs.core.str(re_com.popover.point.call(null,arrow_width,arrow_length))].join('')], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"popover-arrow",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",(function (){var G__115147 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__115147) {
case "left":
return new cljs.core.Keyword(null,"right","right",-452581833);

break;
case "right":
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
case "above":
return new cljs.core.Keyword(null,"bottom","bottom",-1550509018);

break;
case "below":
return new cljs.core.Keyword(null,"top","top",-1856271961);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(orientation)].join('')));

}
})(),re_com.util.px.call(null,arrow_length,new cljs.core.Keyword(null,"negative","negative",-1562068438)),(function (){var G__115148 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__115148) {
case "left":
return new cljs.core.Keyword(null,"top","top",-1856271961);

break;
case "right":
return new cljs.core.Keyword(null,"top","top",-1856271961);

break;
case "above":
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
case "below":
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(orientation)].join('')));

}
})(),(((pop_offset == null))?"50%":re_com.util.px.call(null,pop_offset)),(function (){var G__115149 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__115149) {
case "left":
return new cljs.core.Keyword(null,"margin-top","margin-top",392161226);

break;
case "right":
return new cljs.core.Keyword(null,"margin-top","margin-top",392161226);

break;
case "above":
return new cljs.core.Keyword(null,"margin-left","margin-left",2015598377);

break;
case "below":
return new cljs.core.Keyword(null,"margin-left","margin-left",2015598377);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(orientation)].join('')));

}
})(),re_com.util.px.call(null,half_arrow_width,new cljs.core.Keyword(null,"negative","negative",-1562068438)),new cljs.core.Keyword(null,"width","width",-384071477),re_com.util.px.call(null,(function (){var G__115150 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__115150) {
case "left":
return arrow_length;

break;
case "right":
return arrow_length;

break;
case "above":
return arrow_width;

break;
case "below":
return arrow_width;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(orientation)].join('')));

}
})()),new cljs.core.Keyword(null,"height","height",1025178622),re_com.util.px.call(null,(function (){var G__115151 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__115151) {
case "left":
return arrow_width;

break;
case "right":
return arrow_width;

break;
case "above":
return arrow_length;

break;
case "below":
return arrow_length;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(orientation)].join('')));

}
})())], true, false)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),arrow_shape.call(null,orientation),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(popover_color)?popover_color:(cljs.core.truth_(grey_arrow_QMARK_)?"#f7f7f7":"white")),new cljs.core.Keyword(null,"stroke","stroke",1741823555),(cljs.core.truth_(no_border_QMARK_)?null:"rgba(0, 0, 0, .2)"),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1"], null)], null)], null)], null);
});
re_com.popover.backdrop_args_desc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),0.0,new cljs.core.Keyword(null,"type","type",1174270348),"double | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"opacity of backdrop from:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"0.0 (transparent) to 1.0 (opaque)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the backdrop is clicked"], null)], null);
/**
 * Renders a backdrop dive which fills the entire page and responds to clicks on it. Can also specify how tranparent it should be
 */
re_com.popover.backdrop = (function re_com$popover$backdrop(var_args){
var args__26207__auto__ = [];
var len__26200__auto___115161 = arguments.length;
var i__26201__auto___115162 = (0);
while(true){
if((i__26201__auto___115162 < len__26200__auto___115161)){
args__26207__auto__.push((arguments[i__26201__auto___115162]));

var G__115163 = (i__26201__auto___115162 + (1));
i__26201__auto___115162 = G__115163;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return re_com.popover.backdrop.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

re_com.popover.backdrop.cljs$core$IFn$_invoke$arity$variadic = (function (p__115158){
var map__115159 = p__115158;
var map__115159__$1 = ((((!((map__115159 == null)))?((((map__115159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115159):map__115159);
var args = map__115159__$1;
var opacity = cljs.core.get.call(null,map__115159__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var on_click = cljs.core.get.call(null,map__115159__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.backdrop_args_desc),args,"backdrop")))){
} else {
throw (new Error("Assert failed: (validate-args-macro backdrop-args-desc args \"backdrop\")"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-backdrop noselect",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(opacity)?opacity:0.0)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__115159,map__115159__$1,args,opacity,on_click){
return (function (event){
on_click.call(null);

return null;
});})(map__115159,map__115159__$1,args,opacity,on_click))
], null)], null);
});

re_com.popover.backdrop.cljs$lang$maxFixedArity = (0);

re_com.popover.backdrop.cljs$lang$applyTo = (function (seq115157){
return re_com.popover.backdrop.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq115157));
});

re_com.popover.popover_title_args_desc = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean atom",new cljs.core.Keyword(null,"description","description",-1428560544),"an atom. When the value is true, the popover shows."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"describes the title of the popover. Default font size is 18px to make it stand out"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-callback","close-callback",651188974),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a function which takes no params and returns nothing. Called when the close button is pressed. Not required if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":showing?"], null)," atom passed in OR ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":close-button?"], null)," is set to false"], null)], null)], null);
/**
 * Renders a title at the top of a popover with an optional close button on the far right
 */
re_com.popover.popover_title = (function re_com$popover$popover_title(var_args){
var args__26207__auto__ = [];
var len__26200__auto___115168 = arguments.length;
var i__26201__auto___115169 = (0);
while(true){
if((i__26201__auto___115169 < len__26200__auto___115168)){
args__26207__auto__.push((arguments[i__26201__auto___115169]));

var G__115170 = (i__26201__auto___115169 + (1));
i__26201__auto___115169 = G__115170;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_title.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

re_com.popover.popover_title.cljs$core$IFn$_invoke$arity$variadic = (function (p__115165){
var map__115166 = p__115165;
var map__115166__$1 = ((((!((map__115166 == null)))?((((map__115166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115166):map__115166);
var args = map__115166__$1;
var title = cljs.core.get.call(null,map__115166__$1,new cljs.core.Keyword(null,"title","title",636505583));
var showing_QMARK_ = cljs.core.get.call(null,map__115166__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var close_button_QMARK_ = cljs.core.get.call(null,map__115166__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var close_callback = cljs.core.get.call(null,map__115166__$1,new cljs.core.Keyword(null,"close-callback","close-callback",651188974));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_title_args_desc),args,"popover-title")))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-title-args-desc args \"popover-title\")"));
}

if(cljs.core.truth_((function (){var or__25125__auto__ = cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,showing_QMARK_);
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,close_callback);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Must specify either showing? OR close-callback"),cljs.core.str("\n"),cljs.core.str("(or ((complement nil?) showing?) ((complement nil?) close-callback))")].join('')));
}

var close_button_QMARK___$1 = (((close_button_QMARK_ == null))?true:close_button_QMARK_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.popover-title","h3.popover-title",126205197),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"inherit"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px"], null))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,(cljs.core.truth_(close_button_QMARK___$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.close_button,showing_QMARK_,close_callback], null):null)], null)], null)], null);
});

re_com.popover.popover_title.cljs$lang$maxFixedArity = (0);

re_com.popover.popover_title.cljs$lang$applyTo = (function (seq115164){
return re_com.popover.popover_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq115164));
});

re_com.popover.next_even_integer = (function re_com$popover$next_even_integer(num){
return ((((num + (1)) / (2)) | (0)) * (2));
});
re_com.popover.calc_pop_offset = (function re_com$popover$calc_pop_offset(arrow_pos,position_offset,p_width,p_height){
var G__115172 = (((arrow_pos instanceof cljs.core.Keyword))?arrow_pos.fqn:null);
switch (G__115172) {
case "center":
return null;

break;
case "right":
return ((20) + position_offset);

break;
case "below":
return ((20) + position_offset);

break;
case "left":
if(cljs.core.truth_(p_width)){
return ((p_width - (25)) - position_offset);
} else {
return p_width;
}

break;
case "above":
if(cljs.core.truth_(p_height)){
return ((p_height - (25)) - position_offset);
} else {
return p_height;
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(arrow_pos)].join('')));

}
});
re_com.popover.popover_clipping = (function re_com$popover$popover_clipping(node){
var viewport_width = window.innerWidth;
var viewport_height = window.innerHeight;
var bounding_rect = node.getBoundingClientRect();
var left = bounding_rect.left;
var right = bounding_rect.right;
var top = bounding_rect.top;
var bottom = bounding_rect.bottom;
var clip_left = (((left < (0)))?(- left):null);
var clip_right = (((right > viewport_width))?(right - viewport_width):null);
var clip_top = (((top < (0)))?(- top):null);
var clip_bottom = (((bottom > viewport_height))?(bottom - viewport_height):null);
return (cljs.core.some_QMARK_.call(null,clip_left)) || (cljs.core.some_QMARK_.call(null,clip_right)) || (cljs.core.some_QMARK_.call(null,clip_top)) || (cljs.core.some_QMARK_.call(null,clip_bottom));
});
re_com.popover.popover_border_args_desc = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a vector of component markups"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"keyword atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"px offset of the arrow from its default ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":position"], null)," along the popover border. Is ignored when ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":position"], null)," is one of the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":xxx-center"], null)," variants. Positive numbers slide the popover toward its center"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the popover width"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"auto",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the popover height"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"white",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"fill color of the popover"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(11),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the length in pixels of the arrow (from pointy part to middle of arrow base)"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(22),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the width in pixels of arrow base"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(-1),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"px gap between the anchor and the arrow tip. Positive numbers push the popover away from the anchor"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style which overrides the inner padding of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the horiztonal offset from anchor after position"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the vertical offset from anchor after position"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"setup popover styles for a tooltip"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | markup",new cljs.core.Keyword(null,"description","description",-1428560544),"describes a title"], null)], null);
/**
 * Renders an element or control along with a Bootstrap popover
 */
re_com.popover.popover_border = (function re_com$popover$popover_border(var_args){
var args__26207__auto__ = [];
var len__26200__auto___115188 = arguments.length;
var i__26201__auto___115189 = (0);
while(true){
if((i__26201__auto___115189 < len__26200__auto___115188)){
args__26207__auto__.push((arguments[i__26201__auto___115189]));

var G__115190 = (i__26201__auto___115189 + (1));
i__26201__auto___115189 = G__115190;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_border.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

re_com.popover.popover_border.cljs$core$IFn$_invoke$arity$variadic = (function (p__115175){
var map__115176 = p__115175;
var map__115176__$1 = ((((!((map__115176 == null)))?((((map__115176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115176):map__115176);
var args = map__115176__$1;
var height = cljs.core.get.call(null,map__115176__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var tooltip_style_QMARK_ = cljs.core.get.call(null,map__115176__$1,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527));
var popover_color = cljs.core.get.call(null,map__115176__$1,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119));
var children = cljs.core.get.call(null,map__115176__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var arrow_length = cljs.core.get.call(null,map__115176__$1,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(11));
var position_offset = cljs.core.get.call(null,map__115176__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411));
var margin_left = cljs.core.get.call(null,map__115176__$1,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377));
var arrow_width = cljs.core.get.call(null,map__115176__$1,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(22));
var margin_top = cljs.core.get.call(null,map__115176__$1,new cljs.core.Keyword(null,"margin-top","margin-top",392161226));
var width = cljs.core.get.call(null,map__115176__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title = cljs.core.get.call(null,map__115176__$1,new cljs.core.Keyword(null,"title","title",636505583));
var arrow_gap = cljs.core.get.call(null,map__115176__$1,new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(-1));
var padding = cljs.core.get.call(null,map__115176__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var position = cljs.core.get.call(null,map__115176__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_border_args_desc),args,"popover-border")))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-border-args-desc args \"popover-border\")"));
}

var pop_id = cljs.core.gensym.call(null,"popover-");
var rendered_once = reagent.core.atom.call(null,false);
var ready_to_show_QMARK_ = reagent.core.atom.call(null,false);
var p_width = reagent.core.atom.call(null,(0));
var p_height = reagent.core.atom.call(null,(0));
var pop_offset = reagent.core.atom.call(null,(0));
var found_optimal = reagent.core.atom.call(null,false);
var calc_metrics = ((function (pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,map__115176,map__115176__$1,args,height,tooltip_style_QMARK_,popover_color,children,arrow_length,position_offset,margin_left,arrow_width,margin_top,width,title,arrow_gap,padding,position){
return (function (position__$1){
var popover_elem = re_com.util.get_element_by_id.call(null,pop_id);
var vec__115178 = re_com.popover.split_keyword.call(null,position__$1,"-");
var orientation = cljs.core.nth.call(null,vec__115178,(0),null);
var arrow_pos = cljs.core.nth.call(null,vec__115178,(1),null);
var grey_arrow_QMARK_ = (function (){var and__25113__auto__ = title;
if(cljs.core.truth_(and__25113__auto__)){
return (cljs.core._EQ_.call(null,orientation,new cljs.core.Keyword(null,"below","below",-926774883))) || (cljs.core._EQ_.call(null,arrow_pos,new cljs.core.Keyword(null,"below","below",-926774883)));
} else {
return and__25113__auto__;
}
})();
cljs.core.reset_BANG_.call(null,p_width,(cljs.core.truth_(popover_elem)?re_com.popover.next_even_integer.call(null,popover_elem.clientWidth):(0)));

cljs.core.reset_BANG_.call(null,p_height,(cljs.core.truth_(popover_elem)?re_com.popover.next_even_integer.call(null,popover_elem.clientHeight):(0)));

cljs.core.reset_BANG_.call(null,pop_offset,re_com.popover.calc_pop_offset.call(null,arrow_pos,position_offset,cljs.core.deref.call(null,p_width),cljs.core.deref.call(null,p_height)));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orientation,grey_arrow_QMARK_], null);
});})(pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,map__115176,map__115176__$1,args,height,tooltip_style_QMARK_,popover_color,children,arrow_length,position_offset,margin_left,arrow_width,margin_top,width,title,arrow_gap,padding,position))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"popover-border",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__115176,map__115176__$1,args,height,tooltip_style_QMARK_,popover_color,children,arrow_length,position_offset,margin_left,arrow_width,margin_top,width,title,arrow_gap,padding,position){
return (function (){
return cljs.core.reset_BANG_.call(null,rendered_once,true);
});})(pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__115176,map__115176__$1,args,height,tooltip_style_QMARK_,popover_color,children,arrow_length,position_offset,margin_left,arrow_width,margin_top,width,title,arrow_gap,padding,position))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__115176,map__115176__$1,args,height,tooltip_style_QMARK_,popover_color,children,arrow_length,position_offset,margin_left,arrow_width,margin_top,width,title,arrow_gap,padding,position){
return (function (this$){
var pop_border_node = reagent.core.dom_node.call(null,this$);
var clipped_QMARK_ = re_com.popover.popover_clipping.call(null,pop_border_node);
var anchor_node = pop_border_node.parentNode.parentNode.parentNode;
if(cljs.core.truth_((function (){var and__25113__auto__ = clipped_QMARK_;
if(cljs.core.truth_(and__25113__auto__)){
return cljs.core.not.call(null,cljs.core.deref.call(null,found_optimal));
} else {
return and__25113__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,position,re_com.popover.calculate_optimal_position.call(null,re_com.popover.calc_element_midpoint.call(null,anchor_node)));

cljs.core.reset_BANG_.call(null,found_optimal,true);
} else {
}

calc_metrics.call(null,cljs.core.deref.call(null,position));

return cljs.core.reset_BANG_.call(null,ready_to_show_QMARK_,true);
});})(pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__115176,map__115176__$1,args,height,tooltip_style_QMARK_,popover_color,children,arrow_length,position_offset,margin_left,arrow_width,margin_top,width,title,arrow_gap,padding,position))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__115176,map__115176__$1,args,height,tooltip_style_QMARK_,popover_color,children,arrow_length,position_offset,margin_left,arrow_width,margin_top,width,title,arrow_gap,padding,position){
return (function() { 
var G__115191__delegate = function (p__115181){
var map__115182 = p__115181;
var map__115182__$1 = ((((!((map__115182 == null)))?((((map__115182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115182):map__115182);
var args__$1 = map__115182__$1;
var height__$1 = cljs.core.get.call(null,map__115182__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var tooltip_style_QMARK___$1 = cljs.core.get.call(null,map__115182__$1,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527));
var popover_color__$1 = cljs.core.get.call(null,map__115182__$1,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119));
var children__$1 = cljs.core.get.call(null,map__115182__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var arrow_length__$1 = cljs.core.get.call(null,map__115182__$1,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(11));
var position_offset__$1 = cljs.core.get.call(null,map__115182__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411));
var margin_left__$1 = cljs.core.get.call(null,map__115182__$1,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377));
var arrow_width__$1 = cljs.core.get.call(null,map__115182__$1,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(22));
var margin_top__$1 = cljs.core.get.call(null,map__115182__$1,new cljs.core.Keyword(null,"margin-top","margin-top",392161226));
var width__$1 = cljs.core.get.call(null,map__115182__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title__$1 = cljs.core.get.call(null,map__115182__$1,new cljs.core.Keyword(null,"title","title",636505583));
var arrow_gap__$1 = cljs.core.get.call(null,map__115182__$1,new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(-1));
var padding__$1 = cljs.core.get.call(null,map__115182__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var position__$1 = cljs.core.get.call(null,map__115182__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_border_args_desc),args__$1,"popover-border")))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-border-args-desc args \"popover-border\")"));
}

var vec__115184 = calc_metrics.call(null,cljs.core.deref.call(null,position__$1));
var orientation = cljs.core.nth.call(null,vec__115184,(0),null);
var grey_arrow_QMARK_ = cljs.core.nth.call(null,vec__115184,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.popover.fade.in","div.popover.fade.in",-106226512),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),pop_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.deref.call(null,rendered_once))?(cljs.core.truth_(pop_id)?re_com.popover.calc_popover_pos.call(null,orientation,cljs.core.deref.call(null,p_width),cljs.core.deref.call(null,p_height),cljs.core.deref.call(null,pop_offset),arrow_length__$1,arrow_gap__$1):null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),"-10000px",new cljs.core.Keyword(null,"left","left",-399115937),"-10000px"], null)),(cljs.core.truth_(width__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1], null):null),(cljs.core.truth_(height__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height__$1], null):null),(cljs.core.truth_(popover_color__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),popover_color__$1], null):null),(cljs.core.truth_(tooltip_style_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none"], null):null),(function (){var G__115187 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__115187) {
case "left":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-2000px"], null);

break;
case "right":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"-2000px"], null);

break;
case "above":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"-2000px"], null);

break;
case "below":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"-2000px"], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(orientation)].join('')));

}
})(),(cljs.core.truth_(margin_left__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),margin_left__$1], null):null),(cljs.core.truth_(margin_top__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),margin_top__$1], null):null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(cljs.core.deref.call(null,ready_to_show_QMARK_))?"1":"0"),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px"], null))], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_arrow,orientation,cljs.core.deref.call(null,pop_offset),arrow_length__$1,arrow_width__$1,grey_arrow_QMARK_,tooltip_style_QMARK___$1,popover_color__$1], null),(cljs.core.truth_(title__$1)?title__$1:null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.popover-content","div.popover-content",1045719989),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding__$1], null)], null)], null),children__$1)], null);
};
var G__115191 = function (var_args){
var p__115181 = null;
if (arguments.length > 0) {
var G__115193__i = 0, G__115193__a = new Array(arguments.length -  0);
while (G__115193__i < G__115193__a.length) {G__115193__a[G__115193__i] = arguments[G__115193__i + 0]; ++G__115193__i;}
  p__115181 = new cljs.core.IndexedSeq(G__115193__a,0);
} 
return G__115191__delegate.call(this,p__115181);};
G__115191.cljs$lang$maxFixedArity = 0;
G__115191.cljs$lang$applyTo = (function (arglist__115194){
var p__115181 = cljs.core.seq(arglist__115194);
return G__115191__delegate(p__115181);
});
G__115191.cljs$core$IFn$_invoke$arity$variadic = G__115191__delegate;
return G__115191;
})()
;})(pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__115176,map__115176__$1,args,height,tooltip_style_QMARK_,popover_color,children,arrow_length,position_offset,margin_left,arrow_width,margin_top,width,title,arrow_gap,padding,position))
], null));
});

re_com.popover.popover_border.cljs$lang$maxFixedArity = (0);

re_com.popover.popover_border.cljs$lang$applyTo = (function (seq115174){
return re_com.popover.popover_border.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq115174));
});

re_com.popover.popover_content_wrapper_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing-injected?","showing-injected?",-105733250),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"an atom. When the value is true, the popover shows.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"NOTE: "], null),"When used as direct ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":popover"], null)," arg in popover-anchor-wrapper, this arg will be injected automatically by popover-anchor-wrapper. If using your own popover function, you must add this yourself"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position-injected","position-injected",205959080),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"keyword atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"NOTE: "], null),"See above NOTE for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":showing-injected?"], null),". Same applies"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"px offset of the arrow from its default ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":position"], null)," along the popover border. Is ignored when ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":position"], null)," is one of the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":xxx-center"], null)," variants. Positive numbers slide the popover toward its center"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. By passing true for this parameter, re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style representing the popover width"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style representing the popover height"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),0.0,new cljs.core.Keyword(null,"type","type",1174270348),"double | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"indicates the opacity of the backdrop where 0.0=transparent, 1.0=opaque"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the popover is cancelled (e.g. user clicks away)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"describes the title of the popover. The default font size is 18px to make it stand out"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"describes the popover body. Must be a single component"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"setup popover styles for a tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"white",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"fill color of the popover"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(11),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the length in pixels of the arrow (from pointy part to middle of arrow base)"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(22),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the width in pixels of arrow base"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(-1),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"px gap between the anchor and the arrow tip. Positive numbers push the popover away from the anchor"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style which overrides the inner padding of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override component style(s) with a style map, only use in case of emergency"], null)], null);
/**
 * Abstracts several components to handle the 90% of cases for general popovers and dialog boxes
 */
re_com.popover.popover_content_wrapper = (function re_com$popover$popover_content_wrapper(var_args){
var args__26207__auto__ = [];
var len__26200__auto___115202 = arguments.length;
var i__26201__auto___115203 = (0);
while(true){
if((i__26201__auto___115203 < len__26200__auto___115202)){
args__26207__auto__.push((arguments[i__26201__auto___115203]));

var G__115204 = (i__26201__auto___115203 + (1));
i__26201__auto___115203 = G__115204;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_content_wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

re_com.popover.popover_content_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (p__115196){
var map__115197 = p__115196;
var map__115197__$1 = ((((!((map__115197 == null)))?((((map__115197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115197):map__115197);
var args = map__115197__$1;
var body = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var on_cancel = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var showing_injected_QMARK_ = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"showing-injected?","showing-injected?",-105733250));
var height = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var tooltip_style_QMARK_ = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527));
var popover_color = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119));
var arrow_length = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(11));
var position_offset = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411));
var backdrop_opacity = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653));
var position_injected = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"position-injected","position-injected",205959080));
var no_clip_QMARK_ = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951));
var close_button_QMARK_ = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var arrow_width = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(22));
var width = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"title","title",636505583));
var style = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var arrow_gap = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(-1));
var padding = cljs.core.get.call(null,map__115197__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_content_wrapper_args_desc),args,"popover-content-wrapper")))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-content-wrapper-args-desc args \"popover-content-wrapper\")"));
}

var left_offset = reagent.core.atom.call(null,(0));
var top_offset = reagent.core.atom.call(null,(0));
var position_no_clip_popover = ((function (left_offset,top_offset,map__115197,map__115197__$1,args,body,on_cancel,showing_injected_QMARK_,height,tooltip_style_QMARK_,popover_color,arrow_length,position_offset,backdrop_opacity,position_injected,no_clip_QMARK_,close_button_QMARK_,arrow_width,width,title,style,arrow_gap,padding){
return (function re_com$popover$position_no_clip_popover(this$){
if(cljs.core.truth_(no_clip_QMARK_)){
var node = reagent.core.dom_node.call(null,this$);
var popover_point_node = node.parentNode;
var bounding_rect = popover_point_node.getBoundingClientRect();
cljs.core.reset_BANG_.call(null,left_offset,bounding_rect.left);

return cljs.core.reset_BANG_.call(null,top_offset,bounding_rect.top);
} else {
return null;
}
});})(left_offset,top_offset,map__115197,map__115197__$1,args,body,on_cancel,showing_injected_QMARK_,height,tooltip_style_QMARK_,popover_color,arrow_length,position_offset,backdrop_opacity,position_injected,no_clip_QMARK_,close_button_QMARK_,arrow_width,width,title,style,arrow_gap,padding))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"popover-content-wrapper",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (left_offset,top_offset,position_no_clip_popover,map__115197,map__115197__$1,args,body,on_cancel,showing_injected_QMARK_,height,tooltip_style_QMARK_,popover_color,arrow_length,position_offset,backdrop_opacity,position_injected,no_clip_QMARK_,close_button_QMARK_,arrow_width,width,title,style,arrow_gap,padding){
return (function (this$){
return position_no_clip_popover.call(null,this$);
});})(left_offset,top_offset,position_no_clip_popover,map__115197,map__115197__$1,args,body,on_cancel,showing_injected_QMARK_,height,tooltip_style_QMARK_,popover_color,arrow_length,position_offset,backdrop_opacity,position_injected,no_clip_QMARK_,close_button_QMARK_,arrow_width,width,title,style,arrow_gap,padding))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (left_offset,top_offset,position_no_clip_popover,map__115197,map__115197__$1,args,body,on_cancel,showing_injected_QMARK_,height,tooltip_style_QMARK_,popover_color,arrow_length,position_offset,backdrop_opacity,position_injected,no_clip_QMARK_,close_button_QMARK_,arrow_width,width,title,style,arrow_gap,padding){
return (function (this$){
return position_no_clip_popover.call(null,this$);
});})(left_offset,top_offset,position_no_clip_popover,map__115197,map__115197__$1,args,body,on_cancel,showing_injected_QMARK_,height,tooltip_style_QMARK_,popover_color,arrow_length,position_offset,backdrop_opacity,position_injected,no_clip_QMARK_,close_button_QMARK_,arrow_width,width,title,style,arrow_gap,padding))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (left_offset,top_offset,position_no_clip_popover,map__115197,map__115197__$1,args,body,on_cancel,showing_injected_QMARK_,height,tooltip_style_QMARK_,popover_color,arrow_length,position_offset,backdrop_opacity,position_injected,no_clip_QMARK_,close_button_QMARK_,arrow_width,width,title,style,arrow_gap,padding){
return (function() { 
var G__115205__delegate = function (p__115199){
var map__115200 = p__115199;
var map__115200__$1 = ((((!((map__115200 == null)))?((((map__115200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115200):map__115200);
var args__$1 = map__115200__$1;
var body__$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var on_cancel__$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var showing_injected_QMARK___$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"showing-injected?","showing-injected?",-105733250));
var height__$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var tooltip_style_QMARK___$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527));
var popover_color__$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119));
var arrow_length__$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(11));
var position_offset__$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411));
var backdrop_opacity__$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653));
var position_injected__$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"position-injected","position-injected",205959080));
var no_clip_QMARK___$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951));
var close_button_QMARK___$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var arrow_width__$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(22));
var width__$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title__$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"title","title",636505583));
var style__$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var arrow_gap__$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(-1));
var padding__$1 = cljs.core.get.call(null,map__115200__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_content_wrapper_args_desc),args__$1,"popover-content-wrapper")))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-content-wrapper-args-desc args \"popover-content-wrapper\")"));
}

cljs.core.deref.call(null,position_injected__$1);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"popover-content-wrapper",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"inherit"),(cljs.core.truth_(no_clip_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),re_com.util.px.call(null,cljs.core.deref.call(null,left_offset)),new cljs.core.Keyword(null,"top","top",-1856271961),re_com.util.px.call(null,cljs.core.deref.call(null,top_offset))], null):null),style__$1)], null),(cljs.core.truth_((function (){var and__25113__auto__ = cljs.core.deref.call(null,showing_injected_QMARK___$1);
if(cljs.core.truth_(and__25113__auto__)){
return on_cancel__$1;
} else {
return and__25113__auto__;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.backdrop,new cljs.core.Keyword(null,"opacity","opacity",397153780),backdrop_opacity__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_cancel__$1], null):null),new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_border,new cljs.core.Keyword(null,"position","position",-2011731912),position_injected__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),position_offset__$1,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height__$1,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),tooltip_style_QMARK___$1,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),popover_color__$1,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),arrow_length__$1,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),arrow_width__$1,new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),arrow_gap__$1,new cljs.core.Keyword(null,"padding","padding",1660304693),padding__$1,new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(title__$1)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_title,new cljs.core.Keyword(null,"title","title",636505583),title__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_injected_QMARK___$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),close_button_QMARK___$1,new cljs.core.Keyword(null,"close-callback","close-callback",651188974),on_cancel__$1], null):null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null)], null)], null);
};
var G__115205 = function (var_args){
var p__115199 = null;
if (arguments.length > 0) {
var G__115206__i = 0, G__115206__a = new Array(arguments.length -  0);
while (G__115206__i < G__115206__a.length) {G__115206__a[G__115206__i] = arguments[G__115206__i + 0]; ++G__115206__i;}
  p__115199 = new cljs.core.IndexedSeq(G__115206__a,0);
} 
return G__115205__delegate.call(this,p__115199);};
G__115205.cljs$lang$maxFixedArity = 0;
G__115205.cljs$lang$applyTo = (function (arglist__115207){
var p__115199 = cljs.core.seq(arglist__115207);
return G__115205__delegate(p__115199);
});
G__115205.cljs$core$IFn$_invoke$arity$variadic = G__115205__delegate;
return G__115205;
})()
;})(left_offset,top_offset,position_no_clip_popover,map__115197,map__115197__$1,args,body,on_cancel,showing_injected_QMARK_,height,tooltip_style_QMARK_,popover_color,arrow_length,position_offset,backdrop_opacity,position_injected,no_clip_QMARK_,close_button_QMARK_,arrow_width,width,title,style,arrow_gap,padding))
], null));
});

re_com.popover.popover_content_wrapper.cljs$lang$maxFixedArity = (0);

re_com.popover.popover_content_wrapper.cljs$lang$applyTo = (function (seq115195){
return re_com.popover.popover_content_wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq115195));
});

re_com.popover.popover_anchor_wrapper_args_desc = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean atom",new cljs.core.Keyword(null,"description","description",-1428560544),"an atom. When the value is true, the popover shows"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the component the popover is attached to"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the popover body component"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override component style(s) with a style map, only use in case of emergency"], null)], null);
/**
 * Renders an element or control along with a Bootstrap popover
 */
re_com.popover.popover_anchor_wrapper = (function re_com$popover$popover_anchor_wrapper(var_args){
var args__26207__auto__ = [];
var len__26200__auto___115220 = arguments.length;
var i__26201__auto___115221 = (0);
while(true){
if((i__26201__auto___115221 < len__26200__auto___115220)){
args__26207__auto__.push((arguments[i__26201__auto___115221]));

var G__115222 = (i__26201__auto___115221 + (1));
i__26201__auto___115221 = G__115222;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_anchor_wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

re_com.popover.popover_anchor_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (p__115209){
var map__115210 = p__115209;
var map__115210__$1 = ((((!((map__115210 == null)))?((((map__115210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115210):map__115210);
var args = map__115210__$1;
var showing_QMARK_ = cljs.core.get.call(null,map__115210__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var position = cljs.core.get.call(null,map__115210__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var anchor = cljs.core.get.call(null,map__115210__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var popover = cljs.core.get.call(null,map__115210__$1,new cljs.core.Keyword(null,"popover","popover",-1809582136));
var style = cljs.core.get.call(null,map__115210__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_anchor_wrapper_args_desc),args,"popover-anchor-wrapper")))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-anchor-wrapper-args-desc args \"popover-anchor-wrapper\")"));
}

var external_position = reagent.core.atom.call(null,position);
var internal_position = reagent.core.atom.call(null,cljs.core.deref.call(null,external_position));
var reset_on_hide = reagent.ratom.make_reaction.call(null,((function (external_position,internal_position,map__115210,map__115210__$1,args,showing_QMARK_,position,anchor,popover,style){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,showing_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_.call(null,internal_position,cljs.core.deref.call(null,external_position));
}
});})(external_position,internal_position,map__115210,map__115210__$1,args,showing_QMARK_,position,anchor,popover,style))
);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"popover-anchor-wrapper",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (external_position,internal_position,reset_on_hide,map__115210,map__115210__$1,args,showing_QMARK_,position,anchor,popover,style){
return (function() { 
var G__115223__delegate = function (p__115212){
var map__115213 = p__115212;
var map__115213__$1 = ((((!((map__115213 == null)))?((((map__115213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115213):map__115213);
var args__$1 = map__115213__$1;
var showing_QMARK___$1 = cljs.core.get.call(null,map__115213__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var position__$1 = cljs.core.get.call(null,map__115213__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var anchor__$1 = cljs.core.get.call(null,map__115213__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var popover__$1 = cljs.core.get.call(null,map__115213__$1,new cljs.core.Keyword(null,"popover","popover",-1809582136));
var style__$1 = cljs.core.get.call(null,map__115213__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_anchor_wrapper_args_desc),args__$1,"popover-anchor-wrapper")))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-anchor-wrapper-args-desc args \"popover-anchor-wrapper\")"));
}

cljs.core.deref.call(null,reset_on_hide);

if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,external_position),position__$1)){
cljs.core.reset_BANG_.call(null,external_position,position__$1);

cljs.core.reset_BANG_.call(null,internal_position,cljs.core.deref.call(null,external_position));
} else {
}

var vec__115215 = re_com.popover.split_keyword.call(null,cljs.core.deref.call(null,internal_position),"-");
var orientation = cljs.core.nth.call(null,vec__115215,(0),null);
var arrow_pos = cljs.core.nth.call(null,vec__115215,(1),null);
var place_anchor_before_QMARK_ = (function (){var G__115218 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__115218) {
case "left":
return false;

break;
case "above":
return false;

break;
default:
return true;

}
})();
var flex_flow = (function (){var G__115219 = (((orientation instanceof cljs.core.Keyword))?orientation.fqn:null);
switch (G__115219) {
case "left":
return "row";

break;
case "right":
return "row";

break;
default:
return "column";

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-popover-anchor-wrapper display-inline-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"inherit"),style__$1)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-point-wrapper display-inline-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"auto"),re_com.box.flex_flow_style.call(null,flex_flow),re_com.box.align_style.call(null,new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)))], null),(cljs.core.truth_(place_anchor_before_QMARK_)?anchor__$1:null),(cljs.core.truth_(cljs.core.deref.call(null,showing_QMARK___$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-popover-point display-inline-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"auto"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(4)], null))], null),cljs.core.into.call(null,popover__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"showing-injected?","showing-injected?",-105733250),showing_QMARK___$1,new cljs.core.Keyword(null,"position-injected","position-injected",205959080),internal_position], null))], null):null),(cljs.core.truth_(place_anchor_before_QMARK_)?null:anchor__$1)], null)], null);
};
var G__115223 = function (var_args){
var p__115212 = null;
if (arguments.length > 0) {
var G__115226__i = 0, G__115226__a = new Array(arguments.length -  0);
while (G__115226__i < G__115226__a.length) {G__115226__a[G__115226__i] = arguments[G__115226__i + 0]; ++G__115226__i;}
  p__115212 = new cljs.core.IndexedSeq(G__115226__a,0);
} 
return G__115223__delegate.call(this,p__115212);};
G__115223.cljs$lang$maxFixedArity = 0;
G__115223.cljs$lang$applyTo = (function (arglist__115227){
var p__115212 = cljs.core.seq(arglist__115227);
return G__115223__delegate(p__115212);
});
G__115223.cljs$core$IFn$_invoke$arity$variadic = G__115223__delegate;
return G__115223;
})()
;})(external_position,internal_position,reset_on_hide,map__115210,map__115210__$1,args,showing_QMARK_,position,anchor,popover,style))
], null));
});

re_com.popover.popover_anchor_wrapper.cljs$lang$maxFixedArity = (0);

re_com.popover.popover_anchor_wrapper.cljs$lang$applyTo = (function (seq115208){
return re_com.popover.popover_anchor_wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq115208));
});

re_com.popover.popover_tooltip_args_desc = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the text (or component) for the tooltip"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean atom",new cljs.core.Keyword(null,"description","description",-1428560544),"an atom. When the value is true, the tooltip shows"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the popover is cancelled (e.g. user clicks away)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.popover_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"controls background color of the tooltip. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for black or one of ",re_com.validate.popover_status_types_list," (although ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":validating"], null)," is only used by the input-text component)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the component the tooltip is attached to"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. When this parameter is true (which is the default), re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"specifies width of the tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override component style(s) with a style map, only use in case of emergency"], null)], null);
/**
 * Renders text as a tooltip in Bootstrap popover style
 */
re_com.popover.popover_tooltip = (function re_com$popover$popover_tooltip(var_args){
var args__26207__auto__ = [];
var len__26200__auto___115233 = arguments.length;
var i__26201__auto___115234 = (0);
while(true){
if((i__26201__auto___115234 < len__26200__auto___115233)){
args__26207__auto__.push((arguments[i__26201__auto___115234]));

var G__115235 = (i__26201__auto___115234 + (1));
i__26201__auto___115234 = G__115235;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_tooltip.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

re_com.popover.popover_tooltip.cljs$core$IFn$_invoke$arity$variadic = (function (p__115229){
var map__115230 = p__115229;
var map__115230__$1 = ((((!((map__115230 == null)))?((((map__115230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115230):map__115230);
var args = map__115230__$1;
var anchor = cljs.core.get.call(null,map__115230__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var on_cancel = cljs.core.get.call(null,map__115230__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var no_clip_QMARK_ = cljs.core.get.call(null,map__115230__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),true);
var close_button_QMARK_ = cljs.core.get.call(null,map__115230__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var width = cljs.core.get.call(null,map__115230__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var showing_QMARK_ = cljs.core.get.call(null,map__115230__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var style = cljs.core.get.call(null,map__115230__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__115230__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var label = cljs.core.get.call(null,map__115230__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var position = cljs.core.get.call(null,map__115230__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_tooltip_args_desc),args,"popover-tooltip")))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-tooltip-args-desc args \"popover-tooltip\")"));
}

var label__$1 = re_com.util.deref_or_value.call(null,label);
var popover_color = (function (){var G__115232 = (((status instanceof cljs.core.Keyword))?status.fqn:null);
switch (G__115232) {
case "warning":
return "#f57c00";

break;
case "error":
return "#d50000";

break;
case "info":
return "#333333";

break;
case "success":
return "#13C200";

break;
default:
return "black";

}
})();
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_anchor_wrapper,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__25125__auto__ = position;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_content_wrapper,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),no_clip_QMARK_,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),on_cancel,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),true,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),popover_color,new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 8px",new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(6),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(12),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(4),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"info","info",-317069002)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px"], null):new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1,(cljs.core.truth_(close_button_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.close_button,showing_QMARK_,on_cancel,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),"none",new cljs.core.Keyword(null,"right","right",-452581833),"1px"], null)], null):null)], null)], null)], null)], null);
});

re_com.popover.popover_tooltip.cljs$lang$maxFixedArity = (0);

re_com.popover.popover_tooltip.cljs$lang$applyTo = (function (seq115228){
return re_com.popover.popover_tooltip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq115228));
});


//# sourceMappingURL=popover.js.map?rel=1488400163009