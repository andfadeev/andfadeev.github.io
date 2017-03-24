// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.date');
goog.require('goog.date.duration');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('cljs_time.internal.core');
goog.require('goog.string.format');
goog.require('clojure.string');
cljs_time.format.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
cljs_time.format.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], null);
cljs_time.format.abbreviate = (function cljs_time$format$abbreviate(n,s){
return cljs.core.subs.call(null,s,(0),n);
});
/**
 * **Note: not all formatters have been implemented yet.**
 * 
 *   The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
 *   time zone names cannot be parsed and a few more symbols are supported. All
 *   ASCII letters are reserved as pattern letters, which are defined as follows:
 * 
 *  Symbol  Meaning                      Presentation  Examples
 *  ------  -------                      ------------  -------
 *  G       era                          text          AD
 *  C       century of era (>=0)         number        20
 *  Y       year of era (>=0)            year          1996
 * 
 *  x       weekyear                     year          1996
 *  w       week of weekyear             number        27
 *  e       day of week                  number        2
 *  E       day of week                  text          Tuesday; Tue
 * 
 *  y       year                         year          1996
 *  D       day of year                  number        189
 *  M       month of year                month         July; Jul; 07
 *  d       day of month                 number        10
 * 
 *  a       halfday of day               text          PM
 *  K       hour of halfday (0~11)       number        0
 *  h       clockhour of halfday (1~12)  number        12
 * 
 *  H       hour of day (0~23)           number        0
 *  k       clockhour of day (1~24)      number        24
 *  m       minute of hour               number        30
 *  s       second of minute             number        55
 *  S       fraction of second           number        978
 *  a       meridiem                     text          am; pm
 *  A       meridiem                     text          AM; PM
 * 
 *  z       time zone                    text          Pacific Standard Time; PST
 *  Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
 * 
 *  '       escape for text              delimiter
 *  ''      single quote                 literal       '
 * 
 *   The count of pattern letters determine the format.
 * 
 *   **Text:** If the number of pattern letters is 4 or more, the full form is used;
 *   otherwise a short or abbreviated form is used if available.
 * 
 *   **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
 *   amount.
 * 
 *   **Year:** Numeric presentation for year and weekyear fields are handled
 *   specially. For example, if the count of 'y' is 2, the year will be displayed
 *   as the zero-based year of the century, which is two digits.
 * 
 *   **Month:** 3 or over, use text, otherwise use number.
 * 
 *   **Zone:** 'Z' outputs offset without a colon, 'ZZ' outputs the offset with a
 *   colon, 'ZZZ' or more outputs the zone id.
 * 
 *   **Zone names:** Time zone names ('z') cannot be parsed.
 * 
 *   Any characters in the pattern that are not in the ranges of ['a'..'z'] and
 *   ['A'..'Z'] will be treated as quoted text. For instance, characters like ':',
 *   '.', ' ', '#' and '?' will appear in the resulting time text even they are
 *   not embraced within single quotes.
 */
