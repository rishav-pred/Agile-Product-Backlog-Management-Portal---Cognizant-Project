package com.backlogmgmt.productbacklogmanagement.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class epics {
	
	@Id 
	@Column(name="id", length=10)
	private long id;
	
	@Column(name="projectCode", length=10)
	private  long projectCode;
	
	@Column(name="sprintId", length=10)
	private long sprintId;
	
	@Column(name="name", length=50)
	private String name;
	
	private LocalDate createdOn;
	private LocalDate completedOn;
	private String status;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getProjectCode() {
		return projectCode;
	}
	public void setProjectCode(long projectCode) {
		this.projectCode = projectCode;
	}
	public long getSprintId() {
		return sprintId;
	}
	public void setSprintId(long sprintId) {
		this.sprintId = sprintId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public LocalDate getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(LocalDate createdOn) {
		this.createdOn = createdOn;
	}
	public LocalDate getCompletedOn() {
		return completedOn;
	}
	public void setCompletedOn(LocalDate completedOn) {
		this.completedOn = completedOn;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public epics(long id, long projectCode, long sprintId, String name, LocalDate createdOn, LocalDate completedOn,
			String status) {
		super();
		this.id = id;
		this.projectCode = projectCode;
		this.sprintId = sprintId;
		this.name = name;
		this.createdOn = createdOn;
		this.completedOn = completedOn;
		this.status = status;
	}
	public epics() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
