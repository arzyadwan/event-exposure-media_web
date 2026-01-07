import { type SchemaTypeDefinition } from 'sanity'
import { category } from './category'
import { service } from './service'
import { portfolio } from './portfolio'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, service, portfolio],
}