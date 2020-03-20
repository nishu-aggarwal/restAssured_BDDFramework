package resources;

import ApiTesting.Automation.AddEmployee;

public class TestDataBuild {

	public AddEmployee AddEmployeePayload(String name, String salary, String age) {
		
		AddEmployee add = new AddEmployee();
    	add.setname(name);
    	add.setsalary(Integer.parseInt(salary));
    	add.setage(Integer.parseInt(age));
    	
    	return add;
	}
}
