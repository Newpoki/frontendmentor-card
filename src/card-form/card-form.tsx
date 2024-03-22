import { ControlledForm } from '@/form/controlled-form'
import { CardFormContent } from './content/card-form-content'
import { CardFormPreviewPanel } from './preview/card-form-preview-panel'
import { useForm } from 'react-hook-form'
import { CardFormValues, cardFormValuesSchemas } from './card-schemas'
import { useCallback, useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

export const CardForm = () => {
    const formContext = useForm<CardFormValues>({
        defaultValues: {
            name: '',
            number: '',
            cvc: '',
            exp: {
                month: '',
                year: '',
            },
        },
        resolver: zodResolver(cardFormValuesSchemas),
    })

    const handleSubmit = useCallback((formValues: CardFormValues) => {
        console.log({ formValues })
    }, [])

    useEffect(() => {
        formContext.setFocus('name')
    }, [formContext])

    return (
        <ControlledForm formContext={formContext} onSubmit={handleSubmit}>
            <CardFormPreviewPanel />

            <CardFormContent />
        </ControlledForm>
    )
}
