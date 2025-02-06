import { z } from "zod"

export const passwordSchema = z.string().min(6, { message: 'Insert correct password' })

export const formLoginSchema = z.object({
    email: z.string().regex(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, { message: 'Insert correct gmail' }),
    password: passwordSchema
})

export const formRegisterSchema = formLoginSchema.merge(
    z.object({
        fullName: z.string().min(2, { message: 'Insert Name and Surname' }),
        confirmPassword: passwordSchema
    })
).refine(data => data.password === data.confirmPassword, {
    message: 'Password incorrect',
    path: ['confirmPassword']
})

export type TFormLoginValues = z.infer<typeof formLoginSchema>
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>