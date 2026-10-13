/* ============================================
   رانيا | يومي - JavaScript Application
   ============================================ */

'use strict';

const APP_CONFIG = {
    name: 'رانيا | يومي',
    version: '1.0',
    storageKey: 'rania_daily_app',
    renonaName: 'رنونة',
    nickName: 'كوتي'
};

const DEFAULT_DATA = {
    settings: { darkMode: false, soundEnabled: true, theme: 'pink', fontSize: 'normal' },
    today: { date: null, started: false, completed: false, mood: null, water: 0, prayers: { fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false }, quranPages: 0, steps: 0, sleepHours: 0 },
    tasks: {
        worship: [
            { id: 'w1', title: 'صلاة الفجر', done: false, time: '05:00', priority: 'high', notes: '', repeat: 'daily' },
            { id: 'w2', title: 'صلاة الظهر', done: false, time: '12:30', priority: 'high', notes: '', repeat: 'daily' },
            { id: 'w3', title: 'صلاة العصر', done: false, time: '15:30', priority: 'high', notes: '', repeat: 'daily' },
            { id: 'w4', title: 'صلاة المغرب', done: false, time: '18:15', priority: 'high', notes: '', repeat: 'daily' },
            { id: 'w5', title: 'صلاة العشاء', done: false, time: '19:45', priority: 'high', notes: '', repeat: 'daily' },
            { id: 'w6', title: 'أذكار الصباح', done: false, time: '06:00', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'w7', title: 'أذكار المساء', done: false, time: '20:00', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'w8', title: 'قراءة القرآن', done: false, time: '07:00', priority: 'high', notes: '', repeat: 'daily' },
            { id: 'w9', title: 'حفظ القرآن', done: false, time: '', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'w10', title: 'مراجعة الحفظ', done: false, time: '', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'w11', title: 'الاستغفار', done: false, time: '', priority: 'low', notes: '', repeat: 'daily' },
            { id: 'w12', title: 'الصلاة على النبي ﷺ', done: false, time: '', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'w13', title: 'الدعاء', done: false, time: '', priority: 'medium', notes: '', repeat: 'daily' }
        ],
        health: [
            { id: 'h1', title: 'شرب الماء (8 أكواب)', done: false, time: '', priority: 'high', notes: '', repeat: 'daily' },
            { id: 'h2', title: 'الرياضة', done: false, time: '07:30', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'h3', title: 'المشي', done: false, time: '18:00', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'h4', title: 'النوم المبكر', done: false, time: '22:00', priority: 'high', notes: '', repeat: 'daily' },
            { id: 'h5', title: 'الفيتامينات', done: false, time: '08:00', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'h6', title: 'الأدوية', done: false, time: '', priority: 'high', notes: '', repeat: 'daily' },
            { id: 'h7', title: 'الأكل الصحي', done: false, time: '', priority: 'medium', notes: '', repeat: 'daily' }
        ],
        study: [
            { id: 's1', title: 'المذاكرة', done: false, time: '09:00', priority: 'high', notes: '', repeat: 'daily' },
            { id: 's2', title: 'حل الواجبات', done: false, time: '16:00', priority: 'high', notes: '', repeat: 'daily' },
            { id: 's3', title: 'المراجعة', done: false, time: '20:00', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 's4', title: 'القراءة', done: false, time: '21:00', priority: 'low', notes: '', repeat: 'daily' }
        ],
        work: [
            { id: 'wk1', title: 'إنهاء المهام', done: false, time: '10:00', priority: 'high', notes: '', repeat: 'daily' },
            { id: 'wk2', title: 'الاجتماعات', done: false, time: '', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'wk3', title: 'الرد على الرسائل', done: false, time: '', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'wk4', title: 'كتابة الملاحظات', done: false, time: '', priority: 'low', notes: '', repeat: 'daily' }
        ],
        home: [
            { id: 'hm1', title: 'ترتيب الغرفة', done: false, time: '08:00', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'hm2', title: 'التنظيف', done: false, time: '', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'hm3', title: 'الغسيل', done: false, time: '', priority: 'low', notes: '', repeat: 'daily' },
            { id: 'hm4', title: 'الطبخ', done: false, time: '', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'hm5', title: 'شراء الاحتياجات', done: false, time: '', priority: 'low', notes: '', repeat: 'daily' }
        ],
        selfcare: [
            { id: 'sc1', title: 'العناية بالبشرة', done: false, time: '21:30', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'sc2', title: 'العناية بالشعر', done: false, time: '', priority: 'low', notes: '', repeat: 'daily' },
            { id: 'sc3', title: 'الراحة والاسترخاء', done: false, time: '', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'sc4', title: 'القراءة للمتعة', done: false, time: '', priority: 'low', notes: '', repeat: 'daily' },
            { id: 'sc5', title: 'كتابة اليوميات', done: false, time: '22:30', priority: 'low', notes: '', repeat: 'daily' }
        ],
        relations: [
            { id: 'r1', title: 'الاتصال بالأهل', done: false, time: '', priority: 'high', notes: '', repeat: 'daily' },
            { id: 'r2', title: 'صلة الرحم', done: false, time: '', priority: 'medium', notes: '', repeat: 'weekly' },
            { id: 'r3', title: 'سؤال على صديق', done: false, time: '', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'r4', title: 'عمل خير', done: false, time: '', priority: 'medium', notes: '', repeat: 'daily' },
            { id: 'r5', title: 'الابتسامة', done: false, time: '', priority: 'low', notes: '', repeat: 'daily' }
        ]
    },
    habits: [
        { id: 'hb1', title: 'شرب الماء بانتظام', streak: 0, bestStreak: 0, totalDays: 0, history: [] },
        { id: 'hb2', title: 'الرياضة اليومية', streak: 0, bestStreak: 0, totalDays: 0, history: [] },
        { id: 'hb3', title: 'قراءة القرآن', streak: 0, bestStreak: 0, totalDays: 0, history: [] },
        { id: 'hb4', title: 'الصلاة في وقتها', streak: 0, bestStreak: 0, totalDays: 0, history: [] }
    ],
    goals: [
        { id: 'g1', title: 'إنهاء جميع المهام', period: 'daily', current: 0, target: 100, unit: '%' },
        { id: 'g2', title: 'قراءة 50 صفحة', period: 'weekly', current: 0, target: 50, unit: 'صفحة' },
        { id: 'g3', title: 'خسارة 2 كجم', period: 'monthly', current: 0, target: 2, unit: 'كجم' },
        { id: 'g4', title: 'تعلم مهارة جديدة', period: 'yearly', current: 0, target: 3, unit: 'مهارات' }
    ],
    diary: [],
    achievements: [
        { id: 'a1', title: 'أول يوم كامل', desc: 'أكملي جميع مهام يوم واحد', icon: '🌟', unlocked: false, condition: 'complete_day' },
        { id: 'a2', title: 'أسبوع كامل', desc: '7 أيام متتالية من الإنجاز', icon: '🔥', unlocked: false, condition: 'week_streak' },
        { id: 'a3', title: 'شهر كامل', desc: '30 يومًا من التميز', icon: '💎', unlocked: false, condition: 'month_streak' },
        { id: 'a4', title: '100 صلاة', desc: 'أكملي 100 صلاة في وقتها', icon: '🕌', unlocked: false, condition: 'prayers_100' },
        { id: 'a5', title: '30 يوم قرآن', desc: 'اقرئي القرآن 30 يومًا متتاليًا', icon: '📖', unlocked: false, condition: 'quran_30' },
        { id: 'a6', title: '100 كوب ماء', desc: 'اشربي 100 كوب ماء', icon: '💧', unlocked: false, condition: 'water_100' },
        { id: 'a7', title: '10000 خطوة', desc: 'امشي 10000 خطوة في يوم واحد', icon: '👟', unlocked: false, condition: 'steps_10000' },
        { id: 'a8', title: 'رنونة فخورة', desc: 'حققي 100% لمدة أسبوع', icon: '👑', unlocked: false, condition: 'perfect_week' }
    ],
    history: {},
    stats: { totalTasks: 0, totalPrayers: 0, totalQuranPages: 0, totalWaterCups: 0, bestStreak: 0, currentStreak: 0, completeDays: 0, totalDays: 0 }
};

