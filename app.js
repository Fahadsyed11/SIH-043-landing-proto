/**
 * AccheDin — Civic Innovation & Real-World Solutions Platform
 * Interactive Frontend Logic & AI Engine Simulator
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initAiPresetSwitcher();
  initCustomAiParser();
  initPipelineWalkthrough();
  initPilotSwitcher();
  initSubmitModal();
  initInviteButtons();
  initNumberCounters();
});

/* ==========================================================================
   1. NAVBAR SCROLL EFFECT
   ========================================================================== */
function initNavbarScroll() {
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.style.boxShadow = '0 4px 20px -2px rgba(15, 23, 42, 0.08)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });
}

/* ==========================================================================
   2. AI PRESET SWITCHER & SIMULATION ENGINE
   ========================================================================== */
const AI_PRESETS = {
  water: {
    input: "Our village well in Jhansi has high fluoride and smells like sulfur. Children are getting joint pains and we need a low-cost filter that runs without 24/7 grid electricity.",
    taxonomy: "Water Tech • Rural Micro-Desalination",
    urgency: "96 / 100 (Critical Health Impact)",
    cost: "≤ ₹2,400 per household filter",
    techStack: "Solar-Assisted Electrocoagulation, Adsorbent Bed",
    tags: ["#FluorideRemediation", "#OffGridPower", "#JalShaktiMission", "#DistrictJhansi"],
    confidence: "99.4% Confidence",
    labs: [
      {
        icon: "🏛️",
        name: "National Institute of Hydrology (NIH)",
        sub: "Roorkee, Uttarakhand • Central Lab",
        score: "98%",
        scoreClass: "score-high",
        pills: ["🔬 14 Published Patents", "💧 Water Filtration Specialization", "⚡ Ready Squad"],
        actionText: "Invite to Solve",
        actionData: "NIH Roorkee"
      },
      {
        icon: "🎓",
        name: "BITS Pilani Water Innovation Squad",
        sub: "Rajasthan • University Research Lab",
        score: "93%",
        scoreClass: "score-mid",
        pills: ["👥 6 Student Researchers", "⚡ Low-Cost IoT Sensor Prototype"],
        actionText: "Invite to Solve",
        actionData: "BITS Pilani"
      },
      {
        icon: "🏢",
        name: "CleanWater CSR Initiative (Tata Trusts Partner)",
        sub: "CSR Capital & Prototyping Partner",
        score: "89%",
        scoreClass: "score-mid",
        pills: ["💰 Seed Grant Eligible", "📍 Bundelkhand Field Network"],
        actionText: "Deploy Seed Capital",
        actionData: "Tata Trusts Partner"
      }
    ]
  },
  agri: {
    input: "Locust swarms from neighboring desert regions are destroying mustard and wheat crops in Barmer. Farmers have only 30-minute advance warnings before whole acres are stripped.",
    taxonomy: "Agritech • Bio-Acoustic Early Warning & Drone Defense",
    urgency: "94 / 100 (Immediate Economic Loss)",
    cost: "≤ ₹18,000 per autonomous patrol drone",
    techStack: "Edge AI Vision, Acoustic Infrasound Sensor, LoRa Mesh",
    tags: ["#LocustDefense", "#DroneSwarm", "#CropProtection", "#KisanAssistance"],
    confidence: "98.7% Confidence",
    labs: [
      {
        icon: "🏛️",
        name: "ICAR - Central Arid Zone Research Institute",
        sub: "Jodhpur, Rajasthan • Premier ICAR Lab",
        score: "99%",
        scoreClass: "score-high",
        pills: ["🌾 Pest Bio-Dynamics Lab", "📡 Radar Telemetry Data", "🚜 Field Station Network"],
        actionText: "Invite to Solve",
        actionData: "ICAR Jodhpur"
      },
      {
        icon: "🎓",
        name: "IIT Jodhpur Autonomous Drone Squad",
        sub: "Robotics & UAV Research Group",
        score: "95%",
        scoreClass: "score-high",
        pills: ["🤖 Autonomous Swarm Firmware", "⚡ 45-min Flight Endurance Mod"],
        actionText: "Invite to Solve",
        actionData: "IIT Jodhpur"
      },
      {
        icon: "🏢",
        name: "Mahindra Agri-Ventures Impact Fund",
        sub: "Agri CSR & Hardware Scaling",
        score: "91%",
        scoreClass: "score-mid",
        pills: ["💰 ₹15 Lakh Pilot Grant", "🏭 Precision Fabrication Access"],
        actionText: "Deploy Seed Capital",
        actionData: "Mahindra Agri-Ventures"
      }
    ]
  },
  health: {
    input: "In high-altitude Kinnaur villages, electricity cuts spoil hepatitis and polio vaccine vials stored in PHCs. Existing kerosene fridges are unsafe and unreliable.",
    taxonomy: "Rural MedTech • Cold-Chain Storage & Phase-Change Thermals",
    urgency: "98 / 100 (Severe Pediatric Vulnerability)",
    cost: "≤ ₹9,500 per passive vaccine icebox",
    techStack: "Phase Change Materials (PCM), Solid-State Peltier, IoT GPS/Temp Tracker",
    tags: ["#ColdChain", "#ChildImmunization", "#KinnaurPHC", "#SolidStateCooling"],
    confidence: "99.1% Confidence",
    labs: [
      {
        icon: "🏛️",
        name: "National Institute of Immunology (NII)",
        sub: "New Delhi • Biomedical Innovation",
        score: "97%",
        scoreClass: "score-high",
        pills: ["🧪 Vaccine Potency Testing", "❄️ WHO PQS Certification Lead"],
        actionText: "Invite to Solve",
        actionData: "NII New Delhi"
      },
      {
        icon: "🎓",
        name: "IIT Mandi Mountain MedTech Lab",
        sub: "Himachal Pradesh • High Altitude Innovation",
        score: "96%",
        scoreClass: "score-high",
        pills: ["🏔️ Sub-zero Thermal Modeling", "🔋 Solar-Thermoelectric Squad"],
        actionText: "Invite to Solve",
        actionData: "IIT Mandi"
      },
      {
        icon: "🏢",
        name: "Serum Institute Rural Reach CSR",
        sub: "Vaccine Distribution Impact Fund",
        score: "94%",
        scoreClass: "score-high",
        pills: ["💰 ₹25 Lakh Deployment Grant", "📦 200 PHC Distribution"],
        actionText: "Deploy Seed Capital",
        actionData: "Serum Institute CSR"
      }
    ]
  },
  urban: {
    input: "Monsoon waterlogging and hidden deep potholes on Outer Ring Road cause continuous two-wheeler accidents and 3-hour gridlocks. Municipal complaints take weeks to dispatch.",
    taxonomy: "Smart Urban Infra • Computer Vision LiDAR & Auto-Dispatch",
    urgency: "89 / 100 (Public Safety & Traffic Velocity)",
    cost: "≤ ₹3,500 per bus-mounted LiDAR scanner",
    techStack: "YOLOv9 Road Surface Vision, Edge TensorRT, BBMP API Bridge",
    tags: ["#UrbanSafety", "#PotholeLiDAR", "#BengaluruTraffic", "#SmartCityBBMP"],
    confidence: "97.8% Confidence",
    labs: [
      {
        icon: "🏛️",
        name: "IISc Bangalore Centre for Smart Transportation",
        sub: "Bangalore • Deep Tech Urban Mobility",
        score: "99%",
        scoreClass: "score-high",
        pills: ["🚦 Real-time GIS Simulation", "🚌 BMTC Fleet Integration Access"],
        actionText: "Invite to Solve",
        actionData: "IISc CST"
      },
      {
        icon: "🎓",
        name: "PES University Computer Vision Lab",
        sub: "Bangalore • Edge Computing Squad",
        score: "92%",
        scoreClass: "score-mid",
        pills: ["📷 40 FPS Edge AI Pipeline", "⚡ Open Source Mobile App"],
        actionText: "Invite to Solve",
        actionData: "PES CV Lab"
      },
      {
        icon: "🏢",
        name: "Infosys Urban Governance Foundation",
        sub: "Smart City CSR Partner",
        score: "88%",
        scoreClass: "score-mid",
        pills: ["💰 Cloud Compute Credits", "🏛️ BBMP Pilot Sandbox"],
        actionText: "Deploy Seed Capital",
        actionData: "Infosys Urban Foundation"
      }
    ]
  }
};

