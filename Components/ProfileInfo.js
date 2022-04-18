import { CogIcon } from "@heroicons/react/outline";
import Highlights from "./Highlights";
import ProfilePosts from "./ProfilePosts";
import { useEffect, useState } from "react";
import { onSnapshot, collection, query } from "@firebase/firestore";
import { db } from "../firebase";
import { orderBy } from "@firebase/firestore";
function ProfileInfo() {

  const [posts, setPosts] = useState([]);

   useEffect(
     () =>
       onSnapshot(
         query(collection(db, "posts"), orderBy("timeStamp", "desc")),
         (snapshot) => {
           console.log(snapshot.docs);
           setPosts(snapshot.docs);
         }
       ),
     [db]
   );
   console.log(posts);

    return (
      <div className="md:max-w-3xl mx-auto sm:max-w-1xl">
        <div className="flex mt-8 space-x-28">
          <div className="border p-4 rounded-full h-[200px] w-[200px] relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjAAwQyKxGO39mWtUYjD0s_uhMSmEi4wXyPg&usqp=CAU"
              alt="Profile pic"
              className=" h-[180px] w-[180px] cursor-pointer rounded-full absolute top-2 right-2 left-2"
            />
          </div>
          <div className="flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl md:text-3xl sm:text-sm">
                Jaspreet Singh
              </h1>
              <button className="bg-gray-100 px-2 py-1 rounded-lg border">
                Edit Profile
              </button>
              <CogIcon className="Btn" />
            </div>
            <div className="flex items-center justify-between">
              <h2>
                <span className="font-semibold">{posts.length} </span>Posts
              </h2>
              <h2>
                {" "}
                <span className="font-semibold">337 </span>Followers
              </h2>
              <h2>
                {" "}
                <span className="font-semibold">90 </span>Following
              </h2>
            </div>
            <div>
              <h2 className="font-semibold">Jaspreet singh</h2>
              <p>
                (︻̷┻̿═━一-)
                <br /> 5.11⬆️
                <br /> ਇਲਾਕਾ->ਮਾਲਵਾ
                <br /> Handsome ਸਰਦਾਰ just like DADDY
                <br /> BHANGRA❤️
                <br /> ਜੀ. ਐਨ. ਈ ਕਾਲਜ
                <br /> This ਸਰਦਾਰ only wants ਸਰਦਾਰਨੀ
                <br /> 🎂 XXVII-Xll-MM
              </p>
            </div>
          </div>
        </div>
        <Highlights />
        <ProfilePosts />
      </div>
    );
}

export default ProfileInfo
