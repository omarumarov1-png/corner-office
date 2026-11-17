// Part 19 · Ellipsis & substitution (Units 114–119). Original explanations and examples.
window.GRAMMAR.units.push(
{ n: 114, floor: 19, title: "I think so / I hope not / I'm afraid so", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "so вместо целого предложения", p: "Чтобы не повторять, ставим **so** после **think, hope, expect, suppose, guess, believe, be afraid**.",
      table: [["вопрос", "ответ «да»"], ["Will it rain?", "I **think so**. / I **expect so**."], ["Will you pass?", "I **hope so**."], ["Is the shop closed?", "I**'m afraid so**. (неприятное «да»)"]] },
    { k: "B", h: "Ответ «нет»", p: "С **think / expect / believe** обычно: **I don't think so**. С **hope / be afraid / guess** — **not**: **I hope not**, **I'm afraid not**. Нельзя: _~~I don't hope so~~_.",
      ex: ["'Is it far?' 'I **don't think so**.'", "'Will it hurt?' 'I **hope not**.'", "'Any tickets left?' 'I**'m afraid not**.'"] },
    { k: "C", h: "know и sure — без so", p: "**I don't know.** (не _~~I don't know so~~_). **I'm not sure.** (не _~~I'm not sure it~~_).",
      ex: ["'Where is he?' 'I don't know.'", "'Is it true?' 'I'm not sure.'"] }
  ], mistakes: [["I think yes.", "I think so.", "think so."], ["I don't hope so.", "I hope not.", "hope → hope not."], ["I don't know so.", "I don't know.", "know — без so."]] },
  ex: [
   { task: "**so** or **not**?", items: [
    ["g", "'Is it going to rain?' 'I think ___.'", "so", ["it", "that", "yes"], "— Будет дождь? — Думаю, да.", "I think so."],
    ["g", "'Will you pass the test?' 'I hope ___.'", "so", ["it", "yes", "that"], "— Ты сдашь тест? — Надеюсь.", "I hope so."],
    ["g", "'Has the shop closed?' 'I'm afraid ___. It closes at six.'", "so", ["it", "yes", "that"], "— Магазин закрыт? — Боюсь, что да. Он закрывается в шесть.", "Неприятное «да» → I'm afraid so."],
    ["g", "'Is there any milk left?' 'I'm afraid ___.'", "not", ["no", "don't", "so not"], "— Молоко осталось? — Боюсь, что нет.", "I'm afraid not."],
    ["g", "'Will it be expensive?' 'I ___ so.'", "expect", ["hope not", "am expect", "expecting"], "— Это будет дорого? — Наверное, да.", "I expect so."],
    ["g", "'Can I borrow your car?' 'I suppose ___.'", "so", ["it", "that", "yes so"], "— Можно взять твою машину? — Ну, наверное, можно.", "I suppose so."],
    ["g", "'Is the meeting today?' 'I ___ think so. I think it's tomorrow.'", "don't", ["not", "doesn't", "am not"], "— Встреча сегодня? — Не думаю. По-моему, завтра.", "I don't think so."],
    ["g", "'Will they be late?' 'I hope ___.'", "not", ["no", "don't", "so not"], "— Они опоздают? — Надеюсь, нет.", "I hope not."],
    ["g", "'Does he speak French?' 'I don't ___.'", "know", ["know so", "know it so", "think it"], "— Он говорит по-французски? — Не знаю.", "know — без so."],
    ["g", "'Are we going to win?' 'I guess ___.'", "so", ["it", "yes", "that"], "— Мы выиграем? — Наверное, да.", "I guess so."]
   ]},
   { task: "Short answers", items: [
    ["g", "'Is Dana coming?' '___ — she's ill.'", "I'm afraid not", ["I'm afraid no", "I afraid not", "I'm not afraid so"], "— Дана придёт? — Боюсь, что нет — она заболела.", "I'm afraid not."],
    ["g", "'Will the shops be open on Sunday?' '___. They usually close.'", "I don't think so", ["I think not so", "I don't think it", "I not think so"], "— Магазины будут открыты в воскресенье? — Не думаю. Обычно они закрыты.", "I don't think so."],
    ["g", "'Will it hurt?' '___ — but just in case, hold my hand.'", "I hope not", ["I don't hope so", "I hope no", "I not hope"], "— Будет больно? — Надеюсь, нет, но на всякий случай держи меня за руку.", "hope → hope not."],
    ["g", "'Did they get the email?' 'I'm not ___.'", "sure", ["sure so", "sure it", "so sure it"], "— Они получили письмо? — Не уверен.", "I'm not sure."],
    ["g", "'Is the flight delayed?' '___. The screen says 40 minutes.'", "I'm afraid so", ["I'm afraid it", "I afraid so", "I'm afraid yes"], "— Рейс задерживается? — Боюсь, что да. На табло 40 минут.", "I'm afraid so."],
    ["g", "'Is Arman married?' 'I ___ so. He wears a ring.'", "believe", ["am believe", "believe it", "believing"], "— Арман женат? — Кажется, да. Он носит кольцо.", "I believe so."],
    ["g", "'Do you need any help?' 'I don't ___, thanks.'", "think so", ["think", "think it", "so think"], "— Тебе нужна помощь? — Думаю, нет, спасибо.", "I don't think so."],
    ["g", "'Will it snow tomorrow?' 'I ___ not — I have to drive.'", "hope", ["don't hope", "hope it", "am hope"], "— Завтра будет снег? — Надеюсь, нет — мне ехать за рулём.", "I hope not."],
    ["g", "'Is the café still open?' 'I ___ not — it's after ten.'", "suppose", ["don't suppose not", "suppose no", "am suppose"], "— Кафе ещё открыто? — Наверное, нет — уже одиннадцатый час.", "I suppose not."],
    ["g", "'Did you lock the door?' 'I think ___ — but I'll check.'", "so", ["it", "that", "yes"], "— Ты запер дверь? — Думаю, да, но я проверю.", "I think so."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "'Will she come?' 'I think yes.'", "'Will she come?' 'I think so.'", ["'Will she come?' 'I think it.'", "'Will she come?' 'I think that.'", "'Will she come?' 'I'm thinking so.'"], "— Она придёт? — Думаю, да.", "I think so."],
    ["e", "'Is it raining?' 'I hope no.'", "'Is it raining?' 'I hope not.'", ["'Is it raining?' 'I don't hope.'", "'Is it raining?' 'I hope not so.'", "'Is it raining?' 'I'm hope not.'"], "— Идёт дождь? — Надеюсь, нет.", "I hope not."],
    ["e", "'Is he at home?' 'I don't know so.'", "'Is he at home?' 'I don't know.'", ["'Is he at home?' 'I not know.'", "'Is he at home?' 'I don't know it so.'", "'Is he at home?' 'I'm not know.'"], "— Он дома? — Не знаю.", "know — без so."],
    ["e", "'Will they win?' 'I don't hope so.'", "'Will they win?' 'I hope not.'", ["'Will they win?' 'I hope no.'", "'Will they win?' 'I not hope so.'", "'Will they win?' 'I hope not so.'"], "— Они выиграют? — Надеюсь, нет.", "hope → hope not."],
    ["e", "'Is the bank closed?' 'I'm afraid yes.'", "'Is the bank closed?' 'I'm afraid so.'", ["'Is the bank closed?' 'I'm afraid it.'", "'Is the bank closed?' 'I afraid so.'", "'Is the bank closed?' 'I'm afraiding so.'"], "— Банк закрыт? — Боюсь, что да.", "I'm afraid so."],
    ["e", "'Do I need a visa?' 'I think not so.'", "'Do I need a visa?' 'I don't think so.'", ["'Do I need a visa?' 'I not think so.'", "'Do I need a visa?' 'I don't think it.'", "'Do I need a visa?' 'I'm not thinking so.'"], "— Мне нужна виза? — Думаю, нет.", "I don't think so."],
    ["e", "'Is it true?' 'I'm not sure it.'", "'Is it true?' 'I'm not sure.'", ["'Is it true?' 'I'm not sure so.'", "'Is it true?' 'I don't sure.'", "'Is it true?' 'I not sure.'"], "— Это правда? — Не уверен.", "I'm not sure."],
    ["e", "'Is there any coffee left?' 'I'm afraid no.'", "'Is there any coffee left?' 'I'm afraid not.'", ["'Is there any coffee left?' 'I'm not afraid.'", "'Is there any coffee left?' 'I afraid not.'", "'Is there any coffee left?' 'I'm afraid don't.'"], "— Кофе остался? — Боюсь, что нет.", "I'm afraid not."],
    ["e", "'Will the train be on time?' 'I expect.'", "'Will the train be on time?' 'I expect so.'", ["'Will the train be on time?' 'I expect it.'", "'Will the train be on time?' 'I'm expect so.'", "'Will the train be on time?' 'I expect yes.'"], "— Поезд придёт вовремя? — Думаю, да.", "I expect so."],
    ["e", "'Can you come tomorrow?' 'I guess it.'", "'Can you come tomorrow?' 'I guess so.'", ["'Can you come tomorrow?' 'I guess yes.'", "'Can you come tomorrow?' 'I'm guess so.'", "'Can you come tomorrow?' 'I guess that.'"], "— Сможешь прийти завтра? — Наверное, да.", "I guess so."]
   ]}
  ]},

