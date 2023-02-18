import EventItem from "./EventItem";

import classes from "./event-list.module.css";

function EventList(props) {
  const { items } = props;
  console.log("ss");
  return (
    <ul className={classes.list}>
      {items.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            image={event.image}
            date={event.date}
            location={event.location}
          />
        );
      })}
    </ul>
  );
}

export default EventList;
