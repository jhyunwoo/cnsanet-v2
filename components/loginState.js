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
      </>
    );
  }
  return (
    <>
      <Link>
        <div>로그인이 필요합니다.</div>
      </Link>
    </>
  );
}
