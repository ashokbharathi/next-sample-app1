import * as React from "react";


const Contact=()=>{
    const [count, setCount] = React.useState(1);

    return(
        <div>
            contact page

            <button onClick={()=>{
                setCount(count+1)
            }}>my button {count}</button>
        </div>
    )
}

export default Contact;