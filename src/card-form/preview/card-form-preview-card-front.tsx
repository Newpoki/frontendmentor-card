import { useFormContext, useWatch } from 'react-hook-form'
import { CardFormValues } from '../card-schemas'
import { removeMaskChar } from '@/utils/remove-mask-char'

export const CardFormPreviewCardFront = () => {
    const { control } = useFormContext<CardFormValues>()

    const number = useWatch({ control, name: 'number' })
    const name = useWatch({ control, name: 'name' })
    const expMonth = useWatch({ control, name: 'exp.month' })
    const expYear = useWatch({ control, name: 'exp.year' })

    const displayedNumber = removeMaskChar(number) || '0000 0000 0000 0000'
    const displaytedName = removeMaskChar(name) || 'jane appleseed'
    const displaytedExpMonth = removeMaskChar(expMonth) || '00'
    const displaytedExpYear = removeMaskChar(expYear) || '00'

    return (
        <div className="card-preview-panel-card-front absolute left-0 top-[126px] px-5 pb-5 pt-[18px] text-white lg:relative lg:top-0 lg:mr-auto lg:px-8 lg:pb-[26px] lg:pt-7">
            <div className="mb-9 flex items-center gap-[10px] lg:mb-16 lg:gap-4">
                <div className="h-[30px] w-[30px] rounded-full bg-white lg:h-[47px] lg:w-[47px]" />
                <div className="h-[14px] w-[14px] rounded-full border-[1px] border-white bg-transparent lg:h-[21px] lg:w-[21px]" />
            </div>

            <p className="mb-4 text-lg tabular-nums tracking-[2.2px] lg:mb-6 lg:text-[28px] lg:tracking-[3.42px]">
                {displayedNumber}
            </p>

            <p className="flex items-center justify-between gap-4 text-[9px] uppercase tracking-[1.29px] lg:gap-6 lg:text-sm">
                <span className="truncate ">{displaytedName}</span>
                <span className="tabular-nums">
                    {displaytedExpMonth}/{displaytedExpYear}
                </span>
            </p>
        </div>
    )
}
