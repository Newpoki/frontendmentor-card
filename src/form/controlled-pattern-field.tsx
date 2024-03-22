import { Textfield } from '@/components/textfield'
import { Controller, useFormContext } from 'react-hook-form'
import { PatternFormat, PatternFormatProps } from 'react-number-format'

export type ControlledPatternfieldProps = PatternFormatProps & {
    name: string
}

export function ControlledPatternfield({
    className,
    name,
    ...others
}: ControlledPatternfieldProps) {
    const { control } = useFormContext()

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => {
                return (
                    <PatternFormat
                        {...field}
                        {...others}
                        className={className}
                        hasError={fieldState.error?.message != null}
                        helperText={fieldState.error?.message}
                        customInput={Textfield}
                    />
                )
            }}
        />
    )
}
