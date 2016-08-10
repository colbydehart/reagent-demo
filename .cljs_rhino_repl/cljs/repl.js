// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19153){
var map__19178 = p__19153;
var map__19178__$1 = ((((!((map__19178 == null)))?((((map__19178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19178):map__19178);
var m = map__19178__$1;
var n = cljs.core.get.call(null,map__19178__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19178__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19180_19202 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19181_19203 = null;
var count__19182_19204 = (0);
var i__19183_19205 = (0);
while(true){
if((i__19183_19205 < count__19182_19204)){
var f_19206 = cljs.core._nth.call(null,chunk__19181_19203,i__19183_19205);
cljs.core.println.call(null,"  ",f_19206);

var G__19207 = seq__19180_19202;
var G__19208 = chunk__19181_19203;
var G__19209 = count__19182_19204;
var G__19210 = (i__19183_19205 + (1));
seq__19180_19202 = G__19207;
chunk__19181_19203 = G__19208;
count__19182_19204 = G__19209;
i__19183_19205 = G__19210;
continue;
} else {
var temp__4657__auto___19211 = cljs.core.seq.call(null,seq__19180_19202);
if(temp__4657__auto___19211){
var seq__19180_19212__$1 = temp__4657__auto___19211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19180_19212__$1)){
var c__17796__auto___19213 = cljs.core.chunk_first.call(null,seq__19180_19212__$1);
var G__19214 = cljs.core.chunk_rest.call(null,seq__19180_19212__$1);
var G__19215 = c__17796__auto___19213;
var G__19216 = cljs.core.count.call(null,c__17796__auto___19213);
var G__19217 = (0);
seq__19180_19202 = G__19214;
chunk__19181_19203 = G__19215;
count__19182_19204 = G__19216;
i__19183_19205 = G__19217;
continue;
} else {
var f_19218 = cljs.core.first.call(null,seq__19180_19212__$1);
cljs.core.println.call(null,"  ",f_19218);

var G__19219 = cljs.core.next.call(null,seq__19180_19212__$1);
var G__19220 = null;
var G__19221 = (0);
var G__19222 = (0);
seq__19180_19202 = G__19219;
chunk__19181_19203 = G__19220;
count__19182_19204 = G__19221;
i__19183_19205 = G__19222;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19223 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16985__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16985__auto__)){
return or__16985__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19223);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19223)))?cljs.core.second.call(null,arglists_19223):arglists_19223));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19184_19224 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19185_19225 = null;
var count__19186_19226 = (0);
var i__19187_19227 = (0);
while(true){
if((i__19187_19227 < count__19186_19226)){
var vec__19188_19228 = cljs.core._nth.call(null,chunk__19185_19225,i__19187_19227);
var name_19229 = cljs.core.nth.call(null,vec__19188_19228,(0),null);
var map__19191_19230 = cljs.core.nth.call(null,vec__19188_19228,(1),null);
var map__19191_19231__$1 = ((((!((map__19191_19230 == null)))?((((map__19191_19230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19191_19230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19191_19230):map__19191_19230);
var doc_19232 = cljs.core.get.call(null,map__19191_19231__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19233 = cljs.core.get.call(null,map__19191_19231__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19229);

cljs.core.println.call(null," ",arglists_19233);

if(cljs.core.truth_(doc_19232)){
cljs.core.println.call(null," ",doc_19232);
} else {
}

var G__19234 = seq__19184_19224;
var G__19235 = chunk__19185_19225;
var G__19236 = count__19186_19226;
var G__19237 = (i__19187_19227 + (1));
seq__19184_19224 = G__19234;
chunk__19185_19225 = G__19235;
count__19186_19226 = G__19236;
i__19187_19227 = G__19237;
continue;
} else {
var temp__4657__auto___19238 = cljs.core.seq.call(null,seq__19184_19224);
if(temp__4657__auto___19238){
var seq__19184_19239__$1 = temp__4657__auto___19238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19184_19239__$1)){
var c__17796__auto___19240 = cljs.core.chunk_first.call(null,seq__19184_19239__$1);
var G__19241 = cljs.core.chunk_rest.call(null,seq__19184_19239__$1);
var G__19242 = c__17796__auto___19240;
var G__19243 = cljs.core.count.call(null,c__17796__auto___19240);
var G__19244 = (0);
seq__19184_19224 = G__19241;
chunk__19185_19225 = G__19242;
count__19186_19226 = G__19243;
i__19187_19227 = G__19244;
continue;
} else {
var vec__19193_19245 = cljs.core.first.call(null,seq__19184_19239__$1);
var name_19246 = cljs.core.nth.call(null,vec__19193_19245,(0),null);
var map__19196_19247 = cljs.core.nth.call(null,vec__19193_19245,(1),null);
var map__19196_19248__$1 = ((((!((map__19196_19247 == null)))?((((map__19196_19247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19196_19247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19196_19247):map__19196_19247);
var doc_19249 = cljs.core.get.call(null,map__19196_19248__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19250 = cljs.core.get.call(null,map__19196_19248__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19246);

cljs.core.println.call(null," ",arglists_19250);

if(cljs.core.truth_(doc_19249)){
cljs.core.println.call(null," ",doc_19249);
} else {
}

var G__19251 = cljs.core.next.call(null,seq__19184_19239__$1);
var G__19252 = null;
var G__19253 = (0);
var G__19254 = (0);
seq__19184_19224 = G__19251;
chunk__19185_19225 = G__19252;
count__19186_19226 = G__19253;
i__19187_19227 = G__19254;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__19198 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19199 = null;
var count__19200 = (0);
var i__19201 = (0);
while(true){
if((i__19201 < count__19200)){
var role = cljs.core._nth.call(null,chunk__19199,i__19201);
var temp__4657__auto___19255__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___19255__$1)){
var spec_19256 = temp__4657__auto___19255__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_19256));
} else {
}

var G__19257 = seq__19198;
var G__19258 = chunk__19199;
var G__19259 = count__19200;
var G__19260 = (i__19201 + (1));
seq__19198 = G__19257;
chunk__19199 = G__19258;
count__19200 = G__19259;
i__19201 = G__19260;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__19198);
if(temp__4657__auto____$1){
var seq__19198__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19198__$1)){
var c__17796__auto__ = cljs.core.chunk_first.call(null,seq__19198__$1);
var G__19261 = cljs.core.chunk_rest.call(null,seq__19198__$1);
var G__19262 = c__17796__auto__;
var G__19263 = cljs.core.count.call(null,c__17796__auto__);
var G__19264 = (0);
seq__19198 = G__19261;
chunk__19199 = G__19262;
count__19200 = G__19263;
i__19201 = G__19264;
continue;
} else {
var role = cljs.core.first.call(null,seq__19198__$1);
var temp__4657__auto___19265__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___19265__$2)){
var spec_19266 = temp__4657__auto___19265__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_19266));
} else {
}

var G__19267 = cljs.core.next.call(null,seq__19198__$1);
var G__19268 = null;
var G__19269 = (0);
var G__19270 = (0);
seq__19198 = G__19267;
chunk__19199 = G__19268;
count__19200 = G__19269;
i__19201 = G__19270;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map