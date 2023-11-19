const button = (props) => (
  <button
    className={["w-fit text-center rounded-lg", props.buttonClass].join(" ")}
  >
    {props.children}
  </button>
);

export default button;
