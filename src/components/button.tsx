import { cn } from '@/utils/cn'
import { forwardRef } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, ...others }, ref) => {
        return (
            <button
                {...others}
                className={cn(
                    'rounded-lg bg-purple-900 p-4 leading-[21px] text-white transition-colors hover:bg-purple-900/75 focus:outline-none  focus:ring focus:ring-purple-500 focus:ring-offset-2 active:bg-purple-900/75',
                    className
                )}
                ref={ref}
            />
        )
    }
)
