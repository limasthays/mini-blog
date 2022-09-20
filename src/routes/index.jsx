import { Route, Switch } from 'react-router-dom'
import { Homepage } from '../pages/home'

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  )
}
