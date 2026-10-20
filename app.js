"use strict";

const BASE_LESSONS = [
  { title: "Основна позиція", keys: "ао", text: "ао оа аа оо ао оа ааа ооо аоа оао", tip: "Тримай вказівні пальці на А та О. Відчуй маленькі виступи на клавішах." },
  { title: "Вказівні пальці", keys: "апро", text: "пора пара опора пора папа арка про пора опора", tip: "Після Р і П повертай пальці на базові А та О." },
  { title: "Середні пальці", keys: "авол", text: "лава овал воля ловила валова олово лава", tip: "Клавіші В і Л натискають середні пальці." },
  { title: "Безіменні пальці", keys: "афіволд", text: "діло фіалка вода далі віл діва філолог", tip: "Не зміщуй всю кисть — працює лише потрібний палець." },
  { title: "Увесь середній ряд", keys: "фівапролджє", text: "джерело правда поле віра орел пожежа алея", tip: "Повертай усі пальці на Ф І В А — О Л Д Ж." },
  { title: "Верхній ряд", keys: "йцукенгшщзхї", text: "книга щука небо життя кухня жінка гуща", tip: "Тягнися пальцем угору, не піднімаючи долоню." },
  { title: "Нижній ряд", keys: "ячсмитьбю", text: "мить час сім'я місто м'яч батько щастя", tip: "До нижнього ряду веди палець, а не всю руку." },
  { title: "Великі літери", keys: "shift", text: "Київ Україна Дніпро Львів Одеса Карпати", tip: "Shift натискай мізинцем протилежної руки." },
  { title: "Коми й крапки", keys: ",.", text: "Ранок настав, місто прокинулось. День почався.", tip: "Після розділового знака завжди став пробіл." },
  { title: "Числа", keys: "1234567890", text: "У класі 24 учні. Урок триває 45 хвилин.", tip: "Для цифр використовуй той самий палець, що й у його колонці." },
  { title: "Ритм і речення", keys: "all", text: "Добра звичка формується крок за кроком. Спокійний ритм допомагає друкувати впевнено.", tip: "Набирай у рівному темпі. Не прискорюйся на знайомих словах." },
  { title: "Проміжний тест", keys: "all", text: "Щоденна практика перетворює складний рух на легку навичку. Дивись на екран, довіряй пальцям і бережи точність.", tip: "Розслаб плечі, дихай рівно й покажи свій найкращий результат." },
  { title: "Ліва рука · верх", keys: "йцукег", text: "кук еге цей кущ гук цукор кегля ущух кущик", tip: "Відпрацьовуємо рухи лівої руки до верхнього ряду." },
  { title: "Права рука · верх", keys: "ншщзхї", text: "ніж ніжно шишка щезне хижий їхній захист", tip: "Права кисть нерухома — до клавіші тягнеться лише палець." },
  { title: "Ліва рука · низ", keys: "ячсми", text: "час мрія сам маяк яма смак миша масив", tip: "Після нижнього ряду повертай пальці на Ф І В А." },
  { title: "Права рука · низ", keys: "итьбю", text: "мить бути любити битва тюбик біль люди", tip: "Після нижнього ряду повертай пальці на О Л Д Ж." },
  { title: "Апостроф", keys: "'", text: "м'ята п'ять сім'я ім'я зв'язок пам'ять об'єкт", tip: "Апостроф натискає мізинець лівої руки." },
  { title: "Довгі слова", keys: "all", text: "відповідальність підприємство виробництво співробітник вдосконалення", tip: "Діли довге слово на знайомі рухи, але не зупиняй ритм." },
  { title: "Часті сполучення", keys: "all", text: "ст пр но ен ов ти ня ро ві ко ст пр но ен", tip: "Повторюй часті пари плавно, без паузи між літерами." },
  { title: "Рівний ритм", keys: "all", text: "тиха вода тече поволі теплий вітер колише траву", tip: "Намагайся робити однакову паузу між усіма натисканнями." },
  { title: "Великі літери й Shift", keys: "shift", text: "Україна Київ Чернігів Житомир Харків Запоріжжя", tip: "Shift завжди натискає мізинець руки, протилежної до літери." },
  { title: "Числа в роботі", keys: "1234567890", text: "Замовлення 1548 виконано на 98 відсотків за 3 дні.", tip: "Після цифри повертай палець на основний ряд." },
  { title: "Розділові знаки", keys: ",.'", text: "Так, усе готово. Пам'ятай, точність є основою.", tip: "Не поспішай біля розділових знаків і став пробіл після них." },
  { title: "Вхідний тест", keys: "all", text: "Майстерність зростає непомітно. Сьогодні ти друкуєш точніше, а завтра швидше. Продовжуй практикуватися щодня.", tip: "Цей результат стане точкою відліку для поглибленого курсу." }
];

