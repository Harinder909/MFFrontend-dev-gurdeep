import React, {FC, useEffect, useRef, useState} from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import {Formik, Form, FormikValues, Field} from 'formik'
import {createAccountSchemas, ICreateAccount, inits} from './ContactHelper'
import {useNavigate} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers/AssetHelpers'
import {PageTitle} from '../../../_metronic/layout/core'

const Contact: FC = () => {
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  let navigate = useNavigate()

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (values.queryHead !== '' && values.queryBody !== '') {
      console.log(values)
      navigate('/dashboard')
    } else {
      actions.resetForm({})
      alert('Please fill out the fields!')
    }
  }

  return (
    <>
      <PageTitle breadcrumbs={[]}>Contact Us</PageTitle>
      <div className='content flex-column-fluid' id='kt_content'>
        <div className='card'>
          <div className='card-body p-lg-17'>
            <div className='row mb-3 d-flex justify-content-evenly'>
              <div className='col-md-6 pe-lg-10'>
                <Formik
                  validationSchema={currentSchema}
                  initialValues={initValues}
                  onSubmit={submitStep}
                >
                  <Form
                    className='mx-auto form mb-15 fv-plugins-bootstrap5 fv-plugins-framework'
                    id='kt_contact_form'
                  >
                    <h1 className='fw-bolder text-dark mb-9'>Ask your queries!</h1>
                    <div className='d-flex flex-column mb-5 fv-row'>
                      <label className='fs-5 fw-bold mb-2'>Subject</label>
                      <Field
                        type='text'
                        name='queryHead'
                        className='form-control form-control-solid'
                      />
                    </div>
                    <div className='d-flex flex-column mb-10 fv-row fv-plugins-icon-container'>
                      <label className='fs-6 fw-bold mb-2'>Message</label>
                      <Field
                        as='textarea'
                        type='text'
                        name='queryBody'
                        className='form-control form-control-solid'
                      />
                      <div className='fv-plugins-message-container invalid-feedback'></div>
                    </div>

                    <button type='submit' className='btn btn-lg btn-primary'>
                      <span className='indicator-label'>Submit</span>
                    </button>
                  </Form>
                </Formik>
              </div>
              <div className='col-md-6 position-relative ps-2'>
                <img
                  src={toAbsoluteUrl('/media/illustrations/sketchy-1/17.png')}
                  className='w-75 position-absolute top-50 start-50 translate-middle .img-fluid'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {Contact}
