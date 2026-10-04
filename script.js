const products = [
  { id: "biscuits", name: "Biscuits", price: 30, art: "🍪", unlockAt: 1 },
  { id: "chips", name: "Chips", price: 50, art: "🥔", unlockAt: 1 },
  { id: "milk", name: "Milk", price: 180, art: "🥛", unlockAt: 1 },
  { id: "bread", name: "Bread", price: 120, art: "🍞", unlockAt: 1 },
  { id: "eggs", name: "Eggs", price: 200, art: "🥚", unlockAt: 1 },
  { id: "cold-drink", name: "Cold drink", price: 90, art: "🥤", unlockAt: 1 },
  { id: "water", name: "Water", price: 60, art: "💧", unlockAt: 1 },
  { id: "tea", name: "Tea", price: 260, art: "☕", unlockAt: 5 },
  { id: "sugar", name: "Sugar", price: 170, art: "🧂", unlockAt: 5 },
  { id: "flour", name: "Flour", price: 240, art: "🌾", unlockAt: 8 },
  { id: "soap", name: "Soap", price: 110, art: "🧼", unlockAt: 8 },
  { id: "shampoo", name: "Shampoo sachet", price: 25, art: "🧴", unlockAt: 11 }
];

const translations = {
  en: {
    ui: {
      startKicker: "Neighborhood Game",
      startIntro: "Serve customers, calculate change, handle credit requests, and keep the counter moving before closing time.",
      openShop: "Open Shop",
      cash: "Cash",
      reputation: "Reputation",
      time: "Time",
      customer: "Customer",
      language: "Language",
      patience: "Patience",
      products: "Products",
      clearBasket: "Clear Basket",
      basket: "Basket",
      customerPays: "Customer pays",
      changeToGive: "Change to give",
      creditPrompt: "This customer wants credit. Accepting may help reputation, but cash comes later.",
      acceptCredit: "Accept Credit",
      reject: "Reject",
      serveCustomer: "Serve Customer",
      closingTime: "Closing Time",
      playAgain: "Play Again",
      emptyBasket: "Select products for the customer.",
      creditRequest: "Credit request",
      unlocksAfter: "Unlocks after customer {count}",
      expectedBill: "Expected bill: {amount}. Pick the exact products, then give correct change.",
      calmCounter: "All calm at the counter. For now.",
      customerName: "{type} Customer"
    },
    stages: {
      Morning: "Morning",
      Afternoon: "Afternoon",
      Evening: "Evening",
      Closing: "Closing"
    },
    personalities: {
      Normal: "Normal",
      Bargainer: "Bargainer",
      Impatient: "Impatient",
      Confused: "Confused",
      "Big spender": "Big spender",
      Udhaar: "Credit",
      Regular: "Regular"
    },
    lines: {
      Normal: ["Boss, give me {order}.", "{order}, please. Do you have change?"],
      Bargainer: ["Boss, give me {order} and a little discount.", "{order}. Give me the regular customer rate."],
      Impatient: ["Boss, quickly, I need {order}.", "{order}. I am getting late, fast fast."],
      Confused: ["One minute... {order}. Yes, that's all.", "{order}. No wait, yes, that's fine."],
      "Big spender": ["Guests are coming today. Pack {order}.", "{order}. Give me a big shopping bag too."],
      Udhaar: ["{order}. Can you put it on credit? I'll pay tomorrow.", "Boss, {order}. I'll clear the payment tomorrow."],
      Regular: ["Hello, give me {order} at your usual speed.", "Boss, {order} from your shop always feels right."]
    },
    events: {
      electricity: "Electricity went out. The calculator is dim, mental math time.",
      discount: "Customer asks: Can you give me a little discount? Reputation test.",
      phoneLoad: "Someone at the door asks if you sell phone loads. You do not.",
      secondCustomer: "A second customer is peeking over the counter. Pressure up.",
      noteClaim: "Customer says they gave Rs. 500. Counter note says otherwise.",
      supplier: "Supplier drops cartons near the entrance. Tiny chaos.",
      creditActive: "Credit request active. Decide before serving.",
      rushHour: "Rush hour! Next few customers have less patience.",
      firstCustomer: "Shutter up. First customer is walking in."
    },
    feedback: {
      decideCredit: "Decide credit first. Customer is doing the polite awkward smile.",
      fastSuccess: "Perfect! Customer says: Great speed and great math, boss.",
      normalSuccess: "Served correctly. Customer nods like a serious uncle.",
      wrongItems: "Wrong items or quantity.",
      wrongChange: "Wrong change. Correct change was {amount}.",
      mistakeFull: "{reason} Customer: Boss, please check the bill again.",
      customerLeft: "Customer left: Boss, why so late? I am going to the next shop.",
      creditAccepted: "Credit accepted. Reputation likes it, cash drawer does not.",
      creditRejected: "Credit rejected. Customer pays cash after a tiny lecture."
    },
    results: {
      titles: ["Close The Shop For Today", "Needs More Practice", "Decent Neighborhood Shop", "Great Shopkeeper", "Excellent Shopkeeper"],
      totalSales: "Total sales",
      profit: "Profit",
      customersServed: "Customers served",
      customersLost: "Customers lost",
      mistakes: "Mistakes",
      bestStreak: "Best streak",
      averageTime: "Average time",
      finalReputation: "Final reputation"
    },
    orderJoiner: " and ",
    itemNames: {
      biscuits: "biscuits",
      chips: "chips",
      milk: "milk",
      bread: "bread",
      eggs: "eggs",
      "cold-drink": "cold drink",
      water: "water",
      tea: "tea",
      sugar: "sugar",
      flour: "flour",
      soap: "soap",
      shampoo: "shampoo sachet"
    }
  },
  ur: {
    ui: {
      startKicker: "Neighborhood Game",
      startIntro: "Customers serve karein, change calculate karein, udhaar drama handle karein, aur closing se pehle counter chalate rahein.",
      openShop: "Open Shop",
      cash: "Cash",
      reputation: "Reputation",
      time: "Time",
      customer: "Customer",
      language: "Language",
      patience: "Patience",
      products: "Products",
      clearBasket: "Clear Basket",
      basket: "Basket",
      customerPays: "Customer pays",
      changeToGive: "Change to give",
      creditPrompt: "This customer wants udhaar. Accepting may help reputation, but cash comes later.",
      acceptCredit: "Accept Udhaar",
      reject: "Reject",
      serveCustomer: "Serve Customer",
      closingTime: "Closing Time",
      playAgain: "Play Again",
      emptyBasket: "Select products for the customer.",
      creditRequest: "Udhaar request",
      unlocksAfter: "Unlocks after customer {count}",
      expectedBill: "Expected bill: {amount}. Pick the exact products, then give correct change.",
      calmCounter: "All calm at the counter. For now.",
      customerName: "{type} Customer"
    },
    stages: {
      Morning: "Morning",
      Afternoon: "Afternoon",
      Evening: "Evening",
      Closing: "Closing"
    },
    personalities: {
      Normal: "Normal",
      Bargainer: "Bargainer",
      Impatient: "Impatient",
      Confused: "Confused",
      "Big spender": "Big spender",
      Udhaar: "Udhaar",
      Regular: "Regular"
    },
    lines: {
      Normal: ["Boss, {order} de dein.", "{order}, please. Change hai na?"],
      Bargainer: ["Boss, {order} aur thora discount kar do.", "{order}. Regular samajh ke rate laga dein."],
      Impatient: ["Boss jaldi, {order} chahiye.", "{order}. Late ho raha hoon, fast fast."],
      Confused: ["Ek minute... {order}. Haan bas yehi.", "{order}. Nahi nahi, haan theek hai."],
      "Big spender": ["Aaj mehmaan aa rahe hain. {order} pack kar dein.", "{order}. Bara shopper bhi de dena."],
      Udhaar: ["{order}. Udhaar pe de dein, kal pakka.", "Boss {order}. Paisay kal clear."],
      Regular: ["Assalam o alaikum, usual speed mein {order}.", "Boss, aap ke haath se {order} theek lagta hai."]
    },
    events: {
      electricity: "Electricity went out. Calculator dim hai, mental math time.",
      discount: "Customer says: Boss discount kar dein. Reputation test.",
      phoneLoad: "Someone at the door asks if you sell phone loads. You do not.",
      secondCustomer: "A second customer is peeking over the counter. Pressure up.",
      noteClaim: "Customer says they gave Rs. 500. Counter note says otherwise.",
      supplier: "Supplier drops cartons near the entrance. Tiny chaos.",
      creditActive: "Udhaar request active. Decide before serving.",
      rushHour: "Rush hour! Next few customers have less patience.",
      firstCustomer: "Shutter up. First customer is walking in."
    },
    feedback: {
      decideCredit: "Decide udhaar first. Customer is doing the polite awkward smile.",
      fastSuccess: "Perfect! Customer says: Wah boss, speed bhi aur hisaab bhi.",
      normalSuccess: "Served correctly. Customer nods like a serious uncle.",
      wrongItems: "Wrong items or quantity.",
      wrongChange: "Wrong change. Correct change was {amount}.",
      mistakeFull: "{reason} Customer: Boss hisaab dobara seekh lo.",
      customerLeft: "Customer left: Boss, itni dair? Main agay wali shop ja raha hoon.",
      creditAccepted: "Udhaar accepted. Reputation likes it, cash drawer does not.",
      creditRejected: "Udhaar rejected. Customer pays cash after a tiny lecture."
    },
    results: {
      titles: ["Bhai Shop Band Kar Do", "Needs More Practice", "Decent Mohalla Shop", "Great Shopkeeper", "Excellent Shopkeeper"],
      totalSales: "Total sales",
      profit: "Profit",
      customersServed: "Customers served",
      customersLost: "Customers lost",
      mistakes: "Mistakes",
      bestStreak: "Best streak",
      averageTime: "Average time",
      finalReputation: "Final reputation"
    },
    orderJoiner: " aur ",
    itemNames: {
      biscuits: "biscuits",
      chips: "chips",
      milk: "milk",
      bread: "bread",
      eggs: "eggs",
      "cold-drink": "cold drink",
      water: "water",
      tea: "tea",
      sugar: "sugar",
      flour: "flour",
      soap: "soap",
      shampoo: "shampoo sachet"
    }
  }
};

