package com.backlogmgmt.productbacklogmanagement;

import java.time.LocalDate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.backlogmgmt.productbacklogmanagement.dao.EpicsRepo;
import com.backlogmgmt.productbacklogmanagement.entities.epics;

@SpringBootApplication
public class ProductbacklogmanagementApplication {

	public static void main(String[] args) {
		ApplicationContext context =  SpringApplication.run(ProductbacklogmanagementApplication.class, args);
		EpicsRepo epicsRepo = context.getBean(EpicsRepo.class);
		
		epics epic = new epics();
		
		epic.setId(2262958);
		epic.setProjectCode(101);
		epic.setName("Rishav Chaudhary");
		epic.setSprintId(111);
		epic.setCreatedOn(LocalDate.now());
		epic.setCompletedOn(LocalDate.now());
		epic.setStatus("On progress");
		
		
		epics epic1 = epicsRepo.save(epic);
		System.out.println(epic1);
	}

}