function initAiPresetSwitcher() {
  const presetBtns = document.querySelectorAll('.preset-btn');
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const presetKey = btn.dataset.preset;
      loadAiPreset(presetKey);
    });
  });
}

function loadAiPreset(key) {
  const data = AI_PRESETS[key];
  if (!data) return;

  const textarea = document.getElementById('aiSimInput');
  const taxonomy = document.getElementById('aiTaxonomy');
  const urgency = document.getElementById('aiUrgency');
  const cost = document.getElementById('aiCost');
  const techStack = document.getElementById('aiTechStack');
  const confidence = document.getElementById('aiConfidence');
  const tagsContainer = document.getElementById('aiExtractedTags');
  const labsContainer = document.getElementById('matchedLabsContainer');

  // Set input text
  textarea.value = data.input;

  // Visual pulse animation on fields
  const brief = document.querySelector('.ai-synthesized-brief');
  brief.style.opacity = '0.4';
  brief.style.transform = 'scale(0.99)';

  setTimeout(() => {
    taxonomy.textContent = data.taxonomy;
    urgency.textContent = data.urgency;
    cost.textContent = data.cost;
    techStack.textContent = data.techStack;
    confidence.textContent = data.confidence;

    // Render tags
    tagsContainer.innerHTML = data.tags.map(t => `<span class="tag-chip">${t}</span>`).join('');

    // Render labs
    labsContainer.innerHTML = data.labs.map((lab, idx) => `
      <div class="lab-match-card ${idx === 0 ? 'top-match' : ''}">
        <div class="lab-card-top">
          <div class="lab-badge-group">
            <div class="lab-icon-box">${lab.icon}</div>
            <div>
              <h4 class="lab-title">${lab.name}</h4>
              <div class="lab-sub">${lab.sub}</div>
            </div>
          </div>
          <div class="match-score-badge ${lab.scoreClass}">
            <strong>${lab.score}</strong>
            <span>Match</span>
          </div>
        </div>
        <div class="lab-meta-pills">
          ${lab.pills.map(p => `<span>${p}</span>`).join('')}
        </div>
        <div class="lab-action-row">
          <button class="btn btn-xs btn-primary btn-invite-squad" data-lab="${lab.actionData}">${lab.actionText}</button>
          <button class="btn btn-xs btn-outline">View Lab Profile</button>
        </div>
      </div>
    `).join('');

    brief.style.opacity = '1';
    brief.style.transform = 'scale(1)';
    brief.style.transition = 'all 0.3s ease';

    initInviteButtons();
    showToast(`AI Matcher updated for ${data.taxonomy.split('•')[0].trim()}`);
  }, 200);
}

