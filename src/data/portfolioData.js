export const personalInfo = {
  name: "Sumit Bhojani",
  shortName: "Sumit",
  title: "Full Stack Developer",
  specialization: "React.js | Node.js | AWS",
  roleStatus: "Open to High-Impact Opportunities",
  currentRole: "Full Stack Developer @ Dhitech Solutions",
  location: "Ahmedabad, Gujarat, India",
  timezone: "IST (UTC+5:30)",
  email: "sumit.bhojani20@gmail.com",
  phone: "+91 7016034419",
  resumePath: "/Sumit_Bhojani_Resume.pdf",
  socials: {
    github: "https://github.com/sumitbhojani",
    linkedin: "https://www.linkedin.com/in/sumit-bhojani-0873a421b/",
    email: "mailto:sumit.bhojani20@gmail.com",
    phone: "tel:+917016034419",
    whatsapp: "https://wa.me/917016034419"
  },
  summary: "Full Stack Developer with nearly 3 years of experience building and supporting production web applications using React.js and Node.js. Hands-on experience designing REST APIs and developing AWS-based data pipelines for an advertising analytics platform, including workflows involving AWS Lambda, Step Functions, Amazon S3, AWS Glue, and Amazon Redshift. AWS Certified Cloud Practitioner with end-to-end expertise across modern application development, data ingestion, reporting workflows, cloud infrastructure, and production support."
};

export const keyStats = [
  { label: "Industry Experience", value: "3+", sub: "Years Building Web Apps" },
  { label: "Cloud Certification", value: "AWS", sub: "Certified Cloud Practitioner" },
  { label: "Data Pipelines Built", value: "AMC", sub: "S3, Glue & Redshift Workflows" },
  { label: "Production Delivery", value: "100%", sub: "Reliable Serverless Architecture" }
];

export const skillCategories = [
  {
    category: "Frontend Development",
    icon: "Layout",
    description: "Modern, responsive, and performance-tuned user interfaces",
    skills: [
      { name: "React.js", level: "Expert", tags: ["Hooks", "Context API", "Architecture"] },
      { name: "JavaScript (ES6+)", level: "Advanced", tags: ["Async/Await", "DOM", "FP"] },
      { name: "HTML5 & CSS3", level: "Expert", tags: ["Semantic HTML", "Flexbox", "Grid"] },
      { name: "Tailwind CSS", level: "Advanced", tags: ["Responsive", "Utility-First"] },
      { name: "Interactive Reporting Dashboards", level: "Advanced", tags: ["Analytics", "Data Viz"] },
      { name: "REST API Integration", level: "Expert", tags: ["Axios", "Fetch", "Caching"] }
    ]
  },
  {
    category: "Backend & REST APIs",
    icon: "Server",
    description: "Scalable server-side logic, microservices, and serverless compute",
    skills: [
      { name: "Node.js", level: "Advanced", tags: ["Event Loop", "Streams", "Modules"] },
      { name: "Express.js", level: "Advanced", tags: ["REST APIs", "Middleware", "Routing"] },
      { name: "REST API Design", level: "Expert", tags: ["CRUD", "Pagination", "Security"] },
      { name: "Authentication & Authorization", level: "Advanced", tags: ["JWT", "Role-Based Access"] },
      { name: "Serverless Compute", level: "Advanced", tags: ["Event-Driven", "Microservices"] }
    ]
  },
  {
    category: "AWS Cloud & Infrastructure",
    icon: "Cloud",
    highlight: true,
    description: "AWS Certified Cloud Practitioner with production serverless experience",
    skills: [
      { name: "AWS Lambda", level: "Expert", tags: ["Serverless", "Event Triggers"] },
      { name: "AWS Step Functions", level: "Advanced", tags: ["State Machines", "Orchestration"] },
      { name: "Amazon S3", level: "Expert", tags: ["Bucket Policies", "Event Notifications"] },
      { name: "AWS Glue", level: "Advanced", tags: ["ETL", "Catalog", "Transformations"] },
      { name: "EventBridge Scheduler", level: "Advanced", tags: ["Cron", "Job Scheduling"] },
      { name: "Amazon EC2 & IAM", level: "Intermediate", tags: ["Roles", "Policies", "Instances"] },
      { name: "CloudWatch & QuickSight", level: "Advanced", tags: ["Monitoring", "BI Dashboards"] },
      { name: "Secrets Manager", level: "Intermediate", tags: ["Credential Security"] },
      { name: "Amazon Connect", level: "Advanced", tags: ["Contact Center Automation"] }
    ]
  },
  {
    category: "Databases & Data Pipelines",
    icon: "Database",
    description: "High-volume data transformation, relational and analytical datastores",
    skills: [
      { name: "Amazon Redshift", level: "Advanced", tags: ["Data Warehousing", "SQL Analytics"] },
      { name: "MySQL", level: "Advanced", tags: ["Relational", "Indexing", "Queries"] },
      { name: "Amazon DynamoDB", level: "Intermediate", tags: ["NoSQL", "Key-Value"] },
      { name: "SQL & Query Optimization", level: "Advanced", tags: ["Joins", "Aggregations", "Views"] },
      { name: "Python ETL Pipelines", level: "Intermediate", tags: ["Data Cleaning", "Transformation"] }
    ]
  },
  {
    category: "Tools & Developer Practices",
    icon: "Terminal",
    description: "Modern engineering workflows, testing, and cloud operations",
    skills: [
      { name: "Git & GitHub", level: "Advanced", tags: ["Version Control", "PRs"] },
      { name: "Postman", level: "Expert", tags: ["API Testing", "Documentation"] },
      { name: "Vite / npm", level: "Advanced", tags: ["Build Tools", "Packaging"] },
      { name: "Production Debugging", level: "Advanced", tags: ["Log Analysis", "CloudWatch Logs"] },
      { name: "Agile / Scrum", level: "Proficient", tags: ["Sprints", "Collaborative Delivery"] }
    ]
  }
];

