import dcvImg from '../assets/dvc.webp'
import quizImg from '../assets/quiz.webp'
import vision360Img from '../assets/vision360.webp'
import incabideImg from '../assets/incabide.webp'

export type ProjectInfo = {
  // Llave en t.projects.items de los JSON de idioma (titulo y descripcion)
  id: 'vision360' | 'incabide' | 'desglosalo' | 'dcv' | 'countryQuiz',
  img: string,
  tecnologias: string[]
  liveUrl: string,
  githubUrl: string
}

const projects: ProjectInfo[] = [
  {
    id: "vision360",
    img: vision360Img,
    tecnologias: ["React", "Tailwind", "Zustand", "C#", ".NET", "AWS Lambda", "Azure SQL", "SendGrid", "Azure OpenAI"],
    liveUrl: "https://afpsiembra-pension-360--qa-hkcgbyhjd5h0fva7.eastus2-01.azurewebsites.net/login",
    githubUrl: ""
  },
  {
    id: "incabide",
    img: incabideImg,
    tecnologias: ["Angular", "Tailwind", ".NET 10", "C#", "Azure SQL", "WebSocket"],
    liveUrl: "https://sgs.incabide.gob.do/",
    githubUrl: ""
  },
  {
    // TODO: agregar liveUrl cuando Desglosalo este en produccion (y una captura propia: por ahora usa la de dcv)
    id: "desglosalo",
    img: dcvImg,
    tecnologias: ["React", "Tailwind", "Zustand", "TanStack Query", "Node.js", "Express", "Python"],
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: "dcv",
    img: dcvImg,
    tecnologias: ["React", "Vite", "Tailwind", "Express", "Prisma ORM", "PostgreSQL", "React Query"],
    liveUrl: "https://desglose-croquis-frontend.onrender.com",
    githubUrl: "https://github.com/Bryantgus/desglose_croquis_frontend"
  },
  {
    id: "countryQuiz",
    img: quizImg,
    tecnologias: ["React", "Vite", "Tailwind"],
    liveUrl: "https://bryantgus.github.io/Country-Quiz-DevChanllenges/",
    githubUrl: "https://github.com/Bryantgus/Country-Quiz-DevChanllenges"
  },
]

export default projects
