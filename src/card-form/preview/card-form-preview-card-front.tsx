export const CardFormPreviewCardFront = () => {
    return (
        <div className="card-preview-panel-card-front absolute left-0 top-[126px] px-5 pb-5 pt-[18px] text-white">
            <div className="mb-9 flex items-center gap-[10px]">
                <div className="h-[30px] w-[30px] rounded-full bg-white" />
                <div className="h-[14px] w-[14px] rounded-full border-[1px] border-white bg-transparent" />
            </div>

            <p className="mb-4 text-lg tracking-[2.2px] ">0000 0000 0000 0000</p>

            <p className="flex items-center justify-between text-[9px] uppercase tracking-[1.29px]">
                <span>jane appleseed</span>
                <span>00/00</span>
            </p>
        </div>
    )
}
