import {FC} from 'react'

type Props = {
  text?: string
}

const UserTextCell: FC<Props> = ({text}) => <div className='fw-bolder'>{text}</div>

export {UserTextCell}
