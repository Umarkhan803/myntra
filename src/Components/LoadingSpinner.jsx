const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center spinner">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "5rem", height: "5rem" }}>
        <center>
          {" "}
          <span className="visually-hidden">Loading...</span>
        </center>
      </div>
    </div>
  );
};

export default LoadingSpinner;
