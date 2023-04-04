import { ResponsiveLine, Line } from "@nivo/line";

export const options = {
  title: "",
  curveType: "function",
  legend: { position: "none" },
};

const TrendChart = () => {
  const data = [
    {
      id: "Today",
      color: "hsl(185, 70%, 50%)",
      data: [
        {
          x: 0,
          y: 60,
        },
        {
          x: 1,
          y: 50,
        },
        {
          x: 2,
          y: 40,
        },
        {
          x: 3,
          y: 10,
        },
        {
          x: 4,
          y: 30,
        },
        {
          x: 5,
          y: 20,
        },
        {
          x: 6,
          y: 23,
        },
        {
          x: 7,
          y: 7,
        },
        {
          x: 8,
          y: 20,
        },
        {
          x: 9,
          y: 33,
        },
        {
          x: 10,
          y: 50,
        },
        {
          x: 11,
          y: 20,
        },
        {
          x: 12,
          y: 29,
        },
        {
          x: 13,
          y: 40,
        },
        {
          x: 14,
          y: 50,
        },
        {
          x: 15,
          y: 60,
        },
        {
          x: 16,
          y: 55,
        },
        {
          x: 17,
          y: 54,
        },
        {
          x: 18,
          y: 56,
        },
        {
          x: 19,
          y: 57,
        },
        {
          x: 20,
          y: 46,
        },
        {
          x: 21,
          y: 45,
        },
        {
          x: 22,
          y: 45,
        },
      ],
    },
    {
      id: "yesterday",
      color: "hsl(185, 70%, 50%)",
      data: [
        {
          x: 0,
          y: 40,
        },
        {
          x: 1,
          y: 30,
        },
        {
          x: 2,
          y: 33,
        },
        {
          x: 3,
          y: 23,
        },
        {
          x: 4,
          y: 44,
        },
        {
          x: 5,
          y: 38,
        },
        {
          x: 6,
          y: 55,
        },
        {
          x: 7,
          y: 59,
        },
        {
          x: 8,
          y: 51,
        },
        {
          x: 9,
          y: 38,
        },
        {
          x: 10,
          y: 28,
        },
        {
          x: 11,
          y: 20,
        },
        {
          x: 12,
          y: 26,
        },
        {
          x: 13,
          y: 33,
        },
        {
          x: 14,
          y: 40,
        },
        {
          x: 15,
          y: 50,
        },
        {
          x: 16,
          y: 48,
        },
        {
          x: 17,
          y: 44,
        },
        {
          x: 18,
          y: 43,
        },
        {
          x: 19,
          y: 45,
        },
        {
          x: 20,
          y: 42,
        },
        {
          x: 21,
          y: 41,
        },
        {
          x: 22,
          y: 20,
        },
      ],
    },
  ];
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 40, bottom: 50, left: 20 }}
      colors={["#3751ff", "#dfe0eb"]}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisBottom={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisLeft={null}
      curve="basis"
      enableGridX={false}
      enablePoints={false}
      useMesh={true}
      enableCrosshair={false}
    />
  );
};

export default TrendChart;
