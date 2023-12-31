import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtService, AuthController],
})
export class AppModule {}
