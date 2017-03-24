// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frisk_shell.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.events');
goog.require('cljs.tools.reader');
goog.require('goog.events.EventType');
goog.require('cljs.js');
goog.require('re_frisk_shell.frisk');
goog.require('clojure.string');
re_frisk_shell.core.frisk_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#FAFAFA",new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Consolas,Monaco,Courier New,monospace",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null);
re_frisk_shell.core.re_frisk_button_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)],["left","#CCCCCC","move","0px","Consolas,Monaco,Courier New,monospace","2rem","6px","inline-block","12px","2px","0px"]);
re_frisk_shell.core.arrow_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)],["center","5px","#CCCCCC","15px","pointer","0px","2rem","3px","inline-block","2px","0px"]);
if(typeof re_frisk_shell.core.draggable !== 'undefined'){
} else {
re_frisk_shell.core.draggable = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof re_frisk_shell.core.ua !== 'undefined'){
} else {
re_frisk_shell.core.ua = window.navigator.userAgent;
}
if(typeof re_frisk_shell.core.ie_QMARK_ !== 'undefined'){
} else {
re_frisk_shell.core.ie_QMARK_ = (function (){var or__25125__auto__ = cljs.core.re_find.call(null,/MSIE /,re_frisk_shell.core.ua);
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
var or__25125__auto____$1 = cljs.core.re_find.call(null,/Trident\//,re_frisk_shell.core.ua);
if(cljs.core.truth_(or__25125__auto____$1)){
return or__25125__auto____$1;
} else {
return cljs.core.re_find.call(null,/Edge\//,re_frisk_shell.core.ua);
}
}
})();
}
re_frisk_shell.core.get_client_rect = (function re_frisk_shell$core$get_client_rect(evt){
var r = evt.target.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"top","top",-1856271961),r.top], null);
});
re_frisk_shell.core.mouse_move_handler = (function re_frisk_shell$core$mouse_move_handler(offset){
return (function (evt){
var x = (evt.clientX - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset));
var y = (evt.clientY - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset));
return cljs.core.reset_BANG_.call(null,re_frisk_shell.core.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
});
});
re_frisk_shell.core.mouse_up_handler = (function re_frisk_shell$core$mouse_up_handler(on_move){
return (function re_frisk_shell$core$mouse_up_handler_$_me(evt){
return goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,on_move);
});
});
re_frisk_shell.core.mouse_down_handler = (function re_frisk_shell$core$mouse_down_handler(e){
var map__30526 = re_frisk_shell.core.get_client_rect.call(null,e);
var map__30526__$1 = ((((!((map__30526 == null)))?((((map__30526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30526):map__30526);
var left = cljs.core.get.call(null,map__30526__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__30526__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = re_frisk_shell.core.mouse_move_handler.call(null,offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,re_frisk_shell.core.mouse_up_handler.call(null,on_move));
});
re_frisk_shell.core.visibility_button = (function re_frisk_shell$core$visibility_button(visible_QMARK_,update_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"transparent",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"height","height",1025178622),"10px"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),update_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.2s ease",new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(visible_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"0,0 0,100 100,50",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null)], null)], null);
});
re_frisk_shell.core.re_frisk_panel = (function re_frisk_shell$core$re_frisk_panel(var_args){
var args__26207__auto__ = [];
var len__26200__auto___30531 = arguments.length;
var i__26201__auto___30532 = (0);
while(true){
if((i__26201__auto___30532 < len__26200__auto___30531)){
args__26207__auto__.push((arguments[i__26201__auto___30532]));

var G__30533 = (i__26201__auto___30532 + (1));
i__26201__auto___30532 = G__30533;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return re_frisk_shell.core.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

re_frisk_shell.core.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var expand_by_default = cljs.core.reduce.call(null,(function (p1__30528_SHARP_,p2__30529_SHARP_){
return cljs.core.assoc_in.call(null,p1__30528_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),p2__30529_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.EMPTY], true));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,cljs.core.count.call(null,data)));
var state_atom = reagent.core.atom.call(null,expand_by_default);
return ((function (expand_by_default,state_atom){
return (function() { 
var G__30534__delegate = function (data__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.call(null,((function (expand_by_default,state_atom){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
});})(expand_by_default,state_atom))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data__$1], null))], null);
};
var G__30534 = function (var_args){
var data__$1 = null;
if (arguments.length > 0) {
var G__30535__i = 0, G__30535__a = new Array(arguments.length -  0);
while (G__30535__i < G__30535__a.length) {G__30535__a[G__30535__i] = arguments[G__30535__i + 0]; ++G__30535__i;}
  data__$1 = new cljs.core.IndexedSeq(G__30535__a,0);
} 
return G__30534__delegate.call(this,data__$1);};
G__30534.cljs$lang$maxFixedArity = 0;
G__30534.cljs$lang$applyTo = (function (arglist__30536){
var data__$1 = cljs.core.seq(arglist__30536);
return G__30534__delegate(data__$1);
});
G__30534.cljs$core$IFn$_invoke$arity$variadic = G__30534__delegate;
return G__30534;
})()
;
;})(expand_by_default,state_atom))
});

