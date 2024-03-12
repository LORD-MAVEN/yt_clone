import './App.css'
import { Provider } from 'react-redux'
import Body from './components/Body'
import store from './utils/store'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import VideoList from './components/VideoList';
import ChannelPage from './components/ChannelPage';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "/watch",
      element: <WatchPage/>
    },
    {
      path: "/video",
      element: <VideoList/>
    },
    {
      path :"/channel",
      element: <ChannelPage/>
    }
  ]
  
  },
])
function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  )
}

export default App
