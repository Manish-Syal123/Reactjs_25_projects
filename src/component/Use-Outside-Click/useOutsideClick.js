import React, { useEffect } from "react";

const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler();
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup code for best practice
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOutsideClick;

// here handler is a callback function passed a s an argument to useOutsideClick
// Here, () => setShowContent(false) is an arrow function acting as a callback. It's invoked when a click event occurs outside of the specified element referenced by ref.

// Breaking it down:

// () => denotes an arrow function with no parameters.
// setShowContent(false) is a function call that updates the state variable showContent to false.
// So, the purpose of the handler function in this context is to update the state when a click event occurs outside of the specified element. It effectively closes the content area by setting showContent to false.
// Whenever the event listener detects a click outside of the referenced element (ref.current), it calls this handler function, which then updates the state, triggering a re-render of the component with the content area hidden.
