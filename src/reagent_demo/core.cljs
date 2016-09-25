(ns reagent-demo.core
  (:require [reagent.core :as reagent]))

;; github repo:
;; https://github.com/colbydehart/reagent-demo

;; This talk is broken into a few parts
;; 1. Learn basic syntax of Clojure
;; 2. Learn about ClojureScript and Reagent
;; 3. Make and run an actual Reagent app
;; 4. Learn how to manage state in a Reagent app
;; 5. Make a less trivial example of a webapp.
;;___________________________________
;; Basic syntax
;;___________________________________

;; Clojure is a functional programming
;; language on the JVM. Clojure is a
;; lisp, which is different than most
;; programming languages. Lisps use
;; prefix notation, which means that
;; when you call a function, it looks
;; like this.

;; function
;; |        
;; | -----arguments
;; | | |    
;; v v v    
  (+ 1 1)
;; Function calls inside of function calls:
(+ 1 (* 2 3))
;; similar to: 1 + (2 * 3)

;;___________________________________
;; Data structures
;;___________________________________

3 ; Numbers!
"wut" ; Strings! double quotes!
true ; Booleans!
:very-cool ; Keywords!
["A String" true :a-symbol] ; Vectors!
{:first "Colby" :last "DeHart"} ; Maps!


;;___________________________________
;; Binding data 
;;___________________________________

(def me "colby") ; think of const/let
me

(let [x 3  ; <- binding vector
      y 4]
  (+ x y)) ; <- expression

;;___________________________________
;; Functions
;;___________________________________

(fn
  [x]      ; <- binding vector
  (+ x 3)) ; <- function body

;; JS equivalent:
;; function (x) {
;;   return x + 3
;; }

;; shorthand notation
#(+ %1 3) ; (x) => x + 3

(defn add-three
  "Adds three to a number" ; optional docstring
  [x]
  (+ x 3))
(add-three 7)

;; identical to:
;; (def add-three (fn [x] (+ x 3)))

;;___________________________________
;; Built in functions
;;___________________________________

(def my-vec [1 2 3])

;;   -------- The function to run on each
;;   |        item in the collection.   
;;   |        
;;   |   ---- The collection to be mapped over.
;;   |   |
;;   |   |
(map inc my-vec)
;; myVec.map(R.inc)

;; Clojure data structures are immutable
my-vec

;; Calling function from other namespace
(clojure.string/join [8 6 7 5 3 0 9])

;; More advanced function
(map add-three (conj [1 2 3] 4))

(let [hexidecimals "1234567890ABCDEF"
      get-digit #(rand-nth hexidecimals)
      digits (repeatedly 6 get-digit)
      hex-code (concat ["#"] digits)]
  (clojure.string/join hex-code))

;;___________________________________
;; JS interop
;;___________________________________

;; Clojurescript is a language which transpiles
;; clojure to JavaScript using Google's Closure
;; compiler. For the most part, it is very
;; similar to Clojure and many parts of the
;; core library are included.

;; JS namespace
;; (js/alert "Heyo")

;; JS function call syntax
(.log js/console "Tubular")

;; JS function call shorthand
(js/console.log "Radical")

(def el (.getElementById js/document "app"))
el

;; JS property call with .-
(.-innerHTML el)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn home []
  [:div
   [:h1 "Getting Started with Clojurescript and Reagent!"]
   [:h3 "Colby DeHart"]
   [:h3 {:style {:color "lightblue"}}"@colbydehart"]])

(defn mount-root []
  (reagent/render home (.getElementById js/document "app")))

(defn init! [] (mount-root))
