import PuntoPulso from "../PuntoPulso";
import { useLang } from "../../i18n/useLang";
import location from '../../assets/location.png'
import email from '../../assets/email.png'
import mail1 from '../../assets/mail1.svg'

export default function Contacto() {
  const { t } = useLang()

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-25 pb-16 px-5">

      <div className="flex items-baseline justify-center gap-2 mb-10">
        <h2 className="text-text1 text-3xl sm:text-5xl text-center font-bold tracking-tight mt-10">
          {t.contact.title}
        </h2>
        <PuntoPulso />
      </div>

      <div className="max-w-3xl text-gray3 text-lg text-center px-5">
        <div className="flex gap-3 items-center">
          <img src={email} alt={t.contact.emailAlt} className="w-7 h-7 bg-white rounded-full" />
          <p className="text-gray1 hover:text-green2 break-all text-base sm:text-lg">bryanttejeda628f@hotmail.com</p>
        </div>
      </div>

      <div className="max-w-3xl text-gray3 text-lg text-center px-5 mt-5">
        <div className="flex gap-3 items-center">
          <img src={location} alt={t.contact.locationAlt} className="w-7 h-7 bg-white rounded-full" />
          <p className="text-gray1">{t.contact.location}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-10 mt-10">
        <a href="https://github.com/Bryantgus" target="_blank" className="text-[16px] border cursor-pointer hover:text-gray-200 border-gray3 hover:shadow-xl hover:shadow-green1 text-gray1 px-6 py-2 bg-gray2 rounded-xl">
          Github
        </a>
        <a href="https://www.linkedin.com/in/bryant-tejeda-b07589283" target="_blank" className="text-[16px] border cursor-pointer hover:text-gray-200 border-gray3 hover:shadow-xl hover:shadow-green1 text-gray1 px-6 py-2 bg-gray2 rounded-xl">
          LinkedIn
        </a>
      </div>

      <a
        href="mailto:bryanttejeda628f@hotmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 flex  items-center gap-3 bg-green-600 mt-12 sm:mt-20 px-8 sm:px-14 shadow cursor-pointer hover:shadow-xl hover:border hover:border-white shadow-green3 text-white rounded-xl"
      >
        <img src={mail1} alt="" className="w-7 h-7" />
        <p>{t.contact.sendEmail}</p>

      </a>
    </div>

  )
}
