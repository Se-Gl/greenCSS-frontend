import { useToastDispatchContext } from './context/ToastContext'
import ToastContent from './ToastContent'

export default function Toast({ type, message, id }) {
  const dispatch = useToastDispatchContext()
  return (
    <>
      {type == 'success' && (
        <ToastContent
          fillColor='#066ef9'
          notification={message}
          onClick={() => {
            dispatch({ type: 'DELETE_TOAST', id: id })
          }}
        />
      )}
      {type == 'error' && (
        <ToastContent
          fillColor='#f90606'
          notification={message}
          onClick={() => {
            dispatch({ type: 'DELETE_TOAST', id: id })
          }}
        />
      )}
      {type == 'warning' && (
        <ToastContent
          fillColor='#f9cf06'
          notification={message}
          onClick={() => {
            dispatch({ type: 'DELETE_TOAST', id: id })
          }}
        />
      )}
    </>
  )
}
