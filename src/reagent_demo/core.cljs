(ns reagent-demo.core
  (:require
   [reagent.core :as r]))

;; -------------------------
;; Data
(def timers (r/atom [0]))

;; Handlers
(defn update-time
  "Increments every timer number by one"
  []
  (swap! timers (fn [state]
                  ;; (vec (map inc timers))
                  (mapv inc state))))

;; Same as def, but only runs once if code reloads
(defonce interval
  (js/setInterval update-time 1000))

(defn add-timer []
  (swap! timers conj 0))

(defn rand-color
  "Generates a random hex code (i.e. #392847)"
  []
  (let [hexidecimals "1234567890ABCDEF"
        get-digit #(rand-nth hexidecimals)
        digits (repeatedly 6 get-digit)
        hex-code (concat ["#"] digits)]
    (clojure.string/join hex-code)))

;; -------------------------
;; Views

(defn timer-component [time]
  (let [color (rand-color)]
    (fn [time]
      [:li {:style {:color color}}
       "Time: " time])))


(defn home-page []
  "Home page of application"
  [:div
   [:h2 "Multi-Timer"]
   [:ul.timers
    (for [timer @timers]
      [timer-component timer])]
   [:button {:on-click add-timer} "Add timer"]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render
   [home-page]
   (.getElementById js/document "app")))

(defn init! []
  (mount-root))


