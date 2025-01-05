const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO at TechCorp",
      image: "/images/img-profile.jpg",
      feedback:
        "The services provided were exceptional. I couldn't have asked for a better experience. Highly recommended!",
    },
    {
      name: "Jane Smith",
      position: "Marketing Manager at Creative Solutions",
      image: "/images/img-profile.jpg",
      feedback:
        "Working with this team was a pleasure. Their dedication and expertise exceeded our expectations!",
    },
    {
      name: "Michael Brown",
      position: "Freelancer",
      image: "/images/img-profile.jpg",
      feedback:
        "Fantastic work! The project was delivered on time and with great attention to detail. Will definitely work together again.",
    },
  ];

  return (
    <div className="space-y-8 py-8 px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl font-bold text-center">Testimonials</h1>
      <p className="text-center text-gray-600">
        Hear what our clients and collaborators have to say about us.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <div className="p-6 space-y-4 text-center">
              {/* Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto object-cover"
              />
              {/* Feedback */}
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              {/* Client Details */}
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
