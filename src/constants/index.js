import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Welcome to my portfolio! I am a 4th-year B.Tech in Computer Science student with a strong passion for software engineering, data science, and AI. My journey has been driven by a fascination with the transformative power of technology, particularly in machine learning, data science and generative AI. I am excited about the possibilities in these fields and eager to contribute to innovative solutions.
`;

export const ABOUT_TEXT = `I'm a 4th-year B.Tech in Computer Science student with a passion for harnessing technology to drive innovation. My academic focus is on software engineering, data science, and artificial intelligence, where I specialize in Python, C++, and JavaScript. I am also proficient with technologies like TensorFlow, LangChain, and Hugging Face.

I am dedicated to applying my skills to solve complex problems and create impactful solutions. My work often involves leveraging machine learning and AI to tackle real-world challenges and improve systems and processes.

I am excited about the opportunities in these fields and am always eager to explore new technologies and methodologies. Feel free to browse my portfolio and connect with me—I'd love to discuss how we can collaborate on innovative projects!`;

export const EXPERIENCES = [
  // {
  //   year: "2023 - Present",
  //   role: "Senior Full Stack Developer",
  //   company: "Google Inc.",
  //   description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
  //   technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  // },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Abhinav Airachia",
  phoneNo: "+91 6388 634 755 ",
  email: "abhinav8air@gmail.com",
};

export const CERTIFICATIONS = [
  {
    title: "Crash Course on Python",
    image: "src/assets/certificates/Google Crash Course on Python Cert.png",
    link: "https://coursera.org/share/88d39b22e827b793091f5dc300a8bbac" // URL to the certification
  },
  {
    title: "Fundamentals of Deep Learning",
    image: "src/assets/certificates/NVIDIA Fundamentals of Deep Learning Cert.png",
    link: "https://learn.nvidia.com/certificates?id=QbMuArd_Sd-0L1RZLZ58JQ" // URL to the certification
  },
  {
    title: "What is Data Science?",
    image: "src/assets/certificates/What is Data Science Cert.png",
    link: "https://coursera.org/share/f535c76832b41bfa81b6c276cf528c71" // URL to the certification
  },
  {
    title: "Neural Networks and Deep Learning",
    image: "src/assets/certificates/Neural Networks Cert.png",
    link: "https://coursera.org/share/4b662e2e79c41aa444dc51a115a2ccee" // URL to the certification
  },
  {
    title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    image: "src/assets/certificates/Improving Neural Networks Cert.png",
    link: "https://coursera.org/share/a07d4c4b8abe8e9c0d0a2a614010d812" // URL to the certification
  },
  {
    title: "Structuring Machine Learning Projects",
    image: "src/assets/certificates/Structuring Machine Learning Cert.png",
    link: "https://coursera.org/share/541f0d97e76a5ad69a3a6107eb60c6ba" // URL to the certification
  },
  {
    title: "Convolutional Neural Networks",
    image: "src/assets/certificates/CNN Cert.png",
    link: "https://coursera.org/share/87817687dcfaa951055c2a8c40b4aea3" // URL to the certification
  },
  {
    title: "Sequence Models",
    image: "src/assets/certificates/Sequence Models Cert.png",
    link: "https://coursera.org/share/1a27a2b756eaa4a507c3c4c5fccdddd0" // URL to the certification
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    image: "src/assets/certificates/Supervised Learning Cert.png",
    link: "https://coursera.org/share/8ff7738cfdf18435e46e768ece35d1e0" // URL to the certification
  },
  {
    title: "Advanced Learning Algorithms",
    image: "src/assets/certificates/Advanced Learning Algorithms Cert.png",
    link: "https://coursera.org/share/4698dc80ae568746abc0a5e3c4c89616" // URL to the certification
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    image: "src/assets/certificates/Unsupervised Learning, Recommenders, Reinforcement Learning Cert.png",
    link: "https://coursera.org/share/b19009dd8b27919033c5793827c99e8a" // URL to the certification
  },
  {
    title: "Object Localization with TensorFlow",
    image: "src/assets/certificates/Object Localization Cert.png",
    link: "https://coursera.org/share/24d2dc7862bd6e09dd455967e8731f67" // URL to the certification
  },
  {
    title: "Azure: Create a Virtual Machine and Deploy a Web Server",
    image: "src/assets/certificates/Azure Create And Deploy Virtual Machine Cert.png",
    link: "https://coursera.org/share/2da18c0493e7a841237b7bcca15e5256" // URL to the certification
  },
  // Add more certifications here
];

export const SPECIALIZATIONS = [
  {
    title: "Deep Learning Specialization",
    image: "src/assets/certificates/Deep Learning Cert.png",
    link: "https://coursera.org/share/7f2ce5c29a5bda77ddfa6cfe1eeea106" // URL to the certification
  },
  {
    title: "Machine Learning Specialization",
    image: "src/assets/certificates/Machine Learning Specialization.png",
    link: "https://coursera.org/share/46a9d3a381b02d5164d437bbd1040d56", // URL to the certification
  },
  // Add more specializations here
];


export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "JSS Academy of Technical Education, Noida",
    year: "2021-2025",
    // details: "Relevant coursework or honors"
  },
  {
    degree: "XII - Central Board of Secondary Education",
    institution: "The Aryans School, Jhansi",
    year: "2019-2021",
    // details: "Relevant coursework or honors"
  },
  {
    degree: "X - Central Board of Secondary Education",
    institution: "Jai Academy, Jhansi",
    year: "2018-2019",
    // details: "Relevant coursework or honors"
  },
  // Add more education entries here
];

export const SKILLS = {
  Languages: [
    { name: 'Python' },
    { name: 'C++' },
    { name: 'R' },
    { name: 'C#' },
    { name: 'C' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'SQL' }
  ],
  Frameworks_and_Technologies: [
    { name: 'TensorFlow' },
    { name: 'LangChain' },
    { name: 'Flask' },
    { name: 'OpenAI' },
    { name: 'Hugging Face' },
    { name: 'Matplotlib' },
    { name: 'Seaborn' },
    { name: 'numpy' },
    { name: 'Pandas' },
    { name: 'React' },
    { name: 'OpenCV' },
    { name: 'Unity Engine'}
  ],
  Concepts: [
    { name: 'Artificial Intelligence' },
    { name: 'Machine Learning' },
    { name: 'Generative AI' },
    { name: 'Data Analysis' },
    { name: 'Databases'},
    { name: 'Computer Vision' },
    { name: 'Natural Language Processing' },
    { name: 'Neural Networks' },
    { name: 'APIs' },
    { name: 'Operating Systems' },
    { name: 'Data Structures and Algorithms' }
  ]
};






