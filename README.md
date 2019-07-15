# React Hooks

Hooks are a new iteration to the react ecosystem with simplicity in mind

They allow us to use state, use the component lifecycle, access DOM Nodes, and more all from a functional component
Using a functional component will allow us to avoid any bugs that we may run into with a class such as issues with the context of `this`, don't have to use a constructor, or worry about any inheritance issues

They were designed to make the react ecosystem more simple but there are a few caveats of using them
1. Hooks only work in a functional component
2. Hooks should only be called at the top level, meaning not in if statements / loops
3. Hooks can ass complexity if you are unaware of what is going on
4. Hooks are only available in the latest version of React, so if you are on older versions hooks would not work
5. Classes are still valid ways of writing components and always will be

