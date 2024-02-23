import React, { useState } from "react";
import useFetch from "./useFetch";

const UseFetchHookTest = () => {
  const [afterClick, setafterClick] = useState(false);
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  //   console.log(data, loading, error);
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      <button
        onClick={() => setafterClick(!afterClick)}
        style={{ cursor: "pointer" }}
      >
        FetchData
      </button>
      {error !== null ? <p>{error}</p> : null}
      {afterClick && loading ? <h3>Loading data! please wait......</h3> : null}
      {afterClick && data && data.products && data.products.length
        ? data.products.map((item, index) => <p key={index}>{item.title}</p>)
        : null}
    </div>
  );
};

export default UseFetchHookTest;
