import { useId } from 'react';

function UseIdExample() {
    const id = useId();
    const id2 = useId();
    return (
        <>
        <label htmlFor={id}>Do you like React?</label>
        <input id={id} type="checkbox" name="react"/>
        <label htmlFor={id2}>Do you like React 2nd time?</label>
        <input id={id2} type="checkbox" name="react"/>
        </>
    );
};

export default UseIdExample;
