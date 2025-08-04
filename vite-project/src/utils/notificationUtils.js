export function requestNotificationPermission() {
    // Not needed for alerts, but keeping it for compatibility
    return;
  }
  
  export function showNotification(title, body) {
    const notificationsEnabled = localStorage.getItem('notificationsEnabled') === 'true';
    if (!notificationsEnabled) return;
  
    alert(`${title}\n\n${body}`);
  }
  