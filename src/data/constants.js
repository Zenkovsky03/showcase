import pb from "../images/pb_logo.webp"
import zse  from "../images/zse_logo.png"
import rider from "../images/blue_logo.png"


import corgy from "../images/coryg_connect_logo.jpg"


import django_logo from "../images/django_logo.svg"
import git_logo from "../images/git_logo.png"
import html_logo from "../images/html_logo.png"
import aws_logo from "../images/amazon_aws-icon.svg"
import chash_logo from "../images/chash_logo.webp"
import css_logo from "../images/css_logo.svg"
import docker_logo from "../images/docker-icon.svg"
import drf_logo from "../images/drf_logo.png"
import jinja_logo from "../images/jinja_logo.png"
import js_logo from "../images/js_logo.webp"
import mysql_logo from "../images/mysql-official.svg"
import php_logo from "../images/php-icon.svg"
import python_logo from "../images/python_logo.svg"
import rds_logo from "../images/rds_logo.png"
import react_logo from "../images/reactjs-icon.svg"
import s3bucket_logo from "../images/s3bucket_logo.png"
import sqllite_logo from "../images/sqlite-icon.svg"
import postgres_logo from "../images/postgres.svg"




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
                image: css_logo,
            },
            {
                name: "Python",
                image: python_logo,
            },
            {
                name: "Django",
                image: django_logo,
            },
            {
                name: "DjangoRestFramework",
                image: django_logo,
            },
            {
                name: "JavaScript",
                image: js_logo,
            },
            {
                name: "Git",
                image: git_logo,
            },
            {
                name: "Docker",
                image: docker_logo,
            },
            {
                name: "MySQL",
                image: mysql_logo,
            },
            {
                name: "Jinja",
                image: jinja_logo,
            },
        ],
    },
    {
        title: "I have contact with",
        skills: [
            {
                name: "PostgresSQL",
                image: postgres_logo,
            },
            {
                name: "PHP",
                image: php_logo,
            },
            {
                name: "C#",
                image: chash_logo,
            },
            {
                name: "React",
                image: react_logo,
            },
            {
                name: "AWS",
                image: aws_logo,
            },
            {
                name: "RDS",
                image: rds_logo,
            },
            {
                name: "S3BUCKET",
                image: s3bucket_logo,
            },
            {
                name: "SQLite",
                image: sqllite_logo,
            },
        ],
    },
    // {
    //     title: "Others",
    //     skills: [
    //         {
    //             name: "Git",
    //             image:git_logo,
    //         },
    //         {
    //             name: "AWS",
    //             image: "/",
    //         },
    //     ],
    // },
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