// Оригінальна українська програма, побудована за принципом послідовних
// багатокрокових вправ: рухи → слова → речення → контроль.
const SOLO_MODULES = [
  { name: "Домашній ряд", focus: "фіва олдж", words: ["фіалка","вода","олово","діло","жало","алея"], sentence: "Лагідна вода омиває довгі вали." },
  { name: "Вказівні пальці", focus: "апр оен", words: ["пора","рано","перо","небо","опера","арена"], sentence: "Раннє небо поволі набирає барви." },
  { name: "Середні пальці", focus: "вул шоб", words: ["лава","слово","було","шовк","воля","обвал"], sentence: "Вдале слово будує добру розмову." },
  { name: "Безіменні пальці", focus: "іц дщю", words: ["ціна","діти","дощ","люди","цілий","подія"], sentence: "Дощ ущух, і люди вийшли надвір." },
  { name: "Мізинці", focus: "фйя жзхїє", words: ["їжак","захід","хвиля","якір","фраза","єдність"], sentence: "Яскрава хвиля з'єднує краї." },
  { name: "Ліва рука", focus: "йцукен фівапр ячсми", words: ["час","міра","праця","сцена","мрія","кучер"], sentence: "Праця і час навчають майстерності." },
  { name: "Права рука", focus: "гшщзхї олджє тьбю", words: ["життя","люди","ніжно","дощик","люблю","зілля"], sentence: "Дощ тихо шелестить біля будинку." },
  { name: "Чергування рук", focus: "ка но ми ре", words: ["країна","родина","картина","мелодія","дорога","погода"], sentence: "Рівне чергування рук створює ритм." },
  { name: "Апостроф", focus: "' м' п' в' б'", words: ["п'ять","м'ята","пам'ять","зв'язок","об'єкт","сім'я"], sentence: "Пам'ять зберігає зв'язок із сім'єю." },
  { name: "Подвоєння", focus: "нн тт лл сс", words: ["знання","життя","стаття","щоденний","навчання","зусилля"], sentence: "Щоденні зусилля дають упевненість." },
  { name: "Великі літери", focus: "К У Л Д О Х", words: ["Україна","Київ","Львів","Одеса","Харків","Дніпро"], sentence: "Україна починається з кожного з нас." },
  { name: "Кома і крапка", focus: ", . , .", words: ["спокійно,","точно,","рівно.","уважно,","впевнено.","щодня."], sentence: "Друкуй спокійно, точно і впевнено." },
  { name: "Короткі слова", focus: "і в на до за із", words: ["він","вона","вони","цей","коли","тоді"], sentence: "Коли є мета, тоді знаходиться шлях." },
  { name: "Довгі слова", focus: "ність ство ення увати", words: ["відповідальність","виробництво","планування","спілкування","вдосконалення","результативність"], sentence: "Послідовність перетворює вправу на вміння." },
  { name: "Числа", focus: "12 34 56 78 90", words: ["2026","1548","42","365","100","95"], sentence: "За 15 хвилин виконай 3 вправи з точністю 95 відсотків." },
  { name: "Робочі фрази", focus: "план звіт лист дані", words: ["звіт","таблиця","показник","продажі","замовлення","результат"], sentence: "Готовий звіт містить точні дані та зрозумілий висновок." },
  { name: "Стійкий темп", focus: "та то ти те ту", words: ["темп","такт","ритм","потік","спокій","увага"], sentence: "Стійкий темп важливіший за коротке прискорення." },
  { name: "Витривалість", focus: "уважність точність терпіння", words: ["поступово","безпомилково","зосереджено","самостійно","послідовно","наполегливо"], sentence: "Уважність і терпіння допомагають завершити складну справу." },
  { name: "Майстерність", focus: "думка слово клавіша", words: ["майстерність","впевненість","швидкість","точність","свобода","звичка"], sentence: "Пальці знаходять клавіші, а думка вільно стає текстом." }
];

