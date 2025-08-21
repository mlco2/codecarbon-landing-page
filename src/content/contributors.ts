import { z } from "astro:content";

const ContributorSchema = z.object({
  name: z.string(),
  job: z.string(),
  organisation: z.string().optional(),
  img_path: z.string(),
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
        img_path: "./assets/contributors/img/someone.jpeg"
    },
*/

export const contributors: Contributor[] = [
  {
    name: "Benoît Courty",
    job: "Data Scientist",
    organisation: "",
    img_path: "/assets/contributors/img/Benoit_Courty.jpg",
  },
  {
    name: "Amine Saboni",
    job: "Deep Learning Engineer",
    organisation: "",
    img_path: "/assets/contributors/img/Amine_Saboni.jpg",
  },
  {
    name: "Sasha Luccioni",
    job: "Researcher",
    organisation: "Hugging Face",
    img_path: "/assets/contributors/img/sascha.jpg",
  },
  {
    name: "Iñigo Imaz",
    job: "Software Developer",
    organisation: "",
    img_path: "/assets/contributors/img/inigo.jpg",
  },
  // {
  //   name: "Luis Blanche",
  //   job: "Machine Learning Engineer",
  //   organisation: "",
  //   img_path: "",
  // },
  // {
  //   name: "Patrick",
  //   job: "Software developer",
  //   organisation: "",
  //   img_path: "",
  // },
];
