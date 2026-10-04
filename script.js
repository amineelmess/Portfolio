
const CONTENT = {
  windowTitle: "amine@carleton:~",

  whoami: {
    name: "Amine El Messaoudi",
    identity: "Computer Science + Mathematics student at Carleton College.",
  },

  about:
    "Computer Science + Mathematics student at Carleton College. I build " +
    "full-stack apps and websites, on-device ML pipelines, and self-hosted AI " +
    "infrastructure, most recently a mobile app that identifies individual " +
    "animals from photos for ecology fieldwork, and a self-hosted LLM setup " +
    "for my school.",

  projects: [
    {
      name: "Lizard Wizard",
      slug: "lizard-wizard",
      description:
        "Identifies individual lizards from field photos using image " +
        "embeddings, helping researchers recognize the same animal across " +
        "multiple sightings. Runs directly on the phone so it still works in " +
        "areas with no signal.",
      link: "",
      details: [
        "A mobile app that identifies individual lizards from field photos, helping ecology researchers track the same animals across multiple sightings without physically tagging them.",
        "",
        "There was not enough labeled data to train a normal image classifier, so I used a pretrained MobileNetV2 model to turn each photo into an embedding, which works like a numeric fingerprint. The app compares that embedding with previously stored lizards to find possible matches. The database starts empty and grows as researchers collect more data.",
        "",
        "The app also needed to work in field locations with little or no internet connection. I converted the model to TensorFlow Lite so image processing can run directly on the phone, stored the data needed for matching locally, and built an offline queue for new sightings. Once the phone has a connection again, the saved records can sync with the server.",
        "",
        "Stack: Swift, SwiftUI, Flask, MongoDB, TensorFlow Lite",
        "",
        "Status: Ongoing research project at Carleton. Currently working toward mobile deployment.",
      ],
    },
    {
      name: "QuireMaker",
      slug: "quiremaker",
      description:
        "Recreates historical book layouts by simulating how a printed sheet " +
        "is folded, showing students how pages end up in the correct order. " +
        "Built with JavaScript and used in Carleton courses.",
      link: "https://digitalcarleton.github.io/QuireMaker2026/",
      details: [
        "A browser tool that recreates how books were laid out for printing, helping students see how folding a printed sheet puts the pages in the correct order.",
        "",
        "Instead of storing the page layouts ahead of time, the program figures them out by simulating each fold. It represents the sheet as a grid, updates the position and direction of the cells after every fold, and then reads the final stack to determine the page order. I tested the results against standard folio, quarto, and octavo layouts.",
        "",
        "I built it using only HTML, CSS, and JavaScript so it can run as a static website without a server or extra setup.",
        "",
        "Stack: JavaScript, HTML, CSS",
        "",
        "Status: Used in Book Studies and Special Collections courses at Carleton.",
        "",
        "https://digitalcarleton.github.io/QuireMaker2026/",
      ],
    },
    {
      name: "EcoPulse",
      slug: "ecopulse",
      description:
        "Processes and cleans 90,000+ household energy records, detects " +
        "unusual energy use, and uses the OpenAI API to generate an " +
        "easy-to-read report for each household.",
      link: "https://github.com/amineelmess/EcoPulse",
      details: [
        "A dashboard that processes more than 90,000 household energy records, finds unusual energy use, and creates a readable summary for each household.",
        "",
        "A large part of the project was cleaning the dataset before doing any analysis. I built a pipeline to handle missing values, incorrect data types, and duplicate records so the rest of the system always works with consistent data.",
        "",
        "After cleaning the data, the system looks for unusual consumption patterns and uses the OpenAI API to turn the results into a short report that is easier to understand.",
        "",
        "Stack: Python, Flask, Pandas, OpenAI API",
        "",
        "https://github.com/amineelmess/EcoPulse",
      ],
    },
    {
      name: "Drowsiness Detection",
      slug: "drowsiness",
      description:
        "Real-time computer vision system that uses a custom-trained YOLOv8 " +
        "model to detect when a driver's eyes are closed and trigger an " +
        "audio alert within about a second.",
      link: "https://github.com/amineelmess/driver-drowsiness-alarm-detection_yolo",
      details: [
        "A real-time computer vision system that monitors a webcam feed and sounds an alarm when it detects that a driver's eyes have been closed for too long.",
        "",
        "I trained a custom YOLOv8 model using labeled drowsiness data and adjusted the detection thresholds based on how the model performed on live webcam video. The program processes the video frame by frame and tracks eye detections so it can trigger an alert within about a second.",
        "",
        "Since the system runs in real time, I also had to keep the image processing fast enough that the webcam feed and detection stayed responsive.",
        "",
        "Stack: Python, YOLOv8, OpenCV",
        "",
        "https://github.com/amineelmess/driver-drowsiness-alarm-detection_yolo",
      ],
    },
    {
      name: "NBA StatCompare",
      slug: "nba",
      description:
        "Full-stack website for comparing 500+ NBA players across different " +
        "stat categories, with PostgreSQL filtering over 6,000+ records and " +
        "interactive D3.js charts.",
      link: "https://github.com/amineelmess/NBA-Stats-Website",
      details: [
        "A full-stack web app for comparing NBA players across different statistics, built with two teammates.",
        "",
        "The backend uses Flask with a PostgreSQL database containing more than 6,000 records. Users can search and filter the data by player, season, and statistical category instead of loading everything at once.",
        "",
        "On the frontend, I used D3.js to turn the results into interactive charts, making it easier to compare players visually instead of looking through rows of numbers.",
        "",
        "Stack: Python, Flask, PostgreSQL, JavaScript, D3.js",
        "",
        "https://github.com/amineelmess/NBA-Stats-Website",
      ],
    },
  ],

  skills: [
    { group: "Languages", items: "Python, C, C++, SQL, JavaScript, Java, Swift, R" },
    {
      group: "ML/AI",
      items: "TensorFlow / TF Lite, YOLOv8, OpenCV, MobileNetV2, OpenAI API, Ollama, LibreChat",
    },
    { group: "Web/Data", items: "Flask, PostgreSQL, MongoDB, Pandas, D3.js, SwiftUI" },
    { group: "Tools", items: "Git, Docker, Unix/Bash, GDB" },
    { group: "Spoken", items: "French (native), Arabic (native), English (fluent), Spanish (basic)" },
  ],

  experience: [
    {
      role: "AI/Software Developer",
      org: "Academic Technology Support, Carleton College",
      location: "Northfield, MN",
      period: "Jun 2026 – present",
      bullets: [
        "Deploy and maintain self-hosted LLM infrastructure (LibreChat, Ollama, and other open models) on local hardware, giving faculty and students access to AI tools without sending data to third parties.",
        "Built Lizard Wizard, an iOS/Flask/MongoDB app for lizard re-identification, working across backend and iOS with on-device inference and offline sync for fieldwork.",
        "Built QuireMaker, a zero-dependency JavaScript tool that computes historical book-binding layouts by simulating the physical fold; deployed for Carleton's Book Studies courses.",
      ],
    },
    {
      role: "Residential Assistant",
      org: "Carleton College Residential Life Office",
      location: "Northfield, MN",
      period: "Aug 2025 – present",
      bullets: [
        "Led 10+ community initiatives (meetings, workshops, events) for a 50-resident community, using resident feedback to improve events and increase participation and engagement.",
        "Coordinated with campus departments to respond to resident concerns, escalate issues when needed, and make sure problems were resolved.",
      ],
    },
    {
      role: "Office Assistant",
      org: "Carleton College Registrar's Office",
      location: "Northfield, MN",
      period: "Sep 2024 – Jun 2025",
      bullets: [
        "Managed and verified 8,000+ student and alumni records and processed transcript requests, correcting data-entry errors to maintain accuracy across registration cycles.",
      ],
    },
    {
      role: "Data Analytics Intern",
      org: "Global Salt Distribution Company",
      location: "Fes, Morocco",
      period: "Jun 2022 – Sep 2022",
      bullets: [
        "Built pivot-table dashboards and analytical reports that surfaced sales trends and shipment inefficiencies, presenting findings directly to management.",
        "Cleaned and validated 10,000+ sales, customer, and shipment records to ensure data integrity for operational reporting.",
      ],
    },
  ],

  contact: {
    email: "elmessaoudia@carleton.edu",
    github: "https://github.com/amineelmess",
    linkedin: "https://linkedin.com/in/amineelmessaoudi",
  },

  now: [
    "Studying abroad at the Aquincum Institute of Technology in Budapest through December 2026, taking courses in machine learning, applied AI, cryptography, and data science.",
    "",
    "Building and maintaining self-hosted LLM infrastructure for my school through my role with Academic Technology Support.",
    "",
    "Learning: going deeper on model training and tuning through my ML coursework in Budapest, and writing more C++ on the side.",
    "",
    "Open to 2026 externships and summer 2027 internships in software, ML, and data.",
    "",
    "Last updated: September 2026",
  ],

  sidebar: {
    identity: "Computer Science + Mathematics @ Carleton College",
    hint: "rather not type? click a section \u2193",
    nav: ["about", "projects", "now", "contact"],
  },

  funFact: "I love soccer. \u26bd",
};


