import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import Loader from './loading';
import LandingPage from './landingPage';

const SimpleUseStateHook = React.lazy(() => import('./components/UseState/SimpleUseStateHook'));
const ComplexUseStateHook = React.lazy(() => import('./components/UseState/ComplexUseStateHook'));
const SimpleUseEffectHook = React.lazy(() => import('./components/UseEffect/SimpleUseEffectHook'));
const ComplexUseEffectHook = React.lazy(() => import('./components/UseEffect/ComplexUseEffectHook'));
const SimpleUseContextHook = React.lazy(() => import('../src/components/UseContext/SimpleUseContextHook'));
const ComplexUseContextHook = React.lazy(() => import('../src/components/UseContext/ComplexUseContextHook'));
const SimpleUseReducerHook = React.lazy(() => import('../src/components/UseReducer/SimpleUseReducerHook'));
const ComplexUseReducerHook = React.lazy(() => import('../src/components/UseReducer/ComplexUseReducerHook'));
const SimpleUseMemoHook = React.lazy(() => import('../src/components/UseMemo/SimpleUseMemoHook'));
const ComplexUseMemoHook = React.lazy(() => import('../src/components/UseMemo/ComplexUseMemoHook'));
const SimpleUseRefHook = React.lazy(() => import('../src/components/UseRef/SimpleUseRefHook'));
const ComplexUseRefHook = React.lazy(() => import('../src/components/UseRef/ComplexUseRefHook'));
const SimpleUseCallbackHook = React.lazy(() => import('../src/components/UseCallback/SimpleUseCallbackHook'));
const ComplexUseCallbackHook = React.lazy(() => import('../src/components/UseCallback/ComplexUseCallbackHook'));
const OlderReactAction = React.lazy(() => import('../src/components/Actions/OlderReactAction'));
const NewReactAction = React.lazy(() => import('../src/components/Actions/NewReactAction'));

const AppRouter = () => {
    return (
        <>
            <Router>
                <Suspense fallback={<Loader/>} />
                <Routes>
                    <Route path="/" element={<LandingPage/>} />
                    <Route path="/simpleUseState" element={<SimpleUseStateHook/>} />
                    <Route path="/complexUseState" element={<ComplexUseStateHook/>} />
                    
                    <Route path="/simpleUseEffect" element={<SimpleUseEffectHook/>} />
                    <Route path="/complexUseEffect" element={<ComplexUseEffectHook/>} />
                    
                    <Route path="/simpleUseContext" element={<SimpleUseContextHook/>} />
                    <Route path="/complexUseContext" element={<ComplexUseContextHook/>} />
                    
                    <Route path="/simpleUseReducer" element={<SimpleUseReducerHook/>} />
                    <Route path="/complexUseReducer" element={<ComplexUseReducerHook/>} />
                    
                    <Route path="/simpleUseCallback" element={<SimpleUseCallbackHook/>} />
                    <Route path="/complexUseCallback" element={<ComplexUseCallbackHook/>} />
                    
                    <Route path="/simpleUseMemo" element={<SimpleUseMemoHook/>} />
                    <Route path="/complexUseMemo" element={<ComplexUseMemoHook/>} />
                    
                    <Route path="/simpleUseRef" element={<SimpleUseRefHook/>} />
                    <Route path="/complexUseRef" element={<ComplexUseRefHook/>} />

                    <Route path="/olderReactAction" element={<OlderReactAction/>} />
                    <Route path="/newReactAction" element={<NewReactAction/>} />
                </Routes>
            </Router>
        </>
    );
};

export default AppRouter;