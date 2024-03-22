import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const configuredTwMerge = extendTailwindMerge({
    extend: {},
})

export function cn(...inputs: ClassValue[]) {
    return configuredTwMerge(clsx(inputs))
}
