// Part 6 · Questions & short answers (Units 37–42). Original explanations and examples.
window.GRAMMAR.units.push(
{ n: 37, floor: 6, title: "Question word order: Have you…? Is it…? Do they…?", cefr: "A1–A2",
  rule: { sections: [
    { k: "A", h: "Вспомогательный глагол — перед подлежащим", p: "В русском вопрос часто только интонацией: «Ты устал?». В английском **порядок слов меняется**: вспомогательный глагол встаёт перед подлежащим.",
      table: [["Утверждение", "Вопрос"], ["You **are** tired.", "**Are** you tired?"], ["She **has** finished.", "**Has** she finished?"], ["They **can** swim.", "**Can** they swim?"], ["It **will** rain.", "**Will** it rain?"]] },
    { k: "B", h: "Нет вспомогательного — добавляем do / does / did", p: "В Present Simple и Past Simple нет вспомогательного глагола, поэтому нужен **do / does / did**.",
      table: [["Утверждение", "Вопрос"], ["You **live** here.", "**Do** you **live** here?"], ["He **works** at night.", "**Does** he **work** at night?"], ["They **arrived** late.", "**Did** they **arrive** late?"]] },
    { k: "C", h: "Вопросительное слово — в начало", p: "**Question word + вспомогательный + подлежащее + глагол**.",
      ex: ["**Where are** you going?", "**What did** you **say**?", "**How long have** you **been** here?", "**Why can't** you come?"] }
  ], mistakes: [["You are ready?", "Are you ready?", "Интонацией вопрос в английском не делают."], ["Where you live?", "Where do you live?", "Нужен do."], ["What she said?", "What did she say?", "Past Simple → did + say."]] },
  ex: [
   { task: "Make questions from the sentences", items: [
    ["g", "She is a teacher. → ___ she a teacher?", "Is", ["Does", "Do", "Has"], "Она учитель?", "be → Is she…?"],
    ["g", "They have finished. → ___ they finished?", "Have", ["Did", "Do", "Are"], "Они закончили?", "have → Have they…?"],
    ["g", "He can drive. → ___ he drive?", "Can", ["Does", "Is", "Do"], "Он умеет водить?", "can → Can he…?"],
    ["g", "You like football. → ___ you like football?", "Do", ["Are", "Does", "Have"], "Ты любишь футбол?", "Present Simple → Do."],
    ["g", "She speaks French. → ___ she speak French?", "Does", ["Is", "Do", "Has"], "Она говорит по-французски?", "she → Does."],
    ["g", "They went to the park. → ___ they go to the park?", "Did", ["Were", "Do", "Have"], "Они ходили в парк?", "Past Simple → Did."],
    ["g", "It will be sunny. → ___ it be sunny?", "Will", ["Is", "Does", "Would"], "Будет солнечно?", "will → Will it…?"],
    ["g", "He was at home. → ___ he at home?", "Was", ["Did", "Is", "Were"], "Он был дома?", "was → Was he…?"],
    ["g", "We should wait. → ___ we wait?", "Should", ["Do", "Are", "Shall to"], "Нам стоит подождать?", "should → Should we…?"],
    ["g", "The film has started. → ___ the film started?", "Has", ["Did", "Is", "Have"], "Фильм начался?", "has → Has the film…?"]
   ]},
   { task: "Write the question with the question word", items: [
    ["g", "Where ___ you ___? (live / Present Simple)", "do … live", ["are … live", "does … live", "you … live"], "Где ты живёшь?", "Where do you live?"],
    ["g", "What ___ she ___ for breakfast? (have / Past Simple)", "did … have", ["did … had", "was … have", "does … had"], "Что она ела на завтрак?", "did + have."],
    ["g", "How long ___ you ___ English? (study / Present Perfect)", "have … studied", ["did … study", "are … studying", "have … study"], "Как давно ты учишь английский?", "have + studied."],
    ["g", "Why ___ he ___? (cry / now)", "is … crying", ["does … cry", "did … cry", "is … cry"], "Почему он плачет?", "is + crying."],
    ["g", "When ___ the next train ___? (leave / timetable)", "does … leave", ["is … leave", "do … leave", "did … leaves"], "Когда следующий поезд?", "does + leave."],
    ["g", "Which bus ___ I ___? (should / take)", "should … take", ["do … should take", "should … to take", "shall … taking"], "На какой автобус мне сесть?", "should + I + take."],
    ["g", "What time ___ you ___ up yesterday? (get)", "did … get", ["did … got", "were … get", "do … got"], "Во сколько ты встал вчера?", "did + get."],
    ["g", "How many people ___ you ___ to the party? (invite / Present Perfect)", "have … invited", ["did … invited", "are … invite", "have … invite"], "Сколько человек ты пригласил?", "have + invited."],
    ["g", "Where ___ they ___ when you called? (go / Past Continuous)", "were … going", ["did … go", "was … going", "were … go"], "Куда они шли, когда ты позвонил?", "were + going."],
    ["g", "How ___ you ___ to school tomorrow? (get / will)", "will … get", ["do … get will", "are … get", "will … getting"], "Как ты доберёшься до школы завтра?", "will + get."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "You are hungry?", "Are you hungry?", ["Do you hungry?", "Are hungry you?", "You hungry are?"], "Ты голоден?", "Are you…?"],
    ["e", "Where you are staying in Astana?", "Where are you staying in Astana?", ["Where do you staying in Astana?", "Where you staying in Astana?", "Where are staying you in Astana?"], "Где ты остановился в Астане?", "Where are you…?"],
    ["e", "What did she said?", "What did she say?", ["What she said?", "What did she says?", "What does she said?"], "Что она сказала?", "did + say."],
    ["e", "How much this costs?", "How much does this cost?", ["How much does this costs?", "How much is cost this?", "How much this does cost?"], "Сколько это стоит?", "does + cost."],
    ["e", "Why you didn't come?", "Why didn't you come?", ["Why you not came?", "Why did you not came?", "Why don't you came?"], "Почему ты не пришёл?", "Why didn't you…?"],
    ["e", "Has she finish her homework?", "Has she finished her homework?", ["Did she finished her homework?", "Has she finishing her homework?", "Does she finished her homework?"], "Она сделала домашку?", "Has + finished."],
    ["e", "Can you to repeat the question?", "Can you repeat the question?", ["Do you can repeat the question?", "Can you repeating the question?", "Are you can repeat the question?"], "Можешь повторить вопрос?", "Can + repeat."],
    ["e", "When the meeting starts?", "When does the meeting start?", ["When does the meeting starts?", "When is the meeting start?", "When the meeting does start?"], "Когда начинается встреча?", "does + start."],
    ["e", "What time you will arrive?", "What time will you arrive?", ["What time do you will arrive?", "What time will arrive you?", "What time are you will arrive?"], "Во сколько ты приедешь?", "will + you."],
    ["e", "Did they went home?", "Did they go home?", ["Did they goes home?", "They did go home?", "Do they went home?"], "Они пошли домой?", "Did + go."]
   ]}
  ]},
{ n: 38, floor: 6, title: "Who / What questions: subject or object?", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "Вопрос к дополнению — с do/does/did", p: "Если **who/what** — дополнение («кого? что?»), порядок обычный: **Who did you see?**",
      table: [["Предложение", "Вопрос"], ["Aliya called **Timur**.", "Who **did** Aliya **call**? (кому звонила?)"], ["She bought **a dress**.", "What **did** she **buy**?"]] },
    { k: "B", h: "Вопрос к подлежащему — без do/does/did", p: "Если **who/what** — само подлежащее («кто? что?»), вспомогательный глагол **не нужен**, порядок как в утверждении.",
      table: [["Предложение", "Вопрос"], ["**Aliya** called Timur.", "**Who called** Timur? (кто звонил?)"], ["**Something** happened.", "**What happened**?"], ["**A dog** broke the vase.", "**What broke** the vase?"]] },
    { k: "C", h: "which / whose / how many — тоже могут быть подлежащим", p: "",
      ex: ["**Which team won**? (не _Which team did win_)", "**Whose phone is** ringing?", "**How many people came** to the party?", "**Who lives** in that house?"],
      note: "После who в роли подлежащего — глагол в 3-м лице ед. числа: Who **knows** the answer? (не _Who know_)" }
  ], mistakes: [["Who did call you?", "Who called you?", "who = подлежащее → без did."], ["What did happen?", "What happened?", "what = подлежащее."], ["Who know the answer?", "Who knows the answer?", "who → глагол с -s."]] },
  ex: [
   { task: "Subject questions: no **do / does / did**", items: [
    ["g", "Somebody broke the window. → Who ___ the window?", "broke", ["did break", "did broke", "breaks did"], "Кто-то разбил окно. → Кто разбил окно?", "who = подлежащее."],
    ["g", "Something fell. → What ___?", "fell", ["did fall", "did fell", "falled"], "Что-то упало. → Что упало?", "what = подлежащее."],
    ["g", "Someone lives in that flat. → Who ___ in that flat?", "lives", ["does live", "live", "do lives"], "Кто живёт в той квартире?", "who + lives."],
    ["g", "One team won. → Which team ___?", "won", ["did win", "did won", "wins did"], "Какая команда выиграла?", "which team = подлежащее."],
    ["g", "Something is making a noise. → What ___ that noise?", "is making", ["does make", "is make", "did make"], "Что издаёт этот звук?", "what = подлежащее."],
    ["g", "A lot of people came. → How many people ___?", "came", ["did come", "did came", "come"], "Сколько человек пришло?", "how many people = подлежащее."],
    ["g", "Someone has taken my pen. → Who ___ my pen?", "has taken", ["did take", "has take", "have taken"], "Кто взял мою ручку?", "who + has taken."],
    ["g", "Something happened last night. → What ___ last night?", "happened", ["did happen", "did happened", "was happen"], "Что случилось вчера вечером?", "what happened."],
    ["g", "Someone knows the answer. → Who ___ the answer?", "knows", ["does know", "know", "is knowing"], "Кто знает ответ?", "who + knows."],
    ["g", "Somebody's phone is ringing. → Whose phone ___?", "is ringing", ["does ring", "rings is", "is ring"], "Чей телефон звонит?", "whose phone = подлежащее."]
   ]},
   { task: "Subject or object? Choose the right question", items: [
    ["g", "Dana met Arman. → Who ___ Dana ___? (ask about Arman)", "did … meet", ["… met", "does … meet", "did … met"], "Дана встретила Армана. → Кого встретила Дана?", "Об объекте → did + meet."],
    ["g", "Dana met Arman. → Who ___ Arman? (ask about Dana)", "met", ["did meet", "did met", "meets"], "Дана встретила Армана. → Кто встретил Армана?", "О подлежащем → met."],
    ["g", "Mum made a cake. → What ___ Mum ___?", "did … make", ["… made", "does … make", "did … made"], "Мама испекла торт. → Что испекла мама?", "Об объекте → did make."],
    ["g", "The noise woke the baby. → What ___ the baby?", "woke", ["did wake", "did woke", "waked"], "Шум разбудил малыша. → Что разбудило малыша?", "О подлежащем → woke."],
    ["g", "Aibek phoned his grandma. → Who ___ Aibek ___?", "did … phone", ["… phoned", "does … phone", "did … phoned"], "Айбек позвонил бабушке. → Кому позвонил Айбек?", "did + phone."],
    ["g", "His grandma phoned Aibek. → Who ___ Aibek?", "phoned", ["did phone", "did phoned", "phones did"], "Бабушка позвонила Айбеку. → Кто позвонил Айбеку?", "phoned."],
    ["g", "I like this song. → Which song ___ you ___?", "do … like", ["… likes", "does … like", "are … like"], "Какая песня тебе нравится?", "Об объекте → do you like."],
    ["g", "This song won the prize. → Which song ___ the prize?", "won", ["did win", "did won", "wins did"], "Какая песня выиграла приз?", "О подлежащем → won."],
    ["g", "The teacher told us a story. → What ___ the teacher ___ you?", "did … tell", ["… told", "does … tell", "did … told"], "Что рассказал вам учитель?", "did + tell."],
    ["g", "Who ___ to the meeting yesterday? (many people / come)", "came", ["did come", "did came", "comes"], "Кто пришёл на встречу вчера?", "who = подлежащее."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "Who did call you last night?", "Who called you last night?", ["Who did called you last night?", "Who was call you last night?", "Who calls you last night?"], "Кто звонил тебе вчера вечером?", "who = подлежащее → без did."],
    ["e", "What did happen?", "What happened?", ["What did happened?", "What was happen?", "What it happened?"], "Что случилось?", "what = подлежащее."],
    ["e", "Who know the way?", "Who knows the way?", ["Who does know the way?", "Who is know the way?", "Who knowing the way?"], "Кто знает дорогу?", "who → knows."],
    ["e", "Which team did win the cup?", "Which team won the cup?", ["Which team did won the cup?", "Which team wins the cup did?", "Which did team win the cup?"], "Какая команда выиграла кубок?", "Подлежащее → won."],
    ["e", "Who you saw at the party?", "Who did you see at the party?", ["Who did you saw at the party?", "Who saw you at the party? (= meaning changes)", "Who you did see at the party?"], "Кого ты видел на вечеринке?", "Объект → did you see."],
    ["e", "What you want for dinner?", "What do you want for dinner?", ["What does you want for dinner?", "What want you for dinner?", "What are you want for dinner?"], "Что ты хочешь на ужин?", "Объект → do you want."],
    ["e", "How many students did pass the exam?", "How many students passed the exam?", ["How many students did passed the exam?", "How many students was pass the exam?", "How many did students pass the exam?"], "Сколько студентов сдали экзамен?", "Подлежащее → passed."],
    ["e", "Whose bag does belong this?", "Whose bag is this?", ["Whose is bag this?", "Whose bag this is?", "Whose does this bag?"], "Чья это сумка?", "Whose bag is this?"],
    ["e", "Who did break the window?", "Who broke the window?", ["Who did broke the window?", "Who breaked the window?", "Who was break the window?"], "Кто разбил окно?", "Подлежащее → broke."],
    ["e", "Who does live next door?", "Who lives next door?", ["Who live next door?", "Who is live next door?", "Who does lives next door?"], "Кто живёт по соседству?", "Подлежащее → lives."]
   ]}
  ]},
{ n: 39, floor: 6, title: "Questions with prepositions: Who are you talking to?", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "Предлог — в конце вопроса", p: "В русском предлог идёт в начале: «**О чём** ты думаешь?». В английском он обычно **в конце**.",
      table: [["Русский", "Английский"], ["С кем ты разговариваешь?", "**Who** are you talking **to**?"], ["О чём эта книга?", "**What** is this book **about**?"], ["Откуда ты?", "**Where** are you **from**?"], ["Чего ты ждёшь?", "**What** are you waiting **for**?"]] },
    { k: "B", h: "Частые сочетания", p: "Глагол/прилагательное + предлог сохраняются вместе по смыслу.",
      ex: ["What are you looking **at**?", "Who did you go **with**?", "What are you afraid **of**?", "Which hotel did you stay **in**?", "What do you need it **for**?"] },
    { k: "C", h: "Формальный стиль", p: "В официальной речи предлог можно поставить в начало: **To whom** should I send this? Но в разговоре — **Who** should I send this **to**?",
      note: "What … for? = зачем? — **What** did you do that **for**? = Зачем ты это сделал?" }
  ], mistakes: [["About what are you thinking?", "What are you thinking about?", "Предлог — в конец."], ["With who did you go?", "Who did you go with?", "В разговоре — предлог в конце."], ["Where are you?", "Where are you from? (Откуда ты?)", "Откуда → from в конце."]] },
  ex: [
   { task: "Put the preposition at the end", items: [
    ["g", "Who is this present ___? — It's for Mum.", "for", ["to", "of", "with"], "Для кого этот подарок? — Для мамы.", "for = для."],
    ["g", "What are you laughing ___?", "at", ["of", "about to", "for"], "Над чем ты смеёшься?", "laugh at."],
    ["g", "Where does your teacher come ___?", "from", ["of", "in", "at"], "Откуда ваш учитель?", "come from."],
    ["g", "What's the film ___? — It's about space.", "about", ["of", "for", "on to"], "О чём фильм? — О космосе.", "be about."],
    ["g", "Who did you have lunch ___?", "with", ["to", "for", "of"], "С кем ты обедал?", "with = с."],
    ["g", "What are you so worried ___?", "about", ["of", "for", "on"], "О чём ты так переживаешь?", "worried about."],
    ["g", "Which flat do they live ___?", "in", ["at", "on", "to"], "В какой квартире они живут?", "live in."],
    ["g", "Who are you waiting ___?", "for", ["to", "on", "at"], "Кого ты ждёшь?", "wait for."],
    ["g", "What is your brother interested ___?", "in", ["on", "about", "for"], "Чем интересуется твой брат?", "interested in."],
    ["g", "Who does this laptop belong ___?", "to", ["for", "of", "with"], "Кому принадлежит этот ноутбук?", "belong to."]
   ]},
   { task: "Ask the question", items: [
    ["g", "I'm thinking about my exam. → What ___ you thinking ___?", "are … about", ["do … about", "are … of to", "is … about"], "Я думаю об экзамене. → О чём ты думаешь?", "are + about в конце."],
    ["g", "She's talking to her teacher. → Who ___ she talking ___?", "is … to", ["does … to", "is … with to", "are … to"], "Она говорит с учителем. → С кем она говорит?", "is + to."],
    ["g", "We stayed at a small hotel. → Which hotel ___ you stay ___?", "did … at", ["do … at", "did … on", "were … at"], "Мы жили в маленькой гостинице. → В какой гостинице вы жили?", "did + at."],
    ["g", "He's afraid of spiders. → What ___ he afraid ___?", "is … of", ["does … of", "is … from", "are … of"], "Он боится пауков. → Чего он боится?", "afraid of."],
    ["g", "I paid for the tickets. → Who ___ for the tickets?", "paid", ["did pay", "did paid", "pays did"], "Я заплатил за билеты. → Кто заплатил за билеты?", "Подлежащее → без did, предлог остаётся с глаголом."],
    ["g", "This key is for the garage. → What ___ this key ___?", "is … for", ["does … for", "is … to", "are … for"], "Этот ключ от гаража. → От чего этот ключ?", "is + for."],
    ["g", "She's looking at a photo. → What ___ she looking ___?", "is … at", ["does … at", "is … on", "are … at"], "Она смотрит на фото. → На что она смотрит?", "look at."],
    ["g", "They went with their cousins. → Who ___ they go ___?", "did … with", ["do … with", "did … to", "were … with"], "Они ездили с кузенами. → С кем они ездили?", "did + with."],
    ["g", "I need the money for a new bike. → What ___ you need the money ___?", "do … for", ["are … for", "do … to", "does … for"], "Мне нужны деньги на новый велосипед. → На что тебе деньги?", "What … for?"],
    ["g", "The letter is from the bank. → Who ___ the letter ___?", "is … from", ["does … from", "is … of", "are … from"], "Письмо из банка. → От кого письмо?", "be from."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "About what is this book?", "What is this book about?", ["What about is this book?", "About what this book is?", "What this book is about?"], "О чём эта книга?", "Предлог — в конце."],
    ["e", "With who are you going?", "Who are you going with?", ["Who with are you going?", "Who are you going?", "With whom you are going?"], "С кем ты идёшь?", "Разговорный порядок: Who … with?"],
    ["e", "Where are you? (= Откуда ты родом?)", "Where are you from?", ["From where you are?", "Where you are from?", "Where are you of?"], "Откуда ты?", "from в конце."],
    ["e", "For what are you waiting?", "What are you waiting for?", ["What for are you waiting?", "What are you waiting?", "What you are waiting for?"], "Чего ты ждёшь?", "wait for — for в конце."],
    ["e", "What are you looking?", "What are you looking at?", ["At what you are looking?", "What you are looking at?", "What are you look at?"], "На что ты смотришь?", "look at — предлог нужен."],
    ["e", "Who does this bag belong?", "Who does this bag belong to?", ["To who this bag belongs?", "Who this bag belongs to?", "Who does this bag belongs to?"], "Чья это сумка?", "belong to."],
    ["e", "What is she afraid?", "What is she afraid of?", ["Of what she is afraid?", "What she is afraid of?", "What is she afraid from?"], "Чего она боится?", "afraid of."],
    ["e", "In which house do you live in?", "Which house do you live in?", ["In which house you live?", "Which house you live in?", "Which house do you live in in?"], "В каком доме ты живёшь?", "Предлог один раз — в конце."],
    ["e", "What did you do that?", "What did you do that for?", ["For what you did that?", "What you did that for?", "What did you that for do?"], "Зачем ты это сделал?", "What … for? = зачем."],
    ["e", "Who were you talking with to?", "Who were you talking to?", ["To who were you talking?", "Who you were talking to?", "Who were you talking?"], "С кем ты разговаривал?", "talk to."]
   ]}
  ]},
{ n: 40, floor: 6, title: "Question tags: …, isn't it? …, don't you?", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "Разделительный вопрос", p: "Короткий хвостик в конце — «да? не так ли?». **Утверждение → отрицательный хвостик**, **отрицание → положительный**.",
      table: [["Предложение", "Хвостик"], ["It's cold,", "**isn't it?**"], ["You live here,", "**don't you?**"], ["She can't swim,", "**can she?**"], ["They haven't arrived,", "**have they?**"], ["He went home,", "**didn't he?**"]] },
    { k: "B", h: "Как строить", p: "Берём **вспомогательный глагол** из предложения (be, have, can, will…). Если его нет — **do/does/did**. Подлежащее — местоимение.",
      ex: ["Aliya **is** your sister, **isn't she**?", "You **will** help me, **won't you**?", "Your parents **work** in Astana, **don't they**?", "This **is** your bag, **isn't it**?"] },
    { k: "C", h: "Особые случаи", p: "",
      table: [["Предложение", "Хвостик"], ["I'**m** right,", "**aren't I?** (не _amn't I_)"], ["Let's go,", "**shall we?**"], ["Open the door,", "**will you?** (просьба)"], ["Nobody called,", "**did they?** (nobody — отрицание)"], ["There's a problem,", "**isn't there?**"]],
      note: "Интонация: вниз ↘ — уверены, ждём согласия. Вверх ↗ — правда спрашиваем." }
  ], mistakes: [["You like coffee, isn't it?", "You like coffee, don't you?", "Хвостик повторяет глагол: like → don't."], ["She can swim, doesn't she?", "She can swim, can't she?", "can → can't."], ["I'm late, amn't I?", "I'm late, aren't I?", "I am → aren't I."]] },
  ex: [
   { task: "Add the question tag", items: [
    ["g", "It's a beautiful day, ___?", "isn't it", ["is it", "doesn't it", "wasn't it"], "Прекрасный день, правда?", "is → isn't it."],
    ["g", "You're from Almaty, ___?", "aren't you", ["are you", "don't you", "isn't it"], "Ты ведь из Алматы?", "are → aren't you."],
    ["g", "She speaks Chinese, ___?", "doesn't she", ["isn't she", "does she", "don't she"], "Она говорит по-китайски, да?", "speaks → doesn't she."],
    ["g", "They didn't come, ___?", "did they", ["didn't they", "do they", "were they"], "Они ведь не пришли?", "Отрицание → положительный хвостик."],
    ["g", "You can drive, ___?", "can't you", ["can you", "don't you", "aren't you"], "Ты ведь умеешь водить?", "can → can't you."],
    ["g", "He hasn't finished yet, ___?", "has he", ["hasn't he", "does he", "did he"], "Он ещё не закончил, да?", "hasn't → has he."],
    ["g", "We'll see you tomorrow, ___?", "won't we", ["will we", "don't we", "shan't we"], "Увидимся завтра, да?", "will → won't."],
    ["g", "Your brother plays football, ___?", "doesn't he", ["isn't he", "does he", "don't he"], "Твой брат играет в футбол, да?", "plays → doesn't he."],
    ["g", "You were at the concert, ___?", "weren't you", ["were you", "didn't you", "wasn't you"], "Ты ведь был на концерте?", "were → weren't you."],
    ["g", "This isn't your coat, ___?", "is it", ["isn't it", "does it", "is this"], "Это ведь не твоё пальто?", "isn't → is it (this → it)."]
   ]},
   { task: "Special tags", items: [
    ["g", "I'm on the list, ___?", "aren't I", ["amn't I", "am not I", "isn't I"], "Я ведь в списке?", "I'm → aren't I."],
    ["g", "Let's have pizza tonight, ___?", "shall we", ["will we", "don't we", "let's we"], "Давай закажем пиццу, а?", "Let's → shall we."],
    ["g", "Close the window, ___?", "will you", ["do you", "shall you", "don't you"], "Закрой окно, хорошо?", "Просьба → will you."],
    ["g", "Nobody saw us, ___?", "did they", ["didn't they", "did he", "do they"], "Нас ведь никто не видел?", "nobody — отрицание → did they."],
    ["g", "There's a bank near here, ___?", "isn't there", ["isn't it", "is there", "aren't there"], "Тут рядом есть банк, да?", "There is → isn't there."],
    ["g", "Everyone enjoyed the party, ___?", "didn't they", ["didn't he", "did they", "don't they"], "Всем понравилась вечеринка, да?", "everyone → they."],
    ["g", "You've never been to Paris, ___?", "have you", ["haven't you", "did you", "do you"], "Ты ведь никогда не был в Париже?", "never — отрицание → have you."],
    ["g", "Nothing happened, ___?", "did it", ["didn't it", "did they", "does it"], "Ничего ведь не случилось?", "nothing → did it."],
    ["g", "There aren't any tickets left, ___?", "are there", ["aren't there", "are they", "is there"], "Билетов ведь не осталось?", "There aren't → are there."],
    ["g", "Don't be late, ___?", "will you", ["do you", "won't you", "are you"], "Не опаздывай, хорошо?", "Просьба/приказ → will you."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "You like tea, isn't it?", "You like tea, don't you?", ["You like tea, doesn't it?", "You like tea, aren't you?", "You like tea, do you not it?"], "Ты ведь любишь чай?", "like → don't you."],
    ["e", "She can swim, doesn't she?", "She can swim, can't she?", ["She can swim, isn't she?", "She can swim, can she?", "She can swim, couldn't she?"], "Она ведь умеет плавать?", "can → can't she."],
    ["e", "I'm right, amn't I?", "I'm right, aren't I?", ["I'm right, am I not it?", "I'm right, isn't I?", "I'm right, don't I?"], "Я ведь прав?", "I'm → aren't I."],
    ["e", "They went home, wasn't it?", "They went home, didn't they?", ["They went home, didn't it?", "They went home, weren't they?", "They went home, don't they?"], "Они ведь пошли домой?", "went → didn't they."],
    ["e", "He isn't coming, isn't he?", "He isn't coming, is he?", ["He isn't coming, doesn't he?", "He isn't coming, is it?", "He isn't coming, does he?"], "Он ведь не придёт?", "Отрицание → is he."],
    ["e", "Let's go, will we?", "Let's go, shall we?", ["Let's go, don't we?", "Let's go, do we?", "Let's go, shan't we?"], "Пойдём, а?", "Let's → shall we."],
    ["e", "Your sister lives in Taraz, isn't she?", "Your sister lives in Taraz, doesn't she?", ["Your sister lives in Taraz, isn't it?", "Your sister lives in Taraz, don't she?", "Your sister lives in Taraz, does she?"], "Твоя сестра живёт в Таразе, да?", "lives → doesn't she."],
    ["e", "You haven't seen my keys, haven't you?", "You haven't seen my keys, have you?", ["You haven't seen my keys, did you?", "You haven't seen my keys, do you?", "You haven't seen my keys, aren't you?"], "Ты ведь не видел мои ключи?", "Отрицание → have you."],
    ["e", "This is your phone, isn't this?", "This is your phone, isn't it?", ["This is your phone, is it?", "This is your phone, doesn't it?", "This is your phone, isn't that?"], "Это ведь твой телефон?", "this → it."],
    ["e", "Nobody called, didn't they?", "Nobody called, did they?", ["Nobody called, didn't he?", "Nobody called, called they?", "Nobody called, do they?"], "Никто ведь не звонил?", "nobody — отрицание → did they."]
   ]}
  ]},
{ n: 41, floor: 6, title: "Indirect questions: Do you know where…? Can you tell me what…?", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "Вежливый вопрос — прямой порядок слов", p: "После **Do you know…? / Can you tell me…? / I wonder…** вопрос становится частью предложения, и порядок слов — **как в утверждении**.",
      table: [["Прямой вопрос", "Косвенный (вежливый)"], ["Where **is** the station?", "Do you know where **the station is**?"], ["What time **does** it **start**?", "Can you tell me what time **it starts**?"], ["Why **did** she **leave**?", "I wonder why **she left**."]] },
    { k: "B", h: "Да/нет-вопросы: if / whether", p: "Если в прямом вопросе нет вопросительного слова, добавляем **if** или **whether**.",
      ex: ["**Is** the shop open? → Do you know **if the shop is** open?", "**Did** he call? → Can you tell me **whether he called**?", "**Will** it rain? → I wonder **if it will** rain."] },
    { k: "C", h: "Без do / does / did", p: "В косвенном вопросе **do/does/did исчезают**, а глагол принимает нужную форму.",
      ex: ["Do you know where she **lives**? (не _where does she live_)", "Can you tell me how much it **costs**?", "I don't know what he **said**."],
      note: "Знак вопроса ставим, только если всё предложение — вопрос (Do you know…?). После I wonder / I don't know — точка." }
  ], mistakes: [["Do you know where is the bank?", "Do you know where the bank is?", "Прямой порядок слов."], ["Can you tell me what time does it open?", "Can you tell me what time it opens?", "Без does."], ["Do you know is he at home?", "Do you know if he is at home?", "Да/нет → if."]] },
  ex: [
   { task: "Make the questions polite", items: [
    ["g", "Where is the toilet? → Could you tell me where ___?", "the toilet is", ["is the toilet", "does the toilet", "the toilet does"], "Где туалет? → Не подскажете, где туалет?", "Прямой порядок."],
    ["g", "What time does the film start? → Do you know what time ___?", "the film starts", ["does the film start", "the film does start", "starts the film"], "Не знаешь, во сколько начинается фильм?", "Без does, starts."],
    ["g", "How much is this? → Can you tell me how much ___?", "this is", ["is this", "does this", "this costs is"], "Не подскажете, сколько это стоит?", "this is."],
    ["g", "Where did she go? → Do you know where ___?", "she went", ["did she go", "she did go", "went she"], "Не знаешь, куда она пошла?", "Без did, went."],
    ["g", "Why is he angry? → I wonder why ___.", "he is angry", ["is he angry", "does he angry", "he angry is"], "Интересно, почему он злится.", "he is."],
    ["g", "Who called you? → Can I ask who ___?", "called you", ["did call you", "you called did", "did you call"], "Можно спросить, кто тебе звонил?", "who = подлежащее → порядок тот же."],
    ["g", "When does the bank open? → Do you know when ___?", "the bank opens", ["does the bank open", "opens the bank", "the bank does open"], "Не знаете, когда открывается банк?", "the bank opens."],
    ["g", "What did he say? → I didn't hear what ___.", "he said", ["did he say", "he did say", "said he"], "Я не расслышал, что он сказал.", "he said."],
    ["g", "How old is your teacher? → Do you know how old ___?", "your teacher is", ["is your teacher", "does your teacher", "your teacher does"], "Не знаешь, сколько лет учителю?", "your teacher is."],
    ["g", "Where can I buy tickets? → Could you tell me where ___ tickets?", "I can buy", ["can I buy", "do I can buy", "I buy can"], "Не подскажете, где можно купить билеты?", "I can buy."]
   ]},
   { task: "Yes/no questions: **if / whether**", items: [
    ["g", "Is the museum open today? → Do you know ___ the museum is open today?", "if", ["that", "what", "is"], "Не знаете, открыт ли сегодня музей?", "Да/нет → if."],
    ["g", "Did Aliya pass the test? → I wonder ___ Aliya passed the test.", "whether", ["that", "did", "what"], "Интересно, сдала ли Алия тест.", "whether = if."],
    ["g", "Can you come tomorrow? → Let me know ___ you can come tomorrow.", "if", ["that", "can", "do"], "Дай знать, сможешь ли ты прийти завтра.", "if."],
    ["g", "Is there a bus to the airport? → Can you tell me if ___ a bus to the airport?", "there is", ["is there", "does there", "there does"], "Не подскажете, есть ли автобус до аэропорта?", "there is."],
    ["g", "Has the parcel arrived? → Do you know if the parcel ___?", "has arrived", ["did arrive", "has it arrived", "arrived has"], "Не знаешь, пришла ли посылка?", "has arrived."],
    ["g", "Will it be sunny? → I don't know ___ it will be sunny.", "whether", ["that", "will", "what"], "Не знаю, будет ли солнечно.", "whether."],
    ["g", "Does this train stop in Kokshetau? → Could you tell me if this train ___ in Kokshetau?", "stops", ["does stop it", "stop", "is stop"], "Не подскажете, останавливается ли поезд в Кокшетау?", "Без does → stops."],
    ["g", "Are they married? → I'm not sure if ___ married.", "they are", ["are they", "do they", "they do"], "Не уверен, женаты ли они.", "they are."],
    ["g", "Did you lock the door? → I can't remember if I ___ the door.", "locked", ["did lock it", "lock", "have locked it did"], "Не помню, запер ли я дверь.", "locked."],
    ["g", "Is it far? → Do you know how far ___?", "it is", ["is it", "does it", "it does"], "Не знаете, далеко ли это?", "it is."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "Do you know where is the station?", "Do you know where the station is?", ["Do you know where does the station is?", "Do you know where is station?", "Do you know the station where is?"], "Не знаете, где вокзал?", "Прямой порядок."],
    ["e", "Can you tell me what time does the shop close?", "Can you tell me what time the shop closes?", ["Can you tell me what time closes the shop?", "Can you tell me what time the shop does close?", "Can you tell me what time does close the shop?"], "Не подскажете, когда закрывается магазин?", "Без does."],
    ["e", "Do you know is she at home?", "Do you know if she is at home?", ["Do you know is if she at home?", "Do you know she is at home if?", "Do you know whether is she at home?"], "Не знаешь, дома ли она?", "Да/нет → if."],
    ["e", "I wonder where did he go.", "I wonder where he went.", ["I wonder where he did go.", "I wonder where went he.", "I wonder where does he go."], "Интересно, куда он пошёл.", "Без did."],
    ["e", "Could you tell me how much does it cost?", "Could you tell me how much it costs?", ["Could you tell me how much costs it?", "Could you tell me how much it does cost?", "Could you tell me how much is it cost?"], "Не подскажете, сколько это стоит?", "it costs."],
    ["e", "I don't know what is his name.", "I don't know what his name is.", ["I don't know what does his name.", "I don't know his name what is.", "I don't know what his name does."], "Я не знаю, как его зовут.", "his name is."],
    ["e", "Do you know when will they arrive?", "Do you know when they will arrive?", ["Do you know when they arrive will?", "Do you know will they arrive when?", "Do you know when do they arrive?"], "Не знаешь, когда они приедут?", "they will."],
    ["e", "Can you tell me where can I park?", "Can you tell me where I can park?", ["Can you tell me where I park can?", "Can you tell me where do I can park?", "Can you tell me can where I park?"], "Не подскажете, где можно припарковаться?", "I can."],
    ["e", "I'm not sure that the film is good. (= whether)", "I'm not sure if the film is good.", ["I'm not sure is the film good.", "I'm not sure whether is the film good.", "I'm not sure what the film is good."], "Не уверен, хороший ли фильм.", "Сомнение → if/whether."],
    ["e", "Do you know why was she crying?", "Do you know why she was crying?", ["Do you know why she crying was?", "Do you know why did she cry was?", "Do you know was why she crying?"], "Не знаешь, почему она плакала?", "she was crying."]
   ]}
  ]},
{ n: 42, floor: 6, title: "So am I / Neither do I; short answers", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "So … I — «я тоже» (к утверждению)", p: "**So + вспомогательный глагол + подлежащее**. Глагол берём из первой фразы.",
      table: [["Фраза", "«И я тоже»"], ["I'm tired.", "**So am I.**"], ["I like pizza.", "**So do I.**"], ["I've finished.", "**So have I.**"], ["I can swim.", "**So can I.**"], ["I went home.", "**So did I.**"]] },
    { k: "B", h: "Neither / Nor … I — «я тоже не» (к отрицанию)", p: "**Neither (Nor) + вспомогательный глагол + подлежащее** — глагол в положительной форме.",
      table: [["Фраза", "«И я тоже не»"], ["I'm not hungry.", "**Neither am I.**"], ["I don't like rain.", "**Neither do I.**"], ["I haven't seen it.", "**Neither have I.**"], ["I can't drive.", "**Neither can I.**"]],
      note: "Разговорно: **Me too.** (к утверждению) · **Me neither.** (к отрицанию)." },
    { k: "C", h: "Несогласие и краткие ответы", p: "Не согласны — просто вспомогательный глагол: I like it. — **I don't.** / I can't swim. — **I can.**",
      ex: ["Do you think it'll rain? — **I hope not.** / **I think so.**", "Is she coming? — **I don't think so.**", "Are you OK? — Yes, **I am**. (не _Yes, I'm_)"] }
  ], mistakes: [["I like tea. — So I do.", "So do I.", "Порядок: So + глагол + I."], ["I'm not tired. — Neither I'm.", "Neither am I.", "Neither + am + I."], ["I don't like it. — Me too.", "Me neither.", "К отрицанию → Me neither."]] },
  ex: [
   { task: "Agree: **So … I** or **Neither … I**", items: [
    ["g", "I'm hungry. — ___.", "So am I", ["So I am", "Neither am I", "So do I"], "Я голоден. — Я тоже.", "am → So am I."],
    ["g", "I don't eat meat. — ___.", "Neither do I", ["So do I", "Neither I do", "Neither don't I"], "Я не ем мясо. — Я тоже.", "Отрицание → Neither do I."],
    ["g", "I've been to Turkey. — ___.", "So have I", ["So I have", "So did I", "Neither have I"], "Я был в Турции. — Я тоже.", "have → So have I."],
    ["g", "I can't sing. — ___.", "Neither can I", ["So can I", "Neither can't I", "Neither I can"], "Я не умею петь. — Я тоже.", "Neither can I."],
    ["g", "I watched the match last night. — ___.", "So did I", ["So I did", "So watched I", "So have I"], "Я смотрел матч вчера. — Я тоже.", "Past Simple → So did I."],
    ["g", "I wasn't at school yesterday. — ___.", "Neither was I", ["So was I", "Neither wasn't I", "Neither I was"], "Меня вчера не было в школе. — Меня тоже.", "Neither was I."],
    ["g", "I'll be there at six. — ___.", "So will I", ["So I will", "So am I", "Neither will I"], "Я буду там в шесть. — Я тоже.", "will → So will I."],
    ["g", "I love this song. — ___.", "So do I", ["So love I", "So am I", "Neither do I"], "Обожаю эту песню. — Я тоже.", "So do I."],
    ["g", "I haven't done my homework. — ___.", "Neither have I", ["So have I", "Neither haven't I", "Neither I have"], "Я не сделал домашку. — Я тоже.", "Neither have I."],
    ["g", "My sister plays the violin. — ___ my brother.", "So does", ["So do", "Neither does", "So plays"], "Сестра играет на скрипке. — Брат тоже.", "my brother → So does."]
   ]},
   { task: "Disagree and short answers", items: [
    ["g", "I like horror films. — Really? I ___. They scare me.", "don't", ["do", "'m not", "doesn't"], "Я люблю ужастики. — Правда? А я нет.", "Несогласие → I don't."],
    ["g", "I'm not tired. — I ___. I need to sleep.", "am", ["'m", "do", "'m not"], "Я не устал. — А я устал.", "Несогласие → I am."],
    ["g", "I can't swim. — Oh, I ___. I learned last year.", "can", ["can't", "do", "am"], "Я не умею плавать. — А я умею.", "I can."],
    ["g", "Is the shop open? — I ___ so. It's after nine.", "don't think", ["think not", "not think", "doesn't think"], "Магазин открыт? — Не думаю. Уже после девяти.", "I don't think so."],
    ["g", "Will it rain tomorrow? — I hope ___.", "not", ["no", "don't", "not so"], "Завтра будет дождь? — Надеюсь, нет.", "I hope not."],
    ["g", "Is Arman coming to the party? — I think ___.", "so", ["it", "yes", "that"], "Арман придёт? — Думаю, да.", "I think so."],
    ["g", "Are you a student? — Yes, I ___.", "am", ["'m", "do", "are"], "Вы студент? — Да.", "Yes, I am."],
    ["g", "Have you got a pen? — No, I ___, sorry.", "haven't", ["don't", "haven't got it", "'m not"], "У тебя есть ручка? — Нет, извини.", "No, I haven't."],
    ["g", "I don't like coffee. — Me ___.", "neither", ["too", "either not", "so"], "Я не люблю кофе. — Я тоже.", "Me neither."],
    ["g", "I'm going to the gym. — Me ___!", "too", ["neither", "so", "also"], "Я иду в спортзал. — Я тоже!", "Me too."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "I'm cold. — So I am.", "I'm cold. — So am I.", ["I'm cold. — So do I.", "I'm cold. — So I'm.", "I'm cold. — Neither am I."], "Мне холодно. — Мне тоже.", "So + am + I."],
    ["e", "I don't like rain. — So do I.", "I don't like rain. — Neither do I.", ["I don't like rain. — Neither I do.", "I don't like rain. — Neither don't I.", "I don't like rain. — So don't I."], "Я не люблю дождь. — Я тоже.", "Отрицание → Neither."],
    ["e", "I haven't eaten. — Neither haven't I.", "I haven't eaten. — Neither have I.", ["I haven't eaten. — So have I.", "I haven't eaten. — Neither I have.", "I haven't eaten. — Neither did I."], "Я не ел. — Я тоже.", "После neither — положительная форма."],
    ["e", "I went to the cinema. — So went I.", "I went to the cinema. — So did I.", ["I went to the cinema. — So I did.", "I went to the cinema. — So have I.", "I went to the cinema. — So was I."], "Я ходил в кино. — Я тоже.", "Past Simple → So did I."],
    ["e", "I can't drive. — Me too.", "I can't drive. — Me neither.", ["I can't drive. — Me also.", "I can't drive. — So can I.", "I can't drive. — Me either too."], "Я не умею водить. — Я тоже.", "К отрицанию → Me neither."],
    ["e", "Is it far? — I don't think.", "Is it far? — I don't think so.", ["Is it far? — I think not so.", "Is it far? — I not think so.", "Is it far? — I don't think it."], "Это далеко? — Не думаю.", "I don't think so."],
    ["e", "Are you ready? — Yes, I'm.", "Are you ready? — Yes, I am.", ["Are you ready? — Yes, I do.", "Are you ready? — Yes, I'm ready am.", "Are you ready? — Yes, am I."], "Ты готов? — Да.", "В кратком ответе — полная форма."],
    ["e", "My dad likes fishing. — So do my uncle.", "My dad likes fishing. — So does my uncle.", ["My dad likes fishing. — So likes my uncle.", "My dad likes fishing. — So my uncle does.", "My dad likes fishing. — Neither does my uncle."], "Папа любит рыбалку. — Дядя тоже.", "my uncle → does."],
    ["e", "Will you come? — I hope so not.", "Will you come? — I hope so.", ["Will you come? — I hope it.", "Will you come? — I hope yes.", "Will you come? — I'm hope so."], "Ты придёшь? — Надеюсь.", "I hope so / I hope not."],
    ["e", "I wasn't there. — Neither I was.", "I wasn't there. — Neither was I.", ["I wasn't there. — So was I.", "I wasn't there. — Neither wasn't I.", "I wasn't there. — Neither did I."], "Меня там не было. — Меня тоже.", "Neither + was + I."]
   ]}
  ]}
);
