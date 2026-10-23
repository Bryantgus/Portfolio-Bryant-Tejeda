import { useEffect, useRef, useState } from "react";
import PuntoPulso from "../PuntoPulso";
import { useLang } from "../../i18n/useLang";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../../data/links";
import { GithubIcon, LinkedinIcon } from "../icons";
import location from '../../assets/location.png'
import email from '../../assets/email.png'

const socialLinkClass = "glass flex items-center gap-3 text-lg cursor-pointer text-text1 px-8 py-3 rounded-xl transition hover:border-green2/60 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-green2"

export default function Contacto() {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)
  const copiedTimeout = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(copiedTimeout.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.clearTimeout(copiedTimeout.current)
      copiedTimeout.current = window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Sin permiso de portapapeles: el email sigue siendo un link mailto
    }
  }

  return (
    <div className="w-full flex-1 flex flex-col items-center pt-25 pb-16 px-5">

      <div className="flex items-baseline justify-center gap-2 mb-10">
        <h2 className="text-text1 text-4xl sm:text-6xl text-center font-bold tracking-tight mt-10">
          {t.contact.title}
        </h2>
        <PuntoPulso />
      </div>

      <div className="max-w-3xl text-xl text-center px-5">
        <div className="flex flex-wrap justify-center gap-3 items-center">
          <img src={email} alt={t.contact.emailAlt} className="w-7 h-7 bg-white rounded-full" />
          <a
            href={`mailto:${EMAIL}`}
            className="text-gray1 hover:text-green2 break-all text-lg sm:text-xl focus-visible:outline-2 focus-visible:outline-green2"
          >
            {EMAIL}
          </a>
          <button
            onClick={copyEmail}
            className="glass text-base rounded-lg px-3 py-1.5 text-text1 hover:text-green2 hover:border-green2/60 cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-green2"
          >
            {copied ? t.contact.copied : t.contact.copyEmail}
          </button>
          <span className="sr-only" role="status">{copied ? t.contact.copied : ''}</span>
        </div>
      </div>

      <div className="max-w-3xl text-xl text-center px-5 mt-5">
        <div className="flex gap-3 items-center">
          <img src={location} alt={t.contact.locationAlt} className="w-7 h-7 bg-white rounded-full" />
          <p className="text-gray1">{t.contact.location}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-10 mt-10">
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
          <GithubIcon className="w-6 h-6" />
          Github
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
          <LinkedinIcon className="w-6 h-6" />
          LinkedIn
        </a>
      </div>

    </div>

  )
}
