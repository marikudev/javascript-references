//-> fungsi memambahkan data baru
const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
    newEmployee = {name: name, email: email, joinYear: joinYear};
    return employees.push(newEmployee);   
  }
  
  addEmployee('rizki', 'ax@gmail.com', 2021)
  addEmployee('ilham', 'ilham@example.com', 2020)
  
  console.log(employees);
  