document.addEventListener('DOMContentLoaded', () => {
  // Navigation Tab Switching
  const navItems = document.querySelectorAll('.sidebar .nav-list .nav-item');
  const tabPanes = document.querySelectorAll('.workspace .tab-pane');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(nav => nav.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      item.classList.add('active');
      const targetTab = document.getElementById(item.getAttribute('data-tab'));
      if (targetTab) {
        targetTab.classList.add('active');
      }
    });
  });

  // 1. AI Simplifier Simulation
  const simplifyBtn = document.getElementById('simplifyBtn');
  const rawPolicyInput = document.getElementById('rawPolicyInput');
  const simplifiedOutput = document.getElementById('simplifiedOutput');

  if (simplifyBtn) {
    simplifyBtn.addEventListener('click', () => {
      simplifiedOutput.innerHTML = `
                <div style="color: var(--success); font-weight: 700; margin-bottom: 8px;"><i class="fa-solid fa-circle-check"></i> AI Simplified Summary Generated</div>
                <p><strong>What this means for you:</strong> If your small business operates in Tier-1 areas, you must submit online environmental compliance reports before renewing your operating license.</p>
                <br>
                <p><strong>Action Required:</strong> Upload your digital environmental clearance certificate on the municipal portal to avoid penalties under Section 44.</p>
            `;
    });
  }

  // 2. Multilingual Translation
  const translateBtn = document.getElementById('translateBtn');
  const targetLangSelect = document.getElementById('targetLangSelect');
  const translationOutput = document.getElementById('translationOutput');

  const translations = {
        hi: '<strong>[हिंदी अनुवाद]</strong> आपके व्यवसाय के लिए इसका अर्थ: यदि आपका छोटा व्यवसाय टियर-1 क्षेत्र में है, तो लाइसेंस नवीनीकरण से पहले ऑनलाइन पर्यावरण अनुपालन रिपोर्ट जमा करना अनिवार्य है।',
        bn: '<strong>[বাংলা অনুবাদ]</strong> আপনার ব্যবসার জন্য এর অর্থ: যদি আপনার ছোট ব্যবসাটি টিয়ার-১ এলাকায় হয়, তবে লাইসেন্স নবায়নের আগে অনলাইন পরিবেশগত সম্মতি প্রতিবেদন জমা দিতে হবে।',
        as: '<strong>[অসমীয়া অনুবাদ]</strong> আপোনাৰ ব্যৱসায়ৰ বাবে ইয়াৰ অৰ্থ: যদি আপোনাৰ সৰু ব্যৱসায়টো টিয়াৰ-১ অঞ্চলত হয়, তবে লাইচেন্স নবীকৰণৰ আগতে অনলাইন পৰিৱেশগত অনুপালন প্ৰতিবেদন দাখিল কৰিব লাগিব।',
        te: '<strong>[తెలుగు అనువాదం]</strong> మీ వ్యాపారం కోసం దీని అర్థం: మీ చిన్న వ్యాపారం టైర్-1 ప్రాంతంలో ఉంటే, లైసెన్స్ नवीनीकरणకు ముందే ఆన్‌లైన్ పర్యావరణ నివేదికను సమర్పించాలి.',
        ta: '<strong>[தமிழ் மொழிபெயர்ப்பு]</strong> உங்கள் வணிகத்திற்கான பொருள்: உங்கள் சிறிய வணிகம் டீர்-1 பகுதியில் இருந்தால், உரிமத்தைப் புதுப்பிப்பதற்கு முன் ஆன்லைன் சுற்றுச்சூழல் இணக்க அறிக்கையை சமர்ப்பிக்க வேண்டும்.'
    };

  if (translateBtn) {
    translateBtn.addEventListener('click', () => {
      const lang = targetLangSelect.value;
      translationOutput.innerHTML =
          translations[lang] || '<p>Translation completed successfully.</p>';
    });
  }

  // 3. Scheme Discovery Data
  const schemesContainer = document.getElementById('schemesContainer');
  const sampleSchemes = [
    {
      title: 'PM Mudra Micro-Unit Scheme',
      sector: 'MSME / Small Business',
      desc:
          'Collateral-free loans up to ₹10 Lakhs for small manufacturing and service units.'
    },
    {
      title: 'PM Kisan Samman Nidhi',
      sector: 'Agriculture',
      desc:
          'Direct income support of ₹6,000 per year to eligible farmer families across India.'
    },
    {
      title: 'Startup India Seed Fund',
      sector: 'Technology & Startups',
      desc:
          'Financial assistance to startups for proof of concept, prototype development, and market entry.'
    },
    {
      title: 'National Apprenticeship Training',
      sector: 'Education & Youth',
      desc:
          'Stipend-backed skill training and apprenticeship placements for technical graduates.'
    }
  ];

  function renderSchemes(list) {
    if (!schemesContainer) return;
    schemesContainer.innerHTML = list.map(
                                         s => `
            <div class="scheme-card">
                <div>
                    <h4>${s.title}</h4>
                    <span class="badge" style="margin-bottom:8px; display:inline-block;">${
                                             s.sector}</span>
                    <p>${s.desc}</p>
                </div>
                <button class="btn-action" style="padding: 8px 14px; font-size: 0.85rem;" onclick="alert('Viewing detailed scheme eligibility and benefits.')">View Scheme</button>
            </div>
        `).join('');
  }
  renderSchemes(sampleSchemes);

  // 4. Smart Eligibility Checker
  const checkEligibilityBtn = document.getElementById('checkEligibilityBtn');
  const eligibilityResultBox = document.getElementById('eligibilityResultBox');
  const applicantIncome = document.getElementById('applicantIncome');

  if (checkEligibilityBtn) {
    checkEligibilityBtn.addEventListener('click', () => {
      const income = parseInt(applicantIncome.value) || 0;
      if (income <= 500000) {
        eligibilityResultBox.innerHTML = `
                    <div style="color: var(--success); font-weight: 700; margin-bottom: 8px;"><i class="fa-solid fa-circle-check"></i> Eligible for Grant / Scheme!</div>
                    <p>Based on your annual income of ₹${
            income.toLocaleString(
                'en-IN')}, you qualify for subsidy tier-1 under the selected welfare scheme.</p>
                `;
      } else {
        eligibilityResultBox.innerHTML = `
                    <div style="color: var(--warning); font-weight: 700; margin-bottom: 8px;"><i class="fa-solid fa-triangle-exclamation"></i> Partially Eligible / Higher Bracket</div>
                    <p>Your income exceeds the primary subsidy threshold (₹5,00,000). You qualify for standard business loan facilitation instead of direct subsidy.</p>
                `;
      }
    });
  }

  // 5. Rights & Duties Explainer
  const rightsContainer = document.getElementById('rightsContainer');
  if (rightsContainer) {
    rightsContainer.innerHTML = `
            <div class="card-grid">
                <div class="card">
                    <h3 style="color: var(--success);"><i class="fa-solid fa-shield-halved"></i> Your Legal Rights</h3>
                    <ul class="meta-list" style="margin-top:12px;">
                        <li>Right to timely grievance redressal under Municipal Service Acts within 14 days.</li>
                        <li>Right to transparent disclosure of public welfare funds and scheme allocations.</li>
                        <li>Right to appeal rejected scheme applications with documented justification.</li>
                    </ul>
                </div>
                <div class="card">
                    <h3 style="color: var(--accent);"><i class="fa-solid fa-scale-balanced"></i> Civic Duties</h3>
                    <ul class="meta-list" style="margin-top:12px;">
                        <li>Compliance with local environmental discharge and waste segregation bylaws.</li>
                        <li>Accurate self-declaration of family income and asset parameters during verification.</li>
                        <li>Timely renewal of commercial licenses and operational permits.</li>
                    </ul>
                </div>
            </div>
        `;
  }

  // 6. Voice Explainer Audio Player Simulation
  const playAudioBtn = document.getElementById('playAudioBtn');
  const playIcon = document.getElementById('playIcon');
  const playLabel = document.getElementById('playLabel');
  const audioProgress = document.getElementById('audioProgress');
  let isPlaying = false;
  let progressInterval;

  if (playAudioBtn) {
    playAudioBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
        playIcon.className = 'fa-solid fa-pause';
        playLabel.textContent = 'Pause Audio';
        let width = parseInt(audioProgress.style.width) || 0;
        progressInterval = setInterval(() => {
          width += 2;
          if (width > 100) width = 0;
          audioProgress.style.width = width + '%';
        }, 300);
      } else {
        playIcon.className = 'fa-solid fa-play';
        playLabel.textContent = 'Resume Audio';
        clearInterval(progressInterval);
      }
    });
  }

  // 9. AI Policy Chatbot
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const sendChatBtn = document.getElementById('sendChatBtn');

  function handleChat() {
    const text = chatInput.value.trim();
    if (!text) return;

    chatMessages.innerHTML += `
            <div class="message user">
                <div class="msg-icon"><i class="fa-solid fa-user"></i></div>
                <div class="msg-content">${text}</div>
            </div>
        `;
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
      chatMessages.innerHTML += `
                <div class="message bot">
                    <div class="msg-icon"><i class="fa-solid fa-robot"></i></div>
                    <div class="msg-content">I analyzed your query regarding "${
          text}". Based on current municipal notifications, you are eligible to apply directly through the digital portal with valid income proof.</div>
                </div>
            `;
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 800);
  }

  if (sendChatBtn) {
    sendChatBtn.addEventListener('click', handleChat);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleChat();
    });
  }

  // 10. Policy Change Tracker
  const trackerContainer = document.getElementById('trackerContainer');
  if (trackerContainer) {
    trackerContainer.innerHTML = `
            <h3>Real-Time Policy Amendments & Updates</h3>
            <ul class="meta-list" style="margin-top:16px;">
                <li><strong>[Oct 28, 2026]</strong> Municipal Corp Circular #412: Digital renewal deadline extended by 30 days for MSME establishments.</li>
                <li><strong>[Oct 15, 2026]</strong> Ministry of Agriculture: PM Kisan e-KYC verification mandatory for upcoming installment dispatch.</li>
                <li><strong>[Oct 02, 2026]</strong> Urban Welfare Notification: Simplified grievance portal launched for civic service complaints.</li>
            </ul>
        `;
  }

  // Modal Handling
  const uploadPolicyBtn = document.getElementById('uploadPolicyBtn');
  const uploadModal = document.getElementById('uploadModal');
  const closeModal = document.getElementById('closeModal');
  const processIngestionBtn = document.getElementById('processIngestionBtn');

  if (uploadPolicyBtn) {
    uploadPolicyBtn.addEventListener(
        'click', () => uploadModal.style.display = 'flex');
    closeModal.addEventListener(
        'click', () => uploadModal.style.display = 'none');
    processIngestionBtn.addEventListener('click', () => {
      alert('Policy document ingested and indexed successfully!');
      uploadModal.style.display = 'none';
    });
  }
});