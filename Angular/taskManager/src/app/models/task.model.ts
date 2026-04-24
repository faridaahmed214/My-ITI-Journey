export type Priority = 'low' | 'medium' | 'high';

export type Category = 'work' | 'personal' | 'study';

export type Status = 'pending' | 'completed';

export interface TaskData {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  date: string;
  category: string;
  status: Status;
  userId?: string;
}
