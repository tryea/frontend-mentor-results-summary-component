import Image from "next/image";

export default function Home() {
  const summaryData = [
    {
      category: "Reaction",
      bgColor: "bg-red_white",
      color: "text-red",
      score: 80,
      icon: "icon-reaction.svg",
    },
    {
      category: "Memory",
      bgColor: "bg-yellow_white",
      color: "text-yellow",
      score: 92,
      icon: "icon-memory.svg",
    },
    {
      category: "Verbal",
      bgColor: "bg-green_white",
      color: "text-green",
      score: 61,
      icon: "icon-verbal.svg",
    },
    {
      category: "Visual",
      bgColor: "bg-blue_white",
      color: "text-blue",
      score: 61,
      icon: "icon-visual.svg",
    },
  ];

  return (
    <main className="flex flex-1 min-h-screen flex-col font-hanken-grotesk bg-very_light_blue sm:items-center sm:justify-center">
      <div className="flex flex-col bg-white sm:w-[736px] sm:flex-row sm:rounded-[32px]">
        <div className="flex w-full flex-col sm:w-[368px] sm:rounded-[32px] rounded-b-[32px] bg-gradient-1 pt-6 pb-10 pl-[58px] pr-[57px] sm:px-[54px] sm:pb-[46px] sm:pt-[38px] items-center gap-6 sm:justify-center">
          <p className="text-light_blue text-lg leading-[23px] font-bold sm:text-[24px] sm:leading-[31.3px]">
            Your Result
          </p>
          <div className="w-[140px] h-[140px] rounded-full flex flex-col items-center justify-center bg-gradient-to-b from-[#4D21C9] to-[#2521C900]">
            <p className="font-extrabold text-[56px] leading-[72px] text-white sm:text-[72px] sm:leading-none">
              76
            </p>
            <p className="text-light_blue font-bold text-base leading-[21px] opacity-[51.68%] ">
              of 100
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center sm:gap-[14px]">
            <p className="font-bold text-2xl leading-[31px] text-white sm:text-[32px] sm:leading-[41.7px]">
              Great
            </p>
            <p className="font-medium text-base leading-[21px] text-light_blue text-center sm:text-[18px] sm:leading-[23.5px]">
              Your performance exceed 65% of the people conducting the test
              here!
            </p>
          </div>
        </div>

        <div className="flex flex-col px-[30px] pt-6 pb-[30px] sm:shrink-0 sm:grow sm:pt-[38px] sm:pb-[46px] sm:px-[40px] sm:w-[368px]">
          <p className="text-lg font-bold leading-[23px] text-dark_navy ">
            Summary
          </p>

          <div className="flex flex-col gap-4 mt-6 sm:mt-7">
            {summaryData.map((summary) => {
              return (
                <div
                  key={summary.category}
                  className={`${summary.bgColor} ${summary.color} h-[56px] px-4 rounded-xl text-base leading-[21px] flex w-full flex-row items-center justify-between`}
                >
                  <div className="flex flex-row gap-3">
                    <div className="w-5 h-5 relative">
                      <Image
                        src={`/images/${summary.icon}`}
                        fill
                        alt={`icon-${summary.category}`}
                      />
                    </div>
                    <p className="font-medium">{summary.category}</p>
                  </div>
                  <div className="flex flex-row gap-2">
                    <p className="text-dark_navy font-bold">{summary.score}</p>
                    <p className="text-dark_navy/50 font-bold">/ 100</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            className="mt-6 sm:mt-[41px] w-full h-[56px] flex items-center justify-center bg-dark_navy text-white rounded-full hover:bg-transparent hover:bg-gradient-1"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
