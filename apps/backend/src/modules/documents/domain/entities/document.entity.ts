import { DocumentType } from '@repo/shared-types';

export interface DocumentProps {
  id: string;

  fileName: string;

  fileUrl: string;

  documentType: DocumentType;

  employeeId: string;

  contractId?: string | null;

  createdAt: Date;
}

export class Document {
  constructor(private readonly props: DocumentProps) {}

  get id() {
    return this.props.id;
  }

  get fileName() {
    return this.props.fileName;
  }

  get fileUrl() {
    return this.props.fileUrl;
  }

  get employeeId() {
    return this.props.employeeId;
  }

  get contractId() {
    return this.props.contractId;
  }

  toPrimitives(): DocumentProps {
    return {
      ...this.props,
    };
  }
}
