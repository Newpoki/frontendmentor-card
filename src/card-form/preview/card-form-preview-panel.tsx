import { CardFormPreviewCardBack } from './card-form-preview-card-back'
import { CardFormPreviewCardFront } from './card-form-preview-card-front'

export const CardFormPreviewPanel = () => {
    return (
        <section className="card-preview-panel relative flex w-full items-start justify-center lg:h-full lg:w-[483px] lg:flex-shrink-0">
            <div className="relative flex w-[343px] flex-col items-end pt-8 lg:absolute lg:left-0 lg:top-2/4 lg:w-[541px] lg:-translate-y-2/4 lg:translate-x-[164px] lg:flex-col-reverse lg:gap-9 lg:p-0">
                <CardFormPreviewCardBack />
                <CardFormPreviewCardFront />
            </div>
        </section>
    )
}
