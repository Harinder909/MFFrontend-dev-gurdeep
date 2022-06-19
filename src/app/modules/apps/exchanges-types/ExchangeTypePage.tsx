import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {UsersListWrapper} from './users-list/UsersList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Exchange Type',
    path: '/exchanges-type/exchangetypelist',
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

const ExchangeTypePage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='exchangetypelist'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Exchanges Type list</PageTitle>
              <UsersListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/exchanges-type/exchangetypelist' />} />
    </Routes>
  )
}

export default ExchangeTypePage
