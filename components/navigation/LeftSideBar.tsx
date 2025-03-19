'use client';

import React from 'react'
import NavLinks from './navbar/NavLinks'
import { Button } from '../ui/button'
import Link from 'next/link'
import ROUTES from '@/constants/routes'
import Image from 'next/image'

const LeftSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border sticky left-0 top-0
     flex h-screen w-[266px] flex-col justify-between overflow-y-auto border-r p-6 pt-36
      shadow-light-300 dark:shadow-none max-sm:hidden">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks isMobileNav={false} />
      </div>
      <div className="flex flex-col gap-3 pt-6">
      <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg
       px-4 py-3 shadow-none"asChild>
        <Link href={ROUTES.SIGN_IN}>
        <Image
        src ="/icons/account.svg"
        alt="Account"
        width={20}
        height={20}
        className = "invert-colors lg:hidden max:lg-hidden"
        />
        <span className="primary-text-gradient">Log In</span>
        </Link>
          </Button>
          <Button className="small-medium light-border-2 bg-red-500 
           hover:bg-red-600 dark:bg-red-500 text-white min-h-[41px] 
           w-full rounded-lg px-4 py-3 shadow-none"asChild>
          
        <Link href={ROUTES.SIGN_UP}>
        <Image
        src ="/icons/sign-up.svg"
        alt="Account"
        width={20}
        height={20}
        className = "invert-colors lg:hidden"/>
        <span className = "max-lg:hidden">Sign Up</span>
          
        </Link>
        </Button>
      </div>
    </section>
  )
}

export default LeftSideBar