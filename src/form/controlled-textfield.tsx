import { Controller, useFormContext } from 'react-hook-form'
import { Textfield } from '@/components/textfield'

export type ControlledTextfieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
    name: string
}

export function ControlledTextfield({ className, name, ...others }: ControlledTextfieldProps) {
    const { control } = useFormContext()

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => {
                return (
                    <Textfield
                        {...field}
                        {...others}
                        className={className}
                        helperText={fieldState.error?.message}
                        hasError={fieldState.error?.message != null}
                    />
                )
            }}
        />
    )
}
