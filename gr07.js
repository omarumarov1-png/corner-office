// Part 7 · The passive (Units 43–46). Original explanations and examples.
window.GRAMMAR.units.push(
{ n: 43, floor: 7, title: "Passive: is done / was done", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "Зачем пассив", p: "Пассив нужен, когда важно **что произошло**, а не **кто** это сделал (или исполнитель неизвестен, очевиден).",
      table: [["Актив", "Пассив"], ["Someone **cleans** the office every day.", "The office **is cleaned** every day."], ["Someone **stole** my bike.", "My bike **was stolen**."]] },
    { k: "B", h: "Форма: be + V3", p: "**am/is/are + V3** — настоящее. **was/were + V3** — прошедшее.",
      ex: ["English **is spoken** all over the world.", "These phones **are made** in Korea.", "The museum **was built** in 1902.", "We **were invited** to the wedding."] },
    { k: "C", h: "by — кем; отрицание и вопрос", p: "Исполнителя добавляем через **by**, только если он важен. Отрицание/вопрос — как с be.",
      ex: ["*Harry Potter* **was written by** J. K. Rowling.", "The windows **aren't cleaned** very often.", "**Was** the match **cancelled**?", "Where **were** you **born**?"] }
  ], mistakes: [["The car was repair yesterday.", "The car was repaired yesterday.", "be + V3."], ["English is speak here.", "English is spoken here.", "speak → spoken."], ["I born in 2009.", "I was born in 2009.", "be born → was born."]] },
  ex: [
   { task: "Present passive: **am / is / are + V3**", items: [
    ["g", "Rice ___ in many Asian countries. (grow)", "is grown", ["is grow", "grows", "are grown"], "Рис выращивают во многих странах Азии.", "is + grown."],
    ["g", "These cars ___ in Germany. (make)", "are made", ["is made", "are make", "make"], "Эти машины делают в Германии.", "cars → are made."],
    ["g", "The rooms ___ every morning. (clean)", "are cleaned", ["is cleaned", "are clean", "cleans"], "Комнаты убирают каждое утро.", "are cleaned."],
    ["g", "Kazakh and Russian ___ in our city. (speak)", "are spoken", ["is spoken", "are speak", "speaks"], "В нашем городе говорят на казахском и русском.", "Два языка → are spoken."],
    ["g", "The letters ___ on Saturdays. (not deliver)", "aren't delivered", ["isn't delivered", "don't deliver", "aren't deliver"], "По субботам письма не доставляют.", "aren't + delivered."],
    ["g", "How ___ this word ___? (pronounce)", "is … pronounced", ["does … pronounce", "is … pronounce", "are … pronounced"], "Как произносится это слово?", "is + pronounced."],
    ["g", "Cheese ___ from milk. (make)", "is made", ["is make", "makes", "are made"], "Сыр делают из молока.", "is made."],
    ["g", "The office ___ at weekends. (close)", "is closed", ["closes is", "is close", "are closed"], "По выходным офис закрыт.", "is closed."],
    ["g", "Visitors ___ to take photos inside. (not allow)", "aren't allowed", ["don't allow", "isn't allowed", "aren't allow"], "Посетителям нельзя фотографировать внутри.", "aren't allowed."],
    ["g", "Our homework ___ online. (check)", "is checked", ["is check", "checks", "are checked"], "Нашу домашку проверяют онлайн.", "is checked."]
   ]},
   { task: "Past passive: **was / were + V3**", items: [
    ["g", "This bridge ___ in 1985. (build)", "was built", ["was build", "built", "were built"], "Этот мост построили в 1985 году.", "was built."],
    ["g", "My phone ___ on the bus. (steal)", "was stolen", ["was stole", "stole", "were stolen"], "У меня украли телефон в автобусе.", "steal → stolen."],
    ["g", "The guests ___ with music and flowers. (welcome)", "were welcomed", ["was welcomed", "were welcome", "welcomed were"], "Гостей встретили музыкой и цветами.", "were welcomed."],
    ["g", "The match ___ because of the rain. (cancel)", "was cancelled", ["was cancel", "cancelled was", "were cancelled"], "Матч отменили из-за дождя.", "was cancelled."],
    ["g", "When ___ the telephone ___? (invent)", "was … invented", ["did … invent", "was … invent", "were … invented"], "Когда изобрели телефон?", "was + invented."],
    ["g", "We ___ to the party. (not invite)", "weren't invited", ["wasn't invited", "didn't invite", "weren't invite"], "Нас не пригласили на вечеринку.", "weren't invited."],
    ["g", "The film ___ by a young director. (direct)", "was directed", ["was direct", "directed was", "were directed"], "Фильм снял молодой режиссёр.", "was directed by."],
    ["g", "Two people ___ in the accident. (injure)", "were injured", ["was injured", "were injure", "injured were"], "В аварии пострадали два человека.", "were injured."],
    ["g", "Where ___ you ___? — In Aktobe. (bear)", "were … born", ["was … born", "did … born", "were … bear"], "Где ты родился? — В Актобе.", "be born."],
    ["g", "The thief ___ by the police the next day. (catch)", "was caught", ["was catched", "caught was", "were caught"], "Вора поймала полиция на следующий день.", "catch → caught."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "The window was break last night.", "The window was broken last night.", ["The window broke was last night.", "The window was broke last night.", "The window were broken last night."], "Окно разбили вчера вечером.", "be + broken."],
    ["e", "English is speak in many countries.", "English is spoken in many countries.", ["English is spoke in many countries.", "English speaks in many countries.", "English are spoken in many countries."], "На английском говорят во многих странах.", "speak → spoken."],
    ["e", "My sister born in Semey.", "My sister was born in Semey.", ["My sister is born in Semey.", "My sister was borned in Semey.", "My sister were born in Semey."], "Моя сестра родилась в Семее.", "be born → was born."],
    ["e", "The cars is washed every week.", "The cars are washed every week.", ["The cars washed every week.", "The cars are wash every week.", "The cars is wash every week."], "Машины моют каждую неделю.", "cars → are."],
    ["e", "My bag stolen yesterday.", "My bag was stolen yesterday.", ["My bag is stolen yesterday.", "My bag was stole yesterday.", "My bag were stolen yesterday."], "Мою сумку украли вчера.", "Нужен was."],
    ["e", "The book was wrote by Abai.", "The book was written by Abai.", ["The book wrote by Abai.", "The book was write by Abai.", "The book is wrote by Abai."], "Книгу написал Абай.", "write → written."],
    ["e", "This house was built from my grandfather.", "This house was built by my grandfather.", ["This house built by my grandfather.", "This house was build by my grandfather.", "This house was built of my grandfather."], "Этот дом построил мой дедушка.", "Исполнитель → by."],
    ["e", "Was the letter send yesterday?", "Was the letter sent yesterday?", ["Did the letter sent yesterday?", "Was the letter sended yesterday?", "Is the letter sent yesterday?"], "Письмо отправили вчера?", "send → sent."],
    ["e", "Smoking is not allow here.", "Smoking is not allowed here.", ["Smoking not allowed is here.", "Smoking doesn't allowed here.", "Smoking is not allowing here."], "Здесь нельзя курить.", "be + allowed."],
    ["e", "The results were announce on Friday.", "The results were announced on Friday.", ["The results was announced on Friday.", "The results announced were on Friday.", "The results were announcing on Friday."], "Результаты объявили в пятницу.", "were + announced."]
   ]}
  ]},
{ n: 44, floor: 7, title: "Passive in other tenses: is being done / has been done / will be done", cefr: "B1–B2",
  rule: { sections: [
    { k: "A", h: "be меняется по временам, V3 — всегда", p: "Время показывает глагол **be**, а основной глагол всегда в третьей форме.",
      table: [["Время", "Актив", "Пассив"], ["Present Continuous", "They **are building** a school.", "A school **is being built**."], ["Present Perfect", "Someone **has stolen** my car.", "My car **has been stolen**."], ["will", "They **will open** it in May.", "It **will be opened** in May."], ["going to", "They're going to **repair** it.", "It's **going to be repaired**."], ["модальный", "You **must do** it now.", "It **must be done** now."]] },
    { k: "B", h: "Present Continuous: is being done", p: "Действие с объектом **идёт сейчас**.",
      ex: ["The road **is being repaired**, so we have to go another way.", "Are you being served? (в магазине: вас обслуживают?)"] },
    { k: "C", h: "Present Perfect: has been done", p: "Результат сейчас, исполнитель не важен.",
      ex: ["The meeting **has been cancelled**.", "Has the room **been cleaned** yet?", "Three people **have been arrested**."] }
  ], mistakes: [["The bridge is being build.", "The bridge is being built.", "being + V3."], ["My wallet has stolen.", "My wallet has been stolen.", "has been + V3."], ["It will finished tomorrow.", "It will be finished tomorrow.", "will be + V3."]] },
  ex: [
   { task: "Complete with the passive", items: [
    ["g", "A new hospital ___ in our town at the moment. (build)", "is being built", ["is building", "is been built", "has building"], "Сейчас в нашем городе строят новую больницу.", "Сейчас → is being built."],
    ["g", "My car ___. I can't find it anywhere! (steal)", "has been stolen", ["has stolen", "is stealing", "was been stolen"], "Мою машину угнали! Нигде не могу найти.", "Результат → has been stolen."],
    ["g", "The new stadium ___ next year. (open)", "will be opened", ["will open be", "will be open", "is opened will"], "Новый стадион откроют в следующем году.", "will be + opened."],
    ["g", "The results ___ tomorrow. (announce)", "will be announced", ["will announce", "will be announce", "are announced will"], "Результаты объявят завтра.", "will be announced."],
    ["g", "Don't use the lift. It ___. (repair)", "is being repaired", ["is repairing", "has repaired", "is been repaired"], "Не пользуйся лифтом. Его ремонтируют.", "is being repaired."],
    ["g", "All the tickets ___. There are none left. (sell)", "have been sold", ["have sold", "are being sell", "has been sold"], "Все билеты проданы.", "have been sold."],
    ["g", "This form must ___ in pen. (complete)", "be completed", ["completed", "be complete", "to be completed"], "Эту форму нужно заполнить ручкой.", "must be + V3."],
    ["g", "The old cinema is going to ___. (knock down)", "be knocked down", ["knocked down", "be knock down", "being knocked down"], "Старый кинотеатр собираются снести.", "going to be + V3."],
    ["g", "___ the problem ___ yet? (solve)", "Has … been solved", ["Has … solved", "Is … been solved", "Did … been solved"], "Проблему уже решили?", "Has … been solved."],
    ["g", "Our flight ___ by two hours. (delay)", "has been delayed", ["has delayed", "is delaying", "was been delayed"], "Наш рейс задержали на два часа.", "has been delayed."]
   ]},
   { task: "Active to passive", items: [
    ["g", "They are painting our classroom. → Our classroom ___.", "is being painted", ["is painting", "has painted", "is been painted"], "Наш класс красят.", "is being painted."],
    ["g", "Someone has eaten my sandwich! → My sandwich ___!", "has been eaten", ["has eaten", "is eaten", "was been eaten"], "Мой бутерброд съели!", "has been eaten."],
    ["g", "They will send the parcel on Monday. → The parcel ___ on Monday.", "will be sent", ["will send", "will be send", "is sent will"], "Посылку отправят в понедельник.", "will be sent."],
    ["g", "You should water the plants every day. → The plants ___ every day.", "should be watered", ["should water", "should be water", "should watered"], "Растения нужно поливать каждый день.", "should be + V3."],
    ["g", "They have cancelled the concert. → The concert ___.", "has been cancelled", ["has cancelled", "is cancelling", "was been cancelled"], "Концерт отменили.", "has been cancelled."],
    ["g", "People are watching the match all over the world. → The match ___ all over the world.", "is being watched", ["is watching", "has watched", "is been watched"], "Матч смотрят по всему миру.", "is being watched."],
    ["g", "They can't repair my phone. → My phone ___.", "can't be repaired", ["can't repaired", "can't be repair", "can't to be repaired"], "Мой телефон не подлежит ремонту.", "can't be + V3."],
    ["g", "Somebody has opened my letter. → My letter ___.", "has been opened", ["has opened", "is opening", "was been opened"], "Моё письмо вскрыли.", "has been opened."],
    ["g", "They will choose the winner tonight. → The winner ___ tonight.", "will be chosen", ["will choose", "will be chose", "is chosen will"], "Победителя выберут сегодня вечером.", "choose → chosen."],
    ["g", "We must finish the project by Friday. → The project ___ by Friday.", "must be finished", ["must finished", "must be finish", "must to be finished"], "Проект нужно закончить к пятнице.", "must be finished."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "The road is being repair.", "The road is being repaired.", ["The road is repairing.", "The road is been repaired.", "The road being repaired is."], "Дорогу ремонтируют.", "being + V3."],
    ["e", "My bike has stolen.", "My bike has been stolen.", ["My bike has been stole.", "My bike is been stolen.", "My bike have been stolen."], "Мой велосипед украли.", "has been + V3."],
    ["e", "The work will finished tomorrow.", "The work will be finished tomorrow.", ["The work will be finish tomorrow.", "The work will finishing tomorrow.", "The work is will be finished tomorrow."], "Работу закончат завтра.", "will be + V3."],
    ["e", "This must do today.", "This must be done today.", ["This must be did today.", "This must done today.", "This must to be done today."], "Это нужно сделать сегодня.", "must be done."],
    ["e", "A new school is building in our area.", "A new school is being built in our area.", ["A new school is been built in our area.", "A new school is build in our area.", "A new school being built in our area."], "В нашем районе строят новую школу.", "Пассив → is being built."],
    ["e", "Has the room been clean?", "Has the room been cleaned?", ["Has the room cleaned?", "Is the room been cleaned?", "Has the room been cleaning?"], "Комнату убрали?", "been + cleaned."],
    ["e", "The meeting has been cancel.", "The meeting has been cancelled.", ["The meeting has cancelled.", "The meeting is been cancelled.", "The meeting has been cancelling."], "Совещание отменили.", "been + cancelled."],
    ["e", "The bags are going to be check.", "The bags are going to be checked.", ["The bags are going to checked.", "The bags are going be checked.", "The bags going to be checked."], "Сумки проверят.", "be + checked."],
    ["e", "The letter can be send by email.", "The letter can be sent by email.", ["The letter can sent by email.", "The letter can be sended by email.", "The letter can to be sent by email."], "Письмо можно отправить по почте.", "be + sent."],
    ["e", "Three new players have be signed.", "Three new players have been signed.", ["Three new players have signed.", "Three new players has been signed.", "Three new players have been sign."], "Подписаны три новых игрока.", "have been + V3."]
   ]}
  ]},
{ n: 45, floor: 7, title: "have something done (I had my hair cut)", cefr: "B1–B2",
  rule: { sections: [
    { k: "A", h: "Кто-то делает это для вас", p: "**have + объект + V3** — вы организуете, чтобы **кто-то другой** что-то сделал для вас (обычно за деньги).",
      table: [["Сам", "Кто-то для меня"], ["I cut my hair.", "I **had my hair cut**. (меня постригли)"], ["She repairs her car.", "She **has her car repaired**."], ["We painted the house.", "We **had the house painted**."]] },
    { k: "B", h: "Во всех временах", p: "Меняется только **have**.",
      ex: ["I'**m having** my phone **fixed** tomorrow.", "We'**ve just had** the kitchen **redone**.", "You should **have** your eyes **tested**.", "Where **do** you **have** your hair **cut**?"] },
    { k: "C", h: "get something done и неприятные случаи", p: "**get something done** — то же, разговорнее. **have something stolen/broken** — с вами что-то случилось (не по вашей воле).",
      ex: ["I need to **get** my bike **repaired**.", "She **had her bag stolen** on the train.", "He **had his nose broken** in a fight."] }
  ], mistakes: [["I cut my hair at the hairdresser's.", "I had my hair cut at the hairdresser's.", "Сделал не сам → have sth done."], ["I had repaired my car. (= someone did it)", "I had my car repaired.", "Порядок: have + объект + V3."], ["She has her nails do every week.", "She has her nails done every week.", "V3: done."]] },
  ex: [
   { task: "Use **have something done**", items: [
    ["g", "My hair is too long. I need to ___. (cut)", "have it cut", ["cut it", "have cut it", "have it cutting"], "Волосы слишком длинные. Надо подстричься.", "have + it + cut."],
    ["g", "We ___ our flat ___ last month. (paint)", "had … painted", ["painted … had", "had … paint", "have … painted"], "В прошлом месяце нам покрасили квартиру.", "had + flat + painted."],
    ["g", "I'm ___ my car ___ tomorrow. (service)", "having … serviced", ["having … service", "have … serviced", "servicing … had"], "Завтра мне обслуживают машину.", "am having + car + serviced."],
    ["g", "She ___ her eyes ___ every year. (test)", "has … tested", ["tests … has", "has … test", "is … tested"], "Она каждый год проверяет зрение.", "has + eyes + tested."],
    ["g", "Where did you ___ your photos ___? (print)", "have … printed", ["print … had", "have … print", "had … printed"], "Где ты распечатал фото?", "did you have … printed."],
    ["g", "You should ___ that tooth ___. (check)", "have … checked", ["check … have", "have … check", "had … checked"], "Тебе стоит проверить этот зуб.", "should have + tooth + checked."],
    ["g", "We've just ___ a new kitchen ___. (fit)", "had … fitted", ["fitted … had", "had … fit", "have … fitted"], "Нам только что поставили новую кухню.", "have had + kitchen + fitted."],
    ["g", "My dad ___ his suit ___ for the wedding. (clean)", "had … cleaned", ["cleaned … had", "had … clean", "has … clean"], "Папа почистил костюм к свадьбе.", "had + suit + cleaned."],
    ["g", "How often do you ___ your car ___? (wash)", "have … washed", ["wash … have", "have … wash", "had … washed"], "Как часто ты моешь машину на мойке?", "have + car + washed."],
    ["g", "I'm going to ___ my phone screen ___. (replace)", "have … replaced", ["replace … have", "have … replace", "had … replaced"], "Я собираюсь заменить экран телефона.", "going to have … replaced."]
   ]},
   { task: "**get something done** and bad experiences", items: [
    ["g", "I must ___ my bike ___ before the trip. (get / repair)", "get … repaired", ["get … repair", "repair … get", "got … repaired"], "Перед поездкой надо отремонтировать велосипед.", "get + bike + repaired."],
    ["g", "She ___ her bag ___ on the metro. (have / steal)", "had … stolen", ["stole … had", "had … stole", "has … steal"], "У неё украли сумку в метро.", "have sth stolen = случилось с ней."],
    ["g", "He ___ his window ___ by a football. (have / break)", "had … broken", ["broke … had", "had … broke", "has … break"], "Ему разбили окно мячом.", "had his window broken."],
    ["g", "Can I ___ this jacket ___ by Friday? (get / clean)", "get … cleaned", ["get … clean", "clean … get", "got … cleaned"], "Можно почистить эту куртку к пятнице?", "get + jacket + cleaned."],
    ["g", "We ___ the documents ___ into English. (get / translate)", "got … translated", ["translated … got", "got … translate", "get … translating"], "Нам перевели документы на английский.", "got + documents + translated."],
    ["g", "I ___ my passport ___ at the airport. (have / check)", "had … checked", ["checked … had", "had … check", "have … checking"], "В аэропорту мне проверили паспорт.", "had + passport + checked."],
    ["g", "She's ___ her ears ___. (have / pierce)", "having … pierced", ["piercing … had", "having … pierce", "have … pierced"], "Ей прокалывают уши.", "is having + ears + pierced."],
    ["g", "They ___ their house ___ while they were on holiday. (have / burgle)", "had … burgled", ["burgled … had", "had … burgle", "have … burgling"], "Их дом ограбили, пока они были в отпуске.", "had their house burgled."],
    ["g", "Why don't you ___ your hair ___ shorter? (get / cut)", "get … cut", ["cut … get", "get … cutting", "got … cut"], "Почему бы тебе не подстричься короче?", "get + hair + cut."],
    ["g", "I need to ___ these shoes ___. (get / mend)", "get … mended", ["mend … get", "get … mend", "got … mending"], "Нужно починить эти туфли.", "get + shoes + mended."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "I cut my hair yesterday at the barber's.", "I had my hair cut yesterday at the barber's.", ["I had cut my hair yesterday at the barber's.", "I have my hair cut yesterday at the barber's.", "I had my hair cutting yesterday at the barber's."], "Вчера меня подстригли в парикмахерской.", "Не сам → had my hair cut."],
    ["e", "She had repaired her laptop. (by a technician)", "She had her laptop repaired.", ["She had her laptop repair.", "She repaired had her laptop.", "She has her laptop repairing."], "Ей починили ноутбук.", "have + объект + V3."],
    ["e", "We're having painted our house.", "We're having our house painted.", ["We're having our house paint.", "We're painting our house had.", "We have our house painting."], "Нам красят дом.", "having + house + painted."],
    ["e", "He has his car wash every Saturday.", "He has his car washed every Saturday.", ["He has his car washing every Saturday.", "He has washed his car every Saturday.", "He have his car washed every Saturday."], "Он каждую субботу моет машину на мойке.", "V3: washed."],
    ["e", "I need to get fixed my phone.", "I need to get my phone fixed.", ["I need to get my phone fix.", "I need to fix get my phone.", "I need get my phone fixed."], "Мне нужно починить телефон.", "get + объект + V3."],
    ["e", "She had her purse steal.", "She had her purse stolen.", ["She had stolen her purse.", "She had her purse stole.", "She has her purse stealing."], "У неё украли кошелёк.", "V3: stolen."],
    ["e", "Where do you have cut your hair?", "Where do you have your hair cut?", ["Where do you have your hair cutting?", "Where you have your hair cut?", "Where do you cut have your hair?"], "Где ты стрижёшься?", "have + hair + cut."],
    ["e", "You should have tested your eyes. (advice for now)", "You should have your eyes tested.", ["You should have your eyes test.", "You should testing your eyes.", "You should had your eyes tested."], "Тебе стоит проверить зрение.", "should have + eyes + tested."],
    ["e", "We had the walls paint blue.", "We had the walls painted blue.", ["We had painted the walls blue.", "We had the walls painting blue.", "We have the walls paint blue."], "Нам покрасили стены в синий.", "V3: painted."],
    ["e", "I got cut my hair short.", "I got my hair cut short.", ["I got my hair cutting short.", "I get my hair cut short yesterday.", "I got cutted my hair short."], "Я коротко подстригся.", "got + hair + cut."]
   ]}
  ]},
{ n: 46, floor: 7, title: "It is said that… / He is believed to…", cefr: "B2",
  rule: { sections: [
    { k: "A", h: "It is said / thought / believed that…", p: "Безличный пассив для слухов, мнений, новостей: «говорят, считается».",
      ex: ["**It is said that** the castle is haunted.", "**It is believed that** the thief escaped abroad.", "**It was reported that** ten people were injured.", "**It is expected that** prices will rise."] },
    { k: "B", h: "He is said to be… — тот же смысл, другая структура", p: "Подлежащее + **is said / thought / believed + to-инфинитив**.",
      table: [["It is … that", "Подлежащее + to"], ["It is said that he **is** very rich.", "He **is said to be** very rich."], ["It is thought that she **lives** in Paris.", "She **is thought to live** in Paris."], ["It is believed that they **left** yesterday.", "They **are believed to have left** yesterday."]] },
    { k: "C", h: "Прошлое: to have done", p: "Если действие **раньше** момента речи — **to have + V3**.",
      ex: ["The painting **is thought to have been** stolen in 1990.", "He **is reported to have won** the lottery.", "The ship **is believed to have sunk** near the coast."],
      note: "Глаголы: say, think, believe, report, know, expect, consider, understand, allege." }
  ], mistakes: [["It says that he is rich.", "It is said that he is rich. / He is said to be rich.", "Безличный пассив: it is said."], ["He is said that he is rich.", "He is said to be rich.", "Не смешивать конструкции."], ["She is believed to leave yesterday.", "She is believed to have left yesterday.", "Прошлое → to have + V3."]] },
  ex: [
   { task: "**It is said / thought / believed that…**", items: [
    ["g", "___ said that the old house is haunted.", "It is", ["They are", "He is", "There is"], "Говорят, что в старом доме водятся привидения.", "It is said that…"],
    ["g", "It is ___ that the meeting will be postponed. (expect)", "expected", ["expect", "expecting", "expects"], "Ожидается, что встречу перенесут.", "is + expected."],
    ["g", "It ___ reported that the road was closed. (past)", "was", ["is being", "has", "were"], "Сообщалось, что дорогу закрыли.", "It was reported."],
    ["g", "It is ___ that the president will visit our city. (understand)", "understood", ["understand", "understanding", "understands"], "Известно, что президент посетит наш город.", "is + understood."],
    ["g", "It is widely ___ that exercise improves mood. (believe)", "believed", ["believing", "believe", "believes"], "Широко распространено мнение, что спорт улучшает настроение.", "is + believed."],
    ["g", "It ___ thought that the fire started in the kitchen.", "is", ["has", "does", "thinks"], "Считается, что пожар начался на кухне.", "It is thought."],
    ["g", "It is ___ that he earns a million dollars a year. (say)", "said", ["say", "saying", "says"], "Говорят, он зарабатывает миллион в год.", "is + said."],
    ["g", "It was ___ that the ship had sunk. (fear)", "feared", ["fear", "fearing", "fears"], "Опасались, что корабль затонул.", "was + feared."],
    ["g", "It is ___ that the company will hire 200 people. (report)", "reported", ["report", "reporting", "reports"], "Сообщается, что компания наймёт 200 человек.", "is + reported."],
    ["g", "It is ___ that she is the best player in the league. (consider)", "considered", ["consider", "considering", "considers"], "Её считают лучшей игроком лиги.", "is + considered."]
   ]},
   { task: "**He is said to be… / to have done…**", items: [
    ["g", "It is said that he is very generous. → He is said ___ very generous.", "to be", ["being", "be", "that is"], "Говорят, он очень щедрый.", "is said to be."],
    ["g", "It is thought that she lives in London. → She is thought ___ in London.", "to live", ["living", "live", "that lives"], "Считается, что она живёт в Лондоне.", "is thought to live."],
    ["g", "It is believed that the thieves escaped by car. → The thieves are believed ___ by car.", "to have escaped", ["to escape", "escaping", "to escaped"], "Считается, что воры скрылись на машине.", "Прошлое → to have escaped."],
    ["g", "It is reported that the player is injured. → The player is reported ___ injured.", "to be", ["being", "be", "to have"], "Сообщается, что игрок травмирован.", "is reported to be."],
    ["g", "It is said that the painting was stolen in 1990. → The painting is said ___ stolen in 1990.", "to have been", ["to be", "to been", "having"], "Говорят, картину украли в 1990 году.", "Прошлое пассив → to have been stolen."],
    ["g", "It is expected that prices will rise. → Prices are expected ___.", "to rise", ["rising", "to have risen", "rise"], "Ожидается, что цены вырастут.", "are expected to rise."],
    ["g", "It is known that he speaks five languages. → He is known ___ five languages.", "to speak", ["speaking", "speak", "to have spoke"], "Известно, что он говорит на пяти языках.", "is known to speak."],
    ["g", "It is thought that the king was buried here. → The king is thought ___ buried here.", "to have been", ["to be", "being", "to have"], "Считается, что король похоронен здесь.", "to have been buried."],
    ["g", "It is said that they are working on a new album. → They are said ___ on a new album.", "to be working", ["to work on", "working", "to have worked"], "Говорят, они работают над новым альбомом.", "Сейчас в процессе → to be working."],
    ["g", "It is believed that she won the lottery last year. → She is believed ___ the lottery last year.", "to have won", ["to win", "winning", "to won"], "Считается, что она выиграла в лотерею.", "to have won."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "It says that he is a millionaire.", "It is said that he is a millionaire.", ["It is saying that he is a millionaire.", "It said that he a millionaire.", "It is say that he is a millionaire."], "Говорят, он миллионер.", "Безличный пассив → It is said."],
    ["e", "He is said that he is very clever.", "He is said to be very clever.", ["He is said being very clever.", "He says to be very clever.", "He is said be very clever."], "Говорят, он очень умный.", "He is said to be…"],
    ["e", "She is believed to leave the country last week.", "She is believed to have left the country last week.", ["She is believed leaving the country last week.", "She believed to have left the country last week.", "She is believed to left the country last week."], "Считается, что она уехала из страны на прошлой неделе.", "Прошлое → to have left."],
    ["e", "It is think that the city was founded in 1200.", "It is thought that the city was founded in 1200.", ["It thinks that the city was founded in 1200.", "It is thinked that the city was founded in 1200.", "It is thinking that the city was founded in 1200."], "Считается, что город основан в 1200 году.", "think → thought."],
    ["e", "The bridge is said to be built in 1900.", "The bridge is said to have been built in 1900.", ["The bridge is said to built in 1900.", "The bridge said to have been built in 1900.", "The bridge is said being built in 1900."], "Говорят, мост построили в 1900 году.", "Прошлое пассив → to have been built."],
    ["e", "They are reported have lost the match.", "They are reported to have lost the match.", ["They are reported to lose the match yesterday.", "They reported to have lost the match.", "They are reported lost the match."], "Сообщается, что они проиграли матч.", "to have lost."],
    ["e", "It was believe that the earth was flat.", "It was believed that the earth was flat.", ["It believed that the earth was flat.", "It was believing that the earth was flat.", "It was believes that the earth was flat."], "Считалось, что Земля плоская.", "was + believed."],
    ["e", "He is known for speaking six languages. (= known to)", "He is known to speak six languages.", ["He is known to speaking six languages.", "He known to speak six languages.", "He is known speak six languages."], "Известно, что он говорит на шести языках.", "is known to + глагол."],
    ["e", "The singer is thought to working on a film.", "The singer is thought to be working on a film.", ["The singer is thought to work on a film now.", "The singer thought to be working on a film.", "The singer is thought be working on a film."], "Считается, что певец работает над фильмом.", "to be working."],
    ["e", "It is expected the prices that will fall.", "It is expected that prices will fall.", ["It is expected prices that will fall.", "It expects that prices will fall.", "It is expecting that prices will fall."], "Ожидается, что цены упадут.", "It is expected that…"]
   ]}
  ]}
);
