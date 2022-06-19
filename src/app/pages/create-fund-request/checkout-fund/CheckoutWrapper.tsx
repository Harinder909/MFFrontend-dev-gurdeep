import React, {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {Checkout} from './Checkout'

const CheckoutWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Checkout Fund</PageTitle>
      <Checkout />
    </>
  )
}

export default CheckoutWrapper
