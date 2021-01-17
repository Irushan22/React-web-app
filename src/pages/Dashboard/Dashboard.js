import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link,
} from "react-router-dom";
import { Form, FormControl, Button } from "react-bootstrap";
import Shoe from "./Shoe";
import Track from "./Track";
import Anklet from "./anklet";
import Bracelet from "./Bracelet";
import Dashboardindex from "./Dashboardindex";

function Dashboard() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <div className="sidebar-box">
        <div className="sidebar-box-title">
          <h3>Gozt-Runner</h3>
        </div>
        <ul>
          <li>
            <Link to={`${url}`}>Dashboard</Link>
          </li>
          <li>
            <Link to={`${url}/shoe`}>Shoe</Link>
          </li>
          <li>
            <Link to={`${url}/Track`}>Track</Link>
          </li>
          <li>
            <Link to={`${url}/Anklet`}>Anklet</Link>
          </li>
          <li>
            <Link to={`${url}/Bracelet`}>Bracelet</Link>
          </li>
        </ul>
      </div>
      <div className="topbar-box">
        <div className="topbar-box-search">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
        <div className="topbar-box-icons">
          <i class="fa fa-bell-o"></i>
          <i class="fa fa-user-circle"></i>
        </div>
      </div>
      <div>
        <Switch>
          <Route exact path={path}>
            <Dashboardindex />
          </Route>
          <Route path={`${path}/shoe`} component={Shoe}></Route>
          <Route path={`${path}/Track`} component={Track}></Route>
          <Route path={`${path}/Anklet`} component={Anklet}></Route>
          <Route path={`${path}/Bracelet`} component={Bracelet}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
