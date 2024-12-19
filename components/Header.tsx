
import Link from 'next/link';
import React from 'react'

function Header() {
  return (
    
    <div className="flex justify-between gap-10 text-sm px-4 bg-blue-900 text-white p-2">
      
      <div>Tution free classes</div>
   
    <ul className="flex justify-center gap-10 text-sm px-4 bg-blue-900">
   
    <Link href="/"><h1> Home</h1>
    </Link>
   
    <Link href="/about-me"><li>about-Me</li>
    </Link>

    <Link href="/education"><li>Education</li>
    </Link>

    <Link href="/hobby"><li>Hobby</li>
    </Link>

       <Link href="/career"><li>career</li></Link>
    
   </ul>
   
   </div>

  );
}
  


export default Header