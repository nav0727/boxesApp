const Box = (props) => {
  const { className, text } = props;
  const boxes = `box ${className}`;
  return (
    <div className={boxes}>
      <p className="para">{text}</p>
    </div>
  );
};

const element = (
  <div class="bgContainer">
    <h1 className="heading"> Boxes </h1>

    <div className="bgContainer2">
      <Box className="box1" text="Small" />
      <Box className="box2" text="Medium" />
      <Box className="box3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
