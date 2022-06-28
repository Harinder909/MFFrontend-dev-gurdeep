/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'
import {useAuth} from '../../../../app/modules/auth/core/Auth'

export function AsideMenuMain() {
  const intl = useIntl()
  const auth = useAuth()

  return (
    <>
      {auth.currentUser?.roleId === 1 ? (
        <>
          <div className='menu-item'>
            <div className='menu-content pt-8 pb-2'>
              <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Exchanges</span>
            </div>
          </div>
          <AsideMenuItem
            to='exchanges/exchangelist'
            icon='/media/icons/duotune/finance/fin010.svg'
            title='Exchanges'
            fontIcon='bi-layers'
          />
          <AsideMenuItem
            to='/exchanges-type/exchangetypelist'
            icon='/media/icons/duotune/finance/fin010.svg'
            title='Exchanges Type '
            fontIcon='bi-layers'
          />
          <AsideMenuItem
            to='/exchanges-sub-types/exchangesubtypelist'
            icon='/media/icons/duotune/finance/fin010.svg'
            title='Exchanges Sub Type '
            fontIcon='bi-layers'
          />
          <AsideMenuItem
            to='/amc/amclist'
            icon='/media/icons/duotune/finance/fin010.svg'
            title='AMC '
            fontIcon='bi-layers'
          />
          <AsideMenuItem
            to='/schemes/schemelist'
            icon='/media/icons/duotune/finance/fin010.svg'
            title='Schemes '
            fontIcon='bi-layers'
          />
          <div className='menu-item'>
            <div className='menu-content pt-8 pb-2'>
              <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Funds</span>
            </div>
          </div>
          <AsideMenuItem
            to='/create-fund-request'
            icon='/media/icons/duotune/finance/fin010.svg'
            title='Transact'
            fontIcon='bi-layers'
          />
          <div className='menu-item'>
            <div className='menu-content pt-8 pb-2'>
              <span className='menu-section text-muted text-uppercase fs-8 ls-1'>
                Customer Management
              </span>
            </div>
          </div>
          <AsideMenuItem
            to='/user-management/users'
            icon='/media/icons/duotune/general/gen051.svg'
            title='Customer Investments'
            fontIcon='bi-layers'
          />
          <AsideMenuItem
            to='/users/users'
            icon='/media/icons/duotune/general/gen051.svg'
            title='Customer List'
            fontIcon='bi-layers'
          />
         {/*<AsideMenuItem
            to='/users/users'
            icon='/media/icons/duotune/general/gen051.svg'
            title='Activity Ledger'
            fontIcon='bi-layers'
      />*/}
          <div className='menu-item'>
            <div className='menu-content'>
              <div className='separator mx-1 my-4'></div>
            </div>
          </div>{' '}
        </>
      ) : (
        <>
          <div className='menu-item'>
            <div className='menu-content pt-8 pb-2'>
              <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Funds</span>
            </div>
          </div>
          <AsideMenuItem
            to='/create-fund-request'
            icon='/media/icons/duotune/finance/fin010.svg'
            title='Transact'
            fontIcon='bi-layers'
          />
          <AsideMenuItem
            to='/create-fund-request'
            icon='/media/icons/duotune/finance/fin008.svg'
            title='Withdraw'
            fontIcon='bi-layers'
          />
          <div className='menu-item'>
            <div className='menu-content pt-8 pb-2'>
              <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Portfolio</span>
            </div>
          </div>
          <AsideMenuItem
            to='/portfolio'
            icon='/media/icons/duotune/finance/fin006.svg'
            title='My Portfolio'
            fontIcon='bi-layers'
          />
          <AsideMenuItem
            to='/portfolio/report'
            icon='/media/icons/duotune/general/gen028.svg'
            title='Reports'
            fontIcon='bi-layers'
          />
          <div className='menu-item'>
            <div className='menu-content pt-8 pb-2'>
              <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Help</span>
            </div>
          </div>
          <AsideMenuItem
            to='/contact-us'
            icon='/media/icons/duotune/general/gen049.svg'
            title='Contact Us'
            fontIcon='bi-layers'
          />
          <AsideMenuItem
            to='/terms'
            icon='/media/icons/duotune/general/gen005.svg'
            title='Terms & Conditions'
            fontIcon='bi-layers'
          />
          <div className='menu-item'>
            <div className='menu-content'>
              <div className='separator mx-1 my-4'></div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
