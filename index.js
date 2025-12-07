
function capitalizeWords(str) {
  if (typeof str !== "string") return "";
  return str
    .split(" ")
    .map(word => (word ? word[0].toUpperCase() + word.slice(1) : ""))
    .join(" ");
}

function filterActiveUsers(users) {
  if (!Array.isArray(users)) return [];
  return users.filter(u => u.isActive);
}

function logAction(action, username) {
  if (!action || !username) return "Invalid input";
  const time = new Date().toISOString();
  return `User ${username} did ${action} at ${time}`;
}

module.exports = {
  capitalizeWords,
  filterActiveUsers,
  logAction
};

