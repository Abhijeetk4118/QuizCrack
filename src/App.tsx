
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LandingContainer from './containers/LandingContainer/landingcontainer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import QuizContainer from './containers/HomeContainer/quizcontainer';
import React from 'react';

const queryClient = new QueryClient();

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <LandingContainer />
      },
      {
        path: '/quiz',
        element: <QuizContainer />
      }
    ]
  );
  
  return (
    <QueryClientProvider client={queryClient}>
       <>
          <React.Suspense>
            <RouterProvider router={router} />
          </React.Suspense>
        </>
    </QueryClientProvider>
  )
}

export default App

