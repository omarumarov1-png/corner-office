// Part 13 · Clauses & linking words (Units 79–83). Original explanations and examples.
window.GRAMMAR.units.push(
{ n: 79, floor: 13, title: "Relative clauses: who / which / that", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "who — о людях, which — о предметах", p: "Придаточное определительное уточняет, **какой именно** человек или предмет. **who** — люди, **which** — вещи и животные, **that** — и то и другое (разговорно).",
      ex: ["The woman **who** lives next door is a doctor.", "The bus **which** goes to the airport leaves at six.", "I've lost the book **that** you gave me.", "Do you know anyone **who** speaks Chinese?"] },
    { k: "B", h: "Не повторяйте подлежащее", p: "who/which **уже заменяют** he/she/it. Нельзя: _The man who he called…_",
      table: [["Неправильно", "Правильно"], ["~~The girl who she won…~~", "The girl **who won** the prize…"], ["~~The film which it starts at 8…~~", "The film **which starts** at 8…"]] },
    { k: "C", h: "what ≠ that", p: "**what** = «то, что» (сам содержит существительное). Нельзя говорить _the thing what_.",
      ex: ["**What** you said was true. (то, что ты сказал)", "Everything **that** he said was true. (не _everything what_)", "This is the phone **that/which** I want. (не _the phone what_)"] }
  ], mistakes: [["The man which lives here is my uncle.", "The man who lives here is my uncle.", "Люди → who."], ["The girl who she sings is my sister.", "The girl who sings is my sister.", "Не повторять she."], ["Everything what she said was true.", "Everything that she said was true.", "everything that."]] },
  ex: [
   { task: "**who** or **which**?", items: [
    ["g", "The man ___ called you is my uncle.", "who", ["which", "what", "whose"], "Мужчина, который тебе звонил, — мой дядя.", "Человек → who."],
    ["g", "I like films ___ make me laugh.", "which", ["who", "what", "whose"], "Мне нравятся фильмы, которые меня смешат.", "Вещь → which."],
    ["g", "She's the teacher ___ helped me with my English.", "who", ["which", "what", "whom which"], "Это учитель, который помог мне с английским.", "who."],
    ["g", "Where's the cake ___ was on the table?", "which", ["who", "what", "whose"], "Где торт, который был на столе?", "which."],
    ["g", "A doctor is someone ___ helps sick people.", "who", ["which", "what", "whose"], "Врач — это тот, кто помогает больным.", "who."],
    ["g", "The bus ___ goes to the centre is number 12.", "which", ["who", "what", "whose"], "Автобус в центр — номер 12.", "which."],
    ["g", "I have a friend ___ lives in Canada.", "who", ["which", "what", "where"], "У меня есть друг, который живёт в Канаде.", "who."],
    ["g", "This is the song ___ won the competition.", "which", ["who", "what", "whose"], "Это песня, которая победила в конкурсе.", "which."],
    ["g", "The people ___ live upstairs are very noisy.", "who", ["which", "what", "whose"], "Люди, которые живут наверху, очень шумные.", "who."],
    ["g", "Did you see the dog ___ was barking all night?", "which", ["who", "what", "whose"], "Ты видел собаку, которая лаяла всю ночь?", "Животное → which."]
   ]},
   { task: "**that / what**, no extra pronoun", items: [
    ["g", "Everything ___ he told me was true.", "that", ["what", "which what", "who"], "Всё, что он мне сказал, было правдой.", "everything that."],
    ["g", "___ you need is a good rest.", "What", ["That", "Which", "Who"], "То, что тебе нужно, — хороший отдых.", "what = то, что."],
    ["g", "The girl who ___ the race is my cousin.", "won", ["she won", "won she", "who won"], "Девочка, которая выиграла забег, — моя кузина.", "Без she."],
    ["g", "I didn't understand ___ the teacher said.", "what", ["that", "which", "who"], "Я не понял, что сказал учитель.", "what = то, что."],
    ["g", "This is the best book ___ I've ever read.", "that", ["what", "who", "whose"], "Это лучшая книга, что я читал.", "После превосходной → that."],
    ["g", "The phone which ___ on the table is mine.", "is", ["it is", "is it", "which is"], "Телефон, который на столе, — мой.", "Без it."],
    ["g", "I'll do ___ I can to help.", "what", ["that", "which", "who"], "Сделаю всё, что смогу.", "what I can."],
    ["g", "All ___ I want is some peace and quiet.", "that", ["what", "which what", "who"], "Всё, чего я хочу, — немного тишины.", "all that."],
    ["g", "The man ___ stole my bag was arrested.", "who", ["which", "what", "whose"], "Мужчину, укравшего мою сумку, арестовали.", "who."],
    ["g", "There's nothing ___ I can do.", "that", ["what", "which what", "who"], "Ничего не могу поделать.", "nothing that."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "The woman which works here is very kind.", "The woman who works here is very kind.", ["The woman what works here is very kind.", "The woman who she works here is very kind.", "The woman whose works here is very kind."], "Женщина, которая здесь работает, очень добрая.", "Люди → who."],
    ["e", "The boy who he broke the window ran away.", "The boy who broke the window ran away.", ["The boy which broke the window ran away.", "The boy what broke the window ran away.", "The boy who broken the window ran away."], "Мальчик, разбивший окно, убежал.", "Без he."],
    ["e", "Everything what you said is wrong.", "Everything that you said is wrong.", ["Everything which what you said is wrong.", "Everything who you said is wrong.", "Every what you said is wrong."], "Всё, что ты сказал, неверно.", "everything that."],
    ["e", "This is the computer what I bought.", "This is the computer that I bought.", ["This is the computer who I bought.", "This is the computer that I bought it.", "This is the computer what I bought it."], "Это компьютер, который я купил.", "that/which, не what."],
    ["e", "The film which it starts at nine is long.", "The film which starts at nine is long.", ["The film who starts at nine is long.", "The film what starts at nine is long.", "The film which start at nine is long."], "Фильм, который начинается в девять, длинный.", "Без it."],
    ["e", "I know a man who he can fix your car.", "I know a man who can fix your car.", ["I know a man which can fix your car.", "I know a man what can fix your car.", "I know a man who can fixes your car."], "Я знаю человека, который починит твою машину.", "Без he."],
    ["e", "That's the best thing what happened today.", "That's the best thing that happened today.", ["That's the best thing who happened today.", "That's the best thing which it happened today.", "That's the best thing what it happened today."], "Это лучшее, что сегодня случилось.", "that."],
    ["e", "The keys who were on the table are gone.", "The keys which were on the table are gone.", ["The keys what were on the table are gone.", "The keys which they were on the table are gone.", "The keys whose were on the table are gone."], "Ключи, которые были на столе, пропали.", "Вещи → which."],
    ["e", "That you need is more sleep.", "What you need is more sleep.", ["Which you need is more sleep.", "That what you need is more sleep.", "Who you need is more sleep."], "Тебе нужно больше спать.", "what = то, что."],
    ["e", "People which smoke damage their health.", "People who smoke damage their health.", ["People what smoke damage their health.", "People who they smoke damage their health.", "People whose smoke damage their health."], "Люди, которые курят, вредят здоровью.", "Люди → who."]
   ]}
  ]},
{ n: 80, floor: 13, title: "Relative clauses: whose, where, when; leaving out who/that", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "whose — чей", p: "**whose** + существительное — принадлежность.",
      ex: ["That's the boy **whose** dog bit me.", "I have a friend **whose** father is a pilot.", "The company **whose** products we sell is Korean."] },
    { k: "B", h: "where и when", p: "**where** — место (= in which). **when** — время.",
      ex: ["This is the house **where** I was born.", "I remember the day **when** we first met.", "Is there a shop **where** I can buy a charger?"] },
    { k: "C", h: "Можно ли пропустить who / which / that?", p: "Если после who/which/that идёт **новое подлежащее** (то есть это дополнение) — можно пропустить. Если сразу глагол (это подлежащее) — **нельзя**.",
      table: [["Можно пропустить (дополнение)", "Нельзя (подлежащее)"], ["The book (**that**) **I** bought is great.", "The book **that won** the prize is great."], ["The man (**who**) **you** met is my boss.", "The man **who called** you is my boss."]],
      note: "Предлог — в конец: the girl (who) I was talking **to**; the house (that) we live **in**." }
  ], mistakes: [["The man who his car was stolen…", "The man whose car was stolen…", "чей → whose."], ["The book won the prize is great.", "The book that won the prize is great.", "Подлежащее — нельзя пропустить."], ["This is the town which I was born.", "This is the town where I was born.", "Место → where (или in which)."]] },
  ex: [
   { task: "**whose / where / when**", items: [
    ["g", "That's the girl ___ brother plays for the national team.", "whose", ["who", "which", "where"], "Это девочка, чей брат играет за сборную.", "Чей → whose."],
    ["g", "This is the café ___ we first met.", "where", ["which", "when", "whose"], "Это кафе, где мы впервые встретились.", "Место → where."],
    ["g", "I'll never forget the day ___ I passed my driving test.", "when", ["where", "which", "whose"], "Никогда не забуду день, когда сдал на права.", "Время → when."],
    ["g", "I met a man ___ wife works with my mum.", "whose", ["who", "which", "who's"], "Я встретил мужчину, чья жена работает с моей мамой.", "whose wife."],
    ["g", "The hotel ___ we stayed was near the beach.", "where", ["which", "when", "whose"], "Отель, где мы жили, был у пляжа.", "where."],
    ["g", "Summer is the season ___ most people go on holiday.", "when", ["where", "which", "whose"], "Лето — время, когда большинство уезжает в отпуск.", "when."],
    ["g", "He's the writer ___ books are in every school.", "whose", ["who", "which", "who's"], "Это писатель, чьи книги есть в каждой школе.", "whose books."],
    ["g", "Is there a place ___ I can charge my phone?", "where", ["which", "when", "whose"], "Здесь есть место, где можно зарядить телефон?", "where."],
    ["g", "Do you remember the time ___ we got lost in the mountains?", "when", ["where", "which", "whose"], "Помнишь, как мы заблудились в горах?", "when."],
    ["g", "A widow is a woman ___ husband has died.", "whose", ["who", "which", "who's"], "Вдова — женщина, у которой умер муж.", "whose husband."]
   ]},
   { task: "Can you leave out **who / which / that**?", items: [
    ["g", "The film ___ we watched last night was brilliant. (can leave out)", "—", ["who", "what", "where"], "Фильм, который мы смотрели вчера, был отличный.", "Дополнение → можно без that."],
    ["g", "The film ___ won the Oscar was brilliant.", "that", ["—", "what", "who"], "Фильм, получивший «Оскар», был отличный.", "Подлежащее → нельзя пропустить."],
    ["g", "The girl ___ I was talking to is from Spain.", "—", ["where", "what", "whose"], "Девушка, с которой я разговаривал, из Испании.", "Можно без who; to в конце."],
    ["g", "The man ___ lives next door is a pilot.", "who", ["—", "which", "whose"], "Мужчина, живущий по соседству, — пилот.", "Подлежащее → who."],
    ["g", "Is this the key ___ you were looking for?", "—", ["where", "what", "who"], "Это ключ, который ты искал?", "Можно без that; for в конце."],
    ["g", "The students ___ passed the test got a certificate.", "who", ["—", "which", "whose"], "Студенты, сдавшие тест, получили сертификат.", "Подлежащее → who."],
    ["g", "The house ___ they live in is very old.", "—", ["where", "what", "whose"], "Дом, в котором они живут, очень старый.", "Можно без that; in в конце."],
    ["g", "The pizza ___ I ordered never arrived.", "—", ["who", "what", "where"], "Пицца, которую я заказал, так и не приехала.", "Дополнение → можно пропустить."],
    ["g", "The pizza ___ arrived was cold.", "that", ["—", "what", "who"], "Пицца, которую привезли, была холодной.", "Подлежащее → нельзя."],
    ["g", "Everyone ___ I invited came to the party.", "—", ["what", "which", "whose"], "Пришли все, кого я пригласил.", "Дополнение → можно пропустить."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "That's the woman who her son is a doctor.", "That's the woman whose son is a doctor.", ["That's the woman who's son is a doctor.", "That's the woman which son is a doctor.", "That's the woman whose her son is a doctor."], "Это женщина, чей сын — врач.", "whose son."],
    ["e", "This is the village which I grew up.", "This is the village where I grew up.", ["This is the village when I grew up.", "This is the village whose I grew up.", "This is the village where I grew up in it."], "Это деревня, где я вырос.", "Место → where."],
    ["e", "The book won the award is very popular.", "The book that won the award is very popular.", ["The book what won the award is very popular.", "The book who won the award is very popular.", "The book that it won the award is very popular."], "Книга, получившая награду, очень популярна.", "Подлежащее → нельзя пропустить."],
    ["e", "I remember the day where we met.", "I remember the day when we met.", ["I remember the day which we met.", "I remember the day whose we met.", "I remember the day when we met it."], "Помню день, когда мы встретились.", "Время → when."],
    ["e", "The man who's car was stolen called the police.", "The man whose car was stolen called the police.", ["The man who car was stolen called the police.", "The man which car was stolen called the police.", "The man whose his car was stolen called the police."], "Мужчина, у которого угнали машину, вызвал полицию.", "whose ≠ who's."],
    ["e", "The flat we live in it is small.", "The flat we live in is small.", ["The flat where we live in it is small.", "The flat which we live is small.", "The flat what we live in is small."], "Квартира, в которой мы живём, маленькая.", "Без it."],
    ["e", "The girl I was talking is my cousin.", "The girl I was talking to is my cousin.", ["The girl to I was talking is my cousin.", "The girl who I was talking is my cousin.", "The girl I was talking with to is my cousin."], "Девушка, с которой я говорил, — моя кузина.", "talk to — предлог в конце."],
    ["e", "People live in glass houses shouldn't throw stones.", "People who live in glass houses shouldn't throw stones.", ["People which live in glass houses shouldn't throw stones.", "People what live in glass houses shouldn't throw stones.", "People who they live in glass houses shouldn't throw stones."], "Кто живёт в стеклянном доме, не должен бросаться камнями.", "Подлежащее → who."],
    ["e", "The restaurant which we had dinner was expensive.", "The restaurant where we had dinner was expensive.", ["The restaurant when we had dinner was expensive.", "The restaurant whose we had dinner was expensive.", "The restaurant what we had dinner was expensive."], "Ресторан, где мы ужинали, был дорогим.", "where."],
    ["e", "That's the singer which songs I love.", "That's the singer whose songs I love.", ["That's the singer who songs I love.", "That's the singer who's songs I love.", "That's the singer whose songs I love them."], "Это певица, чьи песни я люблю.", "whose songs."]
   ]}
  ]},
{ n: 81, floor: 13, title: "Non-defining relative clauses (My brother, who lives in Almaty, …)", cefr: "B2",
  rule: { sections: [
    { k: "A", h: "Дополнительная информация — в запятых", p: "Если без придаточного и так понятно, о ком речь, а оно лишь **добавляет информацию** — его выделяют **запятыми**.",
      table: [["Определительное (без запятых)", "Описательное (с запятыми)"], ["My sister **who lives in Astana** is a doctor. (у меня несколько сестёр)", "My sister, **who lives in Astana**, is a doctor. (сестра одна; просто добавляю)"], ["The car **that I bought** is red.", "My car, **which I bought last year**, is red."]] },
    { k: "B", h: "Правила в запятых", p: "В запятых — **только who / which** (не that) и их **нельзя пропускать**.",
      ex: ["Abai, **who** was a great poet, was born in 1845.", "Almaty, **which** used to be the capital, is a beautiful city.", "Mr Smith, **whose** son is in my class, is a lawyer."] },
    { k: "C", h: "which о всём предложении", p: "**which** может относиться ко **всей фразе** перед ним: «что».",
      ex: ["He passed all his exams, **which** surprised everyone.", "She didn't call me, **which** was strange.", "It rained all week, **which** meant we stayed inside."] }
  ], mistakes: [["My father, that is a pilot, travels a lot.", "My father, who is a pilot, travels a lot.", "В запятых — не that."], ["Paris which is in France is beautiful.", "Paris, which is in France, is beautiful.", "Добавочная информация → запятые."], ["He failed, what was a surprise.", "He failed, which was a surprise.", "О всей фразе → which."]] },
  ex: [
   { task: "Add the extra information with **who / which / whose**", items: [
    ["g", "My grandmother, ___ is 85, still works in her garden.", "who", ["that", "which", "whose"], "Моя бабушка, которой 85, всё ещё работает в саду.", "Человек, в запятых → who."],
    ["g", "Astana, ___ is the capital, has many modern buildings.", "which", ["that", "who", "where"], "Астана, которая является столицей, полна современных зданий.", "В запятых → which."],
    ["g", "Our teacher, ___ husband is a chef, brought us a cake.", "whose", ["who", "which", "that"], "Наш учитель, чей муж повар, принесла нам торт.", "whose."],
    ["g", "The Ural River, ___ flows through Atyrau, is very long.", "which", ["that", "who", "where"], "Река Урал, которая течёт через Атырау, очень длинная.", "which."],
    ["g", "My best friend, ___ I've known since school, is getting married.", "who", ["that", "which", "—"], "Мой лучший друг, которого я знаю со школы, женится.", "В запятых нельзя пропускать."],
    ["g", "This phone, ___ I bought last year, is already broken.", "which", ["that", "—", "what"], "Этот телефон, купленный в прошлом году, уже сломался.", "which."],
    ["g", "Mr Bekov, ___ daughter is in my class, is a dentist.", "whose", ["who", "that", "which"], "Господин Беков, чья дочь в моём классе, стоматолог.", "whose."],
    ["g", "The concert, ___ lasted three hours, was fantastic.", "which", ["that", "who", "what"], "Концерт, который длился три часа, был потрясающим.", "which."],
    ["g", "Dana, ___ sits next to me, is very funny.", "who", ["that", "which", "whose"], "Дана, которая сидит рядом со мной, очень смешная.", "who."],
    ["g", "We visited Turkestan, ___ we saw an amazing mausoleum.", "where", ["which", "that", "when"], "Мы побывали в Туркестане, где увидели удивительный мавзолей.", "where."]
   ]},
   { task: "**which** about the whole sentence; commas or not?", items: [
    ["g", "He won the lottery, ___ changed his life.", "which", ["what", "that", "who"], "Он выиграл в лотерею, что изменило его жизнь.", "which = что (о всей фразе)."],
    ["g", "She forgot my birthday, ___ made me sad.", "which", ["what", "that", "it"], "Она забыла мой день рождения, что меня расстроило.", "which."],
    ["g", "The train was late, ___ meant we missed the start.", "which", ["what", "that", "so which"], "Поезд опоздал, из-за чего мы пропустили начало.", "which."],
    ["g", "My brother passed his exams, ___ was a big relief.", "which", ["what", "that", "who"], "Брат сдал экзамены, что стало большим облегчением.", "which."],
    ["g", "The students ___ finished early can leave. (only some students)", "who", [", who", "which", ", which"], "Ученики, которые закончили раньше, могут уйти.", "Определяет, каких → без запятых."],
    ["g", "My mother, ___ is a nurse, works nights. (I have one mother)", "who", ["that", "which", "—"], "Моя мама, медсестра, работает по ночам.", "Одна мама → в запятых, who."],
    ["g", "It snowed all night, ___ the roads were closed in the morning.", "so", ["which", "what", "that"], "Всю ночь шёл снег, поэтому утром дороги закрыли.", "Новое предложение → so (не which)."],
    ["g", "They didn't invite me, ___ I didn't mind at all.", "which", ["what", "that", "who"], "Меня не пригласили, но я совсем не обиделся.", "which."],
    ["g", "Everest, ___ is 8,849 metres high, is the tallest mountain.", "which", ["that", "who", "what"], "Эверест высотой 8849 м — самая высокая гора.", "which."],
    ["g", "I got a new job, ___ I'm very happy about.", "which", ["what", "that", "who"], "Я нашёл новую работу, чему очень рад.", "which … about."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "My father, that is a pilot, travels a lot.", "My father, who is a pilot, travels a lot.", ["My father, which is a pilot, travels a lot.", "My father, who he is a pilot, travels a lot.", "My father who is a pilot, travels a lot."], "Мой отец, пилот, много путешествует.", "В запятых — не that."],
    ["e", "Paris which is in France is very beautiful.", "Paris, which is in France, is very beautiful.", ["Paris, that is in France, is very beautiful.", "Paris, what is in France, is very beautiful.", "Paris, which it is in France, is very beautiful."], "Париж, который во Франции, очень красив.", "Добавочная информация → запятые."],
    ["e", "He didn't come, what was strange.", "He didn't come, which was strange.", ["He didn't come, that was strange.", "He didn't come, it was strange which.", "He didn't come, who was strange."], "Он не пришёл, что было странно.", "which."],
    ["e", "My car, I bought last month, is already dirty.", "My car, which I bought last month, is already dirty.", ["My car, that I bought last month, is already dirty.", "My car, what I bought last month, is already dirty.", "My car which I bought last month is already dirty it."], "Моя машина, купленная в прошлом месяце, уже грязная.", "В запятых нельзя пропускать."],
    ["e", "Abai, who he was a great poet, was born in 1845.", "Abai, who was a great poet, was born in 1845.", ["Abai, which was a great poet, was born in 1845.", "Abai, that was a great poet, was born in 1845.", "Abai who was a great poet was born in 1845."], "Абай, великий поэт, родился в 1845 году.", "Без he."],
    ["e", "Our neighbour, who's dog barks all night, is nice.", "Our neighbour, whose dog barks all night, is nice.", ["Our neighbour, who dog barks all night, is nice.", "Our neighbour, which dog barks all night, is nice.", "Our neighbour, that dog barks all night, is nice."], "Наш сосед, чья собака лает всю ночь, приятный человек.", "whose."],
    ["e", "She passed the exam, that surprised her teachers.", "She passed the exam, which surprised her teachers.", ["She passed the exam, what surprised her teachers.", "She passed the exam, who surprised her teachers.", "She passed the exam which it surprised her teachers."], "Она сдала экзамен, чем удивила учителей.", "which."],
    ["e", "London, that is the capital of the UK, is huge.", "London, which is the capital of the UK, is huge.", ["London, who is the capital of the UK, is huge.", "London, what is the capital of the UK, is huge.", "London which is the capital of the UK is huge it."], "Лондон, столица Великобритании, огромен.", "which."],
    ["e", "My sister, which is a lawyer, lives in Astana.", "My sister, who is a lawyer, lives in Astana.", ["My sister, that is a lawyer, lives in Astana.", "My sister, whose is a lawyer, lives in Astana.", "My sister, who she is a lawyer, lives in Astana."], "Моя сестра, юрист, живёт в Астане.", "Человек → who."],
    ["e", "We went to Almaty, which we visited the Medeu rink.", "We went to Almaty, where we visited the Medeu rink.", ["We went to Almaty, that we visited the Medeu rink.", "We went to Almaty, when we visited the Medeu rink.", "We went to Almaty, which we visited the Medeu rink in it."], "Мы поехали в Алматы, где побывали на катке Медеу.", "Место → where."]
   ]}
  ]},
{ n: 82, floor: 13, title: "although / though / even though / despite / in spite of / however", cefr: "B1–B2",
  rule: { sections: [
    { k: "A", h: "although / even though + предложение", p: "**although** (= though) — «хотя». **even though** — сильнее, «даже хотя». После них — **подлежащее + глагол**.",
      ex: ["**Although** it was raining, we went for a walk.", "She came to work **even though** she was ill.", "I like him, **though** he can be rude."] },
    { k: "B", h: "despite / in spite of + существительное или -ing", p: "**despite** = **in spite of** — «несмотря на». После них — **существительное** или **-ing**, не предложение.",
      table: [["although + предложение", "despite + сущ. / -ing"], ["**Although** it rained, …", "**Despite** the rain, …"], ["**Although** she was tired, …", "**Despite being** tired, …"], ["**Although** he studied hard, …", "**In spite of studying** hard, …"]],
      note: "Предложение после despite — только с **the fact that**: Despite **the fact that** it rained…" },
    { k: "C", h: "however — новое предложение", p: "**however** — «однако». Стоит в начале нового предложения или после точки с запятой, **с запятой** после.",
      ex: ["The hotel was expensive. **However**, it was worth it.", "I wanted to go; **however**, I was too busy.", "**But** — разговорно, в середине фразы: It was expensive, **but** it was worth it."] }
  ], mistakes: [["Despite it was cold, we swam.", "Although it was cold, we swam. / Despite the cold, we swam.", "despite — не с предложением."], ["Although the rain, we went out.", "Despite the rain, we went out.", "Существительное → despite."], ["In spite the weather, …", "In spite of the weather, …", "in spite **of**."]] },
  ex: [
   { task: "**although** or **despite**?", items: [
    ["g", "___ it was late, the children weren't tired.", "Although", ["Despite", "In spite of", "However"], "Хотя было поздно, дети не устали.", "Предложение → although."],
    ["g", "___ the traffic, we arrived on time.", "Despite", ["Although", "Even though", "However"], "Несмотря на пробки, мы приехали вовремя.", "Существительное → despite."],
    ["g", "She passed the exam ___ she didn't study much.", "although", ["despite", "in spite of", "however"], "Она сдала экзамен, хотя мало занималась.", "although + предложение."],
    ["g", "___ feeling ill, he went to work.", "Despite", ["Although", "Even though", "However"], "Несмотря на плохое самочувствие, он пошёл на работу.", "despite + -ing."],
    ["g", "We enjoyed the trip ___ the bad weather.", "in spite of", ["although", "even though", "however"], "Нам понравилась поездка, несмотря на плохую погоду.", "in spite of + сущ."],
    ["g", "___ he's rich, he isn't happy.", "Even though", ["Despite", "In spite of", "However"], "Хотя он богат, он не счастлив.", "even though + предложение."],
    ["g", "___ the fact that it was expensive, they bought it.", "Despite", ["Although", "Even though", "However"], "Несмотря на то что это было дорого, они купили.", "despite the fact that."],
    ["g", "I couldn't sleep ___ I was very tired.", "although", ["despite", "in spite of", "however"], "Я не мог уснуть, хотя очень устал.", "although."],
    ["g", "___ having a map, we got lost.", "Despite", ["Although", "Even though", "However"], "Несмотря на карту, мы заблудились.", "despite + -ing."],
    ["g", "He's very fit ___ his age.", "despite", ["although", "even though", "however"], "Он в отличной форме, несмотря на возраст.", "despite + сущ."]
   ]},
   { task: "**however / but / though**", items: [
    ["g", "The film was long. ___, it was never boring.", "However", ["Although", "Despite", "Even though"], "Фильм был длинным. Однако ни разу не скучным.", "Новое предложение → However."],
    ["g", "I'd love to come, ___ I have to work.", "but", ["however", "despite", "although of"], "Я бы с радостью пришёл, но мне нужно работать.", "but — в середине."],
    ["g", "The food was great. The service was slow, ___.", "though", ["despite", "although", "in spite"], "Еда была отличной. Обслуживание, правда, медленное.", "though в конце = правда/впрочем."],
    ["g", "He studied hard; ___, he failed the test.", "however", ["although", "despite", "even though"], "Он усердно занимался; однако провалил тест.", "; however,"],
    ["g", "We tried our best. ___, we lost the match.", "However", ["Although", "In spite", "Even though"], "Мы старались. Однако проиграли.", "However,"],
    ["g", "___ I don't usually like horror films, I enjoyed this one.", "Although", ["However", "Despite", "In spite of"], "Хотя я обычно не люблю ужастики, этот понравился.", "Although + предложение."],
    ["g", "It's a small flat. It's very comfortable, ___.", "though", ["despite", "however of", "although of"], "Квартира маленькая. Зато очень уютная.", "though в конце."],
    ["g", "She was nervous ___ she had practised a lot.", "even though", ["despite", "however", "in spite of"], "Она нервничала, хотя много практиковалась.", "even though."],
    ["g", "The plan is good. ___, it will be expensive.", "However", ["Although", "Despite", "Even"], "План хороший. Однако обойдётся дорого.", "However,"],
    ["g", "I'll go, ___ I don't really want to.", "though", ["despite", "however", "in spite of"], "Я пойду, хотя мне не очень хочется.", "though = although."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "Despite it was cold, we went swimming.", "Although it was cold, we went swimming.", ["Despite of it was cold, we went swimming.", "In spite it was cold, we went swimming.", "Despite it cold, we went swimming."], "Хотя было холодно, мы пошли купаться.", "Предложение → although."],
    ["e", "Although the rain, the match continued.", "Despite the rain, the match continued.", ["Although of the rain, the match continued.", "Even though the rain, the match continued.", "However the rain, the match continued."], "Несмотря на дождь, матч продолжился.", "Существительное → despite."],
    ["e", "In spite the noise, I fell asleep.", "In spite of the noise, I fell asleep.", ["In spite of noise it, I fell asleep.", "Despite of the noise, I fell asleep.", "Although the noise, I fell asleep."], "Несмотря на шум, я уснул.", "in spite of."],
    ["e", "Despite of being tired, she kept working.", "Despite being tired, she kept working.", ["Despite she was tired, she kept working.", "Despite to be tired, she kept working.", "Although being tired, she kept working."], "Несмотря на усталость, она продолжала работать.", "despite (без of)."],
    ["e", "The hotel was expensive, however it was worth it.", "The hotel was expensive. However, it was worth it.", ["The hotel was expensive, despite it was worth it.", "The hotel was expensive, however of it was worth it.", "The hotel was expensive although, it was worth it."], "Отель был дорогим. Однако он того стоил.", "However — новое предложение."],
    ["e", "Even though of the problems, we finished on time.", "Despite the problems, we finished on time.", ["Even though the problems, we finished on time.", "Although of the problems, we finished on time.", "In spite the problems, we finished on time."], "Несмотря на проблемы, мы закончили вовремя.", "despite + сущ."],
    ["e", "Although he studied, but he failed.", "Although he studied, he failed.", ["Although he studied, however he failed.", "Despite he studied, he failed.", "Even though he studied, but he failed."], "Хотя он занимался, он провалился.", "although + but — не вместе."],
    ["e", "She went to school in spite of she was ill.", "She went to school although she was ill.", ["She went to school in spite she was ill.", "She went to school despite of she was ill.", "She went to school even though of being ill."], "Она пошла в школу, хотя болела.", "Предложение → although."],
    ["e", "Despite the fact it was late, they stayed.", "Despite the fact that it was late, they stayed.", ["Despite the fact of it was late, they stayed.", "Despite of the fact that it was late, they stayed.", "Although the fact that it was late, they stayed."], "Несмотря на то что было поздно, они остались.", "the fact that."],
    ["e", "I like the job. However the pay is low.", "I like the job. However, the pay is low.", ["I like the job however, the pay is low.", "I like the job. Although, the pay is low.", "I like the job. Despite, the pay is low."], "Работа нравится. Однако платят мало.", "However, — с запятой."]
   ]}
  ]},
{ n: 83, floor: 13, title: "because / so / so that / in order to / as / since", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "Причина: because, as, since; because of", p: "**because / as / since + предложение** — потому что. **because of / due to + существительное**.",
      table: [["+ предложение", "+ существительное"], ["**because** it was raining", "**because of** the rain"], ["**as / since** it was late", "**due to** the delay"]],
      ex: ["**As** it was Sunday, the shops were closed.", "**Since** you're here, can you help me?", "The flight was cancelled **because of** the storm."] },
    { k: "B", h: "Следствие: so", p: "**so** — поэтому (результат).",
      ex: ["It was raining, **so** we stayed at home.", "I was hungry, **so** I made a sandwich.", "She missed the bus, **so** she was late."] },
    { k: "C", h: "Цель: so that / in order to / to", p: "**so that + подлежащее + can/could/will/would** — чтобы. **(in order) to + глагол** — когда подлежащее то же.",
      table: [["to / in order to", "so that"], ["I left early **to catch** the bus.", "I left early **so that I could** catch the bus."], ["—", "Speak loudly **so that everyone can** hear you. (подлежащее другое)"]],
      note: "Не путайте **so** (поэтому) и **so that** (чтобы)." }
  ], mistakes: [["Because of it was late, we left.", "Because it was late, we left. / Because of the time, we left.", "because of + существительное."], ["I studied so that pass the exam.", "I studied so that I could pass the exam. / I studied to pass the exam.", "so that + подлежащее."], ["He was tired, because he went to bed.", "He was tired, so he went to bed.", "Результат → so."]] },
  ex: [
   { task: "**because / because of / so**", items: [
    ["g", "We stayed inside ___ it was too cold.", "because", ["because of", "so", "so that"], "Мы остались дома, потому что было слишком холодно.", "because + предложение."],
    ["g", "The match was cancelled ___ the snow.", "because of", ["because", "so", "since"], "Матч отменили из-за снега.", "because of + сущ."],
    ["g", "I was tired, ___ I went to bed early.", "so", ["because", "because of", "so that"], "Я устал, поэтому рано лёг.", "Результат → so."],
    ["g", "___ it was my birthday, my friends took me out.", "As", ["Because of", "So", "So that"], "Поскольку был мой день рождения, друзья меня пригласили.", "as + предложение."],
    ["g", "She was late ___ the traffic.", "because of", ["because", "so", "as"], "Она опоздала из-за пробок.", "because of."],
    ["g", "He didn't study, ___ he failed.", "so", ["because", "because of", "as"], "Он не занимался, поэтому провалился.", "so."],
    ["g", "___ you're going to the shop, can you buy some milk?", "Since", ["Because of", "So", "So that"], "Раз ты идёшь в магазин, купи молока.", "since = раз уж."],
    ["g", "The flight was delayed ___ bad weather.", "due to", ["because", "so", "as"], "Рейс задержали из-за плохой погоды.", "due to + сущ."],
    ["g", "I love this café ___ the coffee is amazing.", "because", ["because of", "so", "so that"], "Обожаю это кафе, потому что кофе потрясающий.", "because."],
    ["g", "It was a holiday, ___ the banks were closed.", "so", ["because", "because of", "so that"], "Был праздник, поэтому банки не работали.", "so."]
   ]},
   { task: "Purpose: **to / in order to / so that**", items: [
    ["g", "I'm saving money ___ buy a car.", "to", ["so that", "for", "because"], "Я коплю на машину.", "to + глагол."],
    ["g", "Speak clearly ___ everyone can understand you.", "so that", ["to", "in order to", "for"], "Говори чётко, чтобы все тебя понимали.", "Другое подлежащее → so that."],
    ["g", "She left early ___ miss the traffic.", "in order not to", ["so that not", "for not", "so as no to"], "Она выехала рано, чтобы не попасть в пробку.", "in order not to."],
    ["g", "I wrote it down so that I ___ forget it.", "wouldn't", ["don't", "not", "wouldn't to"], "Я записал, чтобы не забыть.", "so that I wouldn't."],
    ["g", "We whispered so that we ___ wake the baby.", "wouldn't", ["didn't", "not", "won't to"], "Мы шептались, чтобы не разбудить малыша.", "so that we wouldn't."],
    ["g", "He trains every day ___ be the best.", "in order to", ["so that", "for", "so"], "Он тренируется каждый день, чтобы стать лучшим.", "in order to."],
    ["g", "Turn on the light so that I ___ see.", "can", ["to", "could to", "for"], "Включи свет, чтобы я мог видеть.", "so that I can."],
    ["g", "I'll give you my number so that you ___ call me.", "can", ["to", "will to", "for"], "Дам тебе свой номер, чтобы ты мог позвонить.", "so that you can."],
    ["g", "They moved to the city ___ find work.", "to", ["so that", "for", "because"], "Они переехали в город, чтобы найти работу.", "to."],
    ["g", "She practises every day ___ she can win the competition.", "so that", ["to", "in order to", "for"], "Она тренируется каждый день, чтобы выиграть конкурс.", "so that + she can."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "Because of it was raining, we stayed home.", "Because it was raining, we stayed home.", ["Because of raining it was, we stayed home.", "So it was raining, we stayed home.", "Due to it was raining, we stayed home."], "Из-за дождя мы остались дома.", "Предложение → because."],
    ["e", "He was hungry, because he made a sandwich.", "He was hungry, so he made a sandwich.", ["He was hungry, because of he made a sandwich.", "He was hungry, so that he made a sandwich.", "He was hungry, due to he made a sandwich."], "Он проголодался и сделал бутерброд.", "Результат → so."],
    ["e", "I studied hard so that pass the exam.", "I studied hard so that I could pass the exam.", ["I studied hard so that to pass the exam.", "I studied hard so pass the exam.", "I studied hard for pass the exam."], "Я усердно занимался, чтобы сдать экзамен.", "so that + подлежащее + could."],
    ["e", "The game was stopped because the rain.", "The game was stopped because of the rain.", ["The game was stopped because of it rained.", "The game was stopped so the rain.", "The game was stopped due the rain."], "Игру остановили из-за дождя.", "because of + сущ."],
    ["e", "Speak louder for everyone can hear.", "Speak louder so that everyone can hear.", ["Speak louder to everyone can hear.", "Speak louder in order everyone can hear.", "Speak louder so everyone can to hear."], "Говори громче, чтобы все слышали.", "so that."],
    ["e", "I left early for to catch the train.", "I left early to catch the train.", ["I left early for catch the train.", "I left early so that catch the train.", "I left early for catching the train."], "Я вышел рано, чтобы успеть на поезд.", "to + глагол."],
    ["e", "As of it was late, we took a taxi.", "As it was late, we took a taxi.", ["Because of it was late, we took a taxi.", "As it late, we took a taxi.", "Since of it was late, we took a taxi."], "Так как было поздно, мы взяли такси.", "as + предложение."],
    ["e", "She wore a coat so that she wouldn't to be cold.", "She wore a coat so that she wouldn't be cold.", ["She wore a coat so that she not be cold.", "She wore a coat for not be cold.", "She wore a coat so that she wasn't to be cold."], "Она надела пальто, чтобы не замёрзнуть.", "wouldn't + be."],
    ["e", "It was late so that we went home.", "It was late, so we went home.", ["It was late, because we went home.", "It was late, so that we went home.", "It was late, due to we went home."], "Было поздно, поэтому мы пошли домой.", "Результат → so (не so that)."],
    ["e", "Due to the bus was late, I missed the class.", "Because the bus was late, I missed the class.", ["Due to the bus late, I missed the class.", "Because of the bus was late, I missed the class.", "So the bus was late, I missed the class."], "Из-за опоздания автобуса я пропустил урок.", "Предложение → because."]
   ]}
  ]}
);
