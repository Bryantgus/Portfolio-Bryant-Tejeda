import PuntoPulso from "../PuntoPulso";
import { useLang } from "../../i18n/useLang";
import experience from "../../data/experience";

export default function Experiencia() {
  const { t } = useLang()

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-25 pb-16 px-5">

      <div className="flex items-baseline gap-2 mb-10">
        <h2 className="text-text1 text-5xl sm:text-6xl font-bold tracking-tight mt-10">
          {t.experience.title}
        </h2>
        <PuntoPulso />
      </div>

      <ol className="relative w-full max-w-3xl ml-2 border-l border-gray3 space-y-10">
        {experience.map((job) => {
          const item = t.experience.items[job.id]
          return (
            <li key={job.id} className="relative pl-6 sm:pl-10">
              <span className="absolute -left-2 top-7 w-3.5 h-3.5 rounded-full bg-green2 shadow-[0_0_12px_var(--color-green2)]" />

              <div className="glass rounded-2xl p-6 sm:p-8">
                <p className="text-green2 font-semibold text-base sm:text-lg">{item.period}</p>
                <h3 className="text-text1 text-2xl sm:text-3xl font-bold mt-1">{item.role}</h3>
                <p className="text-gray1 text-lg sm:text-xl font-semibold">{item.company}</p>

                <ul className="mt-4 space-y-2 list-disc pl-5 marker:text-green2 text-gray1 text-base sm:text-lg">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                {job.tecnologias.length > 0 &&
                  <div className="flex flex-wrap gap-2 mt-5">
                    {job.tecnologias.map((tech) => (
                      <div
                        key={tech}
                        className="glass-chip px-4 py-0.5 rounded-xl w-fit text-green-200 font-semibold text-[15px] text-center"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                }
              </div>
            </li>
          )
        })}
      </ol>

    </div>
  )
}
