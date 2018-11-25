import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';

const RouterComponent = () => {
    return (
      <Router sceneStyle={{paddingTop: 65}}>
        <Scene key="root" hideNavBar>

          <Scene key="auth">

            <Scene key="login"
             component={LoginForm}
             title="Please Login" />

          </Scene>

          <Scene key="main">

            <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="employeeList"
            component={EmployeeList}
            title="Employees" />

            <Scene key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"  />

          </Scene>

        </Scene>
      </Router>
    );
};

export default RouterComponent;
