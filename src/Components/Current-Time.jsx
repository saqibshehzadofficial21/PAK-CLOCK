let Current = () => {
  let time = new Date(); // use for current in js

  return (
    <p className="lead">
      This is a Current Time : {time.toLocaleDateString()} _ "{}"
      {time.toLocaleTimeString()}
    </p>
  );
};

export default Current;
