/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {getUserByToken, login, loginotp} from '../core/_requests'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {useAuth} from '../core/Auth'

const loginSchema = Yup.object().shape({
  ucc: Yup.string()
    .min(6, 'Minimum 5 symbols')
    .max(10, 'Maximum 10 symbols')
    .required('UCC is required'),
  otp: Yup.string()
    .min(4, 'Minimum 3 symbols')
    .max(4, 'Maximum 10 symbols')
    .required('OTP is required'),
})

const initialValues = {
  ucc: '',
  otp: 'xxxx',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const [loading, setLoading] = useState(false)
  const [uccValid, setUccValid] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [otpToken,setOtpToken] = useState('')
  const {saveAuth, setCurrentUser} = useAuth()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      var userData: any = []
      var otp = ''
      if(currentStep === 1){
        try {
          const {data: auth} = await loginotp (values.ucc)
          const fetchOrTimeout = Promise.race([{data: auth}, await(10 * 60 * 1000)]);
          console.log(auth)
          if (auth.status === true) {
            setUccValid(true)
            setCurrentStep(2)
            setOtpToken(auth.data.token)
           // saveAuth(auth)
          //  const data = await getUserByToken(auth)
          //  setCurrentUser(data)
            setSubmitting(false)

          } else {
            saveAuth(undefined)
            setUccValid(false)
            setStatus('The ucc detail is incorrect')
            setSubmitting(false)
            setLoading(false)
          }
        } catch (error) {
          console.error(error)
          saveAuth(undefined)
          setUccValid(false)
          setStatus('The ucc detail is incorrect')
          setSubmitting(false)
          setLoading(false)
        }
    }else{
      setLoading(true)
      try {
        const {data: auth} = await login(values.ucc, values.otp)
        
        if (auth.status === true) {
          saveAuth(auth)
          const data = await getUserByToken(auth)
          setCurrentUser(data)
        } else {
          saveAuth(undefined)
         // setUccValid(false)
          setStatus('OTP is incorrect')
          setSubmitting(false)
          setLoading(false)
        }
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setUccValid(false)
        setStatus('OTP is incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    }
    },
  })

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      <div className='text-center mb-10'>
        <h1 className='text-dark mb-3'>Login</h1>
      </div>
      {/* begin::Heading */}

      {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : (
        <></>
        /* <div className='mb-10 bg-light-info p-8 rounded'>
          <div className='text-info'>
            Use account <strong>admin@demo.com</strong> and otp <strong>demo</strong> to
            continue.
          </div>
        </div>*/
      )}

      {!uccValid ? (
        <div className='fv-row mb-10'>
          <label className='form-label fs-6 fw-bolder text-dark'>UCC</label>
          <input
            placeholder='Enter your UCC'
            {...formik.getFieldProps('ucc')}
            className={clsx(
              'form-control form-control-lg form-control-solid',
              {'is-invalid': formik.touched.ucc && formik.errors.ucc},
              {
                'is-valid': formik.touched.ucc && !formik.errors.ucc,
              }
            )}
            type='ucc'
            name='ucc'
            autoComplete='off'
          />
          {formik.touched.ucc && formik.errors.ucc && (
            <div className='fv-plugins-message-container'>
              <span role='alert'>{formik.errors.ucc}</span>
            </div>
          )}
        </div>
      ) : (
        <div className='fv-row mb-10'>
          <div className='d-flex justify-content-between mt-n5'>
            <div className='d-flex flex-stack mb-2'>
              {/* begin::Label */}
              <label className='form-label fw-bolder text-dark fs-6 mb-0'>OTP</label>
              {/* end::Label */}
              {/* begin::Link */}
              {/* <Link
              to='/auth/forgot-otp'
              className='link-primary fs-6 fw-bolder'
              style={{marginLeft: '5px'}}
            >
              Forgot OTP ?
            </Link> */}
              {/* end::Link */}
            </div>
          </div>
          <input
            placeholder='Enter the OTP'
            type='text'
            autoComplete='off'
            {...formik.getFieldProps('otp')}
            className={clsx(
              'form-control form-control-lg form-control-solid',
              {
                'is-invalid': formik.touched.otp && formik.errors.otp,
              },
              {
                'is-valid': formik.touched.otp && !formik.errors.otp,
              }
            )}
          />
          {formik.touched.otp && formik.errors.otp && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.otp}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* begin::Action */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
          
          disabled={formik.isSubmitting}
        >
          {!loading && !uccValid ? (
            <span className='indicator-label'>Continue</span>
          ) : (
            !loading && <span className='indicator-label'>Login</span>
          )}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please Wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>

        {/* begin::Separator */}

        {/* end::Separator */}

        {/* begin::Google link */}
        {
          /*<a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100 mb-5'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
            className='h-20px me-3'
          />
          Continue with Google
          </a> */
          <></>
        }
        {/* end::Google link */}

        {/* begin::Google link */}

        {/* end::Google link */}

        {/* begin::Google link */}

        {/* end::Google link */}
      </div>
      {/* end::Action */}
    </form>
  )
}
