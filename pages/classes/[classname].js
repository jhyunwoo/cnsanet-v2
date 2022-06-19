import BottomBar from "../../components/BottomBar";
import ProfileBar from "../../components/ProfileBar";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Reject from "../components/reject";

export default function Class() {
  const router = useRouter();
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
      <div className="flex flex-col justify-center">
        <div className="text-center text-2xl font-bold m-4 dark:text-white">
          {router.query.classname}
        </div>
        <div className="bg-sky-100 dark:bg-blue-900 p-4 flex flex-col">
          <div className="text-xl m-2 dark:text-white">교과 활동</div>
          <div className="m-2  p-2 rounded-xl flex flex-row justify-between">
            <div className="divide-x-2 grid grid-cols-3 space-x-2 text-center flex-1">
              <div className="my-auto dark:text-slate-100">구분</div>
              <div className="my-auto dark:text-slate-100">제목</div>
              <div className="my-auto dark:text-slate-100 ">등록일시</div>
            </div>
            <div className=" bg-sky-100 dark:bg-blue-900 text-sky-100 dark:text-sky-900 p-2 rounded-lg flex-none">
              <CheckIcon className="w-4 h-4" />
            </div>
          </div>
          <Link href={"/beforeDeveloped"}>
            <div className="m-2  p-2 rounded-xl bg-white dark:bg-slate-900 flex flex-row justify-between hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              <div className="divide-x-2 grid grid-cols-3 space-x-2 text-center flex-1">
                <div className="my-auto dark:text-slate-100">공지</div>
                <div className="my-auto dark:text-slate-100">
                  문법 요소의 활용 - 미니 과제
                </div>
                <div className="my-auto dark:text-slate-100 ">
                  2022년 7월 12일
                </div>
              </div>
              <div className=" bg-green-500 dark:bg-green-700 text-white p-2 rounded-lg flex-none my-auto">
                <CheckIcon className="w-4 h-4" />
              </div>
            </div>
          </Link>
          <Link href={"/beforeDeveloped"}>
            <div className="m-2  p-2 rounded-xl bg-white dark:bg-slate-900 flex flex-row justify-between hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              <div className="divide-x-2 grid grid-cols-3 space-x-2 text-center flex-1">
                <div className="my-auto dark:text-slate-100">일반</div>
                <div className="my-auto dark:text-slate-100">음운 학습지</div>
                <div className="my-auto dark:text-slate-100 ">
                  2022년 6월 12일
                </div>
              </div>
              <div className=" bg-red-500 dark:bg-red-700 text-white p-2 rounded-lg flex-none my-auto">
                <XIcon className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
