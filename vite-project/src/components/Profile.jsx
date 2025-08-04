// src/components/Profile.jsx

import React, { useEffect, useState } from 'react';
import { requestNotificationPermission } from '../utils/notificationUtils';

const Profile = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(
    localStorage.getItem('notificationsEnabled') === 'true'
  );

  useEffect(() => {
    if (notificationsEnabled) {
      requestNotificationPermission();
    }
  }, [notificationsEnabled]);

  const toggleNotifications = () => {
    if (!('Notification' in window)) {
      alert('Your browser does not support desktop notifications.');
      return;
    }

    const newValue = !notificationsEnabled;
    setNotificationsEnabled(newValue);
    localStorage.setItem('notificationsEnabled', newValue);

    if (newValue) {
      requestNotificationPermission();
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded max-w-md mx-auto my-4">
      <h2 className="text-xl font-semibold mb-2">Notification Settings</h2>
      <button
        onClick={toggleNotifications}
        className={`px-4 py-2 rounded text-white ${
          notificationsEnabled ? 'bg-red-500' : 'bg-green-500'
        }`}
      >
        {notificationsEnabled ? 'Disable Notifications' : 'Enable Notifications'}
      </button>
    </div>
  );
};

export default Profile;
