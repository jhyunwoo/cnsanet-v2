import BottomBar from "../components/BottomBar";
import ProfileBar from "../components/ProfileBar";

export default function BeforeDeveloped() {
  return (
    <div className="h-screen">
      <BottomBar />
      <ProfileBar />
      <div className="text-center text-4xl my-96 dark:text-white">
        🚧개발 예정🚧
      </div>
    </div>
  );
}
