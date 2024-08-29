import { z } from 'zod'

export const sampleSchema = z.object({
    message: z.string().min(7).max(8).describe('Greeting message')
})