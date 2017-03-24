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
var args67005 = [];
var len__26200__auto___67008 = arguments.length;
var i__26201__auto___67009 = (0);
while(true){
if((i__26201__auto___67009 < len__26200__auto___67008)){
args67005.push((arguments[i__26201__auto___67009]));

var G__67010 = (i__26201__auto___67009 + (1));
i__26201__auto___67009 = G__67010;
continue;
} else {
}
break;
}

var G__67007 = args67005.length;
switch (G__67007) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67005.length)].join('')));

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
var len__26200__auto___67013 = arguments.length;
var i__26201__auto___67014 = (0);
while(true){
if((i__26201__auto___67014 < len__26200__auto___67013)){
args__26207__auto__.push((arguments[i__26201__auto___67014]));

var G__67015 = (i__26201__auto___67014 + (1));
i__26201__auto___67014 = G__67015;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq67012){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67012));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26207__auto__ = [];
var len__26200__auto___67017 = arguments.length;
var i__26201__auto___67018 = (0);
while(true){
if((i__26201__auto___67018 < len__26200__auto___67017)){
args__26207__auto__.push((arguments[i__26201__auto___67018]));

var G__67019 = (i__26201__auto___67018 + (1));
i__26201__auto___67018 = G__67019;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq67016){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67016));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__67020){
var map__67023 = p__67020;
var map__67023__$1 = ((((!((map__67023 == null)))?((((map__67023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67023):map__67023);
var message = cljs.core.get.call(null,map__67023__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__67023__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28398__auto___67185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto___67185,ch){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto___67185,ch){
return (function (state_67154){
var state_val_67155 = (state_67154[(1)]);
if((state_val_67155 === (7))){
var inst_67150 = (state_67154[(2)]);
var state_67154__$1 = state_67154;
var statearr_67156_67186 = state_67154__$1;
(statearr_67156_67186[(2)] = inst_67150);

(statearr_67156_67186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67155 === (1))){
var state_67154__$1 = state_67154;
var statearr_67157_67187 = state_67154__$1;
(statearr_67157_67187[(2)] = null);

(statearr_67157_67187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67155 === (4))){
var inst_67107 = (state_67154[(7)]);
var inst_67107__$1 = (state_67154[(2)]);
var state_67154__$1 = (function (){var statearr_67158 = state_67154;
(statearr_67158[(7)] = inst_67107__$1);

return statearr_67158;
})();
if(cljs.core.truth_(inst_67107__$1)){
var statearr_67159_67188 = state_67154__$1;
(statearr_67159_67188[(1)] = (5));

} else {
var statearr_67160_67189 = state_67154__$1;
(statearr_67160_67189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67155 === (15))){
var inst_67114 = (state_67154[(8)]);
var inst_67129 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_67114);
var inst_67130 = cljs.core.first.call(null,inst_67129);
var inst_67131 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_67130);
var inst_67132 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_67131)].join('');
var inst_67133 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_67132);
var state_67154__$1 = state_67154;
var statearr_67161_67190 = state_67154__$1;
(statearr_67161_67190[(2)] = inst_67133);

(statearr_67161_67190[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67155 === (13))){
var inst_67138 = (state_67154[(2)]);
var state_67154__$1 = state_67154;
var statearr_67162_67191 = state_67154__$1;
(statearr_67162_67191[(2)] = inst_67138);

(statearr_67162_67191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67155 === (6))){
var state_67154__$1 = state_67154;
var statearr_67163_67192 = state_67154__$1;
(statearr_67163_67192[(2)] = null);

(statearr_67163_67192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67155 === (17))){
var inst_67136 = (state_67154[(2)]);
var state_67154__$1 = state_67154;
var statearr_67164_67193 = state_67154__$1;
(statearr_67164_67193[(2)] = inst_67136);

(statearr_67164_67193[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67155 === (3))){
var inst_67152 = (state_67154[(2)]);
var state_67154__$1 = state_67154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67154__$1,inst_67152);
} else {
if((state_val_67155 === (12))){
var inst_67113 = (state_67154[(9)]);
var inst_67127 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_67113,opts);
var state_67154__$1 = state_67154;
if(cljs.core.truth_(inst_67127)){
var statearr_67165_67194 = state_67154__$1;
(statearr_67165_67194[(1)] = (15));

} else {
var statearr_67166_67195 = state_67154__$1;
(statearr_67166_67195[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67155 === (2))){
var state_67154__$1 = state_67154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67154__$1,(4),ch);
} else {
if((state_val_67155 === (11))){
var inst_67114 = (state_67154[(8)]);
var inst_67119 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67120 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_67114);
var inst_67121 = cljs.core.async.timeout.call(null,(1000));
var inst_67122 = [inst_67120,inst_67121];
var inst_67123 = (new cljs.core.PersistentVector(null,2,(5),inst_67119,inst_67122,null));
var state_67154__$1 = state_67154;
return cljs.core.async.ioc_alts_BANG_.call(null,state_67154__$1,(14),inst_67123);
} else {
if((state_val_67155 === (9))){
var inst_67114 = (state_67154[(8)]);
var inst_67140 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_67141 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_67114);
var inst_67142 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_67141);
var inst_67143 = [cljs.core.str("Not loading: "),cljs.core.str(inst_67142)].join('');
var inst_67144 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_67143);
var state_67154__$1 = (function (){var statearr_67167 = state_67154;
(statearr_67167[(10)] = inst_67140);

return statearr_67167;
})();
var statearr_67168_67196 = state_67154__$1;
(statearr_67168_67196[(2)] = inst_67144);

(statearr_67168_67196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67155 === (5))){
var inst_67107 = (state_67154[(7)]);
var inst_67109 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_67110 = (new cljs.core.PersistentArrayMap(null,2,inst_67109,null));
var inst_67111 = (new cljs.core.PersistentHashSet(null,inst_67110,null));
var inst_67112 = figwheel.client.focus_msgs.call(null,inst_67111,inst_67107);
var inst_67113 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_67112);
var inst_67114 = cljs.core.first.call(null,inst_67112);
var inst_67115 = figwheel.client.autoload_QMARK_.call(null);
var state_67154__$1 = (function (){var statearr_67169 = state_67154;
(statearr_67169[(9)] = inst_67113);

(statearr_67169[(8)] = inst_67114);

return statearr_67169;
})();
if(cljs.core.truth_(inst_67115)){
var statearr_67170_67197 = state_67154__$1;
(statearr_67170_67197[(1)] = (8));

} else {
var statearr_67171_67198 = state_67154__$1;
(statearr_67171_67198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67155 === (14))){
var inst_67125 = (state_67154[(2)]);
var state_67154__$1 = state_67154;
var statearr_67172_67199 = state_67154__$1;
(statearr_67172_67199[(2)] = inst_67125);

(statearr_67172_67199[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67155 === (16))){
var state_67154__$1 = state_67154;
var statearr_67173_67200 = state_67154__$1;
(statearr_67173_67200[(2)] = null);

(statearr_67173_67200[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67155 === (10))){
var inst_67146 = (state_67154[(2)]);
var state_67154__$1 = (function (){var statearr_67174 = state_67154;
(statearr_67174[(11)] = inst_67146);

return statearr_67174;
})();
var statearr_67175_67201 = state_67154__$1;
(statearr_67175_67201[(2)] = null);

(statearr_67175_67201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67155 === (8))){
var inst_67113 = (state_67154[(9)]);
var inst_67117 = figwheel.client.reload_file_state_QMARK_.call(null,inst_67113,opts);
var state_67154__$1 = state_67154;
if(cljs.core.truth_(inst_67117)){
var statearr_67176_67202 = state_67154__$1;
(statearr_67176_67202[(1)] = (11));

} else {
var statearr_67177_67203 = state_67154__$1;
(statearr_67177_67203[(1)] = (12));

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
});})(c__28398__auto___67185,ch))
;
return ((function (switch__28286__auto__,c__28398__auto___67185,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____0 = (function (){
var statearr_67181 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67181[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__);

(statearr_67181[(1)] = (1));

return statearr_67181;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____1 = (function (state_67154){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_67154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e67182){if((e67182 instanceof Object)){
var ex__28290__auto__ = e67182;
var statearr_67183_67204 = state_67154;
(statearr_67183_67204[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67205 = state_67154;
state_67154 = G__67205;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__ = function(state_67154){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____1.call(this,state_67154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto___67185,ch))
})();
var state__28400__auto__ = (function (){var statearr_67184 = f__28399__auto__.call(null);
(statearr_67184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto___67185);

return statearr_67184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto___67185,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__67206_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__67206_SHARP_));
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
var base_path_67209 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_67209){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e67208){if((e67208 instanceof Error)){
var e = e67208;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_67209], null));
} else {
var e = e67208;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_67209))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__67210){
var map__67219 = p__67210;
var map__67219__$1 = ((((!((map__67219 == null)))?((((map__67219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67219):map__67219);
var opts = map__67219__$1;
var build_id = cljs.core.get.call(null,map__67219__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__67219,map__67219__$1,opts,build_id){
return (function (p__67221){
var vec__67222 = p__67221;
var seq__67223 = cljs.core.seq.call(null,vec__67222);
var first__67224 = cljs.core.first.call(null,seq__67223);
var seq__67223__$1 = cljs.core.next.call(null,seq__67223);
var map__67225 = first__67224;
var map__67225__$1 = ((((!((map__67225 == null)))?((((map__67225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67225):map__67225);
var msg = map__67225__$1;
var msg_name = cljs.core.get.call(null,map__67225__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__67223__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__67222,seq__67223,first__67224,seq__67223__$1,map__67225,map__67225__$1,msg,msg_name,_,map__67219,map__67219__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__67222,seq__67223,first__67224,seq__67223__$1,map__67225,map__67225__$1,msg,msg_name,_,map__67219,map__67219__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__67219,map__67219__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__67233){
var vec__67234 = p__67233;
var seq__67235 = cljs.core.seq.call(null,vec__67234);
var first__67236 = cljs.core.first.call(null,seq__67235);
var seq__67235__$1 = cljs.core.next.call(null,seq__67235);
var map__67237 = first__67236;
var map__67237__$1 = ((((!((map__67237 == null)))?((((map__67237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67237):map__67237);
var msg = map__67237__$1;
var msg_name = cljs.core.get.call(null,map__67237__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__67235__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__67239){
var map__67251 = p__67239;
var map__67251__$1 = ((((!((map__67251 == null)))?((((map__67251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67251):map__67251);
var on_compile_warning = cljs.core.get.call(null,map__67251__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__67251__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__67251,map__67251__$1,on_compile_warning,on_compile_fail){
return (function (p__67253){
var vec__67254 = p__67253;
var seq__67255 = cljs.core.seq.call(null,vec__67254);
var first__67256 = cljs.core.first.call(null,seq__67255);
var seq__67255__$1 = cljs.core.next.call(null,seq__67255);
var map__67257 = first__67256;
var map__67257__$1 = ((((!((map__67257 == null)))?((((map__67257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67257):map__67257);
var msg = map__67257__$1;
var msg_name = cljs.core.get.call(null,map__67257__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__67255__$1;
var pred__67259 = cljs.core._EQ_;
var expr__67260 = msg_name;
if(cljs.core.truth_(pred__67259.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__67260))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__67259.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__67260))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__67251,map__67251__$1,on_compile_warning,on_compile_fail))
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
return (function (state_67488){
var state_val_67489 = (state_67488[(1)]);
if((state_val_67489 === (7))){
var inst_67408 = (state_67488[(2)]);
var state_67488__$1 = state_67488;
if(cljs.core.truth_(inst_67408)){
var statearr_67490_67540 = state_67488__$1;
(statearr_67490_67540[(1)] = (8));

} else {
var statearr_67491_67541 = state_67488__$1;
(statearr_67491_67541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (20))){
var inst_67482 = (state_67488[(2)]);
var state_67488__$1 = state_67488;
var statearr_67492_67542 = state_67488__$1;
(statearr_67492_67542[(2)] = inst_67482);

(statearr_67492_67542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (27))){
var inst_67478 = (state_67488[(2)]);
var state_67488__$1 = state_67488;
var statearr_67493_67543 = state_67488__$1;
(statearr_67493_67543[(2)] = inst_67478);

(statearr_67493_67543[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (1))){
var inst_67401 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_67488__$1 = state_67488;
if(cljs.core.truth_(inst_67401)){
var statearr_67494_67544 = state_67488__$1;
(statearr_67494_67544[(1)] = (2));

} else {
var statearr_67495_67545 = state_67488__$1;
(statearr_67495_67545[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (24))){
var inst_67480 = (state_67488[(2)]);
var state_67488__$1 = state_67488;
var statearr_67496_67546 = state_67488__$1;
(statearr_67496_67546[(2)] = inst_67480);

(statearr_67496_67546[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (4))){
var inst_67486 = (state_67488[(2)]);
var state_67488__$1 = state_67488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67488__$1,inst_67486);
} else {
if((state_val_67489 === (15))){
var inst_67484 = (state_67488[(2)]);
var state_67488__$1 = state_67488;
var statearr_67497_67547 = state_67488__$1;
(statearr_67497_67547[(2)] = inst_67484);

(statearr_67497_67547[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (21))){
var inst_67437 = (state_67488[(2)]);
var inst_67438 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67439 = figwheel.client.auto_jump_to_error.call(null,opts,inst_67438);
var state_67488__$1 = (function (){var statearr_67498 = state_67488;
(statearr_67498[(7)] = inst_67437);

return statearr_67498;
})();
var statearr_67499_67548 = state_67488__$1;
(statearr_67499_67548[(2)] = inst_67439);

(statearr_67499_67548[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (31))){
var inst_67467 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_67488__$1 = state_67488;
if(cljs.core.truth_(inst_67467)){
var statearr_67500_67549 = state_67488__$1;
(statearr_67500_67549[(1)] = (34));

} else {
var statearr_67501_67550 = state_67488__$1;
(statearr_67501_67550[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (32))){
var inst_67476 = (state_67488[(2)]);
var state_67488__$1 = state_67488;
var statearr_67502_67551 = state_67488__$1;
(statearr_67502_67551[(2)] = inst_67476);

(statearr_67502_67551[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (33))){
var inst_67463 = (state_67488[(2)]);
var inst_67464 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67465 = figwheel.client.auto_jump_to_error.call(null,opts,inst_67464);
var state_67488__$1 = (function (){var statearr_67503 = state_67488;
(statearr_67503[(8)] = inst_67463);

return statearr_67503;
})();
var statearr_67504_67552 = state_67488__$1;
(statearr_67504_67552[(2)] = inst_67465);

(statearr_67504_67552[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (13))){
var inst_67422 = figwheel.client.heads_up.clear.call(null);
var state_67488__$1 = state_67488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67488__$1,(16),inst_67422);
} else {
if((state_val_67489 === (22))){
var inst_67443 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67444 = figwheel.client.heads_up.append_warning_message.call(null,inst_67443);
var state_67488__$1 = state_67488;
var statearr_67505_67553 = state_67488__$1;
(statearr_67505_67553[(2)] = inst_67444);

(statearr_67505_67553[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (36))){
var inst_67474 = (state_67488[(2)]);
var state_67488__$1 = state_67488;
var statearr_67506_67554 = state_67488__$1;
(statearr_67506_67554[(2)] = inst_67474);

(statearr_67506_67554[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (29))){
var inst_67454 = (state_67488[(2)]);
var inst_67455 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67456 = figwheel.client.auto_jump_to_error.call(null,opts,inst_67455);
var state_67488__$1 = (function (){var statearr_67507 = state_67488;
(statearr_67507[(9)] = inst_67454);

return statearr_67507;
})();
var statearr_67508_67555 = state_67488__$1;
(statearr_67508_67555[(2)] = inst_67456);

(statearr_67508_67555[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (6))){
var inst_67403 = (state_67488[(10)]);
var state_67488__$1 = state_67488;
var statearr_67509_67556 = state_67488__$1;
(statearr_67509_67556[(2)] = inst_67403);

(statearr_67509_67556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (28))){
var inst_67450 = (state_67488[(2)]);
var inst_67451 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67452 = figwheel.client.heads_up.display_warning.call(null,inst_67451);
var state_67488__$1 = (function (){var statearr_67510 = state_67488;
(statearr_67510[(11)] = inst_67450);

return statearr_67510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67488__$1,(29),inst_67452);
} else {
if((state_val_67489 === (25))){
var inst_67448 = figwheel.client.heads_up.clear.call(null);
var state_67488__$1 = state_67488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67488__$1,(28),inst_67448);
} else {
if((state_val_67489 === (34))){
var inst_67469 = figwheel.client.heads_up.flash_loaded.call(null);
var state_67488__$1 = state_67488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67488__$1,(37),inst_67469);
} else {
if((state_val_67489 === (17))){
var inst_67428 = (state_67488[(2)]);
var inst_67429 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67430 = figwheel.client.auto_jump_to_error.call(null,opts,inst_67429);
var state_67488__$1 = (function (){var statearr_67511 = state_67488;
(statearr_67511[(12)] = inst_67428);

return statearr_67511;
})();
var statearr_67512_67557 = state_67488__$1;
(statearr_67512_67557[(2)] = inst_67430);

(statearr_67512_67557[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (3))){
var inst_67420 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_67488__$1 = state_67488;
if(cljs.core.truth_(inst_67420)){
var statearr_67513_67558 = state_67488__$1;
(statearr_67513_67558[(1)] = (13));

} else {
var statearr_67514_67559 = state_67488__$1;
(statearr_67514_67559[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (12))){
var inst_67416 = (state_67488[(2)]);
var state_67488__$1 = state_67488;
var statearr_67515_67560 = state_67488__$1;
(statearr_67515_67560[(2)] = inst_67416);

(statearr_67515_67560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (2))){
var inst_67403 = (state_67488[(10)]);
var inst_67403__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_67488__$1 = (function (){var statearr_67516 = state_67488;
(statearr_67516[(10)] = inst_67403__$1);

return statearr_67516;
})();
if(cljs.core.truth_(inst_67403__$1)){
var statearr_67517_67561 = state_67488__$1;
(statearr_67517_67561[(1)] = (5));

} else {
var statearr_67518_67562 = state_67488__$1;
(statearr_67518_67562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (23))){
var inst_67446 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_67488__$1 = state_67488;
if(cljs.core.truth_(inst_67446)){
var statearr_67519_67563 = state_67488__$1;
(statearr_67519_67563[(1)] = (25));

} else {
var statearr_67520_67564 = state_67488__$1;
(statearr_67520_67564[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (35))){
var state_67488__$1 = state_67488;
var statearr_67521_67565 = state_67488__$1;
(statearr_67521_67565[(2)] = null);

(statearr_67521_67565[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (19))){
var inst_67441 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_67488__$1 = state_67488;
if(cljs.core.truth_(inst_67441)){
var statearr_67522_67566 = state_67488__$1;
(statearr_67522_67566[(1)] = (22));

} else {
var statearr_67523_67567 = state_67488__$1;
(statearr_67523_67567[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (11))){
var inst_67412 = (state_67488[(2)]);
var state_67488__$1 = state_67488;
var statearr_67524_67568 = state_67488__$1;
(statearr_67524_67568[(2)] = inst_67412);

(statearr_67524_67568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (9))){
var inst_67414 = figwheel.client.heads_up.clear.call(null);
var state_67488__$1 = state_67488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67488__$1,(12),inst_67414);
} else {
if((state_val_67489 === (5))){
var inst_67405 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_67488__$1 = state_67488;
var statearr_67525_67569 = state_67488__$1;
(statearr_67525_67569[(2)] = inst_67405);

(statearr_67525_67569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (14))){
var inst_67432 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_67488__$1 = state_67488;
if(cljs.core.truth_(inst_67432)){
var statearr_67526_67570 = state_67488__$1;
(statearr_67526_67570[(1)] = (18));

} else {
var statearr_67527_67571 = state_67488__$1;
(statearr_67527_67571[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (26))){
var inst_67458 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_67488__$1 = state_67488;
if(cljs.core.truth_(inst_67458)){
var statearr_67528_67572 = state_67488__$1;
(statearr_67528_67572[(1)] = (30));

} else {
var statearr_67529_67573 = state_67488__$1;
(statearr_67529_67573[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (16))){
var inst_67424 = (state_67488[(2)]);
var inst_67425 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67426 = figwheel.client.heads_up.display_exception.call(null,inst_67425);
var state_67488__$1 = (function (){var statearr_67530 = state_67488;
(statearr_67530[(13)] = inst_67424);

return statearr_67530;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67488__$1,(17),inst_67426);
} else {
if((state_val_67489 === (30))){
var inst_67460 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67461 = figwheel.client.heads_up.display_warning.call(null,inst_67460);
var state_67488__$1 = state_67488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67488__$1,(33),inst_67461);
} else {
if((state_val_67489 === (10))){
var inst_67418 = (state_67488[(2)]);
var state_67488__$1 = state_67488;
var statearr_67531_67574 = state_67488__$1;
(statearr_67531_67574[(2)] = inst_67418);

(statearr_67531_67574[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (18))){
var inst_67434 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67435 = figwheel.client.heads_up.display_exception.call(null,inst_67434);
var state_67488__$1 = state_67488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67488__$1,(21),inst_67435);
} else {
if((state_val_67489 === (37))){
var inst_67471 = (state_67488[(2)]);
var state_67488__$1 = state_67488;
var statearr_67532_67575 = state_67488__$1;
(statearr_67532_67575[(2)] = inst_67471);

(statearr_67532_67575[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67489 === (8))){
var inst_67410 = figwheel.client.heads_up.flash_loaded.call(null);
var state_67488__$1 = state_67488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67488__$1,(11),inst_67410);
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
var statearr_67536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67536[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__);

(statearr_67536[(1)] = (1));

return statearr_67536;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____1 = (function (state_67488){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_67488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e67537){if((e67537 instanceof Object)){
var ex__28290__auto__ = e67537;
var statearr_67538_67576 = state_67488;
(statearr_67538_67576[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67577 = state_67488;
state_67488 = G__67577;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__ = function(state_67488){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____1.call(this,state_67488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__,msg_hist,msg_names,msg))
})();
var state__28400__auto__ = (function (){var statearr_67539 = f__28399__auto__.call(null);
(statearr_67539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_67539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto__,msg_hist,msg_names,msg))
);

return c__28398__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28398__auto___67640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto___67640,ch){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto___67640,ch){
return (function (state_67623){
var state_val_67624 = (state_67623[(1)]);
if((state_val_67624 === (1))){
var state_67623__$1 = state_67623;
var statearr_67625_67641 = state_67623__$1;
(statearr_67625_67641[(2)] = null);

(statearr_67625_67641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67624 === (2))){
var state_67623__$1 = state_67623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67623__$1,(4),ch);
} else {
if((state_val_67624 === (3))){
var inst_67621 = (state_67623[(2)]);
var state_67623__$1 = state_67623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67623__$1,inst_67621);
} else {
if((state_val_67624 === (4))){
var inst_67611 = (state_67623[(7)]);
var inst_67611__$1 = (state_67623[(2)]);
var state_67623__$1 = (function (){var statearr_67626 = state_67623;
(statearr_67626[(7)] = inst_67611__$1);

return statearr_67626;
})();
if(cljs.core.truth_(inst_67611__$1)){
var statearr_67627_67642 = state_67623__$1;
(statearr_67627_67642[(1)] = (5));

} else {
var statearr_67628_67643 = state_67623__$1;
(statearr_67628_67643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67624 === (5))){
var inst_67611 = (state_67623[(7)]);
var inst_67613 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_67611);
var state_67623__$1 = state_67623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67623__$1,(8),inst_67613);
} else {
if((state_val_67624 === (6))){
var state_67623__$1 = state_67623;
var statearr_67629_67644 = state_67623__$1;
(statearr_67629_67644[(2)] = null);

(statearr_67629_67644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67624 === (7))){
var inst_67619 = (state_67623[(2)]);
var state_67623__$1 = state_67623;
var statearr_67630_67645 = state_67623__$1;
(statearr_67630_67645[(2)] = inst_67619);

(statearr_67630_67645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67624 === (8))){
var inst_67615 = (state_67623[(2)]);
var state_67623__$1 = (function (){var statearr_67631 = state_67623;
(statearr_67631[(8)] = inst_67615);

return statearr_67631;
})();
var statearr_67632_67646 = state_67623__$1;
(statearr_67632_67646[(2)] = null);

(statearr_67632_67646[(1)] = (2));


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
});})(c__28398__auto___67640,ch))
;
return ((function (switch__28286__auto__,c__28398__auto___67640,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28287__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28287__auto____0 = (function (){
var statearr_67636 = [null,null,null,null,null,null,null,null,null];
(statearr_67636[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28287__auto__);

(statearr_67636[(1)] = (1));

return statearr_67636;
});
var figwheel$client$heads_up_plugin_$_state_machine__28287__auto____1 = (function (state_67623){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_67623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e67637){if((e67637 instanceof Object)){
var ex__28290__auto__ = e67637;
var statearr_67638_67647 = state_67623;
(statearr_67638_67647[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67648 = state_67623;
state_67623 = G__67648;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28287__auto__ = function(state_67623){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28287__auto____1.call(this,state_67623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28287__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28287__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto___67640,ch))
})();
var state__28400__auto__ = (function (){var statearr_67639 = f__28399__auto__.call(null);
(statearr_67639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto___67640);

return statearr_67639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto___67640,ch))
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
return (function (state_67669){
var state_val_67670 = (state_67669[(1)]);
if((state_val_67670 === (1))){
var inst_67664 = cljs.core.async.timeout.call(null,(3000));
var state_67669__$1 = state_67669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67669__$1,(2),inst_67664);
} else {
if((state_val_67670 === (2))){
var inst_67666 = (state_67669[(2)]);
var inst_67667 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_67669__$1 = (function (){var statearr_67671 = state_67669;
(statearr_67671[(7)] = inst_67666);

return statearr_67671;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67669__$1,inst_67667);
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
var statearr_67675 = [null,null,null,null,null,null,null,null];
(statearr_67675[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__);

(statearr_67675[(1)] = (1));

return statearr_67675;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____1 = (function (state_67669){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_67669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e67676){if((e67676 instanceof Object)){
var ex__28290__auto__ = e67676;
var statearr_67677_67679 = state_67669;
(statearr_67677_67679[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67680 = state_67669;
state_67669 = G__67680;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__ = function(state_67669){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____1.call(this,state_67669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__))
})();
var state__28400__auto__ = (function (){var statearr_67678 = f__28399__auto__.call(null);
(statearr_67678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_67678;
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
return (function (state_67703){
var state_val_67704 = (state_67703[(1)]);
if((state_val_67704 === (1))){
var inst_67697 = cljs.core.async.timeout.call(null,(2000));
var state_67703__$1 = state_67703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67703__$1,(2),inst_67697);
} else {
if((state_val_67704 === (2))){
var inst_67699 = (state_67703[(2)]);
var inst_67700 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_67701 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_67700);
var state_67703__$1 = (function (){var statearr_67705 = state_67703;
(statearr_67705[(7)] = inst_67699);

return statearr_67705;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67703__$1,inst_67701);
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
var statearr_67709 = [null,null,null,null,null,null,null,null];
(statearr_67709[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__);

(statearr_67709[(1)] = (1));

return statearr_67709;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____1 = (function (state_67703){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_67703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e67710){if((e67710 instanceof Object)){
var ex__28290__auto__ = e67710;
var statearr_67711_67713 = state_67703;
(statearr_67711_67713[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67714 = state_67703;
state_67703 = G__67714;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__ = function(state_67703){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____1.call(this,state_67703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28400__auto__ = (function (){var statearr_67712 = f__28399__auto__.call(null);
(statearr_67712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_67712;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__67715){
var map__67719 = p__67715;
var map__67719__$1 = ((((!((map__67719 == null)))?((((map__67719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67719):map__67719);
var file = cljs.core.get.call(null,map__67719__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__67719__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__67719__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__67721 = "";
var G__67721__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__67721),cljs.core.str("file "),cljs.core.str(file)].join(''):G__67721);
var G__67721__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__67721__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__67721__$1);
if(cljs.core.truth_((function (){var and__25113__auto__ = line;
if(cljs.core.truth_(and__25113__auto__)){
return column;
} else {
return and__25113__auto__;
}
})())){
return [cljs.core.str(G__67721__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__67721__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__67722){
var map__67729 = p__67722;
var map__67729__$1 = ((((!((map__67729 == null)))?((((map__67729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67729):map__67729);
var ed = map__67729__$1;
var formatted_exception = cljs.core.get.call(null,map__67729__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__67729__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__67729__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__67731_67735 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__67732_67736 = null;
var count__67733_67737 = (0);
var i__67734_67738 = (0);
while(true){
if((i__67734_67738 < count__67733_67737)){
var msg_67739 = cljs.core._nth.call(null,chunk__67732_67736,i__67734_67738);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_67739);

var G__67740 = seq__67731_67735;
var G__67741 = chunk__67732_67736;
var G__67742 = count__67733_67737;
var G__67743 = (i__67734_67738 + (1));
seq__67731_67735 = G__67740;
chunk__67732_67736 = G__67741;
count__67733_67737 = G__67742;
i__67734_67738 = G__67743;
continue;
} else {
var temp__4657__auto___67744 = cljs.core.seq.call(null,seq__67731_67735);
if(temp__4657__auto___67744){
var seq__67731_67745__$1 = temp__4657__auto___67744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67731_67745__$1)){
var c__25936__auto___67746 = cljs.core.chunk_first.call(null,seq__67731_67745__$1);
var G__67747 = cljs.core.chunk_rest.call(null,seq__67731_67745__$1);
var G__67748 = c__25936__auto___67746;
var G__67749 = cljs.core.count.call(null,c__25936__auto___67746);
var G__67750 = (0);
seq__67731_67735 = G__67747;
chunk__67732_67736 = G__67748;
count__67733_67737 = G__67749;
i__67734_67738 = G__67750;
continue;
} else {
var msg_67751 = cljs.core.first.call(null,seq__67731_67745__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_67751);

var G__67752 = cljs.core.next.call(null,seq__67731_67745__$1);
var G__67753 = null;
var G__67754 = (0);
var G__67755 = (0);
seq__67731_67735 = G__67752;
chunk__67732_67736 = G__67753;
count__67733_67737 = G__67754;
i__67734_67738 = G__67755;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__67756){
var map__67759 = p__67756;
var map__67759__$1 = ((((!((map__67759 == null)))?((((map__67759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67759):map__67759);
var w = map__67759__$1;
var message = cljs.core.get.call(null,map__67759__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__67771 = cljs.core.seq.call(null,plugins);
var chunk__67772 = null;
var count__67773 = (0);
var i__67774 = (0);
while(true){
if((i__67774 < count__67773)){
var vec__67775 = cljs.core._nth.call(null,chunk__67772,i__67774);
var k = cljs.core.nth.call(null,vec__67775,(0),null);
var plugin = cljs.core.nth.call(null,vec__67775,(1),null);
if(cljs.core.truth_(plugin)){
var pl_67781 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__67771,chunk__67772,count__67773,i__67774,pl_67781,vec__67775,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_67781.call(null,msg_hist);
});})(seq__67771,chunk__67772,count__67773,i__67774,pl_67781,vec__67775,k,plugin))
);
} else {
}

var G__67782 = seq__67771;
var G__67783 = chunk__67772;
var G__67784 = count__67773;
var G__67785 = (i__67774 + (1));
seq__67771 = G__67782;
chunk__67772 = G__67783;
count__67773 = G__67784;
i__67774 = G__67785;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__67771);
if(temp__4657__auto__){
var seq__67771__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67771__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__67771__$1);
var G__67786 = cljs.core.chunk_rest.call(null,seq__67771__$1);
var G__67787 = c__25936__auto__;
var G__67788 = cljs.core.count.call(null,c__25936__auto__);
var G__67789 = (0);
seq__67771 = G__67786;
chunk__67772 = G__67787;
count__67773 = G__67788;
i__67774 = G__67789;
continue;
} else {
var vec__67778 = cljs.core.first.call(null,seq__67771__$1);
var k = cljs.core.nth.call(null,vec__67778,(0),null);
var plugin = cljs.core.nth.call(null,vec__67778,(1),null);
if(cljs.core.truth_(plugin)){
var pl_67790 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__67771,chunk__67772,count__67773,i__67774,pl_67790,vec__67778,k,plugin,seq__67771__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_67790.call(null,msg_hist);
});})(seq__67771,chunk__67772,count__67773,i__67774,pl_67790,vec__67778,k,plugin,seq__67771__$1,temp__4657__auto__))
);
} else {
}

var G__67791 = cljs.core.next.call(null,seq__67771__$1);
var G__67792 = null;
var G__67793 = (0);
var G__67794 = (0);
seq__67771 = G__67791;
chunk__67772 = G__67792;
count__67773 = G__67793;
i__67774 = G__67794;
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
var args67795 = [];
var len__26200__auto___67802 = arguments.length;
var i__26201__auto___67803 = (0);
while(true){
if((i__26201__auto___67803 < len__26200__auto___67802)){
args67795.push((arguments[i__26201__auto___67803]));

var G__67804 = (i__26201__auto___67803 + (1));
i__26201__auto___67803 = G__67804;
continue;
} else {
}
break;
}

var G__67797 = args67795.length;
switch (G__67797) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67795.length)].join('')));

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

var seq__67798_67806 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__67799_67807 = null;
var count__67800_67808 = (0);
var i__67801_67809 = (0);
while(true){
if((i__67801_67809 < count__67800_67808)){
var msg_67810 = cljs.core._nth.call(null,chunk__67799_67807,i__67801_67809);
figwheel.client.socket.handle_incoming_message.call(null,msg_67810);

var G__67811 = seq__67798_67806;
var G__67812 = chunk__67799_67807;
var G__67813 = count__67800_67808;
var G__67814 = (i__67801_67809 + (1));
seq__67798_67806 = G__67811;
chunk__67799_67807 = G__67812;
count__67800_67808 = G__67813;
i__67801_67809 = G__67814;
continue;
} else {
var temp__4657__auto___67815 = cljs.core.seq.call(null,seq__67798_67806);
if(temp__4657__auto___67815){
var seq__67798_67816__$1 = temp__4657__auto___67815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67798_67816__$1)){
var c__25936__auto___67817 = cljs.core.chunk_first.call(null,seq__67798_67816__$1);
var G__67818 = cljs.core.chunk_rest.call(null,seq__67798_67816__$1);
var G__67819 = c__25936__auto___67817;
var G__67820 = cljs.core.count.call(null,c__25936__auto___67817);
var G__67821 = (0);
seq__67798_67806 = G__67818;
chunk__67799_67807 = G__67819;
count__67800_67808 = G__67820;
i__67801_67809 = G__67821;
continue;
} else {
var msg_67822 = cljs.core.first.call(null,seq__67798_67816__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_67822);

var G__67823 = cljs.core.next.call(null,seq__67798_67816__$1);
var G__67824 = null;
var G__67825 = (0);
var G__67826 = (0);
seq__67798_67806 = G__67823;
chunk__67799_67807 = G__67824;
count__67800_67808 = G__67825;
i__67801_67809 = G__67826;
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
var len__26200__auto___67831 = arguments.length;
var i__26201__auto___67832 = (0);
while(true){
if((i__26201__auto___67832 < len__26200__auto___67831)){
args__26207__auto__.push((arguments[i__26201__auto___67832]));

var G__67833 = (i__26201__auto___67832 + (1));
i__26201__auto___67832 = G__67833;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__67828){
var map__67829 = p__67828;
var map__67829__$1 = ((((!((map__67829 == null)))?((((map__67829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67829):map__67829);
var opts = map__67829__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq67827){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67827));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e67835){if((e67835 instanceof Error)){
var e = e67835;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e67835;

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
return (function (p__67839){
var map__67840 = p__67839;
var map__67840__$1 = ((((!((map__67840 == null)))?((((map__67840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67840):map__67840);
var msg_name = cljs.core.get.call(null,map__67840__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1488396754516