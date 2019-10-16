try{
  throw new Error('this is a test Error');
} catch(error){
  (testHOC('test'))(error);
}

function testHOC(arg){
  console.log(arg);
  return (err) => console.log(err.message);
}