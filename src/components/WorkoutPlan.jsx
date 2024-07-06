// src/components/WorkoutPlan.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WorkoutPlan = () => {
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get(`${process.env.API_URL_PATH}/get_workout`)
      .then(response => {
        setWorkoutPlan(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src="/loading.gif" alt="Loading" className="w-16 h-16 mb-4" />
        <p className="text-lg">Wait while we build your training plan</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src="/error.gif" alt="Loading" className="w-16 h-16 mb-4" />
        <p className="text-lg">There was an error with your training plan</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {workoutPlan && workoutPlan.map((dayPlan, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Day {dayPlan.day}</h2>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">Exercise</th>
                <th className="py-2 px-4 border-b border-gray-200">Weight</th>
                <th className="py-2 px-4 border-b border-gray-200">Reps</th>
                <th className="py-2 px-4 border-b border-gray-200">Sets</th>
              </tr>
            </thead>
            <tbody>
              {dayPlan.workout.map((exercise, i) => (
                <tr key={i}>
                  <td className="py-2 px-4 border-b border-gray-200">{exercise.exercise}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{exercise.weight}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{exercise.reps}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{exercise.sets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default WorkoutPlan;
