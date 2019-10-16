/*
Announcements:
1)  Repls due Sat @ midnight, Sat 9:00 - 1:00 required class time
2)  Videos for week 2 posted by Friday afternoon
3)  You should be making good progress on the React intro book
*/

/*
Itinerary:
1)  Have students create a 07.02 folder with a props-events-state app (for each of
  the below numbers, make a separate component to hold that idea--each component
  needs a separate black border to distinguish it from the other component ideas)
2)  Introduce props arr
  a)  Show students that they need to write props as params to func component
  b)  Show students that they can interpolate to use props
  c)  Show students that props can be objects, arrays
  d)  Show students that they can destructure to instantiate prop variables
  e)  Challenge: Have students pass an array prop (of strings) to a child component 
      which displays each one in a list
3)  Introduce event handlers
  a)  Show students that event handlers can either call inline functions or
      references to functions
  b)  Challenge: Have students pass a function as a prop to a child.  This function
      should console.log a message.  This function should be called on an event
      listener of your choice
4)  Introduce State
  a)  Show students that they can interpolate state in their JSX.
  c)  Show students how useState can update state variables in event listeners
  d)  Show students 2-way binding with an input field
  b)  Show students they can pass state as props to child components to interpolate
  e)  Challenge: Have students configure a button which changes a state variable (a
      string) when it gets clicked.  The state variable change should replace the
      current state variable value with a new, random value.  This state variable
      value should be displayed in a span tag.
  f)  Challenge: Pass a state change function to 3 identical child components.  The
      state variable for this function should change the background color of the 
      parent component.  Each of the child components should display an image.  When
      the user hovers over that image, the state variable for color should change to
      a different color.
*/