import { Link } from "react-router-dom";

const truncateText = (str, length, ending) => {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

export default function Card(props) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.image} className="card-img-top" alt={props.title} />

        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>

          {props.description ? (
            <p className="card-text">{truncateText(props.description, 100)}</p>
          ) : (
            ""
          )}
        </div>

        {props.link ? (
          <div className="card-footer">
            <p className="text-end mb-0">
              <Link to={props.link} className="text-primary">
                <small>Read more</small>
              </Link>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
