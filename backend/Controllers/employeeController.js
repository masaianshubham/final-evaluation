const Employee = require("../Models/Employee");
// const {patientValidation} = require("../Validation/Validation");

const addEmployee = async (req, res) => {
//   const { error } = patientValidation(req.body);
//   if (error) {
//     return res.status(400).send(error.details[0].message);
//   }
    req.body.date = new Date(req.body.date)
  try {
    const employee = await new Employee({ ...req.body }).save();
    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getEmployee = async (req, res) => {
    const { id } = req.params;
    try {
  
      const sort = req.query.sort === 'asc' ? 1 : req.query.sort === 'desc'? -1 : 0;
          const page = parseInt(req.query.page) || 1;
          const limit = 2;
          const filter = req.query.gender === 'Female' ? 'Female' : req.query.gender === 'Male' ? 'Male' : null;
          const searchQuery = {companyId: id}
          if (filter) {
            searchQuery['gender'] = filter;
        }
        const employee = await Employee.find(searchQuery)
              .sort({ joiningDate: sort })
              .skip((page - 1) * limit)
              .limit(limit)
        const count = await Employee.countDocuments(searchQuery).exec();
        const totalPages = Math.ceil(count / limit);
      res.status(200).json({employee,totalPages});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  const deleteEmployee = async (req, res) => {
    Employee.findByIdAndDelete(req.params.id)
      .then(() => res.status(200).json({ message: "deleted successfully" }))
      .catch((err) => console.log(err));
  };

module.exports = { addEmployee, getEmployee,deleteEmployee};