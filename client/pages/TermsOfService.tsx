import React from "react";

export default function TermsOfService() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-vlsi-700 to-vlsi-800 text-white py-24">
        <div className="max-w-4xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-vlsi-100 leading-relaxed max-w-3xl mx-auto">
            Agreement governing the use of Azorix Technologies' software
            development and technical services
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> January 1, 2024
              <br />
              <strong>Last Updated:</strong> January 1, 2024
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  By engaging Azorix Technologies Pvt Ltd ("Company," "we,"
                  "us," or "our") for software development, consulting, or
                  technical services, you ("Client") agree to be bound by these
                  Terms of Service. If you do not agree to these terms, you may
                  not engage our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Scope of Services
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Azorix Technologies provides a range of software development
                  and technical services including, but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Custom web application development</li>
                  <li>
                    Mobile application development (iOS, Android,
                    cross-platform)
                  </li>
                  <li>Cloud infrastructure and modernization</li>
                  <li>Data analytics and business intelligence solutions</li>
                  <li>AI and Machine Learning implementation</li>
                  <li>Technical consulting and architecture design</li>
                  <li>Quality assurance and testing services</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  The specific scope of work will be detailed in a separate
                  Statement of Work (SOW), proposal, or engagement letter, which
                  shall form an integral part of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Fees and Payment Terms
                </h2>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Fee Structure
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    Fees are as specified in the agreed SOW or engagement
                    proposal
                  </li>
                  <li>
                    Project-based, time-and-materials, or retainer arrangements
                    may apply
                  </li>
                  <li>All fees are exclusive of applicable taxes and GST</li>
                  <li>
                    Travel and third-party vendor costs will be billed
                    separately as specified in the SOW
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">
                  Payment Schedule
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    Payment terms are Net 30 days from invoice date unless
                    otherwise agreed
                  </li>
                  <li>
                    Initial deposit (typically 50%) may be required to commence
                    work
                  </li>
                  <li>
                    Progress payments are due upon milestone completion for
                    phased projects
                  </li>
                  <li>Final payment is due upon project delivery</li>
                  <li>
                    Late payments may incur interest at 1.5% per month or the
                    maximum allowed by law
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Intellectual Property Rights
                </h2>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Custom Development
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  All custom code, designs, and deliverables created
                  specifically for the Client shall be owned by the Client upon
                  full payment of fees. The Client shall own all intellectual
                  property rights, including copyrights and patents, to custom
                  software developed for their exclusive use.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">
                  Pre-existing IP and Third-party Components
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    Azorix retains ownership of all pre-existing tools,
                    frameworks, and methodologies
                  </li>
                  <li>
                    Third-party open-source components are governed by their
                    respective licenses
                  </li>
                  <li>
                    Client may not reverse-engineer or disassemble proprietary
                    tools
                  </li>
                  <li>
                    Client grants Azorix a non-exclusive right to use general
                    knowledge and techniques gained during the engagement
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">
                  Delivery and Ownership
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Upon full payment and project completion, Azorix will transfer
                  all ownership documentation and source code to the Client. The
                  Client may not claim ownership until all fees are paid in
                  full.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Warranties and Disclaimers
                </h2>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Limited Warranty
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Azorix warrants that services will be performed in a
                  professional and workmanlike manner consistent with industry
                  standards. Software deliverables will be substantially free
                  from defects and will function in accordance with the
                  specifications outlined in the SOW.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">
                  Warranty Period
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Warranty coverage is limited to 30 days from delivery. Defects
                  reported within this period will be corrected at no additional
                  cost.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">
                  Disclaimer
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Except as expressly stated, Azorix makes no other warranties,
                  express or implied, including warranties of merchantability,
                  fitness for a particular purpose, or non-infringement. Azorix
                  does not warrant that services will be error-free or
                  uninterrupted. Third-party services, APIs, and integrations
                  are provided "as-is" without warranty.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  IN NO EVENT SHALL AZORIX BE LIABLE FOR:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    Indirect, incidental, special, consequential, or punitive
                    damages
                  </li>
                  <li>
                    Loss of revenue, profit, data, or business opportunities
                  </li>
                  <li>
                    Damages arising from Client's misuse, modification, or
                    integration of deliverables
                  </li>
                  <li>
                    Third-party claims related to Client's use of the software
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Azorix's total liability shall not exceed the total fees paid
                  by the Client in the 12 months preceding the claim. Some
                  jurisdictions do not allow limitation of liability, so this
                  may not apply to you.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Client Responsibilities
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    Provide accurate project requirements and timely feedback
                  </li>
                  <li>Designate a primary contact and decision-maker</li>
                  <li>
                    Ensure Client-side systems and infrastructure are compatible
                  </li>
                  <li>
                    Provide necessary access, credentials, and data as required
                  </li>
                  <li>
                    Obtain all necessary licenses and permissions for
                    third-party services used
                  </li>
                  <li>
                    Pay invoices on time according to agreed payment terms
                  </li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>
                    Not use services for illegal, harmful, or unethical purposes
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Confidentiality
                </h2>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Mutual Confidentiality
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Both parties agree to maintain the confidentiality of
                  sensitive information shared during the engagement, including
                  business strategies, technical specifications, and financial
                  data. This obligation survives termination for a period of 2
                  years.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">
                  Exceptions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Confidentiality obligations do not apply to information that
                  is publicly available, independently developed, or required to
                  be disclosed by law. Azorix may disclose Client information if
                  required by legal process or regulatory authority.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Timelines and Delays
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Project timelines specified in the SOW are estimates based on
                  the scope provided. Delays may occur due to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Changes to project requirements or scope</li>
                  <li>Incomplete or delayed information from the Client</li>
                  <li>Third-party service delays or failures</li>
                  <li>Force majeure events</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Azorix will communicate delays promptly and provide revised
                  timelines. Extension of timelines does not entitle the Client
                  to terminate the project or reduce payment obligations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Support and Maintenance
                </h2>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Post-Delivery Support
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    Critical bug fixes are provided for 30 days post-delivery at
                    no cost
                  </li>
                  <li>
                    Non-critical issues and enhancements are available on a
                    time-and-materials basis
                  </li>
                  <li>
                    Extended support and maintenance can be arranged under a
                    separate SLA
                  </li>
                  <li>
                    Support availability is Monday-Friday, 9 AM to 6 PM IST
                    (holidays excluded)
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">
                  Maintenance and Updates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  After delivery, the Client is responsible for system
                  maintenance, hosting, security patches, and dependency
                  updates. Azorix is available for maintenance services under a
                  separate engagement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Termination and Cancellation
                </h2>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  By the Client
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    Client may terminate the engagement with 30 days' written
                    notice
                  </li>
                  <li>
                    Client remains liable for all work completed to date plus
                    50% of estimated remaining costs
                  </li>
                  <li>
                    Azorix will deliver all work-in-progress and documentation
                    upon final payment
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">
                  By Azorix
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    Azorix may terminate if Client fails to pay invoices within
                    15 days of the due date
                  </li>
                  <li>
                    Azorix may suspend services until outstanding payments are
                    resolved
                  </li>
                  <li>
                    Azorix may terminate if Client violates the terms of this
                    agreement
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  12. Data Security and Privacy
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Azorix employs industry-standard security practices to protect
                  Client data. However, we cannot guarantee absolute security.
                  For detailed information on data handling, privacy practices,
                  and GDPR compliance, please refer to our Privacy Policy.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Client is responsible for ensuring compliance with data
                  protection laws applicable to their industry and jurisdiction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  13. Third-party Integrations and Services
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Projects may involve integration with third-party APIs, cloud
                  services, or platforms. Azorix is not responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Third-party service failures or downtime</li>
                  <li>Changes to third-party APIs or terms of service</li>
                  <li>Data loss or security issues at third-party services</li>
                  <li>Cost increases or deprecation of third-party services</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  The Client is responsible for maintaining appropriate licenses
                  and agreements with third-party service providers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  14. Governing Law and Dispute Resolution
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  These terms are governed by the laws of India. Any disputes
                  arising from this agreement shall be:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    First subject to good-faith negotiation between senior
                    representatives
                  </li>
                  <li>
                    If unresolved, subject to mediation under applicable Indian
                    laws
                  </li>
                  <li>
                    Finally subject to the exclusive jurisdiction of courts in
                    Hyderabad, Telangana
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  15. Contact Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For inquiries regarding these Terms of Service or to discuss
                  your project needs, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Azorix Technologies Pvt Ltd</strong>
                    <br />
                    <strong>Address:</strong> Plot No 102,103, Temple Lane,
                    Mythri Nagar,
                    <br />
                    Mathrusri Nagar, K.v.rangareddy, Serilingampally,
                    <br />
                    Hyderabad, Telangana 500049
                    <br />
                    <strong>Email:</strong> info@azorix.com
                    <br />
                    <strong>Phone:</strong> +91 9392193639
                    <br />
                    <strong>Website:</strong> www.azorix.com
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  16. Amendments and Changes
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Azorix reserves the right to modify these Terms of Service at
                  any time. Changes will be effective upon posting on the
                  website. Continued engagement with our services after such
                  changes constitutes acceptance of the modified terms. Material
                  changes will be communicated to existing clients via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
