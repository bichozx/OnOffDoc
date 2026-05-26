// src/enums/role.enum.ts
var Role = /* @__PURE__ */ ((Role2) => {
  Role2["ADMIN"] = "ADMIN";
  Role2["USER"] = "USER";
  return Role2;
})(Role || {});

// src/enums/contract-status.enum.ts
var ContractStatus = /* @__PURE__ */ ((ContractStatus2) => {
  ContractStatus2["ACTIVO"] = "ACTIVO";
  ContractStatus2["FINALIZADO"] = "FINALIZADO";
  ContractStatus2["PENDIENTE_INGRESO"] = "PENDIENTE_INGRESO";
  return ContractStatus2;
})(ContractStatus || {});

// src/enums/document-type.enum.ts
var DocumentType = /* @__PURE__ */ ((DocumentType2) => {
  DocumentType2["CONTRATO_INGRESO"] = "CONTRATO_INGRESO";
  DocumentType2["CARTA_RETIRO"] = "CARTA_RETIRO";
  DocumentType2["LIQUIDACION"] = "LIQUIDACION";
  DocumentType2["CERTIFICADO_LABORAL"] = "CERTIFICADO_LABORAL";
  return DocumentType2;
})(DocumentType || {});

// src/enums/separation-reason.enum.ts
var SeparationReason = /* @__PURE__ */ ((SeparationReason2) => {
  SeparationReason2["RENUNCIA_VOLUNTARIA"] = "RENUNCIA_VOLUNTARIA";
  SeparationReason2["DESPIDO_JUSTA_CAUSA"] = "DESPIDO_JUSTA_CAUSA";
  SeparationReason2["DESPIDO_SIN_JUSTA_CAUSA"] = "DESPIDO_SIN_JUSTA_CAUSA";
  SeparationReason2["FIN_CONTRATO_TERMINO_FIJO"] = "FIN_CONTRATO_TERMINO_FIJO";
  SeparationReason2["JUBILACION"] = "JUBILACION";
  return SeparationReason2;
})(SeparationReason || {});
export {
  ContractStatus,
  DocumentType,
  Role,
  SeparationReason
};
