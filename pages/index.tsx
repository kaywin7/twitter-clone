import Image from 'next/image'

import { FaXTwitter } from 'react-icons/fa6'
import { MdHomeFilled } from 'react-icons/md'
import { SlMagnifier } from 'react-icons/sl'
import { SlEnvolope } from 'react-icons/sl'
import { PiBellLight } from 'react-icons/pi'
import { BsBookmark } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import FeedCard from '@/components/feedCard'

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
        <div className="col-span-3"></div>
      </div>
    </div>
  )
}
