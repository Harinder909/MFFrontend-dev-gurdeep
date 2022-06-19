import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

interface Step3Props {
  invAmount: number
}

const Step3: FC<Step3Props> = (invAmount) => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>Terms and Conditions</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='fv-row mb-7'>
        <div className='card text-center shadow-sm rounded'>
          <div className='card-body'>
            <h4 className='card-title mb-3'>Review</h4>
            <hr style={{width: '75%', margin: 'auto'}} className='shadow mb-5' />
            <div className='row'>
              <div className='col-sm-12'>
                <p>Total Payable Amount:</p>
                <h3>Rs. {invAmount.invAmount}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <label className='d-flex flex-stack mb-5 cursor-pointer'>
        <span className='d-flex align-items-center me-2'>
          <span className='symbol symbol-40px me-6'>
            <span className='form-check form-check-custom form-check-solid'>
              <Field className='form-check-input' type='checkbox' name='terms' value='1' />
            </span>
          </span>

          <span className='d-flex flex-column'>
            <span className='fs-6 fw-bold text-gray-400'>
              I accept the&nbsp;
              <a href='#' className='fw-bolder link-primary text-hover-primary fs-6'>
                <u>Terms and Conditions</u>
              </a>
            </span>
          </span>
        </span>
      </label>
    </div>
  )
}

export {Step3}
