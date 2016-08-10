(ns reagent-demo.core
    (:require [reagent.core :as reagent]))

;; -------------------------
;; Data
(def timers [1 4 8])

;; -------------------------
;; Views
(defn timer-component [timer]
  [:li "Time: " timer])

(defn home-page
  "Home page of application"
  []
  [:div
   [:h2 "Multi-Timer"]

   [:ul.timers
    (for [timer timers]
      [timer-component timer])]
   [:button "Add Timer"]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render
   [home-page]
   (.getElementById js/document "app")))

(defn init! []
  (mount-root))
