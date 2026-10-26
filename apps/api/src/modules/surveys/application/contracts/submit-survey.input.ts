export interface SubmitSurveyInput {
  idEncuesta: string;
  idTitulado: string;
  trabajaActualmente: boolean;
  cargo?: string;
  empresa?: string;
  area?: string;
  modalidad?: string;
  rangoSalarial?: string;
  tiempoInsercion?: string;
}