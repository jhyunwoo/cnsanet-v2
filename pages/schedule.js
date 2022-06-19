import { Tab } from "@headlessui/react";
import BottomBar from "../components/BottomBar";
import ProfileBar from "../components/ProfileBar";
import { useSession, getSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Example() {
  const p1 = [
    {
      class: "화학",
      room: "S205",
      time: "08:40~09:30",
      teacher: "손유진",
      pac: "1",
    },
    {
      class: "미술B",
      room: "N505",
      time: "08:40~09:30",
      teacher: "장찬식",
      pac: "1",
    },
    {
      class: "화학",
      room: "S205",
      time: "08:40~09:30",
      teacher: "손유진",
      pac: "1",
    },
    {
      class: "화학",
      room: "S205",
      time: "08:40~09:30",
      teacher: "손유진",
      pac: "1",
    },
    {
      class: "화학",
      room: "S205",
      time: "08:40~09:30",
      teacher: "손유진",
      pac: "1",
    },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
  ];
  const p2 = [
    {
      class: "수학 I",
      room: "S302",
      time: "09:40~10:30",
      teacher: "김정호",
      pac: "5",
    },
    {
      class: "수학 I",
      room: "S302",
      time: "09:40~10:30",
      teacher: "김정호",
      pac: "5",
    },
    {
      class: "수학 I",
      room: "S302",
      time: "09:40~10:30",
      teacher: "김정호",
      pac: "5",
    },
    {
      class: "수학 I",
      room: "S302",
      time: "09:40~10:30",
      teacher: "김정호",
      pac: "5",
    },
    {
      class: "운동과 건강A",
      room: "충무관 A",
      time: "09:40~10:30",
      teacher: "김진호",
      pac: "5",
    },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
  ];
  const p3 = [
    {
      class: "영어 I",
      room: "A401",
      time: "10:40~11:30",
      teacher: "이상미",
      pac: "7",
    },
    {
      class: "영어 I",
      room: "A401",
      time: "10:40~11:30",
      teacher: "Eric Andrew Crupm",
      pac: "7",
    },
    {
      class: "운동과 건강B",
      room: "충무관B",
      time: "10:40~11:30",
      teacher: "최정훈",
      pac: "7",
    },
    {
      class: "영어 I",
      room: "A401",
      time: "10:40~11:30",
      teacher: "이상미",
      pac: "7",
    },
    {
      class: "영어 I",
      room: "A401",
      time: "10:40~11:30",
      teacher: "이상미",
      pac: "7",
    },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
  ];
  const p4 = [
    {
      class: "언어와 매체",
      room: "A308",
      time: "11:40~12:30",
      teacher: "김수지",
      pac: "9",
    },
    {
      class: "언어와 매체",
      room: "A308",
      time: "11:40~12:30",
      teacher: "김수지",
      pac: "9",
    },
    {
      class: "언어와 매체",
      room: "A308",
      time: "11:40~12:30",
      teacher: "김수지",
      pac: "9",
    },
    {
      class: "언어와 매체",
      room: "A308",
      time: "11:40~12:30",
      teacher: "김수지",
      pac: "9",
    },
    {
      class: "철학",
      room: "A406",
      time: "11:40~12:30",
      teacher: "배지한",
      pac: "9",
    },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
  ];
  const p5 = [
    {
      class: "정보과학",
      room: "C406",
      time: "13:30~14:20",
      teacher: "이정석",
      pac: "2",
    },
    {
      class: "정보과학",
      room: "C406",
      time: "13:30~14:20",
      teacher: "이정석",
      pac: "2",
    },
    {
      class: "정보과학",
      room: "C406",
      time: "13:30~14:20",
      teacher: "이정석",
      pac: "2",
    },
    {
      class: "정보과학",
      room: "C406",
      time: "13:30~14:20",
      teacher: "이정석",
      pac: "2",
    },
    {
      class: "미술A",
      room: "N504",
      time: "13:30~14:20",
      teacher: "전호영",
      pac: "13",
    },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
  ];
  const p6 = [
    {
      class: "수학 II",
      room: "S409",
      time: "14:30~15:20",
      teacher: "이진필",
      pac: "9",
    },
    {
      class: "수학 II",
      room: "S409",
      time: "14:30~15:20",
      teacher: "이진필",
      pac: "9",
    },
    {
      class: "수학 II",
      room: "S409",
      time: "14:30~15:20",
      teacher: "이진필",
      pac: "9",
    },
    {
      class: "수학 II",
      room: "S409",
      time: "14:30~15:20",
      teacher: "이진필",
      pac: "9",
    },
    {
      class: "한국사",
      room: "A406",
      time: "14:30~15:20",
      teacher: "이강희",
      pac: "16",
    },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
  ];
  const p7 = [
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    {
      class: "Beatus 동아리",
      room: "S203",
      time: "15:30~16:20",
      teacher: "김시경",
      pac: "",
    },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
  ];
  const et = [
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    {
      class: "펜싱",
      room: "충무관 1층",
      time: "16:50~18:10",
      teacher: "",
      pac: "",
    },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
  ];
  const ep1 = [
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
  ];
  const ep2 = [
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
  ];
  const extraStudy = [
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
    { class: "", room: "", time: "16:50~18:10", teacher: "", pac: "" },
  ];
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
    <div>
      <ProfileBar />
      <BottomBar />
      <div className="flex justify-center flex-col">
        <div className="mx-auto text-2xl m-4 font-bold dark:text-white">
          {year}년 {month}월 {date}일 {day}요일
        </div>
        <table className="border-collapse border border-slate-400 text-center bg-blue-100 dark:bg-blue-900 dark:text-white m-2">
          <thead>
            <tr>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 font-bold">
                시간
              </td>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 font-bold">
                월
              </td>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 font-bold">
                화
              </td>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 font-bold">
                수
              </td>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 font-bold">
                목
              </td>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 font-bold">
                금
              </td>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 font-bold">
                토
              </td>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 font-bold">
                일
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 ">
                1교시
              </td>
              {p1.map((cla, claIdx) => (
                <td
                  className="border border-slate-300 w-24 h-20 dark:border-slate-800 "
                  key={claIdx}
                >
                  <div>{cla.class}</div>
                  <div>{cla.room}</div>
                  <div>{cla.teacher}</div>
                  <div>{cla.pac}</div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 ">
                2교시
              </td>
              {p2.map((cla, claIdx) => (
                <td
                  className="border border-slate-300 w-24 h-20 dark:border-slate-800 "
                  key={claIdx}
                >
                  <div>{cla.class}</div>
                  <div>{cla.room}</div>
                  <div>{cla.teacher}</div>
                  <div>{cla.pac}</div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 ">
                3교시
              </td>
              {p3.map((cla, claIdx) => (
                <td
                  className="border border-slate-300 w-24 h-20 dark:border-slate-800 "
                  key={claIdx}
                >
                  <div>{cla.class}</div>
                  <div>{cla.room}</div>
                  <div>{cla.teacher}</div>
                  <div>{cla.pac}</div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 ">
                4교시
              </td>
              {p4.map((cla, claIdx) => (
                <td
                  className="border border-slate-300 w-24 h-20 dark:border-slate-800 "
                  key={claIdx}
                >
                  <div>{cla.class}</div>
                  <div>{cla.room}</div>
                  <div>{cla.teacher}</div>
                  <div>{cla.pac}</div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 ">
                5교시
              </td>
              {p5.map((cla, claIdx) => (
                <td
                  className="border border-slate-300 w-24 h-20 dark:border-slate-800 "
                  key={claIdx}
                >
                  <div>{cla.class}</div>
                  <div>{cla.room}</div>
                  <div>{cla.teacher}</div>
                  <div>{cla.pac}</div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 ">
                6교시
              </td>
              {p6.map((cla, claIdx) => (
                <td
                  className="border border-slate-300 w-24 h-20 dark:border-slate-800 "
                  key={claIdx}
                >
                  <div>{cla.class}</div>
                  <div>{cla.room}</div>
                  <div>{cla.teacher}</div>
                  <div>{cla.pac}</div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 ">
                7교시
              </td>
              {p7.map((cla, claIdx) => (
                <td
                  className="border border-slate-300 w-24 h-20 dark:border-slate-800 "
                  key={claIdx}
                >
                  <div>{cla.class}</div>
                  <div>{cla.room}</div>
                  <div>{cla.teacher}</div>
                  <div>{cla.pac}</div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 ">
                ET
              </td>
              {et.map((cla, claIdx) => (
                <td
                  className="border border-slate-300 w-24 h-20 dark:border-slate-800 "
                  key={claIdx}
                >
                  <div>{cla.class}</div>
                  <div>{cla.room}</div>
                  <div>{cla.teacher}</div>
                  <div>{cla.pac}</div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 ">
                EP1
              </td>
              {ep1.map((cla, claIdx) => (
                <td
                  className="border border-slate-300 w-24 h-20 dark:border-slate-800 "
                  key={claIdx}
                >
                  <div>{cla.class}</div>
                  <div>{cla.room}</div>
                  <div>{cla.teacher}</div>
                  <div>{cla.pac}</div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 ">
                EP2
              </td>
              {ep2.map((cla, claIdx) => (
                <td
                  className="border border-slate-300 w-24 h-20 dark:border-slate-800 "
                  key={claIdx}
                >
                  <div>{cla.class}</div>
                  <div>{cla.room}</div>
                  <div>{cla.teacher}</div>
                  <div>{cla.pac}</div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-slate-300 w-24 h-20 dark:border-slate-800 ">
                연장 면학
              </td>
              {extraStudy.map((cla, claIdx) => (
                <td
                  className="border border-slate-300 w-24 h-20 dark:border-slate-800 "
                  key={claIdx}
                >
                  <div>{cla.class}</div>
                  <div>{cla.room}</div>
                  <div>{cla.teacher}</div>
                  <div>{cla.pac}</div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
