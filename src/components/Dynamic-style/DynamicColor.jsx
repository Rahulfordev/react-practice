const DynamicColor = () => {
  //   const error = true;
  const error = false;
  return (
    <div>
      <h1
        style={{
          color: error ? "green" : "red",
          backgroundColor: error ? "black" : "yellow",
        }}
      >
        Color
      </h1>
    </div>
  );
};

export default DynamicColor;
