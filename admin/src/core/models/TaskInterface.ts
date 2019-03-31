export interface TaskInterface {
  _id?: string;
  label: string;
  content?: string;
  completed: boolean;
  priority: TaskPriority;
  categories: string[];
}

export const enum TaskPriority {
  IMMEDIATE,
  URGENT,
  NORMAL,
}
