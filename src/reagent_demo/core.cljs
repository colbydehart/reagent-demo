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

;; TODO: List github repo

;; Today we are going to learn ClojureScript and that is fun!

;; This talk is broken into a few part
;; - Learn basic syntax of Clojure
;; - Learn how to make Reagent components in ClojureScript
;; - Make and run an actual ClojureScript application
;; - Learn how to manage state in a Reagent application
;; - Make a less trivial example of a working webapp.

;; Clojure is a functional programming language on the JVM from Java.
;; Clojure is a lisp, which is different than most programming languages.
;; Lisps use prefix notation, which means that when you call a function,
;; it looks like this.

;;function
;; |        
;; | -----arguments
;; | | |    
;; v v v    
(+ 1 1)

;; That is the main difference between lisp and other
;; languages (but there are many more!)

;; function calls inside of other functions
;; 1 + (2 * 3)
(+ 1 (* 2 3))
;; Printing out to the console 
;; print("hello world")
(println "hello world")

;; Clojure has basic types very similar to types in JavaScript
3 ; Numbers!
"wut" ; Strings! double quotes!
true ; Booleans!
:hello-world ; Symbols!

;; Vectors are surrounded in brackets.
["hi" true :yes] ; Vector! similar to an array in JS
;; Maps are surrounded by curly braces.
{:name "Colby" :cool nil} ; Map! similar to a Hash or object in JS

;; You can bind values to names with 'def' (think of 'const' and 'let' in JS)
(def me "colby")
me
;; You can also bind variables for just one expression with 'let'
;; (notice that the let bindings are in square brackets. This
;; is also how function parameters are handled.)
(let [x 3
      y 4]
  (println x)
  (println y)
  (+ x y))

;; There are lots of cool functions for collections in clojure, you probably
;; know most of these. 'map' maps over a sequence (or array or map)
;; returning another sequence with a function applied. (here the function 'inc' will
;; increment a number by one)
(map inc [1 2 3])
;; conj will add an element to a sequence
(def my-vec [1 2 3])
(conj my-vec 4 5)
;; Data in Clojure is immutable
my-vec
;; Note here that the vector is not changed. All data types in clojure are immutable.

;; You can also make your own functions (obviously it is a functional language)
;; The return value of a function is the last expression in the function
(fn [x] (+ x 3))
;; you can use the 'defn' macro to make a function and bind it to a name
(defn add-three [x] (+ x 3))
(add-three 7)

;; You can call functions inside of other functions, which are evaluated
;; before being applied as arguments. here we add an element to a vector
;; and then map over the new vector with our cool new function.
(map add-three (conj [1 2 3] 4))

;; Clojurescript is a language which transpiles clojure to
;; JavaScript using Google's Closure compiler. For the most
;; part, it is very similar to Clojure and many parts of the
;; core library is included.

;; You can call functions from the JS namespace like this.
(js/alert "Hello there")
(let [el (.getElementById js/document "container")]
  .-html el)

;; Reagent is a lightweight wrapper for React written
;; in Clojurescript. Instead of writing components in JSX,
;; you return vectors which will be rendered. For example,
;; the JSX of...
;;
;; class MyComponent extends Component {
;;   render () {
;;     const {name} = this.props;
;; 
;;     return (
;;       <div className="container" style={{background: 'red'}}>
;;         <p> { `Hello there ${name}.` } </p>
;;       </div>
;;     );
;;   } 
;; }  
;; <MyComponent name='Colby' />
;;
;; would look like this in Reagent.

(defn my-component [name]
  [:div.container {:style {:background "red"}}
   [:p "Hello there " name "."]])

(my-component "Colby")

;; Each reagent component is a function that
;; returns a component vector or returns a
;; function that takes no arguments and
;; returns a component vector.

;; A component vector's first element is a
;; symbol which is the component's element
;; type and possibly class. The second element
;; is an optional map of properties to pass to
;; the element, and the third element is the
;; body of the component, which can be text,
;; other component vectors, or even other
;; components.

;; Pretty neat huh? we'll learn more stuff, but let's get back to the main project for now.

