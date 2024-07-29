import Observable from './Observable';

export interface Notification {
  id: number;
  message: string;
  type: string;
}

class NotificationService extends Observable<Notification> {
  private notifications: Notification[] = [];

  constructor() {
    super();
  }

  notify(notification: Notification) {
    this.notifyObservers(notification);
  }
  addNotification(notification: Notification) {
    this.notifications.push(notification);
    this.notify(notification);
  }

  getNotifications() {
    return this.notifications;
  }
}

export default new NotificationService();
