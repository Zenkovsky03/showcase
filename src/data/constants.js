import pb from "../images/pb_logo.webp"
import zse  from "../images/zse_logo.png"
import rider from "../images/blue_logo.png"


import corgy from "../images/coryg_connect_logo.jpg"


import django_logo from "../images/django_logo.svg"
import git_logo from "../images/git_logo.png"
import html_logo from "../images/html_logo.png"
export const Bio = {
    name: "Mateusz Zaniewski",
    roles: [
        "Python developer",
        "Software Engineer",
    ],
    description:
        "",
    github: "https://github.com/Zenkovsky03",
    resume:
        "/SOON",
    linkedin: "https://www.linkedin.com/in/mateusz-zaniewski-43a394220/",
};

export const skills = [
    {
        title: "I use regularly",
        skills: [
            {
                name: "HTML5",
                image: html_logo,
            },
            {
                name: "CSS",
                image: "/",
            },
            {
                name: "Python",
                image: "/",
            },
            {
                name: "Django",
                image: "/",
            },
            {
                name: "DjangoRestFramework",
                image: "/",
            },
            {
                name: "JavaScript",
                image: "/",
            },
            {
                name: "Git",
                image: "/",
            },
            {
                name: "Docker",
                image: "/",
            },
            {
                name: "MySQL",
                image: "/",
            },
            {
                name: "Jinja",
                image: "/",
            },
        ],
    },
    {
        title: "I have contact with",
        skills: [
            {
                name: "PostgresSQL",
                image: django_logo,
            },
            {
                name: "PHP",
                image: django_logo,
            },
            {
                name: "C#",
                image: django_logo,
            },
            {
                name: "React",
                image: django_logo,
            },
            {
                name: "AWS",
                image: django_logo,
            },
            {
                name: "RDS",
                image: django_logo,
            },
            {
                name: "S3BUCKET",
                image: django_logo,
            },
            {
                name: "SQLite",
                image: django_logo,
            },
        ],
    },
    {
        title: "Others",
        skills: [
            {
                name: "Git",
                image:git_logo,
            },
            {
                name: "AWS",
                image: "/",
            },
        ],
    },
];

export const experiences = [
    {
        id: 1,
        img: rider,
        role: "Project Menager",
        company: "BlueRider",
        date: "february-march 2022",
        desc: "He successfully implemented himself in an exemplary software development process. Demonstrated a high level of communication within the team during his role as Project Manager. Ensured the definition of tasks for team members, supported them in the development of applications and was responsible for the presentation of developed functionalities to end users.",
        skills: [
            "JavaScript",
            "git",
            "git-flow",
            "gitlab",
            "React",
            "Redmine",
        ],
        //doc: "https://media.licdn.com/dms/image/D4D2DAQFlp60ZqHuaFQ/profile-treasury-image-shrink_1280_1280/0/1691180828512?e=1692381600&v=beta&t=mM5Y_NE5EPlQhez5FAN6NLVSKcO_Ojt_9Gq3mnFGkAQ",
    },


];

export const education = [
    {
        id: 1,
        img: zse,
        school: "Secondary Technical School ofg Electrical Engineering in Bialystok",
        date: "2019 - 2023",
        // grade: "Programmer technician",
        desc: "During my education, I gained a solid foundation in programming and computer science. I mastered key skills such as working with databases, developing web, mobile and desktop applications, as well as issues related to algorithms, data structures and IT security.",
        degree: "Programmer technician",
    },
    {
        id: 2,
        img: pb,
        school: "Bialystok University of Technology",
        date: "2023 - 2027",
        // grade: "Computer science",
        desc: "During my studies, I develop my knowledge of computer science and modern technologies. I acquire skills related to programming, design and optimization of information systems, as well as working with databases and network infrastructure.I pay special attention to algorithmics, data analysis and IT security issues. ",
        degree: "Computer science",
    },
];

export const projects = [
    {
        id: 9,
        title: "Corgy Connect",
        date: "2024",
        description:
            "A website dedicated to dog lovers built using django, drf and templates",
        image: corgy,
        tags: [
            "Django",
            "Python",
            "Jinja",
            "HTML5",
            "CSS",
            "AWS",
            "RDS",
            "S3BUCKET",
            "DRF",
            "SQLite",
            "API",
        ],
        category: "web app",
        github: "https://github.com/Zenkovsky03/CorgyConnect",
        webapp: "/",
    },
];
