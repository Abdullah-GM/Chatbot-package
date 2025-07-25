import "../Chatbot.css";

function LoaderMessage() {
  return (
    <div className="skeleton-stacked-loader">
      {/* <div className="skeleton-bar bar1" /> */}
      <div className="skeleton-bar bar2" />
      <div className="skeleton-bar bar3" />
      <div className="skeleton-bar bar4" />
      <div className="skeleton-bar bar5" />
      <div className="skeleton-bar bar6" />
    </div>
  );
}

export default LoaderMessage;
