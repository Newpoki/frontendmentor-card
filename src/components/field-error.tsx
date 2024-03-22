import { cn } from '@/utils/cn'

type FieldErrorProps = React.HTMLAttributes<HTMLSpanElement>

export const FieldError = ({ className, ...others }: FieldErrorProps) => {
    return <span {...others} className={cn('text-red-500 text-xs', className)} />
}
