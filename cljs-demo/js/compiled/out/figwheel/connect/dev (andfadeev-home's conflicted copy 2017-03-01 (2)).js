// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('service_purchase_cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__121608__delegate = function (x){
if(cljs.core.truth_(service_purchase_cljs.core.mount_root)){
return cljs.core.apply.call(null,service_purchase_cljs.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'service-purchase-cljs.core/mount-root' is missing");
}
};
var G__121608 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__121609__i = 0, G__121609__a = new Array(arguments.length -  0);
while (G__121609__i < G__121609__a.length) {G__121609__a[G__121609__i] = arguments[G__121609__i + 0]; ++G__121609__i;}
  x = new cljs.core.IndexedSeq(G__121609__a,0);
} 
return G__121608__delegate.call(this,x);};
G__121608.cljs$lang$maxFixedArity = 0;
G__121608.cljs$lang$applyTo = (function (arglist__121610){
var x = cljs.core.seq(arglist__121610);
return G__121608__delegate(x);
});
G__121608.cljs$core$IFn$_invoke$arity$variadic = G__121608__delegate;
return G__121608;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1488400175671