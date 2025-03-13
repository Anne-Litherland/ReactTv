import { tvShows } from "./data";
import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({
  shows,
  selectedShow,
  setSelectedShow,
}) {
  return (
    <nav className="shows">
      {shows.map((shows) => (
        <a
          className={"show" + (shows === selectedShow ? " selected" : "")}
          key={shows.name}
          onClick={() => setSelectedShow(shows)}
        >
          {shows.name}
        </a>
      ))}
    </nav>
  );
}