cljs_time.format.date_formatters = (function (){var d = (function (p1__29197_SHARP_){
return p1__29197_SHARP_.getDate();
});
var M = ((function (d){
return (function (p1__29198_SHARP_){
return (p1__29198_SHARP_.getMonth() + (1));
});})(d))
;
var y = ((function (d,M){
return (function (p1__29199_SHARP_){
return p1__29199_SHARP_.getYear();
});})(d,M))
;
var h = ((function (d,M,y){
return (function (p1__29200_SHARP_){
var hr = cljs.core.mod.call(null,p1__29200_SHARP_.getHours(),(12));
if((hr === (0))){
return (12);
} else {
return hr;
}
});})(d,M,y))
;
var a = ((function (d,M,y,h){
return (function (p1__29201_SHARP_){
if((p1__29201_SHARP_.getHours() < (12))){
return "am";
} else {
return "pm";
}
});})(d,M,y,h))
;
var A = ((function (d,M,y,h,a){
return (function (p1__29202_SHARP_){
if((p1__29202_SHARP_.getHours() < (12))){
return "AM";
} else {
return "PM";
}
});})(d,M,y,h,a))
;
var H = ((function (d,M,y,h,a,A){
return (function (p1__29203_SHARP_){
return p1__29203_SHARP_.getHours();
});})(d,M,y,h,a,A))
;
var m = ((function (d,M,y,h,a,A,H){
return (function (p1__29204_SHARP_){
return p1__29204_SHARP_.getMinutes();
});})(d,M,y,h,a,A,H))
;
var s = ((function (d,M,y,h,a,A,H,m){
return (function (p1__29205_SHARP_){
return p1__29205_SHARP_.getSeconds();
});})(d,M,y,h,a,A,H,m))
;
var S = ((function (d,M,y,h,a,A,H,m,s){
return (function (p1__29206_SHARP_){
return p1__29206_SHARP_.getMilliseconds();
});})(d,M,y,h,a,A,H,m,s))
;
var Z = ((function (d,M,y,h,a,A,H,m,s,S){
return (function (p1__29207_SHARP_){
return p1__29207_SHARP_.getTimezoneOffsetString();
});})(d,M,y,h,a,A,H,m,s,S))
;
var doy = ((function (d,M,y,h,a,A,H,m,s,S,Z){
return (function (p1__29208_SHARP_){
return p1__29208_SHARP_.getDayOfYear();
});})(d,M,y,h,a,A,H,m,s,S,Z))
;
var dow = ((function (d,M,y,h,a,A,H,m,s,S,Z,doy){
return (function (p1__29209_SHARP_){
return p1__29209_SHARP_.getDay();
});})(d,M,y,h,a,A,H,m,s,S,Z,doy))
;
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","ww","MMM","YYYY","e","ss","DDD","SSS","dow","YY","M","mm","S","MM","EEE","Z","H","DD","dd","a","hh","dth","yyyy","A","EEEE","h","xxxx","m","yy","D","MMMM"],[d,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__29221_SHARP_){
return cljs_time.internal.core.zero_pad.call(null,H.call(null,p1__29221_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,s,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__29225_SHARP_){
return cljs_time.internal.core.zero_pad.call(null,p1__29225_SHARP_.getWeekNumber());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__29216_SHARP_){
return cljs_time.format.abbreviate.call(null,(3),cljs_time.format.months.call(null,(M.call(null,p1__29216_SHARP_) - (1))));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,dow,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__29223_SHARP_){
return cljs_time.internal.core.zero_pad.call(null,s.call(null,p1__29223_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__29224_SHARP_){
return cljs_time.internal.core.zero_pad.call(null,S.call(null,p1__29224_SHARP_),(3));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__29212_SHARP_){
return cljs_time.format.days.call(null,dow.call(null,p1__29212_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__29219_SHARP_){
return cljs.core.mod.call(null,y.call(null,p1__29219_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,M,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__29222_SHARP_){
return cljs_time.internal.core.zero_pad.call(null,m.call(null,p1__29222_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,S,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__29215_SHARP_){
return cljs_time.internal.core.zero_pad.call(null,M.call(null,p1__29215_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__29213_SHARP_){
return cljs_time.format.abbreviate.call(null,(3),cljs_time.format.days.call(null,dow.call(null,p1__29213_SHARP_)));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,H,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__29210_SHARP_){
return cljs_time.internal.core.zero_pad.call(null,d.call(null,p1__29210_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,a,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__29220_SHARP_){
return cljs_time.internal.core.zero_pad.call(null,h.call(null,p1__29220_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__29211_SHARP_){
var d__$1 = d.call(null,p1__29211_SHARP_);
return [cljs.core.str(d__$1),cljs.core.str((function (){var G__29226 = d__$1;
switch (G__29226) {
case (1):
return "st";

break;
case (2):
return "nd";

break;
case (3):
return "rd";

break;
case (21):
return "st";

break;
case (22):
return "nd";

break;
case (23):
return "rd";

break;
case (31):
return "st";

break;
default:
return "th";

}
})())].join('');
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,A,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__29214_SHARP_){
return cljs_time.format.days.call(null,dow.call(null,p1__29214_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,h,y,m,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__29218_SHARP_){
return cljs.core.mod.call(null,y.call(null,p1__29218_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__29217_SHARP_){
return cljs_time.format.months.call(null,(M.call(null,p1__29217_SHARP_) - (1)));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
]);
})();
cljs_time.format.timezone_adjustment = (function cljs_time$format$timezone_adjustment(d,timezone_string){
var vec__29235 = clojure.string.split.call(null,timezone_string,/Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/);
var _ = cljs.core.nth.call(null,vec__29235,(0),null);
var sign = cljs.core.nth.call(null,vec__29235,(1),null);
var hh = cljs.core.nth.call(null,vec__29235,(2),null);
var mm = cljs.core.nth.call(null,vec__29235,(3),null);
if(cljs.core.truth_((function (){var and__25113__auto__ = sign;
if(cljs.core.truth_(and__25113__auto__)){
var and__25113__auto____$1 = hh;
if(cljs.core.truth_(and__25113__auto____$1)){
return mm;
} else {
return and__25113__auto____$1;
}
} else {
return and__25113__auto__;
}
})())){
var sign_29241__$1 = ((cljs.core._EQ_.call(null,sign,"-"))?cljs_time.core.plus:((cljs.core._EQ_.call(null,sign,"+"))?cljs_time.core.minus:null));
var vec__29238_29242 = cljs.core.map.call(null,((function (sign_29241__$1,vec__29235,_,sign,hh,mm){
return (function (p1__29228_SHARP_){
return parseInt(p1__29228_SHARP_,(10));
});})(sign_29241__$1,vec__29235,_,sign,hh,mm))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hh,mm], null));
var hh_29243__$1 = cljs.core.nth.call(null,vec__29238_29242,(0),null);
var mm_29244__$1 = cljs.core.nth.call(null,vec__29238_29242,(1),null);
var adjusted_29245 = sign_29241__$1.call(null,sign_29241__$1.call(null,d,cljs_time.core.hours.call(null,hh_29243__$1)),cljs_time.core.minutes.call(null,mm_29244__$1));
d.setTime(adjusted_29245.getTime());
} else {
}

return d;
});
cljs_time.format.date_parsers = (function (){var parse_int = (function (p1__29246_SHARP_){
return parseInt(p1__29246_SHARP_,(10));
});
var assoc_fn = ((function (parse_int){
return (function (kw){
return ((function (parse_int){
return (function (p1__29247_SHARP_,p2__29248_SHARP_){
return cljs.core.assoc.call(null,p1__29247_SHARP_,kw,parse_int.call(null,p2__29248_SHARP_));
});
;})(parse_int))
});})(parse_int))
;
var y = assoc_fn.call(null,new cljs.core.Keyword(null,"years","years",-1298579689));
var d = assoc_fn.call(null,new cljs.core.Keyword(null,"days","days",-1394072564));
var M = ((function (parse_int,assoc_fn,y,d){
return (function (p1__29249_SHARP_,p2__29250_SHARP_){
return cljs.core.assoc.call(null,p1__29249_SHARP_,new cljs.core.Keyword(null,"months","months",-45571637),(parse_int.call(null,p2__29250_SHARP_) - (1)));
});})(parse_int,assoc_fn,y,d))
;
var h = ((function (parse_int,assoc_fn,y,d,M){
return (function (p1__29251_SHARP_,p2__29252_SHARP_){
return cljs.core.assoc.call(null,p1__29251_SHARP_,new cljs.core.Keyword(null,"hours","hours",58380855),cljs.core.mod.call(null,parse_int.call(null,p2__29252_SHARP_),(12)));
});})(parse_int,assoc_fn,y,d,M))
;
var a = ((function (parse_int,assoc_fn,y,d,M,h){
return (function (p__29259,x){
var map__29260 = p__29259;
var map__29260__$1 = ((((!((map__29260 == null)))?((((map__29260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29260):map__29260);
var date = map__29260__$1;
var hours = cljs.core.get.call(null,map__29260__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["p",null,"pm",null], null), null).call(null,clojure.string.lower_case.call(null,x)))){
return cljs.core.assoc.call(null,date,new cljs.core.Keyword(null,"hours","hours",58380855),(function (){var hours__$1 = ((12) + hours);
if(cljs.core._EQ_.call(null,hours__$1,(24))){
return (0);
} else {
return hours__$1;
}
})());
} else {
return date;
}
});})(parse_int,assoc_fn,y,d,M,h))
;
var H = assoc_fn.call(null,new cljs.core.Keyword(null,"hours","hours",58380855));
var m = assoc_fn.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var s = assoc_fn.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var S = assoc_fn.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var MMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (p1__29254_SHARP_,p2__29253_SHARP_){
var full = cljs.core.first.call(null,cljs.core.filter.call(null,((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (m__$1){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(p2__29253_SHARP_)].join('')),m__$1);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
,cljs_time.format.months));
return M.call(null,p1__29254_SHARP_,[cljs.core.str((cljs_time.internal.core.index_of.call(null,cljs_time.format.months,full) + (1)))].join(''));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
;
var MMMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM){
return (function (p1__29255_SHARP_,p2__29256_SHARP_){
return M.call(null,p1__29255_SHARP_,[cljs.core.str((cljs_time.internal.core.index_of.call(null,cljs_time.format.months,p2__29256_SHARP_) + (1)))].join(''));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM))
;
var skip = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM){
return (function() { 
var G__29262__delegate = function (x,args){
return x;
};
var G__29262 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__29263__i = 0, G__29263__a = new Array(arguments.length -  1);
while (G__29263__i < G__29263__a.length) {G__29263__a[G__29263__i] = arguments[G__29263__i + 1]; ++G__29263__i;}
  args = new cljs.core.IndexedSeq(G__29263__a,0);
} 
return G__29262__delegate.call(this,x,args);};
G__29262.cljs$lang$maxFixedArity = 1;
G__29262.cljs$lang$applyTo = (function (arglist__29264){
var x = cljs.core.first(arglist__29264);
var args = cljs.core.rest(arglist__29264);
return G__29262__delegate(x,args);
});
G__29262.cljs$core$IFn$_invoke$arity$variadic = G__29262__delegate;
return G__29262;
})()
;})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM))
;
var tz = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip){
return (function (p1__29257_SHARP_,p2__29258_SHARP_){
return cljs.core.assoc.call(null,p1__29257_SHARP_,new cljs.core.Keyword(null,"time-zone","time-zone",-1838760002),p2__29258_SHARP_);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip))
;
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","MMM","YYYY","ss","DDD","SSS","dow","YY","M","mm","S","MM","Y","EEE","Z","H","E","DD","dd","a","hh","dth","y","yyyy","A","EEEE","h","m","yy","D","MMMM"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,cljs.core.partial.call(null,cljs_time.format.abbreviate,(3)),cljs_time.format.months))),cljs.core.str(")")].join(''),MMM], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",cljs_time.format.days)),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:\\d{2})|(?:\\b\\d{1,2}\\b))",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,cljs.core.partial.call(null,cljs_time.format.abbreviate,(3)),cljs_time.format.days))),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:?\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,cljs.core.partial.call(null,cljs_time.format.abbreviate,(3)),cljs_time.format.days))),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})(?:st|nd|rd|th)",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",cljs_time.format.days)),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",cljs_time.format.months)),cljs.core.str(")")].join(''),MMMM], null)]);
})();
cljs_time.format.date_setters = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"years","years",-1298579689),(function (p1__29265_SHARP_,p2__29266_SHARP_){
return p1__29265_SHARP_.setYear(p2__29266_SHARP_);
}),new cljs.core.Keyword(null,"months","months",-45571637),(function (p1__29267_SHARP_,p2__29268_SHARP_){
return p1__29267_SHARP_.setMonth(p2__29268_SHARP_);
}),new cljs.core.Keyword(null,"days","days",-1394072564),(function (p1__29269_SHARP_,p2__29270_SHARP_){
return p1__29269_SHARP_.setDate(p2__29270_SHARP_);
}),new cljs.core.Keyword(null,"hours","hours",58380855),(function (p1__29271_SHARP_,p2__29272_SHARP_){
return p1__29271_SHARP_.setHours(p2__29272_SHARP_);
}),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(function (p1__29273_SHARP_,p2__29274_SHARP_){
return p1__29273_SHARP_.setMinutes(p2__29274_SHARP_);
}),new cljs.core.Keyword(null,"seconds","seconds",-445266194),(function (p1__29275_SHARP_,p2__29276_SHARP_){
return p1__29275_SHARP_.setSeconds(p2__29276_SHARP_);
}),new cljs.core.Keyword(null,"millis","millis",-1338288387),(function (p1__29277_SHARP_,p2__29278_SHARP_){
return p1__29277_SHARP_.setMilliseconds(p2__29278_SHARP_);
}),new cljs.core.Keyword(null,"time-zone","time-zone",-1838760002),cljs_time.format.timezone_adjustment], null);
cljs_time.format.parser_sort_order_pred = (function cljs_time$format$parser_sort_order_pred(parser){
return cljs_time.internal.core.index_of.call(null,new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, ["YYYY","YY","Y","yyyy","yy","y","d","dd","D","DD","DDD","dth","M","MM","MMM","MMMM","dow","h","H","m","s","S","hh","HH","mm","ss","a","A","SSS","Z","ZZ"], null),parser);
});
cljs_time.format.date_format_pattern = cljs.core.re_pattern.call(null,[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,")|(",cljs.core.reverse.call(null,cljs.core.sort_by.call(null,cljs.core.count,cljs.core.keys.call(null,cljs_time.format.date_formatters))))),cljs.core.str(")")].join(''));
cljs_time.format.old_string_replace = (function cljs_time$format$old_string_replace(s,match,replacement){
return s.replace((new RegExp(match.source,"g")),replacement);
});
cljs_time.format.date_parse_pattern = (function cljs_time$format$date_parse_pattern(formatter){
return cljs.core.re_pattern.call(null,cljs_time.format.old_string_replace.call(null,cljs_time.format.old_string_replace.call(null,formatter,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,(function (p1__29279_SHARP_){
return cljs.core.first.call(null,cljs_time.format.date_parsers.call(null,p1__29279_SHARP_));
})));
});
cljs_time.format.parser_fn = (function cljs_time$format$parser_fn(fmts){
return (function (s){
return cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs_time.format.parser_sort_order_pred,cljs.core.second),cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.nfirst.call(null,cljs.core.re_seq.call(null,cljs_time.format.date_parse_pattern.call(null,fmts),s)),cljs.core.map.call(null,cljs.core.first,cljs.core.re_seq.call(null,cljs_time.format.date_format_pattern,fmts)))));
});
});
cljs_time.format.formatter_fn = (function cljs_time$format$formatter_fn(fmts,formatters){
return (function() { 
var G__29295__delegate = function (date,p__29288){
var vec__29289 = p__29288;
var formatter_overrides = cljs.core.nth.call(null,vec__29289,(0),null);
var a = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),(0)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.format.old_string_replace.call(null,fmts,/'([^']+)'/,((function (a,vec__29289,formatter_overrides){
return (function (x,s){
if((cljs.core.seq.call(null,s)) && (cljs.core._EQ_.call(null,"'",cljs.core.first.call(null,x))) && (cljs.core._EQ_.call(null,"'",cljs.core.last.call(null,x)))){
var map__29292 = cljs.core.deref.call(null,a);
var map__29292__$1 = ((((!((map__29292 == null)))?((((map__29292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29292):map__29292);
var c = cljs.core.get.call(null,map__29292__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var k = [cljs.core.str("&&&&"),cljs.core.str(c)].join('');
cljs.core.swap_BANG_.call(null,a,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace","replace",-786587770),k], null),cljs.core.constantly.call(null,s));

cljs.core.swap_BANG_.call(null,a,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079)], null),cljs.core.inc);

return k;
} else {
return x;
}
});})(a,vec__29289,formatter_overrides))
),cljs.core.re_pattern.call(null,(function (){var G__29294 = cljs_time.format.date_format_pattern.source;
if(cljs.core.truth_(new cljs.core.Keyword(null,"replace","replace",-786587770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,a)))){
return [cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,")|(",cljs.core.keys.call(null,new cljs.core.Keyword(null,"replace","replace",-786587770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,a))))),cljs.core.str(")|"),cljs.core.str(G__29294)].join('');
} else {
return G__29294;
}
})()),((function (a,vec__29289,formatter_overrides){
return (function (p1__29280_SHARP_){
return cljs.core.merge.call(null,formatters,formatter_overrides,new cljs.core.Keyword(null,"replace","replace",-786587770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,a))).call(null,p1__29280_SHARP_).call(null,date);
});})(a,vec__29289,formatter_overrides))
], null);
};
var G__29295 = function (date,var_args){
var p__29288 = null;
if (arguments.length > 1) {
var G__29296__i = 0, G__29296__a = new Array(arguments.length -  1);
while (G__29296__i < G__29296__a.length) {G__29296__a[G__29296__i] = arguments[G__29296__i + 1]; ++G__29296__i;}
  p__29288 = new cljs.core.IndexedSeq(G__29296__a,0);
} 
return G__29295__delegate.call(this,date,p__29288);};
G__29295.cljs$lang$maxFixedArity = 1;
G__29295.cljs$lang$applyTo = (function (arglist__29297){
var date = cljs.core.first(arglist__29297);
var p__29288 = cljs.core.rest(arglist__29297);
return G__29295__delegate(date,p__29288);
});
G__29295.cljs$core$IFn$_invoke$arity$variadic = G__29295__delegate;
return G__29295;
})()
;
});
cljs_time.format.formatter = (function cljs_time$format$formatter(var_args){
var args29298 = [];
var len__26200__auto___29301 = arguments.length;
var i__26201__auto___29302 = (0);
while(true){
if((i__26201__auto___29302 < len__26200__auto___29301)){
args29298.push((arguments[i__26201__auto___29302]));

var G__29303 = (i__26201__auto___29302 + (1));
i__26201__auto___29302 = G__29303;
continue;
} else {
}
break;
}

var G__29300 = args29298.length;
switch (G__29300) {
case 1:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29298.length)].join('')));

}
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmts){
return cljs_time.format.formatter.call(null,fmts,cljs_time.core.utc);
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmts,dtz){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format-str","format-str",695206156),fmts,new cljs.core.Keyword(null,"formatters","formatters",-1875637118),cljs_time.format.date_formatters], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.format","formatter","cljs-time.format/formatter",1104417384)], null));
});

