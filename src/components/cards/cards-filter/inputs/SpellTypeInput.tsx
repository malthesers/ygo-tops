import OptionsInputTemplate from './templates/OptionsInputTemplate'
import { SpellType } from '@/interfaces/card/spell'
import { spellTypes } from '@/app/data/card-info/spellTypes'

export default function SpellTypeInput() {
  return <OptionsInputTemplate<SpellType> field='type' options={spellTypes} columns={2} />
}