re_frisk_shell.core.re_frisk_panel.cljs$lang$maxFixedArity = (0);

re_frisk_shell.core.re_frisk_panel.cljs$lang$applyTo = (function (seq30530){
return re_frisk_shell.core.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30530));
});

re_frisk_shell.core.re_frisk_shell = (function re_frisk_shell$core$re_frisk_shell(data,deb_data,p__30537){
var map__30540 = p__30537;
var map__30540__$1 = ((((!((map__30540 == null)))?((((map__30540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30540):map__30540);
var on_click = cljs.core.get.call(null,map__30540__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var x = cljs.core.get.call(null,map__30540__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__30540__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__30540__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__30540__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var style = cljs.core.merge.call(null,re_frisk_shell.core.frisk_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"resize","resize",297367086),"both",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"height","height",1025178622),"200px"], null));
var height__$1 = (cljs.core.truth_((function (){var and__25113__auto__ = re_frisk_shell.core.ie_QMARK_;
if(cljs.core.truth_(and__25113__auto__)){
return cljs.core.not.call(null,height);
} else {
return and__25113__auto__;
}
})())?(200):height);
var style__$1 = cljs.core.merge.call(null,style,(cljs.core.truth_(height__$1)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),height__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804),height__$1,new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null):null));
var style__$2 = cljs.core.merge.call(null,style__$1,(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),width,new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null):null));
if(cljs.core.truth_(x)){
cljs.core.swap_BANG_.call(null,re_frisk_shell.core.draggable,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),x);
} else {
}

if(cljs.core.truth_(y)){
cljs.core.swap_BANG_.call(null,re_frisk_shell.core.draggable,cljs.core.assoc,new cljs.core.Keyword(null,"y","y",-1757859776),y);
} else {
}

