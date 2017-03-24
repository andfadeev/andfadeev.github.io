(ns service-purchase-cljs.view.account
  (:require [re-com.core
             :refer [h-box v-box title label gap row-button button line datepicker-dropdown
                     radio-button p popover-content-wrapper popover-anchor-wrapper hyperlink]
             :refer-macros [handler-fn]]
            [re-com.buttons :refer [row-button-args-desc]]
            [re-com.datepicker :refer [iso8601->date datepicker-dropdown-args-desc]]
            [re-com.util :refer [deref-or-value enumerate]]
            [reagent.core :as r]))

(defn account-page-title []
  [title
   :label "Бюджет/счета"
   :level :level1])

(defn data-row
  [row first? last? col-widths mouse-over click-msg]
  (let [mouse-over-row? (identical? @mouse-over row)]
    [h-box
     :class    "rc-div-table-row"
     :attr     {:on-mouse-over (handler-fn (reset! mouse-over row))
                :on-mouse-out  (handler-fn (reset! mouse-over nil))}
     :children [[h-box
                 :width (:sort col-widths)
                 :gap "2px"
                 :align :center
                 :children [[row-button
                             :md-icon-name    "zmdi zmdi-arrow-back zmdi-hc-rotate-90"
                             :mouse-over-row? mouse-over-row?
                             :tooltip         "Move this line up"
                             :disabled?       (and first? mouse-over-row?)
                             :on-click        #(reset! click-msg (str "move row " (:id row) " up"))]
                            [row-button
                             :md-icon-name    "zmdi zmdi-arrow-forward zmdi-hc-rotate-90"
                             :mouse-over-row? mouse-over-row?
                             :tooltip         "Move this line down"
                             :disabled?       (and last? mouse-over-row?)
                             :on-click        #(reset! click-msg (str "move row " (:id row) " down"))]]]
                [label :label (:name row) :width (:name col-widths)]
                [label :label (:from row) :width (:from col-widths)]
                [label :label (:to   row) :width (:to   col-widths)]
                [h-box
                 :gap      "2px"
                 :width    (:actions col-widths)
                 :align    :center
                 :children [[row-button
                             :md-icon-name    "zmdi zmdi-copy"
                             :mouse-over-row? mouse-over-row?
                             :tooltip         "Copy this line"
                             :on-click        #(reset! click-msg (str "copy row " (:id row)))]
                            [row-button
                             :md-icon-name    "zmdi zmdi-edit"
                             :mouse-over-row? mouse-over-row?
                             :tooltip         "Edit this line"
                             :on-click        #(reset! click-msg (str "edit row " (:id row)))]
                            [row-button
                             :md-icon-name    "zmdi zmdi-delete"
                             :mouse-over-row? mouse-over-row?
                             :tooltip         "Delete this line"
                             :on-click        #(reset! click-msg (str "delete row " (:id row)))]]]]]))

(defn data-table
  [rows col-widths]
  (let [large-font (r/atom false)
        mouse-over (r/atom nil)
        click-msg  (r/atom "")]
    (fn []
      [v-box
       :align    :start
       :gap      "10px"
       :children [[v-box
                   :class    "rc-div-table"
                   :style    {:font-size (when @large-font "24px")}
                   :children [[h-box
                               :class    "rc-div-table-header"
                               :children [[label :label "Дата создания услуги"    :width (:sort    col-widths)]
                                          [label :label "Дата активации услуги"    :width (:name    col-widths)]
                                          [label :label "Дата сгорания услуги"    :width (:from    col-widths)]
                                          [label :label "Стоимость"      :width (:to      col-widths)]
                                          [label :label "" :width (:actions col-widths)]]]
                              (for [[_ row first? last?] (enumerate (sort-by :sort (vals rows)))]
                                ^{:key (:id row)} [data-row row first? last? col-widths mouse-over click-msg])]]
                  [h-box
                   :gap "5px"
                   :width "300px"
                   :children [[:span "clicked: "]
                              [:span.bold (str @click-msg)]]]]])))

(defn popover-body
  [dialog-data on-change & {:keys [showing-injected? position-injected]}]  ;; v0.10.0 breaking change fix (was [showing? position dialog-data on-change])
  (let [dialog-data   (r/atom (deref-or-value dialog-data))
        submit-dialog (fn [new-dialog-data]
                        (reset! showing-injected? false)
                        (on-change new-dialog-data))
        cancel-dialog #(reset! showing-injected? false)
        show-tooltip? (r/atom (= (:tooltip-state @dialog-data) "2"))]
    (fn []
      [popover-content-wrapper
       :showing-injected? showing-injected?
       :position-injected position-injected
       :on-cancel         cancel-dialog
       :width            "400px"
       :backdrop-opacity 0.3
       :title            "Форсированнная отмена услуги"
       :body             [v-box
                          :children [[label :label "Пакет услуг уже начал оказываться клиенту. Вы уверены что хотите отменить услугу?"]
                                     [label
                                      :label ""]
                                     [gap :size "15px"]
                                     [h-box
                                      :gap "5px"
                                      :children [[button
                                                  :label    "Да"
                                                  :on-click #(submit-dialog @dialog-data)
                                                  :class    "btn-primary"]
                                                 [button
                                                  :label    "нет"
                                                  :on-click cancel-dialog]
                                                 ;[popover-anchor-wrapper
                                                 ; :showing? show-tooltip?
                                                 ; :position :right-below
                                                 ; :anchor   [button
                                                 ;            :label    [:span [:i {:class "zmdi zmdi-close" }] " Cancel"]
                                                 ;            :on-click cancel-dialog]
                                                 ; :popover  [popover-content-wrapper ;; NOTE: didn't specify on-cancel here (handled properly)
                                                 ;            :width         "250px"
                                                 ;            :title         "This is the cancel button"
                                                 ;            :close-button? false
                                                 ;            :body          "You can even have a popover over a popover!"]]
                                                 ]]]]])))


(defn popover-dialog-demo
  []
  (let [showing?    (r/atom false)
        dialog-data (r/atom {:tooltip-state "2"})
        on-change   (fn [new-dialog-data]
                      (reset! dialog-data new-dialog-data))]
    (fn []
      [popover-anchor-wrapper
       :showing? showing?
       :position :left-center
       :anchor   [row-button
                  :md-icon-name "zmdi zmdi-delete"
                  :mouse-over-row? true
                  :tooltip "форсированная отмена"
                  :on-click #(reset! showing? true)]
       :popover  [popover-body dialog-data on-change]])))


(defn some-row [service-purchase-row]
  [:tr
   [:td (:creation-time service-purchase-row)]
   [:td (:activation-time service-purchase-row)]
   [:td (:expiration-time service-purchase-row)]
   [:td (:price service-purchase-row)]
   [:td (:manager service-purchase-row)]
   [:td {:style {:max-width "350px"}} (:title service-purchase-row)]
   [:td (for [service (:services service-purchase-row)]
          [:div service])]
   [:td ""]
   [:td
    [h-box
     :gap "2px"
     :align :center
     :children [[row-button
                 :md-icon-name "zmdi zmdi-block"
                 :mouse-over-row? true
                 :tooltip "отменить"
                 :on-click #(js/alert "clicked" %)]
                [popover-dialog-demo]
                [row-button
                 :md-icon-name "zmdi zmdi-close-circle-o"
                 :mouse-over-row? true
                 :tooltip "прервать"
                 :on-click #(js/alert "clicked" %)]
                [row-button
                 :md-icon-name "zmdi zmdi-file-plus"
                 :mouse-over-row? true
                 :tooltip "создать акты"
                 :on-click #(js/alert "clicked" %)]

                ]]]


   ])

(defn table-demo2 []
  (let [service-purchase-history (r/atom [{:creation-time "02.03.2017 10:28"
                                           :activation-time "02.03.2017 10:28"
                                           :expiration-time "02.03.2017 10:28"
                                           :price "1500 руб."
                                           :manager "Солнышко Admin Отчество"
                                           :title "Бесплатные вакансии в регионах: 1"
                                           :services ["RFPN=1"]}
                                          {:creation-time "02.03.2017 10:28"
                                           :activation-time "02.03.2017 10:28"
                                           :expiration-time "02.03.2017 10:28"
                                           :price "1700 руб."
                                           :manager "Солнышко Admin Отчество"
                                           :title "Бесплатные вакансии в регионах: 1"
                                           :services ["RFPN=1"]
                                           }
                                          {:creation-time "02.03.2017 14:49"
                                           :activation-time "02.03.2017 14:49"
                                           :expiration-time "02.03.2017 10:28"
                                           :price "44100 руб."
                                           :manager "Lndfdhbgducrlci Fndfdhbflepnbqu Mndfdhbhykevngd"
                                           :title "Полный доступ на 1 день, Публикация вакансии Стандарт: 3, Публикация вакансии Стандарт плюс: 3, Публикация вакансии Премиум: 3, Анонимные вакансии: 3"
                                           :services ["FA=1" "VP=3" "VPREM=3" "AP=3" "RENEWAL_VP=3"]
                                           }])
        page-size (r/atom 3)
        current-page (r/atom 0)
        ]
    (fn []
      [:div
       [title
        :label "История пополнения"
        :level :level2]
       [:table.table.table-hover
        [:thead
         [:tr
          [:th {:style {:width "200px"}}
           [h-box
            :align :center
            :children [[label :label "Дата создания услуги"]
                       [gap :size "4px"]
                       [row-button
                        :md-icon-name "zmdi zmdi-arrow-back zmdi-hc-rotate-90"
                        :mouse-over-row? true
                        ;:tooltip "Move this line up"
                        :on-click #(swap! service-purchase-history (fn [col] (reverse (sort-by :creation-time col))))]
                       [row-button
                        :md-icon-name "zmdi zmdi-arrow-forward zmdi-hc-rotate-90"
                        :mouse-over-row? true
                        ;:tooltip "Move this line down"
                        :on-click #(swap! service-purchase-history (fn [col] (sort-by :creation-time col)))]]]]
          [:th "Дата активации услуги"]
          [:th "Дата сгорания услуги"]
          [:th [h-box
                :align :center
                :children [[label :label "Стоимость"]
                           [gap :size "4px"]
                           [row-button
                            :md-icon-name "zmdi zmdi-arrow-back zmdi-hc-rotate-90"
                            :mouse-over-row? true
                            ;:tooltip "Move this line up"
                            :on-click #(swap! service-purchase-history (fn [col] (reverse (sort-by :price col))))]
                           [row-button
                            :md-icon-name "zmdi zmdi-arrow-forward zmdi-hc-rotate-90"
                            :mouse-over-row? true
                            ;:tooltip "Move this line down"
                            :on-click #(swap! service-purchase-history (fn [col] (sort-by :price col)))]]]
           ]
          [:th "Автор"]
          [:th "Название"]
          [:th "Состав"]
          [:th "Код mds"]
          [:th ""]
          ]]
        [:tbody
         (for [service-purchase-row (take @page-size (drop (* @current-page @page-size) @service-purchase-history))]
           [some-row service-purchase-row])


         ]]

       (let [pages (range 1 (inc (js/Math.round (/ (count @service-purchase-history) @page-size))))]
         (when (> (count pages) 1)
           [:nav
            [:ul.pagination
             (for [page-idx pages]
               [:li {:class (when (= (dec page-idx) @current-page) "active")}
                [:a {:style {:cursor "pointer"}
                     :on-click (fn [e]
                                 (.preventDefault e)
                                 (reset! current-page (dec page-idx)))}
                 page-idx]

                ])

             ]]))

       ])))

(defn table-demo []
  (let [service-purchase-history (r/atom [{:creation-time "02.03.2017 10:28"
                                           :activation-time "02.03.2017 10:28"
                                           :expiration-time "02.03.2017 10:28"
                                           :price "1500 руб."
                                           :manager "Солнышко Admin Отчество"
                                           :title "Бесплатные вакансии в регионах: 1"
                                           :services ["RFPN=1"]}
                                          {:creation-time "02.03.2017 10:28"
                                           :activation-time "02.03.2017 10:28"
                                           :expiration-time "02.03.2017 10:28"
                                           :price "1700 руб."
                                           :manager "Солнышко Admin Отчество"
                                           :title "Бесплатные вакансии в регионах: 1"
                                           :services ["RFPN=1"]}
                                          {:creation-time "02.03.2017 14:49"
                                           :activation-time "02.03.2017 14:49"
                                           :expiration-time "02.03.2017 10:28"
                                           :price "44100 руб."
                                           :manager "Lndfdhbgducrlci Fndfdhbflepnbqu Mndfdhbhykevngd"
                                           :title "Полный доступ на 1 день, Публикация вакансии Стандарт: 3, Публикация вакансии Стандарт плюс: 3, Публикация вакансии Премиум: 3, Анонимные вакансии: 3"
                                           :services ["FA=1" "VP=3" "VPREM=3" "AP=3" "RENEWAL_VP=3"]}])
        sort-info (r/atom [:creation-time :desc])
        page-size (r/atom 2)
        current-page (r/atom 0)]
    (fn []
      [:div
       [title
        :label "История расходования"
        :level :level2]
       [:table.table.table-hover
        [:thead
         [:tr
          [:th {:style {:width "200px"}}
           [h-box
            :align :center
            :children [[label :label "Дата создания услуги"]
                       [gap :size "4px"]
                       [row-button
                        :md-icon-name "zmdi zmdi-arrow-back zmdi-hc-rotate-90"
                        :mouse-over-row? true
                        ;:tooltip "Move this line up"
                        :on-click #(swap! service-purchase-history (fn [col] (reverse (sort-by :creation-time col))))]
                       [row-button
                        :md-icon-name "zmdi zmdi-arrow-forward zmdi-hc-rotate-90"
                        :mouse-over-row? true
                        ;:tooltip "Move this line down"
                        :on-click #(swap! service-purchase-history (fn [col] (sort-by :creation-time col)))]]]]
          [:th "Дата активации услуги"]
          [:th "Дата сгорания услуги"]
          [:th [h-box
                :align :center
                :children [[label :label "Стоимость"
                            ]
                           [:i {:class "zmdi zmdi-hc-fw-rc zmdi-arrow-back zmdi-hc-rotate-90"}]
                           [gap :size "4px"]
                           (let [[sort-col sort-order] @sort-info]
                             (when (= sort-col :price)
                               (if (= sort-order :desc)
                                 [:i {:class (str "zmdi zmdi-hc-fw-rc zmdi zmdi-arrow-back zmdi-hc-rotate-90")}]
                                 [:i {:class (str "zmdi zmdi-hc-fw-rc zmdi zmdi-arrow-back")}]
                                 )
                               )
                             )

                           [row-button
                            :md-icon-name "zmdi zmdi-arrow-forward zmdi-hc-rotate-90"
                            :mouse-over-row? true
                            ;:tooltip "Move this line down"
                            :on-click #(swap! service-purchase-history (fn [col] (sort-by :price col)))]]]
           ]
          [:th "Автор"]
          [:th "Название"]
          [:th "Состав"]
          [:th "Код mds"]
          [:th ""]
          ]]
        [:tbody
         (for [service-purchase-row (take @page-size (drop (* @current-page @page-size) @service-purchase-history))]
           [some-row service-purchase-row])


         ]]

       [:nav
        [:ul.pagination
         (for [page-idx (range 1 (inc (js/Math.round (/ (count @service-purchase-history) @page-size))))]
           [:li {:class (when (= (dec page-idx) @current-page) "active")}
            [:a {:style {:cursor "pointer"}
                 :on-click (fn [e]
                             (.preventDefault e)
                             (reset! current-page (dec page-idx)))}
             page-idx]

            ])

         ]]

       ])))

;[row-button
; :md-icon-name "zmdi zmdi-arrow-back zmdi-hc-rotate-90"
; :mouse-over-row? true
; ;:tooltip "Move this line up"
; :on-click #(swap! service-purchase-history (fn [col] (reverse (sort-by :price col))))]

;[:tr
; [:td "02.03.2017 10:28"]
; [:td "02.03.2017 10:28"]
; [:td [datepicker-dropdown
;       :model (iso8601->date "20140914")
;       :show-today? true
;       :show-weeks? false
;       :start-of-week 0
;       :format "dd MMM, yyyy"
;       :on-change #(js/console.log %)]]
; [:td "0 руб."]
; [:td "Солнышко Admin Отчество"]
; [:td "Бесплатные вакансии в регионах: 1"]
; [:td "RFPN=1"]
; [:td ""]
; [:td
;  [h-box
;   :gap "2px"
;   :align :center
;   :children [[row-button
;               :md-icon-name "zmdi zmdi-block"
;               :mouse-over-row? true
;               :tooltip "отменить"
;               :on-click #(js/alert "clicked" %)]
;              [popover-dialog-demo]
;              [row-button
;               :md-icon-name "zmdi zmdi-close-circle-o"
;               :mouse-over-row? true
;               :tooltip "прервать"
;               :on-click #(js/alert "clicked" %)]
;              [row-button
;               :md-icon-name "zmdi zmdi-file-plus"
;               :mouse-over-row? true
;               :tooltip "создать акты"
;               :on-click #(js/alert "clicked" %)]
;
;              ]]]
;
; ]

(defn row-button-demo
  []
  (let [col-widths {:sort "10em" :name "auto" :from "auto" :to "4em" :actions "4.5em"}
        rows       {"1" {:id "1" :sort "01-01-2017 10:59" :name "01-01-2017 10:59" :from "18:00" :to "22:30"}
                    "2" {:id "2" :sort "01-01-2017 10:59" :name "01-01-2017 10:59" :from "18:00" :to "22:30"}
                    ;"2" {:id "2" :sort 1 :name "Time range 2 with some extra text appended to the end." :from "18:00" :to "22:30"}
                    "3" {:id "3" :sort "01-01-2017 10:59" :name "Time range 3" :from "06:00" :to "18:00"}}]
    (fn []
      [v-box
       :size     "auto"
       :gap      "10px"
       :children [[h-box
                   :gap      "100px"
                   :children [
                              [v-box
                               :gap      "10px"
                               :children [[:div "Demo"]
                                          [v-box
                                           :gap "20px"
                                           :children [[data-table rows col-widths]
                                                      #_[gap :size "40px"]
                                                      #_[line]
                                                      #_[title :level :level3 :label "Row Button States"]
                                                      #_[:p "Row buttons have three distinct states."]
                                                      #_[example-icons selected-icon]
                                                      #_[v-box
                                                         :gap      "8px"
                                                         :children [[h-box
                                                                     :gap      "2px"
                                                                     :align    :center
                                                                     :children [[label :label "States: ["]
                                                                                [row-button
                                                                                 :md-icon-name    @selected-icon
                                                                                 :mouse-over-row? false
                                                                                 :tooltip         ":mouse-over-row? set to false (invisible)"
                                                                                 :on-click        #()]
                                                                                [row-button
                                                                                 :md-icon-name    @selected-icon
                                                                                 :mouse-over-row? true
                                                                                 :tooltip         ":mouse-over-row? set to true (semi-visible)"
                                                                                 :on-click        #()]
                                                                                [row-button
                                                                                 :md-icon-name    @selected-icon
                                                                                 :tooltip         ":disabled? set to true"
                                                                                 :disabled?       true
                                                                                 :on-click        #()]
                                                                                [label :label "]"]]]]]
                                                      ]]]]]]]])))
