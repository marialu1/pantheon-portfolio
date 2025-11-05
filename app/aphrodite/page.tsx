import { generateChamberMetadata } from '@/lib/metadata'
import AphroditePage from '@/components/scenes/AphroditePage'

export const metadata = generateChamberMetadata('aphrodite')

export default function Page() {
  return <AphroditePage />
}