return ((function (style,height__$1,style__$1,style__$2,map__30540,map__30540__$1,on_click,x,y,width,height){
return (function (data__$1,deb_data__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"deb-win-closed?","deb-win-closed?",-1950516132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deb_data__$1)))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk_shell.core.draggable))),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk_shell.core.draggable))),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(999)], null),(cljs.core.truth_((function (){var or__25125__auto__ = re_frisk_shell.core.ie_QMARK_;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk_shell.core.draggable)));
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0px",new cljs.core.Keyword(null,"right","right",-452581833),"20px"], null):null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),re_frisk_shell.core.re_frisk_button_style,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),re_frisk_shell.core.mouse_down_handler], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.core.visibility_button,new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deb_data__$1))),((function (style,height__$1,style__$1,style__$2,map__30540,map__30540__$1,on_click,x,y,width,height){
return (function (_){
return cljs.core.swap_BANG_.call(null,deb_data__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),cljs.core.not.call(null,new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deb_data__$1)))));
});})(style,height__$1,style__$1,style__$2,map__30540,map__30540__$1,on_click,x,y,width,height))
], null),"re-frisk"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),re_frisk_shell.core.arrow_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),"\u2197"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deb_data__$1))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style__$2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.core.re_frisk_panel,cljs.core.deref.call(null,data__$1)], null)], null):null)], null);
} else {
return null;
}
});
;})(style,height__$1,style__$1,style__$2,map__30540,map__30540__$1,on_click,x,y,width,height))
});
re_frisk_shell.core.debugger_messages = (function re_frisk_shell$core$debugger_messages(re_frame_events,deb_data){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"debugger-messages",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var n = reagent.core.dom_node.call(null,this$);
if(cljs.core.truth_(new cljs.core.Keyword(null,"scroll-bottom?","scroll-bottom?",-1686598134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deb_data)))){
return n.scrollTop = n.scrollHeight;
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var clrs = new cljs.core.Keyword(null,"evnt-colors","evnt-colors",582185154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deb_data));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.debugger-sidebar-messages","div.debugger-sidebar-messages",-2133802263),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),((function (clrs){
return (function (p1__30542_SHARP_){
var t = p1__30542_SHARP_.target;
return cljs.core.swap_BANG_.call(null,deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-bottom?","scroll-bottom?",-1686598134),cljs.core._EQ_.call(null,t.scrollTop,(t.scrollHeight - t.offsetHeight)));
});})(clrs))
], null),cljs.core.map_indexed.call(null,((function (clrs){
return (function (id,item){
var event = cljs.core.first.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(item):item));
var fx_QMARK_ = cljs.core.boolean$.call(null,cljs.core.re_find.call(null,/-fx/,[cljs.core.str(event)].join('')));
var db_QMARK_ = cljs.core.boolean$.call(null,cljs.core.re_find.call(null,/-db/,[cljs.core.str(event)].join('')));
var clr = event.call(null,clrs);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.messages-entry","div.messages-entry",1135066673),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (event,fx_QMARK_,db_QMARK_,clr,clrs){
return (function (){
return cljs.core.swap_BANG_.call(null,deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"event-data","event-data",-1726012139),item);
});})(event,fx_QMARK_,db_QMARK_,clr,clrs))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(clr)?clr:((fx_QMARK_)?"#FF0000":((db_QMARK_)?"#00FF00":"#3d3d3d"
))),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5,new cljs.core.Keyword(null,"width","width",-384071477),"15px",new cljs.core.Keyword(null,"height","height",1025178622),"15px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"4px"], null)], null),((fx_QMARK_)?"fx":((db_QMARK_)?"db":"  "
))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.messages-entry-content","span.messages-entry-content",-1610061970),[cljs.core.str(event)].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
});})(clrs))
,cljs.core.deref.call(null,re_frame_events))], null);
})], null));
});
re_frisk_shell.core.event_bar = (function re_frisk_shell$core$event_bar(deb_data){
var evnt_key = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.first.call(null,(function (){var or__25125__auto__ = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"event-data","event-data",-1726012139).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deb_data)));
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return new cljs.core.Keyword(null,"event-data","event-data",-1726012139).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deb_data));
}
})());
}));
var clr = reagent.ratom.make_reaction.call(null,((function (evnt_key){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,evnt_key))){
return cljs.core.deref.call(null,evnt_key).call(null,new cljs.core.Keyword(null,"evnt-colors","evnt-colors",582185154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deb_data)));
} else {
return "";
}
});})(evnt_key))
);
return ((function (evnt_key,clr){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#3d3d3d",new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Event"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"50px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"#000000",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,clr),new cljs.core.Keyword(null,"max-length","max-length",-254826109),"7",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (evnt_key,clr){
return (function (p1__30543_SHARP_){
return cljs.core.swap_BANG_.call(null,deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evnt-colors","evnt-colors",582185154),cljs.core.deref.call(null,evnt_key)], null),p1__30543_SHARP_.target.value);
});})(evnt_key,clr))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),"0px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (evnt_key,clr){
return (function (){
return cljs.core.swap_BANG_.call(null,deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"event-data","event-data",-1726012139),null);
});})(evnt_key,clr))
], null),"X"], null)], null);
});
;})(evnt_key,clr))
});
re_frisk_shell.core.eval_str = (function re_frisk_shell$core$eval_str(s){
return cljs.js.eval.call(null,cljs.js.empty_state.call(null),cljs.tools.reader.read_string.call(null,s),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),(function (result){
return result;
}));
});
re_frisk_shell.core.filter_event = (function re_frisk_shell$core$filter_event(text){
return (function (item){
var name = clojure.string.lower_case.call(null,cljs.core.name.call(null,cljs.core.first.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(item):item))));
var text__$1 = clojure.string.lower_case.call(null,text);
return cljs.core.not_EQ_.call(null,clojure.string.index_of.call(null,name,text__$1),null);
});
});
re_frisk_shell.core.debugger_shell = (function re_frisk_shell$core$debugger_shell(var_args){
var args__26207__auto__ = [];
var len__26200__auto___30558 = arguments.length;
var i__26201__auto___30559 = (0);
while(true){
if((i__26201__auto___30559 < len__26200__auto___30558)){
args__26207__auto__.push((arguments[i__26201__auto___30559]));

var G__30560 = (i__26201__auto___30559 + (1));
i__26201__auto___30559 = G__30560;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((3) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((3)),(0),null)):null);
return re_frisk_shell.core.debugger_shell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26208__auto__);
});

