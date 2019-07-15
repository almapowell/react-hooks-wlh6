# React Hooks

Hooks are a new iteration to the react ecosystem with simplicity in mind

They allow us to use state, use the component lifecycle, access DOM Nodes, and more all from a functional component
Using a functional component will allow us to avoid any bugs that we may run into with a class such as issues with the context of `this`, don't have to use a constructor, or worry about any inheritance issues

They were designed to make the react ecosystem more simple but there are a few caveats of using them
1. Hooks only work in a functional component
2. Hooks should only be called at the top level, meaning not in if statements / loops
3. Hooks can ass complexity if you are unaware of what is going on
4. Hooks are only available in the latest version of React, so if you are on older versions hooks would not work
5. Classes are still valid ways of writing components and always will be`

## useState

`useState` is the hook that can be used to create a stateful value and a function that is used to update that state

We will use array destructering to get access to the stateful value and the function to update the stateful value
We will pass in the data type for the new stateful value

```javascript
const [value, func] = useState(/* Initial Value For The New Stateful Value */);
```

## useEffect

`useEffect` is the hook that can be used to perform lifecycle logic, it's easy to think about this as the `componentDidMount` and `componentDidUpdate` methods

It's fired after every render of the component, but we can set it to only rerender if a specific value changes

It will take in two items as arguments, a function that will perform any logic that we need to and an array of items on our state that we want to watch for any changes then rerender if that item changes. We can also provide just an empty array and it will not have any items to watch for so it will only run once (on initial mounting of the component)

```javascript
useEffect(() => {
    // perform some sort of logic here 
}, [/* items to watch for or empty if you only want it to execute on initial mounting */])
```