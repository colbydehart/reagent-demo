// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__17591__auto__,writer__17592__auto__,opt__17593__auto__){
return cljs.core._write.call(null,writer__17592__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20138 = arguments.length;
var i__18061__auto___20139 = (0);
while(true){
if((i__18061__auto___20139 < len__18060__auto___20138)){
args__18067__auto__.push((arguments[i__18061__auto___20139]));

var G__20140 = (i__18061__auto___20139 + (1));
i__18061__auto___20139 = G__20140;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq20137){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20137));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20142 = arguments.length;
var i__18061__auto___20143 = (0);
while(true){
if((i__18061__auto___20143 < len__18060__auto___20142)){
args__18067__auto__.push((arguments[i__18061__auto___20143]));

var G__20144 = (i__18061__auto___20143 + (1));
i__18061__auto___20143 = G__20144;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq20141){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20141));
});

var g_QMARK__20145 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_20146 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20145){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__20145))
,null));
var mkg_20147 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20145,g_20146){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__20145,g_20146))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__20145,g_20146,mkg_20147){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__20145).call(null,x);
});})(g_QMARK__20145,g_20146,mkg_20147))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__20145,g_20146,mkg_20147){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_20147).call(null,gfn);
});})(g_QMARK__20145,g_20146,mkg_20147))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__20145,g_20146,mkg_20147){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_20146).call(null,generator);
});})(g_QMARK__20145,g_20146,mkg_20147))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__18136__auto___20165 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__18136__auto___20165){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20166 = arguments.length;
var i__18061__auto___20167 = (0);
while(true){
if((i__18061__auto___20167 < len__18060__auto___20166)){
args__18067__auto__.push((arguments[i__18061__auto___20167]));

var G__20168 = (i__18061__auto___20167 + (1));
i__18061__auto___20167 = G__20168;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20165))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20165){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20165),args);
});})(g__18136__auto___20165))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__18136__auto___20165){
return (function (seq20148){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20148));
});})(g__18136__auto___20165))
;


var g__18136__auto___20169 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__18136__auto___20169){
return (function cljs$spec$impl$gen$list(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20170 = arguments.length;
var i__18061__auto___20171 = (0);
while(true){
if((i__18061__auto___20171 < len__18060__auto___20170)){
args__18067__auto__.push((arguments[i__18061__auto___20171]));

var G__20172 = (i__18061__auto___20171 + (1));
i__18061__auto___20171 = G__20172;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20169))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20169){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20169),args);
});})(g__18136__auto___20169))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__18136__auto___20169){
return (function (seq20149){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20149));
});})(g__18136__auto___20169))
;


var g__18136__auto___20173 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__18136__auto___20173){
return (function cljs$spec$impl$gen$map(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20174 = arguments.length;
var i__18061__auto___20175 = (0);
while(true){
if((i__18061__auto___20175 < len__18060__auto___20174)){
args__18067__auto__.push((arguments[i__18061__auto___20175]));

var G__20176 = (i__18061__auto___20175 + (1));
i__18061__auto___20175 = G__20176;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20173))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20173){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20173),args);
});})(g__18136__auto___20173))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__18136__auto___20173){
return (function (seq20150){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20150));
});})(g__18136__auto___20173))
;


var g__18136__auto___20177 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__18136__auto___20177){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20178 = arguments.length;
var i__18061__auto___20179 = (0);
while(true){
if((i__18061__auto___20179 < len__18060__auto___20178)){
args__18067__auto__.push((arguments[i__18061__auto___20179]));

var G__20180 = (i__18061__auto___20179 + (1));
i__18061__auto___20179 = G__20180;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20177))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20177){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20177),args);
});})(g__18136__auto___20177))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__18136__auto___20177){
return (function (seq20151){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20151));
});})(g__18136__auto___20177))
;