{ n: 115, floor: 19, title: "one / ones (the red one, the ones on the left)", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "one / ones вместо существительного", p: "Чтобы не повторять **исчисляемое** существительное: **one** (одна вещь), **ones** (несколько).",
      ex: ["This shirt is too small. Have you got a bigger **one**?", "I don't like these shoes. I prefer the black **ones**.", "My phone is old — I need a new **one**."] },
    { k: "B", h: "the one(s) + уточнение", p: "**the one / the ones** + предлог или придаточное: **the one on the left**, **the ones I bought**, **which one?**",
      ex: ["'Which bag is yours?' 'The **one** with the red strap.'", "These are better than the **ones** we had."] },
    { k: "C", h: "one или it?", p: "**it** — **та самая** вещь. **one** — **любая** такая же.",
      table: [["ситуация", "что сказать"], ["Ищу свой зонт", "I can't find **it**."], ["Нужен какой-нибудь зонт", "I need to buy **one**."], ["Нужно несколько стульев", "Can you bring **some**?"]] },
    { k: "D", h: "Когда one не нужно", p: "Не с **неисчисляемыми**: I prefer white rice to **brown** (не _~~brown one~~_). Не после **my / your**: **mine**, **yours** (не _~~my one~~_).",
      ex: ["This isn't my coat — **mine** is grey.", "I like hot tea, not **cold**."] }
  ], mistakes: [["I need shorter one. (джинсы)", "I need shorter ones.", "Множественное → ones."], ["Your one is black.", "Yours is black.", "Не my / your one."], ["I like white wine, not red one.", "I like white wine, not red.", "Неисчисляемое → без one."]] },
  ex: [
   { task: "**one** or **ones**?", items: [
    ["g", "I don't like this shirt. Can I try the blue ___?", "one", ["ones", "it", "them"], "Мне не нравится эта рубашка. Можно примерить синюю?", "Одна вещь → one."],
    ["g", "These shoes are too small. Have you got bigger ___?", "ones", ["one", "them", "it"], "Эти туфли малы. Есть побольше?", "Несколько → ones."],
    ["g", "'Which cake would you like?' 'The ___ with strawberries.'", "one", ["ones", "it", "that one's"], "— Какой торт ты хочешь? — Тот, что с клубникой.", "the one + with."],
    ["g", "My phone is old. I need a new ___.", "one", ["ones", "it", "phone one"], "Мой телефон старый. Нужен новый.", "a new one."],
    ["g", "'Which glasses are yours?' 'The ___ on the left.'", "ones", ["one", "its", "them"], "— Какие очки твои? — Те, что слева.", "glasses — мн. ч. → ones."],
    ["g", "I've lost my umbrella, so I'll have to buy ___.", "one", ["it", "ones", "a one"], "Я потерял зонт, придётся купить новый.", "Любой → one."],
    ["g", "These apples are better than the ___ we bought last week.", "ones", ["one", "them", "it"], "Эти яблоки лучше, чем те, что мы купили на прошлой неделе.", "the ones + придаточное."],
    ["g", "There are two buses. Take the ___ that goes to the centre.", "one", ["ones", "it", "bus one"], "Есть два автобуса. Садись на тот, что идёт в центр.", "the one that…"],
    ["g", "'Do you want a large coffee?' 'No, a small ___, please.'", "one", ["ones", "it", "coffee one"], "— Большой кофе? — Нет, маленький, пожалуйста.", "a small one."],
    ["g", "Her paintings are beautiful, especially the early ___.", "ones", ["one", "them", "it"], "Её картины прекрасны, особенно ранние.", "Несколько → ones."]
   ]},
   { task: "**one / ones**, **it / them**, or no **one**?", items: [
    ["g", "I bought a new jacket. Do you like ___?", "it", ["one", "ones", "the one"], "Я купил новую куртку. Тебе нравится?", "Конкретная вещь → it."],
    ["g", "'Is there a pharmacy near here?' 'Yes, there's ___ on Abay Street.'", "one", ["it", "ones", "the one"], "— Здесь рядом есть аптека? — Да, есть на улице Абая.", "Какая-то → one."],
    ["g", "I prefer white rice to ___.", "brown", ["brown one", "brown ones", "a brown one"], "Я предпочитаю белый рис коричневому.", "Неисчисляемое → без one."],
    ["g", "This isn't my book. ___ is on the desk.", "Mine", ["My one", "My", "Mine one"], "Это не моя книга. Моя на столе.", "Mine, не my one."],
    ["g", "We need some chairs. Can you bring ___ from the kitchen?", "some", ["ones", "one", "some ones"], "Нам нужны стулья. Принесёшь несколько с кухни?", "Без прилагательного → some."],
    ["g", "I like hot weather more than ___.", "cold", ["cold one", "cold ones", "a cold one"], "Жаркую погоду я люблю больше, чем холодную.", "Неисчисляемое → без one."],
    ["g", "Have you seen my keys? I can't find ___.", "them", ["ones", "one", "the ones"], "Ты не видел мои ключи? Не могу их найти.", "Конкретные → them."],
    ["g", "Which is ___ — the black bag or the brown one?", "yours", ["your one", "your", "yours one"], "Какая сумка твоя — чёрная или коричневая?", "yours, не your one."],
    ["g", "The first test was easy, but the second ___ was really hard.", "one", ["ones", "it", "the one"], "Первый тест был лёгким, а второй — очень трудным.", "the second one."],
    ["g", "If you need a pen, there's ___ in my bag.", "one", ["it", "ones", "the one"], "Если нужна ручка, в моей сумке есть.", "Какая-нибудь → one."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "These jeans are too long. I need shorter one.", "These jeans are too long. I need shorter ones.", ["These jeans are too long. I need shorter it.", "These jeans are too long. I need a shorter ones.", "These jeans are too long. I need shorter them."], "Эти джинсы слишком длинные. Мне нужны покороче.", "jeans → ones."],
    ["e", "This is not your coat. Your one is black.", "This is not your coat. Yours is black.", ["This is not your coat. Your is black.", "This is not your coat. Yours one is black.", "This is not your coat. The yours is black."], "Это не твоё пальто. Твоё чёрное.", "yours, не your one."],
    ["e", "I like red wine more than white one.", "I like red wine more than white.", ["I like red wine more than white ones.", "I like red wine more than a white one.", "I like red wine more than white it."], "Красное вино мне нравится больше, чем белое.", "Неисчисляемое → без one."],
    ["e", "I need a charger. Do you have it?", "I need a charger. Do you have one?", ["I need a charger. Do you have ones?", "I need a charger. Do you have the one?", "I need a charger. Do you have a one?"], "Мне нужна зарядка. У тебя есть?", "Любая → one."],
    ["e", "Which ones do you want? The ones blue?", "Which ones do you want? The blue ones?", ["Which ones do you want? The blue it?", "Which ones do you want? Blue ones the?", "Which ones do you want? The blues ones?"], "Какие тебе нужны? Синие?", "Прилагательное перед ones."],
    ["e", "I don't want this cake. I want that ones.", "I don't want this cake. I want that one.", ["I don't want this cake. I want that it.", "I don't want this cake. I want those one.", "I don't want this cake. I want a that one."], "Я не хочу этот торт. Я хочу вон тот.", "that one."],
    ["e", "My old laptop was slow, so I bought a new it.", "My old laptop was slow, so I bought a new one.", ["My old laptop was slow, so I bought new one.", "My old laptop was slow, so I bought a new ones.", "My old laptop was slow, so I bought one new."], "Мой старый ноутбук тормозил, поэтому я купил новый.", "a new one."],
    ["e", "We need more milk. Can you buy one?", "We need more milk. Can you buy some?", ["We need more milk. Can you buy ones?", "We need more milk. Can you buy a one?", "We need more milk. Can you buy any ones?"], "Нужно ещё молока. Купишь?", "Неисчисляемое → some."],
    ["e", "The flowers in the garden are nicer than the one in the vase.", "The flowers in the garden are nicer than the ones in the vase.", ["The flowers in the garden are nicer than ones in the vase.", "The flowers in the garden are nicer than the it in the vase.", "The flowers in the garden are nicer than the them in the vase."], "Цветы в саду красивее, чем те, что в вазе.", "flowers → the ones."],
    ["e", "I lost my bag, but luckily I found one later.", "I lost my bag, but luckily I found it later.", ["I lost my bag, but luckily I found ones later.", "I lost my bag, but luckily I found the one later.", "I lost my bag, but luckily I found a one later."], "Я потерял сумку, но, к счастью, потом нашёл её.", "Та же вещь → it."]
   ]}
  ]},

