import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Step4: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>Select a payment method</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='accordion shadow-sm' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              Mandate
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <label className='d-flex flex-stack mb-5 cursor-pointer'>
                <span className='d-flex align-items-center me-2'>
                  <span className='symbol symbol-40px me-6'>
                    <span className='form-check form-check-custom form-check-solid'>
                      <Field
                        className='form-check-input'
                        type='radio'
                        name='mandate'
                        value='true'
                      />
                    </span>
                  </span>

                  <span className='d-flex flex-column'>
                    <span className='fs-6 fw-bold text-dark-400'>
                      State Bank of India -&nbsp;
                      <a href='#' className='fw-bolder link-primary text-hover-primary fs-6'>
                        X4530
                      </a>
                    </span>
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingThree'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              NEFT/RTGS
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <div className='fv-row mb-10'>
                <label className='d-flex align-items-center form-label'>
                  <span className='required'>Account Number</span>
                </label>

                <Field
                  name='accountNum'
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                />
                <div className='text-danger mt-2'>
                  <ErrorMessage name='accountNum' />
                </div>
              </div>

              <div className='fv-row mb-10'>
                <label className='d-flex align-items-center form-label'>
                  <span className='required'>IFSC Code</span>
                </label>

                <Field
                  name='ifsc'
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                />
                <div className='text-danger mt-2'>
                  <ErrorMessage name='ifsc' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step4}
