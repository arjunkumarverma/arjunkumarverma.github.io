/**
 * Dr. Arjun Kumar Verma — Executive Portfolio Scripts
 * Vanilla JavaScript (No dependencies, zero build step required)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const isOpen = mobileNav.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any link
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });
  }

  // 2. Timeline Category Filtering
  const filterTabs = document.querySelectorAll('.filter-tab');
  const timelineItems = document.querySelectorAll('.timeline-item');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      timelineItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter || (category && category.includes(filter))) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 3. Project Detail Modal Data
  const projectsData = {
    'project-1': {
      title: 'Border District Prevention of Drug Abuse & Youth De-Addiction Program',
      agency: 'Ministry of Social Justice and Empowerment & NYKS',
      reach: '3,750 Villages across 17 Border Districts (Punjab & Manipur) · 1.17+ Crore Direct & Community Reach',
      period: 'Flagship Multi-Year Border Intervention',
      summary: 'Directed the planning, inter-district administrative coordination, and grassroots volunteer mobilization for comprehensive de-addiction campaigns across sensitive international border belts of Punjab and Manipur.',
      points: [
        'Organized youth clubs into anti-drug vigilance networks and village peer counseling units across 3,750 border villages.',
        'Conducted localized street theatre (Nukkad Natak), community pledge rallies, and rehabilitation facilitation.',
        'Collaborated with district magistrates, border security personnel, narcotics control bureaus, and local panchayats.',
        'Recognized nationally for measurable drops in youth susceptibility and institutionalization of community sports programs as diversionary pathways.'
      ]
    },
    'project-2': {
      title: 'National Youth Convention & Commemoration of the 150th Anniversary of the First War of Independence (1857)',
      agency: 'Ministry of Youth Affairs and Sports, Govt. of India',
      reach: '30,000 Verified Youth Delegates Mobilized · Lal Quila (Red Fort), New Delhi',
      period: 'National Commemoration Year',
      summary: 'Executive coordinator for the historic national youth gathering at Lal Quila (Red Fort), New Delhi, celebrating the 150th Anniversary of the 1857 War of Indian Independence.',
      points: [
        'Orchestrated logistical transport, accommodation, security vetting, and cultural delegations from every State and Union Territory in India.',
        'Spearheaded the presentation of patriotic youth exhibitions attended by the Prime Minister, Union Cabinet Ministers, and civil society dignitaries.',
        'Authored post-convention proceedings and institutional documentation capturing national integration pledges.'
      ]
    },
    'project-3': {
      title: 'Namami Gange National Clean Ganga Youth Network',
      agency: 'National Mission for Clean Ganga (NMCG), Ministry of Jal Shakti & NYKS',
      reach: '500+ Riparian Villages across Uttarakhand, UP, Bihar & West Bengal',
      period: 'Flagship Riverine Conservation Campaign',
      summary: 'Mobilized youth volunteer brigades along the Ganges river basin for pollution abatement, biological conservation, afforestation, and ghat cleanliness.',
      points: [
        'Formed specialized "Ganga Doots" (Clean Ganga Youth Cadres) across sacred ghats and riverside habitations.',
        'Applied botanical science background to promote native riparian vegetation and organic bio-fencing along riverbanks.',
        'Organized water quality awareness campaigns, plastic interception drives, and community solid-waste disposal SOPs.'
      ]
    },
    'project-4': {
      title: 'UNFPA Adolescent Health and Development Project (AHDP)',
      agency: 'United Nations Population Fund (UNFPA) & Ministry of Youth Affairs',
      reach: '45 Targeted Underdeveloped Districts across Bihar, Jharkhand & Odisha',
      period: 'UN Inter-Agency Development Mission',
      summary: 'Spearheaded life skills education, reproductive and sexual health awareness, and gender sensitization among rural out-of-school adolescents.',
      points: [
        'Established village-level Adolescent Friendly Clubs and peer educator training centers.',
        'Created customized training manuals translated into regional dialects for culturally sensitive community delivery.',
        'Monitored quantitative health metrics and achieved significant boosts in institutional child births and adolescent school retention.'
      ]
    },
    'project-5': {
      title: 'Smart Tribal Farming & Rural Digitization Framework',
      agency: 'Shobhit University (Director of Planning Portfolio)',
      reach: 'Regional Agricultural Clusters in Western Uttar Pradesh & Tribal Belts',
      period: '2020 – 2024 (University Planning Portfolio)',
      summary: 'Architected university-level planning and community outreach policies linking sustainable ecological agriculture with smart sensor technologies for marginalized rural farmers.',
      points: [
        'Designed curriculum integrations bridging agrarian ecology, drone-assisted crop monitoring, and sustainable seed banking.',
        'Formulated university grant proposals and strategic academic partnerships for rural empowerment.',
        'Supervised institutional academic accreditations and internal quality assurance governance.'
      ]
    },
    'project-6': {
      title: 'Inter-State Border Youth Exchange & National Integration Camps',
      agency: 'National Integration Division, NYKS & Ministry of Home Affairs',
      reach: '10,000+ Youth from Jammu & Kashmir, North East & Left-Wing Extremism (LWE) Belts',
      period: 'Continuous Annual Program Series',
      summary: 'Directed transformative immersion programs introducing youth from border and conflict-affected zones to mainstream cultural, educational, and governance centers across India.',
      points: [
        'Fostered deep emotional and constitutional integration through homestays, university symposiums, and interaction with national leaders.',
        'Cultivated grassroots civil leadership countering alienation and regional disenfranchisement.'
      ]
    }
  };

  // Project Modal Handling
  const projectModal = document.getElementById('project-modal');
  const projectModalContent = document.getElementById('project-modal-content');
  const projectModalClose = document.getElementById('project-modal-close');

  document.querySelectorAll('.open-project-btn').forEach(button => {
    button.addEventListener('click', () => {
      const projectId = button.getAttribute('data-project');
      const data = projectsData[projectId];

      if (data && projectModal && projectModalContent) {
        let pointsHtml = data.points.map(pt => `<li style="margin-bottom: 0.6rem; line-height: 1.55;">${pt}</li>`).join('');

        projectModalContent.innerHTML = `
          <div style="font-size: 0.75rem; font-weight: 700; color: #b45309; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.4rem;">
            ${data.agency}
          </div>
          <h3 style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 700; color: #0f172a; margin-bottom: 1rem; line-height: 1.3;">
            ${data.title}
          </h3>
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 1rem; border-radius: 8px; margin-bottom: 1.25rem; font-size: 0.85rem;">
            <div style="margin-bottom: 0.35rem;"><strong>Coverage & Reach:</strong> ${data.reach}</div>
            <div><strong>Framework:</strong> ${data.period}</div>
          </div>
          <p style="font-size: 0.95rem; color: #334155; line-height: 1.6; margin-bottom: 1.25rem;">
            ${data.summary}
          </p>
          <h4 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #0f172a; margin-bottom: 0.75rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.35rem;">
            Verified Strategic Execution:
          </h4>
          <ul style="padding-left: 1.25rem; color: #475569; font-size: 0.9rem;">
            ${pointsHtml}
          </ul>
        `;

        projectModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (projectModalClose) {
    projectModalClose.addEventListener('click', () => {
      projectModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // 4. CV Modal Handling
  const cvModal = document.getElementById('cv-modal');
  const cvOpenBtns = document.querySelectorAll('.open-cv-btn');
  const cvCloseBtn = document.getElementById('cv-modal-close');
  const cvPrintBtn = document.getElementById('cv-print-btn');

  cvOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cvModal) {
        cvModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (cvCloseBtn && cvModal) {
    cvCloseBtn.addEventListener('click', () => {
      cvModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (cvPrintBtn) {
    cvPrintBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Close modals on clicking overlay outside card
  window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.classList.remove('open');
      document.body.style.overflow = '';
    }
    if (e.target === cvModal) {
      cvModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Close modals on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal && projectModal.classList.contains('open')) {
        projectModal.classList.remove('open');
        document.body.style.overflow = '';
      }
      if (cvModal && cvModal.classList.contains('open')) {
        cvModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    }
  });

  // 5. Copy Email Action
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'arjunkumarvermas2123@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalContent = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = '✓ Copied';
        copyEmailBtn.style.color = '#15803d';
        copyEmailBtn.style.fontWeight = 'bold';
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalContent;
          copyEmailBtn.style.color = '';
          copyEmailBtn.style.fontWeight = '';
        }, 2000);
      });
    });
  }

  // 6. Direct Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const subject = document.getElementById('form-subject').value || `Inquiry from ${name}`;
      const message = document.getElementById('form-message').value;

      const mailtoLink = `mailto:arjunkumarvermas2123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoLink;
    });
  }

  // 7. Image Fallback Handling
  const portraitImg = document.getElementById('portrait-img');
  const portraitFallback = document.getElementById('portrait-fallback');

  if (portraitImg && portraitFallback) {
    portraitImg.addEventListener('error', () => {
      portraitImg.style.display = 'none';
      portraitFallback.style.display = 'flex';
    });
  }
});
