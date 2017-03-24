(ns figwheel.connect.dev (:require [service-purchase-cljs.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/service-purchase-cljs.core.mount-root (apply js/service-purchase-cljs.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'service-purchase-cljs.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

