/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useRef, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Formik, Form, FormikValues, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {StepperComponent} from '../../../assets/ts/components'
import {useNavigate} from 'react-router-dom'
import {getAuth} from '../../../../app/modules/auth/core/AuthHelpers'
import axios from 'axios'
const auth = getAuth()
const API_URL = process.env.REACT_APP_API_URL
const ADDCUSTOMER_URL = `${API_URL}/customer/add_customer`
//const GET_USERS_URL = `${API_URL}/customer/add_customer`
const config = {
  headers: {
    'Content-type': 'application/json',
    'x-access-token': auth ? auth.data.token : '',
  },
}

interface ICreateAccount {
  // accountType: string
  // NoofHolders: string
  // partner: string
  applicantTaxStatus: string
  dateofBirth: string
  mobileNo: string
  email: string
  applicantGroupName: string
  applicantName: string
  nameasPerPan: string
  PAN: string

  nationality: string
  maritialStatus: string
  fatherSpouse: string
  fatherSpouseFirstName: string
  fatherSpouseLastName: string
  applicantAddress: string
  country: string
  state: string
  city: string
  pinCode: string
  // bankwithmicr: String
  ifscCode: string
  // micrNo: string
  applicantNameasperBankRecord: string
  bankAccNo: string
  bankName: string
  branchName: string
  bankAddress: string

  bankAccountType: string
  bankcountry: string
  bankstate: string
  //bankcity : string
  bankpinCode: string
  mandateStartDate: string
  mandateEndDate: string
  mandateUpperlimit: string
  mandateAuthorizationMode: string
  // subscribeWhatsappService: string
  // registerWithBrokerMember: string
  // investmentTradingExperience: string

  incomeRange: string
  networthinRupees: string
  occupation: string
  // politicallyExposedPerson: string
  nominee: string
  nomineeFirstName: string
  nomineeLastName: string
  // nomineeApplicantAddress: string
  // nomineeCity: string
  // nomineeState: string
  // nomineeCountry: string
  // nomineePinCode: string

  nomineeMobile: string
  nomineeDateofBirth: string
  nomineeRelationshipwithBO: string

  equityBalancePurchaseSwitch: string
  equityBalanceRedemption: string
  equityBalanceSIP: string
  debtPurchaseSwitch: string
  debtRedemption: string

  debtSIP: string
  cashPurchaseSwitch: string
  cashRedemption: string
  cashSIP: string
  othersPurchaseSwitch: string
  othersRedemption: string

  othersSIP: string
  // directEquity: string
  // equityentertheRate: string
  // Debt: string
  // DebtentertheRate: string
  // Liquid: string
  // uploadPan: string
  // uploadBankProof: string
  // uploadSpecimen: string

  // uploadAdditionalDocument: string
  // uploadAdditionalDocumentTwo: string
  // uploadAdditionalDocumentThree: string

  nationalityof: string
  countryofBirth: string
  placeofBirth: string
  addressType: string

  taxResidency: string
}

const inits: ICreateAccount = {
  // accountType: '',
  // NoofHolders: '',
  // partner: '',
  applicantTaxStatus: '',
  dateofBirth: '',
  mobileNo: '',
  email: '',
  applicantGroupName: '',
  applicantName: '',
  nameasPerPan: '',
  PAN: '',
  nationality: '',
  maritialStatus: '',
  fatherSpouse: '',
  fatherSpouseFirstName: '',
  fatherSpouseLastName: '',
  applicantAddress: '',
  country: '',
  state: '',
  city: '',
  pinCode: '',
  // bankwithmicr: '',
  ifscCode: '',
  // micrNo: '',
  applicantNameasperBankRecord: '',
  bankAccNo: '',
  bankName: '',
  branchName: '',
  bankAddress: '',

  bankAccountType: '',
  bankcountry: '',
  bankstate: '',
  // bankcity : '1',
  bankpinCode: '',
  mandateStartDate: '',
  mandateEndDate: '',
  mandateUpperlimit: '',
  mandateAuthorizationMode: '',
  // subscribeWhatsappService: '',
  // registerWithBrokerMember: '',
  // investmentTradingExperience: '1',

  incomeRange: '',
  networthinRupees: '',
  occupation: '',
  // politicallyExposedPerson: '',
  nominee: '',
  nomineeFirstName: '',
  nomineeLastName: '',
  // nomineeApplicantAddress: '',
  // nomineeCity: '',
  // nomineeState: '',
  // nomineeCountry: '',
  // nomineePinCode: '',

  nomineeMobile: '',
  nomineeDateofBirth: '',
  nomineeRelationshipwithBO: '',

  equityBalancePurchaseSwitch: '',
  equityBalanceRedemption: '',
  equityBalanceSIP: '',
  debtPurchaseSwitch: '',
  debtRedemption: '',

  debtSIP: '',
  cashPurchaseSwitch: '',
  cashRedemption: '',
  cashSIP: '',
  othersPurchaseSwitch: '',
  othersRedemption: '',

  othersSIP: '',
  // directEquity: '',
  // equityentertheRate: '',

  // Debt: '',
  // DebtentertheRate: '',
  // Liquid: '',
  // uploadPan: '',
  // uploadBankProof: '',
  // uploadSpecimen: '',

  // uploadAdditionalDocument: '',
  // uploadAdditionalDocumentTwo: '',
  // uploadAdditionalDocumentThree: '',

  nationalityof: '',
  countryofBirth: '',
  placeofBirth: '',
  addressType: '',
  taxResidency: '',
}

