// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashBoard from "./pages/DashBoard";
import ManagerRegistration from "./pages/ManagerRegistration";
import EditOpportunity from "./pages/EditOpportunity";
import ViewOpportunity from "./pages/ViewOpportunity";
import OpportunityStats from "./pages/OpportunityStats";
import MangerRoles from "./pages/MangerRoles";
import ManageEmails from "./pages/ManageEmails";
import MarketingCampaigns from "./pages/MarketingCampaigns";
import Discussions from "./pages/Discussions";
import ManageNotifications from "./pages/ManageNotifications";
import Login from "./pages/Login";
import Coding from "./pages/Coding";
// Import other page components as needed

const App = () => {
  return (
    <Router>
    <div className="flex justify-between">

      <Navbar className="h-screen"/>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="managerregistration" element={<ManagerRegistration />} />
          <Route path="editopportunity" element={<EditOpportunity />} />
          <Route path="viewopportunity" element={<ViewOpportunity />} />
          <Route path="opportunitystats" element={<OpportunityStats />} />
          <Route path="mangerroles" element={<MangerRoles />} />
          <Route path="manageemails" element={<ManageEmails />} />
          <Route path="marketingcampaigns" element={<MarketingCampaigns />} />
          <Route path="discussions" element={<Discussions />} />
          <Route path="managenotifications" element={<ManageNotifications />} />
          <Route path="coding" element={<Coding />} />
          <Route path="login" element={<Login />} />
        </Routes>
    </div>
      
    </Router>
  );
};

export default App;
