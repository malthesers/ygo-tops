import { EventSlug, IEvent } from '@/interfaces/event'
import { notFound } from 'next/navigation'
import TournamentTable from '@/components/tables/TournamentTable'
import SplashBanner from '@/components/SplashBanner'
import eventInfo from '@/app/data/eventInfo'
import getData from '@/services/getData'

export default async function EventTypePage({ params }: { params: { eventType: EventSlug } }) {
  const events = await getData<IEvent[]>(`events/type/${params.eventType}`)

  if (!Object.keys(eventInfo).includes(params.eventType)) {
    notFound()
  }

  return (
    <main>
      <SplashBanner
        splash={eventInfo[params.eventType].splash}
        logo={eventInfo[params.eventType].logo}
        alt='Yu-Gi-Oh! Championship Series'
        clear={params.eventType === 'remote-ycs'}
      />
      {events && <TournamentTable events={events} />}
    </main>
  )
}
