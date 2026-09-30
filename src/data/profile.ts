export interface SocialLink {
  label: string;
  url: string;
  icon: 'Github' | 'Linkedin' | 'Mail' | 'ExternalLink';
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  taglines: string[];
  bio: string;
  email: string;
  resumeUrl: string;
  links: SocialLink[];
  headshot: string;
}

export const profile: Profile = {
  name: 'Sebastian Machkovich',
  title: 'Junior Cloud Engineer at Schreiber Foods',
  location: 'Green Bay, WI',
  taglines: [
    'Junior Cloud Engineer',
    'Terraform · AWS · Python',
    'Building AI tooling and MCP servers',
    'Founder @ Ridgeport',
  ],
  bio: 'Cloud engineer with nearly 3 years of IT experience across cloud engineering, software development, and technical support. I build AWS infrastructure with Terraform, led an on-premises to AWS migration, and automate delivery with GitHub and FlexDeploy CI/CD. I\'ve delivered enterprise generative AI tooling on AWS and Google Cloud. I\'m also building Ridgeport, a SaaS product for roofing measurements, and I invest in real estate on the side.',
  email: 'sebastian.machkovich@gmail.com',
  resumeUrl: '/Sebastian_Machkovich_Resume.pdf', // TODO: confirm final PDF is in public/
  links: [
    { label: 'GitHub', url: 'https://github.com/sebastianmachkovich', icon: 'Github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sebastianmachkovich', icon: 'Linkedin' },
    { label: 'Email', url: 'mailto:sebastian.machkovich@gmail.com', icon: 'Mail' },
    { label: 'Ridgeport', url: 'https://ridgeport-app.com', icon: 'ExternalLink' },
  ],
  headshot: '/images/about.png',
};
