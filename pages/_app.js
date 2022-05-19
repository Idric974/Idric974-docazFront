import '../styles/globals.css';
import Head from 'next/head';
import thunk from 'redux-thunk';
import rootReducer from '../src/Redux/reducers';
import '@fortawesome/fontawesome-svg-core/styles.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

config.autoAddCss = false;

//! Fonction à jouer au démarrage.

import { getPosts } from '../src/Redux/actions/posts.action';
import { getOnlyUserPosts } from '../src/Redux/actions/posts.action';
import { getUsers } from '../src/Redux/actions/users.actions';
import { getUser } from '../src/Redux/actions/user.actions';

//! --------------------------------------------------

//! Outils de développement.

import { composeWithDevTools } from 'redux-devtools-extension';

//! --------------------------------------------------

function MyApp({ Component, pageProps }) {
  //

  //! Mise en place du useContext.

  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: 'get',
        url: `${process.env.NEXT_PUBLIC_ANALYTICS_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          // console.log('👍 Uid ===> Page _app.tsx ===> Token :', res.data);

          setUid(res.data);
        })
        .catch((err) =>
          console.log('❌ Uid ===> Page _app.tsx ===> Token : No token')
        );
    };
    fetchToken();
  }, [uid]);

  //!------------------------------------------

  //! Le store de redux.

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  //! --------------------------------------------------

  useEffect(() => {
    // store.dispatch(getUser(uid));
    // store.dispatch(getUsers());
    // store.dispatch(getPosts());
    // store.dispatch(getOnlyUserPosts(uid));
  }, [store, uid]);

  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Docaz.re</title>
          <meta name="description" content="Trouvez vos pièces détachées" />
          <link rel="icon" href="/Icone_docaz.re_256x256_fond_tsp.ico" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
