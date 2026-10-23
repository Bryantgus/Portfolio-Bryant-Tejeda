// Renderiza **texto** como <strong>, para poder guardar enfasis dentro de los JSON de idioma
export default function BoldText({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))}
    </>
  )
}
