import { StatusContent } from './style'

export const Status = ({ status }) => {
  return (
    <StatusContent>
      {status === '200' ? (
        <span className="success">status {status} - success!! :)</span>
      ) : (
        <span> {status}</span>
      )}
    </StatusContent>
  )
}
