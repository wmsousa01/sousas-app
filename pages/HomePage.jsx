import React from 'react'
import mainLogo from '../public/assets/main-logo.svg'
import socialDataStudio from '../public/assets/social/data-studio.png'
import socialMeta from '../public/assets/social/meta.png'
import socialGoogleBusiness from '../public/assets/social/google-business.png'
import socialLinkedin from '../public/assets/social/linkedin.png'
import socialTikTok from '../public/assets/social/tiktok.png'
import socialYouTube from '../public/assets/social/youtube.png'
import socialTwitter from '../public/assets/social/twitter.png'
import socialAnalytcs from '../public/assets/social/ads.png'
import socialMail from '../public/assets/social/mail.png'
import socialJira from '../public/assets/social/jira.png'
import socialCanva from '../public/assets/social/canva.png'
import socialDrive from '../public/assets/social/drive.png'
import banner from '../public/assets/banner.png'
import bottomLogo from '../public/assets/bottom-logo.svg'

import Image from 'next/image'

const HomePage = () => {
  return (
    <main className='h-screen grid grid-cols-1 gap-0 place-items-center bg-black text-white'>
        <div className='pt-5'>
            <Image 
                src={mainLogo}
                alt='main-logo'
                width={200}
                height='auto'
            />
            <h2 className='pt-3'>Sua gestão em um só lugar</h2>
        </div>
        
        <div className='grid grid-cols-2 gap-4 place-items-center p-3 text-center font-bold'>
          <div className='bg-white text-black p-4'>
            <p>Ações Realizadas</p>
            <h1>1500</h1>
          </div>
          <div className='bg-white text-black p-4'>     
            <p>Ações Realizadas</p>
            <h1>1mi</h1>
          </div>
        </div>

        <div className='flex items-stretch grid gap-x-2 gap-y-4 grid-cols-3 place-items-center text-black'>
            <div className='self-stretch bg-white p-5'>
            <Image 
                src={socialDataStudio}
                alt='data-studio'
                width={25}
                height='auto'
            />
            </div>
            <div className='self-stretch bg-white p-5'>
            <Image 
                src={socialMeta}
                alt='meta'
                width={25}
                height='auto'
            />
            </div>
            <div className='self-stretch bg-white p-5'>
            <Image 
                src={socialGoogleBusiness}
                alt='google-business'
                width={25}
                height='auto'
            />
            </div>
            <div className='self-stretch bg-white p-5'>
            <Image 
                src={socialLinkedin}
                alt='linkedin'
                width={25}
                height='auto'
            />
            </div>
            <div className='self-stretch bg-white p-5'>
            <Image 
                src={socialTikTok}
                alt='tik-tok'
                width={25}
                height='auto'
            />
            </div>
            <div className='self-stretch bg-white p-5'>
            <Image 
                src={socialYouTube}
                alt='you-tube'
                width={25}
                height='auto'
            />
            </div>
            <div className='self-stretch bg-white p-5'>
            <Image 
                src={socialTwitter}
                alt='twitter'
                width={25}
                height='auto'
            />
            </div>
            <div className='self-stretch bg-white p-5'>
            <Image 
                src={socialAnalytcs}
                alt='analytcs'
                width={25}
                height='auto'
            />
            </div>
            <div className='self-stretch bg-white p-5'>
            <Image 
                src={socialMail}
                alt='mail'
                width={25}
                height='auto'
            />
            </div>
            <div className='self-stretch bg-white p-5'>
            <Image 
                src={socialJira}
                alt='jira'
                width={25}
                height='auto'
            />
            </div>
            <div className='self-stretch bg-white p-5'>
            <Image 
                src={socialCanva}
                alt='canva'
                width={25}
                height='auto'
            />
            </div>
            <div className='self-stretch bg-white p-5'>
            <Image 
                src={socialDrive}
                alt='drive'
                width={25}
                height='auto'
            />
            </div>
        </div>

        <div>
        <Image 
                src={banner}
                alt='banner'
                width={300}
                height='auto'
            />
        </div>

        <div className='mb-2'>
            <Image 
                src={bottomLogo}
                alt='bottom-logo'
                width={50}
                height='auto'
            />
        </div>

      </main>
  )
}

export default HomePage