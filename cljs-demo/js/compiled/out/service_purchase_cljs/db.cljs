(ns service-purchase-cljs.db)

(def profareas-dictionary
  [{:id "Информационные технологии, интернет, телеком" :label "Информационные технологии, интернет, телеком"}
   {:id "Бухгалтерия, управленческий учет, финансы предприятия" :label "Бухгалтерия, управленческий учет, финансы предприятия"}
   {:id "Маркетинг, реклама, PR" :label "Маркетинг, реклама, PR"}
   {:id "Административный персонал" :label "Административный персонал"}
   {:id "Банки, инвестиции, лизинг" :label "Банки, инвестиции, лизинг"}
   {:id "Управление персоналом, тренинги" :label "Управление персоналом, тренинги"}
   {:id "Автомобильный бизнес" :label "Автомобильный бизнес"}
   {:id "Безопасность" :label "Безопасность"}
   {:id "Высший менеджмент" :label "Высший менеджмент"}
   {:id "Добыча сырья" :label "Добыча сырья"}
   {:id "Искусство, развлечения, масс-медиа" :label "Искусство, развлечения, масс-медиа"}
   {:id "Консультирование" :label "Консультирование"}
   {:id "Медицина, фармацевтика" :label "Медицина, фармацевтика"}
   {:id "Наука, образование" :label "Наука, образование"}
   {:id "Начало карьеры, студенты" :label "Начало карьеры, студенты"}
   {:id "Государственная служба, некоммерческие организации" :label "Государственная служба, некоммерческие организации"}
   {:id "Продажи" :label "Продажи"}
   {:id "Производство" :label "Производство"}
   {:id "Страхование" :label "Страхование"}
   {:id "Строительство, недвижимость" :label "Строительство, недвижимость"}
   {:id "Транспорт, логистика" :label "Транспорт, логистика"}
   {:id "Туризм, гостиницы, рестораны" :label "Туризм, гостиницы, рестораны"}
   {:id "Юристы" :label "Юристы"}
   {:id "Спортивные клубы, фитнес, салоны красоты" :label "Спортивные клубы, фитнес, салоны красоты"}
   {:id "Инсталляция и сервис" :label "Инсталляция и сервис"}
   {:id "Закупки" :label "Закупки"}
   {:id "Домашний персонал" :label "Домашний персонал"}
   {:id "Рабочий персонал" :label "Рабочий персонал"}])

(def fa-and-vp-group "Доступ и публикации")
(def countable-group "Разовые услуги")

(defn build-service-type [id label group countable? periodic?]
  {:id id :label label :group group :countable? countable? :periodic? periodic?})

(defn build-countable-sevice-type [id label group]
  (build-service-type id label group true false))

(defn build-periodic-sevice-type [id label group]
  (build-service-type id label group false true))

(def service-types-dictionary
  [(build-periodic-sevice-type ["FA"] "Полный доступ" fa-and-vp-group)
   (build-service-type ["FA+VPPL" "VP"] "Полный доступ с ограниченными публикациями вакансий" fa-and-vp-group true true)
   (build-periodic-sevice-type ["FA+VPP"] "Полный доступ и неограниченные публикации вакансий" fa-and-vp-group)
   (build-periodic-sevice-type ["VPP"] "Неограниченная публикация вакансий" fa-and-vp-group)
   (build-service-type ["VPPL" "VP"] "Ограниченные публикации вакансий" fa-and-vp-group true true)

   (build-countable-sevice-type ["DI" "VP"] "Публикация вакансии Стандарт" countable-group)
   (build-countable-sevice-type ["DI" "VPREM"] "Публикация вакансии Стандарт Плюс" countable-group)

   ;{:id "Списание" :label "Списание"}
   ;
   ;{:id "Презентационные страницы" :label "Презентационные страницы"}
   ;{:id "Брендированные вакансии" :label "Брендированные вакансии"}
   ;{:id "Разное" :label "Разное"}
   ;{:id "Хочу у вас работать"
   ; :label "Хочу у вас работать"
   ; :group "Разное"}
   ;{:id "Профориентация"
   ; :label "Профориентация"
   ; :group "Разное"}
   ;{:id "Яркое резюме" :label "Яркое резюме"}
   ;{:id "Автообновление" :label "Автообновление"}
   ;{:id "Рассылка в агентства" :label "Рассылка в агентства"}
   ;{:id "Составление резюме" :label "Составление резюме"}
   ;{:id "Индивидуальная консультация" :label "Индивидуальная консультация"}
   ;{:id "Карьерный вебинар" :label "Карьерный вебинар"}
   ;{:id "Успешное резюме" :label "Успешное резюме"}
   ;{:id "Быстрая вакансия" :label "Быстрая вакансия"}
   ;{:id "Реклама" :label "Реклама"}
   ;{:id "период баннеров (не работает)" :label "период баннеров (не работает)"}
   ;{:id "хх-офис" :label "хх-офис"}
   ;{:id "Доступ к HRXML" :label "Доступ к HRXML"}
   ;{:id "период рассылок (не работает)" :label "период рассылок (не работает)"}
   ;{:id "Экспресс-опрос" :label "Экспресс-опрос"}
   ;{:id "Участие в он-лайн Ярмарке" :label "Участие в он-лайн Ярмарке"}
   ;{:id "Участие в HR-бренд мероприятиях" :label "Участие в HR-бренд мероприятиях"}
   ;{:id "Исследования HR-бренда" :label "Исследования HR-бренда"}
   ;{:id "Производство брендинговых инструментов (видео, фото)" :label "Производство брендинговых инструментов (видео, фото)"}
   ;{:id "Разработки бренда (EVP)" :label "Разработки бренда (EVP)"}
   ;{:id "Маркетинговые услуги" :label "Маркетинговые услуги"}
   ;{:id "Пересылка откликов и резюме на e-mail клиента" :label "Пересылка откликов и резюме на e-mail клиента"}
   ;{:id "Актуальное" :label "Актуальное"}
   ;{:id "инсайдер" :label "инсайдер"}
   ;{:id "Конструктор страниц работодателя" :label "Конструктор страниц работодателя"}
   ;{:id "Автоответ" :label "Автоответ"}
   ;{:id "Продукты компаний альянса The Network" :label "Продукты компаний альянса The Network"}
   ;{:id "Интернет-конкурс" :label "Интернет-конкурс"}
   ;{:id "Внутренний опрос" :label "Внутренний опрос"}
   ;{:id "Опросы" :label "Опросы"}
   ;{:id "Социальные сети" :label "Социальные сети"}
   ;{:id "Мониторинг бренда работодателя в соцсетях" :label "Мониторинг бренда работодателя в соцсетях"}
   ;{:id "Зарплатные исследования" :label "Зарплатные исследования"}
   ;{:id "Выборка из отчета \"Банк данных заработных плат\"" :label "Выборка из отчета \"Банк данных заработных плат\""}
   ;{:id "Обзор заработных плат" :label "Обзор заработных плат"}
   ])