let appData = null;
let currentSection = 'home';
let renonaTimer = null;

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getTodayKey() {
    const now = new Date();
    return now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ar-SA', options);
}

function getHijriDate() {
    const date = new Date();
    try {
        const options = { year: 'numeric', month: 'long', day: 'numeric', calendar: 'islamic-umalqura' };
        return date.toLocaleDateString('ar-SA', options);
    } catch (e) {
        const hijriYear = Math.floor((date.getFullYear() - 622) * 0.97);
        const months = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
        return date.getDate() + ' ' + months[date.getMonth()] + ' ' + hijriYear + ' هـ';
    }
}

function getDayName() {
    const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    return days[new Date().getDay()];
}

function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return { text: 'صباح الخير يا ' + APP_CONFIG.nickName + ' 🌸', sub: 'يلا نبدأ يوم جديد.', emoji: '☀️' };
    if (hour < 17) return { text: 'مساء النور يا ' + APP_CONFIG.nickName + ' ✨', sub: 'كملي يومك بقوة.', emoji: '🌤️' };
    if (hour < 21) return { text: 'مساء الخير يا ' + APP_CONFIG.nickName + ' 🌙', sub: 'خلصي باقي مهامك.', emoji: '🌅' };
    return { text: 'تصبحي على خير يا ' + APP_CONFIG.nickName + ' 💤', sub: 'استريحي بقى.', emoji: '🌙' };
}

function getDailyQuote() {
    const quotes = [
        '"اللهم بارك لي في يومي"',
        '"كل يوم هو بداية جديدة"',
        '"النجاح يبدأ بقرار"',
        '"أنتِ أقوى مما تظنين"',
        '"الاستمرار هو مفتاح النجاح"',
        '"ربنا يوفقك النهارده"',
        '"ابتسمي، فالحياة جميلة"',
        '"كل خطوة صغيرة تقربك من هدفك"',
        '"العطاء لا ينضب"',
        '"ثقي بنفسك يا كوتي"'
    ];
    return quotes[new Date().getDate() % quotes.length];
}

/* ===== Local Storage ===== */
function loadData() {
    try {
        const stored = localStorage.getItem(APP_CONFIG.storageKey);
        if (stored) {
            appData = JSON.parse(stored);
            const todayKey = getTodayKey();
            if (appData.today.date !== todayKey) {
                saveDayToHistory();
                resetDailyData();
            }
        } else {
            appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
            appData.today.date = getTodayKey();
            saveData();
        }
    } catch (e) {
        appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
        appData.today.date = getTodayKey();
    }
}

function saveData() {
    try {
        localStorage.setItem(APP_CONFIG.storageKey, JSON.stringify(appData));
    } catch (e) {
        showToast('⚠️ تعذر حفظ البيانات');
    }
}

function saveDayToHistory() {
    const todayKey = appData.today.date;
    if (!todayKey) return;
    const totalTasks = countTotalTasks();
    const doneTasks = countDoneTasks();
    const percent = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

    appData.history[todayKey] = {
        date: todayKey, percent: percent, tasksDone: doneTasks, totalTasks: totalTasks,
        prayers: { ...appData.today.prayers }, water: appData.today.water,
        quranPages: appData.today.quranPages, mood: appData.today.mood, completed: appData.today.completed
    };

    appData.stats.totalDays++;
    if (percent >= 80) {
        appData.stats.completeDays++;
        appData.stats.currentStreak++;
        if (appData.stats.currentStreak > appData.stats.bestStreak) {
            appData.stats.bestStreak = appData.stats.currentStreak;
        }
    } else {
        appData.stats.currentStreak = 0;
    }
    appData.stats.totalTasks += doneTasks;
    Object.values(appData.today.prayers).forEach(p => { if (p) appData.stats.totalPrayers++; });
    appData.stats.totalQuranPages += appData.today.quranPages;
    appData.stats.totalWaterCups += appData.today.water;
}

