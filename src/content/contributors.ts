import { z } from "astro:content";

const ContributorSchema = z.object({
  name: z.string(),
  job: z.string(),
  organisation: z.string().optional(),
  img_path: z.string(),
  github_url: z.string().url().optional(),
});

export type Contributor = z.infer<typeof ContributorSchema>;

/*
Adding a new contributor :
You are in front of an array, you can add a contributor by following the scheme.
Copy/paste the example, and replace with your own information.

    {
        name: "Your_data_here",
        job : "Your_data_here",
        organisation: "Your_data_here",
        img_path: "/assets/contributors/img/someone.jpeg"
    },
*/

export const contributors: Contributor[] = [
  {
    name: "Benoît Courty",
    job: "Data Scientist",
    img_path: "/assets/contributors/img/Benoit_Courty.jpg",
    github_url: "https://github.com/benoit-cty",
  },
  {
    name: "Amine Saboni",
    job: "Deep Learning Engineer",
    img_path: "/assets/contributors/img/Amine_Saboni.jpg",
    github_url: "https://github.com/SaboniAmine",
  },
  {
    name: "Sasha Luccioni",
    job: "Researcher",
    organisation: "Hugging Face",
    img_path: "/assets/contributors/img/sascha.jpg",
    github_url: "https://github.com/sashavor",
  },
  {
    name: "Iñigo Imaz",
    job: "Software Developer",
    img_path: "/assets/contributors/img/inigo.jpg",
    github_url: "https://github.com/inimaz",
  },
  {
    name: "Luis Blanche",
    job: "Machine Learning Engineer",
    img_path: "https://avatars.githubusercontent.com/u/18741447",
    github_url: "https://github.com/LuisBlanche",
  },
  {
    name: "Patrick",
    job: "Software developer",
    img_path: "https://avatars.githubusercontent.com/u/6672288",
    github_url: "https://github.com/prmths128",
  },
  {
    name: "Samuel Rincé",
    job: "AI Engineer",
    img_path: "https://avatars.githubusercontent.com/u/35747570",
    github_url: "https://github.com/samuelrince",
  },
  {
    name: "Claire Saignol",
    job: "Sustainability Manager",
    img_path: "https://avatars.githubusercontent.com/u/280668843",
    github_url: "https://github.com/Claire6675",
  },
  {
    name: "Adrien Banse",
    job: "PhD Student",
    img_path: "https://avatars.githubusercontent.com/u/45042779",
    github_url: "https://github.com/adrienbanse",
  },
  {
    name: "Valentin Defour",
    job: "Data Scientist",
    img_path: "https://avatars.githubusercontent.com/u/12235628",
  },
  {
    name: "Vincent Duarte",
    job: "Software Engineer",
    img_path: "https://avatars.githubusercontent.com/u/46927767",
    github_url: "https://github.com/DuarteVi",
  },
  {
    name: "David Berenstein",
    job: "ML & DevRel",
    img_path: "https://avatars.githubusercontent.com/u/25269220",
    github_url: "https://github.com/davidberenstein1957",
  },
];
