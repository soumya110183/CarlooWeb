export default function PrivacyPolicy() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16 text-foreground">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-4 text-gray-400">Last Updated: Aug 22, 2025</p>

      <p className="mb-6">
        At <strong>Carlo PEaaS by Algorethics</strong>, we are deeply committed to safeguarding your privacy while ensuring that every interaction with our platform remains compliant with the EU Artificial Intelligence Act (Regulation (EU) 2024/1689) and the General Data Protection Regulation (GDPR) (Regulation (EU) 2016/679). Our mission is to help organizations embed ethical and legal compliance into their AI systems, and that responsibility extends to how we handle your personal and organizational data.
      </p>

      <p className="mb-6">
        This Privacy Policy explains the types of information we collect, how it is used, how it is protected, and the rights you have as a user of our platform. By accessing or using Carlo PEaaS, you agree to the practices described in this policy.
      </p>

      <hr className="my-8 border-gray-600" />

     
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Data We Collect</h2>
        <p className="mb-2">
          To provide reliable compliance validation services, we collect only limited categories of data:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Email addresses – Used for newsletter subscriptions, platform login communications, and regulatory updates.</li>
          <li>API endpoints – Required for compliance validation of your AI models. Carlo interacts strictly at the API layer and does not extract sensitive or proprietary business information.</li>
          <li>Technical metadata – Includes logs, timestamps, error codes, usage metrics, and audit trails necessary for security enforcement and compliance reporting.</li>
        </ul>
        <p className="mb-2">We explicitly do not collect or store:</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Financial details, credit card information, or payment credentials.</li>
          <li>Personally identifiable information (PII) unrelated to compliance validation.</li>
          <li>Confidential corporate data or intellectual property, except when strictly required for compliance checks.</li>
        </ul>
        <p>All data is processed under the principles of data minimization and purpose limitation, ensuring that only the information essential for compliance validation is handled.</p>
      </section>

    
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Data</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Compliance Validation & Certification – Running automated and human-reviewed compliance checks against EU AI Act, GDPR, OECD AI Principles, and other frameworks.</li>
          <li>Audit-Ready Reporting – Generating transparent compliance reports that can be shared with regulators, stakeholders, or auditors.</li>
          <li>Platform Updates – Keeping you informed of critical regulatory changes, security enhancements, and feature rollouts.</li>
          <li>Security & Misuse Detection – Monitoring system activity to prevent unauthorized access, malicious behavior, or fraudulent use of Carlo services.</li>
          <li>User Experience Improvements – Analyzing anonymized technical metadata to optimize performance, reduce latency, and enhance reliability.</li>
        </ul>
        <p className="mt-4">Your data will never be sold, rented, or shared with third parties for marketing purposes.</p>
      </section>

   
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. GDPR Principles We Follow</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Data Minimization (Article 5(1)(c)) – Only the minimum amount of data necessary for compliance validation is processed.</li>
          <li>Purpose Limitation (Article 5(1)(b)) – Data is collected and processed exclusively for certification, compliance monitoring, and reporting.</li>
          <li>Accuracy (Article 5(1)(d)) – We ensure all compliance data and reports are accurate, current, and reflective of regulatory requirements.</li>
          <li>Integrity & Confidentiality (Article 5(1)(f)) – Technical and organizational safeguards, including encryption and API isolation, protect your data.</li>
          <li>User Rights (Articles 12–22) – You have the right to request data access, correction, erasure, or restriction of processing at any time.</li>
        </ul>
      </section>

  
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Security Measures</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>API Layer Validation – Carlo interacts only with your AI model’s exposed API, avoiding direct access to proprietary databases or infrastructure.</li>
          <li>Encryption Standards – Data is encrypted in transit (TLS 1.3) and at rest using AES-256 protocols.</li>
          <li>Continuous Monitoring – Logs, audit trails, and anomaly detection systems identify unauthorized activity in real time.</li>
          <li>Non-Intrusive Operation – Carlo operates as a compliance “firewall” rather than an invasive system, ensuring your infrastructure remains untouched.</li>
          <li>Independent Validation – All compliance checks are run in isolated sandbox environments for security and neutrality.</li>
        </ul>
      </section>

    
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Your Rights Under GDPR</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Access – You can request a copy of the personal and compliance-related data we process about you.</li>
          <li>Rectification – You can request corrections to any inaccurate or incomplete data.</li>
          <li>Erasure (“Right to be Forgotten”) – You can request deletion of your data where applicable, unless retention is required by law.</li>
          <li>Restriction of Processing – You may request limitations on how your data is processed under certain conditions.</li>
          <li>Data Portability – You can request export of your compliance-related data in a structured, commonly used format.</li>
          <li>Objection – You may object to the processing of your data when based on legitimate interests.</li>
        </ul>
        <p className="mt-2">All requests will be addressed within the timelines required under GDPR (typically within 30 days).</p>
      </section>

      {/* Sections 6–9 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Compliance Logs: Retained for as long as necessary to meet audit and regulatory requirements (generally 12–24 months).</li>
          <li>Newsletter Subscriptions: Retained until you opt out or unsubscribe.</li>
          <li>Technical Metadata: Retained only as long as required for security monitoring and system optimization.</li>
        </ul>

        <h2 className="text-2xl font-semibold my-4">7. International Data Transfers</h2>
        <p className="mb-2">
          Carlo PEaaS operates globally but ensures all data processing adheres to GDPR standards. Where data must be transferred outside the EU, we apply:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Standard Contractual Clauses (SCCs)</li>
          <li>Adequacy Decisions recognized by the European Commission</li>
          <li>Robust encryption and anonymization measures</li>
        </ul>

        <h2 className="text-2xl font-semibold my-4">8. Updates to this Policy</h2>
        <p className="mb-2">
          This Privacy Policy may be updated periodically to reflect changes in law, technology, or platform features. Users will be notified of any significant updates via email or platform notification.
        </p>

        <h2 className="text-2xl font-semibold my-4">9. Contact Information</h2>
        <p>
          If you have any questions, requests, or concerns regarding this Privacy Policy or your data rights, please contact us at:
        </p>
        <p className="mt-2 font-medium">📧 info@algorethics.ai</p>
      </section>
    </section>
  );
}
