import { z } from 'zod'

/**
 * Validation doesn't need to be complex as most of the format
 * is handled by format prop on PatternField
 */
export const cardFormValuesSchemas = z.object({
    name: z.string().trim().min(1, "Can't be blank"),
    number: z
        .string()
        .min(1, "Can't be blank")
        .transform((value) => value.replace(/\s+/g, ''))
        .pipe(z.string().min(16, 'Wrong format, 16 digits expected')),
    exp: z.object({
        month: z
            .string()
            .min(1, "Can't be blank")
            .regex(/^(0[1-9]|1[0-2])$/, 'Wrong format'),
        year: z
            .string()
            .min(1, "Can't be blank")
            .regex(/^\d{2}$/, 'Wrong format'),
    }),
    cvc: z
        .string()
        .min(1, "Can't be blank")
        .regex(/^\d{3}$/, 'Wrong format'),
})

export type CardFormValues = z.infer<typeof cardFormValuesSchemas>
