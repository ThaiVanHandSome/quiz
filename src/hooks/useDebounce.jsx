import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [val, setVal] = useState(value);
    useEffect(() => {
        const idTimeout = setTimeout(() => {
            setVal(value);
        }, delay);
        return () => clearTimeout(idTimeout);
    }, [value, delay]);
    return val;
}

export default useDebounce;