var g__18136__auto___20181 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__18136__auto___20181){
return (function cljs$spec$impl$gen$set(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20182 = arguments.length;
var i__18061__auto___20183 = (0);
while(true){
if((i__18061__auto___20183 < len__18060__auto___20182)){
args__18067__auto__.push((arguments[i__18061__auto___20183]));

var G__20184 = (i__18061__auto___20183 + (1));
i__18061__auto___20183 = G__20184;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20181))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20181){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20181),args);
});})(g__18136__auto___20181))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__18136__auto___20181){
return (function (seq20152){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20152));
});})(g__18136__auto___20181))
;


var g__18136__auto___20185 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__18136__auto___20185){
return (function cljs$spec$impl$gen$vector(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20186 = arguments.length;
var i__18061__auto___20187 = (0);
while(true){
if((i__18061__auto___20187 < len__18060__auto___20186)){
args__18067__auto__.push((arguments[i__18061__auto___20187]));

var G__20188 = (i__18061__auto___20187 + (1));
i__18061__auto___20187 = G__20188;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20185))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20185){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20185),args);
});})(g__18136__auto___20185))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__18136__auto___20185){
return (function (seq20153){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20153));
});})(g__18136__auto___20185))
;


var g__18136__auto___20189 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__18136__auto___20189){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20190 = arguments.length;
var i__18061__auto___20191 = (0);
while(true){
if((i__18061__auto___20191 < len__18060__auto___20190)){
args__18067__auto__.push((arguments[i__18061__auto___20191]));

var G__20192 = (i__18061__auto___20191 + (1));
i__18061__auto___20191 = G__20192;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20189))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20189){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20189),args);
});})(g__18136__auto___20189))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__18136__auto___20189){
return (function (seq20154){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20154));
});})(g__18136__auto___20189))
;


var g__18136__auto___20193 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__18136__auto___20193){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20194 = arguments.length;
var i__18061__auto___20195 = (0);
while(true){
if((i__18061__auto___20195 < len__18060__auto___20194)){
args__18067__auto__.push((arguments[i__18061__auto___20195]));

var G__20196 = (i__18061__auto___20195 + (1));
i__18061__auto___20195 = G__20196;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20193))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20193){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20193),args);
});})(g__18136__auto___20193))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__18136__auto___20193){
return (function (seq20155){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20155));
});})(g__18136__auto___20193))
;


var g__18136__auto___20197 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__18136__auto___20197){
return (function cljs$spec$impl$gen$elements(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20198 = arguments.length;
var i__18061__auto___20199 = (0);
while(true){
if((i__18061__auto___20199 < len__18060__auto___20198)){
args__18067__auto__.push((arguments[i__18061__auto___20199]));

var G__20200 = (i__18061__auto___20199 + (1));
i__18061__auto___20199 = G__20200;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20197))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20197){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20197),args);
});})(g__18136__auto___20197))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__18136__auto___20197){
return (function (seq20156){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20156));
});})(g__18136__auto___20197))
;


var g__18136__auto___20201 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__18136__auto___20201){
return (function cljs$spec$impl$gen$bind(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20202 = arguments.length;
var i__18061__auto___20203 = (0);
while(true){
if((i__18061__auto___20203 < len__18060__auto___20202)){
args__18067__auto__.push((arguments[i__18061__auto___20203]));

var G__20204 = (i__18061__auto___20203 + (1));
i__18061__auto___20203 = G__20204;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20201))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20201){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20201),args);
});})(g__18136__auto___20201))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__18136__auto___20201){
return (function (seq20157){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20157));
});})(g__18136__auto___20201))
;


var g__18136__auto___20205 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__18136__auto___20205){
return (function cljs$spec$impl$gen$choose(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20206 = arguments.length;
var i__18061__auto___20207 = (0);
while(true){
if((i__18061__auto___20207 < len__18060__auto___20206)){
args__18067__auto__.push((arguments[i__18061__auto___20207]));

var G__20208 = (i__18061__auto___20207 + (1));
i__18061__auto___20207 = G__20208;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20205))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20205){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20205),args);
});})(g__18136__auto___20205))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__18136__auto___20205){
return (function (seq20158){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20158));
});})(g__18136__auto___20205))
;


