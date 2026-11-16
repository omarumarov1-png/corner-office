// Part 11 · Nouns, articles, determiners (Units 62–69). Original explanations and examples.
window.GRAMMAR.units.push(
{ n: 62, floor: 11, title: "Countable and uncountable nouns", cefr: "A1–A2",
  rule: { sections: [
    { k: "A", h: "Исчисляемые: можно посчитать", p: "**Исчисляемые** (countable) имеют единственное и множественное число: a book — two books. В единственном числе нужен **a/an** (или the, my…).",
      ex: ["I've got **a sister** and **two brothers**.", "There's **an apple** on the table.", "How many **chairs** do we need?"] },
    { k: "B", h: "Неисчисляемые: нельзя посчитать штуками", p: "**Неисчисляемые** (uncountable) — без a/an и без -s: water, money, information, advice, furniture, news, homework, bread, rice, music, weather, luggage.",
      table: [["Неисчисляемое", "Как посчитать"], ["water", "a glass of water"], ["bread", "a loaf / a slice of bread"], ["advice", "a piece of advice"], ["information", "a piece of information"], ["news", "a piece of news"], ["luggage", "two bags / pieces of luggage"]],
      note: "Ловушки для русскоговорящих: **information, advice, news, homework, furniture, money** — неисчисляемые! The news **is** good (не _are_)." },
    { k: "C", h: "Одно слово — два значения", p: "Некоторые слова бывают и теми, и другими.",
      ex: ["I'd like **a coffee**. (чашку) / I don't drink **coffee**. (вообще)", "There's **a hair** in my soup! / She has long **hair**.", "We had **a great time**. / I don't have **time**."] }
  ], mistakes: [["Can you give me an advice?", "Can you give me some advice? / a piece of advice?", "advice — неисчисляемое."], ["The news are good.", "The news is good.", "news — единственное число."], ["I have many homeworks.", "I have a lot of homework.", "homework — без -s."]] },
  ex: [
   { task: "**a / an** or nothing?", items: [
    ["g", "I need ___ advice about my exam.", "some", ["an", "a", "many"], "Мне нужен совет насчёт экзамена.", "advice — неисчисляемое → some."],
    ["g", "Can I have ___ glass of water, please?", "a", ["an", "some", "the many"], "Можно стакан воды?", "a glass of water."],
    ["g", "We bought ___ new furniture for the living room.", "some", ["a", "an", "many"], "Мы купили новую мебель в гостиную.", "furniture — неисчисляемое."],
    ["g", "She's got ___ umbrella in her bag.", "an", ["a", "some", "any"], "У неё в сумке зонт.", "an + гласная."],
    ["g", "I have ___ good news for you!", "some", ["a", "an", "many"], "У меня для тебя хорошая новость!", "news — неисчисляемое."],
    ["g", "There's ___ cat sleeping on the sofa.", "a", ["an", "some", "the some"], "На диване спит кошка.", "a + cat."],
    ["g", "He gave me ___ useful information.", "some", ["an", "a", "many"], "Он дал мне полезную информацию.", "information — неисчисляемое."],
    ["g", "I'd like ___ coffee, please — a large one.", "a", ["an", "the any", "many"], "Мне кофе, пожалуйста, — большой.", "a coffee = чашка кофе."],
    ["g", "How much ___ do you have? — Two suitcases.", "luggage", ["luggages", "a luggage", "baggages"], "Сколько у вас багажа? — Два чемодана.", "luggage — неисчисляемое."],
    ["g", "She has beautiful long ___.", "hair", ["hairs", "a hair", "the hairs"], "У неё красивые длинные волосы.", "hair (волосы) — неисчисляемое."]
   ]},
   { task: "**is / are**, **much / many**, singular or plural", items: [
    ["g", "The news ___ very exciting today.", "is", ["are", "were", "be"], "Новости сегодня очень интересные.", "news → is."],
    ["g", "My money ___ in my wallet.", "is", ["are", "were", "have"], "Мои деньги в кошельке.", "money → is."],
    ["g", "How ___ homework do you have tonight?", "much", ["many", "a lot", "few"], "Сколько у тебя сегодня домашки?", "homework → much."],
    ["g", "How ___ students are in your class?", "many", ["much", "lot", "little"], "Сколько учеников в твоём классе?", "students → many."],
    ["g", "The weather ___ terrible last week.", "was", ["were", "are", "have been"], "На прошлой неделе погода была ужасной.", "weather → was."],
    ["g", "This information ___ very useful.", "is", ["are", "were", "be"], "Эта информация очень полезна.", "information → is."],
    ["g", "I don't have ___ time today.", "much", ["many", "a", "few"], "У меня сегодня мало времени.", "time → much."],
    ["g", "Your advice ___ always helpful.", "is", ["are", "were", "have"], "Твои советы всегда полезны.", "advice → is."],
    ["g", "We need two ___ of bread.", "loaves", ["breads", "bread", "piece"], "Нам нужны две буханки хлеба.", "two loaves of bread."],
    ["g", "Can you give me a ___ of advice?", "piece", ["one", "an", "lot"], "Можешь дать совет?", "a piece of advice."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "Can you give me an advice?", "Can you give me some advice?", ["Can you give me advices?", "Can you give me a advice?", "Can you give me many advice?"], "Можешь дать совет?", "advice — без an."],
    ["e", "The news are on at nine.", "The news is on at nine.", ["The news were on at nine.", "The new is on at nine.", "The newses are on at nine."], "Новости в девять.", "news → is."],
    ["e", "I have many homeworks today.", "I have a lot of homework today.", ["I have many homework today.", "I have much homeworks today.", "I have a lot of homeworks today."], "У меня сегодня много домашки.", "homework — неисчисляемое."],
    ["e", "We bought new furnitures.", "We bought some new furniture.", ["We bought a new furniture.", "We bought many new furniture.", "We bought new furnitures pieces."], "Мы купили новую мебель.", "furniture — без -s."],
    ["e", "She gave me an useful information.", "She gave me some useful information.", ["She gave me a useful informations.", "She gave me useful informations.", "She gave me many useful information."], "Она дала мне полезную информацию.", "information — неисчисляемое."],
    ["e", "My hairs are wet.", "My hair is wet.", ["My hair are wet.", "My hairs is wet.", "My the hair is wet."], "У меня мокрые волосы.", "hair → is."],
    ["e", "How many money do you need?", "How much money do you need?", ["How many moneys do you need?", "How much moneys do you need?", "How lot money do you need?"], "Сколько денег тебе нужно?", "money → much."],
    ["e", "I've got two luggages.", "I've got two pieces of luggage.", ["I've got two luggage.", "I've got two of luggages.", "I've got a two luggage."], "У меня два места багажа.", "luggage — неисчисляемое."],
    ["e", "The weather were cold yesterday.", "The weather was cold yesterday.", ["The weathers were cold yesterday.", "The weather was colds yesterday.", "A weather was cold yesterday."], "Вчера было холодно.", "weather → was."],
    ["e", "I need a bread for sandwiches.", "I need some bread for sandwiches.", ["I need breads for sandwiches.", "I need many bread for sandwiches.", "I need an bread for sandwiches."], "Мне нужен хлеб для бутербродов.", "bread — неисчисляемое."]
   ]}
  ]},
{ n: 63, floor: 11, title: "a / an and the", cefr: "A1–A2",
  rule: { sections: [
    { k: "A", h: "a/an — один из многих, впервые", p: "**a/an** — какой-то, любой, упоминаем впервые. **a** перед согласным звуком, **an** — перед гласным звуком.",
      ex: ["I saw **a** dog in the park.", "She's **an** engineer.", "**an** hour (h не читается) / **a** university (звук [j])"] },
    { k: "B", h: "the — конкретный, понятно какой", p: "**the** — оба собеседника знают, о чём речь: уже упоминали, он единственный, или ясно из ситуации.",
      table: [["a/an (впервые, любой)", "the (тот самый, известный)"], ["I saw **a** dog. **The** dog was black.", "(вторым упоминанием — the)"], ["Is there **a** bank near here?", "Where's **the** bank? (тот, который мы оба знаем)"], ["—", "**the** sun, **the** moon, **the** sky (единственные)"]] },
    { k: "C", h: "Работа, описание, количество", p: "Профессия — с **a/an**: She's **a** doctor. Описание — тоже: It's **a** nice day. Частота и скорость: **once a week, 60 km an hour**.",
      ex: ["My dad is **an** architect.", "What **a** beautiful view!", "I go to the gym **three times a week**."],
      note: "Русские часто пропускают артикли. Правило: перед исчисляемым существительным в единственном числе **всегда** нужно что-то: a/an, the, my, this…" }
  ], mistakes: [["She is doctor.", "She is a doctor.", "Профессия → a."], ["I saw a film. A film was great.", "I saw a film. The film was great.", "Второе упоминание → the."], ["It takes a hour.", "It takes an hour.", "an + гласный звук."]] },
  ex: [
   { task: "**a** or **an**?", items: [
    ["g", "She's ___ actress.", "an", ["a", "the", "—"], "Она актриса.", "an + a(ctress)."],
    ["g", "We waited for ___ hour.", "an", ["a", "the", "—"], "Мы ждали час.", "hour — h не читается → an."],
    ["g", "He's studying at ___ university in Astana.", "a", ["an", "the", "—"], "Он учится в университете в Астане.", "university — звук [j] → a."],
    ["g", "I'd like ___ orange juice, please.", "an", ["a", "the", "some an"], "Мне апельсиновый сок, пожалуйста.", "an + o."],
    ["g", "It was ___ honest mistake.", "an", ["a", "the", "—"], "Это была честная ошибка.", "honest — h не читается."],
    ["g", "My brother is ___ engineer.", "an", ["a", "the", "—"], "Мой брат инженер.", "an + e."],
    ["g", "I need ___ new phone.", "a", ["an", "the", "—"], "Мне нужен новый телефон.", "a + n."],
    ["g", "She wears ___ uniform at work.", "a", ["an", "the", "—"], "На работе она носит форму.", "uniform — звук [j] → a."],
    ["g", "Is there ___ ATM near here?", "an", ["a", "the", "—"], "Здесь рядом есть банкомат?", "ATM [eɪ] → an."],
    ["g", "He's ___ European citizen.", "a", ["an", "the", "—"], "Он гражданин Европы.", "European — звук [j] → a."]
   ]},
   { task: "**a / an** or **the**?", items: [
    ["g", "I bought a jacket and a hat. ___ jacket was expensive.", "The", ["A", "An", "—"], "Я купил куртку и шапку. Куртка была дорогая.", "Второе упоминание → the."],
    ["g", "Look at ___ moon! It's so bright tonight.", "the", ["a", "an", "—"], "Посмотри на луну! Сегодня она такая яркая.", "Единственная → the."],
    ["g", "Can you close ___ door, please?", "the", ["a", "an", "—"], "Закрой дверь, пожалуйста.", "Понятно какая → the."],
    ["g", "My sister is ___ nurse.", "a", ["the", "an", "—"], "Моя сестра медсестра.", "Профессия → a."],
    ["g", "We stayed in ___ small hotel near ___ sea.", "a … the", ["the … a", "a … a", "the … the"], "Мы жили в маленькой гостинице у моря.", "a hotel (какая-то), the sea."],
    ["g", "What ___ lovely day!", "a", ["the", "an", "—"], "Какой прекрасный день!", "What a + прилагательное."],
    ["g", "I go swimming twice ___ week.", "a", ["the", "an", "in"], "Я хожу плавать дважды в неделю.", "twice a week."],
    ["g", "Where's ___ remote control? I can't find it.", "the", ["a", "an", "—"], "Где пульт? Не могу найти.", "Тот самый, наш → the."],
    ["g", "There's ___ letter for you on the table.", "a", ["the", "an", "—"], "На столе тебе письмо.", "Впервые → a."],
    ["g", "She's the best player in ___ team.", "the", ["a", "an", "—"], "Она лучший игрок в команде.", "Конкретная команда → the."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "My father is engineer.", "My father is an engineer.", ["My father is a engineer.", "My father is the engineer.", "My father engineer."], "Мой папа инженер.", "Профессия → an."],
    ["e", "I saw a film yesterday. A film was boring.", "I saw a film yesterday. The film was boring.", ["I saw the film yesterday. A film was boring.", "I saw film yesterday. Film was boring.", "I saw a film yesterday. Film was boring."], "Вчера я смотрел фильм. Он был скучный.", "Второе упоминание → the."],
    ["e", "The lesson lasts a hour and a half.", "The lesson lasts an hour and a half.", ["The lesson lasts the hour and a half.", "The lesson lasts hour and a half.", "The lesson lasts an hours and a half."], "Урок длится полтора часа.", "an hour."],
    ["e", "She goes to the gym three times the week.", "She goes to the gym three times a week.", ["She goes to the gym three times in week.", "She goes to gym three times week.", "She goes to the gym three time a week."], "Она ходит в спортзал три раза в неделю.", "times a week."],
    ["e", "Look at a sun!", "Look at the sun!", ["Look at sun!", "Look at an sun!", "Look the sun!"], "Посмотри на солнце!", "Единственное → the."],
    ["e", "I have an university degree.", "I have a university degree.", ["I have university degree.", "I have the university degree a.", "I have an universities degree."], "У меня высшее образование.", "university — a."],
    ["e", "What beautiful day!", "What a beautiful day!", ["What the beautiful day!", "What an beautiful day!", "How beautiful day!"], "Какой прекрасный день!", "What a…!"],
    ["e", "Can you open window? It's hot.", "Can you open the window? It's hot.", ["Can you open a window the? It's hot.", "Can you open an window? It's hot.", "Can you open windows the? It's hot."], "Открой окно, жарко.", "Понятно какое → the."],
    ["e", "He is a honest man.", "He is an honest man.", ["He is honest a man.", "He is the honest man a.", "He is honest man."], "Он честный человек.", "honest → an."],
    ["e", "I've got dog and cat.", "I've got a dog and a cat.", ["I've got the dog and the cat a.", "I've got an dog and an cat.", "I've got dogs and cat."], "У меня есть собака и кошка.", "Единственное число → a."]
   ]}
  ]},
{ n: 64, floor: 11, title: "the or no article (school / the school; life / the life)", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "Говорим вообще — без the", p: "Множественное число и неисчисляемые **в общем смысле** — без артикля.",
      table: [["Вообще (без the)", "Конкретно (the)"], ["I love **music**.", "I love **the music** in this film."], ["**Dogs** are loyal.", "**The dogs** next door bark all night."], ["**Life** is short.", "**The life** of a soldier is hard."]] },
    { k: "B", h: "school, hospital, prison, bed, work, home", p: "Без the — когда речь о **назначении места**: учиться, лечиться, спать. С the — когда о **здании**.",
      ex: ["She's at **school**. (учится) / I went to **the school** to see the teacher. (здание)", "He's in **hospital**. (лечится) / I visited him in **the hospital**.", "I go to **bed** at ten. / I'm at **work**. / I'm going **home**."] },
    { k: "C", h: "Названия: когда the нужен", p: "",
      table: [["Без the", "С the"], ["страны: Kazakhstan, France", "**the** UK, **the** USA, **the** Netherlands"], ["города, улицы: Almaty, Abay Street", "**the** Ural River, **the** Caspian Sea"], ["горы (одна): Everest", "**the** Alps, **the** Himalayas (цепь)"], ["озёра: Lake Balkhash", "**the** Pacific Ocean, **the** Sahara"], ["приёмы пищи: have **breakfast**", "игры на инструментах: play **the** piano"], ["спорт: play **football**", "—"]] }
  ], mistakes: [["The life is beautiful.", "Life is beautiful.", "Вообще → без the."], ["I go to the bed at eleven.", "I go to bed at eleven.", "go to bed — без the."], ["She plays piano and the football.", "She plays the piano and football.", "the + инструмент, спорт — без the."]] },
  ex: [
   { task: "**the** or nothing (—)?", items: [
    ["g", "I don't like ___ horror films.", "—", ["the", "a", "an"], "Я не люблю ужастики.", "Вообще → без the."],
    ["g", "___ people in my street are very friendly.", "The", ["—", "A", "Some the"], "Люди на моей улице очень дружелюбные.", "Конкретные люди → the."],
    ["g", "My little brother is still at ___ school.", "—", ["the", "a", "an"], "Мой младший брат ещё в школе (учится).", "Назначение → без the."],
    ["g", "I went to ___ school to talk to his teacher.", "the", ["—", "a", "an"], "Я сходил в школу поговорить с учителем.", "Здание → the."],
    ["g", "It's late. I'm going to ___ bed.", "—", ["the", "a", "my the"], "Поздно. Иду спать.", "go to bed."],
    ["g", "She plays ___ violin beautifully.", "the", ["—", "a", "an"], "Она прекрасно играет на скрипке.", "the + инструмент."],
    ["g", "We play ___ basketball after school.", "—", ["the", "a", "an"], "Мы играем в баскетбол после школы.", "Спорт — без the."],
    ["g", "What time do you have ___ lunch?", "—", ["the", "a", "an"], "Во сколько ты обедаешь?", "have lunch — без the."],
    ["g", "___ water is essential for life.", "—", ["The", "A", "An"], "Вода необходима для жизни.", "Вообще → без the."],
    ["g", "___ water in this lake is very cold.", "The", ["—", "A", "Some the"], "Вода в этом озере очень холодная.", "Конкретная → the."]
   ]},
   { task: "Names of places: **the** or nothing?", items: [
    ["g", "I've never been to ___ USA.", "the", ["—", "a", "an"], "Я никогда не был в США.", "the USA."],
    ["g", "___ Kazakhstan is the ninth largest country in the world.", "—", ["The", "A", "An"], "Казахстан — девятая по величине страна мира.", "Страна — без the."],
    ["g", "The Volga flows into ___ Caspian Sea.", "the", ["—", "a", "an"], "Волга впадает в Каспийское море.", "Моря → the."],
    ["g", "They went skiing in ___ Alps.", "the", ["—", "a", "an"], "Они катались на лыжах в Альпах.", "Горная цепь → the."],
    ["g", "___ Lake Balkhash is in the east of the country.", "—", ["The", "A", "An"], "Озеро Балхаш на востоке страны.", "Lake + название — без the."],
    ["g", "My aunt lives in ___ Netherlands.", "the", ["—", "a", "an"], "Моя тётя живёт в Нидерландах.", "the Netherlands."],
    ["g", "Have you ever climbed ___ Mount Elbrus?", "—", ["the", "a", "an"], "Ты поднимался на Эльбрус?", "Одна гора — без the."],
    ["g", "We crossed ___ Atlantic Ocean by ship.", "the", ["—", "a", "an"], "Мы пересекли Атлантический океан на корабле.", "Океаны → the."],
    ["g", "She was born in ___ Almaty.", "—", ["the", "a", "an"], "Она родилась в Алматы.", "Город — без the."],
    ["g", "They live in ___ United Kingdom.", "the", ["—", "a", "an"], "Они живут в Великобритании.", "the UK."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "The life is too short to be unhappy.", "Life is too short to be unhappy.", ["A life is too short to be unhappy.", "The lives is too short to be unhappy.", "Life is too short to be the unhappy."], "Жизнь слишком коротка, чтобы быть несчастным.", "Вообще → без the."],
    ["e", "I usually go to the bed at eleven.", "I usually go to bed at eleven.", ["I usually go to a bed at eleven.", "I usually go bed at eleven.", "I usually go in bed at eleven."], "Обычно я ложусь в одиннадцать.", "go to bed."],
    ["e", "He plays guitar and the football.", "He plays the guitar and football.", ["He plays a guitar and a football.", "He plays guitar and football the.", "He plays the guitar and the football."], "Он играет на гитаре и в футбол.", "the guitar; football — без the."],
    ["e", "I'd love to visit the France.", "I'd love to visit France.", ["I'd love to visit a France.", "I'd love to visit the French.", "I'd love visit France."], "Хотел бы побывать во Франции.", "Страна — без the."],
    ["e", "We had the breakfast at seven.", "We had breakfast at seven.", ["We had a breakfast the at seven.", "We had breakfasts at seven.", "We had the breakfasts at seven."], "Мы позавтракали в семь.", "have breakfast."],
    ["e", "My grandfather is in the hospital. He's having an operation. (as a patient)", "My grandfather is in hospital. He's having an operation.", ["My grandfather is in a hospitals. He's having an operation.", "My grandfather is on hospital. He's having an operation.", "My grandfather is at hospital the. He's having an operation."], "Дедушка в больнице, ему делают операцию.", "Как пациент — in hospital (брит.)."],
    ["e", "The dogs are very loyal animals. (in general)", "Dogs are very loyal animals.", ["A dogs are very loyal animals.", "The dog are very loyal animals.", "Dog are very loyal animals."], "Собаки — очень преданные животные.", "Вообще → без the."],
    ["e", "We sailed across Pacific Ocean.", "We sailed across the Pacific Ocean.", ["We sailed across a Pacific Ocean.", "We sailed across Pacific the Ocean.", "We sailed across the Pacific Oceans."], "Мы пересекли Тихий океан.", "Океаны → the."],
    ["e", "I'm at the work until six.", "I'm at work until six.", ["I'm at a work until six.", "I'm in the work until six.", "I'm on work until six."], "Я на работе до шести.", "at work — без the."],
    ["e", "I love the music, especially jazz. (in general)", "I love music, especially jazz.", ["I love a music, especially jazz.", "I love musics, especially jazz.", "I love the musics, especially jazz."], "Я люблю музыку, особенно джаз.", "Вообще → без the."]
   ]}
  ]},
{ n: 65, floor: 11, title: "some and any; something / anybody / nowhere", cefr: "A2",
  rule: { sections: [
    { k: "A", h: "some — в утверждениях, any — в вопросах и отрицаниях", p: "Обычно **some** — в утвердительных предложениях, **any** — в вопросах и после not.",
      table: [["Утверждение", "Вопрос", "Отрицание"], ["I've got **some** money.", "Have you got **any** money?", "I haven't got **any** money."], ["There are **some** eggs.", "Are there **any** eggs?", "There aren't **any** eggs."]] },
    { k: "B", h: "some в вопросах — предложения и просьбы", p: "Когда **предлагаем** или **просим** и ждём «да» — some.",
      ex: ["Would you like **some** tea?", "Can I have **some** water?", "Could you lend me **some** money?"],
      note: "any в утверждении = «любой»: You can take **any** bus — they all go to the centre." },
    { k: "C", h: "something, anybody, nowhere…", p: "Те же правила для сложных слов.",
      table: [["some-", "any-", "no-"], ["somebody / someone", "anybody / anyone", "nobody / no one"], ["something", "anything", "nothing"], ["somewhere", "anywhere", "nowhere"]],
      ex: ["There's **somebody** at the door.", "Did you see **anything**?", "I've got **nothing** to wear. = I haven't got **anything** to wear."] }
  ], mistakes: [["I don't have some money.", "I don't have any money.", "Отрицание → any."], ["I didn't see nobody.", "I didn't see anybody. / I saw nobody.", "Двойное отрицание нельзя."], ["Would you like any coffee? (offer)", "Would you like some coffee?", "Предложение → some."]] },
  ex: [
   { task: "**some** or **any**?", items: [
    ["g", "There are ___ apples in the fridge.", "some", ["any", "no some", "a"], "В холодильнике есть яблоки.", "Утверждение → some."],
    ["g", "Is there ___ milk left?", "any", ["some", "a", "no"], "Молоко осталось?", "Вопрос → any."],
    ["g", "I haven't got ___ brothers.", "any", ["some", "no", "a"], "У меня нет братьев.", "Отрицание → any."],
    ["g", "Would you like ___ cake?", "some", ["any", "a some", "no"], "Хотите торта?", "Предложение → some."],
    ["g", "We didn't buy ___ bread.", "any", ["some", "no", "a"], "Мы не купили хлеба.", "Отрицание → any."],
    ["g", "Can I have ___ water, please?", "some", ["any", "a", "no"], "Можно воды?", "Просьба → some."],
    ["g", "Have you got ___ questions?", "any", ["some", "a", "no"], "Есть вопросы?", "Вопрос → any."],
    ["g", "I need ___ help with this box.", "some", ["any", "a", "no"], "Мне нужна помощь с коробкой.", "Утверждение → some."],
    ["g", "There aren't ___ tickets left.", "any", ["some", "no", "a"], "Билетов не осталось.", "Отрицание → any."],
    ["g", "You can sit on ___ chair. They're all free.", "any", ["some", "no", "a some"], "Садись на любой стул. Все свободны.", "any = любой."]
   ]},
   { task: "**something / anything / nothing / somebody…**", items: [
    ["g", "There's ___ at the door. Can you open it?", "somebody", ["anybody", "nobody", "everybody"], "Кто-то за дверью. Откроешь?", "Утверждение → somebody."],
    ["g", "Did you buy ___ at the market?", "anything", ["something any", "nothing", "everything"], "Ты купил что-нибудь на рынке?", "Вопрос → anything."],
    ["g", "I'm bored. There's ___ to do.", "nothing", ["anything", "something", "everything"], "Скучно. Нечего делать.", "nothing = not anything."],
    ["g", "I can't find my keys ___.", "anywhere", ["somewhere", "nowhere", "everywhere"], "Нигде не могу найти ключи.", "can't + anywhere."],
    ["g", "Let's go ___ quiet for dinner.", "somewhere", ["anywhere", "nowhere", "everywhere"], "Пойдём куда-нибудь в тихое место поужинать.", "Утверждение → somewhere."],
    ["g", "___ knows the answer. Not even the teacher!", "Nobody", ["Anybody", "Somebody", "Everybody not"], "Никто не знает ответа. Даже учитель!", "nobody + утвердительный глагол."],
    ["g", "Is there ___ you want to tell me?", "anything", ["something any", "nothing", "everything"], "Ты хочешь мне что-то сказать?", "Вопрос → anything."],
    ["g", "I didn't see ___ in the street.", "anybody", ["somebody", "nobody", "everybody"], "Я никого не видел на улице.", "didn't + anybody."],
    ["g", "Would you like ___ to eat before we go?", "something", ["anything", "nothing", "everything"], "Хочешь чего-нибудь поесть перед выходом?", "Предложение → something."],
    ["g", "She has ___ to live. She needs help.", "nowhere", ["anywhere", "somewhere", "everywhere"], "Ей негде жить. Нужна помощь.", "nowhere = not anywhere."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "I don't have some money.", "I don't have any money.", ["I don't have no money.", "I have not some money.", "I don't have a money."], "У меня нет денег.", "Отрицание → any."],
    ["e", "I didn't see nobody.", "I didn't see anybody.", ["I didn't see somebody.", "I not saw anybody.", "I didn't saw anybody."], "Я никого не видел.", "Двойное отрицание → anybody."],
    ["e", "Would you like any tea? (offer)", "Would you like some tea?", ["Would you like a tea any?", "Would you like no tea?", "Do you like some tea?"], "Хотите чаю?", "Предложение → some."],
    ["e", "There isn't nothing in the box.", "There isn't anything in the box.", ["There is anything in the box.", "There isn't something in the box.", "There not is anything in the box."], "В коробке ничего нет.", "isn't + anything."],
    ["e", "Have you got some brothers or sisters?", "Have you got any brothers or sisters?", ["Have you got no brothers or sisters?", "Have you some brothers or sisters?", "Do you got any brothers or sisters?"], "У тебя есть братья или сёстры?", "Вопрос → any."],
    ["e", "Somebody didn't come to the meeting. (= no one came)", "Nobody came to the meeting.", ["Anybody came to the meeting.", "Nobody didn't come to the meeting.", "Anybody didn't come to the meeting."], "Никто не пришёл на встречу.", "Никто → nobody + утвердительный глагол."],
    ["e", "I'm looking for somewhere to park but there's anywhere.", "I'm looking for somewhere to park but there's nowhere.", ["I'm looking for anywhere to park but there's somewhere.", "I'm looking for somewhere to park but there's not nowhere.", "I'm looking for nowhere to park but there's anywhere."], "Ищу, где припарковаться, но негде.", "there's nowhere."],
    ["e", "Can I have any sugar, please? (request)", "Can I have some sugar, please?", ["Can I have a sugar, please?", "Can I have no sugar, please?", "Can I have sugars, please?"], "Можно сахару?", "Просьба → some."],
    ["e", "Nobody didn't help me.", "Nobody helped me.", ["Anybody didn't help me.", "Nobody not helped me.", "Somebody didn't helped me."], "Мне никто не помог.", "nobody + утвердительный глагол."],
    ["e", "There are any eggs in the fridge.", "There are some eggs in the fridge.", ["There is any eggs in the fridge.", "There are no any eggs in the fridge.", "There are a eggs in the fridge."], "В холодильнике есть яйца.", "Утверждение → some."]
   ]}
  ]},
{ n: 66, floor: 11, title: "much / many / a lot of / (a) few / (a) little", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "many — исчисляемые, much — неисчисляемые", p: "**many** + множественное (many books). **much** + неисчисляемое (much money). **a lot of / lots of** — с обоими, чаще в утверждениях.",
      table: [["Исчисляемые", "Неисчисляемые"], ["How **many** people?", "How **much** time?"], ["not **many** friends", "not **much** money"], ["**a lot of** cars", "**a lot of** traffic"]],
      note: "В утверждениях much звучит книжно: I have **a lot of** work (а не _much work_). В вопросах и отрицаниях much — нормально." },
    { k: "B", h: "(a) few — исчисляемые, (a) little — неисчисляемые", p: "**a few / a little** — немного, но достаточно (позитивно). **few / little** без a — мало, почти нет (негативно).",
      table: [["Позитивно (хватает)", "Негативно (мало)"], ["I have **a few** friends here. (есть несколько)", "He has **few** friends. (почти нет)"], ["There's **a little** milk left. (немного есть)", "There's **little** hope. (почти нет)"]] },
    { k: "C", h: "too many / too much / enough", p: "**too many / too much** — слишком много. **enough** — достаточно (перед существительным).",
      ex: ["There are **too many** cars in the city.", "You spend **too much** time online.", "Do we have **enough** chairs?"] }
  ], mistakes: [["How much people came?", "How many people came?", "people — исчисляемое → many."], ["I have much work today.", "I have a lot of work today.", "В утверждении — a lot of."], ["I have a little friends.", "I have a few friends.", "friends — исчисляемое → a few."]] },
  ex: [
   { task: "**much**, **many** or **a lot of**?", items: [
    ["g", "How ___ sugar do you take in your tea?", "much", ["many", "a lot", "few"], "Сколько сахара ты кладёшь в чай?", "sugar — неисчисляемое."],
    ["g", "How ___ countries have you visited?", "many", ["much", "lot", "little"], "В скольких странах ты побывал?", "countries — исчисляемое."],
    ["g", "There wasn't ___ traffic this morning.", "much", ["many", "a few", "few"], "Утром было мало машин.", "traffic — неисчисляемое."],
    ["g", "She's got ___ friends in Astana.", "a lot of", ["much", "a little", "little"], "У неё много друзей в Астане.", "Утверждение → a lot of."],
    ["g", "We don't have ___ bread left.", "much", ["many", "a few", "few"], "Хлеба осталось мало.", "Отрицание + неисчисляемое → much."],
    ["g", "Were there ___ people at the concert?", "many", ["much", "a little", "little"], "На концерте было много людей?", "people → many."],
    ["g", "We have ___ homework this week.", "a lot of", ["many", "a few", "few"], "На этой неделе у нас много домашки.", "Утверждение → a lot of."],
    ["g", "How ___ did you pay for your phone?", "much", ["many", "lot", "few"], "Сколько ты заплатил за телефон?", "How much (money)."],
    ["g", "There aren't ___ shops in my village.", "many", ["much", "a little", "lot"], "В моей деревне мало магазинов.", "shops → many."],
    ["g", "Thanks ___! You've been very helpful.", "a lot", ["much a lot", "many", "a few"], "Огромное спасибо!", "Thanks a lot."]
   ]},
   { task: "**a few / few / a little / little**", items: [
    ["g", "I've got ___ minutes. What do you want to tell me?", "a few", ["a little", "few", "little"], "У меня есть пара минут. Что ты хотел сказать?", "minutes + позитив → a few."],
    ["g", "Could I have ___ milk in my coffee?", "a little", ["a few", "few", "many"], "Можно немного молока в кофе?", "milk + немного → a little."],
    ["g", "The film was so bad that ___ people stayed until the end.", "few", ["a few", "little", "a little"], "Фильм был такой плохой, что до конца досидели единицы.", "Почти никто → few."],
    ["g", "Hurry up! We have very ___ time.", "little", ["few", "a few", "many"], "Быстрее! У нас очень мало времени.", "Почти нет времени → little."],
    ["g", "She speaks ___ English, so she can order food.", "a little", ["a few", "few", "many"], "Она немного говорит по-английски, может заказать еду.", "Немного, достаточно → a little."],
    ["g", "I've invited ___ friends for dinner.", "a few", ["a little", "little", "much"], "Я пригласил несколько друзей на ужин.", "friends → a few."],
    ["g", "There's ___ hope of finding the lost dog now.", "little", ["few", "a few", "many"], "Почти нет надежды найти пропавшую собаку.", "Почти нет → little."],
    ["g", "There are too ___ people in this room.", "many", ["much", "few", "little"], "В комнате слишком много людей.", "too many + исчисляемое."],
    ["g", "You drink too ___ coffee.", "much", ["many", "few", "a few"], "Ты пьёшь слишком много кофе.", "too much + неисчисляемое."],
    ["g", "Do we have ___ chairs for everyone?", "enough", ["much", "a little", "too"], "Хватит ли стульев на всех?", "enough + существительное."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "How much people live here?", "How many people live here?", ["How many peoples live here?", "How lot people live here?", "How much peoples live here?"], "Сколько людей здесь живёт?", "people → many."],
    ["e", "I have much work today.", "I have a lot of work today.", ["I have many work today.", "I have a lot of works today.", "I have a many work today."], "У меня сегодня много работы.", "Утверждение → a lot of."],
    ["e", "I have a little friends in this city.", "I have a few friends in this city.", ["I have a few friend in this city.", "I have little friend in this city.", "I have a little friend in this city many."], "У меня есть несколько друзей в этом городе.", "friends → a few."],
    ["e", "There isn't many milk left.", "There isn't much milk left.", ["There isn't a few milk left.", "There aren't much milk left.", "There isn't many milks left."], "Молока осталось мало.", "milk → much."],
    ["e", "He has a few money, so he can't buy it.", "He has little money, so he can't buy it.", ["He has few money, so he can't buy it.", "He has a little moneys, so he can't buy it.", "He has a few moneys, so he can't buy it."], "У него мало денег, он не может это купить.", "money + почти нет → little."],
    ["e", "There are too much cars in the centre.", "There are too many cars in the centre.", ["There are too lot cars in the centre.", "There is too many cars in the centre.", "There are too much car in the centre."], "В центре слишком много машин.", "cars → too many."],
    ["e", "We don't have enough of chairs.", "We don't have enough chairs.", ["We don't have chairs enough of.", "We don't have enough the chairs.", "We haven't enough of chairs."], "У нас не хватает стульев.", "enough + существительное."],
    ["e", "Few people came, so the room was full. (= quite a lot)", "Quite a few people came, so the room was full.", ["Little people came, so the room was full.", "A little people came, so the room was full.", "Few peoples came, so the room was full."], "Пришло немало людей, зал был полон.", "quite a few = довольно много."],
    ["e", "I need a few help with my project.", "I need a little help with my project.", ["I need few help with my project.", "I need a few helps with my project.", "I need many help with my project."], "Мне нужна небольшая помощь с проектом.", "help → a little."],
    ["e", "How many is a ticket to Almaty?", "How much is a ticket to Almaty?", ["How many are a ticket to Almaty?", "How much a ticket is to Almaty?", "How lot is a ticket to Almaty?"], "Сколько стоит билет до Алматы?", "Цена → How much."]
   ]}
  ]},
{ n: 67, floor: 11, title: "all / both / either / neither / none / each / every", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "Из двух: both, either, neither", p: "**both** — оба. **either** — любой из двух / ни один (в отрицании). **neither** — ни один из двух.",
      table: [["Слово", "Пример", "Значение"], ["both", "**Both** my parents work.", "оба"], ["either", "You can take **either** bus.", "любой из двух"], ["neither", "**Neither** answer is correct.", "ни один из двух"], ["both … and", "**Both** Dana **and** Aliya came.", "и …, и …"], ["either … or", "**Either** call **or** text me.", "либо …, либо …"], ["neither … nor", "**Neither** he **nor** I knew.", "ни …, ни …"]] },
    { k: "B", h: "Из многих: all, none, every, each", p: "**all** — все. **none** — ни один. **every / each** + существительное в **единственном** числе.",
      ex: ["**All** the students passed.", "**None of** my friends came.", "**Every** student has a laptop. (не _every students_)", "**Each** room has its own bathroom."] },
    { k: "C", h: "of + the/my/these; местоимения", p: "Перед the/my/these и местоимениями нужен **of**: all **of** the, both **of** them, neither **of** us, none **of** you.",
      ex: ["**Both of them** are doctors.", "**Neither of us** was ready.", "**Each of the** players got a medal."],
      note: "every = все вместе (как группа); each = каждый по отдельности. После neither of / none of — в формальной речи глагол в ед. числе." }
  ], mistakes: [["Every students has a book.", "Every student has a book.", "every + ед. число."], ["Both of my parents is teachers.", "Both of my parents are teachers.", "both → мн. число."], ["Neither of them didn't come.", "Neither of them came.", "neither уже отрицание."]] },
  ex: [
   { task: "**both / either / neither**", items: [
    ["g", "I have two brothers. ___ of them live in Almaty.", "Both", ["Either", "Neither", "All"], "У меня два брата. Оба живут в Алматы.", "Оба → both."],
    ["g", "You can sit on ___ side. They're both free.", "either", ["both", "neither", "all"], "Можешь сесть с любой стороны.", "Любой из двух → either."],
    ["g", "___ of the two hotels was good. We were disappointed.", "Neither", ["Both", "Either", "None"], "Ни одна из двух гостиниц не была хорошей.", "Ни одна из двух → neither."],
    ["g", "___ Dana and Arman are coming to the party.", "Both", ["Either", "Neither", "All"], "И Дана, и Арман придут на вечеринку.", "both … and."],
    ["g", "You can ___ call me or send a message.", "either", ["both", "neither", "all"], "Можешь либо позвонить, либо написать.", "either … or."],
    ["g", "___ my mother nor my father speaks English.", "Neither", ["Either", "Both", "None"], "Ни мама, ни папа не говорят по-английски.", "neither … nor."],
    ["g", "Do you want tea or coffee? — ___. I'm fine, thanks.", "Neither", ["Either", "Both", "None"], "Чай или кофе? — Ни то ни другое, спасибо.", "Neither."],
    ["g", "I don't like ___ of these jackets.", "either", ["neither", "both", "none"], "Мне не нравится ни одна из этих двух курток.", "don't + either."],
    ["g", "___ of us were tired after the long walk.", "Both", ["Either", "Neither", "Each"], "Мы оба устали после долгой прогулки.", "both of us."],
    ["g", "There are trees on ___ side of the road.", "either", ["both", "neither", "all"], "По обеим сторонам дороги деревья.", "on either side = с обеих сторон."]
   ]},
   { task: "**all / none / every / each**", items: [
    ["g", "___ the students in my class passed the test.", "All", ["Every", "Each", "None"], "Все ученики моего класса сдали тест.", "all the students."],
    ["g", "___ student needs a laptop for this course.", "Every", ["All", "Both", "None"], "Каждому студенту нужен ноутбук.", "every + ед. число."],
    ["g", "___ of my friends could come. They were all busy.", "None", ["All", "Every", "Both"], "Ни один из моих друзей не смог прийти.", "Ни один из многих → none."],
    ["g", "The teacher gave a book to ___ of us.", "each", ["every", "all", "both of"], "Учитель дал книгу каждому из нас.", "each of us (every of — нельзя)."],
    ["g", "I've read ___ of her books. She's my favourite writer.", "all", ["every", "each one", "none"], "Я прочитал все её книги.", "all of."],
    ["g", "We go to the mountains ___ summer.", "every", ["all", "each of", "both"], "Мы ездим в горы каждое лето.", "every summer."],
    ["g", "___ room in the hotel has a sea view.", "Each", ["All", "Both", "None of"], "В каждом номере вид на море.", "each + ед. число."],
    ["g", "Is there any cake left? — No, ___. We ate it all.", "none", ["no", "nothing of", "neither"], "Торт остался? — Нет, ничего.", "none = ни кусочка."],
    ["g", "___ of the players received a medal.", "Each", ["Every", "All of each", "Both of"], "Каждый игрок получил медаль.", "each of the players."],
    ["g", "She spent ___ day studying for the exam.", "all", ["every the", "each of", "both"], "Она весь день готовилась к экзамену.", "all day = весь день."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "Every students has a locker.", "Every student has a locker.", ["Every student have a locker.", "All student has a locker.", "Every of students has a locker."], "У каждого ученика есть шкафчик.", "every + ед. число."],
    ["e", "Both of my parents is doctors.", "Both of my parents are doctors.", ["Both my parent are doctors.", "Both of my parents is doctor.", "Either of my parents are doctors."], "Оба моих родителя — врачи.", "both → are."],
    ["e", "Neither of them didn't come.", "Neither of them came.", ["Neither of them not came.", "Either of them didn't came.", "Neither of they came."], "Ни один из них не пришёл.", "neither — уже отрицание."],
    ["e", "Every of us was nervous.", "Each of us was nervous.", ["Every us was nervous.", "All of us was nervous.", "Each us was nervous."], "Каждый из нас нервничал.", "every of — нельзя; each of."],
    ["e", "None my friends knew the answer.", "None of my friends knew the answer.", ["No of my friends knew the answer.", "None of my friend knew the answer.", "Nothing of my friends knew the answer."], "Никто из моих друзей не знал ответа.", "none of."],
    ["e", "I like both of them colours.", "I like both of those colours.", ["I like both them colours.", "I like either of them colours.", "I like both of them colour."], "Мне нравятся оба этих цвета.", "both of + those (не them)."],
    ["e", "Either my sister or my brother are coming.", "Either my sister or my brother is coming.", ["Either my sister nor my brother is coming.", "Both my sister or my brother is coming.", "Either my sister or my brother coming."], "Придёт либо сестра, либо брат.", "either … or + ед. число."],
    ["e", "All student must wear a uniform.", "All students must wear a uniform.", ["All the student must wear a uniform.", "Every students must wear a uniform.", "All of student must wear a uniform."], "Все ученики должны носить форму.", "all + мн. число."],
    ["e", "Neither the bus or the train was on time.", "Neither the bus nor the train was on time.", ["Neither the bus and the train was on time.", "Either the bus nor the train was on time.", "Neither the bus or the train were on time."], "Ни автобус, ни поезд не пришли вовремя.", "neither … nor."],
    ["e", "I've seen both films and I didn't like none of them.", "I've seen both films and I didn't like either of them.", ["I've seen both films and I didn't like neither of them.", "I've seen both films and I didn't like any them.", "I've seen both films and I didn't like both of them."], "Я посмотрел оба фильма — ни один не понравился.", "didn't + either (из двух)."]
   ]}
  ]},
{ n: 68, floor: 11, title: "Possessives: 's, my / mine, a friend of mine", cefr: "A2",
  rule: { sections: [
    { k: "A", h: "'s — принадлежность людям", p: "**кто + 's + что**: Aliya's phone (телефон Алии). Множественное с -s — только апостроф: my parents' house.",
      table: [["Кто", "Форма"], ["Aliya", "**Aliya's** phone"], ["my brother", "my **brother's** car"], ["my parents", "my **parents'** house"], ["the children", "the **children's** toys"], ["James", "**James's** book (или James')"]] },
    { k: "B", h: "my или mine", p: "**my, your, his, her, its, our, their** — перед существительным. **mine, yours, his, hers, ours, theirs** — вместо существительного.",
      table: [["Перед существительным", "Без существительного"], ["This is **my** bag.", "This bag is **mine**."], ["Is this **your** pen?", "Is this pen **yours**?"], ["It's **their** house.", "The house is **theirs**."]],
      note: "its (его/её для предметов) — без апострофа! **it's** = it is." },
    { k: "C", h: "a friend of mine; of для вещей", p: "«Один из моих друзей» — **a friend of mine** (не _a friend of me_). Для вещей обычно **of**: the end **of** the film, the door **of** the car (но: **today's** news, **a week's** holiday).",
      ex: ["She's **a colleague of my sister's**.", "The roof **of** the building is green.", "I'm going on **a two weeks'** holiday."] }
  ], mistakes: [["This is the car of my father.", "This is my father's car.", "Для людей → 's."], ["This book is my.", "This book is mine.", "Без существительного → mine."], ["The dog wagged it's tail.", "The dog wagged its tail.", "its — без апострофа."]] },
  ex: [
   { task: "Use **'s** or **s'**", items: [
    ["g", "This is ___ bike. (my brother)", "my brother's", ["my brothers", "my brothers'", "the bike of my brother's"], "Это велосипед моего брата.", "brother's."],
    ["g", "We went to my ___ house for dinner. (parents)", "parents'", ["parent's", "parents's", "parents"], "Мы ужинали у моих родителей.", "Множественное на -s → s'."],
    ["g", "The ___ room is upstairs. (children)", "children's", ["childrens'", "childrens", "children"], "Детская наверху.", "children — без -s → 's."],
    ["g", "Have you seen ___ new haircut? (Aliya)", "Aliya's", ["Aliyas'", "Aliyas", "the Aliya's"], "Ты видел новую стрижку Алии?", "Aliya's."],
    ["g", "My ___ names are Dana and Aisha. (sisters)", "sisters'", ["sister's", "sisters's", "sisters"], "Моих сестёр зовут Дана и Айша.", "sisters'."],
    ["g", "That's my ___ office. (boss)", "boss's", ["bosses'", "boss'es", "bosses"], "Это кабинет моего начальника.", "boss's."],
    ["g", "Did you read ___ newspaper? (today)", "today's", ["todays'", "today", "the today"], "Ты читал сегодняшнюю газету?", "today's newspaper."],
    ["g", "The ___ changing room is on the left. (women)", "women's", ["womens'", "womens", "woman's"], "Женская раздевалка слева.", "women's."],
    ["g", "I need a ___ rest. (week)", "week's", ["weeks'", "weeks", "week"], "Мне нужна неделя отдыха.", "a week's rest."],
    ["g", "This is my ___ wife. (friend)", "friend's", ["friends'", "friends", "friend"], "Это жена моего друга.", "friend's."]
   ]},
   { task: "**my / mine**, **its / it's**, **a friend of mine**", items: [
    ["g", "Is this coat ___? — Yes, it's mine.", "yours", ["your", "you", "yours'"], "Это твоё пальто? — Да.", "Без существительного → yours."],
    ["g", "That's not my phone. ___ is black.", "Mine", ["My", "Me", "I"], "Это не мой телефон. Мой чёрный.", "mine = my phone."],
    ["g", "The cat is cleaning ___ paws.", "its", ["it's", "it", "its'"], "Кошка вылизывает лапы.", "its — без апострофа."],
    ["g", "___ raining again!", "It's", ["Its", "It", "Its'"], "Опять дождь!", "It's = it is."],
    ["g", "She's a cousin of ___.", "mine", ["me", "my", "I"], "Она моя двоюродная сестра (одна из).", "a cousin of mine."],
    ["g", "This isn't their car. ___ is the red one.", "Theirs", ["Their", "Them", "Theirs'"], "Это не их машина. Их — красная.", "theirs."],
    ["g", "Is this ___ bag or ___?", "your … mine", ["yours … my", "your … my", "yours … mine"], "Это твоя сумка или моя?", "your + сущ., mine без сущ."],
    ["g", "He's an old friend of ___.", "ours", ["our", "us", "we"], "Он наш старый друг.", "a friend of ours."],
    ["g", "The company changed ___ name last year.", "its", ["it's", "their's", "it"], "Компания сменила название в прошлом году.", "its name."],
    ["g", "Whose pen is this? — It's ___.", "hers", ["her", "she", "her's"], "Чья это ручка? — Её.", "hers — без апострофа."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "This is the car of my father.", "This is my father's car.", ["This is my fathers car.", "This is my fathers' car.", "This is car my father's."], "Это машина моего отца.", "Для людей → 's."],
    ["e", "This book is my.", "This book is mine.", ["This book is me.", "This book is my's.", "This is book mine."], "Эта книга моя.", "Без существительного → mine."],
    ["e", "The dog wagged it's tail.", "The dog wagged its tail.", ["The dog wagged its' tail.", "The dog wagged it tail.", "The dog wagged his's tail."], "Собака завиляла хвостом.", "its — без апострофа."],
    ["e", "She is a friend of me.", "She is a friend of mine.", ["She is a friend of my.", "She is a my friend.", "She is friend of mine."], "Она моя подруга.", "a friend of mine."],
    ["e", "My parent's car is new. (both parents)", "My parents' car is new.", ["My parents's car is new.", "My parents car is new.", "My parent car is new."], "Машина моих родителей новая.", "parents'."],
    ["e", "Is this your's?", "Is this yours?", ["Is this your?", "Is this yours'?", "Is this you's?"], "Это твоё?", "yours — без апострофа."],
    ["e", "The childrens' toys are everywhere.", "The children's toys are everywhere.", ["The childrens toys are everywhere.", "The children toys' are everywhere.", "The childs' toys are everywhere."], "Детские игрушки повсюду.", "children's."],
    ["e", "That house is their.", "That house is theirs.", ["That house is their's.", "That house is them.", "That house is theirs'."], "Тот дом — их.", "theirs."],
    ["e", "I met a friend of my brother yesterday.", "I met a friend of my brother's yesterday.", ["I met a friend of my brothers yesterday.", "I met my brother friend yesterday.", "I met a friend my brother's yesterday."], "Вчера я встретил друга моего брата.", "a friend of my brother's."],
    ["e", "Its a beautiful day.", "It's a beautiful day.", ["Its' a beautiful day.", "It a beautiful day.", "It's an beautiful day."], "Прекрасный день.", "It's = it is."]
   ]}
  ]},
{ n: 69, floor: 11, title: "Pronouns: myself / each other / one another", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "Возвратные местоимения: myself, yourself…", p: "Когда подлежащее и дополнение — **один и тот же** человек: «себя».",
      table: [["Подлежащее", "Возвратное"], ["I", "myself"], ["you", "yourself / yourselves"], ["he / she / it", "himself / herself / itself"], ["we", "ourselves"], ["they", "themselves"]],
      ex: ["I cut **myself** while cooking.", "Help **yourself** to some cake!", "Enjoy **yourselves**!"] },
    { k: "B", h: "by myself = сам, один; для усиления", p: "**by myself** = один, без помощи. Также для усиления: «сам, лично».",
      ex: ["She lives **by herself**.", "I made this cake **myself**!", "The president **himself** came to the opening."],
      note: "Не используют с wash, dress, shave, feel, relax, concentrate (обычно): I got up and **washed** (не _washed myself_). I **feel** tired (не _feel myself_)." },
    { k: "C", h: "each other — друг друга", p: "**ourselves** — каждый себя. **each other** — друг друга.",
      table: [["-selves", "each other"], ["They looked at **themselves** in the mirror.", "They looked at **each other**."], ["(каждый на себя)", "(один на другого)"]] }
  ], mistakes: [["I feel myself tired.", "I feel tired.", "feel — без myself."], ["They love themselves. (= one another)", "They love each other.", "Друг друга → each other."], ["She did it by her own self.", "She did it by herself.", "by herself."]] },
  ex: [
   { task: "Use **myself / yourself…**", items: [
    ["g", "Be careful! Don't cut ___!", "yourself", ["you", "yourselves", "your"], "Осторожно! Не порежься!", "you → yourself."],
    ["g", "I taught ___ to play the guitar.", "myself", ["me", "mine", "I"], "Я сам научился играть на гитаре.", "I → myself."],
    ["g", "She looked at ___ in the mirror.", "herself", ["her", "hers", "she"], "Она посмотрела на себя в зеркало.", "she → herself."],
    ["g", "We really enjoyed ___ at the party.", "ourselves", ["us", "ourself", "ours"], "Мы отлично повеселились на вечеринке.", "we → ourselves."],
    ["g", "The children made the cake by ___.", "themselves", ["them", "theirselves", "themself"], "Дети сами испекли торт.", "they → themselves."],
    ["g", "Please help ___ to some food, everyone!", "yourselves", ["yourself", "you", "yours"], "Угощайтесь, все!", "Многим → yourselves."],
    ["g", "He hurt ___ playing football.", "himself", ["him", "hisself", "his"], "Он ушибся, играя в футбол.", "he → himself."],
    ["g", "The door opened by ___.", "itself", ["it", "its", "itselves"], "Дверь открылась сама.", "it → itself."],
    ["g", "I live by ___ in a small flat.", "myself", ["me", "my own", "mine"], "Я живу один в маленькой квартире.", "by myself = один."],
    ["g", "Did you paint this ___? It's amazing!", "yourself", ["you", "your", "yours"], "Ты сам это нарисовал? Потрясающе!", "Усиление → yourself."]
   ]},
   { task: "**-self** or **each other**? Or nothing?", items: [
    ["g", "Aliya and Dana have known ___ since school.", "each other", ["themselves", "theirselves", "them"], "Алия и Дана знают друг друга со школы.", "Друг друга → each other."],
    ["g", "They looked at ___ and smiled.", "each other", ["themselves", "them", "theirs"], "Они посмотрели друг на друга и улыбнулись.", "each other."],
    ["g", "I can't concentrate. I ___ tired.", "feel", ["feel myself", "am feeling myself", "feel me"], "Не могу сосредоточиться. Я устал.", "feel — без myself."],
    ["g", "We help ___ with homework. (= I help her, she helps me)", "each other", ["ourselves", "us", "ours"], "Мы помогаем друг другу с домашкой.", "each other."],
    ["g", "He got up, ___ and went to work.", "washed", ["washed himself up", "washed him", "himself washed"], "Он встал, умылся и пошёл на работу.", "wash — обычно без himself."],
    ["g", "The two teams congratulated ___ after the match.", "each other", ["themselves", "them", "theirselves"], "Команды поздравили друг друга после матча.", "each other."],
    ["g", "Just ___ and enjoy the music.", "relax", ["relax yourself", "relax you", "yourself relax"], "Просто расслабься и наслаждайся музыкой.", "relax — без yourself."],
    ["g", "My grandparents still write letters to ___.", "each other", ["themselves", "them", "theirselves"], "Бабушка с дедушкой до сих пор пишут друг другу письма.", "each other."],
    ["g", "Did you enjoy ___ in Turkey?", "yourselves", ["you", "each other", "yourself them"], "Вам понравилось в Турции?", "enjoy yourselves."],
    ["g", "We don't see ___ very often now.", "each other", ["ourselves", "us", "us both"], "Мы теперь редко видимся.", "Видеть друг друга → each other."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "I feel myself much better today.", "I feel much better today.", ["I feel me much better today.", "I'm feel much better today.", "I feel myself much more better today."], "Сегодня мне намного лучше.", "feel — без myself."],
    ["e", "Arman and Aliya love themselves very much. (= one another)", "Arman and Aliya love each other very much.", ["Arman and Aliya love them very much.", "Arman and Aliya love theirselves very much.", "Arman and Aliya love each others very much."], "Арман и Алия очень любят друг друга.", "each other."],
    ["e", "She did it by her own.", "She did it by herself. / She did it on her own.", ["She did it by her self.", "She did it by hers.", "She did it by herselves."], "Она сделала это сама.", "by herself / on her own."],
    ["e", "They enjoyed themself at the concert.", "They enjoyed themselves at the concert.", ["They enjoyed theirselves at the concert.", "They enjoyed them at the concert.", "They enjoyed each other at the concert."], "Им понравился концерт.", "themselves."],
    ["e", "He shaved himself and got dressed himself.", "He shaved and got dressed.", ["He shaved him and got dressed.", "He shaved hisself and got dressed.", "He himself shaved and dressed himself."], "Он побрился и оделся.", "shave, dress — обычно без himself."],
    ["e", "We introduced us to the new teacher.", "We introduced ourselves to the new teacher.", ["We introduced ourself to the new teacher.", "We introduced each other ourselves to the new teacher.", "We introduced our to the new teacher."], "Мы представились новому учителю.", "ourselves."],
    ["e", "Help you to some tea!", "Help yourself to some tea!", ["Help yourselve to some tea!", "Help your to some tea!", "Help yourselfs to some tea!"], "Угощайся чаем!", "yourself."],
    ["e", "The two friends hugged themselves. (= hugged one another)", "The two friends hugged each other.", ["The two friends hugged them.", "The two friends hugged theirselves.", "The two friends hugged each others."], "Друзья обнялись.", "each other."],
    ["e", "I made this dress me.", "I made this dress myself.", ["I made this dress mine.", "I made myself this dress me.", "I made this dress by me."], "Я сама сшила это платье.", "Усиление → myself."],
    ["e", "You should relax yourself more.", "You should relax more.", ["You should relax you more.", "You should yourself relax more.", "You should relaxing more."], "Тебе стоит больше отдыхать.", "relax — без yourself."]
   ]}
  ]}
);
