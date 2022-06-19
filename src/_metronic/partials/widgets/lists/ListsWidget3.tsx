/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

type DueObject = {
  folio_id: string
  due_date: string
}

const ListsWidget3: React.FC<Props> = ({className}) => {
  const colors = ['primary', 'success', 'danger', 'warning', 'info']

  const dueRequests = [
    {
      folio_id: '4472-QREX',
      due_date: '2022-06-15',
    },
    {
      folio_id: '00357-BCLQ',
      due_date: '2022-06-27',
    },
    {
      folio_id: '4432-QREX',
      due_date: '2022-06-17',
    },
    {
      folio_id: '00347-BCLQ',
      due_date: '2022-06-08',
    },
    {
      folio_id: '4462-QREX',
      due_date: '2022-06-12',
    },
    {
      folio_id: '00327-BCLQ',
      due_date: '2022-06-29',
    },
  ]

  function calcDueDate(due_date: any) {
    due_date = new Date(due_date)
    var cur_date: any = new Date()

    var total_seconds = Math.abs(due_date - cur_date) / 1000
    var days_difference = Math.floor(total_seconds / (60 * 60 * 24))

    return days_difference
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bolder text-dark text-decoration-underline'>Upcoming Maturities</h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          {/* <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button> */}
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2'>
        {dueRequests.map((cur: DueObject) => (
          <div className='d-flex align-items-center mb-8' key={cur.folio_id}>
            <span
              className={`bullet bullet-vertical h-40px bg-${
                colors[Math.floor(Math.random() * colors.length)]
              }`}
            />
            <div className='flex-grow-1 px-5'>
              <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
                {cur.folio_id}
              </a>
              <span className='text-muted fw-bold d-block'>
                Due in {calcDueDate(cur.due_date)} days
              </span>
            </div>
            <span className='text-end'>
              <a href='#' className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                <KTSVG path='/media/icons/duotune/arrows/arr064.svg' className='svg-icon-2' />
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export {ListsWidget3}
