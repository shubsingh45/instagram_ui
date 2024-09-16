import './App.css';
import { BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom'
import Home from './Pages.js/Home';
import SearchPage from './Pages.js/SearchPage';
import CreatePost from './Pages.js/CreatePost/CreatePost'
import Reels from './Pages.js/Reels';
import Profile from './Pages.js/Profile';
import Notification from './Pages.js/Notification';
import LikeNotifi from './Pages.js/LikeNotifi';
import SignIn from './Pages.js/SignIn';
import SignUp from './Pages.js/SignUp';
import ShowUserToFollw from './Component.js/ShowUserToFollw';
import BigScreenHeader from './Component.js/BigScreenHeader';
import SmallScreenHeader from './Component.js/SmallScreenHeader';
import PrivateRoute from './Component.js/PrivateRoute';
import { useSelector } from 'react-redux';
import MainPage from './Pages.js/MainPage';
import ForgetPassword from './Pages.js/ForgetPassword';
import Message from './Pages.js/Message';
import EditProfile from './Pages.js/EditProfile';
import { useState } from 'react';
import UserMessagePage from './Component.js/UserMessagePage';
import AdminDashBoard from './Pages.js/AdminDashBoard';


function App() {
  const {currentUser} = useSelector(state => state.user)
  const [swipePage, setSwipePage] = useState(false)
  return (
    <BrowserRouter>



    <div className=" sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row">
    <MainPage/>

      <Routes>



        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/create' element={<CreatePost/>}/>
        <Route path='/reels' element={<Reels/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/editprofile' element={<EditProfile/>}/>
        <Route path='/usermessagepage/:username' element={<UserMessagePage/>}/>
        <Route path='/like' element={<LikeNotifi/>}/>
        <Route path='/admindashboard' element={<AdminDashBoard/>}/>

          <Route path='/signup' element={<SignUp/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
          <Route path='/signin' element={<SignIn/>}/>

          

       

        



      </Routes>
      
     { !currentUser.isAdmin &&
   (
      <ShowUserToFollw/>

     )

      
     }

      
    
      </div>
    </BrowserRouter>

  );
}

export default App;
