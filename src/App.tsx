import { Suspense, lazy } from 'react';
import { ReactLenis } from 'lenis/react';
import Hero from './components/Hero';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import { LanguageProvider } from './context/LanguageContext';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load below-the-fold components
const Features = lazy(() => import('./components/Features'));
const Specs = lazy(() => import('./components/Specs'));
const Gallery = lazy(() => import('./components/Gallery'));

const FAQ = lazy(() => import('./components/FAQ'));
const CTA = lazy(() => import('./components/CTA'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollShowcase = lazy(() => import('./components/ScrollShowcase'));


// Simple Loading Fallback
const LoadingFallback = () => (
  <div className="flex h-40 w-full items-center justify-center text-brand-cyan font-rajdhani tracking-widest text-xl">
    CARGANDO...
  </div>
);

function App() {


  const content = (
      <LanguageProvider>
      <ErrorBoundary>
      <div className="bg-deep-black text-white selection:bg-brand-cyan selection:text-black">
        <Navbar />
        <Hero />
        <AmbientBackground>
          <Suspense fallback={<LoadingFallback />}>
            <Features />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <ScrollShowcase />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
             <Gallery />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Specs />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <FAQ />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <CTA />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Footer />
          </Suspense>
        </AmbientBackground>
      </div>
      </ErrorBoundary>
      </LanguageProvider>
  );

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {content}
    </ReactLenis>
  );
}

export default App;
