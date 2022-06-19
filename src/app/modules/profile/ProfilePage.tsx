import React, {useState} from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {IProfileDetails, profileDetailsInitValues as initialValues} from './SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {useAuth} from '../auth/core/Auth'
import {ConnectedAccounts} from './ConnectedAccounts'
import {SignInMethod} from './SignInMethod'
import {Notifications} from './Notifications'
import {EmailPreferences} from './EmailPreferences'
import {DeactivateAccount} from './DeactivateAccount'

const profileDetailsSchema = Yup.object().shape({
  fName: Yup.string().required('First name is required'),
  lName: Yup.string().required('Last name is required'),
  companyId: Yup.string().required('Company ID is required'),
  contactPhone: Yup.string().required('Contact phone is required'),
})

const ProfilePage: React.FC = () => {
  const [data, setData] = useState<IProfileDetails>(initialValues)
  const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IProfileDetails>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(() => {
        values.communications.email = data.communications.email
        values.communications.phone = data.communications.phone
        values.allowMarketing = data.allowMarketing
        const updatedData = Object.assign(data, values)
        setData(updatedData)
        setLoading(false)
      }, 1000)
    },
  })

  const profileBreadCrumbs: Array<PageLink> = [
    {
      title: 'Profile',
      path: '/profile/',
      isSeparator: false,
      isActive: false,
    },
    {
      title: '',
      path: '',
      isSeparator: true,
      isActive: false,
    },
  ]

  const auth = useAuth()

  return (
    <>
      <div className='card mb-5 mb-xl-10'>
        <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>

        <div
          className='card-header border-0 cursor-pointer'
          role='button'
          data-bs-toggle='collapse'
          data-bs-target='#kt_account_profile_details'
          aria-expanded='true'
          aria-controls='kt_account_profile_details'
        >
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Profile Details</h3>
          </div>
        </div>

        <div id='kt_account_profile_details' className='collapse show'>
          <form onSubmit={formik.handleSubmit} noValidate className='form'>
            <div className='card-body border-top p-9'>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>Avatar</label>
                <div className='col-lg-8'>
                  <div
                    className='image-input image-input-outline'
                    data-kt-image-input='true'
                    style={{backgroundImage: `url(${toAbsoluteUrl('/media/avatars/blank.png')})`}}
                  >
                    <div
                      className='image-input-wrapper w-125px h-125px'
                      style={{backgroundImage: `url(${toAbsoluteUrl(data.avatar)})`}}
                    ></div>
                  </div>
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Full Name</label>

                <div className='col-lg-8'>
                  <div className='row'>
                    <div className='col-lg-6 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                        placeholder='First name'
                        value={`${auth.currentUser?.firstName}`}
                      />
                      {formik.touched.fName && formik.errors.fName && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.fName}</div>
                        </div>
                      )}
                    </div>

                    <div className='col-lg-6 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Last name'
                        value={`${auth.currentUser?.lastName}`}
                      />
                      {formik.touched.lName && formik.errors.lName && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.lName}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Company ID</label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company ID name'
                    // value={`${auth.currentUser?.companyId}`}
                  />
                  {formik.touched.companyId && formik.errors.companyId && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.companyId}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Contact Phone</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='tel'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Phone number'
                    value={`${auth.currentUser?.phone}`}
                  />
                  {formik.touched.contactPhone && formik.errors.contactPhone && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.contactPhone}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>Communication</label>

                <div className='col-lg-8 fv-row'>
                  <div className='d-flex align-items-center mt-3'>
                    <label className='form-check form-check-inline form-check-solid me-5'>
                      <input
                        className='form-check-input'
                        name='communication[]'
                        type='checkbox'
                        defaultChecked={data.communications?.email}
                        onChange={() => {
                          updateData({
                            communications: {
                              email: !data.communications?.email,
                              phone: data.communications?.phone,
                            },
                          })
                        }}
                      />
                      <span className='fw-bold ps-2 fs-6'>Email</span>
                    </label>

                    <label className='form-check form-check-inline form-check-solid'>
                      <input
                        className='form-check-input'
                        name='communication[]'
                        type='checkbox'
                        defaultChecked={data.communications?.phone}
                        onChange={() => {
                          updateData({
                            communications: {
                              email: data.communications?.email,
                              phone: !data.communications?.phone,
                            },
                          })
                        }}
                      />
                      <span className='fw-bold ps-2 fs-6'>Phone</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className='row mb-0'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>Allow Marketing</label>

                <div className='col-lg-8 d-flex align-items-center'>
                  <div className='form-check form-check-solid form-switch fv-row'>
                    <input
                      className='form-check-input w-45px h-30px'
                      type='checkbox'
                      id='allowmarketing'
                      defaultChecked={data.allowMarketing}
                      onChange={() => {
                        updateData({allowMarketing: !data.allowMarketing})
                      }}
                    />
                    <label className='form-check-label'></label>
                  </div>
                </div>
              </div>
            </div>

            <div className='card-footer d-flex justify-content-end py-6 px-9'>
              <button type='submit' className='btn btn-primary' disabled={loading}>
                {!loading && 'Request Changes'}
                {loading && (
                  <span className='indicator-progress' style={{display: 'block'}}>
                    Please wait...{' '}
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <SignInMethod />
      <ConnectedAccounts />
      <EmailPreferences />
      <Notifications />
      <DeactivateAccount />
    </>
  )
}

export default ProfilePage
