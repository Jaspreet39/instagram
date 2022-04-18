import faker from "faker";
import { useEffect, useState } from "react";
import Highlight from "./Highlight";
function Highlights() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(15)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8  rounded-sm overflow-x-scroll scrollbar-thin  space-x-10">
      {suggestions.map((profile) => (
        <Highlight
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Highlights;
