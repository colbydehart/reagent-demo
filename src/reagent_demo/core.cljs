(ns reagent-demo.core
    (:require [reagent.core :as reagent :refer [atom]]))

;; -------------------------
;; Views

(defn home-page []
  [:div [:h2 "Welcome to Reagent"]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

;; GH repo https://github.com/colbydehart/reagent-demo

;; Today we are going to learn ClojureScript and that is fun!

;; This talk is broken into a few part
;; - Learn basic syntax of Clojure
;; - Learn about ClojureScript and Reagent
;; - Make and run an actual ClojureScript application
;; - Learn how to manage state in a Reagent application
;; - Make a less trivial example of a working webapp.

;; Clojure is a functional programming language on the
;; JVM. Clojure is a lisp, which is different than most
;; programming languages. Lisps use prefix notation,
;; which means that when you call a function, it looks
;; like this.

;;function
;; |        
;; | -----arguments
;; | | |    
;; v v v    
(+ 1 1)

;; That is the main difference between lisp and other
;; languages (but there are many more!)

;; you can also call functions inside of other
;; functions just by nesting the parenthesis
;; 1 + (2 * 3)
(+ 1 (* 2 3))

;; Printing out to the console 
;; print("hello world")
(println "hello world")

;; Clojure has basic types very similar to types in JavaScript
3 ; Numbers!
"wut" ; Strings! double quotes!
true ; Booleans!
:very-cool ; Symbols!

;; Vectors are surrounded in brackets and similar
;; to Arrays in JavaScript
["A String" true :a-symbol]
;; Maps are surrounded by curly braces and similar
;; to Objects or HashMaps in JavaScript
{:name "Colby"
 :occupation "Developer"
 :bodacious true}

;; You can bind values to names with 'def'
;; (think of 'const' and 'let' in JS)
(def me "colby")
me

;; You can also bind variables for just one expression
;; with 'let'(notice that the let bindings are in square
;; brackets. This is also how function parameters are
;; handled as we'll see soon.)
(let [x 3
      y 4]
  (println x)
  (println y)
  (+ x y))

;; You can also make your own functions (obviously,
;; it is a functional language) with 'fn'. 
;; 'fn' takes in a vector of parameters and then any number
;; of expressions to be run as the body of the function
(fn [x] (+ x 3))
;; The return value of a function is the value of the
;; last expression.

;; You can use the 'defn' macro to make a
;; function and bind it to a name
(defn add-three [x] (+ x 3))
;; identical to: (def add-three (fn [x] (+ x 3)))
(add-three 7)

;; A few useful functions for getting around in clojure
;; - str: creates a string from the arguments passed in
(str "Nice " "Sweet")
(let [middle "And"]
  (str "Rock " middle " Roll"))
;; - inc: increments a number by one.
;;   (similar to the ++ operator in JS)
(inc 3)
;; - conj: 'conjoins' a collection with an element.
;;   this will be the main way you add elements to
;;   collections
(conj [1 2 3] 4)
;; There are also functions in other namespaces.
;; to use these you need to prefix the function
;; with a namespace and a slash.
(clojure.string/join [8 6 7 5 3 0 9])
;; The "js" namespace is where JS objects live.
js/document

;; There are lots of great functions for collections
;; in clojure, you probably know most of these.
;; 'map' maps over a sequence (or array or map)
;; returning a new sequence with a function applied. 
(def my-vec [1 2 3])

;;   -------- The function to run on each
;;   |        item in the collection.   
;;   |        
;;   |   ---- The collection to be mapped over.    
;;   |   |
;;   |   |
(map inc my-vec)

;; Notice i said, "a new sequence". Data
;; in Clojure is immutable. You can't change
;; a vector, only create a new one with updates
;; applied.
my-vec

;; More advanced function example!
(map add-three (conj [1 2 3] 4))

;; Clojurescript is a language which transpiles clojure to
;; JavaScript using Google's Closure compiler. For the most
;; part, it is very similar to Clojure and many parts of the
;; core library is included.

;; To call a function on a Javascript object, you call
;; the function first, dot-prefixed, and then the object
;; you are calling it on, followed by any arguments like
;; this.
(.log js/console "Tubular")
;; Some common functions can be called with shorthand
(js/console.log "Radical")

(def el (.getElementById js/document "app"))

;; Since clojure will assume everything at the start
;; of a form is a function and attempt to invoke it,
;; if you want a property, you have to prefix it with
;; ".-" like this.
(.-innerHTML el)


;; Pretty neat huh? we'll learn more stuff, but
;; let's get back to the main project for now.
