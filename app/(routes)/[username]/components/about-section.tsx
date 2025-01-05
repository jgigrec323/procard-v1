const AboutSection = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="text-gray-700">
          Hi, I'm <span className="font-semibold">John Doe</span>, a{" "}
          <span className="font-semibold">Data Scientist</span> with a passion
          for turning raw data into actionable insights. I thrive on solving
          complex problems and helping businesses make data-driven decisions.
        </p>
      </section>

      {/* Professional Background */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Professional Background</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Senior Data Scientist at ABC Corp (2021–Present)</li>
          <li>Data Analyst at XYZ Analytics (2018–2021)</li>
          <li>Internship: Machine Learning Researcher at DataLab (2017)</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Skills</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md">
            Python
          </span>
          <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md">
            SQL
          </span>
          <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md">
            Machine Learning
          </span>
          <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md">
            Data Visualization
          </span>
          <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md">
            Tableau
          </span>
          <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md">
            TensorFlow
          </span>
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Key Projects</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Developed a predictive analytics model to forecast sales for ABC
            Corp, resulting in a 15% revenue increase.
          </li>
          <li>
            Built a recommendation system for an e-commerce platform, improving
            user engagement by 20%.
          </li>
          <li>
            Conducted sentiment analysis on customer feedback for a leading
            retailer, enabling targeted marketing strategies.
          </li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Certifications</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Google Data Analytics Professional Certificate</li>
          <li>TensorFlow Developer Certificate</li>
          <li>Certified Business Intelligence Professional (CBIP)</li>
        </ul>
      </section>

      {/* Education */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Education</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Master’s in Data Science, University of ABC (2016–2018)</li>
          <li>Bachelor’s in Computer Science, University of XYZ (2012–2016)</li>
        </ul>
      </section>

      {/* Hobbies */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Hobbies</h3>
        <p className="text-gray-700">
          In my free time, I enjoy hiking, reading about AI advancements, and
          exploring new cuisines.
        </p>
      </section>

      {/* Social Links */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Connect with Me</h3>
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          <a
            href="mailto:johndoe@example.com"
            className="text-blue-500 hover:underline"
          >
            Email
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
