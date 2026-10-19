export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Distributed Systems' | 'Cloud & Infra' | 'Full-Stack Web';
  image: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  impact: string[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface Article {
  id: string;
  title: string;
  readTime: string;
  publishedDate: string;
  category: string;
  excerpt: string;
  content: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Benjamin Boma',
    role: 'Senior Software Engineer & Systems Architect',
    kicker: 'Software Engineering · Distributed Systems · Cloud Infrastructure',
    tagline: 'Designing resilient distributed architectures, high-throughput cloud streaming pipelines, and elegant full-stack digital products.',
    email: 'benjaminboma25@gmail.com',
    github: 'https://github.com/benjaminboma',
    linkedin: 'https://linkedin.com/in/benjaminboma',
    location: 'San Francisco, CA · Remote',
    availability: 'Available for Staff / Senior Roles & Advisory',
    portrait: '/src/assets/images/benjamin_boma_portrait_1792394781626.jpg',
    stats: [
      { label: 'System Uptime SLA', value: '99.99%', detail: 'Engineered for high-availability clusters' },
      { label: 'Global p99 Latency', value: '<120ms', detail: 'Edge-routed distributed caching' },
      { label: 'Engineering Experience', value: '8+ Years', detail: 'Production architectures at scale' },
      { label: 'Monthly Transactions', value: '14M+', detail: 'Fault-tolerant message throughput' },
    ],
  },
  projects: [
    {
      id: 'aether-stream',
      title: 'AetherStream Pipeline',
      subtitle: 'Distributed Low-Latency Video & Telemetry Event Bus',
      category: 'Distributed Systems',
      image: '/src/assets/images/project_distributed_stream_1792394782121.jpg',
      description: 'High-throughput event-driven streaming orchestrator managing real-time media ingestion, transcoding tasks, and resilient packet distribution.',
      longDescription: 'AetherStream was built to replace monolithic media ingestion pipelines with an asynchronous, distributed event mesh capable of dynamically scaling worker pools across multi-cloud regions while guaranteeing zero event loss during high-load traffic surges.',
      challenge: 'Peak traffic spikes caused buffer overflows in traditional queues, leading to transcoder bottlenecks and unpredictable packet jitter exceeding 350ms.',
      solution: 'Designed a partitioned Kafka event architecture paired with lightweight Go worker pods, adaptive backpressure algorithms, and edge WebRTC peering relays.',
      impact: [
        'Ingests over 450,000 events/sec with guaranteed at-least-once delivery semantics',
        'Reduced 99th-percentile packet delivery latency from 350ms to under 18ms',
        'Lowered cloud transcoding compute expenditure by 38% through opportunistic spot scheduling',
      ],
      techStack: ['Go', 'Apache Kafka', 'WebRTC', 'Docker', 'Kubernetes', 'gRPC', 'Redis'],
      metrics: [
        { label: 'Peak Throughput', value: '450k/s' },
        { label: 'p95 Latency', value: '18ms' },
        { label: 'Compute Cost', value: '-38%' },
      ],
      githubUrl: 'https://github.com/benjaminboma/aether-stream',
      liveUrl: 'https://aetherstream.dev',
    },
    {
      id: 'pulse-telemetry',
      title: 'PulseTelemetry Engine',
      subtitle: 'High-Resolution Distributed Observability & Trace Collector',
      category: 'Cloud & Infra',
      image: '/src/assets/images/project_cloud_observability_1792394782996.jpg',
      description: 'Distributed tracing aggregator supporting OpenTelemetry protocols, columnar storage querying, and real-time dependency topology exploration.',
      longDescription: 'A modern observability engine designed to provide sub-millisecond trace exploration and topology graph mapping across over 120 interconnected microservices without placing prohibitive overhead on production host nodes.',
      challenge: 'Traditional tracing tools incurred substantial CPU and network overhead (exceeding 8% CPU steal) and suffered from agonizingly slow historical query times.',
      solution: 'Engineered an eBPF zero-copy kernel probe collector in Rust paired with ClickHouse columnar storage and vectorized analytical queries.',
      impact: [
        'Ingests 10M+ span metrics per second with less than 0.6% host CPU overhead',
        'Accelerated distributed trace root-cause queries from 8.2s down to 42ms',
        'Reduced long-term storage footprint by 12x using custom delta compression schemes',
      ],
      techStack: ['Rust', 'ClickHouse', 'TypeScript', 'React 19', 'Tailwind CSS', 'eBPF'],
      metrics: [
        { label: 'Query Speed', value: '42ms' },
        { label: 'Host CPU Overhead', value: '<0.6%' },
        { label: 'Compression Ratio', value: '12x' },
      ],
      githubUrl: 'https://github.com/benjaminboma/pulse-telemetry',
      liveUrl: 'https://pulsetelemetry.io',
    },
    {
      id: 'geomesh-edge',
      title: 'GeoMesh Edge Router',
      subtitle: 'Anycast Multi-Region Dynamic Cache & Traffic Director',
      category: 'Cloud & Infra',
      image: '/src/assets/images/project_edge_compute_1792394782597.jpg',
      description: 'Intelligent Layer-7 traffic steering mesh providing zero-downtime blue/green deployments, token validation, and localized cached state invalidation.',
      longDescription: 'A multi-region edge gateway architecture coordinating Anycast routing, cryptographic edge authentication, and localized tiered caching to minimize origin server load and provide uninterrupted failovers.',
      challenge: 'Intercontinental network hops created noticeable delay for non-US users, with origin databases frequently saturated during marketing flash campaigns.',
      solution: 'Built an Envoy-based intelligent proxy layer orchestrated via Terraform with automated health checking, localized Redis cluster caches, and atomic cache invalidation pub/sub.',
      impact: [
        'Maintained 99.999% network uptime across 8 global geographical edge regions',
        'Reduced origin server read loads by 74% via high-hit-ratio distributed edge caching',
        'Cut global average Time to First Byte (TTFB) to under 35ms',
      ],
      techStack: ['Envoy', 'Node.js', 'Terraform', 'AWS', 'GCP', 'PostgreSQL', 'Redis'],
      metrics: [
        { label: 'Global Regions', value: '8' },
        { label: 'Origin Offload', value: '74%' },
        { label: 'Global TTFB', value: '35ms' },
      ],
      githubUrl: 'https://github.com/benjaminboma/geomesh-edge',
      liveUrl: 'https://geomesh.network',
    },
    {
      id: 'krypton-canvas',
      title: 'Krypton Collaborative Studio',
      subtitle: 'CRDT-Driven Multi-User Interactive Canvas Engine',
      category: 'Full-Stack Web',
      image: '/src/assets/images/project_cloud_observability_1792394782996.jpg',
      description: 'Real-time vector canvas engine utilizing Conflict-free Replicated Data Types (CRDTs) and WebSockets for concurrent editing with deterministic convergence.',
      longDescription: 'An ultra-responsive collaborative infinite whiteboard allowing multiple distributed team members to draw, annotate architectural diagrams, and manipulate complex vector objects simultaneously with zero merge conflicts.',
      challenge: 'Concurrent edits in traditional state management caused frequent state clobbering, race conditions, and lagging UI rendering at high object counts.',
      solution: 'Implemented Yjs state trees over encrypted WebSockets with custom WebGL spatial acceleration and local optimistic rendering.',
      impact: [
        'Supports 1,000+ simultaneous concurrent peers on a single infinite canvas room',
        'Maintains silky smooth 60fps frame rates with up to 50,000 rendered canvas objects',
        'Guarantees mathematical eventual consistency across offline reconnection states',
      ],
      techStack: ['React 19', 'TypeScript', 'WebSockets', 'Yjs', 'WebGL', 'Tailwind CSS'],
      metrics: [
        { label: 'Concurrent Users', value: '1,000+' },
        { label: 'Frame Rate', value: '60 FPS' },
        { label: 'Convergence Time', value: '<5ms' },
      ],
      githubUrl: 'https://github.com/benjaminboma/krypton-canvas',
      liveUrl: 'https://kryptonstudio.app',
    },
  ] as Project[],
  architectureSkills: [
    {
      domain: 'Distributed Systems & Backend',
      lead: 'High-concurrency systems, asynchronous event streaming, and resilient microservices.',
      skills: ['Go', 'Node.js', 'Rust', 'Python', 'Apache Kafka', 'gRPC', 'REST APIs', 'GraphQL', 'WebSockets'],
    },
    {
      domain: 'Cloud Infrastructure & DevOps',
      lead: 'Production cloud topologies, container orchestration, and Infrastructure as Code.',
      skills: ['Kubernetes', 'Docker', 'Terraform', 'AWS (EKS, S3, RDS)', 'GCP (GKE, Cloud Run)', 'GitHub Actions', 'Envoy'],
    },
    {
      domain: 'Modern Frontend & UX',
      lead: 'Accessible, ultra-fast web applications with clean design and rigorous state management.',
      skills: ['React 19', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Motion / Framer', 'Vite', 'HTML5 / WebGL', 'State Machines'],
    },
    {
      domain: 'Databases & Storage Architecture',
      lead: 'Relational integrity, in-memory caching, distributed columnar stores, and search.',
      skills: ['PostgreSQL', 'Redis', 'ClickHouse', 'Firestore', 'Elasticsearch', 'DynamoDB', 'Database Sharding'],
    },
  ],
  experiences: [
    {
      period: '2023 — Present',
      role: 'Staff Software Engineer & Cloud Architect',
      company: 'Apex Cloud Platforms',
      location: 'San Francisco, CA (Hybrid)',
      summary: 'Architecting core multi-tenant microservices platform, edge routing mesh, and high-throughput real-time distributed telemetry services.',
      highlights: [
        'Led architecture of a unified distributed message bus processing over 14M daily transactions with 99.99% availability.',
        'Spearheaded migration to containerized Kubernetes workloads, reducing monthly cloud infrastructure spend by $140,000.',
        'Mentored 12 mid-level and senior software engineers across engineering design reviews and architectural RFCs.',
      ],
      technologies: ['Go', 'Kubernetes', 'Apache Kafka', 'AWS', 'PostgreSQL', 'Terraform', 'TypeScript'],
    },
    {
      period: '2020 — 2023',
      role: 'Senior Full-Stack Engineer',
      company: 'HyperScale Systems',
      location: 'San Francisco, CA',
      summary: 'Built high-concurrency developer tooling platforms, real-time analytics dashboards, and scalable internal APIs.',
      highlights: [
        'Engineered real-time analytics streaming engine handling 25,000 concurrent WebSocket connections with sub-20ms latency.',
        'Created modular component design system in TypeScript and Tailwind, adopted across 4 major flagship product suites.',
        'Implemented end-to-end automated CI/CD deployment pipelines cutting deployment cycle time from 45 minutes to 4 minutes.',
      ],
      technologies: ['TypeScript', 'React', 'Node.js', 'Redis', 'Docker', 'GraphQL', 'PostgreSQL'],
    },
    {
      period: '2018 — 2020',
      role: 'Software Engineer',
      company: 'Continuum Labs',
      location: 'Seattle, WA',
      summary: 'Developed customer-facing web applications, REST microservices, and automated testing suites for high-growth SaaS clients.',
      highlights: [
        'Implemented customer billing and subscription checkout workflows supporting multi-currency processing.',
        'Reduced frontend bundle sizes by 44% through dynamic route code-splitting and asset pipeline optimization.',
        'Refactored legacy monolith endpoints into decoupled microservices with comprehensive integration test coverage.',
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Jest'],
    },
  ] as Experience[],
  articles: [
    {
      id: 'zero-downtime-migrations',
      title: 'Architecting Zero-Downtime Schema Migrations in Sharded PostgreSQL',
      readTime: '6 min read',
      publishedDate: 'January 2026',
      category: 'Database Architecture',
      excerpt: 'Strategies for performing non-blocking column additions, index rebuilds, and sharded data redistributions in 24/7 mission-critical databases.',
      content: [
        'When operating sharded relational databases supporting high transaction volumes, traditional DDL commands that acquire exclusive table locks (ACCESS EXCLUSIVE) can lead to catastrophic cascade connection timeouts.',
        'In this breakdown, we examine the expand/contract design pattern, dual-writing techniques, and asynchronous backfills using PostgreSQL logical replication.',
        'By utilizing lock timeout configurations, retry backoffs, and concurrent index creation, we achieved 100% availability across 18 terabytes of partitioned customer data.',
      ],
    },
    {
      id: 'crdt-state-sync',
      title: 'Sub-Millisecond State Convergence with CRDTs in Collaborative Web Apps',
      readTime: '5 min read',
      publishedDate: 'November 2025',
      category: 'Distributed Systems',
      excerpt: 'How Conflict-free Replicated Data Types solve multi-user concurrent editing without complex centralized server locking or lost updates.',
      content: [
        'Building collaborative digital workspaces historically relied on Operational Transformation (OT), which requires a centralized server to serialize and transform every operation.',
        'State-based and operation-based CRDTs allow distributed clients to independently mutate local document trees while mathematically guaranteeing that all nodes converge to identical states once updates propagate.',
        'We examine how integrating Yjs with WebSockets and local IndexedDB caching delivers instantaneous local UI responsiveness even under degraded network conditions.',
      ],
    },
    {
      id: 'monolith-to-event-driven',
      title: 'From Monolith to Event-Driven Microservices: Real-World Lessons at Scale',
      readTime: '7 min read',
      publishedDate: 'August 2025',
      category: 'Software Architecture',
      excerpt: 'Practical takeaways from decomposing a 7-year-old monolithic Rails application into an event-driven Go and Kafka ecosystem.',
      content: [
        'Microservice migrations are often romanticized, but premature decomposition introduces distributed state complexity, partial failure modes, and operational overhead.',
        'The key to successful migration is identifying bounded domain contexts through event storming and utilizing the Strangler Fig pattern rather than attempting a high-risk big-bang rewrite.',
        'We share architectural guidelines on transaction outbox patterns, idempotency keys, and dead-letter queue governance that saved our team from distributed consistency headaches.',
      ],
    },
  ] as Article[],
};
