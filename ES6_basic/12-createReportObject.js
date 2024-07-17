export default function createReportObject(employeesList) {
return {
  allEmpoyees: {
    ...employeesList,
  },
  getNumberofDepartments() {
    return Object.keys(employeesList).length;
  },
  };
}
