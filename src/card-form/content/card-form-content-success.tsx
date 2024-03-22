import SuccessIcon from '@/assets/icon-complete.svg?react'
import { Button } from '@/components/button'
import { useFormContext } from 'react-hook-form'
import { CardFormValues } from '../card-schemas'
import { useCallback } from 'react'

export const CardFormContentSuccess = () => {
    const { reset } = useFormContext<CardFormValues>()

    const handleResetForm = useCallback(() => {
        reset()
    }, [reset])

    return (
        <div className="flex flex-col items-center">
            <SuccessIcon className="mb-9" />
            <h1 className="mb-4 text-[28px] uppercase tracking-[3.42px] text-purple-900">
                thank you!
            </h1>
            <h3 className="text-grey-700 mb-12">We've added your card details</h3>
            <Button className="w-full" type="button" onClick={handleResetForm}>
                Continue
            </Button>
        </div>
    )
}
