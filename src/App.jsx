import React, { useState } from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Pages/Sidebar";
import HomePage from "./Pages/HomePage";
import Navbar from "./Pages/Navbar";
import UserManagement from "./Pages/UserManagement";
import EventManagement from "./Pages/EventManagement";
import UsersManagement from "./Pages/UsersManagement";
import PaymentSetting from "./Pages/PaymentSetting";
import Analytics from "./Pages/Analytics";
import AdminManagement from "./Pages/AdminManagement";
import QuotesRequest from "./Pages/QuotesRequest";
import Notifications from "./Pages/Notifications";
import ListOfMembers from "./Pages/ListOfMembers";
import MemborshipSetting from "./Pages/MemborshipSetting";
import CommisionSetting from "./Components/AdminManagement/CommisionSetting";
import FeatureApproval from "./Pages/FeatureApproval";
import Boost_Player_Profile from "./Pages/Boost_Player_Profile";
import Boost_Organizer_Profile from "./Pages/Boost_Organizer_Profile";
import Boost_Event_Visibility from "./Pages/Boost_Event_Visibility";
import ManuallyFeatures from "./Pages/ManuallyFeatures";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#F9F9F9]">
      <BrowserRouter>
        <div className="flex relative min-h-screen overflow-x-hidden">
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar setSidebarOpen={setSidebarOpen} />           
            <div className="flex-1 overflow-y-auto bg-gray-50 p-5">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/user-management" element={<UserManagement />} />
                <Route path="/events" element={<EventManagement />} />
                <Route path="/users-management" element={<UsersManagement />} />
                <Route path="/payments" element={<PaymentSetting />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/admins" element={<AdminManagement />} />
                <Route path="/membership" element={<ListOfMembers />} />
                <Route path="/quotes" element={<QuotesRequest />} />
                <Route path="/membership-settings" element={<MemborshipSetting />} />
                <Route path="/commission-setting" element={<CommisionSetting />}/>
                <Route path="/feature-approval" element={<FeatureApproval />} />
                <Route path="/boost-player-profile" element={<Boost_Player_Profile />} />
                <Route path="/boost-organizer-profile" element={<Boost_Organizer_Profile />} />
                <Route path="/boost-event-visibility" element={<Boost_Event_Visibility />} />
                <Route path="/Manually-Feature" element={<ManuallyFeatures />} />  
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;