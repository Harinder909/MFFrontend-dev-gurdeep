import React, {FC} from 'react'
import {Field, ErrorMessage, useField} from 'formik'

const Step2Lump: FC = () => {
  const [amount] = useField('investmentAmount')
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Enter the amount for your investment</h2>
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='fv-row mb-10'>
            <label className='d-flex align-items-center form-label'>
              <span className='required'>Investment Amount</span>
            </label>

            <Field
              name='investmentAmount'
              className='form-control form-control-lg form-control-solid'
              type='number'
            />
            <div className='text-danger mt-2'>
              <ErrorMessage name='investmentAmount' />
            </div>

            <div className='form-text'>
              Minimum Amount - Rs. 5000, Brokerage:{' '}
              <b>Rs. {amount.value ? 0.005 * amount.value : '-'}</b>
            </div>
          </div>
          {/* <div className='fv-row mb-10'>
            <label className='form-label required'>Lock-in Period</label>

            <Field
              as='select'
              name='lockInPeroid'
              className='form-select form-select-lg form-select-solid'
            >
              <option></option>
              <option value='6'>6 months</option>
              <option value='12'>1 year</option>
              <option value='24'>2 years</option>
              <option value='36'>3 years</option>
              <option value='60'>5 years</option>
            </Field>
            <div className='text-danger mt-2'>
              <ErrorMessage name='lockInPeroid' />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export {Step2Lump}
