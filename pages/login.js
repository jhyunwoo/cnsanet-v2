import BottomBar from "../components/BottomBar"

export default function Home() {
  return (
    <div>
      <div>
        <div className="m-3 p-3 bg-blue-500 rounded-xl shadow-xl shadow-blue-500 text-white text-center font-bold">
          충남삼성고등학교
        </div>
        <img src="public/school_logo.gif" alt="logo" />
        <div>STUDENT WEB</div>
        <div>아이디</div>
        <form>
          <input></input>
        </form>
        <div>비밀번호</div>
        <form>
          <input></input>
        </form>

        <div>로그인</div>
        <div>아이디 저장</div>
        <div>비밀번호 찾기</div>
      </div>
    </div>
  );
}
