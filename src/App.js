import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation"
//import Todo from "./components/Todo";

function App() {
  //localhost:3000/products
  //my-page.com /

  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
      {/* <h1>My Todos</h1>
      <Todo text='React course'/>
      <Todo text='React second'/>
      <Todo text='React master'/> */}
    </div>
  );
}

export default App;
