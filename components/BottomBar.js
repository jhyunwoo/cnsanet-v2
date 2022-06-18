import Link from "next/link";
import {
  MenuIcon,
  LibraryIcon,
  HomeIcon,
  ClipboardCheckIcon,
  ChatAlt2Icon,
  ChevronDoubleRightIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

const menuOptions = [
  { op: "교과 계시판", link: "/classes" },
  { op: "학생 공지사항", link: "/home" },
  { op: "쪽지", link: "/chats" },
  { op: "시간표", link: "/schedule" },
  { op: "급식표", link: "/meal" },
  { op: "설문", link: "/form" },
];

export default function BottomBar() {
  const [menuUp, setMenuUp] = useState(false);
  function controlMenu() {
    if (menuUp === true) {
      setMenuUp(false);
    } else {
      setMenuUp(true);
    }
  }

  return (
    <div>
      <div className="flex flex-row justify-between bg-white/50 backdrop-blur-sm m-2 p-2 rounded-xl text-[#2e2a38] fixed bottom-0 right-0 left-0 shadow-xl">
        <Link href={"/classes"}>
          <div>
            <LibraryIcon className="h-8 w-8" />
          </div>
        </Link>
        <Link href={"/home"}>
          <div>
            <HomeIcon className="h-8 w-8" />
          </div>
        </Link>
        <div onClick={controlMenu}>
          <MenuIcon className="h-8 w-8" />
        </div>
        <Link href={"/form"}>
          <div>
            <ClipboardCheckIcon className="h-8 w-8" />
          </div>
        </Link>
        <Link href={"/chats"}>
          <div>
            <ChatAlt2Icon className="h-8 w-8" />
          </div>
        </Link>
      </div>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/50 p-4 rounded-2xl flex flex-col backdrop-blur-xl bg-blend-color-burn ${
          menuUp ? "visible" : "invisible"
        }`}
      >
        <div className="flex justify-between">
          <div className="text-2xl m-2 mx-auto">전체 메뉴</div>
          <div onClick={controlMenu} className="p-2 my-auto">
            <XIcon className="w-4 h-4" />
          </div>
        </div>
        <div>
          {menuOptions.map((menu, menuIdx) => (
            <Link key={menuIdx} href={`${menu.link}`}>
              <div className="m-2 text-lg bg-slate-50/70 rounded-lg p-2 px-4 flex flex-row justify-between backdrop-blur-xl hover:bg-sky-200 transition">
                <div>{menu.op}</div>
                <ChevronDoubleRightIcon className="w-4 h-4 my-auto ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
