import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {AdminDashboardWrapper} from '../pages/dashboard/AdminDashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {CustomerRegister} from '../pages/customerRegister'
import {useAuth} from '../modules/auth/core/Auth'
import {Contact} from '../pages/contact/Contact'

const PrivateRoutes = () => {
  const auth = useAuth()
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const FundRequestWrapper = lazy(
    () => import('../pages/create-fund-request/select-fund/FundRequestWrapper')
  )
  const BuyMF_Wrapper = lazy(
    () => import('../pages/create-fund-request/buy-mutual-fund/BuyMF_Wrapper')
  )
  const CheckoutFundWrapper = lazy(
    () => import('../pages/create-fund-request/checkout-fund/CheckoutWrapper')
  )
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))
  const UsersList = lazy(() => import('../modules/apps/users-list/UsersPage'))
  const Exchanges = lazy(() => import('../modules/apps/exchanges/ExchangePage'))
  const ExchangeType = lazy(() => import('../modules/apps/exchanges-types/ExchangeTypePage'))
  const ExchangeSubType = lazy(
    () => import('../modules/apps/exchanges-sub-types/ExchangeSubTypePage')
  )
  const Amc = lazy(() => import('../modules/apps/amc/AmcPage'))
  const Schemes = lazy(() => import('../modules/apps/schemes/SchemePage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route
          path='dashboard'
          element={
            auth.currentUser?.roleId === 1 ? <AdminDashboardWrapper /> : <DashboardWrapper />
          }
        />
        {/* <Route path='builder' element={<BuilderPageWrapper />} /> */}
        <Route path='menu-test' element={<MenuTestPage />} />
        <Route path='contact-us' element={<Contact />} />
        <Route path='add-customer' element={<CustomerRegister />} />
        <Route path='create-fund-request' element={<FundRequestWrapper />} />
        <Route path='create-fund-request/buy-mutual-fund' element={<BuyMF_Wrapper />} />
        <Route path='create-fund-request/buy-mutual-fund/:id' element={<CheckoutFundWrapper />} />
        {/* Lazy Modules */}
        <Route
          path='profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />

        <Route
          path='exchanges/*'
          element={
            <SuspensedView>
              <Exchanges />
            </SuspensedView>
          }
        />
        <Route
          path='exchanges-type/*'
          element={
            <SuspensedView>
              <ExchangeType />
            </SuspensedView>
          }
        />
        <Route
          path='exchanges-sub-types/*'
          element={
            <SuspensedView>
              <ExchangeSubType />
            </SuspensedView>
          }
        />
        <Route
          path='amc/*'
          element={
            <SuspensedView>
              <Amc />
            </SuspensedView>
          }
        />
        <Route
          path='schemes/*'
          element={
            <SuspensedView>
              <Schemes />
            </SuspensedView>
          }
        />
        <Route
          path='users-list/*'
          element={
            <SuspensedView>
              <UsersList />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
