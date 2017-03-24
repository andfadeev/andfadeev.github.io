(ns service-purchase-cljs.events
    (:require [re-frame.core :as rf]
              [service-purchase-cljs.db :as db]))

(defn as-int [s]
  (let [i (js/parseInt s)]
    (if (js/isNaN i) s i)))

(rf/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))

(rf/reg-event-db
 :set-active-panel
 (fn [db [_ active-panel params]]
   (-> db
       (assoc :active-panel active-panel)
       (assoc :panel-params params))))

(rf/reg-event-db
  :update-service-title
  (fn [db [_ title]]
    (assoc-in db [:service-form :title] title)))

(rf/reg-event-db
  :update-create-acts?
  (fn [db [_ create-acts?]]
    (assoc-in db [:service-form :create-acts?] create-acts?)))

(rf/reg-event-db
  :update-agreement-id
  (fn [db [_ agreement-id]]
    (assoc-in db [:service-form :agreement-id] agreement-id)))

(rf/reg-event-db
  :update-profarea-ids
  (fn [db [_ profarea-ids]]
    (assoc-in db [:service-form :profarea-ids] profarea-ids)))

(rf/reg-event-db
  :update-area-ids
  (fn [db [_ area-ids]]
    (assoc-in db [:service-form :area-ids] area-ids)))

(rf/reg-event-db
  :clear-service-params
  (fn [db [_ _]]
    (assoc-in db [:service-form :params] {:price 0
                                          :count 0
                                          :period 0})))

(rf/reg-event-fx
  :update-service-type-id
  (fn [cofx [_ service-type-id]]
    {:db (assoc-in (:db cofx) [:service-form :service-type-id] service-type-id)
     :dispatch [:clear-service-params]}))

(rf/reg-event-db
  :update-service-period
  (fn [db [_ period]]
    (assoc-in db [:service-form :params :period] period)))

(rf/reg-event-db
  :update-service-price
  (fn [db [_ price]]
    (assoc-in db [:service-form :price] (as-int price))))

(rf/reg-event-db
  :update-service-count
  (fn [db [_ count]]
    (assoc-in db [:service-form :count] (as-int count))))

(rf/reg-event-fx
  :purchase-service
  (fn [cofx [_]]
    {:db (assoc-in (:db cofx) [:service-form :status] :in-progress)
     :dispatch-later [{:ms 3000 :dispatch [:on-success-purchase]}]}))

(rf/reg-event-db
  :on-success-purchase
  (fn [db _]
    (assoc-in db [:service-form :status] :done)))

(rf/reg-event-db
  :select-all-profareas
  (fn [db _]
    (let [profarea-ids (into #{} (map :id (:profareas-dict db)))]
      (assoc-in db [:service-form :profarea-ids] profarea-ids))))

(rf/reg-event-db
  :select-all-areas
  (fn [db _]
    (let [area-ids (into #{} (map :id (:areas-dict db)))]
      (assoc-in db [:service-form :area-ids] area-ids))))

(rf/reg-event-db
  :unselect-all-areas
  (fn [db _]
    (assoc-in db [:service-form :area-ids] #{})))

(rf/reg-event-db
  :clear-all-profareas
  (fn [db _]
    (assoc-in db [:service-form :profarea-ids] #{})))

(rf/reg-event-db
  :update-all-areas?
  (fn [db [_ all-areas?]]
    (assoc-in db [:service-form :all-areas?] all-areas?)))

(rf/reg-event-db
  :update-all-profareas?
  (fn [db [_ all-profareas?]]
    (assoc-in db [:service-form :all-profareas?] all-profareas?)))
