import { z } from 'zod';

export const submitSurveySchema = z
  .object({
    idEncuesta: z.string().uuid(),
    idTitulado: z.string().uuid(),

    trabajaActualmente: z.boolean(),

    cargo: z.string().trim().min(1).max(150).optional(),
    empresa: z.string().trim().min(1).max(200).optional(),
    area: z.string().trim().min(1).max(150).optional(),

    modalidad: z.string().trim().min(1).optional(),

    rangoSalarial: z.string().trim().min(1).optional(),

    tiempoInsercion: z.string().trim().min(1).optional(),
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.trabajaActualmente) {
      const requiredFields = [
        'cargo',
        'empresa',
        'area',
        'modalidad',
        'rangoSalarial',
      ] as const;

      for (const field of requiredFields) {
        if (!data[field]) {
          ctx.addIssue({
            code: 'custom',
            path: [field],
            message: 'Este campo es obligatorio',
          });
        }
      }
    } else {
      const jobFields = [
        'cargo',
        'empresa',
        'area',
        'modalidad',
        'rangoSalarial',
      ] as const;

      for (const field of jobFields) {
        if (data[field] !== undefined) {
          ctx.addIssue({
            code: 'custom',
            path: [field],
            message: 'No corresponde si no trabaja',
          });
        }
      }
    }
  });

export type SubmitSurveyDto =
  z.infer<typeof submitSurveySchema>;
  