import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { useRouter } from "next/dist/client/router";


import {
  HomeIcon,
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
function Header() {



  const [open, setOpen] = useRecoilState(modalState)
  const router = useRouter()
  
  const profile = () => {
    router.push('/profile')
  }
const home = () => {
  router.push('/')
}

const message = () => {
  router.push('/Message')
}

  return (
    <div className="shadow-sm border-b bg-white sticky top-[0px] z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        <div className="relative  w-24 hidden lg:inline-grid xl:inline-grid cursor-pointer">
          <Image
          onClick={()=>router.push('/')}
            src="https:links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative  w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https:links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middel */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="flex items-center pointer-events-none absolute inset-y-0 pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500 " />
            </div>
            <input
              type="text"
              placeholder="search"
              className="bg-gray-50 block pl-10 sm:text-sm  rounded-md focus:ring-black focus:border-black border-gray-300"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={home}/>
          <MenuIcon className="h-8 w-10 md:hidden cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
          <div className="relative navBtn">
            <PaperAirplaneIcon onClick={message} className="navBtn rotate-45" />
            <div className="absolute -top-2 -right-2 bg-red-500 px-1 rounded-full h-5 w-5 flex items-center justify-center animate-pulse text-white">
              4
            </div>
          </div>
          <PlusCircleIcon className="navBtn" onClick={()=> setOpen(true )}/>
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img
            onClick={profile}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjAAwQyKxGO39mWtUYjD0s_uhMSmEi4wXyPg&usqp=CAU"
            alt="Profile pic"
            className="h-10 w-10 cursor-pointer rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
