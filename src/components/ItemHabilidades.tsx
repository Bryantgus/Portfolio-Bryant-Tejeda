type Props = {
  img: string
  title: string
  url: string
}
export default function ItemHabilidades({title, img, url}: Props) {
  return (
    <a href={url} target="_blank" className="hover:bg-gray-900 shrink-0 border flex items-center gap-2 whitespace-nowrap border-gray3 bg-gray2 px-3 py-2 justify-between rounded-xl">
      <img src={img} alt="Tecnologia" className="w-4 h-4 rounded bg-gray2" />
      <p className="text-text1">{title}</p>      
    </a>
    )
}
