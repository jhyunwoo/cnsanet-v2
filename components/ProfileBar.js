import Link from "next/link";

export default function ProfileBar() {
  return (
    <div>
      <Link href={"/beforeDeveloped"}>
        <div className="flex flex-row">
          <div className="w-10 h-10 bg-slate-400 dark:bg-slate-800 m-4 rounded-full flex-none "></div>
          <div className="m-2 my-4 flex justify-between flex-1">
            <div className="flex-1 text-lg font-bold my-auto dark:text-white">
              210421 전현우
            </div>
            <div className="mx-4 text-sm dark:text-white">
              <div>칭찬쪽지: 4개</div>
              <div>관찰쪽지: 0개</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