re_frisk_shell.core.debugger_shell.cljs$core$IFn$_invoke$arity$variadic = (function (re_frame_data,re_frame_events,deb_data,p__30554){
var vec__30555 = p__30554;
var imp_hndl = cljs.core.nth.call(null,vec__30555,(0),null);
var exp_hndl = cljs.core.nth.call(null,vec__30555,(1),null);
var expand_by_default = cljs.core.reduce.call(null,((function (vec__30555,imp_hndl,exp_hndl){
return (function (p1__30544_SHARP_,p2__30545_SHARP_){
return cljs.core.assoc_in.call(null,p1__30544_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),p2__30545_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.EMPTY], true));
});})(vec__30555,imp_hndl,exp_hndl))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,(1)));
var expand_by_default2 = cljs.core.reduce.call(null,((function (expand_by_default,vec__30555,imp_hndl,exp_hndl){
return (function (p1__30546_SHARP_,p2__30547_SHARP_){
return cljs.core.assoc_in.call(null,p1__30546_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),p2__30547_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.EMPTY], true));
});})(expand_by_default,vec__30555,imp_hndl,exp_hndl))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,(1)));
var state_atom = reagent.core.atom.call(null,expand_by_default);
var state_atom2 = reagent.core.atom.call(null,expand_by_default2);
var input_text = reagent.core.atom.call(null,"");
var filtered_events = reagent.ratom.make_reaction.call(null,((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,vec__30555,imp_hndl,exp_hndl){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,input_text),"")){
return cljs.core.deref.call(null,re_frame_events);
} else {
return cljs.core.filter.call(null,re_frisk_shell.core.filter_event.call(null,cljs.core.deref.call(null,input_text)),cljs.core.deref.call(null,re_frame_events));
}
});})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,vec__30555,imp_hndl,exp_hndl))
);
var cljs_text = reagent.core.atom.call(null,"");
var input_cljs_text = reagent.core.atom.call(null,"");
var _ = cljs.core.swap_BANG_.call(null,re_frame_data,cljs.core.assoc,new cljs.core.Keyword(null,"filter","filter",-948537934),reagent.ratom.make_reaction.call(null,((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,vec__30555,imp_hndl,exp_hndl){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cljs_text),"")){
return "empty";
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(re_frisk_shell.core.eval_str.call(null,cljs.core.deref.call(null,cljs_text))).call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame_data))));
}
});})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,vec__30555,imp_hndl,exp_hndl))
));
return ((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__30555,imp_hndl,exp_hndl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#debugger","div#debugger",797000977),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.debugger-sidebar","div.debugger-sidebar",-622219837),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"events filter",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__30555,imp_hndl,exp_hndl){
return (function (p1__30548_SHARP_){
return cljs.core.reset_BANG_.call(null,input_text,p1__30548_SHARP_.target.value);
});})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__30555,imp_hndl,exp_hndl))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.core.debugger_messages,filtered_events,deb_data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.debugger-sidebar-controls","div.debugger-sidebar-controls",-1091565730),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.debugger-sidebar-controls-import-export","div.debugger-sidebar-controls-import-export",-1556067220),(cljs.core.truth_(imp_hndl)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),imp_hndl], null),"Import"], null)," / ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),exp_hndl], null),"Export"], null)," / "], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__30555,imp_hndl,exp_hndl){
return (function (){
return cljs.core.reset_BANG_.call(null,re_frame_events,cljs.core.PersistentVector.EMPTY);
});})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__30555,imp_hndl,exp_hndl))
], null),"Clear"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#values","div#values",987346679),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fafafa"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"height","height",1025178622),"40px"], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),":value or (fn [app-db] {:value (:value app-db)}) or #(hash-map :value (:value %))",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__30555,imp_hndl,exp_hndl){
return (function (p1__30549_SHARP_){
return cljs.core.reset_BANG_.call(null,input_cljs_text,p1__30549_SHARP_.target.value);
});})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__30555,imp_hndl,exp_hndl))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"5px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#3d3d3d",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__30555,imp_hndl,exp_hndl){
return (function (){
return cljs.core.reset_BANG_.call(null,cljs_text,cljs.core.deref.call(null,input_cljs_text));
});})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__30555,imp_hndl,exp_hndl))
], null),"run"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_frisk_shell.core.frisk_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(new cljs.core.Keyword(null,"event-data","event-data",-1726012139).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deb_data)))?"calc(100% - 296px)":"calc(100% - 46px)")], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.call(null,((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__30555,imp_hndl,exp_hndl){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
});})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__30555,imp_hndl,exp_hndl))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,re_frame_data)], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_frisk_shell.core.frisk_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"250",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(new cljs.core.Keyword(null,"event-data","event-data",-1726012139).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deb_data)))?"block":"none")], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.core.event_bar,deb_data], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),cljs.core.map_indexed.call(null,((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__30555,imp_hndl,exp_hndl){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,x,id,state_atom2], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
});})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__30555,imp_hndl,exp_hndl))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-data","event-data",-1726012139).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deb_data))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"20px"], null)], null)], null)], null)], null)], null)], null);
});
;})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__30555,imp_hndl,exp_hndl))
});

