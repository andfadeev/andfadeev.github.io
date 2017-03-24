// Compiled by ClojureScript 1.9.229 {}
goog.provide('service_purchase_cljs.view.account');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('re_com.buttons');
goog.require('re_com.util');
goog.require('reagent.core');
service_purchase_cljs.view.account.data_row = (function service_purchase_cljs$view$account$data_row(row,first_QMARK_,last_QMARK_,col_widths,mouse_over,click_msg){
var mouse_over_row_QMARK_ = (cljs.core.deref.call(null,mouse_over) === row);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-div-table-row",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (mouse_over_row_QMARK_){
return (function (event){
cljs.core.reset_BANG_.call(null,mouse_over,row);

return null;
});})(mouse_over_row_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (mouse_over_row_QMARK_){
return (function (event){
cljs.core.reset_BANG_.call(null,mouse_over,null);

return null;
});})(mouse_over_row_QMARK_))
], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(col_widths),new cljs.core.Keyword(null,"gap","gap",80255254),"2px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.row_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi zmdi-arrow-back zmdi-hc-rotate-90",new cljs.core.Keyword(null,"mouse-over-row?","mouse-over-row?",-446703882),mouse_over_row_QMARK_,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Move this line up",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (){var and__25113__auto__ = first_QMARK_;
if(cljs.core.truth_(and__25113__auto__)){
return mouse_over_row_QMARK_;
} else {
return and__25113__auto__;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (mouse_over_row_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,click_msg,[cljs.core.str("move row "),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row)),cljs.core.str(" up")].join(''));
});})(mouse_over_row_QMARK_))
], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.row_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi zmdi-arrow-forward zmdi-hc-rotate-90",new cljs.core.Keyword(null,"mouse-over-row?","mouse-over-row?",-446703882),mouse_over_row_QMARK_,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Move this line down",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (){var and__25113__auto__ = last_QMARK_;
if(cljs.core.truth_(and__25113__auto__)){
return mouse_over_row_QMARK_;
} else {
return and__25113__auto__;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (mouse_over_row_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,click_msg,[cljs.core.str("move row "),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row)),cljs.core.str(" down")].join(''));
});})(mouse_over_row_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col_widths)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(col_widths)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(col_widths)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"2px",new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(col_widths),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.row_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi zmdi-copy",new cljs.core.Keyword(null,"mouse-over-row?","mouse-over-row?",-446703882),mouse_over_row_QMARK_,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Copy this line",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (mouse_over_row_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,click_msg,[cljs.core.str("copy row "),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row))].join(''));
});})(mouse_over_row_QMARK_))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.row_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi zmdi-edit",new cljs.core.Keyword(null,"mouse-over-row?","mouse-over-row?",-446703882),mouse_over_row_QMARK_,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Edit this line",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (mouse_over_row_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,click_msg,[cljs.core.str("edit row "),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row))].join(''));
});})(mouse_over_row_QMARK_))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.row_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi zmdi-delete",new cljs.core.Keyword(null,"mouse-over-row?","mouse-over-row?",-446703882),mouse_over_row_QMARK_,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Delete this line",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (mouse_over_row_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,click_msg,[cljs.core.str("delete row "),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row))].join(''));
});})(mouse_over_row_QMARK_))
], null)], null)], null)], null)], null);
});
service_purchase_cljs.view.account.data_table = (function service_purchase_cljs$view$account$data_table(rows,col_widths){
var large_font = reagent.core.atom.call(null,false);
var mouse_over = reagent.core.atom.call(null,null);
var click_msg = reagent.core.atom.call(null,"");
return ((function (large_font,mouse_over,click_msg){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-div-table",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(cljs.core.truth_(cljs.core.deref.call(null,large_font))?"24px":null)], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-div-table-header",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Sort",new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(col_widths)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Name",new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col_widths)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"From",new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(col_widths)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"To",new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(col_widths)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Actions",new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(col_widths)], null)], null)], null),(function (){var iter__25905__auto__ = ((function (large_font,mouse_over,click_msg){
return (function service_purchase_cljs$view$account$data_table_$_iter__116663(s__116664){
return (new cljs.core.LazySeq(null,((function (large_font,mouse_over,click_msg){
return (function (){
var s__116664__$1 = s__116664;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__116664__$1);
if(temp__4657__auto__){
var s__116664__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__116664__$2)){
var c__25903__auto__ = cljs.core.chunk_first.call(null,s__116664__$2);
var size__25904__auto__ = cljs.core.count.call(null,c__25903__auto__);
var b__116666 = cljs.core.chunk_buffer.call(null,size__25904__auto__);
if((function (){var i__116665 = (0);
while(true){
if((i__116665 < size__25904__auto__)){
var vec__116673 = cljs.core._nth.call(null,c__25903__auto__,i__116665);
var _ = cljs.core.nth.call(null,vec__116673,(0),null);
var row = cljs.core.nth.call(null,vec__116673,(1),null);
var first_QMARK_ = cljs.core.nth.call(null,vec__116673,(2),null);
var last_QMARK_ = cljs.core.nth.call(null,vec__116673,(3),null);
cljs.core.chunk_append.call(null,b__116666,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [service_purchase_cljs.view.account.data_row,row,first_QMARK_,last_QMARK_,col_widths,mouse_over,click_msg], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row)], null)));

var G__116679 = (i__116665 + (1));
i__116665 = G__116679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__116666),service_purchase_cljs$view$account$data_table_$_iter__116663.call(null,cljs.core.chunk_rest.call(null,s__116664__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__116666),null);
}
} else {
var vec__116676 = cljs.core.first.call(null,s__116664__$2);
var _ = cljs.core.nth.call(null,vec__116676,(0),null);
var row = cljs.core.nth.call(null,vec__116676,(1),null);
var first_QMARK_ = cljs.core.nth.call(null,vec__116676,(2),null);
var last_QMARK_ = cljs.core.nth.call(null,vec__116676,(3),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [service_purchase_cljs.view.account.data_row,row,first_QMARK_,last_QMARK_,col_widths,mouse_over,click_msg], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row)], null)),service_purchase_cljs$view$account$data_table_$_iter__116663.call(null,cljs.core.rest.call(null,s__116664__$2)));
}
} else {
return null;
}
break;
}
});})(large_font,mouse_over,click_msg))
,null,null));
});})(large_font,mouse_over,click_msg))
;
return iter__25905__auto__.call(null,re_com.util.enumerate.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals.call(null,rows))));
})()], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"clicked: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),[cljs.core.str(cljs.core.deref.call(null,click_msg))].join('')], null)], null)], null)], null)], null);
});
;})(large_font,mouse_over,click_msg))
});
service_purchase_cljs.view.account.row_button_demo = (function service_purchase_cljs$view$account$row_button_demo(){
var col_widths = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sort","sort",953465918),"2.6em",new cljs.core.Keyword(null,"name","name",1843675177),"7.5em",new cljs.core.Keyword(null,"from","from",1815293044),"4em",new cljs.core.Keyword(null,"to","to",192099007),"4em",new cljs.core.Keyword(null,"actions","actions",-812656882),"4.5em"], null);
var rows = new cljs.core.PersistentArrayMap(null, 3, ["1",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"1",new cljs.core.Keyword(null,"sort","sort",953465918),(0),new cljs.core.Keyword(null,"name","name",1843675177),"Time range 1",new cljs.core.Keyword(null,"from","from",1815293044),"18:00",new cljs.core.Keyword(null,"to","to",192099007),"22:30"], null),"2",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"2",new cljs.core.Keyword(null,"sort","sort",953465918),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Time range 2",new cljs.core.Keyword(null,"from","from",1815293044),"18:00",new cljs.core.Keyword(null,"to","to",192099007),"22:30"], null),"3",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"3",new cljs.core.Keyword(null,"sort","sort",953465918),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Time range 3",new cljs.core.Keyword(null,"from","from",1815293044),"06:00",new cljs.core.Keyword(null,"to","to",192099007),"18:00"], null)], null);
return ((function (col_widths,rows){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"100px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Demo"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [service_purchase_cljs.view.account.data_table,rows,col_widths], null)], null)], null)], null)], null)], null)], null)], null)], null);
});
;})(col_widths,rows))
});
service_purchase_cljs.view.account.panel = (function service_purchase_cljs$view$account$panel(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [service_purchase_cljs.view.account.row_button_demo], null);
});

//# sourceMappingURL=account.js.map?rel=1488400167628