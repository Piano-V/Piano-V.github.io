import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import googlePythonCert from '../assets/certificates/Google Crash Course on Python Cert.png';
import fundamentalsDeepLearningCert from '../assets/certificates/NVIDIA Fundamentals of Deep Learning Cert.png';
import dataScienceCert from '../assets/certificates/What is Data Science Cert.png';
import neuralNetworksCert from '../assets/certificates/Neural Networks Cert.png';
import improvingNeuralNetworksCert from '../assets/certificates/Improving Neural Networks Cert.png';
import structuringMachineLearningCert from '../assets/certificates/Structuring Machine Learning Cert.png';
import cnnCert from '../assets/certificates/CNN Cert.png';
import sequenceModelsCert from '../assets/certificates/Sequence Models Cert.png';
import supervisedLearningCert from '../assets/certificates/Supervised Learning Cert.png';
import advancedLearningAlgorithmsCert from '../assets/certificates/Advanced Learning Algorithms Cert.png';
import unsupervisedLearningCert from '../assets/certificates/Unsupervised Learning, Recommenders, Reinforcement Learning Cert.png';
import objectLocalizationCert from '../assets/certificates/Object Localization Cert.png';
import azureVMDeployCert from '../assets/certificates/Azure Create And Deploy Virtual Machine Cert.png';

import deepLearningSpecializationCert from '../assets/certificates/Deep Learning Cert.png';
import machineLearningSpecializationCert from '../assets/certificates/Machine Learning Specialization.png';

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
    title: "Tennis Match Analysis System",
    image: project1,
    description:
      "Tennis Match Analysis System that utilizes YOLOv8 for player and ball detection and tracking, enhancing performance analysis",
    technologies: ["Computer Vision", "CNNs", "Python", "YOLOv8", "cv2", "CNNs"],
  },
  {
    title: "Document GPT",
    image: project2,
    description:
      "RAG-GPT (Retrieval-Augmented Generation) based document chatbot using Google Gemini, Langchain, and ChromaDB, enabling real-time document uploads",
    technologies: ["Generative AI", "RAG", "Langchain", "Python", "Hugging Face", "Google Gemini"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, certifications, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React", "JavaScript"],
  },
  {
    title: "SQL Database Talk",
    image: project4,
    description:
      "LLM system for a retail inventory database using Gemini and LangChain, enabling natural language queries to be converted into SQL and executed on a MySQL database",
    technologies: ["RAG", "mySQL", "Python", "Langchain", "Few-Shot Learning"],
  },
  {
    title: "Mall Customer Segmentation",
    image: project4,
    description:
      "Descriptive statistical analysis to understand data distribution. Visualized customer attributes (age, gender, income, spending score) using bar plots, pie charts, histograms, and density plots",
    technologies: ["Python", "Pandas", "Scikit-learn", "matplotlib", "seaborn"],
  },
];

export const CONTACT = {
  address: "Abhinav Airachia",
  phoneNo: "+91 6388 634 755 ",
  email: "abhinav8air@gmail.com",
};

// Certificates
export const CERTIFICATIONS = [
  {
    title: "Crash Course on Python",
    image: googlePythonCert,
    link: "https://coursera.org/share/88d39b22e827b793091f5dc300a8bbac"
  },
  {
    title: "Fundamentals of Deep Learning",
    image: fundamentalsDeepLearningCert,
    link: "https://learn.nvidia.com/certificates?id=QbMuArd_Sd-0L1RZLZ58JQ"
  },
  {
    title: "What is Data Science?",
    image: dataScienceCert,
    link: "https://coursera.org/share/f535c76832b41bfa81b6c276cf528c71"
  },
  {
    title: "Neural Networks and Deep Learning",
    image: neuralNetworksCert,
    link: "https://coursera.org/share/4b662e2e79c41aa444dc51a115a2ccee"
  },
  {
    title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    image: improvingNeuralNetworksCert,
    link: "https://coursera.org/share/a07d4c4b8abe8e9c0d0a2a614010d812"
  },
  {
    title: "Structuring Machine Learning Projects",
    image: structuringMachineLearningCert,
    link: "https://coursera.org/share/541f0d97e76a5ad69a3a6107eb60c6ba"
  },
  {
    title: "Convolutional Neural Networks",
    image: cnnCert,
    link: "https://coursera.org/share/87817687dcfaa951055c2a8c40b4aea3"
  },
  {
    title: "Sequence Models",
    image: sequenceModelsCert,
    link: "https://coursera.org/share/1a27a2b756eaa4a507c3c4c5fccdddd0"
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    image: supervisedLearningCert,
    link: "https://coursera.org/share/8ff7738cfdf18435e46e768ece35d1e0"
  },
  {
    title: "Advanced Learning Algorithms",
    image: advancedLearningAlgorithmsCert,
    link: "https://coursera.org/share/4698dc80ae568746abc0a5e3c4c89616"
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    image: unsupervisedLearningCert,
    link: "https://coursera.org/share/b19009dd8b27919033c5793827c99e8a"
  },
  {
    title: "Object Localization with TensorFlow",
    image: objectLocalizationCert,
    link: "https://coursera.org/share/24d2dc7862bd6e09dd455967e8731f67"
  },
  {
    title: "Azure: Create a Virtual Machine and Deploy a Web Server",
    image: azureVMDeployCert,
    link: "https://coursera.org/share/2da18c0493e7a841237b7bcca15e5256"
  }
  // Add more certifications here
];

// Specializations
export const SPECIALIZATIONS = [
  {
    title: "Deep Learning Specialization",
    image: deepLearningSpecializationCert,
    link: "https://coursera.org/share/7f2ce5c29a5bda77ddfa6cfe1eeea106"
  },
  {
    title: "Machine Learning Specialization",
    image: machineLearningSpecializationCert,
    link: "https://coursera.org/share/46a9d3a381b02d5164d437bbd1040d56"
  }
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
    // { name: 'R' },
    // { name: 'C#' },
    { name: 'C' },
    { name: 'HTML' },
    { name: 'CSS' },
    // { name: 'JavaScript' },
    { name: 'SQL' }
  ],
  Frameworks_and_Technologies: [
    { name: 'TensorFlow' },
    { name: 'PyTorch' },
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






