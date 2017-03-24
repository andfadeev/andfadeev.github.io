(ns service-purchase-cljs.spec-test
  (:require                                                 ;[clojure.test.check.generators]
            [clojure.spec :as s]))

(s/def ::int integer?)

(s/def ::even-int (s/and ::int even?))

(s/valid? ::even-int 2)

(s/valid? ::int "asd")

(s/def ::service-type-dict string?)
(s/def ::profareas-dict string?)

(s/def ::app-db (s/keys :req [::service-type-dict
                              ::profareas-dict]))

(s/valid? ::app-db {::service-type-dict "1"
                    ::profareas-dict 1})

(s/def ::title string?)
(s/def ::create-acts? boolean?)
(s/def ::service-form (s/keys :req [::title
                                    ::create-acts?]))

(s/valid? ::service-form {::title "adsf"
                          ::create-acts? true})

(s/conform ::service-form {::title "adsf"
                           ::create-acts? "true"} )

(s/exercise ::app-db)

;{:service-type-dict service-types-dictionary
; :profareas-dict profareas-dictionary
; :service-form {:title ""
;                :create-acts? false
;                :agreement-id nil
;                :service-type-id nil
;                :profarea-ids #{}
;                :area-ids #{}
;                :params {:price 0
;                         :count 0
;                         :period 0}}}