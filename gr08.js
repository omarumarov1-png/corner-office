// Part 8 · Reported speech (Units 47–49). Original explanations and examples.
window.GRAMMAR.units.push(
{ n: 47, floor: 8, title: "Reported statements: He said (that)… / She told me…", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "Сдвиг времени на шаг назад", p: "Если глагол-вводка в прошлом (**said, told**), время в пересказе обычно сдвигается назад.",
      table: [["Прямая речь", "Косвенная речь"], ["\"I **am** tired.\"", "She said (that) she **was** tired."], ["\"I **work** here.\"", "He said he **worked** there."], ["\"I'**m leaving**.\"", "She said she **was leaving**."], ["\"I **have finished**.\"", "He said he **had finished**."], ["\"I **lost** my keys.\"", "She said she **had lost** her keys."], ["\"I **will** call.\"", "He said he **would** call."], ["\"I **can** help.\"", "She said she **could** help."]] },
    { k: "B", h: "say или tell", p: "**say** (something) — без человека. **tell** + человек (кому). Нельзя _said me_.",
      ex: ["She **said** (that) she was busy.", "She **told me** (that) she was busy.", "He **said to me** that… (возможно, но реже)"] },
    { k: "C", h: "Меняются местоимения и слова времени/места", p: "",
      table: [["Прямая", "Косвенная"], ["now", "then / at that time"], ["today", "that day"], ["yesterday", "the day before"], ["tomorrow", "the next day / the following day"], ["here", "there"], ["this", "that"]],
      note: "Если сказанное всё ещё правда, сдвиг не обязателен: He said he **lives** in Almaty (и сейчас живёт)." }
  ], mistakes: [["She said me that she was tired.", "She told me that she was tired.", "tell + кому; say — без человека."], ["He said that he will come.", "He said that he would come.", "will → would."], ["She told that she was ill.", "She said that she was ill.", "tell требует человека."]] },
  ex: [
   { task: "Report what they said", items: [
    ["g", "\"I'm hungry.\" → He said he ___ hungry.", "was", ["is", "has been", "were"], "Он сказал, что голоден.", "am → was."],
    ["g", "\"I live in Taraz.\" → She said she ___ in Taraz.", "lived", ["lives", "has lived", "is living"], "Она сказала, что живёт в Таразе.", "live → lived."],
    ["g", "\"We're watching a film.\" → They said they ___ a film.", "were watching", ["are watching", "watched", "have watched"], "Они сказали, что смотрят фильм.", "are watching → were watching."],
    ["g", "\"I've lost my phone.\" → He said he ___ his phone.", "had lost", ["has lost", "lost", "was losing"], "Он сказал, что потерял телефон.", "have lost → had lost."],
    ["g", "\"I'll help you.\" → She said she ___ me.", "would help", ["will help", "helps", "would helped"], "Она сказала, что поможет мне.", "will → would."],
    ["g", "\"I can swim.\" → My brother said he ___ swim.", "could", ["can", "could to", "was able"], "Брат сказал, что умеет плавать.", "can → could."],
    ["g", "\"I saw the accident.\" → The man said he ___ the accident.", "had seen", ["saw had", "has seen", "sees"], "Мужчина сказал, что видел аварию.", "saw → had seen."],
    ["g", "\"I don't like coffee.\" → She said she ___ coffee.", "didn't like", ["doesn't like", "don't like", "hadn't like"], "Она сказала, что не любит кофе.", "don't → didn't."],
    ["g", "\"We're going to move.\" → They said they ___ move.", "were going to", ["are going to", "was going to", "going to"], "Они сказали, что собираются переехать.", "are going to → were going to."],
    ["g", "\"I must leave.\" → He said he ___ leave.", "had to", ["must to", "has to", "musted"], "Он сказал, что должен уйти.", "must → had to (или must)."]
   ]},
   { task: "**said** or **told**; time words", items: [
    ["g", "She ___ me that she was moving to Astana.", "told", ["said", "talked", "spoke"], "Она сказала мне, что переезжает в Астану.", "tell + me."],
    ["g", "He ___ that the shop was closed.", "said", ["told", "told us that to", "spoke"], "Он сказал, что магазин закрыт.", "say — без человека."],
    ["g", "The teacher ___ us to open our books.", "told", ["said", "spoke", "talked"], "Учитель сказал нам открыть учебники.", "tell + us + to."],
    ["g", "What did she ___ to you?", "say", ["tell", "speak", "talk"], "Что она тебе сказала?", "say to sb."],
    ["g", "Can you ___ me the time, please?", "tell", ["say", "speak", "talk"], "Не подскажете, который час?", "tell sb the time."],
    ["g", "\"I'll call you tomorrow.\" → He said he would call me ___.", "the next day", ["tomorrow day", "yesterday", "the day before"], "Он сказал, что позвонит мне на следующий день.", "tomorrow → the next day."],
    ["g", "\"I was ill yesterday.\" → She said she had been ill ___.", "the day before", ["yesterday before", "the next day", "today"], "Она сказала, что накануне болела.", "yesterday → the day before."],
    ["g", "\"I'm busy now.\" → He said he was busy ___.", "then", ["now then", "today", "here"], "Он сказал, что тогда был занят.", "now → then."],
    ["g", "\"I like this town.\" → She said she liked ___ town.", "that", ["this", "these", "those"], "Она сказала, что ей нравится этот город.", "this → that."],
    ["g", "\"I'll meet you here.\" → He said he'd meet me ___.", "there", ["here", "this place here", "where"], "Он сказал, что встретит меня там.", "here → there."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "She said me she was tired.", "She told me she was tired.", ["She said to me she is tired yesterday.", "She told she was tired.", "She said me that she tired."], "Она сказала мне, что устала.", "tell + me."],
    ["e", "He said that he will come later.", "He said that he would come later.", ["He said that he come later.", "He told that he would come later.", "He said that he will came later."], "Он сказал, что придёт позже.", "will → would."],
    ["e", "She told that she was ill.", "She said that she was ill.", ["She told to that she was ill.", "She says that she was ill yesterday.", "She told that she is ill."], "Она сказала, что болеет.", "tell требует человека."],
    ["e", "They said they are watching TV.", "They said they were watching TV.", ["They said they watching TV.", "They told they were watching TV.", "They said they are watched TV."], "Они сказали, что смотрят телевизор.", "are → were."],
    ["e", "He said he has finished his work.", "He said he had finished his work.", ["He said he finish his work.", "He told he had finished his work.", "He said he has finish his work."], "Он сказал, что закончил работу.", "has → had."],
    ["e", "She said she can't come tomorrow.", "She said she couldn't come the next day.", ["She said she can't come the next day.", "She told she couldn't come the next day.", "She said she couldn't came the next day."], "Она сказала, что не сможет прийти на следующий день.", "can't → couldn't; tomorrow → the next day."],
    ["e", "My friend told to me a funny story.", "My friend told me a funny story.", ["My friend said me a funny story.", "My friend told me a funny story to.", "My friend said to me story funny."], "Друг рассказал мне смешную историю.", "tell sb sth — без to."],
    ["e", "He said that he lost his keys the day before. (earlier past)", "He said that he had lost his keys the day before.", ["He said that he has lost his keys the day before.", "He told that he had lost his keys the day before.", "He said that he loses his keys the day before."], "Он сказал, что накануне потерял ключи.", "Past → had lost."],
    ["e", "The doctor said me to rest.", "The doctor told me to rest.", ["The doctor said to rest me.", "The doctor told to me to rest.", "The doctor said me resting."], "Врач сказал мне отдыхать.", "tell sb to do."],
    ["e", "She said she doesn't know the answer. (past situation)", "She said she didn't know the answer.", ["She told she didn't know the answer.", "She said she don't know the answer.", "She said she hadn't knew the answer."], "Она сказала, что не знает ответа.", "doesn't → didn't."]
   ]}
  ]},
{ n: 48, floor: 8, title: "Reported questions: She asked me where… / if…", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "Порядок слов как в утверждении", p: "В косвенном вопросе **нет инверсии** и нет do/does/did. Время сдвигается, как в Unit 47.",
      table: [["Прямой вопрос", "Косвенный"], ["\"Where **do** you **live**?\"", "She asked me where **I lived**."], ["\"What **are** you **doing**?\"", "He asked what **I was doing**."], ["\"When **did** they **arrive**?\"", "She asked when **they had arrived**."]] },
    { k: "B", h: "Да/нет-вопросы: if / whether", p: "",
      ex: ["\"**Are** you tired?\" → He asked **if I was** tired.", "\"**Did** you **see** him?\" → She asked **whether I had seen** him.", "\"**Can** you help?\" → They asked **if I could** help."] },
    { k: "C", h: "Глагол ask и without question mark", p: "Вводим через **asked (me) / wanted to know / wondered**. В конце — **точка**, не вопросительный знак.",
      note: "Не: _She asked me where did I live._ Правильно: She asked me where **I lived**." }
  ], mistakes: [["She asked me where did I live.", "She asked me where I lived.", "Без did, прямой порядок."], ["He asked was I hungry.", "He asked if I was hungry.", "Да/нет → if."], ["They asked me what time is it.", "They asked me what time it was.", "Порядок + сдвиг времени."]] },
  ex: [
   { task: "Report the questions", items: [
    ["g", "\"Where do you work?\" → She asked me where I ___.", "worked", ["work", "did work", "was work"], "Она спросила, где я работаю.", "do you work → I worked."],
    ["g", "\"What time is it?\" → He asked what time it ___.", "was", ["is", "was it", "is it"], "Он спросил, который час.", "it was."],
    ["g", "\"Why are you crying?\" → She asked why I ___.", "was crying", ["am crying", "was I crying", "cried"], "Она спросила, почему я плачу.", "I was crying."],
    ["g", "\"How old are you?\" → The doctor asked how old I ___.", "was", ["am", "was I", "were"], "Врач спросил, сколько мне лет.", "I was."],
    ["g", "\"Where did you buy it?\" → He asked where I ___ it.", "had bought", ["bought did", "did buy", "have bought"], "Он спросил, где я это купил.", "did you buy → I had bought."],
    ["g", "\"What will you do?\" → They asked what I ___ do.", "would", ["will", "would I", "did"], "Они спросили, что я буду делать.", "will → would."],
    ["g", "\"Who is your teacher?\" → She wanted to know who my teacher ___.", "was", ["is", "was it", "is it"], "Она хотела знать, кто мой учитель.", "my teacher was."],
    ["g", "\"How long have you lived here?\" → He asked how long I ___ there.", "had lived", ["have lived", "lived had", "did live"], "Он спросил, как давно я там живу.", "have lived → had lived."],
    ["g", "\"Which bus do I need?\" → The tourist asked which bus he ___.", "needed", ["needs", "did need", "need"], "Турист спросил, какой автобус ему нужен.", "he needed."],
    ["g", "\"When does the film start?\" → I asked when the film ___.", "started", ["starts", "did start", "does start"], "Я спросил, когда начинается фильм.", "the film started."]
   ]},
   { task: "Yes/no questions: **if / whether**", items: [
    ["g", "\"Are you ready?\" → She asked ___ I was ready.", "if", ["that", "what", "are"], "Она спросила, готов ли я.", "Да/нет → if."],
    ["g", "\"Do you like sushi?\" → He asked if I ___ sushi.", "liked", ["like", "did like", "do like"], "Он спросил, люблю ли я суши.", "I liked."],
    ["g", "\"Have you finished?\" → The teacher asked if we ___.", "had finished", ["have finished", "finished had", "did finish"], "Учитель спросил, закончили ли мы.", "had finished."],
    ["g", "\"Can you speak Kazakh?\" → They asked if I ___ speak Kazakh.", "could", ["can", "could I", "can I"], "Они спросили, говорю ли я по-казахски.", "can → could."],
    ["g", "\"Is it raining?\" → Mum asked ___ it was raining.", "whether", ["that", "is", "what"], "Мама спросила, идёт ли дождь.", "whether = if."],
    ["g", "\"Did you call Aliya?\" → He asked if I ___ Aliya.", "had called", ["called had", "did call", "have called"], "Он спросил, звонил ли я Алие.", "had called."],
    ["g", "\"Will you be at home?\" → She asked if I ___ at home.", "would be", ["will be", "would I be", "am"], "Она спросила, буду ли я дома.", "will → would."],
    ["g", "\"Is this seat free?\" → A woman asked if ___ seat was free.", "that", ["this", "these", "the which"], "Женщина спросила, свободно ли это место.", "this → that."],
    ["g", "\"Do you need help?\" → The man asked ___ I needed help.", "if", ["that", "do", "what"], "Мужчина спросил, нужна ли мне помощь.", "if."],
    ["g", "\"Are they coming tomorrow?\" → I asked if they were coming ___.", "the next day", ["tomorrow day", "the day before", "yesterday"], "Я спросил, придут ли они на следующий день.", "tomorrow → the next day."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "She asked me where did I live.", "She asked me where I lived.", ["She asked me where I did live.", "She asked me where do I live.", "She asked me where lived I."], "Она спросила, где я живу.", "Прямой порядок, без did."],
    ["e", "He asked was I tired.", "He asked if I was tired.", ["He asked if was I tired.", "He asked that I was tired.", "He asked if I am tired yesterday."], "Он спросил, устал ли я.", "Да/нет → if."],
    ["e", "They asked me what time is it.", "They asked me what time it was.", ["They asked me what time was it.", "They asked me what time it is was.", "They asked me what is time it."], "Они спросили, который час.", "it was."],
    ["e", "The teacher asked us if we have done our homework.", "The teacher asked us if we had done our homework.", ["The teacher asked us if had we done our homework.", "The teacher asked us that we had done our homework.", "The teacher asked us did we do our homework."], "Учитель спросил, сделали ли мы домашку.", "have → had."],
    ["e", "She asked me why was I late.", "She asked me why I was late.", ["She asked me why did I late.", "She asked me why I late was.", "She asked me why am I late."], "Она спросила, почему я опоздал.", "I was late."],
    ["e", "He asked me where I was going?", "He asked me where I was going.", ["He asked me where was I going?", "He asked me where I going was.", "He asked me where did I go?"], "Он спросил, куда я иду.", "В конце — точка."],
    ["e", "My mum asked if I will be home for dinner.", "My mum asked if I would be home for dinner.", ["My mum asked if will I be home for dinner.", "My mum asked would I be home for dinner if.", "My mum asked that I would be home for dinner."], "Мама спросила, буду ли я дома к ужину.", "will → would."],
    ["e", "I asked her how much does it cost.", "I asked her how much it cost.", ["I asked her how much did it cost.", "I asked her how much costs it.", "I asked her how much it does cost."], "Я спросил её, сколько это стоит.", "it cost."],
    ["e", "He wanted to know who had I met.", "He wanted to know who I had met.", ["He wanted to know who did I meet.", "He wanted to know who I met had.", "He wanted to know whom had I met."], "Он хотел знать, кого я встретил.", "Прямой порядок."],
    ["e", "She asked whether could I help her.", "She asked whether I could help her.", ["She asked whether I can helped her.", "She asked could whether I help her.", "She asked that I could help her."], "Она спросила, могу ли я ей помочь.", "I could."]
   ]}
  ]},
{ n: 49, floor: 8, title: "Reported orders and requests; reporting verbs", cefr: "B1–B2",
  rule: { sections: [
    { k: "A", h: "tell / ask + someone + to do", p: "Приказ → **tell sb to do**. Просьба → **ask sb to do**. Отрицание: **not to do**.",
      table: [["Прямая речь", "Косвенная"], ["\"Sit down.\"", "She **told me to sit** down."], ["\"Please help me.\"", "He **asked me to help** him."], ["\"Don't be late.\"", "Mum **told us not to be** late."], ["\"Could you open the door?\"", "She **asked me to open** the door."]] },
    { k: "B", h: "Глаголы пересказа: вместо said", p: "Разные глаголы передают смысл точнее — и у каждого своя конструкция.",
      table: [["Глагол", "Конструкция", "Пример"], ["advise", "sb to do", "The doctor **advised me to rest**."], ["remind", "sb to do", "She **reminded me to buy** milk."], ["warn", "sb (not) to do", "He **warned us not to touch** it."], ["offer", "to do", "She **offered to help**."], ["promise", "to do", "He **promised to call**."], ["refuse", "to do", "They **refused to pay**."], ["agree", "to do", "We **agreed to meet** at six."]] },
    { k: "C", h: "suggest и apologise", p: "**suggest + -ing** или **suggest that sb (should) do**. **apologise for + -ing**. **admit / deny + -ing**.",
      ex: ["She **suggested going** to the cinema.", "He **suggested that we take** a taxi. (не _suggested us to take_)", "He **apologised for being** late.", "She **denied taking** the money."] }
  ], mistakes: [["She told me sit down.", "She told me to sit down.", "tell sb + to."], ["He told me don't go.", "He told me not to go.", "Отрицание → not to."], ["She suggested me to go.", "She suggested going. / She suggested that I go.", "suggest — без sb + to."]] },
  ex: [
   { task: "Report orders and requests", items: [
    ["g", "\"Close the window.\" → She told me ___ the window.", "to close", ["close", "closing", "that close"], "Она сказала мне закрыть окно.", "tell sb to do."],
    ["g", "\"Please wait here.\" → He asked us ___ there.", "to wait", ["wait", "waiting", "that we wait to"], "Он попросил нас подождать там.", "ask sb to do."],
    ["g", "\"Don't touch it!\" → Dad told me ___ it.", "not to touch", ["don't touch", "to not touching", "not touch"], "Папа сказал не трогать это.", "not to + touch."],
    ["g", "\"Could you help me?\" → She asked me ___ her.", "to help", ["help", "helping", "that I help to"], "Она попросила меня помочь ей.", "asked me to help."],
    ["g", "\"Turn off your phones.\" → The teacher told us ___ our phones.", "to turn off", ["turn off", "turning off", "that turn off"], "Учитель сказал выключить телефоны.", "told us to turn off."],
    ["g", "\"Don't be late again.\" → My boss told me ___ late again.", "not to be", ["don't be", "to not being", "not be"], "Начальник сказал мне больше не опаздывать.", "not to be."],
    ["g", "\"Please speak more slowly.\" → I asked him ___ more slowly.", "to speak", ["speak", "speaking", "that speak"], "Я попросил его говорить медленнее.", "asked him to speak."],
    ["g", "\"Give me your ticket.\" → The man told me ___ him my ticket.", "to give", ["give", "giving", "that give"], "Мужчина сказал отдать ему билет.", "told me to give."],
    ["g", "\"Don't tell anyone.\" → She asked me ___ anyone.", "not to tell", ["don't tell", "not tell", "to don't tell"], "Она попросила никому не говорить.", "not to tell."],
    ["g", "\"Can you lend me some money?\" → He asked me ___ him some money.", "to lend", ["lend", "lending", "that lend"], "Он попросил одолжить ему денег.", "asked me to lend."]
   ]},
   { task: "Choose the reporting verb or form", items: [
    ["g", "\"You should see a doctor.\" → She ___ me to see a doctor.", "advised", ["suggested", "said", "offered"], "Она посоветовала мне сходить к врачу.", "advise sb to do."],
    ["g", "\"I'll carry your bag.\" → He offered ___ my bag.", "to carry", ["carrying", "me to carry", "that carry"], "Он предложил понести мою сумку.", "offer to do."],
    ["g", "\"I'll be home by ten, I promise.\" → She promised ___ home by ten.", "to be", ["being", "me to be", "that be"], "Она обещала быть дома к десяти.", "promise to do."],
    ["g", "\"No, I won't pay!\" → He refused ___.", "to pay", ["paying", "pay", "for paying"], "Он отказался платить.", "refuse to do."],
    ["g", "\"Don't forget to call Grandma.\" → Mum reminded me ___ Grandma.", "to call", ["calling", "call", "that call"], "Мама напомнила позвонить бабушке.", "remind sb to do."],
    ["g", "\"Don't swim there — it's dangerous.\" → He warned us ___ there.", "not to swim", ["to not swimming", "don't swim", "not swimming"], "Он предупредил нас не плавать там.", "warn sb not to do."],
    ["g", "\"Let's take a taxi.\" → She suggested ___ a taxi.", "taking", ["to take", "us to take", "take"], "Она предложила взять такси.", "suggest + -ing."],
    ["g", "\"I'm sorry I'm late.\" → He apologised ___ late.", "for being", ["to be", "being", "of being"], "Он извинился за опоздание.", "apologise for + -ing."],
    ["g", "\"Yes, I broke the vase.\" → She admitted ___ the vase.", "breaking", ["to break", "break", "for breaking"], "Она призналась, что разбила вазу.", "admit + -ing."],
    ["g", "\"OK, let's meet at six.\" → We agreed ___ at six.", "to meet", ["meeting", "meet", "for meeting"], "Мы договорились встретиться в шесть.", "agree to do."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "She told me sit down.", "She told me to sit down.", ["She told me sitting down.", "She said me to sit down.", "She told to me sit down."], "Она сказала мне сесть.", "tell sb to do."],
    ["e", "He told me don't worry.", "He told me not to worry.", ["He told me to don't worry.", "He said me not worry.", "He told me not worry."], "Он сказал мне не волноваться.", "not to + глагол."],
    ["e", "She suggested me to go home.", "She suggested going home. / She suggested that I go home.", ["She suggested me going home.", "She suggested to me to go home.", "She suggested me go home."], "Она предложила пойти домой.", "suggest + -ing / that…"],
    ["e", "He apologised for to be late.", "He apologised for being late.", ["He apologised to be late.", "He apologised being late.", "He apologised of being late."], "Он извинился за опоздание.", "for + -ing."],
    ["e", "The doctor advised me resting.", "The doctor advised me to rest.", ["The doctor advised me rest.", "The doctor advised to me to rest.", "The doctor advised me for resting."], "Врач посоветовал мне отдохнуть.", "advise sb to do."],
    ["e", "She offered me to help.", "She offered to help me.", ["She offered helping me.", "She offered me helping.", "She offered for helping me."], "Она предложила мне помочь.", "offer to do (без sb)."],
    ["e", "He promised calling me.", "He promised to call me.", ["He promised me calling.", "He promised call me.", "He promised for calling me."], "Он обещал мне позвонить.", "promise to do."],
    ["e", "They refused paying the bill.", "They refused to pay the bill.", ["They refused pay the bill.", "They refused for paying the bill.", "They refused to paying the bill."], "Они отказались оплачивать счёт.", "refuse to do."],
    ["e", "She asked me to not open the box.", "She asked me not to open the box.", ["She asked me don't open the box.", "She asked me no to open the box.", "She asked me not open the box."], "Она попросила меня не открывать коробку.", "not to + глагол."],
    ["e", "He denied to take the money.", "He denied taking the money.", ["He denied take the money.", "He denied for taking the money.", "He denied to taking the money."], "Он отрицал, что взял деньги.", "deny + -ing."]
   ]}
  ]}
);
