import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove } from '@fortawesome/free-solid-svg-icons'
import { PageHeaderDiv } from './style'
import { useHistory } from 'react-router-dom'

export const PageHeader = () => {
  const history = useHistory()
  return (
    <PageHeaderDiv>
      <div
        className="go-home"
        onClick={() => {
          history.push('/')
        }}
      >
        <FontAwesomeIcon icon={faDove} /> <h3>home</h3>
      </div>
    </PageHeaderDiv>
  )
}
