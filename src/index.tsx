import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import CharactersDetail from 'pages/CharactersDetail';
import Home from 'pages/Home';
import { GlobalStyles } from 'styles/global';
import theme from 'styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero">
          <Route path=":characterId" element={<CharactersDetail />} />
        </Route>

        <Route
          path="*"
          element={
            <img
              src="data:image/jpeg;base64,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"
              alt="gato"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
