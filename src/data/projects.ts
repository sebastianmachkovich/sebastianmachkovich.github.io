export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  architectureImage?: string; // TODO: add diagram images to public/images/ and reference here
}

export const projects: Project[] = [
  {
    title: 'FlexDeploy MCP Server',
    description:
      'An MCP server that lets ~150 developers manage CI/CD pipelines, builds, and deployments directly from their IDE.',
    tags: ['MCP', 'FlexDeploy', 'CI/CD', 'TypeScript'], // TODO: confirm language (TypeScript vs Python)
  },
  {
    title: 'On-Prem to AWS Migration',
    description:
      'Led the move of on-premises services to AWS using ECS, Lambda, API Gateway, CloudFront, Route 53, and Cognito.',
    tags: [
      'AWS',
      'ECS',
      'Lambda',
      'API Gateway',
      'CloudFront',
      'Route 53',
      'Cognito',
      'Terraform',
    ],
  },
  {
    title: 'Copilot via Vertex AI (VS Code Extension)',
    description:
      'A custom VS Code extension that routes GitHub Copilot inference through Google Vertex AI / Model Garden to use enterprise GCP pricing without changing the developer experience.',
    tags: ['VS Code', 'TypeScript', 'GCP', 'Vertex AI', 'GitHub Copilot'],
  },
  {
    title: 'Bedrock Agents AI Chatbot',
    description:
      'An AI chatbot on AWS Bedrock Agents with database querying, an Orders sub-agent, and time zone conversion.',
    tags: ['AWS Bedrock', 'Agents', 'Python', 'FastAPI'],
  },
  {
    title: 'Ridgeport',
    description:
      'SaaS platform for roofing measurements, currently in development.',
    tags: ['SaaS'], // TODO: add the full stack once finalized
    liveUrl: 'https://ridgeport-app.com',
  },
];
