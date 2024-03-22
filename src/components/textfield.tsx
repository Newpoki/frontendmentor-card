import { cn } from '@/utils/cn'
import { forwardRef } from 'react'
import { FieldError } from './field-error'

export type TextfieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
    hasError?: boolean
    helperText?: string
}

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
    ({ className, hasError, helperText, ...others }, ref) => {
        return (
            <div className="flex flex-col gap-2">
                <div
                    className={cn(
                        'h-[45px] w-full rounded-lg bg-gradient-to-b from-grey-500 to-grey-500 p-[1px] transition-all focus-within:from-[#6348FE] focus-within:to-[#610595] hover:from-[#6348FE] hover:to-[#610595]',
                        {
                            'from-red-500 to-red-500 focus-within:from-red-500 focus-within:to-red-500 hover:from-red-500 hover:to-red-500':
                                hasError,
                        }
                    )}
                >
                    <input
                        {...others}
                        className={cn(
                            'h-full w-full rounded-[7px] px-4 text-purple-900 focus-visible:outline-none',
                            className
                        )}
                        ref={ref}
                    />
                </div>

                {helperText != null && !hasError && <span>{helperText}</span>}
                {helperText != null && hasError && <FieldError>{helperText}</FieldError>}
            </div>
        )
    }
)
