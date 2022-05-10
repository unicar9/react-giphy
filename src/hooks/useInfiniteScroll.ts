import { useState, useRef, useCallback, useEffect } from "react";

export const useInfiniteScroll = () => {
  const [offset, setOffset] = useState(0);
  const loaderRef = useRef(null);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;
    if (target.isIntersecting) {
      setOffset((prev) => prev + 15);
    }
  }, []);

  useEffect(() => {
    const currentRef = loaderRef.current;
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [handleObserver, loaderRef]);

  return { loaderRef, offset, setOffset };
};
