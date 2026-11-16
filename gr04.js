// Part 4 · The future (Units 24–29). Original explanations and examples.
window.GRAMMAR.units.push(
{ n: 24, floor: 4, title: "Present tenses for the future (I'm doing / it starts)", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "Present Continuous — договорённости", p: "То, что уже **решено и организовано** (есть время, место, билет, договорились с кем-то).",
      ex: ["I'**m meeting** Aliya at six tonight.", "We'**re flying** to Antalya on Saturday.", "What **are** you **doing** this weekend?"] },
    { k: "B", h: "Present Simple — расписание", p: "Транспорт, кино, уроки, мероприятия — всё, что идёт **по расписанию**.",
      ex: ["The train **leaves** at 7:40 tomorrow.", "The concert **starts** at eight.", "What time **does** the lesson **finish**?"] },
    { k: "C", h: "Не используйте Present Simple для личных планов", p: "Личный план — Continuous или going to, а не Simple.",
      table: [["Правильно", "Неправильно"], ["I'**m seeing** the dentist tomorrow.", "~~I see the dentist tomorrow.~~"], ["My course **starts** on Monday. (расписание)", "—"]] }
  ], mistakes: [["I go to the cinema with Dana tonight.", "I'm going to the cinema with Dana tonight.", "Личная договорённость → Continuous."], ["The film is starting at 9 tomorrow.", "The film starts at 9 tomorrow.", "Расписание → Present Simple."]] },
  ex: [
   { task: "Arrangements: use the Present Continuous", items: [
    ["g", "I ___ my grandparents on Sunday. (visit)", "'m visiting", ["visit", "'ll visiting", "visits"], "В воскресенье я еду к бабушке с дедушкой.", "Договорённость → Continuous."],
    ["g", "We ___ a party on Friday. Can you come? (have)", "'re having", ["have", "has", "'ll having"], "В пятницу у нас вечеринка. Придёшь?", "are having."],
    ["g", "What time ___ you ___ your friends tomorrow? (meet)", "are … meeting", ["do … meet", "will … meeting", "are … meet"], "Во сколько ты завтра встречаешься с друзьями?", "are you meeting."],
    ["g", "She ___ to Shymkent next week for work. (go)", "'s going", ["goes", "go", "'ll going"], "На следующей неделе она едет в Шымкент по работе.", "is going."],
    ["g", "I can't come on Thursday. I ___ late. (work)", "'m working", ["work", "works", "'ll working"], "В четверг не могу. Работаю допоздна.", "am working."],
    ["g", "They ___ married in June. (get)", "'re getting", ["get", "gets", "'ll getting"], "Они женятся в июне.", "are getting married."],
    ["g", "___ you ___ anything this evening? (do)", "Are … doing", ["Do … do", "Will … doing", "Are … do"], "У тебя есть планы на вечер?", "Are you doing anything…?"],
    ["g", "My brother ___ home from university tomorrow. (come)", "'s coming", ["comes", "come", "'ll coming"], "Брат завтра приезжает из университета.", "is coming."],
    ["g", "We ___ the 10 a.m. train. I've bought the tickets. (take)", "'re taking", ["take", "takes", "'ll taking"], "Мы едем поездом в 10. Билеты купил.", "Организовано → Continuous."],
    ["g", "I ___ my hair cut on Saturday. (have)", "'m having", ["have", "has", "'ll having"], "В субботу я стригусь.", "am having."]
   ]},
   { task: "Timetables: use the Present Simple", items: [
    ["g", "The bus ___ at 6:15 tomorrow morning. (leave)", "leaves", ["is leaving", "leave", "will leaving"], "Автобус отправляется завтра в 6:15.", "Расписание → Simple."],
    ["g", "What time ___ the film ___? (start)", "does … start", ["is … starting", "do … start", "will … starting"], "Во сколько начинается фильм?", "Расписание → does … start."],
    ["g", "The museum ___ at 10 on Saturdays. (open)", "opens", ["is opening", "open", "opening"], "По субботам музей открывается в 10.", "opens."],
    ["g", "Our flight ___ in Istanbul at 14:30. (arrive)", "arrives", ["is arriving at", "arrive", "arriving"], "Наш рейс прилетает в Стамбул в 14:30.", "arrives."],
    ["g", "The new term ___ on 1 September. (begin)", "begins", ["is beginning on", "begin", "beginning"], "Новый семестр начинается 1 сентября.", "begins."],
    ["g", "When ___ the shop ___ tonight? (close)", "does … close", ["is … closing", "do … close", "will … closing"], "Когда сегодня закрывается магазин?", "does … close."],
    ["g", "The match ___ at 7 p.m. on Wednesday. (kick off)", "kicks off", ["is kicking off at", "kick off", "kicking off"], "Матч начинается в среду в 19:00.", "kicks off."],
    ["g", "My piano lesson ___ at four. (finish)", "finishes", ["is finishing at", "finish", "finishing"], "Мой урок фортепиано заканчивается в четыре.", "finishes."],
    ["g", "Tomorrow ___ Saturday, so there's no school. (be)", "is", ["will being", "are", "be"], "Завтра суббота — школы нет.", "Календарь → is."],
    ["g", "The conference ___ on Monday and ___ on Wednesday. (start / end)", "starts … ends", ["is starting … is ending on", "start … end", "will starting … ending"], "Конференция начинается в понедельник и заканчивается в среду.", "Расписание → Simple."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "I meet my friends tonight.", "I'm meeting my friends tonight.", ["I'll meeting my friends tonight.", "I meeting my friends tonight.", "I am meet my friends tonight."], "Сегодня вечером я встречаюсь с друзьями.", "Договорённость → Continuous."],
    ["e", "The train is leaving at 8:05 every day.", "The train leaves at 8:05 every day.", ["The train leave at 8:05 every day.", "The train will leaving at 8:05 every day.", "The train is leave at 8:05 every day."], "Поезд отправляется каждый день в 8:05.", "Регулярное расписание → Simple."],
    ["e", "What do you do on Saturday? Shall we go out?", "What are you doing on Saturday? Shall we go out?", ["What you are doing on Saturday? Shall we go out?", "What will you doing on Saturday? Shall we go out?", "What are you do on Saturday? Shall we go out?"], "Что ты делаешь в субботу? Сходим куда-нибудь?", "Планы → What are you doing…?"],
    ["e", "We go to Turkey next month — we've booked the hotel.", "We're going to Turkey next month — we've booked the hotel.", ["We will going to Turkey next month — we've booked the hotel.", "We going to Turkey next month — we've booked the hotel.", "We goes to Turkey next month — we've booked the hotel."], "В следующем месяце мы едем в Турцию.", "Организовано → Continuous."],
    ["e", "The lesson is finishing at 3 o'clock.", "The lesson finishes at 3 o'clock.", ["The lesson finish at 3 o'clock.", "The lesson will finishing at 3 o'clock.", "The lesson is finish at 3 o'clock."], "Урок заканчивается в 3.", "Расписание → Simple."],
    ["e", "She sees the doctor tomorrow at ten.", "She's seeing the doctor tomorrow at ten.", ["She will seeing the doctor tomorrow at ten.", "She is see the doctor tomorrow at ten.", "She seeing the doctor tomorrow at ten."], "Завтра в десять она идёт к врачу.", "Запись к врачу → Continuous."],
    ["e", "When is the plane landing in Astana? (timetable)", "When does the plane land in Astana?", ["When the plane lands in Astana?", "When does the plane lands in Astana?", "When will the plane landing in Astana?"], "Когда самолёт приземляется в Астане?", "Расписание → does … land."],
    ["e", "Are you coming to my party? — Sorry, I work on Saturday.", "Are you coming to my party? — Sorry, I'm working on Saturday.", ["Are you coming to my party? — Sorry, I working on Saturday.", "Are you coming to my party? — Sorry, I'll working on Saturday.", "Are you coming to my party? — Sorry, I am work on Saturday."], "Придёшь на вечеринку? — Извини, в субботу работаю.", "План → Continuous."],
    ["e", "Tomorrow will be Friday.", "Tomorrow is Friday.", ["Tomorrow are Friday.", "Tomorrow be Friday.", "Tomorrow is being Friday."], "Завтра пятница.", "Календарь → Present Simple."],
    ["e", "They're opening the shop at 9 every morning.", "They open the shop at 9 every morning.", ["They opens the shop at 9 every morning.", "They will opening the shop at 9 every morning.", "They are open the shop at 9 every morning."], "Магазин открывается каждое утро в 9.", "Регулярно → Simple."]
   ]}
  ]},
{ n: 25, floor: 4, title: "going to (I'm going to do)", cefr: "A2",
  rule: { sections: [
    { k: "A", h: "Намерение: уже решил", p: "**am/is/are going to + глагол** — то, что вы **уже решили** сделать.",
      table: [["", "be", "going to + глагол"], ["I", "'m", "going to study"], ["he / she / it", "'s", "going to buy"], ["we / you / they", "'re", "going to watch"]],
      ex: ["I'**m going to learn** to swim this summer.", "What **are** you **going to wear** to the party?", "She **isn't going to tell** anyone."] },
    { k: "B", h: "Прогноз по признакам", p: "Мы **видим**, что что-то сейчас произойдёт.",
      ex: ["Look at those clouds! It'**s going to rain**.", "Be careful! You'**re going to fall**!", "The score is 3–0. They'**re going to win**."] },
    { k: "C", h: "was going to — хотел, но…", p: "**was/were going to** — план в прошлом, который не случился.",
      ex: ["I **was going to call** you, but I forgot.", "We **were going to go** out, but it rained."],
      note: "going to go = просто going to: I'm going **to go** shopping = I'm **going** shopping." }
  ], mistakes: [["I going to buy a car.", "I'm going to buy a car.", "Нужен be: I'm going to."], ["She is going to buys it.", "She is going to buy it.", "После to — начальная форма."], ["Look! It will rain.", "Look! It's going to rain.", "Прогноз по признакам → going to."]] },
  ex: [
   { task: "Plans: complete with **going to**", items: [
    ["g", "I ___ a new phone next month. (buy)", "'m going to buy", ["going to buy", "'m going buy", "'ll going to buy"], "В следующем месяце я куплю новый телефон.", "am going to + buy."],
    ["g", "She ___ medicine at university. (study)", "'s going to study", ["going to study", "'s going study", "is going to studies"], "Она будет изучать медицину в университете.", "is going to + study."],
    ["g", "We ___ the house green. (paint)", "'re going to paint", ["going to paint", "'re going paint", "'s going to paint"], "Мы покрасим дом в зелёный.", "are going to + paint."],
    ["g", "What ___ you ___ to do after school? (go)", "are … going", ["do … go", "will … going", "is … going"], "Что ты собираешься делать после школы?", "What are you going to do?"],
    ["g", "They ___ a big party for his birthday. (have)", "'re going to have", ["going to have", "'re going to has", "'s going to have"], "Они устроят большую вечеринку на его день рождения.", "are going to have."],
    ["g", "I ___ sweets any more. I want to be healthy. (not eat)", "'m not going to eat", ["don't going to eat", "'m not going eat", "won't going to eat"], "Я больше не буду есть сладкое.", "I'm not going to eat."],
    ["g", "___ he ___ to apply for the job? (go)", "Is … going", ["Does … go", "Will … going", "Are … going"], "Он собирается подавать на эту работу?", "Is he going to…?"],
    ["g", "My parents ___ a new car this year. (not buy)", "aren't going to buy", ["don't going to buy", "isn't going to buy", "aren't going buy"], "Родители не будут покупать машину в этом году.", "aren't going to buy."],
    ["g", "Where ___ you ___ to stay in Almaty? (go)", "are … going", ["do … go", "will … going", "is … going"], "Где вы собираетесь остановиться в Алматы?", "are … going to stay."],
    ["g", "I've decided. I ___ for the national team. (try out)", "'m going to try out", ["going to try out", "'m going try out", "'ll going to try out"], "Я решил. Попробую попасть в сборную.", "Решение принято → going to."]
   ]},
   { task: "Predictions from what you can see", items: [
    ["g", "Look at the sky. It ___ (snow).", "'s going to snow", ["snows", "'s snowing going", "will snowing"], "Посмотри на небо. Сейчас пойдёт снег.", "Признаки → going to."],
    ["g", "Watch out! That glass ___ (fall).", "'s going to fall", ["falls", "will falling", "'s falling going"], "Осторожно! Стакан сейчас упадёт.", "Видим → going to."],
    ["g", "I feel terrible. I think I ___ sick. (be)", "'m going to be", ["'m being", "going to be", "am be"], "Мне плохо. Кажется, меня сейчас стошнит.", "Признаки → going to."],
    ["g", "We're very late. We ___ the train. (miss)", "'re going to miss", ["miss", "'re missing going", "will missing"], "Мы сильно опаздываем. Опоздаем на поезд.", "going to miss."],
    ["g", "She's running so fast — she ___ the race! (win)", "'s going to win", ["wins", "'s winning going", "will winning"], "Она так быстро бежит — она выиграет!", "going to win."],
    ["g", "The battery is almost dead. The phone ___ off. (switch)", "'s going to switch", ["switches", "will switching", "'s switching going"], "Батарея почти села. Телефон выключится.", "going to switch off."],
    ["g", "I ___ you, but I forgot. Sorry! (call)", "was going to call", ["am going to call", "going to call", "was going call"], "Я собирался тебе позвонить, но забыл.", "was going to — не случилось."],
    ["g", "We ___ a picnic, but it rained. (have)", "were going to have", ["are going to have", "was going to have", "going to have"], "Мы собирались на пикник, но пошёл дождь.", "were going to."],
    ["g", "He ___ his job, but they offered him more money. (leave)", "was going to leave", ["is going to leave", "were going to leave", "going to leave"], "Он собирался уволиться, но ему предложили больше.", "was going to."],
    ["g", "That car is driving too fast. It ___ (crash).", "'s going to crash", ["crashes", "will crashing", "'s crashing going"], "Машина едет слишком быстро. Сейчас врежется.", "going to crash."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "I going to visit my aunt.", "I'm going to visit my aunt.", ["I'm going visit my aunt.", "I go to visit my aunt tomorrow going.", "I'm going to visiting my aunt."], "Я собираюсь навестить тётю.", "be + going to."],
    ["e", "She's going to calls you.", "She's going to call you.", ["She going to call you.", "She's going call you.", "She's going to calling you."], "Она тебе позвонит.", "going to + call."],
    ["e", "Look! The baby will cry.", "Look! The baby's going to cry.", ["Look! The baby going to cry.", "Look! The baby is cry.", "Look! The baby goes to cry."], "Смотри! Малыш сейчас заплачет.", "Признаки → going to."],
    ["e", "Are you going to staying at home?", "Are you going to stay at home?", ["Do you going to stay at home?", "You are going stay at home?", "Are you go to stay at home?"], "Ты собираешься остаться дома?", "going to + stay."],
    ["e", "We not going to tell him.", "We aren't going to tell him.", ["We don't going to tell him.", "We aren't going tell him.", "We won't going to tell him."], "Мы ему не скажем.", "aren't going to."],
    ["e", "I was going to went to bed early.", "I was going to go to bed early.", ["I was going go to bed early.", "I am going to went to bed early.", "I was go to go to bed early."], "Я собирался лечь пораньше.", "going to + go."],
    ["e", "He is going to be a doctor when he will grow up.", "He is going to be a doctor when he grows up.", ["He going to be a doctor when he grows up.", "He is going to being a doctor when he grows up.", "He is go to be a doctor when he grows up."], "Когда он вырастет, он станет врачом.", "После when — Present Simple."],
    ["e", "What you are going to do?", "What are you going to do?", ["What do you going to do?", "What are you go to do?", "What you going to do?"], "Что ты собираешься делать?", "Вопрос: are you."],
    ["e", "It's going rain.", "It's going to rain.", ["It going to rain.", "It's going to raining.", "It's go to rain."], "Сейчас пойдёт дождь.", "going to + rain."],
    ["e", "They was going to come.", "They were going to come.", ["They was going come.", "They were going to came.", "They are going to came."], "Они собирались прийти.", "they → were."]
   ]}
  ]},
{ n: 26, floor: 4, title: "will / shall (1): decisions, offers, promises", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "Решение в момент речи", p: "**will ('ll) + глагол** — решаем прямо сейчас, а не заранее.",
      ex: ["The phone's ringing. — I'**ll get** it.", "It's cold. I'**ll close** the window.", "I'**ll have** the chicken, please. (в кафе)"] },
    { k: "B", h: "Предложения, обещания, отказ", p: "will для **предложения помощи**, **обещания**, а **won't** — для отказа.",
      ex: ["That bag looks heavy. I'**ll help** you.", "I **won't tell** anyone, I promise.", "The car **won't start**. (не хочет заводиться)", "**Will** you **open** the door, please? (просьба)"] },
    { k: "C", h: "Shall I / Shall we…?", p: "**Shall** с I/we — предложить или спросить совета.",
      table: [["Фраза", "Значение"], ["**Shall I** open the window?", "Открыть окно? (предлагаю)"], ["**Shall we** go for a walk?", "Пойдём погуляем?"], ["What **shall we** do?", "Что будем делать?"]],
      note: "Решили **заранее** → going to: I'm going to buy bread (план). Решаем **сейчас** → will: Oh, no bread! I'll buy some." }
  ], mistakes: [["I will to help you.", "I'll help you.", "После will — без to."], ["The phone's ringing. — I'm going to answer it.", "The phone's ringing. — I'll answer it.", "Решение сейчас → will."], ["Will I open the door?", "Shall I open the door?", "Предложение → Shall I…?"]] },
  ex: [
   { task: "Decide now: use **'ll** + verb", items: [
    ["g", "I'm thirsty. — I ___ you some water. (get)", "'ll get", ["'m getting", "get", "'m going get"], "Я хочу пить. — Принесу тебе воды.", "Решение сейчас → will."],
    ["g", "It's dark in here. — I ___ the light on. (turn)", "'ll turn", ["turn", "'m turning", "'ll to turn"], "Здесь темно. — Включу свет.", "'ll turn."],
    ["g", "Which one do you want? — I ___ the blue one. (take)", "'ll take", ["take", "'m taking", "'ll taking"], "Какой хочешь? — Возьму синий.", "'ll take."],
    ["g", "I don't understand this. — Don't worry, I ___ it to you. (explain)", "'ll explain", ["explain", "'m explaining", "'ll to explain"], "Я не понимаю. — Не волнуйся, объясню.", "Предложение помощи."],
    ["g", "I forgot my wallet! — No problem. I ___ for you. (pay)", "'ll pay", ["pay", "'m paying", "'ll paying"], "Я забыл кошелёк! — Не страшно, заплачу за тебя.", "'ll pay."],
    ["g", "Somebody's at the door. — I ___. (go)", "'ll go", ["go", "'m going go", "'ll to go"], "Кто-то за дверью. — Я открою.", "'ll go."],
    ["g", "What would you like to drink? — I ___ an orange juice. (have)", "'ll have", ["have", "'m having", "'ll having"], "Что будете пить? — Апельсиновый сок.", "Заказ → I'll have."],
    ["g", "I've missed the bus! — I ___ you a lift. (give)", "'ll give", ["give", "'m giving", "'ll giving"], "Я опоздал на автобус! — Подвезу тебя.", "'ll give."],
    ["g", "This exercise is too hard. — OK, I ___ you. (help)", "'ll help", ["help", "'m helping", "'ll to help"], "Это слишком сложно. — Хорошо, помогу.", "'ll help."],
    ["g", "It's raining. — Then I ___ an umbrella. (take)", "'ll take", ["take", "'m taking", "'ll taking"], "Идёт дождь. — Тогда возьму зонт.", "'ll take."]
   ]},
   { task: "Promises, refusals and **shall**", items: [
    ["g", "I ___ you back tomorrow, I promise. (pay)", "'ll pay", ["pay", "'m paying", "'ll to pay"], "Я верну тебе деньги завтра, обещаю.", "Обещание → will."],
    ["g", "Don't worry, I ___ late again. (not be)", "won't be", ["will not to be", "don't be", "'m not being"], "Не волнуйся, больше не опоздаю.", "won't = will not."],
    ["g", "The door ___. Is it locked? (not open)", "won't open", ["doesn't opening", "isn't open", "will not to open"], "Дверь не открывается. Заперто?", "won't = не хочет/не может."],
    ["g", "___ I carry your bag for you?", "Shall", ["Will", "Do", "Am"], "Понести твою сумку?", "Предложение → Shall I…?"],
    ["g", "___ we order a pizza tonight?", "Shall", ["Will", "Do", "Are"], "Закажем пиццу вечером?", "Shall we…?"],
    ["g", "Where ___ we meet? — Outside the cinema.", "shall", ["will", "do", "are"], "Где встретимся? — У кинотеатра.", "Shall we…? — договариваемся."],
    ["g", "___ you help me with this box, please?", "Will", ["Shall", "Are", "Do"], "Поможешь мне с этой коробкой?", "Просьба → Will you…?"],
    ["g", "My brother ___ share his toys with anyone.", "won't", ["doesn't will", "will not to", "isn't"], "Брат ни с кем не делится игрушками.", "won't = отказывается."],
    ["g", "I ___ forget your birthday this year!", "won't", ["will not to", "don't", "'m not"], "В этом году я не забуду твой день рождения!", "Обещание → won't."],
    ["g", "What time ___ we leave? — Let's leave at eight.", "shall", ["will", "do", "are"], "Во сколько выезжаем? — В восемь.", "Shall we…?"]
   ]},
   { task: "**will** or **going to**? Find the mistake", items: [
    ["g", "We've got no milk. — Really? I ___ some. (decide now)", "'ll buy", ["'m going to buy", "buy", "'m buying"], "Молока нет. — Правда? Куплю.", "Решение сейчас → will."],
    ["g", "Why are you taking your bag? — I ___ some milk. (planned)", "'m going to buy", ["'ll buy", "buy", "would buy"], "Зачем берёшь сумку? — Куплю молока.", "Решено заранее → going to."],
    ["e", "I will to call you tonight.", "I'll call you tonight.", ["I will calling you tonight.", "I'll calls you tonight.", "I am will call you tonight."], "Я позвоню тебе вечером.", "will + call без to."],
    ["e", "Will I help you with that?", "Shall I help you with that?", ["Do I help you with that?", "Am I help you with that?", "Will I to help you with that?"], "Помочь тебе с этим?", "Предложение → Shall I…?"],
    ["e", "Somebody is knocking. — I'm going to open it.", "Somebody is knocking. — I'll open it.", ["Somebody is knocking. — I open it.", "Somebody is knocking. — I will opening it.", "Somebody is knocking. — I'll to open it."], "Стучат. — Я открою.", "Решение сейчас → will."],
    ["e", "I promise I don't tell anyone.", "I promise I won't tell anyone.", ["I promise I will not to tell anyone.", "I promise I not tell anyone.", "I promise I'm not tell anyone."], "Обещаю, никому не скажу.", "Обещание → won't."],
    ["e", "The car doesn't start. I'll call a mechanic.", "The car won't start. I'll call a mechanic.", ["The car isn't start. I'll call a mechanic.", "The car will not to start. I'll call a mechanic.", "The car not start. I'll call a mechanic."], "Машина не заводится. Вызову механика.", "won't start = не заводится."],
    ["e", "I've decided: I'll study law. I applied last month.", "I've decided: I'm going to study law. I applied last month.", ["I've decided: I study law. I applied last month.", "I've decided: I'm study law. I applied last month.", "I've decided: I will to study law. I applied last month."], "Я решил: буду изучать право.", "Решено заранее → going to."],
    ["e", "Shall you open the window, please?", "Will you open the window, please?", ["Do you open the window, please?", "Are you open the window, please?", "Shall you to open the window, please?"], "Откроешь окно, пожалуйста?", "Просьба → Will you…?"],
    ["e", "I'll having the soup, please.", "I'll have the soup, please.", ["I'll to have the soup, please.", "I having the soup, please.", "I'll has the soup, please."], "Мне суп, пожалуйста.", "will + have."]
   ]}
  ]},
{ n: 27, floor: 4, title: "will (2): predictions — will or going to?", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "will — мнение о будущем", p: "**will** — то, что мы **думаем, ожидаем, предполагаем**. Часто с I think, probably, I'm sure, I expect.",
      ex: ["I think it **will be** a good match.", "She'**ll** probably **be** late.", "You'**ll love** this film.", "I don't think he'**ll pass**. (а не _I think he won't_)"] },
    { k: "B", h: "will — факты будущего", p: "То, что точно произойдёт само по себе.",
      ex: ["I'**ll be** 18 next year.", "The sun **will rise** at 6:42 tomorrow.", "**Will** you **be** at home tonight?"] },
    { k: "C", h: "will или going to для прогноза", p: "**going to** — есть видимые признаки сейчас. **will** — мнение, ожидание без явных признаков.",
      table: [["going to (признаки)", "will (мнение)"], ["Look at the clouds — it'**s going to rain**.", "I think it **will rain** tomorrow."], ["She's very pale. She'**s going to faint**!", "Don't worry, you'**ll feel** better soon."]],
      note: "probably: He'll **probably** come (утверждение) · He **probably won't** come (отрицание)." }
  ], mistakes: [["I think he won't come.", "I don't think he'll come.", "Естественнее: I don't think … will."], ["He will probably not come.", "He probably won't come.", "probably — перед won't."], ["I will be 20 years next month.", "I'll be 20 next month.", "Возраст: be + число."]] },
  ex: [
   { task: "Predictions with **will / won't**", items: [
    ["g", "I'm sure you ___ the exam. You've studied a lot. (pass)", "'ll pass", ["pass", "'re passing", "'ll to pass"], "Уверен, ты сдашь экзамен.", "Уверенность → will."],
    ["g", "I don't think it ___ tomorrow. (rain)", "will rain", ["won't rain", "rains", "is raining"], "Не думаю, что завтра будет дождь.", "I don't think … will."],
    ["g", "Do you think people ___ on Mars one day? (live)", "will live", ["are living", "live", "would living"], "Как думаешь, люди когда-нибудь будут жить на Марсе?", "Прогноз-мнение → will."],
    ["g", "Don't worry about the test. It ___ difficult. (not be)", "won't be", ["isn't being", "doesn't be", "will not to be"], "Не переживай. Тест не будет сложным.", "won't be."],
    ["g", "She ___ probably ___ late — she always is. (be)", "'ll … be", ["is … being", "will … being", "does … be"], "Она, наверное, опоздает — как всегда.", "She'll probably be late."],
    ["g", "Taxi prices ___ next year, I expect. (go up)", "will go up", ["are going up", "go up", "would go up"], "Я думаю, такси подорожает в следующем году.", "Ожидание → will."],
    ["g", "I ___ 16 on my next birthday. (be)", "'ll be", ["'m being", "am", "'ll have"], "В следующий день рождения мне будет 16.", "Факт будущего → will be."],
    ["g", "Ask Dana. She ___ the answer. (know)", "'ll know", ["knows will", "'s knowing", "'ll knowing"], "Спроси Дану. Она знает ответ.", "Предположение → will."],
    ["g", "He ___ probably ___ the job. He's too young. (not get)", "won't … get", ["will … not get", "doesn't … get", "isn't … getting"], "Он, наверное, не получит эту работу.", "probably won't."],
    ["g", "Where do you think you ___ in ten years? (be)", "'ll be", ["are", "'re being", "would being"], "Где, как думаешь, ты будешь через десять лет?", "Прогноз → will be."]
   ]},
   { task: "**will** or **going to**?", items: [
    ["g", "Look at that black sky! It ___ a storm.", "'s going to be", ["'ll be", "is", "has been"], "Посмотри, какое чёрное небо! Будет гроза.", "Видимые признаки → going to."],
    ["g", "I think Kazakhstan ___ the match tomorrow.", "will win", ["is going to winning", "wins", "is winning"], "Думаю, Казахстан завтра выиграет.", "Мнение → will."],
    ["g", "She's holding her stomach. She ___ sick.", "'s going to be", ["'ll be", "is", "was"], "Она держится за живот. Её сейчас стошнит.", "Признаки → going to."],
    ["g", "Perhaps we ___ a flying car one day.", "will have", ["are going to having", "have", "are having"], "Возможно, однажды у нас будут летающие машины.", "Предположение → will."],
    ["g", "Watch out! You ___ your coffee!", "'re going to spill", ["'ll spill", "spill", "spilt"], "Осторожно! Сейчас прольёшь кофе!", "Видим → going to."],
    ["g", "Don't lend him money. He ___ it back.", "won't pay", ["isn't going pay", "doesn't pay", "not pay"], "Не давай ему денег. Он не вернёт.", "Мнение → won't."],
    ["g", "It's 8:55 and the exam is at nine. We ___ late!", "'re going to be", ["'ll being", "are", "have been"], "8:55, экзамен в девять. Мы опоздаем!", "Признаки → going to."],
    ["g", "I expect the shops ___ busy before New Year.", "will be", ["are going be", "are being", "be"], "Думаю, перед Новым годом в магазинах будет много народу.", "expect → will."],
    ["g", "The ice is very thin. Somebody ___ through it.", "'s going to fall", ["'ll falling", "falls", "fell"], "Лёд очень тонкий. Кто-нибудь провалится.", "Признаки → going to."],
    ["g", "Try this soup. I'm sure you ___ it.", "'ll like", ["are liking", "like will", "'re going like"], "Попробуй суп. Уверен, понравится.", "I'm sure → will."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "I think he won't come.", "I don't think he'll come.", ["I think he doesn't come.", "I think he not will come.", "I don't think he comes will."], "Не думаю, что он придёт.", "I don't think … will."],
    ["e", "She will probably not call.", "She probably won't call.", ["She won't probably call.", "She probably will not to call.", "She probably doesn't will call."], "Она, наверное, не позвонит.", "probably won't."],
    ["e", "I will be 15 years next month.", "I'll be 15 next month.", ["I'll have 15 next month.", "I'm being 15 next month.", "I will have 15 years next month."], "В следующем месяце мне будет 15.", "be + число."],
    ["e", "Look! That tree will fall.", "Look! That tree's going to fall.", ["Look! That tree falls.", "Look! That tree is fall.", "Look! That tree will falling."], "Смотри! Дерево сейчас упадёт.", "Признаки → going to."],
    ["e", "I'm sure you will to enjoy it.", "I'm sure you'll enjoy it.", ["I'm sure you will enjoying it.", "I'm sure you enjoy it will.", "I'm sure you're going enjoy it."], "Уверен, тебе понравится.", "will + enjoy."],
    ["e", "Do you think it rains tomorrow?", "Do you think it will rain tomorrow?", ["Do you think it is rain tomorrow?", "Do you think it rain tomorrow?", "Do you think will it rain tomorrow?"], "Как думаешь, завтра будет дождь?", "Прогноз → will."],
    ["e", "Will you be at school tomorrow? — Yes, I'll.", "Will you be at school tomorrow? — Yes, I will.", ["Will you be at school tomorrow? — Yes, I'm.", "Will you be at school tomorrow? — Yes, I do.", "Will you be at school tomorrow? — Yes, I'll be."], "Ты завтра будешь в школе? — Да.", "Краткий ответ: Yes, I will."],
    ["e", "People will living longer in the future.", "People will live longer in the future.", ["People will to live longer in the future.", "People living longer in the future.", "People will lives longer in the future."], "В будущем люди будут жить дольше.", "will + live."],
    ["e", "He wills be famous one day.", "He will be famous one day.", ["He will being famous one day.", "He'll is famous one day.", "He wills to be famous one day."], "Однажды он станет знаменитым.", "will — без -s."],
    ["e", "I hope it will not be rain on Saturday.", "I hope it won't rain on Saturday.", ["I hope it won't raining on Saturday.", "I hope it doesn't will rain on Saturday.", "I hope it not rain on Saturday."], "Надеюсь, в субботу не будет дождя.", "won't + rain."]
   ]}
  ]},
{ n: 28, floor: 4, title: "Time clauses: when / as soon as / until + present", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "После when — настоящее время, хотя речь о будущем", p: "В придаточных времени (**when, as soon as, before, after, until, while**) про будущее говорят **Present Simple**, а не will.",
      table: [["Главное (будущее)", "Придаточное (настоящее)"], ["I'**ll call** you", "**when** I **get** home."], ["We'**ll start**", "**as soon as** everybody **arrives**."], ["Wait here", "**until** I **come** back."], ["I'**ll have** a shower", "**before** I **go** out."]] },
    { k: "B", h: "Present Perfect — когда действие должно завершиться", p: "Можно сказать **when I've finished** — подчёркиваем, что сначала закончу.",
      ex: ["I'll tell you **when I've decided**.", "You can go out **after you've done** your homework.", "Don't call me **until** you'**ve read** it."] },
    { k: "C", h: "if — то же правило", p: "Условие тоже в Present: **If** it **rains**, we'll stay at home. (подробнее — Part 9)",
      note: "when ≠ if: **When** I see him (точно увижу) · **If** I see him (может, увижу)." }
  ], mistakes: [["I'll call you when I will arrive.", "I'll call you when I arrive.", "После when — Present Simple."], ["Wait until I will come.", "Wait until I come.", "После until — Present."], ["As soon as she will finish, we'll go.", "As soon as she finishes, we'll go.", "После as soon as — Present."]] },
  ex: [
   { task: "Put the verbs in the correct form", items: [
    ["g", "I'll text you when I ___ at the station. (arrive)", "arrive", ["will arrive", "'m arriving", "arrived"], "Напишу тебе, когда приеду на вокзал.", "После when — Present."],
    ["g", "We'll have dinner as soon as Dad ___ home. (get)", "gets", ["will get", "is getting", "got"], "Поужинаем, как только папа придёт.", "as soon as + Present."],
    ["g", "Don't open the door until I ___ you. (tell)", "tell", ["will tell", "'m telling", "told"], "Не открывай дверь, пока я не скажу.", "until + Present."],
    ["g", "Before you ___ the room, turn off the lights. (leave)", "leave", ["will leave", "are leaving", "left"], "Перед уходом из комнаты выключи свет.", "before + Present."],
    ["g", "I ___ you as soon as I hear any news. (call)", "'ll call", ["call", "'m calling", "called"], "Позвоню, как только будут новости.", "Главная часть → will."],
    ["g", "After she ___ university, she'll travel the world. (finish)", "finishes", ["will finish", "is finishing", "finished"], "После университета она поедет путешествовать.", "after + Present."],
    ["g", "When you ___ older, you'll understand. (be)", "are", ["will be", "being", "were"], "Когда станешь старше, поймёшь.", "when + Present."],
    ["g", "I'll wait here while you ___ the tickets. (buy)", "buy", ["will buy", "bought", "are buy"], "Я подожду, пока ты покупаешь билеты.", "while + Present."],
    ["g", "We won't start the game until everybody ___ ready. (be)", "is", ["will be", "are", "be"], "Не начнём, пока все не будут готовы.", "until + Present; everybody → is."],
    ["g", "The baby ___ when she wakes up. (be hungry)", "will be hungry", ["is hungry will", "be hungry", "was hungry"], "Малышка проснётся голодной.", "Главная часть → will."]
   ]},
   { task: "Finish first: Present Perfect after **when / after / until**", items: [
    ["g", "You can watch TV when you ___ your homework. (do)", "'ve done", ["'ll do", "did", "do will"], "Посмотришь телевизор, когда сделаешь уроки.", "Сначала закончить → have done."],
    ["g", "I'll lend you the book after I ___ it. (read)", "'ve read", ["'ll read", "am reading", "readed"], "Дам тебе книгу, когда дочитаю.", "after I've read."],
    ["g", "Don't leave until you ___ goodbye to Grandma. (say)", "'ve said", ["'ll say", "said", "are saying"], "Не уходи, пока не попрощаешься с бабушкой.", "until you've said."],
    ["g", "When I ___ this email, I'll come and help you. (write)", "'ve written", ["'ll write", "wrote", "am write"], "Допишу письмо и приду помогу.", "When I've written."],
    ["g", "We'll decide when we ___ all the options. (see)", "'ve seen", ["'ll see", "saw", "are see"], "Решим, когда увидим все варианты.", "'ve seen."],
    ["g", "I'll call you as soon as the doctor ___ me. (examine)", "has examined", ["will examine", "examined", "is examine"], "Позвоню, как только врач меня осмотрит.", "has examined."],
    ["g", "___ you see Aliya, tell her to call me.", "If", ["Will", "Unless", "Until"], "Если увидишь Алию, скажи ей позвонить мне.", "Может увидишь → if."],
    ["g", "___ I get home, I'll have a shower. (I will definitely get home)", "When", ["If", "Unless", "Until"], "Когда приду домой, приму душ.", "Точно произойдёт → when."],
    ["g", "I'll look after your cat ___ you're on holiday.", "while", ["until", "unless", "since"], "Я присмотрю за твоей кошкой, пока ты в отпуске.", "while = пока (одновременно)."],
    ["g", "Stay in bed ___ you feel better.", "until", ["while", "since", "unless"], "Лежи в постели, пока не станет лучше.", "until = до тех пор, пока не."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "I'll call you when I will get home.", "I'll call you when I get home.", ["I call you when I will get home.", "I'll call you when I'm get home.", "I'll calling you when I get home."], "Позвоню, когда приду домой.", "После when — Present."],
    ["e", "Wait here until I will come back.", "Wait here until I come back.", ["Wait here until I came back.", "Wait here until I coming back.", "Wait here until I'm come back."], "Подожди здесь, пока я не вернусь.", "until + Present."],
    ["e", "As soon as the film will finish, we'll leave.", "As soon as the film finishes, we'll leave.", ["As soon as the film finish, we'll leave.", "As soon as the film finished, we'll leave.", "As soon as the film is finish, we'll leave."], "Как только фильм закончится, уйдём.", "as soon as + Present."],
    ["e", "Before you will go, close the window.", "Before you go, close the window.", ["Before you going, close the window.", "Before you went, close the window.", "Before you are go, close the window."], "Перед уходом закрой окно.", "before + Present."],
    ["e", "When I will be older, I will be a pilot.", "When I'm older, I'll be a pilot.", ["When I'm older, I am a pilot.", "When I be older, I'll be a pilot.", "When I will older, I'll be a pilot."], "Когда вырасту, стану пилотом.", "when + Present; главное → will."],
    ["e", "After she will finish school, she will go to Astana.", "After she finishes school, she'll go to Astana.", ["After she finish school, she'll go to Astana.", "After she finished school, she'll go to Astana.", "After she will finishes school, she'll go to Astana."], "Окончив школу, она поедет в Астану.", "after + Present."],
    ["e", "I'll tell you when I'll decide.", "I'll tell you when I've decided.", ["I tell you when I'll decide.", "I'll tell you when I decided.", "I'll tell you when I'm decide."], "Скажу, когда решу.", "when I've decided / when I decide."],
    ["e", "If it will rain, we'll stay inside.", "If it rains, we'll stay inside.", ["If it rain, we'll stay inside.", "If it rained, we'll stay inside.", "If it is rain, we'll stay inside."], "Если будет дождь, останемся дома.", "if + Present."],
    ["e", "We'll wait while you will park the car.", "We'll wait while you park the car.", ["We wait while you will park the car.", "We'll wait while you parked the car.", "We'll wait while you are park the car."], "Мы подождём, пока ты паркуешься.", "while + Present."],
    ["e", "I'm going to stay until the party will end.", "I'm going to stay until the party ends.", ["I'm going to stay until the party end.", "I'm going to stay until the party ended.", "I'm going to stay until the party is end."], "Я останусь до конца вечеринки.", "until + Present."]
   ]}
  ]},
{ n: 29, floor: 4, title: "Future Continuous and Future Perfect", cefr: "B1–B2",
  rule: { sections: [
    { k: "A", h: "Future Continuous: will be doing", p: "Действие будет **в процессе** в определённый момент будущего.",
      ex: ["This time tomorrow I'**ll be lying** on the beach.", "Don't call at eight — we'**ll be having** dinner.", "At 10 a.m. she'**ll be sitting** her exam."] },
    { k: "B", h: "Future Perfect: will have done", p: "Действие **завершится к** определённому моменту будущего. Часто с **by** (к).",
      ex: ["By 2030 I'**ll have finished** university.", "The film **will have started** by the time we arrive.", "**Will** you **have finished** the report by Friday?"] },
    { k: "C", h: "Сравните", p: "",
      table: [["Форма", "Пример", "Смысл"], ["will do", "I'll finish at 6.", "закончу в 6"], ["will be doing", "At 6 I'll be finishing.", "в 6 буду в процессе"], ["will have done", "By 6 I'll have finished.", "к 6 уже закончу"]],
      note: "Will you **be using** the car tonight? — вежливый вопрос о планах (Future Continuous)." }
  ], mistakes: [["At nine I will sleep.", "At nine I'll be sleeping.", "В процессе в момент будущего → will be doing."], ["By next year I will finish the course.", "By next year I'll have finished the course.", "К моменту → will have done."], ["I'll have finish by then.", "I'll have finished by then.", "will have + V3."]] },
  ex: [
   { task: "Complete with **will be + -ing**", items: [
    ["g", "This time next week we ___ in the mountains. (ski)", "'ll be skiing", ["'ll ski", "'re skiing next", "'ll have skied"], "Через неделю в это время мы будем кататься в горах.", "Процесс в момент будущего."],
    ["g", "Don't phone between 2 and 4. I ___. (work)", "'ll be working", ["'ll work", "work", "'ll have worked"], "Не звони с 2 до 4. Я буду работать.", "will be working."],
    ["g", "At midnight I ___ on the plane. (sleep)", "'ll be sleeping", ["'ll sleep", "sleep", "'ll have slept"], "В полночь я буду спать в самолёте.", "will be sleeping."],
    ["g", "Tomorrow at 9 a.m. the students ___ their exam. (write)", "will be writing", ["will write at", "write", "will have written"], "Завтра в 9 утра студенты будут писать экзамен.", "will be writing."],
    ["g", "___ you ___ the car this evening? I need it. (use)", "Will … be using", ["Will … use", "Are … use", "Will … have used"], "Ты будешь пользоваться машиной вечером? Она мне нужна.", "Вежливый вопрос о планах."],
    ["g", "When you arrive, I ___ for you at the gate. (wait)", "'ll be waiting", ["'ll wait for", "wait", "'ll have waited"], "Когда приедешь, я буду ждать тебя у выхода.", "will be waiting."],
    ["g", "In ten years' time, people ___ driverless cars. (drive)", "will be driving", ["will drive in", "drive", "will have driven"], "Через десять лет люди будут ездить на беспилотных машинах.", "Процесс в будущем."],
    ["g", "Don't worry — we ___ about you. (think)", "'ll be thinking", ["'ll think", "think", "'ll have thought"], "Не волнуйся — мы будем думать о тебе.", "will be thinking."],
    ["g", "At this time on Sunday, the team ___ to Spain. (fly)", "will be flying", ["will fly at", "flies", "will have flown"], "В это время в воскресенье команда будет лететь в Испанию.", "will be flying."],
    ["g", "I can't meet at six. I ___ my brother from school. (pick up)", "'ll be picking up", ["'ll pick up at", "pick up", "'ll have picked up"], "В шесть не могу. Буду забирать брата из школы.", "will be picking up."]
   ]},
   { task: "Complete with **will have + V3**", items: [
    ["g", "By the end of the year, I ___ ten books. (read)", "'ll have read", ["'ll read", "'ll be reading", "read"], "К концу года я прочитаю десять книг.", "by → will have read."],
    ["g", "The guests will arrive at 7. By then we ___ everything. (prepare)", "'ll have prepared", ["'ll prepare", "'ll be preparing", "prepare"], "Гости придут в 7. К тому времени мы всё приготовим.", "will have prepared."],
    ["g", "By 2030, scientists ___ a cure, I hope. (find)", "will have found", ["will find by", "will be finding", "find"], "Надеюсь, к 2030 году учёные найдут лекарство.", "will have found."],
    ["g", "Call me at nine. I ___ my homework by then. (finish)", "'ll have finished", ["'ll finish", "'ll be finishing", "finish"], "Позвони в девять. К тому времени я сделаю уроки.", "will have finished."],
    ["g", "___ you ___ the report by Monday? (complete)", "Will … have completed", ["Will … complete", "Are … completing", "Will … be completing"], "Ты закончишь отчёт к понедельнику?", "Will you have completed…?"],
    ["g", "By the time we get there, the shop ___. (close)", "will have closed", ["will close", "will be closing", "closes"], "К тому времени, как мы доберёмся, магазин уже закроется.", "will have closed."],
    ["g", "Next month my parents ___ married for 25 years. (be)", "will have been", ["will be", "are", "will be being"], "В следующем месяце родители будут женаты 25 лет.", "will have been."],
    ["g", "I ___ this course by June. (not finish)", "won't have finished", ["won't finish", "won't be finishing", "don't finish"], "К июню я ещё не закончу этот курс.", "won't have finished."],
    ["g", "By tomorrow evening, the snow ___. (melt)", "will have melted", ["will melt", "will be melting", "melts"], "К завтрашнему вечеру снег растает.", "will have melted."],
    ["g", "She ___ 1,000 kilometres by the end of the trip. (drive)", "will have driven", ["will drive", "will be driving", "drives"], "К концу поездки она проедет 1000 км.", "will have driven."]
   ]},
   { task: "Which future? Find the mistake", items: [
    ["g", "Don't come at 8 — we ___ the match on TV. (in progress)", "'ll be watching", ["'ll have watched", "watch", "'ll watched"], "Не приходи в 8 — мы будем смотреть матч.", "В процессе → will be doing."],
    ["g", "Come at 10 — the match ___ by then. (complete)", "will have finished", ["will be finishing", "finishes", "will finishing"], "Приходи в 10 — матч к тому времени закончится.", "К моменту → will have done."],
    ["e", "This time tomorrow I will lie on the beach.", "This time tomorrow I'll be lying on the beach.", ["This time tomorrow I'll have lain on the beach.", "This time tomorrow I'm lie on the beach.", "This time tomorrow I'll be lie on the beach."], "Завтра в это время я буду лежать на пляже.", "will be lying."],
    ["e", "By Friday I will finish the project.", "By Friday I'll have finished the project.", ["By Friday I'll be finish the project.", "By Friday I finish the project will.", "By Friday I'll have finish the project."], "К пятнице я закончу проект.", "by → will have finished."],
    ["e", "I'll have finish by six.", "I'll have finished by six.", ["I'll has finished by six.", "I'll have finishing by six.", "I have will finished by six."], "Я закончу к шести.", "will have + V3."],
    ["e", "At 8 p.m. she will be have dinner.", "At 8 p.m. she'll be having dinner.", ["At 8 p.m. she'll be had dinner.", "At 8 p.m. she'll having dinner.", "At 8 p.m. she will been having dinner."], "В 8 вечера она будет ужинать.", "will be + having."],
    ["e", "Will you be finished the work by tomorrow?", "Will you have finished the work by tomorrow?", ["Will you be finish the work by tomorrow?", "Do you have finished the work by tomorrow?", "Will you finished the work by tomorrow?"], "Ты закончишь работу к завтра?", "will have finished."],
    ["e", "In 2040 we will having robots at home.", "In 2040 we'll be having robots at home. / we'll have robots at home.", ["In 2040 we will have robots at home been.", "In 2040 we will had robots at home.", "In 2040 we having robots at home."], "В 2040 году у нас дома будут роботы.", "will + have / will be having."],
    ["e", "By next summer, I will learn 1,000 new words.", "By next summer, I'll have learnt 1,000 new words.", ["By next summer, I'll be learn 1,000 new words.", "By next summer, I learn 1,000 new words.", "By next summer, I'll have learn 1,000 new words."], "К следующему лету я выучу 1000 новых слов.", "by → will have learnt."],
    ["e", "When you call, I'll drive, so I won't answer.", "When you call, I'll be driving, so I won't answer.", ["When you call, I'll have driven, so I won't answer.", "When you call, I drive, so I won't answer.", "When you will call, I'll be driving, so I won't answer."], "Когда позвонишь, я буду за рулём и не отвечу.", "В процессе → will be driving."]
   ]}
  ]}
);
