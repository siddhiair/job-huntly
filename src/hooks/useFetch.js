import React, { useEffect, useState } from "react";

const useFetch = (url, perPage) => {
  const [state, setState] = useState({
    allData: [],
    visibleData: [],
    loading: true,
    error: null,
    count: perPage,
    hasMore: false,
  });

  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setState((prev) => ({
          ...prev,
          allData: result.data,
          visibleData: result.data.slice(0, perPage),
          loading: false,
          error: null,
        }));
      } catch (err) {
        setState((prev) => ({
          ...prev,
          allData: null,
          visibleData: null,
          loading: false,
          error: err.message || "Unknown error",
        }));
      }
    };
    fetchData();
  }, [url, perPage]);

  const loadMore = () => {
    const newCount = state.count + perPage;
    setState((prev) => ({
      ...prev,
      count: newCount,
      visibleData: prev.allData.slice(0, newCount),
    }));
  };

  const hasMore = state.visibleData.length < state.allData.length;

  return {
    visibleData: state.visibleData,
    error: state.error,
    loading: state.loading,
    loadMore,
    hasMore,
  };
};

export default useFetch;
