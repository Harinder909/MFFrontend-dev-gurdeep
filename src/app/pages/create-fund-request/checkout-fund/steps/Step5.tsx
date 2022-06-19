import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

interface Step5Props {
  currentMF: any
  invAmount: number
}

const Step5: FC<Step5Props> = ({currentMF, invAmount}) => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>Confirm your order request</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='row w-100 my-1 mb-10 shadow'>
        <div className='col-xl-12'>
          <div className='card-xl-stretch mb-xl-8'>
            <div className='card-body'>
              <div className='d-flex flex-stack'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-60px me-5'>
                    <span className='symbol-label bg-primary-light'>
                      <img src={currentMF.image} className='img-fluid align-self-center' alt='' />
                    </span>
                  </div>
                  <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3'>
                    <a href='#' className='text-dark fw-bolder text-hover-primary fs-5'>
                      {currentMF.schemeName}
                    </a>

                    <span className='text-muted fw-bold'>{currentMF.option}</span>
                  </div>
                </div>

                <div className='d-flex'>
                  <div className='col-sm-6'>
                    Latest NAV: <span className='text-success'>{currentMF.navPrice}</span>
                  </div>
                  <div className='col-sm-6'>
                    Date: <br />
                    <span className='text'>{currentMF.navDate}</span>
                  </div>
                </div>
              </div>
              <div className='d-flex flex-column w-100 mt-12'>
                <h5 className='text-dark me-2 fw-bolder pb-3'>Total Amount Payable</h5>

                <div className='h-15px w-100'>
                  <h2 className='text-dark d-flex'>
                    Rs.&nbsp;<p className='text-success'>{invAmount}</p>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step5}
