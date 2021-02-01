var GetImportance = function(employees, id) {

  let directory = {}
  
  employees.forEach( employee =>
      directory[employee.id] = {importance:employee.importance, subordinates:employee.subordinates}      
  ); 

  let answer = 0
  const recurring = (empId) => {
      answer += directory[empId]["importance"] // empId is a changing variable so we need [] notation
      // [2,3], forEach will implicitly run exact amt of subs
      directory[empId].subordinates.forEach(
          empId => recurring(empId)
      ) 
      
  }
  recurring(id)  
  return answer
};