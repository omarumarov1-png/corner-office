// Part 1 · Present tenses (Units 1–10). Original explanations and examples.
window.GRAMMAR = window.GRAMMAR || { units: [] };
window.GRAMMAR.units.push(
{ n: 1, floor: 1, title: "am / is / are", cefr: "A1",
  rule: { sections: [
    { k: "A", h: "Глагол **be** в настоящем времени", p: "В русском языке «есть» обычно пропускают: «Я студент». В английском глагол **be** обязателен: [[I am]] a student. У него три формы: **am, is, are**.",
      table: [["Полная форма", "Краткая форма"], ["I **am**", "I'm"], ["he / she / it **is**", "he's / she's / it's"], ["we / you / they **are**", "we're / you're / they're"]] },
    { k: "B", h: "Отрицание: am not / isn't / aren't", p: "Добавьте **not**. В разговоре почти всегда краткие формы.",
      table: [["", "Отрицание"], ["I", "I'm not"], ["he / she / it", "isn't (= is not)"], ["we / you / they", "aren't (= are not)"]],
      ex: ["I'm not hungry, thanks.", "She **isn't** at home — she's at work.", "They **aren't** students, they're teachers."] },
    { k: "C", h: "Где нужен be", p: "Возраст, профессия, место, состояние, погода, цена — везде с **be**:",
      ex: ["I'**m** 15. (не _I have 15_)", "It'**s** cold today.", "My keys **are** in my bag.", "How much **is** this coffee?", "We'**re** late!"],
      note: "Возраст: I am 20, не I have 20. Голод, холод, страх тоже через be: I'm hungry, I'm cold, I'm afraid." }
  ], mistakes: [["She doctor.", "She's a doctor.", "Глагол **be** нельзя пропускать, а перед профессией нужен **a**."], ["I have 16 years.", "I'm 16.", "Возраст — через **be**."], ["They is my friends.", "They are my friends.", "they → **are**."]] },
  ex: [
   { task: "Write **am**, **is** or **are**", items: [
    ["g", "My name ___ Aliya.", "is", ["am", "are", "be"], "Меня зовут Алия.", "name — it → is."],
    ["g", "I ___ from Kazakhstan.", "am", ["is", "are", "be"], "Я из Казахстана.", "I → am."],
    ["g", "We ___ in the same class.", "are", ["is", "am", "be"], "Мы в одном классе.", "we → are."],
    ["g", "The weather ___ nice today.", "is", ["are", "am", "be"], "Сегодня хорошая погода.", "weather — it → is."],
    ["g", "These shoes ___ new.", "are", ["is", "am", "be"], "Эти туфли новые.", "shoes — they → are."],
    ["g", "My brother and I ___ good friends.", "are", ["is", "am", "be"], "Мы с братом хорошие друзья.", "my brother and I = we → are."]
   ]},
   { task: "Make it negative: **'m not / isn't / aren't**", items: [
    ["g", "I'm sorry, I ___ ready yet.", "'m not", ["isn't", "aren't", "not"], "Извините, я ещё не готов.", "I → I'm not (не I amn't)."],
    ["g", "It's Sunday, so the shops ___ open.", "aren't", ["isn't", "'m not", "not is"], "Сегодня воскресенье, магазины не работают.", "shops — they → aren't."],
    ["g", "Dana ___ here. She's at the gym.", "isn't", ["aren't", "'m not", "don't"], "Даны здесь нет. Она в спортзале.", "Dana — she → isn't."],
    ["g", "You ___ late. The lesson starts at nine.", "aren't", ["isn't", "not", "don't"], "Вы не опоздали. Урок в девять.", "you → aren't."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "He have 30 years.", "He's 30.", ["He has 30 years.", "He is 30 years old age.", "He have 30."], "Ему 30 лет.", "Возраст — через be: He's 30 / He's 30 years old."],
    ["e", "I am agree with you.", "I agree with you.", ["I am agreeing with you.", "I'm agree with you.", "I agrees with you."], "Я с вами согласен.", "agree — это глагол, be не нужен."]
   ]}
  ]},
{ n: 2, floor: 1, title: "am / is / are — questions", cefr: "A1",
  rule: { sections: [
    { k: "A", h: "Вопрос: глагол be на первом месте", p: "В вопросе **am/is/are** ставится перед подлежащим.",
      table: [["Утверждение", "Вопрос"], ["You **are** tired.", "**Are** you tired?"], ["She **is** at home.", "**Is** she at home?"], ["I **am** late.", "**Am** I late?"]] },
    { k: "B", h: "Вопросы с what / where / how…", p: "Вопросительное слово + **be** + подлежащее.",
      ex: ["**Where is** your phone?", "**What colour is** your car?", "**How old are** you?", "**Why are** you angry?", "**How much are** these tickets?"] },
    { k: "C", h: "Краткие ответы", p: "Отвечаем **Yes, I am / No, I'm not**. В кратком положительном ответе краткую форму не используют: Yes, I am (не _Yes, I'm_).",
      table: [["Вопрос", "Да", "Нет"], ["Are you ready?", "Yes, I am.", "No, I'm not."], ["Is he busy?", "Yes, he is.", "No, he isn't."], ["Are they here?", "Yes, they are.", "No, they aren't."]] }
  ], mistakes: [["Where you are from?", "Where are you from?", "В вопросе **are** — перед подлежащим."], ["Yes, I'm.", "Yes, I am.", "В кратком «да» — полная форма."]] },
  ex: [
   { task: "Make questions", items: [
    ["g", "___ you a new student here?", "Are", ["Is", "Am", "Do"], "Вы новый студент?", "you → Are you…?"],
    ["g", "Where ___ the station, please?", "is", ["are", "am", "does"], "Где вокзал?", "the station — it → is."],
    ["g", "How old ___ your children?", "are", ["is", "am", "have"], "Сколько лет вашим детям?", "children — they → are."],
    ["g", "___ it far from here?", "Is", ["Are", "Does", "Am"], "Это далеко отсюда?", "it → Is it…?"],
    ["g", "What time ___ the meeting?", "is", ["are", "does", "am"], "Во сколько встреча?", "the meeting — it → is."]
   ]},
   { task: "Give short answers", items: [
    ["g", "Are you hungry? — Yes, I ___.", "am", ["'m", "is", "are"], "Ты голоден? — Да.", "Краткий ответ: Yes, I am."],
    ["g", "Is your sister a student? — No, she ___.", "isn't", ["aren't", "'s not a", "doesn't"], "Твоя сестра студентка? — Нет.", "she → isn't."],
    ["g", "Are your parents at home? — Yes, they ___.", "are", ["is", "'re", "do"], "Родители дома? — Да.", "they → Yes, they are."]
   ]},
   { task: "Put the words in order", items: [
    ["g", "Why ___ you so happy today?", "are", ["is", "do", "am"], "Почему ты сегодня такой счастливый?", "Why + are + you."],
    ["e", "What is your hobbies?", "What are your hobbies?", ["What your hobbies are?", "What is yours hobbies?", "What do your hobbies?"], "Какие у тебя хобби?", "hobbies — множественное → are."]
   ]}
  ]},
{ n: 3, floor: 1, title: "Present Continuous: I am doing", cefr: "A1–A2",
  rule: { sections: [
    { k: "A", h: "Форма: am/is/are + -ing", p: "Действие происходит **сейчас**, в момент речи.",
      table: [["", "be", "+ -ing"], ["I", "am ('m)", "working"], ["he / she / it", "is ('s)", "reading"], ["we / you / they", "are ('re)", "waiting"]],
      ex: ["Please be quiet. The baby **is sleeping**.", "Look! It'**s snowing**.", "I'**m not watching** TV, you can turn it off."] },
    { k: "B", h: "Сейчас — но не обязательно в эту секунду", p: "Present Continuous описывает и то, что идёт **в этот период**: эту неделю, этот семестр, «в последнее время».",
      ex: ["I'**m reading** a great book at the moment.", "She'**s learning** to drive this year.", "Prices **are going** up."] },
    { k: "C", h: "Правописание -ing", p: "make → [[making]] (убираем -e) · sit → [[sitting]] (удваиваем последнюю согласную после краткой гласной) · lie → [[lying]] · play → [[playing]].",
      note: "Удвоение: run → running, swim → swimming, stop → stopping. Но: open → opening, visit → visiting (ударение не на последнем слоге)." }
  ], mistakes: [["I working now.", "I'm working now.", "Без **am/is/are** Continuous не бывает."], ["She is siting near the window.", "She is sitting near the window.", "sit → sitting (удвоение)."], ["Look, it rains!", "Look, it's raining!", "Сейчас, в момент речи → Continuous."]] },
  ex: [
   { task: "Complete with the Present Continuous", items: [
    ["g", "Shh! I ___ on the phone.", "'m talking", ["talk", "'m talk", "talking"], "Тише! Я разговариваю по телефону.", "am + talking."],
    ["g", "Where's Timur? — He ___ a shower.", "'s having", ["has", "having", "is have"], "Где Тимур? — Он в душе.", "have a shower → is having."],
    ["g", "They ___ for the bus. It's late again.", "'re waiting", ["wait", "'s waiting", "waiting"], "Они ждут автобус. Он снова опаздывает.", "they → are waiting."],
    ["g", "You ___ my pen! Give it back.", "'re using", ["use", "'s using", "using"], "Ты пользуешься моей ручкой! Верни.", "you → are using."],
    ["g", "Why ___ you ___? Are you OK?", "are … crying", ["do … cry", "is … crying", "are … cry"], "Почему ты плачешь? Ты в порядке?", "Why are you crying?"]
   ]},
   { task: "Spelling: write the -ing form", items: [
    ["g", "The children are ___ in the pool. (swim)", "swimming", ["swiming", "swimmming", "swimeing"], "Дети плавают в бассейне.", "swim → swimming: удвоение m."],
    ["g", "Mum is ___ a cake. (make)", "making", ["makeing", "makking", "maked"], "Мама печёт торт.", "make → making: -e исчезает."],
    ["g", "He's ___ on the sofa. (lie)", "lying", ["lieing", "liing", "laying"], "Он лежит на диване.", "lie → lying."],
    ["g", "We're ___ our grandparents this weekend. (visit)", "visiting", ["visitting", "visitng", "visiteing"], "Мы навещаем бабушку и дедушку в эти выходные.", "visit → visiting: ударение не на последнем слоге, удвоения нет."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "Be quiet, please — the baby sleeps.", "Be quiet, please — the baby is sleeping.", ["Be quiet, please — the baby sleep.", "Be quiet, please — the baby sleeping.", "Be quiet, please — the baby does sleep."], "Тише, пожалуйста, — ребёнок спит.", "Прямо сейчас → is sleeping."]
   ]}
  ]},
{ n: 4, floor: 1, title: "Present Continuous: questions and negatives", cefr: "A1–A2",
  rule: { sections: [
    { k: "A", h: "Вопрос", p: "**Am/Is/Are** + подлежащее + -ing?",
      table: [["", "Вопрос"], ["I", "Am I talking too fast?"], ["he / she / it", "Is she working today?"], ["we / you / they", "Are they coming?"]],
      ex: ["**What are** you **doing**?", "**Where is** he **going**?", "**Why are** they **laughing**?"] },
    { k: "B", h: "Отрицание", p: "**'m not / isn't / aren't** + -ing.",
      ex: ["I'**m not listening** — sorry, say it again.", "It **isn't raining** now. Let's go out.", "They **aren't working** this week, they're on holiday."] },
    { k: "C", h: "Краткие ответы", p: "Как с be: **Yes, I am. / No, she isn't.** Глагол с -ing в кратком ответе не повторяем.",
      ex: ["Are you enjoying the film? — Yes, I **am**.", "Is it raining? — No, it **isn't**."] }
  ], mistakes: [["What you are doing?", "What are you doing?", "В вопросе **are** — перед you."], ["Do you working?", "Are you working?", "В Continuous вопрос строится с **be**, а не с do."]] },
  ex: [
   { task: "Make questions", items: [
    ["g", "___ you ___ to me? (listen)", "Are … listening", ["Do … listen", "Is … listening", "Are … listen"], "Ты меня слушаешь?", "Are you listening?"],
    ["g", "What ___ she ___? (cook)", "is … cooking", ["does … cook", "are … cooking", "is … cook"], "Что она готовит?", "What is she cooking?"],
    ["g", "Where ___ they ___? (go)", "are … going", ["do … go", "is … going", "are … go"], "Куда они идут?", "Where are they going?"],
    ["g", "___ it ___ outside? (snow)", "Is … snowing", ["Does … snow", "Are … snowing", "Is … snow"], "На улице идёт снег?", "Is it snowing?"]
   ]},
   { task: "Make it negative", items: [
    ["g", "Turn off the radio. I ___ to it. (not listen)", "'m not listening", ["don't listen", "not listening", "isn't listening"], "Выключи радио. Я его не слушаю.", "I'm not listening."],
    ["g", "We can go out — it ___ any more. (not rain)", "isn't raining", ["doesn't rain", "aren't raining", "not raining"], "Можно выйти — дождь больше не идёт.", "it → isn't raining."],
    ["g", "The lift ___ today. Take the stairs. (not work)", "isn't working", ["doesn't work", "aren't working", "not work"], "Лифт сегодня не работает. Иди по лестнице.", "Временная ситуация → isn't working."]
   ]},
   { task: "Short answers and mistakes", items: [
    ["g", "Is your brother studying now? — No, he ___.", "isn't", ["doesn't", "aren't", "isn't studying now"], "Твой брат сейчас занимается? — Нет.", "Краткий ответ: No, he isn't."],
    ["e", "Do you wait for someone?", "Are you waiting for someone?", ["Are you wait for someone?", "Do you waiting for someone?", "You are waiting for someone?"], "Вы кого-то ждёте?", "Сейчас → Are you waiting…?"]
   ]}
  ]},
{ n: 5, floor: 1, title: "Present Simple: I do / work / like", cefr: "A1",
  rule: { sections: [
    { k: "A", h: "Что-то происходит регулярно или вообще", p: "Present Simple — для привычек, фактов, расписаний, того, что верно всегда.",
      ex: ["I **work** in a bank.", "She **drinks** coffee every morning.", "Water **boils** at 100 degrees.", "The museum **opens** at ten."] },
    { k: "B", h: "he / she / it → -s", p: "В третьем лице единственного числа к глаголу добавляется **-s**. Это главная ловушка для русскоговорящих.",
      table: [["", "Глагол"], ["I / we / you / they", "work, live, go"], ["he / she / it", "work**s**, live**s**, go**es**"]],
      note: "Правописание: go → goes, watch → watches, fix → fixes, study → studies (согласная + y → ies), но play → plays. have → **has**." },
    { k: "C", h: "Как часто: always, usually, often, sometimes, never", p: "Наречия частоты стоят **перед** основным глаголом, но **после** be.",
      ex: ["I **usually** get up at seven.", "He **never** eats meat.", "She is **always** late. (после be)"] }
  ], mistakes: [["She work in a hospital.", "She works in a hospital.", "she → work**s**."], ["He gos to school by bus.", "He goes to school by bus.", "go → goes."], ["I go always to the gym.", "I always go to the gym.", "always — перед глаголом."]] },
  ex: [
   { task: "Put the verb in the correct form", items: [
    ["g", "My dad ___ in a factory. (work)", "works", ["work", "working", "is work"], "Мой папа работает на заводе.", "he → works."],
    ["g", "We ___ English three times a week. (have)", "have", ["has", "haves", "having"], "У нас английский три раза в неделю.", "we → have."],
    ["g", "She ___ TV in the evening. (watch)", "watches", ["watchs", "watch", "watching"], "Она смотрит телевизор по вечерам.", "watch → watches (-es после ch)."],
    ["g", "The bus ___ every ten minutes. (go)", "goes", ["gos", "go", "is go"], "Автобус ходит каждые десять минут.", "go → goes."],
    ["g", "My little sister ___ very hard. (study)", "studies", ["studys", "study", "studyes"], "Моя младшая сестра очень усердно учится.", "согласная + y → ies."],
    ["g", "The sun ___ in the east. (rise)", "rises", ["rise", "rising", "is rise"], "Солнце встаёт на востоке.", "Факт → Present Simple, it → rises."]
   ]},
   { task: "Put the adverb in the right place", items: [
    ["g", "I ___ breakfast. (never / have)", "never have", ["have never", "never has", "having never"], "Я никогда не завтракаю.", "Наречие частоты — перед глаголом."],
    ["g", "He ___ tired after work. (always / is)", "is always", ["always is", "always be", "is always be"], "Он всегда устаёт после работы.", "После be: is always."],
    ["g", "We ___ to the cinema on Fridays. (often / go)", "often go", ["go often", "often goes", "are often go"], "Мы часто ходим в кино по пятницам.", "often + go."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "My friend live in Almaty.", "My friend lives in Almaty.", ["My friend living in Almaty.", "My friend is live in Almaty.", "My friend lives at Almaty."], "Мой друг живёт в Алматы.", "my friend = he → lives; живёт в городе — in."]
   ]}
  ]},
{ n: 6, floor: 1, title: "Present Simple negative: I don't…", cefr: "A1",
  rule: { sections: [
    { k: "A", h: "don't / doesn't + глагол", p: "Отрицание: **don't** (do not) или **doesn't** (does not) + глагол **без -s**.",
      table: [["", "Отрицание"], ["I / we / you / they", "**don't** work"], ["he / she / it", "**doesn't** work"]],
      ex: ["I **don't like** horror films.", "She **doesn't eat** sugar.", "It **doesn't matter**."] },
    { k: "B", h: "После doesn't — без -s", p: "Окончание -s «уходит» в **does**: She doesn't **work** (не _doesn't works_).",
      ex: ["He **doesn't have** a car.", "My phone **doesn't work**."] },
    { k: "C", h: "don't с be не используют", p: "С глаголом **be** отрицание — isn't/aren't, без do.",
      ex: ["I'**m not** tired. (не _I don't tired_)", "He **isn't** at home. (не _He doesn't at home_)"] }
  ], mistakes: [["She don't like coffee.", "She doesn't like coffee.", "she → doesn't."], ["He doesn't works here.", "He doesn't work here.", "После doesn't — без -s."], ["I don't hungry.", "I'm not hungry.", "hungry — с be, не с do."]] },
  ex: [
   { task: "Write **don't** or **doesn't**", items: [
    ["g", "I ___ watch much TV.", "don't", ["doesn't", "not", "isn't"], "Я мало смотрю телевизор.", "I → don't."],
    ["g", "My brother ___ like football.", "doesn't", ["don't", "isn't", "not"], "Мой брат не любит футбол.", "he → doesn't."],
    ["g", "They ___ live here any more.", "don't", ["doesn't", "aren't", "not"], "Они здесь больше не живут.", "they → don't."],
    ["g", "This shop ___ open on Mondays.", "doesn't", ["don't", "isn't", "not"], "Этот магазин не работает по понедельникам.", "it → doesn't."]
   ]},
   { task: "Make it negative", items: [
    ["g", "She speaks German. → She ___ German.", "doesn't speak", ["don't speak", "doesn't speaks", "not speaks"], "Она не говорит по-немецки.", "doesn't + speak."],
    ["g", "We have a dog. → We ___ a dog.", "don't have", ["doesn't have", "haven't", "not have"], "У нас нет собаки.", "we → don't have."],
    ["g", "The film starts at eight. → The film ___ at eight.", "doesn't start", ["don't start", "doesn't starts", "isn't start"], "Фильм начинается не в восемь.", "it → doesn't start."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "My mum don't drive.", "My mum doesn't drive.", ["My mum doesn't drives.", "My mum not drive.", "My mum isn't drive."], "Моя мама не водит машину.", "she → doesn't drive."],
    ["e", "He doesn't knows the answer.", "He doesn't know the answer.", ["He don't know the answer.", "He not knows the answer.", "He isn't know the answer."], "Он не знает ответа.", "После doesn't — без -s."]
   ]}
  ]},
{ n: 7, floor: 1, title: "Present Simple questions: Do you…?", cefr: "A1",
  rule: { sections: [
    { k: "A", h: "Do / Does + подлежащее + глагол?", p: "В вопросе нужен помощник **do** или **does**. Основной глагол — без -s.",
      table: [["", "Вопрос"], ["I / we / you / they", "**Do** you work here?"], ["he / she / it", "**Does** she work here?"]] },
    { k: "B", h: "Вопросы с what / where / how often…", p: "Вопросительное слово + **do/does** + подлежащее + глагол.",
      ex: ["**Where do** you **live**?", "**What does** this word **mean**?", "**How often do** you **go** swimming?", "**What time does** the train **leave**?"] },
    { k: "C", h: "Краткие ответы", p: "**Yes, I do. / No, she doesn't.**",
      ex: ["Do you like pizza? — Yes, I **do**.", "Does he play chess? — No, he **doesn't**."] }
  ], mistakes: [["Where you live?", "Where do you live?", "Без **do** вопроса нет."], ["Does she likes music?", "Does she like music?", "После does — без -s."], ["What means this word?", "What does this word mean?", "Нужно does + mean."]] },
  ex: [
   { task: "Write **do** or **does**", items: [
    ["g", "___ you speak Kazakh?", "Do", ["Does", "Are", "Is"], "Ты говоришь по-казахски?", "you → Do."],
    ["g", "Where ___ your sister work?", "does", ["do", "is", "are"], "Где работает твоя сестра?", "she → does."],
    ["g", "How much ___ it cost?", "does", ["do", "is", "are"], "Сколько это стоит?", "it → does."],
    ["g", "What time ___ you usually get up?", "do", ["does", "are", "is"], "Во сколько ты обычно встаёшь?", "you → do."]
   ]},
   { task: "Make questions", items: [
    ["g", "___ your father ___ coffee? (drink)", "Does … drink", ["Do … drink", "Does … drinks", "Is … drink"], "Твой отец пьёт кофе?", "Does + father + drink."],
    ["g", "What ___ this word ___? (mean)", "does … mean", ["do … mean", "does … means", "is … mean"], "Что значит это слово?", "What does it mean?"],
    ["g", "How often ___ they ___ their grandparents? (visit)", "do … visit", ["does … visit", "do … visits", "are … visit"], "Как часто они навещают бабушку с дедушкой?", "they → do + visit."]
   ]},
   { task: "Short answers and mistakes", items: [
    ["g", "Does Aibek play the guitar? — Yes, he ___.", "does", ["do", "is", "plays"], "Айбек играет на гитаре? — Да.", "Yes, he does."],
    ["e", "Do she live near here?", "Does she live near here?", ["Does she lives near here?", "She lives near here?", "Is she live near here?"], "Она живёт рядом?", "she → Does … live."]
   ]}
  ]},
{ n: 8, floor: 1, title: "I am doing or I do? (Present Continuous vs Simple)", cefr: "A2",
  rule: { sections: [
    { k: "A", h: "Сейчас — или вообще?", p: "**Continuous** — то, что идёт сейчас или в этот период. **Simple** — привычки, факты, то, что бывает регулярно.",
      table: [["Present Continuous", "Present Simple"], ["I'**m working** now.", "I **work** every day."], ["She'**s wearing** a hat today.", "She often **wears** hats."], ["It'**s raining**.", "It **rains** a lot in autumn."]] },
    { k: "B", h: "Слова-подсказки", p: "Continuous: **now, at the moment, today, this week, Look!, Listen!** Simple: **every day, usually, often, never, on Mondays**.",
      ex: ["Listen! Somebody **is knocking** at the door.", "I **don't** usually **drink** tea, but I'**m drinking** one now."] },
    { k: "C", h: "Временное и постоянное", p: "Continuous — временно, Simple — постоянно.",
      ex: ["I **live** in Aktobe. (постоянно)", "I'**m living** with my aunt until I find a flat. (временно)"] }
  ], mistakes: [["I am going to school every day.", "I go to school every day.", "every day → Present Simple."], ["Look! The bus comes.", "Look! The bus is coming.", "Look! → прямо сейчас → Continuous."]] },
  ex: [
   { task: "Choose the correct form", items: [
    ["g", "Water ___ at 100 °C.", "boils", ["is boiling", "boil", "boiling"], "Вода кипит при 100 °C.", "Факт → Simple."],
    ["g", "The water ___. Can you turn it off?", "is boiling", ["boils", "boil", "boiled"], "Вода кипит. Выключишь?", "Прямо сейчас → Continuous."],
    ["g", "I ___ to work by bus, but this week I'm walking.", "usually go", ["am usually going", "usually going", "go usually"], "Обычно я езжу на автобусе, а на этой неделе хожу пешком.", "Привычка → Simple."],
    ["g", "Why ___ you ___ a coat? It's warm!", "are … wearing", ["do … wear", "are … wear", "do … wearing"], "Почему ты в пальто? Тепло же!", "Сейчас → Continuous."],
    ["g", "He ___ to the radio while he drives.", "listens", ["is listening", "listening", "listen"], "Он слушает радио, когда ведёт машину.", "Привычка → Simple."],
    ["g", "Be quiet! I ___ to concentrate.", "'m trying", ["try", "tries", "trying"], "Тише! Я пытаюсь сосредоточиться.", "Сейчас → Continuous."]
   ]},
   { task: "Temporary or permanent?", items: [
    ["g", "My parents ___ in Shymkent. They've lived there for 30 years.", "live", ["are living", "lives", "living"], "Мои родители живут в Шымкенте 30 лет.", "Постоянно → Simple."],
    ["g", "I ___ at a friend's place until my flat is ready.", "'m staying", ["stay", "stays", "staying"], "Я живу у друга, пока не готова квартира.", "Временно → Continuous."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "She is going to the gym every Monday.", "She goes to the gym every Monday.", ["She go to the gym every Monday.", "She going to the gym every Monday.", "She is go to the gym every Monday."], "Она ходит в спортзал по понедельникам.", "Регулярно → Simple."]
   ]}
  ]},
{ n: 9, floor: 1, title: "have and have got", cefr: "A1–A2",
  rule: { sections: [
    { k: "A", h: "Обладание: have или have got", p: "Чтобы сказать «у меня есть», используют **have** или **have got** (чаще в британском английском). Смысл одинаковый.",
      table: [["have", "have got"], ["I **have** a bike.", "I'**ve got** a bike."], ["She **has** two sisters.", "She'**s got** two sisters."], ["Do you **have** a pen?", "**Have** you **got** a pen?"], ["I **don't have** time.", "I **haven't got** time."]] },
    { k: "B", h: "Вопросы и отрицания — не смешивайте", p: "С **have**: do/does. С **have got**: have/has. Нельзя: _Do you have got…?_",
      ex: ["**Does** he **have** a car? / **Has** he **got** a car?", "We **don't have** a garden. / We **haven't got** a garden."] },
    { k: "C", h: "have = действие (не обладание)", p: "В выражениях **have breakfast, have a shower, have a good time, have a look** — только **have** (не have got), и возможен Continuous.",
      ex: ["I usually **have** lunch at one.", "We'**re having** a great time!", "**Have** a look at this."] }
  ], mistakes: [["I have got breakfast at 8.", "I have breakfast at 8.", "Действие → только have."], ["Do you have got a pen?", "Have you got a pen? / Do you have a pen?", "Нельзя смешивать do и got."], ["She have a cat.", "She has a cat.", "she → has."]] },
  ex: [
   { task: "Write **have / has / have got / has got**", items: [
    ["g", "My sister ___ long hair.", "has got", ["have got", "is got", "haves"], "У моей сестры длинные волосы.", "she → has got (или has)."],
    ["g", "___ you got any brothers?", "Have", ["Do", "Has", "Are"], "У тебя есть братья?", "Have you got…?"],
    ["g", "Does your flat ___ a balcony?", "have", ["has", "have got", "has got"], "В твоей квартире есть балкон?", "После does — have."],
    ["g", "I'm sorry, I ___ got any change.", "haven't", ["don't", "hasn't", "not"], "Извините, у меня нет мелочи.", "have got → haven't got."]
   ]},
   { task: "Possession or action?", items: [
    ["g", "We usually ___ dinner at seven.", "have", ["have got", "has got", "are having got"], "Мы обычно ужинаем в семь.", "have dinner — действие."],
    ["g", "Where's Arman? — He ___ a shower.", "'s having", ["has got", "have", "'s got"], "Где Арман? — Он в душе.", "Действие сейчас → is having."],
    ["g", "Enjoy the party! ___ a good time!", "Have", ["Have got", "Having", "Has"], "Хорошо повеселиться!", "have a good time — только have."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "Do you have got a car?", "Have you got a car?", ["Do you got a car?", "Have you a car got?", "Are you have a car?"], "У тебя есть машина?", "have got → Have you got…?"]
   ]}
  ]},
{ n: 10, floor: 1, title: "Verbs not used in the continuous (know, want, like…)", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "Глаголы состояния", p: "Некоторые глаголы описывают **состояние**, а не действие. Обычно их не ставят в Continuous, даже если речь о «сейчас».",
      table: [["Группа", "Глаголы"], ["мысли", "know, believe, understand, remember, mean"], ["чувства", "like, love, hate, want, need, prefer"], ["владение", "have (= иметь), own, belong"], ["восприятие", "see, hear, seem"]],
      ex: ["I **know** the answer. (не _I'm knowing_)", "Do you **understand** me now?", "She **wants** a new phone."] },
    { k: "B", h: "think: мнение или процесс", p: "**I think** (= я считаю) — Simple. **I'm thinking** (= обдумываю) — Continuous.",
      ex: ["I **think** it's a good idea.", "I'**m thinking** about my plans for the summer."] },
    { k: "C", h: "see, have, taste — два смысла", p: "Когда глагол означает **действие**, Continuous возможен.",
      ex: ["I **see** what you mean. (понимаю)", "I'**m seeing** the doctor tomorrow. (встречаюсь)", "This soup **tastes** great. / He'**s tasting** the soup. (пробует)"] }
  ], mistakes: [["I'm knowing him well.", "I know him well.", "know — глагол состояния."], ["I am wanting a coffee.", "I want a coffee.", "want — без Continuous."], ["What do you think about now?", "What are you thinking about now?", "Процесс обдумывания → Continuous."]] },
  ex: [
   { task: "Simple or continuous?", items: [
    ["g", "I ___ what you mean.", "understand", ["am understanding", "understanding", "understands"], "Я понимаю, что ты имеешь в виду.", "understand — состояние."],
    ["g", "This bag ___ to my brother.", "belongs", ["is belonging", "belong", "belonging"], "Эта сумка принадлежит моему брату.", "belong — состояние."],
    ["g", "We ___ a bigger flat. This one is too small.", "need", ["are needing", "needs", "needing"], "Нам нужна квартира побольше.", "need — состояние."],
    ["g", "Do you ___ my phone number?", "remember", ["remembering", "remembers", "are remember"], "Ты помнишь мой номер?", "remember — состояние."]
   ]},
   { task: "think, see, have: which meaning?", items: [
    ["g", "I ___ she's right. (= my opinion)", "think", ["'m thinking", "thinking", "thinks"], "Я думаю, она права.", "Мнение → Simple."],
    ["g", "Don't disturb him. He ___ about the problem.", "'s thinking", ["thinks", "think", "thinking"], "Не мешай ему. Он думает над задачей.", "Процесс → Continuous."],
    ["g", "We ___ lunch right now. Can I call you back?", "'re having", ["have", "has", "having"], "Мы сейчас обедаем. Перезвоню?", "have lunch — действие."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "She is liking her new job.", "She likes her new job.", ["She like her new job.", "She is like her new job.", "She liking her new job."], "Ей нравится её новая работа.", "like — глагол состояния."]
   ]}
  ]}
);
