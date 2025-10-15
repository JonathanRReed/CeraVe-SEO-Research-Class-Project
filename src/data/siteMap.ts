export type SiteEntry = {
  title: string;
  url: string;
  description: string;
  category: string;
};

export const siteMap: SiteEntry[] = [
  {
    title: 'Home',
    url: '/',
    description: 'Skincare for dry, sensitive skin made simple.',
    category: 'General',
  },
  {
    title: 'Start Here',
    url: '/start-here',
    description: 'Learn the three-step baseline routine that keeps skin comfortable.',
    category: 'Guides',
  },
  {
    title: 'Fix Dry, Flaky Skin',
    url: '/guides/fix-dry-flaky-skin',
    description: 'Stop dry patches with barrier-friendly steps and product picks.',
    category: 'Guides',
  },
  {
    title: 'Morning vs Night Routine',
    url: '/guides/morning-vs-night-routine',
    description: 'Fine-tune the right steps for daytime and evening care.',
    category: 'Guides',
  },
  {
    title: 'Over-Exfoliation Reset',
    url: '/guides/over-exfoliation-reset',
    description: 'Repair and calm skin after doing too much.',
    category: 'Guides',
  },
  {
    title: 'CeraVe vs Cetaphil Cleanser',
    url: '/comparisons/cerave-vs-cetaphil-cleanser',
    description: 'Compare texture, after-feel, and who each cleanser fits best.',
    category: 'Comparisons',
  },
  {
    title: 'Moisturizing Cream vs Lotion',
    url: '/comparisons/moisturizing-cream-vs-lotion',
    description: 'Decide between cream or lotion based on skin feel and routine.',
    category: 'Comparisons',
  },
  {
    title: 'Ceramides',
    url: '/ingredients/ceramides',
    description: 'Understand what ceramides are and why they help dry skin.',
    category: 'Ingredients',
  },
  {
    title: 'Hyaluronic Acid',
    url: '/ingredients/hyaluronic-acid',
    description: 'Learn how hyaluronic acid draws in hydration and how to layer it.',
    category: 'Ingredients',
  },
  {
    title: 'Niacinamide',
    url: '/ingredients/niacinamide',
    description: 'Support barrier repair and even tone with niacinamide.',
    category: 'Ingredients',
  },
  {
    title: 'Routine Builder',
    url: '/tools/routine-builder',
    description: 'Pick skin concerns and generate a day and night routine.',
    category: 'Tools',
  },
  {
    title: 'FAQs',
    url: '/faqs',
    description: 'Quick answers to the top questions men have about dry skin care.',
    category: 'Support',
  },
  {
    title: 'About',
    url: '/about',
    description: 'See the project goals, strategy, and measurement plan.',
    category: 'Support',
  },
];
