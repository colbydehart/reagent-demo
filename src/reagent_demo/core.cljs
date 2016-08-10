(ns reagent-demo.core
    (:require [reagent.core :as reagent :refer [atom]]))

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
