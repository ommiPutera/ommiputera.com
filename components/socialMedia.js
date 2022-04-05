import Image from "next/image";

export default function SocialMedia({ iconSrc, href, title, subTitle }) {
  return (
    <div className="flex w-[245px] justify-between mt-7 lg:mt-5 divide-x-2">
      <div className='flex items-center'>
        <Image src={iconSrc} layout="fixed" width="30" height="30" />
      </div>
      <div className='pl-3'>
        <h3 className='font-semibold text-xs text-brown -mb-1'>{title}</h3>
        <a href={href} target="_blank" rel="noopener noreferrer" className='font-medium text-xs underline text-blue'>{subTitle}</a>
      </div>
    </div>
  )
};