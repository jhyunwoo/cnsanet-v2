import { LockClosedIcon, XIcon, ArrowDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function Home() {
  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  let day = week[today.getDay()]; // 요일
  const [login, setLogin] = useState("invisible");
  const [main, setMain] = useState("visible");
  return (
    <div className="bg-slate-100 dark:bg-slate-900">
      <div className={`w-screen h-screen flex justify-center flex-col`}>
        <div className="text-3xl mx-auto font-bold text-indigo-800 dark:text-indigo-200 mb-2">
          CNSA
        </div>
        <div className="text-4xl mx-auto font-extrabold text-indigo-800 dark:text-indigo-200">
          충남삼성고등학교
        </div>

        <div
          className="bg-indigo-600 dark:bg-indigo-500 text-white dark:text-indigo-100 text-center mx-auto p-2 px-6 rounded-xl mt-16 text-2xl ease-in-out duration-300 delay-150 font-bold shadow-md hover:bg-indigo-500 dark:hover:bg-indigo-400 transition hover:-translate-y-1"
          onClick={() => {
            setLogin("visible");
            setMain("invisible");
          }}
        >
          <div>로그인</div>
        </div>
      </div>

      <div
        className={`min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${login} m-4 rounded-xl backdrop-blur-3xl absolute top-0 bottom-0 right-0 left-0 transition duration-150 delay-100`}
      >
        <div className="max-w-md w-full space-y-8 bg-white/50 dark:bg-black/50 rounded-2xl p-4">
          <div>
            <div className="flex justify-end">
              <XIcon
                className="h-5 w-5 text-indigo-500 dark:text-indigo-100"
                onClick={() => {
                  setLogin("invisible");
                  setMain("visible");
                }}
              />
            </div>

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
              로그인
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  ID
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="아이디"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="비밀번호"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500 dark:ring-indigo-600 border-gray-300 dark:border-gray-700 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 dark:text-gray-50"
                >
                  계정 로그인 유지
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dakr:hover:text-indigo-300"
                >
                  비밀번호 분실
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white dark:text-black bg-indigo-600 dark:bg-indigo-200 hover:bg-indigo-700 dark:hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 dark:text-indigo-700 group-hover:text-indigo-400 dark:group-hover:text-indigo-800"
                    aria-hidden="true"
                  />
                </span>
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col flex-wrap  justify-center bg-blue-400 dark:bg-sky-800 m-4 p-4 rounded-2xl text-white">
        <div className="text-center text-2xl font-bold">오늘 학사 일정</div>
        <div>
          <div className="text-center text-lg mt-2">2022년 6월 16일</div>
          <div>
            <ol className="m-4">
              <li>7교시 2학년 학생탐구활동 3차 면담</li>
              <li>1학년 수강신청 교육</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-violet-400 dark:bg-violet-800 m-4 rounded-2xl text-white ">
        <div className="text-center text-2xl font-bold mt-4">오늘 급식</div>
        <div className="text-center text-lg mt-2">2022년 6월 16일</div>
        <div className="flex flex-wrap">
          <div className="m-4 rounded-xl flex-auto text-white p-4">
            <span className="font-bold text-lg">조식</span>
            <ol className="mt-2 font-bold bg-gray-900 text-gray-50 rounded-xl p-4">
              <li>잡곡밥(현미)</li>
              <li>버섯찌개</li>
              <li>폭찹</li>
              <li>오징어실채볶음</li>
              <li>배추김치</li>
              <li>도시락김</li>
              <li>양상추샐러드</li>
              <li>시리얼&흰우유</li>
              <li>누룽지</li>
            </ol>
          </div>
          <div className="m-4 rounded-xl flex-auto text-white p-4">
            <span className="font-bold text-lg">중식</span>
            <ol className="mt-2 font-bold bg-gray-900 text-gray-50 rounded-xl p-4">
              <li>잡곡밥(현미)</li>
              <li>버섯찌개</li>
              <li>폭찹</li>
              <li>오징어실채볶음</li>
              <li>배추김치</li>
              <li>도시락김</li>
              <li>양상추샐러드</li>
              <li>시리얼&흰우유</li>
              <li>누룽지</li>
            </ol>
          </div>
          <div className="m-4 rounded-xl flex-auto text0white p-4">
            <span className="font-bold text-lg">석식</span>
            <ol className="mt-2 font-bold bg-gray-900 text-gray-50 rounded-xl p-4">
              <li>잡곡밥(현미)</li>
              <li>버섯찌개</li>
              <li>폭찹</li>
              <li>오징어실채볶음</li>
              <li>배추김치</li>
              <li>도시락김</li>
              <li>양상추샐러드</li>
              <li>시리얼&흰우유</li>
              <li>누룽지</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
