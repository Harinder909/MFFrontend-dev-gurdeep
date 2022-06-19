/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown5} from '../../content/dropdown/Dropdown5'

type Props = {
  className: string
  items?: number
}

const ListsWidget4: React.FC<Props> = ({className}) => {
  const [modifyData, setModifyData] = useState([
    {
      id: 1,
      customer_id: '4472-QREX',
      customer_name: 'Jaiveer Singh',
      data: {
        firstName: 'Jay',
        lastName: 'Singh',
      },
      approved: false,
    },
    {
      id: 2,
      customer_id: '4472-QREX',
      customer_name: 'Manjeet Singh',
      data: {
        firstName: 'Jay',
        lastName: 'Singh',
        mobile: '9876543210',
        dob: '01/01/2000',
      },
      approved: false,
    },
    {
      id: 3,
      customer_id: '4472-QREX',
      customer_name: 'Jaiveer Singh',
      data: {
        firstName: 'Jay',
        lastName: 'Singh',
      },
      approved: false,
    },
    {
      id: 4,
      customer_id: '4472-QREX',
      customer_name: 'Jaiveer Singh',
      data: {
        firstName: 'Jay',
        lastName: 'Singh',
      },
      approved: false,
    },
    {
      id: 5,
      customer_id: '4472-QREX',
      customer_name: 'Jaiveer Singh',
      data: {
        firstName: 'Jay',
        lastName: 'Singh',
      },
      approved: false,
    },
    {
      id: 6,
      customer_id: '4472-QREX',
      customer_name: 'Jaiveer Singh',
      data: {
        firstName: 'Jay',
        lastName: 'Singh',
      },
      approved: false,
    },
  ])

  const [trigger, setTrigger] = useState(false)
  const setTableItem = (id: number, element: string, value: string) => {
    var tempTable = modifyData
    const currentItem: any = tempTable[id - 1]
    currentItem[element] = value
    tempTable[id - 1] = currentItem
    // console.log(currentItem)
    setModifyData(tempTable)
    setTrigger(!trigger)
  }

  useEffect(() => {}, [trigger])
  return (
    <div className='card card-xl-stretch mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-dark'>Non-investment Requests</span>
          <span className='text-muted mt-1 fw-bold fs-7'>SIP start/stop requests</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2'>
        {modifyData.map((item) => (
          <div className='d-flex align-items-center mb-7' key={item.id}>
            {/* begin::Avatar */}
            <div className='symbol symbol-50px me-5'>
              <img src={toAbsoluteUrl('/media/avatars/300-3.jpg')} className='' alt='' />
            </div>
            {/* end::Avatar */}
            {/* begin::Text */}
            <div className='flex-grow-1'>
              <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                {item.customer_name}
              </a>
              <span className='text-muted d-block fw-bold'>{item.customer_id}</span>
            </div>
            {/* end::Text */}
            <button
              type='button'
              className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='top-end'
            >
              <KTSVG path='/media/icons/duotune/general/gen012.svg' className='svg-icon-2' />
            </button>
            <Dropdown5 item={modifyData[item.id - 1]} setModifyData={setModifyData} />
          </div>
        ))}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget4}
