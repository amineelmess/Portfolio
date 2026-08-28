/* ===========================================================================
   CONTENT
   ---------------------------------------------------------------------------
   Everything you might want to change lives here. Edit freely — none of the
   logic below this object needs to be touched.
   =========================================================================== */
const CONTENT = {
  // Title shown in the terminal's header bar.
  windowTitle: "amine@carleton:~",

  // `whoami`
  whoami: {
    name: "Amine El Messaoudi",
    identity: "CS + Math student at Carleton College.",
  },

  // `about` / `cat about.txt`
  about:
    "CS + Math student at Carleton College. I build full-stack apps, " +
    "on-device ML pipelines, and self-hosted AI infrastructure, most recently " +
    "a mobile app that identifies individual animals from photos for ecology " +
    "fieldwork, and a self-hosted LLM setup for my school.",

  // `projects` and `ls projects/`
  // `description` is the one-line summary in the projects list.
  // Leave `link` as "" to show a dim "in progress" note instead of a repo link.
  // `slug` is used by `projects <slug>`, `cat <slug>` and the #projects/<slug> URL.
  // `details` prints one line per entry; "" renders as a blank spacer line.
  projects: [
    {
      name: "Lizard Wizard",
      slug: "lizard-wizard",
      description:
        "Identifies individual lizards from field photos using image " +
        "embeddings, so researchers can recognize the same animal across a " +
        "season. Runs on-device so it works with no signal.",
      link: "",
      details: [
        "A mobile app that identifies individual lizards from field photos, so ecology researchers can track the same animal across a multi-year study without tagging it.",
        "",
        "Instead of training a classifier — which would need a labeled dataset that doesn't exist yet — it uses a pretrained MobileNetV2 to turn each photo into a numeric fingerprint, then matches lizards by comparing those fingerprints. The database starts empty and fills up as researchers work.",
        "",
        "The hard part: fieldwork happens in canyons with no signal, but the researcher needs an answer while the lizard is still in hand. I converted the model to TensorFlow Lite so it runs on the phone itself, cached the reference data locally, and built a sync system that queues new sightings offline and pushes them once there's a connection.",
        "",
        "Stack: Swift, SwiftUI, Flask, MongoDB, TensorFlow Lite.",
        "",
        "Status: ongoing research project at Carleton. Working on deploying to the App Store and Play Store.",
      ],
    },
    {
      name: "QuireMaker",
      slug: "quiremaker",
      description:
        "Recreates historical book-binding layouts by simulating the " +
        "physical fold, so students can see how a printed sheet becomes " +
        "ordered pages. Zero dependencies, deployed for Carleton courses.",
      link: "https://digitalcarleton.github.io/QuireMaker2026/",
      details: [
        "A browser tool that recreates how books were laid out on a printing press, so students can see how folding a printed sheet puts the pages in the right order.",
        "",
        "Rather than hardcoding the known layouts from reference books, it works them out by simulating the fold itself: the sheet is modeled as a grid, each fold flips and reorders the cells, and reading the final stack top to bottom gives you the page numbers. I checked the output against the standard folio, quarto, and octavo tables.",
        "",
        "Built with no dependencies at all — just HTML, CSS, and JavaScript — on purpose, so it can be hosted as static files and handed off without any setup. The previous version stopped working when its server-side stack was lost.",
        "",
        "Stack: vanilla JavaScript, HTML, CSS.",
        "",
        "In use for Book Studies and Special Collections courses at Carleton.",
        "",
        "https://digitalcarleton.github.io/QuireMaker2026/",
      ],
    },
    {
      name: "EcoPulse",
      slug: "ecopulse",
      description:
        "Ingests and cleans 90,000+ household energy records, flags unusual " +
        "consumption, and generates a plain-English report per household " +
        "using the OpenAI API.",
      link: "https://github.com/amineelmess/EcoPulse",
      details: [
        "A dashboard that takes 90,000+ household energy records, finds unusual consumption, and writes a plain-language summary for each household.",
        "",
        "Most of the work was in the data layer: automated pipelines that handle missing values, type conversions, and duplicates so the analysis runs on clean input. On top of that it flags anomalies and uses the OpenAI API to turn the numbers into something readable.",
        "",
        "Stack: Python, Flask, Pandas, OpenAI API.",
        "",
        "https://github.com/amineelmess/EcoPulse",
      ],
    },
    {
      name: "Drowsiness Detection",
      slug: "drowsiness",
      description:
        "Real-time computer vision system that detects eye closure from a " +
        "webcam feed and triggers an audio alert within a second, built on a " +
        "custom-trained YOLOv8 model.",
      link: "https://github.com/amineelmess/driver-drowsiness-alarm-detection_yolo",
      details: [
        "A real-time system that watches a webcam feed and sounds an alarm when it detects a driver's eyes closing.",
        "",
        "I trained a custom YOLOv8 model on labeled fatigue data and tuned the detection thresholds so it holds up in live conditions rather than just on clean test images. The pipeline runs frame by frame and fires an alert within about a second, so keeping the per-frame processing fast enough was the main constraint.",
        "",
        "Stack: Python, YOLOv8, OpenCV.",
        "",
        "https://github.com/amineelmess/driver-drowsiness-alarm-detection_yolo",
      ],
    },
    {
      name: "NBA StatCompare",
      slug: "nba",
      description:
        "Full-stack app comparing 500+ NBA players across stat categories, " +
        "with SQL-backed filtering over 6,000+ records and interactive " +
        "D3.js charts.",
      link: "https://github.com/amineelmess/NBA-Stats-Website",
      details: [
        "A full-stack app for comparing NBA players side by side across different stat categories, built with two teammates.",
        "",
        "The backend is a Flask API over a PostgreSQL database of 6,000+ records, with queries that let you filter by player, season, and category on the fly. The frontend renders the results as interactive D3.js charts so you can compare players visually rather than reading a table.",
        "",
        "Stack: Python, Flask, PostgreSQL, JavaScript, D3.js.",
        "",
        "https://github.com/amineelmess/NBA-Stats-Website",
      ],
    },
  ],

  // `skills` — grouped
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

  // `experience` — one entry per role; `bullets` prints one line each.
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
        "Led 10+ community initiatives for a 50-resident community, using feedback surveys and iterative planning to increase participation.",
        "Designed incident-response workflows including escalation paths and resolution checklists, coordinating across campus departments.",
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

  // `contact`
  contact: {
    email: "elmessaoudia@carleton.edu",
    github: "https://github.com/amineelmess",
    linkedin: "https://linkedin.com/in/amineelmessaoudi",
  },

  // `now` — one line per entry; "" renders as a blank spacer line.
  now: [
    "Studying abroad at the Aquincum Institute of Technology in Budapest through December 2026, taking courses in machine learning, applied AI, cryptography, and data science.",
    "",
    "Building and maintaining self-hosted LLM infrastructure for my school through my role with Academic Technology Support.",
    "",
    "Learning: going deeper on systems and ML infrastructure.",
    "",
    "Open to summer 2027 internships in software, ML, and data.",
    "",
    "Last updated: August 2026",
  ],

  // Left sidebar nameplate. The name is reused from `whoami` above.
  // `nav` lists which commands the sidebar links run.
  sidebar: {
    identity: "CS + Math @ Carleton College",
    nav: ["about", "projects", "now", "contact"],
  },

  // `resume` — a file sitting next to index.html, or a full URL. Leave it
  // empty to have the command say the resume isn't up yet.
  resumeUrl: "resume.pdf",

  // `fortune`
  funFact: "I love soccer. \u26bd",
};

