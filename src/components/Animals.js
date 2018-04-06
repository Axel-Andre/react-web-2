import React from "react";
const Animals = (props) => {
    const _data = props.data;
    return (
        <div>
            {_data.map((o, i)=> {
                return <div className={"row"} key={i}>
                    {[
                        <p key={i}>{o.name}, {o.age}, {o.color}</p>
                    ]}
                </div>;
            })}
        </div>
    );
};
export default Animals;