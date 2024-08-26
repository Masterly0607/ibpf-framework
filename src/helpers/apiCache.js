const shouldFetchData = (data, lastFetch, cacheDuration) => {
  const now = Date.now();
  const isDataEmpty = data.length < 1;
  const isLastFetch = lastFetch;
  const isFetchTime = now - lastFetch > cacheDuration;

  if ((!isDataEmpty && isLastFetch) || !isFetchTime) return false;
  return true;
};

export { shouldFetchData };
