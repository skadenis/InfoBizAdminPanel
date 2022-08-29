const students = [
  {
    id: 1,
    name: "Noah",
    lastName: "Johnson",
    courseId: 12,
  },
  {
    id: 2,
    name: "Liam",
    lastName: "Smith",
    courseId: 12,
  },
  {
    id: 3,
    name: "Mason",
    lastName: "Williams",
    courseId: 3,
  },
  {
    id: 4,
    name: "Jacob",
    lastName: "Jones",
    courseId: 4,
  },
  {
    id: 5,
    name: "William",
    lastName: "Brown",
    courseId: 6,
  },
  {
    id: 6,
    name: "Ethan",
    lastName: "Davis",
    courseId: 1,
  },
  {
    id: 7,
    name: "Michael",
    lastName: "Miller",
    courseId: 8,
  },
  {
    id: 8,
    name: "Alexander",
    lastName: "Wilson",
    courseId: 6,
  },
];

const courses = [
  {
    id: 1,
    name: "React",
    description: "Description",
    icon_src: "icon",
    modules: [
      {
        id: 1,
        name: "Module React-1",
        description: "Description",
        icon_src: "icon",
        lessons: [
          {
            id: 1,
            name: "lesson 1-1",
          },
          {
            id: 2,
            name: "lesson 1-2",
          },
          {
            id: 3,
            name: "lessons 1-3",
          },
        ],
      },
      {
        id: 2,
        name: "Module React-2",
        description: "Description",
        icon_src: "icon",
        lessons: [
          {
            id: 1,
            name: "lesson 2-1",
          },
          {
            id: 2,
            name: "lesson 2-2",
          },
          {
            id: 3,
            name: "lessons 2-3",
          },
        ],
      },
      {
        id: 3,
        name: "Module React-3",
        description: "Description",
        icon_src: "icon",
        lessons: [
          {
            id: 1,
            name: "lesson 3-1",
          },
          {
            id: 2,
            name: "lesson 3-2",
          },
          {
            id: 3,
            name: "lessons 3-3",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Angular",
    description: "Description",
    icon_src: "icon",
    modules: [
      {
        id: 1,
        name: "Module Angular-1",
        description: "Description",
        icon_src: "icon",
        lessons: [
          {
            id: 1,
            name: "lesson 1-1",
          },
          {
            id: 2,
            name: "lesson 1-2",
          },
          {
            id: 3,
            name: "lessons 1-3",
          },
        ],
      },
      {
        id: 2,
        name: "Module Angular-2",
        description: "Description",
        icon_src: "icon",
        lessons: [
          {
            id: 1,
            name: "lesson 2-1",
          },
          {
            id: 2,
            name: "lesson 2-2",
          },
          {
            id: 3,
            name: "lessons 2-3",
          },
        ],
      },
      {
        id: 3,
        name: "Module Angular-3",
        description: "Description",
        icon_src: "icon",
        lessons: [
          {
            id: 1,
            name: "lesson 3-1",
          },
          {
            id: 2,
            name: "lesson 3-2",
          },
          {
            id: 3,
            name: "lessons 3-3",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Vue",
    description: "Description",
    icon_src: "icon",
    modules: [
      {
        id: 1,
        name: "Module Vue-1",
        description: "Description",
        icon_src: "icon",
        lessons: [
          {
            id: 1,
            name: "lesson 1-1",
          },
          {
            id: 2,
            name: "lesson 1-2",
          },
          {
            id: 3,
            name: "lessons 1-3",
          },
        ],
      },
      {
        id: 2,
        name: "Module Vue-2",
        description: "Description",
        icon_src: "icon",
        lessons: [
          {
            id: 1,
            name: "lesson 2-1",
          },
          {
            id: 2,
            name: "lesson 2-2",
          },
          {
            id: 3,
            name: "lessons 2-3",
          },
        ],
      },
      {
        id: 3,
        name: "Module Vue-3",
        description: "Description",
        icon_src: "icon",
        lessons: [
          {
            id: 1,
            name: "lesson 3-1",
          },
          {
            id: 2,
            name: "lesson 3-2",
          },
          {
            id: 3,
            name: "lessons 3-3",
          },
        ],
      },
    ],
  },
];

export default {
  students,
  courses,
};
