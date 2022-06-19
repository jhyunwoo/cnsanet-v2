import BottomBar from "../../components/BottomBar";
import ProfileBar from "../../components/ProfileBar";
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useSession, getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Reject from "../components/reject";

export default function Chat() {
  const messages = [
    {
      user: "김원우",
      text: "오늘 7교시 자습",
      date: "2022/06/16/08:38",
      link: "user1",
      new: true,
    },
    {
      user: "진요한",
      text: "안녕하세요!",
      date: "2022/06/15/13:42",
      link: "user2",
      new: false,
    },
    {
      user: "김원우",
      text: "오늘 7교시 자습",
      date: "2022/06/16/08:38",
      link: "user1",
      new: true,
    },
    {
      user: "진요한",
      text: "안녕하세요!",
      date: "2022/06/15/13:42",
      link: "user2",
      new: false,
    },
    {
      user: "김원우",
      text: "오늘 7교시 자습",
      date: "2022/06/16/08:38",
      link: "user1",
      new: true,
    },
    {
      user: "진요한",
      text: "안녕하세요!",
      date: "2022/06/15/13:42",
      link: "user2",
      new: false,
    },
    {
      user: "김원우",
      text: "오늘 7교시 자습",
      date: "2022/06/16/08:38",
      link: "user1",
      new: true,
    },
    {
      user: "진요한",
      text: "안녕하세요!",
      date: "2022/06/15/13:42",
      link: "user2",
      new: false,
    },
    {
      user: "김원우",
      text: "오늘 7교시 자습",
      date: "2022/06/16/08:38",
      link: "user1",
      new: true,
    },
    {
      user: "진요한",
      text: "안녕하세요!",
      date: "2022/06/15/13:42",
      link: "user2",
      new: false,
    },
  ];
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [content, setContent] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);
  if (typeof window !== "undefined" && loading) return null;
  if (!session) {
    return <Reject />;
  }
  return (
    <div className="">
      <ProfileBar />
      <BottomBar />
      <div>
        <div className="m-4 text-center text-2xl font-bold dark:text-white">
          쪽지
        </div>
        <Link href={"/beforeDeveloped"}>
          <div className="bg-indigo-500 dark:bg-indigo-800 text-white text-base m-3 p-3 px-4 rounded-xl hover:bg-indigo-400 dark:hover:bg-indigo-700 transition flex justify-between">
            <div className="my-auto text-xl ">쪽지 보내기</div>
            <PaperAirplaneIcon className="w-8 h-8" />
          </div>
        </Link>
        <div>
          {messages.map((messages, messagesIdx) => (
            <Link href={`/chats/${messages.link}`} key={messagesIdx}>
              <div className="m-2 bg-slate-100 dark:bg-slate-800 rounded-xl p-2 px-4 hover:bg-sky-100 dark:hover:bg-sky-900 transition">
                <div className="flex">
                  <div className="text-bold text-lg dark:text-slate-100">
                    {messages.user}
                  </div>
                  <span
                    className={`flex h-3 w-3 ml-1 ${
                      messages.new ? "visible" : "invisible"
                    }`}
                  >
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75 dark:bg-sky-700"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500 dark:bg-sky-600"></span>
                  </span>
                </div>
                <div className="flex justify-between">
                  <div className="text-base dark:text-slate-100">
                    {messages.text}
                  </div>
                  <div className="dark:text-slate-100">{messages.date}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
