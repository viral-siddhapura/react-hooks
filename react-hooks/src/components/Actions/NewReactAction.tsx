import React, { useState, useTransition } from "react";
import { redirect } from "react-router-dom";

const NewReactAction = () => {

    const [name, setName] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    // The async transition will immediately set the isPending state to true, make the async request(s), and switch isPending to false after any transitions. 
    // This allows you to keep the current UI responsive and interactive while the data is changing.

    const handleSubmit = () => {
        startTransition(() => {
            updateName(name).then((error) => {
                if (error) {
                    setError(error);
                    return;
                }
                redirect("/");
            });
        });
    };

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleSubmit} disabled={isPending}>
                Update
            </button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default NewReactAction;

async function updateName(name: string): Promise<string | null> {
    // Simulate an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            if (name === "error") {
                resolve("An error occurred");
            } else {
                resolve(null);
            }
        }, 1000);
    });
}

// Benefits of Actions as it automatically manage submitting data for you:

// 1. Pending state:
// 2. Optimistic updates: 
// 3. Error handling:
// 4. Forms: """<form>""" elements now support passing functions to the action and formAction props. 
//           Passing functions to the action props use Actions by default and reset the form automatically after submission