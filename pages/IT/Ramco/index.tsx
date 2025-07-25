import React from 'react';
import Head from 'next/head';
import {
  FaBuilding,
  FaUsers,
  FaGlobeAfrica,
  FaAward,
  FaBolt,
  FaRobot,
  FaBell,
  FaUserCircle,
  FaLayerGroup,
  FaWarehouse,
  FaProjectDiagram,
  FaCubes,
  FaBoxes,
  FaClipboardList,
  FaTools,
  FaChartPie,
} from 'react-icons/fa';

interface Category {
  name: string;
  icon: React.ReactElement;
  items: string[];
}

const categories: Category[] = [
  {
    name: 'Finance & Accounting',
    icon: <FaChartPie className="text-xl text-yellow-300" />,
    items: [
      'General Accounting',
      'Receivable Management',
      'Payable Management',
      'Fixed Assets Management',
      'Financial Planning',
      'Global Taxation Solution',
      'Consolidation',
    ],
  },
  {
    name: 'Real Estate Management',
    icon: <FaBuilding className="text-xl text-yellow-300" />,
    items: [
      'Land Bank Management',
      'CRM',
      'Lease Management',
      'Property Sales',
      'Utilities Billing',
      'Building Maintenance',
      'Customer Portal',
    ],
  },
  {
    name: 'Project Management',
    icon: <FaProjectDiagram className="text-xl text-yellow-300" />,
    items: [
      'Planning & Budgeting',
      'Project Definition',
      'Project Planning & Tracking',
      'Interiors Billing',
      'Project Closure',
    ],
  },
  {
    name: 'Inventory & Procurement',
    icon: <FaWarehouse className="text-xl text-yellow-300" />,
    items: [
      'Item Administration',
      'Warehouse Management',
      'Sourcing',
      'Purchasing',
      'Inbound Logistics',
      'Subcontracting',
      'Supplier Portal',
    ],
  },
  {
    name: 'Enterprise Asset Management',
    icon: <FaTools className="text-xl text-yellow-300" />,
    items: [
      'Induction & Setup',
      'Preventive Maintenance',
      'Predictive Maintenance',
      'Outage Management',
      'Work Management',
      'Reliability & Review',
      'Equipment Management',
    ],
  },
  {
    name: 'Sales & Distribution',
    icon: <FaCubes className="text-xl text-yellow-300" />,
    items: [
      'Sales Administration',
      'Demand Planning',
      'Order Management',
      'Outbound Logistics',
      'Warranty Service Management',
      'Service Management',
    ],
  },
  {
    name: 'Manufacturing',
    icon: <FaBoxes className="text-xl text-yellow-300" />,
    items: [
      'Estimation Planning',
      'Work Order Management',
      'Scheduling',
      'Manufacturing Execution',
      'Quality Management',
    ],
  },
  {
    name: 'Quality Management',
    icon: <FaAward className="text-xl text-yellow-300" />,
    items: [
      'Attribute Management',
      'Sampling Plans & Inspection',
      'Quality Administration',
      'Acceptance & Rejection Analysis',
      'Administration',
    ],
  },
  {
    name: 'Facilities Management',
    icon: <FaBuilding className="text-xl text-yellow-300" />,
    items: [
      'Assessment & Quotation',
      'Contract Management',
      'Site Administration',
      'Source Evaluation',
    ],
  },
  {
    name: 'Logistics Management',
    icon: <FaGlobeAfrica className="text-xl text-yellow-300" />,
    items: [
      'Transport Management',
      'Order & Warehouse Management',
      'Hub Management',
      'Logistics Command Center',
      'Contracting & Billing',
      'Fleet Management',
    ],
  },
  {
    name: 'SRP',
    icon: <FaUserCircle className="text-xl text-yellow-300" />,
    items: [
      'Proposal & Estimation',
      'Rates & Contract Management',
      'Time & Attendance',
      'Payroll & Benefits',
      'Expense Management',
    ],
  },
  {
    name: 'HRP',
    icon: <FaUsers className="text-xl text-yellow-300" />,
    items: ['Core HR', 'Employee Benefits', 'Time & Attendance', 'Payroll & Benefits'],
  },
  {
    name: 'Mobility Apps',
    icon: <FaBolt className="text-xl text-yellow-300" />,
    items: ['Warehouse', 'Route', 'Mechanic'],
  },
  {
    name: 'Plan & Optimize',
    icon: <FaClipboardList className="text-xl text-yellow-300" />,
    items: ['Customer', 'Approve', 'Inventory', 'Capacity', 'Transport'],
  },
  {
    name: 'AI/ML Platform',
    icon: <FaRobot className="text-xl text-yellow-300" />,
    items: ['Discrepancy Reporting', 'Parts Suggestion', 'Fault Reporting', 'Defaulting'],
  },
  {
    name: 'Event Platform',
    icon: <FaBell className="text-xl text-yellow-300" />,
    items: ['Alerts', 'Notification', 'Actions'],
  },
  {
    name: 'Master Hubs',
    icon: <FaLayerGroup className="text-xl text-yellow-300" />,
    items: ['Master', 'Procurement', 'Production', 'Inventory', 'Sales/CRM'],
  },
  {
    name: 'Platforms',
    icon: <FaBolt className="text-xl text-yellow-300" />,
    items: [
      'Mail IT',
      'BOTS',
      'Workflow',
      'Integration Gateway',
      'IRIS/EDI',
      'Real-time Integration',
      'Extension Tool Kit',
    ],
  },
];

export default function Ramco() {
  return (
    <>
      {/* SEO / TITLE */}
      <Head>
        <title>Ramco’s Comprehensive Solution Stack | Ramco × Sydenham</title>
      </Head>

      <div className="bg-black text-white px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* HERO */}
          <section className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 flex items-center justify-center gap-3">
              <FaBuilding className="text-4xl" />
              Ramco&nbsp;<span className="text-white">×</span>&nbsp;Sydenham
              <FaBolt className="text-4xl" />
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Empowering Enterprise Growth With Innovative Products &amp; Platforms
            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Ramco Systems is a global enterprise software provider offering cloud-based ERP solutions 
              for complex industries. With a focus on innovation, Ramco delivers intelligent, AI-driven 
              platforms tailored for modern business needs.
            </p>

          </section>

          {/* SOLUTION STACK */}
          <section>
            <h2 className="text-2xl text-yellow-400 font-semibold mb-6">
              Ramco’s Comprehensive Solution Stack
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <div key={cat.name} className="bg-gray-900 border border-gray-800 rounded-lg p-5 hover:border-yellow-500 transition">
                  <div className="flex items-center gap-2 mb-3">
                    {cat.icon}
                    <h3 className="text-lg font-semibold text-yellow-300">{cat.name}</h3>
                  </div>
                  <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-gray-500">
              © 2025 Ramco Systems Limited &amp; Sydenham Enterprises. All information subject to change.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
