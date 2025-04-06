import './loader.css';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <i className="uil uil-brain loader-icon" />
      <p className="loader-text">
        Unpacking Portfolio
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </p>
    </div>
  );
};

export default Loader;
