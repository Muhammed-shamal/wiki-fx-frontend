import { useEffect, useState } from "react";

export const useLoading = () => {
  const [loading, setLoading] = useState(true);
  const [isHide, setIsHide] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
      setIsHide(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { loading, isHide };
};
