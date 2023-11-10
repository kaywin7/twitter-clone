import Image from 'next/image'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { FaXTwitter } from 'react-icons/fa6'
import { MdHomeFilled } from 'react-icons/md'
import { SlMagnifier } from 'react-icons/sl'
import { SlEnvolope } from 'react-icons/sl'
import { PiBellLight } from 'react-icons/pi'
import { BsBookmark } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import FeedCard from '@/components/feedCard'
import { useCallback } from 'react'
import toast from 'react-hot-toast'
import { graphQLClient } from '@/clients/api'
import { verifyUserGoogleTokenQuery } from '@/graphql/query/user'

interface TwitterSideButton {
  title: string;
  icon: React.ReactNode;
}
const sidebarMenuItems: TwitterSideButton[] = [
  {
    title: 'home',
    icon: <MdHomeFilled />
  },
  {
    title: 'Explore',
    icon: <SlMagnifier />
  },
  {
    title: 'Notification',
    icon: <PiBellLight />
  },
  {
    title: 'Messages',
    icon: <SlEnvolope />
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark />
  },
  {
    title: 'Profile',
    icon: <FaRegUser />
  }
]

export default function Home() {
  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      const googleToken = cred.credential
      if (!googleToken) return toast.error(`Google token not found`)
      const { verifyGoogleToken } = await graphQLClient.request(
        verifyUserGoogleTokenQuery,
        { token: googleToken })
      toast.success('verified success')
      console.log(verifyGoogleToken)
      if (verifyGoogleToken) window.localStorage.setItem('token', verifyGoogleToken)
    }, [])
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-4 px-4">
          <div className="text-3xl hover:bg-slate-800 rounded-full p-3 h-fit cursor-pointer transition-all w-fit " >
            <FaXTwitter />
          </div>
          <div className='mt-4 text-2xl font-semibold'>
            <ul>{

              sidebarMenuItems.map(item =>
                <li className="flex justify-start gap-4 items-center hover:bg-gray-800 rounded-full px-4 py-2 w-fit cursor-pointer mb-6" key={item.title}>
                  <span className='mr-2'>{item.icon}</span>
                  <span>{item.title}</span>
                </li>)

            }
            </ul>
            <button className="bg-sky-500 px-20 py-2 text-center rounded-full mt-2 text-lg">Post</button>

          </div>

        </div>
        <div className="col-span-6 border-r border-slate-500 border-l ">
          <FeedCard />
        </div>
        <div className="col-span-3">
          <div className='border p-5 bg-slate-700 rounded-lg'>
            <h1 className='my-2 text-2xl'>New to Twitter?</h1>
            < GoogleLogin onSuccess={handleLoginWithGoogle} />
          </div>

        </div>
      </div>
    </div>
  )
}
