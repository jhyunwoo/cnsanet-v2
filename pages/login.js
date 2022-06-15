export default function Home() {
  return (
    <div className="bg-slate-100">
      <div className="bg-blue-500 text-white m-4 p-4 pl-6 rounded-xl">
        <div className="text-2xl font-bold mb-4">충남삼성고등학교</div>
        <div className="text-lg my-2">STUDENT WEB</div>
        <div>아이디</div>
        <form>
          <input type="text" placeholder="아이디를 입력해주세요."></input>
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
