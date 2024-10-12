import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileIcon, DownloadIcon } from "lucide-react";

export const DATA = {
  name: "Ammar Safdari",
  initials: "AS",
  url: "https://ammar.io",
  location: "Ann Arbor, MI",
  locationLink: "https://www.google.com/maps/place/Ann+Arbor,+MI",
  description:
    "Computer Science and Physics B.S. with a passion for AI, clean energy tech, and blockchain. Experienced in full stack development, AI, and I guess physics if that helps.",
  summary:
    "After finishing up my degrees at the University of Michigan Ann Arbor (**GO BLUE**), I went to work full-time on what is essentially an Amazon/Google shopping competitor. Was that a good idea? Still very unclear, but I've definitely learned a lot and I got to participate in [buildspace sf2](https://buildspace.so/sf2), which has been one of the best experiences of my life thus far. My interests are a bit all over the place, but the primary ones are AI, clean energy tech, and blockchains! I have work experience as a full stack developer, newsletter writer, and consumer startup founder. If you'd like to get in touch to work on projects, happy to meet!",
  avatarUrl: "./grad.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Firebase",
    "Docker",
    "Java",
    "C++",
    "Flask",
    "SQL",
    "Google Cloud Platform",
    "AWS",
    "Supabase",
    "Stripe",
    "Google Ads",
    "Social Media Marketing - Insta, Tiktok, YT",
    "SEO"
  ],
  interests: [
    "Table Tennis",
    "Tennis",
    "Basketball",
    "Books - biographies, sci-fi, fantasy, and physics",
    "Chess",
    "Stocks",
    "Clean Energy",
    "Energy Infrastructure",
    "AI",
    "Blockchain",
    "DeFi"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "asafdari@umich.edu",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/asafdari-boop/",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ammar-safdari-b4b77819b/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/asapdar",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:asafdari@umich.edu",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Claros",
      href: "https://claros.so/",
      // badges: ["Python", "AWS ECS", "Typescript"],
      location: "Remote",
      title: "Co-Founder & CEO",
      logoUrl: "/logo-circle.png",
      start: "2023",
      end: "Present",
      description:
        "Working on Claros, an AI personal shopping assistant. Claros aims to replicate the level of personalized service found in brick-and-mortar stores digitally, leveraging the power of Large Language Models (LLMs) to provide scalable, on-demand shopping assistance. Claros also performs research online before recommending products, replicating the due diligence process a customer goes through before clicking buy. Think better Rufus.",
    },
    {
      company: "Newsletter Writer",
      href: "https://chatgptnewsletter.com",
      // badges: ["Twitter", "Linkedin", "beehiiv"],
      location: "Remote",
      title: "Writer",
      logoUrl: "/logonewsletter.png",
      start: "2023",
      end: "2023",
      description:
        "At the start of 2023, I began writing a newsletter as the generative AI craze was entering the mainstream, led by its poster child ChatGPT. I used this newsletter as an opportunity to condense my weekly learnings and discoveries into a 1.5K word weekly newsletter. Over the months, I grew the newsletter to around 2K readers, with a 37% open rate and 10% CTR. I particularly liked reviewing AI apps and products and releasing a shortlist of the coolest tools I had found that week. After graduating from Umich, I decided to hang up the proverbial pen and go all-in on dev for a while and that's when I found Claros!",
    },
    {
      company: "Vianai",
      href: "https://www.vian.ai/",
      // badges: ["Python", "Neural Nets", "Decision Trees", "SVMs", "GANs"],
      location: "Remote",
      title: "Software Intern",
      logoUrl: "/vianaiclose.png",
      start: "2022",
      end: "2022",
      description:
        "Worked as a software intern at Vianai, receiving mentorship from the head of prototyping, Kevin Dunnel. Built sophisticated models with decision trees, Support Vector Machines, Recurrent Neural Nets, Convolutional Neural Nets, and Generative Adversarial Networks. Developed a song recommendation backend service for an online marketplace connecting producers and artists. Worked on platform dev for Vianai's MLOPS platform, building webapps with React, backend classes in our AI library, SQL transformers for data preprocessing, and investigating/evaluating emerging techniques in the field of AI for potential integration into our suite of services.",
    },
    {
      company: "Mach",
      href: "http://machtours.com/",
      // badges: ["React Native", "Google Firestore"],
      location: "Remote",
      title: "COO and Co-Founder",
      logoUrl: "/mach.png",
      start: "2021",
      end: "2023",
      description:
        "I co-founded Mach with two other friends, Samuel You and Nolan Kuza, two other students at UM. Mach is a new platform for exploring and having fun with friends, while also helping small businesses which are featured prominently on our platform recoup lost revenue from COVID. Mach also serves as an altogether better form of social media, with an emphasis on translating virtual interactions into physical and in-person enjoyable experiences. ",
    },
    {
      company: "Lookout",
      href: "https://lookout.finance",
      // badges: ["React", "CSS", "HTML"],
      location: "Remote",
      title: "Front End Developer",
      logoUrl: "/lookout.png",
      start: "2021",
      end: "2022",
      description:
        "Worked as a front end developer for Lookout, a service that transforms the way people manage their personal finances through an easy-to-use and beautiful interface that automatically tracks your income, expenses, and net worth at any given time across different bank accounts and asset classes. Created reusable components and developed the sign-in/sign-up flow and the MyAccounts and MyCash pages using React, CSS, and HTML.",
    },
    {
      company: "Sandia National Labs",
      href: "https://www.sandia.gov/",
      // badges: ["GCP", "Docker", "Postgres", "React", "Python"],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/sandia.jpeg",
      start: "2021",
      end: "2022",
      description:
        "Worked on the BatteryArchive initiative, an online repository for standardized battery data. Gained experience using front end and backend frameworks as well as containerization techniques (React.js, Node.js, PostgreSQL, and Docker). Developed data upload and download scripts using Google Cloud APIs. Created services using Cron or systemctl that run on Google Cloud virtual machines to automatically deal with incoming datasets. Created scripts to parse different data formats into a common schema that is digestible by our database.",
    },
    {
      company: "Done Waiting",
      href: "https://donewaiting.org",
      // badges: ["Wix", "Flask", "Firebase"],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/dw.jpg",
      start: "2020",
      end: "2021",
      description:
        "Created and managed the website donewaiting.org using Wix. Developed a custom phonebanking software system using Flask, React, and Google Firebase to support progressive candidates.",
    }
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf2, s5",
      logoUrl: "/buildspace.jpg",
      start: "2022",
      end: "2024",
    },
    {
      school: "University of Michigan Ann Arbor",
      href: "https://umich.edu",
      degree: "Bachelor's Degree in Computer Science and Interdisciplinary Physics",
      logoUrl: "/umich.png",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Speakupforpalestine.com",
      href: "https://speakupforpalestine.com",
      active: true,
      description:
        "Created a website to make it easy for people to contact their reps (local, state, and national) to voice their discontent with the way the U.S. is handling the Israel-Palestine conflict. It gives pre-filled message templates and various means to contact each rep across their different platforms. So far a couple thousand people have used it to contact their reps and send some sort of message, but the goal is to provide recurring utility to users beyond simply providing quick contact information. This project is supported by the Tech For Palestine Incubator.",
      technologies: ["React", "Google APIs"],
      links: [
        {
          type: "Website",
          href: "https://speakupforpalestine.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Tech For Palestine",
          href: "https://techforpalestine.org/",
        },
      ],
      image: "/palestine.svg",
    },
    {
      title: "Forta Sybil Bot",
      href: "https://app.forta.network/bot/0xba84cbb78b118afdb4db767582d76eb3f7e0ad0186edc91dffa761ce13d993c4/health",
      active: true,
      description:
        "Sybil attacks use a single network node to operate many fake identities, often simultaneously, within a Peer-to-Peer (P2P) network. A sybil attack leads to a small number of network actors gaining an undue share of influence, which in the context of an airdrop, means a larger share of governance tokens. However, intelligent analysis of transaction history can reveal the wallet addresses behind these attacks and raise alerts when they have occurred. I wrote a program for the Forta network to detect and flage these sybil attacks across blockchains.",
      technologies: ["Python", "Docker"],
      links: [
        {
          type: "Source",
          href: "https://github.com/delineateAI/sybil-bot",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Forta",
          href: "https://app.forta.network/bot/0xba84cbb78b118afdb4db767582d76eb3f7e0ad0186edc91dffa761ce13d993c4/health",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/forta.png",
    },
    {
      title: "Delineate",
      href: "https://github.com/asafdari-boop/Delineate",
      active: true,
      description:
        "Created a webapp that explains smart contracts and scans them for vulnerabilities using LLMs. Tested it on a suite of contract vulnerabilities, where it managed to catch over 90% of the bugs (which had led to multi-million dollar breaches in prior months).",
      technologies: ["python", "javascript", "openai"],
      links: [
        {
          type: "Delineate",
          href: "https://github.com/delineateAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/smartcontract.jpeg",
    },
    {
      title: "Crypto/Stock Trading Tools",
      active: true,
      description:
        "Built a simple script to access my Coinbase account and provide advanced statistics on my portfolio performance, like CoinTracker without the UI. Also built a terminal tool to simulate different portfolio performances and track it all through terminal.",
      technologies: ["python", "bash"],
      links: [
        {
          type: "Coinbase Portfolio Stats",
          href: "https://github.com/asafdari-boop/CoinbasePortfolioStats",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Portfolio Simulator",
          href: "https://github.com/asafdari-boop/Stock-Portfolio-CSV-Simulator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/coinbase.png",
    }
  ],
  school_projects: [
    {
      title: "Bot Banishers",
      href: "https://github.com/asafdari-boop/EECS448BotBanishers",
      active: true,
      description:
        "Created an AI text detector trained off of thousands of pairwise human and AI-generated Wikipedia article intros. Tested a variety of models including neural nets, LSTMs, and an XGBoost tree.",
      technologies: ["Python", "TensorFlow", "XGBoost"],
      links: [
        {
          type: "Source",
          href: "https://github.com/asafdari-boop/EECS448BotBanishers",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/banisher.jpeg",
    },
    {
      title: "Network File Server",
      href: "",
      active: true,
      description:
        "Created a multithreaded client-server file server to process requests to modify a filesystem. Used fine-grained, hand-over-hand reader/writer locks to protect files and directories from concurrent access issues. Used the traditional inode and direntries data structures to make the filesystem.",
      technologies: ["Operating Systems"],
      links: [],
      image: "/FS.png",
    },
    {
      title: "Forensics Project",
      href: "",
      active: true,
      description:
        "We were given a disk drive to study—looked for persistent traces in memory (bash_history, logs, etc.), learned how to retrieve info from a disk image without booting the OS, used password crackers and steganography to recover info in random images, browsed the dark web and decrypting forums, deployed SQL injection attacks to gain access to fake websites, etc.",
      technologies: ["Cybersecurity", "Forensics"],
      links: [],
      image: "/foreign.jpg",
    },
    {
      title: "MD5 Length Extension and Padding Oracle Attacks",
      href: "",
      active: true,
      description:
        "Implemented a length extension attack on MD5 which allows an attacker to append to a message and compute its verifier, which will then be accepted as valid by the intended recipient. Also implemented a padding oracle attack on SHA256, which allows an attacker to decode an entire message by exploiting a vulnerability in returning both a padding and invalid MAC error.",
      technologies: ["Cybersecurity"],
      links: [],
      image: "/lock.png",
    },
    {
      title: "Application Security Project",
      href: "",
      active: true,
      description:
        "An introduction to control-flow hijacking vulnerabilities in application software, including buffer overflows, integer overflows, no-op sleds, ROP Chain attacks, and more. A series of vulnerable programs was provided along with a virtual machine environment to develop exploits.",
      technologies: ["Cybersecurity"],
      links: [],
      image: "/appsec.jpeg",
    },
    {
      title: "SQL Injection, XSS, and CSRF Attacks",
      href: "",
      active: true,
      description:
        "Implemented various SQL injection attacks on a mock server, logging in as a user without their password by taking advantage of unsanitized inputs to insert malicious SQL code. Also devised cross-site scripting attacks to steal a fake user's browsing info with JavaScript as well as cross-site forgery attacks.",
      technologies: ["Cybersecurity"],
      links: [],
      image: "/xss.webp",
    },
    {
      title: "Virtual Memory Pager",
      href: "",
      active: true,
      description:
        "Created a virtual memory pager to provide the abstraction of separate, protected address spaces for multiple processes. Our implementation supported shared, file-backed pages as well as swap-backed pages that are specific to a process. For physical memory eviction and page replacement, we used the clock algorithm as an approximation for LRU.",
      technologies: ["Operating Systems"],
      links: [],
      image: "/vm.png",
    },
    {
      title: "C++ Threading Library",
      href: "",
      active: true,
      description:
        "Programmed a C++ threading library that supports join, yield, mutexes, condition variables, and multithreaded program execution on multicore processors. This library makes use of inter-processor interrupts and timer interrupts as well as guards to ensure the OS can swap threads during user function execution and ensure kernel-level atomicity across CPUs.",
      technologies: ["Operating Systems"],
      links: [],
      image: "/threads.png",
    },
    {
      title: "Multithreaded Disk Scheduling",
      href: "",
      active: true,
      description:
        "Created a multithreaded disk scheduler with multiple synchronous requester threads and one servicer thread which handles disk requests with Shortest Seek Time First processing. This means the tracks closest to the current track in the servicer will be selected among the available tracks in the disk data structure.",
      technologies: ["Operating Systems"],
      links: [],
      image: "/Disk.jpeg",
    },
    {
      title: "Instagram Clone",
      href: "https://github.com/asafdari-boop/Instagram-Clone",
      active: true,
      description:
        "Remade Instagram using a combination of static pages, server-side dynamics, and client-side dynamics. Used Flask to handle routing and API requests, Jinja to render templates, and React to handle client-side processes.",
      technologies: ["Flask", "React", "Jinja"],
      links: [
      ],
      image: "/insta.png",
    },
    {
      title: "MapReduce",
      href: "https://github.com/asafdari-boop/MapReduce",
      active: true,
      description:
        "Built a MapReduce framework like Hadoop for processing jobs using workers and managers using the Python threads library.",
      technologies: ["Python", "Threads"],
      links: [
      ],
      image: "/mapreduce.jpeg",
    },
    {
      title: "Search Engine",
      href: "",
      active: true,
      description:
        "Built an end-to-end search engine similar to Google circa 2008 using tf-idf and PageRank. The inverted index of web pages is wrapped in index servers segmented by document with a front end that returns ranked search results.",
      technologies: ["Web Systems", "Full Stack"],
      links: [],
      image: "/google.png",
    },
    {
      title: "Introduction to AI Projects",
      href: "",
      active: true,
      description:
        "Built tree search algorithms like Breadth First Search and A* search. Implemented a Sudoku solver using Arc Consistency 3 and backtracking. Coded rejection sampling, likelihood weighting, and Gibbs sampling for approximate inference. Also implemented a decision tree learning program.",
      technologies: ["AI/ML", "Algorithms"],
      links: [],
      image: "/ai.jpeg",
    },
    {
      title: "Intro to Machine Learning Projects",
      href: "",
      active: true,
      description:
        "Created a sentiment classifier using SVM with different kernels (linear, quadratic, etc.) and logistic regression. Built a CNN to classify dog breeds using different model architectures with downsampling and dropout. Performed audio emotion classification using HMMs, GMMs, and Neural Nets and clustered data with K-means and hierarchical models. Also built an HMM to generate text in the style of Shakespeare with a parameter controlling whether it was bigram, trigram, etc.",
      technologies: ["AI/ML", "Algorithms"],
      links: [],
      image: "/ml.jpeg",
    },
    {
      title: "SillyQL",
      href: "",
      active: true,
      description:
        "Wrote a program to emulate a basic relational database with an interface based on a subset of a standard query language in C++. This was accomplished using unordered maps, hash tables, functors, and comparators.",
      technologies: ["Algorithms", "Databases"],
      links: [],
      image: "/sql2.png",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image: "/hack-western.png",
      links: [],
    },
    {
      title: "Hack The North",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus-wide events in real-time to all students.",
      image: "/hack-the-north.png",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communicates a victim's medical data from inside an ambulance to doctors at the hospital.",
      image: "/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image: "/developer-week.jpg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    ],
    research: [
      {
        title: "Development of Thermal Runaway Risk Database",
        location: "Sandia National Laboratories",
        dates: "2021",
        description:
          "Developed and implemented a database schema for battery abuse data and a data importer to collect data from different institutions.",
        image: "/thermal-runaway.png",
        links: [
          {
            title: "Presentation",
            icon: <FileIcon className="h-4 w-4" />,
            href: "https://www.sandia.gov/app/uploads/sites/82/2021/10/605_Wang_Hsin_SafetyReliaiblity.pdf",
          },
        ],
      },
      {
        title: "AMO Internships 2021 Summer Research Presentation",
        location: "National Labs",
        dates: "Summer 2021",
        description:
          "Presented my work on Battery Archive over the summer of 2021 at a research conference between the national labs.",
        image: "/amo-internships.png",
        links: [
          {
            title: "Presentation",
            icon: <FileIcon className="h-4 w-4" />,
            href: "assets/EERE presi on BA yp ver3.pptx",
          },
        ],
      },
      {
        title: "Thornton Research Group",
        location: "University of Michigan",
        dates: "2020-2021",
        description:
          "Investigated various lithium ion battery configurations and modifications with COMSOL/MATLAB Simulink to automate data extraction, analysis, and visualization. Examined graphite, hard carbon hybrid anode batteries to determine the effect of certain battery parameters on performance measures. Helped publish a paper called: [Enabling 6C fast charging of Li‐ion batteries with graphite/hard carbon hybrid anodes]",
        image: "/thornton-research.png",
        links: [
          {
            title: "Research Paper",
            icon: <FileIcon className="h-4 w-4" />,
            href: "https://onlinelibrary.wiley.com/doi/abs/10.1002/aenm.202003336",
          },
        ],
      },
      {
        title: "Tol Research Group",
        location: "University of Michigan",
        dates: "2019-2020",
        description:
          "Investigated different metasurface designs for energy harvesting, localization, and redirection of mechanical waves through experimentation and COMSOL modeling. Proposed and modeled multiple candidate metasurfaces to cut down on manufacturing costs and increase adaptability of designs.",
        image: "/tol-research.png",
        links: [],
      },
  ]
} as const;
