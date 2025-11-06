// Import JSON data
import profileData from "../../content/profile.json";
import experiencesData from "../../content/experiences.json";
import projectsData from "../../content/projects.json";
import contactData from "../../content/contact.json";

// Helper function to dynamically import project images
const importProjectImage = (imagePath) => {
  // Extract the filename from the path
  const filename = imagePath.split('/').pop();
  try {
    return new URL(`../assets/projects/${filename}`, import.meta.url).href;
  } catch (e) {
    console.error(`Failed to load image: ${imagePath}`, e);
    return '';
  }
};

// Export profile data
export const HERO_CONTENT = profileData.heroContent;
export const ABOUT_TEXT = profileData.aboutText;

// Export experiences with JSX formatted descriptions
export const EXPERIENCES = experiencesData.map(exp => ({
  ...exp,
  description: (
    <ul className="list-disc pl-5 mb-4 text-neutral-400">
      {exp.description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}));

// Export projects with imported images
export const PROJECTS = projectsData.map(project => ({
  ...project,
  image: importProjectImage(project.image)
}));

// Export contact
export const CONTACT = contactData;
