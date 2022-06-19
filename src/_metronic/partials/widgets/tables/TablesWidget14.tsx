/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown4} from '../../content/dropdown/Dropdown4'

type Props = {
  className: string
}

const TablesWidget14: React.FC<Props> = ({className}) => {
  const statusColor: any = {
    Submitted: 'primary',
    'In Process': 'warning',
    Approved: 'success',
    Rejected: 'danger',
  }

  const [tableData, setTableData] = useState([
    {
      id: 1,
      customer_id: '4472-QREX',
      scheme_name: 'SBI-GOLD',
      product_type: 'Lumpsum',
      amount: '2,00,000',
      lock_in_period: '12M',
      due_date: '2022-06-15',
      nav: '12.0545',
      status: 'Submitted',
      folio_no: '123',
    },
    {
      id: 2,
      customer_id: '00357-BCLQ',
      scheme_name: 'SBI-GOLD',
      product_type: 'Lumpsum',
      amount: '2,00,000',
      lock_in_period: '6M',
      due_date: '2022-06-27',
      nav: '12.0545',
      status: 'Approved',
      folio_no: '',
    },
    {
      id: 3,
      customer_id: '4432-QREX',
      scheme_name: 'SBI-GOLD',
      product_type: 'Lumpsum',
      amount: '2,00,000',
      lock_in_period: '48M',
      due_date: '2022-06-17',
      nav: '12.0545',
      status: 'In Process',
      folio_no: '239',
    },
    {
      id: 4,
      customer_id: '00347-BCLQ',
      scheme_name: 'SBI-GOLD',
      product_type: 'Lumpsum',
      amount: '2,00,000',
      lock_in_period: '12M',
      due_date: '2022-06-08',
      nav: '12.0545',
      status: 'Approved',
      folio_no: '235',
    },
    {
      id: 5,
      customer_id: '4462-QREX',
      scheme_name: 'SBI-GOLD',
      product_type: 'Lumpsum',
      amount: '2,00,000',
      lock_in_period: '36M',
      due_date: '2022-06-12',
      nav: '12.0545',
      status: 'Rejected',
      folio_no: '',
    },
  ])

  const [trigger, setTrigger] = useState(false)
  const setTableItem = (id: number, element: string, value: string) => {
    var tempTable = tableData
    const currentItem: any = tempTable[id - 1]
    currentItem[element] = value
    tempTable[id - 1] = currentItem
    // console.log(currentItem)
    setTableData(tempTable)
    setTrigger(!trigger)
  }

  useEffect(() => {}, [trigger])

  return (
    <div className={`card ${className}`}>
      <script></script>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>My Recent Transactions</span>
          <span className='text-muted mt-1 fw-bold fs-7'>
            {tableData.length} recent investments
          </span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-13-check'
                    />
                  </div>
                </th>
                <th className='min-w-150px'>Folio No.</th>
                <th className='min-w-140px'>Scheme</th>
                <th className='min-w-120px'>Amount (Rs.)</th>
                <th className='min-w-120px'>Date</th>
                <th className='min-w-120px'>NAV (Rs.)</th>
                <th className='min-w-120px'>Status</th>
                {/* <th className='min-w-100px text-end'>Actions</th> */}
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody className='overflow-auto'>
              {tableData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                      <input
                        className='form-check-input widget-13-check'
                        type='checkbox'
                        value='1'
                      />
                    </div>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                      {item.folio_no != '' ? item.folio_no : '-'}
                    </a>
                  </td>
                  <td>
                    <a
                      href='#'
                      className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'
                    >
                      {item.scheme_name}
                    </a>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                      {item.product_type}
                    </span>
                  </td>
                  <td>
                    <a
                      href='#'
                      className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'
                    >
                      {item.amount}
                    </a>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                      Lock-in: {item.lock_in_period}
                    </span>
                  </td>
                  <td>
                    <a
                      href='#'
                      className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'
                    >
                      {item.due_date}
                    </a>
                  </td>
                  <td className='text-dark fw-bolder text-hover-primary fs-6'>{item.nav}</td>
                  <td id={`row` + String(item.id)}>
                    <span className={`badge badge-light-${statusColor[item.status]}`}>
                      {item.status}
                    </span>
                  </td>
                  {/* <td className='text-end'>
                    <button
                      type='button'
                      className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
                      data-kt-menu-trigger='click'
                      data-kt-menu-placement='bottom-end'
                      data-kt-menu-flip='top-end'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </button>
                    <Dropdown4 item={tableData[item.id - 1]} setTableItem={setTableItem} />

                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm ms-2'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                  </td> */}
                </tr>
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesWidget14}
