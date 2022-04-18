import Header from "../Components/Header"
import { PencilIcon, ArrowDownIcon } from "@heroicons/react/outline";
import faker from "faker";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { PaperAirplaneIcon, InformationCircleIcon, EmojiHappyIcon, PhotographIcon, HeartIcon, SearchIcon, XIcon, CheckCircleIcon } from "@heroicons/react/outline";


function Message() {
    const [suggestions, setSuggestions] = useState([]);
    const [data, setData] = useState()
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    const username = urlParams.get("username");
    const avatar = urlParams.get("avatar");

    const [text, setText] = useState('')
    const [show, setShow] = useState(false)

    const [profileInfo, setProfileInfo] = useState(false)

    useEffect(() => {
      const suggestions = [...Array(20)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
        id: i,
      }));
      setSuggestions(suggestions);
    }, []);

    const ale = (x,y) => {
      const path = '/Message?username='+x+"&avatar="+y
      router.push(path)
    }

    useEffect(()=>{
      setData(username)
    })

    const close = ()=> {
      setOpen(false)
    }

    const showDialog = () => {
      (open) ? setOpen(false) : setOpen(true)
    }
     const showTick = (x) => {
       show ? setShow(false) : setShow(true);
       alert(x)
     };

     const profile = () => {
      profileInfo ? setProfileInfo(false) : setProfileInfo(true)
     }
  
    console.log(username);

    const select = () => {
      alert(Error)
    }
    return (
      <div className="">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-4xl xl:grid-cols-3 xl:max-w-5xl mx-auto mt-5 ">
          {/* left */}
          <div className="border col-span-1 ">
            <div className="">
              <div className="flex items-center py-6 border">
                <div className="mx-auto flex items-center ">
                  <h2 className=" font-semibold">Jaspreet Singh</h2>
                  <ArrowDownIcon className="Btn h-5 mx-2" />
                </div>
                <div className="justify-end p-1 mx-4 border-2 border-black relative h-6 w-6 rounded-md">
                  <PencilIcon
                    className="Btn justify-end h-6 absolute top-[-7px] right-[-6px]"
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
              <div className="flex-col space-y-4 p-6 bg-white border-gray-200 border rounded-sm overflow-y-scroll h-screen scrollbar-thin scrollbar-thumb-black">
                {suggestions.map((profile) => (
                  <div
                    type="button"
                    onClick={() => ale(profile.username, profile.avatar)}
                    key={profile.id}
                    className="flex items-center space-x-3  cursor-pointer hover:bg-gray-100"
                  >
                    <img
                      src={profile.avatar}
                      alt=""
                      className="h-14 w-14 rounded-full"
                    />
                    <div>
                      <h3 className="font-normal">{profile.username}</h3>
                      <p className="text-sm text-gray-400">
                        {profile.company.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          {!data ? (
            <div className="border col-span-2 hidden md:inline">
              <div className="relative">
                <div
                  className="absolute top-[20%] left-[20%] bg-white shadow-lg rounded-3xl border  xl:max-w-7xl z-50 w-[400px] "
                  style={{ display: !open ? "none" : "block" }}
                >
                  <div className="flex items-center justify-between py-3 px-2">
                    <XIcon className="Btn" onClick={close} />
                    <h1 className="font-semibold">New Message</h1>
                    <p className="text-sm text-blue-400 cursor-pointer">Next</p>
                  </div>
                  <div className="flex items-center border py-2 overflow-y-scroll pl-3">
                    <p>To:</p>
                    <input
                      disabled
                      type="text"
                      placeholder="search.."
                      className="flex-grow outline-none border-none focus:ring-0"
                    />
                  </div>
                  <div>
                    <p className="ml-2 text-sm font-semibold">Suggested</p>
                  </div>
                  <div className="mt-4 flex-col space-y-4 p-6 bg-white  rounded-sm overflow-y-scroll scrollbar-thin scrollbar-thumb-black h-[450px]">
                    {suggestions.map((profile) => (
                      <div className="flex items-center justify-between hover:bg-gray-100">
                        <div
                          onClick={select}
                          key={profile.id}
                          className="flex items-center space-x-3  cursor-pointer "
                        >
                          <img
                            src={profile.avatar}
                            alt=""
                            className="h-10 w-10 rounded-full"
                          />
                          <div>
                            <h3 className="font-normal">{profile.username}</h3>
                            <p className="text-sm text-gray-400">
                              {profile.company.name}
                            </p>
                          </div>
                        </div>
                        {!show ? (
                          <div
                            onClick={() => showTick(profile.id)}
                            className="h-6 w-6 border border-black rounded-full"
                          ></div>
                        ) : (
                          <div>
                            <CheckCircleIcon
                              onClick={() => setShow(false)}
                              className="Btn text-blue-600"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center h-screen">
                  <div className="space-y-4 z-10">
                    <PaperAirplaneIcon className="Btn rotate-45 border rounded-full border-black h-28 px-3 py-3 mx-auto" />
                    <div>
                      <p className="text-2xl font-normal text-gray-500 text-center">
                        Your Message
                      </p>
                      <p className="text-gray-400">
                        Send private photos and messages to a friend or group.
                      </p>
                    </div>
                    <div className="text-center">
                      <button
                        value={open}
                        onChange={(e) => setOpen(e.target.value)}
                        onClick={showDialog}
                        className="text-white bg-blue-400 px-2 py-1 rounded-lg "
                      >
                        Send message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="border col-span-2 hidden md:inline relative">
              <div className="p-5 border">
                <div className="flex items-center justify-between">
                  {!profileInfo ? (
                    <div className="flex items-center space-x-2">
                      <img
                        src={avatar}
                        alt=""
                        className="h-8 w-8 rounded-full"
                      />
                      <h1>{username}</h1>
                    </div>
                  ) : (
                    <div className="">
                      <h1 className="font-semibold">Details</h1>
                    </div>
                  )}
                  <InformationCircleIcon
                    className="Btn"
                    onClick={profile}
                    onChange={(e) => setProfileInfo(e.target.value)}
                  />
                </div>
              </div>
              {!profileInfo ? (
                <div className="h-full">
                  <div className="receiver  absolute bottom-48 left-10">
                    <div className="bg-gray-300 w-min p-3 rounded-2xl">hlo</div>
                    <p className="text-xs text-gray-400 ">20:30pm</p>
                  </div>
                  <div className="sender  absolute  bottom-20 right-10">
                    <div className="bg-blue-600 text-white w-min p-3 rounded-2xl">
                      hi
                    </div>
                    <p className="text-xs text-gray-400">20:32pm</p>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center space-x-2 pl-3 border border-b py-4">
                    <input type="checkbox" className="rounded-sm focus:ring-0" />
                    <p>Mute messages</p>
                  </div>
                  <div className="pl-5 space-y-3 py-6 border-b">
                    <h3 className="font-semibold">Members</h3>
                    <div className="flex space-x-3 items-center ">
                      <img
                        src={avatar}
                        alt=""
                        className="h-14 w-14 rounded-full"
                      />
                      <div className="">
                        <h1>{username}</h1>
                        <p className="text-xs font-semibold text-gray-400">
                          {username}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 pl-4 py-4 border-b">
                    <p className="text-red-500 text-md cursor-pointer">Delete Chat</p>
                    <p className="text-red-500 text-md cursor-pointer">Block</p>
                    <p className="text-red-500 text-md cursor-pointer">Report</p>
                  </div>
                </div>
              )}

              <div className="flex items-center p-2 border rounded-full mx-3 mt-1 absolute bottom-0 min-w-[97%]">
                {text ? (
                  <SearchIcon className="Btn h-6" />
                ) : (
                  <EmojiHappyIcon className="Btn" />
                )}

                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  type="text"
                  placeholder="Message.."
                  className="flex-grow outline-none border-none focus:ring-0"
                />
                <div className="flex items-center space-x-2">
                  <PhotographIcon className="Btn" />
                  <HeartIcon className="Btn" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default Message
