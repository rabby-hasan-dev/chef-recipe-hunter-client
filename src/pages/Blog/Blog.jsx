import React from 'react';

const Blog = () => {
    return (
        <div className='grid  lg:grid-cols-2 gap-4 p-4 lg:m-24'>
            <div>
                <h2 className='text-xl my-2 text-blue-600' >1. Tell us the differences between uncontrolled and controlled components.</h2>
                <p>
                    In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally
                </p>
            </div>
            <div>
                <h2 className='text-xl my-2 text-blue-600'> 2.How to validate React props using PropTypes</h2>
                <p>
                Props are the read-only properties that are shared between components to give the unidirectional flow of React a dynamic touch. They're mainly shared from the parent component to the child component, but the reverse is also possible (though not recommended).
                PropTypes are a great way to catch errors at run time and act as the first line of defense for your applications. They're not as type-safe as TypeScript but they're much easier to set up and work with.
                </p>
            </div>
            <div>
                <h2 className='text-xl my-2 text-blue-600'> 3.Tell us the difference between nodejs and express js. </h2>
                <p>
                NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
                </p>
            </div>
            <div>
                <h2 className='text-xl my-2 text-blue-600'> 4. What is a custom hook, and why will you create a custom hook?</h2>
                <p>
                A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.
                </p>
            </div>
        </div>
    );
};

export default Blog;