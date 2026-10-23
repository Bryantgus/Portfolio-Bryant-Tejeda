import type { Skill } from "../data/skills"

const chipClass = "glass transition shrink-0 flex items-center gap-2 whitespace-nowrap px-4 py-2.5 text-lg justify-between rounded-xl"

export default function ItemHabilidades({ title, img, url, badge }: Skill) {
  const content = (
    <>
      {img && <img src={img} alt="" className="w-5 h-5 shrink-0 object-contain rounded bg-gray2" />}
      {!img && badge &&
        <span
          className="w-5 h-5 shrink-0 rounded flex items-center justify-center text-[10px] font-extrabold leading-none"
          style={{ backgroundColor: badge.bg, color: badge.fg ?? '#fff' }}
          aria-hidden="true"
        >
          {badge.label}
        </span>
      }
      <p className="text-text1">{title}</p>
    </>
  )

  // Sin url (metodologias, conceptos) el chip no es un link
  if (!url) return <div className={chipClass}>{content}</div>

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${chipClass} hover:border-green2/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-green2`}
    >
      {content}
    </a>
  )
}
