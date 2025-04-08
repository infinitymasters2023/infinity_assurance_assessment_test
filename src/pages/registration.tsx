import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdb-react-ui-kit';
import Cookies from 'js-cookie';

const App = () => {
  const [form, setForm] = useState({
    userId: '',
    userName: '',
    role: '',
    lastLogin: '',
    fName: '',
    lName: '',
    department: '',
    doj: '',
    mgrId: '',
    seniority: '',
    empCode: ''
  });

  const roles = ['Manager', 'Asst.', 'VP', 'Exec'];
  const departments = ['Accounts', 'IT', 'HR', 'Admin'];

  // Generate EmpCode when Department changes
  useEffect(() => {
    if (form.department) {
      const deptCode = form.department.substring(0, 2).toUpperCase();
      const year = new Date().getFullYear().toString().slice(2); // "24"
      const randomDigits = Math.floor(100000 + Math.random() * 900000).toString();
      const empCode = `${deptCode}${year}${randomDigits}`;
      setForm((prev) => ({ ...prev, empCode }));
    }
  }, [form.department]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

   
    setForm({
      userId: '',
      userName: '',
      role: '',
      lastLogin: '',
      fName: '',
      lName: '',
      department: '',
      doj: '',
      mgrId: '',
      seniority: '',
      empCode: ''
    });
  };

  return (
    <MDBContainer fluid className="d-flex justify-content-center align-items-center min-vh-100 custom-bg">
      <MDBCard className="p-4 shadow-5 glass-card" style={{ maxWidth: '700px', width: '100%', borderRadius: '25px' }}>
        <MDBCardBody>
          <h3 className="text-center mb-4 fw-bold text-primary"> Registration Form</h3>

          <MDBInput label="User ID" name="userId" value={form.userId} onChange={handleChange} className="mb-3" />
          <MDBInput label="User Name" name="userName" value={form.userName} onChange={handleChange} className="mb-3" />

          {/* Role Dropdown */}
          <div className="mb-3">
            <MDBDropdown>
              <MDBDropdownToggle color="light" className="w-100 text-start">
                {form.role || 'Select Role'}
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                {roles.map((role) => (
                  <MDBDropdownItem key={role} link onClick={() => setForm({ ...form, role })}>
                    {role}
                  </MDBDropdownItem>
                ))}
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>

          <MDBInput label="Last Login" name="lastLogin" type="datetime-local" value={form.lastLogin} onChange={handleChange} className="mb-3" />
          <MDBInput label="First Name" name="fName" value={form.fName} onChange={handleChange} className="mb-3" />
          <MDBInput label="Last Name" name="lName" value={form.lName} onChange={handleChange} className="mb-3" />

          {/* Department Dropdown */}
          <div className="mb-3">
            <MDBDropdown>
              <MDBDropdownToggle color="light" className="w-100 text-start">
                {form.department || 'Select Department'}
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                {departments.map((dept) => (
                  <MDBDropdownItem key={dept} link onClick={() => setForm({ ...form, department: dept })}>
                    {dept}
                  </MDBDropdownItem>
                ))}
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>

          <MDBInput label="Date of Joining (DOJ)" type="date" name="doj" value={form.doj} onChange={handleChange} className="mb-3" />
          <MDBInput label="Manager ID" name="mgrId" value={form.mgrId} onChange={handleChange} className="mb-3" />
          <MDBInput label="Seniority" name="seniority" value={form.seniority} onChange={handleChange} className="mb-3" />

          <MDBInput label="Emp Code (Auto)" name="empCode" value={form.empCode}  readOnly className="mb-4" />

          <MDBBtn className="w-100" color="primary" onClick={handleSubmit}>
            Submit
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <style jsx>{`
        .custom-bg {
          background: linear-gradient(to right, #667eea, #764ba2);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
        }
      `}</style>
    </MDBContainer>
  );
};

export default App;
