import React, { useState } from 'react';
import { BookOpen, ChevronRight, FileText } from 'lucide-react';

// Documentation Data Structure
const docData = [
  {
    id: 'sec-getting-started',
    title: 'Getting Started',
    docs: [
      {
        id: 'doc-welcome',
        title: 'Welcome to Vaquero Labs',
        content: `Welcome to the Vaquero Information Security Initiative's Virtual SOC (VSOC) and Lab Environment.

This platform is a state-of-the-art simulation network designed to replicate the operations, challenges, and tools of a real-world Security Operations Center. Here, you will practice threat hunting, incident response, vulnerability management, and network analysis.

**What to expect:**
- **Simulated Traffic:** The network generates organic background noise to make threat hunting realistic.
- **Live Targets:** Vulnerable machines are deployed for authorized active reconnaissance and exploitation.
- **Enterprise Tools:** You will use the exact same SIEM, EDR, and identity management platforms used by Fortune 500 companies.`
      },
      {
        id: 'doc-accounts',
        title: 'Requesting an Account',
        content: `Access to Vaquero Labs is restricted to active VISI members and UTRGV Cyber Clinic student analysts.

**Account Creation Process:**
1. Reach out to a VISI board member or your clinic faculty advisor.
2. You will be sent an invitation link to our **Keycloak** Single Sign-On (SSO) portal.
3. Register using your \`@utrgv.edu\` email address.
4. Once approved by an administrator, you can log into the central dashboard at [lab.vaqueroisi.org](https://lab.vaqueroisi.org).

**Password Policy:**
- Minimum 12 characters
- Must include uppercase, lowercase, numbers, and symbols
- Multi-Factor Authentication (MFA) is strictly enforced for all analyst accounts.`
      }
    ]
  },
  /* --- COMMENTED OUT SECTIONS FOR LATER ---
  {
    id: 'sec-architecture',
    title: 'Lab Architecture',
    docs: [
      {
        id: 'doc-infrastructure',
        title: 'Infrastructure Overview',
        content: \`Vaquero Labs is hosted on a bare-metal hypervisor cluster running **Proxmox VE**. This allows our infrastructure team to rapidly provision, snapshot, and restore virtual machines and containers.

**Core Infrastructure Components:**
- **Proxmox VE:** The underlying hypervisor managing all virtualized resources.
- **pfSense / OPNsense:** Virtualized firewalls handling routing, NAT, and network segmentation.
- **Docker Engine:** Hosts containerized applications like our web dashboards, ticketing systems, and isolated microservices.

By utilizing snapshots, we can allow students to fully compromise or break target machines and restore them to a clean state within seconds.\`
      },
      {
        id: 'doc-network',
        title: 'Network Topology',
        content: \`The lab is intentionally divided into different network segments to simulate a real corporate environment and teach segmentation concepts.

**1. The Analyst Network (Management)**
This is where your secure workstation resides. From here, you have access to management interfaces, the SIEM dashboard, and assessment tools.

**2. The Corporate Network (Simulated)**
A network containing simulated employee workstations (Windows 10/11, Ubuntu) and internal services (Active Directory, File Shares). This network is heavily monitored by Wazuh agents.

**3. The DMZ (Demilitarized Zone)**
Public-facing vulnerable web applications and services. This is typically the entry point for external threat simulations.

**4. The Flat Network (Client Simulation)**
Specifically used for the Cyber Clinic, this isolated segment simulates the insecure, unsegmented networks commonly found in under-resourced local organizations.\`
      }
    ]
  },
  {
    id: 'sec-technologies',
    title: 'Core Technologies',
    docs: [
      {
        id: 'doc-wazuh',
        title: 'Wazuh SIEM & EDR',
        content: \`**Wazuh** is the backbone of our Virtual SOC. It is a free and open-source security platform that provides unified XDR (Extended Detection and Response) and SIEM (Security Information and Event Management) protection.

**How we use it:**
- **Endpoint Security:** Wazuh agents are installed on all simulated corporate workstations to monitor file changes (FIM), command executions, and registry modifications.
- **Log Aggregation:** Syslog and Windows Event Logs are forwarded to the Wazuh indexer for centralized searching.
- **Vulnerability Detection:** Agents automatically cross-reference installed software against the CVE database.

[Read the official Wazuh Documentation](https://documentation.wazuh.com/current/index.html)\`
      },
      {
        id: 'doc-keycloak',
        title: 'Keycloak SSO',
        content: \`**Keycloak** is an open-source Identity and Access Management (IAM) solution. We use it to secure the lab and teach students about modern authentication protocols.

Instead of managing separate passwords for the SIEM, the lab wiki, and the ticketing system, analysts log in once through Keycloak using SAML 2.0 or OpenID Connect (OIDC).

**Learning Objectives:**
Students will interact with Keycloak to understand Role-Based Access Control (RBAC), token expiration, and how centralized authentication logs aid in investigating compromised accounts.\`
      }
    ]
  },
  {
    id: 'sec-tools',
    title: 'Tools Directory',
    docs: [
      {
        id: 'doc-blue-team',
        title: 'Blue Team (Defensive)',
        content: \`The following tools are available for defensive operations and log analysis:

- **Wazuh:** Primary SIEM and EDR for endpoint monitoring.
- **TheHive:** Security Incident Response Platform. Used to track alerts, assign tasks to analysts, and manage case workflows.
- **Suricata:** High-performance Network IDS/IPS. Analyzes network traffic in real-time to detect malicious signatures.
- **Zeek:** Network security monitor that creates rich, structured logs of all network connections (DNS, HTTP, SMB).
- **Wireshark:** Available on analyst VMs for deep-dive packet capture (PCAP) analysis.\`
      },
      {
        id: 'doc-red-team',
        title: 'Red Team (Offensive)',
        content: \`For authorized vulnerability assessments and penetration testing simulations, analysts have access to Kali Linux environments provisioned with:

- **Nmap:** Network discovery and port scanning.
- **Metasploit Framework:** Exploit development and execution framework.
- **Burp Suite (Community):** Web application security testing and proxying.
- **Enum4linux:** Enumeration tool for Windows and Samba systems (critical for identifying SMBv1 exposures).
- **GoPhish:** Open-source phishing framework used to simulate social engineering campaigns against our simulated corporate network.\`
      }
    ]
  },
  {
    id: 'sec-policies',
    title: 'Policies & Guidelines',
    docs: [
      {
        id: 'doc-roe',
        title: 'Rules of Engagement',
        content: \`The Vaquero Labs environment is a powerful tool. With that power comes strict ethical and operational responsibilities. 

**1. Authorization is Absolute**
Do not scan, probe, or exploit any machine or IP address without explicit, written authorization from the lab instructors. Even within the lab, "I was just looking" is not a defense.

**2. Stay in Bounds**
All offensive tools must be strictly pointed at internal lab IP addresses (e.g., \\\`10.x.x.x\\\` or \\\`192.168.x.x\\\`). **Never** point Nmap, Metasploit, or any scanner at external public IPs, UTRGV campus infrastructure, or the lab's management interfaces.

**3. Do No Harm to Management Infrastructure**
The hypervisors (Proxmox), firewalls (pfSense), and identity servers (Keycloak) are strictly off-limits for exploitation. 

**4. Data Privacy**
When simulating Cyber Clinic engagements, you may interact with synthetic PII (Personally Identifiable Information). Treat this synthetic data as if it were real. Do not exfiltrate lab data to your personal devices.\`
      }
    ]
  }
  --------------------------------------- */
];

