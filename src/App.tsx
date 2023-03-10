
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { UserNavbar } from "./UserComponent/UserNavbar";
import { AdminHomepage } from "./AdminComponent/scheme/AdminHomepage";
import { UserHomepage } from "./UserComponent/UserHomepage";
import { AdminNavbar } from "./AdminComponent/AdminNavbar";
import { AssignScheme } from "./AdminComponent/AssignScheme";
import { AdminEntry } from "./AdminComponent/AdminEntry";
import { AcceptPayment } from "./AdminComponent/AcceptPayment";
import { PendingPayment } from "./AdminComponent/PendingPayment";
import { ShowProgress } from "./AdminComponent/ShowProgress";
import { UpdatePayment } from "./UserComponent/UpdatePayment";
import { PaymentHistory } from "./UserComponent/PaymentHistory";
import { LoginPage } from "./LoginComponent/LoginPage";
import { UsersPendingPayment } from "./AdminComponent/UsersPendingPayment";
import { PendingPayUser } from "./AdminComponent/PendingPayUser";
import { AvailableChit } from "./UserComponent/AvailableChit";
import { CreateUser } from "./AdminComponent/user/CreateUser";


function App() {

  return (
    <div>
   
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/usernavbar" element={<UserNavbar />} />
          <Route path="/adminhomepage" element={<AdminHomepage />} />
          <Route path="/adminnavbar" element={<AdminNavbar />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/assignscheme" element={<AssignScheme />} />
          <Route path="/adminentry" element={<AdminEntry />} />
          <Route path="/showprogress" element={<ShowProgress />} />
          <Route
            path="/adminentry/:scheme/:amount"
            element={<AdminEntry />}
          />
          <Route path="/pendingpayment" element={<PendingPayment />} />
          <Route path="/acceptpayment" element={<AcceptPayment />} />
          <Route
            path="/pendingpayuser/:schemeName/:userCode"
            element={<PendingPayUser />}
          />
          <Route
            path="/userspendingpayment/:schemeId/:schemeName"
            element={<UsersPendingPayment />}
          />
          <Route path="/userhomepage" element={<UserHomepage />} />
          <Route path="/updatepayment" element={<UpdatePayment />} />
          <Route
            path="/updatepayment/:schemeName"
            element={<UpdatePayment />}
          />
          <Route path="paymenthistory" element={<PaymentHistory />} />
          <Route
            path="/paymenthistory/:schemeName"
            element={<PaymentHistory />}
          />
          <Route path="/availablechitschemes" element={<AvailableChit />} />

        </Routes>
     
    </div>
  );
}

export default App;
