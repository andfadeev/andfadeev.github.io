// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the use chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."], true, false),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__115338){
var map__115342 = p__115338;
var map__115342__$1 = ((((!((map__115342 == null)))?((((map__115342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115342):map__115342);
var args = map__115342__$1;
var on_change = cljs.core.get.call(null,map__115342__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__115342__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__115342__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__115342__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__115342__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__115342__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__115342__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__115344 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__25125__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__115344,external_model_value);
} else {
return G__115344;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__115345,event){
var map__115349 = p__115345;
var map__115349__$1 = ((((!((map__115349 == null)))?((((map__115349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115349):map__115349);
var state = map__115349__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__115349__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__115349__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__115351 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__115351) {
case "input-text-blurred":
var and__25113__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__25113__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__25113__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__25125__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(event)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__115353,event){
var map__115357 = p__115353;
var map__115357__$1 = ((((!((map__115357 == null)))?((((map__115357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115357):map__115357);
var state = map__115357__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__115357__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__115359 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__115359) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__115361,new_value){
var map__115364 = p__115361;
var map__115364__$1 = ((((!((map__115364 == null)))?((((map__115364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115364):map__115364);
var state = map__115364__$1;
var on_change = cljs.core.get.call(null,map__115364__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__115366,suggestion){
var map__115370 = p__115366;
var map__115370__$1 = ((((!((map__115370 == null)))?((((map__115370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115370):map__115370);
var state = map__115370__$1;
var suggestion_to_string = cljs.core.get.call(null,map__115370__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__115372 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__115372,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__115372;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__115373,index){
var map__115377 = p__115373;
var map__115377__$1 = ((((!((map__115377 == null)))?((((map__115377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115377):map__115377);
var state = map__115377__$1;
var suggestions = cljs.core.get.call(null,map__115377__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__115379 = state;
var G__115379__$1 = cljs.core.assoc.call(null,G__115379,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__115379__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__115379__$1,suggestion):G__115379__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__115379__$2,suggestion);
} else {
return G__115379__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__115380,index){
var map__115383 = p__115380;
var map__115383__$1 = ((((!((map__115383 == null)))?((((map__115383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115383):map__115383);
var state = map__115383__$1;
var suggestions = cljs.core.get.call(null,map__115383__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__115385){
var map__115389 = p__115385;
var map__115389__$1 = ((((!((map__115389 == null)))?((((map__115389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115389):map__115389);
var state = map__115389__$1;
var suggestion_active_index = cljs.core.get.call(null,map__115389__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__115391 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__115391,suggestion_active_index);
} else {
return G__115391;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__115392){
var map__115396 = p__115392;
var map__115396__$1 = ((((!((map__115396 == null)))?((((map__115396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115396):map__115396);
var state = map__115396__$1;
var suggestions = cljs.core.get.call(null,map__115396__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__115396__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__115398 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__115398,re_com.typeahead.wrap.call(null,((function (){var or__25125__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__115398;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__115399){
var map__115403 = p__115399;
var map__115403__$1 = ((((!((map__115403 == null)))?((((map__115403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115403):map__115403);
var state = map__115403__$1;
var suggestions = cljs.core.get.call(null,map__115403__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__115403__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__115405 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__115405,re_com.typeahead.wrap.call(null,((function (){var or__25125__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__115405;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__115407 = state;
var G__115407__$1 = re_com.typeahead.clear_suggestions.call(null,G__115407)
;
var G__115407__$2 = cljs.core.assoc.call(null,G__115407__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__115407__$2,null);
} else {
return G__115407__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__115408){
var map__115412 = p__115408;
var map__115412__$1 = ((((!((map__115412 == null)))?((((map__115412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115412):map__115412);
var state = map__115412__$1;
var input_text = cljs.core.get.call(null,map__115412__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__115412__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__115414 = state;
if(cljs.core.truth_((function (){var and__25113__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__25113__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__25113__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__115414,input_text);
} else {
return G__115414;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__115415_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__115415_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__28398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto__){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto__){
return (function (state_115465){
var state_val_115466 = (state_115465[(1)]);
if((state_val_115466 === (1))){
var state_115465__$1 = state_115465;
var statearr_115467_115482 = state_115465__$1;
(statearr_115467_115482[(2)] = null);

(statearr_115467_115482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115466 === (2))){
var state_115465__$1 = state_115465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_115465__$1,(4),c_search);
} else {
if((state_val_115466 === (3))){
var inst_115463 = (state_115465[(2)]);
var state_115465__$1 = state_115465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_115465__$1,inst_115463);
} else {
if((state_val_115466 === (4))){
var inst_115451 = (state_115465[(7)]);
var inst_115451__$1 = (state_115465[(2)]);
var inst_115452 = cljs.core.deref.call(null,state_atom);
var inst_115453 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_115452);
var inst_115454 = cljs.core._EQ_.call(null,"",inst_115451__$1);
var state_115465__$1 = (function (){var statearr_115468 = state_115465;
(statearr_115468[(7)] = inst_115451__$1);

(statearr_115468[(8)] = inst_115453);

return statearr_115468;
})();
if(inst_115454){
var statearr_115469_115483 = state_115465__$1;
(statearr_115469_115483[(1)] = (5));

} else {
var statearr_115470_115484 = state_115465__$1;
(statearr_115470_115484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115466 === (5))){
var inst_115456 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_115465__$1 = state_115465;
var statearr_115471_115485 = state_115465__$1;
(statearr_115471_115485[(2)] = inst_115456);

(statearr_115471_115485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115466 === (6))){
var inst_115451 = (state_115465[(7)]);
var inst_115453 = (state_115465[(8)]);
var inst_115458 = re_com.typeahead.search_data_source_BANG_.call(null,inst_115453,state_atom,inst_115451);
var state_115465__$1 = state_115465;
var statearr_115472_115486 = state_115465__$1;
(statearr_115472_115486[(2)] = inst_115458);

(statearr_115472_115486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115466 === (7))){
var inst_115460 = (state_115465[(2)]);
var state_115465__$1 = (function (){var statearr_115473 = state_115465;
(statearr_115473[(9)] = inst_115460);

return statearr_115473;
})();
var statearr_115474_115487 = state_115465__$1;
(statearr_115474_115487[(2)] = null);

(statearr_115474_115487[(1)] = (2));


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
});})(c__28398__auto__))
;
return ((function (switch__28286__auto__,c__28398__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto____0 = (function (){
var statearr_115478 = [null,null,null,null,null,null,null,null,null,null];
(statearr_115478[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto__);

(statearr_115478[(1)] = (1));

return statearr_115478;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto____1 = (function (state_115465){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_115465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e115479){if((e115479 instanceof Object)){
var ex__28290__auto__ = e115479;
var statearr_115480_115488 = state_115465;
(statearr_115480_115488[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_115465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e115479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115489 = state_115465;
state_115465 = G__115489;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto__ = function(state_115465){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto____1.call(this,state_115465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__))
})();
var state__28400__auto__ = (function (){var statearr_115481 = f__28399__auto__.call(null);
(statearr_115481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_115481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto__))
);

return c__28398__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__115494 = cljs.core.deref.call(null,state_atom);
var map__115494__$1 = ((((!((map__115494 == null)))?((((map__115494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115494):map__115494);
var state = map__115494__$1;
var input_text = cljs.core.get.call(null,map__115494__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__115494__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__115494,map__115494__$1,state,input_text,c_input){
return (function (p1__115490_SHARP_){
var G__115496 = p1__115490_SHARP_;
var G__115496__$1 = cljs.core.assoc.call(null,G__115496,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__115496__$1,new_text);
} else {
return G__115496__$1;
}
});})(map__115494,map__115494__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__115500 = cljs.core._EQ_;
var expr__115501 = event.which;
if(cljs.core.truth_(pred__115500.call(null,goog.events.KeyCodes.UP,expr__115501))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__115500.call(null,goog.events.KeyCodes.DOWN,expr__115501))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__115500.call(null,goog.events.KeyCodes.ENTER,expr__115501))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__115500.call(null,goog.events.KeyCodes.ESC,expr__115501))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__115500.call(null,goog.events.KeyCodes.TAB,expr__115501))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__26207__auto__ = [];
var len__26200__auto___115531 = arguments.length;
var i__26201__auto___115532 = (0);
while(true){
if((i__26201__auto___115532 < len__26200__auto___115531)){
args__26207__auto__.push((arguments[i__26201__auto___115532]));

var G__115533 = (i__26201__auto___115532 + (1));
i__26201__auto___115532 = G__115533;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__115505){
var map__115506 = p__115505;
var map__115506__$1 = ((((!((map__115506 == null)))?((((map__115506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115506):map__115506);
var args = map__115506__$1;
var data_source = cljs.core.get.call(null,map__115506__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var on_change = cljs.core.get.call(null,map__115506__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__115506__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__115506__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__115508 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__115508__$1 = ((((!((map__115508 == null)))?((((map__115508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115508):map__115508);
var state = map__115508__$1;
var c_search = cljs.core.get.call(null,map__115508__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__115508__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__115508,map__115508__$1,state,c_search,c_input,state_atom,input_text_model,map__115506,map__115506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function() { 
var G__115534__delegate = function (p__115510){
var map__115511 = p__115510;
var map__115511__$1 = ((((!((map__115511 == null)))?((((map__115511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115511):map__115511);
var args__$1 = map__115511__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__115511__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__115511__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__115511__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__115511__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__115511__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suggestion_to_string = cljs.core.get.call(null,map__115511__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var placeholder = cljs.core.get.call(null,map__115511__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__115511__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var rigid_QMARK___$1 = cljs.core.get.call(null,map__115511__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var width = cljs.core.get.call(null,map__115511__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source__$1 = cljs.core.get.call(null,map__115511__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var style = cljs.core.get.call(null,map__115511__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__115511__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__115511__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__115513 = cljs.core.deref.call(null,state_atom);
var map__115513__$1 = ((((!((map__115513 == null)))?((((map__115513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115513):map__115513);
var state__$1 = map__115513__$1;
var suggestions = cljs.core.get.call(null,map__115513__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__115513__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__115513__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__115513__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__25125__auto__ = width;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source__$1)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source__$1);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__25125__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__25905__auto__ = ((function (map__115513,map__115513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__115511,map__115511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__115508,map__115508__$1,state,c_search,c_input,state_atom,input_text_model,map__115506,map__115506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function re_com$typeahead$iter__115515(s__115516){
return (new cljs.core.LazySeq(null,((function (map__115513,map__115513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__115511,map__115511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__115508,map__115508__$1,state,c_search,c_input,state_atom,input_text_model,map__115506,map__115506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
var s__115516__$1 = s__115516;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__115516__$1);
if(temp__4657__auto__){
var s__115516__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__115516__$2)){
var c__25903__auto__ = cljs.core.chunk_first.call(null,s__115516__$2);
var size__25904__auto__ = cljs.core.count.call(null,c__25903__auto__);
var b__115518 = cljs.core.chunk_buffer.call(null,size__25904__auto__);
if((function (){var i__115517 = (0);
while(true){
if((i__115517 < size__25904__auto__)){
var vec__115525 = cljs.core._nth.call(null,c__25903__auto__,i__115517);
var i = cljs.core.nth.call(null,vec__115525,(0),null);
var s = cljs.core.nth.call(null,vec__115525,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__115518,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-typeahead-suggestion"),cljs.core.str(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__115517,selected_QMARK_,vec__115525,i,s,c__25903__auto__,size__25904__auto__,b__115518,s__115516__$2,temp__4657__auto__,map__115513,map__115513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__115511,map__115511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__115508,map__115508__$1,state,c_search,c_input,state_atom,input_text_model,map__115506,map__115506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__115517,selected_QMARK_,vec__115525,i,s,c__25903__auto__,size__25904__auto__,b__115518,s__115516__$2,temp__4657__auto__,map__115513,map__115513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__115511,map__115511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__115508,map__115508__$1,state,c_search,c_input,state_atom,input_text_model,map__115506,map__115506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__115517,selected_QMARK_,vec__115525,i,s,c__25903__auto__,size__25904__auto__,b__115518,s__115516__$2,temp__4657__auto__,map__115513,map__115513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__115511,map__115511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__115508,map__115508__$1,state,c_search,c_input,state_atom,input_text_model,map__115506,map__115506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__115503_SHARP_){
p1__115503_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__115517,selected_QMARK_,vec__115525,i,s,c__25903__auto__,size__25904__auto__,b__115518,s__115516__$2,temp__4657__auto__,map__115513,map__115513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__115511,map__115511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__115508,map__115508__$1,state,c_search,c_input,state_atom,input_text_model,map__115506,map__115506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__115535 = (i__115517 + (1));
i__115517 = G__115535;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__115518),re_com$typeahead$iter__115515.call(null,cljs.core.chunk_rest.call(null,s__115516__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__115518),null);
}
} else {
var vec__115528 = cljs.core.first.call(null,s__115516__$2);
var i = cljs.core.nth.call(null,vec__115528,(0),null);
var s = cljs.core.nth.call(null,vec__115528,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-typeahead-suggestion"),cljs.core.str(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__115528,i,s,s__115516__$2,temp__4657__auto__,map__115513,map__115513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__115511,map__115511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__115508,map__115508__$1,state,c_search,c_input,state_atom,input_text_model,map__115506,map__115506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__115528,i,s,s__115516__$2,temp__4657__auto__,map__115513,map__115513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__115511,map__115511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__115508,map__115508__$1,state,c_search,c_input,state_atom,input_text_model,map__115506,map__115506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__115528,i,s,s__115516__$2,temp__4657__auto__,map__115513,map__115513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__115511,map__115511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__115508,map__115508__$1,state,c_search,c_input,state_atom,input_text_model,map__115506,map__115506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__115503_SHARP_){
p1__115503_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__115528,i,s,s__115516__$2,temp__4657__auto__,map__115513,map__115513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__115511,map__115511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__115508,map__115508__$1,state,c_search,c_input,state_atom,input_text_model,map__115506,map__115506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__115515.call(null,cljs.core.rest.call(null,s__115516__$2)));
}
} else {
return null;
}
break;
}
});})(map__115513,map__115513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__115511,map__115511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__115508,map__115508__$1,state,c_search,c_input,state_atom,input_text_model,map__115506,map__115506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,null,null));
});})(map__115513,map__115513__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__115511,map__115511__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__115508,map__115508__$1,state,c_search,c_input,state_atom,input_text_model,map__115506,map__115506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
;
return iter__25905__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null):null)], null)], null);
};
var G__115534 = function (var_args){
var p__115510 = null;
if (arguments.length > 0) {
var G__115536__i = 0, G__115536__a = new Array(arguments.length -  0);
while (G__115536__i < G__115536__a.length) {G__115536__a[G__115536__i] = arguments[G__115536__i + 0]; ++G__115536__i;}
  p__115510 = new cljs.core.IndexedSeq(G__115536__a,0);
} 
return G__115534__delegate.call(this,p__115510);};
G__115534.cljs$lang$maxFixedArity = 0;
G__115534.cljs$lang$applyTo = (function (arglist__115537){
var p__115510 = cljs.core.seq(arglist__115537);
return G__115534__delegate(p__115510);
});
G__115534.cljs$core$IFn$_invoke$arity$variadic = G__115534__delegate;
return G__115534;
})()
;
;})(map__115508,map__115508__$1,state,c_search,c_input,state_atom,input_text_model,map__115506,map__115506__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq115504){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq115504));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__28398__auto___115704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto___115704,out){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto___115704,out){
return (function (state_115671){
var state_val_115672 = (state_115671[(1)]);
if((state_val_115672 === (7))){
var inst_115626 = (state_115671[(2)]);
var state_115671__$1 = state_115671;
var statearr_115673_115705 = state_115671__$1;
(statearr_115673_115705[(2)] = inst_115626);

(statearr_115673_115705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115672 === (1))){
var inst_115621 = null;
var state_115671__$1 = (function (){var statearr_115674 = state_115671;
(statearr_115674[(7)] = inst_115621);

return statearr_115674;
})();
var statearr_115675_115706 = state_115671__$1;
(statearr_115675_115706[(2)] = null);

(statearr_115675_115706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115672 === (4))){
var state_115671__$1 = state_115671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_115671__$1,(7),in$);
} else {
if((state_val_115672 === (15))){
var inst_115656 = (state_115671[(2)]);
var state_115671__$1 = (function (){var statearr_115676 = state_115671;
(statearr_115676[(8)] = inst_115656);

return statearr_115676;
})();
var statearr_115677_115707 = state_115671__$1;
(statearr_115677_115707[(2)] = null);

(statearr_115677_115707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115672 === (13))){
var inst_115644 = (state_115671[(9)]);
var inst_115658 = cljs.core._EQ_.call(null,inst_115644,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_115671__$1 = state_115671;
if(inst_115658){
var statearr_115678_115708 = state_115671__$1;
(statearr_115678_115708[(1)] = (16));

} else {
var statearr_115679_115709 = state_115671__$1;
(statearr_115679_115709[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115672 === (6))){
var inst_115630 = (state_115671[(10)]);
var inst_115629 = (state_115671[(2)]);
var inst_115630__$1 = cljs.core.async.timeout.call(null,ms);
var inst_115638 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_115639 = [in$,inst_115630__$1];
var inst_115640 = (new cljs.core.PersistentVector(null,2,(5),inst_115638,inst_115639,null));
var state_115671__$1 = (function (){var statearr_115680 = state_115671;
(statearr_115680[(10)] = inst_115630__$1);

(statearr_115680[(11)] = inst_115629);

return statearr_115680;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_115671__$1,(8),inst_115640);
} else {
if((state_val_115672 === (17))){
var state_115671__$1 = state_115671;
var statearr_115681_115710 = state_115671__$1;
(statearr_115681_115710[(2)] = null);

(statearr_115681_115710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115672 === (3))){
var inst_115669 = (state_115671[(2)]);
var state_115671__$1 = state_115671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_115671__$1,inst_115669);
} else {
if((state_val_115672 === (12))){
var inst_115629 = (state_115671[(11)]);
var state_115671__$1 = state_115671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_115671__$1,(15),out,inst_115629);
} else {
if((state_val_115672 === (2))){
var inst_115621 = (state_115671[(7)]);
var inst_115623 = (inst_115621 == null);
var state_115671__$1 = state_115671;
if(cljs.core.truth_(inst_115623)){
var statearr_115682_115711 = state_115671__$1;
(statearr_115682_115711[(1)] = (4));

} else {
var statearr_115683_115712 = state_115671__$1;
(statearr_115683_115712[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115672 === (11))){
var inst_115666 = (state_115671[(2)]);
var inst_115621 = inst_115666;
var state_115671__$1 = (function (){var statearr_115684 = state_115671;
(statearr_115684[(7)] = inst_115621);

return statearr_115684;
})();
var statearr_115685_115713 = state_115671__$1;
(statearr_115685_115713[(2)] = null);

(statearr_115685_115713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115672 === (9))){
var inst_115642 = (state_115671[(12)]);
var inst_115650 = cljs.core.nth.call(null,inst_115642,(0),null);
var inst_115651 = cljs.core.nth.call(null,inst_115642,(1),null);
var state_115671__$1 = (function (){var statearr_115686 = state_115671;
(statearr_115686[(13)] = inst_115651);

return statearr_115686;
})();
var statearr_115687_115714 = state_115671__$1;
(statearr_115687_115714[(2)] = inst_115650);

(statearr_115687_115714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115672 === (5))){
var inst_115621 = (state_115671[(7)]);
var state_115671__$1 = state_115671;
var statearr_115688_115715 = state_115671__$1;
(statearr_115688_115715[(2)] = inst_115621);

(statearr_115688_115715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115672 === (14))){
var inst_115664 = (state_115671[(2)]);
var state_115671__$1 = state_115671;
var statearr_115689_115716 = state_115671__$1;
(statearr_115689_115716[(2)] = inst_115664);

(statearr_115689_115716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115672 === (16))){
var inst_115643 = (state_115671[(14)]);
var state_115671__$1 = state_115671;
var statearr_115690_115717 = state_115671__$1;
(statearr_115690_115717[(2)] = inst_115643);

(statearr_115690_115717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115672 === (10))){
var inst_115630 = (state_115671[(10)]);
var inst_115644 = (state_115671[(9)]);
var inst_115653 = cljs.core._EQ_.call(null,inst_115644,inst_115630);
var state_115671__$1 = state_115671;
if(inst_115653){
var statearr_115691_115718 = state_115671__$1;
(statearr_115691_115718[(1)] = (12));

} else {
var statearr_115692_115719 = state_115671__$1;
(statearr_115692_115719[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115672 === (18))){
var inst_115662 = (state_115671[(2)]);
var state_115671__$1 = state_115671;
var statearr_115693_115720 = state_115671__$1;
(statearr_115693_115720[(2)] = inst_115662);

(statearr_115693_115720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115672 === (8))){
var inst_115642 = (state_115671[(12)]);
var inst_115644 = (state_115671[(9)]);
var inst_115642__$1 = (state_115671[(2)]);
var inst_115643 = cljs.core.nth.call(null,inst_115642__$1,(0),null);
var inst_115644__$1 = cljs.core.nth.call(null,inst_115642__$1,(1),null);
var inst_115645 = cljs.core._EQ_.call(null,inst_115644__$1,in$);
var state_115671__$1 = (function (){var statearr_115694 = state_115671;
(statearr_115694[(14)] = inst_115643);

(statearr_115694[(12)] = inst_115642__$1);

(statearr_115694[(9)] = inst_115644__$1);

return statearr_115694;
})();
if(inst_115645){
var statearr_115695_115721 = state_115671__$1;
(statearr_115695_115721[(1)] = (9));

} else {
var statearr_115696_115722 = state_115671__$1;
(statearr_115696_115722[(1)] = (10));

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
}
});})(c__28398__auto___115704,out))
;
return ((function (switch__28286__auto__,c__28398__auto___115704,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__28287__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__28287__auto____0 = (function (){
var statearr_115700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_115700[(0)] = re_com$typeahead$debounce_$_state_machine__28287__auto__);

(statearr_115700[(1)] = (1));

return statearr_115700;
});
var re_com$typeahead$debounce_$_state_machine__28287__auto____1 = (function (state_115671){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_115671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e115701){if((e115701 instanceof Object)){
var ex__28290__auto__ = e115701;
var statearr_115702_115723 = state_115671;
(statearr_115702_115723[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_115671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e115701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115724 = state_115671;
state_115671 = G__115724;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__28287__auto__ = function(state_115671){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__28287__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__28287__auto____1.call(this,state_115671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__28287__auto____0;
re_com$typeahead$debounce_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__28287__auto____1;
return re_com$typeahead$debounce_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto___115704,out))
})();
var state__28400__auto__ = (function (){var statearr_115703 = f__28399__auto__.call(null);
(statearr_115703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto___115704);

return statearr_115703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto___115704,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1488400163842