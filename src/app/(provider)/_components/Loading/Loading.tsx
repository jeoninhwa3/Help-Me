const Loading = () => {
  const loadingText = "Loading...";

  return (
    <div className="loading_container">
      <div className="petal_wrap">
        <div className="petal petal1"></div>
        <div className="petal petal2"></div>
        <div className="petal petal3"></div>
        <div className="petal petal4"></div>
      </div>
      <div className="loading_text">
        {loadingText.split("").map((char, index) => (
          <span key={index} style={{ animationDelay: `${0.1 * index}s` }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
