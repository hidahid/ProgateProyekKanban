import { useRecoilValue } from 'recoil'
import {
  notStartedTasksSelector,
  inProgressTasksSelector,
  waitingTasksSelector,
  completedTasksSelector,
} from '../../TaskSelectors'
import TaskColumn from './TaskColumn'
import type { Task, CSSProperties } from '../../../../types'
import { TASK_PROGRESS_STATUS, TASK_PROGRESS_ID } from '../../../../constants/app'

const TaskProgress = (): JSX.Element => {
  const notStartedTasks: Task[] = useRecoilValue(notStartedTasksSelector)

  const inProgressTasks: Task[] = useRecoilValue(inProgressTasksSelector)

  const waitingTasks: Task[] = useRecoilValue(waitingTasksSelector)

  const completedTasks: Task[] = useRecoilValue(completedTasksSelector)

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Task Progress</h1>
      <div style={styles.taskCategories}>
        {/* columnTitle mengambil value dari tiap key dalam TASK_PROGRESS_STATUS */}
        {/* progressId disesuaikan menurut value dari tiap key TASK_PROGRESS_ID */}
        <TaskColumn
          columnTitle={TASK_PROGRESS_STATUS.NOT_STARTED}
          progressId={TASK_PROGRESS_ID.NOT_STARTED}
          tasks={notStartedTasks}
        />
        <TaskColumn
          columnTitle={TASK_PROGRESS_STATUS.IN_PROGRESS}
          progressId={TASK_PROGRESS_ID.IN_PROGRESS}
          tasks={inProgressTasks}
        />
        <TaskColumn
          columnTitle={TASK_PROGRESS_STATUS.WAITING}
          progressId={TASK_PROGRESS_ID.WAITING}
          tasks={waitingTasks}
        />
        <TaskColumn
          columnTitle={TASK_PROGRESS_STATUS.COMPLETED}
          progressId={TASK_PROGRESS_ID.COMPLETED}
          tasks={completedTasks}
        />
      </div>
    </div>
  )
}

const styles: CSSProperties = {
  container: {
    padding: '20px',
  },
  heading: {
    color: '#55C89F',
    marginBottom: '60px',
  },
  taskCategories: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}

export default TaskProgress

// import { useRecoilState, useRecoilValue } from 'recoil'
// import {
//   notStartedTasksSelector,
//   inProgressTasksSelector,
//   waitingTasksSelector,
//   completedTasksSelector,
// } from '../../TaskSelectors'
// import TaskColumn from './TaskColumn'
// import type { Task, CSSProperties } from '../../../../types'
// import { TASK_PROGRESS_STATUS, TASK_PROGRESS_ID, TASK_MODAL_TYPE } from '../../../../constants/app'
// import { useState } from 'react'
// import TaskModal from '../shared/TaskModal'
// import TaskMenu from '../shared/TaskMenu'

// const TaskProgress = (): JSX.Element => {
//   const notStartedTasks: Task[] = useRecoilValue(notStartedTasksSelector)

//   const inProgressTasks: Task[] = useRecoilValue(inProgressTasksSelector)

//   const waitingTasks: Task[] = useRecoilValue(waitingTasksSelector)

//   const completedTasks: Task[] = useRecoilValue(completedTasksSelector)

//   // modal state
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
//   const [isModalForm, setIsModalForm] = useState<boolean>(false)
//   const [type, setType] = useState<string>(TASK_MODAL_TYPE.ADD)

//   const [progg, setProgg] = useState<number>(0)
//   const [task, setTask] = useState<Task>({} as Task)

//   const showAdd = (v: number) => {
//     setTask({} as Task)
//     setIsModalForm(true)
//     setProgg(v)
//     setType(TASK_MODAL_TYPE.ADD)
//     setIsMenuOpen(false)
//   }

//   const showMenu = (v: Task) => {
//     setIsMenuOpen(true)
//     setIsModalForm(false)
//     setTask(v)
//   }

//   const showEdit = (v: Task) => {
//     setIsModalForm(true)
//     setTask(v)
//     setType(TASK_MODAL_TYPE.EDIT)
//     setIsMenuOpen(false)
//   }

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Task Progress</h1>
//       <div style={styles.taskCategories}>
//         {/* columnTitle mengambil value dari tiap key dalam TASK_PROGRESS_STATUS */}
//         {/* progressId disesuaikan menurut value dari tiap key TASK_PROGRESS_ID */}
//         <TaskColumn
//           columnTitle={TASK_PROGRESS_STATUS.NOT_STARTED}
//           progressId={TASK_PROGRESS_ID.NOT_STARTED}
//           tasks={notStartedTasks}
//           showAdd={showAdd}
//           showMenu={showMenu}
//           showEdit={showEdit}
//           isMenuOpen={isMenuOpen}
//           setIsMenuOpen={setIsMenuOpen}
//         />
//         <TaskColumn
//           columnTitle={TASK_PROGRESS_STATUS.IN_PROGRESS}
//           progressId={TASK_PROGRESS_ID.IN_PROGRESS}
//           tasks={inProgressTasks}
//           showAdd={showAdd}
//           showMenu={showMenu}
//           showEdit={showEdit}
//           isMenuOpen={isMenuOpen}
//           setIsMenuOpen={setIsMenuOpen}
//         />
//         <TaskColumn
//           columnTitle={TASK_PROGRESS_STATUS.WAITING}
//           progressId={TASK_PROGRESS_ID.WAITING}
//           tasks={waitingTasks}
//           showAdd={showAdd}
//           showMenu={showMenu}
//           showEdit={showEdit}
//           isMenuOpen={isMenuOpen}
//           setIsMenuOpen={setIsMenuOpen}
//         />
//         <TaskColumn
//           columnTitle={TASK_PROGRESS_STATUS.COMPLETED}
//           progressId={TASK_PROGRESS_ID.COMPLETED}
//           tasks={completedTasks}
//           showAdd={showAdd}
//           showMenu={showMenu}
//           showEdit={showEdit}
//           isMenuOpen={isMenuOpen}
//           setIsMenuOpen={setIsMenuOpen}
//         />

//         {/* {isMenuOpen && <TaskMenu setIsMenuOpen={setIsMenuOpen} task={task} showEdit={showEdit} />} */}

//         {isModalForm && (
//           <TaskModal
//             headingTitle={type === TASK_MODAL_TYPE.ADD ? 'Add your task' : 'Edit your task'}
//             type={type}
//             setIsModalOpen={setIsModalForm}
//             defaultProgressOrder={progg}
//             selectedData={task}
//           />
//         )}
//       </div>
//     </div>
//   )
// }

// const styles: CSSProperties = {
//   container: {
//     padding: '20px',
//   },
//   heading: {
//     color: '#55C89F',
//     marginBottom: '60px',
//   },
//   taskCategories: {
//     display: 'flex',
//     justifyContent: 'space-around',
//   },
// }

// export default TaskProgress
