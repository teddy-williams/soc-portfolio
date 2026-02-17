// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ====== DATA ======

const caseStudies = [
  {
    title: "Threat Hunting Investigation (TryHackMe Simulator)",
    desc: "Validated a hypothesis, extracted IOCs, reconstructed attack chain, and defined scope using structured investigation workflow.",
    category: "Threat Hunting",
    difficulty: "Medium",
    link: "https://github.com/teddy-williams/cybersecurity-tryhackme-portfolio/blob/main/writeups/threat-hunting/threat-hunting-simulator.md"
  },
  {
    title: "Windows Malware Triage (PEStudio + PowerShell)",
    desc: "Static analysis of a suspicious executable, hash extraction, indicators, and safe investigation workflow.",
    category: "Malware Analysis",
    difficulty: "Medium",
    link: "https://github.com/teddy-williams/cybersecurity-tryhackme-portfolio/blob/main/writeups/malware-analysis/windows-malware-triage.md"
  },
  {
    title: "SOC Log Investigation (Windows Event Logs)",
    desc: "Investigated suspicious authentication events, built a timeline, and documented findings like a real SOC case.",
    category: "Windows",
    difficulty: "Easy",
    link: "https://github.com/teddy-williams/cybersecurity-tryhackme-portfolio/blob/main/writeups/windows/windows-event-investigation.md"
  }
];

const writeups = [
  {
    title: "To Benign or Not Benign?",
    desc: "Analyzed suspicious artifacts and determined whether activity was malicious or safe.",
    category: "Threat Hunting",
    difficulty: "Easy",
    link: "https://github.com/teddy-williams/cybersecurity-tryhackme-portfolio/blob/main/writeups/threat-hunting/to-benign-or-not-benign.md"
  },
  {
    title: "ItsyBitsy (SIEM Challenge)",
    desc: "Worked through a SIEM investigation and extracted evidence supporting a conclusion.",
    category: "Threat Hunting",
    difficulty: "Medium",
    link: "https://github.com/teddy-williams/cybersecurity-tryhackme-portfolio/blob/main/writeups/threat-hunting/itsybitsy.md"
  },
  {
    title: "Intel Only Challenge",
    desc: "Performed threat intel lookups and linked IOCs to known malicious infrastructure.",
    category: "Threat Hunting",
    difficulty: "Easy",
    link: "https://github.com/teddy-williams/cybersecurity-tryhackme-portfolio/blob/main/writeups/threat-hunting/intel-only-challenge.md"
  },
  {
    title: "Basic Linux Investigation",
    desc: "Used Linux commands to enumerate system activity and validate suspicious behavior.",
    category: "Linux",
    difficulty: "Easy",
    link: "https://github.com/teddy-williams/cybersecurity-tryhackme-portfolio/blob/main/writeups/linux/basic-linux-investigation.md"
  },
  {
    title: "Web Recon & Enumeration",
    desc: "Performed recon, directory discovery, and vulnerability identification with clean documentation.",
    category: "Web",
    difficulty: "Easy",
    link: "https://github.com/teddy-williams/cybersecurity-tryhackme-portfolio/blob/main/writeups/web/web-recon-enumeration.md"
  },
  {
    title: "Windows Fundamentals Investigation",
    desc: "Documented Windows artifacts, tools, and key commands used during analysis.",
    category: "Windows",
    difficulty: "Easy",
    link: "https://github.com/teddy-williams/cybersecurity-tryhackme-portfolio/blob/main/writeups/windows/windows-fundamentals-investigation.md"
  }
];

// ====== RENDER ======

function createCard(item, type = "writeup") {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
    <div class="meta">
      <span class="pill">${item.category}</span>
      <span class="pill">${item.difficulty}</span>
      <span class="pill">${type === "case" ? "Case Study" : "Writeup"}</span>
    </div>
    <div class="meta" style="margin-top:14px;">
      <a class="btn secondary" href="${item.link}" target="_blank">Read</a>
    </div>
  `;

  return div;
}

function renderCaseStudies() {
  const grid = document.getElementById("caseStudyGrid");
  grid.innerHTML = "";
  caseStudies.forEach(cs => grid.appendChild(createCard(cs, "case")));
}

function renderWriteups(list) {
  const grid = document.getElementById("writeupGrid");
  grid.innerHTML = "";
  list.forEach(w => grid.appendChild(createCard(w, "writeup")));
}

// Initial render
renderCaseStudies();
renderWriteups(writeups);

// ====== FILTERING ======

const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

function applyFilters() {
  const search = searchInput.value.toLowerCase().trim();
  const category = categorySelect.value;

  const filtered = writeups.filter(w => {
    const matchesSearch =
      w.title.toLowerCase().includes(search) ||
      w.desc.toLowerCase().includes(search);

    const matchesCategory =
      category === "all" ? true : w.category === category;

    return matchesSearch && matchesCategory;
  });

  renderWriteups(filtered);
}

searchInput.addEventListener("input", applyFilters);
categorySelect.addEventListener("change", applyFilters);

