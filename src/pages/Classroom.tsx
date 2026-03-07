import React, { useState } from 'react';
import { BookOpen, ChevronRight, FileText, Terminal } from 'lucide-react';

// Curriculum Data
const courseData = [
  {
    id: 'module-1',
    title: 'Week 1: Intro to Public-Interest Cybersecurity',
    lessons: [
      {
        id: 'm1-l1',
        title: 'Why Public-Interest Cybersecurity Matters',
        content: `Small organizations — nonprofits, local businesses, school districts, municipalities — are among the most targeted and least protected entities in the threat landscape. Attackers know they lack dedicated IT staff, have aging infrastructure, and often handle sensitive community data (student records, medical info, financial data).

This clinic exists to change that. You are not just learning security concepts — you are developing the skills to protect real organizations in the Rio Grande Valley.`,
        labTitle: 'VSOC Onboarding',
        lab: `Log into the VSOC via Keycloak SSO. Explore the Wazuh dashboard and identify:
1. How many agents are currently reporting
2. The top 3 rule groups firing alerts today
3. One alert you don't understand — look it up and document what it means

Deliverable: A short written "first impressions" observation log. This will become your baseline for the semester.`
      },
      {
        id: 'm1-l2',
        title: 'Understanding Your Role as a Student Analyst',
        content: `As a clinic analyst, you occupy a unique position: you have technical knowledge that your clients lack, but you must communicate findings in plain language. Your deliverables are not for other analysts — they are for a school superintendent, a nonprofit executive director, or a city manager.

Key responsibilities:
- Conduct assessments with a "do no harm" mindset
- Document everything; assume nothing
- Translate technical risk into business impact
- Respect client confidentiality absolutely`,
        labTitle: 'Analyst Documentation Standards',
        lab: `Review a sample incident report (provided by your instructor). Rewrite the executive summary in plain language — no jargon — as if explaining the findings to someone with no technical background. Swap with a partner and critique each other's clarity.`
      }
    ]
  },
  {
    id: 'module-2',
    title: 'Week 2: Threats to Civil Society',
    lessons: [
      {
        id: 'm2-l1',
        title: 'Who Targets Nonprofits and Local Government?',
        content: `Civil society organizations face a concentrated set of threat actors:

**Ransomware Groups** — Financially motivated criminal groups specifically target schools and municipalities because they hold time-sensitive data (student records, court documents) and often pay ransoms rather than lose access. Groups like Akira, LockBit, and BlackCat have all hit Texas public institutions.

**Phishing Campaigns** — Low-effort, high-return attacks. A single employee clicking a malicious link can give attackers a foothold into an entire network — especially a flat one.

**Business Email Compromise (BEC)** — Attackers impersonate executives or vendors to redirect payments. Extremely common against nonprofits and small city finance departments.

**Opportunistic Attackers** — Automated scanners constantly probe the internet for exposed services. An SMBv1 port open to the internet will be found within hours.`,
        labTitle: 'Threat Actor Mapping with MITRE ATT&CK',
        lab: `Using the MITRE ATT&CK Navigator (attack.mitre.org/navigator), build a threat profile for a ransomware group of your choice (suggest: Akira or LockBit). 

Identify and highlight:
- Initial access techniques they commonly use
- Lateral movement methods
- Persistence mechanisms
- Exfiltration tactics

Export your navigator layer and submit it with a 1-paragraph summary of how this group would operate against a flat network with no subnetting.`
      },
      {
        id: 'm2-l2',
        title: 'The Anatomy of a Ransomware Attack',
        content: `Ransomware is rarely a single event — it is a campaign. Understanding the full kill chain is essential to knowing where defenses can interrupt it.

**Stage 1: Initial Access** — Phishing email, exposed RDP, or exploitation of a known vulnerability (e.g., EternalBlue via SMBv1).

**Stage 2: Execution & Persistence** — Malicious payload runs, attacker establishes a foothold. Common tools: PowerShell, WMI, scheduled tasks.

**Stage 3: Privilege Escalation** — Attacker moves from a low-privilege user account to Administrator or Domain Admin.

**Stage 4: Lateral Movement** — Attacker spreads across the network. On a flat network with no subnetting, this is trivial — every device can reach every other device.

**Stage 5: Exfiltration** — Data is stolen before encryption (double extortion).

**Stage 6: Encryption & Ransom** — Files are encrypted and a ransom note is dropped.

The good news: there are many opportunities to detect and interrupt this chain. That is what weeks 4–7 are about.`,
        labTitle: 'Kill Chain Mapping Exercise',
        lab: `Given the following scenario, map the attacker's likely path using the ransomware kill chain above:

*"An employee at a nonprofit receives an email appearing to be from their executive director asking them to open an attached invoice. The attachment is a Word document with a malicious macro. The network has 40 workstations, a file server running Windows Server 2008, and no VLAN segmentation."*

Draw out each stage and identify at least one control that could have stopped the attack at each stage. Be specific — not just "use antivirus" but which type and where it would be deployed.`
      }
    ]
  },
  {
    id: 'module-3',
    title: 'Week 3: Meet the Client',
    lessons: [
      {
        id: 'm3-l1',
        title: 'Client Profile: What We Know Going In',
        content: `Before your first client meeting, review what has been gathered from public sources. Our client profile so far:

**Network Architecture:** Flat network — all devices on a single broadcast domain with no VLAN segmentation. This means any compromised device can freely communicate with every other device, including servers.

**Server Infrastructure:** Servers running outdated operating systems. SMBv1 is enabled, which is the protocol exploited by EternalBlue (the vulnerability behind WannaCry and NotPetya). Microsoft retired SMBv1 in 2014.

**Asset Inventory:** No formal inventory management system. The organization does not have a complete list of what devices are on their network.

**Staff Policies:** No documented acceptable use policy, no security awareness training, no formal onboarding/offboarding process for user accounts.

**This is not unusual.** This is the baseline for the majority of small organizations in the RGV. Your job is not to judge — it is to prioritize and help.`,
        labTitle: 'Passive Recon — Know Before You Go',
        lab: `Using only passive, non-intrusive tools, gather publicly available information about the client organization before your first meeting:

- **Shodan** (shodan.io) — Search for the organization's IP range or domain. What services are exposed?
- **theHarvester** — Enumerate email addresses, subdomains, and hostnames from public sources
- **DNSdumpster** (dnsdumpster.com) — Map their DNS records and subdomains
- **WHOIS** — Document domain registration info

Document findings in a "pre-engagement reconnaissance report." Note: only perform passive recon. Do NOT actively scan or probe the client's systems without written authorization.`
      },
      {
        id: 'm3-l2',
        title: 'The Client Meeting: Asking the Right Questions',
        content: `Your first client meeting is not a technical audit — it is a listening session. Your goal is to understand their business, their data, their concerns, and their constraints before you start making recommendations.

**Key questions to ask:**
- What data do you collect and store? (Student records? Financial info? Health data?)
- Who has administrator access to your systems?
- Have you ever experienced a security incident? (Many won't know.)
- What is your backup strategy?
- Do you have cyber insurance?
- What is your IT support situation — in-house staff, MSP, or self-managed?
- What would hurt most if it were unavailable for a week?

**What to listen for:**
- "Our IT guy handles everything" → Single point of failure
- "We back up to an external drive on the same network" → Ransomware will encrypt it
- "I don't think we've been hacked" → Likely means they wouldn't know if they had been`,
        labTitle: 'Mock Client Interview',
        lab: `Role-play a client intake interview. One student plays the client (given a character sheet describing the org), others play the analyst team. 

The analyst team must complete a structured intake form covering: asset inventory gaps, current backup posture, user account management, incident history, and top business concerns.

Debrief: What surprised you? What follow-up questions did you wish you had asked?`
      }
    ]
  },
  {
    id: 'module-4',
    title: 'Week 4: Risk Assessments',
    lessons: [
      {
        id: 'm4-l1',
        title: 'Risk Assessment Fundamentals',
        content: `A risk assessment answers one question: *What could go wrong, how likely is it, and how bad would it be?*

**Risk = Likelihood × Impact**

For our client, the risk register will be long — but not all risks are equal. Your job is to prioritize the ones that are both likely AND high-impact.

**Key risks for this client:**
- **SMBv1 / EternalBlue** — Critical. A known, weaponized exploit against a protocol they are actively running. Likelihood: High. Impact: Catastrophic (ransomware).
- **No asset inventory** — High. You cannot protect what you don't know exists. Unknown devices may be unpatched, misconfigured, or compromised already.
- **Flat network** — High. A single compromised workstation has a direct path to every server.
- **No staff policies** — Medium-High. Without training and policy, social engineering attacks (phishing, BEC) have no human-layer defense.
- **Backup strategy unknown** — Critical. Without verified backups, a ransomware attack means permanent data loss.`,
        labTitle: 'Wazuh Vulnerability Assessment',
        lab: `Deploy a lab VM in the VSOC representing the "client environment." Enable Wazuh's vulnerability detection module on this VM.

1. Run the vulnerability scan and export the report
2. Cross-reference findings with your passive recon from Week 3
3. Build a risk register with at minimum 8 findings, scored by likelihood and impact
4. Prioritize your top 3 "fix first" recommendations

Use the CVSS score from Wazuh to inform your severity ratings, but also apply business context — a medium CVSS vulnerability on a system holding student records may be higher priority than a high CVSS vulnerability on a printer.`
      },
      {
        id: 'm4-l2',
        title: 'Communicating Risk to Non-Technical Stakeholders',
        content: `The best risk assessment is useless if the client doesn't understand it. A common mistake is presenting a list of CVEs and CVSS scores to an executive director who just wants to know: *"Are we safe, and what do we do about it?"*

**The three things every client needs to hear:**
1. What is at risk (in terms of their data and operations, not technical systems)
2. How likely is it to happen (in plain language: "This exploit has been used in hundreds of attacks against organizations exactly like yours")
3. What it would cost to fix versus what it would cost if they don't

**Framing SMBv1 for a client:**
*"Your servers are running a file-sharing protocol that Microsoft retired ten years ago because it has a known, publicly available exploit. The same exploit was used in the WannaCry attack that shut down the UK's National Health Service for days. Disabling it takes about 15 minutes."*

That is more compelling than "CVE-2017-0144, CVSS 9.8."`,
        labTitle: 'Executive Summary Workshop',
        lab: `Take your risk register from the vulnerability lab and write a one-page executive summary for the client's leadership team. Rules:
- No CVE numbers in the summary (use plain descriptions)
- Every finding must include a plain-language "what this means for your organization"
- Include a prioritized "Top 3 Actions This Week" section
- Estimated time/effort for each remediation where possible

Peer review: swap with another team and evaluate clarity on a scale of 1-5. Would a school principal understand this?`
      }
    ]
  },
  {
    id: 'module-5',
    title: 'Week 5: Info Gathering & Analysis',
    lessons: [
      {
        id: 'm5-l1',
        title: 'Active Reconnaissance (With Authorization)',
        content: `Once you have written authorization from the client, you can move from passive to active information gathering. This unlocks a much clearer picture of the actual attack surface.

**Key tools for authorized internal assessment:**
- **Nmap** — Network discovery and port scanning. On a flat network, a single sweep reveals every device and open service.
- **Nessus Essentials** (free) — Credentialed vulnerability scanning. Far more thorough than passive detection.
- **Enum4linux** — Enumerates SMB shares, users, and groups on Windows/Samba systems. Will immediately surface SMBv1 exposure.
- **Wazuh Agent** — If you can deploy an agent on a client system (with permission), you get continuous visibility.

**Important:** Always confirm the scope of your authorization in writing before running any active tools. "You can look at our network" is not the same as "you have permission to run vulnerability scans against our servers."`,
        labTitle: 'Nmap + Enum4linux Lab',
        lab: `Against the authorized lab VM in the VSOC:

1. Run an Nmap scan: \`nmap -sV -sC -O <target-ip>\`
2. Identify all open ports and services
3. Run enum4linux against the target: \`enum4linux -a <target-ip>\`
4. Document: Is SMBv1 enabled? What shares are exposed? Are there any null session vulnerabilities?
5. Cross-reference your findings with the Wazuh vulnerability report from Week 4

Deliverable: Updated asset entry for the risk register with active scan findings added.`
      },
      {
        id: 'm5-l2',
        title: 'Log Analysis and Anomaly Detection',
        content: `Log analysis is the core skill of a SOC analyst. Logs tell you what happened, when, where, and sometimes why — but only if you know what to look for.

**In a flat network with SMBv1, watch for:**
- Lateral movement: SMB authentication attempts across multiple hosts in short succession
- Brute force: Repeated failed logins followed by a success
- Unusual process execution: PowerShell running from a user workstation at 2am
- Large data transfers to external IPs: Possible exfiltration
- New scheduled tasks or services: Common persistence mechanisms

**Wazuh rule groups to focus on:**
- \`sysmon\` rules (if Sysmon is deployed)
- \`authentication_failures\`
- \`windows_audit\`
- \`network_scan\` (detects scanning behavior)`,
        labTitle: 'Wazuh Log Triage',
        lab: `Your instructor will load a pre-built log dataset into Wazuh simulating a client environment that has been partially compromised. You will NOT be told what happened.

Your job: triage the alerts and reconstruct the timeline of events.

1. Filter Wazuh alerts by severity (level 10+)
2. Build a timeline of events in chronological order
3. Identify: initial access vector, lateral movement path, and any persistence indicators
4. Write a 1-page "Analyst Report" — what happened, what evidence supports your conclusion, and what the client should do immediately

This is the format of a real SOC deliverable.`
      }
    ]
  },
  {
    id: 'module-6',
    title: 'Week 6: Phishing',
    lessons: [
      {
        id: 'm6-l1',
        title: 'How Phishing Works — and Why It Keeps Working',
        content: `Phishing is the #1 initial access vector for ransomware attacks. It works because it targets humans, not software — and humans are consistently the weakest link in any security chain.

**Why phishing is so effective against our client profile:**
- No staff security awareness training
- No email filtering or DMARC configured
- Employees likely use personal email and work email interchangeably
- Small organizations have a "we trust each other" culture that attackers exploit

**Types of phishing relevant to civil society orgs:**
- **Generic phishing** — Mass-sent, low personalization (fake invoice, fake password reset)
- **Spear phishing** — Targeted at a specific person using publicly available info (LinkedIn, org website)
- **Whaling** — Targeting executives specifically
- **BEC (Business Email Compromise)** — Impersonating the executive director to request a wire transfer or gift cards

**Email authentication controls (what the client likely lacks):**
- **SPF** — Specifies which servers are allowed to send email for a domain
- **DKIM** — Digitally signs outgoing email to verify it hasn't been tampered with
- **DMARC** — Policy that tells receiving servers what to do with emails that fail SPF/DKIM`,
        labTitle: 'GoPhish Simulation',
        lab: `Using GoPhish (deployed in the VSOC lab environment):

**Red Team:** Craft a phishing email impersonating IT support asking users to verify their credentials via a landing page. Use a realistic pretext based on the client profile (e.g., "Your email storage is full — click here to manage your account").

**Blue Team:** Monitor Wazuh for indicators of the phishing campaign — DNS lookups to the phishing domain, HTTP connections, credential submission events.

**Debrief:**
- What made the phish convincing?
- What technical controls (DMARC, email filtering, proxy) would have blocked delivery?
- What user behaviors indicate training is needed?`
      },
      {
        id: 'm6-l2',
        title: 'Hardening Against Phishing: Technical and Human Controls',
        content: `Defense against phishing requires both technical controls and human training — neither alone is sufficient.

**Technical controls (priority order for our client):**
1. **Enable MFA** on all accounts — even if a password is stolen, MFA stops account takeover
2. **Configure DMARC, SPF, DKIM** — prevents domain spoofing (often a free DNS change)
3. **Email filtering** — Microsoft Defender for Office 365 or Google Workspace filtering catches known malicious links and attachments
4. **DNS filtering** — Tools like Cloudflare Gateway (free tier) block known malicious domains at the DNS level before connections are made
5. **Disable macros** in Office documents via Group Policy — blocks a huge class of malware delivery

**Human controls:**
- Annual (minimum) phishing simulation + training
- Clear process for reporting suspicious emails
- "Call to verify" policy for any financial requests received via email
- Offboarding checklist — former employees' accounts are a common phishing entry point`,
        labTitle: 'Email Auth & DNS Hardening Walkthrough',
        lab: `Using MXToolbox (mxtoolbox.com) and your client's domain:

1. Check if SPF is configured correctly
2. Check if DKIM is present
3. Check DMARC policy — is it set to \`none\`, \`quarantine\`, or \`reject\`?
4. Document current state and write the specific DNS records that would need to be added or modified to reach a \`p=reject\` DMARC policy

Bonus: Set up Cloudflare Gateway DNS filtering on a test device and verify it blocks a known malicious domain from the URLhaus dataset.`
      }
    ]
  },
  {
    id: 'module-7',
    title: 'Week 7: Ransomware Response',
    lessons: [
      {
        id: 'm7-l1',
        title: 'Ransomware and SMBv1: A Perfect Storm',
        content: `For our client, SMBv1 is not just a vulnerability — it is an existential risk. Here is why.

**EternalBlue (CVE-2017-0144):** A critical exploit targeting SMBv1, developed by the NSA and leaked by Shadow Brokers in 2017. It allows unauthenticated remote code execution on any Windows system with SMBv1 enabled. It was used to deploy WannaCry ransomware, which infected 230,000 systems across 150 countries in a single day.

**Why it still matters in 2026:** Despite being nearly a decade old, EternalBlue remains one of the most commonly used exploits in ransomware attacks because thousands of organizations are still running SMBv1 on unpatched legacy servers.

**For our client specifically:**
- SMBv1 is enabled → EternalBlue is possible
- Flat network → once one machine is compromised, the exploit spreads laterally to every SMB-enabled device automatically (worm behavior)
- No asset inventory → the full blast radius is unknown
- Backup status unknown → recovery may be impossible without paying the ransom

**The fix:** Disable SMBv1 (15 minutes), patch all systems, segment the network. But patching a Server 2008 machine that runs critical software is not always simple — which is why your risk communication skills matter.`,
        labTitle: 'Wazuh IOC Hunt — Ransomware Artifacts',
        lab: `A lab VM has been pre-loaded with artifacts simulating a ransomware infection (file rename events, registry modifications, C2 beacon patterns, SMB lateral movement indicators). You will NOT be told what to look for.

Using Wazuh:
1. Filter for high-severity alerts in the last 2 hours
2. Identify file integrity monitoring (FIM) alerts — look for mass file renames with unusual extensions
3. Look for outbound connections to uncommon external IPs
4. Identify any authentication events immediately preceding the anomalous activity

Deliverable: Incident timeline with IOCs listed. Include one YARA rule concept you would write to detect this malware family going forward.`
      },
      {
        id: 'm7-l2',
        title: 'Incident Response for Ransomware',
        content: `When a ransomware attack hits a small organization, the response is chaotic — because there is no plan. Your clinic can help clients build one before they need it.

**The IR lifecycle (NIST SP 800-61):**
1. **Preparation** — IR plan, backups, contact list, communication templates
2. **Detection & Analysis** — Identify scope: which systems are encrypted? Is it still spreading?
3. **Containment** — Isolate affected systems immediately. On a flat network, this may mean taking down the entire network to stop spread.
4. **Eradication** — Remove the malware, close the initial access vector, reset credentials
5. **Recovery** — Restore from clean backups. Verify integrity before reconnecting.
6. **Post-Incident** — Document what happened, update defenses, notify affected parties (legally required in many cases)

**Hard truths for civil society clients:**
- If there are no clean backups, recovery options are: pay the ransom (no guarantee of decryption), attempt to decrypt (rarely works), or rebuild from scratch
- Ransomware groups increasingly steal data before encrypting — even if you restore from backup, the extortion continues
- Notification requirements: FERPA (student data), HIPAA (health data), and Texas state law may require notifying affected individuals`,
        labTitle: 'Ransomware IR Tabletop Exercise',
        lab: `**Scenario:** It is 6:47 AM on a Monday. An employee arrives at your client organization's office and finds that their workstation shows a ransom note. The file server is inaccessible. The office manager is calling the executive director in a panic.

Your team is the incident response team. You have been called in.

Work through:
1. What are your first five actions in the next 30 minutes?
2. Who do you notify, and in what order? (Internal leadership, legal counsel, cyber insurance carrier, law enforcement, affected individuals)
3. How do you determine scope — which systems are affected?
4. The client asks: "Should we pay the ransom?" How do you respond?
5. What evidence do you preserve for forensics?

Debrief: Compare your team's response plan. Where did teams diverge? What would have been catastrophic in hindsight?`
      }
    ]
  },
  {
    id: 'module-8',
    title: 'Week 8: Client Deliverable',
    lessons: [
      {
        id: 'm8-l1',
        title: 'Building the Final Report',
        content: `The final deliverable is a professional security assessment report that the client can act on. It should be readable by both technical staff and leadership.

**Report structure:**
1. **Executive Summary** — 1 page. What you found, the overall risk posture, and the three most important things to fix.
2. **Scope and Methodology** — What you assessed, what tools you used, what was out of scope.
3. **Findings** — Each finding gets: description, evidence, risk rating, and recommended remediation.
4. **Prioritized Remediation Roadmap** — Organized by effort and impact. Quick wins (disable SMBv1, enable MFA) vs. longer-term projects (network segmentation, SIEM deployment).
5. **Appendices** — Raw scan data, log excerpts, network diagrams.

**For our client, the quick wins are significant:**
- Disable SMBv1 (15 min, eliminates a critical exploit surface)
- Enable MFA on all accounts (hours, stops most credential-based attacks)
- Configure DMARC (1 hour, reduces phishing and email spoofing)
- Verify backup integrity and test restoration (1 day, ensures ransomware recovery is possible)
- Begin asset inventory (ongoing, foundational to all future security work)`,
        labTitle: 'Final Report Workshop',
        lab: `Compile all deliverables from weeks 3–7 into a unified security assessment report for the client.

Checklist:
- [ ] Executive summary (plain language, no jargon)
- [ ] Scope and tools used
- [ ] At least 8 findings with risk ratings
- [ ] Prioritized remediation roadmap (Quick Wins / 30 Days / 90 Days)
- [ ] Incident response plan template (based on Week 7 tabletop)
- [ ] Email authentication recommendations (Week 6)

Present your findings to the class as if presenting to the client's leadership team. You have 10 minutes. The "client" (your instructor) will ask at least one question a non-technical executive would ask.`
      }
    ]
  }
];

