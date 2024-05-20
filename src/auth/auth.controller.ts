import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() body) {
        const { username, password } = body;
        return this.authService.login({ username, password });
    }

    @Post('signup')
    async signup(@Body() body) {
        const { username, password } = body;
        return this.authService.register(username, password);
    }
}
