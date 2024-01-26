import Columns from '@/components/columns'

export default function Home() {
  return (
    <section className='flex  bg-gradient-to-br from-gray-700 to-gray-900 text-white h-screen'>
      <div className='mx-auto w-full max-w-7xl px-6 h-full py-6'>
        <Columns />
      </div>
    </section>
  )
}
