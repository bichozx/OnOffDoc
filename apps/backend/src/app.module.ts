import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { DocumentsModule } from './modules/documents/documents.module';
import { ContractsModule } from './modules/contracts/contracts.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule, EmployeesModule, DocumentsModule, ContractsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