function resetDailyData() {
    appData.today = {
        date: getTodayKey(), started: false, completed: false, mood: null, water: 0,
        prayers: { fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
        quranPages: 0, steps: 0, sleepHours: 0
    };
    Object.keys(appData.tasks).forEach(cat => {
        appData.tasks[cat].forEach(task => { task.done = false; });
    });
    saveData();
}

/* ===== Navigation ===== */
function initApp() {
    loadData();
    applyTheme();
    setTimeout(() => {
        document.getElementById('splash-screen').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
        document.getElementById('app').classList.add('visible');
        initHomePage();
        initTasksPage();
        initCalendarPage();
        initStatsPage();
        initHabitsPage();
        initGoalsPage();
        initDiaryPage();
        initAchievementsPage();
        initEndDayPage();
        initSettingsPage();
        setTimeout(() => {
            const greeting = getGreeting();
            showRenona(greeting.text);
        }, 1000);
        startRenonaMessages();
    }, 2500);
}

function showSection(sectionId) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
        currentSection = sectionId;
        switch(sectionId) {
            case 'home': initHomePage(); break;
            case 'tasks': initTasksPage(); break;
            case 'calendar': initCalendarPage(); break;
            case 'stats': initStatsPage(); break;
            case 'habits': initHabitsPage(); break;
            case 'goals': initGoalsPage(); break;
            case 'diary': initDiaryPage(); break;
            case 'achievements': initAchievementsPage(); break;
            case 'endday': initEndDayPage(); break;
            case 'settings': initSettingsPage(); break;
        }
    }
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === sectionId) item.classList.add('active');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

function showMoreMenu() {
    document.getElementById('more-menu').classList.add('open');
}

function closeMoreMenu() {
    document.getElementById('more-menu').classList.remove('open');
}

/* ===== Toast ===== */
function showToast(message, icon) {
    icon = icon || '✨';
    const toast = document.getElementById('toast');
    document.getElementById('toast-icon').textContent = icon;
    document.getElementById('toast-message').textContent = message;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

/* ===== Renona ===== */
function showRenona(message) {
    const mascot = document.getElementById('renona-mascot');
    document.getElementById('renona-text').textContent = message;
    mascot.classList.remove('hidden');
    clearTimeout(renonaTimer);
    renonaTimer = setTimeout(() => { hideRenona(); }, 6000);
}

function hideRenona() {
    document.getElementById('renona-mascot').classList.add('hidden');
}

function startRenonaMessages() {
    const messages = [
        'استريحي شوية واشربي مية 💧',
        'أنا فخورة بيكي يا كوتي 💗',
        'باقي خطوة وتكملي كل المهام ✨',
        'ربنا يوفقك النهارده 🌸',
        'تذكري تصلي على النبي ﷺ',
        'ابتسمي، أنتِ الأجمل 😊',
        'خدي نفس عميق واستمري 💪'
    ];
    setInterval(() => {
        if (Math.random() > 0.6) {
            showRenona(messages[Math.floor(Math.random() * messages.length)]);
        }
    }, 180000);
}

function getRenonaProgressMessage(percent) {
    if (percent === 0) return 'ولا يهمك يا ' + APP_CONFIG.nickName + '.. لسه اليوم في أوله.';
    if (percent < 30) return 'يلا يا ' + APP_CONFIG.nickName + '.. ابدئي بأول مهمة.';
    if (percent < 50) return 'كويس يا ' + APP_CONFIG.nickName + '.. كملي.';
    if (percent < 80) return 'برافو يا رنونة.. كملي.';
    if (percent < 100) return 'فاضل شوية وتخلصي كل حاجة.';
    return 'أنا فخورة بيكي جدًا يا ' + APP_CONFIG.nickName + ' 👑';
}

/* ===== Home Page ===== */
function initHomePage() {
    const greeting = getGreeting();
    document.getElementById('greeting-text').textContent = greeting.text;
    document.getElementById('greeting-sub').textContent = greeting.sub;
    document.querySelector('.greeting-emoji').textContent = greeting.emoji;
    document.getElementById('date-gregorian').textContent = formatDate(new Date());
    document.getElementById('date-hijri').textContent = getHijriDate();
    document.getElementById('day-name').textContent = getDayName();
    document.getElementById('daily-quote').textContent = getDailyQuote();
    updateProgressCircle();
    updatePrayersDisplay();
    updateWaterDisplay();
    updateMoodDisplay();
}

function updateProgressCircle() {
    const total = countTotalTasks();
    const done = countDoneTasks();
    const percent = total > 0 ? Math.round((done / total) * 100) : 0;
    const circle = document.getElementById('progress-ring');
    const circumference = 2 * Math.PI * 85;
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    document.getElementById('progress-percent').textContent = percent + '%';
    document.getElementById('done-count').textContent = done;
    document.getElementById('remaining-count').textContent = total - done;
    if (percent > 0 && percent % 25 === 0) {
        showRenona(getRenonaProgressMessage(percent));
    }
}

function countTotalTasks() {
    let count = 0;
    Object.values(appData.tasks).forEach(cat => { count += cat.length; });
    return count;
}

function countDoneTasks() {
    let count = 0;
    Object.values(appData.tasks).forEach(cat => { cat.forEach(t => { if (t.done) count++; }); });
    return count;
}

function startDay() {
    appData.today.started = true;
    saveData();
    showToast('🚀 يومك بدأ يا كوتي! بالتوفيق');
    showRenona('يلا نبدأ يوم جديد يا كوتي 💪');
}

function updatePrayersDisplay() {
    const prayers = appData.today.prayers;
    document.querySelectorAll('.prayer-mini').forEach(el => {
        const prayer = el.dataset.prayer;
        if (prayers[prayer]) {
            el.classList.add('done');
            el.querySelector('.prayer-status').textContent = '✓';
        } else {
            el.classList.remove('done');
            el.querySelector('.prayer-status').textContent = '○';
        }
        el.onclick = function() { togglePrayer(prayer); };
    });
}

function togglePrayer(prayer) {
    appData.today.prayers[prayer] = !appData.today.prayers[prayer];
    saveData();
    updatePrayersDisplay();
    updateProgressCircle();
    if (appData.today.prayers[prayer]) showToast('🕌 صلاة مقبولة إن شاء الله');
    checkAllPrayersDone();
}

function checkAllPrayersDone() {
    const allDone = Object.values(appData.today.prayers).every(p => p);
    if (allDone) {
        showRenona('مبارك يا كوتي! خلصتي كل الصلوات 🕌✨');
        unlockAchievement('prayers_100');
    }
}

function updateWaterDisplay() {
    document.querySelectorAll('.water-cup').forEach((cup, index) => {
        if (index < appData.today.water) {
            cup.classList.add('filled');
        } else {
            cup.classList.remove('filled');
        }
    });
    document.getElementById('water-count').textContent = appData.today.water;
}

function toggleWater(index) {
    if (index < appData.today.water) {
        appData.today.water = index;
    } else {
        appData.today.water = index + 1;
        if (appData.today.water === 8) showToast('💧 كوبك الثامن! أحسنتِ');
    }
    saveData();
    updateWaterDisplay();
    updateProgressCircle();
}

function updateMoodDisplay() {
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.dataset.mood === appData.today.mood) btn.classList.add('selected');
    });
}

