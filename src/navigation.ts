import { get } from './pages/members/[hash].astro';
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Consulting',
      links: [
        {
          text: 'Azure-Consulting',
          href: getPermalink('/azure'),
        },
        {
          text: 'Aws-Consulting',
          href: getPermalink('/aws'),
        },
        {
          text: 'Appacha-Kakfka-Consulting',
          href: getPermalink('/apache-kafka'),
        },
        {
          text: 'Google-Cloud-Consulting',
          href: getPermalink('/google-cloud-consulting'),
        },
        {
          text: 'Hybrid-Cloud-Consulting',
          href: getPermalink('/hybrid-cloud-consulting'),
        },
      ],
    },
    {
      text: 'Trainings',
      links: [
        {
          text: 'AWS Trainings',
          href: getPermalink('/aws-training'),
        },
        {
          text: 'Azure Trainings',
          href: getPermalink('/azure-trainings'),
        },
        {
          text: 'Cloud Workshops',
          href: getPermalink('/cloud-workshops'),
        },
        {
          text: 'Event-Streaming Kafka Trainings',
          href: getPermalink('/event-streaming-kafka-trainings'),
        },
        {
          text: 'GCP Trainings',
          href: getPermalink('/gcp-trainings'),
        },
        {
          text: 'Hybrid Cloud Trainings',
          href: getPermalink('/hybrid-cloud-trainings'),
        },
        {
          text: 'Terraform Trainings',
          href: getPermalink('/terraform-trainings'),
        },
      ],
    },

    {
      text: 'Karriere',
      links: [
        {
          text: 'Das Team',
          href: getPermalink('/team'),
        },
      ],
    },
    {
      text: 'News',
      links: [
        {
          text: 'News List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Beispielseiten',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
        {
          text: 'Landing - Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Landing - Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Landing - Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Landing - Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Landing - Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Landing - Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
  ],
  actions: [{ text: 'Kontakt', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Das Unternehmen',
      links: [
        { text: 'Karriere', href: '#' },
        { text: 'News', href: '#' },
        { text: 'Partner', href: '#' },
      ],
    },
    {
      title: 'Consuling',
      links: [
        { text: 'Azure', href: '#' },
        { text: 'AWS', href: '#' },
        { text: 'Google Cloud', href: '#' },
        { text: 'Streaming', href: '#' },
      ],
    },
    {
      title: 'Partners',
      links: [
        { text: 'Solace', href: '#' },
        { text: 'MongoDB', href: '#' },
        { text: 'Kafka', href: '#' },
        { text: 'Azure', href: '#' },
      ],
    },
    {
      title: 'Inhalte',
      links: [
        { text: 'Kontakt', href: '/contact' },
        { text: 'Blog', href: '#' },
        { text: 'Karriere', href: '#' },
        { text: 'Presse', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Impressum', href: getPermalink('/terms') },
    { text: 'Dataenschutzerklärung', href: getPermalink('/privacy') },
    { text: 'Kontakt', href: '/contact' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ThinkportRepo' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
