---
#icon: material/numeric-2-box-multiple
icon: material/folder-open-outline

title: Agent Wellness
author: Bhushan Suresh, Chandramouli Valithiyanathan, Sara Santos
date: 2024-10-02
layout: post
---



<script src='../../assets/load.js'></script>

  <script>
    async function update(){
    event.preventDefault()
    response = await fetch(`https://63f62bf859c944921f6e89de.mockapi.io/ivrpod?POD=${document.forms["attendee-form"][0].value}`,
    {
    method: 'GET',
    redirect: 'follow'
})
response = await response.json()
await localStorage.setItem("EPDN",await response[0]['EP DN'])
await localStorage.setItem("PW",await response[0].Password)
await localStorage.setItem("POD",await response[0].POD)
loadem()
}
loadem()
</script>

!!! tip "Please submit the form below with your Attendee ID in 3 digits long format (e.g. if your attendee ID is 51, please enter 051) and click Save. All configuration items in the lab guide will be renamed with that prefix."

    <script>
    document.forms["attendee-form"][0].value = localStorage.getItem("POD") || "Your Attendee ID"; 
    update();
    </script>
    <form id="attendee-form">
    <label for="attendee">Attendee ID:</label>
    <input type="text" id="attendee" name="attendee" onChange="update()" style="border: 2px solid black; padding: 5px; border-radius: 4px; background-color: orange;"><br>
    <br>
    <button type="button" onclick="update()" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Save</button>
    </form>
    <script>
    document.forms["attendee-form"][0].value = localStorage.getItem("POD") || "Your Attendee ID";
    update();
    </script>

# Lab 5: Agent Wellness

<!-- md:option type:note -->

!!! note "Lab Objective"

    By the end of this lab, you will:

    - Experience an agent wellness reset. 

    - See how Webex Contact Center responds to an agent’s wellness indicators, such as burnout. 

## Customer Scenario

In this scenario, we will explore how a contact center can utilize AI to monitor and respond to signs of agent burnout, ensuring the well-being of its employees.

## Pre-requisites

- Ensure that you can log in as an agent into the Agent Desktop

## Step by Step Guide

#### Step 1: Log into Agent Desktop

- Log in to the Agent Desktop using your credentials.

- Select the team associated with your attendee ID.

<img align="middle" src="../images/agent/AgentLogin.gif" width="1000" />  
<br/>
<br/>

- Change your status to 'Available'.

<img align="middle" src="../images/lab2/13.gif" width="1000" />  
<br/>

#### Step 2: Simulation of Burnout Event

- Let an instructor know that you are ready to complete this lab
- This simulation will demonstrate what the agent experiences when the AI model detects a threshold that initiates a wellness intervention.

#### Step 3: Observe the Reset

<!-- md:option type:warning -->

!!! warning "README"
    Note: The details for the reset process are not provided in the document and should be completed by the instructor or the person responsible for the lab content.

- Observe the actions taken by the contact center system once a burnout event is detected.
- With Webex Agent Wellness, contact center administrators now have the tools to support their agents' well-being and enhance the employee experience in their contact centers. 
 

<img align="middle" src="../images/lab6/1.gif" width="1000" />  
<br/>



<p style="text-align:center"><strong>Congratulations, you have officially completed the Agent Wellness lab! 🎉🎉 </strong></p>
		
<p style="text-align:center;"><img src="../images/webex-new-logo1.png" width="100"></p>
