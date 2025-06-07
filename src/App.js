import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Bars3Icon, XMarkIcon, CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import './App.css';

// NavLink Component
const NavLink = ({ href, title }) => {
  return (
    <a
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white relative group"
    >
      {title}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

// MenuOverlay Component
const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

// TabButton Component
const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={{
          default: { width: 0 },
          active: { width: "calc(100% - 0.75rem)" },
        }}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

// ProjectTag Component
const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

// ProjectCard Component
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
      <div
        className="h-52 md:h-72 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {gitUrl && (
            <a
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transform hover:scale-110 transition-transform duration-300"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </a>
          )}
          <a
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transform hover:scale-110 transition-transform duration-300"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </a>
        </div>
      </div>
      <div className="p-6 bg-gradient-to-br from-[#181818] to-[#1a1a1a]">
        <h5 className="text-xl font-semibold mb-2 text-white bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{title}</h5>
        <p className="text-[#ADB7BE] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="lg:py-16 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-red-900/20 backdrop-blur-3xl"></div>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Sundar Anbu",
                1000,
                "Full Stack Developer",
                1000,
                "Cloud Architect",
                1000,
                "Mobile Developer",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I'm a passionate developer specializing in building exceptional digital experiences.
            Currently focused on creating responsive full-stack web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 w-full sm:w-fit rounded-full border border-[#ADB7BE] text-white font-medium hover:bg-[#ADB7BE] hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              See My Work
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://storageforsundar.blob.core.windows.net/file1/Sundar Anbu (2).pdf"
              className="px-6 py-3 w-full sm:w-fit rounded-full border border-white/20 hover:bg-white/10 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <span>Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="hero-img-container w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src="https://storageforsundar.blob.core.windows.net/file1/sundar_anbu.jpg"
              alt="hero"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2 grid grid-cols-2 gap-2">
          <li>React/Next.js</li>
          <li>Node.js/Express</li>
          <li>JavaScript/TypeScript</li>
          <li>Flutter/Dart</li>
          <li>PostgreSQL/MongoDB</li>
          <li>Docker/Kubernetes</li>
          <li>REST/GraphQL APIs</li>
          <li>CI/CD Pipelines</li>
          <li>Salesforce Development</li>
          <li>Agile Methodologies</li>
          <li>AWS (App Runner, S3)</li>
          <li>GCP (Cloud Run, VM, Storage)</li>
          <li>Azure (Kubernetes, PostgreSQL)</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2 space-y-4">
          <li>
            <div className="font-semibold">NTTF, Bangalore</div>
            <div className="text-sm text-gray-400">Advanced Diploma in Software Engineering</div>
            <div className="text-sm text-gray-400">2018 - 2021</div>
          </li>
          <li>
            <div className="font-semibold">Algappa University, Hosur</div>
            <div className="text-sm text-gray-400">Bachelor of Computer Applications</div>
            <div className="text-sm text-gray-400">2019 - 2022</div>
          </li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2 space-y-4">
          <li>
            <div className="font-semibold">Scaler Academy</div>
            <div className="text-sm text-gray-400">Advanced Software Development Program</div>
          </li>
          <li>
            <div className="font-semibold">AWS Certified Developer</div>
            <div className="text-sm text-gray-400">Associate Level Certification</div>
          </li>
          <li>
            <div className="font-semibold">Salesforce Platform Developer I</div>
            <div className="text-sm text-gray-400">Certified Developer</div>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img 
          src="https://storageforsundar.blob.core.windows.net/file1/about-image.png" 
          alt="Developer workspace"
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full max-w-[500px] h-auto"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">About Me</h2>
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
            With over 4 years of experience in full-stack development, I specialize in building robust and scalable web applications. My expertise spans across modern JavaScript frameworks, cloud technologies, and enterprise solutions including Salesforce development. I'm passionate about clean code, performance optimization, and creating intuitive user interfaces. Currently focused on cloud-native applications and microservices architecture while continuously learning new technologies.
          </p>
          <div className="flex flex-row justify-start mt-8 gap-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8 bg-gray-900 rounded-lg p-4 shadow-xl">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const projectsData = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "Modern portfolio website built with Next.js and TailwindCSS showcasing my professional journey and technical expertise.",
      image: "/images/projects/portfolio.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/SundarAnbu18/portfolio",
      previewUrl: "https://sundaranbu.com/"
    },
    {
      id: 2,
      title: "Equios Platform",
      description: "Enterprise SaaS platform for business management and operations optimization with real-time analytics.",
      image: "/images/projects/equios.png",
      tag: ["All", "Web"],
      previewUrl: "https://www.equios.co/"
    },
    {
      id: 3,
      title: "ZipZap Website",
      description: "Food delivery platform website with dynamic content management and real-time order tracking capabilities.",
      image: "/images/projects/zipzap-web.png",
      tag: ["All", "Web"],
      previewUrl: "https://www.zipzap.live/"
    },
    {
      id: 4,
      title: "Turbostart Investor Portal",
      description: "Secure investment management platform with portfolio tracking and document management features.",
      image: "/images/projects/turbostart.png",
      tag: ["All", "Web App"],
      previewUrl: "https://portal-investor.turbostart.co/login"
    },
    {
      id: 5,
      title: "NASSCOM Skills Platform",
      description: "Learning management system for skill development and certification tracking.",
      image: "/images/projects/nasscom.png",
      tag: ["All", "Web App"],
      previewUrl: "https://insdms2.sscnasscom.com/"
    },
    {
      id: 6,
      title: "ZipZap Customer App",
      description: "Food delivery mobile application for customers with real-time order tracking and seamless payment integration.",
      image: "/images/projects/zipzap-customer.png",
      tag: ["All", "Mobile"],
      previewUrl: "https://play.google.com/store/apps/details?id=com.zipzap.end_user"
    }
  ];

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/10 to-red-900/10 backdrop-blur-3xl"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-gray-300 text-lg text-center mb-8">
          Here are some of the key projects I've worked on, showcasing my expertise in web and mobile development
        </p>
        
        <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
          <ProjectTag
            onClick={setTag}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={setTag}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={setTag}
            name="Web App"
            isSelected={tag === "Web App"}
          />
          <ProjectTag
            onClick={setTag}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Mobile Apps Section Component
