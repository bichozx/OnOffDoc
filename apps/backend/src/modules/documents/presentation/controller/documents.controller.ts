import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateDocumentDto } from '../../application/dto/create-document.dto';
import { CreateDocumentUseCase } from '../../application/use-cases/create-document.use-case';
import { DeleteDocumentUseCase } from '../../application/use-cases/delete-documente.use-case';
import { GetDocumentsByEmployeeUseCase } from '../../application/use-cases/get-document-employee.use-case';
import { GetDocumentUseCase } from '../../application/use-cases/get-document.use-case';
import { GenerateDocumentUseCase } from '../../application/use-cases/generate-document.use-case';
import { ListDocumentsUseCase } from '../../application/use-cases/list-documents.use-case';
import { GenerateDocumentDto } from '../../application/dto/generate-document.dto';

@Controller('documents')
export class DocumentsController {
  constructor(
    private readonly getDocument: GetDocumentUseCase,

    private readonly listDocuments: ListDocumentsUseCase,

    private readonly documentsByEmployee: GetDocumentsByEmployeeUseCase,

    private readonly createDocument: CreateDocumentUseCase,

    private readonly generateDocument: GenerateDocumentUseCase,

    private readonly deleteDocument: DeleteDocumentUseCase,
  ) {}

  @Get()
  findAll() {
    return this.listDocuments.execute();
  }

  @Get('employee/:employeeId')
  findByEmployee(
    @Param('employeeId')
    employeeId: string,
  ) {
    return this.documentsByEmployee.execute(employeeId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getDocument.execute(id);
  }

  @Post('generate')
  generate(
    @Body()
    dto: GenerateDocumentDto,
  ) {
    return this.generateDocument.execute(dto);
  }

  @Post()
  create(
    @Body()
    dto: CreateDocumentDto,
  ) {
    return this.createDocument.execute(dto);
  }

  @Delete(':id')
  delete(
    @Param('id')
    id: string,
  ) {
    return this.deleteDocument.execute(id);
  }
}

// @Controller('documents')
// export class DocumentsController {
//   constructor(
//     private readonly getDocument: GetDocumentUseCase,

//     private readonly listDocuments: ListDocumentsUseCase,

//     private readonly documentsByEmployee: GetDocumentsByEmployeeUseCase,

//     private readonly createDocument: CreateDocumentUseCase,

//     private readonly generateDocument: GenerateDocumentUseCase,

//     private readonly deleteDocument: DeleteDocumentUseCase,
//   ) {}
//   @Get()
//   findAll() {
//     return this.listDocuments.execute();
//   }

//   @Get('/employee/:employeeId')
//   findByEmployee(
//     @Param('employeeId')
//     employeeId: string,
//   ) {
//     return this.documentsByEmployee.execute(employeeId);
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.getDocument.execute(id);
//   }

//   @Post('generate')
//   generate(
//     @Body()
//     dto: GenerateDocumentDto,
//   ) {
//     return this.generateDocument.execute(dto);
//   }

//   @Post()
//   create(
//     @Body()
//     dto: CreateDocumentDto,
//   ) {
//     return this.createDocument.execute(dto);
//   }

//   @Delete(':id')
//   delete(
//     @Param('id')
//     id: string,
//   ) {
//     return this.deleteDocument.execute(id);
//   }
// }
