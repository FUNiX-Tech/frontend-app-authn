import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { AppProvider } from '@edx/frontend-platform/react';
import { Helmet } from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router-dom';

import {
  Logistration, NotFoundPage, registerIcons, UnAuthOnlyRoute,
} from './common-components';
import configureStore from './data/configureStore';
import {
  LOGIN_PAGE, PAGE_NOT_FOUND, PASSWORD_RESET_CONFIRM, REGISTER_PAGE, RESET_PAGE, WELCOME_PAGE,
} from './data/constants';
import { updatePathWithQueryParams } from './data/utils';
import ForgotPasswordPage from './forgot-password';
import ResetPasswordPage from './reset-password';
import { ProgressiveProfiling } from './welcome';
import './index.scss';
import LoginPageNew from './common-components/LoginPageNew';
import RegisterPageNew from './register/RegisterPageNew';
import ConfirmationPage from './base-component/ConfirmationPage';
import ForgotPassword from './reset-password/ForgotPassword';

registerIcons();

const MainApp = () => (
  <AppProvider store={configureStore()}>
    <Helmet>
      <link rel="shortcut icon" href={getConfig().FAVICON_URL} type="image/x-icon" />
    </Helmet>
    <Switch>
      <Route exact path="/">
        <Redirect to={updatePathWithQueryParams(LOGIN_PAGE)} />
      </Route>
      {/* <UnAuthOnlyRoute exact path={LOGIN_PAGE} render={() => <Logistration selectedPage={LOGIN_PAGE} />} /> */}
      <UnAuthOnlyRoute exact path={LOGIN_PAGE} render={() => <LoginPageNew selectedPage={LOGIN_PAGE}  />} /> 
      {/* <UnAuthOnlyRoute exact path={REGISTER_PAGE} component={Logistration} /> */}
      <UnAuthOnlyRoute exact path={REGISTER_PAGE} render={()=><RegisterPageNew selectedPage={REGISTER_PAGE} />} />
      <UnAuthOnlyRoute exact path={RESET_PAGE} render={()=><ForgotPassword  />} />
      <Route exact path='/confirmation' render={()=><ConfirmationPage />} />
      <Route exact path={PASSWORD_RESET_CONFIRM} component={ResetPasswordPage} />
      <Route exact path={WELCOME_PAGE} component={ProgressiveProfiling} />
      <Route path={PAGE_NOT_FOUND} component={NotFoundPage} />
      <Route path="*">
        <Redirect to={PAGE_NOT_FOUND} />
      </Route>
    </Switch>
  </AppProvider>
);

export default MainApp;
