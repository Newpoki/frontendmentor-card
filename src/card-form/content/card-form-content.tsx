import { FormLabel } from '@/components/form-label'
import { ControlledTextfield } from '@/form/controlled-textfield'
import { getFieldKey } from '@/utils/get-field-key'
import { CardFormValues } from '../card-schemas'
import { ControlledPatternfield } from '@/form/controlled-pattern-field'
import { Button } from '@/components/button'
import { CardFormContentExpirationDate } from './card-form-content-expiration-date'
import { useFormState } from 'react-hook-form'
import { CardFormContentSuccess } from './card-form-content-success'

export const CardFormContent = () => {
    const formState = useFormState<CardFormValues>()

    return (
        <main className="mx-auto flex max-w-[381px] flex-col justify-center gap-7 px-6 pb-8 pt-[90px] lg:p-0">
            {formState.isSubmitSuccessful ? (
                <CardFormContentSuccess />
            ) : (
                <>
                    <div className="flex flex-col gap-5 lg:gap-[26px]">
                        <div>
                            <FormLabel>cardholder name</FormLabel>
                            <ControlledTextfield
                                name={getFieldKey<CardFormValues>('name')}
                                placeholder="e.g. Jane appleseed"
                            />
                        </div>
                        <div>
                            <FormLabel>cardholder number</FormLabel>
                            <ControlledPatternfield
                                name={getFieldKey<CardFormValues>('number')}
                                placeholder="e.g. 1234 5678 9123 000"
                                format="#### #### #### ####"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3 lg:gap-5">
                            <CardFormContentExpirationDate />

                            <div>
                                <FormLabel>cvc</FormLabel>
                                <ControlledPatternfield
                                    name={getFieldKey<CardFormValues>('cvc')}
                                    placeholder="e.g. 123"
                                    format="###"
                                />
                            </div>
                        </div>
                    </div>

                    <Button>Confirm</Button>
                </>
            )}
        </main>
    )
}
