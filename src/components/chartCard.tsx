type ChartCardProps = {
  title: string;
  value: string | number;
};

const ChartCard = ({ title, value }: ChartCardProps) => {
  return (
    <div className="chart_card">
      <p className="title">{title}</p>
      <p className="value">{value}</p>
    </div>
  );
};

export default ChartCard;
