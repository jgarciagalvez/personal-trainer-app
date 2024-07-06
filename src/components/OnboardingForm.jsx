// src/components/OnboardingForm.js
import React, { useState } from 'react';
import axios from 'axios';

const OnboardingForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [fitnessGoals, setFitnessGoals] = useState('');
  const [currentFitnessLevel, setCurrentFitnessLevel] = useState('');
  const [workoutPreferences, setWorkoutPreferences] = useState('');
  const [dietaryPreferences, setDietaryPreferences] = useState('');
  const [smartScaleData, setSmartScaleData] = useState('');

  const handleSubmit = () => {
    const userData = {
      name,
      age,
      gender,
      fitnessGoals,
      currentFitnessLevel,
      workoutPreferences,
      dietaryPreferences,
      smartScaleData,
    };

    axios.post(`${process.env.API_URL_PATH}/onboard`, userData)
      .then(response => {
        console.log(response.data);
        alert('User onboarded successfully!');
      })
      .catch(error => {
        console.error(error);
        alert('Error onboarding user.');
      });
  };

  return (
    <div>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
      <input placeholder="Gender" value={gender} onChange={e => setGender(e.target.value)} />
      <input placeholder="Fitness Goals" value={fitnessGoals} onChange={e => setFitnessGoals(e.target.value)} />
      <input placeholder="Current Fitness Level" value={currentFitnessLevel} onChange={e => setCurrentFitnessLevel(e.target.value)} />
      <input placeholder="Workout Preferences" value={workoutPreferences} onChange={e => setWorkoutPreferences(e.target.value)} />
      <input placeholder="Dietary Preferences" value={dietaryPreferences} onChange={e => setDietaryPreferences(e.target.value)} />
      <input placeholder="Smart Scale Data" value={smartScaleData} onChange={e => setSmartScaleData(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default OnboardingForm;