function makeSoloLessons() {
  return SOLO_MODULES.flatMap((module, moduleIndex) => {
    const words = module.words.join(" ");
    const warmup = `${module.focus} ${module.focus} ${module.focus}`;
    const isLast = moduleIndex === SOLO_MODULES.length - 1;
    return [
      { title: `${module.name} · рухи`, keys: "all", text: warmup, tip: "Працюй повільно. Запам'ятовуй не літери, а точні рухи пальців." },
      { title: `${module.name} · слова`, keys: "all", text: `${words} ${words}`, tip: "Точність важливіша за швидкість. Після кожного руху повертайся на основний ряд." },
      { title: `${module.name} · речення`, keys: "all", text: `${module.sentence} ${module.sentence}`, tip: "Дивись лише на текст і тримай однаковий ритм." },
      { title: isLast ? "Фінальний іспит" : `${module.name} · контроль`, keys: "all", text: `${words}. ${module.sentence}`, tip: isLast ? "Порівняй результат із вхідним тестом і привітай себе з завершенням курсу." : "Контрольна спроба. Зосередься на чистому наборі без виправлень." }
    ];
  });
}

const LESSONS = [...BASE_LESSONS, ...makeSoloLessons()];
if (LESSONS.length !== 100) throw new Error("Навчальний курс має містити рівно 100 уроків.");
const PHASES = ["Основа", "Координація", "Усі ряди", "Точність", "Майстерність"];
const ENCOURAGEMENT = [
  "Ще один рух став автоматичним.", "Терпіння сьогодні дає швидкість завтра.",
  "Не поспішай — точні пальці самі знайдуть темп.", "Ти вже друкуєш упевненіше, ніж на початку.",
  "Складна вправа означає, що навичка росте."
];

const ROWS = [
  ["1","2","3","4","5","6","7","8","9","0"],
  ["'","й","ц","у","к","е","н","г","ш","щ","з","х","ї"],
  ["ф","і","в","а","п","р","о","л","д","ж","є"],
  ["я","ч","с","м","и","т","ь","б","ю",",","."]
];
const FINGERS = {
  "'":"pinky","й":"pinky","ф":"pinky","я":"pinky","1":"pinky", "ц":"ring","і":"ring","ч":"ring","2":"ring",
  "у":"middle","в":"middle","с":"middle","3":"middle", "к":"index","а":"index","м":"index","е":"index","п":"index","и":"index","4":"index","5":"index",
  "н":"index","р":"index","т":"index","г":"index","о":"index","ь":"index","6":"index","7":"index", "ш":"middle","л":"middle","б":"middle","8":"middle",
  "щ":"ring","д":"ring","ю":"ring","9":"ring", "з":"pinky","х":"pinky","ї":"pinky","ж":"pinky","є":"pinky",",":"pinky",".":"pinky","0":"pinky", " ":"thumb"
};
const STORAGE_KEY = "klavishi-progress-v1";
const LEFT_KEYS = "'йцукенфівапрячсми12345";
const FINGER_NAMES = { pinky: "мізинець", ring: "безіменний палець", middle: "середній палець", index: "вказівний палець", thumb: "великий палець" };
const defaultProgress = { unlocked: 1, completed: [], sessions: [], errors: {}, sound: true, lastDays: [] };
let progress = loadProgress();
let currentLesson = Math.min(Number(localStorage.getItem("klavishi-current")) || 0, progress.unlocked - 1);
let targetText = "", typed = "", startedAt = null, timer = null, errors = 0, adaptiveMode = false;

const $ = (id) => document.getElementById(id);
const els = { lessonList: $("lessonList"), exerciseText: $("exerciseText"), typingZone: $("typingZone"), input: $("typingInput"), wpm: $("wpmValue"), accuracy: $("accuracyValue"), time: $("timeValue"), keyboard: $("keyboard"), completion: $("completion") };

