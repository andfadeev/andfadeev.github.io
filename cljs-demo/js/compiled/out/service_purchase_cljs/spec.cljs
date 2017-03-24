(ns service-purchase-cljs.spec
  (:require [clojure.spec :as s]
            [clojure.string :as str]))

(s/def ::title (s/and string? #(not (str/blank? %))))
(s/def ::agreement-id pos-int?)
(s/def ::service-type-id (complement nil?))
;(s/def ::profarea-ids (s/coll-of number? :kind set?))
(s/def ::area-ids (s/coll-of number? :kind set?))
(s/def ::period nat-int?)
(s/def ::price nat-int?)
(s/def ::count nat-int?)

(s/def ::service-form (s/keys :req-un [::title
                                       ::agreement-id
                                       ::service-type-id
                                       ;::profarea-ids
                                       ::area-ids
                                       ::period
                                       ::count
                                       ::price]))