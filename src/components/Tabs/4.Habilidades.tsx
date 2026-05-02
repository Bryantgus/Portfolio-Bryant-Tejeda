import PuntoPulso from "../PuntoPulso";
import js from '../../assets/habilidades/js.png'
import ts from '../../assets/habilidades/ts.png'
import python from '../../assets/habilidades/python.png'
import html from '../../assets/habilidades/html.png'
import css from '../../assets/habilidades/css.png'
import react from '../../assets/habilidades/react.png'
import tailwind from '../../assets/habilidades/tailwind.png'
import reactrouterdom from '../../assets/habilidades/reactrouterdom.png'
import ItemHabilidades from "../ItemHabilidades";
import jquery from '../../assets/habilidades/jquery.png'
import tanstackquery from '../../assets/habilidades/tanstackquery.png'
import zustand from '../../assets/habilidades/zustand.png'
import prisma from '../../assets/habilidades/prisma.ico'
import sequalize from '../../assets/habilidades/sequalize.ico'
import motion from '../../assets/habilidades/motion.png'
import pandas from '../../assets/habilidades/pandas.ico'
import axios from '../../assets/habilidades/axios.png'
import express from '../../assets/habilidades/express.png'
import fastapi from '../../assets/habilidades/fastapi.png'
import postgres from '../../assets/habilidades/postgres.ico'
import mongodb from '../../assets/habilidades/mongodb.ico'
import github from '../../assets/habilidades/github.png'
import git from '../../assets/habilidades/git.ico'
import figma from '../../assets/habilidades/figma.png'
import postman from '../../assets/habilidades/postman.png'
import vsc from '../../assets/habilidades/vsc.ico'
import jira from '../../assets/habilidades/jira.ico'
import notion from '../../assets/habilidades/notion.png'
import docker  from '../../assets/habilidades/docker.png'
// import  from '../../assets/habilidades/.png'

const lenguajes = [
  { title: 'JavaScript', img: js, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { title: 'TypeScript', img: ts, url: "https://www.typescriptlang.org/" },
  { title: 'Python', img: python, url: "https://www.python.org/" },
  { title: 'HTML', img: html, url: "https://developer.mozilla.org/es/docs/Web/HTML" },
  { title: 'CSS', img: css, url: "https://developer.mozilla.org/es/docs/Web/CSS" },
]

const frameworkLibrerias = [
  { title: 'React', img: react, url: "https://es.react.dev/" },
  { title: 'Express', img: express, url: "https://expressjs.com/es/" },
  { title: 'Tailwind', img: tailwind, url: "https://tailwindcss.com/" },
  { title: 'React Router Dom', img: reactrouterdom, url: "https://reactrouter.com/" },
  { title: 'Prisma ORM', img: prisma, url: "https://www.prisma.io/" },
  { title: 'Sequelize ORM', img: sequalize, url: "https://sequelize.org/" },
  { title: 'Tanstack Query', img: tanstackquery, url: "https://tanstack.com/query/latest" },
  { title: 'JQuery', img: jquery, url: "https://jquery.com/" },
  { title: 'Zustand', img: zustand, url: "https://zustand-demo.pmnd.rs/" },
  { title: 'Framer Motion', img: motion, url: "https://motion.dev/" },
  { title: 'Pandas', img: pandas, url: "https://pandas.pydata.org/" },
  { title: 'Axios', img: axios, url: "https://axios.rest/es/pages/getting-started/first-steps" },
  { title: 'Fast Api', img: fastapi, url: "https://fastapi.tiangolo.com/" },
]

const databases = [
  { title: 'PostgreSQL', img: postgres, url: "https://www.postgresql.org/" },
  { title: 'Mongo DB', img: mongodb, url: "https://www.mongodb.com/" },
]

const toolsPlatforms = [
  { title: 'Git', img: git, url: "https://git-scm.com/" },
  { title: 'Github', img: github, url: "https://github.com/" },
  { title: 'Figma', img: figma, url: "https://www.figma.com/" },
  { title: 'Postman', img: postman, url: "https://www.postman.com/" },
  { title: 'Visual Studio Code', img: vsc, url: "https://code.visualstudio.com/" },
  { title: 'Jira', img: jira, url: "https://www.atlassian.com/software/jira" },
  { title: 'Notion', img: notion, url: "https://www.notion.com/" },
  { title: 'Docker', img: docker, url: "https://www.docker.com/" },
]

export default function Habilidades() {
  return (
    <div className="w-full h-screen flex flex-col items-center pt-25">

      <div className="flex items-baseline gap-2 mb-2">
        <h2 className="text-text1 text-5xl font-bold tracking-tight mt-10">
          Habilidades
        </h2>
        <PuntoPulso />
      </div>

      <div className="flex flex-col gap-6 items-center ">

        <div className="w-250">
          <p className="text-text1 font-bold text-[20px] mb-3">Lenguajes</p>
          <div className="flex gap-3 flex-wrap w-full items-center justify-start">
            {lenguajes.map((item: Record<string, string>, index: number) => {
              return (
                <ItemHabilidades
                  key={index}
                  img={item.img}
                  title={item.title}
                  url={item.url} />
              )
            })}
          </div>
        </div>

        <div className="w-250">
          <p className="text-text1 font-bold text-[20px] mb-3">Frameworks y Librerias</p>
          <div className="flex gap-3 flex-wrap w-full items-center justify-start">
            {frameworkLibrerias.map((item: Record<string, string>, index: number) => {
              return (
                <ItemHabilidades
                  key={index}
                  img={item.img}
                  title={item.title}
                  url={item.url}
                />
              )
            })}
          </div>
        </div>

        <div className="w-250">
          <p className="text-text1 font-bold text-[20px] mb-3">Base de Datos</p>
          <div className="flex gap-3 flex-wrap w-full items-center justify-start">
            {databases.map((item: Record<string, string>, index: number) => {
              return (
                <ItemHabilidades
                  key={index}
                  img={item.img}
                  title={item.title}
                  url={item.url}
                />
              )
            })}
          </div>
        </div>

        <div className="w-250">
          <p className="text-text1 font-bold text-[20px] mb-3 ">Herramientas y Plataformas</p>
          <div className="flex gap-3 flex-wrap w-full items-center justify-start">
            {toolsPlatforms.map((item: Record<string, string>, index: number) => {
              return (
                <ItemHabilidades
                  key={index}
                  img={item.img}
                  title={item.title}
                  url={item.url}
                />
              )
            })}
          </div>
        </div>

      </div>

    </div>
  )
}
