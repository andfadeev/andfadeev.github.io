// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args83254 = [];
var len__26200__auto___83257 = arguments.length;
var i__26201__auto___83258 = (0);
while(true){
if((i__26201__auto___83258 < len__26200__auto___83257)){
args83254.push((arguments[i__26201__auto___83258]));

var G__83259 = (i__26201__auto___83258 + (1));
i__26201__auto___83258 = G__83259;
continue;
} else {
}
break;
}

var G__83256 = args83254.length;
switch (G__83256) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83254.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26207__auto__ = [];
var len__26200__auto___83262 = arguments.length;
var i__26201__auto___83263 = (0);
while(true){
if((i__26201__auto___83263 < len__26200__auto___83262)){
args__26207__auto__.push((arguments[i__26201__auto___83263]));

var G__83264 = (i__26201__auto___83263 + (1));
i__26201__auto___83263 = G__83264;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq83261){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83261));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26207__auto__ = [];
var len__26200__auto___83266 = arguments.length;
var i__26201__auto___83267 = (0);
while(true){
if((i__26201__auto___83267 < len__26200__auto___83266)){
args__26207__auto__.push((arguments[i__26201__auto___83267]));

var G__83268 = (i__26201__auto___83267 + (1));
i__26201__auto___83267 = G__83268;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq83265){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83265));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__83269){
var map__83272 = p__83269;
var map__83272__$1 = ((((!((map__83272 == null)))?((((map__83272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83272):map__83272);
var message = cljs.core.get.call(null,map__83272__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__83272__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25125__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25113__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25113__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25113__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28337__auto___83434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___83434,ch){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___83434,ch){
return (function (state_83403){
var state_val_83404 = (state_83403[(1)]);
if((state_val_83404 === (7))){
var inst_83399 = (state_83403[(2)]);
var state_83403__$1 = state_83403;
var statearr_83405_83435 = state_83403__$1;
(statearr_83405_83435[(2)] = inst_83399);

(statearr_83405_83435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83404 === (1))){
var state_83403__$1 = state_83403;
var statearr_83406_83436 = state_83403__$1;
(statearr_83406_83436[(2)] = null);

(statearr_83406_83436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83404 === (4))){
var inst_83356 = (state_83403[(7)]);
var inst_83356__$1 = (state_83403[(2)]);
var state_83403__$1 = (function (){var statearr_83407 = state_83403;
(statearr_83407[(7)] = inst_83356__$1);

return statearr_83407;
})();
if(cljs.core.truth_(inst_83356__$1)){
var statearr_83408_83437 = state_83403__$1;
(statearr_83408_83437[(1)] = (5));

} else {
var statearr_83409_83438 = state_83403__$1;
(statearr_83409_83438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83404 === (15))){
var inst_83363 = (state_83403[(8)]);
var inst_83378 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_83363);
var inst_83379 = cljs.core.first.call(null,inst_83378);
var inst_83380 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_83379);
var inst_83381 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_83380)].join('');
var inst_83382 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_83381);
var state_83403__$1 = state_83403;
var statearr_83410_83439 = state_83403__$1;
(statearr_83410_83439[(2)] = inst_83382);

(statearr_83410_83439[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83404 === (13))){
var inst_83387 = (state_83403[(2)]);
var state_83403__$1 = state_83403;
var statearr_83411_83440 = state_83403__$1;
(statearr_83411_83440[(2)] = inst_83387);

(statearr_83411_83440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83404 === (6))){
var state_83403__$1 = state_83403;
var statearr_83412_83441 = state_83403__$1;
(statearr_83412_83441[(2)] = null);

(statearr_83412_83441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83404 === (17))){
var inst_83385 = (state_83403[(2)]);
var state_83403__$1 = state_83403;
var statearr_83413_83442 = state_83403__$1;
(statearr_83413_83442[(2)] = inst_83385);

(statearr_83413_83442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83404 === (3))){
var inst_83401 = (state_83403[(2)]);
var state_83403__$1 = state_83403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83403__$1,inst_83401);
} else {
if((state_val_83404 === (12))){
var inst_83362 = (state_83403[(9)]);
var inst_83376 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_83362,opts);
var state_83403__$1 = state_83403;
if(cljs.core.truth_(inst_83376)){
var statearr_83414_83443 = state_83403__$1;
(statearr_83414_83443[(1)] = (15));

} else {
var statearr_83415_83444 = state_83403__$1;
(statearr_83415_83444[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83404 === (2))){
var state_83403__$1 = state_83403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83403__$1,(4),ch);
} else {
if((state_val_83404 === (11))){
var inst_83363 = (state_83403[(8)]);
var inst_83368 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_83369 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_83363);
var inst_83370 = cljs.core.async.timeout.call(null,(1000));
var inst_83371 = [inst_83369,inst_83370];
var inst_83372 = (new cljs.core.PersistentVector(null,2,(5),inst_83368,inst_83371,null));
var state_83403__$1 = state_83403;
return cljs.core.async.ioc_alts_BANG_.call(null,state_83403__$1,(14),inst_83372);
} else {
if((state_val_83404 === (9))){
var inst_83363 = (state_83403[(8)]);
var inst_83389 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_83390 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_83363);
var inst_83391 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_83390);
var inst_83392 = [cljs.core.str("Not loading: "),cljs.core.str(inst_83391)].join('');
var inst_83393 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_83392);
var state_83403__$1 = (function (){var statearr_83416 = state_83403;
(statearr_83416[(10)] = inst_83389);

return statearr_83416;
})();
var statearr_83417_83445 = state_83403__$1;
(statearr_83417_83445[(2)] = inst_83393);

(statearr_83417_83445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83404 === (5))){
var inst_83356 = (state_83403[(7)]);
var inst_83358 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_83359 = (new cljs.core.PersistentArrayMap(null,2,inst_83358,null));
var inst_83360 = (new cljs.core.PersistentHashSet(null,inst_83359,null));
var inst_83361 = figwheel.client.focus_msgs.call(null,inst_83360,inst_83356);
var inst_83362 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_83361);
var inst_83363 = cljs.core.first.call(null,inst_83361);
var inst_83364 = figwheel.client.autoload_QMARK_.call(null);
var state_83403__$1 = (function (){var statearr_83418 = state_83403;
(statearr_83418[(9)] = inst_83362);

(statearr_83418[(8)] = inst_83363);

return statearr_83418;
})();
if(cljs.core.truth_(inst_83364)){
var statearr_83419_83446 = state_83403__$1;
(statearr_83419_83446[(1)] = (8));

} else {
var statearr_83420_83447 = state_83403__$1;
(statearr_83420_83447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83404 === (14))){
var inst_83374 = (state_83403[(2)]);
var state_83403__$1 = state_83403;
var statearr_83421_83448 = state_83403__$1;
(statearr_83421_83448[(2)] = inst_83374);

(statearr_83421_83448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83404 === (16))){
var state_83403__$1 = state_83403;
var statearr_83422_83449 = state_83403__$1;
(statearr_83422_83449[(2)] = null);

(statearr_83422_83449[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83404 === (10))){
var inst_83395 = (state_83403[(2)]);
var state_83403__$1 = (function (){var statearr_83423 = state_83403;
(statearr_83423[(11)] = inst_83395);

return statearr_83423;
})();
var statearr_83424_83450 = state_83403__$1;
(statearr_83424_83450[(2)] = null);

(statearr_83424_83450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83404 === (8))){
var inst_83362 = (state_83403[(9)]);
var inst_83366 = figwheel.client.reload_file_state_QMARK_.call(null,inst_83362,opts);
var state_83403__$1 = state_83403;
if(cljs.core.truth_(inst_83366)){
var statearr_83425_83451 = state_83403__$1;
(statearr_83425_83451[(1)] = (11));

} else {
var statearr_83426_83452 = state_83403__$1;
(statearr_83426_83452[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto___83434,ch))
;
return ((function (switch__28225__auto__,c__28337__auto___83434,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28226__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28226__auto____0 = (function (){
var statearr_83430 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83430[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28226__auto__);

(statearr_83430[(1)] = (1));

return statearr_83430;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28226__auto____1 = (function (state_83403){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_83403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e83431){if((e83431 instanceof Object)){
var ex__28229__auto__ = e83431;
var statearr_83432_83453 = state_83403;
(statearr_83432_83453[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83454 = state_83403;
state_83403 = G__83454;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28226__auto__ = function(state_83403){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28226__auto____1.call(this,state_83403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28226__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28226__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___83434,ch))
})();
var state__28339__auto__ = (function (){var statearr_83433 = f__28338__auto__.call(null);
(statearr_83433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___83434);

return statearr_83433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___83434,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__83455_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__83455_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_83458 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_83458){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e83457){if((e83457 instanceof Error)){
var e = e83457;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_83458], null));
} else {
var e = e83457;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_83458))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__83459){
var map__83468 = p__83459;
var map__83468__$1 = ((((!((map__83468 == null)))?((((map__83468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83468):map__83468);
var opts = map__83468__$1;
var build_id = cljs.core.get.call(null,map__83468__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__83468,map__83468__$1,opts,build_id){
return (function (p__83470){
var vec__83471 = p__83470;
var seq__83472 = cljs.core.seq.call(null,vec__83471);
var first__83473 = cljs.core.first.call(null,seq__83472);
var seq__83472__$1 = cljs.core.next.call(null,seq__83472);
var map__83474 = first__83473;
var map__83474__$1 = ((((!((map__83474 == null)))?((((map__83474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83474):map__83474);
var msg = map__83474__$1;
var msg_name = cljs.core.get.call(null,map__83474__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__83472__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__83471,seq__83472,first__83473,seq__83472__$1,map__83474,map__83474__$1,msg,msg_name,_,map__83468,map__83468__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__83471,seq__83472,first__83473,seq__83472__$1,map__83474,map__83474__$1,msg,msg_name,_,map__83468,map__83468__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__83468,map__83468__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__83482){
var vec__83483 = p__83482;
var seq__83484 = cljs.core.seq.call(null,vec__83483);
var first__83485 = cljs.core.first.call(null,seq__83484);
var seq__83484__$1 = cljs.core.next.call(null,seq__83484);
var map__83486 = first__83485;
var map__83486__$1 = ((((!((map__83486 == null)))?((((map__83486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83486):map__83486);
var msg = map__83486__$1;
var msg_name = cljs.core.get.call(null,map__83486__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__83484__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__83488){
var map__83500 = p__83488;
var map__83500__$1 = ((((!((map__83500 == null)))?((((map__83500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83500):map__83500);
var on_compile_warning = cljs.core.get.call(null,map__83500__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__83500__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__83500,map__83500__$1,on_compile_warning,on_compile_fail){
return (function (p__83502){
var vec__83503 = p__83502;
var seq__83504 = cljs.core.seq.call(null,vec__83503);
var first__83505 = cljs.core.first.call(null,seq__83504);
var seq__83504__$1 = cljs.core.next.call(null,seq__83504);
var map__83506 = first__83505;
var map__83506__$1 = ((((!((map__83506 == null)))?((((map__83506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83506):map__83506);
var msg = map__83506__$1;
var msg_name = cljs.core.get.call(null,map__83506__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__83504__$1;
var pred__83508 = cljs.core._EQ_;
var expr__83509 = msg_name;
if(cljs.core.truth_(pred__83508.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__83509))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__83508.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__83509))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__83500,map__83500__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto__,msg_hist,msg_names,msg){
return (function (state_83737){
var state_val_83738 = (state_83737[(1)]);
if((state_val_83738 === (7))){
var inst_83657 = (state_83737[(2)]);
var state_83737__$1 = state_83737;
if(cljs.core.truth_(inst_83657)){
var statearr_83739_83789 = state_83737__$1;
(statearr_83739_83789[(1)] = (8));

} else {
var statearr_83740_83790 = state_83737__$1;
(statearr_83740_83790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (20))){
var inst_83731 = (state_83737[(2)]);
var state_83737__$1 = state_83737;
var statearr_83741_83791 = state_83737__$1;
(statearr_83741_83791[(2)] = inst_83731);

(statearr_83741_83791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (27))){
var inst_83727 = (state_83737[(2)]);
var state_83737__$1 = state_83737;
var statearr_83742_83792 = state_83737__$1;
(statearr_83742_83792[(2)] = inst_83727);

(statearr_83742_83792[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (1))){
var inst_83650 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_83737__$1 = state_83737;
if(cljs.core.truth_(inst_83650)){
var statearr_83743_83793 = state_83737__$1;
(statearr_83743_83793[(1)] = (2));

} else {
var statearr_83744_83794 = state_83737__$1;
(statearr_83744_83794[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (24))){
var inst_83729 = (state_83737[(2)]);
var state_83737__$1 = state_83737;
var statearr_83745_83795 = state_83737__$1;
(statearr_83745_83795[(2)] = inst_83729);

(statearr_83745_83795[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (4))){
var inst_83735 = (state_83737[(2)]);
var state_83737__$1 = state_83737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83737__$1,inst_83735);
} else {
if((state_val_83738 === (15))){
var inst_83733 = (state_83737[(2)]);
var state_83737__$1 = state_83737;
var statearr_83746_83796 = state_83737__$1;
(statearr_83746_83796[(2)] = inst_83733);

(statearr_83746_83796[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (21))){
var inst_83686 = (state_83737[(2)]);
var inst_83687 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_83688 = figwheel.client.auto_jump_to_error.call(null,opts,inst_83687);
var state_83737__$1 = (function (){var statearr_83747 = state_83737;
(statearr_83747[(7)] = inst_83686);

return statearr_83747;
})();
var statearr_83748_83797 = state_83737__$1;
(statearr_83748_83797[(2)] = inst_83688);

(statearr_83748_83797[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (31))){
var inst_83716 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_83737__$1 = state_83737;
if(cljs.core.truth_(inst_83716)){
var statearr_83749_83798 = state_83737__$1;
(statearr_83749_83798[(1)] = (34));

} else {
var statearr_83750_83799 = state_83737__$1;
(statearr_83750_83799[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (32))){
var inst_83725 = (state_83737[(2)]);
var state_83737__$1 = state_83737;
var statearr_83751_83800 = state_83737__$1;
(statearr_83751_83800[(2)] = inst_83725);

(statearr_83751_83800[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (33))){
var inst_83712 = (state_83737[(2)]);
var inst_83713 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_83714 = figwheel.client.auto_jump_to_error.call(null,opts,inst_83713);
var state_83737__$1 = (function (){var statearr_83752 = state_83737;
(statearr_83752[(8)] = inst_83712);

return statearr_83752;
})();
var statearr_83753_83801 = state_83737__$1;
(statearr_83753_83801[(2)] = inst_83714);

(statearr_83753_83801[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (13))){
var inst_83671 = figwheel.client.heads_up.clear.call(null);
var state_83737__$1 = state_83737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83737__$1,(16),inst_83671);
} else {
if((state_val_83738 === (22))){
var inst_83692 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_83693 = figwheel.client.heads_up.append_warning_message.call(null,inst_83692);
var state_83737__$1 = state_83737;
var statearr_83754_83802 = state_83737__$1;
(statearr_83754_83802[(2)] = inst_83693);

(statearr_83754_83802[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (36))){
var inst_83723 = (state_83737[(2)]);
var state_83737__$1 = state_83737;
var statearr_83755_83803 = state_83737__$1;
(statearr_83755_83803[(2)] = inst_83723);

(statearr_83755_83803[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (29))){
var inst_83703 = (state_83737[(2)]);
var inst_83704 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_83705 = figwheel.client.auto_jump_to_error.call(null,opts,inst_83704);
var state_83737__$1 = (function (){var statearr_83756 = state_83737;
(statearr_83756[(9)] = inst_83703);

return statearr_83756;
})();
var statearr_83757_83804 = state_83737__$1;
(statearr_83757_83804[(2)] = inst_83705);

(statearr_83757_83804[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (6))){
var inst_83652 = (state_83737[(10)]);
var state_83737__$1 = state_83737;
var statearr_83758_83805 = state_83737__$1;
(statearr_83758_83805[(2)] = inst_83652);

(statearr_83758_83805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (28))){
var inst_83699 = (state_83737[(2)]);
var inst_83700 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_83701 = figwheel.client.heads_up.display_warning.call(null,inst_83700);
var state_83737__$1 = (function (){var statearr_83759 = state_83737;
(statearr_83759[(11)] = inst_83699);

return statearr_83759;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83737__$1,(29),inst_83701);
} else {
if((state_val_83738 === (25))){
var inst_83697 = figwheel.client.heads_up.clear.call(null);
var state_83737__$1 = state_83737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83737__$1,(28),inst_83697);
} else {
if((state_val_83738 === (34))){
var inst_83718 = figwheel.client.heads_up.flash_loaded.call(null);
var state_83737__$1 = state_83737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83737__$1,(37),inst_83718);
} else {
if((state_val_83738 === (17))){
var inst_83677 = (state_83737[(2)]);
var inst_83678 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_83679 = figwheel.client.auto_jump_to_error.call(null,opts,inst_83678);
var state_83737__$1 = (function (){var statearr_83760 = state_83737;
(statearr_83760[(12)] = inst_83677);

return statearr_83760;
})();
var statearr_83761_83806 = state_83737__$1;
(statearr_83761_83806[(2)] = inst_83679);

(statearr_83761_83806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (3))){
var inst_83669 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_83737__$1 = state_83737;
if(cljs.core.truth_(inst_83669)){
var statearr_83762_83807 = state_83737__$1;
(statearr_83762_83807[(1)] = (13));

} else {
var statearr_83763_83808 = state_83737__$1;
(statearr_83763_83808[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (12))){
var inst_83665 = (state_83737[(2)]);
var state_83737__$1 = state_83737;
var statearr_83764_83809 = state_83737__$1;
(statearr_83764_83809[(2)] = inst_83665);

(statearr_83764_83809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (2))){
var inst_83652 = (state_83737[(10)]);
var inst_83652__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_83737__$1 = (function (){var statearr_83765 = state_83737;
(statearr_83765[(10)] = inst_83652__$1);

return statearr_83765;
})();
if(cljs.core.truth_(inst_83652__$1)){
var statearr_83766_83810 = state_83737__$1;
(statearr_83766_83810[(1)] = (5));

} else {
var statearr_83767_83811 = state_83737__$1;
(statearr_83767_83811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (23))){
var inst_83695 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_83737__$1 = state_83737;
if(cljs.core.truth_(inst_83695)){
var statearr_83768_83812 = state_83737__$1;
(statearr_83768_83812[(1)] = (25));

} else {
var statearr_83769_83813 = state_83737__$1;
(statearr_83769_83813[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (35))){
var state_83737__$1 = state_83737;
var statearr_83770_83814 = state_83737__$1;
(statearr_83770_83814[(2)] = null);

(statearr_83770_83814[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (19))){
var inst_83690 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_83737__$1 = state_83737;
if(cljs.core.truth_(inst_83690)){
var statearr_83771_83815 = state_83737__$1;
(statearr_83771_83815[(1)] = (22));

} else {
var statearr_83772_83816 = state_83737__$1;
(statearr_83772_83816[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (11))){
var inst_83661 = (state_83737[(2)]);
var state_83737__$1 = state_83737;
var statearr_83773_83817 = state_83737__$1;
(statearr_83773_83817[(2)] = inst_83661);

(statearr_83773_83817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (9))){
var inst_83663 = figwheel.client.heads_up.clear.call(null);
var state_83737__$1 = state_83737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83737__$1,(12),inst_83663);
} else {
if((state_val_83738 === (5))){
var inst_83654 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_83737__$1 = state_83737;
var statearr_83774_83818 = state_83737__$1;
(statearr_83774_83818[(2)] = inst_83654);

(statearr_83774_83818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (14))){
var inst_83681 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_83737__$1 = state_83737;
if(cljs.core.truth_(inst_83681)){
var statearr_83775_83819 = state_83737__$1;
(statearr_83775_83819[(1)] = (18));

} else {
var statearr_83776_83820 = state_83737__$1;
(statearr_83776_83820[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (26))){
var inst_83707 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_83737__$1 = state_83737;
if(cljs.core.truth_(inst_83707)){
var statearr_83777_83821 = state_83737__$1;
(statearr_83777_83821[(1)] = (30));

} else {
var statearr_83778_83822 = state_83737__$1;
(statearr_83778_83822[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (16))){
var inst_83673 = (state_83737[(2)]);
var inst_83674 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_83675 = figwheel.client.heads_up.display_exception.call(null,inst_83674);
var state_83737__$1 = (function (){var statearr_83779 = state_83737;
(statearr_83779[(13)] = inst_83673);

return statearr_83779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83737__$1,(17),inst_83675);
} else {
if((state_val_83738 === (30))){
var inst_83709 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_83710 = figwheel.client.heads_up.display_warning.call(null,inst_83709);
var state_83737__$1 = state_83737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83737__$1,(33),inst_83710);
} else {
if((state_val_83738 === (10))){
var inst_83667 = (state_83737[(2)]);
var state_83737__$1 = state_83737;
var statearr_83780_83823 = state_83737__$1;
(statearr_83780_83823[(2)] = inst_83667);

(statearr_83780_83823[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (18))){
var inst_83683 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_83684 = figwheel.client.heads_up.display_exception.call(null,inst_83683);
var state_83737__$1 = state_83737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83737__$1,(21),inst_83684);
} else {
if((state_val_83738 === (37))){
var inst_83720 = (state_83737[(2)]);
var state_83737__$1 = state_83737;
var statearr_83781_83824 = state_83737__$1;
(statearr_83781_83824[(2)] = inst_83720);

(statearr_83781_83824[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83738 === (8))){
var inst_83659 = figwheel.client.heads_up.flash_loaded.call(null);
var state_83737__$1 = state_83737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83737__$1,(11),inst_83659);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28337__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28225__auto__,c__28337__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto____0 = (function (){
var statearr_83785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83785[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto__);

(statearr_83785[(1)] = (1));

return statearr_83785;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto____1 = (function (state_83737){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_83737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e83786){if((e83786 instanceof Object)){
var ex__28229__auto__ = e83786;
var statearr_83787_83825 = state_83737;
(statearr_83787_83825[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83826 = state_83737;
state_83737 = G__83826;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto__ = function(state_83737){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto____1.call(this,state_83737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto__,msg_hist,msg_names,msg))
})();
var state__28339__auto__ = (function (){var statearr_83788 = f__28338__auto__.call(null);
(statearr_83788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto__);

return statearr_83788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto__,msg_hist,msg_names,msg))
);

return c__28337__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28337__auto___83889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto___83889,ch){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto___83889,ch){
return (function (state_83872){
var state_val_83873 = (state_83872[(1)]);
if((state_val_83873 === (1))){
var state_83872__$1 = state_83872;
var statearr_83874_83890 = state_83872__$1;
(statearr_83874_83890[(2)] = null);

(statearr_83874_83890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83873 === (2))){
var state_83872__$1 = state_83872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83872__$1,(4),ch);
} else {
if((state_val_83873 === (3))){
var inst_83870 = (state_83872[(2)]);
var state_83872__$1 = state_83872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83872__$1,inst_83870);
} else {
if((state_val_83873 === (4))){
var inst_83860 = (state_83872[(7)]);
var inst_83860__$1 = (state_83872[(2)]);
var state_83872__$1 = (function (){var statearr_83875 = state_83872;
(statearr_83875[(7)] = inst_83860__$1);

return statearr_83875;
})();
if(cljs.core.truth_(inst_83860__$1)){
var statearr_83876_83891 = state_83872__$1;
(statearr_83876_83891[(1)] = (5));

} else {
var statearr_83877_83892 = state_83872__$1;
(statearr_83877_83892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83873 === (5))){
var inst_83860 = (state_83872[(7)]);
var inst_83862 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_83860);
var state_83872__$1 = state_83872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83872__$1,(8),inst_83862);
} else {
if((state_val_83873 === (6))){
var state_83872__$1 = state_83872;
var statearr_83878_83893 = state_83872__$1;
(statearr_83878_83893[(2)] = null);

(statearr_83878_83893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83873 === (7))){
var inst_83868 = (state_83872[(2)]);
var state_83872__$1 = state_83872;
var statearr_83879_83894 = state_83872__$1;
(statearr_83879_83894[(2)] = inst_83868);

(statearr_83879_83894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83873 === (8))){
var inst_83864 = (state_83872[(2)]);
var state_83872__$1 = (function (){var statearr_83880 = state_83872;
(statearr_83880[(8)] = inst_83864);

return statearr_83880;
})();
var statearr_83881_83895 = state_83872__$1;
(statearr_83881_83895[(2)] = null);

(statearr_83881_83895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28337__auto___83889,ch))
;
return ((function (switch__28225__auto__,c__28337__auto___83889,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28226__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28226__auto____0 = (function (){
var statearr_83885 = [null,null,null,null,null,null,null,null,null];
(statearr_83885[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28226__auto__);

(statearr_83885[(1)] = (1));

return statearr_83885;
});
var figwheel$client$heads_up_plugin_$_state_machine__28226__auto____1 = (function (state_83872){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_83872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e83886){if((e83886 instanceof Object)){
var ex__28229__auto__ = e83886;
var statearr_83887_83896 = state_83872;
(statearr_83887_83896[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83897 = state_83872;
state_83872 = G__83897;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28226__auto__ = function(state_83872){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28226__auto____1.call(this,state_83872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28226__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28226__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto___83889,ch))
})();
var state__28339__auto__ = (function (){var statearr_83888 = f__28338__auto__.call(null);
(statearr_83888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto___83889);

return statearr_83888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto___83889,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto__){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto__){
return (function (state_83918){
var state_val_83919 = (state_83918[(1)]);
if((state_val_83919 === (1))){
var inst_83913 = cljs.core.async.timeout.call(null,(3000));
var state_83918__$1 = state_83918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83918__$1,(2),inst_83913);
} else {
if((state_val_83919 === (2))){
var inst_83915 = (state_83918[(2)]);
var inst_83916 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_83918__$1 = (function (){var statearr_83920 = state_83918;
(statearr_83920[(7)] = inst_83915);

return statearr_83920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83918__$1,inst_83916);
} else {
return null;
}
}
});})(c__28337__auto__))
;
return ((function (switch__28225__auto__,c__28337__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28226__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28226__auto____0 = (function (){
var statearr_83924 = [null,null,null,null,null,null,null,null];
(statearr_83924[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28226__auto__);

(statearr_83924[(1)] = (1));

return statearr_83924;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28226__auto____1 = (function (state_83918){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_83918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e83925){if((e83925 instanceof Object)){
var ex__28229__auto__ = e83925;
var statearr_83926_83928 = state_83918;
(statearr_83926_83928[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83929 = state_83918;
state_83918 = G__83929;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28226__auto__ = function(state_83918){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28226__auto____1.call(this,state_83918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28226__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28226__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto__))
})();
var state__28339__auto__ = (function (){var statearr_83927 = f__28338__auto__.call(null);
(statearr_83927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto__);

return statearr_83927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto__))
);

return c__28337__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28337__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28337__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28338__auto__ = (function (){var switch__28225__auto__ = ((function (c__28337__auto__,figwheel_version,temp__4657__auto__){
return (function (state_83952){
var state_val_83953 = (state_83952[(1)]);
if((state_val_83953 === (1))){
var inst_83946 = cljs.core.async.timeout.call(null,(2000));
var state_83952__$1 = state_83952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83952__$1,(2),inst_83946);
} else {
if((state_val_83953 === (2))){
var inst_83948 = (state_83952[(2)]);
var inst_83949 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_83950 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_83949);
var state_83952__$1 = (function (){var statearr_83954 = state_83952;
(statearr_83954[(7)] = inst_83948);

return statearr_83954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83952__$1,inst_83950);
} else {
return null;
}
}
});})(c__28337__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28225__auto__,c__28337__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto____0 = (function (){
var statearr_83958 = [null,null,null,null,null,null,null,null];
(statearr_83958[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto__);

(statearr_83958[(1)] = (1));

return statearr_83958;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto____1 = (function (state_83952){
while(true){
var ret_value__28227__auto__ = (function (){try{while(true){
var result__28228__auto__ = switch__28225__auto__.call(null,state_83952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28228__auto__;
}
break;
}
}catch (e83959){if((e83959 instanceof Object)){
var ex__28229__auto__ = e83959;
var statearr_83960_83962 = state_83952;
(statearr_83960_83962[(5)] = ex__28229__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83963 = state_83952;
state_83952 = G__83963;
continue;
} else {
return ret_value__28227__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto__ = function(state_83952){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto____1.call(this,state_83952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28226__auto__;
})()
;})(switch__28225__auto__,c__28337__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28339__auto__ = (function (){var statearr_83961 = f__28338__auto__.call(null);
(statearr_83961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28337__auto__);

return statearr_83961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28339__auto__);
});})(c__28337__auto__,figwheel_version,temp__4657__auto__))
);

return c__28337__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__83964){
var map__83968 = p__83964;
var map__83968__$1 = ((((!((map__83968 == null)))?((((map__83968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83968):map__83968);
var file = cljs.core.get.call(null,map__83968__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__83968__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__83968__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__83970 = "";
var G__83970__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__83970),cljs.core.str("file "),cljs.core.str(file)].join(''):G__83970);
var G__83970__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__83970__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__83970__$1);
if(cljs.core.truth_((function (){var and__25113__auto__ = line;
if(cljs.core.truth_(and__25113__auto__)){
return column;
} else {
return and__25113__auto__;
}
})())){
return [cljs.core.str(G__83970__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__83970__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__83971){
var map__83978 = p__83971;
var map__83978__$1 = ((((!((map__83978 == null)))?((((map__83978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83978):map__83978);
var ed = map__83978__$1;
var formatted_exception = cljs.core.get.call(null,map__83978__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__83978__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__83978__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__83980_83984 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__83981_83985 = null;
var count__83982_83986 = (0);
var i__83983_83987 = (0);
while(true){
if((i__83983_83987 < count__83982_83986)){
var msg_83988 = cljs.core._nth.call(null,chunk__83981_83985,i__83983_83987);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_83988);

var G__83989 = seq__83980_83984;
var G__83990 = chunk__83981_83985;
var G__83991 = count__83982_83986;
var G__83992 = (i__83983_83987 + (1));
seq__83980_83984 = G__83989;
chunk__83981_83985 = G__83990;
count__83982_83986 = G__83991;
i__83983_83987 = G__83992;
continue;
} else {
var temp__4657__auto___83993 = cljs.core.seq.call(null,seq__83980_83984);
if(temp__4657__auto___83993){
var seq__83980_83994__$1 = temp__4657__auto___83993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83980_83994__$1)){
var c__25936__auto___83995 = cljs.core.chunk_first.call(null,seq__83980_83994__$1);
var G__83996 = cljs.core.chunk_rest.call(null,seq__83980_83994__$1);
var G__83997 = c__25936__auto___83995;
var G__83998 = cljs.core.count.call(null,c__25936__auto___83995);
var G__83999 = (0);
seq__83980_83984 = G__83996;
chunk__83981_83985 = G__83997;
count__83982_83986 = G__83998;
i__83983_83987 = G__83999;
continue;
} else {
var msg_84000 = cljs.core.first.call(null,seq__83980_83994__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_84000);

var G__84001 = cljs.core.next.call(null,seq__83980_83994__$1);
var G__84002 = null;
var G__84003 = (0);
var G__84004 = (0);
seq__83980_83984 = G__84001;
chunk__83981_83985 = G__84002;
count__83982_83986 = G__84003;
i__83983_83987 = G__84004;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__84005){
var map__84008 = p__84005;
var map__84008__$1 = ((((!((map__84008 == null)))?((((map__84008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84008):map__84008);
var w = map__84008__$1;
var message = cljs.core.get.call(null,map__84008__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25113__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25113__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25113__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__84020 = cljs.core.seq.call(null,plugins);
var chunk__84021 = null;
var count__84022 = (0);
var i__84023 = (0);
while(true){
if((i__84023 < count__84022)){
var vec__84024 = cljs.core._nth.call(null,chunk__84021,i__84023);
var k = cljs.core.nth.call(null,vec__84024,(0),null);
var plugin = cljs.core.nth.call(null,vec__84024,(1),null);
if(cljs.core.truth_(plugin)){
var pl_84030 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__84020,chunk__84021,count__84022,i__84023,pl_84030,vec__84024,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_84030.call(null,msg_hist);
});})(seq__84020,chunk__84021,count__84022,i__84023,pl_84030,vec__84024,k,plugin))
);
} else {
}

var G__84031 = seq__84020;
var G__84032 = chunk__84021;
var G__84033 = count__84022;
var G__84034 = (i__84023 + (1));
seq__84020 = G__84031;
chunk__84021 = G__84032;
count__84022 = G__84033;
i__84023 = G__84034;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__84020);
if(temp__4657__auto__){
var seq__84020__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84020__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__84020__$1);
var G__84035 = cljs.core.chunk_rest.call(null,seq__84020__$1);
var G__84036 = c__25936__auto__;
var G__84037 = cljs.core.count.call(null,c__25936__auto__);
var G__84038 = (0);
seq__84020 = G__84035;
chunk__84021 = G__84036;
count__84022 = G__84037;
i__84023 = G__84038;
continue;
} else {
var vec__84027 = cljs.core.first.call(null,seq__84020__$1);
var k = cljs.core.nth.call(null,vec__84027,(0),null);
var plugin = cljs.core.nth.call(null,vec__84027,(1),null);
if(cljs.core.truth_(plugin)){
var pl_84039 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__84020,chunk__84021,count__84022,i__84023,pl_84039,vec__84027,k,plugin,seq__84020__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_84039.call(null,msg_hist);
});})(seq__84020,chunk__84021,count__84022,i__84023,pl_84039,vec__84027,k,plugin,seq__84020__$1,temp__4657__auto__))
);
} else {
}

var G__84040 = cljs.core.next.call(null,seq__84020__$1);
var G__84041 = null;
var G__84042 = (0);
var G__84043 = (0);
seq__84020 = G__84040;
chunk__84021 = G__84041;
count__84022 = G__84042;
i__84023 = G__84043;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args84044 = [];
var len__26200__auto___84051 = arguments.length;
var i__26201__auto___84052 = (0);
while(true){
if((i__26201__auto___84052 < len__26200__auto___84051)){
args84044.push((arguments[i__26201__auto___84052]));

var G__84053 = (i__26201__auto___84052 + (1));
i__26201__auto___84052 = G__84053;
continue;
} else {
}
break;
}

var G__84046 = args84044.length;
switch (G__84046) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args84044.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__84047_84055 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__84048_84056 = null;
var count__84049_84057 = (0);
var i__84050_84058 = (0);
while(true){
if((i__84050_84058 < count__84049_84057)){
var msg_84059 = cljs.core._nth.call(null,chunk__84048_84056,i__84050_84058);
figwheel.client.socket.handle_incoming_message.call(null,msg_84059);

var G__84060 = seq__84047_84055;
var G__84061 = chunk__84048_84056;
var G__84062 = count__84049_84057;
var G__84063 = (i__84050_84058 + (1));
seq__84047_84055 = G__84060;
chunk__84048_84056 = G__84061;
count__84049_84057 = G__84062;
i__84050_84058 = G__84063;
continue;
} else {
var temp__4657__auto___84064 = cljs.core.seq.call(null,seq__84047_84055);
if(temp__4657__auto___84064){
var seq__84047_84065__$1 = temp__4657__auto___84064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84047_84065__$1)){
var c__25936__auto___84066 = cljs.core.chunk_first.call(null,seq__84047_84065__$1);
var G__84067 = cljs.core.chunk_rest.call(null,seq__84047_84065__$1);
var G__84068 = c__25936__auto___84066;
var G__84069 = cljs.core.count.call(null,c__25936__auto___84066);
var G__84070 = (0);
seq__84047_84055 = G__84067;
chunk__84048_84056 = G__84068;
count__84049_84057 = G__84069;
i__84050_84058 = G__84070;
continue;
} else {
var msg_84071 = cljs.core.first.call(null,seq__84047_84065__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_84071);

var G__84072 = cljs.core.next.call(null,seq__84047_84065__$1);
var G__84073 = null;
var G__84074 = (0);
var G__84075 = (0);
seq__84047_84055 = G__84072;
chunk__84048_84056 = G__84073;
count__84049_84057 = G__84074;
i__84050_84058 = G__84075;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26207__auto__ = [];
var len__26200__auto___84080 = arguments.length;
var i__26201__auto___84081 = (0);
while(true){
if((i__26201__auto___84081 < len__26200__auto___84080)){
args__26207__auto__.push((arguments[i__26201__auto___84081]));

var G__84082 = (i__26201__auto___84081 + (1));
i__26201__auto___84081 = G__84082;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__84077){
var map__84078 = p__84077;
var map__84078__$1 = ((((!((map__84078 == null)))?((((map__84078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84078):map__84078);
var opts = map__84078__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq84076){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq84076));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e84084){if((e84084 instanceof Error)){
var e = e84084;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e84084;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__84088){
var map__84089 = p__84088;
var map__84089__$1 = ((((!((map__84089 == null)))?((((map__84089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84089):map__84089);
var msg_name = cljs.core.get.call(null,map__84089__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1488396832755