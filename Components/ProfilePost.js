import { HeartIcon, ChatIcon } from "@heroicons/react/solid"
function ProfilePost({img}) {
    return (
      <div className="">
        <img
          src={img}
          alt=""
          className=" h-[52] w-56 object-contain cursor-pointer"
        />
        {/* <div className="hidden absolute top-[40%] flex items-center left-[25%] space-x-6 hover:inline-flex">
          <HeartIcon className="h-8 w-8 text-gray-400" />
          <ChatIcon className="h-8 w-8 text-gray-400" />
        </div> */}
      </div>
    );
}

export default ProfilePost
