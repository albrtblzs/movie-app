type Props = {
  title: string
  children: JSX.Element | JSX.Element[]
}

const HeroSection = ({ title, children }: Props) => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full bg-gray-800 p-2 md:p-10 h-[100vh]">
      <h1 className="text-white">{title}</h1>
      <div className="absolute top-10 w-full md:w-1/2"> {children}</div>
    </div>
  )
}

export default HeroSection
