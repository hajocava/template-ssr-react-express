import React from 'react';
import { Router } from 'express';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet'
import { StaticRouter } from 'react-router-dom/server'
import { rootReducers } from '../../client/src/redux/reducers';
import App from '../../client/src/App';
import { SEO } from '../../client/src/components/seo/SEO';

export const router = Router();

router.get('*', (req, res) => {
  const context = {};
  const store = createStore(rootReducers);

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.originalUrl}
        context={context}
      >
        {/* There is no need to add the App component, as the entire 
        app is rendered once the client browser downloads the .js 
        content (you can see it in the server/views/index.ejs file). 
        You should only add the components here that generate content 
        for SEO */}
        <App />

        {/* This component is only visible in the source code, it is 
        not visible in render html once our react javascript is executed.*/}
        <SEO /> 
      </StaticRouter>
    </Provider>,
  );

  const finalState = store.getState();

  if (context.url) {
    res.writeHead(301, { Location: context.url });
    res.end();
    
  } else {
    res.status(200).render('../views/index.ejs', {
      html,
      helmet: Helmet.renderStatic(),
      script: JSON.stringify(finalState), // Initial state for redux
    });
  }
});
