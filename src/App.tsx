import './App.css';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { MainSection } from './layout/sections/mainSection/MainSection';
import { Suspense, lazy } from 'react';

// Ленивая загрузка больших секций
const Projects = lazy(() =>
    import('./layout/sections/projects/Projects').then(module => ({ default: module.Projects }))
);

const Technologies = lazy(() =>
    import('./layout/sections/technologies/Technologies').then(module => ({ default: module.Technologies }))
);

const Experience = lazy(() =>
    import('./layout/sections/experience/Experience').then(module => ({ default: module.Experience }))
);


function App() {
    return (
        <div className="App">
            <Header />

            <MainSection />

            <Suspense fallback={<div>Loading Projects...</div>}>
                <Projects />
            </Suspense>

            <Suspense fallback={<div>Loading Technologies...</div>}>
                <Technologies />
            </Suspense>

            <Suspense fallback={<div>Loading Experience...</div>}>
                <Experience />
            </Suspense>

            <Footer />
        </div>
    );
}

export default App;
