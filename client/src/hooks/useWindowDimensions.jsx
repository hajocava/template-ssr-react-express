import { useState, useEffect } from "react";

// If for some reason one of your server-side
// rendering components makes use of the window object,
// here is some conditional logic to handle that case.

function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    console.log('You are on the browser')
    // ✅ Can use window here
    const { innerWidth: width, innerHeight: height } = window;
  
    return {
      width,
      height,
    };
  } else {
    console.log('You are on the server')
    // ⛔️ Don't use window here
    return {
      width: undefined,
      height: undefined
    }
  }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
