- [ ] Why would you use class component over function components (removing hooks from the question)?
You probably wouldn't, hooks use the same internal logic that class components do and abstract alot of the code away.
More likely than not if you work with react will run into class components looking at code in the field becase hooks 
are so new so it is still valuable to know what they look like and be able to interact with them. 

- [ ] Name three lifecycle methods and their purposes.
1. render() - It is the most vital used method as it renders JSX to your page.
2. componentDidMount() - This is called after all elements on the page are rendered correctly, it is used to fetch data from external APIs and set state. 
3. componentWillUnmount() - This is invoked right before a component dies a horrible painful death and you can put code in here to cancel network requests, invalidate timers, etc. 


- [ ] What is the purpose of a custom hook?
Making your own custom hooks lets you reuse component logic.

- [ ] Why is it important to test our apps?
At the end of the day it's all about peace of mind and quality assurance.
The tests assure us that our product is working correctly and that in turn gives us the peace of mind that the 
quality of our app is good. A poor functioning app will not generate money and lose customers. 