// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('service_purchase_cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__33997__delegate = function (x){
if(cljs.core.truth_(service_purchase_cljs.core.mount_root)){
return cljs.core.apply.call(null,service_purchase_cljs.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'service-purchase-cljs.core/mount-root' is missing");
}
};
var G__33997 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__33998__i = 0, G__33998__a = new Array(arguments.length -  0);
while (G__33998__i < G__33998__a.length) {G__33998__a[G__33998__i] = arguments[G__33998__i + 0]; ++G__33998__i;}
  x = new cljs.core.IndexedSeq(G__33998__a,0);
} 
return G__33997__delegate.call(this,x);};
G__33997.cljs$lang$maxFixedArity = 0;
G__33997.cljs$lang$applyTo = (function (arglist__33999){
var x = cljs.core.seq(arglist__33999);
return G__33997__delegate(x);
});
G__33997.cljs$core$IFn$_invoke$arity$variadic = G__33997__delegate;
return G__33997;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1490346857232