function loadProgress() {
  try {
    const saved = { ...defaultProgress, ...JSON.parse(localStorage.getItem(STORAGE_KEY)) };
    if (saved.unlocked === 12 && saved.completed.includes(11)) saved.unlocked = 13;
    return saved;
  } catch { return { ...defaultProgress }; }
}
function saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
function esc(char) { const s = document.createElement("span"); s.textContent = char; return s.innerHTML; }

function renderLessons() {
  els.lessonList.innerHTML = LESSONS.map((lesson, i) => {
    const done = progress.completed.includes(i), locked = i >= progress.unlocked;
    const phase = i % 20 === 0 ? `<div class="phase-label"><span>${PHASES[Math.floor(i / 20)]}</span><small>${i + 1}–${i + 20}</small></div>` : "";
    return `${phase}<button class="lesson-item ${i === currentLesson && !adaptiveMode ? "active" : ""} ${locked ? "locked" : ""}" data-lesson="${i}" ${locked ? "disabled" : ""}>
      <span class="lesson-index">${done ? "✓" : i + 1}</span><span class="lesson-name">${lesson.title}</span><span class="lesson-state">${locked ? "·" : done ? "" : "→"}</span></button>`;
  }).join("");
  $("courseProgressLabel").textContent = `${progress.completed.length} / ${LESSONS.length}`;
  $("courseProgressBar").style.width = `${progress.completed.length / LESSONS.length * 100}%`;
}

function renderKeyboard() {
  els.keyboard.innerHTML = ROWS.map(row => `<div class="key-row">${row.map(k => `<div class="key ${FINGERS[k]} ${"фіваолдж".includes(k) ? "home" : ""}" data-key="${k}">${k.toUpperCase()}</div>`).join("")}</div>`).join("") + `<div class="key-row"><div class="key space thumb" data-key=" ">ПРОБІЛ</div></div>`;
}

function selectLesson(index) {
  if (index >= progress.unlocked) return;
  adaptiveMode = false; currentLesson = index; localStorage.setItem("klavishi-current", index); resetExercise(); renderLessons();
}

function resetExercise(customText) {
  clearInterval(timer); timer = null; startedAt = null; typed = ""; errors = 0;
  const lesson = LESSONS[currentLesson]; targetText = customText || lesson.text;
  $("lessonNumber").textContent = adaptiveMode ? "Адаптивна практика" : `Урок ${currentLesson + 1}`;
  $("lessonTitle").textContent = adaptiveMode ? "Слабкі клавіші" : lesson.title;
  $("coachTip").innerHTML = `<span class="tip-icon">✦</span><p><strong>Підказка:</strong> ${adaptiveMode ? "Найчастіше повторюємо символи, у яких були помилки." : lesson.tip}</p>`;
  els.completion.hidden = true; els.input.value = ""; els.typingZone.classList.remove("focused");
  updateStats(); renderText(); highlightNext();
}

function focusTyping() { if (els.completion.hidden) { els.typingZone.classList.add("focused"); els.input.focus({ preventScroll: true }); } }
function renderText() {
  els.exerciseText.innerHTML = [...targetText].map((char, i) => {
    let cls = i < typed.length ? (typed[i] === char ? "correct" : "wrong") : i === typed.length ? "current" : "";
    return `<span class="${cls}">${char === " " ? "&nbsp;" : esc(char)}</span>`;
  }).join("");
}
function highlightNext() {
  document.querySelectorAll(".key.target").forEach(k => k.classList.remove("target"));
  if (typed.length < targetText.length) {
    const char = targetText[typed.length].toLowerCase();
    const key = document.querySelector(`[data-key="${CSS.escape(char)}"]`);
    if (key) key.classList.add("target");
    updateFingerCoach(targetText[typed.length]);
  }
}