function setMood(mood) {
    appData.today.mood = mood;
    saveData();
    updateMoodDisplay();
    const messages = { amazing: 'يومك رائع يا كوتي! استمري 🤩', happy: 'السعادة تليق بيكي يا رنونة 😊', normal: 'عادي كويس، المهم تكملي 💪', tired: 'استريحي شوية يا كوتي 😴', sad: 'ولا يهمك يا كوتي، ربنا معاكِ 😢' };
    showToast(messages[mood] || 'شكراً لمشاركتنا مزاجك 💗');
}

/* ===== Tasks Page ===== */
const CATEGORY_NAMES = {
    worship: { name: 'العبادات', icon: '🕌' },
    health: { name: 'الصحة', icon: '💪' },
    study: { name: 'الدراسة', icon: '📚' },
    work: { name: 'العمل', icon: '💼' },
    home: { name: 'المنزل', icon: '🏠' },
    selfcare: { name: 'العناية بالنفس', icon: '🌸' },
    relations: { name: 'العلاقات', icon: '💕' }
};

function initTasksPage() {
    const container = document.getElementById('tasks-container');
    container.innerHTML = '';
    Object.keys(appData.tasks).forEach(catKey => {
        const cat = appData.tasks[catKey];
        const catInfo = CATEGORY_NAMES[catKey];
        if (cat.length === 0) return;
        const doneCount = cat.filter(t => t.done).length;
        const catDiv = document.createElement('div');
        catDiv.className = 'task-category';
        catDiv.innerHTML = '<div class="task-category-header"><span class="task-category-icon">' + catInfo.icon + '</span><span class="task-category-title">' + catInfo.name + '</span><span class="task-category-count">' + doneCount + '/' + cat.length + '</span></div>';
        cat.forEach(task => {
            catDiv.appendChild(createTaskElement(task, catKey));
        });
        container.appendChild(catDiv);
    });
}

function createTaskElement(task, category) {
    const div = document.createElement('div');
    div.className = 'task-item' + (task.done ? ' done' : '');
    div.innerHTML = '<div class="task-checkbox ' + (task.done ? 'checked' : '') + '" onclick="event.stopPropagation(); toggleTask(\'' + category + '\', \'' + task.id + '\')"></div><div class="task-info" onclick="toggleTask(\'' + category + '\', \'' + task.id + '\')"><div class="task-title">' + task.title + '</div><div class="task-meta"><span class="task-priority ' + task.priority + '"></span>' + (task.time ? '<span>⏰ ' + task.time + '</span>' : '') + (task.notes ? '<span>📝</span>' : '') + '</div></div><div class="task-actions"><button class="task-action-btn" onclick="event.stopPropagation(); editTask(\'' + category + '\', \'' + task.id + '\')">✏️</button><button class="task-action-btn" onclick="event.stopPropagation(); deleteTask(\'' + category + '\', \'' + task.id + '\')">🗑️</button></div>';
    return div;
}

function toggleTask(category, taskId) {
    const task = appData.tasks[category].find(t => t.id === taskId);
    if (task) {
        task.done = !task.done;
        saveData();
        initTasksPage();
        updateProgressCircle();
        if (task.done) {
            showToast('✅ مهمة منجزة! أحسنتِ');
            checkAllTasksDone();
        }
    }
}

function checkAllTasksDone() {
    const total = countTotalTasks();
    const done = countDoneTasks();
    if (total > 0 && done === total) {
        appData.today.completed = true;
        saveData();
        showRenona('أنا فخورة بيكي جدًا يا ' + APP_CONFIG.nickName + ' 👑');
        unlockAchievement('complete_day');
        checkStreakAchievements();
    }
}

function checkStreakAchievements() {
    if (appData.stats.currentStreak >= 7) unlockAchievement('week_streak');
    if (appData.stats.currentStreak >= 30) unlockAchievement('month_streak');
    if (appData.stats.currentStreak >= 7 && countDoneTasks() === countTotalTasks()) unlockAchievement('perfect_week');
}

function deleteTask(category, taskId) {
    if (confirm('هل تريدين حذف هذه المهمة؟')) {
        appData.tasks[category] = appData.tasks[category].filter(t => t.id !== taskId);
        saveData();
        initTasksPage();
        updateProgressCircle();
        showToast('🗑️ تم الحذف');
    }
}

