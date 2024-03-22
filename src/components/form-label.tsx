import { cn } from '@/utils/cn'
import { forwardRef } from 'react'

export const FormLabel = forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
    ({ className, ...others }, ref) => {
        return (
            <label
                {...others}
                className={cn('text-[12px] uppercase tracking-[2px] text-purple-900 ', className)}
                ref={ref}
            />
        )
    }
)