cljs_time.format.formatter.cljs$lang$maxFixedArity = 2;

cljs_time.format.formatter_local = (function cljs_time$format$formatter_local(fmts){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format-str","format-str",695206156),fmts,new cljs.core.Keyword(null,"formatters","formatters",-1875637118),cljs.core.assoc.call(null,cljs_time.format.date_formatters,"Z",cljs.core.constantly.call(null,""),"ZZ",cljs.core.constantly.call(null,""))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.format","formatter","cljs-time.format/formatter",1104417384)], null));
});
cljs_time.format.not_implemented = (function cljs_time$format$not_implemented(sym){
return (function (){
throw cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"not-implemented","not-implemented",1918806714),new cljs.core.Keyword(null,"message","message",-406056002),cljs_time.internal.core.format.call(null,"%s not implemented yet",cljs.core.name.call(null,sym))], null));
});
});
/**
 * Return a copy of a formatter that uses the given default year.
 */
cljs_time.format.with_default_year = (function cljs_time$format$with_default_year(f,default_year){
return cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"default-year","default-year",1658037695),default_year);
});
/**
 * Map of ISO 8601 and a single RFC 822 formatters that can be used
 * for parsing and, in most cases, printing.
 * 
 * Note: due to current implementation limitations, timezone information
 * cannot be kept. Although the correct offset will be applied to UTC
 * time if supplied.
 */
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"date-element-parser","date-element-parser",2072167040),new cljs.core.Keyword(null,"hour-minute","hour-minute",-1164421312),new cljs.core.Keyword(null,"t-time","t-time",-42016318),new cljs.core.Keyword(null,"basic-ordinal-date","basic-ordinal-date",243220162),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"time-no-ms","time-no-ms",870271683),new cljs.core.Keyword(null,"weekyear-week-day","weekyear-week-day",-740233533),new cljs.core.Keyword(null,"week-date-time","week-date-time",540228836),new cljs.core.Keyword(null,"date-hour-minute-second-fraction","date-hour-minute-second-fraction",1937143076),new cljs.core.Keyword(null,"basic-date-time","basic-date-time",1525413604),new cljs.core.Keyword(null,"date-time","date-time",177938180),new cljs.core.Keyword(null,"basic-time-no-ms","basic-time-no-ms",-1720654076),new cljs.core.Keyword(null,"date-parser","date-parser",-981534587),new cljs.core.Keyword(null,"basic-week-date","basic-week-date",1775847845),new cljs.core.Keyword(null,"basic-t-time-no-ms","basic-t-time-no-ms",-424650106),new cljs.core.Keyword(null,"local-time","local-time",-1873195290),new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",1655953671),new cljs.core.Keyword(null,"year-month-day","year-month-day",-415594169),new cljs.core.Keyword(null,"date-opt-time","date-opt-time",-1507102105),new cljs.core.Keyword(null,"rfc822","rfc822",-404628697),new cljs.core.Keyword(null,"date-hour-minute-second-ms","date-hour-minute-second-ms",-425334775),new cljs.core.Keyword(null,"basic-ordinal-date-time","basic-ordinal-date-time",1054564521),new cljs.core.Keyword(null,"ordinal-date","ordinal-date",-77899447),new cljs.core.Keyword(null,"hour-minute-second-fraction","hour-minute-second-fraction",-1253038551),new cljs.core.Keyword(null,"date-hour-minute","date-hour-minute",1629918346),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"basic-week-date-time","basic-week-date-time",-502077622),new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),new cljs.core.Keyword(null,"basic-time","basic-time",-923134899),new cljs.core.Keyword(null,"hour-minute-second","hour-minute-second",-1906654770),new cljs.core.Keyword(null,"ordinal-date-time","ordinal-date-time",-1386753458),new cljs.core.Keyword(null,"ordinal-date-time-no-ms","ordinal-date-time-no-ms",-1539005490),new cljs.core.Keyword(null,"hour-minute-second-ms","hour-minute-second-ms",1209749775),new cljs.core.Keyword(null,"time-parser","time-parser",-1636511536),new cljs.core.Keyword(null,"date-time-parser","date-time-parser",-656147568),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"t-time-no-ms","t-time-no-ms",990689905),new cljs.core.Keyword(null,"basic-week-date-time-no-ms","basic-week-date-time-no-ms",-2043113679),new cljs.core.Keyword(null,"basic-date","basic-date",1566551506),new cljs.core.Keyword(null,"weekyear-week","weekyear-week",795291571),new cljs.core.Keyword(null,"local-date","local-date",1829761428),new cljs.core.Keyword(null,"basic-ordinal-date-time-no-ms","basic-ordinal-date-time-no-ms",-395135436),new cljs.core.Keyword(null,"year-month","year-month",735283381),new cljs.core.Keyword(null,"local-date-opt-time","local-date-opt-time",1178432599),new cljs.core.Keyword(null,"week-date","week-date",-1176745129),new cljs.core.Keyword(null,"date-hour","date-hour",-344234471),new cljs.core.Keyword(null,"time-element-parser","time-element-parser",-2042883205),new cljs.core.Keyword(null,"date-hour-minute-second","date-hour-minute-second",-1565419364),new cljs.core.Keyword(null,"week-date-time-no-ms","week-date-time-no-ms",-1226853060),new cljs.core.Keyword(null,"basic-date-time-no-ms","basic-date-time-no-ms",-899402179),new cljs.core.Keyword(null,"mysql","mysql",-1431590210),new cljs.core.Keyword(null,"basic-t-time","basic-t-time",191791391)],[cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"dateElementParser","dateElementParser",984800945,null)),cljs_time.format.formatter.call(null,"HH:mm"),cljs_time.format.formatter.call(null,"'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"yyyyDDD"),cljs_time.format.formatter.call(null,"yyyy-MM-dd"),cljs_time.format.formatter.call(null,"HH"),cljs_time.format.formatter.call(null,"HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"xxxx-'W'ww-e"),cljs_time.format.formatter.call(null,"xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.call(null,"yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"HHmmssZ"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"dateParser","dateParser",-1248418930,null)),cljs_time.format.formatter.call(null,"xxxx'W'wwe"),cljs_time.format.formatter.call(null,"'T'HHmmssZ"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"localTimeParser","localTimeParser",-1738135328,null)),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"yyyy-MM-dd"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"dateOptionalTimeParser","dateOptionalTimeParser",1783230854,null)),cljs_time.format.formatter.call(null,"EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.call(null,"yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.call(null,"yyyy-DDD"),cljs_time.format.formatter.call(null,"HH:mm:ss.SSS"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.call(null,"HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.call(null,"xxxx"),cljs_time.format.formatter.call(null,"HHmmss.SSSZ"),cljs_time.format.formatter.call(null,"HH:mm:ss"),cljs_time.format.formatter.call(null,"yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.call(null,"yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"HH:mm:ss.SSS"),cljs_time.format.formatter.call(null,new cljs.core.Symbol(null,"timeParser","timeParser",1585048034,null)),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"dateTimeParser","dateTimeParser",-1493718282,null)),cljs_time.format.formatter.call(null,"yyyy"),cljs_time.format.formatter.call(null,"'T'HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.call(null,"yyyyMMdd"),cljs_time.format.formatter.call(null,"xxxx-'W'ww"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"localDateParser","localDateParser",477820077,null)),cljs_time.format.formatter.call(null,"yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.call(null,"yyyy-MM"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"localDateOptionalTimeParser","localDateOptionalTimeParser",435955537,null)),cljs_time.format.formatter.call(null,"xxxx-'W'ww-e"),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented.call(null,new cljs.core.Symbol(null,"timeElementParser","timeElementParser",302132553,null)),cljs_time.format.formatter.call(null,"yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.call(null,"xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.call(null,"yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.call(null,"yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.call(null,"'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"date-element-parser","date-element-parser",2072167040),null,new cljs.core.Keyword(null,"date-parser","date-parser",-981534587),null,new cljs.core.Keyword(null,"local-time","local-time",-1873195290),null,new cljs.core.Keyword(null,"date-opt-time","date-opt-time",-1507102105),null,new cljs.core.Keyword(null,"time-parser","time-parser",-1636511536),null,new cljs.core.Keyword(null,"date-time-parser","date-time-parser",-656147568),null,new cljs.core.Keyword(null,"local-date","local-date",1829761428),null,new cljs.core.Keyword(null,"local-date-opt-time","local-date-opt-time",1178432599),null,new cljs.core.Keyword(null,"time-element-parser","time-element-parser",-2042883205),null], null), null);
cljs_time.format.printers = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs_time.format.formatters)),cljs_time.format.parsers);
cljs_time.format.part_splitter_regex = /(?:(?!(?:\+|-)\d{2}):(?!\d{2}$))|[^\w:]+|.[TW]|'[^']+'/;

