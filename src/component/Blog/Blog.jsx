import React from "react";

const Blog = () => {
  return (
    <div className="card border-solid border-2 border-slate-200 px-8 mb-8 mx-16 my-10">
      <div className="blog-section py-4">
        <h2 className=" text-center font-bold text-3xl pb-5 ">Blog Section</h2>
        <hr />
      </div>
      <div className="blog-1 py-4">
        <h3 className="font-bold text-xl">
          What is the differences between uncontrolled and controlled component?
        </h3>
        <p>
          The key differences between controlled and uncontrolled components
          are: State management: Controlled components rely on React to manage
          their state, while uncontrolled components maintain their own state.
          Event handling: Controlled components use event handlers to update
          their state and trigger re-renders, while uncontrolled components
          handle events directly through the DOM. Data flow: Controlled
          components receive their current value through props from a parent
          component, while uncontrolled components do not. Predictability:
          Controlled components provide more predictable behavior since their
          state is fully managed by React, while uncontrolled components may
          have unexpected behavior due to the use of refs and direct DOM
          manipulation. In general, it's recommended to use controlled
          components whenever possible since they provide better predictability
          and easier debugging. However, there may be cases where uncontrolled
          components are more suitable, especially when dealing with complex
          user interactions or integrating with third-party libraries.
        </p>
      </div>

      <div className="blog-2 py-4 ">
        <h3 className="font-bold text-xl">
          How to validate React props using PropTypes?
        </h3>
        <p>
          In the above example, we imported PropTypes from the prop-types
          package and used it to define the expected prop types for MyComponent.
          In this case, we expect name to be a string, age to be a number, and
          email to be a string as well. By setting the isRequired property on
          each prop type, we ensure that an error is thrown if any of the
          expected props are not passed to MyComponent. The error message will
          indicate which prop was missing and what type was expected.
        </p>
      </div>
      <div className="blog-3 py-4">
        <h3 className="font-bold text-xl">
          What is the difference between nodejs and express js?
        </h3>
        <p>
          Node.js is a JavaScript runtime built on the Chrome V8 engine that
          allows developers to run JavaScript code on the server-side. It
          provides a runtime environment that enables developers to write
          server-side applications using JavaScript. Express.js, on the other
          hand, is a web application framework built on top of Node.js. It
          provides a set of features and utilities for building web
          applications, such as middleware support, routing, and handling HTTP
          requests and responses. In simpler terms, Node.js provides the runtime
          environment to execute JavaScript code on the server-side, while
          Express.js provides the tools and utilities to build web applications
          using Node.js. In other words, Node.js is a platform, and Express.js
          is a tool built on top of that platform.
        </p>
      </div>
      <div className="blog-4 py-4">
        <h3 className="font-bold text-xl">
          What is a custom hook, and why will you create a custom hook?
        </h3>
        <p>
          In React, a custom hook is a JavaScript function that uses built-in
          hooks or other custom hooks to provide a reusable piece of logic that
          can be shared between components. Custom hooks are used to abstract
          away common logic that might be repeated in multiple components. By
          creating a custom hook, you can encapsulate the logic in one place and
          reuse it in multiple components. This can lead to more maintainable
          and reusable code. To create a custom hook, you simply create a
          JavaScript function that uses one or more built-in hooks or other
          custom hooks. You can then use the custom hook in any number of
          components just like you would use any other hook.
        </p>
      </div>
    </div>
  );
};

export default Blog;
