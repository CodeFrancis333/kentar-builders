function SectionHeading({ eyebrow, title, text, invert = false }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-brandGreen">{eyebrow}</p>
      <h2 className={`font-display text-4xl uppercase tracking-tight md:text-5xl ${invert ? 'text-white' : 'text-brandBlue'}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 text-base leading-7 md:text-lg ${invert ? 'text-white/80' : 'text-brandGray/80'}`}>{text}</p>
      ) : null}
    </div>
  )
}

export default SectionHeading
