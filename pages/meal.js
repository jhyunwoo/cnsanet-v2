import { Tab } from "@headlessui/react";
import BottomBar from "../components/BottomBar";
import ProfileBar from "../components/ProfileBar";
import { useSession, getSession } from "next-auth/react";
import { useState, useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Meal() {
  let [categories] = useState({
    월요일: [
      {
        id: 1,
        meal1: "잡곡밥(수수)",
        meal2: "홍합무국",
        meal3: "매콤계란장조림",
        meal4: "뮤즐리멸치볶음",
        meal5: "도시락김/배추김치",
        meal6: "양상추샐러드",
        meal7: "시리얼&흰우유",
        kcal: 949.1,
        commentCount: 34,
        meal: "조식",
      },
      {
        id: 2,
        meal1: "에비동",
        meal2: "팽이버섯장국",
        meal3: "소품떡꼬치",
        meal4: "무채유자초절임",
        meal5: "배추김치",
        meal6: "양상추샐러드",
        meal7: "후식음료",
        kcal: 1083.3,
        commentCount: 501,
        meal: "중식",
      },
      {
        id: 3,
        meal1: "잡곡밥(차조)",
        meal2: "냉도토리묵국",
        meal3: "로제닭볶음탕",
        meal4: "호박새우살볶음",
        meal5: "깍두기",
        meal6: "양배추샐러드",
        meal7: "수박",
        kcal: 962.8,
        commentCount: 403,
        meal: "석식",
      },
    ],
    화요일: [
      {
        id: 1,
        meal1: "바닐라크로와상",
        meal2: "야채스프",
        meal3: "김떡만강정",
        meal4: "베이컨스크램블에그",
        meal5: "키위",
        meal6: "양상추샐러드",
        meal7: "시리얼&흰우유",
        meal8: "추가밥&누룽지&도시락김",
        kcal: 1439.7,
        commentCount: 237,
        meal: "조식",
      },
      {
        id: 2,
        meal1: "잡곡밥(현미)",
        meal2: "매쉬드포테이토치즈함박",
        meal3: "사과오이초무침",
        meal4: "돈육고추장찌개",
        meal5: "배추김치",
        meal6: "양상추샐러드",
        meal7: "애플망고주스",
        kcal: 635.5,
        commentCount: 786,
        meal: "중식",
      },
      {
        id: 2,
        meal1: "김치제육덮밥",
        meal2: "콩나물국",
        meal3: "생선까스",
        meal4: "청경채나물",
        meal5: "깍두기",
        meal6: "양배추샐러드",
        meal7: "",
        kcal: 989.9,
        commentCount: 463,
        meal: "석식",
      },
    ],
    수요일: [
      {
        id: 1,
        meal1: "잡곡밥(혼합)",
        meal2: "나가사키황태무국",
        meal3: "갓김치돈사태찜",
        meal4: "콩자반",
        meal5: "깍두기/도시락김 ",
        meal6: "양상추샐러드",
        meal7: "시리얼&흰우유",
        meal8: "누룽지",
        kcal: 920.7,
        commentCount: 89,
        meal: "조식",
      },
      {
        id: 2,
        meal1: "목살필라프",
        meal2: "어묵국",
        meal3: "치킨퀘사디아",
        meal4: "야채피클",
        meal5: "배추김치",
        meal6: "푸실리샐러드",
        meal7: "사과",
        kcal: 963.0,
        commentCount: 231,
        meal: "중식",
      },
      {
        id: 3,
        meal1: "잡곡밥(흑미)",
        meal2: "조랭이떡국",
        meal3: "오징어볶음",
        meal4: "고구마그라탕",
        meal5: "배추김치",
        meal6: "꽃맛살샐러드",
        meal7: "",
        kcal: 1029.3,
        commentCount: 91,
        meal: "석식",
      },
    ],
    목요일: [
      {
        id: 1,
        meal1: "베이글&크림치즈,딸기잼",
        meal2: "고구마스프",
        meal3: "견과류바베큐바조림",
        meal4: "어니언링&케찹",
        meal5: "바나나",
        meal6: "양상추샐러드",
        meal7: "시리얼&흰우유",
        meal8: "추가밥&누룽지&도시락김",
        kcal: 1366.1,
        commentCount: 210,
        meal: "조식",
      },
      {
        id: 2,
        meal1: "잡곡밥(기장)",
        meal2: "우렁된장찌개",
        meal3: "돈육두루치기",
        meal4: "다시마,양배추숙쌈&쌈장배추김치",
        meal5: "과일샐러드",
        meal6: "쿠키",
        meal7: "",
        kcal: 853.1,
        commentCount: 198,
        meal: "중식",
      },
      {
        id: 3,
        meal1: "잡곡밥(수수)",
        meal2: "경상도식쇠고기무국",
        meal3: "콘치즈떡갈비",
        meal4: "메추리알감자조림",
        meal5: "배추김치",
        meal6: "양배추샐러드",
        meal7: "",
        kcal: 894.2,
        commentCount: 698,
        meal: "석식",
      },
    ],
    금요일: [
      {
        id: 1,
        meal1: "잡곡밥(현미)",
        meal2: "버섯찌개",
        meal3: "폭찹",
        meal4: "오징어실채볶음",
        meal5: "배추김치 / 도시락김",
        meal6: "양상추샐러드",
        meal7: "시리얼&흰우유",
        meal8: "누룽지",
        kcal: 981.9,
        commentCount: 152,
        meal: "조식",
      },
      {
        id: 2,
        meal1: "돈까스마요덮밥",
        meal2: "두부김치국",
        meal3: "갈릭디핑타코야끼",
        meal4: "오이지무침",
        meal5: "깍두기",
        meal6: "시저샐러드",
        meal7: "파인애플과",
        kcal: 1157.2,
        commentCount: 768,
        meal: "중식",
      },
      {
        id: 3,
        meal1: "잡곡밥(혼합)",
        meal2: "육개장칼국수",
        meal3: "가자미구이",
        meal4: "미역줄기볶음",
        meal5: "배추김치",
        meal6: "양배추샐러드",
        meal7: "요거바",
        kcal: 1545.0,
        commentCount: 102,
        meal: "석식",
      },
    ],
    토요일: [
      {
        id: 1,
        meal1: "잡곡밥(율무)",
        meal2: "쇠고기당면국",
        meal3: "싸먹는오리햄",
        meal4: "배추김치",
        meal5: "도시락김",
        meal6: "양상추샐러드",
        meal7: "시리얼&흰우유",
        meal8: "누룽지",
        kcal: 860.1,
        commentCount: 104,
        meal: "조식",
      },
      {
        id: 2,
        meal1: "추가밥/짜장면",
        meal2: "계란파국",
        meal3: "찐만두",
        meal4: "깐쇼새우",
        meal5: "단무지",
        meal6: "양상추샐러드",
        meal7: "요구르트",
        kcal: 1581.8,
        commentCount: 597,
        meal: "중식",
      },
      {
        id: 3,
        meal1: "잡곡밥(기장)",
        meal2: "감자짜글이찌개",
        meal3: "고추잡채&꽃빵",
        meal4: "숙주나물",
        meal5: "깍두기",
        meal6: "멕시칸샐러드",
        meal7: "",
        kcal: 909.9,
        commentCount: 463,
        meal: "석식",
      },
    ],
    일요일: [
      {
        id: 1,
        meal1: "미니파운드케익",
        meal2: "당근스프",
        meal3: "브로콜리비엔나볶음",
        meal4: "맛감자튀김",
        meal5: "방울토마토",
        meal6: "양상추샐러드",
        meal7: "시리얼&흰우유",
        meal8: "추가밥&누룽지&도시락김",
        kcal: 1036.8,
        commentCount: 214,
        meal: "조식",
      },
      {
        id: 2,
        meal1: "잡곡밥(수수)",
        meal2: "미역오이냉국",
        meal3: "매콤돼지갈비찜",
        meal4: "상추유자청무침",
        meal5: "배추김치",
        meal6: "양상추샐러드",
        meal7: "식혜",
        kcal: 844.1,
        commentCount: 452,
        meal: "중식",
      },
      {
        id: 3,
        meal1: "게살볶음밥",
        meal2: "유부장국",
        meal3: "멘치까스",
        meal4: "실곤약야채무침",
        meal5: "배추김치",
        meal6: "양배추샐러드",
        meal7: "",
        kcal: 839.4,
        commentCount: 168,
        meal: "석식",
      },
    ],
  });

  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  let day = week[today.getDay()]; // 요일
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
    <div className="">
      <ProfileBar />
      <div className="flex justify-center flex-col">
        <div className="text-center text-3xl my-4 mx-auto rounded-2xl p-2 px-4 text-bold text-black dark:text-white">
          {year}년 {month}월 {date}일 {day}요일
        </div>
        <div className="w-full max-w-md px-2 py-0 sm:px-0 mx-auto">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 dark:bg-blue-100/20 p-1 mx-2">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-base font-medium leading-5 text-black dark:text-white",
                      "ring-white dark:ring-black ring-opacity-60 ring-offset-2 ring-offset-blue-400 dark:ring-offset-blue-600 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white dark:bg-black shadow text-blue-600 dark:text-blue-300"
                        : "text-black dark:text-white hover:bg-white/[0.12] dark:hover:bg-black/[0.12] hover:text-gray-700 dark:hover:text-gray-300"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white dark:bg-black p-3",
                    "ring-white dark:ring-black ring-opacity-60 ring-offset-2 ring-offset-blue-400 dark:ring-offset-blue-600 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-800"
                      >
                        <h3 className="font-bold mb-1 dark:text-white">
                          {post.meal}
                        </h3>
                        <div className="flex flex-wrap flex-col">
                          <h3 className="text-sm font-semibold leading-5 bg-sky-600 dark:bg-sky-800 text-white font my-1 p-1 rounded-lg">
                            {post.meal1}
                          </h3>
                          <h3 className="text-sm font-semibold leading-5 bg-sky-600 dark:bg-sky-800 text-white font my-1 p-1 rounded-lg">
                            {post.meal2}
                          </h3>
                          <h3 className="text-sm font-semibold leading-5 bg-sky-600 dark:bg-sky-800 text-white font my-1 p-1 rounded-lg">
                            {post.meal3}
                          </h3>
                          <h3 className="text-sm font-semibold leading-5 bg-sky-600 dark:bg-sky-800 text-white font my-1 p-1 rounded-lg">
                            {post.meal4}
                          </h3>
                          <h3 className="text-sm font-semibold leading-5 bg-sky-600 dark:bg-sky-800 text-white font my-1 p-1 rounded-lg">
                            {post.meal5}
                          </h3>
                          <h3 className="text-sm font-semibold leading-5 bg-sky-600 dark:bg-sky-800 text-white font my-1 p-1 rounded-lg">
                            {post.meal6}
                          </h3>
                          <h3 className="text-sm font-semibold leading-5 bg-sky-600 dark:bg-sky-800 text-white font my-1 p-1 rounded-lg">
                            {post.meal7}
                          </h3>
                          <h3 className="text-sm font-semibold leading-5 bg-sky-600 dark:bg-sky-800 text-white font my-1 p-1 rounded-lg">
                            {post.meal8}
                          </h3>
                        </div>

                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500 dark:text-gray-200">
                          <li>❤️{post.commentCount} | </li>
                          <li>{post.kcal}𝒌𝒄𝒂𝒍</li>
                        </ul>

                        <a
                          href="#"
                          className={classNames(
                            "absolute inset-0 rounded-md",
                            "ring-blue-400 dark:ring-blue-700 focus:z-10 focus:outline-none focus:ring-2"
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
          <BottomBar />
        </div>
      </div>
    </div>
  );
}
