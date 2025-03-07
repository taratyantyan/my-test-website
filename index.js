"use client";
import React from "react";

function MainComponent() {
  const [activeSection, setActiveSection] = React.useState("home");
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="flex flex-col items-center">
            <div className="relative w-full h-[70vh] mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
              <img
                src="/hero-image.jpg"
                alt="Takako Oda's striking artwork"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair text-white">
                  Takako Oda
                </h1>
                <p className="text-xl md:text-2xl mb-6 font-lato text-white">
                  Visionary Artist | Innovative Photographer | Creative Director
                </p>
                <a
                  href="#portfolio"
                  className="bg-[#8B0000] text-white px-6 py-3 rounded font-lato hover:bg-[#600000] transition duration-300"
                  onClick={() => setActiveSection("portfolio")}
                >
                  Explore My Work
                </a>
              </div>
            </div>
            <div className="max-w-4xl text-center">
              <p className="text-lg mb-8 font-lato">
                Pushing the boundaries of visual art and creating captivating
                experiences that blend fashion, photography, and innovative
                concepts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#services"
                  className="bg-[#1a1a1a] text-white px-4 py-2 rounded font-lato hover:bg-[#333] transition duration-300"
                  onClick={() => setActiveSection("services")}
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="border border-[#8B0000] text-[#8B0000] px-4 py-2 rounded font-lato hover:bg-[#8B0000] hover:text-white transition duration-300"
                  onClick={() => setActiveSection("contact")}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        );
      case "portfolio":
        return (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">
              Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {["Fashion", "Art", "Commercial"].map((category, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <img
                    src={`/portfolio-${index + 1}.jpg`}
                    alt={`${category} work by Takako Oda`}
                    className="w-full h-80 object-cover transition duration-300 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-6 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end">
                    <h3 className="text-2xl font-semibold font-playfair mb-2">
                      {category}
                    </h3>
                    <p className="text-sm font-lato">
                      Explore {category.toLowerCase()} projects
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 font-playfair text-center">
                Expertise
              </h3>
              <div className="w-full h-80 bg-[#2a2a2a] rounded-lg p-4">
                <canvas id="skillsChart"></canvas>
              </div>
            </div>
          </div>
        );
      case "services":
        return (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">
              Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-lato">
              {[
                {
                  title: "Fashion Photography",
                  icon: "fa-camera-retro",
                  items: [
                    "Editorial Shoots",
                    "Lookbooks",
                    "Campaign Photography",
                  ],
                },
                {
                  title: "Art Direction",
                  icon: "fa-paint-brush",
                  items: [
                    "Concept Development",
                    "Visual Storytelling",
                    "Set Design",
                  ],
                },
                {
                  title: "Commercial Projects",
                  icon: "fa-briefcase",
                  items: [
                    "Brand Collaborations",
                    "Product Photography",
                    "Advertising Campaigns",
                  ],
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg transition duration-300 hover:transform hover:scale-105"
                >
                  <i
                    className={`fas ${service.icon} text-4xl mb-4 text-[#8B0000]`}
                  ></i>
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <i className="fas fa-check text-[#8B0000] mr-2"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href="#contact"
                className="bg-[#8B0000] text-white px-6 py-3 rounded font-lato hover:bg-[#600000] transition duration-300"
                onClick={() => setActiveSection("contact")}
              >
                Request a Quote
              </a>
            </div>
          </div>
        );
      case "blog":
        return (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">
              Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "The Art of Visual Storytelling",
                  date: "May 15, 2023",
                  excerpt:
                    "Exploring the power of imagery in conveying narratives...",
                },
                {
                  title: "Behind the Scenes: Fashion Week",
                  date: "April 28, 2023",
                  excerpt:
                    "A glimpse into the chaotic beauty of fashion week...",
                },
                {
                  title: "Innovating with Light: New Techniques",
                  date: "April 10, 2023",
                  excerpt:
                    "Discovering novel ways to manipulate light in photography...",
                },
                {
                  title: "The Intersection of Art and Commerce",
                  date: "March 22, 2023",
                  excerpt:
                    "Balancing artistic integrity with commercial success...",
                },
              ].map((post, index) => (
                <div
                  key={index}
                  className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg transition duration-300 hover:transform hover:scale-105"
                >
                  <img
                    src={`/blog-${index + 1}.jpg`}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 font-playfair">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 font-lato">
                      {post.date}
                    </p>
                    <p className="mb-4 font-lato">{post.excerpt}</p>
                    <a
                      href="#"
                      className="text-[#8B0000] hover:underline font-lato"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="max-w-2xl mx-auto font-lato">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#8B0000] bg-[#2a2a2a] text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#8B0000] bg-[#2a2a2a] text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#8B0000] bg-[#2a2a2a] text-white"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="collaboration">Collaboration Inquiry</option>
                  <option value="booking">Booking Request</option>
                  <option value="question">General Question</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#8B0000] bg-[#2a2a2a] text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#8B0000] text-white px-6 py-3 rounded hover:bg-[#600000] transition duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        );
      case "shop":
        return (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">
              Shop
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Limited Edition Print",
                  description: "High-quality print of original artwork",
                  price: "$250",
                },
                {
                  title: "Exclusive Photo Book",
                  description: "Collection of Takako's best photographs",
                  price: "$75",
                },
                {
                  title: "Original Artwork",
                  description: "One-of-a-kind piece by Takako Oda",
                  price: "$1,500",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg transition duration-300 hover:transform hover:scale-105"
                >
                  <img
                    src={`/product-${index + 1}.jpg`}
                    alt={product.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 font-playfair">
                      {product.title}
                    </h3>
                    <p className="mb-4 text-gray-300 font-lato">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-[#8B0000]">
                        {product.price}
                      </span>
                      <button className="bg-[#8B0000] text-white px-4 py-2 rounded hover:bg-[#600000] transition duration-300 font-lato">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  React.useEffect(() => {
    if (activeSection === "portfolio") {
      const ctx = document.getElementById("skillsChart").getContext("2d");
      new Chart(ctx, {
        type: "radar",
        data: {
          labels: [
            "Photography",
            "Art Direction",
            "Concept Development",
            "Visual Storytelling",
            "Fashion",
            "Digital Editing",
          ],
          datasets: [
            {
              label: "Expertise",
              data: [95, 90, 85, 92, 88, 80],
              backgroundColor: "rgba(139, 0, 0, 0.2)",
              borderColor: "rgba(139, 0, 0, 1)",
              pointBackgroundColor: "rgba(139, 0, 0, 1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(139, 0, 0, 1)",
            },
          ],
        },
        options: {
          scale: {
            ticks: {
              beginAtZero: true,
              max: 100,
              min: 0,
              stepSize: 20,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <nav className="bg-black p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-bold font-playfair"
            onClick={() => setActiveSection("home")}
          >
            TO
          </a>
          <div className="md:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-white"
            >
              <i
                className={`fas ${showMobileMenu ? "fa-times" : "fa-bars"}`}
              ></i>
            </button>
          </div>
          <ul
            className={`${
              showMobileMenu ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-black md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6 font-lato`}
          >
            {["Home", "Portfolio", "Services", "Blog", "Shop", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#8B0000] transition duration-300"
                    onClick={() => {
                      setActiveSection(item.toLowerCase());
                      setShowMobileMenu(false);
                    }}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-12">{renderSection()}</main>
      <footer className="bg-black p-8 text-center font-lato">
        <div className="mb-6">
          <a
            href="https://www.instagram.com/takako_oda/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl mx-3 hover:text-[#8B0000"
          />
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;