(def area-labels ["Украина"
                  "Азербайджан"
                  "Беларусь"
                  "Казахстан"
                  "Киев"
                  "Винница"
                  "Днепр (Днепропетровск)"
                  "Донецк"
                  "Житомир"
                  "Запорожье"
                  "Ивано-Франковск"
                  "Кировоград"
                  "Луганск"
                  "Луцк"
                  "Львов"
                  "Николаев"
                  "Одесса"
                  "Полтава"
                  "Ровно"
                  "Севастополь"
                  "Симферополь"
                  "Сумы"
                  "Тернополь"
                  "Ужгород"
                  "Харьков"
                  "Херсон"
                  "Хмельницкий"
                  "Черкассы"
                  "Черновцы"
                  "Чернигов"
                  "Приморский округ"
                  "Восточно-Сибирский округ"
                  "Западно-Сибирский округ"
                  "Уральский округ"
                  "Черноморско-Кавказский округ"
                  "Южный округ"
                  "Средне-Приволжский округ"
                  "Верхне-Приволжский округ"
                  "Восточно-Центральный округ"
                  "Северо-Центральный округ"
                  "Юго-Центральный округ"
                  "Северо-Западный округ"
                  "Центральный округ"
                  "Вся Россия"
                  "Остальной мир"
                  "Архангельская область, включая Ненецкий АО"
                  "Калининградская область"
                  "Республика Коми"
                  "Новгородская область"
                  "Мурманская область"
                  "Республика Карелия"
                  "Псковская область"
                  "Смоленская область"
                  "Республика Бурятия"
                  "Иркутская область"
                  "Красноярский край"
                  "Республика Тыва"
                  "Республика Саха (Якутия)"
                  "Республика Хакасия"
                  "Забайкальский край"
                  "Новосибирская область"
                  "Республика Алтай"
                  "Алтайский край"
                  "Кемеровская область"
                  "Омская область"
                  "Томская область"
                  "Свердловская область"
                  "Курганская область"
                  "Пермский край"
                  "Тюменская область, включая Ханты-Мансийский АО и Ямало-Ненецкий АО"
                  "Республика Башкортостан"
                  "Челябинская область"
                  "Республика Адыгея"
                  "Республика Дагестан"
                  "Республика Ингушетия"
                  "Краснодарский край"
                  "Кабардино-Балкарская республика"
                  "Карачаево-Черкесская Республика"
                  "Республика Северная Осетия-Алания"
                  "Ставропольский край"
                  "Чеченская республика"
                  "Астраханская область"
                  "Волгоградская область"
                  "Ростовская область"
                  "Республика Калмыкия"
                  "Республика Мордовия"
                  "Оренбургская область"
                  "Пензенская область"
                  "Самарская область"
                  "Саратовская область"
                  "Ульяновская область"
                  "Республика Марий Эл"
                  "Республика Татарстан"
                  "Удмуртская Республика"
                  "Чувашская Республика"
                  "Кировская область"
                  "Нижегородская область"
                  "Рязанская область"
                  "Владимирская область"
                  "Вологодская область"
                  "Ивановская область"
                  "Костромская область"
                  "Тверская область"
                  "Ярославская область"
                  "Белгородская область"
                  "Брянская область"
                  "Воронежская область"
                  "Калужская область"
                  "Курская область"
                  "Липецкая область"
                  "Орловская область"
                  "Тамбовская область"
                  "Тульская область"
                  "Амурская область"
                  "Еврейская АО"
                  "Камчатский край"
                  "Магаданская область"
                  "Приморский край"
                  "Сахалинская область"
                  "Хабаровский край"
                  "Чукотский АО"
                  "Кривой Рог"
                  "Мариуполь"
                  "Кременчуг"
                  "Республика Крым"
                  "Вся Россия, кроме г.Москвы и Московской области"
                  "Вся Россия, кроме Москвы и Санкт-Петербурга"
                  "Казахстан, кроме Алматы и Астана"
                  "Северо-Западный округ, кроме Санкт-Петербурга и Ленинградской области"
                  "Ленинградская область, кроме Санкт-Петербурга"
                  "Азербайджан и Кавказ"
                  "Дальневосточный федеральный округ"
                  "Сибирский федеральный округ"
                  "Уральский федеральный округ"
                  "Северо-Кавказский федеральный округ"
                  "Южный федеральный округ"
                  "Приволжский федеральный округ"
                  "Северо-Западный федеральный округ, кроме Санкт-Петербурга и области"
                  "Центральный федеральный округ, кроме Москвы и Московской области"
                  "Северо-Западный федеральный округ"
                  "Свердловская область, кроме Екатеринбурга"
                  "Вся Россия, кроме Москвы, Санкт-Петербурга и их областей"
                  "Казахстан и Центральная Азия, кроме Астаны и Алматы"
                  "Москва и Московская область"
                  "Санкт-Петербург и Ленинградская область"
                  "Вся Россия"
                  "Остальной мир"
                  "Московская область, кроме Москвы"
                  "Казахстан и Центральная Азия"
                  "Ханты-Мансийский АО"
                  "Ямало-Ненецкий АО"
                  "Ненецкий АО"
                  "Республика Татарстан, кроме Казани"
                  "Тверская область, кроме Твери"
                  "Владимирская область, кроме Владимира"
                  "Владивосток"
                  "Хабаровск"
                  "Тольятти"
                  "Череповец"
                  "Новокузнецк"
                  "Кыргызстан"
                  ])

