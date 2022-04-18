import ProfilePost from "./ProfilePost";
import { useEffect, useState } from "react";
import { onSnapshot, collection, query } from "@firebase/firestore";
import { db } from "../firebase";
import { orderBy } from "@firebase/firestore";
function ProfilePosts() {
     const [posts, setPosts] = useState([]);
    useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timeStamp", "desc")),
        (snapshot) => {
          console.log(snapshot.docs)
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );
  console.log(posts);
    return (
      <div className="grid md:grid-cols-3  items-center justify-center sm:grid-cols-2 ">
        {posts.map((post) => (
          <ProfilePost
            key={post.id}
            // id={post.id}
            // username={post.data().username}
            img={post.data().image}
            // userImg={index.userImg}
            // caption={post.data().captionRef}
          />
        ))}
      </div>
    );
}

export default ProfilePosts
