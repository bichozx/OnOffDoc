// import { Contract } from '../../../contracts/domain/entities/contract.entity';
// import { Employee } from '../../../employees/domain/entities/employee.entity';

// export abstract class PdfGeneratorService {
//   abstract generateContract(
//     employee: Employee,
//     contract: Contract,
//   ): Promise<Buffer>;

//   abstract generateRetirementLetter(
//     employee: Employee,
//     contract: Contract,
//   ): Promise<Buffer>;

//   abstract generateWorkCertificate(employee: Employee): Promise<Buffer>;
// }

import { Employee } from '../../../employees/domain/entities/employee.entity';
import { Injectable } from '@nestjs/common';
import PDFDocument from 'pdfkit';

@Injectable()
export class PdfKitGeneratorService {
  async generateWorkCertificate(employee: Employee): Promise<Buffer> {
    return new Promise((resolve) => {
      const doc = new PDFDocument();

      const chunks: Buffer[] = [];

      doc.on('data', (chunk) => chunks.push(chunk));

      doc.on('end', () => resolve(Buffer.concat(chunks)));

      doc.fontSize(18);

      doc.text('CERTIFICADO LABORAL');

      doc.moveDown();

      doc.text(`Se certifica que ${employee.fullName}`);

      doc.end();
    });
  }
}
