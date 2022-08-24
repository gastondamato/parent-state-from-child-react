import React from "react";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? (props.win ? "red" : "grey") : "transparent"
  };

  return (
    <div
      style={styles}
      className="box"
      onClick={() => props.toggle(props.id)}
    ></div>
  );
}
