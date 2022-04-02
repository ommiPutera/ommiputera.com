import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from 'next/link'

export default function Button({ title, Icon }) {
  return (
    <Link href="/contact">
      <button className='group hover:outline hover:outline-3 hover:outline-offset-2 hover:outline-dark-gray-500 delay-75 mt-4 bg-black px-8 py-3 rounded-full text-light-gray text-xs flex space-x-3 items-center'>
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