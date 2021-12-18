import "./Calendar.css";

const Calendar = (props) => {
  const month = props.cal.toLocaleString("en-US", { month: "short" });
  const year = props.cal.toLocaleString("en-US", { year: "numeric" });
  const date = props.cal.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="calendar">
      <div className="month">{month}</div>
      <div className="year">{year}</div>
      <div className="date">{date}</div>
    </div>
  );
}

export default Calendar;
