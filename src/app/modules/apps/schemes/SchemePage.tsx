import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {UsersListWrapper} from './users-list/UsersList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Schemes',
    path: '/schemes/schemelist',
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

const SchemePage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='schemelist'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Schemes list</PageTitle>
              <UsersListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/schemes/schemelist' />} />
    </Routes>
  )
}

export default SchemePage
