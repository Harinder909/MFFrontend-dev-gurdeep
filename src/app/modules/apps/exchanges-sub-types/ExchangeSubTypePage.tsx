import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {UsersListWrapper} from './users-list/UsersList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Exchange Sub Type ',
    path: '/exchanges-sub-types/exchangesubtypelist',
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

const ExchangeSubTypePage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='exchangesubtypelist'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Exchange Sub Type</PageTitle>
              <UsersListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/exchanges-sub-types/exchangesubtypelist' />} />
    </Routes>
  )
}

export default ExchangeSubTypePage