/* ===========================================================================
   LOGIC — no need to edit below to change your content.
   =========================================================================== */
const PROMPT = "\u279c ~"; // ➜ ~

const screen = document.getElementById("screen");
const history = document.getElementById("history");
const inputLine = document.getElementById("input-line");
const inputText = document.getElementById("input-text");
const promptEl = document.getElementById("prompt");
const hiddenInput = document.getElementById("hidden-input");
const windowTitle = document.getElementById("window-title");
const asciiArtEl = document.getElementById("ascii-art");
const ghostEl = document.getElementById("ghost");

// Raw ASCII portrait, taken verbatim from the hidden tag in index.html.
// Leading/trailing blank lines are trimmed; internal spacing is preserved.
const ASCII_ART = asciiArtEl
  ? asciiArtEl.textContent.replace(/^\n+/, "").replace(/\s+$/, "")
  : "";

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

windowTitle.textContent = CONTENT.windowTitle;
promptEl.textContent = PROMPT;

/* ---- themes ----------------------------------------------------------- */
// Each theme is a set of overrides for the custom properties declared in
// :root. `green` is empty because it *is* the stylesheet default — applying
// it just clears the inline overrides.
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

// Swap the :root custom properties. Returns false for an unknown name.
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
    return ""; // storage blocked (private mode / some file:// contexts)
  }
}

