type Props = {
  title: string
  children: JSX.Element | JSX.Element[]
}
const Section = ({ title, children }: Props) => {
  return (
    <section className="flex flex-col items-center text-center px-2 py-7 md:px-20 xl: px-25 overflow-hidden">
      <h1 className="my-4 lg:my-8">{title}</h1>
      <div className="max-w-[1250px]">{children}</div>
    </section>
  )
}

export default Section
