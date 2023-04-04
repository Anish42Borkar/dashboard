import { ChangeEvent, Dispatch, SetStateAction } from "react";
import LeftIcon from "../assets/icons/left.svg";
import RightIcon from "../assets/icons/right.svg";
import "../styles/pagination.scss";

type PaginationProps = {
  page: number;
  row: number;
  totalPage: number;
  totalRecords: number;
  setRow: Dispatch<SetStateAction<number>>;
  setPage: Dispatch<SetStateAction<number>>;
};

const Pagination = ({
  page,
  row,
  totalPage,
  totalRecords,
  setRow,
  setPage,
}: PaginationProps) => {
  const onChangeRow = (e: ChangeEvent<HTMLSelectElement>) => {
    setRow(() => Number(e.target.value));
  };

  const pageControler = (val: number) => {
    if (val < 1 || val > totalPage) return;
    setPage(() => val);
  };

  return (
    <div className="pagination">
      <div className="row_controler">
        <label>Rows per page:</label>
        <select value={row} onChange={onChangeRow}>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="page_indicator">
        <p className="">
          {page}-{totalPage} of {totalRecords}
        </p>
      </div>

      <div className="page_controler">
        <img
          onClick={() => pageControler(page - 1)}
          src={LeftIcon}
          alt=""
          srcSet=""
        />
        <img
          onClick={() => pageControler(page + 1)}
          src={RightIcon}
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
};

export default Pagination;
