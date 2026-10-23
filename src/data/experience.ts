export type ExperienceInfo = {
  // Llave en t.experience.items de los JSON de idioma (puesto, empresa, periodo y viñetas)
  id: 'solvex' | 'freelance' | 'pyp' | 'eted'
  tecnologias: string[]
}

// Del mas reciente al mas antiguo. Para agregar un trabajo: nueva entrada aqui,
// su id en el tipo de arriba y su texto en src/i18n/es.json y en.json
const experience: ExperienceInfo[] = [
  {
    id: 'solvex',
    tecnologias: ['React', 'Angular', 'ASP.NET Core', 'C#', 'Node.js', 'Azure DevOps'],
  },
  {
    id: 'freelance',
    tecnologias: ['React', 'Tailwind', 'Zustand', 'TanStack Query', 'Node.js', 'Express', 'Python'],
  },
  {
    id: 'pyp',
    tecnologias: ['Excel'],
  },
  {
    id: 'eted',
    tecnologias: [],
  },
]

export default experience