var g__18136__auto___20209 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__18136__auto___20209){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20210 = arguments.length;
var i__18061__auto___20211 = (0);
while(true){
if((i__18061__auto___20211 < len__18060__auto___20210)){
args__18067__auto__.push((arguments[i__18061__auto___20211]));

var G__20212 = (i__18061__auto___20211 + (1));
i__18061__auto___20211 = G__20212;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20209))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20209){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20209),args);
});})(g__18136__auto___20209))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__18136__auto___20209){
return (function (seq20159){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20159));
});})(g__18136__auto___20209))
;


var g__18136__auto___20213 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__18136__auto___20213){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20214 = arguments.length;
var i__18061__auto___20215 = (0);
while(true){
if((i__18061__auto___20215 < len__18060__auto___20214)){
args__18067__auto__.push((arguments[i__18061__auto___20215]));

var G__20216 = (i__18061__auto___20215 + (1));
i__18061__auto___20215 = G__20216;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20213))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20213){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20213),args);
});})(g__18136__auto___20213))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__18136__auto___20213){
return (function (seq20160){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20160));
});})(g__18136__auto___20213))
;


var g__18136__auto___20217 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__18136__auto___20217){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20218 = arguments.length;
var i__18061__auto___20219 = (0);
while(true){
if((i__18061__auto___20219 < len__18060__auto___20218)){
args__18067__auto__.push((arguments[i__18061__auto___20219]));

var G__20220 = (i__18061__auto___20219 + (1));
i__18061__auto___20219 = G__20220;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20217))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20217){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20217),args);
});})(g__18136__auto___20217))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__18136__auto___20217){
return (function (seq20161){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20161));
});})(g__18136__auto___20217))
;


var g__18136__auto___20221 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__18136__auto___20221){
return (function cljs$spec$impl$gen$sample(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20222 = arguments.length;
var i__18061__auto___20223 = (0);
while(true){
if((i__18061__auto___20223 < len__18060__auto___20222)){
args__18067__auto__.push((arguments[i__18061__auto___20223]));

var G__20224 = (i__18061__auto___20223 + (1));
i__18061__auto___20223 = G__20224;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20221))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20221){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20221),args);
});})(g__18136__auto___20221))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__18136__auto___20221){
return (function (seq20162){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20162));
});})(g__18136__auto___20221))
;


var g__18136__auto___20225 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__18136__auto___20225){
return (function cljs$spec$impl$gen$return(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20226 = arguments.length;
var i__18061__auto___20227 = (0);
while(true){
if((i__18061__auto___20227 < len__18060__auto___20226)){
args__18067__auto__.push((arguments[i__18061__auto___20227]));

var G__20228 = (i__18061__auto___20227 + (1));
i__18061__auto___20227 = G__20228;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20225))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20225){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20225),args);
});})(g__18136__auto___20225))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__18136__auto___20225){
return (function (seq20163){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20163));
});})(g__18136__auto___20225))
;


var g__18136__auto___20229 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__18136__auto___20229){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20230 = arguments.length;
var i__18061__auto___20231 = (0);
while(true){
if((i__18061__auto___20231 < len__18060__auto___20230)){
args__18067__auto__.push((arguments[i__18061__auto___20231]));

var G__20232 = (i__18061__auto___20231 + (1));
i__18061__auto___20231 = G__20232;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18136__auto___20229))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18136__auto___20229){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18136__auto___20229),args);
});})(g__18136__auto___20229))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__18136__auto___20229){
return (function (seq20164){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20164));
});})(g__18136__auto___20229))
;

var g__18149__auto___20254 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__18149__auto___20254){
return (function cljs$spec$impl$gen$any(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20255 = arguments.length;
var i__18061__auto___20256 = (0);
while(true){
if((i__18061__auto___20256 < len__18060__auto___20255)){
args__18067__auto__.push((arguments[i__18061__auto___20256]));

var G__20257 = (i__18061__auto___20256 + (1));
i__18061__auto___20256 = G__20257;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20254))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20254){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20254);
});})(g__18149__auto___20254))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__18149__auto___20254){
return (function (seq20233){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20233));
});})(g__18149__auto___20254))
;


