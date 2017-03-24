(ns service-purchase-cljs.core
    (:require [reagent.core :as reagent]
              [re-frisk.core :refer [enable-re-frisk!]]
              [re-frame.core :as re-frame]
              [service-purchase-cljs.events]
              [service-purchase-cljs.subs]
              [service-purchase-cljs.routes :as routes]
              [service-purchase-cljs.views :as views]
              [service-purchase-cljs.config :as config]))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (enable-re-frisk!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-root))
