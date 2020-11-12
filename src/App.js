import React   from 'react';
import Layout  from './hoc/Layout/Layout';
import Shop    from './containers/shop/Shop';
import About   from './containers/about/about';   
import Auth    from './containers/Auth/Auth';
import {Route, Switch} from 'react-router-dom';
import ErrorNotFound   from './components/errors/error404/Error404';
import AdminPanel      from './containers/Admin/AdminPanel';
import BookPage        from './components/shop/bookPage/bookPage';


export default () => {
  return (
      <Layout>
        <Switch>
          <Route path='/' component={Shop} exact />
          <Route path='/about' component={About} exact />
          <Route path='/auth' component={Auth} exact />
          <Route path='/adminPanel' component={AdminPanel} />
          <Route path='/books/:id' component={BookPage} />
          <Route component={ErrorNotFound} />
        </Switch>
      </Layout>
  );
}


