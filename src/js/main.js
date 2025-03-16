// ...existing code...

// Example of breaking down a long task
function longTask() {
  // ...existing code...
}

if (window.requestIdleCallback) {
  requestIdleCallback(longTask);
} else {
  setTimeout(longTask, 1);
}
