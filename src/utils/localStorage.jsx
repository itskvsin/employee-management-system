const employees = [
  {
    id: 1,
    email: "e@e.com",
    password: "123",
    firstName: "Aarav",
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Prepare presentation",
        description: "Create slides for the quarterly report.",
        date: "2025-06-10",
        category: "Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team meeting",
        description: "Weekly sync with project team.",
        date: "2025-06-12",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Review code",
        description: "Review PRs from frontend team.",
        date: "2025-06-09",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    password: "123",
    firstName: "Kritika",
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        title: "Client follow-up",
        description: "Send follow-up email to ACME Inc.",
        date: "2025-06-08",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "UI Testing",
        description: "Test new dashboard layout.",
        date: "2025-06-07",
        category: "QA",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update documentation",
        description: "Revise internal wiki with new feature details.",
        date: "2025-06-11",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Report generation",
        description: "Generate sales report for May.",
        date: "2025-06-06",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "michael.brown@example.com",
    password: "123",
    firstName: "Rohan",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Bug fixing",
        description: "Resolve backend API timeout issue.",
        date: "2025-06-10",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Security audit",
        description: "Run static code analysis for vulnerabilities.",
        date: "2025-06-09",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "System backup",
        description: "Take full backup before release.",
        date: "2025-06-08",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    email: "lisa.johnson@example.com",
    password: "123",
    firstName: "Priya",
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        title: "Design mockups",
        description: "Create mockups for new feature rollout.",
        date: "2025-06-07",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Internal feedback",
        description: "Collect feedback on last release.",
        date: "2025-06-11",
        category: "Feedback",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix alignment bug",
        description: "Fix alignment issue on mobile view.",
        date: "2025-06-06",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Plan sprint",
        description: "Organize backlog for upcoming sprint.",
        date: "2025-06-09",
        category: "Planning",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "david.wilson@example.com",
    password: "123",
    firstName: "Devansh",
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Deploy updates",
        description: "Deploy v2.3 to staging.",
        date: "2025-06-10",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Log monitoring",
        description: "Check logs for recurring warnings.",
        date: "2025-06-08",
        category: "Monitoring",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Create database indexes",
        description: "Improve query performance.",
        date: "2025-06-07",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Refactor login module",
        description: "Clean up login logic and reduce redundant code.",
        date: "2025-06-06",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
    firstName: "Neha",
  },
];



export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const emp = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return {emp , admin};
}