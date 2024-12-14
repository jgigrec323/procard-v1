import Link from 'next/link'
import React from 'react'

export default function Footer() {
  const y = new Date().getFullYear()
  return (
    <>
    <div className='flex flex-col items-center gap-5 my-20 md:flex-row md:my-32 justify-center md:gap-24 text-xl'>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/comptes-sociaux"}>Comptes Sociaux</Link>
      <Link href={"/a-propos"}>A propos</Link>
    </div>
    <p className='flex justify-center text-gray-500 opacity-75 text-sm mb-8'>© {y} ProCard</p>
    </>
  )
}