re_frisk_shell.core.debugger_shell.cljs$lang$maxFixedArity = (3);

re_frisk_shell.core.debugger_shell.cljs$lang$applyTo = (function (seq30550){
var G__30551 = cljs.core.first.call(null,seq30550);
var seq30550__$1 = cljs.core.next.call(null,seq30550);
var G__30552 = cljs.core.first.call(null,seq30550__$1);
var seq30550__$2 = cljs.core.next.call(null,seq30550__$1);
var G__30553 = cljs.core.first.call(null,seq30550__$2);
var seq30550__$3 = cljs.core.next.call(null,seq30550__$2);
return re_frisk_shell.core.debugger_shell.cljs$core$IFn$_invoke$arity$variadic(G__30551,G__30552,G__30553,seq30550__$3);
});

re_frisk_shell.core.reagent_debugger_shell = (function re_frisk_shell$core$reagent_debugger_shell(re_frame_data){
var expand_by_default = cljs.core.reduce.call(null,(function (p1__30561_SHARP_,p2__30562_SHARP_){
return cljs.core.assoc_in.call(null,p1__30561_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),p2__30562_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.EMPTY], true));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,(1)));
var state_atom = reagent.core.atom.call(null,expand_by_default);
return ((function (expand_by_default,state_atom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),re_frisk_shell.core.frisk_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.call(null,((function (expand_by_default,state_atom){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
});})(expand_by_default,state_atom))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,re_frame_data)], null))], null)], null);
});
;})(expand_by_default,state_atom))
});
re_frisk_shell.core.debugger_page = "<!DOCTYPE html>\n  <html>\n\n    <head>\n\n      <title>re-frisk debugger</title>\n      <meta charset=\"UTF-8\">\n\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n    </head>\n\n    <body style=\"margin:0px;padding:0px\">\n\n      <script>var saveAs=saveAs||function(e){\"use strict\";if(typeof e===\"undefined\"||typeof navigator!==\"undefined\"&&/MSIE [1-9]\\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS(\"http://www.w3.org/1999/xhtml\",\"a\"),o=\"download\"in r,a=function(e){var t=new MouseEvent(\"click\");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\\/[\\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s=\"application/octet-stream\",d=1e3*40,c=function(e){var t=function(){if(typeof e===\"string\"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e[\"on\"+t[r]];if(typeof o===\"function\"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\\s*(?:text\\/\\S*|application\\/xml|\\S*\\/\\S*\\+xml)\\s*;.*charset\\s*=\\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,\"writestart progress write writeend\".split(\" \"))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,\"data:attachment/file;\");var n=e.open(t,\"_blank\");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,\"_blank\");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||\"download\",n)};if(typeof navigator!==\"undefined\"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||\"download\";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!==\"undefined\"&&self||typeof window!==\"undefined\"&&window||this.content);if(typeof module!==\"undefined\"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!==\"undefined\"&&define!==null&&define.amd!==null){define(\"FileSaver.js\",function(){return saveAs})}</script>\n      <style>\n\nhtml {\n    overflow: hidden;\n    height: 100%;\n}\n\nbody {\n    height: 100%;\n    overflow: auto;\n}\n\n#debugger {\n  width: 100%;\n  height: 100%;\n  font-family: monospace;\n}\n\n#values {\n  display: block;\n  float: left;\n  height: 100%;\n  width: calc(100% - 30ch);\n  margin: 0;\n  overflow: auto;\n  cursor: default;\n}\n\n.debugger-sidebar {\n  display: block;\n  float: left;\n  width: 30ch;\n  height: 100%;\n  color: white;\n  background-color: rgb(61, 61, 61);\n}\n\n.debugger-sidebar-controls {\n  width: 100%;\n  text-align: center;\n  background-color: rgb(50, 50, 50);\n}\n\n.debugger-sidebar-controls-import-export {\n  width: 100%;\n  height: 24px;\n  line-height: 24px;\n  font-size: 12px;\n}\n\n.debugger-sidebar-controls-resume {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  cursor: pointer;\n}\n\n.debugger-sidebar-controls-resume:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.debugger-sidebar-messages {\n  width: 100%;\n  overflow-y: auto;\n  height: calc(100% - 44px);\n}\n\n.debugger-sidebar-messages-paused {\n  width: 100%;\n  overflow-y: auto;\n  height: calc(100% - 54px);\n}\n\n.messages-entry {\n  cursor: pointer;\n  width: 100%;\n}\n\n.messages-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.messages-entry-selected, .messages-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.messages-entry-content {\n  width: 23ch;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 1ch;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.messages-entry-index {\n  color: #666;\n  width: 5ch;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-right: 1ch;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n</style>\n      <div id=\"app\" style=\"height:100%;width:100%\">\n\n        <h2>re-frisk debugger</h2>\n\n        <p>ENJOY!</p>\n\n      </div>\n\n    </body>\n\n  </html>";

//# sourceMappingURL=core.js.map?rel=1490344428588