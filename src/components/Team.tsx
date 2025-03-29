import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type TLinksTypes = {
    url: string
    color: string
    icon: React.ReactNode
}

export interface ITeamProps {
    image: StaticImageData
    name: string
    jobTitle: string
    bio: string
    links: TLinksTypes[]

}

const Team = ({ image, name, jobTitle, bio, links }: ITeamProps): React.JSX.Element => {
    return (
        <section
            className='bg-white rounded-3xl px-6 py-5 sm:py-10 md:py-5 lg:py-10 flex w-4/5 md:w-full flex-col sm:flex-row md:flex-col lg:flex-row  justify-self-center justify-center md:items-center'>
            <div className="w-full sm:w-36 h-36 overflow-hidden mr-4 place-items-center">
                <Image
                    src={image}
                    alt="Foto"
                    width={96}
                    height={96}
                    priority
                    className="object-cover h-full w-36 rounded-full"
                />
            </div>
            <div className='flex-1 flex flex-col items-stretch sm:pl-2 md:pl-0 lg:pl-2 gap-y-1 mt-1 sm:mt-0 md:mt-1 lg:mt-0'>
                <h1 className='font-bold text-xl w-full text-left py-2'>{name}</h1>
                <h2 className='text-lg tracking-wider font-mono w-full text-left'>{jobTitle}</h2>
                <p className='text-justify hyphens-none break-words  py-2'>{bio}</p>
                <ul className="flex gap-x-4 mt-2 py-2  w-full">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${link.color} hover:underline`}>
                                {link.icon}
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
        </section>
    )
}

export default Team

