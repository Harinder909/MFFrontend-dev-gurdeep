import React, {FC} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'

const Step2: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Select the Action you want to perform</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          Jaswant Singh
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            (UCC: 534613)
          </a>
          .
        </div>
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col-lg-6'>
            <Field
              type='radio'
              className='btn-check'
              name='action'
              value='purchase'
              id='purchase'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
              htmlFor='purchase'
            >
              <KTSVG path='/media/icons/duotune/finance/fin008.svg' className='svg-icon-3x me-5' />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4'>Purchase/Buy/SIP</span>
              </span>
            </label>
          </div>

          <div className='col-lg-6'>
            <Field
              type='radio'
              className='btn-check'
              name='action'
              value='redeem'
              id='redeem'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
              htmlFor='redeem'
            >
              <KTSVG path='/media/icons/duotune/finance/fin007.svg' className='svg-icon-3x me-5' />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4'>Redeem/Sell/SWP</span>
              </span>
            </label>
          </div>

          <div className='text-danger mt-2'>
            <ErrorMessage name='action' />
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step2}
