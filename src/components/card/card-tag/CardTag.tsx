import { ICard } from '@/interfaces/card'
import Image from 'next/image'
import Level from '~/images/frame-assets/level.webp'
import CardTagRanks from './CardTagRanks'

interface CardTagProps {
  card: ICard
}

export default function CardTag({ card }: CardTagProps) {
  return (
    <div className='w-full h-[4.5%] mt-[17.6%] mx-auto'>
      {/* {(card.cardType === 'Spell' || card.cardType === 'Trap') && <p className='w-[79%]'>[{card.cardType} Card]</p>} */}
      {card.cardType === 'Monster' && card.monsterCardType === 'Xyz' && <CardTagRanks rank={card.rank} />}
    </div>
  )
}
