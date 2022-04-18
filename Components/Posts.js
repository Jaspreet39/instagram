import Post from "./Post";
import { useState, useEffect } from "react";
import { onSnapshot, collection, query } from "@firebase/firestore";
import { db } from "../firebase";
import { orderBy } from "@firebase/firestore";




function Posts() {

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
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          // id={post.id}
          username={post.data().username}
          img={post.data().image}
          userImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjAAwQyKxGO39mWtUYjD0s_uhMSmEi4wXyPg&usqp=CAU"
          caption={post.data().captionRef}
        />
      ))}
    </div>
  );
}

export default Posts;
