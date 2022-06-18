import BottomBar from "../../components/BottomBar";
import ProfileBar from "../../components/ProfileBar";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  SelectorIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

const people = [
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
  const [selected, setSelected] = useState(people[0]);
  return (
    <div>
      <ProfileBar />
      <BottomBar />
      <div>
        <div>
          <div className="m-4">
            <Listbox value={selected} onChange={setSelected}>
              <div className=" mt-1">
                <Listbox.Button className=" w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          ` cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
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
                        student.did ? "bg-blue-500" : "bg-red-500"
                      } m-4 p-3 flex-1 text-white rounded-xl`}
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
                <div className="bg-sky-500 m-2 p-3 rounded-xl text-white flex flex-row justify-center hover:bg-sky-400 transition">
                  <div>장소 사용 신청하기</div>
                  <ChevronRightIcon className="w-4 h-4 text-white my-auto" />
                </div>
              </Link>
            ) : (
              <div></div>
            )}
            {selected.name === "외출 외박 관리" ? (
              <div className="text-center text-4xl my-96">🚧개발 예정🚧</div>
            ) : (
              <div></div>
            )}
            {selected.name === "수업 설문" ? (
              <div className="text-center text-4xl my-96">🚧개발 예정🚧</div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
