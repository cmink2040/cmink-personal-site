import { ClientOnly } from './client'
 
export function generateStaticParams() {
  return [{ slug: [''] }, {slug: ['/contact']}]
}
 
export default function Page() {
  return <ClientOnly />
}