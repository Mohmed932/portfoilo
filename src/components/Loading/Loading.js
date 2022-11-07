import React from "react";
import "./Loading.css";

const Loading = ({ Storage }) => {
  const styles = { color: Storage };
  return (
    <div className="Loading">
      <h1>
        <span className="let1" style={styles}>
          l
        </span>
        <span className="let2" style={styles}>
          o
        </span>
        <span className="let3" style={styles}>
          a
        </span>
        <span className="let4" style={styles}>
          d
        </span>
        <span className="let5" style={styles}>
          i
        </span>
        <span className="let6" style={styles}>
          n
        </span>
        <span className="let7" style={styles}>
          g
        </span>
      </h1>
    </div>
  );
};

export default Loading;
