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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__28316){
var map__28320 = p__28316;
var map__28320__$1 = ((((!((map__28320 == null)))?((((map__28320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28320):map__28320);
var args = map__28320__$1;
var on_change = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__28322 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__25125__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__28322,external_model_value);
} else {
return G__28322;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__28323,event){
var map__28327 = p__28323;
var map__28327__$1 = ((((!((map__28327 == null)))?((((map__28327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28327):map__28327);
var state = map__28327__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__28327__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__28327__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__28329 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__28329) {
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
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__28331,event){
var map__28335 = p__28331;
var map__28335__$1 = ((((!((map__28335 == null)))?((((map__28335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28335):map__28335);
var state = map__28335__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__28335__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__28337 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__28337) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__28339,new_value){
var map__28342 = p__28339;
var map__28342__$1 = ((((!((map__28342 == null)))?((((map__28342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28342):map__28342);
var state = map__28342__$1;
var on_change = cljs.core.get.call(null,map__28342__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__28344,suggestion){
var map__28348 = p__28344;
var map__28348__$1 = ((((!((map__28348 == null)))?((((map__28348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28348):map__28348);
var state = map__28348__$1;
var suggestion_to_string = cljs.core.get.call(null,map__28348__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__28350 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__28350,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__28350;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__28351,index){
var map__28355 = p__28351;
var map__28355__$1 = ((((!((map__28355 == null)))?((((map__28355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28355):map__28355);
var state = map__28355__$1;
var suggestions = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__28357 = state;
var G__28357__$1 = cljs.core.assoc.call(null,G__28357,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__28357__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__28357__$1,suggestion):G__28357__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__28357__$2,suggestion);
} else {
return G__28357__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__28358,index){
var map__28361 = p__28358;
var map__28361__$1 = ((((!((map__28361 == null)))?((((map__28361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28361):map__28361);
var state = map__28361__$1;
var suggestions = cljs.core.get.call(null,map__28361__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__28363){
var map__28367 = p__28363;
var map__28367__$1 = ((((!((map__28367 == null)))?((((map__28367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28367):map__28367);
var state = map__28367__$1;
var suggestion_active_index = cljs.core.get.call(null,map__28367__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__28369 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__28369,suggestion_active_index);
} else {
return G__28369;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__28370){
var map__28374 = p__28370;
var map__28374__$1 = ((((!((map__28374 == null)))?((((map__28374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28374):map__28374);
var state = map__28374__$1;
var suggestions = cljs.core.get.call(null,map__28374__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__28374__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__28376 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__28376,re_com.typeahead.wrap.call(null,((function (){var or__25125__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__28376;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__28377){
var map__28381 = p__28377;
var map__28381__$1 = ((((!((map__28381 == null)))?((((map__28381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28381):map__28381);
var state = map__28381__$1;
var suggestions = cljs.core.get.call(null,map__28381__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__28381__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__28383 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__28383,re_com.typeahead.wrap.call(null,((function (){var or__25125__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__28383;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__28385 = state;
var G__28385__$1 = re_com.typeahead.clear_suggestions.call(null,G__28385)
;
var G__28385__$2 = cljs.core.assoc.call(null,G__28385__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__28385__$2,null);
} else {
return G__28385__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__28386){
var map__28390 = p__28386;
var map__28390__$1 = ((((!((map__28390 == null)))?((((map__28390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28390):map__28390);
var state = map__28390__$1;
var input_text = cljs.core.get.call(null,map__28390__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__28390__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__28392 = state;
if(cljs.core.truth_((function (){var and__25113__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__25113__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__25113__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__28392,input_text);
} else {
return G__28392;
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
var temp__4655__auto__ = data_source.call(null,text,(function (p1__28393_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__28393_SHARP_);
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
var c__28271__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28271__auto__){
return (function (){
var f__28272__auto__ = (function (){var switch__28250__auto__ = ((function (c__28271__auto__){
return (function (state_28443){
var state_val_28444 = (state_28443[(1)]);
if((state_val_28444 === (1))){
var state_28443__$1 = state_28443;
var statearr_28445_28460 = state_28443__$1;
(statearr_28445_28460[(2)] = null);

(statearr_28445_28460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (2))){
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28443__$1,(4),c_search);
} else {
if((state_val_28444 === (3))){
var inst_28441 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28443__$1,inst_28441);
} else {
if((state_val_28444 === (4))){
var inst_28429 = (state_28443[(7)]);
var inst_28429__$1 = (state_28443[(2)]);
var inst_28430 = cljs.core.deref.call(null,state_atom);
var inst_28431 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_28430);
var inst_28432 = cljs.core._EQ_.call(null,"",inst_28429__$1);
var state_28443__$1 = (function (){var statearr_28446 = state_28443;
(statearr_28446[(7)] = inst_28429__$1);

(statearr_28446[(8)] = inst_28431);

return statearr_28446;
})();
if(inst_28432){
var statearr_28447_28461 = state_28443__$1;
(statearr_28447_28461[(1)] = (5));

} else {
var statearr_28448_28462 = state_28443__$1;
(statearr_28448_28462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (5))){
var inst_28434 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_28443__$1 = state_28443;
var statearr_28449_28463 = state_28443__$1;
(statearr_28449_28463[(2)] = inst_28434);

(statearr_28449_28463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (6))){
var inst_28429 = (state_28443[(7)]);
var inst_28431 = (state_28443[(8)]);
var inst_28436 = re_com.typeahead.search_data_source_BANG_.call(null,inst_28431,state_atom,inst_28429);
var state_28443__$1 = state_28443;
var statearr_28450_28464 = state_28443__$1;
(statearr_28450_28464[(2)] = inst_28436);

(statearr_28450_28464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (7))){
var inst_28438 = (state_28443[(2)]);
var state_28443__$1 = (function (){var statearr_28451 = state_28443;
(statearr_28451[(9)] = inst_28438);

return statearr_28451;
})();
var statearr_28452_28465 = state_28443__$1;
(statearr_28452_28465[(2)] = null);

(statearr_28452_28465[(1)] = (2));


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
});})(c__28271__auto__))
;
return ((function (switch__28250__auto__,c__28271__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28251__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28251__auto____0 = (function (){
var statearr_28456 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28456[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28251__auto__);

(statearr_28456[(1)] = (1));

return statearr_28456;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28251__auto____1 = (function (state_28443){
while(true){
var ret_value__28252__auto__ = (function (){try{while(true){
var result__28253__auto__ = switch__28250__auto__.call(null,state_28443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28253__auto__;
}
break;
}
}catch (e28457){if((e28457 instanceof Object)){
var ex__28254__auto__ = e28457;
var statearr_28458_28466 = state_28443;
(statearr_28458_28466[(5)] = ex__28254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28467 = state_28443;
state_28443 = G__28467;
continue;
} else {
return ret_value__28252__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28251__auto__ = function(state_28443){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28251__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28251__auto____1.call(this,state_28443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28251__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28251__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28251__auto__;
})()
;})(switch__28250__auto__,c__28271__auto__))
})();
var state__28273__auto__ = (function (){var statearr_28459 = f__28272__auto__.call(null);
(statearr_28459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28271__auto__);

return statearr_28459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28273__auto__);
});})(c__28271__auto__))
);

return c__28271__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__28472 = cljs.core.deref.call(null,state_atom);
var map__28472__$1 = ((((!((map__28472 == null)))?((((map__28472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28472):map__28472);
var state = map__28472__$1;
var input_text = cljs.core.get.call(null,map__28472__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__28472__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__28472,map__28472__$1,state,input_text,c_input){
return (function (p1__28468_SHARP_){
var G__28474 = p1__28468_SHARP_;
var G__28474__$1 = cljs.core.assoc.call(null,G__28474,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__28474__$1,new_text);
} else {
return G__28474__$1;
}
});})(map__28472,map__28472__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__28478 = cljs.core._EQ_;
var expr__28479 = event.which;
if(cljs.core.truth_(pred__28478.call(null,goog.events.KeyCodes.UP,expr__28479))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__28478.call(null,goog.events.KeyCodes.DOWN,expr__28479))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__28478.call(null,goog.events.KeyCodes.ENTER,expr__28479))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__28478.call(null,goog.events.KeyCodes.ESC,expr__28479))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__28478.call(null,goog.events.KeyCodes.TAB,expr__28479))){
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
var len__26200__auto___28509 = arguments.length;
var i__26201__auto___28510 = (0);
while(true){
if((i__26201__auto___28510 < len__26200__auto___28509)){
args__26207__auto__.push((arguments[i__26201__auto___28510]));

var G__28511 = (i__26201__auto___28510 + (1));
i__26201__auto___28510 = G__28511;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__28483){
var map__28484 = p__28483;
var map__28484__$1 = ((((!((map__28484 == null)))?((((map__28484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28484):map__28484);
var args = map__28484__$1;
var data_source = cljs.core.get.call(null,map__28484__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var on_change = cljs.core.get.call(null,map__28484__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__28484__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__28484__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__28486 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__28486__$1 = ((((!((map__28486 == null)))?((((map__28486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28486):map__28486);
var state = map__28486__$1;
var c_search = cljs.core.get.call(null,map__28486__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__28486__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__28486,map__28486__$1,state,c_search,c_input,state_atom,input_text_model,map__28484,map__28484__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function() { 
var G__28512__delegate = function (p__28488){
var map__28489 = p__28488;
var map__28489__$1 = ((((!((map__28489 == null)))?((((map__28489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28489):map__28489);
var args__$1 = map__28489__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suggestion_to_string = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var placeholder = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var rigid_QMARK___$1 = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var width = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source__$1 = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var style = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__28491 = cljs.core.deref.call(null,state_atom);
var map__28491__$1 = ((((!((map__28491 == null)))?((((map__28491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28491):map__28491);
var state__$1 = map__28491__$1;
var suggestions = cljs.core.get.call(null,map__28491__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__28491__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__28491__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__28491__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
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
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__25905__auto__ = ((function (map__28491,map__28491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__28489,map__28489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__28486,map__28486__$1,state,c_search,c_input,state_atom,input_text_model,map__28484,map__28484__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function re_com$typeahead$iter__28493(s__28494){
return (new cljs.core.LazySeq(null,((function (map__28491,map__28491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__28489,map__28489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__28486,map__28486__$1,state,c_search,c_input,state_atom,input_text_model,map__28484,map__28484__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
var s__28494__$1 = s__28494;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28494__$1);
if(temp__4657__auto__){
var s__28494__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28494__$2)){
var c__25903__auto__ = cljs.core.chunk_first.call(null,s__28494__$2);
var size__25904__auto__ = cljs.core.count.call(null,c__25903__auto__);
var b__28496 = cljs.core.chunk_buffer.call(null,size__25904__auto__);
if((function (){var i__28495 = (0);
while(true){
if((i__28495 < size__25904__auto__)){
var vec__28503 = cljs.core._nth.call(null,c__25903__auto__,i__28495);
var i = cljs.core.nth.call(null,vec__28503,(0),null);
var s = cljs.core.nth.call(null,vec__28503,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__28496,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-typeahead-suggestion"),cljs.core.str(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__28495,selected_QMARK_,vec__28503,i,s,c__25903__auto__,size__25904__auto__,b__28496,s__28494__$2,temp__4657__auto__,map__28491,map__28491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__28489,map__28489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__28486,map__28486__$1,state,c_search,c_input,state_atom,input_text_model,map__28484,map__28484__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__28495,selected_QMARK_,vec__28503,i,s,c__25903__auto__,size__25904__auto__,b__28496,s__28494__$2,temp__4657__auto__,map__28491,map__28491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__28489,map__28489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__28486,map__28486__$1,state,c_search,c_input,state_atom,input_text_model,map__28484,map__28484__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__28495,selected_QMARK_,vec__28503,i,s,c__25903__auto__,size__25904__auto__,b__28496,s__28494__$2,temp__4657__auto__,map__28491,map__28491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__28489,map__28489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__28486,map__28486__$1,state,c_search,c_input,state_atom,input_text_model,map__28484,map__28484__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__28481_SHARP_){
p1__28481_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__28495,selected_QMARK_,vec__28503,i,s,c__25903__auto__,size__25904__auto__,b__28496,s__28494__$2,temp__4657__auto__,map__28491,map__28491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__28489,map__28489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__28486,map__28486__$1,state,c_search,c_input,state_atom,input_text_model,map__28484,map__28484__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__28513 = (i__28495 + (1));
i__28495 = G__28513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28496),re_com$typeahead$iter__28493.call(null,cljs.core.chunk_rest.call(null,s__28494__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28496),null);
}
} else {
var vec__28506 = cljs.core.first.call(null,s__28494__$2);
var i = cljs.core.nth.call(null,vec__28506,(0),null);
var s = cljs.core.nth.call(null,vec__28506,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-typeahead-suggestion"),cljs.core.str(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__28506,i,s,s__28494__$2,temp__4657__auto__,map__28491,map__28491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__28489,map__28489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__28486,map__28486__$1,state,c_search,c_input,state_atom,input_text_model,map__28484,map__28484__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__28506,i,s,s__28494__$2,temp__4657__auto__,map__28491,map__28491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__28489,map__28489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__28486,map__28486__$1,state,c_search,c_input,state_atom,input_text_model,map__28484,map__28484__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__28506,i,s,s__28494__$2,temp__4657__auto__,map__28491,map__28491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__28489,map__28489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__28486,map__28486__$1,state,c_search,c_input,state_atom,input_text_model,map__28484,map__28484__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__28481_SHARP_){
p1__28481_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__28506,i,s,s__28494__$2,temp__4657__auto__,map__28491,map__28491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__28489,map__28489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__28486,map__28486__$1,state,c_search,c_input,state_atom,input_text_model,map__28484,map__28484__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__28493.call(null,cljs.core.rest.call(null,s__28494__$2)));
}
} else {
return null;
}
break;
}
});})(map__28491,map__28491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__28489,map__28489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__28486,map__28486__$1,state,c_search,c_input,state_atom,input_text_model,map__28484,map__28484__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,null,null));
});})(map__28491,map__28491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__28489,map__28489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__28486,map__28486__$1,state,c_search,c_input,state_atom,input_text_model,map__28484,map__28484__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
;
return iter__25905__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null):null)], null)], null);
};
var G__28512 = function (var_args){
var p__28488 = null;
if (arguments.length > 0) {
var G__28514__i = 0, G__28514__a = new Array(arguments.length -  0);
while (G__28514__i < G__28514__a.length) {G__28514__a[G__28514__i] = arguments[G__28514__i + 0]; ++G__28514__i;}
  p__28488 = new cljs.core.IndexedSeq(G__28514__a,0);
} 
return G__28512__delegate.call(this,p__28488);};
G__28512.cljs$lang$maxFixedArity = 0;
G__28512.cljs$lang$applyTo = (function (arglist__28515){
var p__28488 = cljs.core.seq(arglist__28515);
return G__28512__delegate(p__28488);
});
G__28512.cljs$core$IFn$_invoke$arity$variadic = G__28512__delegate;
return G__28512;
})()
;
;})(map__28486,map__28486__$1,state,c_search,c_input,state_atom,input_text_model,map__28484,map__28484__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq28482){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28482));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__28271__auto___28682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28271__auto___28682,out){
return (function (){
var f__28272__auto__ = (function (){var switch__28250__auto__ = ((function (c__28271__auto___28682,out){
return (function (state_28649){
var state_val_28650 = (state_28649[(1)]);
if((state_val_28650 === (7))){
var inst_28604 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
var statearr_28651_28683 = state_28649__$1;
(statearr_28651_28683[(2)] = inst_28604);

(statearr_28651_28683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (1))){
var inst_28599 = null;
var state_28649__$1 = (function (){var statearr_28652 = state_28649;
(statearr_28652[(7)] = inst_28599);

return statearr_28652;
})();
var statearr_28653_28684 = state_28649__$1;
(statearr_28653_28684[(2)] = null);

(statearr_28653_28684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (4))){
var state_28649__$1 = state_28649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28649__$1,(7),in$);
} else {
if((state_val_28650 === (15))){
var inst_28634 = (state_28649[(2)]);
var state_28649__$1 = (function (){var statearr_28654 = state_28649;
(statearr_28654[(8)] = inst_28634);

return statearr_28654;
})();
var statearr_28655_28685 = state_28649__$1;
(statearr_28655_28685[(2)] = null);

(statearr_28655_28685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (13))){
var inst_28622 = (state_28649[(9)]);
var inst_28636 = cljs.core._EQ_.call(null,inst_28622,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_28649__$1 = state_28649;
if(inst_28636){
var statearr_28656_28686 = state_28649__$1;
(statearr_28656_28686[(1)] = (16));

} else {
var statearr_28657_28687 = state_28649__$1;
(statearr_28657_28687[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (6))){
var inst_28608 = (state_28649[(10)]);
var inst_28607 = (state_28649[(2)]);
var inst_28608__$1 = cljs.core.async.timeout.call(null,ms);
var inst_28616 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28617 = [in$,inst_28608__$1];
var inst_28618 = (new cljs.core.PersistentVector(null,2,(5),inst_28616,inst_28617,null));
var state_28649__$1 = (function (){var statearr_28658 = state_28649;
(statearr_28658[(10)] = inst_28608__$1);

(statearr_28658[(11)] = inst_28607);

return statearr_28658;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28649__$1,(8),inst_28618);
} else {
if((state_val_28650 === (17))){
var state_28649__$1 = state_28649;
var statearr_28659_28688 = state_28649__$1;
(statearr_28659_28688[(2)] = null);

(statearr_28659_28688[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (3))){
var inst_28647 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28649__$1,inst_28647);
} else {
if((state_val_28650 === (12))){
var inst_28607 = (state_28649[(11)]);
var state_28649__$1 = state_28649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28649__$1,(15),out,inst_28607);
} else {
if((state_val_28650 === (2))){
var inst_28599 = (state_28649[(7)]);
var inst_28601 = (inst_28599 == null);
var state_28649__$1 = state_28649;
if(cljs.core.truth_(inst_28601)){
var statearr_28660_28689 = state_28649__$1;
(statearr_28660_28689[(1)] = (4));

} else {
var statearr_28661_28690 = state_28649__$1;
(statearr_28661_28690[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (11))){
var inst_28644 = (state_28649[(2)]);
var inst_28599 = inst_28644;
var state_28649__$1 = (function (){var statearr_28662 = state_28649;
(statearr_28662[(7)] = inst_28599);

return statearr_28662;
})();
var statearr_28663_28691 = state_28649__$1;
(statearr_28663_28691[(2)] = null);

(statearr_28663_28691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (9))){
var inst_28620 = (state_28649[(12)]);
var inst_28628 = cljs.core.nth.call(null,inst_28620,(0),null);
var inst_28629 = cljs.core.nth.call(null,inst_28620,(1),null);
var state_28649__$1 = (function (){var statearr_28664 = state_28649;
(statearr_28664[(13)] = inst_28629);

return statearr_28664;
})();
var statearr_28665_28692 = state_28649__$1;
(statearr_28665_28692[(2)] = inst_28628);

(statearr_28665_28692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (5))){
var inst_28599 = (state_28649[(7)]);
var state_28649__$1 = state_28649;
var statearr_28666_28693 = state_28649__$1;
(statearr_28666_28693[(2)] = inst_28599);

(statearr_28666_28693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (14))){
var inst_28642 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
var statearr_28667_28694 = state_28649__$1;
(statearr_28667_28694[(2)] = inst_28642);

(statearr_28667_28694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (16))){
var inst_28621 = (state_28649[(14)]);
var state_28649__$1 = state_28649;
var statearr_28668_28695 = state_28649__$1;
(statearr_28668_28695[(2)] = inst_28621);

(statearr_28668_28695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (10))){
var inst_28608 = (state_28649[(10)]);
var inst_28622 = (state_28649[(9)]);
var inst_28631 = cljs.core._EQ_.call(null,inst_28622,inst_28608);
var state_28649__$1 = state_28649;
if(inst_28631){
var statearr_28669_28696 = state_28649__$1;
(statearr_28669_28696[(1)] = (12));

} else {
var statearr_28670_28697 = state_28649__$1;
(statearr_28670_28697[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (18))){
var inst_28640 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
var statearr_28671_28698 = state_28649__$1;
(statearr_28671_28698[(2)] = inst_28640);

(statearr_28671_28698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (8))){
var inst_28620 = (state_28649[(12)]);
var inst_28622 = (state_28649[(9)]);
var inst_28620__$1 = (state_28649[(2)]);
var inst_28621 = cljs.core.nth.call(null,inst_28620__$1,(0),null);
var inst_28622__$1 = cljs.core.nth.call(null,inst_28620__$1,(1),null);
var inst_28623 = cljs.core._EQ_.call(null,inst_28622__$1,in$);
var state_28649__$1 = (function (){var statearr_28672 = state_28649;
(statearr_28672[(12)] = inst_28620__$1);

(statearr_28672[(14)] = inst_28621);

(statearr_28672[(9)] = inst_28622__$1);

return statearr_28672;
})();
if(inst_28623){
var statearr_28673_28699 = state_28649__$1;
(statearr_28673_28699[(1)] = (9));

} else {
var statearr_28674_28700 = state_28649__$1;
(statearr_28674_28700[(1)] = (10));

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
});})(c__28271__auto___28682,out))
;
return ((function (switch__28250__auto__,c__28271__auto___28682,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__28251__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__28251__auto____0 = (function (){
var statearr_28678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28678[(0)] = re_com$typeahead$debounce_$_state_machine__28251__auto__);

(statearr_28678[(1)] = (1));

return statearr_28678;
});
var re_com$typeahead$debounce_$_state_machine__28251__auto____1 = (function (state_28649){
while(true){
var ret_value__28252__auto__ = (function (){try{while(true){
var result__28253__auto__ = switch__28250__auto__.call(null,state_28649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28253__auto__;
}
break;
}
}catch (e28679){if((e28679 instanceof Object)){
var ex__28254__auto__ = e28679;
var statearr_28680_28701 = state_28649;
(statearr_28680_28701[(5)] = ex__28254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28702 = state_28649;
state_28649 = G__28702;
continue;
} else {
return ret_value__28252__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__28251__auto__ = function(state_28649){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__28251__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__28251__auto____1.call(this,state_28649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__28251__auto____0;
re_com$typeahead$debounce_$_state_machine__28251__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__28251__auto____1;
return re_com$typeahead$debounce_$_state_machine__28251__auto__;
})()
;})(switch__28250__auto__,c__28271__auto___28682,out))
})();
var state__28273__auto__ = (function (){var statearr_28681 = f__28272__auto__.call(null);
(statearr_28681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28271__auto___28682);

return statearr_28681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28273__auto__);
});})(c__28271__auto___28682,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1488439822166