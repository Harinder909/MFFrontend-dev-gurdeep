/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'

const Step1: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          Choose the type of investment you want
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Please choose carefully according to your needs'
          ></i>
        </h2>
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col-lg-4'>
            <Field type='radio' className='btn-check' name='productType' value='lumpSum' id='lumpsum' />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
              htmlFor='lumpsum'
            >
              <KTSVG path='/media/icons/duotune/finance/fin004.svg' className='svg-icon-3x me-5' />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4'>Lumpsum</span>
              </span>
            </label>
          </div>

          <div className='col-lg-4'>
            <Field type='radio' className='btn-check' name='productType' value='SIP' id='sip' />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
              htmlFor='sip'
            >
              <KTSVG path='/media/icons/duotune/graphs/gra007.svg' className='svg-icon-3x me-5' />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4'>SIP</span>
              </span>
            </label>
          </div>

          <div className='text-danger mt-2'>
            <ErrorMessage name='buyType' />
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step1}
