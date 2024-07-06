import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OnboardingForm from './components/OnboardingForm'
import WorkoutPlan from './components/WorkoutPlan'

function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnboardingForm />} />
          <Route path="/workout_plan" element={<WorkoutPlan />} />
        </Routes>
      </BrowserRouter>
    )
}

export default Router