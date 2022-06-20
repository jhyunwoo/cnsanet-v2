import BottomBar from "../../components/BottomBar";
import ProfileBar from "../../components/ProfileBar";
import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  SelectorIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useSession, getSession } from "next-auth/react";
import Reject from "../../components/reject";

const selForm = [
  { id: 1, name: "학생 설문", unavailable: false },
  { id: 2, name: "장소 사용 신청", unavailable: false },
  { id: 3, name: "외출 외박 관리", unavailable: false },
  { id: 4, name: "수업 설문", unavailable: true },
];

const studentForm = [
  {
    id: 1,
    name: "도박 예방 교육 설문",
    did: true,
    time: "2022년 6월 12일 ~ 2022년 7월 1일",
    grade: "1학년, 2학년, 3학년",
  },
  {
    id: 2,
    name: "바이애슬론 대회 참가 신청",
    did: false,
    time: "2022년 6월 12일 ~ 2022년 7월 1일",
    grade: "1학년, 2학년, 3학년",
  },
  {
    id: 3,
    name: "2022년 2학기 1차 수강 신청",
    did: true,
    time: "2022년 6월 12일 ~ 2022년 7월 1일",
    grade: "1학년, 2학년, 3학년",
  },
  {
    id: 4,
    name: "중앙대 입학 설명회 참가",
    did: false,
    time: "2022년 6월 12일 ~ 2022년 7월 1일",
    grade: "1학년, 2학년, 3학년",
  },
];

export default function Form() {
  const [selected, setSelected] = useState(selForm[0]);
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
        <div>
          <div className="m-4 ">
            <Listbox value={selected} onChange={setSelected}>
              <div className=" mt-1">
                <Listbox.Button className=" w-full cursor-default rounded-lg bg-white dark:bg-slate-700 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 dark:focus-visible:border-indigo-700 focus-visible:ring-2 focus-visible:ring-white dark:focus-visible:ring-black focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 dark:focus-visible:ring-offset-blue-700 sm:text-sm">
                  <span className="block truncate dark:text-white">
                    {selected.name}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-11/12 overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 focus:outline-none sm:text-sm">
                    {selForm.map((sel, selIdx) => (
                      <Listbox.Option
                        key={selIdx}
                        className={({ active }) =>
                          ` cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-sky-100 dark:bg-sky-900 text-sky-900 dark:text-sky-100"
                              : "text-gray-900 dark:text-slate-100"
                          }`
                        }
                        value={sel}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate dark:text-white ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {sel.name}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div id="menu">
            {selected.name === "학생 설문" ? (
              <div className="flex flex-wrap flex-col">
                {studentForm.map((student, studentIdx) => (
                  <Link href={`/form/${student.name}`} key={studentIdx}>
                    <div
                      className={`${
                        student.did
                          ? "bg-cyan-400 dark:bg-cyan-800 hover:bg-cyan-500 dark:hover:bg-cyan-700 transition"
                          : "bg-rose-400 dark:bg-rose-800 hover:bg-rose-500 dark:hover:bg-rose-700 transition"
                      } m-4 p-3 flex-1 text-white rounded-xl `}
                    >
                      <div className="text-xl">{student.name}</div>
                      <div>기간: {student.time}</div>
                      <div>대상 학년: {student.grade}</div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div></div>
            )}
            {selected.name === "장소 사용 신청" ? (
              <Link href={"/form/applicationPlace"}>
                <div className="bg-sky-500 dark:bg-sky-300 m-2 p-3 rounded-xl text-white dark:text-black font-bold flex flex-row justify-center hover:bg-sky-400 dark:hover:bg-sky-200 transition">
                  <div>장소 사용 신청하기</div>
                  <ChevronRightIcon className="w-4 h-4 text-white dark:text-black my-auto" />
                </div>
              </Link>
            ) : (
              <div></div>
            )}
            {selected.name === "외출 외박 관리" ? (
              <div className="text-center text-4xl my-96 dark:text-white">
                🚧개발 예정🚧
              </div>
            ) : (
              <div></div>
            )}
            {selected.name === "수업 설문" ? (
              <div className="text-center text-4xl my-96 dark:text-white">
                🚧개발 예정🚧
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