const PROMPT = "\u279c ~";

const screen = document.getElementById("screen");
const history = document.getElementById("history");
const inputLine = document.getElementById("input-line");
const inputText = document.getElementById("input-text");
const promptEl = document.getElementById("prompt");
const hiddenInput = document.getElementById("hidden-input");
const windowTitle = document.getElementById("window-title");
const asciiArtEl = document.getElementById("ascii-art");
const ghostEl = document.getElementById("ghost");

const ASCII_ART = asciiArtEl
  ? asciiArtEl.textContent.replace(/^\n+/, "").replace(/\s+$/, "")
  : "";

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

windowTitle.textContent = CONTENT.windowTitle;
promptEl.textContent = PROMPT;

/* ---- themes ----------------------------------------------------------- */
const THEME_VARS = ["--bg", "--fg", "--accent", "--border", "--dim"];
const THEMES = {
  green: {},
  amber: {
    "--bg": "#0d0b07",
    "--fg": "#ffcc66",
    "--accent": "#ff9e2c",
    "--border": "#3a2f1d",
    "--dim": "#8a7351",
  },
  mono: {
    "--bg": "#0d1117",
    "--fg": "#e6edf3",
    "--accent": "#e6edf3",
    "--border": "#30363d",
    "--dim": "#8b949e",
  },
};
const THEME_KEY = "theme";
let activeTheme = "green";

