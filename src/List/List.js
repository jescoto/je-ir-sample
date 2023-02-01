import React from "react";
import Card from "../Card/Card";
import "./List.css";
import ListContext from "../ListContext";
export default function List({ list }) {
    const [activeId, setActiveId] = React.useState("");
    const activeClick = (event) => {

        setActiveId(event.target.id);
    };
    const value = React.useMemo(() => ({ activeId, activeClick }), [activeId]);

    return (
        <ListContext.Provider value={value}>
            <div className="List">
                { list.map((item) => {
                    return <Card key={item.id} user={item} />
                })
                }
            </div>
        </ListContext.Provider>
    );
}