export type Course = {
  slug: string;
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  price: number;
  rating: number;
  students: number;
  teacher: string;
  description: string;
  color: string;
};

export const courses: Course[] = [
  {
    slug: "web-development-fundamentals",
    title: "Web Development Fundamentals",
    category: "Engineering",
    level: "Beginner",
    duration: "8 weeks",
    lessons: 42,
    price: 89,
    rating: 4.9,
    students: 2840,
    teacher: "Dr. Emily Chen",
    description: "Master HTML, CSS, and JavaScript from scratch and build your first interactive websites.",
    color: "oklch(0.62 0.18 232)",
  },
  {
    slug: "data-science-essentials",
    title: "Data Science Essentials",
    category: "Data & AI",
    level: "Intermediate",
    duration: "10 weeks",
    lessons: 56,
    price: 129,
    rating: 4.8,
    students: 1980,
    teacher: "Prof. Marcus Allen",
    description: "Statistics, Python, pandas and real-world ML projects — taught by industry practitioners.",
    color: "oklch(0.55 0.20 264)",
  },
  {
    slug: "graphic-design-mastery",
    title: "Graphic Design Mastery",
    category: "Design",
    level: "Beginner",
    duration: "6 weeks",
    lessons: 32,
    price: 79,
    rating: 4.9,
    students: 3120,
    teacher: "Sofia Rivera",
    description: "Composition, typography and color — design briefs that get noticed.",
    color: "oklch(0.65 0.15 210)",
  },
  {
    slug: "business-analytics",
    title: "Business Analytics",
    category: "Business",
    level: "Intermediate",
    duration: "8 weeks",
    lessons: 38,
    price: 109,
    rating: 4.7,
    students: 1420,
    teacher: "Dr. Aisha Patel",
    description: "Turn spreadsheets into decisions with dashboards, SQL and storytelling.",
    color: "oklch(0.58 0.16 250)",
  },
  {
    slug: "creative-writing",
    title: "Creative Writing Workshop",
    category: "Humanities",
    level: "Beginner",
    duration: "5 weeks",
    lessons: 22,
    price: 59,
    rating: 4.8,
    students: 980,
    teacher: "James O'Connor",
    description: "Find your voice through guided writing exercises and weekly critique sessions.",
    color: "oklch(0.60 0.14 240)",
  },
  {
    slug: "intro-to-machine-learning",
    title: "Intro to Machine Learning",
    category: "Data & AI",
    level: "Advanced",
    duration: "12 weeks",
    lessons: 64,
    price: 169,
    rating: 4.9,
    students: 1640,
    teacher: "Prof. Marcus Allen",
    description: "From linear regression to neural networks — build models that actually ship.",
    color: "oklch(0.50 0.22 258)",
  },
];

export type Teacher = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  courses: number;
  students: number;
  initials: string;
  color: string;
};

export const teachers: Teacher[] = [
  {
    slug: "emily-chen",
    name: "Dr. Emily Chen",
    role: "Senior Engineering Instructor",
    bio: "Former Google engineer with 12 years building education tools.",
    courses: 6,
    students: 8200,
    initials: "EC",
    color: "oklch(0.62 0.18 232)",
  },
  {
    slug: "marcus-allen",
    name: "Prof. Marcus Allen",
    role: "Data Science Lead",
    bio: "MIT PhD researching applied machine learning and education.",
    courses: 4,
    students: 5400,
    initials: "MA",
    color: "oklch(0.50 0.22 258)",
  },
  {
    slug: "sofia-rivera",
    name: "Sofia Rivera",
    role: "Design Faculty",
    bio: "Award-winning designer mentoring the next generation of creatives.",
    courses: 5,
    students: 6100,
    initials: "SR",
    color: "oklch(0.65 0.15 210)",
  },
  {
    slug: "aisha-patel",
    name: "Dr. Aisha Patel",
    role: "Business & Analytics",
    bio: "Strategy consultant turned educator. Speaker at HBR LIVE.",
    courses: 3,
    students: 3200,
    initials: "AP",
    color: "oklch(0.58 0.16 250)",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
};

export const posts: Post[] = [
  {
    slug: "5-study-habits-that-actually-work",
    title: "5 Study Habits That Actually Work in 2026",
    excerpt: "Research-backed tactics for retaining more in less time — from spaced repetition to active recall.",
    date: "Jun 18, 2026",
    readTime: "6 min",
    category: "Study Tips",
    author: "Dr. Emily Chen",
  },
  {
    slug: "career-pivot-into-data",
    title: "How to Pivot Your Career into Data — Without a CS Degree",
    excerpt: "A pragmatic roadmap from any background to your first data role in 9 months.",
    date: "Jun 09, 2026",
    readTime: "9 min",
    category: "Careers",
    author: "Prof. Marcus Allen",
  },
  {
    slug: "design-portfolios-that-get-jobs",
    title: "The Anatomy of a Design Portfolio That Gets Jobs",
    excerpt: "Three case studies beat ten thumbnails. Here's how to structure them.",
    date: "May 28, 2026",
    readTime: "7 min",
    category: "Design",
    author: "Sofia Rivera",
  },
  {
    slug: "ai-in-the-classroom",
    title: "AI in the Classroom: Tutor, Not Crutch",
    excerpt: "How LumenEd uses LLMs to give every student a personal tutor without replacing teachers.",
    date: "May 14, 2026",
    readTime: "5 min",
    category: "Product",
    author: "Dr. Aisha Patel",
  },
];