{ n: 116, floor: 19, title: "I can't, but she can; He said he would, but he didn't", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "Повторяем только вспомогательный глагол", p: "Чтобы не повторять всю фразу, оставляем **вспомогательный или модальный глагол**: can, will, have, do / does / did, should…",
      ex: ["I can't swim, but my sister **can**.", "I haven't finished yet, but I **will** soon.", "I don't eat meat, but my husband **does**."] },
    { k: "B", h: "Время может меняться", p: "Вспомогательный глагол стоит в **нужном времени**, даже если в первой части другое.",
      ex: ["He said he would call, but he **didn't**.", "We didn't win this year, but we **will** next year.", "I wasn't going to tell her, but I **did**."] },
    { k: "C", h: "be не опускаем", p: "После will / would / might / used to — **be** остаётся: She isn't ready, but she **will be**.",
      ex: ["He isn't here now, but he **will be** at six.", "It's not cheap, but it **used to be**."] },
    { k: "D", h: "do so / do that", p: "**do so** — официально: You may leave early if you wish to **do so**. В разговоре — **do that / do it**.",
      ex: ["Passengers who wish to change seats may **do so** now."] }
  ], mistakes: [["I can't drive, but he can drive it.", "I can't drive, but he can.", "Только can."], ["She said she'd come, but she wasn't.", "She said she'd come, but she didn't.", "come → did."], ["I'm not tired, but I will later.", "I'm not tired, but I will be later.", "be не опускаем."]] },
  ex: [
   { task: "Choose the auxiliary", items: [
    ["g", "I can't speak Chinese, but my sister ___.", "can", ["does", "is", "speaks"], "Я не говорю по-китайски, а моя сестра говорит.", "Повторяем только can."],
    ["g", "He said he would call, but he ___.", "didn't", ["wouldn't call", "hasn't", "doesn't"], "Он обещал позвонить, но не позвонил.", "Что случилось → didn't."],
    ["g", "I haven't finished the book yet, but I ___ soon.", "will", ["do", "am", "have"], "Я ещё не дочитал книгу, но скоро дочитаю.", "Будущее → will."],
    ["g", "She isn't ready yet, but she will ___ in five minutes.", "be", ["is", "being", "ready be"], "Она ещё не готова, но будет через пять минут.", "will be — be не опускаем."],
    ["g", "'Have you ever been to Japan?' 'No, but I'd love ___.'", "to", ["it", "to go it", "so"], "— Ты был в Японии? — Нет, но очень хотел бы.", "I'd love to."],
    ["g", "We didn't win this time, but we ___ next year.", "will", ["do", "win", "are"], "В этот раз мы не выиграли, но выиграем в следующем году.", "Будущее → will."],
    ["g", "I don't eat meat, but my husband ___.", "does", ["is", "eats it", "do"], "Я не ем мясо, а мой муж ест.", "Present Simple → does."],
    ["g", "Dana has been to Paris, and so ___ I.", "have", ["am", "do", "has"], "Дана была в Париже, и я тоже.", "so + have + I."],
    ["g", "I thought the film would be boring, and it ___.", "was", ["did", "would", "is"], "Я думал, что фильм будет скучным, так и оказалось.", "be → was."],
    ["g", "'You should apologise.' 'I know I ___.'", "should", ["do", "am", "must to"], "— Тебе стоит извиниться. — Знаю, что стоит.", "Повторяем should."]
   ]},
   { task: "Complete the short form", items: [
    ["g", "I wasn't going to tell anyone, but then I ___.", "did", ["told", "was", "had"], "Я не собирался никому рассказывать, но потом рассказал.", "Что случилось → did."],
    ["g", "'Are you coming tonight?' 'I'm not sure. I ___.'", "might", ["might to", "might it", "might so"], "— Ты придёшь вечером? — Не уверен. Может быть.", "Повторяем might."],
    ["g", "She works harder than she ___ to.", "used", ["use", "was used", "did"], "Она работает больше, чем раньше.", "used to."],
    ["g", "If you want to leave early, you can ___.", "do so", ["do it so", "so do", "make so"], "Если хотите уйти пораньше, можете это сделать.", "do so — официально."],
    ["g", "'Did you lock the door?' 'I think I ___.'", "did", ["locked", "have", "was"], "— Ты запер дверь? — Думаю, да.", "Past Simple → did."],
    ["g", "Nobody expected him to win, but he ___.", "did", ["won it", "was", "has"], "Никто не ожидал, что он победит, но он победил.", "Past Simple → did."],
    ["g", "I'd help you if I ___, but I'm busy.", "could", ["can", "would", "will"], "Я бы помог, если бы мог, но я занят.", "if I could."],
    ["g", "'Has Arman called?' 'No, but he ___ soon.'", "will", ["does", "has", "is"], "— Арман звонил? — Нет, но скоро позвонит.", "Будущее → will."],
    ["g", "They haven't fixed the lift yet, but they ___ to by Monday.", "have", ["must", "should", "can"], "Лифт ещё не починили, но должны к понедельнику.", "have to."],
    ["g", "'You didn't call me!' 'Yes, I ___! Check your phone.'", "did", ["called", "do", "have"], "— Ты мне не позвонил! — Позвонил! Проверь телефон.", "Возражение → did."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "I can't drive, but my brother can drive it.", "I can't drive, but my brother can.", ["I can't drive, but my brother does.", "I can't drive, but my brother can it.", "I can't drive, but my brother is."], "Я не умею водить, а брат умеет.", "Только can."],
    ["e", "She said she would come, but she wasn't.", "She said she would come, but she didn't.", ["She said she would come, but she hasn't.", "She said she would come, but she doesn't.", "She said she would come, but she not."], "Она сказала, что придёт, но не пришла.", "came → didn't."],
    ["e", "I'm not tired now, but I will later.", "I'm not tired now, but I will be later.", ["I'm not tired now, but I will tired later.", "I'm not tired now, but I am later.", "I'm not tired now, but I will being later."], "Сейчас я не устал, но позже устану.", "be не опускаем."],
    ["e", "'Do you want to come?' 'I'd love.'", "'Do you want to come?' 'I'd love to.'", ["'Do you want to come?' 'I'd love it to.'", "'Do you want to come?' 'I'd love so.'", "'Do you want to come?' 'I'd love do.'"], "— Хочешь пойти? — С удовольствием.", "I'd love to."],
    ["e", "I don't like coffee, but my wife likes.", "I don't like coffee, but my wife does.", ["I don't like coffee, but my wife is.", "I don't like coffee, but my wife do.", "I don't like coffee, but my wife likes so."], "Я не люблю кофе, а жена любит.", "Present Simple → does."],
    ["e", "He has finished, and so I have.", "He has finished, and so have I.", ["He has finished, and so do I.", "He has finished, and so am I.", "He has finished, and I have so."], "Он закончил, и я тоже.", "so + have + I."],
    ["e", "She runs faster than she used.", "She runs faster than she used to.", ["She runs faster than she use to.", "She runs faster than she was used to.", "She runs faster than she did used."], "Она бегает быстрее, чем раньше.", "used to."],
    ["e", "'Did you enjoy it?' 'Yes, I enjoyed.'", "'Did you enjoy it?' 'Yes, I did.'", ["'Did you enjoy it?' 'Yes, I do.'", "'Did you enjoy it?' 'Yes, I was.'", "'Did you enjoy it?' 'Yes, I enjoy.'"], "— Тебе понравилось? — Да.", "Короткий ответ → did."],
    ["e", "I haven't seen the film, but I will see.", "I haven't seen the film, but I will.", ["I haven't seen the film, but I do.", "I haven't seen the film, but I have.", "I haven't seen the film, but I will it."], "Я ещё не смотрел фильм, но посмотрю.", "Только will."],
    ["e", "If you wish to cancel, you may do it so.", "If you wish to cancel, you may do so.", ["If you wish to cancel, you may so do.", "If you wish to cancel, you may make so.", "If you wish to cancel, you may doing so."], "Если хотите отменить, вы можете это сделать.", "do so."]
   ]}
  ]},

