import "../styles/card.scss";

type CardProps = {
  title: string;
  value: string | number;
};

const Card = ({ title, value }: CardProps) => {
  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="value">{value}</p>
    </div>
  );
};

export default Card;
