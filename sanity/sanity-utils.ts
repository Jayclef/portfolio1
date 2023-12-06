import { JobType } from "@/types/Job";
import { Profile } from "@/types/Profile";
import { contactType } from "@/types/contact";
import { ProjectType } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProfile(): Promise<Profile[]> {
  const client = createClient({
    projectId: "u6sew76k",
    dataset: "production",
    apiVersion: "2023-12-04",
  });
  return client.fetch(
    groq`*[_type == "profile"]{
        _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
}

export async function getJob(): Promise<JobType[]> {
  const client = createClient({
    projectId: "u6sew76k",
    dataset: "production",
    apiVersion: "2023-12-04",
  });
  return client.fetch(
    groq`*[_type == "job"]{
      _id,
      name,
      jobTitle,
      "logo": logo.asset->url,
      url,
      description,
      startDate,
      endDate,
    }`
  );
}

export async function getProjects(): Promise<ProjectType[]> {
  const client = createClient({
    projectId: "u6sew76k",
    dataset: "production",
    apiVersion: "2023-12-04",
  });
  return client.fetch(
    groq`*[_type == "project"]{
      _id, 
      name,
      "slug": slug.current,
      tagline,
      "logo": logo.asset->url,
    }`
  );
}
export async function getSingleProject(slug: string) {
  const client = createClient({
    projectId: "u6sew76k",
    dataset: "production",
    apiVersion: "2023-12-04",
  });
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      coverImage { alt, "image": asset->url },
      tagline,
      description
    }`,
    { slug }
  );
}

export async function getContact(){
  const client = createClient({
    projectId: "u6sew76k",
    dataset: "production",
    apiVersion: "2023-12-04",
  });
  //  return client.fetch(
  //    groq`*[_type == "contact"]{
  //     _id, 
  //     name,
  //     email: 
  //     message,
     
  //   }`
  //  );
}
