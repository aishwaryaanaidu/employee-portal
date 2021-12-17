'use strict';

const Employee = require('../employees/employees.model');

module.exports = {
      index: (req, res) => {
          Employee
          .find({})
          .exec((err, employeeDetails)=>{
               if (err) {
                   res.status(500).json({message : err})
                }
                res.status(200).json({ message: "Employee Details fetched Successfully", data : employeeDetails});
          })
      },
      retrieve: (req, res) => {
           const employeeId = req.params.id;
           Employee
           .findOne({_id:employeeId})
           .exec((err, employeeDetails)=>{
                if (err) {
                    res.status(500).json({message : err})
                }
                
                res.status(200).json({ message: "Employee Details fetched Successfully", data : employeeDetails});
           })
       },
       create: (req, res) => {
           Employee.create(req.body, (err, employeeDetails) => {
                if (err) {
                     res.status(500).json({message : err})
                }
                res.status(201).json({ message: "Employee Created Successfully", data : employeeDetails});
           })
       },
       update: (req, res)=>{
            const employeeId = req.params.id;
            Employee
            .findByIdAndUpdate(employeeId, { $set: req.body })
            .exec((err, employeeDetails) => {
                 if (err) res.status(500).json({message : err})
                 res.status(200).json({ message: "Employee updated"});
            })
       },
       delete: (req, res)=>{
            const employeeId = req.params.id;
            Employee
            .findByIdAndUpdate(employeeId, { $set: { is_active: false}})
            .exec((err, employeeDetails) => {
                 if (err) res.status(500).json({message : err})
            
                 res.status(200).json({ message: "Employee Deleted"});
             })
       }
}