import { Route, Switch } from 'react-router-dom'
import { Homepage } from '../pages/home'
import { Profile } from '../pages/profile'

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>

      <Route exact path="/profile/:id">
        <Profile />
      </Route>
    </Switch>
  )
}
