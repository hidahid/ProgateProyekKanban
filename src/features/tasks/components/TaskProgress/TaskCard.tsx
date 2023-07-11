import React from 'react'
// Hapus import {useRecoilState} from 'recoil'
// Hapus import {tasksState} from '../../TaskAtoms'
// import { useRecoilState } from 'recoil'
// import { tasksState } from '../../TaskAtoms'
import type { Task, CSSProperties } from '../../../../types'
import { TASK_PROGRESS_ID } from '../../../../constants/app'
import { useTasksAction } from '../../hooks/Tasks' // Ditambahkan

interface TaskCardProps {
  task: Task
}

// Definisikan function ini
const getIconStyle = (progressOrder: number): React.CSSProperties => {
  const color: '#55C89F' | '#C5C5C5' =
    progressOrder === TASK_PROGRESS_ID.COMPLETED ? '#55C89F' : '#C5C5C5'

  const cursor: 'default' | 'pointer' =
    progressOrder === TASK_PROGRESS_ID.COMPLETED ? 'default' : 'pointer'

  return {
    color,
    cursor,
    fontSize: '28px',
  }
}

const getArrowPositionStyle = (progressOrder: number): React.CSSProperties => {
  const justifyContentValue: 'flex-end' | 'space-between' =
    // Raw data telah digantikan
    progressOrder === TASK_PROGRESS_ID.NOT_STARTED ? 'flex-end' : 'space-between'
  return {
    display: 'flex',
    justifyContent: justifyContentValue,
  }
}

const TaskCard = ({ task }: TaskCardProps): JSX.Element => {
  // Hapus const [tasks, setTasks] = useRecoilState<Task[]>(tasksState)
  // Hapus const completeTask = (taskId: number): void => {...}

  // const [tasks, setTasks] = useRecoilState<Task[]>(tasksState)

  // const completeTask = (taskId: number): void => {
  //   const updatedTasks: Task[] = tasks.map((task) =>
  //     task.id === taskId ? { ...task, progressOrder: TASK_PROGRESS_ID.COMPLETED } : task
  //   )
  //   setTasks(updatedTasks)
  // }

  const { completeTask } = useTasksAction() // Ditambahkan

  return (
    <div style={styles.taskCard}>
      <div style={styles.taskIcons}>
        {/* Diperbarui */}
        <div
          className="material-icons"
          style={getIconStyle(task.progressOrder)}
          onClick={(): void => {
            completeTask(task.id) // Ditambahkan
          }}
        >
          check_circle
        </div>
        <div className="material-icons" style={styles.menuIcon}>
          more_vert
        </div>
      </div>
      <p style={styles.taskTitle}>{task.title}</p>
      <div>
        <p>{task.detail}</p>
      </div>
      <div>
        <p>Due on {task.dueDate}</p>
      </div>
      <div style={getArrowPositionStyle(task.progressOrder)}>
        {/* Raw data telah digantikan */}
        {task.progressOrder !== TASK_PROGRESS_ID.NOT_STARTED && (
          <button className="material-icons">chevron_left</button>
        )}
        {task.progressOrder !== TASK_PROGRESS_ID.COMPLETED && (
          <button className="material-icons">chevron_right</button>
        )}
      </div>
    </div>
  )
}

const styles: CSSProperties = {
  taskCard: {
    backgroundColor: '#C7EFD0',
    borderRadius: '12px',
    padding: '24px',
    margin: '12px 0',
    fontSize: '20px',
    overflowWrap: 'anywhere',
    position: 'relative',
  },
  taskIcons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuIcon: {
    cursor: 'pointer',
  },
  taskTitle: {
    fontSize: '30px',
  },
  arrowsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}

export default TaskCard
