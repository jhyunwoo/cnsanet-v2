import { useSession, signIn, signOut } from "next-auth/react";
export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="text-xl mx-auto dark:text-white">
          {session.user.name}
        </div>
        <button onClick={() => signOut()}>로그아웃</button>
      </>
    );
  }
  return (
    <>
      <div>로그인 되지 않음</div>
    </>
  );
}
