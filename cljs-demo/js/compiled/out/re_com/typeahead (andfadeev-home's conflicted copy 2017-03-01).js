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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__90138){
var map__90142 = p__90138;
var map__90142__$1 = ((((!((map__90142 == null)))?((((map__90142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90142):map__90142);
var args = map__90142__$1;
var on_change = cljs.core.get.call(null,map__90142__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__90142__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__90142__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__90142__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__90142__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__90142__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__90142__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__90144 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__25125__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__90144,external_model_value);
} else {
return G__90144;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__90145,event){
var map__90149 = p__90145;
var map__90149__$1 = ((((!((map__90149 == null)))?((((map__90149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90149):map__90149);
var state = map__90149__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__90149__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__90149__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__90151 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__90151) {
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
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__90153,event){
var map__90157 = p__90153;
var map__90157__$1 = ((((!((map__90157 == null)))?((((map__90157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90157):map__90157);
var state = map__90157__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__90157__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__90159 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__90159) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__90161,new_value){
var map__90164 = p__90161;
var map__90164__$1 = ((((!((map__90164 == null)))?((((map__90164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90164):map__90164);
var state = map__90164__$1;
var on_change = cljs.core.get.call(null,map__90164__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__90166,suggestion){
var map__90170 = p__90166;
var map__90170__$1 = ((((!((map__90170 == null)))?((((map__90170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90170):map__90170);
var state = map__90170__$1;
var suggestion_to_string = cljs.core.get.call(null,map__90170__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__90172 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__90172,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__90172;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__90173,index){
var map__90177 = p__90173;
var map__90177__$1 = ((((!((map__90177 == null)))?((((map__90177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90177):map__90177);
var state = map__90177__$1;
var suggestions = cljs.core.get.call(null,map__90177__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__90179 = state;
var G__90179__$1 = cljs.core.assoc.call(null,G__90179,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__90179__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__90179__$1,suggestion):G__90179__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__90179__$2,suggestion);
} else {
return G__90179__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__90180,index){
var map__90183 = p__90180;
var map__90183__$1 = ((((!((map__90183 == null)))?((((map__90183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90183):map__90183);
var state = map__90183__$1;
var suggestions = cljs.core.get.call(null,map__90183__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__90185){
var map__90189 = p__90185;
var map__90189__$1 = ((((!((map__90189 == null)))?((((map__90189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90189):map__90189);
var state = map__90189__$1;
var suggestion_active_index = cljs.core.get.call(null,map__90189__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__90191 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__90191,suggestion_active_index);
} else {
return G__90191;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__90192){
var map__90196 = p__90192;
var map__90196__$1 = ((((!((map__90196 == null)))?((((map__90196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90196):map__90196);
var state = map__90196__$1;
var suggestions = cljs.core.get.call(null,map__90196__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__90196__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__90198 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__90198,re_com.typeahead.wrap.call(null,((function (){var or__25125__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__90198;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__90199){
var map__90203 = p__90199;
var map__90203__$1 = ((((!((map__90203 == null)))?((((map__90203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90203):map__90203);
var state = map__90203__$1;
var suggestions = cljs.core.get.call(null,map__90203__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__90203__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__90205 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__90205,re_com.typeahead.wrap.call(null,((function (){var or__25125__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__90205;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__90207 = state;
var G__90207__$1 = re_com.typeahead.clear_suggestions.call(null,G__90207)
;
var G__90207__$2 = cljs.core.assoc.call(null,G__90207__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__90207__$2,null);
} else {
return G__90207__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__90208){
var map__90212 = p__90208;
var map__90212__$1 = ((((!((map__90212 == null)))?((((map__90212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90212):map__90212);
var state = map__90212__$1;
var input_text = cljs.core.get.call(null,map__90212__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__90212__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__90214 = state;
if(cljs.core.truth_((function (){var and__25113__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__25113__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__25113__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__90214,input_text);
} else {
return G__90214;
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
var temp__4655__auto__ = data_source.call(null,text,(function (p1__90215_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__90215_SHARP_);
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
return (function (state_90265){
var state_val_90266 = (state_90265[(1)]);
if((state_val_90266 === (1))){
var state_90265__$1 = state_90265;
var statearr_90267_90282 = state_90265__$1;
(statearr_90267_90282[(2)] = null);

(statearr_90267_90282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90266 === (2))){
var state_90265__$1 = state_90265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90265__$1,(4),c_search);
} else {
if((state_val_90266 === (3))){
var inst_90263 = (state_90265[(2)]);
var state_90265__$1 = state_90265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90265__$1,inst_90263);
} else {
if((state_val_90266 === (4))){
var inst_90251 = (state_90265[(7)]);
var inst_90251__$1 = (state_90265[(2)]);
var inst_90252 = cljs.core.deref.call(null,state_atom);
var inst_90253 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_90252);
var inst_90254 = cljs.core._EQ_.call(null,"",inst_90251__$1);
var state_90265__$1 = (function (){var statearr_90268 = state_90265;
(statearr_90268[(8)] = inst_90253);

(statearr_90268[(7)] = inst_90251__$1);

return statearr_90268;
})();
if(inst_90254){
var statearr_90269_90283 = state_90265__$1;
(statearr_90269_90283[(1)] = (5));

} else {
var statearr_90270_90284 = state_90265__$1;
(statearr_90270_90284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90266 === (5))){
var inst_90256 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_90265__$1 = state_90265;
var statearr_90271_90285 = state_90265__$1;
(statearr_90271_90285[(2)] = inst_90256);

(statearr_90271_90285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90266 === (6))){
var inst_90253 = (state_90265[(8)]);
var inst_90251 = (state_90265[(7)]);
var inst_90258 = re_com.typeahead.search_data_source_BANG_.call(null,inst_90253,state_atom,inst_90251);
var state_90265__$1 = state_90265;
var statearr_90272_90286 = state_90265__$1;
(statearr_90272_90286[(2)] = inst_90258);

(statearr_90272_90286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90266 === (7))){
var inst_90260 = (state_90265[(2)]);
var state_90265__$1 = (function (){var statearr_90273 = state_90265;
(statearr_90273[(9)] = inst_90260);

return statearr_90273;
})();
var statearr_90274_90287 = state_90265__$1;
(statearr_90274_90287[(2)] = null);

(statearr_90274_90287[(1)] = (2));


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
var statearr_90278 = [null,null,null,null,null,null,null,null,null,null];
(statearr_90278[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto__);

(statearr_90278[(1)] = (1));

return statearr_90278;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto____1 = (function (state_90265){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_90265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e90279){if((e90279 instanceof Object)){
var ex__28290__auto__ = e90279;
var statearr_90280_90288 = state_90265;
(statearr_90280_90288[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90289 = state_90265;
state_90265 = G__90289;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto__ = function(state_90265){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto____1.call(this,state_90265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto__))
})();
var state__28400__auto__ = (function (){var statearr_90281 = f__28399__auto__.call(null);
(statearr_90281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto__);

return statearr_90281;
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
var map__90294 = cljs.core.deref.call(null,state_atom);
var map__90294__$1 = ((((!((map__90294 == null)))?((((map__90294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90294):map__90294);
var state = map__90294__$1;
var input_text = cljs.core.get.call(null,map__90294__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__90294__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__90294,map__90294__$1,state,input_text,c_input){
return (function (p1__90290_SHARP_){
var G__90296 = p1__90290_SHARP_;
var G__90296__$1 = cljs.core.assoc.call(null,G__90296,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__90296__$1,new_text);
} else {
return G__90296__$1;
}
});})(map__90294,map__90294__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__90300 = cljs.core._EQ_;
var expr__90301 = event.which;
if(cljs.core.truth_(pred__90300.call(null,goog.events.KeyCodes.UP,expr__90301))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__90300.call(null,goog.events.KeyCodes.DOWN,expr__90301))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__90300.call(null,goog.events.KeyCodes.ENTER,expr__90301))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__90300.call(null,goog.events.KeyCodes.ESC,expr__90301))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__90300.call(null,goog.events.KeyCodes.TAB,expr__90301))){
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
var len__26200__auto___90331 = arguments.length;
var i__26201__auto___90332 = (0);
while(true){
if((i__26201__auto___90332 < len__26200__auto___90331)){
args__26207__auto__.push((arguments[i__26201__auto___90332]));

var G__90333 = (i__26201__auto___90332 + (1));
i__26201__auto___90332 = G__90333;
continue;
} else {
}
break;
}

var argseq__26208__auto__ = ((((0) < args__26207__auto__.length))?(new cljs.core.IndexedSeq(args__26207__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__26208__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__90305){
var map__90306 = p__90305;
var map__90306__$1 = ((((!((map__90306 == null)))?((((map__90306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90306):map__90306);
var args = map__90306__$1;
var data_source = cljs.core.get.call(null,map__90306__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var on_change = cljs.core.get.call(null,map__90306__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__90306__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__90306__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__90308 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__90308__$1 = ((((!((map__90308 == null)))?((((map__90308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90308):map__90308);
var state = map__90308__$1;
var c_search = cljs.core.get.call(null,map__90308__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__90308__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__90308,map__90308__$1,state,c_search,c_input,state_atom,input_text_model,map__90306,map__90306__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function() { 
var G__90334__delegate = function (p__90310){
var map__90311 = p__90310;
var map__90311__$1 = ((((!((map__90311 == null)))?((((map__90311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90311):map__90311);
var args__$1 = map__90311__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__90311__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__90311__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__90311__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__90311__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__90311__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suggestion_to_string = cljs.core.get.call(null,map__90311__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var placeholder = cljs.core.get.call(null,map__90311__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__90311__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var rigid_QMARK___$1 = cljs.core.get.call(null,map__90311__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var width = cljs.core.get.call(null,map__90311__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source__$1 = cljs.core.get.call(null,map__90311__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var style = cljs.core.get.call(null,map__90311__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__90311__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__90311__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__90313 = cljs.core.deref.call(null,state_atom);
var map__90313__$1 = ((((!((map__90313 == null)))?((((map__90313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90313):map__90313);
var state__$1 = map__90313__$1;
var suggestions = cljs.core.get.call(null,map__90313__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__90313__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__90313__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__90313__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
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
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__25905__auto__ = ((function (map__90313,map__90313__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__90311,map__90311__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__90308,map__90308__$1,state,c_search,c_input,state_atom,input_text_model,map__90306,map__90306__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function re_com$typeahead$iter__90315(s__90316){
return (new cljs.core.LazySeq(null,((function (map__90313,map__90313__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__90311,map__90311__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__90308,map__90308__$1,state,c_search,c_input,state_atom,input_text_model,map__90306,map__90306__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
var s__90316__$1 = s__90316;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__90316__$1);
if(temp__4657__auto__){
var s__90316__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__90316__$2)){
var c__25903__auto__ = cljs.core.chunk_first.call(null,s__90316__$2);
var size__25904__auto__ = cljs.core.count.call(null,c__25903__auto__);
var b__90318 = cljs.core.chunk_buffer.call(null,size__25904__auto__);
if((function (){var i__90317 = (0);
while(true){
if((i__90317 < size__25904__auto__)){
var vec__90325 = cljs.core._nth.call(null,c__25903__auto__,i__90317);
var i = cljs.core.nth.call(null,vec__90325,(0),null);
var s = cljs.core.nth.call(null,vec__90325,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__90318,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-typeahead-suggestion"),cljs.core.str(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__90317,selected_QMARK_,vec__90325,i,s,c__25903__auto__,size__25904__auto__,b__90318,s__90316__$2,temp__4657__auto__,map__90313,map__90313__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__90311,map__90311__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__90308,map__90308__$1,state,c_search,c_input,state_atom,input_text_model,map__90306,map__90306__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__90317,selected_QMARK_,vec__90325,i,s,c__25903__auto__,size__25904__auto__,b__90318,s__90316__$2,temp__4657__auto__,map__90313,map__90313__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__90311,map__90311__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__90308,map__90308__$1,state,c_search,c_input,state_atom,input_text_model,map__90306,map__90306__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__90317,selected_QMARK_,vec__90325,i,s,c__25903__auto__,size__25904__auto__,b__90318,s__90316__$2,temp__4657__auto__,map__90313,map__90313__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__90311,map__90311__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__90308,map__90308__$1,state,c_search,c_input,state_atom,input_text_model,map__90306,map__90306__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__90303_SHARP_){
p1__90303_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__90317,selected_QMARK_,vec__90325,i,s,c__25903__auto__,size__25904__auto__,b__90318,s__90316__$2,temp__4657__auto__,map__90313,map__90313__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__90311,map__90311__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__90308,map__90308__$1,state,c_search,c_input,state_atom,input_text_model,map__90306,map__90306__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__90335 = (i__90317 + (1));
i__90317 = G__90335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__90318),re_com$typeahead$iter__90315.call(null,cljs.core.chunk_rest.call(null,s__90316__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__90318),null);
}
} else {
var vec__90328 = cljs.core.first.call(null,s__90316__$2);
var i = cljs.core.nth.call(null,vec__90328,(0),null);
var s = cljs.core.nth.call(null,vec__90328,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("rc-typeahead-suggestion"),cljs.core.str(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__90328,i,s,s__90316__$2,temp__4657__auto__,map__90313,map__90313__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__90311,map__90311__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__90308,map__90308__$1,state,c_search,c_input,state_atom,input_text_model,map__90306,map__90306__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__90328,i,s,s__90316__$2,temp__4657__auto__,map__90313,map__90313__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__90311,map__90311__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__90308,map__90308__$1,state,c_search,c_input,state_atom,input_text_model,map__90306,map__90306__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__90328,i,s,s__90316__$2,temp__4657__auto__,map__90313,map__90313__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__90311,map__90311__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__90308,map__90308__$1,state,c_search,c_input,state_atom,input_text_model,map__90306,map__90306__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__90303_SHARP_){
p1__90303_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__90328,i,s,s__90316__$2,temp__4657__auto__,map__90313,map__90313__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__90311,map__90311__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__90308,map__90308__$1,state,c_search,c_input,state_atom,input_text_model,map__90306,map__90306__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__90315.call(null,cljs.core.rest.call(null,s__90316__$2)));
}
} else {
return null;
}
break;
}
});})(map__90313,map__90313__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__90311,map__90311__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__90308,map__90308__$1,state,c_search,c_input,state_atom,input_text_model,map__90306,map__90306__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,null,null));
});})(map__90313,map__90313__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__90311,map__90311__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__90308,map__90308__$1,state,c_search,c_input,state_atom,input_text_model,map__90306,map__90306__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
;
return iter__25905__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null):null)], null)], null);
};
var G__90334 = function (var_args){
var p__90310 = null;
if (arguments.length > 0) {
var G__90336__i = 0, G__90336__a = new Array(arguments.length -  0);
while (G__90336__i < G__90336__a.length) {G__90336__a[G__90336__i] = arguments[G__90336__i + 0]; ++G__90336__i;}
  p__90310 = new cljs.core.IndexedSeq(G__90336__a,0);
} 
return G__90334__delegate.call(this,p__90310);};
G__90334.cljs$lang$maxFixedArity = 0;
G__90334.cljs$lang$applyTo = (function (arglist__90337){
var p__90310 = cljs.core.seq(arglist__90337);
return G__90334__delegate(p__90310);
});
G__90334.cljs$core$IFn$_invoke$arity$variadic = G__90334__delegate;
return G__90334;
})()
;
;})(map__90308,map__90308__$1,state,c_search,c_input,state_atom,input_text_model,map__90306,map__90306__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq90304){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq90304));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__28398__auto___90504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28398__auto___90504,out){
return (function (){
var f__28399__auto__ = (function (){var switch__28286__auto__ = ((function (c__28398__auto___90504,out){
return (function (state_90471){
var state_val_90472 = (state_90471[(1)]);
if((state_val_90472 === (7))){
var inst_90426 = (state_90471[(2)]);
var state_90471__$1 = state_90471;
var statearr_90473_90505 = state_90471__$1;
(statearr_90473_90505[(2)] = inst_90426);

(statearr_90473_90505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90472 === (1))){
var inst_90421 = null;
var state_90471__$1 = (function (){var statearr_90474 = state_90471;
(statearr_90474[(7)] = inst_90421);

return statearr_90474;
})();
var statearr_90475_90506 = state_90471__$1;
(statearr_90475_90506[(2)] = null);

(statearr_90475_90506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90472 === (4))){
var state_90471__$1 = state_90471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90471__$1,(7),in$);
} else {
if((state_val_90472 === (15))){
var inst_90456 = (state_90471[(2)]);
var state_90471__$1 = (function (){var statearr_90476 = state_90471;
(statearr_90476[(8)] = inst_90456);

return statearr_90476;
})();
var statearr_90477_90507 = state_90471__$1;
(statearr_90477_90507[(2)] = null);

(statearr_90477_90507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90472 === (13))){
var inst_90444 = (state_90471[(9)]);
var inst_90458 = cljs.core._EQ_.call(null,inst_90444,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_90471__$1 = state_90471;
if(inst_90458){
var statearr_90478_90508 = state_90471__$1;
(statearr_90478_90508[(1)] = (16));

} else {
var statearr_90479_90509 = state_90471__$1;
(statearr_90479_90509[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90472 === (6))){
var inst_90430 = (state_90471[(10)]);
var inst_90429 = (state_90471[(2)]);
var inst_90430__$1 = cljs.core.async.timeout.call(null,ms);
var inst_90438 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_90439 = [in$,inst_90430__$1];
var inst_90440 = (new cljs.core.PersistentVector(null,2,(5),inst_90438,inst_90439,null));
var state_90471__$1 = (function (){var statearr_90480 = state_90471;
(statearr_90480[(10)] = inst_90430__$1);

(statearr_90480[(11)] = inst_90429);

return statearr_90480;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_90471__$1,(8),inst_90440);
} else {
if((state_val_90472 === (17))){
var state_90471__$1 = state_90471;
var statearr_90481_90510 = state_90471__$1;
(statearr_90481_90510[(2)] = null);

(statearr_90481_90510[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90472 === (3))){
var inst_90469 = (state_90471[(2)]);
var state_90471__$1 = state_90471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90471__$1,inst_90469);
} else {
if((state_val_90472 === (12))){
var inst_90429 = (state_90471[(11)]);
var state_90471__$1 = state_90471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90471__$1,(15),out,inst_90429);
} else {
if((state_val_90472 === (2))){
var inst_90421 = (state_90471[(7)]);
var inst_90423 = (inst_90421 == null);
var state_90471__$1 = state_90471;
if(cljs.core.truth_(inst_90423)){
var statearr_90482_90511 = state_90471__$1;
(statearr_90482_90511[(1)] = (4));

} else {
var statearr_90483_90512 = state_90471__$1;
(statearr_90483_90512[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90472 === (11))){
var inst_90466 = (state_90471[(2)]);
var inst_90421 = inst_90466;
var state_90471__$1 = (function (){var statearr_90484 = state_90471;
(statearr_90484[(7)] = inst_90421);

return statearr_90484;
})();
var statearr_90485_90513 = state_90471__$1;
(statearr_90485_90513[(2)] = null);

(statearr_90485_90513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90472 === (9))){
var inst_90442 = (state_90471[(12)]);
var inst_90450 = cljs.core.nth.call(null,inst_90442,(0),null);
var inst_90451 = cljs.core.nth.call(null,inst_90442,(1),null);
var state_90471__$1 = (function (){var statearr_90486 = state_90471;
(statearr_90486[(13)] = inst_90451);

return statearr_90486;
})();
var statearr_90487_90514 = state_90471__$1;
(statearr_90487_90514[(2)] = inst_90450);

(statearr_90487_90514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90472 === (5))){
var inst_90421 = (state_90471[(7)]);
var state_90471__$1 = state_90471;
var statearr_90488_90515 = state_90471__$1;
(statearr_90488_90515[(2)] = inst_90421);

(statearr_90488_90515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90472 === (14))){
var inst_90464 = (state_90471[(2)]);
var state_90471__$1 = state_90471;
var statearr_90489_90516 = state_90471__$1;
(statearr_90489_90516[(2)] = inst_90464);

(statearr_90489_90516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90472 === (16))){
var inst_90443 = (state_90471[(14)]);
var state_90471__$1 = state_90471;
var statearr_90490_90517 = state_90471__$1;
(statearr_90490_90517[(2)] = inst_90443);

(statearr_90490_90517[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90472 === (10))){
var inst_90430 = (state_90471[(10)]);
var inst_90444 = (state_90471[(9)]);
var inst_90453 = cljs.core._EQ_.call(null,inst_90444,inst_90430);
var state_90471__$1 = state_90471;
if(inst_90453){
var statearr_90491_90518 = state_90471__$1;
(statearr_90491_90518[(1)] = (12));

} else {
var statearr_90492_90519 = state_90471__$1;
(statearr_90492_90519[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90472 === (18))){
var inst_90462 = (state_90471[(2)]);
var state_90471__$1 = state_90471;
var statearr_90493_90520 = state_90471__$1;
(statearr_90493_90520[(2)] = inst_90462);

(statearr_90493_90520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90472 === (8))){
var inst_90442 = (state_90471[(12)]);
var inst_90444 = (state_90471[(9)]);
var inst_90442__$1 = (state_90471[(2)]);
var inst_90443 = cljs.core.nth.call(null,inst_90442__$1,(0),null);
var inst_90444__$1 = cljs.core.nth.call(null,inst_90442__$1,(1),null);
var inst_90445 = cljs.core._EQ_.call(null,inst_90444__$1,in$);
var state_90471__$1 = (function (){var statearr_90494 = state_90471;
(statearr_90494[(14)] = inst_90443);

(statearr_90494[(12)] = inst_90442__$1);

(statearr_90494[(9)] = inst_90444__$1);

return statearr_90494;
})();
if(inst_90445){
var statearr_90495_90521 = state_90471__$1;
(statearr_90495_90521[(1)] = (9));

} else {
var statearr_90496_90522 = state_90471__$1;
(statearr_90496_90522[(1)] = (10));

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
});})(c__28398__auto___90504,out))
;
return ((function (switch__28286__auto__,c__28398__auto___90504,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__28287__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__28287__auto____0 = (function (){
var statearr_90500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90500[(0)] = re_com$typeahead$debounce_$_state_machine__28287__auto__);

(statearr_90500[(1)] = (1));

return statearr_90500;
});
var re_com$typeahead$debounce_$_state_machine__28287__auto____1 = (function (state_90471){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_90471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e90501){if((e90501 instanceof Object)){
var ex__28290__auto__ = e90501;
var statearr_90502_90523 = state_90471;
(statearr_90502_90523[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90524 = state_90471;
state_90471 = G__90524;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__28287__auto__ = function(state_90471){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__28287__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__28287__auto____1.call(this,state_90471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__28287__auto____0;
re_com$typeahead$debounce_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__28287__auto____1;
return re_com$typeahead$debounce_$_state_machine__28287__auto__;
})()
;})(switch__28286__auto__,c__28398__auto___90504,out))
})();
var state__28400__auto__ = (function (){var statearr_90503 = f__28399__auto__.call(null);
(statearr_90503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28398__auto___90504);

return statearr_90503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28400__auto__);
});})(c__28398__auto___90504,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1488399654596