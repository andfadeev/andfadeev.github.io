;; clojure syntax

;; lisp
(+ 1 2)

;; high order funcions
(fn [x] (* x x))

;; global bindings
(def v 10)

;; local bindings
(let [v 11]
  v)
(= v 10)

;; function with name
(def square (fn [x] (* x x)))

(square v)

;; more convenient
(defn sum-of-squares "Returns a*a + b*b" [a b] (+ (square a) (square b)))

(sum-of-squares 2 3)

(doc sum-of-squares)

;; Types
(def types [123 123123123123123112323 1.123 1.123M 22/7 "string" \f true :key nil #"\d+"])

(require 'clojure.pprint)
(pprint (map (fn [t] {:value t :type (type t)}) types))

;; ratios
(/ 3 9)

(* 22/7 7 1/99)

;; Data structures

;; vector
[1 2 3]

;; list
'(1 2 3)
(list 1 2 3 4)

;; map
{:name "Andrey" :age 25}

;; set
#{1 2 4}

;; Structures
(def structures [[1 2 3] (list 1 2 3 4) {:name "Andrey" :age 25} #{1 2 4}])

(pprint (map (fn [t] {:value t :type (type t)}) structures))

;; Everything nests

;; Seq abstraction
(seq [1 2 3])
(seq [])
(seq nil)

;; some examples
(drop 2 [1 2 3 4 5])
(take 9 (cycle [1 2 3 4]))
(interleave [:a :b :c :d :e] [1 2 3 4 5])
(partition 3 [1 2 3 4 5 6 7 8 9])
(map vector [:a :b :c :d :e] [1 2 3 4 5])
(apply str (interpose \, "asdf"))
(reduce + (range 100))

;; factorial?
(apply * (range 1 100))

;; Maps and Sets
(def m {:a 1 :b 2 :c 3})
(m :b)
(:b m)
(keys m)
(assoc m :d 4 :c 42)
(merge-with + m {:a 2 :b 3})

;; equality
(= 1 1)
(= [] [])
(= [1 2 3] [1 3 2])
;; immutable, equality by value
(= [1 2 3] [1 2 3])
(identical? [1 2 3] [1 2 3])
(identical? :key :key)
(identical? "qwe" "qwe")

(= '(1 2 3) [1 2 3])

(= {:q 1 :w 2} {:w 2 :q 1})

;; complex keys
(def cm {[1 2] "val1" [2 1] "val2"})
(cm [1 2])
(get cm [2 1])

;; reader
(read-string "(list 1 2 3 v)")
(type (read-string "(list 1 2 3 v)"))
;; eval
(eval (read-string "(list 1 2 3 (+ 1 3))"))

;; basic macros
;; easy and useless example
(require '(clojure [string :as str]
                   [walk :as walk]))

(defmacro reverse-it [form]
  (walk/postwalk #(if (symbol? %)
                    (symbol (str/reverse (name %)))
                    %)
                 form))

(reverse-it (nltnirp "foo"))

(reverse-it
 (qesod [gra (egnar 5)]
        (nltnirp (cni gra))))

;; a lot of core clojure - macros!
(when true :ok)
(macroexpand '(when true :ok))
(or 1 2)

;; foreach
(defmacro foreach [[sym coll] & body]
  `(loop [coll# ~coll]
     (when-let [[~sym & xs#] (seq coll#)]
       ~@body
       (recur xs#))))
;; usage
(foreach [x [1 2 3]]
         (println x))


;; concurrency basics
;; threadsafe counter
(def counter (atom 0))
(reset! counter 0)

(doseq [_ (range 100)]
  (future (doseq [_ (range 1000)] (swap! counter inc))))

(deref counter)

;; stm


