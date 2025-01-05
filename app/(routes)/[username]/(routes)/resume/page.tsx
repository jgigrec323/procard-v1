const ResumePage = () => {
  const resumeData = {
    education: [
      {
        degree: "Bachelor of Computer Science",
        institution: "University of Example",
        duration: "2016 - 2020",
        description:
          "Focused on software development, algorithms, and data structures.",
      },
      {
        degree: "High School Diploma",
        institution: "Example High School",
        duration: "2014 - 2016",
        description: "Specialized in mathematics and computer science.",
      },
    ],
    experience: [
      {
        title: "Frontend Developer",
        company: "Tech Solutions Inc.",
        duration: "2021 - Present",
        description:
          "Developing responsive web applications using React, TailwindCSS, and Next.js.",
      },
      {
        title: "Intern Software Engineer",
        company: "Startup Labs",
        duration: "2020 - 2021",
        description:
          "Contributed to mobile application development using React Native.",
      },
    ],
    skills: [
      "JavaScript (React, Next.js)",
      "HTML & CSS",
      "TypeScript",
      "Node.js",
      "UI/UX Design",
      "Git & GitHub",
      "REST APIs & GraphQL",
    ],
    certifications: [
      {
        name: "Certified JavaScript Developer",
        issuer: "Example Certification Authority",
        date: "March 2021",
      },
      {
        name: "React Advanced Certification",
        issuer: "Example Tech Institute",
        date: "August 2022",
      },
    ],
    hobbies: ["Photography", "Traveling", "Open-Source Contributions"],
  };

  return (
    <div className="space-y-10  py-8">
      <h1 className="text-3xl font-bold text-center">Resume</h1>

      {/* Education Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <div className="space-y-6">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-bold">{edu.degree}</h3>
              <p className="text-sm text-gray-600">{edu.institution}</p>
              <p className="text-sm">{edu.duration}</p>
              <p className="text-gray-500">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <div className="space-y-6">
          {resumeData.experience.map((job, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-bold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company}</p>
              <p className="text-sm">{job.duration}</p>
              <p className="text-gray-500">{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {resumeData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Certifications Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Certifications</h2>
        <div className="space-y-6">
          {resumeData.certifications.map((cert, index) => (
            <div key={index}>
              <h3 className="font-bold">{cert.name}</h3>
              <p className="text-sm text-gray-600">{cert.issuer}</p>
              <p className="text-sm">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hobbies Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Hobbies</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {resumeData.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumePage;