function initCustomAiParser() {
  const triggerBtn = document.getElementById('btnTriggerAiParse');
  const simInput = document.getElementById('aiSimInput');

  if (triggerBtn && simInput) {
    triggerBtn.addEventListener('click', () => {
      const text = simInput.value.trim();
      if (!text) {
        showToast('Please enter a challenge description first.');
        return;
      }

      triggerBtn.disabled = true;
      triggerBtn.innerHTML = `<span>Synthesizing...</span>`;

      setTimeout(() => {
        triggerBtn.disabled = false;
        triggerBtn.innerHTML = `<span>Analyze & Match</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
        
        document.getElementById('aiConfidence').textContent = '99.2% Confidence';
        document.getElementById('aiUrgency').textContent = '92 / 100 (High Action Priority)';
        
        showToast('AI synthesized your input into engineering parameters!');
        confettiEffect();
      }, 700);
    });
  }

  // Hero simulate next button
  const heroSimBtn = document.getElementById('heroSimulateNextBtn');
  if (heroSimBtn) {
    heroSimBtn.addEventListener('click', () => {
      showToast('⚡ Matched: New problem connected to IIT Madras Clean Energy Squad!');
      confettiEffect();
    });
  }
}

/* ==========================================================================
   3. PIPELINE INTERACTIVE WALKTHROUGH
   ========================================================================== */
const PIPELINE_STAGES = [
  {
    step: 1,
    tag: "STAGE 1 DEEP DIVE: CITIZEN INGESTION",
    title: "Multilingual Multimodal Problem Intake",
    body: "Citizens, field officers, and Asha workers report acute local bottlenecks using voice notes in 12 regional languages, SMS, or mobile camera. The system automatically tags GPS latitude/longitude and cross-references municipal GIS boundaries."
  },
  {
    step: 2,
    tag: "STAGE 2 DEEP DIVE: AI DECOMPOSITION",
    title: "Automated Engineering Brief & Deduplication",
    body: "The neural parsing pipeline scans past municipal databases and research repositories. It converts narrative complaints into quantitative engineering parameters, target BOM unit costs, and strict physical constraints."
  },
  {
    step: 3,
    tag: "STAGE 3 DEEP DIVE: CAPABILITY-BASED MATCHING",
    title: "Smart Matching to Specialized Labs & Hackathon Squads",
    body: "Our graph matching algorithm scores university lab hardware capability, verified faculty patents, student skillsets, and geographic proximity to deliver top candidate research squads."
  },
  {
    step: 4,
    tag: "STAGE 4 DEEP DIVE: OPEN SQUAD SPRINT",
    title: "Virtual War Room & Mentor Collaboration",
    body: "Inter-college student teams, faculty advisors, and industry mentors receive compute credits, CAD simulation licenses, and structured sprint rubrics to co-develop functional prototypes."
  },
  {
    step: 5,
    tag: "STAGE 5 DEEP DIVE: DISTRICT PILOT SANDBOX",
    title: "Real-World Field Deployment with Local Admin",
    body: "Verified prototypes receive fast-track collector permissions and micro-grants from CSR partners for 30-to-90 day village sandbox trials with live IoT sensor telemetry."
  },
  {
    step: 6,
    tag: "STAGE 6 DEEP DIVE: PUBLIC VERIFICATION & SCALE",
    title: "Open Ledger Impact Audit & Policy Handover",
    body: "Sensor metrics and public audits certify field efficacy. Validated designs are published open-source to the national innovation repository for statewide procurement."
  }
];

let currentPipelineStep = 1;

function initPipelineWalkthrough() {
  const btnStatic = document.getElementById('btnLifecycleStatic');
  const btnInteractive = document.getElementById('btnLifecycleInteractive');
  const demoBox = document.getElementById('pipelineDemoBox');
  const nodes = document.querySelectorAll('.pipeline-node');
  const prevBtn = document.getElementById('demoPrevBtn');
  const nextBtn = document.getElementById('demoNextBtn');

  if (btnStatic && btnInteractive && demoBox) {
    btnStatic.addEventListener('click', () => {
      btnStatic.classList.add('active');
      btnInteractive.classList.remove('active');
      demoBox.style.display = 'none';
    });

    btnInteractive.addEventListener('click', () => {
      btnInteractive.classList.add('active');
      btnStatic.classList.remove('active');
      demoBox.style.display = 'block';
      updatePipelineStep(currentPipelineStep);
    });
  }

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const step = parseInt(node.dataset.step, 10);
      currentPipelineStep = step;
      if (btnInteractive) {
        btnInteractive.classList.add('active');
        btnStatic.classList.remove('active');
        demoBox.style.display = 'block';
      }
      updatePipelineStep(step);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPipelineStep > 1) {
        currentPipelineStep--;
        updatePipelineStep(currentPipelineStep);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentPipelineStep < 6) {
        currentPipelineStep++;
        updatePipelineStep(currentPipelineStep);
      } else {
        currentPipelineStep = 1;
        updatePipelineStep(currentPipelineStep);
      }
    });
  }
}

function updatePipelineStep(step) {
  const data = PIPELINE_STAGES[step - 1];
  if (!data) return;

  const demoTag = document.getElementById('demoTag');
  const demoTitle = document.getElementById('demoTitle');
  const demoBody = document.getElementById('demoBody');
  const nodes = document.querySelectorAll('.pipeline-node');

  demoTag.textContent = data.tag;
  demoTitle.textContent = data.title;
  demoBody.textContent = data.body;

  nodes.forEach(n => {
    if (parseInt(n.dataset.step, 10) === step) {
      n.style.borderColor = 'var(--primary)';
      n.style.boxShadow = 'var(--shadow-md)';
      n.style.background = '#EFF6FF';
    } else {
      n.style.borderColor = 'var(--border-light)';
      n.style.boxShadow = 'none';
      n.style.background = '#FFFFFF';
    }
  });
}

/* ==========================================================================
   4. PILOT TRACKER SWITCHER
   ========================================================================== */
const PILOT_PROJECTS = {
  desalination: {
    code: "SOL-2026-MH-084",
    district: "📍 Osmanabad District, Maharashtra",
    title: "IoT-Enabled Solar Water Desalination & Nitrate Filter for Drought Communities",
    summary: "Low-cost thermal vaporization unit powered by bifacial solar panels, reducing nitrate toxicity by 84% in high-salinity groundwater across 3 arid villages.",
    pct: 88,
    dash: "88, 100",
    statusText: "Field Pilot Active",
    statusSub: "Stage 5 of 6 Completed",
    telemetry1Lbl: "Daily Potable Output:",
    telemetry1Val: "1,200 L",
    telemetry2Lbl: "Nitrate Reduction:",
    telemetry2Val: "-84%",
    allocated: "₹12,50,000",
    deployed: "₹10,84,200",
    fillWidth: "86%",
    verifier: "District Magistrate Osmanabad + CSIR-NEERI",
    milestones: [
      { status: 'done', marker: '✓', title: 'Phase 1: Problem Formulation & Local Data Scrape', meta: 'Completed by Osmanabad Gram Panchayat • 12 Oct' },
      { status: 'done', marker: '✓', title: 'Phase 2: Lab Prototype & Bench Testing (IIT Bombay)', meta: 'Passed CSIR-NEERI Water Quality Standards • 28 Nov' },
      { status: 'active', marker: '⚡', title: 'Phase 3: 30-Day Village Field Pilot & Sensor Telemetry', meta: 'Current Stage • 1,200L Daily Output Verified' },
      { status: 'pending', marker: '4', title: 'Phase 4: District-Wide Scale & CSR Handover', meta: 'Scheduled for Q1 2027 • 40 Additional Units' }
    ]
  },
  locust: {
    code: "SOL-2026-RJ-112",
    district: "📍 Barmer & Jaisalmer, Rajasthan",
    title: "Autonomous Agro-Drone Acoustic Swarm Defense for Arid Crops",
    summary: "Solar-docked autonomous drone squads equipped with infrasound acoustic disruption and bio-friendly neem repellent sprays to neutralize incoming desert locust swarms.",
    pct: 75,
    dash: "75, 100",
    statusText: "Hardware Field Trial",
    statusSub: "Stage 4 of 6 Completed",
    telemetry1Lbl: "Acreage Protected:",
    telemetry1Val: "4,500 Acres",
    telemetry2Lbl: "Early Warning Lead:",
    telemetry2Val: "38 Mins",
    allocated: "₹18,00,000",
    deployed: "₹13,50,000",
    fillWidth: "75%",
    verifier: "ICAR Jodhpur + Rajasthan Dept of Agriculture",
    milestones: [
      { status: 'done', marker: '✓', title: 'Phase 1: Acoustic Frequency Calibration & Testing', meta: 'Validated at CAZRI Jodhpur Labs' },
      { status: 'done', marker: '✓', title: 'Phase 2: Autonomous Swarm Telemetry & Mesh Net', meta: 'Tested with 4-drone synchronized flight' },
      { status: 'active', marker: '⚡', title: 'Phase 3: 50-Farm Boundary Sensor Deployment', meta: 'Current Stage • 12 Solar Docks Installed' },
      { status: 'pending', marker: '4', title: 'Phase 4: State Disaster Relief Fleet Handover', meta: 'Pending Final Season Audit' }
    ]
  },
  pothole: {
    code: "SOL-2026-KA-204",
    district: "📍 Bengaluru Urban, Karnataka",
    title: "AI Smart Pothole & Waterlogging LiDAR Rover for Municipal Rapid Fill",
    summary: "Public transit-mounted camera and LiDAR vision unit automatically detecting road fissures > 4cm, auto-generating work orders directly into the BBMP engineering workflow.",
    pct: 94,
    dash: "94, 100",
    statusText: "Institutional Rollout",
    statusSub: "Stage 5 of 6 Completed",
    telemetry1Lbl: "Road Scanned Daily:",
    telemetry1Val: "340 KM",
    telemetry2Lbl: "Avg Repair Dispatch:",
    telemetry2Val: "18 Hours",
    allocated: "₹8,50,000",
    deployed: "₹7,90,000",
    fillWidth: "93%",
    verifier: "BBMP Chief Engineer + IISc Transportation Lab",
    milestones: [
      { status: 'done', marker: '✓', title: 'Phase 1: Deep Learning Road Defect Vision Model', meta: 'Trained on 140,000 Indian road frames' },
      { status: 'done', marker: '✓', title: 'Phase 2: 25 BMTC Bus Fleet Deployment Trial', meta: '99.1% Detection accuracy in heavy rain' },
      { status: 'done', marker: '✓', title: 'Phase 3: BBMP Contractor Automated API Dispatch', meta: '1,420 potholes filled in 30 days' },
      { status: 'active', marker: '⚡', title: 'Phase 4: City-Wide Ward Expansion (198 Wards)', meta: 'Current Stage • Expanding to auto-rickshaws' }
    ]
  },
  coldchain: {
    code: "SOL-2026-HP-045",
    district: "📍 Kinnaur & Lahaul-Spiti, Himachal Pradesh",
    title: "Off-Grid Solid-State Thermoelectric Vaccine Storage Capsule",
    summary: "Zero-freon phase change vaccine carrier maintaining 2°C - 8°C temperature for up to 72 hours without continuous AC electricity, designed for remote Himalayan PHCs.",
    pct: 82,
    dash: "82, 100",
    statusText: "High-Altitude Validation",
    statusSub: "Stage 4 of 6 Completed",
    telemetry1Lbl: "Vials Preserved:",
    telemetry1Val: "6,800+",
    telemetry2Lbl: "Holdover Time:",
    telemetry2Val: "76 Hours",
    allocated: "₹14,20,000",
    deployed: "₹11,64,000",
    fillWidth: "82%",
    verifier: "National Health Mission HP + IIT Mandi",
    milestones: [
      { status: 'done', marker: '✓', title: 'Phase 1: Sub-Zero Insulation Bench Simulation', meta: 'Validated at -15°C Ambient in Mandi' },
      { status: 'done', marker: '✓', title: 'Phase 2: Solar Peltier Dual-Redundancy Circuit', meta: 'Passed IEC 60068 Shock & Vibration' },
      { status: 'active', marker: '⚡', title: 'Phase 3: 14 High-Altitude PHC Winter Trials', meta: 'Current Stage • Zero thermal breaches logged' },
      { status: 'pending', marker: '4', title: 'Phase 4: National Immunization Program Scale', meta: 'Scheduled for April 2027' }
    ]
  }
};

function initPilotSwitcher() {
  const projTabs = document.querySelectorAll('.proj-tab-btn');
  projTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      projTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const projKey = tab.dataset.proj;
      loadPilotProject(projKey);
    });
  });
}

function loadPilotProject(key) {
  const p = PILOT_PROJECTS[key];
  if (!p) return;

  document.getElementById('pilotCode').textContent = p.code;
  document.getElementById('pilotDistrict').textContent = p.district;
  document.getElementById('pilotTitle').textContent = p.title;
  document.getElementById('pilotSummary').textContent = p.summary;
  document.getElementById('pilotProgressPct').textContent = `${p.pct}%`;
  document.getElementById('pilotCircleFill').setAttribute('stroke-dasharray', p.dash);
  document.getElementById('pilotStatusText').textContent = p.statusText;
  document.getElementById('telemetry1Lbl').textContent = p.telemetry1Lbl;
  document.getElementById('telemetry1Val').textContent = p.telemetry1Val;
  document.getElementById('telemetry2Lbl').textContent = p.telemetry2Lbl;
  document.getElementById('telemetry2Val').textContent = p.telemetry2Val;
  document.getElementById('ledgerAllocated').textContent = p.allocated;
  document.getElementById('ledgerDeployed').textContent = p.deployed;
  document.getElementById('ledgerFill').style.width = p.fillWidth;
  document.getElementById('pilotVerifier').textContent = p.verifier;

  // Render milestones
  const msContainer = document.getElementById('pilotMilestones');
  msContainer.innerHTML = p.milestones.map(m => `
    <div class="milestone-item ${m.status}">
      <div class="ms-marker">${m.marker}</div>
      <div class="ms-content">
        <div class="ms-title">${m.title}</div>
        <div class="ms-meta">${m.meta}</div>
      </div>
    </div>
  `).join('');

  showToast(`Loaded pilot data for ${p.code}`);
}

/* ==========================================================================
   5. SUBMIT CHALLENGE MODAL
   ========================================================================== */
function initSubmitModal() {
  const modal = document.getElementById('submitModal');
  const openBtns = [
    document.getElementById('openSubmitModalBtn'),
    document.getElementById('heroSubmitBtn'),
    document.getElementById('ctaSubmitBtn')
  ];
  const closeBtn = document.getElementById('closeSubmitModalBtn');
  const cancelBtn = document.getElementById('cancelSubmitModalBtn');
  const form = document.getElementById('submitChallengeForm');

  openBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    }
  });

  const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Handle Form Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('probTitle').value;
      const district = document.getElementById('probDistrict').value;

      closeModal();
      form.reset();

      showToast(`🎉 Challenge "${title}" submitted and dispatched to AI Matching Engine!`);
      confettiEffect();
    });
  }

  // Explore buttons smooth scroll
  const exploreBtns = [
    document.getElementById('heroExploreBtn'),
    document.getElementById('ctaExploreBtn'),
    document.getElementById('signInBtn')
  ];

  exploreBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (btn.id === 'signInBtn') {
          showToast('Single Sign-On for Institutions & Students: Select your university email or MeriPehchaan ID.');
        } else {
          document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' }) || 
          document.getElementById('live-tracker')?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
}

/* ==========================================================================
   6. INVITE BUTTONS & SQUAD CONNECT
   ========================================================================== */
function initInviteButtons() {
  const inviteBtns = document.querySelectorAll('.btn-invite-squad');
  inviteBtns.forEach(btn => {
    btn.onclick = () => {
      const lab = btn.dataset.lab || 'Squad Partner';
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-outline');
      btn.textContent = '✓ Invite Dispatched';
      btn.disabled = true;

      showToast(`Formal invitation RFP dispatched to ${lab} with grant criteria.`);
      confettiEffect();
    };
  });
}

/* ==========================================================================
   7. NUMBER COUNTER ANIMATION
   ========================================================================== */
function initNumberCounters() {
  const counterElements = document.querySelectorAll('[data-target]');
  let animated = false;

  const handleScroll = () => {
    const section = document.getElementById('impact');
    if (!section || animated) return;

    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      animated = true;
      counterElements.forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        let current = 0;
        const increment = Math.ceil(target / 40);
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            el.textContent = target.toLocaleString() + '+';
            clearInterval(timer);
          } else {
            el.textContent = current.toLocaleString() + '+';
          }
        }, 30);
      });
    }
  };

  window.addEventListener('scroll', handleScroll);
}

/* ==========================================================================
   8. TOAST NOTIFICATIONS & CONFETTI
   ========================================================================== */
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function confettiEffect() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#2563EB', '#0284C7', '#10B981', '#F59E0B', '#E11D48']
    });
  }
}
