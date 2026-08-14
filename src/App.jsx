import './App.css';

import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Layout from './components/Layouts/Layout';

import Home from './pages/Home';
import Register from './pages/Registration/Register';
import Login from './pages/Login/Login';
import Students from './pages/Student/Students';

import StudentDetails from './components/StudentDetails';
import Dashboard from './components/Dashboard/Dashboard';

import NotFound from './pages/NotFound/NotFound';

import CompanyRegistration from './pages/CompanyRegistration/CompanyRegistration';
import Companies from './components/Companies/Companies';

import EditStudent from './pages/EditStudent/EditStudent';
import EditCompany from './pages/EditCompany/EditCompany';

import Placements from './pages/Placements/Placements';
import PlacementRegistration from './pages/PlacementRegsistration/PlacementRegistration';

import Reports from './pages/Reports/Reports';
import Settings from './pages/Settings/Settings';

import PrivateRoute from './components/PrivateRoute';


function App() {

  const [students, setStudents] = useState([]);

  return (
    <Routes>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/student/:id"
          element={<StudentDetails />}
        />

        <Route
          path="/students/edit/:id"
          element={
            <EditStudent
              students={students}
              setStudents={setStudents}
            />
          }
        />

        <Route
          path="/company-registration"
          element={<CompanyRegistration />}
        />

        <Route
          path="/companies"
          element={<Companies />}
        />

        <Route
          path="/companies/edit/:id"
          element={<EditCompany />}
        />

        <Route
          path="/placements"
          element={<Placements />}
        />

        <Route
          path="/placements/new"
          element={<PlacementRegistration />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Route>

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default App;
