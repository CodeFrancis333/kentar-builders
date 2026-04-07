import FieldOperations from '../components/team/FieldOperations'
import TeamCard from '../components/team/TeamCard'
import TeamIntro from '../components/team/TeamIntro'
import { teamContent } from '../data/team'

function TeamPage() {
  return (
    <section id="team" className="bg-[#f5f7fb] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <TeamIntro />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6">
            {teamContent.members.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
          <FieldOperations />
        </div>
      </div>
    </section>
  )
}

export default TeamPage
