import { MASK_CHAR } from '@/constants'

export const removeMaskChar = (value: string) => value.replaceAll(MASK_CHAR, '0')
