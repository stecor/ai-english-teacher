export const updateStreak = async () => {
  const now = new Date();

  const localDate = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");

  const response = await fetch("/api/progress/streak", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ localDate }),
  });

  if (!response.ok) {
    console.error("Failed to update streak");
    return;
  }

  return response.json();
};