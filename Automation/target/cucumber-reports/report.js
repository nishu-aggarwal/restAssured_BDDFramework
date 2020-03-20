$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/ApiValidation.feature");
formatter.feature({
  "name": "Validating employee API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify if employee data is retrieved",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestingScenario"
    }
  ]
});
formatter.step({
  "name": "Employee API is triggered",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.employee_api_is_triggered()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User calls \"GetEmployeeAPI\" with \"GET\" Http Request",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.user_calls_with_Http_Request(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Call is \"success\" with Status Code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.api_call_is_something_with_status_code_something(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"status\" in Response Body is \"success\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.status_in_response_body_is_something(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if Employee data is updated successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestingScenario"
    }
  ]
});
formatter.step({
  "name": "Add Employee Payload with \"\u003cname\u003e\" \"\u003csalary\u003e\" \"\u003cage\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User calls \"CreateEmployeeAPI\" with \"POST\" Http Request",
  "keyword": "When "
});
formatter.step({
  "name": "API Call is \"success\" with Status Code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "name": "\"status\" in Response Body is \"success\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify employee data \"\u003cname\u003e\" is added using \"GetEmployeeAPI\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "salary",
        "age"
      ]
    },
    {
      "cells": [
        "DummyVal12",
        "500000",
        "30"
      ]
    },
    {
      "cells": [
        "Dummy2",
        "600000",
        "40"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if Employee data is updated successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestingScenario"
    }
  ]
});
formatter.step({
  "name": "Add Employee Payload with \"DummyVal12\" \"500000\" \"30\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.add_Employee_Payload_with(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User calls \"CreateEmployeeAPI\" with \"POST\" Http Request",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.user_calls_with_Http_Request(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Call is \"success\" with Status Code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.api_call_is_something_with_status_code_something(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"status\" in Response Body is \"success\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.status_in_response_body_is_something(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify employee data \"DummyVal12\" is added using \"GetEmployeeAPI\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.verify_employee_data_is_added_using(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if Employee data is updated successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestingScenario"
    }
  ]
});
formatter.step({
  "name": "Add Employee Payload with \"Dummy2\" \"600000\" \"40\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.add_Employee_Payload_with(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User calls \"CreateEmployeeAPI\" with \"POST\" Http Request",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.user_calls_with_Http_Request(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API Call is \"success\" with Status Code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.api_call_is_something_with_status_code_something(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"status\" in Response Body is \"success\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.status_in_response_body_is_something(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify employee data \"Dummy2\" is added using \"GetEmployeeAPI\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.verify_employee_data_is_added_using(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});