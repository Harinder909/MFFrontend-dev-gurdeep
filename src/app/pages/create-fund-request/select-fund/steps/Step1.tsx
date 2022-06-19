/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'

const Step1: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          Choose the type of fund for your request
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Please choose carefully according to your needs'
          ></i>
        </h2>

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
          <div className='col-lg-4'>
            <Field
              type='radio'
              className='btn-check'
              name='fundType'
              value='mutual_funds'
              id='mutual_funds'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
              htmlFor='mutual_funds'
            >
              <KTSVG
                path='/media/icons/duotune/finance/fin001.svg'
                className='svg-icon-3x me-5'
              />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4'>Mutual Fund's</span>
              </span>
            </label>
          </div>

          <div className='col-lg-4'>
            <Field
              type='radio'
              className='btn-check'
              name='fundType'
              value='stocks_and_etfs'
              id='stocks_and_etfs'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
              htmlFor='stocks_and_etfs'
            >
              <KTSVG
                path='/media/icons/duotune/finance/fin003.svg'
                className='svg-icon-3x me-5'
              />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4'>Stocks and ETF's</span>
              </span>
            </label>
          </div>

          <div className='col-lg-4'>
            <Field
              type='radio'
              className='btn-check'
              name='fundType'
              value='loans'
              id='loans'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
              htmlFor='loans'
            >
              <KTSVG
                path='/media/icons/duotune/finance/fin006.svg'
                className='svg-icon-3x me-5'
              />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4'>Loan's</span>
              </span>
            </label>
          </div>

          <div className='text-danger mt-2'>
            <ErrorMessage name='fundType' />
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step1}
