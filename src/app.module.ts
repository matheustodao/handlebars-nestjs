import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './models/auth/auth.module';
import { UserModule } from './models/user/user.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [UserModule, DatabaseModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
