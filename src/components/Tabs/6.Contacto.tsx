import PuntoPulso from "../PuntoPulso";
import location from '../../assets/location.png'
import email from '../../assets/email.png'
import mail1 from '../../assets/mail1.svg'

export default function Contacto() {
  return (
    <div className="w-full h-screen flex flex-col items-center pt-25">

      <div className="flex items-baseline gap-2 mb-10">
        <h2 className="text-text1 text-5xl font-bold tracking-tight mt-10">
          Póngase en contacto
        </h2>
        <PuntoPulso />
      </div>

      <div className="max-w-3xl text-gray3 text-lg text-center px-5">
        <div className="flex gap-3 items-center">
          <img src={email} alt="email" className="w-7 h-7 bg-white rounded-full" />
          <p className="text-gray1 hover:text-green2">bryanttejeda628f@hotmail.com</p>
        </div>
      </div>

      <div className="max-w-3xl text-gray3 text-lg text-center px-5 mt-5">
        <div className="flex gap-3 items-center">
          <img src={location} alt="email" className="w-7 h-7 bg-white rounded-full" />
          <p className="text-gray1">DR, Santo Domingo</p>
        </div>
      </div>

      <div className="flex gap-10 mt-10">
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
        className="p-3 flex  items-center gap-3 bg-green-600 mt-20 px-14 shadow cursor-pointer hover:shadow-xl hover:border hover:border-white shadow-green3 text-white rounded-xl"
      >
        <img src={mail1} alt="email" className="w-7 h-7" />
        <p>Envíame un email</p>

      </a>
    </div>

  )
}
