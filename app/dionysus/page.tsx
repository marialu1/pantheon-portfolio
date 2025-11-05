import { generateChamberMetadata } from '@/lib/metadata'
import DionysusPage from '@/components/scenes/DionysusPage'

export const metadata = generateChamberMetadata('dionysus')

export default function Page() {
  return <DionysusPage />
}
