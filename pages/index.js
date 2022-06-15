import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <div className="w-screen h-screen flex justify-center flex-col">
        <div className="text-3xl mx-auto font-bold text-indigo-700 mb-2">
          CNSA
        </div>
        <div className="text-4xl mx-auto font-extrabold text-indigo-800">
          충남삼성고등학교
        </div>
        <Link href={"/login"}>
          <div className="bg-indigo-600 text-white text-center mx-auto p-2 px-6 rounded-xl mt-16 text-2xl ease-in-out duration-300 delay-150 font-bold shadow-md hover:bg-indigo-500 transition hover:-translate-y-1">
            <div>로그인</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
