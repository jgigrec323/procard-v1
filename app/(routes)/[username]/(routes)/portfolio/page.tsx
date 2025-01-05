const PortfolioPage = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform for a local store.",
      image: "/images/img-profile.jpg",
      link: "https://example.com",
    },
    {
      title: "Photography Portfolio",
      description: "A portfolio showcasing my landscape photography.",
      image: "/images/img-profile.jpg",
      link: "https://example.com",
    },
    {
      title: "Mobile App Design",
      description: "A mobile app UI/UX design for a food delivery service.",
      image: "/images/img-profile.jpg",
      link: "https://example.com",
    },
  ];

  return (
    <div className="space-y-8 px-4 md:px-0 sm:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
