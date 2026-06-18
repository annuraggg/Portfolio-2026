import type { CloudCaseStudy } from "@/types/cloud-case-study";

const cloudCaseStudies: CloudCaseStudy[] = [
  {
    id: "scriptopia-campus",

    title: "Migrating Scriptopia Campus to AWS",

    date: "2026",

    cover: "/cloud/scriptopia-campus/cover.svg",

    cardCover: "/cloud/scriptopia-campus/cover-card.webp",

    system: "Scriptopia Campus",

    timeline: "Architecture Study • 2026",

    overview:
      "A cloud migration case study exploring how Scriptopia Campus can be transformed from a self-managed deployment into a scalable, highly available AWS-based platform. The proposed architecture introduces managed services, containerized workloads, centralized monitoring, automated deployments, and fault-tolerant infrastructure while maintaining compatibility with existing application services.",

    architecture: {
      diagram: "/cloud/scriptopia-campus/architecture.png",

      description:
        "The proposed architecture places CloudFront at the edge for content delivery, routing traffic through an Application Load Balancer to containerized backend services. Authentication is delegated to Clerk, caching is handled through Redis, and application workloads are distributed across managed compute services. Monitoring, logging, and deployment automation are integrated to improve operational visibility and reduce maintenance overhead.",
    },

    stack: {
      infrastructure: [
        "AWS CloudFront",
        "Application Load Balancer",
        "AWS ECS",
        "AWS Lambda",
        "Amazon S3",
        "MongoDB Atlas",
        "Redis",
        "Clerk",
      ],

      observability: ["Amazon CloudWatch", "Grafana", "Prometheus"],

      automation: ["GitHub Actions", "Docker", "Terraform"],
    },

    deployment: {
      strategy:
        "Frontend assets are deployed to S3 and distributed through CloudFront. Backend APIs are containerized and deployed to ECS. Event-driven and background workloads are executed through Lambda functions. Infrastructure provisioning is managed through Terraform and application deployments are automated through GitHub Actions.",

      cicd: "GitHub → Build & Test → Docker Image → Container Registry → ECS Deployment",
    },

    engineeringDecisions: [
      {
        title: "Containerized Backend Services",
        reason:
          "Moving backend services to containers enables consistent deployments across environments while simplifying scaling and infrastructure management.",
      },

      {
        title: "CloudFront for Global Delivery",
        reason:
          "Static assets and frontend resources are distributed through CloudFront to reduce latency and improve user experience across geographically distributed campuses.",
      },

      {
        title: "Managed Redis Layer",
        reason:
          "Redis is retained as a dedicated caching layer to reduce database load and improve response times for frequently accessed placement and student data.",
      },

      {
        title: "Serverless Background Processing",
        reason:
          "AWS Lambda is used for asynchronous operations such as notifications, report generation, imports, and scheduled processing tasks to avoid maintaining always-on compute resources.",
      },

      {
        title: "Infrastructure as Code",
        reason:
          "Terraform enables repeatable environment provisioning and reduces configuration drift between development, staging, and production environments.",
      },
    ],

    scaling: [
      "Horizontal scaling of ECS services behind the Application Load Balancer",
      "Independent scaling of background processing workloads",
      "CloudFront edge caching for static assets",
      "Redis caching to reduce database pressure during placement seasons",
      "Multi-environment deployment strategy for development, staging, and production",
    ],

    security: [
      "Authentication and session management delegated to Clerk",
      "Private networking for internal application services",
      "Secrets managed through AWS Secrets Manager",
      "TLS encryption for all external traffic",
      "Role-based access control across student, recruiter, and placement officer workflows",
    ],

    monitoring: [
      "CloudWatch application and infrastructure metrics",
      "Container health monitoring",
      "Centralized application logging",
      "Redis performance monitoring",
      "API latency and error-rate dashboards",
      "Deployment health and rollback visibility",
    ],

    challenges: [
      {
        problem:
          "The existing platform contains multiple interconnected services including assessments, recruitment workflows, student management, and analytics.",
        solution:
          "Services are gradually containerized and migrated in phases, reducing migration risk and avoiding large-scale downtime.",
      },

      {
        problem:
          "Placement drives create traffic spikes during application and assessment periods.",
        solution:
          "Autoscaling container services combined with Redis caching absorb traffic bursts while maintaining application responsiveness.",
      },

      {
        problem:
          "Operational visibility is limited in self-managed environments.",
        solution:
          "Cloud-native monitoring, centralized logging, and alerting provide real-time insight into application health and infrastructure performance.",
      },

      {
        problem:
          "Managing infrastructure manually becomes increasingly difficult as the platform grows.",
        solution:
          "Terraform and CI/CD automation reduce manual intervention and standardize deployment workflows.",
      },
    ],

    repositories: [
      {
        title: "Scriptopia Campus",
        url: "https://github.com/annuraggg/Scriptopia-Code-2.0",
      },
      {
        title: "Scriptopia Self Hosted",
        url: "https://github.com/annuraggg/Scriptopia-Self-Hosted",
      },
    ],

    screenshots: [],
  },
];

export default cloudCaseStudies;
