import React, { useEffect, useState } from "react";

export default function List({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems());
        console.log("Updating items");
    }, [getItems])

    return <div>
        {items.map(item => <div key={item}>{item}</div>)}
    </div>
}