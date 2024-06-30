package com.backlogmgmt.productbacklogmanagement.entities;

import java.time.LocalDate;

import javax.persistence.Entity;

@Entity
public class userstories {
	private int id;
	private String title;
	private String userStoryDetails;
	private String acceptanceCriteria;
	private String priority;
	private LocalDate createdOn;
	private LocalDate doneOn;
	private String assignedToDeveloperId;
	private String storyPoints;
	private String status;
	private String epicId;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getUserStoryDetails() {
		return userStoryDetails;
	}
	public void setUserStoryDetails(String userStoryDetails) {
		this.userStoryDetails = userStoryDetails;
	}
	public String getAcceptanceCriteria() {
		return acceptanceCriteria;
	}
	public void setAcceptanceCriteria(String acceptanceCriteria) {
		this.acceptanceCriteria = acceptanceCriteria;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public LocalDate getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(LocalDate createdOn) {
		this.createdOn = createdOn;
	}
	public LocalDate getDoneOn() {
		return doneOn;
	}
	public void setDoneOn(LocalDate doneOn) {
		this.doneOn = doneOn;
	}
	public String getAssignedToDeveloperId() {
		return assignedToDeveloperId;
	}
	public void setAssignedToDeveloperId(String assignedToDeveloperId) {
		this.assignedToDeveloperId = assignedToDeveloperId;
	}
	public String getStoryPoints() {
		return storyPoints;
	}
	public void setStoryPoints(String storyPoints) {
		this.storyPoints = storyPoints;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getEpicId() {
		return epicId;
	}
	public void setEpicId(String epicId) {
		this.epicId = epicId;
	}
	public userstories() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
	
}
