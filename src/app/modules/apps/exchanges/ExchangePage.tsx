import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {UsersListWrapper} from './users-list/UsersList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Exchanges',
    path: '/exchanges/exchangelist',
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

const ExchangePage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='exchangelist'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Exchanges list</PageTitle>
              <UsersListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/exchanges/exchangelist' />} />
    </Routes>
  )
}

export default ExchangePage
