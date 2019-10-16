/*
Announcements:
1)  React intro book should be finished
2)  Week 8 Repls are posted and available
3)  React Intro Videos 1-6 should be completed
*/

/*
Itinerary:
1)  Remind students about props
  a)  show them that props are passed from parent to child in the child component call
2)  Remind students about event handlers
  a)  show them that event handlers can process inline functions
  b)  show them that event handlers can process referenced functions
3)  Remind students about state
  a)  show students that they can perform 2-way data binding for presentational data
4)  Extend on state discussion
  a)  show students that they can pass state to a child component to interpolate
  b)  show students that they can pass setState to a child component 
  c)  state challenge: Have students configure a button which changes a state variable 
      (a string) when it gets clicked.  The state variable change should replace the
      current state variable value with a new, random value.  This state variable
      value should be displayed in a span tag.
  d)  state challenge: Pass a state change function to 3 identical child components.  
      The state variable for this function should control the background color of the 
      parent component.  Each of the child components should display an image.  When
      the user hovers over that image, the parent state variable for color should 
      change to a different color.
5)  Effect discussion
  a)  show students that effects run after a state update (and render) have been 
  processed
  b)  show students that multiple state updates don't necessarily trigger multiple
  effects--state updates get batched and call a single fire of an effect
  c)  effect challenge:  build a new component.  in this component, create 2 state
  variables.  the first variable should count the number of clicks (on a button in
  this component).  the second variable should control color (either 'red' or
  'yellow').  when the number of button clicks is odd, the color should be 'red'.
  when the number of button clicks is even, the color should be 'yellow'.  use this
  color to change the background color of this component.  
  (hint: style:{{'background-color': <variable here>}} will help you to control the 
  background image of a JSX tag)
  d)  show students that effects can take a second argument, a dependency list.  
  first show them that an empty array triggers an effect to fire only on component
  mount.  next, show that you can trigger the effect on one or multiple dependencies.
  e)  show students that effects can return a cleanup function.
  f)  effect challenge:  build a new component.  in this component, create 1 state
  variable.  this variable should be 2-way bound to an input field (as the 
  input from the user changes, this first variable's text updates).  your component
  should also have an effect.  it should have a dependency list of one item--your
  state variable.  when your text length is a multiple of 5, your effect should create
  a new setinterval function and return a cleanup function to get rid of this interval.
  make the interval function say whatever you want, and it should run every 2 seconds.
6)  check book progress for students!
*/