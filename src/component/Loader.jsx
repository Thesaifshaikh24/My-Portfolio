import React from "react";
import { Triangle } from 'react-loader-spinner';

const Loader = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Triangle
                    height="80"
                    width="80"
                    color="#B303D0" // Bootstrap primary color
                    ariaLabel="triangle-loading"
                    visible={true}
                />
            </div>
        </>
    )
}

export default Loader;