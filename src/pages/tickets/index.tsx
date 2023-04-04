import { useEffect, useState } from "react";
import DotsIcon from "../../assets/icons/dots.svg";
import Pagination from "../../components/pagination";
import axios from "../../lib/axios";
import "../../styles/tickets.scss";
import { UserResDataType } from "./types";

const Tickets = () => {
  const [data, setData] = useState({} as UserResDataType);
  const [isLoading, setIsLoading] = useState(false);
  const [row, setRow] = useState(8);
  const [page, setPage] = useState(1);

  async function fetchUser() {
    setIsLoading((prev) => !prev);
    const res = await axios.get("/users", {
      params: {
        per_page: row,
        page: page,
      },
    });
    setData(() => res?.data);
    setIsLoading((prev) => !prev);
  }

  useEffect(() => {
    fetchUser();
  }, [row, page]);

  return (
    <div className="tickets">
      <div className="ticket_header">
        <p className="title">All tickets</p>
        <div className="ticket_filter">
          <div className="sort">Sort</div>
          <div className="filter">Filter</div>
        </div>
      </div>

      <div className="ticket_table">
        <table>
          <thead>
            <tr>
              <th>Ticket details</th>
              <th>Customer name</th>
              <th>Date</th>
              <th>Priority</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item, key) => {
              return (
                <tr key={key}>
                  <td>
                    <div className="ticket_details">
                      <div className="avatar">
                        <img src={item.avatar} alt="" srcSet="" />
                      </div>

                      <div className="details">
                        <p className="label">Contact Email not Linked</p>
                        <p className="posted">Updated 1 day ago</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="details">
                      <p className="label">{item.first_name}</p>
                      <p className="posted">on 24.05.2019</p>
                    </div>
                  </td>
                  <td>
                    <div className="details">
                      <p className="label">May 26, 2019</p>
                      <p className="posted">6:30 PM</p>
                    </div>
                  </td>
                  <td>
                    <div className="status">High</div>
                  </td>
                  <td>
                    <img src={DotsIcon} alt="" />
                  </td>
                </tr>
              );
            })}
          </tbody>
          {isLoading && "Loading..."}
        </table>
      </div>
      <Pagination
        page={data?.page}
        totalPage={data?.total_pages}
        row={data?.per_page}
        totalRecords={data?.total}
        setRow={setRow}
        setPage={setPage}
      />
    </div>
  );
};

export default Tickets;
