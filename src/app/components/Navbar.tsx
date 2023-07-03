import Image from 'next/image'
import Link from 'next/link'
import { NavLinks } from '@/constants'
import AuthProviders from './AuthProviders'

const Navbar = () => {
  const session = {}
  return (
    <nav
      aria-label='Primary'
      className='flex items-center justify-between py-6 px-3'
    >
      <div className='flex items-center flex-1 gap-10'>
        <Link href='/' className='grid place-items-center'>
          <Image src='/logo.svg' width={60} height={40} alt='logo' />
          <h1 className='font-bold text-2xl'>Auto-Pro</h1>
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map(link => (
            <li key={link.key}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex justify-center gap-4'>
        {session ? (
          <>
            UserPhoto
            <Link href='/create-project'>Share Project</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  )
}
export default Navbar