function editTask(category, taskId) {
    const task = appData.tasks[category].find(t => t.id === taskId);
    if (!task) return;
    document.getElementById('task-name').value = task.title;
    document.getElementById('task-category').value = category;
    document.getElementById('task-time').value = task.time;
    document.getElementById('task-priority').value = task.priority;
    document.getElementById('task-notes').value = task.notes;
    document.getElementById('add-task-modal').dataset.editing = JSON.stringify({ category: category, taskId: taskId });
    showAddTaskModal();
}

function showAddTaskModal() {
    document.getElementById('add-task-modal').classList.add('open');
}

function closeAddTaskModal() {
    const modal = document.getElementById('add-task-modal');
    modal.classList.remove('open');
    delete modal.dataset.editing;
    document.getElementById('task-name').value = '';
    document.getElementById('task-time').value = '';
    document.getElementById('task-notes').value = '';
}

function addTask() {
    const title = document.getElementById('task-name').value.trim();
    const category = document.getElementById('task-category').value;
    const time = document.getElementById('task-time').value;
    const priority = document.getElementById('task-priority').value;
    const notes = document.getElementById('task-notes').value;
    if (!title) { showToast('⚠️ أدخلي اسم المهمة'); return; }
    const modal = document.getElementById('add-task-modal');
    if (modal.dataset.editing) {
        const editInfo = JSON.parse(modal.dataset.editing);
        const task = appData.tasks[editInfo.category].find(t => t.id === editInfo.taskId);
        if (task) {
            task.title = title; task.time = time; task.priority = priority; task.notes = notes;
            if (editInfo.category !== category) {
                appData.tasks[editInfo.category] = appData.tasks[editInfo.category].filter(t => t.id !== editInfo.taskId);
                task.id = generateId();
                appData.tasks[category].push(task);
            }
        }
    } else {
        appData.tasks[category].push({ id: generateId(), title: title, done: false, time: time, priority: priority, notes: notes, repeat: 'daily' });
    }
    saveData();
    closeAddTaskModal();
    initTasksPage();
    updateProgressCircle();
    showToast('✅ تم الحفظ');
}

/* ===== Calendar Page ===== */
let calendarCurrentDate = new Date();

function initCalendarPage() {
    renderCalendar();
}

function renderCalendar() {
    const container = document.getElementById('calendar-container');
    const year = calendarCurrentDate.getFullYear();
    const month = calendarCurrentDate.getMonth();
    const monthNames = ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    const dayNames = ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'];
    let html = '<div class="calendar-header"><button class="calendar-nav-btn" onclick="changeMonth(-1)">›</button><span class="calendar-month-year">' + monthNames[month] + ' ' + year + '</span><button class="calendar-nav-btn" onclick="changeMonth(1)">‹</button></div><div class="calendar-grid">';
    dayNames.forEach(day => { html += '<div class="calendar-day-header">' + day + '</div>'; });
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    for (let i = 0; i < firstDay; i++) { html += '<div class="calendar-day other-month"></div>'; }
    for (let day = 1; day <= daysInMonth; day++) {
        const dateKey = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
        const isToday = today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
        const dayData = appData.history[dateKey];
        let statusClass = '';
        if (dayData) {
            if (dayData.percent >= 90) statusClass = 'status-excellent';
            else if (dayData.percent >= 70) statusClass = 'status-verygood';
            else if (dayData.percent >= 50) statusClass = 'status-good';
            else if (dayData.percent >= 30) statusClass = 'status-fair';
            else statusClass = 'status-poor';
        }
        html += '<div class="calendar-day ' + (isToday ? 'today' : '') + '" onclick="showDayDetail(\'' + dateKey + '\')"><span>' + day + '</span>' + (statusClass ? '<span class="calendar-day-status ' + statusClass + '"></span>' : '') + '</div>';
    }
    html += '</div><div class="calendar-legend"><div class="legend-item"><span class="legend-dot status-excellent"></span> ممتاز</div><div class="legend-item"><span class="legend-dot status-verygood"></span> جيد جدًا</div><div class="legend-item"><span class="legend-dot status-good"></span> جيد</div><div class="legend-item"><span class="legend-dot status-fair"></span> مقبول</div><div class="legend-item"><span class="legend-dot status-poor"></span> ضعيف</div></div><div id="day-detail-container"></div>';
    container.innerHTML = html;
}

function changeMonth(delta) {
    calendarCurrentDate.setMonth(calendarCurrentDate.getMonth() + delta);
    renderCalendar();
}

function showDayDetail(dateKey) {
    const dayData = appData.history[dateKey];
    const container = document.getElementById('day-detail-container');
    if (!dayData) {
        container.innerHTML = '<div class="day-detail"><div class="day-detail-header"><span class="day-detail-title">' + dateKey + '</span><button class="day-detail-close" onclick="closeDayDetail()">×</button></div><p style="text-align:center;color:var(--color-text-muted);padding:var(--space-lg)">لا توجد بيانات لهذا اليوم</p></div>';
        return;
    }
    const prayersCount = Object.values(dayData.prayers).filter(p => p).length;
    container.innerHTML = '<div class="day-detail"><div class="day-detail-header"><span class="day-detail-title">' + dateKey + '</span><button class="day-detail-close" onclick="closeDayDetail()">×</button></div><div style="display:grid;grid-template-columns:repeat(2,1fr);gap:var(--space-md);margin-bottom:var(--space-md)"><div class="endday-stat"><div class="endday-stat-icon">📊</div><div class="endday-stat-value">' + dayData.percent + '%</div><div class="endday-stat-label">الإنجاز</div></div><div class="endday-stat"><div class="endday-stat-icon">✅</div><div class="endday-stat-value">' + dayData.tasksDone + '/' + dayData.totalTasks + '</div><div class="endday-stat-label">المهام</div></div><div class="endday-stat"><div class="endday-stat-icon">🕌</div><div class="endday-stat-value">' + prayersCount + '/5</div><div class="endday-stat-label">الصلوات</div></div><div class="endday-stat"><div class="endday-stat-icon">💧</div><div class="endday-stat-value">' + dayData.water + '</div><div class="endday-stat-label">أكواب الماء</div></div></div>' + (dayData.mood ? '<p style="text-align:center;font-size:0.9rem;color:var(--color-text-light)">المزاج: ' + getMoodEmoji(dayData.mood) + '</p>' : '') + '</div>';
}

