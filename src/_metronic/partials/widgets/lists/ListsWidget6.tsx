/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown6} from '../../content/dropdown/Dropdown6'

type Props = {
  className: string
}

const ListsWidget6: React.FC<Props> = ({className}) => {
  const [queryData, setQueryData] = useState([
    {
      id: 1,
      customer_id: '4472-QREX',
      customer_name: 'Jaiveer Singh',
      queryHead: 'Payment Details',
      queryBody: 'I wanted to ask if there is any other option for payment withdrawl',
      reply: '',
      replied: false,
    },
    {
      id: 2,
      customer_id: '4472-QREX',
      customer_name: 'Manjeet Singh',
      queryHead: 'Payment Details',
      queryBody: 'I wanted to ask if there is any other option for payment withdrawl',
      reply: '',
      replied: false,
    },
    {
      id: 3,
      customer_id: '4472-QREX',
      customer_name: 'Jaiveer Singh',
      queryHead: 'Payment Details',
      queryBody: 'I wanted to ask if there is any other option for payment withdrawl',
      reply: '',
      replied: false,
    },
    {
      id: 4,
      customer_id: '4472-QREX',
      customer_name: 'Jaiveer Singh',
      queryHead: 'Payment Details',
      queryBody: 'I wanted to ask if there is any other option for payment withdrawl',
      reply: '',
      replied: false,
    },
    {
      id: 5,
      customer_id: '4472-QREX',
      customer_name: 'Jaiveer Singh',
      queryHead: 'Payment Details',
      queryBody: 'I wanted to ask if there is any other option for payment withdrawl',
      reply: '',
      replied: false,
    },
  ])

  const [trigger, setTrigger] = useState(false)
  const sendReply = (id: number, value: string) => {
    var tempTable = queryData
    const currentItem: any = tempTable[id - 1]
    currentItem['reply'] = value
    tempTable[id - 1] = currentItem
    console.log(currentItem)
    setQueryData(tempTable)
    setTrigger(!trigger)
  }

  useEffect(() => {}, [trigger])

  return (
    <div className='card card-xl-stretch mb-5 mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bolder text-dark'>Customer Queries</h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-0'>
        {queryData.map((item) => (
          <div className='d-flex align-items-center bg-light-warning rounded p-5 mb-7'>
            {/* begin::Icon */}
            <span className='svg-icon svg-icon-warning me-5'>
              <KTSVG path='/media/icons/duotune/abstract/abs037.svg' className='svg-icon-1' />
            </span>
            {/* end::Icon */}
            {/* begin::Title */}
            <div className='flex-grow-1 me-2 w-75'>
              <a href='#' className='fw-bolder text-gray-800 text-hover-primary fs-6'>
                {item.queryHead}
              </a>
              <div className='col-6'>
                <span className='text-muted fw-bold d-block text-truncate'>{item.queryBody}</span>
              </div>
            </div>
            {/* end::Title */}
            <div>
              <button
                type='button'
                className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary '
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
              >
                <KTSVG path='/media/icons/duotune/general/gen023.svg' className='svg-icon-2' />
              </button>
              <Dropdown6 item={queryData[item.id - 1]} sendReply={sendReply} />
            </div>
          </div>
        ))}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget6}
