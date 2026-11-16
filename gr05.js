// Part 5 · Modal verbs (Units 30–36). Original explanations and examples.
window.GRAMMAR.units.push(
{ n: 30, floor: 5, title: "can / could / be able to", cefr: "A2",
  rule: { sections: [
    { k: "A", h: "can — умею / могу", p: "**can + глагол** (без to, без -s) — способность или возможность. Отрицание **can't** (cannot).",
      ex: ["She **can speak** three languages.", "I **can't come** tomorrow, sorry.", "**Can** you **swim**? — Yes, I **can**."] },
    { k: "B", h: "could — умел / мог (в прошлом)", p: "**could** — общая способность в прошлом. **couldn't** — не мог.",
      ex: ["When I was five, I **could read**.", "We **couldn't sleep** because of the noise.", "I **could see** the sea from my window."] },
    { k: "C", h: "be able to — во всех остальных временах", p: "У can нет будущего и перфекта. Используем **be able to**. А «смог в конкретной ситуации» — **was able to / managed to**, не could.",
      table: [["Время", "Форма"], ["будущее", "I'**ll be able to** drive next year."], ["Present Perfect", "I **haven't been able to** sleep."], ["после другого модального", "You **might be able to** help."], ["смог один раз", "The fire spread, but everyone **was able to** escape."]] }
  ], mistakes: [["She can to swim.", "She can swim.", "После can — без to."], ["He cans play chess.", "He can play chess.", "can — без -s."], ["I will can help you.", "I'll be able to help you.", "Будущее → will be able to."]] },
  ex: [
   { task: "**can**, **can't**, **could** or **couldn't**", items: [
    ["g", "I ___ play the guitar, but I'd like to learn.", "can't", ["can", "couldn't", "could"], "Я не умею играть на гитаре, но хочу научиться.", "Сейчас не умею → can't."],
    ["g", "My grandmother ___ dance very well when she was young.", "could", ["can", "can't", "couldn't"], "В молодости бабушка отлично танцевала.", "В прошлом умела → could."],
    ["g", "___ you hear me? The connection is bad.", "Can", ["Could you to", "Are", "Do"], "Ты меня слышишь? Связь плохая.", "Can you hear…?"],
    ["g", "We ___ find a parking space, so we were late.", "couldn't", ["can't", "could", "can"], "Мы не смогли найти парковку и опоздали.", "Прошлое, не смогли → couldn't."],
    ["g", "Penguins ___ fly, but they ___ swim very fast.", "can't … can", ["can … can't", "couldn't … could", "can … can"], "Пингвины не летают, но быстро плавают.", "can't … can."],
    ["g", "I ___ open this jar. Can you help?", "can't", ["can", "couldn't to", "could"], "Не могу открыть банку. Поможешь?", "can't."],
    ["g", "When he was a child, he ___ eat vegetables. Now he loves them.", "couldn't", ["can't", "could", "can"], "В детстве он не мог есть овощи.", "couldn't."],
    ["g", "Look! I ___ see the mountains from here.", "can", ["could", "can't", "am can"], "Смотри! Отсюда видно горы.", "can see."],
    ["g", "She ___ speak English before she moved to London.", "couldn't", ["can't", "could", "can"], "До переезда в Лондон она не говорила по-английски.", "couldn't."],
    ["g", "___ your brother drive? — Yes, he got his licence last year.", "Can", ["Could", "Does", "Is"], "Твой брат водит? — Да, получил права в прошлом году.", "Can he drive?"]
   ]},
   { task: "**be able to** in other tenses", items: [
    ["g", "When I finish this course, I ___ speak Spanish. (will)", "'ll be able to", ["'ll can", "can will", "'ll able to"], "Когда закончу курс, смогу говорить по-испански.", "will be able to."],
    ["g", "I ___ sleep well recently. I'm so stressed. (not / Present Perfect)", "haven't been able to", ["can't have", "haven't could", "didn't can"], "В последнее время не могу нормально спать.", "haven't been able to."],
    ["g", "The exam was hard, but I ___ answer all the questions. (managed)", "was able to", ["could", "can", "am able"], "Экзамен был трудный, но я смог ответить на все вопросы.", "Смог в конкретной ситуации → was able to."],
    ["g", "I'd love ___ play the piano.", "to be able to", ["to can", "can", "being able"], "Я бы очень хотел уметь играть на пианино.", "После would love — to be able to."],
    ["g", "Sorry, I ___ come to your party next week.", "won't be able to", ["can't will", "won't can", "don't be able"], "Извини, не смогу прийти на твою вечеринку.", "won't be able to."],
    ["g", "Ask Dana. She might ___ help you.", "be able to", ["can", "could to", "able"], "Спроси Дану. Возможно, она сможет помочь.", "might + be able to."],
    ["g", "After the operation, he ___ walk again. (will)", "'ll be able to", ["'ll can", "can", "will able"], "После операции он снова сможет ходить.", "will be able to."],
    ["g", "The firefighters ___ save everyone from the building.", "were able to", ["could to", "can", "are able"], "Пожарные смогли спасти всех из здания.", "Конкретное успешное действие → were able to."],
    ["g", "I ___ use my phone since I dropped it. (not / Present Perfect)", "haven't been able to", ["couldn't have", "can't", "didn't able"], "С тех пор как я уронил телефон, не могу им пользоваться.", "haven't been able to."],
    ["g", "Being ___ speak two languages is very useful.", "able to", ["can", "could", "able"], "Говорить на двух языках очень полезно.", "being able to."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "She can to speak French.", "She can speak French.", ["She cans speak French.", "She can speaks French.", "She is can speak French."], "Она говорит по-французски.", "can + глагол без to."],
    ["e", "He cans swim very well.", "He can swim very well.", ["He can swims very well.", "He can to swim very well.", "He is can swim very well."], "Он отлично плавает.", "can — без -s."],
    ["e", "I will can visit you next week.", "I'll be able to visit you next week.", ["I will able to visit you next week.", "I can will visit you next week.", "I'll can to visit you next week."], "На следующей неделе я смогу к тебе приехать.", "will be able to."],
    ["e", "Do you can help me?", "Can you help me?", ["Are you can help me?", "Can you to help me?", "Do you able help me?"], "Ты можешь мне помочь?", "Вопрос: Can you…?"],
    ["e", "I can't to find my keys.", "I can't find my keys.", ["I don't can find my keys.", "I can't finding my keys.", "I not can find my keys."], "Не могу найти ключи.", "can't + find."],
    ["e", "Yesterday I could finish the race although I was tired.", "Yesterday I was able to finish the race although I was tired.", ["Yesterday I can finish the race although I was tired.", "Yesterday I could to finish the race although I was tired.", "Yesterday I am able finish the race although I was tired."], "Вчера я смог закончить забег, хотя устал.", "Конкретный успех → was able to."],
    ["e", "I haven't could sleep.", "I haven't been able to sleep.", ["I haven't can sleep.", "I couldn't have sleep.", "I haven't able to sleep."], "Я не мог уснуть.", "haven't been able to."],
    ["e", "When I was young, I can run fast.", "When I was young, I could run fast.", ["When I was young, I can to run fast.", "When I was young, I could ran fast.", "When I was young, I cans run fast."], "В молодости я быстро бегал.", "Прошлое → could."],
    ["e", "My little brother can reads.", "My little brother can read.", ["My little brother cans read.", "My little brother can to read.", "My little brother is can read."], "Мой младший брат умеет читать.", "can + read."],
    ["e", "I'd like to can drive.", "I'd like to be able to drive.", ["I'd like can drive.", "I'd like to could drive.", "I'd like being can drive."], "Я хотел бы уметь водить.", "to be able to."]
   ]}
  ]},
{ n: 31, floor: 5, title: "must / have to / mustn't / don't have to", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "must и have to — «надо»", p: "Оба выражают необходимость. **must** — чаще личное мнение говорящего («я считаю, надо»). **have to** — правило, обстоятельства («так требуют»).",
      ex: ["I **must** call my mum — it's her birthday. (сам решил)", "I **have to** wear a uniform at school. (правило)", "She **has to** get up at six every day."] },
    { k: "B", h: "mustn't и don't have to — совсем разное!", p: "**mustn't** = нельзя, запрещено. **don't have to** = не обязательно, можно не делать.",
      table: [["mustn't (нельзя)", "don't have to (не нужно)"], ["You **mustn't** smoke here.", "You **don't have to** come if you're busy."], ["We **mustn't** be late.", "We **don't have to** hurry — we have time."]] },
    { k: "C", h: "В прошлом и будущем — только have to", p: "У must нет прошедшего. Прошлое: **had to**; будущее: **will have to**; вопрос: **Do you have to…?**",
      ex: ["I **had to** wait for an hour yesterday.", "You'**ll have to** show your passport.", "**Did** you **have to** pay for parking?", "**Do** I **have to** fill in this form?"] }
  ], mistakes: [["You mustn't come. (= не обязательно)", "You don't have to come.", "mustn't = нельзя, а не «не обязательно»."], ["I must to go.", "I must go.", "После must — без to."], ["Yesterday I must work late.", "Yesterday I had to work late.", "Прошлое → had to."]] },
  ex: [
   { task: "**must** or **have to / has to**", items: [
    ["g", "In this school, students ___ wear a uniform. (rule)", "have to", ["has to", "must to", "having to"], "В этой школе ученики обязаны носить форму.", "Правило → have to."],
    ["g", "I ___ remember to buy Dad a present. (I think it's important)", "must", ["have", "has to", "must to"], "Надо не забыть купить папе подарок.", "Личное решение → must."],
    ["g", "My mum ___ work on Saturdays. (her job)", "has to", ["have to", "must to", "musts"], "Маме приходится работать по субботам.", "she → has to."],
    ["g", "You ___ try this cake. It's delicious! (strong advice)", "must", ["have", "has to", "must to"], "Ты обязательно должен попробовать этот торт!", "Сильный совет → must."],
    ["g", "We ___ show our tickets at the entrance. (rule)", "have to", ["has to", "must to", "having"], "На входе надо показать билеты.", "Правило → have to."],
    ["g", "___ you ___ get up early tomorrow?", "Do … have to", ["Must … to", "Have … to", "Does … have to"], "Тебе завтра рано вставать?", "Do you have to…?"],
    ["g", "He ___ take medicine three times a day. (doctor's orders)", "has to", ["have to", "musts", "must to"], "Ему нужно принимать лекарство три раза в день.", "has to."],
    ["g", "I'm really tired. I ___ go to bed early tonight.", "must", ["has to", "must to", "musts"], "Я очень устал. Надо лечь пораньше.", "Сам решил → must."],
    ["g", "Drivers ___ stop at a red light.", "have to", ["has to", "must to", "having to"], "Водители должны останавливаться на красный.", "Правило → have to (или must)."],
    ["g", "What time ___ she ___ be at work?", "does … have to", ["must … to", "do … have to", "has … to"], "Во сколько ей нужно быть на работе?", "does she have to…?"]
   ]},
   { task: "**mustn't** or **don't / doesn't have to**?", items: [
    ["g", "You ___ use your phone during the exam. It's forbidden.", "mustn't", ["don't have to", "doesn't have to", "must"], "Во время экзамена нельзя пользоваться телефоном.", "Запрещено → mustn't."],
    ["g", "It's Saturday tomorrow, so I ___ get up early.", "don't have to", ["mustn't", "doesn't have to", "must"], "Завтра суббота, рано вставать не нужно.", "Не обязательно → don't have to."],
    ["g", "You ___ touch that wire. It's dangerous!", "mustn't", ["don't have to", "haven't to", "must"], "Не трогай этот провод. Опасно!", "Нельзя → mustn't."],
    ["g", "She ___ cook tonight — we're eating out.", "doesn't have to", ["mustn't", "don't have to", "must"], "Ей не нужно готовить сегодня — едим в кафе.", "she → doesn't have to."],
    ["g", "We ___ tell anyone. It's a secret!", "mustn't", ["don't have to", "doesn't have to", "have to"], "Никому нельзя говорить. Это секрет!", "mustn't."],
    ["g", "You ___ pay — the museum is free today.", "don't have to", ["mustn't", "doesn't have to", "must"], "Платить не нужно — сегодня в музей бесплатно.", "don't have to."],
    ["g", "Passengers ___ smoke on the plane.", "mustn't", ["don't have to", "doesn't have to", "must"], "Пассажирам нельзя курить в самолёте.", "mustn't."],
    ["g", "He ___ wear a suit. The office is casual.", "doesn't have to", ["mustn't", "don't have to", "must"], "Ему не обязательно носить костюм.", "doesn't have to."],
    ["g", "You ___ forget your passport. You can't travel without it.", "mustn't", ["don't have to", "doesn't have to", "have"], "Нельзя забыть паспорт.", "mustn't."],
    ["g", "We ___ hurry. The film starts in an hour.", "don't have to", ["mustn't", "doesn't have to", "must"], "Можно не спешить. Фильм через час.", "don't have to."]
   ]},
   { task: "Past and future: **had to / will have to**. Find the mistake", items: [
    ["g", "The bus didn't come, so I ___ walk to school. (past)", "had to", ["must", "have to", "musted"], "Автобус не пришёл, пришлось идти пешком.", "Прошлое → had to."],
    ["g", "When you start work, you ___ get up at six. (future)", "'ll have to", ["'ll must", "must will", "have"], "Когда начнёшь работать, придётся вставать в шесть.", "will have to."],
    ["g", "Did you ___ wait long at the doctor's?", "have to", ["must", "had to", "must to"], "Тебе пришлось долго ждать у врача?", "Did you have to…?"],
    ["g", "We ___ pay extra for the bags. It was included. (past, negative)", "didn't have to", ["mustn't", "hadn't to", "didn't must"], "Нам не пришлось доплачивать за багаж.", "didn't have to."],
    ["e", "I must to leave now.", "I must leave now.", ["I must leaving now.", "I musts leave now.", "I must leaves now."], "Мне нужно идти.", "must + глагол без to."],
    ["e", "Yesterday we must stay at home.", "Yesterday we had to stay at home.", ["Yesterday we have to stay at home.", "Yesterday we musted stay at home.", "Yesterday we must stayed at home."], "Вчера нам пришлось сидеть дома.", "Прошлое → had to."],
    ["e", "You mustn't bring food. We have plenty. (= not necessary)", "You don't have to bring food. We have plenty.", ["You haven't to bring food. We have plenty.", "You don't must bring food. We have plenty.", "You mustn't to bring food. We have plenty."], "Еду можно не приносить — у нас много.", "Не обязательно → don't have to."],
    ["e", "She have to work tonight.", "She has to work tonight.", ["She haves to work tonight.", "She has to works tonight.", "She must to work tonight."], "Ей нужно работать сегодня вечером.", "she → has to."],
    ["e", "Must I to sign here?", "Do I have to sign here? / Must I sign here?", ["Have I to sign here?", "Do I must sign here?", "Must I signing here?"], "Мне нужно здесь расписаться?", "Do I have to…?"],
    ["e", "You will must show your ID.", "You'll have to show your ID.", ["You will have show your ID.", "You must will show your ID.", "You'll must to show your ID."], "Придётся показать удостоверение.", "will have to."]
   ]}
  ]},
{ n: 32, floor: 5, title: "should / ought to / had better", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "should — совет, мнение", p: "**should + глагол** = «стоит, следует». **shouldn't** = «не стоит».",
      ex: ["You **should see** a doctor.", "You **shouldn't eat** so much sugar.", "**Should** I **call** her? — Yes, I think you **should**.", "I think we **should** leave now. / I don't think you **should** go."] },
    { k: "B", h: "ought to — то же, что should", p: "**ought to** = should, немного формальнее. Отрицание редкое: **oughtn't to**.",
      ex: ["You **ought to** apologise.", "We **ought to** book a table — it's Friday."] },
    { k: "C", h: "had better — «лучше бы» (иначе будет плохо)", p: "**had better ('d better) + глагол** — сильнее, чем should: есть риск или предупреждение. Отрицание **'d better not**.",
      table: [["should", "had better"], ["You **should** read this book. (совет)", "You'**d better** hurry or you'll miss the bus. (иначе — проблема)"], ["—", "We'**d better not** be late again."]],
      note: "had better — о конкретной ситуации сейчас, не об общих советах. Форма **had**, но смысл — настоящее/будущее." }
  ], mistakes: [["You should to rest.", "You should rest.", "После should — без to."], ["You had better to go.", "You'd better go.", "После had better — без to."], ["You'd not better be late.", "You'd better not be late.", "Отрицание: 'd better not."]] },
  ex: [
   { task: "Give advice with **should / shouldn't**", items: [
    ["g", "You look tired. You ___ go to bed early.", "should", ["shouldn't", "should to", "must to"], "Ты выглядишь уставшим. Тебе стоит лечь пораньше.", "Совет → should."],
    ["g", "You ___ drive so fast. It's dangerous.", "shouldn't", ["should", "don't should", "shouldn't to"], "Не стоит так быстро ездить. Опасно.", "shouldn't."],
    ["g", "___ I take an umbrella? — Yes, it might rain.", "Should", ["Do I should", "Ought", "Had"], "Взять зонт? — Да, может пойти дождь.", "Should I…?"],
    ["g", "People ___ throw rubbish in the street.", "shouldn't", ["should", "don't should", "ought"], "Не следует мусорить на улице.", "shouldn't."],
    ["g", "I think you ___ apologise to her.", "should", ["shouldn't to", "should to", "ought"], "Думаю, тебе стоит перед ней извиниться.", "I think you should…"],
    ["g", "I don't think you ___ tell him the truth yet.", "should", ["shouldn't", "should to", "ought"], "Не думаю, что стоит пока говорить ему правду.", "I don't think you should… (а не _think you shouldn't_)."],
    ["g", "What ___ I wear to the interview?", "should", ["do I should", "ought", "must to"], "Что мне надеть на собеседование?", "What should I…?"],
    ["g", "You ___ spend so much time on your phone.", "shouldn't", ["should", "shouldn't to", "don't should"], "Не стоит столько сидеть в телефоне.", "shouldn't."],
    ["g", "The film was great. You ___ see it.", "should", ["shouldn't", "should to", "had"], "Фильм отличный. Стоит посмотреть.", "should."],
    ["g", "Where ___ we go for dinner tonight?", "should", ["do we should", "ought", "had"], "Куда пойдём ужинать?", "Where should we…?"]
   ]},
   { task: "**ought to** and **had better**", items: [
    ["g", "You ___ to thank your teacher for her help.", "ought", ["should", "had", "must"], "Тебе следует поблагодарить учителя.", "ought to."],
    ["g", "It's going to rain. We'd ___ take an umbrella.", "better", ["best", "should", "rather"], "Будет дождь. Лучше взять зонт.", "had better."],
    ["g", "You'd better ___ late again, or the boss will be angry.", "not be", ["not to be", "don't be", "be not"], "Лучше больше не опаздывай, а то начальник рассердится.", "'d better not."],
    ["g", "The baby is asleep. We ___ make any noise.", "'d better not", ["'d not better", "hadn't better to", "better don't"], "Малыш спит. Лучше не шуметь.", "'d better not."],
    ["g", "We ___ to leave now if we want to catch the train.", "ought", ["should", "had", "better"], "Нам стоит выйти сейчас, если хотим успеть на поезд.", "ought to."],
    ["g", "You'd better ___ your homework before Dad gets home.", "finish", ["to finish", "finishing", "finished"], "Лучше доделай уроки до прихода папы.", "had better + глагол без to."],
    ["g", "That road is icy. You'd better ___ carefully.", "drive", ["to drive", "driving", "drove"], "Дорога скользкая. Лучше езжай осторожно.", "had better + drive."],
    ["g", "Your phone is at 2%. You'd better ___ it.", "charge", ["to charge", "charging", "charged"], "У тебя 2% зарядки. Лучше заряди.", "had better + charge."],
    ["g", "We ___ to visit Grandma more often.", "ought", ["should", "had", "better"], "Нам следует чаще навещать бабушку.", "ought to."],
    ["g", "It's late. I'd ___ go home now.", "better", ["best", "rather to", "should"], "Поздно. Пойду-ка я домой.", "I'd better go."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "You should to drink more water.", "You should drink more water.", ["You should drinking more water.", "You should drinks more water.", "You shoulds drink more water."], "Тебе стоит пить больше воды.", "should + глагол без to."],
    ["e", "You had better to hurry.", "You'd better hurry.", ["You had better hurrying.", "You had better hurried.", "You better had hurry."], "Тебе лучше поторопиться.", "had better + hurry."],
    ["e", "You'd not better touch it.", "You'd better not touch it.", ["You hadn't better to touch it.", "You'd better don't touch it.", "You'd better not to touch it."], "Лучше это не трогать.", "'d better not."],
    ["e", "Do you think I should to call him?", "Do you think I should call him?", ["Do you think I should calling him?", "Do you think should I call him?", "Do you think I do should call him?"], "Думаешь, мне стоит ему позвонить?", "should + call."],
    ["e", "I think you shouldn't go. (more natural)", "I don't think you should go.", ["I think you don't should go.", "I don't think you shouldn't go.", "I not think you should go."], "Не думаю, что тебе стоит идти.", "Естественнее: I don't think you should."],
    ["e", "He oughts to study more.", "He ought to study more.", ["He ought study more.", "He oughts study more.", "He ought to studies more."], "Ему стоит больше заниматься.", "ought — без -s."],
    ["e", "Should we to book a table?", "Should we book a table?", ["Do we should book a table?", "Should we booking a table?", "Shall we to book a table?"], "Забронировать столик?", "Should we + book."],
    ["e", "You should eat less sweets. (countable)", "You should eat fewer sweets.", ["You should to eat fewer sweets.", "You should eat little sweets.", "You should eats fewer sweets."], "Тебе стоит есть меньше конфет.", "sweets — исчисляемые → fewer."],
    ["e", "She had better calls her parents.", "She'd better call her parents.", ["She had better to call her parents.", "She has better call her parents.", "She'd better calling her parents."], "Ей лучше позвонить родителям.", "had better + call."],
    ["e", "You should went to the doctor yesterday.", "You should have gone to the doctor yesterday.", ["You should go to the doctor yesterday.", "You should to go to the doctor yesterday.", "You should gone to the doctor yesterday."], "Тебе надо было вчера сходить к врачу.", "Прошлое → should have gone (Unit 36)."]
   ]}
  ]},
{ n: 33, floor: 5, title: "may / might — possibility", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "may / might — возможно", p: "**may / might + глагол** — может быть, возможно (мы не уверены). might — чуть менее уверенно.",
      ex: ["It **might rain** later. Take a coat.", "She **may be** at the library.", "I **might go** to the party, but I'm not sure."] },
    { k: "B", h: "Отрицание: may not / might not", p: "**might not / may not** = возможно, не… (не путайте с can't = точно нет).",
      ex: ["He **might not come** — he's ill.", "I **may not have** time tomorrow.", "The shop **might not be** open on Sunday."] },
    { k: "C", h: "may/might be doing и could", p: "**might be + -ing** — возможно, сейчас происходит. **could** тоже выражает возможность.",
      table: [["Фраза", "Значение"], ["She's not answering. She **might be driving**.", "возможно, сейчас за рулём"], ["Don't eat that. It **could be** poisonous.", "может быть ядовитым"], ["Take an umbrella. It **may** rain.", "возможно, пойдёт дождь"]],
      note: "Вопросы с might редки. Вместо _Might it rain?_ лучше **Do you think it will rain?** / **Is it likely to rain?**" }
  ], mistakes: [["It might to rain.", "It might rain.", "После might — без to."], ["Maybe she might come.", "She might come. / Maybe she'll come.", "maybe + might — повтор."], ["She mights be late.", "She might be late.", "might — без -s."]] },
  ex: [
   { task: "Complete with **might / may** + verb", items: [
    ["g", "Take a jacket. It ___ cold later. (get)", "might get", ["might to get", "mights get", "might gets"], "Возьми куртку. Позже может похолодать.", "might + get."],
    ["g", "I'm not sure, but I ___ to the cinema tonight. (go)", "might go", ["might to go", "might going", "may to go"], "Не уверен, но, может, схожу в кино.", "might go."],
    ["g", "Where's Aidar? — I don't know. He ___ in his room. (be)", "may be", ["may to be", "mays be", "may is"], "Где Айдар? — Не знаю. Может, у себя.", "may be."],
    ["g", "Don't leave your bag there. Someone ___ it. (take)", "might take", ["might takes", "might to take", "mights take"], "Не оставляй сумку там. Кто-нибудь может взять.", "might take."],
    ["g", "We ___ a dog next year. We're thinking about it. (get)", "may get", ["may to get", "may gets", "mays get"], "Возможно, в следующем году заведём собаку.", "may get."],
    ["g", "Call her now. She ___ at home later. (not be)", "might not be", ["might not to be", "mightn't is", "not might be"], "Позвони сейчас. Позже её может не быть дома.", "might not be."],
    ["g", "The test ___ easier than you think. (be)", "might be", ["might is", "might to be", "might being"], "Тест может оказаться легче, чем ты думаешь.", "might be."],
    ["g", "I ___ finish the work today — there's a lot to do. (not)", "may not", ["mayn't to", "not may", "may not to"], "Возможно, сегодня не закончу — много дел.", "may not."],
    ["g", "Be careful on the stairs. You ___. (fall)", "might fall", ["might falls", "might to fall", "mights fall"], "Осторожно на лестнице. Можешь упасть.", "might fall."],
    ["g", "They ___ us — they don't know the address. (not find)", "may not find", ["may not to find", "not may find", "mayn't finds"], "Возможно, они нас не найдут — не знают адреса.", "may not find."]
   ]},
   { task: "**might be doing**, **could**, or **can't**?", items: [
    ["g", "He's not answering. He ___ a shower. (have)", "might be having", ["might have", "might be have", "might having"], "Он не отвечает. Может, в душе.", "Возможно, сейчас → might be + -ing."],
    ["g", "Don't touch the dog. It ___ bite you.", "could", ["can't", "couldn't", "mustn't"], "Не трогай собаку. Она может укусить.", "Возможность → could."],
    ["g", "That ___ be Dana. She's in Paris this week.", "can't", ["might", "could", "may"], "Это не может быть Дана. Она на этой неделе в Париже.", "Точно нет → can't."],
    ["g", "Where's Mum? — She ___ shopping. She often goes on Saturdays. (do)", "might be doing", ["might do", "might be do", "might doing"], "Где мама? — Может, за покупками.", "might be doing."],
    ["g", "I'm not sure the shop is open. It ___ be closed.", "could", ["can't", "must not", "couldn't"], "Не уверен, что магазин открыт. Может быть закрыт.", "could be."],
    ["g", "The lights are off. They ___ sleeping.", "might be", ["might", "might being", "might are"], "Свет выключен. Возможно, они спят.", "might be sleeping."],
    ["g", "Is it going to snow? — It ___. Look at the sky.", "might", ["might to", "mights", "might be"], "Пойдёт снег? — Может. Посмотри на небо.", "Краткий ответ: It might."],
    ["g", "Don't wait for me. I ___ be late.", "may", ["may to", "mays", "may am"], "Не ждите меня. Я могу опоздать.", "may be late."],
    ["g", "Do you think it ___ rain tomorrow? (natural question)", "will", ["might to", "may", "mights"], "Как думаешь, завтра будет дождь?", "Вопрос: Do you think it will…?"],
    ["g", "He looks worried. He ___ waiting for exam results.", "may be", ["may", "may being", "may is"], "Он выглядит обеспокоенным. Может, ждёт результатов экзамена.", "may be + -ing."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "It might to snow tonight.", "It might snow tonight.", ["It might snows tonight.", "It mights snow tonight.", "It might snowing tonight."], "Ночью может пойти снег.", "might + snow."],
    ["e", "She mights be at work.", "She might be at work.", ["She might is at work.", "She might to be at work.", "She mights is at work."], "Она, может быть, на работе.", "might — без -s."],
    ["e", "Maybe she might come later.", "She might come later.", ["Maybe she might to come later.", "She maybe might come later.", "She might comes later."], "Может, она придёт позже.", "maybe + might — повтор."],
    ["e", "I may not to go to school tomorrow.", "I may not go to school tomorrow.", ["I may not going to school tomorrow.", "I don't may go to school tomorrow.", "I mayn't to go to school tomorrow."], "Возможно, завтра я не пойду в школу.", "may not + go."],
    ["e", "He might is at the gym.", "He might be at the gym.", ["He might being at the gym.", "He might to be at the gym.", "He mights be at the gym."], "Он, может, в спортзале.", "might + be."],
    ["e", "They may coming tomorrow.", "They may come tomorrow. / They may be coming tomorrow.", ["They may to come tomorrow.", "They may comes tomorrow.", "They mays come tomorrow."], "Возможно, они придут завтра.", "may + come."],
    ["e", "That can be Arman — he's in London. (= impossible)", "That can't be Arman — he's in London.", ["That mustn't be Arman — he's in London.", "That might be Arman — he's in London.", "That couldn't to be Arman — he's in London."], "Это не может быть Арман — он в Лондоне.", "Невозможно → can't."],
    ["e", "Might it rain later?", "Do you think it will rain later?", ["Might it to rain later?", "Does it might rain later?", "Is it might rain later?"], "Как думаешь, позже будет дождь?", "Вопрос — естественнее с will."],
    ["e", "We might going to Almaty in July.", "We might go to Almaty in July.", ["We might to go to Almaty in July.", "We might goes to Almaty in July.", "We mights go to Almaty in July."], "Возможно, в июле мы поедем в Алматы.", "might + go."],
    ["e", "She may not answers the phone.", "She may not answer the phone.", ["She may not to answer the phone.", "She mayn't answers the phone.", "She doesn't may answer the phone."], "Она может не ответить на звонок.", "may not + answer."]
   ]}
  ]},
{ n: 34, floor: 5, title: "must / can't — deduction (it must be, it can't be)", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "must be — наверняка (вывод)", p: "**must** — мы **уверены**, что это правда, исходя из фактов.",
      ex: ["You've been travelling all day. You **must be** tired.", "The lights are on. They **must be** at home.", "She's got a Ferrari. She **must earn** a lot."] },
    { k: "B", h: "can't be — точно не", p: "Противоположность must — **can't** (а не _mustn't_).",
      ex: ["You've just eaten. You **can't be** hungry!", "That **can't be** right. Check it again.", "He **can't be** 50 — he looks 30."] },
    { k: "C", h: "Шкала уверенности", p: "",
      table: [["Уверенность", "Форма", "Пример"], ["~100% да", "must", "It **must be** true."], ["~50%", "might / may / could", "It **might be** true."], ["~100% нет", "can't / couldn't", "It **can't be** true."]],
      note: "О прошлом: **must have done / can't have done** — Unit 36. Сейчас в процессе: She **must be working** late." }
  ], mistakes: [["He mustn't be at home — the car's gone.", "He can't be at home — the car's gone.", "Вывод «точно нет» → can't, не mustn't."], ["She must to be rich.", "She must be rich.", "must + be."], ["They must are tired.", "They must be tired.", "После must — be."]] },
  ex: [
   { task: "**must** or **can't**?", items: [
    ["g", "You've worked for ten hours. You ___ be exhausted.", "must", ["can't", "mustn't", "can"], "Ты работал десять часов. Ты, наверное, без сил.", "Уверены, что да → must."],
    ["g", "That ___ be the right address. It's a park, not a house!", "can't", ["must", "mustn't", "might not to"], "Это не может быть тот адрес. Тут парк!", "Уверены, что нет → can't."],
    ["g", "The phone is ringing. It ___ be Mum — she said she'd call.", "must", ["can't", "mustn't", "couldn't"], "Звонит телефон. Это, наверное, мама.", "must."],
    ["g", "She ___ be at work. It's Sunday!", "can't", ["must", "mustn't", "has to"], "Она не может быть на работе. Воскресенье!", "can't."],
    ["g", "He speaks Japanese fluently. He ___ have lived in Japan.", "must", ["can't", "mustn't", "can"], "Он свободно говорит по-японски. Видимо, жил в Японии.", "must have lived."],
    ["g", "You ___ be serious! That's a terrible idea.", "can't", ["must", "mustn't", "should"], "Ты шутишь! Это ужасная идея.", "can't be serious."],
    ["g", "There's a long queue outside. The food ___ be good here.", "must", ["can't", "mustn't", "couldn't"], "Снаружи длинная очередь. Здесь, видимо, вкусно.", "must."],
    ["g", "They ___ be twins — they look completely different!", "can't", ["must", "mustn't", "should"], "Они не могут быть близнецами — совсем разные!", "can't."],
    ["g", "Your sister ___ be very proud of you.", "must", ["can't", "mustn't", "can"], "Твоя сестра, наверное, очень тобой гордится.", "must."],
    ["g", "This bag ___ be mine. Mine is red.", "can't", ["must", "mustn't", "has to"], "Эта сумка не может быть моей. Моя красная.", "can't."]
   ]},
   { task: "How sure are you? **must / might / can't**", items: [
    ["g", "I'm not sure where Arman is. He ___ be in the library.", "might", ["must", "can't", "mustn't"], "Не знаю, где Арман. Может, в библиотеке.", "Не уверены → might."],
    ["g", "Her eyes are red. She ___ have been crying.", "must", ["can't", "might not", "mustn't"], "У неё красные глаза. Видимо, плакала.", "must have been crying."],
    ["g", "He ___ be asleep — I can hear him playing guitar.", "can't", ["must", "might", "mustn't"], "Он не может спать — слышно, как он играет на гитаре.", "can't."],
    ["g", "Somebody's knocking. It ___ be the postman, or maybe a neighbour.", "could", ["must", "can't", "mustn't"], "Стучат. Может, почтальон, а может, сосед.", "could = возможно."],
    ["g", "You've only been here a week. You ___ know many people yet.", "can't", ["must", "might", "mustn't"], "Ты здесь всего неделю. Вряд ли знаешь много людей.", "can't."],
    ["g", "Look at all those presents! It ___ be someone's birthday.", "must", ["can't", "mustn't", "couldn't"], "Сколько подарков! У кого-то, видимо, день рождения.", "must."],
    ["g", "She isn't answering. She ___ be driving.", "might", ["must not", "can't", "mustn't"], "Она не отвечает. Может, за рулём.", "might be driving."],
    ["g", "He ___ be working late again. His car is still at the office.", "must", ["can't", "mustn't", "couldn't"], "Он, видимо, снова задерживается. Машина ещё у офиса.", "must be working."],
    ["g", "It ___ be very cold outside — everyone is wearing T-shirts.", "can't", ["must", "might", "mustn't"], "На улице не может быть холодно — все в футболках.", "can't."],
    ["g", "I don't know the answer. It ___ be 1945, but I'm not sure.", "could", ["must", "can't", "mustn't"], "Не знаю. Может, 1945-й, но не уверен.", "could."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "He mustn't be at home. His car isn't there.", "He can't be at home. His car isn't there.", ["He doesn't must be at home. His car isn't there.", "He must not to be at home. His car isn't there.", "He can't is at home. His car isn't there."], "Он не может быть дома. Машины нет.", "Вывод «нет» → can't."],
    ["e", "You must to be hungry.", "You must be hungry.", ["You must being hungry.", "You must are hungry.", "You musts be hungry."], "Ты, наверное, голоден.", "must + be."],
    ["e", "They must are on holiday.", "They must be on holiday.", ["They must to be on holiday.", "They must being on holiday.", "They musts be on holiday."], "Они, видимо, в отпуске.", "must + be."],
    ["e", "That can't is true.", "That can't be true.", ["That can't to be true.", "That can't being true.", "That cannot is true."], "Это не может быть правдой.", "can't + be."],
    ["e", "She must works very hard.", "She must work very hard.", ["She must to work very hard.", "She musts work very hard.", "She must working very hard."], "Она, видимо, очень много работает.", "must + work."],
    ["e", "It must be raining — everyone is dry. (= sure it's not)", "It can't be raining — everyone is dry.", ["It mustn't be raining — everyone is dry.", "It must not raining — everyone is dry.", "It can't raining — everyone is dry."], "Не может быть, что идёт дождь — все сухие.", "can't be raining."],
    ["e", "You can't be serious? (question form)", "You can't be serious!", ["You mustn't be serious!", "You can't are serious!", "You can't to be serious!"], "Ты шутишь!", "Восклицание, не вопрос."],
    ["e", "He must is the new teacher.", "He must be the new teacher.", ["He must being the new teacher.", "He must to be the new teacher.", "He musts be the new teacher."], "Это, видимо, новый учитель.", "must + be."],
    ["e", "This can't to be your phone — it's broken.", "This can't be your phone — it's broken.", ["This can't is your phone — it's broken.", "This mustn't be your phone — it's broken.", "This can't being your phone — it's broken."], "Это не может быть твой телефон — он сломан.", "can't + be."],
    ["e", "They must be sleep — the house is quiet.", "They must be sleeping — the house is quiet.", ["They must sleeping — the house is quiet.", "They must to be sleeping — the house is quiet.", "They must are sleeping — the house is quiet."], "Они, видимо, спят — в доме тихо.", "must be + -ing."]
   ]}
  ]},
{ n: 35, floor: 5, title: "Requests, offers, permission: Can I…? Could you…? Would you like…?", cefr: "A2",
  rule: { sections: [
    { k: "A", h: "Просьбы: Can you / Could you / Would you…?", p: "**Could you…?** и **Would you…?** вежливее, чем Can you…? Ещё вежливее: **Would you mind + -ing?**",
      ex: ["**Can you** pass me the salt?", "**Could you** speak more slowly, please?", "**Would you mind closing** the window?", "**Do you think you could** help me with this?"] },
    { k: "B", h: "Разрешение: Can I / Could I / May I…?", p: "**May I…?** — самое формальное. Ответы: Yes, of course. / Sure. / I'm afraid not.",
      ex: ["**Can I** use your phone?", "**Could I** ask you a question?", "**May I** come in?", "**Do you mind if I** open the window?"] },
    { k: "C", h: "Предложения: Would you like…? / Shall I…? / I'll…", p: "**Would you like + существительное / to + глагол?** — вежливое предложение. **I'd like** = я бы хотел (вежливее, чем I want).",
      table: [["Фраза", "Пример"], ["Would you like…?", "**Would you like** a cup of tea?"], ["Would you like to…?", "**Would you like to** come with us?"], ["I'd like…", "**I'd like** a ticket to Almaty, please."], ["Shall I…?", "**Shall I** help you with that?"]] }
  ], mistakes: [["Would you like coming?", "Would you like to come?", "would like + to."], ["Do you like a coffee? (offer)", "Would you like a coffee?", "Предложение → Would you like…?"], ["Would you mind to open the door?", "Would you mind opening the door?", "mind + -ing."]] },
  ex: [
   { task: "Requests and permission", items: [
    ["g", "___ you lend me your pen, please?", "Could", ["May", "Shall", "Must"], "Не одолжишь ручку?", "Просьба → Could you…?"],
    ["g", "___ I sit here? — Yes, of course.", "Can", ["Would", "Shall you", "Must"], "Можно мне сесть здесь? — Конечно.", "Разрешение → Can I…?"],
    ["g", "Would you mind ___ the music down?", "turning", ["to turn", "turn", "turned"], "Не могли бы вы сделать музыку потише?", "mind + -ing."],
    ["g", "___ I come in? (very polite)", "May", ["Shall", "Will", "Must"], "Можно войти?", "Самое вежливое → May I…?"],
    ["g", "Do you mind if I ___ the window?", "open", ["opening", "to open", "will open"], "Вы не против, если я открою окно?", "Do you mind if I + Present."],
    ["g", "___ you help me carry these bags?", "Could", ["Shall", "May", "Must"], "Не поможешь донести сумки?", "Could you…?"],
    ["g", "Could I ___ a glass of water, please?", "have", ["having", "to have", "had"], "Можно стакан воды?", "Could I + have."],
    ["g", "Would you ___ explaining that again?", "mind", ["like", "can", "please"], "Не могли бы вы объяснить ещё раз?", "Would you mind + -ing."],
    ["g", "Can I borrow your car? — I'm ___ not. I need it today.", "afraid", ["sorry to", "fear", "scared"], "Можно взять твою машину? — Боюсь, нет.", "I'm afraid not — вежливый отказ."],
    ["g", "Do you think you ___ check my essay?", "could", ["would like", "shall", "may"], "Как думаешь, мог бы ты проверить моё эссе?", "Очень вежливо: Do you think you could…?"]
   ]},
   { task: "Offers: **Would you like…? / Shall I…? / I'd like…**", items: [
    ["g", "___ you like something to drink?", "Would", ["Do", "Shall", "Will"], "Хотите что-нибудь выпить?", "Would you like…?"],
    ["g", "Would you like ___ to the cinema with us?", "to come", ["coming", "come", "came"], "Хочешь пойти с нами в кино?", "would like + to."],
    ["g", "___ I open the window? It's hot in here.", "Shall", ["Would", "Do", "Must"], "Открыть окно? Здесь жарко.", "Предложение → Shall I…?"],
    ["g", "I ___ a table for four, please.", "'d like", ["like", "'m liking", "would like to"], "Я бы хотел столик на четверых.", "Вежливо → I'd like."],
    ["g", "Would you like ___ more soup?", "some", ["any", "a", "many"], "Хотите ещё супа?", "Предложение → some."],
    ["g", "___ do you like your coffee? — With milk, please.", "How", ["What", "Would", "Which way"], "Какой вам кофе? — С молоком.", "How do you like…? = как вы предпочитаете."],
    ["g", "I'd like ___ a reservation, please.", "to make", ["making", "make", "made"], "Я бы хотел забронировать.", "I'd like + to."],
    ["g", "You look cold. ___ I lend you my jacket?", "Shall", ["Would", "Do", "Will you"], "Ты замёрз. Дать тебе куртку?", "Shall I…?"],
    ["g", "Would you like tea or coffee? — Coffee, please. / I'd ___ coffee.", "prefer", ["like better to", "rather to", "want to"], "Чай или кофе? — Я бы предпочёл кофе.", "I'd prefer coffee."],
    ["g", "Do you ___ tennis? — Yes, I play every week. (general liking)", "like", ["would like", "'d like", "liking"], "Ты любишь теннис? — Да.", "Общее «любишь» → Do you like…?"]
   ]},
   { task: "Find the mistake", items: [
    ["e", "Would you like coming to my party?", "Would you like to come to my party?", ["Would you like come to my party?", "Do you like to come to my party now?", "Would you liking to come to my party?"], "Хочешь прийти на мою вечеринку?", "would like + to."],
    ["e", "Do you like a cup of tea? (offer)", "Would you like a cup of tea?", ["Will you like a cup of tea?", "Are you like a cup of tea?", "Would you liking a cup of tea?"], "Хотите чаю?", "Предложение → Would you like…?"],
    ["e", "Would you mind to close the door?", "Would you mind closing the door?", ["Would you mind close the door?", "Would you mind closed the door?", "Do you mind to close the door?"], "Не закроете дверь?", "mind + -ing."],
    ["e", "I want a coffee, give me. (polite order)", "I'd like a coffee, please.", ["I like a coffee, please.", "I would like coffee give me.", "I'd liking a coffee, please."], "Мне кофе, пожалуйста.", "Вежливо → I'd like."],
    ["e", "May you help me?", "Could you help me?", ["Shall you help me?", "May you to help me?", "Must you help me?"], "Не могли бы вы помочь?", "Просьба к другому → Could you…?"],
    ["e", "Shall you open the door for me?", "Could you open the door for me?", ["Shall you to open the door for me?", "May you open the door for me?", "Do you shall open the door for me?"], "Откроешь мне дверь?", "Просьба → Could you…?"],
    ["e", "Can I to use your laptop?", "Can I use your laptop?", ["Can I using your laptop?", "May I to use your laptop?", "Can I uses your laptop?"], "Можно воспользоваться твоим ноутбуком?", "Can I + use."],
    ["e", "Do you mind if I will smoke?", "Do you mind if I smoke?", ["Do you mind if I smoking?", "Do you mind if I to smoke?", "Do you mind I smoke will?"], "Вы не против, если я закурю?", "if + Present."],
    ["e", "Would you like some more cake? — Yes, I would like.", "Would you like some more cake? — Yes, please.", ["Would you like some more cake? — Yes, I like.", "Would you like some more cake? — Yes, I'd like it more.", "Would you like some more cake? — Yes, I do like."], "Ещё торта? — Да, пожалуйста.", "Естественный ответ: Yes, please."],
    ["e", "I'd like that you help me.", "I'd like you to help me.", ["I'd like you help me.", "I'd like you helping me.", "I like that you to help me."], "Я бы хотел, чтобы ты мне помог.", "would like + sb + to."]
   ]}
  ]},
{ n: 36, floor: 5, title: "Modal perfect: should have / could have / must have done", cefr: "B1–B2",
  rule: { sections: [
    { k: "A", h: "should have done — надо было (но не сделал)", p: "**should have + V3** — сожаление или критика о прошлом. **shouldn't have** — не надо было (а сделал).",
      ex: ["I **should have studied** harder. (не занимался — жалею)", "You **shouldn't have said** that. She's upset.", "We **should have left** earlier — we missed the train."] },
    { k: "B", h: "could have done — мог (но не сделал / была возможность)", p: "**could have + V3** — возможность в прошлом, которой не воспользовались. **couldn't have** — было невозможно.",
      ex: ["You **could have called** me! I would have helped.", "It was dangerous. You **could have been** hurt.", "I **couldn't have done** it without you."] },
    { k: "C", h: "must have / can't have / might have — выводы о прошлом", p: "Та же шкала уверенности, что в Unit 34, только о прошлом.",
      table: [["Форма", "Пример", "Значение"], ["must have done", "She **must have forgotten**.", "наверняка забыла"], ["might have done", "He **might have missed** the bus.", "возможно, опоздал на автобус"], ["can't have done", "They **can't have finished** already.", "не могли уже закончить"]] }
  ], mistakes: [["I should studied more.", "I should have studied more.", "should have + V3."], ["You could have call me.", "You could have called me.", "have + V3."], ["He must has forgotten.", "He must have forgotten.", "После must — have (не has)."]] },
  ex: [
   { task: "Regrets and criticism: **should have / shouldn't have**", items: [
    ["g", "I failed the test. I ___ more. (study)", "should have studied", ["should study", "should have study", "must have studied"], "Я провалил тест. Надо было больше заниматься.", "Сожаление → should have + V3."],
    ["g", "I feel sick. I ___ so much cake. (not eat)", "shouldn't have eaten", ["shouldn't eat", "should have not ate", "mustn't have eaten"], "Мне плохо. Не надо было есть столько торта.", "shouldn't have eaten."],
    ["g", "We missed the start. We ___ earlier. (leave)", "should have left", ["should leave", "should have leave", "should left"], "Мы пропустили начало. Надо было выйти раньше.", "should have left."],
    ["g", "You ___ him the secret. Now everyone knows. (not tell)", "shouldn't have told", ["shouldn't tell", "should have not told him", "mustn't tell"], "Не надо было говорить ему секрет.", "shouldn't have told."],
    ["g", "It's raining. I ___ an umbrella. (bring)", "should have brought", ["should bring", "should have bring", "should brought"], "Идёт дождь. Надо было взять зонт.", "should have brought."],
    ["g", "She ___ the job. The pay is terrible. (not accept)", "shouldn't have accepted", ["shouldn't accept", "should have not accept", "mustn't have accepted"], "Не стоило ей соглашаться на эту работу.", "shouldn't have accepted."],
    ["g", "They ___ a map. They got lost. (take)", "should have taken", ["should take", "should have took", "should taken"], "Им надо было взять карту. Они заблудились.", "should have taken."],
    ["g", "I ___ to you like that. I'm sorry. (not speak)", "shouldn't have spoken", ["shouldn't speak", "should have not speak", "mustn't have spoken"], "Не надо было так с тобой разговаривать. Прости.", "shouldn't have spoken."],
    ["g", "You ___ me! I would have come. (invite)", "should have invited", ["should invite", "should have invite", "should invited"], "Надо было меня позвать! Я бы пришёл.", "should have invited."],
    ["g", "He ___ his password down. Now he's forgotten it. (write)", "should have written", ["should write", "should have wrote", "should written"], "Надо было записать пароль. Теперь он его забыл.", "should have written."]
   ]},
   { task: "**could have** and deductions: **must / might / can't have**", items: [
    ["g", "Why didn't you ask me? I ___ you. (help)", "could have helped", ["could help", "could have help", "can have helped"], "Почему не спросил? Я мог бы помочь.", "could have helped."],
    ["g", "Be careful! You ___ killed! (be)", "could have been", ["could be have", "can have been", "could have be"], "Осторожнее! Ты мог погибнуть!", "could have been."],
    ["g", "I ___ it without your help. Thank you! (not do)", "couldn't have done", ["couldn't do it have", "can't have done", "couldn't have did"], "Без твоей помощи я бы не справился.", "couldn't have done."],
    ["g", "The ground is wet. It ___ in the night. (rain)", "must have rained", ["must rain", "must have rain", "must rained"], "Земля мокрая. Ночью, видимо, был дождь.", "must have rained."],
    ["g", "She didn't answer. She ___ my message. (not see)", "might not have seen", ["might not see", "mustn't have seen", "might have not see"], "Она не ответила. Может, не видела сообщения.", "might not have seen."],
    ["g", "He ___ the exam — he didn't study at all! (pass)", "can't have passed", ["mustn't have passed", "can't pass", "can't have pass"], "Не мог он сдать экзамен — совсем не готовился!", "can't have passed."],
    ["g", "I can't find my keys. I ___ them at school. (leave)", "might have left", ["might leave", "might have leave", "must leave"], "Не могу найти ключи. Может, оставил в школе.", "might have left."],
    ["g", "They're late. They ___ the wrong bus. (take)", "must have taken", ["must take", "must have took", "must taken"], "Они опаздывают. Видимо, сели не на тот автобус.", "must have taken."],
    ["g", "She ___ already. Her coat is still here. (leave)", "can't have left", ["mustn't have left", "can't leave", "can't have leaved"], "Не могла она уйти. Её пальто ещё здесь.", "can't have left."],
    ["g", "We ___ the match if we'd played better. (win)", "could have won", ["could win", "could have win", "can have won"], "Мы могли бы выиграть, если бы играли лучше.", "could have won."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "I should studied harder.", "I should have studied harder.", ["I should have study harder.", "I should to have studied harder.", "I should studying harder."], "Надо было больше заниматься.", "should have + V3."],
    ["e", "You could have call me.", "You could have called me.", ["You could called me.", "You could have to call me.", "You could has called me."], "Ты мог мне позвонить.", "could have + V3."],
    ["e", "He must has forgotten.", "He must have forgotten.", ["He must have forget.", "He must forgotten.", "He must to have forgotten."], "Он, видимо, забыл.", "must have + V3."],
    ["e", "She mustn't have heard me. (= I'm sure she didn't)", "She can't have heard me.", ["She can't have hear me.", "She mustn't heard me.", "She couldn't has heard me."], "Не могла она меня услышать.", "Уверены, что нет → can't have."],
    ["e", "We should have went by taxi.", "We should have gone by taxi.", ["We should went by taxi.", "We should have go by taxi.", "We should to have gone by taxi."], "Надо было ехать на такси.", "have + gone."],
    ["e", "You shouldn't have tell her.", "You shouldn't have told her.", ["You shouldn't told her.", "You shouldn't to have told her.", "You shouldn't have telled her."], "Не надо было ей говорить.", "have + told."],
    ["e", "They might have took the train.", "They might have taken the train.", ["They might took the train.", "They might have take the train.", "They might to have taken the train."], "Они, может, поехали поездом.", "have + taken."],
    ["e", "I couldn't have did it alone.", "I couldn't have done it alone.", ["I couldn't did it alone.", "I couldn't have do it alone.", "I couldn't has done it alone."], "Я бы не справился один.", "have + done."],
    ["e", "She must have be tired after the trip.", "She must have been tired after the trip.", ["She must be have tired after the trip.", "She must has been tired after the trip.", "She must been tired after the trip."], "Она, видимо, устала после поездки.", "have + been."],
    ["e", "You should have to tell me earlier.", "You should have told me earlier.", ["You should told me earlier.", "You should to tell me earlier.", "You should have tell me earlier."], "Надо было сказать мне раньше.", "should have + told."]
   ]}
  ]}
);
