import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OnboardingForm from './components/OnboardingForm'

function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnboardingForm />} />

        </Routes>
      </BrowserRouter>
    )
}

export default Router