function closeDayDetail() {
    document.getElementById('day-detail-container').innerHTML = '';
}

function getMoodEmoji(mood) {
    const emojis = { amazing: '🤩', happy: '😊', normal: '😐', tired: '😴', sad: '😢' };
    return emojis[mood] || mood;
}

/* ===== Stats Page ===== */
function initStatsPage() {
    document.getElementById('stat-complete-days').textContent = appData.stats.completeDays;
    document.getElementById('stat-streak').textContent = appData.stats.bestStreak;
    const avg = appData.stats.totalDays > 0 ? Math.round((appData.stats.completeDays / appData.stats.totalDays) * 100) : 0;
    document.getElementById('stat-avg').textContent = avg + '%';
    document.getElementById('stat-total-tasks').textContent = appData.stats.totalTasks;
    drawWeekChart();
    drawCategoryChart();
}

function drawWeekChart() {
    const canvas = document.getElementById('week-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 350 * dpr;
    canvas.height = 200 * dpr;
    ctx.scale(dpr, dpr);
    const width = 350, height = 200, padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    ctx.clearRect(0, 0, width, height);
    const days = [];
    const dayNames = ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
        const data = appData.history[key];
        days.push({ name: dayNames[d.getDay()], percent: data ? data.percent : 0 });
    }
    ctx.strokeStyle = 'rgba(200, 180, 190, 0.3)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = padding + (chartHeight / 4) * i;
        ctx.beginPath(); ctx.moveTo(padding, y); ctx.lineTo(width - padding, y); ctx.stroke();
    }
    const barWidth = chartWidth / days.length * 0.6;
    const barSpacing = chartWidth / days.length;
    days.forEach((day, index) => {
        const x = padding + barSpacing * index + (barSpacing - barWidth) / 2;
        const barHeight = (day.percent / 100) * chartHeight;
        const y = padding + chartHeight - barHeight;
        const gradient = ctx.createLinearGradient(0, y, 0, padding + chartHeight);
        gradient.addColorStop(0, '#E8B4B8'); gradient.addColorStop(1, '#D4A5D9');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, 8);
        ctx.fill();
        ctx.fillStyle = '#7A6F7F';
        ctx.font = '12px "Noto Sans Arabic"';
        ctx.textAlign = 'center';
        ctx.fillText(day.name, x + barWidth / 2, padding + chartHeight + 18);
        if (day.percent > 0) {
            ctx.fillStyle = '#B76E79';
            ctx.font = 'bold 11px "Noto Sans Arabic"';
            ctx.fillText(day.percent + '%', x + barWidth / 2, y - 6);
        }
    });
}

function drawCategoryChart() {
    const canvas = document.getElementById('category-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 350 * dpr;
    canvas.height = 200 * dpr;
    ctx.scale(dpr, dpr);
    const width = 350, height = 200;
    const centerX = width / 2, centerY = height / 2, radius = 70;
    ctx.clearRect(0, 0, width, height);
    const categories = [];
    const colors = ['#E8B4B8', '#D4A5D9', '#C9B1FF', '#FFB6C1', '#E6E6FA', '#F5D5D8', '#DDA0DD'];
    let total = 0;
    Object.keys(appData.tasks).forEach((cat, index) => {
        const count = appData.tasks[cat].filter(t => t.done).length;
        if (count > 0) { categories.push({ name: CATEGORY_NAMES[cat].name, count: count, color: colors[index % colors.length] }); total += count; }
    });
    if (total === 0) {
        ctx.fillStyle = '#A99FA8'; ctx.font = '14px "Noto Sans Arabic"'; ctx.textAlign = 'center';
        ctx.fillText('لا توجد بيانات كافية', centerX, centerY); return;
    }
    let currentAngle = -Math.PI / 2;
    categories.forEach(cat => {
        const sliceAngle = (cat.count / total) * 2 * Math.PI;
        ctx.beginPath(); ctx.moveTo(centerX, centerY); ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle); ctx.closePath();
        ctx.fillStyle = cat.color; ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 2; ctx.stroke();
        currentAngle += sliceAngle;
    });
    ctx.beginPath(); ctx.arc(centerX, centerY, radius * 0.5, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255,255,255,0.8)'; ctx.fill();
    ctx.fillStyle = '#B76E79'; ctx.font = 'bold 16px "Noto Sans Arabic"'; ctx.textAlign = 'center';
    ctx.fillText(total, centerX, centerY - 5);
    ctx.font = '11px "Noto Sans Arabic"'; ctx.fillStyle = '#7A6F7F';
    ctx.fillText('مهمة', centerX, centerY + 12);
    let legendY = 20;
    categories.forEach((cat, index) => {
        const x = 10;
        ctx.fillStyle = cat.color; ctx.beginPath(); ctx.arc(x + 6, legendY + 6, 5, 0, 2 * Math.PI); ctx.fill();
        ctx.fillStyle = '#7A6F7F'; ctx.font = '11px "Noto Sans Arabic"'; ctx.textAlign = 'right';
        ctx.fillText(cat.name + ' (' + cat.count + ')', x + 120, legendY + 10);
        legendY += 20;
    });
}

