(ns service-purchase-cljs.views
  (:require [re-frame.core :as rf]
            [re-com.core :as rec]
            [service-purchase-cljs.view.account :as account-view]))

;; service purchase
(defn service-purchase-title []
  (fn []
    [rec/title
     :label "Подключение услуги"
     :level :level1]))

(defn link-to-about-page []
  [rec/hyperlink-href
   :label "go to About Page"
   :href "#/about"])

(def label-column-width "110px")

(defn service-period-input []
  [rec/h-box
   :align :center
   :gap "5px"
   :children [[rec/box
               :size label-column-width
               :child "Период (дн.)"]
              [rec/box
               :child [rec/input-text
                       :disabled? @(rf/subscribe [:form-disabled?])
                       :model (str @(rf/subscribe [:period]))
                       :on-change #(rf/dispatch [:update-service-period %])]]
              [rec/checkbox
               :model false
               :disabled? @(rf/subscribe [:form-disabled?])
               :label "автоматически сдвигать периодичную услугу, если похожая уже действует (паровоз включен)"
               :on-change #(rf/dispatch [:update-prolongate? %])]]])

(defn service-text-input [value label event]
  [rec/h-box
   :align :baseline
   :gap "5px"
   :children [[rec/box
               :size label-column-width
               :child label]
              [rec/box
               :child [rec/input-text
                       :model (str (:value value))
                       :disabled? @(rf/subscribe [:form-disabled?])
                       :status (when-not (:valid? value) :error)
                       :on-change #(rf/dispatch [event %])]]]])

(defn service-count-input []
  (service-text-input @(rf/subscribe [:count]) "Кол-во (шт.)" :update-service-count))

(defn service-price-input []
  [rec/h-box
   :align :baseline
   :gap "5px"
   :children [[rec/box
               :size label-column-width
               :child "Цена (руб.)"]
              [rec/box
               :child [rec/input-text
                       :disabled? @(rf/subscribe [:form-disabled?])
                       :status (when-not (:valid? @(rf/subscribe [:price])) :error)
                       :model (str (:price @(rf/subscribe [:price])))
                       :on-change #(rf/dispatch [:update-service-price %])]]]])

(defn areas-selection-list [choices model disabled?]
  [rec/selection-list
   :width "550px"
   :max-height "150px"
   :disabled? disabled?
   :choices choices
   :model model
   :on-change #(rf/dispatch [:update-area-ids %])])

(defn areas-select-component []
  [rec/h-box
   ;:align :center
   :gap "5px"
   :children [[rec/box
               :size "110px"
               :child "Регионы"]
              [rec/box
               :size "150px"
               :child [rec/checkbox
                       :model @(rf/subscribe [:all-areas?])
                       :disabled? @(rf/subscribe [:form-disabled?])
                       :label "все регионы"
                       :on-change #(rf/dispatch [:update-all-areas? %])]]
              (when-not @(rf/subscribe [:all-areas?])
                [rec/box
                 :child [areas-selection-list
                         @(rf/subscribe [:areas-dict])
                         @(rf/subscribe [:area-ids])
                         @(rf/subscribe [:form-disabled?])]])
              [rec/gap :size "5px"]
              (when-not @(rf/subscribe [:all-areas?])
                [rec/box
                 :child [rec/v-box
                         :children [
                                    [rec/hyperlink
                                     :label "выбрать все"
                                     :disabled? @(rf/subscribe [:form-disabled?])
                                     :on-click #(rf/dispatch [:select-all-areas])]
                                    [rec/hyperlink
                                     :label "очистить"
                                     :disabled? @(rf/subscribe [:form-disabled?])
                                     :on-click #(rf/dispatch [:unselect-all-areas])]]]])]])

(defn- profareas-select-component []
  [rec/h-box
   ;:align :center
   :gap "5px"
   :children [[rec/box
               :size label-column-width
               :child "Профобласти"]
              [rec/box
               :size "150px"
               :child [rec/checkbox
                       :model @(rf/subscribe [:all-profareas?])
                       :disabled? @(rf/subscribe [:form-disabled?])
                       :label "все профобласти"
                       :on-change #(rf/dispatch [:update-all-profareas? %])]]
              (when-not @(rf/subscribe [:all-profareas?])
                [rec/box
                 :child [rec/selection-list
                         :width "550px"
                         :max-height "150px"
                         :disabled? @(rf/subscribe [:form-disabled?])
                         :choices @(rf/subscribe [:profareas-dict])
                         :model @(rf/subscribe [:profarea-ids])
                         :on-change #(rf/dispatch [:update-profarea-ids %])]])
              [rec/gap :size "5px"]
              (when-not @(rf/subscribe [:all-profareas?])
                [rec/box
                 :child [rec/v-box
                         :children [[rec/hyperlink
                                     :on-click #(rf/dispatch [:select-all-profareas])
                                     :disabled? @(rf/subscribe [:form-disabled?])
                                     :label "выбрать все"]
                                    [rec/hyperlink
                                     :on-click #(rf/dispatch [:clear-all-profareas])
                                     :disabled? @(rf/subscribe [:form-disabled?])
                                     :label "очистить"]]]])]])

(defn- in-progress-component []
  [rec/h-box
   :align :center
   :children [[rec/throbber]
              [rec/label
               :label "Поключение услуги..."]]])

(defn- success-alert-component []
  [rec/alert-box
   :body [:div
          "Услуга успешно подключена, перейти на страницу "
          [rec/hyperlink-href :label "бюджет счета" :href "/#/account/100"]
          " или "
          [rec/hyperlink-href :label "подключение услуги" :href "/#/service-purchase"]]])

(defn- purchase-button []
  [rec/button
   :label "Подключить услугу"
   :disabled? (not @(rf/subscribe [:is-valid-form?]))
   :on-click #(rf/dispatch [:purchase-service])])

(defn service-purchase-panel []
  (let [form-disabled? (rf/subscribe [:form-disabled?])
        create-acts? (rf/subscribe [:create-acts?])
        service-types-dict (rf/subscribe [:service-type-dict])
        service-type (rf/subscribe [:service-type])]
    (fn []
      [rec/v-box
       :gap "1em"
       :children [[service-purchase-title]
                  [rec/h-box
                   :align :baseline
                   :gap "5px"
                   :children [[rec/box
                               :size "110px"
                               :child "Название"]
                              [rec/box
                               :size "auto"
                               :child [rec/input-text
                                       :disabled? form-disabled?
                                       ;:status (when-not (:valid? @(rf/subscribe [:service-title])) :error)
                                       :model (:value @(rf/subscribe [:service-title]))
                                       :placeholder "Введите название услуги (отображается в актах)"
                                       :width "100%"
                                       :on-change #(rf/dispatch [:update-service-title %])]]
                              [rec/box
                               :child [rec/checkbox
                                       :model @create-acts?
                                       :disabled? @(rf/subscribe [:form-disabled?])
                                       :label "не создавать акты (не создаются, если отмечена)"
                                       :on-change #(rf/dispatch [:update-create-acts? %])]]]]
                  [rec/h-box
                   :align :baseline
                   :gap "5px"
                   :children [[rec/box
                               :size "110px"
                               :child "Договор"]
                              [rec/box
                               :size "auto"
                               :child [rec/single-dropdown
                                       :disabled? form-disabled?
                                       :choices (rf/subscribe [:agreements])
                                       :model (:value @(rf/subscribe [:agreement-id]))
                                       ;:status (when-not (:valid? @(rf/subscribe [:agreement-id])) :error)
                                       :placeholder "Выбрать договор"
                                       :on-change #(rf/dispatch [:update-agreement-id %])]]]]
                  [rec/h-box
                   :align :baseline
                   :gap "5px"
                   :children [[rec/box
                               :size "110px"
                               :child "Тип услуги"]
                              [rec/box
                               :size "auto"
                               :child [rec/single-dropdown
                                       :disabled? form-disabled?
                                       :choices @service-types-dict
                                       :filter-box? true
                                       :model (:id @service-type)
                                       :placeholder "Выбрать тип услуги"
                                       :on-change #(rf/dispatch [:update-service-type-id %])]]]]
                  (when (:periodic? @service-type)
                    [areas-select-component])
                  (when (:periodic? @service-type)
                    [profareas-select-component])
                  (when (:periodic? @service-type)
                    [service-period-input])
                  (when (:countable? @service-type)
                    [service-count-input])
                  (when @service-type
                    [service-price-input])
                  (case @(rf/subscribe [:status])
                    :in-progress [in-progress-component]
                    :done [success-alert-component]
                    [purchase-button])]])))


;; about

(defn about-title []
  [rec/title
   :label "This is the About Page."
   :level :level1])

(defn link-to-home-page []
  [rec/hyperlink-href
   :label "go to Home Page"
   :href "#/"])

(defn about-panel []
  [rec/v-box
   :gap "1em"
   :children [[about-title] [link-to-home-page]]])

(defn account-page [params]
  [rec/v-box
   :children [[account-view/account-page-title]
              [rec/gap :size "40px"]
              [account-view/table-demo2]
              [rec/gap :size "40px"]
              [rec/line]
              ;[account-view/row-button-demo]
              [account-view/table-demo]
              ]]
  )

;; main

(defn- panels [panel-name params]
  (case panel-name
    :service-purchase [service-purchase-panel]
    :about-panel [about-panel]
    :account-page [account-page params]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (rf/subscribe [:active-panel])
        panel-params (rf/subscribe [:panel-params])]
    (fn []
      [:div {:style {:padding-left "100px"
                     :padding-right "100px"}}
       [rec/v-box
        :height "100%"
        :children [[rec/h-box
                    :gap "10px"
                    :children [[rec/hyperlink-href
                                :label "На главную"
                                :href "#/"]
                               [rec/hyperlink-href
                                :label "Бюджет/счета"
                                :href "#/account/101"]
                               [rec/hyperlink-href
                                :label "Подключить услугу"
                                :href "#/service-purchase"]]]
                   [panels @active-panel @panel-params]]]])))
