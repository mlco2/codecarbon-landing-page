import { z } from "astro:content";

const ContributorSchema = z.object({
  name: z.string(),
  job: z.string(),
  organisation: z.string().optional(),
  img_path: z.string(),
  github_url: z.string().url().optional(),
  products: z.array(z.enum(["codecarbon", "ecologits"])).default([]),
});

export type Contributor = z.infer<typeof ContributorSchema>;

export const contributors: Contributor[] = [
  {
    name: "Benoît Courty",
    job: "Data Scientist",
    img_path: "/assets/contributors/img/Benoit_Courty.jpg",
    products: ["codecarbon"],
  },
  {
    name: "Amine Saboni",
    job: "Deep Learning Engineer",
    img_path: "/assets/contributors/img/Amine_Saboni.jpg",
    products: ["codecarbon"],
  },
  {
    name: "Sasha Luccioni",
    job: "Researcher",
    img_path: "/assets/contributors/img/sascha.jpg",
    products: ["codecarbon"],
  },
  {
    name: "Iñigo Imaz",
    job: "Software Developer",
    img_path: "/assets/contributors/img/inigo.jpg",
    products: ["codecarbon"],
  },
  {
    name: "Luis Blanche",
    job: "Machine Learning Engineer",
    img_path: "https://avatars.githubusercontent.com/u/18741447",
    products: ["codecarbon"],
  },
  {
    name: "Patrick",
    job: "Software developer",
    img_path: "https://avatars.githubusercontent.com/u/6672288",
    products: ["codecarbon"],
  },
  {
    name: "Samuel Rincé",
    job: "AI Engineer",
    img_path: "https://avatars.githubusercontent.com/u/35747570",
    github_url: "https://github.com/samuelrince",
    products: ["ecologits"],
  },
  {
    name: "Claire Saignol",
    job: "Sustainability Manager",
    img_path: "https://avatars.githubusercontent.com/u/280668843",
    products: ["ecologits"],
  },
  {
    name: "Adrien Banse",
    job: "PhD Student",
    img_path: "https://avatars.githubusercontent.com/u/45042779",
    github_url: "https://github.com/adrienbanse",
    products: ["ecologits"],
  },
  {
    name: "Valentin Defour",
    job: "Data Scientist",
    img_path: "https://avatars.githubusercontent.com/u/12235628",
    products: ["ecologits"],
  },
  {
    name: "Vincent Duarte",
    job: "Software Engineer",
    img_path: "https://avatars.githubusercontent.com/u/46927767",
    github_url: "https://github.com/DuarteVi",
    products: ["ecologits"],
  },
  {
    name: "David Berenstein",
    job: "ML & DevRel",
    img_path: "https://avatars.githubusercontent.com/u/25269220",
    github_url: "https://github.com/davidberenstein1957",
    products: ["codecarbon", "ecologits"],
  },
];
