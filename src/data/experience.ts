export interface Role {
  title: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface ExperienceEntry {
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  roles: Role[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Schreiber Foods',
    location: 'Green Bay, WI',
    startDate: 'Jan 2025',
    endDate: 'Present',
    roles: [
      {
        title: 'Junior Cloud Engineer',
        startDate: 'Jun 2026',
        endDate: 'Present',
        bullets: [
          'Led migration of on-premises services to AWS using ECS, Lambda, API Gateway, CloudFront, Route 53, and Cognito, supporting an on-prem-to-cloud transition',
          'Develop and maintain Terraform IaC so application teams can provision and manage cloud resources to platform standards',
          'Contributed to the SVN-to-GitHub migration, moving teams to GitHub workflows and supporting adoption of modern CI/CD and deployment practices',
          'Designed and built a FlexDeploy MCP server that lets ~150 users manage CI/CD pipelines, builds, and deployments directly from their IDE',
          'Built a custom VS Code extension that routes GitHub Copilot inference through Google Vertex AI / Model Garden, using enterprise GCP pricing while keeping the existing developer experience',
        ],
      },
      {
        title: 'Software Developer Intern',
        startDate: 'Jun 2025',
        endDate: 'Jun 2026',
        bullets: [
          'Owned an internal AI chatbot built on AWS Bedrock Agents, adding database querying, an Orders sub-agent, and organization-aware time zone conversion',
          'Built full-stack features with React, FastAPI, AWS, and Terraform to support the move to a cloud-native architecture',
          'Implemented secure authentication for a European testing hub by integrating Amazon Cognito with AWS-hosted services after the EU environments moved to the cloud',
          'Automated operations with an Inventory Reconciliation screen that eliminated manual Go-Live reporting and reduced developer support requests',
        ],
      },
      {
        title: 'IT Solution Success Intern',
        startDate: 'Jan 2025',
        endDate: 'Jun 2025',
        bullets: [
          'Created ~100 knowledge documents, led endpoint mapping to document backend service usage, and trained plant employees during on-site Go-Live support',
        ],
      },
    ],
  },
  {
    company: 'The Boldt Company',
    location: 'Appleton, WI',
    startDate: 'May 2024',
    endDate: 'Nov 2024',
    roles: [
      {
        title: 'Information Technology Intern',
        startDate: 'May 2024',
        endDate: 'Nov 2024',
        bullets: [
          'Wrote PowerShell scripts to update pay dates and pull data, and a Python script to automate CRM data deletion',
          'Resolved P3 and P4 HelpDesk tickets; built an IT budget in Excel and a Power BI dashboard for executives',
        ],
      },
    ],
  },
  {
    company: 'ELL Advocates',
    location: 'Green Bay, WI',
    startDate: 'Nov 2023',
    endDate: 'Apr 2024',
    roles: [
      {
        title: 'IT Engineering Intern',
        startDate: 'Nov 2023',
        endDate: 'Apr 2024',
        bullets: [
          'Automated lesson plans with Python, built web features on WordPress, and visualized program data with Tableau',
        ],
      },
    ],
  },
];
