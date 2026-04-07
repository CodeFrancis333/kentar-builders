function TeamCard({ member }) {
  return (
    <article className="rounded-[2rem] bg-white p-8 shadow-panel">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brandGreen">{member.role}</p>
      <h3 className="mt-3 font-display text-3xl uppercase text-brandBlue">{member.name}</h3>
      <p className="mt-4 leading-7 text-brandGray/80">{member.body}</p>
    </article>
  )
}

export default TeamCard