function applyTheme(name) {
  const theme = THEMES[name];
  if (!theme) return false;
  const root = document.documentElement;
  THEME_VARS.forEach((v) => root.style.removeProperty(v));
  Object.keys(theme).forEach((v) => root.style.setProperty(v, theme[v]));
  activeTheme = name;
  return true;
}

function storedTheme() {
  try {
    return window.localStorage.getItem(THEME_KEY) || "";
  } catch (e) {
    return "";
  }
}

function setTheme(name) {
  if (!applyTheme(name)) return false;
  try {
    window.localStorage.setItem(THEME_KEY, name);
  } catch (e) {
  }
  return true;
}

/* ---- helpers ---------------------------------------------------------- */
const escapeHTML = (str) =>
  String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));

const link = (url, label) =>
  `<a href="${escapeHTML(url)}" target="_blank" rel="noopener">${escapeHTML(
    label || url
  )}</a>`;

const sp = (n) => "\u00a0".repeat(n);

const cmdLink = (cmd, label) =>
  `<button type="button" class="cmd-link" data-command="${escapeHTML(
    cmd
  )}">${escapeHTML(label)}</button>`;

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

function scrollToBottom() {
  inputLine.scrollIntoView({ block: "nearest", inline: "nearest" });
}

function printHTML(html = "") {
  const p = document.createElement("p");
  p.className = "line";
  p.innerHTML = html;
  history.appendChild(p);
  scrollToBottom();
}

