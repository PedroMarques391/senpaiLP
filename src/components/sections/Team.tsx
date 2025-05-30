"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from "motion/react"
import { renderIcon } from '../shared/IconRenderer'
import { ITeamMember } from '@/src/types'



const Team = ({ image, name, jobTitle, bio, links }: ITeamMember): React.JSX.Element => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 1, bounce: 0.2 },
            }
            }
            className='bg-white rounded-xl px-6 py-5 sm:py-10 md:py-5  flex w-4/5 md:w-full flex-col sm:flex-row md:flex-col lg:flex-row justify-self-center justify-center md:items-center'>
            <div className="w-full sm:w-36 h-36 overflow-hidden mr-4 place-items-center">
                <Image
                    src={image}
                    alt="Foto"
                    width={1000}
                    height={1000}
                    priority
                    className="object-cover h-full w-36 rounded-full"
                />
            </div>
            <div className='flex-1 flex flex-col items-stretch gap-y-1 mt-1 sm:mt-0 md:mt-1 lg:mt-0 h-full'>
                <h1 className='font-bold text-xl w-full text-left py-2'>{name}</h1>
                <h2 className='text-lg tracking-wider font-mono w-full text-left '>{jobTitle}</h2>
                <p className='text-justify hyphens-auto break-words py-2 flex-1'>{bio}</p>
                <ul className="flex gap-x-4 mt-2 py-2 w-full">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${link.color} hover:underline`}>
                                {renderIcon(link.icon)}
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
        </motion.section>
    )
}

export default Team

