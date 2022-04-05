export default function CenterContent({ children, className }) {
  return (
    <div className={`lg:mx-[0px] xl:mx-28 2xl:mx-48 md:grid md:grid-cols-2 ${className}`}>
      {children}
    </div>
  )
}
