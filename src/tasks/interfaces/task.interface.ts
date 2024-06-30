// src/tasks/interfaces/task.interface.ts

import { Document } from 'mongoose';

export interface Task extends Document {
  id?: string;
  title: string;
  description?: string;
  completed: boolean;
}
