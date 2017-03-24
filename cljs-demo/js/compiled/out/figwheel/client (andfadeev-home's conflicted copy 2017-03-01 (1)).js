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
var args107268 = [];
var len__26200__auto___107271 = arguments.length;
var i__26201__auto___107272 = (0);
while(true){
if((i__26201__auto___107272 < len__26200__auto___107271)){
args107268.push((arguments[i__26201__auto___107272]));

var G__107273 = (i__26201__auto___107272 + (1));
i__26201__auto___107272 = G__107273;
continue;
} else {
}
break;
}

var G__107270 = args107268.length;
switch (G__107270) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args107268.length)].join('')));

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
var len__26200__auto___107276 = arguments.length;
var i__26201__auto___107277 = (0);
while(true){
if((i__26201__auto___107277 < len__26200__auto___107276)){
args__26207__auto__.push((arguments[i__26201__auto___107277]));

var G__107278 = (i__26201__auto___107277 + (1));
i__26201__auto___107277 = G__107278;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq107275){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107275));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26207__auto__ = [];
var len__26200__auto___107280 = arguments.length;
var i__26201__auto___107281 = (0);
while(true){
if((i__26201__auto___107281 < len__26200__auto___107280)){
args__26207__auto__.push((arguments[i__26201__auto___107281]));

var G__107282 = (i__26201__auto___107281 + (1));
i__26201__auto___107281 = G__107282;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq107279){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107279));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__107283){
var map__107286 = p__107283;
var map__107286__$1 = ((((!((map__107286 == null)))?((((map__107286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107286):map__107286);
var message = cljs.core.get.call(null,map__107286__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__107286__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28398__auto___107448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto___107448,ch){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto___107448,ch){
return (function (state_107417){
var state_val_107418 = (state_107417[(1)]);
if((state_val_107418 === (7))){
var inst_107413 = (state_107417[(2)]);
var state_107417__$1 = state_107417;
var statearr_107419_107449 = state_107417__$1;
(statearr_107419_107449[(2)] = inst_107413);

(statearr_107419_107449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107418 === (1))){
var state_107417__$1 = state_107417;
var statearr_107420_107450 = state_107417__$1;
(statearr_107420_107450[(2)] = null);

(statearr_107420_107450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107418 === (4))){
var inst_107370 = (state_107417[(7)]);
var inst_107370__$1 = (state_107417[(2)]);
var state_107417__$1 = (function (){var statearr_107421 = state_107417;
(statearr_107421[(7)] = inst_107370__$1);

return statearr_107421;
})();
if(cljs.core.truth_(inst_107370__$1)){
var statearr_107422_107451 = state_107417__$1;
(statearr_107422_107451[(1)] = (5));

} else {
var statearr_107423_107452 = state_107417__$1;
(statearr_107423_107452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107418 === (15))){
var inst_107377 = (state_107417[(8)]);
var inst_107392 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_107377);
var inst_107393 = cljs.core.first.call(null,inst_107392);
var inst_107394 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_107393);
var inst_107395 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_107394)].join('');
var inst_107396 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_107395);
var state_107417__$1 = state_107417;
var statearr_107424_107453 = state_107417__$1;
(statearr_107424_107453[(2)] = inst_107396);

(statearr_107424_107453[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107418 === (13))){
var inst_107401 = (state_107417[(2)]);
var state_107417__$1 = state_107417;
var statearr_107425_107454 = state_107417__$1;
(statearr_107425_107454[(2)] = inst_107401);

(statearr_107425_107454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107418 === (6))){
var state_107417__$1 = state_107417;
var statearr_107426_107455 = state_107417__$1;
(statearr_107426_107455[(2)] = null);

(statearr_107426_107455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107418 === (17))){
var inst_107399 = (state_107417[(2)]);
var state_107417__$1 = state_107417;
var statearr_107427_107456 = state_107417__$1;
(statearr_107427_107456[(2)] = inst_107399);

(statearr_107427_107456[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107418 === (3))){
var inst_107415 = (state_107417[(2)]);
var state_107417__$1 = state_107417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107417__$1,inst_107415);
} else {
if((state_val_107418 === (12))){
var inst_107376 = (state_107417[(9)]);
var inst_107390 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_107376,opts);
var state_107417__$1 = state_107417;
if(cljs.core.truth_(inst_107390)){
var statearr_107428_107457 = state_107417__$1;
(statearr_107428_107457[(1)] = (15));

} else {
var statearr_107429_107458 = state_107417__$1;
(statearr_107429_107458[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107418 === (2))){
var state_107417__$1 = state_107417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107417__$1,(4),ch);
} else {
if((state_val_107418 === (11))){
var inst_107377 = (state_107417[(8)]);
var inst_107382 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_107383 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_107377);
var inst_107384 = cljs.core.async.timeout.call(null,(1000));
var inst_107385 = [inst_107383,inst_107384];
var inst_107386 = (new cljs.core.PersistentVector(null,2,(5),inst_107382,inst_107385,null));
var state_107417__$1 = state_107417;
return cljs.core.async.ioc_alts_BANG_.call(null,state_107417__$1,(14),inst_107386);
} else {
if((state_val_107418 === (9))){
var inst_107377 = (state_107417[(8)]);
var inst_107403 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_107404 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_107377);
var inst_107405 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_107404);
var inst_107406 = [cljs.core.str("Not loading: "),cljs.core.str(inst_107405)].join('');
var inst_107407 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_107406);
var state_107417__$1 = (function (){var statearr_107430 = state_107417;
(statearr_107430[(10)] = inst_107403);

return statearr_107430;
})();
var statearr_107431_107459 = state_107417__$1;
(statearr_107431_107459[(2)] = inst_107407);

(statearr_107431_107459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107418 === (5))){
var inst_107370 = (state_107417[(7)]);
var inst_107372 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_107373 = (new cljs.core.PersistentArrayMap(null,2,inst_107372,null));
var inst_107374 = (new cljs.core.PersistentHashSet(null,inst_107373,null));
var inst_107375 = figwheel.client.focus_msgs.call(null,inst_107374,inst_107370);
var inst_107376 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_107375);
var inst_107377 = cljs.core.first.call(null,inst_107375);
var inst_107378 = figwheel.client.autoload_QMARK_.call(null);
var state_107417__$1 = (function (){var statearr_107432 = state_107417;
(statearr_107432[(9)] = inst_107376);

(statearr_107432[(8)] = inst_107377);

return statearr_107432;
})();
if(cljs.core.truth_(inst_107378)){
var statearr_107433_107460 = state_107417__$1;
(statearr_107433_107460[(1)] = (8));

} else {
var statearr_107434_107461 = state_107417__$1;
(statearr_107434_107461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107418 === (14))){
var inst_107388 = (state_107417[(2)]);
var state_107417__$1 = state_107417;
var statearr_107435_107462 = state_107417__$1;
(statearr_107435_107462[(2)] = inst_107388);

(statearr_107435_107462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107418 === (16))){
var state_107417__$1 = state_107417;
var statearr_107436_107463 = state_107417__$1;
(statearr_107436_107463[(2)] = null);

(statearr_107436_107463[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107418 === (10))){
var inst_107409 = (state_107417[(2)]);
var state_107417__$1 = (function (){var statearr_107437 = state_107417;
(statearr_107437[(11)] = inst_107409);

return statearr_107437;
})();
var statearr_107438_107464 = state_107417__$1;
(statearr_107438_107464[(2)] = null);

(statearr_107438_107464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107418 === (8))){
var inst_107376 = (state_107417[(9)]);
var inst_107380 = figwheel.client.reload_file_state_QMARK_.call(null,inst_107376,opts);
var state_107417__$1 = state_107417;
if(cljs.core.truth_(inst_107380)){
var statearr_107439_107465 = state_107417__$1;
(statearr_107439_107465[(1)] = (11));

} else {
var statearr_107440_107466 = state_107417__$1;
(statearr_107440_107466[(1)] = (12));

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
});})(c__28398__auto___107448,ch))
;
return ((function (switch__28286__auto__,c__28398__auto___107448,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____0 = (function (){
var statearr_107444 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_107444[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__);

(statearr_107444[(1)] = (1));

return statearr_107444;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____1 = (function (state_107417){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_107417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e107445){if((e107445 instanceof Object)){
var ex__28290__auto__ = e107445;
var statearr_107446_107467 = state_107417;
(statearr_107446_107467[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107468 = state_107417;
state_107417 = G__107468;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__ = function(state_107417){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____1.call(this,state_107417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto___107448,ch))
})();
var state__28400__auto__ = (function (){var statearr_107447 = f__28399__auto__.call(null);
(statearr_107447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto___107448);

return statearr_107447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto___107448,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__107469_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__107469_SHARP_));
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
var base_path_107472 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_107472){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e107471){if((e107471 instanceof Error)){
var e = e107471;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_107472], null));
} else {
var e = e107471;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_107472))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__107473){
var map__107482 = p__107473;
var map__107482__$1 = ((((!((map__107482 == null)))?((((map__107482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107482):map__107482);
var opts = map__107482__$1;
var build_id = cljs.core.get.call(null,map__107482__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__107482,map__107482__$1,opts,build_id){
return (function (p__107484){
var vec__107485 = p__107484;
var seq__107486 = cljs.core.seq.call(null,vec__107485);
var first__107487 = cljs.core.first.call(null,seq__107486);
var seq__107486__$1 = cljs.core.next.call(null,seq__107486);
var map__107488 = first__107487;
var map__107488__$1 = ((((!((map__107488 == null)))?((((map__107488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107488):map__107488);
var msg = map__107488__$1;
var msg_name = cljs.core.get.call(null,map__107488__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__107486__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__107485,seq__107486,first__107487,seq__107486__$1,map__107488,map__107488__$1,msg,msg_name,_,map__107482,map__107482__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__107485,seq__107486,first__107487,seq__107486__$1,map__107488,map__107488__$1,msg,msg_name,_,map__107482,map__107482__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__107482,map__107482__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__107496){
var vec__107497 = p__107496;
var seq__107498 = cljs.core.seq.call(null,vec__107497);
var first__107499 = cljs.core.first.call(null,seq__107498);
var seq__107498__$1 = cljs.core.next.call(null,seq__107498);
var map__107500 = first__107499;
var map__107500__$1 = ((((!((map__107500 == null)))?((((map__107500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107500):map__107500);
var msg = map__107500__$1;
var msg_name = cljs.core.get.call(null,map__107500__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__107498__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__107502){
var map__107514 = p__107502;
var map__107514__$1 = ((((!((map__107514 == null)))?((((map__107514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107514):map__107514);
var on_compile_warning = cljs.core.get.call(null,map__107514__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__107514__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__107514,map__107514__$1,on_compile_warning,on_compile_fail){
return (function (p__107516){
var vec__107517 = p__107516;
var seq__107518 = cljs.core.seq.call(null,vec__107517);
var first__107519 = cljs.core.first.call(null,seq__107518);
var seq__107518__$1 = cljs.core.next.call(null,seq__107518);
var map__107520 = first__107519;
var map__107520__$1 = ((((!((map__107520 == null)))?((((map__107520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107520):map__107520);
var msg = map__107520__$1;
var msg_name = cljs.core.get.call(null,map__107520__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__107518__$1;
var pred__107522 = cljs.core._EQ_;
var expr__107523 = msg_name;
if(cljs.core.truth_(pred__107522.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__107523))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__107522.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__107523))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__107514,map__107514__$1,on_compile_warning,on_compile_fail))
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
var c__28398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto__,msg_hist,msg_names,msg){
return (function (state_107751){
var state_val_107752 = (state_107751[(1)]);
if((state_val_107752 === (7))){
var inst_107671 = (state_107751[(2)]);
var state_107751__$1 = state_107751;
if(cljs.core.truth_(inst_107671)){
var statearr_107753_107803 = state_107751__$1;
(statearr_107753_107803[(1)] = (8));

} else {
var statearr_107754_107804 = state_107751__$1;
(statearr_107754_107804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (20))){
var inst_107745 = (state_107751[(2)]);
var state_107751__$1 = state_107751;
var statearr_107755_107805 = state_107751__$1;
(statearr_107755_107805[(2)] = inst_107745);

(statearr_107755_107805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (27))){
var inst_107741 = (state_107751[(2)]);
var state_107751__$1 = state_107751;
var statearr_107756_107806 = state_107751__$1;
(statearr_107756_107806[(2)] = inst_107741);

(statearr_107756_107806[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (1))){
var inst_107664 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_107751__$1 = state_107751;
if(cljs.core.truth_(inst_107664)){
var statearr_107757_107807 = state_107751__$1;
(statearr_107757_107807[(1)] = (2));

} else {
var statearr_107758_107808 = state_107751__$1;
(statearr_107758_107808[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (24))){
var inst_107743 = (state_107751[(2)]);
var state_107751__$1 = state_107751;
var statearr_107759_107809 = state_107751__$1;
(statearr_107759_107809[(2)] = inst_107743);

(statearr_107759_107809[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (4))){
var inst_107749 = (state_107751[(2)]);
var state_107751__$1 = state_107751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107751__$1,inst_107749);
} else {
if((state_val_107752 === (15))){
var inst_107747 = (state_107751[(2)]);
var state_107751__$1 = state_107751;
var statearr_107760_107810 = state_107751__$1;
(statearr_107760_107810[(2)] = inst_107747);

(statearr_107760_107810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (21))){
var inst_107700 = (state_107751[(2)]);
var inst_107701 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107702 = figwheel.client.auto_jump_to_error.call(null,opts,inst_107701);
var state_107751__$1 = (function (){var statearr_107761 = state_107751;
(statearr_107761[(7)] = inst_107700);

return statearr_107761;
})();
var statearr_107762_107811 = state_107751__$1;
(statearr_107762_107811[(2)] = inst_107702);

(statearr_107762_107811[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (31))){
var inst_107730 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_107751__$1 = state_107751;
if(cljs.core.truth_(inst_107730)){
var statearr_107763_107812 = state_107751__$1;
(statearr_107763_107812[(1)] = (34));

} else {
var statearr_107764_107813 = state_107751__$1;
(statearr_107764_107813[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (32))){
var inst_107739 = (state_107751[(2)]);
var state_107751__$1 = state_107751;
var statearr_107765_107814 = state_107751__$1;
(statearr_107765_107814[(2)] = inst_107739);

(statearr_107765_107814[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (33))){
var inst_107726 = (state_107751[(2)]);
var inst_107727 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107728 = figwheel.client.auto_jump_to_error.call(null,opts,inst_107727);
var state_107751__$1 = (function (){var statearr_107766 = state_107751;
(statearr_107766[(8)] = inst_107726);

return statearr_107766;
})();
var statearr_107767_107815 = state_107751__$1;
(statearr_107767_107815[(2)] = inst_107728);

(statearr_107767_107815[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (13))){
var inst_107685 = figwheel.client.heads_up.clear.call(null);
var state_107751__$1 = state_107751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107751__$1,(16),inst_107685);
} else {
if((state_val_107752 === (22))){
var inst_107706 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107707 = figwheel.client.heads_up.append_warning_message.call(null,inst_107706);
var state_107751__$1 = state_107751;
var statearr_107768_107816 = state_107751__$1;
(statearr_107768_107816[(2)] = inst_107707);

(statearr_107768_107816[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (36))){
var inst_107737 = (state_107751[(2)]);
var state_107751__$1 = state_107751;
var statearr_107769_107817 = state_107751__$1;
(statearr_107769_107817[(2)] = inst_107737);

(statearr_107769_107817[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (29))){
var inst_107717 = (state_107751[(2)]);
var inst_107718 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107719 = figwheel.client.auto_jump_to_error.call(null,opts,inst_107718);
var state_107751__$1 = (function (){var statearr_107770 = state_107751;
(statearr_107770[(9)] = inst_107717);

return statearr_107770;
})();
var statearr_107771_107818 = state_107751__$1;
(statearr_107771_107818[(2)] = inst_107719);

(statearr_107771_107818[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (6))){
var inst_107666 = (state_107751[(10)]);
var state_107751__$1 = state_107751;
var statearr_107772_107819 = state_107751__$1;
(statearr_107772_107819[(2)] = inst_107666);

(statearr_107772_107819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (28))){
var inst_107713 = (state_107751[(2)]);
var inst_107714 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107715 = figwheel.client.heads_up.display_warning.call(null,inst_107714);
var state_107751__$1 = (function (){var statearr_107773 = state_107751;
(statearr_107773[(11)] = inst_107713);

return statearr_107773;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107751__$1,(29),inst_107715);
} else {
if((state_val_107752 === (25))){
var inst_107711 = figwheel.client.heads_up.clear.call(null);
var state_107751__$1 = state_107751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107751__$1,(28),inst_107711);
} else {
if((state_val_107752 === (34))){
var inst_107732 = figwheel.client.heads_up.flash_loaded.call(null);
var state_107751__$1 = state_107751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107751__$1,(37),inst_107732);
} else {
if((state_val_107752 === (17))){
var inst_107691 = (state_107751[(2)]);
var inst_107692 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107693 = figwheel.client.auto_jump_to_error.call(null,opts,inst_107692);
var state_107751__$1 = (function (){var statearr_107774 = state_107751;
(statearr_107774[(12)] = inst_107691);

return statearr_107774;
})();
var statearr_107775_107820 = state_107751__$1;
(statearr_107775_107820[(2)] = inst_107693);

(statearr_107775_107820[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (3))){
var inst_107683 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_107751__$1 = state_107751;
if(cljs.core.truth_(inst_107683)){
var statearr_107776_107821 = state_107751__$1;
(statearr_107776_107821[(1)] = (13));

} else {
var statearr_107777_107822 = state_107751__$1;
(statearr_107777_107822[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (12))){
var inst_107679 = (state_107751[(2)]);
var state_107751__$1 = state_107751;
var statearr_107778_107823 = state_107751__$1;
(statearr_107778_107823[(2)] = inst_107679);

(statearr_107778_107823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (2))){
var inst_107666 = (state_107751[(10)]);
var inst_107666__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_107751__$1 = (function (){var statearr_107779 = state_107751;
(statearr_107779[(10)] = inst_107666__$1);

return statearr_107779;
})();
if(cljs.core.truth_(inst_107666__$1)){
var statearr_107780_107824 = state_107751__$1;
(statearr_107780_107824[(1)] = (5));

} else {
var statearr_107781_107825 = state_107751__$1;
(statearr_107781_107825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (23))){
var inst_107709 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_107751__$1 = state_107751;
if(cljs.core.truth_(inst_107709)){
var statearr_107782_107826 = state_107751__$1;
(statearr_107782_107826[(1)] = (25));

} else {
var statearr_107783_107827 = state_107751__$1;
(statearr_107783_107827[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (35))){
var state_107751__$1 = state_107751;
var statearr_107784_107828 = state_107751__$1;
(statearr_107784_107828[(2)] = null);

(statearr_107784_107828[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (19))){
var inst_107704 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_107751__$1 = state_107751;
if(cljs.core.truth_(inst_107704)){
var statearr_107785_107829 = state_107751__$1;
(statearr_107785_107829[(1)] = (22));

} else {
var statearr_107786_107830 = state_107751__$1;
(statearr_107786_107830[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (11))){
var inst_107675 = (state_107751[(2)]);
var state_107751__$1 = state_107751;
var statearr_107787_107831 = state_107751__$1;
(statearr_107787_107831[(2)] = inst_107675);

(statearr_107787_107831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (9))){
var inst_107677 = figwheel.client.heads_up.clear.call(null);
var state_107751__$1 = state_107751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107751__$1,(12),inst_107677);
} else {
if((state_val_107752 === (5))){
var inst_107668 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_107751__$1 = state_107751;
var statearr_107788_107832 = state_107751__$1;
(statearr_107788_107832[(2)] = inst_107668);

(statearr_107788_107832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (14))){
var inst_107695 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_107751__$1 = state_107751;
if(cljs.core.truth_(inst_107695)){
var statearr_107789_107833 = state_107751__$1;
(statearr_107789_107833[(1)] = (18));

} else {
var statearr_107790_107834 = state_107751__$1;
(statearr_107790_107834[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (26))){
var inst_107721 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_107751__$1 = state_107751;
if(cljs.core.truth_(inst_107721)){
var statearr_107791_107835 = state_107751__$1;
(statearr_107791_107835[(1)] = (30));

} else {
var statearr_107792_107836 = state_107751__$1;
(statearr_107792_107836[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (16))){
var inst_107687 = (state_107751[(2)]);
var inst_107688 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107689 = figwheel.client.heads_up.display_exception.call(null,inst_107688);
var state_107751__$1 = (function (){var statearr_107793 = state_107751;
(statearr_107793[(13)] = inst_107687);

return statearr_107793;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107751__$1,(17),inst_107689);
} else {
if((state_val_107752 === (30))){
var inst_107723 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107724 = figwheel.client.heads_up.display_warning.call(null,inst_107723);
var state_107751__$1 = state_107751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107751__$1,(33),inst_107724);
} else {
if((state_val_107752 === (10))){
var inst_107681 = (state_107751[(2)]);
var state_107751__$1 = state_107751;
var statearr_107794_107837 = state_107751__$1;
(statearr_107794_107837[(2)] = inst_107681);

(statearr_107794_107837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (18))){
var inst_107697 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107698 = figwheel.client.heads_up.display_exception.call(null,inst_107697);
var state_107751__$1 = state_107751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107751__$1,(21),inst_107698);
} else {
if((state_val_107752 === (37))){
var inst_107734 = (state_107751[(2)]);
var state_107751__$1 = state_107751;
var statearr_107795_107838 = state_107751__$1;
(statearr_107795_107838[(2)] = inst_107734);

(statearr_107795_107838[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107752 === (8))){
var inst_107673 = figwheel.client.heads_up.flash_loaded.call(null);
var state_107751__$1 = state_107751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107751__$1,(11),inst_107673);
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
});})(c__28398__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28286__auto__,c__28398__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____0 = (function (){
var statearr_107799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_107799[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__);

(statearr_107799[(1)] = (1));

return statearr_107799;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____1 = (function (state_107751){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_107751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e107800){if((e107800 instanceof Object)){
var ex__28290__auto__ = e107800;
var statearr_107801_107839 = state_107751;
(statearr_107801_107839[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107840 = state_107751;
state_107751 = G__107840;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__ = function(state_107751){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____1.call(this,state_107751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__,msg_hist,msg_names,msg))
})();
var state__28400__auto__ = (function (){var statearr_107802 = f__28399__auto__.call(null);
(statearr_107802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_107802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto__,msg_hist,msg_names,msg))
);

return c__28398__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28398__auto___107903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto___107903,ch){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto___107903,ch){
return (function (state_107886){
var state_val_107887 = (state_107886[(1)]);
if((state_val_107887 === (1))){
var state_107886__$1 = state_107886;
var statearr_107888_107904 = state_107886__$1;
(statearr_107888_107904[(2)] = null);

(statearr_107888_107904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107887 === (2))){
var state_107886__$1 = state_107886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107886__$1,(4),ch);
} else {
if((state_val_107887 === (3))){
var inst_107884 = (state_107886[(2)]);
var state_107886__$1 = state_107886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107886__$1,inst_107884);
} else {
if((state_val_107887 === (4))){
var inst_107874 = (state_107886[(7)]);
var inst_107874__$1 = (state_107886[(2)]);
var state_107886__$1 = (function (){var statearr_107889 = state_107886;
(statearr_107889[(7)] = inst_107874__$1);

return statearr_107889;
})();
if(cljs.core.truth_(inst_107874__$1)){
var statearr_107890_107905 = state_107886__$1;
(statearr_107890_107905[(1)] = (5));

} else {
var statearr_107891_107906 = state_107886__$1;
(statearr_107891_107906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107887 === (5))){
var inst_107874 = (state_107886[(7)]);
var inst_107876 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_107874);
var state_107886__$1 = state_107886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107886__$1,(8),inst_107876);
} else {
if((state_val_107887 === (6))){
var state_107886__$1 = state_107886;
var statearr_107892_107907 = state_107886__$1;
(statearr_107892_107907[(2)] = null);

(statearr_107892_107907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107887 === (7))){
var inst_107882 = (state_107886[(2)]);
var state_107886__$1 = state_107886;
var statearr_107893_107908 = state_107886__$1;
(statearr_107893_107908[(2)] = inst_107882);

(statearr_107893_107908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107887 === (8))){
var inst_107878 = (state_107886[(2)]);
var state_107886__$1 = (function (){var statearr_107894 = state_107886;
(statearr_107894[(8)] = inst_107878);

return statearr_107894;
})();
var statearr_107895_107909 = state_107886__$1;
(statearr_107895_107909[(2)] = null);

(statearr_107895_107909[(1)] = (2));


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
});})(c__28398__auto___107903,ch))
;
return ((function (switch__28286__auto__,c__28398__auto___107903,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28287__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28287__auto____0 = (function (){
var statearr_107899 = [null,null,null,null,null,null,null,null,null];
(statearr_107899[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28287__auto__);

(statearr_107899[(1)] = (1));

return statearr_107899;
});
var figwheel$client$heads_up_plugin_$_state_machine__28287__auto____1 = (function (state_107886){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_107886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e107900){if((e107900 instanceof Object)){
var ex__28290__auto__ = e107900;
var statearr_107901_107910 = state_107886;
(statearr_107901_107910[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107911 = state_107886;
state_107886 = G__107911;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28287__auto__ = function(state_107886){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28287__auto____1.call(this,state_107886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28287__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28287__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto___107903,ch))
})();
var state__28400__auto__ = (function (){var statearr_107902 = f__28399__auto__.call(null);
(statearr_107902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto___107903);

return statearr_107902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto___107903,ch))
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
var c__28398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto__){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto__){
return (function (state_107932){
var state_val_107933 = (state_107932[(1)]);
if((state_val_107933 === (1))){
var inst_107927 = cljs.core.async.timeout.call(null,(3000));
var state_107932__$1 = state_107932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107932__$1,(2),inst_107927);
} else {
if((state_val_107933 === (2))){
var inst_107929 = (state_107932[(2)]);
var inst_107930 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_107932__$1 = (function (){var statearr_107934 = state_107932;
(statearr_107934[(7)] = inst_107929);

return statearr_107934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107932__$1,inst_107930);
} else {
return null;
}
}
});})(c__28398__auto__))
;
return ((function (switch__28286__auto__,c__28398__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____0 = (function (){
var statearr_107938 = [null,null,null,null,null,null,null,null];
(statearr_107938[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__);

(statearr_107938[(1)] = (1));

return statearr_107938;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____1 = (function (state_107932){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_107932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e107939){if((e107939 instanceof Object)){
var ex__28290__auto__ = e107939;
var statearr_107940_107942 = state_107932;
(statearr_107940_107942[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107943 = state_107932;
state_107932 = G__107943;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__ = function(state_107932){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____1.call(this,state_107932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__))
})();
var state__28400__auto__ = (function (){var statearr_107941 = f__28399__auto__.call(null);
(statearr_107941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_107941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto__))
);

return c__28398__auto__;
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
var c__28398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto__,figwheel_version,temp__4657__auto__){
return (function (state_107966){
var state_val_107967 = (state_107966[(1)]);
if((state_val_107967 === (1))){
var inst_107960 = cljs.core.async.timeout.call(null,(2000));
var state_107966__$1 = state_107966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107966__$1,(2),inst_107960);
} else {
if((state_val_107967 === (2))){
var inst_107962 = (state_107966[(2)]);
var inst_107963 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_107964 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_107963);
var state_107966__$1 = (function (){var statearr_107968 = state_107966;
(statearr_107968[(7)] = inst_107962);

return statearr_107968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107966__$1,inst_107964);
} else {
return null;
}
}
});})(c__28398__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28286__auto__,c__28398__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____0 = (function (){
var statearr_107972 = [null,null,null,null,null,null,null,null];
(statearr_107972[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__);

(statearr_107972[(1)] = (1));

return statearr_107972;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____1 = (function (state_107966){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_107966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e107973){if((e107973 instanceof Object)){
var ex__28290__auto__ = e107973;
var statearr_107974_107976 = state_107966;
(statearr_107974_107976[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107977 = state_107966;
state_107966 = G__107977;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__ = function(state_107966){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____1.call(this,state_107966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28400__auto__ = (function (){var statearr_107975 = f__28399__auto__.call(null);
(statearr_107975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_107975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto__,figwheel_version,temp__4657__auto__))
);

return c__28398__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__107978){
var map__107982 = p__107978;
var map__107982__$1 = ((((!((map__107982 == null)))?((((map__107982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107982):map__107982);
var file = cljs.core.get.call(null,map__107982__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__107982__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__107982__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__107984 = "";
var G__107984__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__107984),cljs.core.str("file "),cljs.core.str(file)].join(''):G__107984);
var G__107984__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__107984__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__107984__$1);
if(cljs.core.truth_((function (){var and__25113__auto__ = line;
if(cljs.core.truth_(and__25113__auto__)){
return column;
} else {
return and__25113__auto__;
}
})())){
return [cljs.core.str(G__107984__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__107984__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__107985){
var map__107992 = p__107985;
var map__107992__$1 = ((((!((map__107992 == null)))?((((map__107992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107992):map__107992);
var ed = map__107992__$1;
var formatted_exception = cljs.core.get.call(null,map__107992__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__107992__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__107992__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__107994_107998 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__107995_107999 = null;
var count__107996_108000 = (0);
var i__107997_108001 = (0);
while(true){
if((i__107997_108001 < count__107996_108000)){
var msg_108002 = cljs.core._nth.call(null,chunk__107995_107999,i__107997_108001);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_108002);

var G__108003 = seq__107994_107998;
var G__108004 = chunk__107995_107999;
var G__108005 = count__107996_108000;
var G__108006 = (i__107997_108001 + (1));
seq__107994_107998 = G__108003;
chunk__107995_107999 = G__108004;
count__107996_108000 = G__108005;
i__107997_108001 = G__108006;
continue;
} else {
var temp__4657__auto___108007 = cljs.core.seq.call(null,seq__107994_107998);
if(temp__4657__auto___108007){
var seq__107994_108008__$1 = temp__4657__auto___108007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__107994_108008__$1)){
var c__25936__auto___108009 = cljs.core.chunk_first.call(null,seq__107994_108008__$1);
var G__108010 = cljs.core.chunk_rest.call(null,seq__107994_108008__$1);
var G__108011 = c__25936__auto___108009;
var G__108012 = cljs.core.count.call(null,c__25936__auto___108009);
var G__108013 = (0);
seq__107994_107998 = G__108010;
chunk__107995_107999 = G__108011;
count__107996_108000 = G__108012;
i__107997_108001 = G__108013;
continue;
} else {
var msg_108014 = cljs.core.first.call(null,seq__107994_108008__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_108014);

var G__108015 = cljs.core.next.call(null,seq__107994_108008__$1);
var G__108016 = null;
var G__108017 = (0);
var G__108018 = (0);
seq__107994_107998 = G__108015;
chunk__107995_107999 = G__108016;
count__107996_108000 = G__108017;
i__107997_108001 = G__108018;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__108019){
var map__108022 = p__108019;
var map__108022__$1 = ((((!((map__108022 == null)))?((((map__108022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__108022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108022):map__108022);
var w = map__108022__$1;
var message = cljs.core.get.call(null,map__108022__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__108034 = cljs.core.seq.call(null,plugins);
var chunk__108035 = null;
var count__108036 = (0);
var i__108037 = (0);
while(true){
if((i__108037 < count__108036)){
var vec__108038 = cljs.core._nth.call(null,chunk__108035,i__108037);
var k = cljs.core.nth.call(null,vec__108038,(0),null);
var plugin = cljs.core.nth.call(null,vec__108038,(1),null);
if(cljs.core.truth_(plugin)){
var pl_108044 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__108034,chunk__108035,count__108036,i__108037,pl_108044,vec__108038,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_108044.call(null,msg_hist);
});})(seq__108034,chunk__108035,count__108036,i__108037,pl_108044,vec__108038,k,plugin))
);
} else {
}

var G__108045 = seq__108034;
var G__108046 = chunk__108035;
var G__108047 = count__108036;
var G__108048 = (i__108037 + (1));
seq__108034 = G__108045;
chunk__108035 = G__108046;
count__108036 = G__108047;
i__108037 = G__108048;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__108034);
if(temp__4657__auto__){
var seq__108034__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__108034__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__108034__$1);
var G__108049 = cljs.core.chunk_rest.call(null,seq__108034__$1);
var G__108050 = c__25936__auto__;
var G__108051 = cljs.core.count.call(null,c__25936__auto__);
var G__108052 = (0);
seq__108034 = G__108049;
chunk__108035 = G__108050;
count__108036 = G__108051;
i__108037 = G__108052;
continue;
} else {
var vec__108041 = cljs.core.first.call(null,seq__108034__$1);
var k = cljs.core.nth.call(null,vec__108041,(0),null);
var plugin = cljs.core.nth.call(null,vec__108041,(1),null);
if(cljs.core.truth_(plugin)){
var pl_108053 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__108034,chunk__108035,count__108036,i__108037,pl_108053,vec__108041,k,plugin,seq__108034__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_108053.call(null,msg_hist);
});})(seq__108034,chunk__108035,count__108036,i__108037,pl_108053,vec__108041,k,plugin,seq__108034__$1,temp__4657__auto__))
);
} else {
}

var G__108054 = cljs.core.next.call(null,seq__108034__$1);
var G__108055 = null;
var G__108056 = (0);
var G__108057 = (0);
seq__108034 = G__108054;
chunk__108035 = G__108055;
count__108036 = G__108056;
i__108037 = G__108057;
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
var args108058 = [];
var len__26200__auto___108065 = arguments.length;
var i__26201__auto___108066 = (0);
while(true){
if((i__26201__auto___108066 < len__26200__auto___108065)){
args108058.push((arguments[i__26201__auto___108066]));

var G__108067 = (i__26201__auto___108066 + (1));
i__26201__auto___108066 = G__108067;
continue;
} else {
}
break;
}

var G__108060 = args108058.length;
switch (G__108060) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args108058.length)].join('')));

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

var seq__108061_108069 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__108062_108070 = null;
var count__108063_108071 = (0);
var i__108064_108072 = (0);
while(true){
if((i__108064_108072 < count__108063_108071)){
var msg_108073 = cljs.core._nth.call(null,chunk__108062_108070,i__108064_108072);
figwheel.client.socket.handle_incoming_message.call(null,msg_108073);

var G__108074 = seq__108061_108069;
var G__108075 = chunk__108062_108070;
var G__108076 = count__108063_108071;
var G__108077 = (i__108064_108072 + (1));
seq__108061_108069 = G__108074;
chunk__108062_108070 = G__108075;
count__108063_108071 = G__108076;
i__108064_108072 = G__108077;
continue;
} else {
var temp__4657__auto___108078 = cljs.core.seq.call(null,seq__108061_108069);
if(temp__4657__auto___108078){
var seq__108061_108079__$1 = temp__4657__auto___108078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__108061_108079__$1)){
var c__25936__auto___108080 = cljs.core.chunk_first.call(null,seq__108061_108079__$1);
var G__108081 = cljs.core.chunk_rest.call(null,seq__108061_108079__$1);
var G__108082 = c__25936__auto___108080;
var G__108083 = cljs.core.count.call(null,c__25936__auto___108080);
var G__108084 = (0);
seq__108061_108069 = G__108081;
chunk__108062_108070 = G__108082;
count__108063_108071 = G__108083;
i__108064_108072 = G__108084;
continue;
} else {
var msg_108085 = cljs.core.first.call(null,seq__108061_108079__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_108085);

var G__108086 = cljs.core.next.call(null,seq__108061_108079__$1);
var G__108087 = null;
var G__108088 = (0);
var G__108089 = (0);
seq__108061_108069 = G__108086;
chunk__108062_108070 = G__108087;
count__108063_108071 = G__108088;
i__108064_108072 = G__108089;
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
var len__26200__auto___108094 = arguments.length;
var i__26201__auto___108095 = (0);
while(true){
if((i__26201__auto___108095 < len__26200__auto___108094)){
args__26207__auto__.push((arguments[i__26201__auto___108095]));

var G__108096 = (i__26201__auto___108095 + (1));
i__26201__auto___108095 = G__108096;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__108091){
var map__108092 = p__108091;
var map__108092__$1 = ((((!((map__108092 == null)))?((((map__108092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__108092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108092):map__108092);
var opts = map__108092__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq108090){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq108090));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e108098){if((e108098 instanceof Error)){
var e = e108098;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e108098;

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
return (function (p__108102){
var map__108103 = p__108102;
var map__108103__$1 = ((((!((map__108103 == null)))?((((map__108103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__108103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108103):map__108103);
var msg_name = cljs.core.get.call(null,map__108103__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1488399920105