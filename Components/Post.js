import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ img, username, userImg, caption }) {
  return (
    <div className="bg-white my-7 rounded-sm">
      {/* header */}
      <div className="flex items-center p-5">
        <img
          className="h-12 w-12 rounded-full object-contain border p-1 mr-3"
          src={userImg}
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* img */}
      <img src={img} alt="" className="object-cover w-full" />
      {/* buttons */}
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center space-x-4">
          <HeartIcon className="Btn" />
          <ChatIcon className="Btn" />
          <PaperAirplaneIcon className="Btn rotate-90" />
        </div>
        <BookmarkIcon className="Btn" />
      </div>
      {/* captions */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>
      {/* commenets */}
      {/* inputbox */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="Btn" />
        <input
          className="flex-1 focus:ring-0 border-none "
          type="text"
          placeholder="add a comment..."
        />
        <button className="font-semibold text-blue-500">Post</button>
      </form>
    </div>
  );
}

export default Post;
