type Props = {
  children: JSX.Element | JSX.Element[]
}
const Section = ({ children }: Props) => {
  return (
    <section className="flex flex-col items-center text-center px-2 py-7 md:px-20 xl: px-25 overflow-hidden">
      <div className="max-w-[1300px]">{children}</div>
    </section>
  )
}

export default Section
