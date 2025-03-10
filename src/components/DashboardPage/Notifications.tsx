"use client";

interface NotificationsProps {
  notifications: string[];
}

export function Notifications({ notifications }: NotificationsProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg shadow-lg backdrop-blur-sm p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Notifications</h3>
      <ul className="space-y-3">
        {notifications.map((notification, index) => (
          <li key={index} className="py-3 border-b border-white/10 last:border-b-0">
            <p className="text-white/80">{notification}</p>
            <span className="text-xs text-white/50 mt-1 block">1h ago</span>
          </li>
        ))}
      </ul>
    </div>
  );
}