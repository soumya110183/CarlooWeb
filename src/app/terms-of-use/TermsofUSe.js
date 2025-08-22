export default function TermsOfUse() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16 text-foreground">
      <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
      <p className="mb-4 text-gray-400">Last Updated: Aug 22, 2025</p>

      <p className="mb-6">
        These Terms of Use (“Terms”) govern your access to and use of the <strong>Carlo Policy Enforcement as a Service (“Carlo PEaaS”)</strong> platform provided by Algorethics.ai. By using Carlo PEaaS, you agree to comply with these Terms, as well as all applicable international regulations, including the EU Artificial Intelligence Act (Regulation (EU) 2024/1689) and the General Data Protection Regulation (Regulation (EU) 2016/679).  
        If you do not agree with these Terms, you must not access or use the platform.
      </p>

      <hr className="my-8 border-gray-600" />

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>You are an authorized user representing an individual, company, or institution.</li>
          <li>You agree to use Carlo PEaaS solely for lawful, ethical, and compliance-oriented purposes.</li>
          <li>You acknowledge that all activities are logged and monitored for security and regulatory auditing.</li>
          <li>You agree to be bound by these Terms and any future amendments communicated by Algorethics.</li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Authorized Use</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>AI Model Evaluation & Testing – Running models against ethical, legal, and regulatory frameworks such as the EU AI Act, GDPR, OECD AI Principles, and sector-specific guidelines.</li>
          <li>Risk Assessments – Identifying and classifying risks associated with AI model deployment, including bias detection, transparency gaps, and safety concerns.</li>
          <li>Certification & Monitoring – Generating compliance certifications, issuing real-time alerts, and enforcing policies across multiple environments.</li>
          <li>Audit Documentation – Producing reports and logs suitable for submission to regulators, internal auditors, and external stakeholders.</li>
          <li>Sandbox Validation – Validating AI outputs in isolated environments without compromising proprietary infrastructure.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Prohibited Activities</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Bypass or disable security measures – Any attempt to interfere with Carlo’s protective layers is strictly prohibited.</li>
          <li>Upload malicious content – Including malware, viruses, or unethical AI applications intended to cause harm.</li>
          <li>Misrepresent certifications – Using Carlo-issued compliance certifications in a misleading, fraudulent, or unauthorized way.</li>
          <li>Reverse-engineer the platform – Attempting to copy, decompile, or replicate Carlo’s proprietary systems, infrastructure, or algorithms.</li>
          <li>Use for prohibited AI applications – Such as unlawful surveillance, discriminatory profiling, autonomous weapons, or other activities violating human rights.</li>
          <li>Resell or sub-license access – Unless expressly authorized by Algorethics.</li>
        </ul>
        <p className="mt-2">Violation of these restrictions may result in suspension or termination of access, as well as potential legal action.</p>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Liability Limitation</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>AI model failures beyond scope – Errors or harms caused by your AI system that occur outside Carlo’s validation or monitoring.</li>
          <li>Regulatory penalties – Any fines, enforcement actions, or sanctions arising from your misuse or misrepresentation of certifications.</li>
          <li>Indirect damages – Including, but not limited to, lost profits, business interruptions, reputational damage, or consequential losses resulting from platform use.</li>
        </ul>
        <p className="mt-2">You, as the user, remain solely responsible for ensuring that your AI models and systems are operated in a compliant and ethical manner once deployed in production.</p>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Monitoring & Enforcement</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Comprehensive logging – Capturing API requests, compliance checks, error logs, and certification outcomes.</li>
          <li>Audit readiness – Maintaining logs for regulatory inspections, investigations, and certification validation.</li>
          <li>Security enforcement – Detecting unauthorized access attempts and preventing malicious misuse.</li>
          <li>Legal cooperation – Sharing compliance data when required by law, regulators, or judicial authorities.</li>
        </ul>
        <p className="mt-2">All monitoring is conducted in strict adherence to GDPR principles, ensuring proportionality, necessity, and user data protection.</p>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Service Availability</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Scheduled maintenance or updates</li>
          <li>Emergency security patches</li>
          <li>Technical failures or unforeseen outages</li>
          <li>Force majeure events outside our control (natural disasters, regulatory shutdowns, etc.)</li>
        </ul>
        <p className="mt-2">Algorethics does not guarantee 100% uptime and shall not be held liable for temporary disruptions.</p>
      </section>

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>All rights, titles, and interests in Carlo PEaaS, including logos, brand assets, platform code, and compliance frameworks, remain the sole property of Algorethics.</li>
          <li>Users retain ownership of their AI models, datasets, and proprietary technologies, but grant Algorethics a limited right to process API data strictly for compliance validation and certification purposes.</li>
        </ul>
      </section>

      {/* Section 8 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Amendments to the Terms</h2>
        <p>
          Algorethics reserves the right to modify or update these Terms of Use to reflect changes in laws, technologies, or service offerings. Updates will be posted on our website, and continued use of the platform after updates constitutes acceptance of the revised Terms.
        </p>
      </section>

      {/* Section 9 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>The laws of the European Union for compliance matters</li>
          <li>The jurisdiction of Switzerland (Algorethics’ international base of operation) for contractual disputes</li>
        </ul>
      </section>

      {/* Section 10 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
        <p>
          For questions, clarifications, or concerns about these Terms of Use, please contact us at:
        </p>
        <p className="mt-2 font-medium">📧 info@algorethics.ai</p>
      </section>
    </section>
  );
}
