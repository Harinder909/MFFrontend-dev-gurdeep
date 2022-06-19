import {Column} from 'react-table'
//import {UserInfoCell} from './UserInfoCell'
//import {UserLastLoginCell} from './UserLastLoginCell'
//import {UserTwoStepsCell} from './UserTwoStepsCell'
import {UserActionsCell} from './UserActionsCell'
//import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
//import {UserSelectionHeader} from './UserSelectionHeader'
import {User} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Exchange Type' className='min-w-125px' />,
    accessor: 'exchangeSubType',
  },
  
  
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
