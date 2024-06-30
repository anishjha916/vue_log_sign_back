import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://anishjha805:task_tracker@cluster0.otgcbye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    AuthModule,
    TasksModule,
  ],
})
export class AppModule {}