/**
 * @interface
 */
cljs_time.format.IDateMap = function(){};

cljs_time.format.date_map = (function cljs_time$format$date_map(date){
if((!((date == null))) && (!((date.cljs_time$format$IDateMap$date_map$arity$1 == null)))){
return date.cljs_time$format$IDateMap$date_map$arity$1(date);
} else {
var x__25788__auto__ = (((date == null))?null:date);
var m__25789__auto__ = (cljs_time.format.date_map[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,date);
} else {
var m__25789__auto____$1 = (cljs_time.format.date_map["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,date);
} else {
throw cljs.core.missing_protocol.call(null,"IDateMap.date-map",date);
}
}
}
});

goog.date.Date.prototype.cljs_time$format$IDateMap$ = true;

goog.date.Date.prototype.cljs_time$format$IDateMap$date_map$arity$1 = (function (date){
var date__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"years","years",-1298579689),(0),new cljs.core.Keyword(null,"months","months",-45571637),(0),new cljs.core.Keyword(null,"days","days",-1394072564),(1)], null);
});

goog.date.DateTime.prototype.cljs_time$format$IDateMap$ = true;

goog.date.DateTime.prototype.cljs_time$format$IDateMap$date_map$arity$1 = (function (date){
var date__$1 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"years","years",-1298579689),(0),new cljs.core.Keyword(null,"months","months",-45571637),(0),new cljs.core.Keyword(null,"days","days",-1394072564),(1),new cljs.core.Keyword(null,"hours","hours",58380855),(0),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0),new cljs.core.Keyword(null,"seconds","seconds",-445266194),(0),new cljs.core.Keyword(null,"millis","millis",-1338288387),(0)], null);
});

