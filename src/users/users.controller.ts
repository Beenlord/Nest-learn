import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getAll(): string {
        return 'Get all users!';
    }

    @Get(':id')
    getOne(@Param('id') id): string {
        return 'Get one user! ' + id;
    }
}
