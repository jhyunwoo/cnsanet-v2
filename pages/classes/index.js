import BottomBar from "../../components/BottomBar";
import ProfileBar from "../../components/ProfileBar";
import Link from "next/link";

export default function Class() {
  return (
    <div>
      <ProfileBar />
      <div className="mb-4">
        <div className="text-center text-3xl font-bold m-4 dark:text-white">
          교과 게시판
        </div>
        <div className="flex justify-evenly mx-4 justify-items-center border-b-2 border-dashed dark:border-gray-700">
          <span className="flex-1 text-center dark:text-slate-100">교과목</span>
          <span className="flex-1 text-center dark:text-slate-100">과제</span>
          <span className="flex-1 text-center dark:text-slate-100">
            마지막 등록
          </span>
        </div>
        <div className="space-y-2">
          <Link href={"/classes/korean"}>
            <div className="flex justify-evenly mx-4 justify-items-center mt-2 py-2 hover:bg-sky-100 dark:hover:bg-blue-800 transition ease-in-out duration-300 rounded-xl">
              <span className="flex-1 text-center dark:text-slate-100">
                언어와 매체
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                2/14
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                2022/6/17/12:32
              </span>
            </div>
          </Link>
          <Link href={"/classes/english"}>
            <div className="flex justify-evenly mx-4 justify-items-center py-2 hover:bg-sky-100 dark:hover:bg-blue-800 transition ease-in-out duration-300 rounded-xl">
              <span className="flex-1 text-center dark:text-slate-100">
                영어 I
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                3/4
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                2022/6/17/12:32
              </span>
            </div>
          </Link>
          <Link href={"/classes/chemistry"}>
            <div className="flex justify-evenly mx-4 justify-items-center py-2 hover:bg-sky-100 dark:hover:bg-blue-800 transition ease-in-out duration-300 rounded-xl">
              <span className="flex-1 text-center dark:text-slate-100">
                화학 I
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                3/4
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                2022/6/17/12:32
              </span>
            </div>
          </Link>
          <Link href={"/classes/maths1"}>
            <div className="flex justify-evenly mx-4 justify-items-center py-2 hover:bg-sky-100 dark:hover:bg-blue-800 transition ease-in-out duration-300 rounded-xl">
              <span className="flex-1 text-center dark:text-slate-100">
                수학 I
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                3/4
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                2022/6/17/12:32
              </span>
            </div>
          </Link>
          <Link href={"/classes/maths2"}>
            <div className="flex justify-evenly mx-4 justify-items-center py-2 hover:bg-sky-100 dark:hover:bg-blue-800 transition ease-in-out duration-300 rounded-xl">
              <span className="flex-1 text-center dark:text-slate-100">
                수학 II
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                3/4
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                2022/6/17/12:32
              </span>
            </div>
          </Link>
          <Link href={"/classes/computerscience"}>
            <div className="flex justify-evenly mx-4 justify-items-center py-2 hover:bg-sky-100 dark:hover:bg-blue-800 transition ease-in-out duration-300 rounded-xl">
              <span className="flex-1 text-center dark:text-slate-100">
                정보과학
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                3/4
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                2022/6/17/12:32
              </span>
            </div>
          </Link>
          <Link href={"/classes/art-1"}>
            <div className="flex justify-evenly mx-4 justify-items-center py-2 hover:bg-sky-100 dark:hover:bg-blue-800 transition ease-in-out duration-300 rounded-xl">
              <span className="flex-1 text-center dark:text-slate-100">
                미술 A
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                3/4
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                2022/6/17/12:32
              </span>
            </div>
          </Link>
          <Link href={"/classes/art-2"}>
            <div className="flex justify-evenly mx-4 justify-items-center py-2 hover:bg-sky-100 dark:hover:bg-blue-800 transition ease-in-out duration-300 rounded-xl">
              <span className="flex-1 text-center dark:text-slate-100">
                미술 B
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                3/4
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                2022/6/17/12:32
              </span>
            </div>
          </Link>
          <Link href={"/classes/PE-1"}>
            <div className="flex justify-evenly mx-4 justify-items-center py-2 hover:bg-sky-100 dark:hover:bg-blue-800 transition ease-in-out duration-300 rounded-xl">
              <span className="flex-1 text-center dark:text-slate-100">
                체육 A
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                3/4
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                2022/6/17/12:32
              </span>
            </div>
          </Link>
          <Link href={"/classes/PE-2"}>
            <div className="flex justify-evenly mx-4 justify-items-center py-2 hover:bg-sky-100 dark:hover:bg-blue-800 transition ease-in-out duration-300 rounded-xl">
              <span className="flex-1 text-center dark:text-slate-100">
                체육 B
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                3/4
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                2022/6/17/12:32
              </span>
            </div>
          </Link>
          <Link href={"/classes/korean-history"}>
            <div className="flex justify-evenly mx-4 justify-items-center py-2 hover:bg-sky-100 dark:hover:bg-blue-800 transition ease-in-out duration-300 rounded-xl">
              <span className="flex-1 text-center dark:text-slate-100">
                한국사
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                3/4
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                2022/6/17/12:32
              </span>
            </div>
          </Link>
          <Link href={"/classes/homeroom"}>
            <div className="flex justify-evenly mx-4 justify-items-center py-2 hover:bg-sky-100 dark:hover:bg-blue-800 transition ease-in-out duration-300 rounded-xl">
              <span className="flex-1 text-center dark:text-slate-100">
                2학년 5반
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                3/4
              </span>
              <span className="flex-1 text-center dark:text-slate-100">
                2022/6/17/12:32
              </span>
            </div>
          </Link>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
