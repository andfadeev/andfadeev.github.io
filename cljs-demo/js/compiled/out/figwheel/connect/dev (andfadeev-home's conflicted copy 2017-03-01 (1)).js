// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('service_purchase_cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__91018__delegate = function (x){
if(cljs.core.truth_(service_purchase_cljs.core.mount_root)){
return cljs.core.apply.call(null,service_purchase_cljs.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'service-purchase-cljs.core/mount-root' is missing");
}
};
var G__91018 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__91019__i = 0, G__91019__a = new Array(arguments.length -  0);
while (G__91019__i < G__91019__a.length) {G__91019__a[G__91019__i] = arguments[G__91019__i + 0]; ++G__91019__i;}
  x = new cljs.core.IndexedSeq(G__91019__a,0);
} 
return G__91018__delegate.call(this,x);};
G__91018.cljs$lang$maxFixedArity = 0;
G__91018.cljs$lang$applyTo = (function (arglist__91020){
var x = cljs.core.seq(arglist__91020);
return G__91018__delegate(x);
});
G__91018.cljs$core$IFn$_invoke$arity$variadic = G__91018__delegate;
return G__91018;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1488399656927