// Compiled by ClojureScript 1.9.229 {}
goog.provide('service_purchase_cljs.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('service_purchase_cljs.db');
service_purchase_cljs.events.as_int = (function service_purchase_cljs$events$as_int(s){
var i = parseInt(s);
if(cljs.core.truth_(isNaN(i))){
return s;
} else {
return i;
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return service_purchase_cljs.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__62589){
var vec__62590 = p__62589;
var _ = cljs.core.nth.call(null,vec__62590,(0),null);
var active_panel = cljs.core.nth.call(null,vec__62590,(1),null);
var params = cljs.core.nth.call(null,vec__62590,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel),new cljs.core.Keyword(null,"panel-params","panel-params",1099672237),params);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-service-title","update-service-title",851822486),(function (db,p__62593){
var vec__62594 = p__62593;
var _ = cljs.core.nth.call(null,vec__62594,(0),null);
var title = cljs.core.nth.call(null,vec__62594,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"title","title",636505583)], null),title);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-create-acts?","update-create-acts?",1844870237),(function (db,p__62597){
var vec__62598 = p__62597;
var _ = cljs.core.nth.call(null,vec__62598,(0),null);
var create_acts_QMARK_ = cljs.core.nth.call(null,vec__62598,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"create-acts?","create-acts?",-259280181)], null),create_acts_QMARK_);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-agreement-id","update-agreement-id",-2084365756),(function (db,p__62601){
var vec__62602 = p__62601;
var _ = cljs.core.nth.call(null,vec__62602,(0),null);
var agreement_id = cljs.core.nth.call(null,vec__62602,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"agreement-id","agreement-id",1592010089)], null),agreement_id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-profarea-ids","update-profarea-ids",-1399770775),(function (db,p__62605){
var vec__62606 = p__62605;
var _ = cljs.core.nth.call(null,vec__62606,(0),null);
var profarea_ids = cljs.core.nth.call(null,vec__62606,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"profarea-ids","profarea-ids",-1770423152)], null),profarea_ids);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-area-ids","update-area-ids",1107006065),(function (db,p__62609){
var vec__62610 = p__62609;
var _ = cljs.core.nth.call(null,vec__62610,(0),null);
var area_ids = cljs.core.nth.call(null,vec__62610,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"area-ids","area-ids",-969690481)], null),area_ids);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"clear-service-params","clear-service-params",297288297),(function (db,p__62613){
var vec__62614 = p__62613;
var _ = cljs.core.nth.call(null,vec__62614,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__62614,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"params","params",710516235)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"price","price",22129180),(0),new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"period","period",-352129191),(0)], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"update-service-type-id","update-service-type-id",-1413857396),(function (cofx,p__62617){
var vec__62618 = p__62617;
var _ = cljs.core.nth.call(null,vec__62618,(0),null);
var service_type_id = cljs.core.nth.call(null,vec__62618,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"service-type-id","service-type-id",-1741206241)], null),service_type_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-service-params","clear-service-params",297288297)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-service-period","update-service-period",978436817),(function (db,p__62621){
var vec__62622 = p__62621;
var _ = cljs.core.nth.call(null,vec__62622,(0),null);
var period = cljs.core.nth.call(null,vec__62622,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"period","period",-352129191)], null),period);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-service-price","update-service-price",1683386644),(function (db,p__62625){
var vec__62626 = p__62625;
var _ = cljs.core.nth.call(null,vec__62626,(0),null);
var price = cljs.core.nth.call(null,vec__62626,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"price","price",22129180)], null),service_purchase_cljs.events.as_int.call(null,price));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-service-count","update-service-count",-968036413),(function (db,p__62629){
var vec__62630 = p__62629;
var _ = cljs.core.nth.call(null,vec__62630,(0),null);
var count = cljs.core.nth.call(null,vec__62630,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"count","count",2139924085)], null),service_purchase_cljs.events.as_int.call(null,count));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"purchase-service","purchase-service",-1310797370),(function (cofx,p__62633){
var vec__62634 = p__62633;
var _ = cljs.core.nth.call(null,vec__62634,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(3000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-success-purchase","on-success-purchase",872941089)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"on-success-purchase","on-success-purchase",872941089),(function (db,_){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"done","done",-889844188));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-all-profareas","select-all-profareas",838897705),(function (db,_){
var profarea_ids = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"profareas-dict","profareas-dict",759863532).cljs$core$IFn$_invoke$arity$1(db)));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"profarea-ids","profarea-ids",-1770423152)], null),profarea_ids);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-all-areas","select-all-areas",1908770056),(function (db,_){
var area_ids = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"areas-dict","areas-dict",783548908).cljs$core$IFn$_invoke$arity$1(db)));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"area-ids","area-ids",-969690481)], null),area_ids);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"unselect-all-areas","unselect-all-areas",-1799555241),(function (db,_){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"area-ids","area-ids",-969690481)], null),cljs.core.PersistentHashSet.EMPTY);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"clear-all-profareas","clear-all-profareas",-1557648280),(function (db,_){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"profarea-ids","profarea-ids",-1770423152)], null),cljs.core.PersistentHashSet.EMPTY);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-all-areas?","update-all-areas?",1063882184),(function (db,p__62637){
var vec__62638 = p__62637;
var _ = cljs.core.nth.call(null,vec__62638,(0),null);
var all_areas_QMARK_ = cljs.core.nth.call(null,vec__62638,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"all-areas?","all-areas?",-954756028)], null),all_areas_QMARK_);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-all-profareas?","update-all-profareas?",-652438721),(function (db,p__62641){
var vec__62642 = p__62641;
var _ = cljs.core.nth.call(null,vec__62642,(0),null);
var all_profareas_QMARK_ = cljs.core.nth.call(null,vec__62642,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"service-form","service-form",323909684),new cljs.core.Keyword(null,"all-profareas?","all-profareas?",867995006)], null),all_profareas_QMARK_);
}));

//# sourceMappingURL=events.js.map?rel=1488396744388