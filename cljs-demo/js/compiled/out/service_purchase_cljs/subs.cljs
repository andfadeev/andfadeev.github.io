(ns service-purchase-cljs.subs
    (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as rf]
            [service-purchase-cljs.spec]
            [clojure.spec :as s]))

(rf/reg-sub
  :service-title
  (fn [db]
    (let [title (-> db :service-form :title)]
      {:value title
       :valid? (s/valid? :service-purchase-cljs.spec/title title)})))

(rf/reg-sub
  :create-acts?
  (fn [db]
    (-> db :service-form :create-acts?)))

(rf/reg-sub
  :agreement-id
  (fn [db]
    (let [agreement-id (-> db :service-form :agreement-id)]
      {:value agreement-id
       :valid? (s/valid? :service-purchase-cljs.spec/agreement-id agreement-id)})))

(rf/reg-sub
  :agreements
  #(:agreements %))

(rf/reg-sub
  :profarea-ids
  (fn [db]
    (js/console.log (str "in :profarea-ids: " (-> db :service-form :profarea-ids)))
    (-> db :service-form :profarea-ids)))

(rf/reg-sub
  :area-ids
  (fn [db]
    (js/console.log (str "in :area-ids: " (-> db :service-form :area-ids)))
    (-> db :service-form :area-ids)))

(rf/reg-sub
  :all-areas?
  (fn [db] (-> db :service-form :all-areas?)))

(rf/reg-sub
  :all-profareas?
  (fn [db] (-> db :service-form :all-profareas?)))

(rf/reg-sub
  :service-type-dict
  (fn [db]
    (:service-type-dict db)))

(rf/reg-sub
  :profareas-dict
  (fn [db]
    (:profareas-dict db)))

(rf/reg-sub
  :areas-dict
  (fn [db] (:areas-dict db)))

(defn find-service-type-by-id [dictionary service-type-id]
  (some #(when (= service-type-id (:id %)) %) dictionary))

(rf/reg-sub
  :service-type
  (fn [db]
    (find-service-type-by-id (:service-type-dict db)
                             (-> db :service-form :service-type-id))))

(rf/reg-sub
  :period
  (fn [db]
    (-> db :service-form :period)))

(rf/reg-sub
  :count
  (fn [db]
    (let [v (-> db :service-form :count)]
      {:value v
       :valid? (integer? v)
       })))

(rf/reg-sub
  :price
  (fn [db]
    (let [price (-> db :service-form :price)]
      {:price price
       :valid? (s/valid? :service-purchase-cljs.spec/price price)})))

(rf/reg-sub
  :form-disabled?
  (fn [db]
    (not (nil? (-> db :service-form :status)))))

(rf/reg-sub
  :status
  #(-> % :service-form :status))

(rf/reg-sub
  :service-form
  #(-> % :service-form))

(rf/reg-sub
 :active-panel
 (fn [db _]
   (:active-panel db)))

(rf/reg-sub
  :panel-params
  #(:panel-params %))

(rf/reg-sub
  :is-valid-form?
  (fn [db _]
    (s/valid? :service-purchase-cljs.spec/service-form (:service-form db))
    ;(and
    ;  (not (clojure.string/blank? (-> db :service-form :title)))
    ;  (not (nil? (-> db :service-form :agreement-id)))
    ;  (integer? (-> db :service-form :count)))
    ))