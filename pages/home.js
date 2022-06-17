import Link from "next/link";
import BottomBar from "../components/BottomBar";
import ProfileBar from "../components/ProfileBar";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <ProfileBar />
      <div className="bg-white m-4 p-4 px-6 rounded-2xl">
        <div className="text-center text-2xl font-bold">교과 과제</div>
        <div>
          <div>
            <div className="text-lg font-bold ml-4">오늘 마감</div>
            <div className="flex flex-wrap mt-4">
              <Link href={"/classes/english"}>
                <div className="bg-indigo-400 p-4 rounded-md text-white my-2 mx-4 flex-auto">
                  <div className="text-lg text-bold">영어</div>
                  <div className="mt-2">부교재 87쪽 까지 풀기</div>
                  <div className="flex flex-row space-x-4 mt-4">
                    <div>남은 시간</div>
                    <div>3시간 31분</div>
                  </div>
                </div>
              </Link>
              <Link href={"/classes/english"}>
                <div className="bg-indigo-400 p-4 rounded-md text-white my-2 mx-4 flex-auto">
                  <div className="text-lg text-bold">영어</div>
                  <div className="mt-2">부교재 87쪽 까지 풀기</div>
                  <div className="flex flex-row space-x-4 mt-4">
                    <div>남은 시간</div>
                    <div>3시간 31분</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="text-lg font-bold ml-4 mt-4">내일 마감</div>
            <div className="flex flex-wrap mt-4">
              <Link href={"/classes/maths1"}>
                <div className="bg-indigo-400 p-4 rounded-md text-white my-2 mx-4 flex-auto">
                  <div className="text-lg text-bold">수학 I</div>
                  <div className="mt-2">부교재 187쪽 까지 풀기</div>
                  <div className="flex flex-row space-x-4 mt-4">
                    <div>남은 시간</div>
                    <div>3시간 31분</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white m-4 p-4 px-6 rounded-2xl">
        <div className="text-center text-2xl font-bold">최근 온 쪽지 (3)</div>
        <div>
          <div>
            <div className="flex flex-col mt-4">
              <div className="bg-slate-100 rounded-xl flex-1 p-2 my-1">
                <div className="font-bold">이상미 선생님</div>
                <div>오늘 수업은 영상 강의 보는 것으로 대체합니다.</div>
              </div>
              <div className="bg-slate-100 rounded-xl flex-1 p-2 my-1">
                <div className="font-bold">이상미 선생님</div>
                <div>오늘 수업은 영상 강의 보는 것으로 대체합니다.</div>
              </div>
              <div className="bg-slate-100 rounded-xl flex-1 p-2 my-1">
                <div className="font-bold">이상미 선생님</div>
                <div>오늘 수업은 영상 강의 보는 것으로 대체합니다.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white m-4 p-4 px-6 rounded-2xl">
        <div className="text-center text-2xl font-bold">게시판</div>
        <div>
          <div>
            <div className="flex flex-col mt-4">
              <div className="bg-slate-100 rounded-xl flex-1 p-2 my-1">
                <div className="font-bold">교육과정센터</div>
                <div>2022년 2학기 수강신청 안내</div>
              </div>
              <div className="bg-slate-100 rounded-xl flex-1 p-2 my-1">
                <div className="font-bold">학생회</div>
                <div>C-LINK 강의실 안내</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
