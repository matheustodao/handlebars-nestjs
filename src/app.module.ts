import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './models/auth/auth.guards';
import { AuthModule } from './models/auth/auth.module';
import { TaskModule } from './models/task/task.module';
import { UserModule } from './models/user/user.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [UserModule, DatabaseModule, AuthModule, TaskModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
