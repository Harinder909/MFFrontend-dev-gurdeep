import React, {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {BuyMF} from './BuyMF'

const BuyMF_Wrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Purchase Mutual Funds</PageTitle>
      <BuyMF />
    </>
  )
}

export default BuyMF_Wrapper