export const experiences = [
  {
    company: "Dhitech Solutions",
    role: "Full Stack Developer",
    period: "Jan 2024 – Present",
    type: "Full-Time (Transitioned from Intern)",
    location: "Ahmedabad, Gujarat, India",
    summary: "Spearheading full-stack web application development and cloud serverless data pipelines for US enterprise clients, focusing on advertising analytics and contact center automation.",
    highlights: [
      "Transitioned from Intern (Jan 2024) to Full-Time Full Stack Developer (Jul 2024) based on impactful production delivery.",
      "Engineered automated data ingestion and transformation pipelines processing Amazon Marketing Cloud (AMC) datasets into Amazon Redshift.",
      "Designed and deployed responsive React.js reporting dashboards enabling advertiser clients to glean deep audience and campaign insights.",
      "Automated complex multi-step cloud workflows using AWS Step Functions, AWS Lambda, and EventBridge."
    ],
    projectsInRole: [
      {
        name: "DrivePG — Advertising Analytics Platform",
        client: "US-based Advertising Firm",
        tags: ["React.js", "Node.js", "AWS Lambda", "AWS Step Functions", "AWS Glue", "Amazon Redshift", "Amazon S3", "EventBridge"],
        overview: "A comprehensive analytics and intelligence platform that ingests, processes, and visualizes complex Amazon Marketing Cloud (AMC) advertising data.",
        deliverables: [
          "Developed full-stack features using React.js and Node.js for advertiser data management and reporting dashboards.",
          "Constructed high-throughput REST APIs supporting rapid querying and filtering of analytics datasets.",
          "Built serverless AWS pipelines: EventBridge triggers automated ingestion jobs, Lambda fetches AMC reports into Amazon S3, AWS Glue transforms datasets, and loads structured tables into Amazon Redshift.",
          "Implemented automated synchronization workflows between S3 and Redshift, guaranteeing data integrity and freshness.",
          "Managed cloud infrastructure using EC2, IAM policies, Secrets Manager, DynamoDB, CloudWatch alarms, and QuickSight visual reports.",
          "Proactively investigated and resolved production bottlenecks to support reliable uptime for advertisers."
        ]
      },
      {
        name: "Call Clutch — AWS Connect Contact Center",
        client: "Enterprise Communication",
        tags: ["AWS Lambda", "AWS Step Functions", "Amazon Connect", "Serverless", "Node.js"],
        overview: "An automated cloud contact center solution designed to orchestrate complex customer call flows and backend operational triggers.",
        deliverables: [
          "Developed serverless AWS Lambda functions executing core business logic during incoming and outgoing customer calls.",
          "Designed state-driven AWS Step Functions workflows to coordinate asynchronous multi-step customer verification and record updates.",
          "Integrated Lambda with Amazon Connect contact flow blocks, reducing manual agent dispatch overhead."
        ]
      },
      {
        name: "RBS — Gift Card Management System",
        client: "Hospitality & Merchant Network",
        tags: ["Node.js", "REST APIs", "MySQL", "Backend Architecture"],
        overview: "A centralized digital voucher and gift card lifecycle platform enabling retail merchants and hospitality partners to issue and redeem gift cards.",
        deliverables: [
          "Engineered robust Node.js REST APIs handling gift card issuance, validation, transfer, and branch redemption.",
          "Established the foundational backend application architecture, clean folder structure, and modular routing.",
          "Implemented validation rules preventing double redemption across multi-location participating branches."
        ]
      }
    ]
  }
];

