import React, { useEffect, useState } from "react";

// Custom Hook
// eg:key:'theme',value:'dark'
// eg:key:'theme',value:'light'

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currvalue;

    try {
      currvalue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      console.log(error);
      currvalue = defaultValue;
    }

    return currvalue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
