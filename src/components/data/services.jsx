const services = [
    {
        title: "Frontend Development",
        icon: ({ className }) => (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 10.93 5.16-1.191 9-5.38 9-10.93V7l-10-5z"/>
            </svg>
        ),
        description: "Building responsive, interactive web applications with Next.js, React.js, Tailwind CSS, and modern UI libraries",
    },
    {
        title: "Backend Development",
        icon: ({ className }) => (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.5 12.75v6L12 22.25l7.5-3.5v-6L12 16.25l-7.5-3.5zM12 1.75L4.5 5.25v6L12 14.75l7.5-3.5v-6L12 1.75z"/>
            </svg>
        ),
        description: "Creating robust server-side applications with NestJS, Node.js, Express.js, and RESTful API development",
    },
    {
        title: "Database & Storage",
        icon: ({ className }) => (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C9.24 2 7 3.79 7 6v2c0 2.21 2.24 4 5 4s5-1.79 5-4V6c0-2.21-2.24-4-5-4zM7 10v2c0 2.21 2.24 4 5 4s5-1.79 5-4v-2c0 2.21-2.24 4-5 4s-5-1.79-5-4zM7 14v2c0 2.21 2.24 4 5 4s5-1.79 5-4v-2c0 2.21-2.24 4-5 4s-5-1.79-5-4z"/>
            </svg>
        ),
        description: "Designing efficient data storage solutions with MongoDB, Firebase, Supabase, and database optimization",
    },
    {
        title: "Programming Languages",
        icon: ({ className }) => (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
            </svg>
        ),
        description: "Proficient in JavaScript, TypeScript, Python, C, and C++ for versatile software development",
    },
    {
        title: "Web Technologies",
        icon: ({ className }) => (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
        ),
        description: "Expert in HTML5, CSS3, responsive design, SSR/SSG, and modern web performance optimization",
    },
    {
        title: "UI/UX Design",
        icon: ({ className }) => (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
        ),
        description: "Creating intuitive user experiences and beautiful interfaces using Figma and design systems",
    },
]

export default services