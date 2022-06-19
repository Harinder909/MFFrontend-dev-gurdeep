import React, {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import {FundRequest} from './FundRequest'

const FundRequestWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Create Fund Request</PageTitle>
      <FundRequest />
    </>
  )
}

export default FundRequestWrapper