export const projects = [
  {
    id: "drivepg",
    title: "DrivePG — Advertising Analytics Platform",
    subtitle: "Enterprise AMC Data Pipeline & Analytics Engine",
    category: "Full Stack & Cloud Architecture",
    company: "Dhitech Solutions",
    status: "Production Enterprise Platform",
    featured: true,
    description: "Developed and enhanced full-stack capabilities for DrivePG, a US-based advertising platform processing Amazon Marketing Cloud (AMC) data. Built automated ETL pipelines moving data from S3 via AWS Glue into Redshift, accompanied by interactive React.js dashboards.",
    architecture: [
      { step: "1. Ingestion", detail: "AMC Report Data ingested via EventBridge & Lambda into Amazon S3 buckets" },
      { step: "2. Transformation", detail: "AWS Glue crawler & ETL jobs clean and structure datasets" },
      { step: "3. Warehousing", detail: "Aggregated datasets loaded into Amazon Redshift for high-speed analytical queries" },
      { step: "4. Presentation", detail: "Node.js REST APIs feed dynamic React.js reporting dashboards for advertisers" }
    ],
    techStack: ["React.js", "Node.js", "AWS Lambda", "AWS Glue", "Amazon Redshift", "Amazon S3", "Step Functions", "EventBridge", "CloudWatch"],
    highlights: [
      "Automated serverless data ingestion saving hours of manual data handling per week.",
      "High-performance query execution on Amazon Redshift data warehouse.",
      "Interactive analytics UI with customizable timeframes, campaign attribution, and performance charts.",
      "Production support, CloudWatch monitoring, and automated alarm notifications."
    ]
  },
  {
    id: "call-clutch",
    title: "Call Clutch — AWS Connect Contact Center",
    subtitle: "Serverless Telephony & Workflow Orchestration",
    category: "Cloud & Serverless",
    company: "Dhitech Solutions",
    status: "Production Solution",
    featured: true,
    description: "Cloud-native telephony orchestration platform built on Amazon Connect, AWS Lambda, and Step Functions to automate customer call flows, caller verification, and back-office CRM synchronization.",
    architecture: [
      { step: "1. Trigger", detail: "Incoming customer call hits Amazon Connect contact flow" },
      { step: "2. Logic", detail: "AWS Lambda executes business logic and verifies customer record" },
      { step: "3. Workflow", detail: "AWS Step Functions orchestrates multi-step asynchronous actions" },
      { step: "4. Output", detail: "Dynamic interactive voice response (IVR) with real-time operational feedback" }
    ],
    techStack: ["AWS Connect", "AWS Lambda", "AWS Step Functions", "Node.js", "CloudWatch", "IAM"],
    highlights: [
      "Zero-server architecture utilizing AWS managed serverless services.",
      "Reliable asynchronous error handling and retry mechanisms in Step Functions.",
      "Streamlined call handling latency and automated customer operational flows."
    ]
  },
  {
    id: "rbs-giftcard",
    title: "RBS — Gift Card Management System",
    subtitle: "Multi-Branch Digital Voucher Lifecycle Platform",
    category: "Backend & Systems Design",
    company: "Dhitech Solutions",
    status: "Enterprise Backend Solution",
    featured: true,
    description: "Comprehensive backend REST API platform enabling hospitality partners and merchants to issue, manage, and redeem gift cards across multiple distributed branch locations with strict concurrency controls.",
    architecture: [
      { step: "1. Issuance", detail: "Merchants generate unique encrypted voucher codes with balance allocations" },
      { step: "2. Verification", detail: "Real-time balance checks and branch privilege authentication via Node.js REST API" },
      { step: "3. Redemption", detail: "Atomic transaction processing preventing duplicate redemption" },
      { step: "4. Reporting", detail: "Detailed transaction history and partner reconciliation logs" }
    ],
    techStack: ["Node.js", "Express.js", "REST APIs", "MySQL", "Authentication", "Architecture Design"],
    highlights: [
      "Designed initial application modular architecture from ground up.",
      "Secure API endpoints for merchant authorization and branch transactions.",
      "Ensured data consistency across participating merchant locations."
    ]
  }
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "May 2025",
    credentialId: "AWS-CCP",
    icon: "CloudCheck",
    badgeUrl: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    description: "Demonstrated comprehensive understanding of AWS cloud concepts, security and compliance, core AWS services (Compute, Storage, Database, Networking), and cloud economic principles."
  }
];

export const education = [
  {
    institution: "Gujarat Technological University",
    degree: "Bachelor of Engineering (B.E.) — Information Technology",
    period: "2020 – 2024",
    location: "Gujarat, India",
    cgpa: "8.22",
    highlights: [
      "Graduated with a strong academic standing of 8.22 CGPA in Information Technology.",
      "Comprehensive coursework in Data Structures, Database Management Systems (DBMS), Web Technologies, Computer Networks, and Cloud Computing.",
      "Built solid foundation in software engineering principles, algorithm design, and modern full-stack development."
    ]
  }
];
