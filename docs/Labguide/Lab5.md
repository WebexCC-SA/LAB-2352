---
#icon: material/numeric-2-box-multiple
icon: material/folder-open-outline

title: IVR Experience
author: Bhushan Suresh, Chandramouli Valithiyanathan, Sara Santos
date: 2024-10-02
layout: post
---

<script>
 function update () {
    const form = document.forms['attendee-form'];
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        const inputs = Array.from(form.querySelectorAll('input'));
        const values = inputs.reduce((acc, input) => {
          acc[input.id + '_out'] = input.value;
          return acc;
        }, {});

        Object.entries(values).forEach(([id, value]) => {
          const elements = document.getElementsByClassName(id);
          Array.from(elements).forEach(element => {

            console.log(element.innerHTML);
            if(Number(element.innerHTML) > 99 ){
               console.log(`Got a 99+ attendee: ${element.innerHTML}`);
               element.innerHTML = value;
             }
            else{
               console.log(`Got a sub 99 attendee: ${element.innerHTML}`);
                element.innerHTML = `0${value}`;
                }
          });
        });
        const attendeeIDInput = form.elements['attendeeID'];
       if (attendeeIDInput && attendeeIDInput.value !== 'Your_Attendee_ID') {
          localStorage.setItem('attendeeID', attendeeIDInput.value);
        }
      });
    }
  };
</script>
<style>
  /* Style for the button */
  button {
    background-color: black; /* Set the background color to black */
    color: white; /* Set the text color to white */
    border: none; /* Remove the border */
    padding: 10px 20px; /* Add some padding for better appearance */
    cursor: pointer; /* Show a pointer cursor on hover */
  }

   /* Style for the input element */
  input[type="text"] {
    border: 2px solid black; /* Set the border thickness to 2px */
    padding: 5px; /* Add some padding for better appearance */

</style>

Please **`submit the form below with your Attendee or pod ID`**. All configuration entries in the lab guide will be renamed to include your pod ID.
{: .block-warning }

<script>
document.forms["attendee-form"][1].value = localStorage.getItem("attendeeID") || "Your Attendee ID" 
</script>
<form id="attendee-form">
  <label for="attendee">Attendee ID:</label>
  <input type="text" id="attendee" name="attendee" onChange="update()"><br>
<br>
  <button onclick="update()">Save</button>
</form>

<br/>

# Lab 5: Call Drop Summary

## Lab Objective

The objective of this lab is to familiarize agents with the process of handling call drops efficiently using an AI Assistant.
After this lab, you will be able to:

- Demonstrate how agents can quickly recover from a customer call drop situation by accessing a summary of the previous conversation with the customer.
- Enable agents to continue the customer service process without requiring the customer to repeat information, thereby saving time and improving the customer experience.
- Teach agents how to utilize the AI Assistant's call drop summary feature to provide seamless service continuity.
- Equip agents with the skills to manage and mitigate the negative effects of dropped calls on customer satisfaction and call resolution.

## Customer Scenario

A customer is calling to make changes to their flight reservation. The call gets disconnected due to network issues before the agent can resolve the issue. When the customer calls again and connects to another agent, the second agent is presented with a summary of the previous conversation, enabling them to effectively service the customer.

## Pre-requisites

- You have received access to the agent and supervisor accounts.

## Step by Step Guide

### Step 1: Making a Test call as Customer

> **Log in to the Agent Desktop with your credentials. Choose the correct Team.**

- Open the Agent Desktop URL with a correct Chrome Profile: https://desktop.wxcc-us1.cisco.com

- Choose the Correct Team corresponding to your POD number and sign in With the Desktop Option.

<img align="middle" src="../images/lab2/12.gif" width="1000" />  
<br/>
<br/>

- Go to an available state to receive the call once you have called into the Queue.

<img align="middle" src="../images/lab2/13.gif" width="1000" />  
<br/>
<br/>

- Make a call from your cell phone to the contact center.

- Accept the call on the Agent Desktop.

<img align="middle" src="../images/lab2/14.gif" width="1000" />  
<br/>
<br/>

### Step 2: Simulate Customer Script

- Use the provided script to simulate an agent/customer conversation (minimum 30 seconds).

> Note: This is required by the model to transcribe meaningful audio to text and provide a summary of the conversation by simulating 2 parties. You may also reach out to the lab instrcutors for any queries around this. You may use the two endpoints, your cellphone and the agent device, and complete the conversation.

> After this, you will need to transfer the call to simulate a call drop for the customer (it has to be system initiated, not user initiated)

```
Call Drop Summary Script
Agent 1: Good morning, thank you for calling Airway Express. My name is Michelle. How can I assist you today?

Customer: Hi Michelle, I'm having an issue trying to make an adjustment to a flight I have with you. I booked a flight from Boston to Seattle, but now I need to add a leg to go from Seattle to San Jose a couple of days later. I just can't seem to do it through the website.

Agent 1: I'm sorry to hear you're experiencing issues with our app. I can definitely help you with that. Could I have your flight confirmation number to start with, please?

Silence

Agent: Hello, hello, hello

******************************************************************************************


Agent 2: Good morning, thank you for calling Airway Express. My name is Anita. I see that you were talking to my colleague a little while ago about making an adjustment a flight. I should be able to help you with this. Can you share your flight confirmation number please.

Customer:
Thanks so much. I’m afraid I can’t find my confirmation number
Agent 2:
No problem, could you share your date of birth and name as per your ticketing information

```

### Step 3: Simulate an Unexpected Call Drop

- Transfer the call to transfer call to the Queue `CL_Q_CallDrop`.

> Note: This queue is being used just to simulate a call drop. Since the call drop has to be system initiated.

> The way this is simulated is that, the queue has a maximum time in queue as 10 seconds.

> So, wait in the queue for about 10 seconds for the system to drop the call "automatically"

<img align="middle" src="../images/lab5/1.png" width="1000" />  
<br/>
<br/>

- **Wait for a minute for the call to timeout and disconnect. This simulates an accidental call drop.**

### Step 4: Call as a Repeat Customer

- Call back the contact center from your cell phone - as a customer who is trying to connect again.

### Step 5: View the Call Drop Summary

- Accept the call on the Agent Desktop.

<img align="middle" src="../images/lab2/14.gif" width="1000" />  
<br/>
<br/>

- The AI Assistant notifies the agent of the available call drop summary.

<img align="middle" src="../images/lab5/2.png" width="500" />  
<br/>
<br/>

- Open the AI Assistant to review the summary.

<img align="middle" src="../images/lab5/3.png" width="500" />  
<br/>
<br/>

**Congratulations! You just completed the lab!**

> Feel free to reach out to the proctors for any questions or clarifications.
