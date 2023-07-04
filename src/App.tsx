import React from 'react'
import { RecoilRoot } from 'recoil' // Ditambahkan
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SideMenuLayout from './layouts/SideMenuLayout'
import TaskSummary from './features/tasks/components/TaskSummary' // Ditambahkan

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <SideMenuLayout />
      </div>
    ),
    children: [
      {
        path: '/',
        element: <TaskSummary />,
      },
      {
        path: 'task-list',
        element: <h1>Task List</h1>,
      },
      {
        path: 'task-progress',
        element: <h1>Task Progress</h1>,
      },
    ],
  },
])

function App(): JSX.Element {
  return (
    // Apit dengan RecoilRoot
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
