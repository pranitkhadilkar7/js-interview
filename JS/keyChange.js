let obj = {
    id: 7373,
    data: [
      { type: "1", id: 73 },
      {
        name: "xyz",
        type: "23",
        vas_id: 73,
        x_data: [{ id: 72, data: { xx_data: { id: 673, a: ["id"] } } }, "id"],
      },
      "abc",
      "id",
      123,
      { id: { data: 123, id: ["a", "b"] } },
    ],
  };
  
  function test(obj, oldKey, newKey) {
    if (typeof obj !== 'object') {
        return obj
    }
    const data= Array.isArray(obj) ? [] : {}
   for (let key in obj) {
      if (key === oldKey) {
          data[newKey] = test(obj[oldKey], oldKey, newKey)
      } else {
          data[key] = test(obj[key], oldKey, newKey)
      }
   }
   return data
  }
  
  console.log(test(obj, "id", "newId"));