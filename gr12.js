// Part 12 · Adjectives & adverbs (Units 70–78). Original explanations and examples.
window.GRAMMAR.units.push(
{ n: 70, floor: 12, title: "Adjectives ending in -ed and -ing (bored / boring)", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "-ed — что я чувствую, -ing — какое оно", p: "**-ed** описывает чувства человека. **-ing** описывает то, что эти чувства вызывает.",
      table: [["-ed (я чувствую)", "-ing (оно вызывает)"], ["I'm **bored**. (мне скучно)", "The film is **boring**. (скучный)"], ["She's **interested** in art.", "Art is **interesting**."], ["We were **tired**.", "It was a **tiring** day."], ["He felt **embarrassed**.", "It was an **embarrassing** moment."]] },
    { k: "B", h: "Частые пары", p: "bored/boring, interested/interesting, excited/exciting, tired/tiring, surprised/surprising, worried/worrying, confused/confusing, disappointed/disappointing, amazed/amazing, frightened/frightening, relaxed/relaxing.",
      ex: ["The news was **surprising**. We were all **surprised**.", "This map is **confusing**. I'm **confused**.", "What an **amazing** view! I'm **amazed**."] },
    { k: "C", h: "Человек тоже бывает -ing", p: "**He is boring** = он скучный человек (с ним скучно). **He is bored** = ему скучно.",
      note: "Русское «мне скучно» → I'm **bored** (не _I'm boring_ — это «я скучный»)." }
  ], mistakes: [["I'm boring in this lesson.", "I'm bored in this lesson.", "Чувство → -ed."], ["The film was very interested.", "The film was very interesting.", "Свойство фильма → -ing."], ["I'm interesting in music.", "I'm interested in music.", "interested in."]] },
  ex: [
   { task: "**-ed** or **-ing**?", items: [
    ["g", "This lesson is so ___. I want to sleep.", "boring", ["bored", "bore", "boredom"], "Этот урок такой скучный. Хочется спать.", "Свойство урока → -ing."],
    ["g", "I'm ___ in history. It's my favourite subject.", "interested", ["interesting", "interest", "interestedly"], "Мне интересна история.", "interested in."],
    ["g", "It was a very ___ day. I need to rest.", "tiring", ["tired", "tire", "tiredly"], "Был очень утомительный день.", "-ing — какой день."],
    ["g", "We were ___ to hear the good news.", "excited", ["exciting", "excite", "excitement"], "Мы были в восторге от хорошей новости.", "Наши чувства → -ed."],
    ["g", "The results were ___. Nobody expected them.", "surprising", ["surprised", "surprise", "surprisingly"], "Результаты были неожиданными.", "Свойство → -ing."],
    ["g", "I'm ___ about my exam tomorrow.", "worried", ["worrying", "worry", "worriedly"], "Я волнуюсь из-за завтрашнего экзамена.", "Чувство → -ed."],
    ["g", "These instructions are really ___. I don't understand them.", "confusing", ["confused", "confuse", "confusion"], "Эта инструкция очень запутанная.", "-ing."],
    ["g", "She was ___ with her test result. She expected more.", "disappointed", ["disappointing", "disappoint", "disappointment"], "Она была разочарована результатом.", "-ed."],
    ["g", "The horror film was very ___.", "frightening", ["frightened", "fright", "frighten"], "Фильм ужасов был очень страшным.", "-ing."],
    ["g", "A hot bath is very ___ after a long day.", "relaxing", ["relaxed", "relax", "relaxation"], "Горячая ванна очень расслабляет.", "-ing."]
   ]},
   { task: "Feelings and things", items: [
    ["g", "I'm ___. Let's do something fun!", "bored", ["boring", "bore", "boredly"], "Мне скучно. Давай займёмся чем-нибудь интересным!", "Мне скучно → bored."],
    ["g", "The view from the mountain was ___!", "amazing", ["amazed", "amaze", "amazement"], "Вид с горы был потрясающим!", "-ing."],
    ["g", "He felt ___ when he forgot her name.", "embarrassed", ["embarrassing", "embarrass", "embarrassment"], "Ему было неловко, когда он забыл её имя.", "-ed."],
    ["g", "The situation is very ___. We need to act fast.", "worrying", ["worried", "worry", "worriedly"], "Ситуация тревожная.", "-ing."],
    ["g", "I was ___ when the lights suddenly went off.", "frightened", ["frightening", "fright", "frighten"], "Я испугался, когда вдруг погас свет.", "-ed."],
    ["g", "The ending of the book was ___.", "disappointing", ["disappointed", "disappoint", "disappointment"], "Концовка книги разочаровала.", "-ing."],
    ["g", "Are you ___ in joining our club?", "interested", ["interesting", "interest", "interestingly"], "Хочешь вступить в наш клуб?", "interested in."],
    ["g", "Our holiday was really ___. We did nothing all week.", "relaxing", ["relaxed", "relax", "relaxedly"], "Отпуск был очень расслабляющим.", "-ing."],
    ["g", "Everyone was ___ by the size of the stadium.", "amazed", ["amazing", "amaze", "amazement"], "Все были поражены размером стадиона.", "-ed."],
    ["g", "He talks about football all the time. He's so ___!", "boring", ["bored", "bore", "boredom"], "Он всё время говорит о футболе. Такой скучный!", "Человек скучный → boring."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "I'm boring. Let's go out.", "I'm bored. Let's go out.", ["I'm bore. Let's go out.", "I bored. Let's go out.", "I'm boredom. Let's go out."], "Мне скучно. Пойдём погуляем.", "Мне скучно → bored."],
    ["e", "The book was very interested.", "The book was very interesting.", ["The book was very interest.", "The book was very interestingly.", "The book very interesting."], "Книга была очень интересной.", "-ing."],
    ["e", "I'm interesting in photography.", "I'm interested in photography.", ["I'm interested on photography.", "I'm interest in photography.", "I interested in photography."], "Я увлекаюсь фотографией.", "interested in."],
    ["e", "We were very exciting about the trip.", "We were very excited about the trip.", ["We were very excite about the trip.", "We very excited about the trip.", "We were very excitement about the trip."], "Мы были в восторге от поездки.", "-ed."],
    ["e", "That was a tired journey.", "That was a tiring journey.", ["That was a tire journey.", "That was tiring journey.", "That was a tiredly journey."], "Это была утомительная поездка.", "-ing."],
    ["e", "She was surprising to see me.", "She was surprised to see me.", ["She surprised to see me.", "She was surprise to see me.", "She was surprisingly to see me."], "Она удивилась, увидев меня.", "-ed."],
    ["e", "The instructions were confused.", "The instructions were confusing.", ["The instructions were confuse.", "The instructions confusing.", "The instructions were confusion."], "Инструкция была запутанной.", "-ing."],
    ["e", "I felt very embarrassing.", "I felt very embarrassed.", ["I felt very embarrass.", "I very embarrassed.", "I felt very embarrassment."], "Мне было очень неловко.", "-ed."],
    ["e", "The match was very excited.", "The match was very exciting.", ["The match was very excite.", "The match very exciting.", "The match was very excitedly."], "Матч был очень захватывающим.", "-ing."],
    ["e", "My parents were worrying about me.", "My parents were worried about me.", ["My parents worried about me were.", "My parents were worry about me.", "My parents were worriedly about me."], "Родители волновались за меня.", "Чувство → worried."]
   ]}
  ]},
{ n: 71, floor: 12, title: "Adjectives: order and position (a nice new red car)", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "Прилагательное — перед существительным или после be", p: "Прилагательное стоит **перед** существительным или **после** глаголов be, look, feel, seem, taste, sound, smell, get.",
      ex: ["a **beautiful** house", "The house is **beautiful**.", "You **look tired**.", "This soup **tastes great**.", "It's **getting dark**."] },
    { k: "B", h: "Порядок нескольких прилагательных", p: "Сначала **мнение**, потом **факты**: размер → возраст → форма → цвет → происхождение → материал → назначение.",
      table: [["мнение", "размер", "возраст", "цвет", "происхождение", "материал", "+ сущ."], ["a lovely", "small", "old", "—", "—", "wooden", "box"], ["a beautiful", "—", "new", "red", "Italian", "—", "car"], ["—", "big", "—", "black", "—", "leather", "boots"]] },
    { k: "C", h: "Не путайте с наречиями", p: "После look/feel/sound/taste/smell — **прилагательное** (не -ly): You look **happy** (не _happily_). Это про состояние, не про действие.",
      note: "Цветов несколько — and: a **black and white** photo." }
  ], mistakes: [["a red beautiful car", "a beautiful red car", "Мнение — раньше цвета."], ["You look happily.", "You look happy.", "look + прилагательное."], ["a leather black bag", "a black leather bag", "Цвет — перед материалом."]] },
  ex: [
   { task: "Put the adjectives in the right order", items: [
    ["g", "She bought a ___ dress. (red / beautiful)", "beautiful red", ["red beautiful", "beautiful and red a", "red and beautiful the"], "Она купила красивое красное платье.", "Мнение → цвет."],
    ["g", "We live in a ___ house. (old / big)", "big old", ["old big", "big and old a", "old and big the"], "Мы живём в большом старом доме.", "Размер → возраст."],
    ["g", "He has a ___ car. (German / black)", "black German", ["German black", "black and German a", "Germany black"], "У него чёрная немецкая машина.", "Цвет → происхождение."],
    ["g", "I'd like a ___ table. (wooden / round)", "round wooden", ["wooden round", "round and wood", "wood round"], "Мне бы круглый деревянный стол.", "Форма → материал."],
    ["g", "What a ___ day! (lovely / sunny)", "lovely sunny", ["sunny lovely", "lovely and sun", "sunny and love"], "Какой чудесный солнечный день!", "Мнение → факт."],
    ["g", "She wears ___ boots. (leather / brown)", "brown leather", ["leather brown", "brown and leather the", "leathers brown"], "Она носит коричневые кожаные сапоги.", "Цвет → материал."],
    ["g", "They have a ___ cat. (little / grey / cute)", "cute little grey", ["little cute grey", "grey cute little", "cute grey little"], "У них милая маленькая серая кошка.", "Мнение → размер → цвет."],
    ["g", "I found an ___ coin. (gold / ancient)", "ancient gold", ["gold ancient", "ancient and golds", "golden ancient the"], "Я нашёл древнюю золотую монету.", "Возраст → материал."],
    ["g", "He's a ___ man. (tall / young / handsome)", "handsome tall young", ["tall young handsome", "young tall handsome", "tall handsome young"], "Он красивый высокий молодой человек.", "Мнение → размер → возраст."],
    ["g", "We ate at a ___ restaurant. (Italian / small / nice)", "nice small Italian", ["small nice Italian", "Italian nice small", "nice Italian small"], "Мы ужинали в милом маленьком итальянском ресторане.", "Мнение → размер → происхождение."]
   ]},
   { task: "Adjective after **look / feel / taste…**", items: [
    ["g", "You look ___. Did you sleep badly? (tired)", "tired", ["tiredly", "tire", "tiring"], "Ты выглядишь уставшим.", "look + прилагательное."],
    ["g", "This cake tastes ___! (delicious)", "delicious", ["deliciously", "delicious taste", "deliciousness"], "Этот торт очень вкусный!", "taste + прилагательное."],
    ["g", "I feel ___ today. (great)", "great", ["greatly", "greatness", "with great"], "Сегодня я прекрасно себя чувствую.", "feel + прилагательное."],
    ["g", "That music sounds ___. (beautiful)", "beautiful", ["beautifully", "beauty", "beautify"], "Эта музыка звучит красиво.", "sound + прилагательное."],
    ["g", "The flowers smell ___. (sweet)", "sweet", ["sweetly", "sweetness", "sweeten"], "Цветы пахнут сладко.", "smell + прилагательное."],
    ["g", "It's getting ___. Let's go home. (dark)", "dark", ["darkly", "darkness", "darken"], "Темнеет. Пойдём домой.", "get + прилагательное."],
    ["g", "She seems ___ with her new job. (happy)", "happy", ["happily", "happiness", "happier than"], "Кажется, она довольна новой работой.", "seem + прилагательное."],
    ["g", "Your idea sounds ___. (interesting)", "interesting", ["interestingly", "interested", "interest"], "Твоя идея звучит интересно.", "sound + прилагательное."],
    ["g", "Don't get ___. I was only joking. (angry)", "angry", ["angrily", "anger", "angered"], "Не злись. Я просто пошутил.", "get angry."],
    ["g", "The room was ___ after the party. (dirty)", "dirty", ["dirtily", "dirt", "dirtier than"], "После вечеринки в комнате было грязно.", "be + прилагательное."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "She has a red beautiful bag.", "She has a beautiful red bag.", ["She has a red and beautiful bag the.", "She has beautiful a red bag.", "She has a beautifully red bag."], "У неё красивая красная сумка.", "Мнение → цвет."],
    ["e", "You look happily today.", "You look happy today.", ["You look happiness today.", "You happily look today.", "You looks happy today."], "Ты сегодня выглядишь счастливым.", "look + прилагательное."],
    ["e", "I bought a leather black jacket.", "I bought a black leather jacket.", ["I bought a black and leather jacket.", "I bought a leather jacket black.", "I bought black a leather jacket."], "Я купил чёрную кожаную куртку.", "Цвет → материал."],
    ["e", "This soup tastes badly.", "This soup tastes bad.", ["This soup taste bad.", "This soup tastes badness.", "This soup bad tastes."], "Этот суп невкусный.", "taste + прилагательное."],
    ["e", "We stayed in an old lovely hotel.", "We stayed in a lovely old hotel.", ["We stayed in an lovely old hotel.", "We stayed in a old lovely hotel.", "We stayed in lovely an old hotel."], "Мы жили в милой старой гостинице.", "Мнение → возраст."],
    ["e", "I feel terribly about what happened.", "I feel terrible about what happened.", ["I feel terror about what happened.", "I terribly feel about what happened.", "I feels terrible about what happened."], "Мне ужасно стыдно за случившееся.", "feel + прилагательное."],
    ["e", "He drives a Japanese small car.", "He drives a small Japanese car.", ["He drives a small car Japanese.", "He drives Japanese a small car.", "He drives a small and Japanese car the."], "Он ездит на маленькой японской машине.", "Размер → происхождение."],
    ["e", "The weather is getting coldly.", "The weather is getting cold.", ["The weather gets coldly.", "The weather is getting coldness.", "The weather is get cold."], "Становится холодно.", "get + прилагательное."],
    ["e", "It's a plastic big box.", "It's a big plastic box.", ["It's a big and plastic box the.", "It's plastic a big box.", "It's a box big plastic."], "Это большая пластиковая коробка.", "Размер → материал."],
    ["e", "Your plan sounds perfectly.", "Your plan sounds perfect.", ["Your plan sound perfect.", "Your plan sounds perfection.", "Your plan perfectly sounds."], "Твой план звучит идеально.", "sound + прилагательное."]
   ]}
  ]},
{ n: 72, floor: 12, title: "Adverbs: quickly, well, hard (adjective or adverb?)", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "Наречие описывает действие", p: "Прилагательное описывает **предмет** (a quick car), наречие — **как делается действие** (He drives quickly). Обычно **прилагательное + -ly**.",
      table: [["Прилагательное", "Наречие"], ["slow", "slowly"], ["careful", "carefully"], ["easy", "easily (y → ily)"], ["terrible", "terribly (-le → -ly)"], ["quiet", "quietly"]],
      ex: ["She's a **careful** driver. → She drives **carefully**.", "The test was **easy**. → I passed it **easily**."] },
    { k: "B", h: "Исключения: good → well, hard, fast, late", p: "**good → well**. **hard, fast, late, early** — одинаковые формы. **hardly** = почти не, **lately** = в последнее время — другие значения!",
      table: [["Прилагательное", "Наречие", "Внимание"], ["good", "**well**", "She speaks English **well**."], ["hard", "**hard**", "He works **hard**. (hardly = почти не)"], ["fast", "**fast**", "Don't drive so **fast**."], ["late", "**late**", "I got up **late**. (lately = в последнее время)"]] },
    { k: "C", h: "Место наречия образа действия", p: "Обычно **после глагола и дополнения**: She speaks English **fluently** (не _speaks fluently English_).",
      note: "well — ещё и прилагательное «здоров»: I don't feel **well**." }
  ], mistakes: [["She speaks English very good.", "She speaks English very well.", "good → well."], ["He drives very careful.", "He drives very carefully.", "Действие → -ly."], ["I work hardly every day.", "I work hard every day.", "hardly = почти не."]] },
  ex: [
   { task: "Adjective or adverb?", items: [
    ["g", "Please drive ___. The road is icy. (careful)", "carefully", ["careful", "carefulness", "more careful"], "Езжай осторожно. Дорога скользкая.", "Как ехать → наречие."],
    ["g", "She's a ___ singer. (good)", "good", ["well", "goodly", "best"], "Она хорошая певица.", "Описывает человека → прилагательное."],
    ["g", "She sings ___. (good)", "well", ["good", "goodly", "best"], "Она хорошо поёт.", "good → well."],
    ["g", "The children were playing ___ in their room. (quiet)", "quietly", ["quiet", "quietness", "quieter"], "Дети тихо играли в своей комнате.", "-ly."],
    ["g", "I answered all the questions ___. (easy)", "easily", ["easy", "easyly", "easier"], "Я легко ответил на все вопросы.", "easy → easily."],
    ["g", "He plays the guitar ___. (terrible)", "terribly", ["terrible", "terriblely", "terribler"], "Он ужасно играет на гитаре.", "-le → -ly."],
    ["g", "The bus was ___ this morning. (late)", "late", ["lately", "later than", "latest"], "Утром автобус опоздал.", "be late — прилагательное."],
    ["g", "Don't speak so ___. I can't understand you. (fast)", "fast", ["fastly", "faster than", "fastest"], "Не говори так быстро.", "fast — без -ly."],
    ["g", "She works very ___. She deserves a holiday. (hard)", "hard", ["hardly", "harder than", "hardness"], "Она очень много работает.", "hard — без -ly."],
    ["g", "I can ___ hear you. Speak up! (= almost not)", "hardly", ["hard", "harder", "hardness"], "Я тебя почти не слышу. Говори громче!", "hardly = почти не."]
   ]},
   { task: "Word order and special forms", items: [
    ["g", "He speaks ___. (fluently / three languages)", "three languages fluently", ["fluently three languages", "three fluently languages", "languages three fluently"], "Он свободно говорит на трёх языках.", "Наречие после дополнения."],
    ["g", "I haven't seen him ___. (= recently)", "lately", ["late", "later", "latest"], "Я его давно не видел.", "lately = в последнее время."],
    ["g", "She closed the door ___. (slow)", "slowly", ["slow", "slowness", "slower than"], "Она медленно закрыла дверь.", "-ly."],
    ["g", "I don't feel ___ today. I think I'm ill.", "well", ["good health", "goodly", "nice"], "Мне сегодня нехорошо. Кажется, заболел.", "well = здоров."],
    ["g", "The team played ___ and won 3–0. (brilliant)", "brilliantly", ["brilliant", "brilliance", "more brilliant"], "Команда сыграла блестяще и выиграла 3:0.", "-ly."],
    ["g", "She explained the rule very ___. (clear)", "clearly", ["clear", "clearness", "clearer"], "Она очень понятно объяснила правило.", "-ly."],
    ["g", "He ran ___ to catch the bus. (fast)", "fast", ["fastly", "faster than", "fastest"], "Он быстро побежал на автобус.", "fast."],
    ["g", "We arrived ___, so we missed the start. (late)", "late", ["lately", "lates", "later than"], "Мы приехали поздно и пропустили начало.", "arrive late."],
    ["g", "The exam was ___ difficult. (extreme)", "extremely", ["extreme", "extremity", "more extreme"], "Экзамен был крайне сложным.", "Наречие + прилагательное."],
    ["g", "Your English is very ___. (good)", "good", ["well", "goodly", "best"], "Твой английский очень хороший.", "English — существительное → прилагательное."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "She speaks English very good.", "She speaks English very well.", ["She speaks very good English well.", "She speaks very well English.", "She speak English very well."], "Она очень хорошо говорит по-английски.", "good → well."],
    ["e", "He drives very careful.", "He drives very carefully.", ["He drives very carefulness.", "He very carefully drives.", "He drive very carefully."], "Он ездит очень осторожно.", "-ly."],
    ["e", "I work hardly every day.", "I work hard every day.", ["I hard work every day.", "I work hardness every day.", "I works hard every day."], "Я усердно работаю каждый день.", "hard."],
    ["e", "She speaks fluently Spanish.", "She speaks Spanish fluently.", ["She fluent speaks Spanish.", "She speaks Spanish fluent.", "She fluently Spanish speaks."], "Она свободно говорит по-испански.", "Наречие после дополнения."],
    ["e", "He runs very fastly.", "He runs very fast.", ["He runs very faster.", "He very fast runs.", "He run very fast."], "Он очень быстро бегает.", "fast — без -ly."],
    ["e", "I passed the test easy.", "I passed the test easily.", ["I easy passed the test.", "I passed the test easyly.", "I passed easily the test."], "Я легко сдал тест.", "easy → easily."],
    ["e", "The baby is sleeping quiet.", "The baby is sleeping quietly.", ["The baby is quiet sleeping.", "The baby is sleeping quietness.", "The baby quietly is sleeping."], "Малыш тихо спит.", "-ly."],
    ["e", "I've been very busy lately and I got up lately today.", "I've been very busy lately and I got up late today.", ["I've been very busy late and I got up late today.", "I've been very busy lately and I got up later than today.", "I've been very busy late and I got up lately today."], "Я очень занят в последнее время и сегодня встал поздно.", "late = поздно; lately = в последнее время."],
    ["e", "She dances beautiful.", "She dances beautifully.", ["She beautiful dances.", "She dances beauty.", "She dance beautifully."], "Она красиво танцует.", "-ly."],
    ["e", "He did good in the exam.", "He did well in the exam.", ["He did goodly in the exam.", "He did best in the exam well.", "He well did in the exam."], "Он хорошо сдал экзамен.", "good → well."]
   ]}
  ]},
{ n: 73, floor: 12, title: "Comparatives: bigger / more expensive / better", cefr: "A2",
  rule: { sections: [
    { k: "A", h: "Короткие прилагательные: -er", p: "Один слог (и двусложные на -y): **-er + than**.",
      table: [["Прилагательное", "Сравнительная", "Правило"], ["old", "older", "+ -er"], ["nice", "nicer", "+ -r"], ["big", "bigger", "удвоение"], ["easy", "easier", "y → ier"], ["happy", "happier", "y → ier"]],
      ex: ["My brother is **older than** me.", "Today is **colder than** yesterday."] },
    { k: "B", h: "Длинные прилагательные: more", p: "Два слога и больше (кроме -y): **more + прилагательное + than**.",
      ex: ["This phone is **more expensive than** that one.", "Maths is **more difficult than** English for me.", "Is Astana **more modern than** Almaty?"],
      note: "Меньше: **less** expensive / **less** interesting." },
    { k: "C", h: "Неправильные и усиление", p: "**good → better, bad → worse, far → farther/further**. Усиление: **much / a lot / far** better; немного: **a bit / slightly** cheaper.",
      table: [["Прилагательное", "Сравнительная"], ["good", "better"], ["bad", "worse"], ["far", "farther / further"]],
      ex: ["Your English is **much better** now.", "This hotel is **a bit cheaper**.", "**The** sooner, **the better**. (чем раньше, тем лучше)"] }
  ], mistakes: [["She is more tall than me.", "She is taller than me.", "Короткое → -er."], ["This is more better.", "This is better.", "better уже сравнительная."], ["He is older then me.", "He is older than me.", "than, не then."]] },
  ex: [
   { task: "Make the comparative", items: [
    ["g", "An elephant is ___ than a horse. (big)", "bigger", ["more big", "biger", "bigest"], "Слон больше лошади.", "big → bigger."],
    ["g", "This book is ___ than the film. (interesting)", "more interesting", ["interestinger", "most interesting", "more interestinger"], "Книга интереснее фильма.", "Длинное → more."],
    ["g", "My sister is two years ___ than me. (old)", "older", ["more old", "oldest", "elder than"], "Сестра на два года старше меня.", "old → older."],
    ["g", "Today is ___ than yesterday. (hot)", "hotter", ["hoter", "more hot", "hottest"], "Сегодня жарче, чем вчера.", "hot → hotter."],
    ["g", "This exercise is ___ than the last one. (easy)", "easier", ["easyer", "more easy", "easiest"], "Это упражнение легче предыдущего.", "easy → easier."],
    ["g", "Your marks are ___ than mine. (good)", "better", ["gooder", "more good", "best"], "Твои оценки лучше моих.", "good → better."],
    ["g", "The weather today is ___ than yesterday. (bad)", "worse", ["badder", "more bad", "worst"], "Сегодня погода хуже, чем вчера.", "bad → worse."],
    ["g", "Cars are ___ than bicycles. (expensive)", "more expensive", ["expensiver", "most expensive", "more expensiver"], "Машины дороже велосипедов.", "more expensive."],
    ["g", "She is ___ than her brother. (happy)", "happier", ["happyer", "more happy", "happiest"], "Она счастливее брата.", "happy → happier."],
    ["g", "Is the bus station ___ than the train station? (far)", "farther", ["farer", "more far", "farthest"], "Автовокзал дальше, чем ж/д вокзал?", "far → farther."]
   ]},
   { task: "**much / a bit / less / the …, the …**", items: [
    ["g", "The new phone is ___ faster than my old one.", "much", ["more", "very", "too"], "Новый телефон намного быстрее старого.", "much + сравнительная."],
    ["g", "This jacket is ___ cheaper. Let's buy it.", "a bit", ["a few", "very", "too much"], "Эта куртка чуть дешевле. Возьмём её.", "a bit + сравнительная."],
    ["g", "This film is ___ interesting than the first one.", "less", ["fewer", "little", "least"], "Этот фильм менее интересный, чем первый.", "less + прилагательное."],
    ["g", "The ___ you practise, the better you get.", "more", ["most", "much", "many"], "Чем больше практикуешься, тем лучше получается.", "the more …, the better."],
    ["g", "Your English is ___ better than last year.", "a lot", ["very", "too", "so"], "Твой английский гораздо лучше, чем в прошлом году.", "a lot + сравнительная."],
    ["g", "I'm ___ than my brother.", "taller", ["more tall", "tallest", "tall than"], "Я выше брата.", "tall → taller."],
    ["g", "Life in the city is ___ than in the village.", "more stressful", ["stressfuller", "most stressful", "more stressfuler"], "Жизнь в городе напряжённее, чем в деревне.", "more stressful."],
    ["g", "The sooner we leave, the ___.", "better", ["best", "good", "more good"], "Чем раньше выйдем, тем лучше.", "the better."],
    ["g", "This road is ___ dangerous than the motorway.", "far more", ["very more", "too more", "more much"], "Эта дорога гораздо опаснее трассы.", "far more = гораздо."],
    ["g", "He's ___ older than me — just two months.", "slightly", ["much", "far", "a lot"], "Он чуть старше меня — всего на два месяца.", "slightly = чуть-чуть."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "She is more tall than her mother.", "She is taller than her mother.", ["She is more taller than her mother.", "She is tallest than her mother.", "She is tall than her mother."], "Она выше своей мамы.", "tall → taller."],
    ["e", "This is more better than that.", "This is better than that.", ["This is more good than that.", "This is gooder than that.", "This is best than that."], "Это лучше, чем то.", "better — без more."],
    ["e", "He is older then me.", "He is older than me.", ["He is more old than me.", "He is oldest than me.", "He is old than me."], "Он старше меня.", "than (не then)."],
    ["e", "Moscow is more big than Aktobe.", "Moscow is bigger than Aktobe.", ["Moscow is biger than Aktobe.", "Moscow is biggest than Aktobe.", "Moscow is more bigger than Aktobe."], "Москва больше Актобе.", "big → bigger."],
    ["e", "The test was easyer than I expected.", "The test was easier than I expected.", ["The test was more easy than I expected.", "The test was easiest than I expected.", "The test was easy than I expected."], "Тест был легче, чем я ожидал.", "easy → easier."],
    ["e", "My cold is badder today.", "My cold is worse today.", ["My cold is more bad today.", "My cold is worst today.", "My cold is baddest today."], "Моя простуда сегодня хуже.", "bad → worse."],
    ["e", "This bag is expensiver than that one.", "This bag is more expensive than that one.", ["This bag is most expensive than that one.", "This bag is more expensiver than that one.", "This bag is expensive than that one."], "Эта сумка дороже той.", "more expensive."],
    ["e", "The more you read, the more good your vocabulary.", "The more you read, the better your vocabulary.", ["The more you read, the best your vocabulary.", "More you read, better your vocabulary.", "The more you read, the gooder your vocabulary."], "Чем больше читаешь, тем лучше словарный запас.", "the better."],
    ["e", "Your room is very bigger than mine.", "Your room is much bigger than mine.", ["Your room is very big than mine.", "Your room is too bigger than mine.", "Your room is more bigger than mine."], "Твоя комната намного больше моей.", "much (не very) + сравнительная."],
    ["e", "She is happyer now.", "She is happier now.", ["She is more happier now.", "She is happiest now.", "She is more happyer now."], "Сейчас она счастливее.", "happy → happier."]
   ]}
  ]},
{ n: 74, floor: 12, title: "Superlatives: the biggest / the most expensive / the best", cefr: "A2",
  rule: { sections: [
    { k: "A", h: "the + -est / the most", p: "Самый: короткие — **the + -est**, длинные — **the most**.",
      table: [["Прилагательное", "Превосходная"], ["tall", "the tallest"], ["big", "the biggest"], ["happy", "the happiest"], ["beautiful", "the most beautiful"], ["good", "**the best**"], ["bad", "**the worst**"], ["far", "the farthest / the furthest"]] },
    { k: "B", h: "in или of после превосходной", p: "**in** + место/группа (in the world, in my class). **of** + период или количество (of the year, of all).",
      ex: ["Everest is **the highest** mountain **in** the world.", "She's **the best** student **in** our class.", "It was **the happiest** day **of** my life.", "This is **the cheapest of** the three."] },
    { k: "C", h: "Present Perfect + ever", p: "**the best … I've ever…** — самый … из всех, что я когда-либо…",
      ex: ["It's **the best** film **I've ever seen**.", "That was **the worst** meal **we've ever had**.", "She's **the funniest** person **I've ever met**."],
      note: "**one of the + превосходная + мн. число**: one of **the best players** in the team." }
  ], mistakes: [["She is the most tall girl.", "She is the tallest girl.", "Короткое → -est."], ["He's the best player of the team.", "He's the best player in the team.", "Группа → in."], ["It's the most good restaurant.", "It's the best restaurant.", "good → the best."]] },
  ex: [
   { task: "Make the superlative", items: [
    ["g", "The cheetah is the ___ animal in the world. (fast)", "fastest", ["most fast", "faster", "fastes"], "Гепард — самое быстрое животное в мире.", "fast → fastest."],
    ["g", "This is the ___ book I've ever read. (interesting)", "most interesting", ["interestingest", "more interesting", "most interestingest"], "Это самая интересная книга, что я читал.", "Длинное → the most."],
    ["g", "Today is the ___ day of the year. (hot)", "hottest", ["hotest", "most hot", "hotter"], "Сегодня самый жаркий день года.", "hot → hottest."],
    ["g", "She's the ___ person I know. (happy)", "happiest", ["happyest", "most happy", "happier"], "Она самый счастливый человек, которого я знаю.", "happy → happiest."],
    ["g", "That was the ___ film I've ever seen. (bad)", "worst", ["baddest", "most bad", "worse"], "Это был худший фильм в моей жизни.", "bad → worst."],
    ["g", "My grandmother makes the ___ cakes. (good)", "best", ["goodest", "most good", "better"], "Бабушка печёт самые вкусные торты.", "good → best."],
    ["g", "It's the ___ hotel in the city. (expensive)", "most expensive", ["expensivest", "more expensive", "most expensivest"], "Это самая дорогая гостиница в городе.", "most expensive."],
    ["g", "Who is the ___ person in your family? (old)", "oldest", ["most old", "older", "eldest of"], "Кто самый старший в твоей семье?", "old → oldest."],
    ["g", "This is the ___ room in the house. (big)", "biggest", ["bigest", "most big", "bigger"], "Это самая большая комната в доме.", "big → biggest."],
    ["g", "Which is the ___ planet from the Sun? (far)", "farthest", ["farest", "most far", "farther"], "Какая планета дальше всех от Солнца?", "far → farthest."]
   ]},
   { task: "**in / of**, **ever**, **one of the…**", items: [
    ["g", "It's the tallest building ___ the country.", "in", ["of", "from", "at"], "Это самое высокое здание в стране.", "in + место."],
    ["g", "It was the best day ___ my life.", "of", ["in", "from", "at"], "Это был лучший день в моей жизни.", "of my life."],
    ["g", "She's the smartest student ___ her class.", "in", ["of", "from", "at"], "Она самая умная ученица в классе.", "in + группа."],
    ["g", "This is the cheapest ___ all the phones here.", "of", ["in", "from", "than"], "Это самый дешёвый из всех телефонов здесь.", "of all."],
    ["g", "It's the most beautiful place I've ___ visited.", "ever", ["never", "already", "yet"], "Это самое красивое место из всех, где я был.", "the most … I've ever."],
    ["g", "He's one of the best ___ in the world.", "players", ["player", "playing", "play"], "Он один из лучших игроков мира.", "one of the + мн. число."],
    ["g", "January is usually the coldest month ___ the year.", "of", ["in", "from", "at"], "Январь обычно самый холодный месяц года.", "of the year."],
    ["g", "That was the funniest joke I've ever ___.", "heard", ["hear", "hearing", "heared"], "Это самая смешная шутка, что я слышал.", "I've ever heard."],
    ["g", "Lake Baikal is the deepest lake ___ the world.", "in", ["of", "from", "at"], "Байкал — самое глубокое озеро в мире.", "in the world."],
    ["g", "It's one of the most ___ cities in Asia.", "beautiful", ["beautifulest", "beauty", "beautifully"], "Это один из красивейших городов Азии.", "the most beautiful."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "She's the most tall girl in the class.", "She's the tallest girl in the class.", ["She's the most tallest girl in the class.", "She's the taller girl in the class.", "She's most tall girl in the class."], "Она самая высокая девочка в классе.", "tall → tallest."],
    ["e", "He's the best player of the team.", "He's the best player in the team.", ["He's the best player from the team.", "He's best player in the team.", "He's the most good player in the team."], "Он лучший игрок команды.", "Группа → in."],
    ["e", "It's the most good pizza in town.", "It's the best pizza in town.", ["It's the goodest pizza in town.", "It's the better pizza in town.", "It's most best pizza in town."], "Это лучшая пицца в городе.", "good → the best."],
    ["e", "It's the bigest shopping centre.", "It's the biggest shopping centre.", ["It's the most big shopping centre.", "It's the bigger shopping centre.", "It's biggest the shopping centre."], "Это самый большой торговый центр.", "big → biggest."],
    ["e", "This is the worse day of my life.", "This is the worst day of my life.", ["This is the baddest day of my life.", "This is the most bad day of my life.", "This is worst day of my life."], "Это худший день в моей жизни.", "bad → the worst."],
    ["e", "She is one of the best student in the school.", "She is one of the best students in the school.", ["She is one of best students in the school.", "She is the one of the best student in the school.", "She is one of the better students in the school."], "Она одна из лучших учениц школы.", "one of the + мн. число."],
    ["e", "It's the most expensivest car.", "It's the most expensive car.", ["It's the expensivest car.", "It's the more expensive car.", "It's most expensive the car."], "Это самая дорогая машина.", "most + expensive (без -est)."],
    ["e", "It's the best film I ever saw.", "It's the best film I've ever seen.", ["It's the best film I've ever saw.", "It's the best film I ever seen.", "It's the best film I have never seen."], "Это лучший фильм, что я видел.", "I've ever seen."],
    ["e", "Who is the happyest person you know?", "Who is the happiest person you know?", ["Who is the most happiest person you know?", "Who is the happier person you know?", "Who is happiest the person you know?"], "Кто самый счастливый человек из твоих знакомых?", "happy → happiest."],
    ["e", "Everest is the highest mountain of the world.", "Everest is the highest mountain in the world.", ["Everest is the most high mountain in the world.", "Everest is highest mountain in world.", "Everest is the higher mountain in the world."], "Эверест — самая высокая гора в мире.", "in the world."]
   ]}
  ]},
{ n: 75, floor: 12, title: "as … as / not as … as / the same as", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "as … as — такой же, как", p: "**as + прилагательное/наречие + as** — равенство.",
      ex: ["My brother is **as tall as** my dad.", "This phone is **as good as** the expensive one.", "Come **as soon as** you can."] },
    { k: "B", h: "not as … as — не такой, как", p: "**not as/so … as** = меньше, чем. Удобно, чтобы мягко сказать «хуже».",
      table: [["not as … as", "= сравнительная"], ["Aktobe **isn't as big as** Almaty.", "Almaty is **bigger than** Aktobe."], ["I'm **not as fast as** you.", "You're **faster than** me."]] },
    { k: "C", h: "the same as / similar to / different from", p: "**the same (+ сущ.) as** — такой же. **similar to** — похожий. **different from** — другой.",
      ex: ["Your phone is **the same as** mine.", "She's **the same age as** me.", "Your bag is **similar to** mine.", "This city is very **different from** my hometown."],
      note: "Количество: **twice as much as**, **three times as big as** — в два/три раза больше." }
  ], mistakes: [["She is as tall like her mother.", "She is as tall as her mother.", "as … as."], ["My bag is the same like yours.", "My bag is the same as yours.", "the same as."], ["He is not so fast than me.", "He is not as fast as me.", "not as … as (не than)."]] },
  ex: [
   { task: "**as … as** / **not as … as**", items: [
    ["g", "My sister is ___ tall ___ me. We're both 165 cm.", "as … as", ["so … that", "as … than", "more … as"], "Сестра такого же роста, как я.", "as … as."],
    ["g", "Trains aren't ___ fast ___ planes.", "as … as", ["so … than", "as … like", "more … as"], "Поезда не такие быстрые, как самолёты.", "not as … as."],
    ["g", "This test wasn't as difficult ___ the last one.", "as", ["than", "like", "that"], "Этот тест был не таким сложным, как прошлый.", "not as … as."],
    ["g", "Come back as soon ___ possible.", "as", ["than", "like", "so"], "Возвращайся как можно скорее.", "as soon as possible."],
    ["g", "I'm not as good at maths ___ my brother.", "as", ["than", "like", "that"], "Я не так хорош в математике, как брат.", "as."],
    ["g", "Her new flat is twice ___ big as the old one.", "as", ["so", "more", "than"], "Её новая квартира вдвое больше старой.", "twice as big as."],
    ["g", "Is your city as cold ___ Astana in winter?", "as", ["than", "like", "so"], "В твоём городе так же холодно зимой, как в Астане?", "as … as."],
    ["g", "He doesn't work ___ hard as his colleagues.", "as", ["more", "than", "like"], "Он работает не так усердно, как коллеги.", "not as … as."],
    ["g", "The film was just as good ___ the book.", "as", ["than", "like", "that"], "Фильм был так же хорош, как книга.", "just as … as."],
    ["g", "I can't run as fast ___ you.", "as", ["than", "like", "so"], "Я не могу бегать так быстро, как ты.", "as."]
   ]},
   { task: "**the same as / similar to / different from**", items: [
    ["g", "Your shoes are the same ___ mine!", "as", ["like", "than", "to"], "У тебя такие же туфли, как у меня!", "the same as."],
    ["g", "She's the same age ___ my sister.", "as", ["like", "than", "with"], "Она одного возраста с моей сестрой.", "the same age as."],
    ["g", "Kazakh is very different ___ English.", "from", ["than", "as", "to the"], "Казахский очень отличается от английского.", "different from."],
    ["g", "Your idea is similar ___ mine.", "to", ["as", "from", "than"], "Твоя идея похожа на мою.", "similar to."],
    ["g", "We live in the same street ___ our teacher.", "as", ["like", "than", "with the"], "Мы живём на той же улице, что и наш учитель.", "the same … as."],
    ["g", "This version is ___ from the original.", "different", ["same", "similar", "as"], "Эта версия отличается от оригинала.", "different from."],
    ["g", "My phone looks ___ yours, but it's a different brand.", "similar to", ["the same", "different", "as"], "Мой телефон похож на твой, но другой марки.", "similar to."],
    ["g", "Twins usually look the ___.", "same", ["similar", "as", "like"], "Близнецы обычно выглядят одинаково.", "look the same."],
    ["g", "He earns three times as ___ as me.", "much", ["many", "more", "most"], "Он зарабатывает в три раза больше меня.", "three times as much as."],
    ["g", "Life here is quite ___ from life in a big city.", "different", ["same", "similar", "like"], "Жизнь здесь совсем не такая, как в большом городе.", "different from."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "She is as tall like her mother.", "She is as tall as her mother.", ["She is so tall like her mother.", "She is as taller as her mother.", "She is tall as like her mother."], "Она такого же роста, как её мама.", "as … as."],
    ["e", "My bag is the same like yours.", "My bag is the same as yours.", ["My bag is same as yours.", "My bag is the same than yours.", "My bag is the same to yours."], "Моя сумка такая же, как твоя.", "the same as."],
    ["e", "He is not so fast than me.", "He is not as fast as me.", ["He is not as faster as me.", "He is not so fast like me.", "He is not as fast than me."], "Он не такой быстрый, как я.", "not as … as."],
    ["e", "This city is different than my town. (British English)", "This city is different from my town.", ["This city is different as my town.", "This city is different of my town.", "This city is differ from my town."], "Этот город отличается от моего.", "different from."],
    ["e", "My jacket is similar with yours.", "My jacket is similar to yours.", ["My jacket is similar as yours.", "My jacket is similar from yours.", "My jacket is similarly to yours."], "Моя куртка похожа на твою.", "similar to."],
    ["e", "The new office is two times bigger as the old one.", "The new office is twice as big as the old one.", ["The new office is two times as bigger as the old one.", "The new office is twice bigger as the old one.", "The new office is twice as big than the old one."], "Новый офис вдвое больше старого.", "twice as big as."],
    ["e", "Call me as soon as possibly.", "Call me as soon as possible.", ["Call me so soon as possible.", "Call me as soon possible.", "Call me as soon than possible."], "Позвони как можно скорее.", "as soon as possible."],
    ["e", "We're the same age like each other.", "We're the same age.", ["We're the same age as like.", "We're same age like.", "We're the same ages each other."], "Мы ровесники.", "the same age."],
    ["e", "Tea isn't as stronger as coffee.", "Tea isn't as strong as coffee.", ["Tea isn't so stronger than coffee.", "Tea isn't as strong than coffee.", "Tea isn't strong as coffee as."], "Чай не такой крепкий, как кофе.", "as + strong (без -er) + as."],
    ["e", "My English is as good than yours.", "My English is as good as yours.", ["My English is as better as yours.", "My English is so good than yours.", "My English is good as yours as."], "Мой английский так же хорош, как твой.", "as … as."]
   ]}
  ]},
{ n: 76, floor: 12, title: "too and enough", cefr: "A2–B1",
  rule: { sections: [
    { k: "A", h: "too — слишком (больше, чем нужно)", p: "**too + прилагательное/наречие** и **too much / too many + существительное**.",
      ex: ["This coffee is **too hot**. I can't drink it.", "You're driving **too fast**!", "There's **too much** sugar in this tea.", "There are **too many** people here."] },
    { k: "B", h: "enough — достаточно", p: "**прилагательное/наречие + enough** (после!). **enough + существительное** (перед!).",
      table: [["после прилагательного", "перед существительным"], ["He isn't **old enough**.", "We don't have **enough money**."], ["Is it **warm enough**?", "Are there **enough chairs**?"]] },
    { k: "C", h: "for someone / to do something", p: "Обе конструкции продолжаются через **for + кто** и **to + глагол**.",
      ex: ["This box is **too heavy for me to carry**.", "She's **old enough to drive**.", "It's **too cold to swim**.", "Is the room **big enough for** six people?"],
      note: "too ≠ very: **very** hot = очень жарко (но можно). **too** hot = слишком жарко (нельзя/плохо)." }
  ], mistakes: [["He isn't enough old.", "He isn't old enough.", "enough — после прилагательного."], ["We don't have money enough.", "We don't have enough money.", "enough — перед существительным."], ["It's too much hot.", "It's too hot.", "too + прилагательное (без much)."]] },
  ex: [
   { task: "**too** or **enough**?", items: [
    ["g", "I can't reach the shelf. I'm not tall ___.", "enough", ["too", "very", "much"], "Не достаю до полки. Я недостаточно высокий.", "прилагательное + enough."],
    ["g", "This soup is ___ salty. I can't eat it.", "too", ["enough", "very much", "so much"], "Суп пересолен. Не могу есть.", "too + прилагательное."],
    ["g", "We don't have ___ time to visit the museum.", "enough", ["too", "too much", "very"], "У нас нет времени на музей.", "enough + существительное."],
    ["g", "There are ___ cars in the city centre.", "too many", ["too much", "enough", "very"], "В центре слишком много машин.", "too many + исчисляемое."],
    ["g", "You spend ___ money on clothes.", "too much", ["too many", "enough", "very"], "Ты тратишь слишком много денег на одежду.", "too much + неисчисляемое."],
    ["g", "Is the water warm ___ for swimming?", "enough", ["too", "very", "much"], "Вода достаточно тёплая для купания?", "warm enough."],
    ["g", "He speaks ___ quickly. I can't understand him.", "too", ["enough", "very much", "so"], "Он говорит слишком быстро.", "too + наречие."],
    ["g", "Have you got ___ chairs for everybody?", "enough", ["too", "too many", "very"], "Хватит стульев на всех?", "enough + chairs."],
    ["g", "She didn't study hard ___, so she failed.", "enough", ["too", "very", "much"], "Она недостаточно занималась и провалилась.", "hard enough."],
    ["g", "It's ___ late to call him now.", "too", ["enough", "very much", "so much"], "Слишком поздно ему звонить.", "too late."]
   ]},
   { task: "**too / enough + for / to**", items: [
    ["g", "This bag is too heavy ___ me to carry.", "for", ["to", "that", "of"], "Эта сумка слишком тяжёлая для меня.", "too … for sb to do."],
    ["g", "He's old enough ___ a car.", "to drive", ["for drive", "driving", "for driving"], "Он достаточно взрослый, чтобы водить.", "enough to + глагол."],
    ["g", "It's too cold ___ outside today.", "to play", ["for play", "playing", "for to play"], "Сегодня слишком холодно, чтобы играть на улице.", "too … to."],
    ["g", "The flat isn't big enough ___ five people.", "for", ["to", "that", "of"], "Квартира мала для пятерых.", "enough for."],
    ["g", "She was too tired ___ her homework.", "to finish", ["for finish", "finishing", "for finishing"], "Она слишком устала, чтобы доделать уроки.", "too … to."],
    ["g", "The film was too scary ___ children.", "for", ["to", "that", "of"], "Фильм слишком страшный для детей.", "too … for."],
    ["g", "I don't have enough money ___ a new phone.", "to buy", ["for buy", "buying", "for to buy"], "Мне не хватает денег на новый телефон.", "enough … to."],
    ["g", "The box is too small ___ all these books in.", "to put", ["for put", "putting", "for putting"], "Коробка слишком маленькая, чтобы всё уложить.", "too … to."],
    ["g", "Is this ladder long enough ___ the roof?", "to reach", ["for reach", "reaching", "for to reach"], "Эта лестница достанет до крыши?", "enough to."],
    ["g", "The questions were too difficult ___ us to answer.", "for", ["to", "that", "of"], "Вопросы были слишком сложными для нас.", "too … for us to."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "He isn't enough old to drive.", "He isn't old enough to drive.", ["He isn't enough old for drive.", "He isn't old enough for drive.", "He isn't too old to drive enough."], "Он ещё недостаточно взрослый, чтобы водить.", "old enough."],
    ["e", "We don't have money enough.", "We don't have enough money.", ["We don't have enough of money.", "We don't have too money.", "We haven't money enough."], "Нам не хватает денег.", "enough money."],
    ["e", "It's too much hot today.", "It's too hot today.", ["It's too many hot today.", "It's enough hot today.", "It's very too hot today."], "Сегодня слишком жарко.", "too + прилагательное."],
    ["e", "There are too much people here.", "There are too many people here.", ["There are too lot people here.", "There is too many people here.", "There are enough much people here."], "Здесь слишком много людей.", "too many + people."],
    ["e", "This box is too heavy for carry.", "This box is too heavy to carry.", ["This box is too heavy for carrying it.", "This box is too heavy carry.", "This box is enough heavy to carry."], "Эта коробка слишком тяжёлая, чтобы нести.", "too … to."],
    ["e", "She's enough clever to pass.", "She's clever enough to pass.", ["She's clever enough for pass.", "She's enough clever for pass.", "She's too clever enough to pass."], "Она достаточно умна, чтобы сдать.", "clever enough."],
    ["e", "I'm too much tired to go out.", "I'm too tired to go out.", ["I'm too many tired to go out.", "I'm tired enough to not go out.", "I'm very too tired to go out."], "Я слишком устал, чтобы куда-то идти.", "too tired."],
    ["e", "Is it warm enough for to swim?", "Is it warm enough to swim?", ["Is it enough warm to swim?", "Is it warm enough swim?", "Is it too warm enough to swim?"], "Достаточно тепло, чтобы купаться?", "enough to."],
    ["e", "You eat too many sugar.", "You eat too much sugar.", ["You eat too lot sugar.", "You eat enough many sugar.", "You eat too much sugars."], "Ты ешь слишком много сахара.", "too much + sugar."],
    ["e", "The coffee is very hot to drink. (= impossible to drink)", "The coffee is too hot to drink.", ["The coffee is too much hot to drink.", "The coffee is hot enough to not drink.", "The coffee is so hot to drink."], "Кофе слишком горячий, чтобы пить.", "too, не very."]
   ]}
  ]},
{ n: 77, floor: 12, title: "so and such (so nice / such a nice day)", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "so + прилагательное / наречие", p: "**so** — «так, настолько» перед прилагательным или наречием без существительного.",
      ex: ["The film was **so** boring!", "You speak **so** fast!", "I'm **so** happy to see you."] },
    { k: "B", h: "such + (a/an) + прилагательное + существительное", p: "**such** — «такой» перед существительным (с прилагательным).",
      table: [["so (без сущ.)", "such (с сущ.)"], ["The day was **so** nice.", "It was **such a** nice day."], ["The people are **so** friendly.", "They're **such** friendly people."], ["The weather is **so** bad.", "It's **such** bad weather. (неисчисляемое — без a)"]] },
    { k: "C", h: "so … that / such … that — так…, что", p: "Результат: **so/such … that …**",
      ex: ["It was **so** cold **that** we stayed inside.", "It was **such a** good film **that** I watched it twice.", "She speaks **so** quietly **that** nobody can hear her."],
      note: "so much / so many / so few / so little + существительное: There were **so many** people!" }
  ], mistakes: [["It was so a nice day.", "It was such a nice day.", "С существительным → such a."], ["She is such kind.", "She is so kind.", "Без существительного → so."], ["It was such cold that…", "It was so cold that…", "so + прилагательное."]] },
  ex: [
   { task: "**so** or **such**?", items: [
    ["g", "The lesson was ___ interesting!", "so", ["such", "such a", "too"], "Урок был таким интересным!", "Без существительного → so."],
    ["g", "It was ___ interesting lesson!", "such an", ["so", "so an", "such"], "Это был такой интересный урок!", "such an + прил. + сущ."],
    ["g", "Your parents are ___ kind people.", "such", ["so", "such a", "so a"], "Твои родители такие добрые люди.", "such + мн. число."],
    ["g", "I'm ___ tired. I need a holiday.", "so", ["such", "such a", "too much"], "Я так устал. Мне нужен отпуск.", "so + tired."],
    ["g", "It's ___ beautiful weather today!", "such", ["so", "such a", "so a"], "Сегодня такая прекрасная погода!", "weather — неисчисляемое → such."],
    ["g", "You drive ___ carefully!", "so", ["such", "such a", "very such"], "Ты так аккуратно водишь!", "so + наречие."],
    ["g", "She has ___ lovely voice.", "such a", ["so", "so a", "such"], "У неё такой прекрасный голос.", "such a + прил. + сущ."],
    ["g", "Thank you! You've been ___ helpful.", "so", ["such", "such a", "so much a"], "Спасибо! Ты так помог.", "so + helpful."],
    ["g", "We had ___ a good time at the party.", "such", ["so", "so a", "very"], "Мы так здорово провели время на вечеринке.", "such a good time."],
    ["g", "There were ___ many people that we couldn't get in.", "so", ["such", "such a", "too"], "Было столько народу, что мы не смогли войти.", "so many."]
   ]},
   { task: "**so … that / such … that**", items: [
    ["g", "It was ___ hot that we went swimming.", "so", ["such", "such a", "too"], "Было так жарко, что мы пошли купаться.", "so hot that."],
    ["g", "It was ___ hot day that we went swimming.", "such a", ["so", "so a", "such"], "Был такой жаркий день, что мы пошли купаться.", "such a hot day that."],
    ["g", "He spoke so quietly ___ nobody heard him.", "that", ["than", "as", "so"], "Он говорил так тихо, что его никто не услышал.", "so … that."],
    ["g", "She's ___ good teacher that everyone loves her.", "such a", ["so", "so a", "such"], "Она такой хороший учитель, что все её любят.", "such a … that."],
    ["g", "The book was ___ exciting that I couldn't stop reading.", "so", ["such", "such an", "too"], "Книга была такой захватывающей, что я не мог оторваться.", "so exciting that."],
    ["g", "There was ___ much traffic that we were late.", "so", ["such", "such a", "too"], "Было столько машин, что мы опоздали.", "so much."],
    ["g", "They are ___ nice neighbours that we often visit them.", "such", ["so", "such a", "so a"], "Они такие хорошие соседи, что мы часто ходим к ним.", "such + мн. число."],
    ["g", "I was ___ hungry that I ate two pizzas.", "so", ["such", "such a", "too"], "Я был так голоден, что съел две пиццы.", "so hungry that."],
    ["g", "It was ___ an easy test that everyone passed.", "such", ["so", "so a", "very"], "Тест был таким лёгким, что все сдали.", "such an easy test."],
    ["g", "The music was ___ loud that I couldn't hear you.", "so", ["such", "such a", "too much"], "Музыка была такой громкой, что я тебя не слышал.", "so loud that."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "It was so a nice day.", "It was such a nice day.", ["It was such nice day.", "It was so nice a day such.", "It was a so nice day."], "Был такой хороший день.", "such a + прил. + сущ."],
    ["e", "She is such kind.", "She is so kind.", ["She is such a kind.", "She is so a kind.", "She is such kindness."], "Она такая добрая.", "Без существительного → so."],
    ["e", "It was such cold that we stayed home.", "It was so cold that we stayed home.", ["It was such a cold that we stayed home.", "It was so cold than we stayed home.", "It was too cold that we stayed home."], "Было так холодно, что мы остались дома.", "so cold."],
    ["e", "They are so nice people.", "They are such nice people.", ["They are such a nice people.", "They are so a nice people.", "They are such nice peoples."], "Они такие хорошие люди.", "such + мн. число."],
    ["e", "We had a so good time.", "We had such a good time.", ["We had such good a time.", "We had so a good time.", "We had a such good time."], "Мы так хорошо провели время.", "such a good time."],
    ["e", "It's so beautiful weather!", "It's such beautiful weather!", ["It's such a beautiful weather!", "It's so a beautiful weather!", "It's a so beautiful weather!"], "Такая прекрасная погода!", "weather → such (без a)."],
    ["e", "There were such many people at the concert.", "There were so many people at the concert.", ["There were such a many people at the concert.", "There were so much people at the concert.", "There were too such many people at the concert."], "На концерте было столько людей.", "so many."],
    ["e", "He spoke so fast than I didn't understand.", "He spoke so fast that I didn't understand.", ["He spoke such fast that I didn't understand.", "He spoke so fast as I didn't understand.", "He spoke too fast that I didn't understand."], "Он говорил так быстро, что я не понял.", "so … that."],
    ["e", "It was such an easy that everyone passed.", "It was so easy that everyone passed.", ["It was such easy that everyone passed.", "It was so an easy that everyone passed.", "It was such easy test that everyone passed."], "Было так легко, что все сдали.", "Без существительного → so."],
    ["e", "You're so a good friend!", "You're such a good friend!", ["You're such good a friend!", "You're a so good friend!", "You're so good a friend such!"], "Ты такой хороший друг!", "such a good friend."]
   ]}
  ]},
{ n: 78, floor: 12, title: "Word order: always / already / also / still / even", cefr: "B1",
  rule: { sections: [
    { k: "A", h: "Перед основным глаголом", p: "**always, usually, often, sometimes, never, already, also, just, still, even, probably** стоят **перед** основным глаголом.",
      ex: ["I **always** walk to school.", "She **also** speaks French.", "We **never** eat meat.", "He **probably** knows the answer."] },
    { k: "B", h: "После be и первого вспомогательного", p: "После **am/is/are/was/were** и после **первого вспомогательного глагола** (have, will, can…).",
      table: [["После be", "После вспомогательного"], ["She **is always** late.", "I **have never** been to Paris."], ["They **were also** tired.", "You **can always** call me."], ["He's **still** asleep.", "We **will probably** be late."]] },
    { k: "C", h: "still, yet, already, even", p: "**still** — всё ещё (действие продолжается). В отрицании — **still** перед отрицанием: I **still haven't** finished. **even** — даже.",
      ex: ["Are you **still** working?", "She **still doesn't** understand.", "He **even** forgot his own birthday!", "Everyone came, **even** Arman."],
      note: "Наречия места/времени (here, at home, yesterday, every day) — обычно **в конце**: I saw him **at the station yesterday**." }
  ], mistakes: [["I go always to the gym.", "I always go to the gym.", "always — перед основным глаголом."], ["She always is late.", "She is always late.", "После be."], ["I have finished already not.", "I still haven't finished.", "still перед отрицанием."]] },
  ex: [
   { task: "Put the word in the right place", items: [
    ["g", "I ___ to work by bus. (usually / go)", "usually go", ["go usually", "usually goes", "am usually go"], "Обычно я езжу на работу на автобусе.", "Перед основным глаголом."],
    ["g", "She ___ at home on Sundays. (is / always)", "is always", ["always is", "always", "is always be"], "По воскресеньям она всегда дома.", "После be."],
    ["g", "We ___ Japanese food. (have / never / tried)", "have never tried", ["never have tried", "have tried never", "never tried have"], "Мы никогда не пробовали японскую еду.", "После первого вспомогательного."],
    ["g", "He ___ the guitar and the piano. (also / plays)", "also plays", ["plays also", "also play", "is also plays"], "Он ещё и играет на гитаре и пианино.", "also — перед глаголом."],
    ["g", "You ___ me if you need help. (can / always / call)", "can always call", ["always can call", "can call always", "call can always"], "Ты всегда можешь мне позвонить.", "После can."],
    ["g", "They ___ late. (will / probably / be)", "will probably be", ["probably will be late", "will be probably", "be will probably"], "Они, наверное, опоздают.", "После will."],
    ["g", "My grandfather ___ every morning. (still / runs)", "still runs", ["runs still", "still run", "is still runs"], "Дедушка до сих пор бегает каждое утро.", "still — перед глаголом."],
    ["g", "I ___ my homework. (have / already / done)", "have already done", ["already have done", "have done already yet", "done have already"], "Я уже сделал домашку.", "После have."],
    ["g", "She ___ tired after school. (often / is)", "is often", ["often is", "often", "is often be"], "Она часто устаёт после школы.", "После be."],
    ["g", "He ___ my name. (even / forgot)", "even forgot", ["forgot even", "even forget", "was even forgot"], "Он даже забыл моё имя.", "even — перед глаголом."]
   ]},
   { task: "**still / yet / already / even**", items: [
    ["g", "It's 10 a.m. and he's ___ in bed!", "still", ["yet", "already", "even"], "Уже 10 утра, а он всё ещё в постели!", "Продолжается → still."],
    ["g", "I ___ haven't heard from her. I'm worried.", "still", ["yet", "already", "even"], "Я до сих пор ничего от неё не слышал.", "still перед отрицанием."],
    ["g", "Have you finished ___? — No, not yet.", "yet", ["still", "already", "even"], "Ты уже закончил? — Нет ещё.", "Вопрос → yet в конце."],
    ["g", "We've ___ booked the hotel, so don't worry.", "already", ["still", "yet", "even"], "Мы уже забронировали гостиницу.", "already."],
    ["g", "Everybody enjoyed the film, ___ my grandmother.", "even", ["still", "yet", "already"], "Всем понравился фильм, даже бабушке.", "even = даже."],
    ["g", "Are you ___ living in the same flat?", "still", ["yet", "already", "even"], "Ты всё ещё живёшь в той же квартире?", "still."],
    ["g", "She ___ doesn't understand the rule.", "still", ["yet", "already", "even"], "Она всё ещё не понимает правило.", "still doesn't."],
    ["g", "It's only 7 p.m. and it's ___ dark.", "already", ["still", "yet", "even"], "Всего 7 вечера, а уже темно.", "already = уже (раньше, чем ожидали)."],
    ["g", "I'm so busy that I ___ didn't have time to eat lunch.", "even", ["still", "yet", "already"], "Я так занят, что даже не успел пообедать.", "even."],
    ["g", "The guests haven't arrived ___.", "yet", ["still", "already", "even"], "Гости ещё не пришли.", "Отрицание → yet в конце."]
   ]},
   { task: "Find the mistake", items: [
    ["e", "I go always to bed at ten.", "I always go to bed at ten.", ["I go to bed always at ten.", "Always I go to bed at ten.", "I always goes to bed at ten."], "Я всегда ложусь в десять.", "always — перед глаголом."],
    ["e", "She always is happy.", "She is always happy.", ["She is happy always.", "Always she is happy.", "She always happy is."], "Она всегда весёлая.", "После be."],
    ["e", "I haven't still finished.", "I still haven't finished.", ["I haven't finished still.", "I still not have finished.", "I haven't yet still finished."], "Я всё ещё не закончил.", "still перед отрицанием."],
    ["e", "We have been never to Europe.", "We have never been to Europe.", ["We never have been to Europe.", "We have been to Europe never.", "Never we have been to Europe."], "Мы никогда не были в Европе.", "После первого вспомогательного."],
    ["e", "He plays also the violin.", "He also plays the violin.", ["He plays the violin also too.", "Also he plays the violin also.", "He also play the violin."], "Он ещё и на скрипке играет.", "also — перед глаголом."],
    ["e", "They will be probably late.", "They will probably be late.", ["They probably will be late late.", "They will late probably be.", "Probably they will be late probably."], "Они, наверное, опоздают.", "will + probably + be."],
    ["e", "Is she yet sleeping?", "Is she still sleeping?", ["Is she sleeping yet still?", "Is she already sleeping still?", "Is she sleeping even?"], "Она всё ещё спит?", "still."],
    ["e", "Never I can remember his name.", "I can never remember his name.", ["I never can remember his name.", "I can remember never his name.", "I can never to remember his name."], "Никак не могу запомнить его имя.", "can + never + remember."],
    ["e", "He forgot even his passport.", "He even forgot his passport.", ["Even he forgot his passport even.", "He forgot his passport even even.", "He even forget his passport."], "Он даже паспорт забыл.", "even — перед глаголом."],
    ["e", "We every day play football.", "We play football every day.", ["We play every day football.", "Every day football we play.", "We every day plays football."], "Мы играем в футбол каждый день.", "every day — в конце."]
   ]}
  ]}
);
