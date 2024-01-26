import Column from './column'
import NewTodoDialog from './todo-dialog'

export default function Columns() {
  return (
    <div className=''>
    <NewTodoDialog/>
    <section className='flex gap-6 lg:gap-12 '>
      <Column title='Todo' status='TODO' />
      <Column title='Progress' status='IN_PROGRESS' />
      <Column title='Done' status='DONE' />
    </section>
    </div>
  )
}