const personalities = [
  { type: "Normal", avatar: "🙂", patience: 35 },
  { type: "Bargainer", avatar: "🧢", patience: 33 },
  { type: "Impatient", avatar: "😐", patience: 24 },
  { type: "Confused", avatar: "🤔", patience: 36 },
  { type: "Big spender", avatar: "😎", patience: 38 },
  { type: "Udhaar", avatar: "😅", patience: 34 },
  { type: "Regular", avatar: "😊", patience: 40 }
];

const stages = [
  { name: "Morning", from: 1 },
  { name: "Afternoon", from: 6 },
  { name: "Evening", from: 12 },
  { name: "Closing", from: 17 }
];

const state = {
  language: "en",
  cash: 2000,
  revenue: 0,
  profit: 0,
  satisfaction: 82,
  customerNumber: 0,
  maxCustomers: 18,
  served: 0,
  lost: 0,
  mistakes: 0,
  streak: 0,
  bestStreak: 0,
  totalServiceTime: 0,
  basket: {},
  current: null,
  customerStart: 0,
  timerId: null,
  creditAccepted: false,
  creditRejected: false,
  busyMode: 0,
  feedback: null
};

const $ = (id) => document.getElementById(id);

const els = {
  startScreen: $("startScreen"),
  gameScreen: $("gameScreen"),
  resultsScreen: $("resultsScreen"),
  startBtn: $("startBtn"),
  restartBtn: $("restartBtn"),
  cashValue: $("cashValue"),
  repValue: $("repValue"),
  timeValue: $("timeValue"),
  customerCount: $("customerCount"),
  eventTicker: $("eventTicker"),
  customerAvatar: $("customerAvatar"),
  personalityTag: $("personalityTag"),
  customerName: $("customerName"),
  customerDialogue: $("customerDialogue"),
  patienceText: $("patienceText"),
  patienceBar: $("patienceBar"),
  orderHint: $("orderHint"),
  productsGrid: $("productsGrid"),
  clearBtn: $("clearBtn"),
  billValue: $("billValue"),
  basketList: $("basketList"),
  paidValue: $("paidValue"),
  changeInput: $("changeInput"),
  serveBtn: $("serveBtn"),
  feedback: $("feedback"),
  udhaarChoice: $("udhaarChoice"),
  acceptCreditBtn: $("acceptCreditBtn"),
  rejectCreditBtn: $("rejectCreditBtn"),
  ratingTitle: $("ratingTitle"),
  ratingStars: $("ratingStars"),
  resultsGrid: $("resultsGrid")
};

