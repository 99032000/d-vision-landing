import { defineCollection, z } from "astro:content";

const showcase = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().min(1),
    image: z.string(),
    url: z.string().url(),
    featured: z.number().min(1).optional(),
  }),
});
const blog = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().min(1),
    image: z.string(),
    description: z.string(),
    date: z.string(),
    featured: z.number().min(1).optional(),
    blogData: z.object({
      image: z.string(),
      title: z.string(),
      content: z.string(),
    })
  }),
});

export const collections = {
  showcase,
  blog
};
