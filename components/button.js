import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from 'next/link'

export default function Button({ title, Icon }) {
  return (
    <Link href="/contact">
      <button className='group hover:outline hover:outline-[2px] hover:outline-offset-[3px] hover:outline-black delay-75 bg-black px-10 py-[17px] rounded-full text-light-gray text-xs flex space-x-3 items-center transition-all duration-300 ease-in-out'>
        <span>{title}</span>
        {Icon ?
          <Icon />
          :
          <ArrowRightIcon className="w-[14px] h-[14px] group-hover:translate-x-2 transition-all delay-100" />
        }
      </button>
    </Link>
  )
};