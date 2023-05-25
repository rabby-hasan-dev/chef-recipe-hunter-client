import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div className='text-center'>
            <div className=''>
                <p className='text-3xl'>Sorry Brother, Please check this error and solved this!</p>
                <div>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;