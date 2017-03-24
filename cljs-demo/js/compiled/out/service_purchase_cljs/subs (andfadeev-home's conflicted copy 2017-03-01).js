// Compiled by ClojureScript 1.9.229 {}
goog.provide('service_purchase_cljs.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('service_purchase_cljs.spec');
goog.require('cljs.spec');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"service-title","service-title",-1167135725),(function (db){
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"valid?","valid?",-212412379),cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword("service-purchase-cljs.spec","title","service-purchase-cljs.spec/title",153868010),title)], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"create-acts?","create-acts?",-259280181),(function (db){
return new cljs.core.Keyword(null,"create-acts?","create-acts?",-259280181).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"agreement-id","agreement-id",1592010089),(function (db){
var agreement_id = new cljs.core.Keyword(null,"agreement-id","agreement-id",1592010089).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),agreement_id,new cljs.core.Keyword(null,"valid?","valid?",-212412379),cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword("service-purchase-cljs.spec","agreement-id","service-purchase-cljs.spec/agreement-id",900639864),agreement_id)], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"agreements","agreements",496150773),(function (p1__90972_SHARP_){
return new cljs.core.Keyword(null,"agreements","agreements",496150773).cljs$core$IFn$_invoke$arity$1(p1__90972_SHARP_);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"profarea-ids","profarea-ids",-1770423152),(function (db){
console.log([cljs.core.str("in :profarea-ids: "),cljs.core.str(new cljs.core.Keyword(null,"profarea-ids","profarea-ids",-1770423152).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(db)))].join(''));

return new cljs.core.Keyword(null,"profarea-ids","profarea-ids",-1770423152).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"area-ids","area-ids",-969690481),(function (db){
console.log([cljs.core.str("in :area-ids: "),cljs.core.str(new cljs.core.Keyword(null,"area-ids","area-ids",-969690481).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(db)))].join(''));

return new cljs.core.Keyword(null,"area-ids","area-ids",-969690481).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"all-areas?","all-areas?",-954756028),(function (db){
return new cljs.core.Keyword(null,"all-areas?","all-areas?",-954756028).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"all-profareas?","all-profareas?",867995006),(function (db){
return new cljs.core.Keyword(null,"all-profareas?","all-profareas?",867995006).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"service-type-dict","service-type-dict",1590702498),(function (db){
return new cljs.core.Keyword(null,"service-type-dict","service-type-dict",1590702498).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"profareas-dict","profareas-dict",759863532),(function (db){
return new cljs.core.Keyword(null,"profareas-dict","profareas-dict",759863532).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"areas-dict","areas-dict",783548908),(function (db){
return new cljs.core.Keyword(null,"areas-dict","areas-dict",783548908).cljs$core$IFn$_invoke$arity$1(db);
}));
service_purchase_cljs.subs.find_service_type_by_id = (function service_purchase_cljs$subs$find_service_type_by_id(dictionary,service_type_id){
return cljs.core.some.call(null,(function (p1__90973_SHARP_){
if(cljs.core._EQ_.call(null,service_type_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__90973_SHARP_))){
return p1__90973_SHARP_;
} else {
return null;
}
}),dictionary);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"service-type","service-type",747252382),(function (db){
return service_purchase_cljs.subs.find_service_type_by_id.call(null,new cljs.core.Keyword(null,"service-type-dict","service-type-dict",1590702498).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"service-type-id","service-type-id",-1741206241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"period","period",-352129191),(function (db){
return new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"count","count",2139924085),(function (db){
var v = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"valid?","valid?",-212412379),cljs.core.integer_QMARK_.call(null,v)], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"price","price",22129180),(function (db){
var price = new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"price","price",22129180),price,new cljs.core.Keyword(null,"valid?","valid?",-212412379),cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword("service-purchase-cljs.spec","price","service-purchase-cljs.spec/price",-427936999),price)], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"form-disabled?","form-disabled?",1844867674),(function (db){
return !((new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(db)) == null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"status","status",-1997798413),(function (p1__90974_SHARP_){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(p1__90974_SHARP_));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"service-form","service-form",323909684),(function (p1__90975_SHARP_){
return new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(p1__90975_SHARP_);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (db,_){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"panel-params","panel-params",1099672237),(function (p1__90976_SHARP_){
return new cljs.core.Keyword(null,"panel-params","panel-params",1099672237).cljs$core$IFn$_invoke$arity$1(p1__90976_SHARP_);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"is-valid-form?","is-valid-form?",-2120039844),(function (db,_){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword("service-purchase-cljs.spec","service-form","service-purchase-cljs.spec/service-form",1015673117),new cljs.core.Keyword(null,"service-form","service-form",323909684).cljs$core$IFn$_invoke$arity$1(db));
}));

//# sourceMappingURL=subs.js.map?rel=1488399656840