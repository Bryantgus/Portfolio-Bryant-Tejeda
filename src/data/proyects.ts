
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
    "img": "Porfolio",
    "tecnologias": ["React", "Vite", "Tailwind", "Express", "Axios", "Prisma ORM", "PosgreSQL", "React Router", "React Query",  "Zustand"],
    "liveUrl": "https://desglose-croquis-frontend.onrender.com",
    "githubUrl": ""
  },
  {
    "title": "TODO APP",
    "description": "App de Tareas.Perfecto para hacer tu lista de pendientes",
    "img": "Github Profile",
    "tecnologias": ["React", "Vite", "Tailwind Css"],
    "liveUrl": "https://bryantgus.github.io/GitHub-Profile/",
    "githubUrl": "https://github.com/Bryantgus/GitHub-Profile"
  },
  {
    "title": "Wordless Game",
    "description": "Pagina para buscar cualquier perfil de Github, su informacion disponible y repositorios",
    "img": "Github Profile",
    "tecnologias": ["React", "Vite", "Tailwind Css"],
    "liveUrl": "https://bryantgus.github.io/GitHub-Profile/",
    "githubUrl": "https://github.com/Bryantgus/GitHub-Profile"
  },

  {
    "title": "Github Profile",
    "description": "Pagina para buscar cualquier perfil de Github, su informacion disponible y repositorios",
    "img": "Github Profile",
    "tecnologias": ["React", "Vite", "Tailwind Css"],
    "liveUrl": "https://bryantgus.github.io/GitHub-Profile/",
    "githubUrl": "https://github.com/Bryantgus/GitHub-Profile"
  }
]

export default proyects