function printBlock(htmlLines) {
  const div = document.createElement("div");
  div.className = "block";
  div.innerHTML = htmlLines
    .map((h) => `<p class="line">${h}</p>`)
    .join("");
  history.appendChild(div);
  scrollToBottom();
}

function artHeightBudget(pre) {
  if (!screen.contains(pre)) return 0;
  const cs = getComputedStyle(screen);
  const padding =
    (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
  const lineHeight = parseFloat(cs.lineHeight) || 24;
  return screen.clientHeight - padding - lineHeight * 3;
}

function fitArt(pre) {
  const container = pre.parentElement;
  if (!container) return;
  const cs = getComputedStyle(container);
  const padding =
    (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.paddingRight) || 0);
  const available = container.clientWidth - padding;
  if (available <= 0) return;
  const base = 10;
  pre.style.display = "inline-block";
  pre.style.fontSize = base + "px";
  const natural = pre.scrollWidth;
  if (natural <= 0) return;
  let size = (base * (available - 1)) / natural;
  const budget = artHeightBudget(pre);
  if (budget > 0 && pre.scrollHeight > 0) {
    size = Math.min(size, (base * budget) / pre.scrollHeight);
  }
  pre.style.fontSize = size + "px";
  trimSidebarArt(pre);
}

function trimSidebarArt(pre) {
  const sidebar = pre.closest(".sidebar");
  const last = sidebar && sidebar.lastElementChild;
  if (!last) return;
  const spill =
    last.getBoundingClientRect().bottom -
    sidebar.getBoundingClientRect().bottom;
  const height = pre.getBoundingClientRect().height;
  if (spill <= 0 || height <= spill) return;
  pre.style.fontSize =
    (parseFloat(pre.style.fontSize) * (height - spill)) / height + "px";
}

function printArt() {
  if (!ASCII_ART) return;
  const pre = document.createElement("pre");
  pre.className = "art";
  pre.textContent = ASCII_ART;
  history.appendChild(pre);
  fitArt(pre);
  scrollToBottom();
}

/* ---- neofetch --------------------------------------------------------- */
function skillGroup(name) {
  const group = CONTENT.skills.find((s) => s.group === name);
  return group ? group.items : "";
}

function neofetchRows() {
  const label = (t) =>
    `<span class="accent">${t.padEnd(10, " ").replace(/ /g, "\u00a0")}</span>`;
  const name = CONTENT.whoami.name;
  const email = CONTENT.contact.email;
  return [
    `<span class="accent">${escapeHTML(name)}</span>`,
    `<span class="dim">${"-".repeat(name.length)}</span>`,
    `${label("school")}${escapeHTML(CONTENT.sidebar.identity)}`,
    `${label("focus")}${escapeHTML(skillGroup("ML/AI"))}`,
    `${label("languages")}${escapeHTML(skillGroup("Languages"))}`,
    `${label("tools")}${escapeHTML(skillGroup("Tools"))}`,
    `${label("contact")}${link("mailto:" + email, email)}`,
  ];
}

function printNeofetch() {
  const wrap = document.createElement("div");
  wrap.className = "neofetch";

  const artCol = document.createElement("div");
  artCol.className = "neofetch__art";
  if (ASCII_ART) {
    const pre = document.createElement("pre");
    pre.className = "art";
    pre.textContent = ASCII_ART;
    artCol.appendChild(pre);
  }

  const statsCol = document.createElement("div");
  statsCol.className = "neofetch__stats";
  statsCol.innerHTML = neofetchRows()
    .map((h) => `<p class="line">${h}</p>`)
    .join("");

  wrap.appendChild(artCol);
  wrap.appendChild(statsCol);
  history.appendChild(wrap);

  const pre = artCol.querySelector(".art");
  if (pre) fitArt(pre);
  scrollToBottom();
}

