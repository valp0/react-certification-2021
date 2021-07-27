# Wizeline Academy - 2021 React Bootcamp

Please refere to the following [GIST](https://gist.github.com/villacoder/9f980254461fa8bfbe93067db2126872) for further instructions


Second challenge questions:

1. Using create-react-app, what do we need to set up for testing?
   We don't need to set up anything else, because apps created using create-react-app have Jest set up as their test runner from the beginning. Anyway, if you want to use react testing library functionality, you need to install and import it.

2. What components are worth to test in your development?
   I believe components with an "important" functionality should be tested, specially those with state and state management, because they could cause a major problem if not working properly. However, we can always test every component to make sure they are rendering the right thing in the expected way.
   I would say every component should be tested if you can do it, but in case you can't, you should at least test those components that are part of the core functionality or service of your application.

3. Can you apply TDD once you already created components?
   I would say yes. Although said component is already created, new features can be added to it, and with those features, you can always implement test-driven development. However, I think it would be wrong to believe that you can implement tdd with components that won't change in the future, since in that case you would only be testing, not implementing test-driven development. 
   Anyway, it is always good to test your components to make sure their output is exactly what it is expected to be.
