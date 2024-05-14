import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { IsPublic } from 'src/shared/decorators/isPublic';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UsePipes()
  authenticate(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('signup')
  @UsePipes()
  signUp(@Body() signUpUserDto: SignUpDto) {
    return this.authService.signUp(signUpUserDto);
  }
}
