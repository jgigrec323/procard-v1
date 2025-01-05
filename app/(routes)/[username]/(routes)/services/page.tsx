const ServicesPage = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and fully functional websites tailored to your business needs.",
      price: "Starting at $500",
      image: "/images/img-profile.jpg",
      link: "https://example.com/book-web-dev",
    },
    {
      title: "UI/UX Design",
      description:
        "Crafting user-friendly interfaces and experiences to enhance user engagement.",
      price: "Starting at $300",
      image: "/images/img-profile.jpg",
      link: "https://example.com/book-ui-ux",
    },
    {
      title: "Technical Consultation",
      description:
        "Providing expert advice on web technologies and project strategies.",
      price: "Starting at $100/hour",
      image: "/images/img-profile.jpg",
      link: "https://example.com/book-consultation",
    },
    {
      title: "Content Creation",
      description:
        "Developing high-quality content for blogs, websites, and social media.",
      price: "Custom pricing",
      image: "/images/img-profile.jpg",
      link: "https://example.com/book-content",
    },
  ];

  return (
    <div className="space-y-8 py-8 px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl font-bold text-center">Services</h1>
      <p className="text-center text-gray-600">
        Explore the services I offer to help you achieve your goals.
      </p>
      <div className="space-y-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Section */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full md:w-48 h-48 object-cover rounded-lg"
            />

            {/* Service Info */}
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
              <p className="text-base font-bold text-gray-800">
                {service.price}
              </p>
            </div>

            {/* Book Now Button */}
            <div>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
