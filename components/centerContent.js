export default function CenterContent({ children, className }) {
  return (
    <div className={`mx-[0px] md:mx-[40px] lg:mx-[100px] 2xl:mx-[180px] grid grid-cols-2 ${className}`}>
      {children}
    </div>
  )
}