export default function Classroom() {
  const [activeLesson, setActiveLesson] = useState(courseData[0].lessons[0]);
  const [openModules, setOpenModules] = useState<string[]>([courseData[0].id]);

  const toggleModule = (moduleId: string) => {
    setOpenModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const flatLessons = courseData.flatMap(module =>
    module.lessons.map(lesson => ({ ...lesson, moduleId: module.id }))
  );

  const currentIndex = flatLessons.findIndex(l => l.id === activeLesson.id);
  const prevLesson = currentIndex > 0 ? flatLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < flatLessons.length - 1 ? flatLessons[currentIndex + 1] : null;

  const navigateToLesson = (targetLesson: typeof flatLessons[0]) => {
    setActiveLesson(targetLesson);
    if (!openModules.includes(targetLesson.moduleId)) {
      setOpenModules(prev => [...prev, targetLesson.moduleId]);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smart inline text renderer for markdown-like syntax anywhere in a string
  const renderInlineText = (text: string) => {
    // Split by **bold** or `code`
    const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={index} className="bg-gray-100 text-[#D95D39] px-1.5 py-0.5 rounded text-sm font-mono border border-gray-200">
            {part.slice(1, -1)}
          </code>
        );
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  // Custom text renderer to handle structure (paragraphs, lists, headings)
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      // Dedicated Heading (Entire line is wrapped in **)
      if (line.trim().startsWith('**') && line.trim().endsWith('**') && line.trim().length > 4) {
        return <h4 key={i} className="text-lg font-bold text-gray-900 mt-6 mb-2">{line.trim().slice(2, -2)}</h4>;
      }
      // Bullet points
      if (line.startsWith('- ')) {
        return <li key={i} className="ml-6 mb-2 text-gray-700 list-disc">{renderInlineText(line.slice(2))}</li>;
      }
      // Numbered lists
      if (/^\d+\.\s/.test(line)) {
        return <li key={i} className="ml-6 mb-2 text-gray-700 list-decimal">{renderInlineText(line.replace(/^\d+\.\s/, ''))}</li>;
      }
      // Empty lines
      if (line.trim() === '') return <div key={i} className="h-4" />;
      
      // Standard paragraphs
      return <p key={i} className="text-gray-700 leading-relaxed mb-4">{renderInlineText(line)}</p>;
    });
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-12 flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8">

      {/* Sidebar Navigation */}
      <aside className="w-full md:w-72 flex-shrink-0 border-r border-gray-200 pr-6">
        <div className="sticky top-28">
          <div className="flex items-center gap-2 mb-6 px-2">
            <BookOpen className="h-5 w-5 text-[#D95D39]" />
            <h2 className="text-lg font-bold text-gray-900 font-display uppercase tracking-tight">Classroom</h2>
          </div>

          <nav className="space-y-4">
            {courseData.map((module) => (
              <div key={module.id} className="space-y-1">
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full flex items-center justify-between px-2 py-2 text-sm font-bold text-gray-900 hover:text-[#D95D39] transition-colors rounded-md hover:bg-gray-50"
                >
                  <span className="text-left">{module.title}</span>
                  <ChevronRight
                    className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${openModules.includes(module.id) ? 'rotate-90' : ''}`}
                  />
                </button>

                {/* Lesson Links */}
                {openModules.includes(module.id) && (
                  <div className="pl-4 space-y-1 mt-1">
                    {module.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => navigateToLesson({ ...lesson, moduleId: module.id })}
                        className={`w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors ${
                          activeLesson.id === lesson.id
                            ? 'bg-[#D95D39]/10 text-[#D95D39] font-semibold'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <FileText className="h-3 w-3 flex-shrink-0" />
                        <span className="text-left">{lesson.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 pb-20">
        <div className="prose prose-blue max-w-none">
          <div className="mb-8 pb-6 border-b border-gray-100">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 font-display">
              {activeLesson.title}
            </h1>
          </div>

          <div className="text-gray-700 leading-relaxed space-y-2 min-h-[40vh]">
            <div className="text-lg">
              {renderContent(activeLesson.content)}
            </div>

            {/* Hands-On Lab Section */}
            {activeLesson.lab && (
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                  <Terminal className="h-5 w-5 text-[#D95D39]" />
                  <h3 className="text-lg font-bold text-gray-900">Hands-On Lab: {activeLesson.labTitle}</h3>
                </div>
                <div className="text-base text-gray-700">
                  {renderContent(activeLesson.lab)}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
            {prevLesson ? (
              <button
                onClick={() => navigateToLesson(prevLesson)}
                className="text-sm font-bold text-gray-500 hover:text-[#D95D39] transition-colors flex items-center gap-1 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
                {prevLesson.title}
              </button>
            ) : (
              <div></div>
            )}

            {nextLesson ? (
              <button
                onClick={() => navigateToLesson(nextLesson)}
                className="text-sm font-bold text-[#D95D39] hover:text-[#E66A46] transition-colors flex items-center gap-1 group"
              >
                {nextLesson.title}
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>
            ) : (
              <span className="text-sm font-bold text-gray-400">Course Complete 🎉</span>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}