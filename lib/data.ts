import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'mobinmithun@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Mobin, I am reaching out to you because...',

    oldPortfolio: 'https://mobinmithun.weebly.com',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/mobinmithun' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/mobinmithun' },
    { name: 'facebook', url: 'https://www.facebook.com/mobinmithun' },
    // { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    documentation: [
        {
            name: 'Notion',
            icon: '/logo/notion.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Jira',
            icon: '/logo/jira.png',
        },
        {
            name: 'Trello',
            icon: '/logo/trello.png',
        },
        {
            name: 'GitBook',
            icon: '/logo/gitbook.jpeg',
        },
        {
            name: 'Confluence',
            icon: '/logo/confluence.png',
        },
    ],
    analytics: [
        {
            name: 'Google Analytics',
            icon: '/logo/google analytics.png',
        },
        {
            name: 'Mixpanel',
            icon: '/logo/mixpanel.png',
        },
        {
            name: 'Clarity',
            icon: '/logo/clarity.png',
        },
        {
            name: 'Amplitude',
            icon: '/logo/amplitude.png',
        },
        {
            name: 'Hotjar',
            icon: '/logo/hotjar.png',
        },

    ],
    prototyping: [
        {
            name: 'Figma',
            icon: '/logo/figma.png',
        },
        {
            name: 'Miro',
            icon: '/logo/miro.svg',
        },
        {
            name: 'Adobe XD',
            icon: '/logo/adobe_XD.png',
        },
        {
            name: 'Canva',
            icon: '/logo/canva.jpeg',
        },
    ],
    collaboration: [
        {
            name: 'Slack',
            icon: '/logo/slack.png',
        },
        {
            name: 'Discord',
            icon: '/logo/discord.png',
        },
    ],
        automation: [
            {
                name: 'n8n',
                icon: '/logo/n8n.png',
            },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'OGRO',
        slug: 'ogro',
        techStack: [
            'Figma',
            'Notion',
            'FigJam',
            'Canva',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        liveUrl: 'https://play.google.com/store/apps/details?id=global.wegro.wegroapp&hl=en&gl=US',
        year: 2024,
        description: `OGRO is a comprehensive field operations and monitoring platform built for WeGro’s agriculture investment ecosystem. It enables Field Officers (FO), Area Managers (AM), and Regional Managers (RM) to manage farmer onboarding, input distribution, loan agreements, and repayment tracking. The app includes dynamic role-based workflows, multilingual interface, data validation layers, and real-time dashboards for operational oversight. It bridges field data with centralized decision-making, supporting transparency and accountability across WeGro’s agri-finance operations.`,
        role: `As the Product Manager of the OGRO App, I:\n
- Designed the entire UI/UX of the OGRO mobile app using Figma, tailored for multilingual rural users with distinct user roles (FO, AM, RM, HOO).\n
- Defined and mapped out all operational workflows across modules like farmer application, loan approval, input selection, and collection tracking.\n
- Built structured process maps to optimize onboarding, loan agreement validation, and repayment cycles.\n
- Architected dynamic logic flows and multi-stage approvals between field officers and central WeGro staff.\n
- Collaborated closely with engineering and field operations to ensure the app aligned with real-world usability and internal business logic.\n
- Led content development for user manual, video tutorials, and online training modules to support large-scale deployment.\n`,
    },
    {
        title: 'Resume Roaster',
        slug: 'resume-roaster',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description:
            'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:\n- Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.\n- Integrated GPT-4 for AI-driven feedback and insights.\n- Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    },
    {
        title: 'Real Estate',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:\n- Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.\n- Integrated dynamic state management for efficient handling of property data.\n- Implemented multi-language support with React i18n to cater to diverse audiences.\n- Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description:
            'One of the most challenging projects in Frontend Mentor.\n\nI developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.',
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Jr. Product Manager',
        company: 'WeGro',
        duration: 'Nov 2023 - Present',
    },
];
