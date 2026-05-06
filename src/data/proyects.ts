
export type ProyectsInfo = {
  title: string,
  description: string,
  img: string,
  tecnologias: string[]
  liveUrl: string,
  githubUrl: string
}

const proyects: ProyectsInfo[] = [
  {
    "title": "Porfolio",
    "description": "Porfolio personal para mostrar mi perfil como desarrollador",
    "img": "Porfolio",
    "tecnologias": ["React", "Vite", "Tailwind"],
    "liveUrl": "",
    "githubUrl": "https://github.com/Bryantgus/Portfolio-Bryant-Tejeda"
  },
  {
    "title": "Desglose/Croquis de Ventana",
    "description": "Proyecto Full Stack para desglose de ventanas y optimizacion de cortes de ventana.Este proyecto aun esta en proceso",
    "img": "DCV",
    "tecnologias": ["React", "Vite", "Tailwind", "Express", "Prisma ORM", "PosgreSQL", "React Query"],
    "liveUrl": "https://desglose-croquis-frontend.onrender.com",
    "githubUrl": "https://github.com/Bryantgus/desglose_croquis_frontend"
  },
  {
    "title": "TODO APP",
    "description": "App de Tareas.Perfecto para hacer tu lista de pendientes",
    "img": "Task",
    "tecnologias": ["React", "Vite", "Tailwind Css", "Express", "PostgresSQL"],
    "liveUrl": "https://my-task-board-frontend-hu5z.onrender.com/",
    "githubUrl": "https://github.com/Bryantgus/My-Task-Board-Frontend"
  },
  {
    "title": "Github Profile",
    "description": "Web para buscar cualquier perfil de Github, usando la api oficial de Github",
    "img": "Github Profile",
    "tecnologias": ["React", "Vite", "Tailwind Css"],
    "liveUrl": "https://bryantgus.github.io/GitHub-Profile/",
    "githubUrl": "https://github.com/Bryantgus/GitHub-Profile"
  },
  {
    "title": "Wordless Game",
    "description": "JUego de adivinar la palabra, con varios intentos. Ojo presiona f12 luego consola y veras un secreto",
    "img": "Word",
    "tecnologias": ["React", "Vite", "Tailwind Css"],
    "liveUrl": "https://bryantgus.github.io/WordLess-App/",
    "githubUrl": "https://github.com/Bryantgus/WordLess-App"
  },

  {
    "title": "Country Quiz Challengue",
    "description": "Que tanto sabes de paises en general, averigualo con este pequeño quest y demuestra que tanto sabes",
    "img": "Quiz",
    "tecnologias": ["React", "Vite", "Tailwind Css"],
    "liveUrl": "https://bryantgus.github.io/Country-Quiz-DevChanllenges/",
    "githubUrl": "https://github.com/Bryantgus/GitHub-Profile"
  },

]

export default proyects