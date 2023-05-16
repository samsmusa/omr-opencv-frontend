import { faker } from "@faker-js/faker";

export const GAPI = {
  Compute: [
    {
      name: "Compute Engine",
      description: "Scalable, high-performance virtual machines",
    },
    {
      name: "App Engine",
      description: "Serverless application platform for web and mobile apps",
    },
    {
      name: "Kubernetes Engine",
      description: "Managed, production-ready Kubernetes clusters",
    },
  ],
  Storage: [
    {
      name: "Cloud Storage",
      description: "Unified object storage for developers and enterprises",
    },
    {
      name: "Persistent Disk",
      description: "Block storage for virtual machine instances",
    },
    {
      name: "Filestore",
      description: "Managed file storage for applications",
    },
  ],
  Database: [
    {
      name: "Cloud SQL",
      description: "Fully managed relational database service",
    },
    {
      name: "Cloud Spanner",
      description:
        "Horizontally scalable, globally consistent, relational database service",
    },
    {
      name: "Cloud Firestore",
      description: "Serverless, NoSQL document database",
    },
  ],
  Networking: [
    {
      name: "Virtual Private Cloud",
      description: "Virtual network for Google Cloud resources and services",
    },
    {
      name: "Cloud Load Balancing",
      description: "Fully managed, scalable load balancing service",
    },
    {
      name: "Cloud CDN",
      description: "Low-latency content delivery using Google's global network",
    },
  ],
  "AI and Machine Learning": [
    {
      name: "Cloud AI Platform",
      description: "Build, train, and deploy machine learning models",
    },
    {
      name: "Cloud Vision API",
      description:
        "Derive insight from your images with our powerful Cloud Vision API",
    },
    {
      name: "Cloud Natural Language API",
      description:
        "Derive insights from unstructured text using Google machine learning",
    },
  ],
};

export const INTEGRATIONTYPE = [
  { id: 1, name: "All Integrations" },
  ...Object.keys(GAPI).map((el, index) => {
    return { id: index + 2, name: el };
  }),
];
export const INTEGRSTIONS = Object.keys(GAPI).flatMap((element, index) =>
  GAPI[element].map((val) => ({
    ...val,
    type: index + 2,
    checked: faker.datatype.boolean(),
  }))
);

export const UVPV = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const COST_IMPRESSION = [
  { name: 1, cost: 40.11, impression: 100 },
  { name: 2, cost: 20.39, impression: 120 },
  { name: 3, cost: 10.37, impression: 150 },
  { name: 4, cost: 10.16, impression: 180 },
  { name: 5, cost: 20.29, impression: 200 },
  { name: 6, cost: 30, impression: 499 },
  { name: 7, cost: 0.53, impression: 50 },
  { name: 8, cost: 20.52, impression: 100 },
  { name: 9, cost: 10.79, impression: 200 },
  { name: 10, cost: 20.94, impression: 222 },
  { name: 11, cost: 40.3, impression: 210 },
  { name: 12, cost: 40.41, impression: 300 },
  { name: 13, cost: 20.1, impression: 50 },
  { name: 14, cost: 80, impression: 190 },
  { name: 15, cost: 0, impression: 300 },
  { name: 16, cost: 90, impression: 400 },
  { name: 17, cost: 30, impression: 200 },
  { name: 18, cost: 20, impression: 50 },
  { name: 19, cost: 30, impression: 100 },
  { name: 20, cost: 70, impression: 100 },
];

export const TYPE_VALUE_UP = Array(3)
  .fill()
  .map(() => {
    return {
      type: faker.person.firstName(),
      value: faker.number.float({ max: 100, precision: 0.01 }),
      up: faker.datatype.boolean(),
    };
  });

export const TABLE_TYPE_PAGE = Array(60)
  .fill()
  .map(() => {
    return {
      type: faker.person.firstName(),
      aSESSIONS: faker.number.int({ max: 1000, min: 10 }),
      aDURATION: faker.number.int({ max: 1000000, min: 9999 }),
      nSESSIONS: faker.number.float({ max: 100, precision: 0.01 }),
      rBOUNCE: faker.number.float({ max: 100, precision: 0.01 }),
      gCOMPLETION: faker.number.float({ max: 100, precision: 0.01 }),
      PAGES: faker.number.float({ max: 100, precision: 0.01 }),
    };
  });
const status_ = ["paid", "rejected", "pending", "refund"];

export const BILLING_HISTORY = Array(12)
  .fill()
  .map(() => {
    return {
      invoice: faker.lorem.words(),
      amount: faker.number.int({ min: 100, max: 1000 }),
      date: faker.date.anytime().toDateString(),
      status: faker.helpers.arrayElement(status_, { max: 1, min: 1 }),
    };
  });
