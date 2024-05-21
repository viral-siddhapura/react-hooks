import React from "react";
import "./styles/landingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {

    const simpleText = "Simple";
    const complexText = "Complex";

    return (
        <div>
            <h1>Welcome to React Hooks</h1>
            <p>Click on the links above to see the examples</p>

            {/* Use State Hooks */}
            <div className="Row">
                <div className="Column">useState</div>
                <div className="Column">
                    <a href="/simpleUseState">{simpleText}</a>
                </div>
                <div className="Column">
                    <a href="/complexUseState">{complexText}</a>
                </div>
            </div>

            {/* Use Effect Example */}
            <div className="Row">
                <div className="Column">useEffect</div>
                <div className="Column">
                    <a href="/simpleUseEffect">{simpleText}</a>
                </div>
                <div className="Column">
                    <a href="/complexUseEffect">{complexText}</a>
                </div>
            </div>

            {/* Use Context Example */}
            <div className="Row">
                <div className="Column">useContext</div>
                <div className="Column">
                    <a href="/simpleUseContext">{simpleText}</a>
                </div>
                <div className="Column">
                    <a href="/complexUseContext">{complexText}</a>
                </div>
            </div>

            {/* Use Reducer Example */}
            <div className="Row">
                <div className="Column">useReducer</div>
                <div className="Column">
                    <a href="/simpleUseReducer">{simpleText}</a>
                </div>
                <div className="Column">
                    <a href="/complexUseReducer">{complexText}</a>
                </div>
            </div>

            {/* Use Callback Example */}
            <div className="Row">
                <div className="Column">useCallback</div>
                <div className="Column">
                    <a href="/simpleUseCallback">{simpleText}</a>
                </div>
                <div className="Column">
                    <a href="/complexUseCallback">{complexText}</a>
                </div>
            </div>

            {/* Use Memo Example */}
            <div className="Row">
                <div className="Column">useMemo</div>
                <div className="Column">
                    <a href="/simpleUseMemo">{simpleText}</a>
                </div>
                <div className="Column">
                    <a href="/complexUseMemo">{complexText}</a>
                </div>
            </div>

            {/* Use Ref Example */}
            <div className="Row">
                <div className="Column">useRef</div>
                <div className="Column">
                    <a href="/simpleUseRef">{simpleText}</a>
                </div>
                <div className="Column">
                    <a href="/complexUseRef">{complexText}</a>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;