import { useRef } from "react";
import Button from "../ui/Button";
import Classes from "./events-search.module.css";

function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={Classes.form} action="submit" onSubmit={submitHandler}>
      <div className={Classes.controls}>
        {/* year */}
        <div className={Classes.control}>
          <label htmlFor="year">year</label>
          <select name="" id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        {/* month */}
        <div className={Classes.control}>
          <label htmlFor="month">month</label>
          <select name="" id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
