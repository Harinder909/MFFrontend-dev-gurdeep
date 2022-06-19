import React, {FC, useEffect, useRef, useState} from 'react'
import {Step1} from './steps/Step1'
import {Step2Sip} from './steps/Step2-sip'
import {Step2Lump} from './steps/Step2-lumpsum'
import {Step3} from './steps/Step3'
import {Step4} from './steps/Step4'
import {Step5} from './steps/Step5'
import {KTSVG} from '../../../../_metronic/helpers'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {Formik, Form, FormikValues, useFormikContext, useField} from 'formik'
import {createAccountSchemas, ICreateAccount, inits} from './CheckoutHelper'
import {useNavigate} from 'react-router-dom'
import {getAuth} from '../../../modules/auth/core/AuthHelpers'
import {useParams} from 'react-router-dom'
import axios from 'axios'
const auth = getAuth()

const API_URL = process.env.REACT_APP_API_URL
const INVEST_URL = `${API_URL}/customer/add_investment`
const config = {
  headers: {
    'Content-type': 'application/json',
    'x-access-token': auth ? auth.data.token : '',
  },
}

const ErrorFocus = () => {
  // Get the context for the Formik form this component is rendered into.
  const {isSubmitting, isValidating, errors} = useFormikContext()

  useEffect(() => {
    // Get all keys of the error messages.
    const keys = Object.keys(errors)

    // Whenever there are errors and the form is submitting but finished validating.
    if (keys.length > 0 && isSubmitting && !isValidating) {
      // We grab the first input element that error by its name.
      const errorElement = document.querySelector(`input[name="${keys[0]}"]`)

      if (errorElement) {
        // When there is an input, scroll this input into view.
        errorElement.scrollIntoView({behavior: 'smooth'})
      }
    }
  }, [isSubmitting, isValidating, errors])

  // This component does not render anything by itself.
  return null
}

const Checkout: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const testRef = useRef<HTMLDivElement | null>(null)

  const scrollToElement = () => {
    if (testRef.current) {
      testRef.current.scrollIntoView()
    }
  }

  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)

  const navigate = useNavigate()
  const MFdata = require('../buy-mutual-fund/MF Details.json')
  const {id} = useParams()
  const [currentMF, setCurrentMF] = useState(MFdata[Number(id) - 1])
  const brokerage = 0.5

  const [invAmount, setInvAmount] = useState(0)

  const getLatestData = async () => {
    let url = currentMF.url
    const temp = currentMF
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        temp.navDate = data.data[0].date
        temp.navPrice = data.data[0].nav
        setCurrentMF(temp)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)

    stepper.current.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }
 // const ifMandate =  useField('accountNum').values?.length ;

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    if (values.investmentAmount) {
      values.payableAmount = values.investmentAmount + (brokerage / 100) * values.investmentAmount
      setInvAmount(Number(values.payableAmount))
      values.brokerage = values.payableAmount - values.investmentAmount
    }



    // ifMandate > 0 && (values.mandate = 'false')

    // if (values.mandate === 'true') {
    //   // banking info here
    //   values.accountNum = 123456
    //   values.ifsc = 'abc'
    // }

    scrollToElement()
    if (!stepper.current) {
      return
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])

    if (stepper.current.currentStepIndex === stepper.current.totatStepsNumber!) {
      stepper.current.goto(1)
      values.customerId = Number(auth?.data.id)
      axios.post(INVEST_URL, values).then((res) => {
        console.log(values)
        console.log(res.data)
      })
      actions.resetForm()
      navigate('/')
    } else {
      stepper.current.goNext()
    }
  }

  useEffect(() => {
    getLatestData()
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <div className='row' ref={testRef}>
      <div className='card'>
        <div className='card-body'>
          <div className='col-lg-4'>
            <div className='text-gray-400 fw-bold fs-6'>
              Jaswant Singh
              <a href='/dashboard' className='link-primary fw-bolder'>
                {' '}
                (UCC: 534613)
              </a>
              .
            </div>
          </div>
          <div className='col-lg-5'>
            <img src={currentMF.image} className='my-5 img-fluid'></img>
            <h2 className='fw-bolder d-flex align-items-center text-dark'>
              {currentMF.schemeName}
            </h2>
            <div className='row'>
              <div className='col-sm-6'> Scheme Type: {currentMF.type}</div>
              <div className='col-sm-5'>Date: {currentMF.navDate}</div>
            </div>
            <div className='row'>
              <div className='col-sm-6'>
                Latest NAV: <span className='text-success'>{currentMF.navPrice}</span>
              </div>
              <div className='col-sm-4'>Brokerage: {brokerage}%</div>
            </div>
          </div>
        </div>
        <hr style={{width: '75%', margin: 'auto'}} />
        <div className='card pd-0'>
          <div className='card-body'>
            <div
              ref={stepperRef}
              className='stepper stepper-links d-flex flex-column'
              id='kt_create_account_stepper'
            >
              <div className='stepper-nav mb-5'>
                <div className='stepper-item current' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>Select Type</h3>
                </div>

                <div className='stepper-item' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>Enter Details</h3>
                </div>

                <div className='stepper-item' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>T&C</h3>
                </div>

                <div className='stepper-item' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>Payment Method</h3>
                </div>

                <div className='stepper-item' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>Confirm Request</h3>
                </div>
              </div>

              <Formik
                validationSchema={currentSchema}
                initialValues={initValues}
                onSubmit={submitStep}
              >
                {({values}) => (
                  <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='checkout_form'>
                    <div className='current' data-kt-stepper-element='content'>
                      <Step1 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      {values.productType === 'lumpSum' ? (
                        <Step2Lump />
                      ) : (
                        <Step2Sip brokerage={brokerage} />
                      )}
                    </div>

                    <div data-kt-stepper-element='content'>
                      <Step3 invAmount={invAmount} />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <Step4 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <Step5 currentMF={currentMF} invAmount={invAmount} />
                    </div>

                    <div className='d-flex flex-stack pt-15'>
                      <div className='mr-2'>
                        <button
                          onClick={prevStep}
                          type='button'
                          className='btn btn-lg btn-light-primary me-3'
                          data-kt-stepper-action='previous'
                        >
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr063.svg'
                            className='svg-icon-4 me-1'
                          />
                          Back
                        </button>
                      </div>

                      <div>
                        <button type='submit' className='btn btn-lg btn-primary me-3'>
                          <span className='indicator-label'>
                            {!isSubmitButton && 'Continue'}
                            {isSubmitButton && 'Confirm'}
                            <KTSVG
                              path='/media/icons/duotune/arrows/arr064.svg'
                              className='svg-icon-3 ms-2 me-0'
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                    <ErrorFocus />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Checkout}
