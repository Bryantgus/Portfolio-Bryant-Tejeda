import PuntoPulso from "../PuntoPulso";
import ItemHabilidades from "../ItemHabilidades";
import { useLang } from "../../i18n/useLang";
import skillCategories from "../../data/skills";

export default function Habilidades() {
  const { t } = useLang()

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-25 pb-16 px-5">

      <div className="flex items-baseline gap-2 mb-2">
        <h2 className="text-text1 text-5xl sm:text-6xl font-bold tracking-tight mt-10">
          {t.skills.title}
        </h2>
        <PuntoPulso />
      </div>

      <div className="flex flex-col gap-6 items-center w-full">
        {skillCategories.map(({ key, items }) => (
          <div key={key} className="w-full max-w-250">
            <p className="text-text1 font-bold text-2xl mb-4">{t.skills[key]}</p>
            <div className="flex gap-3.5 flex-wrap w-full items-center justify-start">
              {items.map((item) => (
                <ItemHabilidades key={item.title} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