const createAppSchema = [
  Yup.object({
    // accountType: Yup.string().required().label('Account Type'),
    // NoofHolders: Yup.string().required().label('No. of Holders'),
    // partner: Yup.string().required().label('Partner'),
    applicantTaxStatus: Yup.string().required().label('Applicant Tax Status'),
    dateofBirth: Yup.string().required().label('Date of Birth'),
    mobileNo: Yup.string().required().label('Mobile No'),
    email: Yup.string().required().label('Email'),
    applicantGroupName: Yup.string().required().label('Applicant Group Name'),
    applicantName: Yup.string().required().label('Applicant Name'),
    // nameasPerPan: Yup.string().required().label('Name as Per'),
    PAN: Yup.string().required().label('PAN '),
    nationality: Yup.string().required().label('Nationality'),
  }),
  Yup.object({
    maritialStatus: Yup.string().required().label('Maritial Status'),
    fatherSpouse: Yup.string().required().label('Select Father / Spouse'),
    fatherSpouseFirstName: Yup.string().required().label('Father/Spouse First Name'),
    fatherSpouseLastName: Yup.string().required().label('Father/Spouse Last Name'),
    applicantAddress: Yup.string().required().label('Applicant Address'),
    country: Yup.string().required().label('Country'),
    state: Yup.string().required().label('State'),
    city: Yup.string().required().label('City'),
    pinCode: Yup.string().required().label('Pin Code'),
  }),
  Yup.object({
    // bankwithmicr: Yup.string().required().label('Bank '),
    ifscCode: Yup.string().required().label('IFSC Code'),
    // micrNo: Yup.string().required().label('MICR No'),
    applicantNameasperBankRecord: Yup.string()
      .required()
      .label('Applicant Name as per Bank Record'),
    bankAccNo: Yup.string().required().label('Bank Acc. No'),
    bankName: Yup.string().required().label('Bank Name'),
    branchName: Yup.string().required().label('Branch Name'),
    bankAddress: Yup.string().required().label('Bank Address'),
    bankAccountType: Yup.string().required().label('Account Type'),
    bankcountry: Yup.string().required().label('Country'),
    bankstate: Yup.string().required().label('State '),
    //bankcity: Yup.string().required().label('Pin code'),

    bankpinCode: Yup.string().required().label('Pin code'),
    mandateStartDate: Yup.string().required().label('Mandate Start Date'),
    mandateEndDate: Yup.string().required().label('Mandate End Date'),
    mandateUpperlimit: Yup.string().required().label('Mandate Upperlimit'),
    mandateAuthorizationMode: Yup.string().required().label('Mandate Authorization Mode'),
  }),
  Yup.object({
    // subscribeWhatsappService: Yup.string().required().label('Subscribe Whatsapp Service'),
    // registerWithBrokerMember: Yup.string().required().label('Register With Broker/Member'),
    // investmentTradingExperience: Yup.string().required().label('Any Prior Investment/Trading Experience'),
    incomeRange: Yup.string().required().label('Income Range'),
    networthinRupees: Yup.string().required().label('Networth in Rupees'),

    occupation: Yup.string().required().label('Occupation'),
    // politicallyExposedPerson: Yup.string().required().label('Politically Exposed Person'),
    nominee: Yup.string().required().label('Nominee'),
    nomineeFirstName: Yup.string().required().label('Nominee First Name'),
    nomineeLastName: Yup.string().required().label('Nominee Last Name'),

    // nomineeApplicantAddress: Yup.string().required().label('Nominee Address'),
    // nomineeCity: Yup.string().required().label('City '),
    // nomineeState: Yup.string().required().label('State '),
    // nomineeCountry: Yup.string().required().label('Nominee Country '),
    // nomineePinCode: Yup.string().required().label('Pin Code'),

    nomineeMobile: Yup.string().required().label('Nominee Mobile'),
    nomineeDateofBirth: Yup.string().required().label('Date of Birth'),
    nomineeRelationshipwithBO: Yup.string().required().label('Relationship with BO'),
  }),

  Yup.object({
    equityBalancePurchaseSwitch: Yup.string().required().label('Equity/Balance - Purchase/Switch '),
    equityBalanceRedemption: Yup.string().required().label('Equity/Balance- Redemption '),
    equityBalanceSIP: Yup.string().required().label('Equity/Balance-SIP '),
    debtPurchaseSwitch: Yup.string().required().label('Debt-Purchase/Switch'),
    debtRedemption: Yup.string().required().label('Debt-Redemption'),

    debtSIP: Yup.string().required().label('Debt-SIP'),
    cashPurchaseSwitch: Yup.string().required().label('Cash-Purchase/Switch'),
    cashRedemption: Yup.string().required().label('Cash-Redemption '),
    cashSIP: Yup.string().required().label('Cash-SIP'),
    othersPurchaseSwitch: Yup.string().required().label('Others-Purchase/Switch'),

    othersRedemption: Yup.string().required().label('Others-Redemption '),
    othersSIP: Yup.string().required().label('Others-SIP '),
    // directEquity: Yup.string().required().label('Direct Equity'),
    // equityentertheRate: Yup.string().required().label('Enter the Rate '),
    // Debt: Yup.string().required().label('Debt'),

    // DebtentertheRate: Yup.string().required().label('Enter the Rate'),
    // Liquid: Yup.string().required().label('Liquid'),
    nationalityof: Yup.string().required().label('Nationality '),

    countryofBirth: Yup.string().required().label('Country of Birth'),
    placeofBirth: Yup.string().required().label('Place of Birth '),
    addressType: Yup.string().required().label('Address Type  '),
    phoneno: Yup.string().required().label('Phone no'),
    taxResidency: Yup.string()
      .required()
      .label('Is your country of Tax Residency other than India ?'),

    // uploadPan: Yup.string().required().label('Upload Copy of PAN'),
    // uploadBankProof: Yup.string().required().label('Upload Bank Proof '),
    // uploadSpecimen: Yup.string().required().label('Upload Specimen Signature'),
    // uploadAdditionalDocument: Yup.string()
    //   .required()
    //   .label('pload Additional Document (Bank Proof)'),
    // uploadAdditionalDocumentTwo: Yup.string().required().label('Upload Other Document'),
    // uploadAdditionalDocumentThree: Yup.string().required().label('Upload Upload Other Document 2'),
  }),
]