els.languageSelect = $("languageSelect");

function t(path, values = {}) {
  const parts = path.split(".");
  let value = translations[state.language];
  for (const part of parts) value = value?.[part];
  if (value === undefined) {
    value = translations.en;
    for (const part of parts) value = value?.[part];
  }
  if (typeof value !== "string") return value;
  return value.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function money(amount) {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(`ui.${node.dataset.i18n}`);
  });
  els.languageSelect.value = state.language;
  renderProducts();
  renderBasket();
  renderStats();
  if (state.current) renderCustomer();
  if (!state.current) els.eventTicker.textContent = t("events.firstCustomer");
  renderFeedback();
  if (!els.resultsScreen.classList.contains("hidden")) renderResults();
}

function startGame() {
  Object.assign(state, {
    cash: 2000,
    revenue: 0,
    profit: 0,
    satisfaction: 82,
    customerNumber: 0,
    served: 0,
    lost: 0,
    mistakes: 0,
    streak: 0,
    bestStreak: 0,
    totalServiceTime: 0,
    basket: {},
    current: null,
    creditAccepted: false,
    creditRejected: false,
    busyMode: 0,
    feedback: null
  });
  els.startScreen.classList.add("hidden");
  els.resultsScreen.classList.add("hidden");
  els.gameScreen.classList.remove("hidden");
  renderProducts();
  nextCustomer();
}

