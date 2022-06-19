/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'

export const Dropdown4 = ({item, setTableItem}: any) => {
  const applyData = (id: number) => {
    const a: any = document.getElementById(`status${id}`)
    setTableItem(id, 'status', a?.value)
    const b: any = document.getElementById(`folio_no${id}`)
    if (b) {
      setTableItem(id, 'folio_no', b?.value)
    }
  }

  const resetData = (id: number) => {
    const a: any = document.getElementById(`status${id}`)
    a.value = item?.status
    const b: any = document.getElementById(`folio_no${id}`)
    b.value = item?.folio_no
    const c: any = document.getElementById(`folio_check${id}`)
    c.checked = false
  }

  const [folioCheck, setFolioCheck] = useState(false)

  return (
    <div className='menu menu-sub menu-sub-dropdown w-250px w-md-300px' data-kt-menu='true'>
      <div className='px-7 py-5'>
        <div className='fs-5 text-dark fw-bolder'>Edit Options</div>
      </div>

      <div className='separator border-gray-200'></div>

      <div className='px-7 py-5'>
        <div className='mb-8'>
          <label className='form-label fw-bold'>Status:</label>
          <div>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              name='status'
              id={`status${item?.id}`}
              defaultValue={item?.status}
            >
              <option></option>
              <option value='Submitted'>Submitted</option>
              <option value='In Process'>In Process</option>
              <option value='Approved'>Approved</option>
              <option value='Rejected'>Rejected</option>
            </select>
          </div>
        </div>

        <div className='mb-8'>
          <label className='form-label fw-bold'>Edit Portfolio:</label>

          <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
            <input
              className='form-check-input'
              type='checkbox'
              name='folio_check'
              id={`folio_check${item?.id}`}
              defaultChecked={false}
              onChange={() => setFolioCheck(!folioCheck)}
            />
            <label className='form-check-label'>Enabled</label>
          </div>
        </div>

        {folioCheck === true ? (
          <>
            <div className='mb-8'>
              <label className='form-label fw-bold'>Portfolio Number:</label>

              <div className='d-flex'>
                <input
                  name='folio_no'
                  id={`folio_no${item?.id}`}
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Enter Portfolio Number'
                />
              </div>
            </div>
          </>
        ) : (
          ``
        )}
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
