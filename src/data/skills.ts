import js from '../assets/habilidades/js.png'
import ts from '../assets/habilidades/ts.png'
import python from '../assets/habilidades/python.png'
import html from '../assets/habilidades/html.png'
import css from '../assets/habilidades/css.png'
import react from '../assets/habilidades/react.png'
import tailwind from '../assets/habilidades/tailwind.png'
import reactrouterdom from '../assets/habilidades/reactrouterdom.png'
import jquery from '../assets/habilidades/jquery.png'
import tanstackquery from '../assets/habilidades/tanstackquery.png'
import zustand from '../assets/habilidades/zustand.png'
import prisma from '../assets/habilidades/prisma.ico'
import sequelize from '../assets/habilidades/sequelize.ico'
import motion from '../assets/habilidades/motion.png'
import pandas from '../assets/habilidades/pandas.ico'
import axios from '../assets/habilidades/axios.png'
import express from '../assets/habilidades/express.png'
import fastapi from '../assets/habilidades/fastapi.png'
import postgres from '../assets/habilidades/postgres.ico'
import mongodb from '../assets/habilidades/mongodb.ico'
import github from '../assets/habilidades/github.png'
import git from '../assets/habilidades/git.ico'
import figma from '../assets/habilidades/figma.png'
import postman from '../assets/habilidades/postman.png'
import vsc from '../assets/habilidades/vsc.ico'
import jira from '../assets/habilidades/jira.ico'
import notion from '../assets/habilidades/notion.png'
import docker from '../assets/habilidades/docker.png'

export type Skill = {
  title: string
  // Logo (archivo en assets/habilidades). Si no hay logo se usa un badge con iniciales
  img?: string
  badge?: { label: string, bg: string, fg?: string }
  // Sin url el chip no es un link (metodologias, conceptos)
  url?: string
}

export type SkillCategory = {
  // Llave en t.skills de los JSON de idioma (nombre de la categoria)
  key: 'languages' | 'frameworks' | 'databases' | 'tools' | 'methodologies'
  items: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    key: 'languages',
    items: [
      { title: 'JavaScript', img: js, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { title: 'TypeScript', img: ts, url: "https://www.typescriptlang.org/" },
      { title: 'Python', img: python, url: "https://www.python.org/" },
      { title: 'HTML', img: html, url: "https://developer.mozilla.org/es/docs/Web/HTML" },
      { title: 'CSS', img: css, url: "https://developer.mozilla.org/es/docs/Web/CSS" },
      { title: 'C#', badge: { label: 'C#', bg: '#9b4f96' }, url: "https://learn.microsoft.com/dotnet/csharp/" },
    ],
  },
  {
    key: 'frameworks',
    items: [
      { title: 'React', img: react, url: "https://es.react.dev/" },
      { title: 'Express', img: express, url: "https://expressjs.com/es/" },
      { title: 'Tailwind', img: tailwind, url: "https://tailwindcss.com/" },
      { title: 'React Router Dom', img: reactrouterdom, url: "https://reactrouter.com/" },
      { title: 'Prisma ORM', img: prisma, url: "https://www.prisma.io/" },
      { title: 'Sequelize ORM', img: sequelize, url: "https://sequelize.org/" },
      { title: 'Tanstack Query', img: tanstackquery, url: "https://tanstack.com/query/latest" },
      { title: 'JQuery', img: jquery, url: "https://jquery.com/" },
      { title: 'Zustand', img: zustand, url: "https://zustand-demo.pmnd.rs/" },
      { title: 'Framer Motion', img: motion, url: "https://motion.dev/" },
      { title: 'Pandas', img: pandas, url: "https://pandas.pydata.org/" },
      { title: 'Axios', img: axios, url: "https://axios.rest/es/pages/getting-started/first-steps" },
      { title: 'Fast Api', img: fastapi, url: "https://fastapi.tiangolo.com/" },
      { title: 'Next.js', badge: { label: 'N', bg: '#ffffff', fg: '#000000' }, url: "https://nextjs.org/" },
      { title: 'Angular', badge: { label: 'A', bg: '#dd0031' }, url: "https://angular.dev/" },
      { title: 'React Native', badge: { label: 'RN', bg: '#087ea4' }, url: "https://reactnative.dev/" },
      { title: 'Redux', badge: { label: 'R', bg: '#764abc' }, url: "https://redux.js.org/" },
      { title: 'Context API', badge: { label: 'C', bg: '#087ea4' }, url: "https://react.dev/learn/passing-data-deeply-with-context" },
      { title: 'Vite', badge: { label: 'V', bg: '#646cff' }, url: "https://vite.dev/" },
      { title: 'Node.js', badge: { label: 'N', bg: '#5fa04e' }, url: "https://nodejs.org/" },
      { title: '.NET / ASP.NET Core', badge: { label: '.N', bg: '#512bd4' }, url: "https://dotnet.microsoft.com/apps/aspnet" },
      { title: 'Entity Framework Core', badge: { label: 'EF', bg: '#512bd4' }, url: "https://learn.microsoft.com/ef/core/" },
      { title: 'REST APIs', badge: { label: 'API', bg: '#2f6f4f' }, url: "https://developer.mozilla.org/en-US/docs/Glossary/REST" },
    ],
  },
  {
    key: 'databases',
    items: [
      { title: 'PostgreSQL', img: postgres, url: "https://www.postgresql.org/" },
      { title: 'Mongo DB', img: mongodb, url: "https://www.mongodb.com/" },
      { title: 'SQL Server', badge: { label: 'SQL', bg: '#cc2927' }, url: "https://www.microsoft.com/sql-server" },
    ],
  },
  {
    key: 'tools',
    items: [
      { title: 'Git', img: git, url: "https://git-scm.com/" },
      { title: 'Github', img: github, url: "https://github.com/" },
      { title: 'Figma', img: figma, url: "https://www.figma.com/" },
      { title: 'Postman', img: postman, url: "https://www.postman.com/" },
      { title: 'Visual Studio Code', img: vsc, url: "https://code.visualstudio.com/" },
      { title: 'Jira', img: jira, url: "https://www.atlassian.com/software/jira" },
      { title: 'Notion', img: notion, url: "https://www.notion.com/" },
      { title: 'Docker', img: docker, url: "https://www.docker.com/" },
      { title: 'Azure DevOps', badge: { label: 'AD', bg: '#0078d4' }, url: "https://azure.microsoft.com/products/devops" },
      { title: 'Azure Portal', badge: { label: 'Az', bg: '#0078d4' }, url: "https://portal.azure.com/" },
      { title: 'Render', badge: { label: 'R', bg: '#46e3b7', fg: '#000000' }, url: "https://render.com/" },
      { title: 'Vercel', badge: { label: '▲', bg: '#ffffff', fg: '#000000' }, url: "https://vercel.com/" },
    ],
  },
  {
    key: 'methodologies',
    items: [
      { title: 'Scrum', badge: { label: 'S', bg: '#f59e0b', fg: '#000000' }, url: "https://scrumguides.org/" },
      { title: 'Code Review', badge: { label: 'CR', bg: '#6b7280' } },
      { title: 'CI/CD', badge: { label: 'CD', bg: '#6b7280' } },
    ],
  },
]

export default skillCategories
