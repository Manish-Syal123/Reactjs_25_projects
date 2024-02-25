import React, { useRef } from "react";
import useFetch from "../Use-Fetch/useFetch";

const ScrollToTopAndBottom = () => {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return <h4>Loading data!!.........Please wait...</h4>;
  }
  if (error) {
    return <h5>And Error Occured while fetching the data!Please try again</h5>;
  }
  return (
    <div>
      <h3>Scroll to Top and Bottom</h3>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      {data && data.products && data.products.length ? (
        <ul style={{ listStyle: "none" }}>
          {data.products.map((item, index) => (
            <li>{item.title}</li>
          ))}
        </ul>
      ) : null}
      <div ref={bottomRef}></div>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <h5>This is the bottom of the page</h5>
    </div>
  );
};

export default ScrollToTopAndBottom;
