---
#icon: material/numeric-2-box-multiple
icon: material/folder-open-outline

title: Call Drop Summary
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


# Lab 4: Call Drop Summary

<!-- md:option type:note -->

!!! note "Lab Objective"

    - The objective of this lab is to familiarize you with the agent experience when they handle an interaction with a call drop summary .

    - Demonstrate how agents can quickly recover from a customer call drop situation by accessing a summary of the previous conversation with the customer.

    - Enable agents to continue the customer service process without requiring the customer to repeat information, thereby saving time and improving the customer experience.

    - Teach agents how to utilize the AI Assistant's call drop summary feature to provide seamless service continuity.

    - Equip agents with the skills to manage and mitigate the negative effects of dropped calls on customer satisfaction and call resolution.

## Customer Scenario

A customer is calling to make changes to their flight reservation. The call gets disconnected due to network issues before the agent can resolve the issue. When the customer calls again and connects to another agent, the second agent is presented with a summary of the previous conversation, enabling them to effectively service the customer.

## Pre-requisites

- Ensure that you can log in as an agent into the Agent Desktop.

## Step by Step Guide

### Step 1: Making a test call as customer

- Log in to the Agent Desktop with your credentials.

- Open the Agent Desktop URL with your agent with a correct Chrome Profile: https://desktop.wxcc-us1.cisco.com

- Make yourself available to answer the call

- Make a call from your cell phone to the contact center. When the prompt asks, request to speak with an agent.

- Accept the call on the Agent Desktop.

- Disconnect the call 

<img align="middle" src="../images/lab2/14.gif" width="1000" />  
<br/>
<br/>

### Step 2: Simulate a Call Drop Using Customer Script


<!-- md:option type:warning -->

!!! warning "README"
    This model requires meaningful audio to transcribe and provide a summary of the conversation. You will need to simulate both the customer and agent speaking. If you have questions, reach out to the lab instructors for help. We suggest using your cellphone and the agent device to complete the conversation. As a tip, mute your cell phone when you are speaking as the agent and mute your Agent Desktop when you are speaking as the customer

    After this, you will need to transfer the call to simulate a call drop for the customer (it must be system initiated, not user initiated) 

We will begin this step by: 

- Place a call to begin the interaction 

- When you hear the prompt, ask to speak to an agent 

- Answer the call on Agent Desktop and use the provided script to simulate an agent/customer conversation (minimum 30 seconds). 


<!-- md:option type:note -->

!!! note "Call Drop Summary Script"
    Agent 1: Good morning, thank you for calling Airway Express. My name is Michelle. How can I assist you today?

    Customer: Hi Michelle, I'm having an issue trying to make an adjustment to a flight I have with you. I booked a flight from Boston to Seattle, but now I need to add a leg to go from Seattle to San Jose a couple of days later. I just can't seem to do it through the website.

    Agent 1: I'm sorry to hear you're experiencing issues with our app. I can definitely help you with that. Could I have your flight confirmation number to start with, please?

    Silence

    Agent: Hello, hello, hello

### Step 3: Simulate an Unexpected Call Drop


- From the Agent Call Controls, transfer the call to transfer call to the Queue **`Wx1_Q_CallDrop`**. Click the “Queue” radio button to search for this Queue. 

- **Wait for the call to timeout and disconnect. This simulates an accidental call drop.**

<!-- md:option type:warning -->

!!! note "README"

    Since the call drop must be system initiated, Queue Wx1_Q_CallDrop has been pre-configured with a maximum time in queue of 10 seconds (pictured in screenshot from Control Hub). Wait in the queue for about 10 seconds for the system to drop the call "automatically". 
    <br>
    <br>
    <img align="middle" src="../images/lab5/1.png" width="1000" />  
    <br/>
    <br/>



### Step 4: Call as a Repeat Customer

- Call back the contact center from your cell phone. This will simulate a customer calling back after a call was dropped and trying to connect again to resolve the original issue

### Step 5: View the Call Drop Summary

- Accept the call on the Agent Desktop.
- The AI Assistant notifies the agent of the available call drop summary.
- Open the AI Assistant to review the summary.
- This summary can be used by the agent to pick up where the previous agent left off, reducing customer frustration and need for them to repeat themselves. 

<img align="middle" src="../images/lab4/Call_Drop_Summary.gif" width="1000" />  
<br/>
<br/>



<p style="text-align:center"><strong>Congratulations, you have officially completed the Call Drop Summary lab! 🎉🎉 </strong></p>
		
<p style="text-align:center;"><img src="../images/webex-new-logo1.png" width="100"></p>
