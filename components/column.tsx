'use client'

import { useTask } from '@/lib/store'
import Task from './task'
import { useMemo } from 'react'

export default function Column({
  title,
  status
}: {
  title: string
  status: string
}) {
    
  const tasks = useTask(state=>state.tasks)
  const filteredTasks = useMemo(()=>tasks.filter(task => task.status === status),[tasks,status])

  return (
    <section className='flex-1 h-[500px]'>
      <h2 className='ml-1 font-serif text-lg font-semibold'>{title}</h2>

      <div className='mt-3.5 h-full w-full flex-1 rounded-xl bg-gray-700/50 p-4'>
        <div className='flex flex-col gap-4'>
          {filteredTasks.map(task => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      </div>
    </section>
  )
}
