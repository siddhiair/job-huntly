export function getDaysAgo(unixTimestamp) {
  const now = Math.floor(Date.now() / 1000);
  const diffInSeconds = now - unixTimestamp;

  const diffInDays = Math.floor(diffInSeconds / (60 * 60 * 24));

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "1 day ago";
  return `${diffInDays} days ago`;
}
