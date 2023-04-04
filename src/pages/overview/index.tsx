import Card from "../../components/card";
import TrendChart from "../../components/trendChart";
import PlusIcon from "../../assets/icons/plus.svg";
import "../../styles/overview.scss";

const cardValue = [
  {
    title: "Unresolved",
    value: 60,
  },
  {
    title: "Overdue",
    value: 16,
  },
  {
    title: "Open",
    value: 43,
  },
  {
    title: "On hold",
    value: 64,
  },
];

const Overview = () => {
  return (
    <div className="overview">
      <div className="section_card">
        {cardValue.map((item, key) => {
          return <Card key={key} title={item.title} value={item.value} />;
        })}
      </div>
      <div className="section_chart">
        <div className="left">
          <div className="todays_trend">
            <p className="text">Today’s trends</p>
            <div className="todays_trend_details">
              <p className="date_stamp">as of 25 May 2019, 09:41 PM</p>
              <div className="chart_legends">
                <div className="legend ">
                  <p className="today">Today</p>
                </div>
                <div className="legend ">
                  <p className="yesterday">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
          <div className="trend_chart">
            <TrendChart />
          </div>
        </div>
        <div className="right">
          <div className="chart_card">
            <p className="chart_title">Resolved</p>
            <p className="chart_value">449</p>
          </div>
          <div className="chart_card">
            <p className="chart_title">Resolved</p>
            <p className="chart_value">426</p>
          </div>

          <div className="chart_card">
            <p className="chart_title">Average first response time</p>
            <p className="chart_value">33m</p>
          </div>

          <div className="chart_card">
            <p className="chart_title">Average response time</p>
            <p className="chart_value">3h 8m</p>
          </div>

          <div className="chart_card">
            <p className="chart_title">Resolution within SLA</p>
            <p className="chart_value">94%</p>
          </div>
        </div>
      </div>
      <div className="secton3">
        <div className="unresolved_tickets common">
          <div className="header_cont">
            <div className="header">
              <p className="title">Unresolved tickets</p>
              <p className="details">View details</p>
            </div>
            <p className="group">
              Group: <span>Support</span>
            </p>
          </div>

          <div className="starus_cont">
            <div className="status_details first">
              <p className="">Waiting on Feature Request</p>
              <p className="">4238</p>
            </div>
            <div className="status_details">
              <p className="">Awaiting Customer Response</p>
              <p className="">1005</p>
            </div>
            <div className="status_details">
              <p className="">Awaiting Developer Fix</p>
              <p className="">914</p>
            </div>
            <div className="status_details">
              <p className="">Pending</p>
              <p className="">281</p>
            </div>
          </div>
        </div>
        <div className="tasks common">
          <div className="header_cont">
            <div className="header">
              <p className="title">Task</p>
              <p className="details">View all</p>
            </div>
            <p className="group">Today</p>
          </div>

          <div className="add_task_cont">
            <p className="">Create new task</p>
            <img src={PlusIcon} alt="" srcSet="" />
          </div>
          <div className="checkbox_cont">
            <div className="checkbox">
              <div className="group">
                <input type="checkbox" name="" id="1" />
                <label className="label" htmlFor="1">
                  Finish ticket update
                </label>
              </div>
              <p className="yellow">Urgent</p>
            </div>

            <div className="checkbox">
              <div className="group">
                <input type="checkbox" name="" id="2" />
                <label className="label" htmlFor="2">
                  Create new ticket example
                </label>
              </div>
              <p className="green">New</p>
            </div>

            <div className="checkbox">
              <div className="group">
                <input type="checkbox" name="" id="3" />
                <label className="label" htmlFor="3">
                  Update ticket report
                </label>
              </div>
              <p className="default">Default</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
