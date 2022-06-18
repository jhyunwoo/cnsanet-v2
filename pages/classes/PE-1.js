import BottomBar from "../../components/BottomBar";
import ProfileBar from "../../components/ProfileBar";
import { CheckIcon, XIcon } from "@heroicons/react/solid";

export default function Korean() {
  return (
    <div>
      <ProfileBar />
      <BottomBar />
      <div className="flex flex-col justify-center">
        <div className="text-center text-2xl font-bold m-4">언어와 매체</div>
        <div className="bg-sky-100 p-4 flex flex-col">
          <div className="text-xl m-2">교과 활동</div>
          <div className="m-2  p-2 rounded-xl flex flex-row justify-between">
            <div className="divide-x-2 grid grid-cols-3 space-x-2 text-center flex-1">
              <div className="my-auto">구분</div>
              <div className="my-auto">제목</div>
              <div className="my-auto ">등록일시</div>
            </div>
            <div className=" bg-sky-100 text-sky-100 p-2 rounded-lg flex-none">
              <CheckIcon className="w-4 h-4" />
            </div>
          </div>
          <div className="m-2  p-2 rounded-xl bg-white flex flex-row justify-between">
            <div className="divide-x-2 grid grid-cols-3 space-x-2 text-center flex-1">
              <div className="my-auto">공지</div>
              <div className="my-auto">문법 요소의 활용 - 미니 과제</div>
              <div className="my-auto ">2022년 7월 12일</div>
            </div>
            <div className=" bg-green-500 text-white p-2 rounded-lg flex-none">
              <CheckIcon className="w-4 h-4" />
            </div>
          </div>
          <div className="m-2  p-2 rounded-xl bg-white flex flex-row justify-between">
            <div className="divide-x-2 grid grid-cols-3 space-x-2 text-center flex-1">
              <div className="my-auto">일반</div>
              <div className="my-auto">음운 학습지</div>
              <div className="my-auto ">2022년 6월 12일</div>
            </div>
            <div className=" bg-red-500 text-white p-2 rounded-lg flex-none">
              <XIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
