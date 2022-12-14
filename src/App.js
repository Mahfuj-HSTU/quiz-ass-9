import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Main from './components/layout/Main';
import Quizs from './components/Quizs/Quizs';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';

function App () {
  const router = createBrowserRouter( [
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => fetch( 'https://openapi.programming-hero.com/api/quiz' ),
          element: < Home ></Home >,
        },
        {
          path: '/',
          loader: async () => fetch( 'https://openapi.programming-hero.com/api/quiz' ),
          element: <Topics></Topics>,
        },
        {
          path: 'topics/:topic/:id',
          loader: async ( { params } ) => fetch( `https://openapi.programming-hero.com/api/quiz/${ params.id }` ),
          element: <Quizs></Quizs>
        },
        {
          path: '/statistics',
          loader: async () => fetch( 'https://openapi.programming-hero.com/api/quiz' ),
          element: <Statistics></Statistics>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>,
        }
      ]
    },
    {
      path: '*',
      element: <div className='text-2xl pt-20'>Oops!! <br /> You select the wrong path. Please select the right path</div>,
    }
  ] )
  return (
    <div className="App">
      <RouterProvider router={ router }></RouterProvider>
    </div>
  );
}

export default App;
