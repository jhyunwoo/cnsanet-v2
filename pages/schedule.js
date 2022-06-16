import { useState } from "react";
import { Tab } from "@headlessui/react";
import BottomBar from "../components/BottomBar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    일: [
      {
        id: 1,
        title: "",
        date: "",
      },
      {
        id: 2,
        title: "",
        date: "",
      },
      {
        id: 3,
        title: "",
        date: "",
      },
      {
        id: 4,
        title: "",
        date: "",
      },
      {
        id: 5,
        title: "",
        date: "",
      },
      {
        id: 6,
        title: "",
        date: "",
      },
      {
        id: 7,
        title: "7교시",
        date: "",
      },
      {
        id: 8,
        title: "",
        date: "",
      },
      {
        id: 9,
        title: "",
        date: "",
      },
      {
        id: 10,
        title: "",
        date: "",
      },
    ],
    월: [
      {
        id: 1,
        title: "1교시",
        date: "영어Ⅰ 3 / A401 / 이상미",
      },
      {
        id: 2,
        title: "2교시",
        date: "수학Ⅰ 4 / S301 / 김나영",
      },
      {
        id: 3,
        title: "3교시",
        date: "물리학Ⅰ 3 / S207 / 김원우",
      },
      {
        id: 4,
        title: "4교시",
        date: "[4A] 언어와 매체 9 / A308 / 김수지",
      },
      {
        id: 5,
        title: "5교시",
        date: "정보과학 2 / C406(멀티미디어실) / 이정석",
      },
      {
        id: 6,
        title: "6교시",
        date: "수학Ⅱ 9 / S409 / 이진필",
      },
      {
        id: 7,
        title: "7교시",
        date: "",
      },
      {
        id: 8,
        title: "",
        date: "",
      },
      {
        id: 9,
        title: "",
        date: "",
      },
      {
        id: 10,
        title: "",
        date: "",
      },
    ],
    화: [
      {
        id: 1,
        title: "1교시",
        date: "영어Ⅰ 3 / A401 / 이상미",
      },
      {
        id: 2,
        title: "2교시",
        date: "수학Ⅰ 4 / S301 / 김나영",
      },
      {
        id: 3,
        title: "3교시",
        date: "미술A 7 / N504 미술실M / 전호영",
      },
      {
        id: 4,
        title: "4교시",
        date: "[4A] 언어와 매체 9 / A308 / 김수지",
      },
      {
        id: 5,
        title: "5교시",
        date: "정보과학 2 / C406(멀티미디어실) / 이정석",
      },
      {
        id: 6,
        title: "6교시",
        date: "수학Ⅱ 9 / S409 / 이진필",
      },
      {
        id: 7,
        title: "7교시",
        date: "",
      },
      {
        id: 8,
        title: "",
        date: "",
      },
      {
        id: 9,
        title: "",
        date: "",
      },
      {
        id: 10,
        title: "",
        date: "",
      },
    ],
    수: [
      {
        id: 1,
        title: "1교시",
        date: "영어Ⅰ 3 / A401 / Eric Andrew Crump",
      },
      {
        id: 2,
        title: "2교시",
        date: "수학Ⅰ 4 / S301 / 김나영",
      },
      {
        id: 3,
        title: "3교시",
        date: "물리학Ⅰ 3 / S207 / 김원우",
      },
      {
        id: 4,
        title: "4교시",
        date: "[4A] 언어와 매체 9 / A308 / 김수지",
      },
      {
        id: 5,
        title: "5교시",
        date: "정보과학 2 / C406(멀티미디어실) / 이정석",
      },
      {
        id: 6,
        title: "6교시",
        date: "수학Ⅱ 9 / S409 / 이진필",
      },
      {
        id: 7,
        title: "7교시",
        date: "",
      },
      {
        id: 8,
        title: "",
        date: "",
      },
      {
        id: 9,
        title: "",
        date: "",
      },
      {
        id: 10,
        title: "",
        date: "",
      },
    ],
    목: [
      {
        id: 1,
        title: "1교시",
        date: "영어Ⅰ 3 / A401 / 이상미",
      },
      {
        id: 2,
        title: "2교시",
        date: "운동과 건강A 4 / 충무관 A / 김진호",
      },
      {
        id: 3,
        title: "3교시",
        date: "물리학Ⅰ 3 / S207 / 김원우",
      },
      {
        id: 4,
        title: "4교시",
        date: "[4A] 언어와 매체 9 / A308 / 김수지",
      },
      {
        id: 5,
        title: "5교시",
        date: "정보과학 2 / C406(멀티미디어실) / 이정석",
      },
      {
        id: 6,
        title: "6교시",
        date: "수학Ⅱ 9 / S409 / 이진필",
      },
      {
        id: 7,
        title: "7교시",
        date: "",
      },
      {
        id: 8,
        title: "",
        date: "",
      },
      {
        id: 9,
        title: "",
        date: "",
      },
      {
        id: 10,
        title: "",
        date: "",
      },
    ],
    금: [
      {
        id: 1,
        title: "1교시",
        date: "운동과 건강B 3 / 충무관 B / 최정훈",
      },
      {
        id: 2,
        title: "2교시",
        date: "수학Ⅰ 4 / S301 / 김나영",
      },
      {
        id: 3,
        title: "3교시",
        date: "물리학Ⅰ 3 / S207 / 김원우",
      },
      {
        id: 4,
        title: "4교시",
        date: "[4A] 철학 9 / A406 Logos Lab / 배지한",
      },
      {
        id: 5,
        title: "5교시",
        date: "미술B 13 / N505 미술실 / 고재령",
      },
      {
        id: 6,
        title: "6교시",
        date: "한국사 16 / A406 Logos Lab / 이강희",
      },
      {
        id: 7,
        title: "7교시",
        date: "",
      },
      {
        id: 8,
        title: "",
        date: "",
      },
      {
        id: 9,
        title: "",
        date: "",
      },
      {
        id: 10,
        title: "",
        date: "",
      },
    ],
    토: [
      {
        id: 1,
        date: "",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "",
        date: "",
      },
      {
        id: 3,
        title: "",
        date: "",
      },
      {
        id: 4,
        title: "",
        date: "",
      },
      {
        id: 5,
        title: "",
        date: "",
      },
      {
        id: 6,
        title: "",
        date: "",
      },
      {
        id: 7,
        title: "7교시",
        date: "",
      },
      {
        id: 8,
        title: "",
        date: "",
      },
      {
        id: 9,
        title: "",
        date: "",
      },
      {
        id: 10,
        title: "",
        date: "",
      },
    ],
  });

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
