import { defineCollection, z } from 'astro:content';

const guideCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()).default([]),
    tlDr: z.array(z.string()).default([]),
    updated: z.string().optional(),
    products: z
      .array(
        z.object({
          name: z.string(),
          description: z.string(),
          url: z.string().url(),
          tags: z.array(z.string()).default([]),
        })
      )
      .default([]),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .default([]),
  }),
});

const comparisonCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()).default([]),
    criteria: z
      .array(
        z.object({
          label: z.string(),
          cerave: z.string(),
          competitor: z.string(),
        })
      )
      .default([]),
    pros: z
      .object({
        cerave: z.array(z.string()).default([]),
        competitor: z.array(z.string()).default([]),
      })
      .default({ cerave: [], competitor: [] }),
    recommendations: z
      .array(
        z.object({
          summary: z.string(),
          audience: z.string(),
        })
      )
      .default([]),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .default([]),
  }),
});

const ingredientCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()).default([]),
    updated: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    myths: z
      .array(
        z.object({
          myth: z.string(),
          fact: z.string(),
        })
      )
      .default([]),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .default([]),
  }),
});

const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string().default('general'),
  }),
});

export const collections = {
  guides: guideCollection,
  comparisons: comparisonCollection,
  ingredients: ingredientCollection,
  faqs: faqCollection,
};
