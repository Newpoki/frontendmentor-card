import { FormLabel } from '@/components/form-label'
import { getFieldKey } from '@/utils/get-field-key'
import { CardFormValues } from '../card-schemas'
import { Controller, useFormState } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import { Textfield } from '@/components/textfield'
import { FieldError } from '@/components/field-error'

export const CardFormContentExpirationDate = () => {
    const formState = useFormState<CardFormValues>()

    const {
        errors: { exp },
    } = formState

    const displayedError = exp?.message ?? exp?.month?.message ?? exp?.year?.message
    const hasMonthError = exp?.month?.message != null
    const hasYearError = exp?.year?.message != null

    return (
        <div>
            <FormLabel>exp. date (MM/YY)</FormLabel>

            <div className="flex items-center gap-2 lg:gap-[10px]">
                <Controller
                    name={getFieldKey<CardFormValues>('exp.month')}
                    render={({ field }) => {
                        return (
                            <PatternFormat
                                {...field}
                                placeholder="MM"
                                format="##"
                                hasError={hasMonthError}
                                customInput={Textfield}
                            />
                        )
                    }}
                />

                <Controller
                    name={getFieldKey<CardFormValues>('exp.year')}
                    render={({ field }) => {
                        return (
                            <PatternFormat
                                {...field}
                                placeholder="YY"
                                format="##"
                                customInput={Textfield}
                                hasError={hasYearError}
                            />
                        )
                    }}
                />
            </div>

            {displayedError != null && <FieldError>{displayedError}</FieldError>}
        </div>
    )
}
