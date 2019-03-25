# Answers

1.  What is React JS and what problems does it try and solve?
    It is a JavaScript library used as a tool for building User Interface components. It also allows us to creat reusable UI components.
    In short, it allows us creat web applicatoins which chan chage data without reloading the page.

2)  What does it mean to _think_ in react?

Thinking in react makes you think in steps. steps of building out an application. We need to know Component Hierarchy to think in react. We only want one conponent doing one thing.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

the First differenct is syntax.

A functional component is a plain JavaScript Function. It accepts (props) as an argument and returns a React element.
Functional Components cant use .setState(), you have to pass it down via props from the parent component.

Class Component need you to EXTEND from React.Component and create a render function which returns a React element.

4.  Describe state.

State is what allows you to create components that are dynamic and interactive.
State is used so that a component can keep track of information in between an render that it does. When you .setState() it updates the state object and re-renders the component.

5.  Describe props.

Props are how Components talk to each other. Props flow downward from the parent component. Props are immutable
