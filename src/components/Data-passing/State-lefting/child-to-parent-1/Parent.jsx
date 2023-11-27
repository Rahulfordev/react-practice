import Child from "./Child";

const Parent = () => {
  const loremParent =
    "Parent:- Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iure hic explicabo impedit aspernatur velit expedita nulla dolorem consectetur. Iusto obcaecati eligendi ullam. Placeat repellendus amet, exercitationem enim provident animi.";
  const handleChildData = (childData) => {
    console.log(childData); // child data show to parent file
  };

  return (
    <div>
      <Child loremParent={loremParent} onChildData={handleChildData} />
    </div>
  );
};

export default Parent;
