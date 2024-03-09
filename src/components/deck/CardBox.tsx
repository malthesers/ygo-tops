import { IDeckCard } from '@/interfaces/deck'
import CardRow from './CardRow'

interface CardBoxProps {
  title: string
  cards: IDeckCard[]
}

export default function CardBox({ title, cards }: CardBoxProps) {
  const cardCount = cards.reduce((counter, currCard) => counter + currCard.count, 0)

  return (
    <div className='bg-sky-900 p-4'>
      <p className='flex flex-row gap-2 text-xl font-semibold'>
        <span>{title}</span>
        <span>({cardCount})</span>
      </p>
      <div>
        {cards.map((card) => (
          <CardRow key={card.name} card={card} />
        ))}
      </div>
    </div>
  )
}
