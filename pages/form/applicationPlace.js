import BottomBar from "../../components/BottomBar";
import ProfileBar from "../../components/ProfileBar";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ApplicationPlace() {
  let dayFirst = new Date();
  let monthFirst = dayFirst.getMonth() + 1; // 월
  let dateFirst = dayFirst.getDate(); // 날짜

  let daySecond = new Date(dayFirst.setDate(dayFirst.getDate() + 1));
  let monthSecond = daySecond.getMonth() + 1; // 월
  let dateSecond = daySecond.getDate(); // 날짜

  let dayThird = new Date(dayFirst.setDate(dayFirst.getDate() + 1));
  let monthThird = dayThird.getMonth() + 1; // 월
  let dateThird = dayThird.getDate(); // 날짜

  let dayForth = new Date(dayFirst.setDate(dayFirst.getDate() + 1));
  let monthForth = dayForth.getMonth() + 1; // 월
  let dateForth = dayForth.getDate(); // 날짜

  let dayFifth = new Date(dayFirst.setDate(dayFirst.getDate() + 1));
  let monthFifth = dayFifth.getMonth() + 1; // 월
  let dateFifth = dayFifth.getDate(); // 날짜

  let daySixth = new Date(dayFirst.setDate(dayFirst.getDate() + 1));
  let monthSixth = daySixth.getMonth() + 1; // 월
  let dateSixth = daySixth.getDate(); // 날짜

  let daySeventh = new Date(dayFirst.setDate(dayFirst.getDate() + 1));
  let monthSeventh = daySeventh.getMonth() + 1; // 월
  let dateSeventh = daySeventh.getDate(); // 날짜

  const purpose = [
    { pur: "개인용도" },
    { pur: "동아리 활동" },
    { pur: "다산관" },
    { pur: "창의관" },
  ];

  const appDate = [
    {
      date: `${monthFirst}월 ${dateFirst}일`,
    },
    {
      date: `${monthSecond}월 ${dateSecond}일`,
    },
    {
      date: `${monthThird}월 ${dateThird}일`,
    },
    {
      date: `${monthForth}월 ${dateForth}일`,
    },
    {
      date: `${monthFifth}월 ${dateFifth}일`,
    },
    {
      date: `${monthSixth}월 ${dateSixth}일`,
    },
    {
      date: `${monthSeventh}월 ${dateSeventh}일`,
    },
  ];
  const appTime = [
    { time: "MP1" },
    { time: "MP2" },
    { time: "DP1" },
    { time: "DP2" },
    { time: "EP1" },
    { time: "EP2" },
  ];

  return (
    <div className="">
      <ProfileBar />
      <BottomBar />
      <div className="flex justify-center flex-col">
        <div className=" text-2xl font-bold flex-1 mx-auto dark:text-white">
          장소 사용 신청
        </div>
        <div className="flex-1 m-4 bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
          <div className="text-xl font-bold dark:text-slate-100">
            용도 및 일자 선택
          </div>
          <div className="px-2 py-4 sm:px-0">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-white dark:bg-black p-1">
                {purpose.map((prupose, purposeIdx) => (
                  <Tab
                    key={purposeIdx}
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition",
                        "ring-white dark:ring-slate-900 ring-opacity-60 ring-offset-2 ring-offset-indigo-400 dark:ring-offset-indigo-700 focus:outline-none focus:ring-2",
                        selected
                          ? "bg-indigo-500 dark:bg-indigo-800  text-white shadow"
                          : " hover:bg-indigo-300 dark:hover:bg-indigo-800 hover:text-white  text-indigo-700 dark:text-indigo-300"
                      )
                    }
                  >
                    {prupose.pur}
                  </Tab>
                ))}
              </Tab.List>
            </Tab.Group>
          </div>
          <div className="px-2 py-4 sm:px-0">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-white dark:bg-black p-1">
                {appDate.map((date, dateIdx) => (
                  <Tab
                    key={dateIdx}
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition",
                        "ring-white dark:ring-slate-900 ring-opacity-60 ring-offset-2 ring-offset-indigo-400 dark:ring-offset-indigo-700 focus:outline-none focus:ring-2",
                        selected
                          ? "bg-indigo-500 dark:bg-indigo-800  text-white shadow"
                          : " hover:bg-indigo-300 dark:hover:bg-indigo-800 hover:text-white  text-indigo-700 dark:text-indigo-300"
                      )
                    }
                  >
                    {date.date}
                  </Tab>
                ))}
              </Tab.List>
            </Tab.Group>
          </div>
          <div className="px-2 py-4 sm:px-0">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-white dark:bg-black p-1">
                {appTime.map((appTime, appTimeIdx) => (
                  <Tab
                    key={appTimeIdx}
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition",
                        "ring-white dark:ring-slate-900 ring-opacity-60 ring-offset-2 ring-offset-indigo-400 dark:ring-offset-indigo-700 focus:outline-none focus:ring-2",
                        selected
                          ? "bg-indigo-500 dark:bg-indigo-800  text-white shadow"
                          : " hover:bg-indigo-300 dark:hover:bg-indigo-800 hover:text-white  text-indigo-700 dark:text-indigo-300"
                      )
                    }
                  >
                    {appTime.time}
                  </Tab>
                ))}
              </Tab.List>
            </Tab.Group>
          </div>
        </div>
        <div className="text-center text-4xl my-96 dark:text-white">
          🚧개발 예정🚧
        </div>
      </div>
    </div>
  );
}