/* ===== Habits Page ===== */
function initHabitsPage() {
    const container = document.getElementById('habits-container');
    container.innerHTML = '';
    appData.habits.forEach(habit => {
        const card = document.createElement('div');
        card.className = 'habit-card';
        let daysHtml = '';
        const dayNames = ['س', 'ح', 'ن', 'ث', 'ر', 'خ', 'ج'];
        for (let i = 6; i >= 0; i--) {
            const d = new Date(); d.setDate(d.getDate() - i);
            const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
            const done = habit.history && habit.history.includes(key);
            daysHtml += '<div class="habit-day ' + (done ? 'done' : '') + '" onclick="toggleHabitDay(\'' + habit.id + '\', \'' + key + '\')">' + dayNames[d.getDay()] + '</div>';
        }
        const percent = habit.totalDays > 0 ? Math.round((habit.streak / habit.totalDays) * 100) : 0;
        card.innerHTML = '<div class="habit-header"><span class="habit-title">' + habit.title + '</span><span class="habit-streak">🔥 ' + habit.streak + ' يوم</span></div><div class="habit-days">' + daysHtml + '</div><div class="habit-progress"><div class="habit-progress-bar"><div class="habit-progress-fill" style="width: ' + percent + '%"></div></div><span class="habit-progress-text">' + percent + '%</span></div>';
        container.appendChild(card);
    });
}

function toggleHabitDay(habitId, dateKey) {
    const habit = appData.habits.find(h => h.id === habitId);
    if (!habit) return;
    if (!habit.history) habit.history = [];
    const index = habit.history.indexOf(dateKey);
    if (index > -1) { habit.history.splice(index, 1); habit.streak = Math.max(0, habit.streak - 1); }
    else { habit.history.push(dateKey); habit.streak++; habit.totalDays++; if (habit.streak > habit.bestStreak) habit.bestStreak = habit.streak; }
    saveData(); initHabitsPage();
}

function showAddHabitModal() {
    const title = prompt('اسم العادة الجديدة:');
    if (title && title.trim()) {
        appData.habits.push({ id: generateId(), title: title.trim(), streak: 0, bestStreak: 0, totalDays: 0, history: [] });
        saveData(); initHabitsPage(); showToast('🌿 عادة جديدة تمت إضافتها');
    }
}

/* ===== Goals Page ===== */
function initGoalsPage() {
    const container = document.getElementById('goals-container');
    container.innerHTML = '';
    const periodNames = { daily: 'يومي', weekly: 'أسبوعي', monthly: 'شهري', yearly: 'سنوي' };
    appData.goals.forEach(goal => {
        const percent = goal.target > 0 ? Math.round((goal.current / goal.target) * 100) : 0;
        const card = document.createElement('div');
        card.className = 'goal-card';
        card.innerHTML = '<div class="goal-header"><span class="goal-title">' + goal.title + '</span><span class="goal-period">' + periodNames[goal.period] + '</span></div><div class="goal-progress-wrapper"><div class="goal-progress-bar"><div class="goal-progress-fill" style="width: ' + Math.min(percent, 100) + '%"></div></div><div class="goal-progress-info"><span>' + goal.current + ' / ' + goal.target + ' ' + goal.unit + '</span><span>' + percent + '%</span></div></div><div style="display:flex;gap:var(--space-sm);margin-top:var(--space-md)"><button class="btn-secondary" style="flex:1;padding:8px;font-size:0.8rem" onclick="updateGoal(\'' + goal.id + '\', -1)">-</button><button class="btn-primary" style="flex:1;padding:8px;font-size:0.8rem" onclick="updateGoal(\'' + goal.id + '\', 1)">+</button></div>';
        container.appendChild(card);
    });
}

function updateGoal(goalId, delta) {
    const goal = appData.goals.find(g => g.id === goalId);
    if (!goal) return;
    goal.current = Math.max(0, Math.min(goal.target, goal.current + delta));
    saveData(); initGoalsPage();
}

function showAddGoalModal() {
    const title = prompt('اسم الهدف:');
    if (!title || !title.trim()) return;
    const target = parseInt(prompt('الهدف (رقم):')) || 1;
    const unit = prompt('الوحدة (مثال: صفحة، كجم):') || 'وحدة';
    const periods = ['daily', 'weekly', 'monthly', 'yearly'];
    const periodNames = ['يومي', 'أسبوعي', 'شهري', 'سنوي'];
    let periodStr = 'اختر الفترة:\n';
    periodNames.forEach((p, i) => { periodStr += (i + 1) + '. ' + p + '\n'; });
    const periodChoice = parseInt(prompt(periodStr)) || 1;
    appData.goals.push({ id: generateId(), title: title.trim(), period: periods[Math.min(periodChoice - 1, 3)], current: 0, target: target, unit: unit });
    saveData(); initGoalsPage(); showToast('🎯 هدف جديد تمت إضافته');
}

/* ===== Diary Page ===== */
function initDiaryPage() {
    const container = document.getElementById('diary-container');
    container.innerHTML = '';
    if (appData.diary.length === 0) {
        container.innerHTML = '<div class="glass-card" style="text-align:center;padding:var(--space-xl)"><div style="font-size:3rem;margin-bottom:var(--space-md)">📔</div><p style="color:var(--color-text-muted)">لا توجد يوميات بعد. ابدئي بكتابة يومك!</p></div>';
        return;
    }
    const sorted = [...appData.diary].sort((a, b) => new Date(b.date) - new Date(a.date));
    sorted.forEach(entry => {
        const div = document.createElement('div');
        div.className = 'diary-entry';
        div.innerHTML = '<div class="diary-date">📅 ' + formatDate(new Date(entry.date)) + '</div><div class="diary-content">' + entry.content + '</div>' + (entry.images && entry.images.length > 0 ? '<div class="diary-images">' + entry.images.map(img => '<img src="' + img + '" class="diary-image" alt="صورة">').join('') + '</div>' : '') + '<div style="display:flex;justify-content:flex-end;gap:var(--space-sm);margin-top:var(--space-sm)"><button class="task-action-btn" onclick="deleteDiaryEntry(\'' + entry.id + '\')">🗑️</button></div>';
        container.appendChild(div);
    });
}

