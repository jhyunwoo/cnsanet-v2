import BottomBar from "../../components/BottomBar";
import ProfileBar from "../../components/ProfileBar";
import { useSession, getSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Chat() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [content, setContent] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);
  if (typeof window !== "undefined" && loading) return null;
  if (!session) {
    return <div>Access Denied</div>;
  }
  return (
    <div>
      <BottomBar />
      <ProfileBar />
      <div className="text-center text-4xl my-96 dark:text-slate-100">
        🚧개발 예정🚧
      </div>
    </div>
  );
}
