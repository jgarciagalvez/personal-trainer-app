// src/components/OnboardingForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL_PATH;

const OnboardingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [fatPercentage, setFatPercentage] = useState('');
  const [fitnessGoals, setFitnessGoals] = useState('');
  const [currentFitnessLevel, setCurrentFitnessLevel] = useState('');
  const [workoutPreferences, setWorkoutPreferences] = useState('');
  const [dietaryPreferences, setDietaryPreferences] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const userData = {
      name,
      email,
      age,
      gender,
      height,
      weight,
      fatPercentage,
      fitnessGoals,
      currentFitnessLevel,
      workoutPreferences,
      dietaryPreferences,
    };

    axios.post(`${apiURL}/register`, userData)
      .then(response => {
        navigate('/workout_plan');
      })
      .catch(error => {
        console.error(error);
        alert('Error onboarding user.');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Onboarding Form</h2>
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            value={email}
            type='email'
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Age"
            type="number"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <select
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={gender}
            onChange={e => setGender(e.target.value)}
          >
            <option value="" disabled>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Height (cm)"
            type="number"
            value={height}
            onChange={e => setHeight(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Weight (kg)"
            type="number"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Fat Percentage (%)"
            type="number"
            value={fatPercentage}
            onChange={e => setFatPercentage(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-thin text-gray-400">Fitness Goals</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Please tell us in natural language what you want to achieve"
            value={fitnessGoals}
            onChange={e => setFitnessGoals(e.target.value)}
            rows="4"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-thin text-gray-400">Current Fitness Level</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Please tell us in natural language what your current fitness level is and if you have any injury or limitation"
            value={currentFitnessLevel}
            onChange={e => setCurrentFitnessLevel(e.target.value)}
            rows="4"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-thin text-gray-400">Workout Preferences</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Please tell us in natural language what your workout preferences are. Any exercise you dislike or prefer?"
            value={workoutPreferences}
            onChange={e => setWorkoutPreferences(e.target.value)}
            rows="4"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-thin text-gray-400">Dietary Preferences</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Please tell us in natural language if you have any dietary preferences or limitations (vegetarian, gluten-free, etc)"
            value={dietaryPreferences}
            onChange={e => setDietaryPreferences(e.target.value)}
            rows="4"
          />
        </div>
        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default OnboardingForm;
