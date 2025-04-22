import { MdWeb } from 'react-icons/md'
import { FaServer } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'
import { BiPaint } from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'
import { SiNextdotjs, SiTailwindcss, SiStyledcomponents } from 'react-icons/si'

export const services = [
    {
        title: "Frontend Development",
        icon: SiNextdotjs,
        description: "Next.js, React.js, Tailwind CSS, Styled Components, Ant Design",
    },
    {
        title: "Backend Development",
        icon: FaServer,
        description: "NestJS, Node.js, Express.js, REST APIs, Authentication",
    },
    {
        title: "Database & Storage",
        icon: BsDatabase,
        description: "MongoDB, Mongoose, Firebase, Supabase",
    },
    {
        title: "Programming Languages",
        icon: VscCode,
        description: "JavaScript, TypeScript, C, C++, Python",
    },
    {
        title: "Web Technologies",
        icon: MdWeb,
        description: "HTML, CSS, SSR/SSG",
    },
    {
        title: "UI Design",
        icon: BiPaint,
        description: "Figma",
    },
]
