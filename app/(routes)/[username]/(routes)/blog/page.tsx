const BlogPage = () => {
  const blogPosts = [
    {
      title: "The Importance of Web Design in Business Growth",
      excerpt:
        "Discover how professional web design can significantly impact your business and drive growth.",
      image: "/images/img-profile.jpg",
      date: "January 1, 2025",
      author: "Gregory Sylvain",
      link: "/blog/web-design-growth",
    },
    {
      title: "Top 10 Tools for UI/UX Designers in 2025",
      excerpt:
        "A curated list of essential tools for designers to stay ahead in their craft.",
      image: "/images/img-profile.jpg",
      date: "December 25, 2024",
      author: "Jane Doe",
      link: "/blog/ui-ux-tools-2025",
    },
    {
      title: "How to Build a Responsive Website",
      excerpt:
        "Learn the basics of creating a responsive website that works seamlessly across devices.",
      image: "/images/img-profile.jpg",
      date: "November 30, 2024",
      author: "Michael Brown",
      link: "/blog/responsive-website",
    },
  ];

  return (
    <div className="space-y-8 py-8 px-4 sm:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-6">Blog</h1>
      <p className="text-center text-gray-600 mb-10">
        Explore insights, tips, and trends in web design, development, and more.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="group relative rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            {/* Blog Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity duration-300"
            />

            {/* Blog Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute bottom-0 p-4 text-white space-y-2">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm">{post.excerpt}</p>
              <p className="text-xs text-gray-300">
                {post.date} • {post.author}
              </p>
              <a
                href={post.link}
                className="inline-block mt-2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
