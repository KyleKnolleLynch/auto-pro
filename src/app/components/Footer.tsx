import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

type ColumnProps = {
  title: string
  links: string[]
}

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className='flex-1 flex flex-col gap-3 text-sm min-w-max'>
    <h4 className='font-semibold'>{title}</h4>
    <ul className='flex flex-col gap-2'>
      {links.map(link => (
        <Link href='/' key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-20 w-full p-3'>
      <div className='flex flex-col gap-12 w-full'>
        <div className='flex flex-col items-start'>
          <Image src='/logo.svg' width={60} height={40} alt='logo' />
          <p className='text-sm mt-5 max-w-xs'>
            Auto-Pro Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Vitae sequi culpa doloremque, earum eius sit.
          </p>
        </div>
        <div className='flex flex-wrap gap-12'>
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />

          <div className='flex-1 flex flex-col gap-4'>
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />

          <div className='flex-1 flex flex-col gap-4'>
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>
          <FooterColumn
              title={footerLinks[6].title}
              links={footerLinks[6].links}
            />
        </div>
      </div>

      <div className='sm:flex justify-between w-full text-sm'>
        <p>@ 2023 Auto-Pro. All rights reserved</p>
        <p><span className='font-semibold'>44</span> projects submitted</p>
      </div>
    </footer>
  )
}
export default Footer