function setTheme(name) {
  if (!applyTheme(name)) return false;
  try {
    window.localStorage.setItem(THEME_KEY, name);
  } catch (e) {
    // storage unavailable — the theme still applies for this session
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

// Non-breaking spaces, so runs of them survive HTML whitespace collapsing.
const sp = (n) => "\u00a0".repeat(n);

// A link inside the terminal output that runs a command instead of navigating.
// A button (not an <a>) so it has no href to follow; the click is picked up by
// the delegated listener in enableCommandLinks().
const cmdLink = (cmd, label) =>
  `<button type="button" class="cmd-link" data-command="${escapeHTML(
    cmd
  )}">${escapeHTML(label)}</button>`;

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

// Keep the input in view without yanking the page around. "nearest" only
// scrolls when the input is actually off-screen, so typing never jumps.
function scrollToBottom() {
  inputLine.scrollIntoView({ block: "nearest", inline: "nearest" });
}

// Append one line of raw HTML to the history.
function printHTML(html = "") {
  const p = document.createElement("p");
  p.className = "line";
  p.innerHTML = html;
  history.appendChild(p);
  scrollToBottom();
}

// Append several lines wrapped as a spaced block.
function printBlock(htmlLines) {
  const div = document.createElement("div");
  div.className = "block";
  div.innerHTML = htmlLines
    .map((h) => `<p class="line">${h}</p>`)
    .join("");
  history.appendChild(div);
  scrollToBottom();
}

// Scale a rendered art block so its widest line fills the column width.
// Font-agnostic: measure the natural width at a base size, then rescale.
function fitArt(pre) {
  const container = pre.parentElement;
  if (!container) return;
  // clientWidth includes padding, so subtract it to get the true inner width.
  const cs = getComputedStyle(container);
  const padding =
    (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.paddingRight) || 0);
  const available = container.clientWidth - padding;
  if (available <= 0) return;
  const base = 10;
  // Measure as inline-block so scrollWidth is the actual text width, not the
  // full column width (a block <pre> would always report the container width).
  pre.style.display = "inline-block";
  pre.style.fontSize = base + "px";
  const natural = pre.scrollWidth;
  if (natural > 0) {
    // scale the font so the widest line fills the full column width
    const size = (base * (available - 1)) / natural;
    pre.style.fontSize = size + "px";
  }
}

// Render the ASCII portrait (textContent, so no escaping needed).
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
// Look up one skills group's items so neofetch reuses CONTENT.skills.
function skillGroup(name) {
  const group = CONTENT.skills.find((s) => s.group === name);
  return group ? group.items : "";
}

// Stat rows for `neofetch`, all drawn from existing CONTENT.
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

// Classic neofetch layout: the same portrait on the left, stats on the right.
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

// Render the portrait into the side column (aside), fit to its width.
function renderPortrait() {
  const portrait = document.getElementById("portrait");
  if (!portrait || !ASCII_ART) return;
  const pre = document.createElement("pre");
  pre.className = "art";
  pre.textContent = ASCII_ART;
  portrait.appendChild(pre);
  fitArt(pre);
}

// Echo a committed command with its green prompt.
function echoCommand(cmd) {
  printHTML(
    `<span class="accent">${escapeHTML(PROMPT)}</span> ${escapeHTML(cmd)}`
  );
}

/* ---- commands --------------------------------------------------------- */
// What `help` prints. Everything not listed here still works — `sudo`, `vim`
// and `exit` are just left for people to find on their own.
const HELP_PRIMARY = ["about", "projects", "skills", "experience", "resume", "contact"];
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

// Each command returns an array of HTML strings (printed as a block),
// or performs its own side effect and returns null.
const COMMANDS = {
  help: {
    desc: "list all available commands",
    // Only the headline commands get a description; the rest are named on one
    // dim line so a first-time visitor isn't handed an 18-item menu.
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
    // Per project: name + action links, a dim one-liner, then a blank line.
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
    // Role + org, then place and dates, then the bullets. Roles are separated
    // by a blank line rather than trailed by one, so the block ends clean.
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
  resume: {
    desc: "view my resume",
    run: () => {
      const url = CONTENT.resumeUrl;
      if (!url) return ["resume: not up yet."];
      // A relative path is as linkable as a full URL; label it with the
      // filename so it's obvious a PDF is about to open.
      const label = url.split("/").pop() || "resume";
      return [link(url, label)];
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
// The nav item matching a command name, or null when it isn't a nav section.
function navFor(name) {
  return CONTENT.sidebar.nav.includes(name) ? name : null;
}

// Reflect the current section in the URL so it can be shared.
function updateHash(route) {
  if (!route) return;
  const next = "#" + route;
  if (window.location.hash !== next) window.location.hash = next;
}

// Highlight the sidebar item for the active section, clearing the others.
function setActiveNav(name) {
  if (!name) return;
  document.querySelectorAll(".nav__item").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.command === name);
  });
}

// Called when a section command runs: sync the URL and the sidebar marker.
function markSection(route, navName) {
  if (introComplete) updateHash(route);
  setActiveNav(navName);
}

// Map the URL hash to a command, or "" when it isn't routable.
// #projects/lizard-wizard -> "projects lizard-wizard"
function commandFromHash() {
  const raw = window.location.hash.replace(/^#/, "").trim().toLowerCase();
  if (!raw) return "";
  const [head, tail] = raw.split("/");
  if (head === "projects" && tail) return `projects ${tail}`;
  return COMMANDS[head] ? head : "";
}

/* ---- cat / project details -------------------------------------------- */
// Files `cat` can print, mapped to the command output they mirror.
const CAT_FILES = {
  "about.txt": () => COMMANDS.about.run(),
  "skills.txt": () => COMMANDS.skills.run(),
  "contact.txt": () => COMMANDS.contact.run(),
};

// Turn any https:// URL in a detail line into a real link, escaping the rest.
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

// Full detail block for a project slug, or null when the slug is unknown.
function projectDetails(slug) {
  const project = CONTENT.projects.find((p) => p.slug === slug);
  if (!project || !project.details) return null;
  // "" entries become real blank lines (an empty <p> would collapse).
  return project.details.map((l) => (l === "" ? "&nbsp;" : linkifyDetails(l)));
}

// Output for `cat <name>`: a faux file, a project slug, or an error line.
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

// Special-case aliases handled before the registry lookup.
function runCommand(raw) {
  const cmd = raw.trim();
  if (cmd === "") return;

  const lower = cmd.toLowerCase();

  // `theme <name>` swaps the palette; bare `theme` falls through to the
  // registry entry, which lists the options.
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
  // `cd` anywhere is a no-op on a single-page site.
  if (lower === "cd" || lower.startsWith("cd ")) {
    printBlock(["cd: everything's already here."]);
    return;
  }
  // `echo <text>` prints its argument back.
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
  // `projects <slug>` prints one project's full detail block.
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
// Kept short so the whole intro fits on screen without scrolling. Projects are
// one click away instead of printed up front.
const INTRO = ["whoami", "about"];

const INVITE = `${cmdLink(
  "projects",
  "click here"
)}<span class="dim"> to see what I've been working on.</span>`;

const HINT = `<span class="dim">type <span class="accent">'help'</span> to explore — start typing and press <span class="accent">Tab</span> (or <span class="accent">&rarr;</span>) to autocomplete.</span>`;

// Sidebar nav clicks are ignored until the intro animation has finished.
let introComplete = false;
// Set by any keypress or click while the intro is still playing.
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

  // Any keypress or click jumps straight to the live prompt.
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

  // Set before printing so the invite link is live the moment it appears.
  introComplete = true;
  printBlock([INVITE]);
  printHTML(HINT);
  enableLiveInput();
}

// Deep link: skip the intro entirely and run the routed command instead.
function runRouted(cmd) {
  inputLine.hidden = false;
  introComplete = true;
  echoCommand(cmd);
  cmdHistory.push(cmd);
  runCommand(cmd);
  printHTML(HINT);
  enableLiveInput();
}

/* ---- live input ------------------------------------------------------- */
const cmdHistory = [];
let historyIndex = -1; // -1 means "current (empty) line"

function commandNames() {
  return Object.keys(COMMANDS);
}

// Best command match for the current input (single token only).
function suggestion(value) {
  if (!value || /\s/.test(value)) return "";
  const partial = value.toLowerCase();
  const match = commandNames().find(
    (n) => n.startsWith(partial) && n !== partial
  );
  return match || "";
}

// Show the un-typed remainder of the suggested command as dim ghost text.
function updateGhost() {
  const value = hiddenInput.value;
  const match = suggestion(value);
  ghostEl.textContent = match ? match.slice(value.length) : "";
}

// Fill in the currently suggested command, if any.
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
      // accept the suggestion only when the caret is at the end
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

  // Tapping anywhere focuses the input (mobile-friendly), but don't steal
  // focus when the visitor is selecting text or tapping a link.
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
  // move caret to end
  requestAnimationFrame(() => {
    hiddenInput.setSelectionRange(value.length, value.length);
  });
}

/* ---- sidebar ---------------------------------------------------------- */
// Run a command as if the visitor had typed it. Reuses echoCommand and
// runCommand so no command logic is duplicated here.
function submitCommand(cmd) {
  if (!introComplete) return;
  echoCommand(cmd);
  cmdHistory.push(cmd);
  historyIndex = -1;
  runCommand(cmd);
  hiddenInput.focus({ preventScroll: true });
}

// Action links printed into the terminal (e.g. a project's `description`) run
// their command through the same path as a typed one. Delegated from #history
// so blocks printed earlier stay live.
function enableCommandLinks() {
  history.addEventListener("click", (e) => {
    const trigger = e.target.closest(".cmd-link");
    if (!trigger) return;
    e.preventDefault();
    submitCommand(trigger.dataset.command);
  });
}

function renderSidebar() {
  renderPortrait();

  const nameEl = document.getElementById("sidebar-name");
  const identityEl = document.getElementById("sidebar-identity");
  if (nameEl) nameEl.textContent = CONTENT.whoami.name;
  if (identityEl) identityEl.textContent = CONTENT.sidebar.identity;

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
}

/* ---- boot ------------------------------------------------------------- */
// Re-fit any rendered portraits when the window size changes.
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.querySelectorAll(".art").forEach(fitArt);
  }, 100);
});

// Restore the saved theme before anything renders.
applyTheme(storedTheme() || "green");

hiddenInput.disabled = true; // ignore keystrokes during the intro
renderSidebar();
enableCommandLinks();

// A routable hash (#projects, #contact, #projects/lizard-wizard) replaces the
// intro; anything else falls through to the normal animated intro.
const routedCommand = commandFromHash();
if (routedCommand) {
  runRouted(routedCommand);
} else {
  runIntro();
}
