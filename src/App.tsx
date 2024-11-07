import React, { useState } from 'react';
import ItemList from './components/ItemList';
import SortControls from './components/SortControls';
import SearchBar from './components/SearchBar';
import ViewToggle from './components/ViewToggle';
import Pagination from './components/Pagination';
import useSortedFilteredList from './hooks/useSortedFilteredList';
import styles from './styles/App.module.css';
import { Item } from './types';

const sampleData: Item[] = [
  { id: 1, title: "Introduction to TypeScript", content: "Learning the basics of TypeScript.", date: new Date("2023-01-05") },
  { id: 2, title: "Advanced React Hooks", content: "A deep dive into React hooks.", date: new Date("2023-01-15") },
  { id: 3, title: "Building with Vite", content: "Setting up a project with Vite.", date: new Date("2023-01-25") },
  { id: 4, title: "Understanding Promises", content: "JavaScript promises explained.", date: new Date("2023-02-05") },
  { id: 5, title: "REST API Basics", content: "Getting started with REST APIs.", date: new Date("2023-02-15") },
  { id: 6, title: "Node.js Introduction", content: "Introduction to backend development with Node.js.", date: new Date("2023-02-25") },
  { id: 7, title: "Express.js Fundamentals", content: "Building web apps with Express.", date: new Date("2023-03-01") },
  { id: 8, title: "MongoDB Basics", content: "Learning NoSQL with MongoDB.", date: new Date("2023-03-05") },
  { id: 9, title: "Understanding RESTful APIs", content: "Designing RESTful services.", date: new Date("2023-03-15") },
  { id: 10, title: "CSS Flexbox", content: "Creating layouts with CSS Flexbox.", date: new Date("2023-03-25") },
  { id: 11, title: "CSS Grid", content: "Advanced layouts with CSS Grid.", date: new Date("2023-04-01") },
  { id: 12, title: "JavaScript ES6", content: "New features in JavaScript ES6.", date: new Date("2023-04-05") },
  { id: 13, title: "React Router", content: "Navigation in React apps.", date: new Date("2023-04-10") },
  { id: 14, title: "Introduction to Redux", content: "Managing state with Redux.", date: new Date("2023-04-15") },
  { id: 15, title: "Async JavaScript", content: "Understanding asynchronous JavaScript.", date: new Date("2023-04-20") },
  { id: 16, title: "Webpack Fundamentals", content: "Introduction to bundling with Webpack.", date: new Date("2023-04-25") },
  { id: 17, title: "Babel Overview", content: "Transpiling JavaScript with Babel.", date: new Date("2023-05-01") },
  { id: 18, title: "TypeScript Generics", content: "Using generics in TypeScript.", date: new Date("2023-05-05") },
  { id: 19, title: "Introduction to GraphQL", content: "Setting up a GraphQL API.", date: new Date("2023-05-10") },
  { id: 20, title: "State Management in React", content: "Managing state in large React apps.", date: new Date("2023-05-15") },
  { id: 21, title: "Understanding Proxies", content: "JavaScript proxies and their use cases.", date: new Date("2023-05-20") },
  { id: 22, title: "React Context API", content: "Global state with React Context.", date: new Date("2023-05-25") },
  { id: 23, title: "TypeScript Interfaces", content: "Defining shapes with interfaces.", date: new Date("2023-06-01") },
  { id: 24, title: "JavaScript Closures", content: "Understanding closures in JavaScript.", date: new Date("2023-06-05") },
  { id: 25, title: "Functional Programming", content: "Exploring functional programming concepts.", date: new Date("2023-06-10") },
  { id: 26, title: "React Performance Optimization", content: "Optimizing performance in React.", date: new Date("2023-06-15") },
  { id: 27, title: "Data Structures in JavaScript", content: "Common data structures in JavaScript.", date: new Date("2023-06-20") },
  { id: 28, title: "SASS Basics", content: "Introduction to SASS.", date: new Date("2023-06-25") },
  { id: 29, title: "Styled Components", content: "Using styled-components in React.", date: new Date("2023-07-01") },
  { id: 30, title: "Tailwind CSS", content: "Utility-first CSS framework.", date: new Date("2023-07-05") },
  { id: 31, title: "JavaScript Event Loop", content: "Understanding the event loop.", date: new Date("2023-07-10") },
  { id: 32, title: "JavaScript Promises", content: "Working with promises in JavaScript.", date: new Date("2023-07-15") },
  { id: 33, title: "ESLint Setup", content: "Linting JavaScript code with ESLint.", date: new Date("2023-07-20") },
  { id: 34, title: "React Testing Library", content: "Testing React components.", date: new Date("2023-07-25") },
  { id: 35, title: "Jest Basics", content: "Testing JavaScript code with Jest.", date: new Date("2023-08-01") },
  { id: 36, title: "Responsive Web Design", content: "Designing responsive websites.", date: new Date("2023-08-05") },
  { id: 37, title: "Introduction to Docker", content: "Containerizing applications with Docker.", date: new Date("2023-08-10") },
  { id: 38, title: "Git and GitHub Basics", content: "Version control with Git.", date: new Date("2023-08-15") },
  { id: 39, title: "Understanding HTTP", content: "Basics of HTTP and REST.", date: new Date("2023-08-20") },
  { id: 40, title: "OAuth 2.0 Basics", content: "Introduction to OAuth 2.0.", date: new Date("2023-08-25") },
  { id: 41, title: "CSS Animations", content: "Adding animations with CSS.", date: new Date("2023-09-01") },
  { id: 42, title: "JavaScript Arrays", content: "Methods and operations on arrays.", date: new Date("2023-09-05") },
  { id: 43, title: "TypeScript Enums", content: "Using enums in TypeScript.", date: new Date("2023-09-10") },
  { id: 44, title: "React Suspense", content: "Code-splitting with React Suspense.", date: new Date("2023-09-15") },
  { id: 45, title: "Introduction to Firebase", content: "Building apps with Firebase.", date: new Date("2023-09-20") },
  { id: 46, title: "JWT Authentication", content: "Using JWT for authentication.", date: new Date("2023-09-25") },
  { id: 47, title: "GraphQL Resolvers", content: "Understanding resolvers in GraphQL.", date: new Date("2023-10-01") },
  { id: 48, title: "Authentication with Passport.js", content: "Implementing Passport.js.", date: new Date("2023-10-05") },
  { id: 49, title: "JavaScript Modules", content: "Using modules in JavaScript.", date: new Date("2023-10-10") },
  { id: 50, title: "Python for Data Science", content: "Basics of Python for data science.", date: new Date("2023-10-15") },
  { id: 51, title: "API Rate Limiting", content: "Implementing rate limiting in APIs.", date: new Date("2023-10-20") },
  { id: 52, title: "Microservices Architecture", content: "Understanding microservices.", date: new Date("2023-10-25") },
  { id: 53, title: "Building REST APIs", content: "Creating REST APIs.", date: new Date("2023-11-01") },
  { id: 54, title: "Data Caching", content: "Improving performance with caching.", date: new Date("2023-11-05") },
  { id: 55, title: "GraphQL Subscriptions", content: "Real-time data with subscriptions.", date: new Date("2023-11-10") },
  { id: 56, title: "TypeORM", content: "ORM for TypeScript and JavaScript.", date: new Date("2023-11-15") },
  { id: 57, title: "NestJS Basics", content: "Developing with NestJS.", date: new Date("2023-11-20") },
  { id: 58, title: "AWS Basics", content: "Introduction to AWS.", date: new Date("2023-11-25") },
  { id: 59, title: "Linux Command Line", content: "Working with Linux CLI.", date: new Date("2023-12-01") },
  { id: 60, title: "Introduction to Kubernetes", content: "Orchestrating containers with Kubernetes.", date: new Date("2023-12-05") },
  { id: 61, title: "JavaScript Async/Await", content: "Async functions in JavaScript.", date: new Date("2023-12-10") },
  { id: 62, title: "CSS Variables", content: "Using variables in CSS.", date: new Date("2023-12-15") },
  { id: 63, title: "Vue.js Basics", content: "Getting started with Vue.js.", date: new Date("2023-12-20") },
  { id: 64, title: "Angular Basics", content: "Introduction to Angular.", date: new Date("2023-12-25") },
  { id: 65, title: "Flutter for Mobile Apps", content: "Developing mobile apps with Flutter.", date: new Date("2024-01-01") },
  { id: 66, title: "Machine Learning Basics", content: "Intro to machine learning concepts.", date: new Date("2024-01-05") },
  { id: 67, title: "Data Science with Pandas", content: "Using Pandas in data science.", date: new Date("2024-01-10") },
  { id: 68, title: "SQL Basics", content: "Getting started with SQL.", date: new Date("2024-01-15") },
  { id: 69, title: "Django Framework", content: "Building apps with Django.", date: new Date("2024-01-20") },
  { id: 70, title: "REST vs GraphQL", content: "Comparing REST and GraphQL APIs.", date: new Date("2024-01-25") }
];

function App() {
  const [sortOrder, setSortOrder] = useState<"alphabetical" | "date">("date");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(10); // Number of items per page
  const [view, setView] = useState<"list" | "grid">("grid");

  const items = useSortedFilteredList(sampleData, sortOrder, searchTerm);

  // Pagination: Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <h1>Dynamic List Sorting</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SortControls sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <ViewToggle view={view} setView={setView} />
      <ItemList items={currentItems} view={view} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
