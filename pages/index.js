import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <div className="m-3 p-3 bg-blue-500 rounded-xl text-white text-center font-bold text-xl">
        충남삼성고등학교
      </div>
      <div className="m-3 p-2 bg-white rounded-xl">
        <div className="text-center font-bold my-4 text-lg">학습 계시판</div>
        <div>
          <div className="flex flex-row mx-2 justify-between mb-5">
            <div>교과목</div>
            <div>교사</div>
            <div>과제수</div>
            <div>교사 마지막 등록 일시</div>
          </div>
          <div className="flex flex-row mx-2 justify-between">
            <div>수학I 5</div>
            <div>김정호</div>
            <div>4/11</div>
            <div>2022년 6월 14일 10시</div>
          </div>
        </div>
      </div>
    </div>
  );
}