var g__18149__auto___20258 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__18149__auto___20258){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20259 = arguments.length;
var i__18061__auto___20260 = (0);
while(true){
if((i__18061__auto___20260 < len__18060__auto___20259)){
args__18067__auto__.push((arguments[i__18061__auto___20260]));

var G__20261 = (i__18061__auto___20260 + (1));
i__18061__auto___20260 = G__20261;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20258))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20258){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20258);
});})(g__18149__auto___20258))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__18149__auto___20258){
return (function (seq20234){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20234));
});})(g__18149__auto___20258))
;


var g__18149__auto___20262 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__18149__auto___20262){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20263 = arguments.length;
var i__18061__auto___20264 = (0);
while(true){
if((i__18061__auto___20264 < len__18060__auto___20263)){
args__18067__auto__.push((arguments[i__18061__auto___20264]));

var G__20265 = (i__18061__auto___20264 + (1));
i__18061__auto___20264 = G__20265;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20262))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20262){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20262);
});})(g__18149__auto___20262))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__18149__auto___20262){
return (function (seq20235){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20235));
});})(g__18149__auto___20262))
;


var g__18149__auto___20266 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__18149__auto___20266){
return (function cljs$spec$impl$gen$char(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20267 = arguments.length;
var i__18061__auto___20268 = (0);
while(true){
if((i__18061__auto___20268 < len__18060__auto___20267)){
args__18067__auto__.push((arguments[i__18061__auto___20268]));

var G__20269 = (i__18061__auto___20268 + (1));
i__18061__auto___20268 = G__20269;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20266))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20266){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20266);
});})(g__18149__auto___20266))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__18149__auto___20266){
return (function (seq20236){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20236));
});})(g__18149__auto___20266))
;


var g__18149__auto___20270 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__18149__auto___20270){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20271 = arguments.length;
var i__18061__auto___20272 = (0);
while(true){
if((i__18061__auto___20272 < len__18060__auto___20271)){
args__18067__auto__.push((arguments[i__18061__auto___20272]));

var G__20273 = (i__18061__auto___20272 + (1));
i__18061__auto___20272 = G__20273;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20270))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20270){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20270);
});})(g__18149__auto___20270))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__18149__auto___20270){
return (function (seq20237){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20237));
});})(g__18149__auto___20270))
;


var g__18149__auto___20274 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__18149__auto___20274){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20275 = arguments.length;
var i__18061__auto___20276 = (0);
while(true){
if((i__18061__auto___20276 < len__18060__auto___20275)){
args__18067__auto__.push((arguments[i__18061__auto___20276]));

var G__20277 = (i__18061__auto___20276 + (1));
i__18061__auto___20276 = G__20277;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20274))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20274){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20274);
});})(g__18149__auto___20274))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__18149__auto___20274){
return (function (seq20238){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20238));
});})(g__18149__auto___20274))
;


var g__18149__auto___20278 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__18149__auto___20278){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20279 = arguments.length;
var i__18061__auto___20280 = (0);
while(true){
if((i__18061__auto___20280 < len__18060__auto___20279)){
args__18067__auto__.push((arguments[i__18061__auto___20280]));

var G__20281 = (i__18061__auto___20280 + (1));
i__18061__auto___20280 = G__20281;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20278))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20278){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20278);
});})(g__18149__auto___20278))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__18149__auto___20278){
return (function (seq20239){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20239));
});})(g__18149__auto___20278))
;


var g__18149__auto___20282 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__18149__auto___20282){
return (function cljs$spec$impl$gen$double(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20283 = arguments.length;
var i__18061__auto___20284 = (0);
while(true){
if((i__18061__auto___20284 < len__18060__auto___20283)){
args__18067__auto__.push((arguments[i__18061__auto___20284]));

var G__20285 = (i__18061__auto___20284 + (1));
i__18061__auto___20284 = G__20285;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20282))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20282){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20282);
});})(g__18149__auto___20282))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__18149__auto___20282){
return (function (seq20240){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20240));
});})(g__18149__auto___20282))
;