function renderPortrait() {
  const portrait = document.getElementById("portrait");
  if (!portrait || !ASCII_ART) return;
  const pre = document.createElement("pre");
  pre.className = "art";
  pre.textContent = ASCII_ART;
  portrait.appendChild(pre);
  fitArt(pre);
}

function echoCommand(cmd) {
  printHTML(
    `<span class="accent">${escapeHTML(PROMPT)}</span> ${escapeHTML(cmd)}`
  );
}

/* ---- commands --------------------------------------------------------- */
const HELP_PRIMARY = ["about", "projects", "skills", "experience", "contact"];
const HELP_ALSO = [
  "whoami",
  "now",
  "neofetch",
  "art",
  "theme",
  "fortune",
  "ls",
  "cat",
  "echo",
  "clear",
];

const COMMANDS = {
  help: {
    desc: "list all available commands",
    run: () => [
      ...HELP_PRIMARY.map((name) => {
        const pad = name.padEnd(11, " ").replace(/ /g, "\u00a0");
        return `<span class="accent">${pad}</span>${escapeHTML(
          COMMANDS[name].desc
        )}`;
      }),
      "&nbsp;",
      `<span class="dim">also: ${HELP_ALSO.join(", ")}</span>`,
    ],
  },
  whoami: {
    desc: "who I am",
    run: () => [escapeHTML(CONTENT.whoami.name), escapeHTML(CONTENT.whoami.identity)],
  },
  about: {
    desc: "a short bio",
    run: () => [escapeHTML(CONTENT.about)],
  },
  now: {
    desc: "what I'm up to right now",
    run: () => CONTENT.now.map((l) => (l === "" ? "&nbsp;" : escapeHTML(l))),
  },
  projects: {
    desc: "things I've built",
    run: () => [
      ...CONTENT.projects.flatMap((p) => {
        const name = `<span class="accent">${escapeHTML(p.name)}</span>`;
        const repo = p.link
          ? link(p.link, "repo")
          : `<span class="dim">in progress</span>`;
        const detail = cmdLink(`projects ${p.slug}`, "description");
        return [
          `${name}${sp(4)}${repo}${sp(3)}${detail}`,
          `<span class="dim indent">${escapeHTML(p.description)}</span>`,
          "&nbsp;",
        ];
      }),
      `<span class="dim">type 'projects &lt;name&gt;' for detail on any of these.</span>`,
    ],
  },
  skills: {
    desc: "what I work with",
    run: () =>
      CONTENT.skills.map((s) => {
        const label = (s.group + ":").padEnd(11, " ").replace(/ /g, "\u00a0");
        return `<span class="accent">${label}</span>${escapeHTML(s.items)}`;
      }),
  },
  experience: {
    desc: "roles I've held",
    run: () =>
      CONTENT.experience.flatMap((e, i) => [
        ...(i > 0 ? ["&nbsp;"] : []),
        `<span class="accent">${escapeHTML(e.role)} — ${escapeHTML(e.org)}</span>`,
        `<span class="dim">${escapeHTML(e.location)} \u00b7 ${escapeHTML(e.period)}</span>`,
        ...e.bullets.map((b) => `<span class="bullet">- ${escapeHTML(b)}</span>`),
      ]),
  },
  contact: {
    desc: "how to reach me",
    run: () => {
      const c = CONTENT.contact;
      return [
        `email\u00a0\u00a0\u00a0\u00a0${link("mailto:" + c.email, c.email)}`,
        `github\u00a0\u00a0\u00a0${link(c.github, c.github)}`,
        `linkedin\u00a0${link(c.linkedin, c.linkedin)}`,
      ];
    },
  },
  ls: {
    desc: "list files",
    run: () => ["about.txt\u00a0\u00a0projects/\u00a0\u00a0skills.txt\u00a0\u00a0contact.txt"],
  },
  clear: {
    desc: "clear the screen",
    run: () => {
      history.innerHTML = "";
      return null;
    },
  },
  sudo: {
    desc: "elevate privileges",
    run: () => ["nice try."],
  },
  fortune: {
    desc: "a random fact",
    run: () => [escapeHTML(CONTENT.funFact)],
  },
  art: {
    desc: "show the ascii portrait",
    run: () => {
      printArt();
      return null;
    },
  },
  neofetch: {
    desc: "portrait + stats, neofetch style",
    run: () => {
      printNeofetch();
      return null;
    },
  },
  theme: {
    desc: "switch color theme",
    run: () => [
      "available themes:",
      ...Object.keys(THEMES).map(
        (n) =>
          `\u00a0\u00a0<span class="accent">${n
            .padEnd(7, " ")
            .replace(/ /g, "\u00a0")}</span>` +
          (n === activeTheme ? `<span class="dim">(active)</span>` : "")
      ),
      `<span class="dim">usage: theme &lt;name&gt;</span>`,
    ],
  },
  vim: {
    desc: "open vim",
    run: () => ["vim: you're trapped in here now."],
  },
  exit: {
    desc: "leave",
    run: () => ["exit: there's no way out."],
  },
};