(def area-ids [5
               9
               16
               40
               115
               116
               117
               118
               119
               120
               121
               122
               123
               124
               125
               126
               127
               128
               129
               130
               131
               132
               133
               134
               135
               136
               137
               138
               139
               140
               220
               221
               222
               223
               224
               225
               226
               227
               228
               229
               230
               231
               232
               233
               234
               1008
               1020
               1041
               1051
               1061
               1077
               1090
               1103
               1118
               1124
               1146
               1169
               1174
               1187
               1192
               1202
               1216
               1217
               1229
               1249
               1255
               1261
               1308
               1317
               1342
               1347
               1384
               1422
               1424
               1434
               1438
               1463
               1471
               1475
               1481
               1500
               1505
               1511
               1530
               1553
               1556
               1563
               1575
               1586
               1596
               1614
               1620
               1624
               1646
               1652
               1661
               1679
               1704
               1716
               1739
               1754
               1771
               1783
               1806
               1817
               1828
               1844
               1859
               1880
               1890
               1898
               1905
               1913
               1932
               1941
               1943
               1946
               1948
               1960
               1975
               1982
               2101
               2104
               2107
               2114
               1000001
               1000002
               1000003
               1000004
               1000005
               1000009
               1000220
               1000221
               1000223
               1000224
               1000225
               1000226
               1000231
               1000232
               1000233
               1000234
               2000002
               2000003
               2000231
               2000232
               2000233
               2000234
               2000235
               10000040
               10000101
               10000102
               10000103
               10000104
               10000105
               10000106
               10000107
               10000108
               10000109
               10000110
               10000111
               10000112
               ])

(def areas-dictionary (sort-by :label (map (fn [id label] {:id id :label label}) area-ids area-labels)))

(def default-db
  {:agreements [{:id 1 :label "Договор единый pdf (Акционерное общество \"Федеральная пассажирская компания\" (АО \"ФПК\"))"}
                {:id 2 :label "Счёт-оферта на оказание услуг 2 (Акционерное общество \"Федеральная пассажирская компания\" (АО \"ФПК\"))"}]
   :service-type-dict service-types-dictionary
   :profareas-dict profareas-dictionary
   :areas-dict areas-dictionary
   :service-form {:status nil
                  :title ""
                  :create-acts? false
                  :agreement-id nil
                  :service-type-id nil
                  :all-profareas? true
                  :profarea-ids #{}
                  :all-areas? true
                  :area-ids #{}
                  :price 0
                  :count 0
                  :period 0}})
