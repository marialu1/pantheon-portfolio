import { generateChamberMetadata } from '@/lib/metadata'
import AthenaPage from '@/components/scenes/AthenaPage'

export const metadata = generateChamberMetadata('athena')

export default function Page() {
  return <AthenaPage />
}
