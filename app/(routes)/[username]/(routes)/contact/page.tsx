const UserContactPage = () => {
  const contactInfo = {
    email: "gregory@example.com",
    phone: "+1 (123) 456-7890",
    address: "123 Developer Lane, Tech City, USA",
  };

  const usefulLinks = [
    {
      label: "Personal Website",
      link: "https://example.com",
      icon: "🌐",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/gregory",
      icon: "🔗",
    },
    {
      label: "GitHub",
      link: "https://github.com/gregory",
      icon: "💻",
    },
    {
      label: "Twitter",
      link: "https://twitter.com/gregory",
      icon: "🐦",
    },
  ];

  return (
    <div className="space-y-8 px-4  lg:px-0 py-8">
      {/* Contact Info Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-blue-500 hover:underline"
            >
              {contactInfo.email}
            </a>
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{" "}
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-blue-500 hover:underline"
            >
              {contactInfo.phone}
            </a>
          </p>
          <p>
            <span className="font-semibold">Address:</span>{" "}
            {contactInfo.address}
          </p>
        </div>
      </div>

      {/* Useful Links Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Useful Links</h2>
        <ul className="space-y-4">
          {usefulLinks.map((link, index) => (
            <li key={index} className="flex items-center space-x-3">
              <span className="text-2xl">{link.icon}</span>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-lg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserContactPage;
