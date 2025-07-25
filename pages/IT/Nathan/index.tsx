import React from 'react';
import {
  FaHandshake,
  FaUsers,
  FaClock,
  FaRobot,
  FaMoneyCheckAlt,
  FaChartLine,
  FaHeadset,
  FaBullseye,
  FaCogs,
  FaSync,
  FaCloud,
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaBolt,
} from 'react-icons/fa';

const Section = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section className="mb-12">
    <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
      {icon} {title}
    </h2>
    <div className="text-sm md:text-base text-gray-300 space-y-4">{children}</div>
  </section>
);

export default function Nathan() {
  return (
    <div className="bg-black text-white px-6 md:px-16 py-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* HEADER */}
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 flex items-center justify-center gap-3 mb-2">
            <FaBuilding className="text-4xl" />
            Nathan&nbsp;Digital&nbsp;<span className="text-white">×</span>&nbsp;Sydenham
            <FaBolt className="text-4xl" />
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We believe in the power of AI and technology to transform B2B business software.
          </p>
        </header>

        {/* PARTNERSHIP */}
        <Section title="About Our Partnership" icon={<FaHandshake />}>
          <p>
            Sydenham IT has partnered with <span className="text-yellow-300 font-semibold">Nathan Digital</span> to provide cutting-edge, AI-driven ERP solutions for businesses in Kenya and beyond. From 2019–2024, we have helped streamline operations, improve decision-making, and optimize performance through intelligent and secure software for all industries and company sizes.
          </p>
        </Section>

        {/* HR PLATFORM */}
        <Section title="Complete HR Platform" icon={<FaUsers />}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc pl-5">
            <li>Recruitment & Onboarding</li>
            <li>Attendance and Shift Tracking</li>
            <li>HR Self-Service Portal</li>
            <li>Payroll Management</li>
            <li>Performance Management</li>
          </ul>
        </Section>

        <Section title="Smart Recruitment & Onboarding" icon={<FaRobot />}>
          <p>
            Build a high-quality talent pipeline, deliver seamless hiring experiences, and create personalized onboarding journeys for new hires. Our tools reduce hiring time and improve retention.
          </p>
        </Section>

        <Section title="Time, Attendance & Shift Management" icon={<FaClock />}>
          <p>
            Automate attendance, eliminate payroll errors, and optimize shifts with smart scheduling — whether your team is on-site or remote.
          </p>
        </Section>

        <Section title="Self-Service & Automation" icon={<FaCogs />}>
          <ul className="list-disc pl-5">
            <li>Generate HR letters automatically</li>
            <li>Enable leave and reimbursement requests</li>
            <li>Provide remote teams structured time-logging</li>
          </ul>
        </Section>

        <Section title="Payroll & Benefits" icon={<FaMoneyCheckAlt />}>
          <p>
            Accurate, transparent payroll systems that build trust. Automate calculations, provide payslips, and ensure compliance with detailed insights and reporting.
          </p>
        </Section>

        <Section title="Performance & Growth" icon={<FaChartLine />}>
          <p>
            Empower teams with fair, data-backed reviews. Customize KPIs, gather 360° feedback, and align goals with business growth through automated evaluations.
          </p>
        </Section>

        <Section title="24/7 Expert Support" icon={<FaHeadset />}>
          <p>
            Count on our technical support team for real-time assistance anytime you need us. We're here to ensure your business runs smoothly without interruptions.
          </p>
        </Section>

        <Section title="Vision and Mission" icon={<FaBullseye />}>
          <p>
            To become the leading provider of secure cloud ERP solutions in Kenya, revolutionizing how businesses manage resources and achieve goals.
          </p>
        </Section>

        <Section title="ERP Software Features" icon={<FaSync />}>
          <ul className="list-disc pl-5">
            <li><strong>Enterprise Resource Planning:</strong> Streamline operations with a scalable platform tailored to your needs.</li>
            <li><strong>Financial Management:</strong> Includes Receivables, Payables, Ledger, Budgeting, and Forecasting.</li>
            <li><strong>Human Resource Management:</strong> Comprehensive HR automation tools.</li>
            <li><strong>Supply Chain Management:</strong> End-to-end supply chain optimization.</li>
            <li><strong>Customer Relationship Management:</strong> Enhance customer engagement and retention.</li>
            <li><strong>Inventory & Logistics:</strong> Real-time stock tracking and smart warehouse management.</li>
            <li><strong>Manufacturing & Quality Control:</strong> Improve efficiency, reduce waste, and maintain standards.</li>
          </ul>
        </Section>

        <Section title="Customization & Integration" icon={<FaCogs />}>
          <ul className="list-disc pl-5">
            <li><strong>Customization:</strong> Tailored workflows and modules aligned to your specific business logic.</li>
            <li><strong>Integration:</strong> Smooth interoperability with third-party tools and APIs.</li>
          </ul>
        </Section>

        <Section title="Scalability & Deployment" icon={<FaCloud />}>
          <ul className="list-disc pl-5">
            <li><strong>Scalability:</strong> ERP that grows with your business complexity.</li>
            <li><strong>Cloud Flexibility:</strong> Choose between cloud-hosted or on-premise deployment.</li>
          </ul>
        </Section>

        <Section title="Expert Support Services" icon={<FaHeadset />}>
          <p>
            Our team provides implementation, onboarding, training, and ongoing support for a seamless ERP experience.
          </p>
        </Section>

        <Section title="Target Market" icon={<FaBullseye />}>
          <p>
            We serve SMEs, corporates, and government entities ready for digital transformation using secure, AI-powered business systems.
          </p>
        </Section>

        <Section title="Contact Nathan Digital" icon={<FaPhone />}>
          <p><strong>Phone:</strong> +2547 1653 3461</p>
          <p><strong>Email:</strong> info@sydenham.co.ke</p>
        </Section>
      </div>
    </div>
  );
}
