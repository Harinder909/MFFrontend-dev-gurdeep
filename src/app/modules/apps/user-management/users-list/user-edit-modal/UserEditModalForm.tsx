import {FC, useState} from 'react'

import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {initialUser, User} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {UsersListLoading} from '../components/loading/UsersListLoading'
import {createUser, updateUser} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'

type Props = {
  isUserLoading: boolean
  user: User
}

const editUserSchema = Yup.object().shape({

 
})

const UserEditModalForm: FC<Props> = ({user, isUserLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [userForEdit] = useState<User>({
    ...user,
    divReinv: user.divReinv || initialUser.divReinv,
    investor: user.investor || initialUser.investor,
    productType: user.productType || initialUser.productType,
    ucc: user.ucc || initialUser.ucc,
    isin: user.isin || initialUser.isin,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  const userAvatarImg = toAbsoluteUrl(`/media/${userForEdit.divReinv}`)

  const formik = useFormik({
    initialValues: userForEdit,
    validationSchema: editUserSchema,
    onSubmit: async (values, {setSubmitting}) => {
      console.log("Hello world!");
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateUser(values)
        } else {
          await createUser(values)
        }
      } catch (ex) {
        console.log(ex)
      } finally {
        setSubmitting(true)
        cancel(true)
      }
    },
  })

  return (
    <>
      <form id='kt_modal_add_user_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_user_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_user_header'
          data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
          data-kt-scroll-offset='300px'
        >
          {/* begin::Input group *
          <div className='fv-row mb-7'>
            {/* begin::Label *
            <label className='d-block fw-bold fs-6 mb-5'>Avatar</label>
            {/* end::Label */}

            {/* begin::Image input *
            <div
              className='image-input image-input-outline'
              data-kt-image-input='true'
              style={{backgroundImage: `url('${blankImg}')`}}
            >
              {/* begin::Preview existing avatar *
              <div
                className='image-input-wrapper w-125px h-125px'
                style={{backgroundImage: `url('${userAvatarImg}')`}}
              ></div>
              {/* end::Preview existing avatar */}

              {/* begin::Label */}
              {/* <label
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='change'
              data-bs-toggle='tooltip'
              title='Change avatar'
            >
              <i className='bi bi-pencil-fill fs-7'></i>

              <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
              <input type='hidden' name='avatar_remove' />
            </label> */}
              {/* end::Label */}

              {/* begin::Cancel */}
              {/* <span
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='cancel'
              data-bs-toggle='tooltip'
              title='Cancel avatar'
            >
              <i className='bi bi-x fs-2'></i>
            </span> */}
              {/* end::Cancel */}

              {/* begin::Remove */}
              {/* <span
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='remove'
              data-bs-toggle='tooltip'
              title='Remove avatar'
            >
              <i className='bi bi-x fs-2'></i>
            </span> */}
              {/* end::Remove *
            </div> */}
            {/* end::Image input */}

            {/* begin::Hint */}
            {/* <div className='form-text'>Allowed file types: png, jpg, jpeg.</div> */}
            {/* end::Hint *
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Lock-in Period</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='Lock-in Period'
              {...formik.getFieldProps('lockinPeriod')}
              type='number'
              name='lockinPeriod'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.ucc && formik.errors.ucc},
                {
                  'is-valid': formik.touched.ucc && !formik.errors.ucc,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.ucc && formik.errors.ucc && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.ucc}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Transaction Id</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='Transaction Id'
              {...formik.getFieldProps('transactionId')}
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.isin && formik.errors.isin},
                {
                  'is-valid': formik.touched.isin && !formik.errors.isin,
                }
              )}
              type='text'
              name='transactionId'
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {/* end::Input */}
            {formik.touched.isin && formik.errors.isin && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.isin}</span>
              </div>
            )}
          </div>
          {/* end::Input group */}

          {/* end::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Transaction Order Date</label>
            {/* end::Label */}
            {/* begin::Input */}
            <input
              placeholder='Transaction Order Date'
              {...formik.getFieldProps('transactionDate')}
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.isin && formik.errors.isin},
                {
                  'is-valid': formik.touched.isin && !formik.errors.isin,
                }
              )}
              type='Date'
              name='transactionDate'
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {/* end::Input */}
            {formik.touched.isin && formik.errors.isin && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.isin}</span>
              </div>
            )}
          </div>
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Bank debit/payment Date</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='Bank debit/payment Date'
              {...formik.getFieldProps('bankDebitPaymentDate')}
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.isin && formik.errors.isin},
                {
                  'is-valid': formik.touched.isin && !formik.errors.isin,
                }
              )}
              type='Date'
              name='bankPaymentDate'
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {/* end::Input */}
            {formik.touched.isin && formik.errors.isin && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.isin}</span>
              </div>
            )}
          </div>
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Folio No</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='Folio No'
              {...formik.getFieldProps('folioNo')}
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.isin && formik.errors.isin},
                {
                  'is-valid': formik.touched.isin && !formik.errors.isin,
                }
              )}
              type='text'
              name='folioNo'
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {/* end::Input */}
            {formik.touched.isin && formik.errors.isin && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.isin}</span>
              </div>
            )}
          </div>
          {/* end::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Exchange Order Id</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='Exchange Order Id'
              {...formik.getFieldProps('exchangeOrderId')}
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.isin && formik.errors.isin},
                {
                  'is-valid': formik.touched.isin && !formik.errors.isin,
                }
              )}
              type='text'
              name='exchangeOrderId'
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {/* end::Input */}
            {formik.touched.isin && formik.errors.isin && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.isin}</span>
              </div>
            )}
          </div>
          {/* end::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Investment Route</label>
            
            
            <select
              {...formik.getFieldProps('investmentRoute')}
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.isin && formik.errors.isin},
                {
                  'is-valid': formik.touched.isin && !formik.errors.isin,
                }
              )}
              name='investmentRoute'
              aria-label='Default select example'
              
            >
              <option>Select </option>
              <option value='Kfintech'>Kfintech</option>
              <option value='CAMS'>CAMS</option>
            </select>
            {/* begin::Input group */}
          </div>

          {/* end::Input group */}
        </div>
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isUserLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
           // disabled={formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isUserLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isUserLoading) && <UsersListLoading />}
    </>
  )
}

export {UserEditModalForm}