var g__18149__auto___20286 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__18149__auto___20286){
return (function cljs$spec$impl$gen$int(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20287 = arguments.length;
var i__18061__auto___20288 = (0);
while(true){
if((i__18061__auto___20288 < len__18060__auto___20287)){
args__18067__auto__.push((arguments[i__18061__auto___20288]));

var G__20289 = (i__18061__auto___20288 + (1));
i__18061__auto___20288 = G__20289;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20286))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20286){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20286);
});})(g__18149__auto___20286))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__18149__auto___20286){
return (function (seq20241){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20241));
});})(g__18149__auto___20286))
;


var g__18149__auto___20290 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__18149__auto___20290){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20291 = arguments.length;
var i__18061__auto___20292 = (0);
while(true){
if((i__18061__auto___20292 < len__18060__auto___20291)){
args__18067__auto__.push((arguments[i__18061__auto___20292]));

var G__20293 = (i__18061__auto___20292 + (1));
i__18061__auto___20292 = G__20293;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20290))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20290){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20290);
});})(g__18149__auto___20290))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__18149__auto___20290){
return (function (seq20242){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20242));
});})(g__18149__auto___20290))
;


var g__18149__auto___20294 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__18149__auto___20294){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20295 = arguments.length;
var i__18061__auto___20296 = (0);
while(true){
if((i__18061__auto___20296 < len__18060__auto___20295)){
args__18067__auto__.push((arguments[i__18061__auto___20296]));

var G__20297 = (i__18061__auto___20296 + (1));
i__18061__auto___20296 = G__20297;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20294))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20294){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20294);
});})(g__18149__auto___20294))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__18149__auto___20294){
return (function (seq20243){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20243));
});})(g__18149__auto___20294))
;


var g__18149__auto___20298 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__18149__auto___20298){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20299 = arguments.length;
var i__18061__auto___20300 = (0);
while(true){
if((i__18061__auto___20300 < len__18060__auto___20299)){
args__18067__auto__.push((arguments[i__18061__auto___20300]));

var G__20301 = (i__18061__auto___20300 + (1));
i__18061__auto___20300 = G__20301;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20298))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20298){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20298);
});})(g__18149__auto___20298))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__18149__auto___20298){
return (function (seq20244){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20244));
});})(g__18149__auto___20298))
;


var g__18149__auto___20302 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__18149__auto___20302){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20303 = arguments.length;
var i__18061__auto___20304 = (0);
while(true){
if((i__18061__auto___20304 < len__18060__auto___20303)){
args__18067__auto__.push((arguments[i__18061__auto___20304]));

var G__20305 = (i__18061__auto___20304 + (1));
i__18061__auto___20304 = G__20305;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20302))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20302){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20302);
});})(g__18149__auto___20302))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__18149__auto___20302){
return (function (seq20245){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20245));
});})(g__18149__auto___20302))
;


var g__18149__auto___20306 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__18149__auto___20306){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20307 = arguments.length;
var i__18061__auto___20308 = (0);
while(true){
if((i__18061__auto___20308 < len__18060__auto___20307)){
args__18067__auto__.push((arguments[i__18061__auto___20308]));

var G__20309 = (i__18061__auto___20308 + (1));
i__18061__auto___20308 = G__20309;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20306))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20306){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20306);
});})(g__18149__auto___20306))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__18149__auto___20306){
return (function (seq20246){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20246));
});})(g__18149__auto___20306))
;


var g__18149__auto___20310 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__18149__auto___20310){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20311 = arguments.length;
var i__18061__auto___20312 = (0);
while(true){
if((i__18061__auto___20312 < len__18060__auto___20311)){
args__18067__auto__.push((arguments[i__18061__auto___20312]));

var G__20313 = (i__18061__auto___20312 + (1));
i__18061__auto___20312 = G__20313;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20310))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20310){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20310);
});})(g__18149__auto___20310))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__18149__auto___20310){
return (function (seq20247){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20247));
});})(g__18149__auto___20310))
;