{ n: 117, floor: 19, title: "I'd love to; I had to; She wants to be", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "Оставляем to, глагол убираем", p: "Если глагол уже понятен, после **want, like, love, have, need, try, forget, mean, hope, plan, used to, ought to** оставляем только **to**.",
      ex: ["'Are you coming?' 'I**'d love to**.'", "I didn't want to go, but I **had to**.", "'Did you call?' 'No, I **forgot to**.'", "I don't smoke now, but I **used to**."] },
    { k: "B", h: "Не to it и не so", p: "Нельзя _~~I'd like it~~_ (в значении «хочу пойти») или _~~I forgot so~~_. Просто **to**.",
      ex: ["You can stay if you **want to**.", "I was going to call, but I decided **not to**."] },
    { k: "C", h: "be и have не опускаем", p: "Если опущенный глагол — **be** (или have в значении «иметь»), его оставляем: **want to be**, **hope to be**.",
      table: [["предложение", "почему"], ["He isn't a doctor yet, but he wants **to be**.", "be остаётся"], ["She'd like to go, but she can't. → She'd like **to**.", "go опускается"]] }
  ], mistakes: [["'Will you come?' 'I'd like it.'", "'Will you come?' 'I'd like to.'", "Только to."], ["She isn't a teacher, but she wants to.", "She isn't a teacher, but she wants to be.", "be не опускаем."], ["I decided to not.", "I decided not to.", "not to."]] },
  ex: [
   { task: "Leave out the verb", items: [
    ["g", "'Shall we go for a walk?' 'Yes, I'd like ___.'", "to", ["it", "so", "to it"], "— Пойдём погуляем? — Да, с удовольствием.", "Оставляем to."],
    ["g", "You can stay if you want ___, but you don't have to.", "to", ["it", "so", "that"], "Можешь остаться, если хочешь, но не обязательно.", "want to."],
    ["g", "'Did you call the bank?' 'No, I forgot ___.'", "to", ["it", "so", "to it"], "— Ты позвонил в банк? — Нет, забыл.", "forgot to."],
    ["g", "I didn't want to go to the party, but I had ___.", "to", ["it", "so", "go"], "Я не хотел идти на вечеринку, но пришлось.", "had to."],
    ["g", "He isn't a doctor yet, but he wants to ___.", "be", ["it", "so", "become to"], "Он ещё не врач, но хочет им стать.", "be не опускаем."],
    ["g", "'Why didn't you tell me?' 'I meant ___, but I forgot.'", "to", ["it", "so", "to it"], "— Почему ты мне не сказал? — Я собирался, но забыл.", "meant to."],
    ["g", "I don't smoke now, but I used ___.", "to", ["it", "so", "to do it"], "Сейчас я не курю, но раньше курил.", "used to."],
    ["g", "'Can you help me with this?' 'I'll try ___.'", "to", ["that to", "so", "doing"], "— Поможешь мне с этим? — Постараюсь.", "try to."],
    ["g", "You don't need to bring food, but you can if you'd like ___.", "to", ["it", "so", "that"], "Еду приносить не нужно, но можешь, если хочешь.", "would like to."],
    ["g", "She has never been happier, and she deserves to ___.", "be", ["it", "so", "been"], "Она никогда не была так счастлива — и она этого заслуживает.", "be не опускаем."]
   ]},
   { task: "Complete the answer", items: [
    ["g", "'Are you going to apply?' 'I'm planning ___.'", "to", ["it", "so", "on it"], "— Ты будешь подавать заявку? — Планирую.", "planning to."],
    ["g", "I've never been to Canada, but I hope ___ one day.", "to", ["so", "it", "to it"], "Я никогда не был в Канаде, но надеюсь когда-нибудь побывать.", "hope to."],
    ["g", "'Why did you leave?' 'I didn't want ___, but I had no choice.'", "to", ["it", "so", "leave to"], "— Почему ты ушёл? — Я не хотел, но выбора не было.", "want to."],
    ["g", "He's not rich, but he'd like to ___.", "be", ["it", "so", "rich to"], "Он не богат, но хотел бы быть богатым.", "be не опускаем."],
    ["g", "'Shall I open the window?' 'You don't need ___ — I'll do it.'", "to", ["it", "so", "do"], "— Открыть окно? — Не нужно, я сам.", "need to."],
    ["g", "'You ought to see a doctor.' 'I know I ought ___.'", "to", ["it", "so", "do"], "— Тебе стоит сходить к врачу. — Знаю, что стоит.", "ought to."],
    ["g", "'Did you finish the report?' 'I tried ___, but there wasn't time.'", "to", ["it", "so", "that"], "— Ты закончил отчёт? — Пытался, но не хватило времени.", "tried to."],
    ["g", "I'd come with you if I could, but I'm not allowed ___.", "to", ["it", "so", "do"], "Я бы пошёл с тобой, если бы мог, но мне не разрешают.", "allowed to."],
    ["g", "Take a jacket if you want ___. It might get cold.", "to", ["so", "that", "for"], "Возьми куртку, если хочешь. Может похолодать.", "want to."],
    ["g", "I was going to call you, but I decided not ___.", "to", ["it", "so", "do"], "Я собирался тебе позвонить, но решил не звонить.", "not to."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "'Will you come?' 'I'd like it.'", "'Will you come?' 'I'd like to.'", ["'Will you come?' 'I'd like so.'", "'Will you come?' 'I'd like to it.'", "'Will you come?' 'I'd like to do.'"], "— Придёшь? — С удовольствием.", "Только to."],
    ["e", "I didn't want to go, but I had to go it.", "I didn't want to go, but I had to.", ["I didn't want to go, but I had so.", "I didn't want to go, but I had it.", "I didn't want to go, but I must to."], "Я не хотел идти, но пришлось.", "had to."],
    ["e", "She isn't a teacher, but she wants to.", "She isn't a teacher, but she wants to be.", ["She isn't a teacher, but she wants to be it.", "She isn't a teacher, but she wants so.", "She isn't a teacher, but she wants it."], "Она не учитель, но хочет им стать.", "be не опускаем."],
    ["e", "'Did you buy bread?' 'Sorry, I forgot so.'", "'Did you buy bread?' 'Sorry, I forgot to.'", ["'Did you buy bread?' 'Sorry, I forgot to it.'", "'Did you buy bread?' 'Sorry, I forgot to do.'", "'Did you buy bread?' 'Sorry, I forget to.'"], "— Ты купил хлеб? — Извини, забыл.", "forgot to."],
    ["e", "I don't play tennis now, but I used.", "I don't play tennis now, but I used to.", ["I don't play tennis now, but I use to.", "I don't play tennis now, but I used it.", "I don't play tennis now, but I was used to."], "Сейчас я не играю в теннис, но раньше играл.", "used to."],
    ["e", "'Can you fix it?' 'I'll try so.'", "'Can you fix it?' 'I'll try to.'", ["'Can you fix it?' 'I'll try it to.'", "'Can you fix it?' 'I'll try to it.'", "'Can you fix it?' 'I'll trying to.'"], "— Починишь? — Попробую.", "try to."],
    ["e", "You don't have to come if you don't want it.", "You don't have to come if you don't want to.", ["You don't have to come if you don't want so.", "You don't have to come if you don't want to it.", "You don't have to come if you not want to."], "Не обязательно приходить, если не хочешь.", "want to."],
    ["e", "He isn't famous yet, but one day he hopes to.", "He isn't famous yet, but one day he hopes to be.", ["He isn't famous yet, but one day he hope to be.", "He isn't famous yet, but one day he hopes to be it.", "He isn't famous yet, but one day he hopes being."], "Он пока не знаменит, но надеется когда-нибудь им стать.", "be не опускаем."],
    ["e", "'Why didn't you help?' 'I wanted, but I couldn't.'", "'Why didn't you help?' 'I wanted to, but I couldn't.'", ["'Why didn't you help?' 'I wanted it, but I couldn't.'", "'Why didn't you help?' 'I wanted so, but I couldn't.'", "'Why didn't you help?' 'I wanted to it, but I couldn't.'"], "— Почему ты не помог? — Хотел, но не смог.", "wanted to."],
    ["e", "I was going to tell her, but I decided to not.", "I was going to tell her, but I decided not to.", ["I was going to tell her, but I decided not.", "I was going to tell her, but I decided no to.", "I was going to tell her, but I decided not so."], "Я собирался ей сказать, но решил не говорить.", "not to."]
   ]}
  ]},