const MobileAppsSection = () => {
  return (
    <section id="mobile-apps" className="relative py-16 px-4 xl:px-16 bg-[#181818]">
      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Mobile Apps
        </h2>
        <p className="text-gray-300 text-lg text-center mb-8">
          Explore my published mobile applications on iOS and Android platforms.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* ZipZap Food App */}
          <div className="bg-[#222] rounded-xl p-8 shadow-lg flex flex-col items-center">
            {/* <img src="/images/projects/zipzap-customer.png" alt="ZipZap Food" className="w-24 h-24 rounded-2xl mb-4 object-cover" /> */}
            <h3 className="text-2xl font-semibold mb-2 text-white">ZipZap Food</h3>
            <p className="text-gray-400 text-center mb-4">Order from your favorite restaurants and manage your orders efficiently.</p>
            <div className="flex gap-4">
              <a
                href="https://apps.apple.com/in/app/zipzap-food/id6639614658"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" />
              </a>
            </div>
          </div>
          {/* Equios App */}
          <div className="bg-[#222] rounded-xl p-8 shadow-lg flex flex-col items-center">
            {/* <img src="/images/projects/equios.png" alt="Equios" className="w-24 h-24 rounded-2xl mb-4 object-cover" /> */}
            <h3 className="text-2xl font-semibold mb-2 text-white">Equios</h3>
            <p className="text-gray-400 text-center mb-4">Track events, analyze performance, and grow your equestrian journey.</p>
            <div className="flex gap-4">
              <a
                href="https://apps.apple.com/in/app/equios/id6746412798"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.equios.equios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10" />
              </a>
            </div>
          </div>
          {/* ZipZap Restaurant Partner App */}
          <div className="bg-[#222] rounded-xl p-8 shadow-lg flex flex-col items-center">
            {/* <img src="/images/projects/zipzap-restaurant.png" alt="ZipZap Restaurant Partner" className="w-24 h-24 rounded-2xl mb-4 object-cover" /> */}
            <h3 className="text-2xl font-semibold mb-2 text-white">ZipZap Restaurant Partner</h3>
            <p className="text-gray-400 text-center mb-4">Streamline your restaurant's operations, manage orders, and boost sales with our all-in-one partner app.</p>
            <div className="flex gap-4">
              <a
                href="https://apps.apple.com/in/app/zipzap-restaurant-partner/id6624302532"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.restaurantpartner.zipzap&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Section Component
const ExperienceSection = () => {
  return (
    <section className="text-white py-16 px-4 xl:px-16" id="experience">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          Professional Experience
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cloud Services Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-gray-800"
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Cloud Architecture</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-medium text-pink-400 mb-2">AWS Expertise</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Designed and implemented serverless architectures using AWS Lambda and API Gateway</li>
                  <li>Managed containerized applications with AWS ECS and EKS</li>
                  <li>Implemented CI/CD pipelines using AWS CodePipeline and CodeBuild</li>
                  <li>Optimized cloud costs and resource utilization</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-pink-400 mb-2">Azure & GCP</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Deployed and managed Kubernetes clusters on Azure AKS</li>
                  <li>Implemented cloud storage solutions using Azure Blob Storage</li>
                  <li>Developed serverless applications using GCP Cloud Functions</li>
                  <li>Managed cloud infrastructure using Infrastructure as Code (IaC)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Flutter Development Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-gray-800"
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Flutter Development</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-medium text-pink-400 mb-2">MVC Architecture</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Implemented clean architecture patterns in Flutter applications</li>
                  <li>Designed scalable state management solutions using Provider and Bloc</li>
                  <li>Created reusable UI components and widget libraries</li>
                  <li>Integrated RESTful APIs and WebSocket connections</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-pink-400 mb-2">Mobile Development</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Developed cross-platform mobile applications for iOS and Android</li>
                  <li>Implemented responsive UI designs with Material Design 3</li>
                  <li>Integrated native device features and third-party SDKs</li>
                  <li>Optimized app performance and reduced bundle size</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-gray-800"
        >
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">Key Achievements</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Reduced cloud infrastructure costs by 40% through optimization and resource management</li>
            <li>Improved mobile app performance by 60% through code optimization and caching strategies</li>
            <li>Successfully migrated legacy applications to cloud-native architecture</li>
            <li>Implemented automated testing pipelines achieving 90% code coverage</li>
            <li>Led cross-functional teams in delivering complex cloud and mobile solutions</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(true);
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-16 md:my-24 py-24 gap-12 md:gap-20 px-4 md:px-16">
      <div className="z-10 flex flex-col justify-center">
        <h5 className="text-xl font-bold text-white my-2 mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Let's Connect
        </h5>
        <p className="text-[#ADB7BE] mb-8 max-w-md">
          I'm currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I'll
          try my best to get back to you!
        </p>
      </div>
      <div>
        {emailSubmitted ? (
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-green-500 text-sm mt-2">
            Email sent successfully!
          </div>
        ) : (
          <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:ring-purple-500 focus:ring-1 transition-all duration-300"
                placeholder="jacob@google.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:ring-purple-500 focus:ring-1 transition-all duration-300"
                placeholder="Just saying hi"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-purple-500 focus:ring-purple-500 focus:ring-1 transition-all duration-300 min-h-[150px]"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-medium py-2.5 px-5 rounded-lg w-full mt-4 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121212]/50"></div>
      <div className="container p-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          Sundar Anbu
        </div>
        <p className="text-slate-600 mt-4 md:mt-0">© {new Date().getFullYear()} Sundar Anbu. All rights reserved.</p>
        <div className="flex flex-wrap gap-6 mt-4 md:mt-0 justify-center">
          <a 
            href="https://github.com/sundaranbu18" 
            className="text-slate-600 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/sundaranbu/" 
            className="text-slate-600 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            LinkedIn
          </a>
          <a 
            href="https://music.youtube.com/channel/sundar_anbu" 
            className="text-slate-600 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            YouTube Music
          </a>
          <a 
            href="https://www.instagram.com/sundaranbu_" 
            className="text-slate-600 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            Instagram
          </a>
          <a 
            href="https://www.snapchat.com/add/sundar.anbu" 
            className="text-slate-600 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            Snapchat
          </a>
          <a 
            href="https://x.com/sundaranbu_" 
            className="text-slate-600 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            X (Twitter)
          </a>
          <a 
            href="https://t.me/+916383522927" 
            className="text-slate-600 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            Telegram
          </a>
          <a 
            href="https://api.whatsapp.com/send/?phone=916383522927&text&type=phone_number&app_absent=0" 
            className="text-slate-600 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            WhatsApp
          </a>
          <a 
            href="mailto:sundaranbu18@gmail.com" 
            className="text-slate-600 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Experience", path: "#experience" },
    { title: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#121212] min-h-screen text-white">
      {/* Navbar */}
      <nav className={`fixed mx-auto top-0 left-0 right-0 z-10 transition-all duration-300 ${
        scrolled ? "bg-[#121212]/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}>
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          <a
            href="/"
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Sundar Anbu
          </a>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-all duration-300"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-all duration-300"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>

      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Mobile Apps Section */}
      <MobileAppsSection />
      
      {/* Experience Section */}
      <ExperienceSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
