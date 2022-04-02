import Image from "next/image";

export default function SocialMedia({ iconSrc, href, title, subTitle }) {
  return (
    <div className="flex w-[255px] justify-between space-x-2 mt-6 divide-x-2">
      <div className='flex items-center'>
        <Image src={iconSrc} layout="fixed" width="45" height="45" />
      </div>
      <div className='pl-2'>
        <h3 className='font-semibold text-xs text-brown'>{title}</h3>
        <a href={href} target="_blank" rel="noopener noreferrer" className='font-medium text-xs underline text-blue'>{subTitle}</a>
      </div>
    </div>
  )
};