var g__18149__auto___20314 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__18149__auto___20314){
return (function cljs$spec$impl$gen$string(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20315 = arguments.length;
var i__18061__auto___20316 = (0);
while(true){
if((i__18061__auto___20316 < len__18060__auto___20315)){
args__18067__auto__.push((arguments[i__18061__auto___20316]));

var G__20317 = (i__18061__auto___20316 + (1));
i__18061__auto___20316 = G__20317;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20314))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20314){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20314);
});})(g__18149__auto___20314))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__18149__auto___20314){
return (function (seq20248){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20248));
});})(g__18149__auto___20314))
;


var g__18149__auto___20318 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__18149__auto___20318){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20319 = arguments.length;
var i__18061__auto___20320 = (0);
while(true){
if((i__18061__auto___20320 < len__18060__auto___20319)){
args__18067__auto__.push((arguments[i__18061__auto___20320]));

var G__20321 = (i__18061__auto___20320 + (1));
i__18061__auto___20320 = G__20321;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20318))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20318){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20318);
});})(g__18149__auto___20318))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__18149__auto___20318){
return (function (seq20249){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20249));
});})(g__18149__auto___20318))
;


var g__18149__auto___20322 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__18149__auto___20322){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20323 = arguments.length;
var i__18061__auto___20324 = (0);
while(true){
if((i__18061__auto___20324 < len__18060__auto___20323)){
args__18067__auto__.push((arguments[i__18061__auto___20324]));

var G__20325 = (i__18061__auto___20324 + (1));
i__18061__auto___20324 = G__20325;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20322))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20322){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20322);
});})(g__18149__auto___20322))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__18149__auto___20322){
return (function (seq20250){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20250));
});})(g__18149__auto___20322))
;


var g__18149__auto___20326 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__18149__auto___20326){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20327 = arguments.length;
var i__18061__auto___20328 = (0);
while(true){
if((i__18061__auto___20328 < len__18060__auto___20327)){
args__18067__auto__.push((arguments[i__18061__auto___20328]));

var G__20329 = (i__18061__auto___20328 + (1));
i__18061__auto___20328 = G__20329;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20326))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20326){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20326);
});})(g__18149__auto___20326))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__18149__auto___20326){
return (function (seq20251){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20251));
});})(g__18149__auto___20326))
;


var g__18149__auto___20330 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__18149__auto___20330){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20331 = arguments.length;
var i__18061__auto___20332 = (0);
while(true){
if((i__18061__auto___20332 < len__18060__auto___20331)){
args__18067__auto__.push((arguments[i__18061__auto___20332]));

var G__20333 = (i__18061__auto___20332 + (1));
i__18061__auto___20332 = G__20333;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20330))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20330){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20330);
});})(g__18149__auto___20330))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__18149__auto___20330){
return (function (seq20252){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20252));
});})(g__18149__auto___20330))
;


var g__18149__auto___20334 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__18149__auto___20334){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20335 = arguments.length;
var i__18061__auto___20336 = (0);
while(true){
if((i__18061__auto___20336 < len__18060__auto___20335)){
args__18067__auto__.push((arguments[i__18061__auto___20336]));

var G__20337 = (i__18061__auto___20336 + (1));
i__18061__auto___20336 = G__20337;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});})(g__18149__auto___20334))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18149__auto___20334){
return (function (args){
return cljs.core.deref.call(null,g__18149__auto___20334);
});})(g__18149__auto___20334))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__18149__auto___20334){
return (function (seq20253){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20253));
});})(g__18149__auto___20334))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__18067__auto__ = [];
var len__18060__auto___20340 = arguments.length;
var i__18061__auto___20341 = (0);
while(true){
if((i__18061__auto___20341 < len__18060__auto___20340)){
args__18067__auto__.push((arguments[i__18061__auto___20341]));

var G__20342 = (i__18061__auto___20341 + (1));
i__18061__auto___20341 = G__20342;
continue;
} else {
}
break;
}

var argseq__18068__auto__ = ((((0) < args__18067__auto__.length))?(new cljs.core.IndexedSeq(args__18067__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__18068__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__20338_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__20338_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq20339){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20339));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__20343_SHARP_){
return (new Date(p1__20343_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map