export default function Home() {
    return (
      <div className="bg-slate-100 h-screen flex flex-col">
        <div className="bg-white rounded-xl m-2 p-2 flex-1">
          <div className="text-center text-xl font-bold">교과 과제</div>
          <div className="flex flex-row-reverse">
            <div className="mx-2">7/32</div>
            <div className="mx-2">남은 과제</div>
          </div>
          <div>
            <div className="font-bold my-2">오늘 마감</div>
            <div className="flex flex-row">
              <div className="flex-auto">
                <div className="flex flex-col">
                  <span>수학 I</span>
                  <span>화학 I</span>
                  <span>언어와 매체</span>
                </div>
              </div>
              <div className="flex-auto">
                <div className="flex flex-col">
                  <span>마플 교과서</span>
                  <span>3단원 학습지</span>
                  <span>기출의 미래</span>
                </div>
              </div>
              <div className="flex-auto">
                <div className="flex flex-col">
                  <span>2022년 6월 16일</span>
                  <span>2022년 6월 16일</span>
                  <span>2022년 6월 16일</span>
                </div>
              </div>
            </div>
            <div className="border-b-2 border-dashed mt-2"></div>
            <div className="font-bold my-2">내일 마감</div>
            <div className="flex flex-row">
              <div className="flex-auto">
                <div className="flex flex-col">
                  <span>영어 I</span>
                </div>
              </div>
              <div className="flex-auto">
                <div className="flex flex-col">
                  <span>원어민 발표 수행</span>
                </div>
              </div>
              <div className="flex-auto">
                <div className="flex flex-col">
                  <span>2022년 6월 17일</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl m-2 p-2">
          <div className="text-center text-xl font-bold">학생 공지사항</div>
        </div>
      </div>
    );
  }
  