{ n: 118, floor: 19, title: "Short forms in conversation: Me too, Sounds good, Not yet", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "После and / but / or", p: "Повторяющееся **подлежащее** (и вспомогательный глагол) после **and / but / or** можно опустить.",
      ex: ["She opened the door and **walked** in.", "He was born in Aktobe but **grew up** in Almaty.", "I ordered soup, and my friend **salad**. (опущено ordered)"] },
    { k: "B", h: "Разговорные сокращения", p: "В живой речи начало фразы часто пропадает: **(Do you) want a coffee? (It) sounds good. (I'll) see you later. (Are you) ready?**",
      table: [["полностью", "в разговоре"], ["Do you want some tea?", "**Want** some tea?"], ["That sounds good.", "**Sounds** good."], ["I'll see you tomorrow.", "**See** you tomorrow."], ["Have you finished?", "**Finished?**"]] },
    { k: "C", h: "Короткие реплики", p: "**Me too** (я тоже — на утверждение), **Me neither** (я тоже не — на отрицание), **Not yet**, **Why not?**, **Where to?**, **Not me**.",
      ex: ["'I'm hungry.' '**Me too**.'", "'I can't swim.' '**Me neither**.'", "'Finished?' '**Not yet**.'"] }
  ], mistakes: [["'I'm tired.' 'I too.'", "'I'm tired.' 'Me too.'", "Me too."], ["'I don't like it.' 'Me too.'", "'I don't like it.' 'Me neither.'", "На отрицание → Me neither."], ["'Finished?' 'Not still.'", "'Finished?' 'Not yet.'", "Not yet."]] },
  ex: [
   { task: "Short replies", items: [
    ["g", "'I'm hungry.' '___ too.'", "Me", ["I", "Mine", "Myself"], "— Я голоден. — Я тоже.", "Me too."],
    ["g", "'I don't like horror films.' 'Me ___.'", "neither", ["too", "either not", "also"], "— Я не люблю ужастики. — Я тоже.", "На отрицание → Me neither."],
    ["g", "'___ a coffee?' 'Yes, please.'", "Want", ["Wants", "Wanting", "To want"], "— Хочешь кофе? — Да, пожалуйста.", "(Do you) want…?"],
    ["g", "'Let's meet at six.' '___ good to me.'", "Sounds", ["Sound", "It sound", "Sounding"], "— Встретимся в шесть. — Меня устраивает.", "(That) sounds good."],
    ["g", "'I'm going on holiday next week.' 'Oh, nice! Where ___?'", "to", ["at", "for", "in"], "— На следующей неделе еду в отпуск. — О, здорово! Куда?", "Where to?"],
    ["g", "'Can I sit here?' 'Sure, ___ not?'", "why", ["what", "how", "who"], "— Можно здесь сесть? — Конечно, почему бы и нет?", "Why not?"],
    ["g", "'___ you tomorrow!' 'Bye!'", "See", ["Seeing", "Sees", "To see"], "— До завтра! — Пока!", "(I'll) see you…"],
    ["g", "'Finished?' 'Not ___.'", "yet", ["already", "still", "ever"], "— Закончил? — Ещё нет.", "Not yet."],
    ["g", "'Who wants more cake?' '___!'", "Me", ["I am", "Mine", "Myself"], "— Кто хочет ещё торта? — Я!", "В разговоре → Me!"],
    ["g", "'Nice to meet you.' 'Nice to meet you ___.'", "too", ["also", "either", "neither"], "— Приятно познакомиться. — Мне тоже.", "… too."]
   ]},
   { task: "Leaving words out", items: [
    ["g", "She opened the door and ___ in.", "walked", ["she walk", "walking", "walks"], "Она открыла дверь и вошла.", "Подлежащее после and опущено."],
    ["g", "We sang, danced and ___ until midnight.", "talked", ["talking", "we talking", "talk"], "Мы пели, танцевали и разговаривали до полуночи.", "То же время → talked."],
    ["g", "He was born in Aktobe but ___ up in Almaty.", "grew", ["growing", "he grow", "grows"], "Он родился в Актобе, но вырос в Алматы.", "Подлежащее после but опущено."],
    ["g", "You can pay by card or ___ cash.", "in", ["with", "on", "at"], "Можно заплатить картой или наличными.", "pay in cash."],
    ["g", "'Are you coming?' 'I'm not sure. Maybe ___.'", "not", ["no", "don't", "isn't"], "— Ты идёшь? — Не уверен. Может, и нет.", "Maybe not."],
    ["g", "'Has anyone seen my glasses?' 'Not ___.'", "me", ["I", "mine", "myself"], "— Кто-нибудь видел мои очки? — Не я.", "Not me."],
    ["g", "'Where's Dana?' 'In the kitchen, ___.'", "I think", ["I think so", "think it", "I'm thinking"], "— Где Дана? — На кухне, кажется.", "…, I think."],
    ["g", "'Lovely day!' 'Yes, ___ it?'", "isn't", ["is", "doesn't", "wasn't"], "— Чудесный день! — Да, правда?", "(It's a) lovely day → isn't it?"],
    ["g", "'Sorry I'm late.' 'No ___.'", "worries", ["worry", "worried", "worrying"], "— Извини за опоздание. — Ничего страшного.", "No worries."],
    ["g", "'Coming to the cinema?' 'I'd love to, but I ___.'", "can't", ["don't", "can't to", "won't to"], "— Пойдёшь в кино? — С радостью, но не могу.", "Только can't."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "'I'm tired.' 'I too.'", "'I'm tired.' 'Me too.'", ["'I'm tired.' 'Mine too.'", "'I'm tired.' 'Me also too.'", "'I'm tired.' 'Me neither.'"], "— Я устал. — Я тоже.", "Me too."],
    ["e", "'I can't swim.' 'Me too.'", "'I can't swim.' 'Me neither.'", ["'I can't swim.' 'Me also.'", "'I can't swim.' 'I neither.'", "'I can't swim.' 'Me neither not.'"], "— Я не умею плавать. — Я тоже.", "На отрицание → Me neither."],
    ["e", "I ordered soup, and my friend did salad.", "I ordered soup, and my friend salad.", ["I ordered soup, and my friend was salad.", "I ordered soup, and salad my friend.", "I ordered soup, and my friend do salad."], "Я заказал суп, а мой друг — салат.", "Глагол просто опускаем."],
    ["e", "He was born in Taraz and he grow up there.", "He was born in Taraz and grew up there.", ["He was born in Taraz and growing up there.", "He was born in Taraz and grows up there.", "He was born in Taraz and he grow up there too."], "Он родился и вырос в Таразе.", "Подлежащее опускаем, время сохраняем."],
    ["e", "Sees you tomorrow!", "See you tomorrow!", ["Seeing you tomorrow!", "To see you tomorrow!", "Saw you tomorrow!"], "До завтра!", "(I'll) see you."],
    ["e", "'Want some tea?' 'Yes, I want.'", "'Want some tea?' 'Yes, please.'", ["'Want some tea?' 'Yes, I want it please.'", "'Want some tea?' 'Yes, I'm want.'", "'Want some tea?' 'Yes, I wanting.'"], "— Хочешь чаю? — Да, пожалуйста.", "Yes, please."],
    ["e", "'Have a great weekend!' 'You also!'", "'Have a great weekend!' 'You too!'", ["'Have a great weekend!' 'You either!'", "'Have a great weekend!' 'You neither!'", "'Have a great weekend!' 'Your too!'"], "— Хороших выходных! — И тебе!", "You too!"],
    ["e", "'Has the parcel arrived?' 'Not still.'", "'Has the parcel arrived?' 'Not yet.'", ["'Has the parcel arrived?' 'Yet not.'", "'Has the parcel arrived?' 'Not already.'", "'Has the parcel arrived?' 'No yet.'"], "— Посылка пришла? — Ещё нет.", "Not yet."],
    ["e", "'Lovely weather!' 'Yes, is it?'", "'Lovely weather!' 'Yes, isn't it?'", ["'Lovely weather!' 'Yes, doesn't it?'", "'Lovely weather!' 'Yes, isn't?'", "'Lovely weather!' 'Yes, it isn't?'"], "— Прекрасная погода! — Да, правда?", "isn't it?"],
    ["e", "'Who wants pizza?' 'Me want!'", "'Who wants pizza?' 'Me!'", ["'Who wants pizza?' 'Me wants!'", "'Who wants pizza?' 'Mine!'", "'Who wants pizza?' 'Myself!'"], "— Кто хочет пиццу? — Я!", "Просто Me!"]
   ]}
  ]},

