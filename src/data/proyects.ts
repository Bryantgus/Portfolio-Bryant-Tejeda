
export type ProyectsInfo = {
  // Llave en t.projects.items de los JSON de idioma (titulo y descripcion)
  id: 'porfolio' | 'dcv' | 'task' | 'githubProfile' | 'wordless' | 'countryQuiz',
  img: string,
  tecnologias: string[]
  liveUrl: string,
  githubUrl: string
}

const proyects: ProyectsInfo[] = [
  {
    "id": "porfolio",
    "img": "Porfolio",
    "tecnologias": ["React", "Vite", "Tailwind"],
    "liveUrl": "",
    "githubUrl": "https://github.com/Bryantgus/Portfolio-Bryant-Tejeda"
  },
  {
    "id": "dcv",
    "img": "DCV",
    "tecnologias": ["React", "Vite", "Tailwind", "Express", "Prisma ORM", "PosgreSQL", "React Query"],
    "liveUrl": "https://desglose-croquis-frontend.onrender.com",
    "githubUrl": "https://github.com/Bryantgus/desglose_croquis_frontend"
  },
  {
    "id": "task",
    "img": "Task",
    "tecnologias": ["React", "Vite", "Tailwind Css", "Express", "PostgresSQL"],
    "liveUrl": "https://my-task-board-frontend-hu5z.onrender.com/",
    "githubUrl": "https://github.com/Bryantgus/My-Task-Board-Frontend"
  },
  {
    "id": "githubProfile",
    "img": "Github Profile",
    "tecnologias": ["React", "Vite", "Tailwind Css"],
    "liveUrl": "https://bryantgus.github.io/GitHub-Profile/",
    "githubUrl": "https://github.com/Bryantgus/GitHub-Profile"
  },
  {
    "id": "wordless",
    "img": "Word",
    "tecnologias": ["React", "Vite", "Tailwind Css"],
    "liveUrl": "https://bryantgus.github.io/WordLess-App/",
    "githubUrl": "https://github.com/Bryantgus/WordLess-App"
  },

  {
    "id": "countryQuiz",
    "img": "Quiz",
    "tecnologias": ["React", "Vite", "Tailwind Css"],
    "liveUrl": "https://bryantgus.github.io/Country-Quiz-DevChanllenges/",
    "githubUrl": "https://github.com/Bryantgus/GitHub-Profile"
  },

]

export default proyects