function endGame() {
  clearInterval(state.timerId);
  els.gameScreen.classList.add("hidden");
  els.resultsScreen.classList.remove("hidden");
  renderResults();
}

function renderResults() {
  const avgTime = state.served ? (state.totalServiceTime / state.served).toFixed(1) : "0.0";
  const rep = Math.max(0, Math.min(100, state.satisfaction));
  const stars = Math.max(1, Math.ceil(rep / 20));
  const titles = t("results.titles");

  els.ratingTitle.textContent = titles[stars - 1];
  els.ratingStars.textContent = "★".repeat(stars) + "☆".repeat(5 - stars);
  els.resultsGrid.innerHTML = [
    [t("results.totalSales"), money(state.revenue)],
    [t("results.profit"), money(state.profit)],
    [t("results.customersServed"), state.served],
    [t("results.customersLost"), state.lost],
    [t("results.mistakes"), state.mistakes],
    [t("results.bestStreak"), state.bestStreak],
    [t("results.averageTime"), `${avgTime}s`],
    [t("results.finalReputation"), `${Math.round(rep)}%`]
  ].map(([label, value]) => `
    <div class="result-stat">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
}

function unlockedProducts() {
  return products.filter((product) => product.unlockAt <= Math.max(1, state.customerNumber));
}

function renderProducts() {
  els.productsGrid.innerHTML = products.map((product) => {
    const locked = product.unlockAt > Math.max(1, state.customerNumber);
    return `
      <button class="product-btn" data-id="${product.id}" ${locked ? "disabled" : ""}>
        <span class="product-art">${locked ? "🔒" : product.art}</span>
        <span class="product-name">${product.name}</span>
        <span class="product-price">${locked ? t("ui.unlocksAfter", { count: product.unlockAt }) : money(product.price)}</span>
      </button>
    `;
  }).join("");

  document.querySelectorAll(".product-btn").forEach((button) => {
    button.addEventListener("click", () => addProduct(button.dataset.id));
  });
}

function makeOrder(personality) {
  const available = unlockedProducts();
  let itemCount = personality.type === "Big spender" ? rand(4, 6) : rand(1, Math.min(4, 1 + Math.floor(state.customerNumber / 4)));
  if (state.busyMode) itemCount += 1;

  for (let attempt = 0; attempt < 20; attempt += 1) {
    const order = {};
    while (Object.keys(order).length < Math.min(itemCount, available.length)) {
      const product = pick(available);
      order[product.id] = (order[product.id] || 0) + rand(1, personality.type === "Big spender" ? 2 : 1);
    }

    if (personality.type === "Confused" && Math.random() < 0.8) {
      const firstId = pick(Object.keys(order));
      order[firstId] += 1;
    }

    if (orderTotal(order) <= 1000) return order;
    itemCount = Math.max(1, itemCount - 1);
  }

  return { [pick(available).id]: 1 };
}

function orderText(order) {
  return Object.entries(order)
    .map(([id, qty]) => {
      return `${qty} ${t(`itemNames.${id}`)}`;
    })
    .join(t("orderJoiner"));
}

function orderTotal(order) {
  return Object.entries(order).reduce((sum, [id, qty]) => {
    const product = products.find((item) => item.id === id);
    return sum + product.price * qty;
  }, 0);
}

function getStage() {
  const stage = ([...stages].reverse().find((item) => state.customerNumber >= item.from) || stages[0]).name;
  return t(`stages.${stage}`);
}

function nextCustomer() {
  clearInterval(state.timerId);
  if (state.customerNumber >= state.maxCustomers) {
    endGame();
    return;
  }

  state.customerNumber += 1;
  state.basket = {};
  state.creditAccepted = false;
  state.creditRejected = false;

  const personality = choosePersonality();
  const order = makeOrder(personality);
  const total = orderTotal(order);
  const paid = personality.type === "Udhaar" ? 0 : choosePayment(total, personality.type === "Big spender");
  const event = makeRandomEvent(personality, order, total);
  const lineIndex = rand(0, t(`lines.${personality.type}`).length - 1);
  const patienceSeconds = Math.max(15, personality.patience - Math.floor(state.customerNumber / 3) - state.busyMode * 4);

  state.current = {
    personality,
    order,
    total,
    paid,
    event,
    lineIndex,
    patienceSeconds,
    patienceLeft: patienceSeconds
  };

  state.customerStart = performance.now();
  renderProducts();
  renderCustomer();
  renderBasket();
  renderStats();
  els.changeInput.value = "";
  state.feedback = null;
  renderFeedback();
  state.timerId = setInterval(tickPatience, 250);
}

function choosePersonality() {
  const pool = state.customerNumber < 4
    ? personalities.filter((person) => ["Normal", "Regular"].includes(person.type))
    : personalities;
  return pick(pool);
}

function choosePayment(total, largeNote) {
  const notes = largeNote ? [500, 1000, 1000] : [50, 100, 500, 1000];
  return notes.find((note) => note >= total) || 1000;
}

function makeRandomEvent(personality, order, total) {
  const chance = Math.min(0.48, 0.12 + state.customerNumber * 0.018);
  if (Math.random() > chance) return null;

  const possible = [
    "electricity",
    "discount",
    "phoneLoad",
    "secondCustomer",
    "noteClaim",
    "supplier"
  ];

  if (personality.type === "Udhaar") return "creditActive";
  if (state.customerNumber > 9 && Math.random() < 0.25) {
    state.busyMode = 3;
    return "rushHour";
  }

  return pick(possible);
}

function renderCustomer() {
  const current = state.current;
  const lines = t(`lines.${current.personality.type}`);
  const line = lines[current.lineIndex].replace("{order}", orderText(current.order));
  const type = t(`personalities.${current.personality.type}`);
  els.customerAvatar.textContent = current.personality.avatar;
  els.personalityTag.textContent = type;
  els.customerName.textContent = t("ui.customerName", { type });
  els.customerDialogue.textContent = line;
  els.paidValue.textContent = current.paid ? money(current.paid) : t("ui.creditRequest");
  els.eventTicker.textContent = current.event ? t(`events.${current.event}`) : t("ui.calmCounter");
  els.orderHint.textContent = t("ui.expectedBill", { amount: money(current.total) });
  els.udhaarChoice.classList.toggle("hidden", current.personality.type !== "Udhaar");
  updatePatienceUI();
}

function renderStats() {
  els.cashValue.textContent = money(state.cash);
  const stars = Math.max(1, Math.ceil(state.satisfaction / 20));
  els.repValue.textContent = "★".repeat(stars) + "☆".repeat(5 - stars);
  els.timeValue.textContent = getStage();
  els.customerCount.textContent = state.customerNumber;
}

function addProduct(id) {
  state.basket[id] = (state.basket[id] || 0) + 1;
  renderBasket();
}

function clearBasket() {
  state.basket = {};
  renderBasket();
}

function basketTotal() {
  return orderTotal(state.basket);
}

function renderBasket() {
  const entries = Object.entries(state.basket);
  els.billValue.textContent = money(basketTotal());

  if (!entries.length) {
    els.basketList.className = "basket-list empty";
    els.basketList.textContent = t("ui.emptyBasket");
    return;
  }

  els.basketList.className = "basket-list";
  els.basketList.innerHTML = entries.map(([id, qty]) => {
    const product = products.find((item) => item.id === id);
    return `
      <div class="basket-item">
        <span>${qty} x ${product.name}</span>
        <strong>${money(product.price * qty)}</strong>
      </div>
    `;
  }).join("");
}

function tickPatience() {
  if (!state.current) return;
  state.current.patienceLeft -= 0.25;
  updatePatienceUI();
  if (state.current.patienceLeft <= 0) {
    loseCustomer("feedback.customerLeft");
  }
}

function updatePatienceUI() {
  const current = state.current;
  const percent = Math.max(0, Math.round((current.patienceLeft / current.patienceSeconds) * 100));
  els.patienceText.textContent = `${percent}%`;
  els.patienceBar.style.width = `${percent}%`;
  els.patienceBar.style.background = percent < 28 ? "var(--red)" : percent < 55 ? "var(--yellow)" : "var(--green)";
}

function ordersMatch(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  return [...keys].every((key) => (a[key] || 0) === (b[key] || 0));
}

function serveCustomer() {
  if (!state.current) return;

  const current = state.current;
  const actualBill = basketTotal();
  const correctOrder = ordersMatch(state.basket, current.order);
  const wantsCredit = current.personality.type === "Udhaar";
  const expectedChange = wantsCredit ? 0 : current.paid - current.total;
  const enteredChange = Number(els.changeInput.value || 0);
  const correctChange = wantsCredit || enteredChange === expectedChange;
  const handledCredit = !wantsCredit || state.creditAccepted || state.creditRejected;
  const serviceTime = (performance.now() - state.customerStart) / 1000;
  const fast = serviceTime < current.patienceSeconds * 0.45;

  if (!handledCredit) {
    setFeedback("feedback.decideCredit", false);
    return;
  }

  const acceptedUdhaarPenalty = wantsCredit && state.creditAccepted;
  const rejectedUdhaarPenalty = wantsCredit && state.creditRejected;
  const success = correctOrder && correctChange && actualBill === current.total;

  clearInterval(state.timerId);

  if (success) {
    const cashIn = acceptedUdhaarPenalty ? 0 : current.total;
    const profit = Math.round(current.total * 0.28);
    state.cash += cashIn;
    state.revenue += current.total;
    state.profit += profit;
    state.served += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    state.totalServiceTime += serviceTime;
    state.satisfaction += fast ? 4 : 2;
    if (acceptedUdhaarPenalty) state.satisfaction += 3;
    if (rejectedUdhaarPenalty) state.satisfaction -= 3;
    setFeedback(fast ? "feedback.fastSuccess" : "feedback.normalSuccess", true);
  } else {
    state.mistakes += 1;
    state.streak = 0;
    state.satisfaction -= 8;
    setFeedback("feedback.mistakeFull", false, {
      reasonKey: !correctOrder ? "feedback.wrongItems" : "feedback.wrongChange",
      amount: money(expectedChange)
    });
  }

  state.satisfaction = Math.max(0, Math.min(100, state.satisfaction));
  renderStats();
  if (state.busyMode) state.busyMode -= 1;
  setTimeout(nextCustomer, success ? 1000 : 1450);
}

function loseCustomer(messageKey) {
  clearInterval(state.timerId);
  state.lost += 1;
  state.mistakes += 1;
  state.streak = 0;
  state.satisfaction = Math.max(0, state.satisfaction - 10);
  setFeedback(messageKey, false);
  renderStats();
  setTimeout(nextCustomer, 1500);
}

function renderFeedback() {
  if (!state.feedback) {
    els.feedback.textContent = "";
    els.feedback.className = "feedback";
    return;
  }

  const values = { ...state.feedback.values };
  if (values.reasonKey) values.reason = t(values.reasonKey, values);
  els.feedback.textContent = t(state.feedback.key, values);
  els.feedback.className = `feedback ${state.feedback.good ? "good" : "bad"}`;
}

function setFeedback(key, good, values = {}) {
  state.feedback = { key, good, values };
  renderFeedback();
  if (!good) {
    els.gameScreen.classList.remove("shake");
    void els.gameScreen.offsetWidth;
    els.gameScreen.classList.add("shake");
  }
}

els.startBtn.addEventListener("click", startGame);
els.restartBtn.addEventListener("click", startGame);
els.clearBtn.addEventListener("click", clearBasket);
els.serveBtn.addEventListener("click", serveCustomer);
els.languageSelect.addEventListener("change", () => {
  state.language = els.languageSelect.value;
  renderLanguage();
});
els.acceptCreditBtn.addEventListener("click", () => {
  state.creditAccepted = true;
  state.creditRejected = false;
  els.changeInput.value = "0";
  setFeedback("feedback.creditAccepted", true);
});
els.rejectCreditBtn.addEventListener("click", () => {
  state.creditRejected = true;
  state.creditAccepted = false;
  state.current.paid = choosePayment(state.current.total, false);
  els.paidValue.textContent = money(state.current.paid);
  setFeedback("feedback.creditRejected", false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !els.gameScreen.classList.contains("hidden")) {
    serveCustomer();
  }
});

renderLanguage();