/* ---- routing / sidebar state ------------------------------------------ */
function navFor(name) {
  return CONTENT.sidebar.nav.includes(name) ? name : null;
}

function updateHash(route) {
  if (!route) return;
  const next = "#" + route;
  if (window.location.hash !== next) window.location.hash = next;
}

function setActiveNav(name) {
  if (!name) return;
  document.querySelectorAll(".nav__item").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.command === name);
  });
}

function markSection(route, navName) {
  if (introComplete) updateHash(route);
  setActiveNav(navName);
}

function commandFromHash() {
  const raw = window.location.hash.replace(/^#/, "").trim().toLowerCase();
  if (!raw) return "";
  const [head, tail] = raw.split("/");
  if (head === "projects" && tail) return `projects ${tail}`;
  return COMMANDS[head] ? head : "";
}

/* ---- cat / project details -------------------------------------------- */
const CAT_FILES = {
  "about.txt": () => COMMANDS.about.run(),
  "skills.txt": () => COMMANDS.skills.run(),
  "contact.txt": () => COMMANDS.contact.run(),
};

function linkifyDetails(text) {
  const urlRe = /https:\/\/\S+/g;
  let out = "";
  let last = 0;
  let m;
  while ((m = urlRe.exec(text)) !== null) {
    out += escapeHTML(text.slice(last, m.index));
    out += link(m[0], m[0]);
    last = m.index + m[0].length;
  }
  return out + escapeHTML(text.slice(last));
}

const DETAIL_LABEL = /^(Stack|Status):\s+/;

function detailLine(text) {
  const label = text.match(DETAIL_LABEL);
  if (!label) return linkifyDetails(text);
  return `<span class="accent">${label[1]}:</span> ${linkifyDetails(
    text.slice(label[0].length)
  )}`;
}

function projectDetails(slug) {
  const project = CONTENT.projects.find((p) => p.slug === slug);
  if (!project || !project.details) return null;
  return [
    `<span class="accent">${escapeHTML(project.name)}</span>`,
    "&nbsp;",
    ...project.details.map((l) => (l === "" ? "&nbsp;" : detailLine(l))),
  ];
}

function catFile(name) {
  const key = name.toLowerCase();
  if (key === "projects" || key === "projects/") {
    return [`cat: ${escapeHTML(name)}: Is a directory.`];
  }
  if (CAT_FILES[key]) return CAT_FILES[key]();
  const details = projectDetails(key);
  if (details) return details;
  return [`cat: ${escapeHTML(name)}: No such file or directory`];
}

function runCommand(raw) {
  const cmd = raw.trim();
  if (cmd === "") return;

  const lower = cmd.toLowerCase();

  if (lower.startsWith("theme ")) {
    const name = cmd.slice(6).trim().toLowerCase();
    if (setTheme(name)) {
      printBlock([`theme: ${escapeHTML(name)}`]);
    } else {
      printBlock([
        `theme: ${escapeHTML(name)}: no such theme. try <span class="accent">'theme'</span> to list.`,
      ]);
    }
    return;
  }
  if (lower === "cd" || lower.startsWith("cd ")) {
    printBlock(["cd: everything's already here."]);
    return;
  }
  if (lower === "echo" || lower.startsWith("echo ")) {
    const text = cmd.slice(4).trim();
    printBlock([text === "" ? "&nbsp;" : escapeHTML(text)]);
    return;
  }
  if (lower === "cat") {
    printBlock(["cat: missing file operand"]);
    return;
  }
  if (lower.startsWith("cat ")) {
    printBlock(catFile(cmd.slice(4).trim()));
    return;
  }
  if (lower.startsWith("projects ")) {
    const slug = cmd.slice(9).trim().toLowerCase();
    const details = projectDetails(slug);
    if (details) {
      printBlock(details);
      markSection(`projects/${slug}`, "projects");
    } else {
      printBlock([`projects: ${escapeHTML(slug)}: no such project`]);
    }
    return;
  }
  if (lower === "ls projects/") {
    printBlock(
      CONTENT.projects.map((p) =>
        p.link
          ? link(p.link, p.name)
          : `<span class="accent">${escapeHTML(
              p.name
            )}</span> <span class="dim">(private repo)</span>`
      )
    );
    return;
  }

  const entry = COMMANDS[lower];
  if (entry) {
    const out = entry.run();
    if (out) printBlock(out);
    if (lower !== "clear") markSection(lower, navFor(lower));
    return;
  }

  printHTML(
    `command not found: ${escapeHTML(cmd)}. type <span class="accent">'help'</span>`
  );
}

/* ---- intro auto-typing ------------------------------------------------ */
const INTRO = ["whoami", "about"];

const INVITE = `${cmdLink(
  "projects",
  "click here"
)}<span class="dim"> to see what I've been working on.</span>`;

const HINT = `<span class="dim">type <span class="accent">'help'</span> to explore — start typing and press <span class="accent">Tab</span> (or <span class="accent">&rarr;</span>) to autocomplete.</span>`;

const NAV_HINT = `<span class="dim"><span class="accent">&larr;</span> no typing needed — the menu on the left runs these same sections, and <span class="accent">&gt;</span> marks the one you're on.</span>`;

let introComplete = false;
let skipIntro = false;

async function typeCommand(cmd) {
  inputText.textContent = "";
  if (reduceMotion || skipIntro) {
    inputText.textContent = cmd;
  } else {
    for (const char of cmd) {
      if (skipIntro) break;
      inputText.textContent += char;
      scrollToBottom();
      await delay(20);
    }
    if (!skipIntro) await delay(150);
  }
  echoCommand(cmd);
  inputText.textContent = "";
  runCommand(cmd);
  if (!reduceMotion && !skipIntro) await delay(200);
}

async function runIntro() {
  inputLine.hidden = false;

  const onSkip = () => {
    skipIntro = true;
  };
  window.addEventListener("keydown", onSkip);
  window.addEventListener("click", onSkip);

  for (const cmd of INTRO) {
    if (reduceMotion || skipIntro) {
      echoCommand(cmd);
      runCommand(cmd);
    } else {
      await typeCommand(cmd);
    }
  }

  window.removeEventListener("keydown", onSkip);
  window.removeEventListener("click", onSkip);

  introComplete = true;
  printBlock([INVITE]);
  printHTML(NAV_HINT);
  printHTML(HINT);
  enableLiveInput();
}

function runRouted(cmd) {
  inputLine.hidden = false;
  introComplete = true;
  echoCommand(cmd);
  cmdHistory.push(cmd);
  runCommand(cmd);
  printHTML(NAV_HINT);
  printHTML(HINT);
  enableLiveInput();
}

/* ---- live input ------------------------------------------------------- */
const cmdHistory = [];
let historyIndex = -1;

function commandNames() {
  return Object.keys(COMMANDS);
}

function suggestion(value) {
  if (!value || /\s/.test(value)) return "";
  const partial = value.toLowerCase();
  const match = commandNames().find(
    (n) => n.startsWith(partial) && n !== partial
  );
  return match || "";
}

function updateGhost() {
  const value = hiddenInput.value;
  const match = suggestion(value);
  ghostEl.textContent = match ? match.slice(value.length) : "";
}

function acceptGhost() {
  const ghost = ghostEl.textContent;
  if (!ghost) return false;
  setInput(hiddenInput.value + ghost);
  updateGhost();
  return true;
}

function enableLiveInput() {
  hiddenInput.disabled = false;

  hiddenInput.addEventListener("input", () => {
    inputText.textContent = hiddenInput.value;
    historyIndex = -1;
    updateGhost();
    scrollToBottom();
  });

  hiddenInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = hiddenInput.value;
      echoCommand(value);
      if (value.trim() !== "") cmdHistory.push(value);
      historyIndex = -1;
      hiddenInput.value = "";
      inputText.textContent = "";
      ghostEl.textContent = "";
      runCommand(value);
    } else if (e.key === "Tab") {
      e.preventDefault();
      acceptGhost();
    } else if (e.key === "ArrowRight") {
      if (
        ghostEl.textContent &&
        hiddenInput.selectionStart === hiddenInput.value.length
      ) {
        e.preventDefault();
        acceptGhost();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      if (historyIndex === -1) historyIndex = cmdHistory.length - 1;
      else historyIndex = Math.max(0, historyIndex - 1);
      setInput(cmdHistory[historyIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      historyIndex += 1;
      if (historyIndex >= cmdHistory.length) {
        historyIndex = -1;
        setInput("");
      } else {
        setInput(cmdHistory[historyIndex]);
      }
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) return;
    hiddenInput.focus({ preventScroll: true });
  });

  hiddenInput.focus({ preventScroll: true });
}

function setInput(value) {
  hiddenInput.value = value;
  inputText.textContent = value;
  updateGhost();
  scrollToBottom();
  requestAnimationFrame(() => {
    hiddenInput.setSelectionRange(value.length, value.length);
  });
}

/* ---- sidebar ---------------------------------------------------------- */
function submitCommand(cmd) {
  if (!introComplete) return;
  echoCommand(cmd);
  cmdHistory.push(cmd);
  historyIndex = -1;
  runCommand(cmd);
  hiddenInput.focus({ preventScroll: true });
}

function enableCommandLinks() {
  history.addEventListener("click", (e) => {
    const trigger = e.target.closest(".cmd-link");
    if (!trigger) return;
    e.preventDefault();
    submitCommand(trigger.dataset.command);
  });
}

function renderSidebar() {
  const nameEl = document.getElementById("sidebar-name");
  const identityEl = document.getElementById("sidebar-identity");
  const hintEl = document.getElementById("sidebar-hint");
  if (nameEl) nameEl.textContent = CONTENT.whoami.name;
  if (identityEl) identityEl.textContent = CONTENT.sidebar.identity;
  if (hintEl) hintEl.textContent = CONTENT.sidebar.hint;

  const nav = document.getElementById("sidebar-nav");
  if (nav) {
    CONTENT.sidebar.nav.forEach((name) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "nav__item";
      btn.dataset.command = name;
      btn.textContent = name;
      btn.addEventListener("click", () => submitCommand(name));
      nav.appendChild(btn);
    });
  }

  const list = document.getElementById("sidebar-contact");
  if (list) {
    const c = CONTENT.contact;
    [
      ["email", "mailto:" + c.email],
      ["github", c.github],
      ["linkedin", c.linkedin],
    ].forEach(([label, url]) => {
      const li = document.createElement("li");
      li.innerHTML = link(url, label);
      list.appendChild(li);
    });
  }

  renderPortrait();
}

/* ---- boot ------------------------------------------------------------- */
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.querySelectorAll(".art").forEach(fitArt);
  }, 100);
});

applyTheme(storedTheme() || "green");

hiddenInput.disabled = true;
renderSidebar();
enableCommandLinks();

const routedCommand = commandFromHash();
if (routedCommand) {
  runRouted(routedCommand);
} else {
  runIntro();
}
