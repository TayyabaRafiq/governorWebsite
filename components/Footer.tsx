import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className=" flex-justify-center gap-4 bg-blue-500 px-4 ">
        <ul className= " flex-justify-center gap-4 bg-blue-500 px-4">
            <Link href="/">
            <li>Home</li>
            </Link>

            <Link href="/about-me">
            <li>About-Me</li>
            </Link>

            <Link href="/career">
            <li>Career</li>
            </Link>

            <Link href="/education">
            <li>Education</li>
            </Link>

            <Link href="/hobby">
            <li>Hobby</li>
            </Link>

            <Link href="/terms">
            <li>Terms & Conditions</li>
            </Link>

            <Link href="/terms">
            <li>Privacy & Policy</li>
            </Link>
        </ul>

    </div>
  )
}

export default Footer