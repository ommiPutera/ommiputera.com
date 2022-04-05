export default function CenterContent({ children, className }) {
  return (
    <div className={`mx-[0px] lg:mx-4 2xl:mx-[180px] md:grid md:grid-cols-2 ${className}`}>
      {children}
    </div>
  )
}
