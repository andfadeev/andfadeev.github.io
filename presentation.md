====================================================
Clojure
====================================================

Что особенного в clojure?

1. Clojure это современный диалект лиспа
   1. Джон Маккарти
      - выдающийся американский информатик
      - автор термина "искусственный интелект"
      - в 1958 году изобрел язык lisp
      - основоположник функционального программирования

2. Особенности lisp
      - first class functions
      - garbage collection
      - dynamic typing
      - homoiconicity
      - macros
      - simple syntax

2. Functional programming in clojure
   1. Главная особенность ФП - это подход к изменяемому состоянию
   2. Императивная парадигма поощряет изменяемое состояние, используем когда удобно
   3. Функциональная парадигма: максимально избегаем изменяемого состояния
   4. Ссылочная прозрачность (referential transparency)
      - возможность заменить выражение на его результат без изменения поведения программы
   5. Чистые функции: без побочных эффектов, легко тестируются, легко заменяются
   6. Монада (в чистых функциональных языках) - абстракция, инкапсуляция функций с побочными эффектами (например IO в Haskell)
   7. В Clojure монад нет (разделение чистого кода, от кода с побочными эффектами - на усмотрение программиста)

3. Immutability in clojure
   1. Persistent collections
   2. Structural sharing
   3. Efficient time and space complexity

4. Multithreading
   1. Reference types: atom, ref, agent
   1. No lock based sync
   2. Software transactional memory
      - транзакция - часть кода, которая читает и пишет в разделяемую память
      - чтение и запись логически происходит в один момент времени, промежуточные состояния не видны другим транзакциям
      - транзакция либо выполняется полностью, либо ретраится
   3. Goroutines and channels with core.async lib

5. Clojure is a hosted on jvm
   1. Java interop and vice versa
   2. Unlimited access to all java libraries
   3. Compile to bytecode
   4. Provided as a clojure.jar (just put it in classpath to start)
   5. The same build and deploy process (ex. jar)

6. Productivity
   1. Less code
   2. Interactive development in repl
   3. Moving by small steps


====================================================
ClojureScript
====================================================

1. Что такое ClojureScript?
   1. Компилятор из clojure в javascript
   2. Неизменяемые структуры данных (как в clojure)
   3. Используется google closure compiler
   4. dead code elimination
   5. no tools zoo

2. React + Immutability
   1. Fast
   2. React provides functional programming in ui
   3. App state management and data flow

3. Особенности
   1. js interop and vice versa
   2. source maps (no problems with debugging)
   3. one language on back&front
   4. code sharing