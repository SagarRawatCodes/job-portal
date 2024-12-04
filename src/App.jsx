import { Button } from "@/components/ui/button"
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/app-layout";
import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import JobPage from "./pages/job";
import JobListing from "./pages/job-listing";
import PostJob from "./pages/post-job";
import SaveJobs from "./pages/saved-job";
import MyJobs from "./pages/my-jobs";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from "./components/protected-route";


const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:  
        <LandingPage/>,
       
      },{
        path:"/onboarding",
        element:
        (
        <ProtectedRoute>
          <Onboarding/>
        </ProtectedRoute>
        ),
      },{
        path:"/jobs",
        element:
        (
        <ProtectedRoute>
        <JobListing/>
        </ProtectedRoute>
        ),
      },{
        path:"/job/:id",
        element:
        (
        <ProtectedRoute>
        <JobPage/>
        </ProtectedRoute>
        ),
      },{
        path:"/post-job",
        element:
        (<ProtectedRoute>
          <PostJob/>
          </ProtectedRoute>
        ),
      },{
        path:"/saved-jobs",
        element:
        (
        <ProtectedRoute>
        <SaveJobs/>
        </ProtectedRoute>
        ),
      },{
        path:"/my-jobs",
        element:
        (
        <ProtectedRoute>
        <MyJobs/>
        </ProtectedRoute>
      ),     
      },
    ]
  }
])

function App() {
  
 return(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  
 );
}
export default App;
    