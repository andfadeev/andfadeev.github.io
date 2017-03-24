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
var args35073 = [];
var len__26200__auto___35076 = arguments.length;
var i__26201__auto___35077 = (0);
while(true){
if((i__26201__auto___35077 < len__26200__auto___35076)){
args35073.push((arguments[i__26201__auto___35077]));

var G__35078 = (i__26201__auto___35077 + (1));
i__26201__auto___35077 = G__35078;
continue;
} else {
}
break;
}

var G__35075 = args35073.length;
switch (G__35075) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35073.length)].join('')));

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
var len__26200__auto___35081 = arguments.length;
var i__26201__auto___35082 = (0);
while(true){
if((i__26201__auto___35082 < len__26200__auto___35081)){
args__26207__auto__.push((arguments[i__26201__auto___35082]));

var G__35083 = (i__26201__auto___35082 + (1));
i__26201__auto___35082 = G__35083;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35080){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35080));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26207__auto__ = [];
var len__26200__auto___35085 = arguments.length;
var i__26201__auto___35086 = (0);
while(true){
if((i__26201__auto___35086 < len__26200__auto___35085)){
args__26207__auto__.push((arguments[i__26201__auto___35086]));

var G__35087 = (i__26201__auto___35086 + (1));
i__26201__auto___35086 = G__35087;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35084){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35084));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35088){
var map__35091 = p__35088;
var map__35091__$1 = ((((!((map__35091 == null)))?((((map__35091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35091):map__35091);
var message = cljs.core.get.call(null,map__35091__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35091__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28271__auto___35253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28271__auto___35253,ch){
return (function (){
var f__28272__auto__ = (function (){var switch__28250__auto__ = ((function (c__28271__auto___35253,ch){
return (function (state_35222){
var state_val_35223 = (state_35222[(1)]);
if((state_val_35223 === (7))){
var inst_35218 = (state_35222[(2)]);
var state_35222__$1 = state_35222;
var statearr_35224_35254 = state_35222__$1;
(statearr_35224_35254[(2)] = inst_35218);

(statearr_35224_35254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35223 === (1))){
var state_35222__$1 = state_35222;
var statearr_35225_35255 = state_35222__$1;
(statearr_35225_35255[(2)] = null);

(statearr_35225_35255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35223 === (4))){
var inst_35175 = (state_35222[(7)]);
var inst_35175__$1 = (state_35222[(2)]);
var state_35222__$1 = (function (){var statearr_35226 = state_35222;
(statearr_35226[(7)] = inst_35175__$1);

return statearr_35226;
})();
if(cljs.core.truth_(inst_35175__$1)){
var statearr_35227_35256 = state_35222__$1;
(statearr_35227_35256[(1)] = (5));

} else {
var statearr_35228_35257 = state_35222__$1;
(statearr_35228_35257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35223 === (15))){
var inst_35182 = (state_35222[(8)]);
var inst_35197 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35182);
var inst_35198 = cljs.core.first.call(null,inst_35197);
var inst_35199 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35198);
var inst_35200 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35199)].join('');
var inst_35201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35200);
var state_35222__$1 = state_35222;
var statearr_35229_35258 = state_35222__$1;
(statearr_35229_35258[(2)] = inst_35201);

(statearr_35229_35258[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35223 === (13))){
var inst_35206 = (state_35222[(2)]);
var state_35222__$1 = state_35222;
var statearr_35230_35259 = state_35222__$1;
(statearr_35230_35259[(2)] = inst_35206);

(statearr_35230_35259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35223 === (6))){
var state_35222__$1 = state_35222;
var statearr_35231_35260 = state_35222__$1;
(statearr_35231_35260[(2)] = null);

(statearr_35231_35260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35223 === (17))){
var inst_35204 = (state_35222[(2)]);
var state_35222__$1 = state_35222;
var statearr_35232_35261 = state_35222__$1;
(statearr_35232_35261[(2)] = inst_35204);

(statearr_35232_35261[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35223 === (3))){
var inst_35220 = (state_35222[(2)]);
var state_35222__$1 = state_35222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35222__$1,inst_35220);
} else {
if((state_val_35223 === (12))){
var inst_35181 = (state_35222[(9)]);
var inst_35195 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35181,opts);
var state_35222__$1 = state_35222;
if(cljs.core.truth_(inst_35195)){
var statearr_35233_35262 = state_35222__$1;
(statearr_35233_35262[(1)] = (15));

} else {
var statearr_35234_35263 = state_35222__$1;
(statearr_35234_35263[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35223 === (2))){
var state_35222__$1 = state_35222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35222__$1,(4),ch);
} else {
if((state_val_35223 === (11))){
var inst_35182 = (state_35222[(8)]);
var inst_35187 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35188 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35182);
var inst_35189 = cljs.core.async.timeout.call(null,(1000));
var inst_35190 = [inst_35188,inst_35189];
var inst_35191 = (new cljs.core.PersistentVector(null,2,(5),inst_35187,inst_35190,null));
var state_35222__$1 = state_35222;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35222__$1,(14),inst_35191);
} else {
if((state_val_35223 === (9))){
var inst_35182 = (state_35222[(8)]);
var inst_35208 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35209 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35182);
var inst_35210 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35209);
var inst_35211 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35210)].join('');
var inst_35212 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35211);
var state_35222__$1 = (function (){var statearr_35235 = state_35222;
(statearr_35235[(10)] = inst_35208);

return statearr_35235;
})();
var statearr_35236_35264 = state_35222__$1;
(statearr_35236_35264[(2)] = inst_35212);

(statearr_35236_35264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35223 === (5))){
var inst_35175 = (state_35222[(7)]);
var inst_35177 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35178 = (new cljs.core.PersistentArrayMap(null,2,inst_35177,null));
var inst_35179 = (new cljs.core.PersistentHashSet(null,inst_35178,null));
var inst_35180 = figwheel.client.focus_msgs.call(null,inst_35179,inst_35175);
var inst_35181 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35180);
var inst_35182 = cljs.core.first.call(null,inst_35180);
var inst_35183 = figwheel.client.autoload_QMARK_.call(null);
var state_35222__$1 = (function (){var statearr_35237 = state_35222;
(statearr_35237[(9)] = inst_35181);

(statearr_35237[(8)] = inst_35182);

return statearr_35237;
})();
if(cljs.core.truth_(inst_35183)){
var statearr_35238_35265 = state_35222__$1;
(statearr_35238_35265[(1)] = (8));

} else {
var statearr_35239_35266 = state_35222__$1;
(statearr_35239_35266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35223 === (14))){
var inst_35193 = (state_35222[(2)]);
var state_35222__$1 = state_35222;
var statearr_35240_35267 = state_35222__$1;
(statearr_35240_35267[(2)] = inst_35193);

(statearr_35240_35267[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35223 === (16))){
var state_35222__$1 = state_35222;
var statearr_35241_35268 = state_35222__$1;
(statearr_35241_35268[(2)] = null);

(statearr_35241_35268[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35223 === (10))){
var inst_35214 = (state_35222[(2)]);
var state_35222__$1 = (function (){var statearr_35242 = state_35222;
(statearr_35242[(11)] = inst_35214);

return statearr_35242;
})();
var statearr_35243_35269 = state_35222__$1;
(statearr_35243_35269[(2)] = null);

(statearr_35243_35269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35223 === (8))){
var inst_35181 = (state_35222[(9)]);
var inst_35185 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35181,opts);
var state_35222__$1 = state_35222;
if(cljs.core.truth_(inst_35185)){
var statearr_35244_35270 = state_35222__$1;
(statearr_35244_35270[(1)] = (11));

} else {
var statearr_35245_35271 = state_35222__$1;
(statearr_35245_35271[(1)] = (12));

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
});})(c__28271__auto___35253,ch))
;
return ((function (switch__28250__auto__,c__28271__auto___35253,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28251__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28251__auto____0 = (function (){
var statearr_35249 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35249[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28251__auto__);

(statearr_35249[(1)] = (1));

return statearr_35249;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28251__auto____1 = (function (state_35222){
while(true){
var ret_value__28252__auto__ = (function (){try{while(true){
var result__28253__auto__ = switch__28250__auto__.call(null,state_35222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28253__auto__;
}
break;
}
}catch (e35250){if((e35250 instanceof Object)){
var ex__28254__auto__ = e35250;
var statearr_35251_35272 = state_35222;
(statearr_35251_35272[(5)] = ex__28254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35273 = state_35222;
state_35222 = G__35273;
continue;
} else {
return ret_value__28252__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28251__auto__ = function(state_35222){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28251__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28251__auto____1.call(this,state_35222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28251__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28251__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28251__auto__;
})()
;})(switch__28250__auto__,c__28271__auto___35253,ch))
})();
var state__28273__auto__ = (function (){var statearr_35252 = f__28272__auto__.call(null);
(statearr_35252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28271__auto___35253);

return statearr_35252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28273__auto__);
});})(c__28271__auto___35253,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35274_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35274_SHARP_));
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
var base_path_35277 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35277){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35276){if((e35276 instanceof Error)){
var e = e35276;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35277], null));
} else {
var e = e35276;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35277))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35278){
var map__35287 = p__35278;
var map__35287__$1 = ((((!((map__35287 == null)))?((((map__35287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35287):map__35287);
var opts = map__35287__$1;
var build_id = cljs.core.get.call(null,map__35287__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35287,map__35287__$1,opts,build_id){
return (function (p__35289){
var vec__35290 = p__35289;
var seq__35291 = cljs.core.seq.call(null,vec__35290);
var first__35292 = cljs.core.first.call(null,seq__35291);
var seq__35291__$1 = cljs.core.next.call(null,seq__35291);
var map__35293 = first__35292;
var map__35293__$1 = ((((!((map__35293 == null)))?((((map__35293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35293):map__35293);
var msg = map__35293__$1;
var msg_name = cljs.core.get.call(null,map__35293__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35291__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35290,seq__35291,first__35292,seq__35291__$1,map__35293,map__35293__$1,msg,msg_name,_,map__35287,map__35287__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35290,seq__35291,first__35292,seq__35291__$1,map__35293,map__35293__$1,msg,msg_name,_,map__35287,map__35287__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35287,map__35287__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35301){
var vec__35302 = p__35301;
var seq__35303 = cljs.core.seq.call(null,vec__35302);
var first__35304 = cljs.core.first.call(null,seq__35303);
var seq__35303__$1 = cljs.core.next.call(null,seq__35303);
var map__35305 = first__35304;
var map__35305__$1 = ((((!((map__35305 == null)))?((((map__35305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35305):map__35305);
var msg = map__35305__$1;
var msg_name = cljs.core.get.call(null,map__35305__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35303__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35307){
var map__35319 = p__35307;
var map__35319__$1 = ((((!((map__35319 == null)))?((((map__35319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35319):map__35319);
var on_compile_warning = cljs.core.get.call(null,map__35319__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35319__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35319,map__35319__$1,on_compile_warning,on_compile_fail){
return (function (p__35321){
var vec__35322 = p__35321;
var seq__35323 = cljs.core.seq.call(null,vec__35322);
var first__35324 = cljs.core.first.call(null,seq__35323);
var seq__35323__$1 = cljs.core.next.call(null,seq__35323);
var map__35325 = first__35324;
var map__35325__$1 = ((((!((map__35325 == null)))?((((map__35325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35325):map__35325);
var msg = map__35325__$1;
var msg_name = cljs.core.get.call(null,map__35325__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35323__$1;
var pred__35327 = cljs.core._EQ_;
var expr__35328 = msg_name;
if(cljs.core.truth_(pred__35327.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35328))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35327.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35328))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35319,map__35319__$1,on_compile_warning,on_compile_fail))
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
var c__28271__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28271__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28272__auto__ = (function (){var switch__28250__auto__ = ((function (c__28271__auto__,msg_hist,msg_names,msg){
return (function (state_35556){
var state_val_35557 = (state_35556[(1)]);
if((state_val_35557 === (7))){
var inst_35476 = (state_35556[(2)]);
var state_35556__$1 = state_35556;
if(cljs.core.truth_(inst_35476)){
var statearr_35558_35608 = state_35556__$1;
(statearr_35558_35608[(1)] = (8));

} else {
var statearr_35559_35609 = state_35556__$1;
(statearr_35559_35609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (20))){
var inst_35550 = (state_35556[(2)]);
var state_35556__$1 = state_35556;
var statearr_35560_35610 = state_35556__$1;
(statearr_35560_35610[(2)] = inst_35550);

(statearr_35560_35610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (27))){
var inst_35546 = (state_35556[(2)]);
var state_35556__$1 = state_35556;
var statearr_35561_35611 = state_35556__$1;
(statearr_35561_35611[(2)] = inst_35546);

(statearr_35561_35611[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (1))){
var inst_35469 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35556__$1 = state_35556;
if(cljs.core.truth_(inst_35469)){
var statearr_35562_35612 = state_35556__$1;
(statearr_35562_35612[(1)] = (2));

} else {
var statearr_35563_35613 = state_35556__$1;
(statearr_35563_35613[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (24))){
var inst_35548 = (state_35556[(2)]);
var state_35556__$1 = state_35556;
var statearr_35564_35614 = state_35556__$1;
(statearr_35564_35614[(2)] = inst_35548);

(statearr_35564_35614[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (4))){
var inst_35554 = (state_35556[(2)]);
var state_35556__$1 = state_35556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35556__$1,inst_35554);
} else {
if((state_val_35557 === (15))){
var inst_35552 = (state_35556[(2)]);
var state_35556__$1 = state_35556;
var statearr_35565_35615 = state_35556__$1;
(statearr_35565_35615[(2)] = inst_35552);

(statearr_35565_35615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (21))){
var inst_35505 = (state_35556[(2)]);
var inst_35506 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35507 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35506);
var state_35556__$1 = (function (){var statearr_35566 = state_35556;
(statearr_35566[(7)] = inst_35505);

return statearr_35566;
})();
var statearr_35567_35616 = state_35556__$1;
(statearr_35567_35616[(2)] = inst_35507);

(statearr_35567_35616[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (31))){
var inst_35535 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35556__$1 = state_35556;
if(cljs.core.truth_(inst_35535)){
var statearr_35568_35617 = state_35556__$1;
(statearr_35568_35617[(1)] = (34));

} else {
var statearr_35569_35618 = state_35556__$1;
(statearr_35569_35618[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (32))){
var inst_35544 = (state_35556[(2)]);
var state_35556__$1 = state_35556;
var statearr_35570_35619 = state_35556__$1;
(statearr_35570_35619[(2)] = inst_35544);

(statearr_35570_35619[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (33))){
var inst_35531 = (state_35556[(2)]);
var inst_35532 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35533 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35532);
var state_35556__$1 = (function (){var statearr_35571 = state_35556;
(statearr_35571[(8)] = inst_35531);

return statearr_35571;
})();
var statearr_35572_35620 = state_35556__$1;
(statearr_35572_35620[(2)] = inst_35533);

(statearr_35572_35620[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (13))){
var inst_35490 = figwheel.client.heads_up.clear.call(null);
var state_35556__$1 = state_35556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35556__$1,(16),inst_35490);
} else {
if((state_val_35557 === (22))){
var inst_35511 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35512 = figwheel.client.heads_up.append_warning_message.call(null,inst_35511);
var state_35556__$1 = state_35556;
var statearr_35573_35621 = state_35556__$1;
(statearr_35573_35621[(2)] = inst_35512);

(statearr_35573_35621[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (36))){
var inst_35542 = (state_35556[(2)]);
var state_35556__$1 = state_35556;
var statearr_35574_35622 = state_35556__$1;
(statearr_35574_35622[(2)] = inst_35542);

(statearr_35574_35622[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (29))){
var inst_35522 = (state_35556[(2)]);
var inst_35523 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35524 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35523);
var state_35556__$1 = (function (){var statearr_35575 = state_35556;
(statearr_35575[(9)] = inst_35522);

return statearr_35575;
})();
var statearr_35576_35623 = state_35556__$1;
(statearr_35576_35623[(2)] = inst_35524);

(statearr_35576_35623[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (6))){
var inst_35471 = (state_35556[(10)]);
var state_35556__$1 = state_35556;
var statearr_35577_35624 = state_35556__$1;
(statearr_35577_35624[(2)] = inst_35471);

(statearr_35577_35624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (28))){
var inst_35518 = (state_35556[(2)]);
var inst_35519 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35520 = figwheel.client.heads_up.display_warning.call(null,inst_35519);
var state_35556__$1 = (function (){var statearr_35578 = state_35556;
(statearr_35578[(11)] = inst_35518);

return statearr_35578;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35556__$1,(29),inst_35520);
} else {
if((state_val_35557 === (25))){
var inst_35516 = figwheel.client.heads_up.clear.call(null);
var state_35556__$1 = state_35556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35556__$1,(28),inst_35516);
} else {
if((state_val_35557 === (34))){
var inst_35537 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35556__$1 = state_35556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35556__$1,(37),inst_35537);
} else {
if((state_val_35557 === (17))){
var inst_35496 = (state_35556[(2)]);
var inst_35497 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35498 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35497);
var state_35556__$1 = (function (){var statearr_35579 = state_35556;
(statearr_35579[(12)] = inst_35496);

return statearr_35579;
})();
var statearr_35580_35625 = state_35556__$1;
(statearr_35580_35625[(2)] = inst_35498);

(statearr_35580_35625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (3))){
var inst_35488 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35556__$1 = state_35556;
if(cljs.core.truth_(inst_35488)){
var statearr_35581_35626 = state_35556__$1;
(statearr_35581_35626[(1)] = (13));

} else {
var statearr_35582_35627 = state_35556__$1;
(statearr_35582_35627[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (12))){
var inst_35484 = (state_35556[(2)]);
var state_35556__$1 = state_35556;
var statearr_35583_35628 = state_35556__$1;
(statearr_35583_35628[(2)] = inst_35484);

(statearr_35583_35628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (2))){
var inst_35471 = (state_35556[(10)]);
var inst_35471__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35556__$1 = (function (){var statearr_35584 = state_35556;
(statearr_35584[(10)] = inst_35471__$1);

return statearr_35584;
})();
if(cljs.core.truth_(inst_35471__$1)){
var statearr_35585_35629 = state_35556__$1;
(statearr_35585_35629[(1)] = (5));

} else {
var statearr_35586_35630 = state_35556__$1;
(statearr_35586_35630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (23))){
var inst_35514 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35556__$1 = state_35556;
if(cljs.core.truth_(inst_35514)){
var statearr_35587_35631 = state_35556__$1;
(statearr_35587_35631[(1)] = (25));

} else {
var statearr_35588_35632 = state_35556__$1;
(statearr_35588_35632[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (35))){
var state_35556__$1 = state_35556;
var statearr_35589_35633 = state_35556__$1;
(statearr_35589_35633[(2)] = null);

(statearr_35589_35633[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (19))){
var inst_35509 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35556__$1 = state_35556;
if(cljs.core.truth_(inst_35509)){
var statearr_35590_35634 = state_35556__$1;
(statearr_35590_35634[(1)] = (22));

} else {
var statearr_35591_35635 = state_35556__$1;
(statearr_35591_35635[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (11))){
var inst_35480 = (state_35556[(2)]);
var state_35556__$1 = state_35556;
var statearr_35592_35636 = state_35556__$1;
(statearr_35592_35636[(2)] = inst_35480);

(statearr_35592_35636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (9))){
var inst_35482 = figwheel.client.heads_up.clear.call(null);
var state_35556__$1 = state_35556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35556__$1,(12),inst_35482);
} else {
if((state_val_35557 === (5))){
var inst_35473 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35556__$1 = state_35556;
var statearr_35593_35637 = state_35556__$1;
(statearr_35593_35637[(2)] = inst_35473);

(statearr_35593_35637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (14))){
var inst_35500 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35556__$1 = state_35556;
if(cljs.core.truth_(inst_35500)){
var statearr_35594_35638 = state_35556__$1;
(statearr_35594_35638[(1)] = (18));

} else {
var statearr_35595_35639 = state_35556__$1;
(statearr_35595_35639[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (26))){
var inst_35526 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35556__$1 = state_35556;
if(cljs.core.truth_(inst_35526)){
var statearr_35596_35640 = state_35556__$1;
(statearr_35596_35640[(1)] = (30));

} else {
var statearr_35597_35641 = state_35556__$1;
(statearr_35597_35641[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (16))){
var inst_35492 = (state_35556[(2)]);
var inst_35493 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35494 = figwheel.client.heads_up.display_exception.call(null,inst_35493);
var state_35556__$1 = (function (){var statearr_35598 = state_35556;
(statearr_35598[(13)] = inst_35492);

return statearr_35598;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35556__$1,(17),inst_35494);
} else {
if((state_val_35557 === (30))){
var inst_35528 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35529 = figwheel.client.heads_up.display_warning.call(null,inst_35528);
var state_35556__$1 = state_35556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35556__$1,(33),inst_35529);
} else {
if((state_val_35557 === (10))){
var inst_35486 = (state_35556[(2)]);
var state_35556__$1 = state_35556;
var statearr_35599_35642 = state_35556__$1;
(statearr_35599_35642[(2)] = inst_35486);

(statearr_35599_35642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (18))){
var inst_35502 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35503 = figwheel.client.heads_up.display_exception.call(null,inst_35502);
var state_35556__$1 = state_35556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35556__$1,(21),inst_35503);
} else {
if((state_val_35557 === (37))){
var inst_35539 = (state_35556[(2)]);
var state_35556__$1 = state_35556;
var statearr_35600_35643 = state_35556__$1;
(statearr_35600_35643[(2)] = inst_35539);

(statearr_35600_35643[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (8))){
var inst_35478 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35556__$1 = state_35556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35556__$1,(11),inst_35478);
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
});})(c__28271__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28250__auto__,c__28271__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28251__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28251__auto____0 = (function (){
var statearr_35604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35604[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28251__auto__);

(statearr_35604[(1)] = (1));

return statearr_35604;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28251__auto____1 = (function (state_35556){
while(true){
var ret_value__28252__auto__ = (function (){try{while(true){
var result__28253__auto__ = switch__28250__auto__.call(null,state_35556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28253__auto__;
}
break;
}
}catch (e35605){if((e35605 instanceof Object)){
var ex__28254__auto__ = e35605;
var statearr_35606_35644 = state_35556;
(statearr_35606_35644[(5)] = ex__28254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35645 = state_35556;
state_35556 = G__35645;
continue;
} else {
return ret_value__28252__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28251__auto__ = function(state_35556){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28251__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28251__auto____1.call(this,state_35556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28251__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28251__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28251__auto__;
})()
;})(switch__28250__auto__,c__28271__auto__,msg_hist,msg_names,msg))
})();
var state__28273__auto__ = (function (){var statearr_35607 = f__28272__auto__.call(null);
(statearr_35607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28271__auto__);

return statearr_35607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28273__auto__);
});})(c__28271__auto__,msg_hist,msg_names,msg))
);

return c__28271__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28271__auto___35708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28271__auto___35708,ch){
return (function (){
var f__28272__auto__ = (function (){var switch__28250__auto__ = ((function (c__28271__auto___35708,ch){
return (function (state_35691){
var state_val_35692 = (state_35691[(1)]);
if((state_val_35692 === (1))){
var state_35691__$1 = state_35691;
var statearr_35693_35709 = state_35691__$1;
(statearr_35693_35709[(2)] = null);

(statearr_35693_35709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (2))){
var state_35691__$1 = state_35691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35691__$1,(4),ch);
} else {
if((state_val_35692 === (3))){
var inst_35689 = (state_35691[(2)]);
var state_35691__$1 = state_35691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35691__$1,inst_35689);
} else {
if((state_val_35692 === (4))){
var inst_35679 = (state_35691[(7)]);
var inst_35679__$1 = (state_35691[(2)]);
var state_35691__$1 = (function (){var statearr_35694 = state_35691;
(statearr_35694[(7)] = inst_35679__$1);

return statearr_35694;
})();
if(cljs.core.truth_(inst_35679__$1)){
var statearr_35695_35710 = state_35691__$1;
(statearr_35695_35710[(1)] = (5));

} else {
var statearr_35696_35711 = state_35691__$1;
(statearr_35696_35711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (5))){
var inst_35679 = (state_35691[(7)]);
var inst_35681 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35679);
var state_35691__$1 = state_35691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35691__$1,(8),inst_35681);
} else {
if((state_val_35692 === (6))){
var state_35691__$1 = state_35691;
var statearr_35697_35712 = state_35691__$1;
(statearr_35697_35712[(2)] = null);

(statearr_35697_35712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (7))){
var inst_35687 = (state_35691[(2)]);
var state_35691__$1 = state_35691;
var statearr_35698_35713 = state_35691__$1;
(statearr_35698_35713[(2)] = inst_35687);

(statearr_35698_35713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35692 === (8))){
var inst_35683 = (state_35691[(2)]);
var state_35691__$1 = (function (){var statearr_35699 = state_35691;
(statearr_35699[(8)] = inst_35683);

return statearr_35699;
})();
var statearr_35700_35714 = state_35691__$1;
(statearr_35700_35714[(2)] = null);

(statearr_35700_35714[(1)] = (2));


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
});})(c__28271__auto___35708,ch))
;
return ((function (switch__28250__auto__,c__28271__auto___35708,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28251__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28251__auto____0 = (function (){
var statearr_35704 = [null,null,null,null,null,null,null,null,null];
(statearr_35704[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28251__auto__);

(statearr_35704[(1)] = (1));

return statearr_35704;
});
var figwheel$client$heads_up_plugin_$_state_machine__28251__auto____1 = (function (state_35691){
while(true){
var ret_value__28252__auto__ = (function (){try{while(true){
var result__28253__auto__ = switch__28250__auto__.call(null,state_35691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28253__auto__;
}
break;
}
}catch (e35705){if((e35705 instanceof Object)){
var ex__28254__auto__ = e35705;
var statearr_35706_35715 = state_35691;
(statearr_35706_35715[(5)] = ex__28254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35716 = state_35691;
state_35691 = G__35716;
continue;
} else {
return ret_value__28252__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28251__auto__ = function(state_35691){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28251__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28251__auto____1.call(this,state_35691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28251__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28251__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28251__auto__;
})()
;})(switch__28250__auto__,c__28271__auto___35708,ch))
})();
var state__28273__auto__ = (function (){var statearr_35707 = f__28272__auto__.call(null);
(statearr_35707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28271__auto___35708);

return statearr_35707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28273__auto__);
});})(c__28271__auto___35708,ch))
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
var c__28271__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28271__auto__){
return (function (){
var f__28272__auto__ = (function (){var switch__28250__auto__ = ((function (c__28271__auto__){
return (function (state_35737){
var state_val_35738 = (state_35737[(1)]);
if((state_val_35738 === (1))){
var inst_35732 = cljs.core.async.timeout.call(null,(3000));
var state_35737__$1 = state_35737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35737__$1,(2),inst_35732);
} else {
if((state_val_35738 === (2))){
var inst_35734 = (state_35737[(2)]);
var inst_35735 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35737__$1 = (function (){var statearr_35739 = state_35737;
(statearr_35739[(7)] = inst_35734);

return statearr_35739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35737__$1,inst_35735);
} else {
return null;
}
}
});})(c__28271__auto__))
;
return ((function (switch__28250__auto__,c__28271__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28251__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28251__auto____0 = (function (){
var statearr_35743 = [null,null,null,null,null,null,null,null];
(statearr_35743[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28251__auto__);

(statearr_35743[(1)] = (1));

return statearr_35743;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28251__auto____1 = (function (state_35737){
while(true){
var ret_value__28252__auto__ = (function (){try{while(true){
var result__28253__auto__ = switch__28250__auto__.call(null,state_35737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28253__auto__;
}
break;
}
}catch (e35744){if((e35744 instanceof Object)){
var ex__28254__auto__ = e35744;
var statearr_35745_35747 = state_35737;
(statearr_35745_35747[(5)] = ex__28254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35748 = state_35737;
state_35737 = G__35748;
continue;
} else {
return ret_value__28252__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28251__auto__ = function(state_35737){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28251__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28251__auto____1.call(this,state_35737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28251__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28251__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28251__auto__;
})()
;})(switch__28250__auto__,c__28271__auto__))
})();
var state__28273__auto__ = (function (){var statearr_35746 = f__28272__auto__.call(null);
(statearr_35746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28271__auto__);

return statearr_35746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28273__auto__);
});})(c__28271__auto__))
);

return c__28271__auto__;
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
var c__28271__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28271__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28272__auto__ = (function (){var switch__28250__auto__ = ((function (c__28271__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35771){
var state_val_35772 = (state_35771[(1)]);
if((state_val_35772 === (1))){
var inst_35765 = cljs.core.async.timeout.call(null,(2000));
var state_35771__$1 = state_35771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35771__$1,(2),inst_35765);
} else {
if((state_val_35772 === (2))){
var inst_35767 = (state_35771[(2)]);
var inst_35768 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35769 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35768);
var state_35771__$1 = (function (){var statearr_35773 = state_35771;
(statearr_35773[(7)] = inst_35767);

return statearr_35773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35771__$1,inst_35769);
} else {
return null;
}
}
});})(c__28271__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28250__auto__,c__28271__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28251__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28251__auto____0 = (function (){
var statearr_35777 = [null,null,null,null,null,null,null,null];
(statearr_35777[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28251__auto__);

(statearr_35777[(1)] = (1));

return statearr_35777;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28251__auto____1 = (function (state_35771){
while(true){
var ret_value__28252__auto__ = (function (){try{while(true){
var result__28253__auto__ = switch__28250__auto__.call(null,state_35771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28253__auto__;
}
break;
}
}catch (e35778){if((e35778 instanceof Object)){
var ex__28254__auto__ = e35778;
var statearr_35779_35781 = state_35771;
(statearr_35779_35781[(5)] = ex__28254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35782 = state_35771;
state_35771 = G__35782;
continue;
} else {
return ret_value__28252__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28251__auto__ = function(state_35771){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28251__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28251__auto____1.call(this,state_35771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28251__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28251__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28251__auto__;
})()
;})(switch__28250__auto__,c__28271__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28273__auto__ = (function (){var statearr_35780 = f__28272__auto__.call(null);
(statearr_35780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28271__auto__);

return statearr_35780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28273__auto__);
});})(c__28271__auto__,figwheel_version,temp__4657__auto__))
);

return c__28271__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35783){
var map__35787 = p__35783;
var map__35787__$1 = ((((!((map__35787 == null)))?((((map__35787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35787):map__35787);
var file = cljs.core.get.call(null,map__35787__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35787__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35787__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35789 = "";
var G__35789__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35789),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35789);
var G__35789__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35789__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35789__$1);
if(cljs.core.truth_((function (){var and__25113__auto__ = line;
if(cljs.core.truth_(and__25113__auto__)){
return column;
} else {
return and__25113__auto__;
}
})())){
return [cljs.core.str(G__35789__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35789__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35790){
var map__35797 = p__35790;
var map__35797__$1 = ((((!((map__35797 == null)))?((((map__35797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35797):map__35797);
var ed = map__35797__$1;
var formatted_exception = cljs.core.get.call(null,map__35797__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35797__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35797__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35799_35803 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35800_35804 = null;
var count__35801_35805 = (0);
var i__35802_35806 = (0);
while(true){
if((i__35802_35806 < count__35801_35805)){
var msg_35807 = cljs.core._nth.call(null,chunk__35800_35804,i__35802_35806);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35807);

var G__35808 = seq__35799_35803;
var G__35809 = chunk__35800_35804;
var G__35810 = count__35801_35805;
var G__35811 = (i__35802_35806 + (1));
seq__35799_35803 = G__35808;
chunk__35800_35804 = G__35809;
count__35801_35805 = G__35810;
i__35802_35806 = G__35811;
continue;
} else {
var temp__4657__auto___35812 = cljs.core.seq.call(null,seq__35799_35803);
if(temp__4657__auto___35812){
var seq__35799_35813__$1 = temp__4657__auto___35812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35799_35813__$1)){
var c__25936__auto___35814 = cljs.core.chunk_first.call(null,seq__35799_35813__$1);
var G__35815 = cljs.core.chunk_rest.call(null,seq__35799_35813__$1);
var G__35816 = c__25936__auto___35814;
var G__35817 = cljs.core.count.call(null,c__25936__auto___35814);
var G__35818 = (0);
seq__35799_35803 = G__35815;
chunk__35800_35804 = G__35816;
count__35801_35805 = G__35817;
i__35802_35806 = G__35818;
continue;
} else {
var msg_35819 = cljs.core.first.call(null,seq__35799_35813__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35819);

var G__35820 = cljs.core.next.call(null,seq__35799_35813__$1);
var G__35821 = null;
var G__35822 = (0);
var G__35823 = (0);
seq__35799_35803 = G__35820;
chunk__35800_35804 = G__35821;
count__35801_35805 = G__35822;
i__35802_35806 = G__35823;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35824){
var map__35827 = p__35824;
var map__35827__$1 = ((((!((map__35827 == null)))?((((map__35827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35827):map__35827);
var w = map__35827__$1;
var message = cljs.core.get.call(null,map__35827__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__35839 = cljs.core.seq.call(null,plugins);
var chunk__35840 = null;
var count__35841 = (0);
var i__35842 = (0);
while(true){
if((i__35842 < count__35841)){
var vec__35843 = cljs.core._nth.call(null,chunk__35840,i__35842);
var k = cljs.core.nth.call(null,vec__35843,(0),null);
var plugin = cljs.core.nth.call(null,vec__35843,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35849 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35839,chunk__35840,count__35841,i__35842,pl_35849,vec__35843,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35849.call(null,msg_hist);
});})(seq__35839,chunk__35840,count__35841,i__35842,pl_35849,vec__35843,k,plugin))
);
} else {
}

var G__35850 = seq__35839;
var G__35851 = chunk__35840;
var G__35852 = count__35841;
var G__35853 = (i__35842 + (1));
seq__35839 = G__35850;
chunk__35840 = G__35851;
count__35841 = G__35852;
i__35842 = G__35853;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35839);
if(temp__4657__auto__){
var seq__35839__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35839__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__35839__$1);
var G__35854 = cljs.core.chunk_rest.call(null,seq__35839__$1);
var G__35855 = c__25936__auto__;
var G__35856 = cljs.core.count.call(null,c__25936__auto__);
var G__35857 = (0);
seq__35839 = G__35854;
chunk__35840 = G__35855;
count__35841 = G__35856;
i__35842 = G__35857;
continue;
} else {
var vec__35846 = cljs.core.first.call(null,seq__35839__$1);
var k = cljs.core.nth.call(null,vec__35846,(0),null);
var plugin = cljs.core.nth.call(null,vec__35846,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35858 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35839,chunk__35840,count__35841,i__35842,pl_35858,vec__35846,k,plugin,seq__35839__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35858.call(null,msg_hist);
});})(seq__35839,chunk__35840,count__35841,i__35842,pl_35858,vec__35846,k,plugin,seq__35839__$1,temp__4657__auto__))
);
} else {
}

var G__35859 = cljs.core.next.call(null,seq__35839__$1);
var G__35860 = null;
var G__35861 = (0);
var G__35862 = (0);
seq__35839 = G__35859;
chunk__35840 = G__35860;
count__35841 = G__35861;
i__35842 = G__35862;
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
var args35863 = [];
var len__26200__auto___35870 = arguments.length;
var i__26201__auto___35871 = (0);
while(true){
if((i__26201__auto___35871 < len__26200__auto___35870)){
args35863.push((arguments[i__26201__auto___35871]));

var G__35872 = (i__26201__auto___35871 + (1));
i__26201__auto___35871 = G__35872;
continue;
} else {
}
break;
}

var G__35865 = args35863.length;
switch (G__35865) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35863.length)].join('')));

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

var seq__35866_35874 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35867_35875 = null;
var count__35868_35876 = (0);
var i__35869_35877 = (0);
while(true){
if((i__35869_35877 < count__35868_35876)){
var msg_35878 = cljs.core._nth.call(null,chunk__35867_35875,i__35869_35877);
figwheel.client.socket.handle_incoming_message.call(null,msg_35878);

var G__35879 = seq__35866_35874;
var G__35880 = chunk__35867_35875;
var G__35881 = count__35868_35876;
var G__35882 = (i__35869_35877 + (1));
seq__35866_35874 = G__35879;
chunk__35867_35875 = G__35880;
count__35868_35876 = G__35881;
i__35869_35877 = G__35882;
continue;
} else {
var temp__4657__auto___35883 = cljs.core.seq.call(null,seq__35866_35874);
if(temp__4657__auto___35883){
var seq__35866_35884__$1 = temp__4657__auto___35883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35866_35884__$1)){
var c__25936__auto___35885 = cljs.core.chunk_first.call(null,seq__35866_35884__$1);
var G__35886 = cljs.core.chunk_rest.call(null,seq__35866_35884__$1);
var G__35887 = c__25936__auto___35885;
var G__35888 = cljs.core.count.call(null,c__25936__auto___35885);
var G__35889 = (0);
seq__35866_35874 = G__35886;
chunk__35867_35875 = G__35887;
count__35868_35876 = G__35888;
i__35869_35877 = G__35889;
continue;
} else {
var msg_35890 = cljs.core.first.call(null,seq__35866_35884__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35890);

var G__35891 = cljs.core.next.call(null,seq__35866_35884__$1);
var G__35892 = null;
var G__35893 = (0);
var G__35894 = (0);
seq__35866_35874 = G__35891;
chunk__35867_35875 = G__35892;
count__35868_35876 = G__35893;
i__35869_35877 = G__35894;
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
var len__26200__auto___35899 = arguments.length;
var i__26201__auto___35900 = (0);
while(true){
if((i__26201__auto___35900 < len__26200__auto___35899)){
args__26207__auto__.push((arguments[i__26201__auto___35900]));

var G__35901 = (i__26201__auto___35900 + (1));
i__26201__auto___35900 = G__35901;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35896){
var map__35897 = p__35896;
var map__35897__$1 = ((((!((map__35897 == null)))?((((map__35897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35897):map__35897);
var opts = map__35897__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35895){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35895));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35903){if((e35903 instanceof Error)){
var e = e35903;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35903;

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
return (function (p__35907){
var map__35908 = p__35907;
var map__35908__$1 = ((((!((map__35908 == null)))?((((map__35908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35908):map__35908);
var msg_name = cljs.core.get.call(null,map__35908__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1488439829274