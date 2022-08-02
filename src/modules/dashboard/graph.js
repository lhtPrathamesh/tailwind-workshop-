import React from "react";
import { PieChart, Pie, Cell } from "recharts";

function Graph() {
  const data = [
    { name: "Group A", value: 300 },
    { name: "Group B", value: 200 },
    { name: "Group C", value: 500 },
  ];
  const COLORS = ["#949CAE", "#525272", "#395FF1"];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="mr-[26px] mb-10 lg:mb-0 w-full lg:w-[50%]">
      <div className="mb-10 font-openSansSemiBold text-ft13 text-portalColor5 font-semibold">
        Splits per contributors
      </div>
      <div className="w-full h-[401px] bg-white rounded-[10px] shadow-md px-4 xl:px-10 2xl:px-[79px] py-[90px] flex mobile:items-center justify-center flex-col md:flex-row">
        <div className="mobile:mr-0 mr-[49px] lg:mr-7 xl:mr-[49px] mobile:mb-6 mobile:w-full mobile:flex mobile:justify-center">
          <PieChart
            width={260}
            height={290}
            className=" mt-[-10px] md:mt-[-35px]"
          >
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="flex md:flex-col justify-center">
          <div className="mb-5 mobile:mr-6">
            <div className="flex items-center mb-[10px]">
              <div className="w-[10px] h-[10px] rounded-full bg-[#395FF1] mr-[5px]"></div>
              <span className="font-openSansRegular text-ft15 text-portalColor4">
                Organizer
              </span>
            </div>
            <span className="font-openSansSemiBold text-ft5 text-portalColor5 font-semibold">
              $200,321
            </span>
          </div>
          <div className="mb-5 mobile:mr-6">
            <div className="flex items-center mb-[10px]">
              <div className="w-[10px] h-[10px] rounded-full bg-[#949CAE] mr-[5px]"></div>
              <span className="font-openSansRegular text-ft15 text-portalColor4">
                Artist
              </span>
            </div>
            <span className="font-openSansSemiBold text-ft5 text-portalColor5 font-semibold">
              $120,192
            </span>
          </div>
          <div className="">
            <div className="flex items-center mb-[10px]">
              <div className="w-[10px] h-[10px] rounded-full bg-[#525272] mr-[5px]"></div>
              <span className="font-openSansRegular text-ft15 text-portalColor4">
                Promoter
              </span>
            </div>
            <span className="font-openSansSemiBold text-ft5 text-portalColor5 font-semibold">
              $80,092
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graph;
