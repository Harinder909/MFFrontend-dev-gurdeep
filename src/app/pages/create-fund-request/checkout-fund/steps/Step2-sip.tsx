import React, {FC, useState} from 'react'
import {Field, ErrorMessage, useField} from 'formik'

interface Step2Props {
  brokerage: number
}

const Step2Sip: FC<Step2Props> = (brokerage) => {
  const [amount] = useField('investmentAmount')
  let [sipStartDate] = useField('startDate')
  let [sipStartMonth] = useField('sipStartMonth')
  let [numOfInstallments] = useField('numOfInstallments')

  const brokAmount = 0.005 * amount.value
  const totalAmount = amount.value + brokAmount

  const date = new Date()
  const getNextMonth = (date: any) => {
    date.setMonth(date.getMonth() + 1)
    return [date.getMonth(), date.toLocaleString('default', {month: 'long'})]
  }
  const months: any[][][] = []
  let sipEndDate: any = new Date()
  const setSipEndDate = () => {
    sipEndDate.setMonth(sipEndDate.getMonth() + numOfInstallments.value)
  }

  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>SIP Details</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Bank Account</label>

        <Field
          as='select'
          name='paymentMethodId'
          className='form-select form-select-lg form-select-solid'
        >
          <option value=''>Select Bank</option>
          <option value='sbi4530'>State Bank of India - X4530</option>
        </Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='paymentMethodId' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Frequency</label>

        <Field
          as='select'
          name='frequency'
          className='form-select form-select-lg form-select-solid'
        >
          <option></option>
          <option value='M'>Monthly</option>
          <option value='Q'>Quarterly</option>
          <option value='H'>Half-Yearly</option>
          <option value='Y'>Yearly</option>
        </Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='frequency' />
        </div>
      </div>

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

        <div className='form-text'>Minimum Amount - Rs. 500 </div>
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

      <div className='card text-center shadow-sm rounded'>
        <div className='card-body'>
          <h4 className='card-title mb-3'>Review</h4>
          <hr style={{width: '75%', margin: 'auto'}} className='shadow mb-10' />
          <div className='row'>
            <div className='col-sm-4'>
              <h6>Brokerage</h6>
              <p>Rs. {brokAmount}</p>
            </div>
            <div className='col-sm-4'>
              <h6>Installment Amount</h6>
              <p>Rs. {totalAmount}</p>
            </div>
            <div className='col-sm-4'>
              <h6>Installment Range</h6>
              <p>6 - 100 months</p>
            </div>
          </div>
        </div>
        <div className='card-footer text-muted'>
          <div className='fv-row mb-5'>
            <label className='d-flex align-items-center form-label'>
              <span className='required'>Number of installments</span>
            </label>

            <Field
              name='numOfInstallments'
              className='form-control form-control-lg form-control-solid'
              type='number'
            />
            <div className='text-danger mt-2'>
              <ErrorMessage name='numOfInstallments' />
            </div>
          </div>

          <div className='row mb-10'>
            <div className='col-md-6'>
              <label className='form-label required'>SIP Start Month</label>

              <Field
                as='select'
                name='sipStartMonth'
                className='form-select form-select-lg form-select-solid'
              >
                <option></option>
                {(months[0] = getNextMonth(date))}
                {(months[1] = getNextMonth(date))}
                {(months[2] = getNextMonth(date))}
                <option value={months[0][0]}>{months[0][1]}</option>
                <option value={months[1][0]}>{months[1][1]}</option>
                <option value={months[2][0]}>{months[2][1]}</option>
              </Field>
              <div className='text-danger mt-2'>
                <ErrorMessage name='sipStartMonth' />
              </div>
            </div>
            <div className='col-md-6'>
              <label className='form-label required'>SIP Start Date</label>

              <Field
                name='startDate'
                className='form-control form-control-lg form-control-solid'
                type='date'
              ></Field>
              <div className='text-danger mt-2'>
                <ErrorMessage name='startDate' />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <h6>Starting Date</h6>
              <p>
                {/* {sipStartMonth.value && sipStartDate.value.getDate()
                  ? new Date(
                      date.getFullYear(),
                      sipStartMonth.value,
                      sipStartDate.value
                    ).toLocaleDateString()
                  : '-'} */}
                {sipStartDate.value ? new Date(sipStartDate.value).toLocaleDateString() : '-'}
              </p>
            </div>
            <div className='col-md-6'>
              <h6>Ending Date</h6>
              <p>
                {setSipEndDate()}
                {sipStartMonth.value && sipStartDate.value && numOfInstallments.value
                  ? sipEndDate.toLocaleDateString()
                  : '-'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step2Sip}
