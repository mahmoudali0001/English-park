import React from "react";

const aboutUsElement = (props) => {
  console.log(props.content);
  return (
    <article className="flex gap-x-2 justify-center items-center">
      {props.children}
      <p>
        {props.content.split(" ")[0]} <br />
        {props.content.split(" ")[1]} {props.content.split(" ")[2]}
      </p>
    </article>
  );
};

export default aboutUsElement;
