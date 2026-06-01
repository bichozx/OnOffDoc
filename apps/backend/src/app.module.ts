import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ContractsModule } from './modules/contracts/contracts.module';
import { DocumentsModule } from './modules/documents/documents.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { GenerateDocumentUseCase } from './modules/documents/application/use-cases/generate-document.use-case';
import { LocalStorageService } from './modules/documents/infrastructure/storage/local-storage.service';
import { Module } from '@nestjs/common';
import { PdfGeneratorService } from './modules/documents/infrastructure/pdf/pdf-generator.service';
import { PdfKitGeneratorService } from './modules/documents/infrastructure/pdf/pdfkit-generator.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { StorageService } from './modules/documents/infrastructure/storage/storage.service';
import { UsersModule } from './modules/users/users.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    EmployeesModule,
    DocumentsModule,
    ContractsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    GenerateDocumentUseCase,

    {
      provide: PdfGeneratorService,
      useClass: PdfKitGeneratorService,
    },
    {
      provide: StorageService,
      useClass: LocalStorageService,
    },
  ],
})
export class AppModule {}
