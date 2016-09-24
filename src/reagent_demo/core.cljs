(ns reagent-demo.core
  (:require
   [reagent.core :as reagent]))

;; atoms are a core part of
;; concurrent programming
;; in Clojure and Reagent
;; exposes a version of an
;; atom that works with
;; Clojurescript.

;; Basically an atom is mutable
;; data which can be read and
;; modified synchronously.
;; Atoms are very powerful and
;; are capable of managing your
;; app's state, as a replacement
;; for where you would use flux
;; or redux.

(reagent/atom 1)

(def my-atom (reagent/atom 1))

my-atom         ; Does not give value

;; Must dereference the atom for value
(deref my-atom) 
@my-atom        ; @ is a macro for `deref`

;; Setting atom state.

(swap! my-atom inc)
;; passes in previous value to function

(def other-atom (reagent/atom []))

;; Pass arguments to swap function
(swap! other-atom conj "Excellent")

@other-atom

(reset! other-atom {:value "Random Nonsense"})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn mount-root []
  (reagent/render
   [:h1 "Atoms"]
   (.getElementById js/document "app")))

(defn init! []
  (mount-root))
