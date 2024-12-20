import React, { useState } from "react";
import { redirect } from "react-router-dom";

const OlderReactAction = () => {

    const [name, setName] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = async () => {
        setIsPending(true);
        const error = await updateName(name);
        setIsPending(false);
        if (error) {
            setError(error);
            return ;
        }
        redirect("/");
    }

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

export default OlderReactAction;

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