function updateFingerCoach(rawChar) {
  const char = rawChar.toLowerCase();
  const finger = FINGERS[char] || "pinky";
  const isSpace = char === " ";
  const isUpper = rawChar !== char && /[а-яіїєґ]/i.test(rawChar);
  const hand = isSpace ? "Обидві руки" : LEFT_KEYS.includes(char) ? "Ліва рука" : "Права рука";
  $("fingerHand").textContent = hand;
  $("fingerName").textContent = isSpace ? "будь-який великий палець" : FINGER_NAMES[finger];
  $("fingerKey").textContent = isSpace ? "ПРОБІЛ" : rawChar.toUpperCase();
  $("fingerDot").className = `finger-dot ${finger}`;
  const shift = $("shiftHint");
  shift.hidden = !isUpper;
  shift.textContent = isUpper ? `+ Shift (${hand === "Ліва рука" ? "права" : "ліва"} рука)` : "";
}
function startTimer() { if (!startedAt) { startedAt = Date.now(); timer = setInterval(updateStats, 500); } }
function metrics() {
  const seconds = startedAt ? Math.max(1, (Date.now() - startedAt) / 1000) : 0;
  const correct = [...typed].filter((c, i) => c === targetText[i]).length;
  return { seconds, wpm: seconds ? Math.round((correct / 5) / (seconds / 60)) : 0, accuracy: typed.length ? Math.round(correct / typed.length * 100) : 100 };
}
function updateStats() { const m = metrics(); els.wpm.textContent = m.wpm; els.accuracy.textContent = `${m.accuracy}%`; els.time.textContent = `${Math.floor(m.seconds / 60)}:${String(Math.floor(m.seconds % 60)).padStart(2,"0")}`; }
function beep() { if (!progress.sound) return; try { const ctx = new AudioContext(); const o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.value = 155; g.gain.setValueAtTime(.035, ctx.currentTime); g.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .08); o.connect(g).connect(ctx.destination); o.start(); o.stop(ctx.currentTime + .08); } catch {} }

function handleInput(event) {
  event.preventDefault(); if (!els.completion.hidden || event.ctrlKey || event.metaKey || event.altKey) return;
  if (event.key === "Backspace") { typed = typed.slice(0, -1); renderText(); highlightNext(); updateStats(); return; }
  if (event.key.length !== 1 || typed.length >= targetText.length) return;
  startTimer(); const expected = targetText[typed.length]; typed += event.key;
  if (event.key !== expected) { errors++; const key = expected.toLowerCase(); if (key.trim()) progress.errors[key] = (progress.errors[key] || 0) + 1; beep(); }
  renderText(); highlightNext(); updateStats(); if (typed.length === targetText.length) finishExercise();
}

function finishExercise() {
  clearInterval(timer); timer = null; const m = metrics(); const passed = m.accuracy >= 90;
  const session = { date: new Date().toISOString(), wpm: m.wpm, accuracy: m.accuracy, seconds: Math.round(m.seconds), lesson: adaptiveMode ? "adaptive" : currentLesson };
  progress.sessions.push(session); progress.sessions = progress.sessions.slice(-50);
  if (!adaptiveMode && passed) { if (!progress.completed.includes(currentLesson)) progress.completed.push(currentLesson); progress.unlocked = Math.min(LESSONS.length, Math.max(progress.unlocked, currentLesson + 2)); }
  updateStreak(); saveProgress(); renderLessons();
  $("completionTitle").textContent = passed ? (m.accuracy >= 98 ? "Майже бездоганно!" : "Урок зараховано!") : "Спокійно. Спробуй ще раз";
  const encouragement = passed ? ENCOURAGEMENT[currentLesson % ENCOURAGEMENT.length] : "Помилка — це підказка, який рух варто повторити.";
  $("completionSummary").textContent = `${m.wpm} слів/хв · точність ${m.accuracy}%${passed ? "" : " · потрібно 90%"} · ${encouragement}`;
  $("nextButton").textContent = !passed ? "Повторити →" : currentLesson < LESSONS.length - 1 && !adaptiveMode ? "Наступний урок →" : "Ще раз →";
  els.completion.hidden = false; els.typingZone.classList.remove("focused");
}
function updateStreak() { const day = new Date().toISOString().slice(0,10); const days = new Set(progress.lastDays || []); days.add(day); progress.lastDays = [...days].sort().slice(-60); }
function nextAction() { const m = metrics(); if (m.accuracy >= 90 && !adaptiveMode && currentLesson < LESSONS.length - 1) selectLesson(currentLesson + 1); else resetExercise(adaptiveMode ? buildAdaptiveText() : undefined); }

