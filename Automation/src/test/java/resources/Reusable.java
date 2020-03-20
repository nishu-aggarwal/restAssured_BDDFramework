package resources;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Properties;

import io.restassured.RestAssured;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.specification.RequestSpecification;

public class Reusable {

	public static RequestSpecification reqSpec;
	public RequestSpecification reqSpecifications() throws IOException{
		if(reqSpec==null) {
			PrintStream log = new PrintStream(new FileOutputStream("LogFile.txt"));
			RestAssured.baseURI =  getGlobalValue("baseURL");
			reqSpec = RestAssured.given().filter(RequestLoggingFilter.logRequestTo(log)).filter(ResponseLoggingFilter.logResponseTo(log));
			return reqSpec;
		}
		return reqSpec;
	}
	
	public static String getGlobalValue(String key) throws IOException {
		Properties prop = new Properties();
		APIConstants path = APIConstants.valueOf("PROPERTIES_FILE_PATH");
		FileInputStream fis = new FileInputStream(path.getResource());
		prop.load(fis);
		return prop.getProperty(key);
		
	}
	
	public String getReportConfigPath() throws IOException{

		String reportConfigPath = getGlobalValue("reportConfigPath");
		if(reportConfigPath!= null) return reportConfigPath;
		else throw new RuntimeException("Report Config Path not specified in the Configuration.properties file for the Key:reportConfigPath");
	}

}
