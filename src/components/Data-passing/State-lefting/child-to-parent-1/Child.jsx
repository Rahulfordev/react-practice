/* eslint-disable react/prop-types */
const Child = (props) => {
  const loremChildData =
    "Child:- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eligendi molestias nobis delectus officia quibusdam consequatur blanditiis a totam labore beatae quae, dolorum itaque veritatis quam. Ab rerum neque amet.";
  props.onChildData(loremChildData); // child to parent data pase. ekhane object pass kora jai
  return <div>{props.lorem}</div>;
};

export default Child;
