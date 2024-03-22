import { CardFormPreviewCardBack } from './card-form-preview-card-back'
import { CardFormPreviewCardFront } from './card-form-preview-card-front'

export const CardFormPreviewPanel = () => {
    return (
        <section className="card-preview-panel flex w-full items-start justify-center">
            <div className="relative flex w-[343px] flex-col items-end pt-8">
                <CardFormPreviewCardBack />
                <CardFormPreviewCardFront />
            </div>
        </section>
    )
}
