(ns reagent-demo.core
  (:require
   [reagent.core :as r]))

;; -------------------------
;; Data
(def timers [1 4 8])

;; -------------------------
;; Views

(defn home-page []
  (fn []
    [:div
     [:h2 "Multi-Timer"]

     [:ul.timers
      (for [timer timers]
        [:li {:key timer} "Time: " timer])]]))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))


;;                         ###ATOMS###
;; atoms are a core part of concurrent programming in Clojure
;; and Reagent exposes a version of an atom that works with Clojurescript.

;; basically an atom is a mutable state which can be read and modified
;; synchronously. Where you would normally use a flux implementation
;; or redux in JS, you can manage your state with atoms instead.
;; This is very cool. you create an atom with the 'atom' function
;; which takes in the value you want to store in the atom.

;; Also of note, the 'atom' function is in the 'reagent' namespace. When
;; you call a function from another namespace, you type the namespace,
;; then a slash, then the function name. We have reagent aliased to
;; 'r' here so the function call is 'r/atom'

(r/atom 3)

;; This creates an atom with the value three stored inside of it.
;; Usually you will create a binding to an atom so you can use it
;; later.

(def my-atom (r/atom 3))

;; When i directly call the atom like so...

my-atom

;; I don't get the value (which is 3) back that I want. In
;; order to get the value of an atom, you have to use the
;; 'deref' function, which synchronously gets the state of
;; the atom.

(deref my-atom)

;; deref is pretty common, so it has a macro, '@' which is
;; more commonly used.

@my-atom

;; Cool, we can get the values out of an atom, but now how
;; do we set state? There are two functions, 'swap!' and
;; 'reset!' (the exclamation points here signify that they
;; are 'impure functions', or that they modify state)

(swap! my-atom inc)

;; Now 'my-atom' is equal to 4. The only gotcha to worry about
;; with setting state of an atom is that if multiple parts of
;; your application are trying to modify the atom at the same
;; time it will loop until it is your turn to modify it, so your
;; modification function might be run more than once! just make
;; sure you don't pass any impure functions into your update function.

;; set state to an empty map.
(def state (r/atom {}))
;; pass an anonymous function into 'swap!' to set name to
;; "Colby" ('assoc' associates a key with a value in a map.)
(swap! state (fn [state] (assoc state :name "Rylo")))
;; the new state is {:name "Rylo"}
@state

;; The other function to modify the state of an atom is 'reset!'
;; This function is similar to 'swap!' except that it doesn't
;; give a hoot about the previous state of the atom. It will
;; replace the state of the atom with whatever you give it.

(reset! my-atom "Chewbacca")
@my-atom


