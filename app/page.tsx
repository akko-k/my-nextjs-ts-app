import { Suspense } from 'react';
import AboutPage from './components/AboutPage';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the homepage!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutPage />
      </Suspense>
    </div>
  );
}
