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
var args120769 = [];
var len__26200__auto___120772 = arguments.length;
var i__26201__auto___120773 = (0);
while(true){
if((i__26201__auto___120773 < len__26200__auto___120772)){
args120769.push((arguments[i__26201__auto___120773]));

var G__120774 = (i__26201__auto___120773 + (1));
i__26201__auto___120773 = G__120774;
continue;
} else {
}
break;
}

var G__120771 = args120769.length;
switch (G__120771) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args120769.length)].join('')));

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
var len__26200__auto___120777 = arguments.length;
var i__26201__auto___120778 = (0);
while(true){
if((i__26201__auto___120778 < len__26200__auto___120777)){
args__26207__auto__.push((arguments[i__26201__auto___120778]));

var G__120779 = (i__26201__auto___120778 + (1));
i__26201__auto___120778 = G__120779;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq120776){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq120776));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26207__auto__ = [];
var len__26200__auto___120781 = arguments.length;
var i__26201__auto___120782 = (0);
while(true){
if((i__26201__auto___120782 < len__26200__auto___120781)){
args__26207__auto__.push((arguments[i__26201__auto___120782]));

var G__120783 = (i__26201__auto___120782 + (1));
i__26201__auto___120782 = G__120783;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq120780){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq120780));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__120784){
var map__120787 = p__120784;
var map__120787__$1 = ((((!((map__120787 == null)))?((((map__120787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120787):map__120787);
var message = cljs.core.get.call(null,map__120787__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__120787__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28398__auto___120949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto___120949,ch){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto___120949,ch){
return (function (state_120918){
var state_val_120919 = (state_120918[(1)]);
if((state_val_120919 === (7))){
var inst_120914 = (state_120918[(2)]);
var state_120918__$1 = state_120918;
var statearr_120920_120950 = state_120918__$1;
(statearr_120920_120950[(2)] = inst_120914);

(statearr_120920_120950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120919 === (1))){
var state_120918__$1 = state_120918;
var statearr_120921_120951 = state_120918__$1;
(statearr_120921_120951[(2)] = null);

(statearr_120921_120951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120919 === (4))){
var inst_120871 = (state_120918[(7)]);
var inst_120871__$1 = (state_120918[(2)]);
var state_120918__$1 = (function (){var statearr_120922 = state_120918;
(statearr_120922[(7)] = inst_120871__$1);

return statearr_120922;
})();
if(cljs.core.truth_(inst_120871__$1)){
var statearr_120923_120952 = state_120918__$1;
(statearr_120923_120952[(1)] = (5));

} else {
var statearr_120924_120953 = state_120918__$1;
(statearr_120924_120953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120919 === (15))){
var inst_120878 = (state_120918[(8)]);
var inst_120893 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_120878);
var inst_120894 = cljs.core.first.call(null,inst_120893);
var inst_120895 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_120894);
var inst_120896 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_120895)].join('');
var inst_120897 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_120896);
var state_120918__$1 = state_120918;
var statearr_120925_120954 = state_120918__$1;
(statearr_120925_120954[(2)] = inst_120897);

(statearr_120925_120954[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120919 === (13))){
var inst_120902 = (state_120918[(2)]);
var state_120918__$1 = state_120918;
var statearr_120926_120955 = state_120918__$1;
(statearr_120926_120955[(2)] = inst_120902);

(statearr_120926_120955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120919 === (6))){
var state_120918__$1 = state_120918;
var statearr_120927_120956 = state_120918__$1;
(statearr_120927_120956[(2)] = null);

(statearr_120927_120956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120919 === (17))){
var inst_120900 = (state_120918[(2)]);
var state_120918__$1 = state_120918;
var statearr_120928_120957 = state_120918__$1;
(statearr_120928_120957[(2)] = inst_120900);

(statearr_120928_120957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120919 === (3))){
var inst_120916 = (state_120918[(2)]);
var state_120918__$1 = state_120918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_120918__$1,inst_120916);
} else {
if((state_val_120919 === (12))){
var inst_120877 = (state_120918[(9)]);
var inst_120891 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_120877,opts);
var state_120918__$1 = state_120918;
if(cljs.core.truth_(inst_120891)){
var statearr_120929_120958 = state_120918__$1;
(statearr_120929_120958[(1)] = (15));

} else {
var statearr_120930_120959 = state_120918__$1;
(statearr_120930_120959[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120919 === (2))){
var state_120918__$1 = state_120918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_120918__$1,(4),ch);
} else {
if((state_val_120919 === (11))){
var inst_120878 = (state_120918[(8)]);
var inst_120883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_120884 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_120878);
var inst_120885 = cljs.core.async.timeout.call(null,(1000));
var inst_120886 = [inst_120884,inst_120885];
var inst_120887 = (new cljs.core.PersistentVector(null,2,(5),inst_120883,inst_120886,null));
var state_120918__$1 = state_120918;
return cljs.core.async.ioc_alts_BANG_.call(null,state_120918__$1,(14),inst_120887);
} else {
if((state_val_120919 === (9))){
var inst_120878 = (state_120918[(8)]);
var inst_120904 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_120905 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_120878);
var inst_120906 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_120905);
var inst_120907 = [cljs.core.str("Not loading: "),cljs.core.str(inst_120906)].join('');
var inst_120908 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_120907);
var state_120918__$1 = (function (){var statearr_120931 = state_120918;
(statearr_120931[(10)] = inst_120904);

return statearr_120931;
})();
var statearr_120932_120960 = state_120918__$1;
(statearr_120932_120960[(2)] = inst_120908);

(statearr_120932_120960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120919 === (5))){
var inst_120871 = (state_120918[(7)]);
var inst_120873 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_120874 = (new cljs.core.PersistentArrayMap(null,2,inst_120873,null));
var inst_120875 = (new cljs.core.PersistentHashSet(null,inst_120874,null));
var inst_120876 = figwheel.client.focus_msgs.call(null,inst_120875,inst_120871);
var inst_120877 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_120876);
var inst_120878 = cljs.core.first.call(null,inst_120876);
var inst_120879 = figwheel.client.autoload_QMARK_.call(null);
var state_120918__$1 = (function (){var statearr_120933 = state_120918;
(statearr_120933[(9)] = inst_120877);

(statearr_120933[(8)] = inst_120878);

return statearr_120933;
})();
if(cljs.core.truth_(inst_120879)){
var statearr_120934_120961 = state_120918__$1;
(statearr_120934_120961[(1)] = (8));

} else {
var statearr_120935_120962 = state_120918__$1;
(statearr_120935_120962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120919 === (14))){
var inst_120889 = (state_120918[(2)]);
var state_120918__$1 = state_120918;
var statearr_120936_120963 = state_120918__$1;
(statearr_120936_120963[(2)] = inst_120889);

(statearr_120936_120963[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120919 === (16))){
var state_120918__$1 = state_120918;
var statearr_120937_120964 = state_120918__$1;
(statearr_120937_120964[(2)] = null);

(statearr_120937_120964[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120919 === (10))){
var inst_120910 = (state_120918[(2)]);
var state_120918__$1 = (function (){var statearr_120938 = state_120918;
(statearr_120938[(11)] = inst_120910);

return statearr_120938;
})();
var statearr_120939_120965 = state_120918__$1;
(statearr_120939_120965[(2)] = null);

(statearr_120939_120965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120919 === (8))){
var inst_120877 = (state_120918[(9)]);
var inst_120881 = figwheel.client.reload_file_state_QMARK_.call(null,inst_120877,opts);
var state_120918__$1 = state_120918;
if(cljs.core.truth_(inst_120881)){
var statearr_120940_120966 = state_120918__$1;
(statearr_120940_120966[(1)] = (11));

} else {
var statearr_120941_120967 = state_120918__$1;
(statearr_120941_120967[(1)] = (12));

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
});})(c__28398__auto___120949,ch))
;
return ((function (switch__28286__auto__,c__28398__auto___120949,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____0 = (function (){
var statearr_120945 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_120945[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__);

(statearr_120945[(1)] = (1));

return statearr_120945;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____1 = (function (state_120918){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_120918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e120946){if((e120946 instanceof Object)){
var ex__28290__auto__ = e120946;
var statearr_120947_120968 = state_120918;
(statearr_120947_120968[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_120918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e120946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120969 = state_120918;
state_120918 = G__120969;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__ = function(state_120918){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____1.call(this,state_120918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28287__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto___120949,ch))
})();
var state__28400__auto__ = (function (){var statearr_120948 = f__28399__auto__.call(null);
(statearr_120948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto___120949);

return statearr_120948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto___120949,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__120970_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__120970_SHARP_));
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
var base_path_120973 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_120973){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e120972){if((e120972 instanceof Error)){
var e = e120972;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_120973], null));
} else {
var e = e120972;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_120973))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__120974){
var map__120983 = p__120974;
var map__120983__$1 = ((((!((map__120983 == null)))?((((map__120983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120983):map__120983);
var opts = map__120983__$1;
var build_id = cljs.core.get.call(null,map__120983__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__120983,map__120983__$1,opts,build_id){
return (function (p__120985){
var vec__120986 = p__120985;
var seq__120987 = cljs.core.seq.call(null,vec__120986);
var first__120988 = cljs.core.first.call(null,seq__120987);
var seq__120987__$1 = cljs.core.next.call(null,seq__120987);
var map__120989 = first__120988;
var map__120989__$1 = ((((!((map__120989 == null)))?((((map__120989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120989):map__120989);
var msg = map__120989__$1;
var msg_name = cljs.core.get.call(null,map__120989__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__120987__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__120986,seq__120987,first__120988,seq__120987__$1,map__120989,map__120989__$1,msg,msg_name,_,map__120983,map__120983__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__120986,seq__120987,first__120988,seq__120987__$1,map__120989,map__120989__$1,msg,msg_name,_,map__120983,map__120983__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__120983,map__120983__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__120997){
var vec__120998 = p__120997;
var seq__120999 = cljs.core.seq.call(null,vec__120998);
var first__121000 = cljs.core.first.call(null,seq__120999);
var seq__120999__$1 = cljs.core.next.call(null,seq__120999);
var map__121001 = first__121000;
var map__121001__$1 = ((((!((map__121001 == null)))?((((map__121001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__121001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__121001):map__121001);
var msg = map__121001__$1;
var msg_name = cljs.core.get.call(null,map__121001__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__120999__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__121003){
var map__121015 = p__121003;
var map__121015__$1 = ((((!((map__121015 == null)))?((((map__121015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__121015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__121015):map__121015);
var on_compile_warning = cljs.core.get.call(null,map__121015__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__121015__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__121015,map__121015__$1,on_compile_warning,on_compile_fail){
return (function (p__121017){
var vec__121018 = p__121017;
var seq__121019 = cljs.core.seq.call(null,vec__121018);
var first__121020 = cljs.core.first.call(null,seq__121019);
var seq__121019__$1 = cljs.core.next.call(null,seq__121019);
var map__121021 = first__121020;
var map__121021__$1 = ((((!((map__121021 == null)))?((((map__121021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__121021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__121021):map__121021);
var msg = map__121021__$1;
var msg_name = cljs.core.get.call(null,map__121021__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__121019__$1;
var pred__121023 = cljs.core._EQ_;
var expr__121024 = msg_name;
if(cljs.core.truth_(pred__121023.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__121024))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__121023.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__121024))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__121015,map__121015__$1,on_compile_warning,on_compile_fail))
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
return (function (state_121252){
var state_val_121253 = (state_121252[(1)]);
if((state_val_121253 === (7))){
var inst_121172 = (state_121252[(2)]);
var state_121252__$1 = state_121252;
if(cljs.core.truth_(inst_121172)){
var statearr_121254_121304 = state_121252__$1;
(statearr_121254_121304[(1)] = (8));

} else {
var statearr_121255_121305 = state_121252__$1;
(statearr_121255_121305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (20))){
var inst_121246 = (state_121252[(2)]);
var state_121252__$1 = state_121252;
var statearr_121256_121306 = state_121252__$1;
(statearr_121256_121306[(2)] = inst_121246);

(statearr_121256_121306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (27))){
var inst_121242 = (state_121252[(2)]);
var state_121252__$1 = state_121252;
var statearr_121257_121307 = state_121252__$1;
(statearr_121257_121307[(2)] = inst_121242);

(statearr_121257_121307[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (1))){
var inst_121165 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_121252__$1 = state_121252;
if(cljs.core.truth_(inst_121165)){
var statearr_121258_121308 = state_121252__$1;
(statearr_121258_121308[(1)] = (2));

} else {
var statearr_121259_121309 = state_121252__$1;
(statearr_121259_121309[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (24))){
var inst_121244 = (state_121252[(2)]);
var state_121252__$1 = state_121252;
var statearr_121260_121310 = state_121252__$1;
(statearr_121260_121310[(2)] = inst_121244);

(statearr_121260_121310[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (4))){
var inst_121250 = (state_121252[(2)]);
var state_121252__$1 = state_121252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_121252__$1,inst_121250);
} else {
if((state_val_121253 === (15))){
var inst_121248 = (state_121252[(2)]);
var state_121252__$1 = state_121252;
var statearr_121261_121311 = state_121252__$1;
(statearr_121261_121311[(2)] = inst_121248);

(statearr_121261_121311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (21))){
var inst_121201 = (state_121252[(2)]);
var inst_121202 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_121203 = figwheel.client.auto_jump_to_error.call(null,opts,inst_121202);
var state_121252__$1 = (function (){var statearr_121262 = state_121252;
(statearr_121262[(7)] = inst_121201);

return statearr_121262;
})();
var statearr_121263_121312 = state_121252__$1;
(statearr_121263_121312[(2)] = inst_121203);

(statearr_121263_121312[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (31))){
var inst_121231 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_121252__$1 = state_121252;
if(cljs.core.truth_(inst_121231)){
var statearr_121264_121313 = state_121252__$1;
(statearr_121264_121313[(1)] = (34));

} else {
var statearr_121265_121314 = state_121252__$1;
(statearr_121265_121314[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (32))){
var inst_121240 = (state_121252[(2)]);
var state_121252__$1 = state_121252;
var statearr_121266_121315 = state_121252__$1;
(statearr_121266_121315[(2)] = inst_121240);

(statearr_121266_121315[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (33))){
var inst_121227 = (state_121252[(2)]);
var inst_121228 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_121229 = figwheel.client.auto_jump_to_error.call(null,opts,inst_121228);
var state_121252__$1 = (function (){var statearr_121267 = state_121252;
(statearr_121267[(8)] = inst_121227);

return statearr_121267;
})();
var statearr_121268_121316 = state_121252__$1;
(statearr_121268_121316[(2)] = inst_121229);

(statearr_121268_121316[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (13))){
var inst_121186 = figwheel.client.heads_up.clear.call(null);
var state_121252__$1 = state_121252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_121252__$1,(16),inst_121186);
} else {
if((state_val_121253 === (22))){
var inst_121207 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_121208 = figwheel.client.heads_up.append_warning_message.call(null,inst_121207);
var state_121252__$1 = state_121252;
var statearr_121269_121317 = state_121252__$1;
(statearr_121269_121317[(2)] = inst_121208);

(statearr_121269_121317[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (36))){
var inst_121238 = (state_121252[(2)]);
var state_121252__$1 = state_121252;
var statearr_121270_121318 = state_121252__$1;
(statearr_121270_121318[(2)] = inst_121238);

(statearr_121270_121318[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (29))){
var inst_121218 = (state_121252[(2)]);
var inst_121219 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_121220 = figwheel.client.auto_jump_to_error.call(null,opts,inst_121219);
var state_121252__$1 = (function (){var statearr_121271 = state_121252;
(statearr_121271[(9)] = inst_121218);

return statearr_121271;
})();
var statearr_121272_121319 = state_121252__$1;
(statearr_121272_121319[(2)] = inst_121220);

(statearr_121272_121319[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (6))){
var inst_121167 = (state_121252[(10)]);
var state_121252__$1 = state_121252;
var statearr_121273_121320 = state_121252__$1;
(statearr_121273_121320[(2)] = inst_121167);

(statearr_121273_121320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (28))){
var inst_121214 = (state_121252[(2)]);
var inst_121215 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_121216 = figwheel.client.heads_up.display_warning.call(null,inst_121215);
var state_121252__$1 = (function (){var statearr_121274 = state_121252;
(statearr_121274[(11)] = inst_121214);

return statearr_121274;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_121252__$1,(29),inst_121216);
} else {
if((state_val_121253 === (25))){
var inst_121212 = figwheel.client.heads_up.clear.call(null);
var state_121252__$1 = state_121252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_121252__$1,(28),inst_121212);
} else {
if((state_val_121253 === (34))){
var inst_121233 = figwheel.client.heads_up.flash_loaded.call(null);
var state_121252__$1 = state_121252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_121252__$1,(37),inst_121233);
} else {
if((state_val_121253 === (17))){
var inst_121192 = (state_121252[(2)]);
var inst_121193 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_121194 = figwheel.client.auto_jump_to_error.call(null,opts,inst_121193);
var state_121252__$1 = (function (){var statearr_121275 = state_121252;
(statearr_121275[(12)] = inst_121192);

return statearr_121275;
})();
var statearr_121276_121321 = state_121252__$1;
(statearr_121276_121321[(2)] = inst_121194);

(statearr_121276_121321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (3))){
var inst_121184 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_121252__$1 = state_121252;
if(cljs.core.truth_(inst_121184)){
var statearr_121277_121322 = state_121252__$1;
(statearr_121277_121322[(1)] = (13));

} else {
var statearr_121278_121323 = state_121252__$1;
(statearr_121278_121323[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (12))){
var inst_121180 = (state_121252[(2)]);
var state_121252__$1 = state_121252;
var statearr_121279_121324 = state_121252__$1;
(statearr_121279_121324[(2)] = inst_121180);

(statearr_121279_121324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (2))){
var inst_121167 = (state_121252[(10)]);
var inst_121167__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_121252__$1 = (function (){var statearr_121280 = state_121252;
(statearr_121280[(10)] = inst_121167__$1);

return statearr_121280;
})();
if(cljs.core.truth_(inst_121167__$1)){
var statearr_121281_121325 = state_121252__$1;
(statearr_121281_121325[(1)] = (5));

} else {
var statearr_121282_121326 = state_121252__$1;
(statearr_121282_121326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (23))){
var inst_121210 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_121252__$1 = state_121252;
if(cljs.core.truth_(inst_121210)){
var statearr_121283_121327 = state_121252__$1;
(statearr_121283_121327[(1)] = (25));

} else {
var statearr_121284_121328 = state_121252__$1;
(statearr_121284_121328[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (35))){
var state_121252__$1 = state_121252;
var statearr_121285_121329 = state_121252__$1;
(statearr_121285_121329[(2)] = null);

(statearr_121285_121329[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (19))){
var inst_121205 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_121252__$1 = state_121252;
if(cljs.core.truth_(inst_121205)){
var statearr_121286_121330 = state_121252__$1;
(statearr_121286_121330[(1)] = (22));

} else {
var statearr_121287_121331 = state_121252__$1;
(statearr_121287_121331[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (11))){
var inst_121176 = (state_121252[(2)]);
var state_121252__$1 = state_121252;
var statearr_121288_121332 = state_121252__$1;
(statearr_121288_121332[(2)] = inst_121176);

(statearr_121288_121332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (9))){
var inst_121178 = figwheel.client.heads_up.clear.call(null);
var state_121252__$1 = state_121252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_121252__$1,(12),inst_121178);
} else {
if((state_val_121253 === (5))){
var inst_121169 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_121252__$1 = state_121252;
var statearr_121289_121333 = state_121252__$1;
(statearr_121289_121333[(2)] = inst_121169);

(statearr_121289_121333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (14))){
var inst_121196 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_121252__$1 = state_121252;
if(cljs.core.truth_(inst_121196)){
var statearr_121290_121334 = state_121252__$1;
(statearr_121290_121334[(1)] = (18));

} else {
var statearr_121291_121335 = state_121252__$1;
(statearr_121291_121335[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (26))){
var inst_121222 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_121252__$1 = state_121252;
if(cljs.core.truth_(inst_121222)){
var statearr_121292_121336 = state_121252__$1;
(statearr_121292_121336[(1)] = (30));

} else {
var statearr_121293_121337 = state_121252__$1;
(statearr_121293_121337[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (16))){
var inst_121188 = (state_121252[(2)]);
var inst_121189 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_121190 = figwheel.client.heads_up.display_exception.call(null,inst_121189);
var state_121252__$1 = (function (){var statearr_121294 = state_121252;
(statearr_121294[(13)] = inst_121188);

return statearr_121294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_121252__$1,(17),inst_121190);
} else {
if((state_val_121253 === (30))){
var inst_121224 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_121225 = figwheel.client.heads_up.display_warning.call(null,inst_121224);
var state_121252__$1 = state_121252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_121252__$1,(33),inst_121225);
} else {
if((state_val_121253 === (10))){
var inst_121182 = (state_121252[(2)]);
var state_121252__$1 = state_121252;
var statearr_121295_121338 = state_121252__$1;
(statearr_121295_121338[(2)] = inst_121182);

(statearr_121295_121338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (18))){
var inst_121198 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_121199 = figwheel.client.heads_up.display_exception.call(null,inst_121198);
var state_121252__$1 = state_121252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_121252__$1,(21),inst_121199);
} else {
if((state_val_121253 === (37))){
var inst_121235 = (state_121252[(2)]);
var state_121252__$1 = state_121252;
var statearr_121296_121339 = state_121252__$1;
(statearr_121296_121339[(2)] = inst_121235);

(statearr_121296_121339[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121253 === (8))){
var inst_121174 = figwheel.client.heads_up.flash_loaded.call(null);
var state_121252__$1 = state_121252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_121252__$1,(11),inst_121174);
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
var statearr_121300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_121300[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__);

(statearr_121300[(1)] = (1));

return statearr_121300;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____1 = (function (state_121252){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_121252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e121301){if((e121301 instanceof Object)){
var ex__28290__auto__ = e121301;
var statearr_121302_121340 = state_121252;
(statearr_121302_121340[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_121252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e121301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__121341 = state_121252;
state_121252 = G__121341;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__ = function(state_121252){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____1.call(this,state_121252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__,msg_hist,msg_names,msg))
})();
var state__28400__auto__ = (function (){var statearr_121303 = f__28399__auto__.call(null);
(statearr_121303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_121303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto__,msg_hist,msg_names,msg))
);

return c__28398__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28398__auto___121404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto___121404,ch){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto___121404,ch){
return (function (state_121387){
var state_val_121388 = (state_121387[(1)]);
if((state_val_121388 === (1))){
var state_121387__$1 = state_121387;
var statearr_121389_121405 = state_121387__$1;
(statearr_121389_121405[(2)] = null);

(statearr_121389_121405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121388 === (2))){
var state_121387__$1 = state_121387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_121387__$1,(4),ch);
} else {
if((state_val_121388 === (3))){
var inst_121385 = (state_121387[(2)]);
var state_121387__$1 = state_121387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_121387__$1,inst_121385);
} else {
if((state_val_121388 === (4))){
var inst_121375 = (state_121387[(7)]);
var inst_121375__$1 = (state_121387[(2)]);
var state_121387__$1 = (function (){var statearr_121390 = state_121387;
(statearr_121390[(7)] = inst_121375__$1);

return statearr_121390;
})();
if(cljs.core.truth_(inst_121375__$1)){
var statearr_121391_121406 = state_121387__$1;
(statearr_121391_121406[(1)] = (5));

} else {
var statearr_121392_121407 = state_121387__$1;
(statearr_121392_121407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121388 === (5))){
var inst_121375 = (state_121387[(7)]);
var inst_121377 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_121375);
var state_121387__$1 = state_121387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_121387__$1,(8),inst_121377);
} else {
if((state_val_121388 === (6))){
var state_121387__$1 = state_121387;
var statearr_121393_121408 = state_121387__$1;
(statearr_121393_121408[(2)] = null);

(statearr_121393_121408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121388 === (7))){
var inst_121383 = (state_121387[(2)]);
var state_121387__$1 = state_121387;
var statearr_121394_121409 = state_121387__$1;
(statearr_121394_121409[(2)] = inst_121383);

(statearr_121394_121409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121388 === (8))){
var inst_121379 = (state_121387[(2)]);
var state_121387__$1 = (function (){var statearr_121395 = state_121387;
(statearr_121395[(8)] = inst_121379);

return statearr_121395;
})();
var statearr_121396_121410 = state_121387__$1;
(statearr_121396_121410[(2)] = null);

(statearr_121396_121410[(1)] = (2));


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
});})(c__28398__auto___121404,ch))
;
return ((function (switch__28286__auto__,c__28398__auto___121404,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28287__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28287__auto____0 = (function (){
var statearr_121400 = [null,null,null,null,null,null,null,null,null];
(statearr_121400[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28287__auto__);

(statearr_121400[(1)] = (1));

return statearr_121400;
});
var figwheel$client$heads_up_plugin_$_state_machine__28287__auto____1 = (function (state_121387){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_121387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e121401){if((e121401 instanceof Object)){
var ex__28290__auto__ = e121401;
var statearr_121402_121411 = state_121387;
(statearr_121402_121411[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_121387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e121401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__121412 = state_121387;
state_121387 = G__121412;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28287__auto__ = function(state_121387){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28287__auto____1.call(this,state_121387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28287__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28287__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto___121404,ch))
})();
var state__28400__auto__ = (function (){var statearr_121403 = f__28399__auto__.call(null);
(statearr_121403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto___121404);

return statearr_121403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto___121404,ch))
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
return (function (state_121433){
var state_val_121434 = (state_121433[(1)]);
if((state_val_121434 === (1))){
var inst_121428 = cljs.core.async.timeout.call(null,(3000));
var state_121433__$1 = state_121433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_121433__$1,(2),inst_121428);
} else {
if((state_val_121434 === (2))){
var inst_121430 = (state_121433[(2)]);
var inst_121431 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_121433__$1 = (function (){var statearr_121435 = state_121433;
(statearr_121435[(7)] = inst_121430);

return statearr_121435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_121433__$1,inst_121431);
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
var statearr_121439 = [null,null,null,null,null,null,null,null];
(statearr_121439[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__);

(statearr_121439[(1)] = (1));

return statearr_121439;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____1 = (function (state_121433){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_121433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e121440){if((e121440 instanceof Object)){
var ex__28290__auto__ = e121440;
var statearr_121441_121443 = state_121433;
(statearr_121441_121443[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_121433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e121440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__121444 = state_121433;
state_121433 = G__121444;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__ = function(state_121433){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____1.call(this,state_121433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28287__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__))
})();
var state__28400__auto__ = (function (){var statearr_121442 = f__28399__auto__.call(null);
(statearr_121442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_121442;
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
return (function (state_121467){
var state_val_121468 = (state_121467[(1)]);
if((state_val_121468 === (1))){
var inst_121461 = cljs.core.async.timeout.call(null,(2000));
var state_121467__$1 = state_121467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_121467__$1,(2),inst_121461);
} else {
if((state_val_121468 === (2))){
var inst_121463 = (state_121467[(2)]);
var inst_121464 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_121465 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_121464);
var state_121467__$1 = (function (){var statearr_121469 = state_121467;
(statearr_121469[(7)] = inst_121463);

return statearr_121469;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_121467__$1,inst_121465);
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
var statearr_121473 = [null,null,null,null,null,null,null,null];
(statearr_121473[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__);

(statearr_121473[(1)] = (1));

return statearr_121473;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____1 = (function (state_121467){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_121467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e121474){if((e121474 instanceof Object)){
var ex__28290__auto__ = e121474;
var statearr_121475_121477 = state_121467;
(statearr_121475_121477[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_121467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e121474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__121478 = state_121467;
state_121467 = G__121478;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__ = function(state_121467){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____1.call(this,state_121467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28400__auto__ = (function (){var statearr_121476 = f__28399__auto__.call(null);
(statearr_121476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_121476;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__121479){
var map__121483 = p__121479;
var map__121483__$1 = ((((!((map__121483 == null)))?((((map__121483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__121483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__121483):map__121483);
var file = cljs.core.get.call(null,map__121483__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__121483__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__121483__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__121485 = "";
var G__121485__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__121485),cljs.core.str("file "),cljs.core.str(file)].join(''):G__121485);
var G__121485__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__121485__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__121485__$1);
if(cljs.core.truth_((function (){var and__25113__auto__ = line;
if(cljs.core.truth_(and__25113__auto__)){
return column;
} else {
return and__25113__auto__;
}
})())){
return [cljs.core.str(G__121485__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__121485__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__121486){
var map__121493 = p__121486;
var map__121493__$1 = ((((!((map__121493 == null)))?((((map__121493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__121493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__121493):map__121493);
var ed = map__121493__$1;
var formatted_exception = cljs.core.get.call(null,map__121493__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__121493__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__121493__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__121495_121499 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__121496_121500 = null;
var count__121497_121501 = (0);
var i__121498_121502 = (0);
while(true){
if((i__121498_121502 < count__121497_121501)){
var msg_121503 = cljs.core._nth.call(null,chunk__121496_121500,i__121498_121502);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_121503);

var G__121504 = seq__121495_121499;
var G__121505 = chunk__121496_121500;
var G__121506 = count__121497_121501;
var G__121507 = (i__121498_121502 + (1));
seq__121495_121499 = G__121504;
chunk__121496_121500 = G__121505;
count__121497_121501 = G__121506;
i__121498_121502 = G__121507;
continue;
} else {
var temp__4657__auto___121508 = cljs.core.seq.call(null,seq__121495_121499);
if(temp__4657__auto___121508){
var seq__121495_121509__$1 = temp__4657__auto___121508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__121495_121509__$1)){
var c__25936__auto___121510 = cljs.core.chunk_first.call(null,seq__121495_121509__$1);
var G__121511 = cljs.core.chunk_rest.call(null,seq__121495_121509__$1);
var G__121512 = c__25936__auto___121510;
var G__121513 = cljs.core.count.call(null,c__25936__auto___121510);
var G__121514 = (0);
seq__121495_121499 = G__121511;
chunk__121496_121500 = G__121512;
count__121497_121501 = G__121513;
i__121498_121502 = G__121514;
continue;
} else {
var msg_121515 = cljs.core.first.call(null,seq__121495_121509__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_121515);

var G__121516 = cljs.core.next.call(null,seq__121495_121509__$1);
var G__121517 = null;
var G__121518 = (0);
var G__121519 = (0);
seq__121495_121499 = G__121516;
chunk__121496_121500 = G__121517;
count__121497_121501 = G__121518;
i__121498_121502 = G__121519;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__121520){
var map__121523 = p__121520;
var map__121523__$1 = ((((!((map__121523 == null)))?((((map__121523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__121523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__121523):map__121523);
var w = map__121523__$1;
var message = cljs.core.get.call(null,map__121523__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__121535 = cljs.core.seq.call(null,plugins);
var chunk__121536 = null;
var count__121537 = (0);
var i__121538 = (0);
while(true){
if((i__121538 < count__121537)){
var vec__121539 = cljs.core._nth.call(null,chunk__121536,i__121538);
var k = cljs.core.nth.call(null,vec__121539,(0),null);
var plugin = cljs.core.nth.call(null,vec__121539,(1),null);
if(cljs.core.truth_(plugin)){
var pl_121545 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__121535,chunk__121536,count__121537,i__121538,pl_121545,vec__121539,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_121545.call(null,msg_hist);
});})(seq__121535,chunk__121536,count__121537,i__121538,pl_121545,vec__121539,k,plugin))
);
} else {
}

var G__121546 = seq__121535;
var G__121547 = chunk__121536;
var G__121548 = count__121537;
var G__121549 = (i__121538 + (1));
seq__121535 = G__121546;
chunk__121536 = G__121547;
count__121537 = G__121548;
i__121538 = G__121549;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__121535);
if(temp__4657__auto__){
var seq__121535__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__121535__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__121535__$1);
var G__121550 = cljs.core.chunk_rest.call(null,seq__121535__$1);
var G__121551 = c__25936__auto__;
var G__121552 = cljs.core.count.call(null,c__25936__auto__);
var G__121553 = (0);
seq__121535 = G__121550;
chunk__121536 = G__121551;
count__121537 = G__121552;
i__121538 = G__121553;
continue;
} else {
var vec__121542 = cljs.core.first.call(null,seq__121535__$1);
var k = cljs.core.nth.call(null,vec__121542,(0),null);
var plugin = cljs.core.nth.call(null,vec__121542,(1),null);
if(cljs.core.truth_(plugin)){
var pl_121554 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__121535,chunk__121536,count__121537,i__121538,pl_121554,vec__121542,k,plugin,seq__121535__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_121554.call(null,msg_hist);
});})(seq__121535,chunk__121536,count__121537,i__121538,pl_121554,vec__121542,k,plugin,seq__121535__$1,temp__4657__auto__))
);
} else {
}

var G__121555 = cljs.core.next.call(null,seq__121535__$1);
var G__121556 = null;
var G__121557 = (0);
var G__121558 = (0);
seq__121535 = G__121555;
chunk__121536 = G__121556;
count__121537 = G__121557;
i__121538 = G__121558;
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
var args121559 = [];
var len__26200__auto___121566 = arguments.length;
var i__26201__auto___121567 = (0);
while(true){
if((i__26201__auto___121567 < len__26200__auto___121566)){
args121559.push((arguments[i__26201__auto___121567]));

var G__121568 = (i__26201__auto___121567 + (1));
i__26201__auto___121567 = G__121568;
continue;
} else {
}
break;
}

var G__121561 = args121559.length;
switch (G__121561) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args121559.length)].join('')));

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

var seq__121562_121570 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__121563_121571 = null;
var count__121564_121572 = (0);
var i__121565_121573 = (0);
while(true){
if((i__121565_121573 < count__121564_121572)){
var msg_121574 = cljs.core._nth.call(null,chunk__121563_121571,i__121565_121573);
figwheel.client.socket.handle_incoming_message.call(null,msg_121574);

var G__121575 = seq__121562_121570;
var G__121576 = chunk__121563_121571;
var G__121577 = count__121564_121572;
var G__121578 = (i__121565_121573 + (1));
seq__121562_121570 = G__121575;
chunk__121563_121571 = G__121576;
count__121564_121572 = G__121577;
i__121565_121573 = G__121578;
continue;
} else {
var temp__4657__auto___121579 = cljs.core.seq.call(null,seq__121562_121570);
if(temp__4657__auto___121579){
var seq__121562_121580__$1 = temp__4657__auto___121579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__121562_121580__$1)){
var c__25936__auto___121581 = cljs.core.chunk_first.call(null,seq__121562_121580__$1);
var G__121582 = cljs.core.chunk_rest.call(null,seq__121562_121580__$1);
var G__121583 = c__25936__auto___121581;
var G__121584 = cljs.core.count.call(null,c__25936__auto___121581);
var G__121585 = (0);
seq__121562_121570 = G__121582;
chunk__121563_121571 = G__121583;
count__121564_121572 = G__121584;
i__121565_121573 = G__121585;
continue;
} else {
var msg_121586 = cljs.core.first.call(null,seq__121562_121580__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_121586);

var G__121587 = cljs.core.next.call(null,seq__121562_121580__$1);
var G__121588 = null;
var G__121589 = (0);
var G__121590 = (0);
seq__121562_121570 = G__121587;
chunk__121563_121571 = G__121588;
count__121564_121572 = G__121589;
i__121565_121573 = G__121590;
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
var len__26200__auto___121595 = arguments.length;
var i__26201__auto___121596 = (0);
while(true){
if((i__26201__auto___121596 < len__26200__auto___121595)){
args__26207__auto__.push((arguments[i__26201__auto___121596]));

var G__121597 = (i__26201__auto___121596 + (1));
i__26201__auto___121596 = G__121597;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__121592){
var map__121593 = p__121592;
var map__121593__$1 = ((((!((map__121593 == null)))?((((map__121593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__121593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__121593):map__121593);
var opts = map__121593__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq121591){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq121591));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e121599){if((e121599 instanceof Error)){
var e = e121599;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e121599;

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
return (function (p__121603){
var map__121604 = p__121603;
var map__121604__$1 = ((((!((map__121604 == null)))?((((map__121604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__121604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__121604):map__121604);
var msg_name = cljs.core.get.call(null,map__121604__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1488400175628