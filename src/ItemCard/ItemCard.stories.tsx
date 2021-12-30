import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ItemCard } from './ItemCard'

export default {
  title: 'Production/reusable/ItemCard',
  component: ItemCard,
} as ComponentMeta<typeof ItemCard>

export const Default: ComponentStory<typeof ItemCard> = (props) => {
  return <ItemCard {...props} />
}
