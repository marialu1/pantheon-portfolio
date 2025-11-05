import { generateChamberMetadata } from '@/lib/metadata'
import ApolloPage from '@/components/scenes/ApolloPage'

export const metadata = generateChamberMetadata('apollo')

export default function Page() {
  return <ApolloPage />
}
