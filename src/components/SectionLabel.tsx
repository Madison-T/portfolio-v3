interface SectionLabelProps {
    text: string
}

const SectionLabel = ({ text }: SectionLabelProps) => {
    return (
        <span className="uppercase tracking-widest font-bold text-xs text-brand-accent mb-4 block">
            {text}
        </span>
    )
}

export default SectionLabel
