export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Platforms',
    skills: [
      'Amazon Web Services (AWS)',
      'Google Cloud Platform (GCP)',
      'Azure',
      'Entra ID / Active Directory',
      'Microsoft 365',
      'Port.io',
    ],
  },
  {
    category: 'IaC, CI/CD & Automation',
    skills: [
      'Terraform',
      'PowerShell',
      'GitHub',
      'GitHub Actions',
      'Git',
      'FlexDeploy Workflows & Pipelines',
    ],
  },
  {
    category: 'Generative AI',
    skills: [
      'GitHub Copilot',
      'Claude Code',
      'Cursor',
      'AWS Bedrock Agents',
      'Google Vertex AI',
      'MCP',
      'RAG',
    ],
  },
  {
    category: 'Systems & Security',
    skills: [
      'Linux',
      'Monitoring (Dynatrace, SolarWinds)',
      'Amazon Cognito',
      'Cybersecurity Fundamentals',
    ],
  },
  {
    category: 'Languages & Tools',
    skills: [
      'Python',
      'TypeScript/JavaScript',
      'Java',
      'C# (foundational)',
      'SQL',
      'FastAPI',
      'React',
      'MongoDB',
      'Docker',
      'Power BI',
    ],
  },
];
