import React, { useState } from 'react';
import '../assets/css/register.css'
const UserRegister = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [idProof, setIdProof] = useState('');

  const handleRegister = () => {
    

    console.log('Registration Data:', {
      name,
      age,
      email,
      password,
      gender,
      mobileNumber,
      idProof,
    });

 
    setName('');
    setAge('');
    setEmail('');
    setPassword('');
    setGender('');
    setMobileNumber('');
    setIdProof('');
  };

  return (
    <div className="registration-form">
      <h2>User Registration</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Mobile Number:
        <input type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
      </label>
      <label>
        ID Proof:
        <input type="text" value={idProof} onChange={(e) => setIdProof(e.target.value)} />
      </label>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default UserRegister;