const Main: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAppSchema[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const navigate = useNavigate()

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

    setCurrentSchema(createAppSchema[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    setCurrentSchema(createAppSchema[stepper.current.currentStepIndex])

    if (stepper.current.currentStepIndex === stepper.current.totatStepsNumber!) {
      stepper.current.goto(1)
      axios.post(ADDCUSTOMER_URL, values).then((res) => {
        // console.log(res.data)
      })

      actions.resetForm()

      stepper.current.goto(1)
      actions.resetForm()
    } else {
      stepper.current.goNext()
    }
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <div className='modal fade' id='kt_modal_create_app' aria-hidden='true'>
      <div className='modal-dialog modal-xl model-dialog-scrolable modal-dialog-centered '>
        <div className='modal-content'>
          <div className='modal-header'>
            <h2>Create User</h2>

            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
            </div>
          </div>

          <div className='modal-body py-lg-10 px-lg-10'>
            <div
              ref={stepperRef}
              className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
              id='kt_modal_create_app_stepper'
            >
              <div className='d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px'>
                <div className='stepper-nav ps-lg-10'>
                  <div className='stepper-item current' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>1</span>
                    </div>

                    <div className='stepper-label'>
                      <h3 className='stepper-title'>Personal Details</h3>

                      <div className='stepper-desc'></div>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>2</span>
                    </div>

                    <div className='stepper-label'>
                      <h3 className='stepper-title'>Maritial / Parents</h3>

                      <div className='stepper-desc'></div>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>3</span>
                    </div>

                    <div className='stepper-label'>
                      <h3 className='stepper-title'>Bank Details</h3>

                      <div className='stepper-desc'></div>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>4</span>
                    </div>

                    <div className='stepper-label'>
                      <h3 className='stepper-title'>Investment Details</h3>

                      <div className='stepper-desc'>Provide payment details</div>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>5</span>
                    </div>

                    <div className='stepper-label'>
                      <h3 className='stepper-title'>Confirmation</h3>

                      <div className='stepper-desc'>Review and Submit</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex-row-fluid py-lg-5 px-lg-15'>
                <Formik
                  validationSchema={currentSchema}
                  initialValues={initValues}
                  onSubmit={submitStep}
                >
                  {(values) => (
                    <Form className='form' noValidate id='kt_modal_create_app_form'>
                      <div className='current' data-kt-stepper-element='content'>
                        <div className='w-100'>
                          {/* <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Account Type</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Account Type'
                              ></i>
                            </label>
                            <Field
                              as='select'
                              name='accountType'
                              className='form-select form-select-solid'
                            >
                              <option>Select</option>
                              <option value='E-Investments account'>E-Investments account</option>
                              <option value='PMS'>PMS</option>
                            </Field>

                            <div className='text-danger'>
                              <ErrorMessage name='accountType' />
                            </div>
                          </div> */}

                          {/* <div className='fv-row'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-4'>
                              <span className='required'>No. of Holders</span>

                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Select No of Holders'
                              ></i>
                            </label>

                            <div className='fv-row'>
                              <label className='d-flex flex-stack mb-5 cursor-pointer'>
                                <span className='form-check form-check-custom form-check-solid'>
                                  <Field
                                    as='select'
                                    name='NoofHolders'
                                    className='form-select form-select-solid'
                                  >
                                    <option>Select</option>
                                    <option value='1'>One</option>
                                    <option value='2'>Two</option>
                                    <option value='3'>Three</option>
                                    <option value='4'>Four</option>
                                  </Field>
                                </span>
                              </label>
                            </div>

                            <div className='text-danger'>
                              <ErrorMessage name='NoofHolders' />
                            </div>
                          </div> */}
                          {/* <div className='fv-row'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-4'>
                              <span className='required'>Partner</span>

                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Select your Partner'
                              ></i>
                            </label>

                            <div className='fv-row'>
                              <label className='d-flex flex-stack mb-5 cursor-pointer'>
                                <span className='d-flex align-items-center me-2'>
                                  <span className='symbol symbol-50px me-6'>
                                    <span className='symbol-label bg-light-primary'>
                                      <KTSVG
                                        path='/media/icons/duotune/maps/map004.svg'
                                        className='svg-icon-1 svg-icon-primary'
                                      />
                                    </span>
                                  </span>

                                  <span className='d-flex flex-column'>
                                    <span className='fw-bolder fs-6'>Amritpal Singh</span>
                                  </span>
                                </span>

                                <span className='form-check form-check-custom form-check-solid'>
                                  <Field
                                    className='form-check-input'
                                    type='radio'
                                    name='partner'
                                    value='1'
                                  />
                                </span>
                              </label>

                              <label className='d-flex flex-stack mb-5 cursor-pointer'>
                                <span className='d-flex align-items-center me-2'>
                                  <span className='symbol symbol-50px me-6'>
                                    <span className='symbol-label bg-light-danger  '>
                                      <KTSVG
                                        path='/media/icons/duotune/general/gen024.svg'
                                        className='svg-icon-1 svg-icon-danger'
                                      />
                                    </span>
                                  </span>

                                  <span className='d-flex flex-column'>
                                    <span className='fw-bolder fs-6'>Sikander</span>
                                  </span>
                                </span>

                                <span className='form-check form-check-custom form-check-solid'>
                                  <Field
                                    className='form-check-input'
                                    type='radio'
                                    name='partner'
                                    value='2'
                                  />
                                </span>
                              </label>
                            </div>

                            <div className='text-danger'>
                              <ErrorMessage name='partner' />
                            </div>
                          </div> */}

                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Applicant Tax Status</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify Applicant Tax Status'
                              ></i>
                            </label>
                            <Field
                              as='select'
                              name='applicantTaxStatus'
                              className='form-select form-select-solid'
                            >
                              <option>Select</option>
                              <option value='Individual'>Individual</option>
                              <option value='NRI Non- Repatriable (NRO)'>
                                NRI Non- Repatriable (NRO)
                              </option>
                              <option value='NRI- Repatriable (NRE)'>NRI- Repatriable (NRE)</option>
                              <option value='On behalf of minor'>On behalf of minor</option>
                              <option value='PMS'>PMS</option>
                            </Field>

                            <div className='text-danger'>
                              <ErrorMessage name='applicantTaxStatus' />
                            </div>
                          </div>

                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Date of Birth </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Date of Birth '
                              ></i>
                            </label>

                            <Field
                              type='date'
                              className='form-control form-control-lg form-control-solid'
                              name='dateofBirth'
                              placeholder=''
                            />
                            <div className='text-danger'>
                              <ErrorMessage name='dateofBirth' />
                            </div>
                          </div>

                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Mobile No. </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Mobile No. '
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='mobileNo'
                              placeholder=''
                            />
                            <div className='text-danger'>
                              <ErrorMessage name='mobileNo' />
                            </div>
                          </div>

                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Email </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Email. '
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='email'
                              placeholder=''
                            />
                            <div className='text-danger'>
                              <ErrorMessage name='email' />
                            </div>
                          </div>

                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Applicant Group Name </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify  Applicant Group Name. '
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='applicantGroupName'
                              placeholder=''
                            />
                            <div className='text-danger'>
                              <ErrorMessage name='applicantGroupName' />
                            </div>
                          </div>

                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Applicant Name </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Name. '
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='applicantName'
                              placeholder=''
                            />
                            <div className='text-danger'>
                              <ErrorMessage name='applicantName' />
                            </div>
                          </div>

                          <div className='fv-row'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-4'>
                              <span className='required'>Name as Per </span>

                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Select Name as Per'
                              ></i>
                            </label>

                            <div className='fv-row'>
                              <label className='d-flex flex-stack mb-5 cursor-pointer'>
                                <span className='d-flex align-items-center me-2'>
                                  <span className='symbol symbol-50px me-6'>
                                    <span className='symbol-label bg-light-primary'>
                                      <KTSVG
                                        path='/media/icons/duotune/maps/map004.svg'
                                        className='svg-icon-1 svg-icon-primary'
                                      />
                                    </span>
                                  </span>

                                  <span className='d-flex flex-column'>
                                    <span className='fw-bolder fs-6'>Aadhar card</span>
                                  </span>
                                </span>

                                <span className='form-check form-check-custom form-check-solid'>
                                  <Field
                                    className='form-check-input'
                                    type='radio'
                                    name='nameasPerPan'
                                    value='Aadhar card'
                                  />
                                </span>
                              </label>

                              <label className='d-flex flex-stack mb-5 cursor-pointer'>
                                <span className='d-flex align-items-center me-2'>
                                  <span className='symbol symbol-50px me-6'>
                                    <span className='symbol-label bg-light-danger  '>
                                      <KTSVG
                                        path='/media/icons/duotune/general/gen024.svg'
                                        className='svg-icon-1 svg-icon-danger'
                                      />
                                    </span>
                                  </span>

                                  <span className='d-flex flex-column'>
                                    <span className='fw-bolder fs-6'>PAN card</span>
                                  </span>
                                </span>

                                <span className='form-check form-check-custom form-check-solid'>
                                  <Field
                                    className='form-check-input'
                                    type='radio'
                                    name='nameasPerPan'
                                    value='PAN card'
                                  />
                                </span>
                              </label>
                            </div>

                            <div className='text-danger'>
                              <ErrorMessage name='nameasPerPan' />
                            </div>
                          </div>

                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>
                                {values.values.nameasPerPan == 'PAN card'
                                  ? 'PAN number'
                                  : 'Aadhar number'}
                              </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Name.'
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='PAN'
                              placeholder=''
                            />
                            <div className='text-danger'>
                              <ErrorMessage name='PAN' />
                            </div>
                          </div>
                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Nationality </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Nationality. '
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='nationality'
                              placeholder=''
                            />
                            <div className='text-danger'>
                              <ErrorMessage name='nationality' />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div data-kt-stepper-element='content'>
                        <div className='w-100'>
                          <div className='fv-row'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-4'>
                              <span className='required'>Maritial Status</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your apps framework'
                              ></i>
                            </label>

                            <label className='d-flex flex-stack cursor-pointer mb-5'>
                              <span className='d-flex align-items-center me-2'>
                                <span className='symbol symbol-50px me-6'>
                                  <span className='symbol-label bg-light-warning'>
                                    <i className='fab fa-html5 text-warning fs-2x'></i>
                                  </span>
                                </span>

                                <span className='d-flex flex-column'>
                                  <span className='fw-bolder fs-6'>Married</span>
                                </span>
                              </span>

                              <span className='form-check form-check-custom form-check-solid'>
                                <Field
                                  className='form-check-input'
                                  type='radio'
                                  name='maritialStatus'
                                  value='Married'
                                />
                              </span>
                            </label>

                            <label className='d-flex flex-stack cursor-pointer mb-5'>
                              <span className='d-flex align-items-center me-2'>
                                <span className='symbol symbol-50px me-6'>
                                  <span className='symbol-label bg-light-success'>
                                    <i className='fab fa-react text-success fs-2x'></i>
                                  </span>
                                </span>

                                <span className='d-flex flex-column'>
                                  <span className='fw-bolder fs-6'>Unmarried</span>
                                </span>
                              </span>

                              <span className='form-check form-check-custom form-check-solid'>
                                <Field
                                  className='form-check-input'
                                  type='radio'
                                  name='maritialStatus'
                                  value='Unmarried'
                                />
                              </span>
                            </label>

                            <label className='d-flex flex-stack cursor-pointer mb-5'>
                              <span className='d-flex align-items-center me-2'>
                                <span className='symbol symbol-50px me-6'>
                                  <span className='symbol-label bg-light-danger'>
                                    <i className='fab fa-angular text-danger fs-2x'></i>
                                  </span>
                                </span>

                                <span className='d-flex flex-column'>
                                  <span className='fw-bolder fs-6'>Other</span>
                                </span>
                              </span>

                              <span className='form-check form-check-custom form-check-solid'>
                                <Field
                                  className='form-check-input'
                                  type='radio'
                                  name='maritialStatus'
                                  value='Other'
                                />
                              </span>
                            </label>

                            <div className='text-danger'>
                              <ErrorMessage name='maritialStatus' />
                            </div>
                          </div>

                          <div className='fv-row'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-4'>
                              <span className='required'>Select Father / Spouse</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify Select Father / Spouse'
                              ></i>
                            </label>

                            <label className='d-flex flex-stack cursor-pointer mb-5'>
                              <span className='d-flex align-items-center me-2'>
                                <span className='symbol symbol-50px me-6'>
                                  <span className='symbol-label bg-light-warning'>
                                    <i className='fab fa-html5 text-warning fs-2x'></i>
                                  </span>
                                </span>

                                <span className='d-flex flex-column'>
                                  <span className='fw-bolder fs-6'>Father</span>
                                </span>
                              </span>

                              <span className='form-check form-check-custom form-check-solid'>
                                <Field
                                  className='form-check-input'
                                  type='radio'
                                  name='fatherSpouse'
                                  value='Father'
                                />
                              </span>
                            </label>

                            <label className='d-flex flex-stack cursor-pointer mb-5'>
                              <span className='d-flex align-items-center me-2'>
                                <span className='symbol symbol-50px me-6'>
                                  <span className='symbol-label bg-light-success'>
                                    <i className='fab fa-react text-success fs-2x'></i>
                                  </span>
                                </span>

                                <span className='d-flex flex-column'>
                                  <span className='fw-bolder fs-6'>Spouse</span>
                                </span>
                              </span>

                              <span className='form-check form-check-custom form-check-solid'>
                                <Field
                                  className='form-check-input'
                                  type='radio'
                                  name='fatherSpouse'
                                  value='Spouse'
                                />
                              </span>
                            </label>

                            <div className='text-danger'>
                              <ErrorMessage name='maritialStatus' />
                            </div>
                          </div>

                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Father/Spouse First Name </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify Father/Spouse First Name. '
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='fatherSpouseFirstName'
                              placeholder=''
                            />
                            <div className='text-danger'>
                              <ErrorMessage name='fatherSpouseFirstName' />
                            </div>
                          </div>

                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Father/Spouse Last Name </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify Father/Spouse Last Name. '
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='fatherSpouseLastName'
                              placeholder=''
                            />
                            <div className='text-danger'>
                              <ErrorMessage name='fatherSpouseLastName' />
                            </div>
                          </div>

                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Applicant Address </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify Applicant Address. '
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='applicantAddress'
                              placeholder=''
                            />
                            <div className='text-danger'>
                              <ErrorMessage name='applicantAddress' />
                            </div>
                          </div>

                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Country </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify Applicant Country . '
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='country'
                              placeholder=''
                            />
                            <div className='text-danger'>
                              <ErrorMessage name='country' />
                            </div>
                          </div>

                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>State </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify Applicant State  . '
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='state'
                              placeholder=''
                            />
                            <div className='text-danger'>
                              <ErrorMessage name='state' />
                            </div>
                          </div>

                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>City </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify Applicant City   . '
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='city'
                              placeholder=''
                            />
                            <div className='text-danger'>
                              <ErrorMessage name='city' />
                            </div>
                          </div>

                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Pin Code </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify  Pin Code   . '
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='pinCode'
                              placeholder=''
                            />
                            <div className='text-danger'>
                              <ErrorMessage name='pinCode' />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div data-kt-stepper-element='content'>
                        <div className='w-100'>
                          {/* <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Bank</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Bank with MICR'
                              ></i>
                            </label>
                            <Field
                              as='select'
                              name='bankwithmicr'
                              className='form-select form-select-solid'
                            >
                              <option>Select</option>
                              <option value=' With MICR'> With MICR</option>
                              <option value=' Without MICR'> Without MICR</option>
                            </Field>

                            <div className='text-danger'>
                              <ErrorMessage name='bankwithmicr' />
                            </div>
                          </div> */}
                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>IFSC Code</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Bank IFSC Code'
                              ></i>
                            </label>
                            <Field
                              type='text'
                              className='form-control form-control-solid'
                              placeholder='Enter card number'
                              name='ifscCode'
                            />

                            <div className='text-danger'>
                              <ErrorMessage name='ifscCode' />
                            </div>
                          </div>

                          {/* <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>MICR No</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Bank MICR No'
                              ></i>
                            </label>
                            <Field
                              type='text'
                              className='form-control form-control-solid'
                              placeholder='Enter card number'
                              name='micrNo'
                            />

                            <div className='text-danger'>
                              <ErrorMessage name='micrNo' />
                            </div>
                          </div> */}
                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Applicant Name as per Bank Record</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify Applicant Name as per Bank Record'
                              ></i>
                            </label>
                            <Field
                              type='text'
                              className='form-control form-control-solid'
                              placeholder='Enter card number'
                              name='applicantNameasperBankRecord'
                            />

                            <div className='text-danger'>
                              <ErrorMessage name='applicantNameasperBankRecord' />
                            </div>
                          </div>
                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Bank Acc No</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Bank IFSC Bank Acc No'
                              ></i>
                            </label>
                            <Field
                              type='text'
                              className='form-control form-control-solid'
                              placeholder='Enter card number'
                              name='bankAccNo'
                            />

                            <div className='text-danger'>
                              <ErrorMessage name='bankAccNo' />
                            </div>
                          </div>
                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Bank Name</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Bank Name'
                              ></i>
                            </label>
                            <Field
                              type='text'
                              className='form-control form-control-solid'
                              placeholder='Enter card number'
                              name='bankName'
                            />

                            <div className='text-danger'>
                              <ErrorMessage name='bankName' />
                            </div>
                          </div>
                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Branch Name</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Bank Branch Name'
                              ></i>
                            </label>
                            <Field
                              type='text'
                              className='form-control form-control-solid'
                              placeholder='Enter card number'
                              name='branchName'
                            />

                            <div className='text-danger'>
                              <ErrorMessage name='branchName' />
                            </div>
                          </div>
                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Bank Address</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Bank Address'
                              ></i>
                            </label>
                            <Field
                              type='text'
                              className='form-control form-control-solid'
                              placeholder='Enter card number'
                              name='bankAddress'
                            />

                            <div className='text-danger'>
                              <ErrorMessage name='bankAddress' />
                            </div>
                          </div>
                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Country </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Bank Country'
                              ></i>
                            </label>
                            <Field
                              type='text'
                              className='form-control form-control-solid'
                              placeholder='Enter card number'
                              name='bankcountry'
                            />

                            <div className='text-danger'>
                              <ErrorMessage name='bankcountry' />
                            </div>
                          </div>

                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Account Type </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Bank Account Type'
                              ></i>
                            </label>
                            <Field
                              as='select'
                              name='bankAccountType'
                              className='form-select form-select-solid'
                            >
                              <option>Select</option>
                              <option value='Savings'> Savings</option>
                              <option value='Current'> Current</option>
                              <option value='CC'> CC</option>
                              <option value='OD'> OD</option>
                            </Field>

                            <div className='text-danger'>
                              <ErrorMessage name='bankAccountType' />
                            </div>
                          </div>

                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Bank State </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Bank  State'
                              ></i>
                            </label>
                            <Field
                              as='select'
                              name='bankstate'
                              className='form-select form-select-solid'
                            >
                              <option>Select</option>
                              <option value='Punjab'> Punjab</option>
                              <option value='Haryana'> Haryana</option>
                              <option value='Himachal'> Himachal</option>
                              <option value='Delhi'> Delhi</option>
                            </Field>

                            <div className='text-danger'>
                              <ErrorMessage name='bankstate' />
                            </div>
                          </div>
                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Pin Code </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Bank Pin Code'
                              ></i>
                            </label>
                            <Field
                              type='text'
                              className='form-control form-control-solid'
                              placeholder='Enter card number'
                              name='bankpinCode'
                            />

                            <div className='text-danger'>
                              <ErrorMessage name='bankpinCode' />
                            </div>
                          </div>
                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Mandate Start Date</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify Mandate Start Date'
                              ></i>
                            </label>
                            <Field
                              type='date'
                              className='form-control form-control-solid'
                              placeholder='Enter card number'
                              name='mandateStartDate'
                            />

                            <div className='text-danger'>
                              <ErrorMessage name='mandateStartDate' />
                            </div>
                          </div>
                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Mandate End Date </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Mandate End Date'
                              ></i>
                            </label>
                            <Field
                              type='date'
                              className='form-control form-control-solid'
                              placeholder='Enter card number'
                              name='mandateEndDate'
                            />

                            <div className='text-danger'>
                              <ErrorMessage name='mandateEndDate' />
                            </div>
                          </div>
                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Mandate Upperlimit </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify your Mandate Upperlimit'
                              ></i>
                            </label>
                            <Field
                              type='text'
                              className='form-control form-control-solid'
                              placeholder='Enter card number'
                              name='mandateUpperlimit'
                            />

                            <div className='text-danger'>
                              <ErrorMessage name='mandateUpperlimit' />
                            </div>
                          </div>
                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Mandate Authorization Mode </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify Mandate Authorization Mode'
                              ></i>
                            </label>
                            <Field
                              as='select'
                              name='mandateAuthorizationMode'
                              className='form-select form-select-solid'
                            >
                              <option>Select</option>
                              <option value='Scan Mandate'> Scan Mandate</option>
                              <option value='E Mandate'> E Mandate</option>
                              <option value='Debit Card Mandate'> Debit Card Mandate</option>
                            </Field>

                            <div className='text-danger'>
                              <ErrorMessage name='mandateAuthorizationMode' />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div data-kt-stepper-element='content'>
                        <div className='w-100'>
                          {/* <div className='pb-10 pb-lg-15'>
                            <h2 className='fw-bolder text-dark'>Investment Details</h2>

                            <div className='text-gray-400 fw-bold fs-6'>
                              If you need more info, please check out
                              <a href='#' className='text-primary fw-bolder'>
                                Help Page
                              </a>
                              .
                            </div>
                          </div> */}

                          {/*<div className='row mb-10'>
                             <div className='col-md-8 fv-row'>
                              <label className='required fs-6 fw-bold form-label mb-2'>
                                Subscribe Whatsapp Service
                              </label>

                              <div className='row fv-row'>
                                <div className='col-6'>
                                  <Field
                                    as='select'
                                    name='subscribeWhatsappService'
                                    className='form-select form-select-solid'
                                  >
                                    <option>Select</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                  </Field>
                                  <div className='text-danger'>
                                    <ErrorMessage name='subscribeWhatsappService' />
                                  </div>
                                </div>

                                <div className='col-6'>
                                  <label className='required fs-6 fw-bold form-label mb-2'>
                                    Register With Broker/Member
                                  </label>
                                  <Field
                                    as='select'
                                    name='registerWithBrokerMember'
                                    className='form-select form-select-solid'
                                  >
                                    <option>Select</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                  </Field>
                                  <div className='text-danger'>
                                    <ErrorMessage name='registerWithBrokerMember' />
                                  </div>
                                </div>
                              </div>
                            </div> */}

                          {/* <div className='col-md-4 fv-row'>
                              <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                                <span className='required'>
                                  Any Prior Investment/Trading Experience
                                </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Enter a card CVV code'
                                ></i>
                              </label>
                              <div className='col-6'>
                                <Field
                                  as='select'
                                  name='investmentTradingExperience'
                                  className='form-select form-select-solid'
                                >
                                  <option>Select</option>
                                  <option value='yes'>Yes</option>
                                  <option value='no'>No</option>
                                </Field>
                                <div className='text-danger'>
                                  <ErrorMessage name='investmentTradingExperience' />
                                </div>
                              </div>
                            </div> 
                          </div>*/}
                          <div className='d-flex flex-column mb-7 fv-row'>
                            <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                              <span className='required'>Income Range </span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Specify Income Range'
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-solid'
                              placeholder=''
                              name='incomeRange'
                            />
                            <div className='text-danger'>
                              <ErrorMessage name='incomeRange' />
                            </div>
                          </div>
                          <div className='d-flex flex-column mb-7 fv-row'>
                            <label className='required fs-6 fw-bold form-label mb-2'>
                              Networth in Rupees
                            </label>

                            <div className='position-relative'>
                              <Field
                                type='text'
                                className='form-control form-control-solid'
                                placeholder='Enter card number'
                                name='networthinRupees'
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='networthinRupees' />
                              </div>
                            </div>
                          </div>

                          <div className='d-flex flex-column mb-7 fv-row'>
                            <label className='required fs-6 fw-bold form-label mb-2'>
                              Occupation
                            </label>

                            <div className='position-relative'>
                              <Field
                                type='text'
                                className='form-control form-control-solid'
                                placeholder='Enter occupation'
                                name='occupation'
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='occupation' />
                              </div>
                            </div>
                          </div>

                          {/* <div className='d-flex flex-column mb-7 fv-row'>
                            <label className='required fs-6 fw-bold form-label mb-2'>
                              Politically Exposed Person
                            </label>

                            <div className='position-relative'>
                              <Field
                                type='text'
                                className='form-control form-control-solid'
                                placeholder='Enter card number'
                                name='politicallyExposedPerson'
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='politicallyExposedPerson' />
                              </div>
                            </div>
                          </div> */}
                          <div className='row mb-10'>
                            <div className='col-md-8 fv-row'>
                              <label className='required fs-6 fw-bold form-label mb-2'>
                                Nominee
                              </label>

                              <div className='row fv-row'>
                                <div className='col-8'>
                                  <Field
                                    as='select'
                                    name='nominee'
                                    className='form-select form-select-solid'
                                  >
                                    <option>Select</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                  </Field>
                                  <div className='text-danger'>
                                    <ErrorMessage name='nominee' />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {values.values.nominee === 'yes' && (
                            <div className='row mb-10'>
                              <div className='col-md-6 fv-row'>
                                <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                                  <span className='required'>Nominee First Name</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Enter Nominee First Name'
                                  ></i>
                                </label>

                                <div className='position-relative'>
                                  <Field
                                    type='text'
                                    className='form-control form-control-solid'
                                    placeholder='Nominee First Name'
                                    name='nomineeFirstName'
                                  />
                                  <div className='text-danger'>
                                    <ErrorMessage name='nomineeFirstName' />
                                  </div>
                                </div>
                              </div>
                              <div className='col-md-6 fv-row'>
                                <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                                  <span className='required'>Nominee Last Name</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Enter Nominee Last Name'
                                  ></i>
                                </label>

                                <div className='position-relative'>
                                  <Field
                                    type='text'
                                    className='form-control form-control-solid'
                                    placeholder='Nominee Last Name'
                                    name='nomineeLastName'
                                  />
                                  <div className='text-danger'>
                                    <ErrorMessage name='nomineeLastName' />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {/* <div className='row mb-10'>
                            <div className='col-md-4 fv-row'>
                              <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                                <span className='required'>Nominee Address</span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Enter Nominee Address'
                                ></i>
                              </label>

                              <div className='position-relative'>
                                <Field
                                  type='text'
                                  className='form-control form-control-solid'
                                  placeholder='Nominee Address'
                                  name='nomineeApplicantAddress'
                                />
                                <div className='text-danger'>
                                  <ErrorMessage name='nomineeApplicantAddress' />
                                </div>
                              </div>
                            </div>

                            <div className='col-md-4 fv-row'>
                              <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                                <span className='required'>City </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Enter Nominee City '
                                ></i>
                              </label>

                              <div className='position-relative'>
                                <Field
                                  type='text'
                                  className='form-control form-control-solid'
                                  placeholder='Nominee City '
                                  name='nomineeCity'
                                />
                                <div className='text-danger'>
                                  <ErrorMessage name='nomineeCity' />
                                </div>
                              </div>
                            </div>
                          </div> */}
                          {/* <div className='row mb-10'> */}
                          {/* <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                <span className='required'>State </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Applicant State  . '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='nomineeState'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='nomineeState' />
                              </div>
                            </div> */}

                          {/* <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                <span className='required'>Nominee Country </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Nominee Country   . '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='nomineeCountry'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='nomineeCountry' />
                              </div>
                            </div> */}

                          {/* <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                <span className='required'>Pin Code </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Applicant Pin Code  . '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='nomineePinCode'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='nomineePinCode' />
                              </div>
                            </div> */}
                          {/* </div> */}
                          <div className='row mb-10'>
                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                <span className='required'>Nominee Mobile </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Nominee Mobile  . '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='nomineeMobile'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='nomineeMobile' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                <span className='required'>Date of Birth </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Nominee Date of Birth    . '
                                ></i>
                              </label>

                              <Field
                                type='date'
                                className='form-control form-control-lg form-control-solid'
                                name='nomineeDateofBirth'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='nomineeDateofBirth' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                <span className='required'>Relationship with BO </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Applicant Relationship with BO  . '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='nomineeRelationshipwithBO'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='nomineeRelationshipwithBO' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div data-kt-stepper-element='content'>
                        <div className='w-100 text-center'>
                          {/* <h1 className='fw-bolder text-dark mb-3'>Release!</h1>

                          <div className='text-muted fw-bold fs-3'>
                            Submit your app to kickstart your project.
                          </div> */}
                          <div className='row mb-10'>
                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Equity/Balance - Purchase/Switch </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Equity/Balance - Purchase/Switch  . '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='equityBalancePurchaseSwitch'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='equityBalancePurchaseSwitch' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Equity/Balance - Redemption </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Equity/Balance- Redemption    . '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='equityBalanceRedemption'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='equityBalanceRedemption' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Equity/Balance - SIP </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Equity/Balance-SIP . '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='equityBalanceSIP'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='equityBalanceSIP' />
                              </div>
                            </div>
                          </div>

                          <div className='row mb-10'>
                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Debt-Purchase/Switch </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Debt-Purchase/Switch. '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='debtPurchaseSwitch'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='debtPurchaseSwitch' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Debt-Redemption </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Debt-Redemption . '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='debtRedemption'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='debtRedemption' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Debt-SIP </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Debt-SIP. '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='debtSIP'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='debtSIP' />
                              </div>
                            </div>
                          </div>
                          <div className='row mb-10'>
                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Cash-Purchase/Switch</span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Cash-Purchase/Switch '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='cashPurchaseSwitch'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='cashPurchaseSwitch' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Cash-Redemption </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Cash-Redemption. '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='cashRedemption'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='cashRedemption' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Cash-SIP</span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Cash-SIP. '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='cashSIP'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='cashSIP' />
                              </div>
                            </div>
                          </div>

                          <div className='row mb-10'>
                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Others-Purchase/Switch</span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Others-Purchase/Switch '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='othersPurchaseSwitch'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='othersPurchaseSwitch' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Others-Redemption </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Others-Redemption. '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='othersRedemption'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='othersRedemption' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Others-SIP </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Others-SIP . '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='othersSIP'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='othersSIP' />
                              </div>
                            </div>
                          </div>
                          {/* <div className='row mb-10'>
                            <div className='fv-row col-md-6'>
                              <label className='col-lg-3 col-form-label '>Direct Equity:</label>
                              <label className='form-check form-check-custom form-check-solid form-switch mb-5'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  name='directEquity'
                                />
                                <span className='form-check-label text-muted'>
                                  0.50% or Rs 20/= on executed order whichever is lower
                                </span>
                              </label>
                            </div>
                            <div className='fv-row col-md-6'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                <span className='required'>Enter the Rate</span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Enter the Rate '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='equityentertheRate'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='equityentertheRate' />
                              </div>
                            </div>
                          </div> */}

                          {/* <div className='row mb-10'>
                            <div className='fv-row col-md-6'>
                              <label className='col-lg-3 col-form-label '>Debt:</label>
                              <label className='form-check form-check-custom form-check-solid form-switch mb-5'>
                                <input className='form-check-input' type='checkbox' name='Debt' />
                                <span className='form-check-label text-muted'>
                                  {' '}
                                  0.50% or Rs 20/= on executed order whichever is lower
                                </span>
                              </label>
                            </div>
                            <div className='fv-row col-md-6'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                <span className='required'>Enter the Rate</span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Enter the Rate '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='DebtentertheRate'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='DebtentertheRate' />
                              </div>
                            </div>
                          </div> */}
                          {/* <div className='row mb-10'>
                            <div className='fv-row col-md-6'>
                              <label className='col-lg-3 col-form-label '>Liquid</label>
                              <label className='form-check form-check-custom form-check-solid form-switch mb-5'>
                                <input className='form-check-input' type='checkbox' name='Liquid' />
                                <span className='form-check-label text-muted'>
                                  {' '}
                                  0.50% or Rs 20/= on executed order whichever is lower
                                </span>
                              </label>
                            </div>
                          </div> */}
                          <div className='row mb-10'>
                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Nationality </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Nationality  '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='nationalityof'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='nationalityof' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Country of Birth </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Country of Birth '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='countryofBirth'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='countryofBirth' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Place of Birth</span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Place of Birth . '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='placeofBirth'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='placeofBirth' />
                              </div>
                            </div>
                          </div>
                          <div className='row mb-10'>
                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Address Type </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Address Type  '
                                ></i>
                              </label>

                              <Field
                                as='select'
                                name='addressType'
                                className='form-select form-select-solid'
                              >
                                <option>Select</option>
                                <option value='Residential'>Residential</option>
                                <option value='Business'>Business</option>
                                <option value='Residential  &amp; Business'>
                                  Residential &amp; Business
                                </option>
                                <option value='Registered Office'>Registered Office</option>
                              </Field>
                              <div className='text-danger'>
                                <ErrorMessage name='addressType' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>Phone no. </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Phone no.  '
                                ></i>
                              </label>

                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name='phoneno'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='phoneno' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2 h-50'>
                                <span className='required'>
                                  Is your country of Tax Residency other than India ?
                                </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Tax Residency . '
                                ></i>
                              </label>

                              <Field
                                as='select'
                                name='taxResidency'
                                className='form-select form-select-solid'
                              >
                                <option>Select</option>
                                <option value='yes'>Yes</option>
                                <option value='no'>No</option>
                              </Field>
                              <div className='text-danger'>
                                <ErrorMessage name='taxResidency' />
                              </div>
                            </div>
                          </div>
                          {/* <div className='row mb-10'>
                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                <span className='required'>Upload Copy of PAN</span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='  '
                                ></i>
                              </label>

                              <Field
                                type='file'
                                className='form-control form-control-lg form-control-solid'
                                name='uploadPan'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='uploadPan' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                <span className='required'>Upload Bank Proof </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify .  '
                                ></i>
                              </label>

                              <Field
                                type='file'
                                className='form-control form-control-lg form-control-solid'
                                name='uploadBankProof'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='uploadBankProof' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                <span className='required'>Upload Specimen Signature</span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify . '
                                ></i>
                              </label>

                              <Field
                                type='file'
                                className='form-control form-control-lg form-control-solid'
                                name='uploadSpecimen'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='uploadSpecimen' />
                              </div>
                            </div>
                          </div> */}
                          {/* <div className='row mb-10'>
                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                <span className='required'>
                                  Upload Additional Document (Bank Proof){' '}
                                </span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='  '
                                ></i>
                              </label>

                              <Field
                                type='file'
                                className='form-control form-control-lg form-control-solid'
                                name='uploadAdditionalDocument'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='uploadAdditionalDocument' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                <span className='required'>Upload Other Document</span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Upload Other Document.  '
                                ></i>
                              </label>

                              <Field
                                type='file'
                                className='form-control form-control-lg form-control-solid'
                                name='uploadAdditionalDocumentTwo'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='uploadAdditionalDocumentTwo' />
                              </div>
                            </div>

                            <div className='fv-row col-md-4'>
                              <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                <span className='required'>Upload Upload Other Document 2</span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Specify Upload Other Document 2. '
                                ></i>
                              </label>

                              <Field
                                type='file'
                                className='form-control form-control-lg form-control-solid'
                                name='uploadAdditionalDocumentThree'
                                placeholder=''
                              />
                              <div className='text-danger'>
                                <ErrorMessage name='uploadAdditionalDocumentThree' />
                              </div>
                            </div>
                          </div> */}

                          <div className='row mb-10'>
                            <div className='fv-row col-md-10'>
                              <label className='col-lg-3 col-form-label text-lg-end'>
                                FATCA & CRS TERMS AND CONDITIONS
                              </label>
                              <label className='form-check form-check-custom form-check-solid mb-5'>
                                {/* <label className='form-check form-check-custom form-check-solid form-switch mb-5'> */}

                                <input className='form-check-input' type='checkbox' name='' />
                                <span className='form-check-label text-muted'>
                                  I have understood the information requirements of this Form (read
                                  along with the FATCA & CRS Instructions) and hereby confirm that
                                  the information provided by me/us on this Form is true, correct,
                                  and complete. I also confirm that I have read and understood the
                                  FATCA & CRS Terms and Conditions above and hereby accept the same.
                                </span>
                              </label>
                            </div>
                          </div>

                          {/* <div className='text-center px-4 py-15'>
                            <img
                              src={toAbsoluteUrl('/media/illustrations/sketchy-1/9.png')}
                              alt=''
                              className='w-100 mh-300px'
                            />
                          </div> */}
                        </div>
                      </div>

                      <div className='d-flex flex-stack pt-10'>
                        <div className='me-2'>
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
                              {stepper.current?.currentStepIndex ===
                              stepper.current?.totatStepsNumber!
                                ? 'Submit'
                                : 'Continue'}
                              <KTSVG
                                path='/media/icons/duotune/arrows/arr064.svg'
                                className='svg-icon-3 ms-2 me-0'
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Main}