function showAddDiaryModal() {
    const content = prompt('اكتبي يومك يا كوتي:');
    if (content && content.trim()) {
        appData.diary.push({ id: generateId(), date: new Date().toISOString(), content: content.trim(), images: [] });
        saveData(); initDiaryPage(); showToast('📔 تم حفظ اليومية');
    }
}

function deleteDiaryEntry(entryId) {
    if (confirm('هل تريدين حذف هذه اليومية؟')) {
        appData.diary = appData.diary.filter(e => e.id !== entryId);
        saveData(); initDiaryPage(); showToast('🗑️ تم الحذف');
    }
}

/* ===== Achievements Page ===== */
function initAchievementsPage() {
    const container = document.getElementById('achievements-container');
    container.innerHTML = '';
    appData.achievements.forEach(ach => {
        const card = document.createElement('div');
        card.className = 'achievement-card ' + (ach.unlocked ? 'unlocked' : 'locked');
        card.innerHTML = '<span class="achievement-badge">' + (ach.unlocked ? '✨' : '🔒') + '</span><span class="achievement-icon">' + ach.icon + '</span><div class="achievement-title">' + ach.title + '</div><div class="achievement-desc">' + ach.desc + '</div>';
        container.appendChild(card);
    });
}

function unlockAchievement(condition) {
    const ach = appData.achievements.find(a => a.condition === condition);
    if (ach && !ach.unlocked) {
        ach.unlocked = true; saveData();
        showToast('🏆 وسام جديد: ' + ach.title);
        showRenona('مبروك يا كوتي! فتحتي وسام ' + ach.title + ' 🎉');
    }
}

/* ===== End Day Page ===== */
function initEndDayPage() {
    const container = document.getElementById('endday-container');
    const total = countTotalTasks();
    const done = countDoneTasks();
    const percent = total > 0 ? Math.round((done / total) * 100) : 0;
    const prayersCount = Object.values(appData.today.prayers).filter(p => p).length;
    let html = '<div class="endday-summary"><div class="endday-score">' + percent + '</div><div class="endday-score-label">من 100</div><div class="endday-stats"><div class="endday-stat"><div class="endday-stat-icon">✅</div><div class="endday-stat-value">' + done + '/' + total + '</div><div class="endday-stat-label">المهام</div></div><div class="endday-stat"><div class="endday-stat-icon">🕌</div><div class="endday-stat-value">' + prayersCount + '/5</div><div class="endday-stat-label">الصلوات</div></div><div class="endday-stat"><div class="endday-stat-icon">💧</div><div class="endday-stat-value">' + appData.today.water + '</div><div class="endday-stat-label">أكواب الماء</div></div><div class="endday-stat"><div class="endday-stat-icon">📖</div><div class="endday-stat-value">' + appData.today.quranPages + '</div><div class="endday-stat-label">صفحات القرآن</div></div></div></div>';
    html += '<div class="endday-message"><div class="endday-message-text">' + getRenonaProgressMessage(percent) + '</div><div class="endday-message-avatar">🐰</div></div>';
    if (!appData.today.completed) {
        html += '<button class="action-btn primary" style="width:100%;margin-top:var(--space-md)" onclick="endDay()"><span class="action-icon">🌙</span><span>إنهاء اليوم</span></button>';
    } else {
        html += '<div class="glass-card" style="text-align:center;margin-top:var(--space-md)"><p style="color:var(--color-success);font-weight:700">✅ تم إنهاء اليوم بنجاح</p></div>';
    }
    container.innerHTML = html;
}

function endDay() {
    appData.today.completed = true;
    saveDayToHistory();
    saveData();
    showToast('🌙 تم إنهاء اليوم. أحسنتِ يا كوتي!');
    showRenona('يوم رائع يا ' + APP_CONFIG.nickName + '! استريحي الآن 💤');
    initEndDayPage();
}

/* ===== Settings Page ===== */
function initSettingsPage() {
    document.getElementById('dark-mode-toggle').checked = appData.settings.darkMode;
    document.getElementById('sound-toggle').checked = appData.settings.soundEnabled;
    document.querySelectorAll('.color-theme').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === appData.settings.theme);
    });
}

function toggleDarkMode() {
    appData.settings.darkMode = document.getElementById('dark-mode-toggle').checked;
    saveData();
    applyTheme();
    showToast(appData.settings.darkMode ? '🌙 الوضع الداكن مفعل' : '☀️ الوضع الفاتح مفعل');
}

function toggleSound() {
    appData.settings.soundEnabled = document.getElementById('sound-toggle').checked;
    saveData();
    showToast(appData.settings.soundEnabled ? '🔊 الأصوات مفعلة' : '🔇 الأصوات معطلة');
}

function setTheme(theme) {
    appData.settings.theme = theme;
    saveData();
    applyTheme();
    document.querySelectorAll('.color-theme').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    showToast('🎨 تم تغيير اللون');
}

function applyTheme() {
    const html = document.documentElement;
    if (appData.settings.darkMode) {
        html.setAttribute('data-theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
    }
}

/* ===== Export / Import ===== */
function exportData() {
    const dataStr = JSON.stringify(appData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rania_daily_backup_' + getTodayKey() + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('📤 تم تصدير البيانات');
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const data = JSON.parse(event.target.result);
                if (data.tasks && data.settings) {
                    if (confirm('هل تريدين استبدال جميع البيانات الحالية؟')) {
                        appData = data;
                        saveData();
                        location.reload();
                    }
                } else {
                    showToast('⚠️ ملف غير صالح');
                }
            } catch (err) {
                showToast('⚠️ خطأ في قراءة الملف');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function clearAllData() {
    if (confirm('⚠️ هل أنتِ متأكدة؟ سيتم حذف جميع البيانات نهائيًا!')) {
        if (confirm('تأكيد نهائي: مسح جميع البيانات؟')) {
            localStorage.removeItem(APP_CONFIG.storageKey);
            location.reload();
        }
    }
}

/* ===== Initialize ===== */
document.addEventListener('DOMContentLoaded', initApp);
