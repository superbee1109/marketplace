import { Dispatch } from 'redux'
import { CallHistoryMethodAction } from 'connected-react-router'
import {
  executeOrderRequest,
  ExecuteOrderRequestAction
} from '../../modules/order/actions'

export type Props = {
  onExecuteOrder: typeof executeOrderRequest
  onNavigate: (path: string) => void
}

export type MapStateProps = {}
export type MapDispatchProps = Pick<Props, 'onNavigate' | 'onExecuteOrder'>
export type MapDispatch = Dispatch<
  CallHistoryMethodAction | ExecuteOrderRequestAction
>