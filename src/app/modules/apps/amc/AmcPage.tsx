import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {UsersListWrapper} from './users-list/UsersList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Amc',
    path: '/amc/amclist',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const AmcPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='amclist'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>AMC list</PageTitle>
              <UsersListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/amc/amclist' />} />
    </Routes>
  )
}

export default AmcPage
