import {
  useEffect,
  useRef,
  useState,
} from 'react';

const useIO = <T extends Element | Element[]>(options: IntersectionObserverInit) => {
  const { threshold, root, rootMargin } = options || {};

  const observer = useRef<IntersectionObserver | null>(null);

  const [elements, setElements] = useState<T | null>(null);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

  useEffect(
    () => {
      if (elements) {
        observer.current = new IntersectionObserver(
          (ioEntries) => {
            setEntries(ioEntries);
          },
          {
            threshold,
            rootMargin,
            root,
          },
        );

        if (Array.isArray(elements)) {
          elements.forEach((element) => {
            observer.current?.observe(element);
          });
        } else {
          observer.current.observe(elements);
        }
      }

      return () => {
        if (observer.current) {
          observer.current.disconnect();
        }
      };
    },
    [
      elements,
      root,
      rootMargin,
      JSON.stringify(threshold),
    ],
  );

  return {
    observer,
    entries,
    setElements,
  };
};

export default useIO;
