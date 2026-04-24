export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  time: Date;
  isRead: boolean;
  isToastActive?: boolean;
  userId?: string;
}
