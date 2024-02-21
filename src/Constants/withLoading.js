import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import "../Pages/Loading.css";

const withLoading = (WrappedComponent) => {
  // here inside the withLoading, am added the delay (1000) as default
  const WithLoading = ({ delay = 1000 }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, delay);

      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div>
        {loading && (
          <div className="body">
            <BeatLoader className="loader-container" color="#47cf73" />
          </div>
        )}

        {!loading && (
          <div>
            <WrappedComponent />
          </div>
        )}
      </div>
    );
  };

  return WithLoading;
};

export default withLoading;
