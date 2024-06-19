import { CardType, Type } from '@/interfaces/card'
import * as MonsterTypes from '@/interfaces/card/monster'

export interface ICardsQueryParams {
  id?: string
  name?: string
  description?: string
  cardType?: CardType
  type?: Type
  monsterCardType?: MonsterTypes.MonsterCardType
  attribute?: MonsterTypes.Attribute
  atk?: MonsterTypes.Atk
  atkMin?: number
  atkMax?: number
  def?: MonsterTypes.Def
  defMin?: number
  defMax?: number
  level?: MonsterTypes.Level
  levelMin?: MonsterTypes.Level
  levelMax?: MonsterTypes.Level
  rank?: MonsterTypes.Rank
  rankMin?: MonsterTypes.Rank
  rankMax?: MonsterTypes.Rank
  rating?: MonsterTypes.Rating
  ratingMin?: MonsterTypes.Rating
  ratingMax?: MonsterTypes.Rating
  arrows?: MonsterTypes.LinkArrows
  properties?: MonsterTypes.Property[]
  pendulum?: boolean
  pendulumScale?: MonsterTypes.Scale
  pendulumDescription?: string
}