function buildAdaptiveText() {
  const weak = Object.entries(progress.errors).sort((a,b) => b[1]-a[1]).slice(0,6).map(([k]) => k);
  if (!weak.length) return "точність ритм практика клавіатура звичка швидкість";
  const words = ["практика","точність","клавіатура","швидкість","ритм","навичка","робота","увага","україна","щодня","впевнено","спокійно","друкувати","пальці"];
  const ranked = words.sort((a,b) => weak.reduce((s,k)=>s+(b.split(k).length-1),0)-weak.reduce((s,k)=>s+(a.split(k).length-1),0));
  return [...ranked.slice(0,8), weak.join(" "), ranked[0], ranked[1]].join(" ");
}

function showView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === `${name}View`));
  document.querySelectorAll(".nav-link").forEach(b => b.classList.toggle("active", b.dataset.view === name));
  if (name === "progress") renderProgress(); window.scrollTo({ top: 0, behavior: "smooth" });
}
function renderProgress() {
  const sessions = progress.sessions, accuracies = sessions.map(s=>s.accuracy);
  $("bestWpm").textContent = sessions.length ? Math.max(...sessions.map(s=>s.wpm)) : 0;
  $("avgAccuracy").textContent = sessions.length ? `${Math.round(accuracies.reduce((a,b)=>a+b,0)/accuracies.length)}%` : "—";
  $("totalMinutes").textContent = Math.round(sessions.reduce((a,s)=>a+s.seconds,0)/60);
  $("streakDays").textContent = calculateStreak();
  const recent = sessions.slice(-7), max = Math.max(30, ...recent.map(s=>s.wpm));
  $("historyChart").innerHTML = recent.length ? recent.map(s => `<div class="chart-col"><div class="chart-bar" data-value="${s.wpm}" style="height:${Math.max(4,s.wpm/max*100)}%"></div><small>${new Date(s.date).toLocaleDateString("uk-UA",{day:"2-digit",month:"2-digit"})}</small></div>`).join("") : `<div class="chart-empty">Заверши першу вправу — тут з’явиться графік.</div>`;
  const weak = Object.entries(progress.errors).sort((a,b)=>b[1]-a[1]).slice(0,8);
  $("weakKeys").innerHTML = weak.length ? weak.map(([k,n])=>`<span class="weak-key" title="${n} помилок">${esc(k.toUpperCase())}</span>`).join("") : `<span class="weak-empty">Поки немає даних про помилки.</span>`;
}
function calculateStreak() { let streak=0, d=new Date(); const days=new Set(progress.lastDays||[]); while(days.has(d.toISOString().slice(0,10))){streak++;d.setDate(d.getDate()-1);} return streak; }
function startAdaptive() { adaptiveMode = true; showView("practice"); resetExercise(buildAdaptiveText()); renderLessons(); }

document.querySelectorAll(".nav-link").forEach(b => b.addEventListener("click", () => showView(b.dataset.view)));
els.lessonList.addEventListener("click", e => { const b=e.target.closest("[data-lesson]"); if(b) selectLesson(Number(b.dataset.lesson)); });
els.typingZone.addEventListener("click", focusTyping); els.typingZone.addEventListener("focus", focusTyping); els.input.addEventListener("keydown", handleInput);
$("restartButton").addEventListener("click", () => resetExercise(adaptiveMode ? buildAdaptiveText() : undefined)); $("nextButton").addEventListener("click", nextAction);
$("soundToggle").addEventListener("click", () => { progress.sound=!progress.sound; saveProgress(); updateSound(); });
$("adaptiveButton").addEventListener("click", startAdaptive);
$("resetProgress").addEventListener("click", () => { if(confirm("Скинути всі результати й відкриті уроки?")){ progress={...defaultProgress,completed:[],sessions:[],errors:{},lastDays:[]}; currentLesson=0; saveProgress(); renderProgress(); renderLessons(); } });
function updateSound() { $("soundToggle").classList.toggle("off", !progress.sound); $("soundToggle").setAttribute("aria-label", progress.sound ? "Вимкнути звук" : "Увімкнути звук"); }

renderKeyboard(); renderLessons(); resetExercise(); updateSound();