goog.date.UtcDateTime.prototype.cljs_time$format$IDateMap$ = true;

goog.date.UtcDateTime.prototype.cljs_time$format$IDateMap$date_map$arity$1 = (function (date){
var date__$1 = this;
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"years","years",-1298579689),(0),new cljs.core.Keyword(null,"months","months",-45571637),(0),new cljs.core.Keyword(null,"days","days",-1394072564),(1),new cljs.core.Keyword(null,"hours","hours",58380855),(0),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0),new cljs.core.Keyword(null,"seconds","seconds",-445266194),(0),new cljs.core.Keyword(null,"millis","millis",-1338288387),(0),new cljs.core.Keyword(null,"time-zone","time-zone",-1838760002),null], null);
});
cljs_time.format.parse_STAR_ = (function cljs_time$format$parse_STAR_(constructor$,p__29307,s){
var map__29318 = p__29307;
var map__29318__$1 = ((((!((map__29318 == null)))?((((map__29318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29318):map__29318);
var fmt = map__29318__$1;
var format_str = cljs.core.get.call(null,map__29318__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
var default_year = cljs.core.get.call(null,map__29318__$1,new cljs.core.Keyword(null,"default-year","default-year",1658037695));
if(cljs.core.seq.call(null,s)){
} else {
throw (new Error("Assert failed: (seq s)"));
}

var min_parts = cljs.core.count.call(null,clojure.string.split.call(null,s,cljs_time.format.part_splitter_regex));
var parse_fn = cljs_time.format.parser_fn.call(null,format_str);
var parse_seq = cljs.core.seq.call(null,cljs.core.map.call(null,((function (parse_fn,min_parts,map__29318,map__29318__$1,fmt,format_str,default_year){
return (function (p__29320){
var vec__29321 = p__29320;
var a = cljs.core.nth.call(null,vec__29321,(0),null);
var b = cljs.core.nth.call(null,vec__29321,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.second.call(null,cljs_time.format.date_parsers.call(null,b))], null);
});})(parse_fn,min_parts,map__29318,map__29318__$1,fmt,format_str,default_year))
,parse_fn.call(null,s)));
if((cljs.core.count.call(null,parse_seq) >= min_parts)){
var d = (new constructor$((0),(0),(0),(0),(0),(0),(0)));
var empty = cljs.core.assoc.call(null,cljs_time.format.date_map.call(null,d),new cljs.core.Keyword(null,"years","years",-1298579689),(function (){var or__25125__auto__ = default_year;
if(cljs.core.truth_(or__25125__auto__)){
return or__25125__auto__;
} else {
return (0);
}
})());
var setters = cljs.core.select_keys.call(null,cljs_time.format.date_setters,cljs.core.keys.call(null,empty));
cljs.core.merge_with.call(null,((function (d,empty,setters,parse_fn,parse_seq,min_parts,map__29318,map__29318__$1,fmt,format_str,default_year){
return (function (p1__29305_SHARP_,p2__29306_SHARP_){
return p1__29305_SHARP_.call(null,d,p2__29306_SHARP_);
});})(d,empty,setters,parse_fn,parse_seq,min_parts,map__29318,map__29318__$1,fmt,format_str,default_year))
,setters,cljs_time.internal.core.valid_date_QMARK_.call(null,cljs.core.reduce.call(null,((function (d,empty,setters,parse_fn,parse_seq,min_parts,map__29318,map__29318__$1,fmt,format_str,default_year){
return (function (date,p__29324){
var vec__29325 = p__29324;
var part = cljs.core.nth.call(null,vec__29325,(0),null);
var do_parse = cljs.core.nth.call(null,vec__29325,(1),null);
return do_parse.call(null,date,part);
});})(d,empty,setters,parse_fn,parse_seq,min_parts,map__29318,map__29318__$1,fmt,format_str,default_year))
,empty,parse_seq)));

return d;
} else {
throw cljs.core.ex_info.call(null,"The parser could not match the input string.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parser-no-match","parser-no-match",1748518307)], null));
}
});
/**
 * Returns a DateTime instance in the UTC time zone obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse = (function cljs_time$format$parse(var_args){
var args29328 = [];
var len__26200__auto___29339 = arguments.length;
var i__26201__auto___29340 = (0);
while(true){
if((i__26201__auto___29340 < len__26200__auto___29339)){
args29328.push((arguments[i__26201__auto___29340]));

var G__29341 = (i__26201__auto___29340 + (1));
i__26201__auto___29340 = G__29341;
continue;
} else {
}
break;
}

var G__29330 = args29328.length;
switch (G__29330) {
case 2:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29328.length)].join('')));

}
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_.call(null,goog.date.UtcDateTime,fmt,s);
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first.call(null,(function (){var iter__25905__auto__ = (function cljs_time$format$iter__29331(s__29332){
return (new cljs.core.LazySeq(null,(function (){
var s__29332__$1 = s__29332;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29332__$1);
if(temp__4657__auto__){
var s__29332__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29332__$2)){
var c__25903__auto__ = cljs.core.chunk_first.call(null,s__29332__$2);
var size__25904__auto__ = cljs.core.count.call(null,c__25903__auto__);
var b__29334 = cljs.core.chunk_buffer.call(null,size__25904__auto__);
if((function (){var i__29333 = (0);
while(true){
if((i__29333 < size__25904__auto__)){
var f = cljs.core._nth.call(null,c__25903__auto__,i__29333);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e29337){var _ = e29337;
return null;
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__29334,d);

var G__29343 = (i__29333 + (1));
i__29333 = G__29343;
continue;
} else {
var G__29344 = (i__29333 + (1));
i__29333 = G__29344;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29334),cljs_time$format$iter__29331.call(null,cljs.core.chunk_rest.call(null,s__29332__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29334),null);
}
} else {
var f = cljs.core.first.call(null,s__29332__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e29338){var _ = e29338;
return null;
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$format$iter__29331.call(null,cljs.core.rest.call(null,s__29332__$2)));
} else {
var G__29345 = cljs.core.rest.call(null,s__29332__$2);
s__29332__$1 = G__29345;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25905__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
});

cljs_time.format.parse.cljs$lang$maxFixedArity = 2;

/**
 * Returns a local DateTime instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local = (function cljs_time$format$parse_local(var_args){
var args29346 = [];
var len__26200__auto___29357 = arguments.length;
var i__26201__auto___29358 = (0);
while(true){
if((i__26201__auto___29358 < len__26200__auto___29357)){
args29346.push((arguments[i__26201__auto___29358]));

var G__29359 = (i__26201__auto___29358 + (1));
i__26201__auto___29358 = G__29359;
continue;
} else {
}
break;
}

var G__29348 = args29346.length;
switch (G__29348) {
case 2:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29346.length)].join('')));

}
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_.call(null,goog.date.DateTime,fmt,s);
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first.call(null,(function (){var iter__25905__auto__ = (function cljs_time$format$iter__29349(s__29350){
return (new cljs.core.LazySeq(null,(function (){
var s__29350__$1 = s__29350;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29350__$1);
if(temp__4657__auto__){
var s__29350__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29350__$2)){
var c__25903__auto__ = cljs.core.chunk_first.call(null,s__29350__$2);
var size__25904__auto__ = cljs.core.count.call(null,c__25903__auto__);
var b__29352 = cljs.core.chunk_buffer.call(null,size__25904__auto__);
if((function (){var i__29351 = (0);
while(true){
if((i__29351 < size__25904__auto__)){
var f = cljs.core._nth.call(null,c__25903__auto__,i__29351);
var d = (function (){try{return cljs_time.format.parse_local.call(null,f,s);
}catch (e29355){if((e29355 instanceof Error)){
var _ = e29355;
return null;
} else {
throw e29355;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__29352,d);

var G__29361 = (i__29351 + (1));
i__29351 = G__29361;
continue;
} else {
var G__29362 = (i__29351 + (1));
i__29351 = G__29362;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29352),cljs_time$format$iter__29349.call(null,cljs.core.chunk_rest.call(null,s__29350__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29352),null);
}
} else {
var f = cljs.core.first.call(null,s__29350__$2);
var d = (function (){try{return cljs_time.format.parse_local.call(null,f,s);
}catch (e29356){if((e29356 instanceof Error)){
var _ = e29356;
return null;
} else {
throw e29356;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$format$iter__29349.call(null,cljs.core.rest.call(null,s__29350__$2)));
} else {
var G__29363 = cljs.core.rest.call(null,s__29350__$2);
s__29350__$1 = G__29363;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25905__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
});

cljs_time.format.parse_local.cljs$lang$maxFixedArity = 2;

/**
 * Returns a local Date instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local_date = (function cljs_time$format$parse_local_date(var_args){
var args29364 = [];
var len__26200__auto___29375 = arguments.length;
var i__26201__auto___29376 = (0);
while(true){
if((i__26201__auto___29376 < len__26200__auto___29375)){
args29364.push((arguments[i__26201__auto___29376]));

var G__29377 = (i__26201__auto___29376 + (1));
i__26201__auto___29376 = G__29377;
continue;
} else {
}
break;
}

var G__29366 = args29364.length;
switch (G__29366) {
case 2:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29364.length)].join('')));

}
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_.call(null,goog.date.Date,fmt,s);
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first.call(null,(function (){var iter__25905__auto__ = (function cljs_time$format$iter__29367(s__29368){
return (new cljs.core.LazySeq(null,(function (){
var s__29368__$1 = s__29368;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29368__$1);
if(temp__4657__auto__){
var s__29368__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29368__$2)){
var c__25903__auto__ = cljs.core.chunk_first.call(null,s__29368__$2);
var size__25904__auto__ = cljs.core.count.call(null,c__25903__auto__);
var b__29370 = cljs.core.chunk_buffer.call(null,size__25904__auto__);
if((function (){var i__29369 = (0);
while(true){
if((i__29369 < size__25904__auto__)){
var f = cljs.core._nth.call(null,c__25903__auto__,i__29369);
var d = (function (){try{return cljs_time.format.parse_local_date.call(null,f,s);
}catch (e29373){if((e29373 instanceof Error)){
var _ = e29373;
return null;
} else {
throw e29373;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__29370,d);

var G__29379 = (i__29369 + (1));
i__29369 = G__29379;
continue;
} else {
var G__29380 = (i__29369 + (1));
i__29369 = G__29380;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29370),cljs_time$format$iter__29367.call(null,cljs.core.chunk_rest.call(null,s__29368__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29370),null);
}
} else {
var f = cljs.core.first.call(null,s__29368__$2);
var d = (function (){try{return cljs_time.format.parse_local_date.call(null,f,s);
}catch (e29374){if((e29374 instanceof Error)){
var _ = e29374;
return null;
} else {
throw e29374;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$format$iter__29367.call(null,cljs.core.rest.call(null,s__29368__$2)));
} else {
var G__29381 = cljs.core.rest.call(null,s__29368__$2);
s__29368__$1 = G__29381;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25905__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
});

cljs_time.format.parse_local_date.cljs$lang$maxFixedArity = 2;

/**
 * Returns a string representing the given DateTime instance in UTC and in the
 * form determined by the given formatter.
 */
cljs_time.format.unparse = (function cljs_time$format$unparse(p__29382,dt){
var map__29385 = p__29382;
var map__29385__$1 = ((((!((map__29385 == null)))?((((map__29385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29385):map__29385);
var format_str = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
var formatters = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"formatters","formatters",-1875637118));
if(!((dt == null))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error("Assert failed: (instance? goog.date.DateTime dt)"));
}

return cljs.core.apply.call(null,cljs_time.format.old_string_replace,cljs_time.format.formatter_fn.call(null,format_str,formatters).call(null,dt));
});
/**
 * Returns a string representing the given local DateTime instance in the
 *   form determined by the given formatter.
 */
cljs_time.format.unparse_local = (function cljs_time$format$unparse_local(p__29387,dt){
var map__29390 = p__29387;
var map__29390__$1 = ((((!((map__29390 == null)))?((((map__29390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29390):map__29390);
var fmt = map__29390__$1;
var format_str = cljs.core.get.call(null,map__29390__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
var formatters = cljs.core.get.call(null,map__29390__$1,new cljs.core.Keyword(null,"formatters","formatters",-1875637118));
if(!((dt == null))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error("Assert failed: (instance? goog.date.DateTime dt)"));
}

return cljs.core.apply.call(null,cljs_time.format.old_string_replace,cljs_time.format.formatter_fn.call(null,format_str,formatters).call(null,dt,cljs.core.assoc.call(null,cljs_time.format.date_formatters,"Z",cljs.core.constantly.call(null,""),"ZZ",cljs.core.constantly.call(null,""))));
});
/**
 * Returns a string representing the given local Date instance in the form
 *   determined by the given formatter.
 */
cljs_time.format.unparse_local_date = (function cljs_time$format$unparse_local_date(p__29392,dt){
var map__29395 = p__29392;
var map__29395__$1 = ((((!((map__29395 == null)))?((((map__29395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29395):map__29395);
var fmt = map__29395__$1;
var format_str = cljs.core.get.call(null,map__29395__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
var formatters = cljs.core.get.call(null,map__29395__$1,new cljs.core.Keyword(null,"formatters","formatters",-1875637118));
if(!((dt == null))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.Date)){
} else {
throw (new Error("Assert failed: (instance? goog.date.Date dt)"));
}

return cljs.core.apply.call(null,cljs_time.format.old_string_replace,cljs_time.format.formatter_fn.call(null,format_str,formatters).call(null,dt,cljs.core.assoc.call(null,cljs_time.format.date_formatters,"Z",cljs.core.constantly.call(null,""),"ZZ",cljs.core.constantly.call(null,""))));
});
/**
 * Shows how a given DateTime, or by default the current time, would be
 * formatted with each of the available printing formatters.
 */
cljs_time.format.show_formatters = (function cljs_time$format$show_formatters(var_args){
var args29397 = [];
var len__26200__auto___29404 = arguments.length;
var i__26201__auto___29405 = (0);
while(true){
if((i__26201__auto___29405 < len__26200__auto___29404)){
args29397.push((arguments[i__26201__auto___29405]));

var G__29406 = (i__26201__auto___29405 + (1));
i__26201__auto___29405 = G__29406;
continue;
} else {
}
break;
}

var G__29399 = args29397.length;
switch (G__29399) {
case 0:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29397.length)].join('')));

}
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.format.show_formatters.call(null,cljs_time.core.now.call(null));
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1 = (function (dt){
var seq__29400 = cljs.core.seq.call(null,cljs.core.sort.call(null,cljs_time.format.printers));
var chunk__29401 = null;
var count__29402 = (0);
var i__29403 = (0);
while(true){
if((i__29403 < count__29402)){
var p = cljs.core._nth.call(null,chunk__29401,i__29403);
var fmt_29408 = cljs_time.format.formatters.call(null,p);
cljs.core.print.call(null,cljs_time.internal.core.format.call(null,"%-40s%s\n",p,cljs_time.format.unparse.call(null,fmt_29408,dt)));

var G__29409 = seq__29400;
var G__29410 = chunk__29401;
var G__29411 = count__29402;
var G__29412 = (i__29403 + (1));
seq__29400 = G__29409;
chunk__29401 = G__29410;
count__29402 = G__29411;
i__29403 = G__29412;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29400);
if(temp__4657__auto__){
var seq__29400__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29400__$1)){
var c__25936__auto__ = cljs.core.chunk_first.call(null,seq__29400__$1);
var G__29413 = cljs.core.chunk_rest.call(null,seq__29400__$1);
var G__29414 = c__25936__auto__;
var G__29415 = cljs.core.count.call(null,c__25936__auto__);
var G__29416 = (0);
seq__29400 = G__29413;
chunk__29401 = G__29414;
count__29402 = G__29415;
i__29403 = G__29416;
continue;
} else {
var p = cljs.core.first.call(null,seq__29400__$1);
var fmt_29417 = cljs_time.format.formatters.call(null,p);
cljs.core.print.call(null,cljs_time.internal.core.format.call(null,"%-40s%s\n",p,cljs_time.format.unparse.call(null,fmt_29417,dt)));

var G__29418 = cljs.core.next.call(null,seq__29400__$1);
var G__29419 = null;
var G__29420 = (0);
var G__29421 = (0);
seq__29400 = G__29418;
chunk__29401 = G__29419;
count__29402 = G__29420;
i__29403 = G__29421;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs_time.format.show_formatters.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
cljs_time.format.Mappable = function(){};

/**
 * Returns a map representation of the given instant.
 *                        It will contain the following keys: :years, :months,
 *                        :days, :hours, :minutes and :seconds.
 */
cljs_time.format.instant__GT_map = (function cljs_time$format$instant__GT_map(instant){
if((!((instant == null))) && (!((instant.cljs_time$format$Mappable$instant__GT_map$arity$1 == null)))){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else {
var x__25788__auto__ = (((instant == null))?null:instant);
var m__25789__auto__ = (cljs_time.format.instant__GT_map[goog.typeOf(x__25788__auto__)]);
if(!((m__25789__auto__ == null))){
return m__25789__auto__.call(null,instant);
} else {
var m__25789__auto____$1 = (cljs_time.format.instant__GT_map["_"]);
if(!((m__25789__auto____$1 == null))){
return m__25789__auto____$1.call(null,instant);
} else {
throw cljs.core.missing_protocol.call(null,"Mappable.instant->map",instant);
}
}
}
});

/**
 * Accepts a Period or Interval and outputs an absolute duration time
 *   in form of "1 day", "2 hours", "20 minutes", "2 days 1 hour
 *   15 minutes" etc.
 */
cljs_time.format.unparse_duration = (function cljs_time$format$unparse_duration(duration){
return goog.date.duration.format(cljs_time.core.in_millis.call(null,duration));
});
cljs_time.format.to_map = (function cljs_time$format$to_map(years,months,days,hours,minutes,seconds,millis){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"years","years",-1298579689),years,new cljs.core.Keyword(null,"months","months",-45571637),months,new cljs.core.Keyword(null,"days","days",-1394072564),days,new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds,new cljs.core.Keyword(null,"millis","millis",-1338288387),millis], null);
});
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = true;

goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){
var dt__$1 = this;
return cljs_time.format.to_map.call(null,dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
});

cljs_time.core.Period.prototype.cljs_time$format$Mappable$ = true;

cljs_time.core.Period.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period.call(null,m__$1);
});

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$ = true;

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period.call(null,m__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = true;

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__29422 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,m__$1)) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,m__$1)).fqn:null);
switch (G__29422) {
case "cljs-time.core/period":
return m__$1;

break;
case "cljs-time.core/interval":
return cljs_time.core.__GT_period.call(null,m__$1);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,m__$1)))].join('')));

}
});

//# sourceMappingURL=format.js.map?rel=1488439823409