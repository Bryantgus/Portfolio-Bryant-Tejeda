import ImgSlider from "../ImgSlider";
import PuntoPulso from "../PuntoPulso";
import BoldText from "../BoldText";
import { useLang } from "../../i18n/useLang";

export default function SobreMi() {
  const { t } = useLang()

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-25 pb-16 px-5">

      <div className="flex items-baseline gap-2 mb-2">
        <h2 className="text-text1 text-4xl sm:text-5xl font-bold tracking-tight mt-10">
          {t.about.title}
        </h2>
        <PuntoPulso />
      </div>

      <div className=" text-gray3 text-lg mb-5">
        <p className="font-semibold text-gray1">
          {t.about.subtitle}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-6xl gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 shrink-0">
          <ImgSlider />
        </div>

        <div className="text-gray1 text-base sm:text-[18px] font-semibold">
          <div className="space-y-6">
            {t.about.paragraphs.map((paragraph, i) => (
              <p key={i}><BoldText text={paragraph} /></p>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}