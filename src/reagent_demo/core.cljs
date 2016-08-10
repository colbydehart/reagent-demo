;; Namespace of this file. Usually the main
;; file in a project will have the namespace
;; of '<project-name>.core'. This namespace
;; macro also allows you to import/require
;; other libraries/namespaces. Here we
;; import the namespace 'reagent.core' and
;; alias it as 'r'
(ns reagent-demo.core
    (:require [reagent.core :as reagent]))
;;   JS equiv:
;;   import { core as reagent } from 'reagent'

;; -------------------------
;; Views

(defn handler []
  (js/console.log "Clicked"))

;; Instead of JSX, Reagent uses a
;; Hiccup-like markup syntax.
;; https://github.com/weavejester/hiccup
;; HTML is represented in vectors where...

;; ---- HTML tag
;; |
;; |       --- Optional attribute map
;; |       |
;; |       |                    --- Element body
;; |       |                    |
  [:button {:on-click handler} "Click me"]

;; In JSX:
;; <button onClick={handler}>Click me</button>

;; All Reagent components are functions
;; that return either...
;; - A valid Hiccup-like vector as described above
(defn simple-component [name]
  [:div name])

;; JS equiv:
;; class simpleComponent extends React.Component {
;;   render() {
;;     return <div>{this.props.name}</div>
;;   }
;; }

(defn simple-component-2 [name]
  [:div.container
   {:style {:background "blue"}}
   name])

;; - A function which returns a Hiccup-like vector
(defn component-with-setup []
  (defn click-log []
    (println "Clicked!"))
  (fn []
    [:button.btn
     {:on-click click-log}
     "Click me"]))

(defn home-page []
  (let [title "Multi Timer"]
    (fn []
      [:div.container
       [:h2 title]
       [:p {:style {:color "blue"}}
        "This is blue text."]])))

;; class homePage2 extends Component {
;;   componentDidMount() {
;;     this.setState({title: "Multi Timer"});
;;   }

;;   render() {
;;     const { title } = this.state;
;;
;;     return (
;;       <div className='container'>
;;         <h2>{title}</h2>
;;         <p style={{color: 'blue'}}>
;;           This is blue text.
;;         </p>
;;       </div>
;;     );
;;   }
;; }

;; -------------------------
;; Initialize app

;; reagent/render is called here to render
;; the application. This is similar to
;; ReactDom.render. Takes in a vector of
;; component(s) to render and the DOM node
;; to render to.
(defn mount-root []
  (reagent/render
   [home-page]
   (.getElementById js/document "app")))

(defn init! []
  (mount-root))
