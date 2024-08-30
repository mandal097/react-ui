import { Course } from "../interface/interface";

export const courses: Course[] = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://img.freepik.com/free-vector/creative-abstract-quantum-illustration_23-2149236239.jpg?uid=R133860428&ga=GA1.1.2099273869.1699206951&semt=ais_hybrid",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      { id: 101, name: "Alice Johnson", email: "alice@example.com" },
      { id: 102, name: "Bob Smith", email: "bob@example.com" },
    ],
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    instructor: "Jane Smith",
    description:
      "Deep dive into advanced JavaScript concepts and patterns for building scalable web applications.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://img.freepik.com/free-vector/react-native-mobile-app-abstract-concept-illustration-cross-platform-native-mobile-app-development-framework-javascript-library-user-interface-operating-system_335657-3350.jpg?uid=R133860428&ga=GA1.1.2099273869.1699206951&semt=ais_hybrid",
    duration: "12 weeks",
    schedule: "Mondays and Wednesdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Advanced Functions and Closures",
        content: "Understanding higher-order functions, closures, and scopes.",
      },
      {
        week: 2,
        topic: "Asynchronous JavaScript",
        content:
          "Mastering promises, async/await, and handling asynchronous code.",
      },
      {
        week: 3,
        topic: "JavaScript Design Patterns",
        content: "Exploring common design patterns in JavaScript.",
      },
    ],
    students: [
      { id: 103, name: "Charlie Brown", email: "charlie@example.com" },
      { id: 104, name: "Diana Prince", email: "diana@example.com" },
    ],
  },
  {
    id: 3,
    name: "Web Development with Django",
    instructor: "Michael Johnson",
    description:
      "Learn how to build robust web applications using Python and Django framework.",
    enrollmentStatus: "In Progress",
    thumbnail:
      "https://img.freepik.com/free-vector/quantum-computing-abstract-concept-illustration_335657-2187.jpg?uid=R133860428&ga=GA1.1.2099273869.1699206951&semt=ais_hybrid",
    duration: "10 weeks",
    schedule: "Fridays, 4:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Django",
        content: "Setting up Django and understanding its core features.",
      },
      {
        week: 2,
        topic: "Building Models and Views",
        content:
          "Creating Django models and views for handling data and rendering templates.",
      },
      {
        week: 3,
        topic: "User Authentication",
        content: "Implementing user authentication and authorization.",
      },
    ],
    students: [
      { id: 105, name: "Eve Adams", email: "eve@example.com" },
      { id: 106, name: "Frank Castle", email: "frank@example.com" },
    ],
  },
  {
    id: 4,
    name: "Machine Learning with Python",
    instructor: "Sara Connor",
    description:
      "An introductory course on machine learning concepts and applications using Python.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://img.freepik.com/free-vector/developer-activity-concept-illustration_114360-2801.jpg?uid=R133860428&ga=GA1.1.2099273869.1699206951&semt=ais_hybrid",
    duration: "14 weeks",
    schedule: "Saturdays, 10:00 AM - 1:00 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge", "Basic statistics knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content: "Understanding the basics of machine learning and its types.",
      },
      {
        week: 2,
        topic: "Data Preprocessing",
        content: "Techniques for cleaning and preparing data for analysis.",
      },
      {
        week: 3,
        topic: "Supervised Learning",
        content:
          "Implementing supervised learning algorithms like regression and classification.",
      },
      {
        week: 4,
        topic: "Unsupervised Learning",
        content:
          "Exploring clustering algorithms and dimensionality reduction.",
      },
    ],
    students: [
      { id: 107, name: "Grace Hopper", email: "grace@example.com" },
      { id: 108, name: "Hank Pym", email: "hank@example.com" },
    ],
  },
  {
    id: 5,
    name: "Introduction to DevOps",
    instructor: "Richard Hendricks",
    description:
      "Learn the fundamentals of DevOps and how to integrate it into your development workflow.",
    enrollmentStatus: "Closed",
    thumbnail:
      "https://img.freepik.com/free-vector/application-programming-interface-concept-illustration_114360-9145.jpg?uid=R133860428&ga=GA1.1.2099273869.1699206951&semt=ais_hybrid",
    duration: "6 weeks",
    schedule: "Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic Linux knowledge", "Familiarity with CI/CD"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to DevOps",
        content: "Understanding DevOps culture, practices, and tools.",
      },
      {
        week: 2,
        topic: "Continuous Integration and Continuous Deployment",
        content:
          "Setting up CI/CD pipelines for automated testing and deployment.",
      },
      {
        week: 3,
        topic: "Containerization with Docker",
        content: "Learning how to use Docker for containerization.",
      },
    ],
    students: [
      { id: 109, name: "Ivy Walker", email: "ivy@example.com" },
      { id: 110, name: "Jake Peralta", email: "jake@example.com" },
    ],
  },
  {
    id: 6,
    name: "Introduction to Data Science",
    instructor: "Alan Turing",
    description:
      "An introductory course that covers the basics of data science, including data manipulation and visualization.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://img.freepik.com/free-vector/cross-platform-frameworks-abstract-concept-illustration_335657-1825.jpg?uid=R133860428&ga=GA1.1.2099273869.1699206951&semt=ais_hybridg",
    duration: "10 weeks",
    schedule: "Mondays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic programming knowledge", "Familiarity with Python"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content:
          "Understanding the field of data science and its applications.",
      },
      {
        week: 2,
        topic: "Data Wrangling",
        content:
          "Learning techniques for cleaning and preparing data for analysis.",
      },
      {
        week: 3,
        topic: "Data Visualization",
        content: "Exploring data visualization tools and techniques.",
      },
      {
        week: 4,
        topic: "Introduction to Machine Learning",
        content:
          "Overview of machine learning and its applications in data science.",
      },
    ],
    students: [
      { id: 111, name: "Isaac Newton", email: "isaac@example.com" },
      { id: 112, name: "Jane Austen", email: "jane@example.com" },
    ],
  },
  {
    id: 7,
    name: "Full-Stack Web Development",
    instructor: "Ada Lovelace",
    description:
      "Master full-stack web development with hands-on projects using modern technologies like React, Node.js, and MongoDB.",
    enrollmentStatus: "In Progress",
    thumbnail:
      "https://img.freepik.com/free-vector/version-control-concept-illustration_114360-2451.jpg?uid=R133860428&ga=GA1.1.2099273869.1699206951&semt=ais_hybrid",
    duration: "16 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic HTML, CSS, and JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "HTML and CSS Basics",
        content:
          "Learning the foundations of HTML and CSS for building web pages.",
      },
      {
        week: 2,
        topic: "JavaScript and DOM Manipulation",
        content: "Exploring JavaScript and how to interact with the DOM.",
      },
      {
        week: 3,
        topic: "JavaScript Design Patterns",
        content: "Exploring common design patterns in JavaScript.",
      },
    ],
    students: [
      { id: 103, name: "Charlie Brown", email: "charlie@example.com" },
      { id: 104, name: "Diana Prince", email: "diana@example.com" },
    ],
  },
  {
    id: 8,
    name: "Cybersecurity Fundamentals",
    instructor: "Bruce Wayne",
    description:
      "Understand the basics of cybersecurity, including common threats, prevention techniques, and best practices.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg?uid=R133860428&ga=GA1.1.2099273869.1699206951&semt=ais_hybrid",
    duration: "9 weeks",
    schedule: "Mondays and Wednesdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic computer knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cybersecurity",
        content:
          "Overview of cybersecurity, key concepts, and common vulnerabilities.",
      },
      {
        week: 2,
        topic: "Network Security",
        content: "Understanding network threats and how to secure a network.",
      },
      {
        week: 3,
        topic: "Cybersecurity Tools and Techniques",
        content: "Introduction to essential cybersecurity tools and practices.",
      },
      {
        week: 4,
        topic: "Incident Response",
        content: "How to respond to and recover from cybersecurity incidents.",
      },
    ],
    students: [
      { id: 113, name: "Clark Kent", email: "clark@example.com" },
      { id: 114, name: "Diana Prince", email: "diana@example.com" },
    ],
  },
  {
    id: 9,
    name: "Mobile App Development with Flutter",
    instructor: "Tony Stark",
    description:
      "Build high-performance, natively compiled mobile applications using Google's Flutter framework.",
    enrollmentStatus: "In Progress",
    thumbnail:
      "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051191.jpg?uid=R133860428&ga=GA1.1.2099273869.1699206951&semt=ais_hybrid",
    duration: "10 weeks",
    schedule: "Fridays, 6:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic programming knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Flutter",
        content: "Getting started with Flutter, setting up the environment.",
      },
      {
        week: 2,
        topic: "Flutter Widgets",
        content:
          "Understanding widgets, state management, and layout building.",
      },
      {
        week: 3,
        topic: "Navigation and Routing",
        content: "Implementing navigation and routing in Flutter apps.",
      },
      {
        week: 4,
        topic: "Connecting to a Backend",
        content: "How to connect your Flutter app to a backend service.",
      },
    ],
    students: [
      { id: 115, name: "Peter Parker", email: "peter@example.com" },
      { id: 116, name: "Natasha Romanoff", email: "natasha@example.com" },
    ],
  },
  {
    id: 10,
    name: "Digital Marketing Essentials",
    instructor: "Pepper Potts",
    description:
      "Learn the core concepts of digital marketing, including SEO, social media marketing, and content creation.",
    enrollmentStatus: "Closed",
    thumbnail:
      "https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg?uid=R133860428&ga=GA1.1.2099273869.1699206951&semt=ais_hybrid",
    duration: "7 weeks",
    schedule: "Tuesdays, 4:00 PM - 6:00 PM",
    location: "Online",
    prerequisites: ["Basic marketing knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Digital Marketing",
        content:
          "Understanding digital marketing and its role in modern business.",
      },
      {
        week: 2,
        topic: "Search Engine Optimization (SEO)",
        content: "Learning SEO techniques to improve website visibility.",
      },
      {
        week: 3,
        topic: "Social Media Marketing",
        content: "Creating and managing effective social media campaigns.",
      },
      {
        week: 4,
        topic: "Content Marketing",
        content: "Strategies for creating and distributing engaging content.",
      },
    ],
    students: [
      { id: 117, name: "Steve Rogers", email: "steve@example.com" },
      { id: 118, name: "Bruce Banner", email: "bruce@example.com" },
    ],
  },
];
