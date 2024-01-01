const use_uniqueid_generator = () => {
  //  new Date().valueOf() to create unique id in firebase id
  const uniqueueId = new Date().valueOf();
  return uniqueueId;
};

export default use_uniqueid_generator;

// this hook is used to generate uniqueue id using js date api
// every time new id generate using milliseconds in js date api
