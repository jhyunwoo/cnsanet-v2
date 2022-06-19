import Link from "next/link";
export default function Reject() {
  return (
    <div className="h-screen bg-slate-50 dark:bg-slate-900 dark:text-white text-2xl font-bold">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div>로그인 후 이용해주세요.</div>
        <Link href={"/"}>
          <button
            className={`bg-indigo-600 dark:bg-indigo-500 text-white dark:text-indigo-100 text-center mx-auto p-2 px-6 rounded-xl m-2 text-2xl ease-in-out duration-300 delay-150 font-bold shadow-md hover:bg-indigo-500 dark:hover:bg-indigo-400 transition hover:-translate-y-1`}
          >
            홈페이지로 이동
          </button>
        </Link>
      </div>
    </div>
  );
}
