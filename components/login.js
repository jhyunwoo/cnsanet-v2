import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
export default function Component(useBtn) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="text-xl mx-auto dark:text-white">
          {session.user.name}
        </div>
        <button
          onClick={() => signOut()}
          className={`${useBtn.useBtn} bg-indigo-600 dark:bg-indigo-500 text-white dark:text-indigo-100 text-center mx-auto p-2 px-6 rounded-xl mt-16 text-2xl ease-in-out duration-300 delay-150 font-bold shadow-md hover:bg-indigo-500 dark:hover:bg-indigo-400 transition hover:-translate-y-1`}
        >
          로그아웃
        </button>
        <Link href={"/home"}>
          <button
            className={` ${useBtn.useBtn} bg-indigo-600 dark:bg-indigo-500 text-white dark:text-indigo-100 text-center mx-auto p-2 px-6 rounded-xl m-2 text-2xl ease-in-out duration-300 delay-150 font-bold shadow-md hover:bg-indigo-500 dark:hover:bg-indigo-400 transition hover:-translate-y-1`}
          >
            홈페이지로 이동
          </button>
        </Link>
      </>
    );
  }
  return (
    <>
      <button
        onClick={() => signIn()}
        className={`${useBtn.useBtn} bg-indigo-600 dark:bg-indigo-500 text-white dark:text-indigo-100 text-center mx-auto p-2 px-6 rounded-xl mt-16 text-2xl ease-in-out duration-300 delay-150 font-bold shadow-md hover:bg-indigo-500 dark:hover:bg-indigo-400 transition hover:-translate-y-1`}
      >
        로그인
      </button>
    </>
  );
}
