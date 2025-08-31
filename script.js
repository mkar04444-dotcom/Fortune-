// Name-specific fortunes
const nameFortunes = {
  "meghamala": [
    "Clouds follow Meghamala because even the sky is curious.",
    "Every storm hides a secret just for Meghamala.",
    "Meghamala turns clouds into poetry.",
    "The horizon waits for Meghamala’s next step.",
    "Destiny painted clouds only to match Meghamala’s aura.",
    "Even sunsets envy Meghamala’s timing.",
    "Rainbows skip schedules just to greet Meghamala.",
    "Cloud nine? That’s just Meghamala’s home address.",
    "Storms soften when Meghamala smiles.",
    "The sky itself is Meghamala’s diary."
  ],
  "sneha": [
    "December carries a secret lullaby for Sneha.",
    "Sneha’s December will bloom with new light.",
    "Even stars are waiting for Sneha’s December miracle.",
    "December writes a fresh story in Sneha’s hands.",
    "A tiny heartbeat is December’s gift for Sneha.",
    "Sneha’s December will echo with first whispers.",
    "Every December wind carries a promise for Sneha.",
    "The universe saves its softest smile for Sneha’s December.",
    "In December, Sneha’s journey turns into legacy.",
    "December hides the sweetest surprise for Sneha’s arms."
  ],
  "ahana": [
    "Ahana turns silence into symphonies.",
    "The stars tune themselves to Ahana’s rhythm.",
    "Every note Ahana sings rewrites destiny’s script.",
    "The mic is secretly loyal to Ahana.",
    "Ahana’s voice is the password to unlock happiness.",
    "Even silence feels jealous of Ahana’s sound.",
    "Destiny carries a playlist, and it starts with Ahana.",
    "Every stage is waiting for Ahana’s name.",
    "The universe saves applause only for Ahana.",
    "Ahana’s breath itself is a hidden melody."
  ],
  "arnab": [
    "Arnab’s real surname is Sneha’s husband.",
    "Even destiny teases Arnab with Sneha’s shadow.",
    "Arnab’s stars whisper: 'Where’s Sneha?'",
    "Every Arnab fortune autocorrects to Sneha.",
    "Arnab’s future is basically Sneha’s to-do list.",
    "Fate jokes: Arnab is just a Sneha extension pack.",
    "Universe files Arnab under 'Sneha’s permanent plus-one.'",
    "Even Arnab’s luck wears a badge saying 'Property of Sneha.'",
    "Fortune cookie cracked: Sneha is Arnab’s CEO.",
    "Stars admit: Arnab shines only when Sneha smiles."
  ],
  "sayani": [
    "Manish + Sayani = plot twist destiny can’t undo.",
    "Even the stars gossip about Manish and Sayani every night.",
    "Universe whispers: 'Sayani is Manish’s lucky glitch.'",
    "Every love note in fate’s diary has 'Manish ♥ Sayani' scribbled.",
    "Even destiny ships you with Sayani.",
    "The playlist of Manish’s life is always on Sayani remix.",
    "Fortune cookie cracked: Sayani is Manish’s permanent setting.",
    "Even time pauses to watch Manish and Sayani’s story.",
    "Horoscope alert: Sayani is the spoiler in Manish’s future.",
    "Universe ran a test — and Manish works only with Sayani installed."
  ]
};

// Random fortunes
const randomFortunes = [
  "Today is full of surprises, embrace them!",
  "Your smile can change someone’s world today.",
  "A secret opportunity is heading your way.",
  "A small joy will find you in the most unexpected place.",
  "The universe has a gentle surprise planned for you."
];

// Sounds
const crackSound = document.getElementById("crackSound");
const dingSound = document.getElementById("dingSound");

// Elements
const loginBtn = document.getElementById("loginBtn");
const cookie = document.getElementById("cookie");
const resetBtn = document.getElementById("resetBtn");
const fortuneContainer = document.getElementById("fortuneContainer");
const fortuneText = document.getElementById("fortune");
const greetText = document.getElementById("greet");

// Login click
loginBtn.addEventListener("click", () => {
  let username = document.getElementById("username").value.trim();
  if(!username) { alert("Please enter your name!"); return; }

  window.currentUser = username.toLowerCase();
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("cookiePage").style.display = "block";
  greetText.innerText = `Hey ${username}! ✨\nWarm wishes from Manish!`;
});

// Crack cookie click
cookie.addEventListener("click", () => {
  fortuneContainer.classList.remove("show");
  cookie.classList.add("shake");
  crackSound.play();

  setTimeout(() => {
    cookie.classList.remove("shake");
    cookie.src = "2.png";

    let userFortunes = nameFortunes[window.currentUser];
    let fortune = userFortunes ? userFortunes[Math.floor(Math.random() * userFortunes.length)]
                                : randomFortunes[Math.floor(Math.random() * randomFortunes.length)];

    fortuneText.innerText = fortune;
    fortuneContainer.classList.add("show");
    dingSound.play();
    resetBtn.style.display = "inline-block";
  }, 500);
});

// Reset cookie
resetBtn.addEventListener("click", () => {
  cookie.src = "https://static.vecteezy.com/system/resources/previews/006/684/998/non_2x/chinese-fortune-cookies-on-a-white-background-in-cartoon-style-illustration-free-vector.jpg";
  fortuneText.innerText = "";
  fortuneContainer.classList.remove("show");
  resetBtn.style.display = "none";
});

// Magical Background Sparkles
const bgSparkles = document.getElementById("backgroundSparkles");
function createBackgroundSparkles(num) {
  for(let i=0; i<num; i++){
    const sparkle = document.createElement("div");
    sparkle.className = "background-sparkle";
    sparkle.style.left = Math.random()*100 + "vw";
    sparkle.style.top = Math.random()*100 + "vh";
    sparkle.style.animationDuration = (2 + Math.random()*3) + "s";
    sparkle.style.width = sparkle.style.height = (2 + Math.random()*4) + "px";
    bgSparkles.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 5000);
  }
}
setInterval(() => { createBackgroundSparkles(5); }, 500);
