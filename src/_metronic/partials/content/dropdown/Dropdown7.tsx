/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'

export const Dropdown7 = ({item, setModifyData}: any) => {
  const applyData = (id: number) => {
    const a: any = document.getElementById(`reject_check${item?.id}`)
    a.checked && resetData(id)
    const b: any = document.getElementById(`approve_check${item?.id}`)
    const c: any = item?.data
    // setModifyData(id, 'approve_no', b?.value)
  }

  const resetData = (id: number) => {
    const b: any = document.getElementById(`approve_check${item?.id}`)
    b.checked = false
    b.disabled = false
    const c: any = document.getElementById(`reject_check${item?.id}`)
    c.checked = false
    c.disabled = false
  }

  const [approveCheck, setApproveCheck] = useState(false)
  const [rejectCheck, setRejectCheck] = useState(false)

  function mapObject(obj: Object, fn: any) {
    return Object.entries(obj).map(fn)
  }

  return (
    <div className='menu menu-sub menu-sub-dropdown w-250px w-md-300px' data-kt-menu='true'>
      <div className='px-7 py-5'>
        <div className='fs-5 text-dark fw-bolder'>Edit Options</div>
      </div>

      <div className='separator border-gray-200'></div>

      <div className='px-7 py-5'>
        <div className='mb-8'>
          <label className='form-label fw-bold'>New Data:</label>
          {mapObject(item?.data, ([key, value]: any) => {
            return (
              <div>
                <div className='d-flex align-items-center bg-light-success'>
                  <div className='flex-1'>
                    <span>
                      {key}: {value}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className='mb-8'>
          <label className='form-label fw-bold'>Approval:</label>

          <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid d-flex flex-stack'>
            <div>
              <input
                className='form-check-input'
                type='checkbox'
                name='approve_check'
                id={`approve_check${item?.id}`}
                defaultChecked={false}
                disabled={rejectCheck}
                onChange={() => setApproveCheck(!approveCheck)}
              />
              <label className='form-check-label'>Approve</label>
            </div>

            <div>
              <input
                className='form-check-input'
                type='checkbox'
                name='reject_check'
                id={`reject_check${item?.id}`}
                disabled={approveCheck}
                defaultChecked={false}
                onChange={() => setRejectCheck(!rejectCheck)}
              />
              <label className='form-check-label'>Reject</label>
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
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}
