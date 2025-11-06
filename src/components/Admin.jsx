import { useState, useEffect } from 'react';
import profileData from '../../content/profile.json';
import socialData from '../../content/social.json';
import technologiesData from '../../content/technologies.json';
import experiencesData from '../../content/experiences.json';
import projectsData from '../../content/projects.json';
import contactData from '../../content/contact.json';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // State for all content
  const [profile, setProfile] = useState(profileData);
  const [social, setSocial] = useState(socialData);
  const [technologies, setTechnologies] = useState(technologiesData);
  const [experiences, setExperiences] = useState(experiencesData);
  const [projects, setProjects] = useState(projectsData);
  const [contact, setContact] = useState(contactData);

  // Simple password check (change this to your preferred password)
  const ADMIN_PASSWORD = 'admin123';

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
    } else {
      alert('Incorrect password!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
    setPassword('');
  };

  useEffect(() => {
    // Check if already authenticated
    if (localStorage.getItem('adminAuth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const downloadJSON = (data, filename) => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadAllJSON = () => {
    downloadJSON(profile, 'profile.json');
    downloadJSON(social, 'social.json');
    downloadJSON(technologies, 'technologies.json');
    downloadJSON(experiences, 'experiences.json');
    downloadJSON(projects, 'projects.json');
    downloadJSON(contact, 'contact.json');
    alert('All JSON files downloaded! Please commit them to your repository.');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-950">
        <div className="bg-neutral-900 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full p-3 mb-4 rounded bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded transition duration-200"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-neutral-400 text-center">
            Default password: admin123
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Portfolio Admin Panel</h1>
          <div className="space-x-4">
            <button
              onClick={downloadAllJSON}
              className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-semibold transition duration-200"
            >
              Download All JSON
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded font-semibold transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 border-b border-neutral-800">
          {['profile', 'social', 'technologies', 'experiences', 'projects', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold capitalize transition duration-200 ${
                activeTab === tab
                  ? 'border-b-2 border-purple-500 text-purple-500'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-neutral-900 p-6 rounded-lg">
          {activeTab === 'profile' && (
            <ProfileForm profile={profile} setProfile={setProfile} downloadJSON={downloadJSON} />
          )}
          {activeTab === 'social' && (
            <SocialForm social={social} setSocial={setSocial} downloadJSON={downloadJSON} />
          )}
          {activeTab === 'technologies' && (
            <TechnologiesForm technologies={technologies} setTechnologies={setTechnologies} downloadJSON={downloadJSON} />
          )}
          {activeTab === 'experiences' && (
            <ExperiencesForm experiences={experiences} setExperiences={setExperiences} downloadJSON={downloadJSON} />
          )}
          {activeTab === 'projects' && (
            <ProjectsForm projects={projects} setProjects={setProjects} downloadJSON={downloadJSON} />
          )}
          {activeTab === 'contact' && (
            <ContactForm contact={contact} setContact={setContact} downloadJSON={downloadJSON} />
          )}
        </div>
      </div>
    </div>
  );
};

// Profile Form Component
const ProfileForm = ({ profile, setProfile, downloadJSON }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
    <div>
      <label className="block mb-2 font-semibold">Name</label>
      <input
        type="text"
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-purple-500"
      />
    </div>
    <div>
      <label className="block mb-2 font-semibold">Title</label>
      <input
        type="text"
        value={profile.title}
        onChange={(e) => setProfile({ ...profile, title: e.target.value })}
        className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-purple-500"
      />
    </div>
    <div>
      <label className="block mb-2 font-semibold">Hero Content</label>
      <textarea
        rows="4"
        value={profile.heroContent}
        onChange={(e) => setProfile({ ...profile, heroContent: e.target.value })}
        className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-purple-500"
      />
    </div>
    <div>
      <label className="block mb-2 font-semibold">About Text</label>
      <textarea
        rows="6"
        value={profile.aboutText}
        onChange={(e) => setProfile({ ...profile, aboutText: e.target.value })}
        className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-purple-500"
      />
    </div>
    <button
      onClick={() => downloadJSON(profile, 'profile.json')}
      className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded font-semibold transition duration-200"
    >
      Download profile.json
    </button>
  </div>
);

// Social Form Component
const SocialForm = ({ social, setSocial, downloadJSON }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold mb-4">Social Media Links</h2>
    <div>
      <label className="block mb-2 font-semibold">LinkedIn URL</label>
      <input
        type="url"
        value={social.linkedin}
        onChange={(e) => setSocial({ ...social, linkedin: e.target.value })}
        className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-purple-500"
      />
    </div>
    <div>
      <label className="block mb-2 font-semibold">GitHub URL</label>
      <input
        type="url"
        value={social.github}
        onChange={(e) => setSocial({ ...social, github: e.target.value })}
        className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-purple-500"
      />
    </div>
    <div>
      <label className="block mb-2 font-semibold">Twitter/X URL</label>
      <input
        type="url"
        value={social.twitter}
        onChange={(e) => setSocial({ ...social, twitter: e.target.value })}
        className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-purple-500"
      />
    </div>
    <div>
      <label className="block mb-2 font-semibold">Instagram URL</label>
      <input
        type="url"
        value={social.instagram}
        onChange={(e) => setSocial({ ...social, instagram: e.target.value })}
        className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-purple-500"
      />
    </div>
    <button
      onClick={() => downloadJSON(social, 'social.json')}
      className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded font-semibold transition duration-200"
    >
      Download social.json
    </button>
  </div>
);

// Technologies Form Component
const TechnologiesForm = ({ technologies, setTechnologies, downloadJSON }) => {
  const updateTech = (index, field, value) => {
    const updated = [...technologies];
    updated[index][field] = field === 'duration' ? parseFloat(value) : value;
    setTechnologies(updated);
  };

  const addTech = () => {
    setTechnologies([...technologies, { name: '', icon: '', color: '', duration: 2.5 }]);
  };

  const removeTech = (index) => {
    setTechnologies(technologies.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Technologies</h2>
      {technologies.map((tech, index) => (
        <div key={index} className="bg-neutral-800 p-4 rounded space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Technology {index + 1}</h3>
            <button
              onClick={() => removeTech(index)}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm transition duration-200"
            >
              Remove
            </button>
          </div>
          <input
            type="text"
            placeholder="Name (e.g., React)"
            value={tech.name}
            onChange={(e) => updateTech(index, 'name', e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            placeholder="Icon (e.g., RiReactjsLine)"
            value={tech.icon}
            onChange={(e) => updateTech(index, 'icon', e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            placeholder="Color (e.g., text-cyan-400)"
            value={tech.color}
            onChange={(e) => updateTech(index, 'color', e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="number"
            step="0.5"
            placeholder="Animation Duration"
            value={tech.duration}
            onChange={(e) => updateTech(index, 'duration', e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:outline-none focus:border-purple-500"
          />
        </div>
      ))}
      <button
        onClick={addTech}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold transition duration-200"
      >
        Add Technology
      </button>
      <button
        onClick={() => downloadJSON(technologies, 'technologies.json')}
        className="ml-4 bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded font-semibold transition duration-200"
      >
        Download technologies.json
      </button>
    </div>
  );
};

// Experiences Form Component
const ExperiencesForm = ({ experiences, setExperiences, downloadJSON }) => {
  const updateExp = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  };

  const updateDescription = (expIndex, descIndex, value) => {
    const updated = [...experiences];
    updated[expIndex].description[descIndex] = value;
    setExperiences(updated);
  };

  const addDescription = (expIndex) => {
    const updated = [...experiences];
    updated[expIndex].description.push('');
    setExperiences(updated);
  };

  const removeDescription = (expIndex, descIndex) => {
    const updated = [...experiences];
    updated[expIndex].description = updated[expIndex].description.filter((_, i) => i !== descIndex);
    setExperiences(updated);
  };

  const addExperience = () => {
    setExperiences([...experiences, {
      year: '',
      role: '',
      company: '',
      description: [''],
      technologies: []
    }]);
  };

  const removeExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Work Experiences</h2>
      {experiences.map((exp, expIndex) => (
        <div key={expIndex} className="bg-neutral-800 p-4 rounded space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Experience {expIndex + 1}</h3>
            <button
              onClick={() => removeExperience(expIndex)}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm transition duration-200"
            >
              Remove
            </button>
          </div>
          <input
            type="text"
            placeholder="Year (e.g., August 2023 - Present)"
            value={exp.year}
            onChange={(e) => updateExp(expIndex, 'year', e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            placeholder="Role"
            value={exp.role}
            onChange={(e) => updateExp(expIndex, 'role', e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => updateExp(expIndex, 'company', e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:outline-none focus:border-purple-500"
          />
          <div>
            <label className="block mb-2 font-semibold text-sm">Description Points</label>
            {exp.description.map((desc, descIndex) => (
              <div key={descIndex} className="flex gap-2 mb-2">
                <textarea
                  rows="2"
                  placeholder="Description point"
                  value={desc}
                  onChange={(e) => updateDescription(expIndex, descIndex, e.target.value)}
                  className="flex-1 p-2 rounded bg-neutral-700 border border-neutral-600 focus:outline-none focus:border-purple-500"
                />
                <button
                  onClick={() => removeDescription(expIndex, descIndex)}
                  className="bg-red-600 hover:bg-red-700 px-3 rounded text-sm transition duration-200"
                >
                  ×
                </button>
              </div>
            ))}
            <button
              onClick={() => addDescription(expIndex)}
              className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm transition duration-200"
            >
              Add Point
            </button>
          </div>
          <input
            type="text"
            placeholder="Technologies (comma-separated)"
            value={exp.technologies.join(', ')}
            onChange={(e) => updateExp(expIndex, 'technologies', e.target.value.split(',').map(t => t.trim()))}
            className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:outline-none focus:border-purple-500"
          />
        </div>
      ))}
      <button
        onClick={addExperience}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold transition duration-200"
      >
        Add Experience
      </button>
      <button
        onClick={() => downloadJSON(experiences, 'experiences.json')}
        className="ml-4 bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded font-semibold transition duration-200"
      >
        Download experiences.json
      </button>
    </div>
  );
};

// Projects Form Component
const ProjectsForm = ({ projects, setProjects, downloadJSON }) => {
  const updateProject = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const addProject = () => {
    setProjects([...projects, {
      title: '',
      image: '/src/assets/projects/project-1.jpeg',
      description: '',
      technologies: []
    }]);
  };

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="bg-neutral-800 p-4 rounded space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Project {index + 1}</h3>
            <button
              onClick={() => removeProject(index)}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm transition duration-200"
            >
              Remove
            </button>
          </div>
          <input
            type="text"
            placeholder="Project Title"
            value={project.title}
            onChange={(e) => updateProject(index, 'title', e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            placeholder="Image Path (e.g., /src/assets/projects/project-1.jpeg)"
            value={project.image}
            onChange={(e) => updateProject(index, 'image', e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            rows="3"
            placeholder="Description"
            value={project.description}
            onChange={(e) => updateProject(index, 'description', e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            placeholder="Technologies (comma-separated)"
            value={project.technologies.join(', ')}
            onChange={(e) => updateProject(index, 'technologies', e.target.value.split(',').map(t => t.trim()))}
            className="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:outline-none focus:border-purple-500"
          />
        </div>
      ))}
      <button
        onClick={addProject}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold transition duration-200"
      >
        Add Project
      </button>
      <button
        onClick={() => downloadJSON(projects, 'projects.json')}
        className="ml-4 bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded font-semibold transition duration-200"
      >
        Download projects.json
      </button>
    </div>
  );
};

// Contact Form Component
const ContactForm = ({ contact, setContact, downloadJSON }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
    <div>
      <label className="block mb-2 font-semibold">Address</label>
      <input
        type="text"
        value={contact.address}
        onChange={(e) => setContact({ ...contact, address: e.target.value })}
        className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-purple-500"
      />
    </div>
    <div>
      <label className="block mb-2 font-semibold">Phone Number</label>
      <input
        type="text"
        value={contact.phoneNo}
        onChange={(e) => setContact({ ...contact, phoneNo: e.target.value })}
        className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-purple-500"
      />
    </div>
    <div>
      <label className="block mb-2 font-semibold">Email</label>
      <input
        type="email"
        value={contact.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
        className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-purple-500"
      />
    </div>
    <button
      onClick={() => downloadJSON(contact, 'contact.json')}
      className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded font-semibold transition duration-200"
    >
      Download contact.json
    </button>
  </div>
);

export default Admin;
