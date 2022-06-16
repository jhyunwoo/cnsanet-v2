import { useState } from "react";
import { Tab } from "@headlessui/react";
import BottomBar from "../components/BottomBar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    월요일: [
      {
        id: 1,
        title:
          "잡곡밥(수수) 홍합무국 매콤계란장조림 뮤즐리멸치볶음 도시락김/배추김치 양상추샐러드 시리얼&흰우유",
        date: "6월 13일",
        commentCount: 3,
      },
      {
        id: 2,
        title:
          "에비동 팽이버섯장국 소품떡꼬치 무채유자초절임 배추김치 양상추샐러드 후식음료",
        date: "6월 13일",
        commentCount: 3,
      },
      {
        id: 3,
        title:
          "잡곡밥(차조) 냉도토리묵국 로제닭볶음탕 호박새우살볶음 깍두기 양배추샐러드 수박",
        date: "6월 13일",
        commentCount: 3,
      },
    ],
    화요일: [
      {
        id: 1,
        title:
          "바닐라크로와상 야채스프 김떡만강정 베이컨스크램블에그 키위 양상추샐러드 시리얼&흰우유 추가밥&누룽지&도시락김",
        date: "6월 14일",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title:
          "잡곡밥(현미) 돈육고추장찌개 매쉬드포테이토치즈함박 사과오이초무침 배추김치 양상추샐러드 애플망고주스",
        date: "6월 14일",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 2,
        title: "김치제육덮밥 콩나물국 생선까스 청경채나물 깍두기 양배추샐러드",
        date: "6월 14일",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    잔반없는수요일: [
      {
        id: 1,
        title:
          "잡곡밥(혼합) 나가사키황태무국 갓김치돈사태찜 콩자반 깍두기/도시락김 양상추샐러드 시리얼&흰우유 누룽지",
        date: "6월 15일",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title:
          "목살필라프 어묵국 치킨퀘사디아 야채피클 배추김치 푸실리샐러드 사과",
        date: "6월 15일",
        commentCount: 1,
      },
      {
        id: 3,
        title:
          "잡곡밥(흑미) 조랭이떡국 오징어볶음 고구마그라탕 배추김치 꽃맛살샐러드",
        date: "6월 15일",
        commentCount: 1,
      },
    ],
    목요일: [
      {
        id: 1,
        title:
          "베이글&크림치즈,딸기잼 고구마스프 견과류바베큐바조림 어니언링&케찹 바나나 양상추샐러드 시리얼&흰우유 추가밥&누룽지&도시락김",
        date: "6월 16일",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title:
          "잡곡밥(기장) 우렁된장찌개 돈육두루치기 다시마,양배추숙쌈&쌈장배추김치 과일샐러드 쿠키",
        date: "6월 16일",
        commentCount: 1,
      },
      {
        id: 3,
        title:
          "잡곡밥(수수) 경상도식쇠고기무국 콘치즈떡갈비 메추리알감자조림 배추김치 양배추샐러드",
        date: "6월 16일",
        commentCount: 1,
      },
    ],
    금요일: [
      {
        id: 1,
        title:
          "잡곡밥(현미) 버섯찌개 폭찹 오징어실채볶음 배추김치 / 도시락김 양상추샐러드 시리얼&흰우유 누룽지",
        date: "6월 17일",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title:
          "돈까스마요덮밥 두부김치국 갈릭디핑타코야끼 오이지무침 깍두기 시저샐러드 파인애플과",
        date: "6월 17일",
        commentCount: 1,
      },
      {
        id: 3,
        title:
          "잡곡밥(혼합) 육개장칼국수 가자미구이 미역줄기볶음 배추김치 양배추샐러드 요거바",
        date: "6월 17일",
        commentCount: 1,
      },
    ],
    토요일: [
      {
        id: 1,
        title:
          "잡곡밥(율무) 쇠고기당면국 싸먹는오리햄 배추김치 도시락김 양상추샐러드 시리얼&흰우유 누룽지",
        date: "6월 18일",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title:
          "추가밥/짜장면 계란파국 찐만두 깐쇼새우 단무지 양상추샐러드 요구르트",
        date: "6월 18일",
        commentCount: 1,
      },
      {
        id: 3,
        title:
          "잡곡밥(기장) 감자짜글이찌개 고추잡채&꽃빵 숙주나물 깍두기 멕시칸샐러드",
        date: "6월 18일",
        commentCount: 1,
      },
    ],
    일요일: [
      {
        id: 1,
        title:
          "미니파운드케익 당근스프 브로콜리비엔나볶음 맛감자튀김 방울토마토 양상추샐러드 시리얼&흰우유 추가밥&누룽지&도시락김",
        date: "6월 18일",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title:
          "잡곡밥(수수) 미역오이냉국 매콤돼지갈비찜 상추유자청무침 배추김치 양상추샐러드 식혜",
        date: "6월 18일",
        commentCount: 1,
      },
      {
        id: 3,
        title:
          "게살볶음밥 유부장국 멘치까스 실곤약야채무침 배추김치 양배추샐러드",
        date: "6월 18일",
        commentCount: 1,
      },
    ],
  });

  return (
    <div>
      <div className="bg-white text-black"></div>
      <div className="w-full max-w-md px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
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
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 hover:bg-gray-100"
                    >
                      <h3 className="text-sm font-medium leading-5">
                        {post.title}
                      </h3>

                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                        <li>{post.date}</li>
                        <li>&middot;</li>
                        <li>❤️{post.commentCount}</li>
                        {/* <li>{post.shareCount} shares</li> */}
                      </ul>

                      <a
                        href="#"
                        className={classNames(
                          "absolute inset-0 rounded-md",
                          "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
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
  );
}
