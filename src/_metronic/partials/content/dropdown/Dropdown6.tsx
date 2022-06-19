/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'

export const Dropdown6 = ({item, sendReply}: any) => {
  const applyData = (id: number) => {
    const a: any = document.getElementById(`replyTxt${item?.id}`)
    item.replied = true
    sendReply(id, a?.value)
  }

  const resetData = (id: number) => {
    const b: any = document.getElementById(`replyTxt${item?.id}`)
    b.value = ''
  }

  return (
    <div className='menu menu-sub menu-sub-dropdown w-250px w-md-300px' data-kt-menu='true'>
      <div className='px-7 py-5'>
        <div className='fs-5 text-dark fw-bolder'>Edit Options</div>
      </div>

      <div className='separator border-gray-200'></div>

      <div className='px-7 py-5'>
        <div className='mb-2'>
          <label className='form-label fw-bold fs-6'>Customer Name: </label>
          {' ' + item.customer_name}
        </div>
        <div className='mb-2'>
          <label className='form-label fw-bold fs-6'>Customer ID: </label>
          {' ' + item.customer_id}
        </div>
        <div className='mb-4'>
          <label className='form-label fw-bold fs-6'>Query Type: </label>
          {' ' + item.queryHead}
        </div>
        <div className='row mb-4'>
          <label className='form-label fw-bold'>Query:</label>
          <span className='bg-light-warning'>{item.queryBody}</span>
        </div>

        <div className='mb-8'>
          <label className='form-label fw-bold'>Reply:</label>

          <div className='mb-8'>
            <div className='d-flex'>
              <input
                name='replyTxt'
                id={`replyTxt${item?.id}`}
                type='text'
                className='form-control form-control-lg form-control-solid'
                placeholder='Enter Reply'
              />
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-end'>
          <button
            type='reset'
            className='btn btn-sm btn-white btn-active-light-primary me-2'
            data-kt-menu-dismiss='true'
            onClick={() => resetData(item?.id)}
          >
            Reset
          </button>

          <button
            type='submit'
            className='btn btn-sm btn-primary'
            data-kt-menu-dismiss='true'
            onClick={() => applyData(item?.id)}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
