import { ArrowRightIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import Link from 'next/link'

export default function Button({ title, Icon, href, onClick, type, disabled, className }) {
  return (
    <Link href={href || ""}>
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={clsx(
          "group hover:outline hover:outline-[2px] hover:outline-offset-[3px] hover:outline-black/80 delay-75 bg-black px-10 lg:px-7 py-[19px] lg:py-[13px] rounded-full text-light-gray text-xs flex space-x-3 items-center transition-all duration-300 ease-in-out",
          `${disabled && "!outline-none"}`,
          className
        )}
      >
        <span>{title}</span>
        {Icon ?
          <ArrowRightIcon className="w-[14px] h-[14px] group-hover:translate-x-2 transition-all delay-100" />
          :
          null
        }
      </button>
    </Link>
  )
};