{ n: 119, floor: 19, title: "if so / if not / otherwise; the same; I told you so", cefr: "B1–B2",
  rule: { sections: [
    { k: "A", h: "if so / if not", p: "**if so** = если да (если это так). **if not** = если нет. Не _~~if yes / if no~~_.",
      ex: ["Are you free tonight? **If so**, let's eat out.", "Do you have a ticket? **If not**, buy one at the door."] },
    { k: "B", h: "otherwise = иначе", p: "**otherwise** — «а то, иначе» (= if not). Часто после совета или приказа.",
      ex: ["Hurry up, **otherwise** we'll be late.", "Write it down. **Otherwise**, you'll forget."] },
    { k: "C", h: "the same / do the same", p: "**the same** — то же самое, такой же. **do the same** — сделать так же. Всегда с **the**.",
      ex: ["'I'll have the fish.' '**The same** for me.'", "He left early, and I **did the same**."] },
    { k: "D", h: "so вместо предложения", p: "**I told you so. If you say so. So it seems. So I've heard. The forecast says so.**",
      ex: ["'It broke!' 'I **told you so**!'", "'Is she leaving?' '**So I've heard**.'"] }
  ], mistakes: [["If yes, call me.", "If so, call me.", "if so."], ["If no, take a taxi.", "If not, take a taxi.", "if not."], ["I'll have same.", "I'll have the same.", "the same."]] },
  ex: [
   { task: "**if so / if not / otherwise**", items: [
    ["g", "Are you free tonight? If ___, let's have dinner.", "so", ["yes", "it", "that"], "Ты свободен вечером? Если да, давай поужинаем.", "if so = если да."],
    ["g", "Do you have a ticket? If ___, you'll have to buy one.", "not", ["no", "don't", "isn't"], "У вас есть билет? Если нет, придётся купить.", "if not = если нет."],
    ["g", "Hurry up, ___ we'll miss the train.", "otherwise", ["if so", "unless", "so that"], "Поторопись, иначе мы опоздаем на поезд.", "otherwise = иначе."],
    ["g", "Is the shop still open? If ___, could you buy some bread?", "so", ["yes", "it is", "that"], "Магазин ещё открыт? Если да, купишь хлеба?", "if so."],
    ["g", "Will you need a lift? If ___, let me know.", "so", ["yes", "it", "that"], "Тебя подвезти? Если да, скажи.", "if so."],
    ["g", "Write it down, ___ you'll forget.", "otherwise", ["if so", "unless", "so that"], "Запиши, иначе забудешь.", "otherwise."],
    ["g", "Is anyone hurt? If ___, call an ambulance.", "so", ["yes", "it", "that"], "Кто-нибудь пострадал? Если да, вызовите скорую.", "if so."],
    ["g", "We might get tickets for Saturday. If ___, we'll try Sunday.", "not", ["no", "don't", "isn't"], "Может, достанем билеты на субботу. Если нет, попробуем на воскресенье.", "if not."],
    ["g", "Take a map. ___, you might get lost.", "Otherwise", ["If so", "Unless", "Instead"], "Возьми карту. Иначе можешь заблудиться.", "Otherwise."],
    ["g", "The road may be closed. If ___, take the bypass.", "so", ["yes", "it", "that"], "Дорогу могут перекрыть. Если так, езжай по объездной.", "if so."]
   ]},
   { task: "**the same** and **so**", items: [
    ["g", "'I'm having the soup.' 'I'll have ___ same.'", "the", ["a", "so", "this"], "— Я возьму суп. — И мне то же самое.", "the same."],
    ["g", "He left early, and I did ___ same.", "the", ["a", "so", "it"], "Он ушёл рано, и я тоже.", "do the same."],
    ["g", "'Is it going to rain?' 'The forecast says ___.'", "so", ["it", "that so", "yes"], "— Будет дождь? — Прогноз так говорит.", "says so."],
    ["g", "'Your answer was wrong.' 'If you say ___.'", "so", ["it", "that so", "yes"], "— Твой ответ неправильный. — Ну, раз ты так говоришь.", "If you say so."],
    ["g", "'Oh no, it's broken!' 'I told you ___!'", "so", ["it", "that so", "this"], "— О нет, сломалось! — Я же тебе говорил!", "I told you so."],
    ["g", "She bought a red dress, and her sister bought ___ same.", "the", ["a", "this", "that"], "Она купила красное платье, и её сестра купила такое же.", "the same."],
    ["g", "'Are prices going up again?' '___ it seems.'", "So", ["It", "As so", "That"], "— Цены опять растут? — Похоже, что так.", "So it seems."],
    ["g", "He studied medicine, and his son did ___.", "the same", ["so same", "same", "the same so"], "Он изучал медицину, и его сын тоже.", "do the same."],
    ["g", "'Is Arman leaving the company?' '___ I've heard.'", "So", ["That so", "It", "As"], "— Арман уходит из компании? — Так я слышал.", "So I've heard."],
    ["g", "Please do ___ same for all the other files.", "the", ["a", "so", "this"], "Пожалуйста, сделай то же самое со всеми остальными файлами.", "do the same."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "Are you hungry? If yes, let's eat.", "Are you hungry? If so, let's eat.", ["Are you hungry? If it, let's eat.", "Are you hungry? If that, let's eat.", "Are you hungry? If is, let's eat."], "Ты голоден? Если да, давай поедим.", "if so."],
    ["e", "Have you got a pen? If no, use a pencil.", "Have you got a pen? If not, use a pencil.", ["Have you got a pen? If don't, use a pencil.", "Have you got a pen? If isn't, use a pencil.", "Have you got a pen? If not so, use a pencil."], "У тебя есть ручка? Если нет, возьми карандаш.", "if not."],
    ["e", "Be careful, unless you'll fall.", "Be careful, otherwise you'll fall.", ["Be careful, if so you'll fall.", "Be careful, so that you'll fall.", "Be careful, unless you fall."], "Осторожно, иначе упадёшь.", "otherwise = иначе."],
    ["e", "I'll have a same.", "I'll have the same.", ["I'll have same.", "I'll have so same.", "I'll have it same."], "Мне то же самое.", "the same."],
    ["e", "'You were right about the traffic.' 'I told you that so.'", "'You were right about the traffic.' 'I told you so.'", ["'You were right about the traffic.' 'I told you it.'", "'You were right about the traffic.' 'I said you so.'", "'You were right about the traffic.' 'I told so you.'"], "— Ты был прав насчёт пробок. — Я же говорил.", "I told you so."],
    ["e", "She bought a new phone and I did same.", "She bought a new phone and I did the same.", ["She bought a new phone and I did a same.", "She bought a new phone and I did so same.", "She bought a new phone and I did it same."], "Она купила новый телефон, и я тоже.", "did the same."],
    ["e", "'Is he coming back?' 'It seems so it.'", "'Is he coming back?' 'It seems so.'", ["'Is he coming back?' 'It seems it.'", "'Is he coming back?' 'It seems yes.'", "'Is he coming back?' 'It's seems so.'"], "— Он вернётся? — Похоже, что да.", "It seems so."],
    ["e", "Is the museum open on Mondays? If so not, we'll go on Tuesday.", "Is the museum open on Mondays? If not, we'll go on Tuesday.", ["Is the museum open on Mondays? If no, we'll go on Tuesday.", "Is the museum open on Mondays? If isn't, we'll go on Tuesday.", "Is the museum open on Mondays? If don't, we'll go on Tuesday."], "Музей работает по понедельникам? Если нет, пойдём во вторник.", "if not."],
    ["e", "'You'll love it.' 'If you say it.'", "'You'll love it.' 'If you say so.'", ["'You'll love it.' 'If you tell so.'", "'You'll love it.' 'If you say that so.'", "'You'll love it.' 'If you says so.'"], "— Тебе понравится. — Ну, раз ты так говоришь.", "If you say so."],
    ["e", "Save your work, otherwise you will losing it.", "Save your work, otherwise you'll lose it.", ["Save your work, otherwise you lost it.", "Save your work, otherwise you losing it.", "Save your work, otherwise you to lose it."], "Сохрани работу, иначе потеряешь её.", "otherwise + will + глагол."]
   ]}
  ]}
);
