import React from 'react';

const Blog = () => {
    return (
        <div className='mx-auto'>
            <h2 className='text-5xl text-blue-900 my-9'>There are some important notes, which is beneficial for you.</h2>
            <div className="my-4 p-4 bg-cyan-100 text-left rounded-md">
                <h3 className='text-2xl mb-2'>What is the purpose of react route?</h3>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. <br /> <br /> It allows the creation of single-page web or mobile apps that allows navigation without the page refreshing. React Router also gives us access to browser history features while maintaining the correct view of the application. React Router uses a component-based approach to routing</p>
            </div>
            <div className="my-4 p-4 bg-cyan-100 text-left rounded-md">
                <h3 className='text-2xl mb-2'>How does context API work?</h3>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br /><br />React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page

                </p>
            </div>
            <div className="my-4 p-4 bg-cyan-100 text-left rounded-md">
                <h3 className='text-2xl mb-2'>What is useRef?</h3>
                <p>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. <br /> <br /> <b>Syntax :</b> <i>const refContainer = useRef(initialValue);</i> <br /><br />The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. <br /> <br />The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
            </div>
        </div>
    );
};

export default Blog;