export default function Documentation() {
  const [activeDoc, setActiveDoc] = useState(docData[0].docs[0]);
  const [openSections, setOpenSections] = useState<string[]>([docData[0].id]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const flatDocs = docData.flatMap(section =>
    section.docs.map(doc => ({ ...doc, sectionId: section.id }))
  );

  const currentIndex = flatDocs.findIndex(d => d.id === activeDoc.id);
  const prevDoc = currentIndex > 0 ? flatDocs[currentIndex - 1] : null;
  const nextDoc = currentIndex < flatDocs.length - 1 ? flatDocs[currentIndex + 1] : null;

  const navigateToDoc = (targetDoc: typeof flatDocs[0]) => {
    setActiveDoc(targetDoc);
    if (!openSections.includes(targetDoc.sectionId)) {
      setOpenSections(prev => [...prev, targetDoc.sectionId]);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Upgraded inline text renderer for Markdown-like syntax (Bolds, Code, and Links)
  const renderInlineText = (text: string) => {
    // Regex splits by **bold**, `code`, or [linkText](URL)
    const parts = text.split(/(\*\*.*?\*\*|`.*?`|\[.*?\]\(.*?\))/g);
    
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
      if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
        const match = part.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
          return (
            <a 
              key={index} 
              href={match[2]} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#D95D39] hover:text-[#E66A46] hover:underline font-bold transition-colors"
            >
              {match[1]}
            </a>
          );
        }
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  // Custom content renderer for block-level elements
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      // Headings
      if (line.trim().startsWith('**') && line.trim().endsWith('**') && line.trim().length > 4) {
        return <h4 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">{line.trim().slice(2, -2)}</h4>;
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
            <h2 className="text-lg font-bold text-gray-900 font-display uppercase tracking-tight">Documentation</h2>
          </div>

          <nav className="space-y-4">
            {docData.map((section) => (
              <div key={section.id} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between px-2 py-2 text-sm font-bold text-gray-900 hover:text-[#D95D39] transition-colors rounded-md hover:bg-gray-50"
                >
                  <span className="text-left">{section.title}</span>
                  <ChevronRight
                    className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${openSections.includes(section.id) ? 'rotate-90' : ''}`}
                  />
                </button>

                {/* Sub-documents */}
                {openSections.includes(section.id) && (
                  <div className="pl-4 space-y-1 mt-1">
                    {section.docs.map((doc) => (
                      <button
                        key={doc.id}
                        onClick={() => navigateToDoc({ ...doc, sectionId: section.id })}
                        className={`w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors ${
                          activeDoc.id === doc.id
                            ? 'bg-[#D95D39]/10 text-[#D95D39] font-semibold'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <FileText className="h-3 w-3 flex-shrink-0" />
                        <span className="text-left">{doc.title}</span>
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
              {activeDoc.title}
            </h1>
          </div>

          <div className="text-gray-700 leading-relaxed space-y-2 min-h-[50vh]">
            <div className="text-lg">
              {renderContent(activeDoc.content)}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
            {prevDoc ? (
              <button
                onClick={() => navigateToDoc(prevDoc)}
                className="text-sm font-bold text-gray-500 hover:text-[#D95D39] transition-colors flex items-center gap-1 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
                {prevDoc.title}
              </button>
            ) : (
              <div></div>
            )}

            {nextDoc ? (
              <button
                onClick={() => navigateToDoc(nextDoc)}
                className="text-sm font-bold text-[#D95D39] hover:text-[#E66A46] transition-colors flex items-center gap-1 group"
              >
                {nextDoc.title}
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>
            ) : (
              <span className="text-sm font-bold text-gray-400">End of Documentation</span>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}