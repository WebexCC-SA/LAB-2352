---
#icon: material/numeric-2-box-multiple
icon: material/folder-open-outline

title: Webex AI Agents
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

# Lab 2: Webex AI Agent
<!-- # Part 2: Cisco Virtual Agents (VA) -->

## Objectives

This lab is designed to provide an in-depth understanding of the Webex AI  Agents available in Webex Contact Center. By completing this section of the lab, you will:

- Gain practical skills and knowledge on how to effectively utilize Webex Contact Center's AI capabilities to create self-service automation.
- Improve the containment rate of your contact center, increasing efficiency and reducing costs.
- Learn how to create an effective AI Voice solution using Cisco's Webex Connect Bot builder platform and Webex Contact Center Flow Designer.
- Understand the use of Generative AI to fast-track bot development and save time.
- Troubleshoot AI Agent functionality to enhance performance.

## Overview

The exercises are designed to provide a hands-on understanding of creating Cisco Virtual Agents.

- Step 1: Creating a Virtual Agent using a Template
- Step 2: Integrating the bot with Flow for Voice call
- Step 3: Updating Bot Responses
- Step 4: Adding New Intents & Entities
- Step 5: Adding Training Data using Generative AI
- Step 6: Bot Transcripts & Analytics
- Step 7: Generative Fallback with ChatGPT

## Step by Step Guide

### Step 1: Creating a AI Agent using a Template

<!-- md:option type:note -->

!!! note "Step Objective"
    In this step, We will learned how to:

    1) Create a Webex AI bot. 

    2) Test the bot in preview mode to ensure proper functionality.

- Log in to the Control Hub using the contact center `admin` credentials.
- Go to Contact Center from the left side navigation panel, and under Quick Links, click on `Webex AI Agent`


<img align="middle" src="../images/lab3/1_CH2Bot.gif" width="1000" />  

<br/>
<br/>

- Click on "New Task Bot" to create a new bot.
- Select the `Appointment Booking` Template and click on `Next` button


<img align="middle" src="../images/lab3/2_CreatingBot_1.gif" width="1000" />  
<br/>
<br/>


- Update the Bot Name to Wx1\_bot\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID. Click on `Import` to create the bot.
- Make the bot live by clicking on the `Make Live` button on the top right.
- Enter `v1` in the popup modal which appears after clicking on `Make Live`.
- Click on the `Preview` button on the top right side to test the bot.

<img align="middle" src="../images/lab3/2_CreatingBot_2.gif" width="1000" />  
<br/>
<br/>


- Try the bot flow by typing "I would like to cancel an appointment" and continue the conversation.

<img align="middle" src="../images/lab3/3-cancelappt.gif" width="1000" />  
<br/>
<br/>

- Go back and click on New Chat to initiate a new chat for "booking a new appointment" by typing "I would like to book an appointment" and continue the conversation.

<img align="middle" src="../images/lab3/9.png" width="1000" />  
<br/>
<br/>


### Step 2: Integrating the Bot with Flow for Voice Calls

<!-- md:option type:note -->

!!! note "Step Objective"
    In this Step, we will learn how to:

    1. Integrate the Webex AI Bot with the Flow Builder.
    
    2. We will test the integration by making a test call and verifying the bot's initial response, ensuring that it functions as expected.

- Log into Control Hub using your contact center admin credentials. Select 'Contact Center' from the left panel and then navigate to 'Flows' from the left panel.

- Click on "Manage Flows", then select "Create Flow".

- Name the new flow Wx1\_VA\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID.

<img align="middle" src="../images/lab3/4-CreateFlow.gif" width="1000" />  
<br/>
<br/>


- Make sure the Edit button at the top is set to "ON". Then, drag and drop the "Virtual Agent V2" activity from the left panel onto the canvas.
- Drag and Drop `VirtualAgentV2` Activity on to the canvas, please make sure to use `VirtualAgentV2`Activity  there could not `VirtualAgent` also present on the Activity Library for Backward Compatability 
- Connect the "New Phone Contact" activity to the `VirtualAgentV2` activity by dragging a line between them.
- Click on the `VirtualAgentV2` activity to configure it. In the right-side panel, select `Webex CCAI Config` as the Contact Center AI Config 
from the dropdown menu.
- From the Virtual Agent dropdown, choose the bot you created in Step 1, labeled  `Wx1\_bot\_<w class = "attendee_out">attendeeID</w>`.
- From the left side panel, find and select the `DisconnectContact` activity.
- Drag and drop the `DisconnectContact` activity onto the canvas, placing it in your flow.
- Connect the handled, escalated, and errored outputs from the `VirtualAgentV2` activity to the `DisconnectContact` activity.

<img align="middle" src="../images/lab3/4-createVAFlow.gif" width="1000" />  
<br/>
<br/>


- Activate the validation by turning the `Validation` button `ON`. Make sure there are no errors in your flow.
- Click on the "Publish Flow" button. 
- As a best practice select `Live`  click on `Publish Flow`.


<img align="middle" src="../images/lab3/4-ValidateVAFlow.gif" width="1000" />  
<br/>
<br/>


- Click on `Channels` under Customer Experience on the left hand side navigation panel
- Search on the top search bar with Wx1\_EP\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID. 
- search for Routing flow  with your `attendeeID` Wx1\_VA\_<w class = "attendee_out">attendeeID</w>
- Update the Routing Flow to Wx1\_VA\_<w class = "attendee_out">attendeeID</w>.
- Select the correct `Version Label` either `Latest` or `Live`
- Note down the Support Number and then click on Save.
- Dial the  Support Number from your mobile phone to test the Virtual Agent over a voice call.

<img align="middle" src="../images/lab3/4-CreatEPTagFlow.gif" width="1000" />  
<br/>
<br/>



### Step 3: Updating Bot Responses

!!! note "Step Objective"
    In this Step:

    1. We will learn how to update bot responses and test these changes both in preview mode and by making a live call , Testing in preview mode allowed you to ensure the changes worked as expected, while making a live call confirmed the bot's performance in a real-world scenario.

- From the Control Hub Go to Contact center and the under Quick Links, open the `Webex AI Agent`. If you encounter an authentication error due to inactivity, log out from the control hub, log back in, and then access the Webex `Webex AI Agent`.

<img align="middle" src="../images/lab3/1_CH2Bot.gif" width="1000" />  
<br/>
<br/>

- Click on the bot  Wx1\_bot\_<w class = "attendee_out">attendeeID</w>  that you created earlier.
- Go to the Responses tab on the left-hand panel.
- Select the Welcome message.

<img align="middle" src="../images/lab3/5-ChangeResp1.gif" width="1000" />  
<br/>
<br/>

- Update the text to "Welcome to Cumulus Healthcare. How may I assist you today?" for the Default (web) channel.

- Navigate to the Voice Channel and update the text to "Welcome to Cumulus Healthcare. How may I assist you today?"

- Click on the update button to confirm the changes.Make the bot live by clicking on the `Make Live` button


<img align="middle" src="../images/lab3/5-ChangeResp2.gif" width="1000" />  
<br/>
<br/>

- click on `Preview` to test if the Greeting has been successfully updated.

<img align="middle" src="../images/lab3/5-Validatechange.gif" width="1000" />  
<br/>
<br/>


### Step 4: Adding New Intents & Entities

<!-- md:option type:note -->
!!! note "Step Objective"
    In this Step, 

    1. We will learn how to add new intents and entities to enhance the bot's ability to understand and respond to a wider range of user inputs. 

    2. We will test these updates in both preview mode and through a live call, confirming that the bot correctly identifies the new intents and entities and provides appropriate responses.


To expedite the completion of this lab, it is recommended to remove all languages except the default language(English), and proceed with the lab.

While the screenshots in this guide display all available languages, we advise you to retain only English for simplicity.

<!-- md:option type:warning -->
!!! warning "README"
    After disabling all the languages please make sure to hit on **Update bot** and you should see a green **`Bot updated`** message that confirms the action. 


<img align="middle" src="../images/lab3/Disable_Language.gif" width="1000" />  
<br/>
<br/>




- Navigate to the Training Tab from the left-hand panel and click on the "Create Intent" button located in the top right corner.


- Add a new intent by providing the intent name as "ReferralRequest" and include the following two utterances:

  - "I would like a referral for a cardiologist."
  - "I need a referral to visit a neurologist."

<img align="middle" src="../images/lab3/6-CreateIntent.gif" width="1000" />  
<br/>
<br/>

- Click on `Link entity` and add `patient phone number` as an entity.

- Check the "Required" checkbox and select the template key as `askPhoneNumber`, which will be used to prompt the patient for their phone number.

- Again, click on `Link Entity` and add `patient dob` (date of birth) as a required entity with the template key as "askPatientDob". When this intent is matched, it will trigger the Virtual Agent to ask the user to provide their phone number and date of birth for verification purposes.

<img align="middle" src="../images/lab3/6-LinkIntent.gif" width="1000" />  
<br/>
<br/>

- At the bottom of the `Final Template Key` section, click on `Create new`.

- Create a new template with the name `ReferralResp` and with the text:

 "Your request has been logged and will be reviewed by our team. You will receive a callback once it's approved. Is there anything else I can assist you with?"

 - Click on "Save".



<img align="middle" src="../images/lab3/6-finalResp.gif" width="1000" />  
<br/>
<br/>

- Return to the Training tab and click on the `Train` button to update the bot's understanding with the new intent and entities.


- Add a comment such as `Added referral request intent` to track the changes.

- Click on `Make Live` to update the live version of the bot with these changes.

- Provide a description for the update and choose `Make Live` or `Make Live both` if there are other unsaved changes pending.

<img align="middle" src="../images/lab3/6-Train&makelive.gif" width="1000" />  
<br/>
<br/>

- Use the "Preview" feature to test the bot flow with the input query: "I need a referral for a cardiologist".
- You can also test this interaction in voice mode by dialing the PSTN number assigned to your pod.

<img align="middle" src="../images/lab3/6-testandvalidate .gif" width="1000" />  
<br/>
<br/>


### Step 5: Adding Training Data using Generative AI

!!! note "Step Objective"
    In this Step, 

    1. We will learn how to enhance your bot's capabilities by adding training data using Generative AI

    2. We will make a call to validate the change

- Return to the "Referral Request" intent that you created in the previous exercise.

- Click on the "Generate" button to utilize Generative AI for creating additional training phrases.

- Enter a description such as "generate intents for requesting a referral to different doctor specialties from primary care." Set the Number of Variants to "10", which will determine the number of new phrases to be generated.

<img align="middle" src="../images/lab3/7-CreateGenAIIntent.gif" width="1000" />  
<br/>
<br/>

- Once the new phrases are generated, click on the "Save" button located in the top right corner to add them to your intent.


- After saving, navigate back to the Training tab and click on the "Train" button to incorporate the new generative data into the bot's model.


- Add a comment such as "added generative training data" to keep track of this specific update.

- Click on the "Make Live" button situated in the top right corner to apply the changes to the live version of your bot.


- Confirm the update by clicking on "Make Live" in the modal that appears.

<img align="middle" src="../images/lab3/7-TrainNMakeLive.gif" width="1000" />  
<br/>
<br/>

- Test the updated bot flow by using the "Preview" button and inputting queries related to the new training data.

<img align="middle" src="../images/lab3/7-PreviewNTest.gif" width="1000" />  
<br/>
<br/>


### Step 6: Bot Transcripts & Analytics

!!! note "Step Objective"
    In this Step:

    1. We will explore how to access and analyze bot transcripts and analytics to gain insights into user interactions.
    

- Click on "Sessions" in the left-hand panel of your bot builder interface to view all the call history. Click on any Session ID to delve into a more detailed analysis of that particular interaction.

- If you encounter encrypted content, click on "Decrypt Content" to proceed with the review.

- Review the transcript for the selected interaction to gain insights into how the conversation unfolded.

<img align="middle" src="../images/lab3/8-AnalyzeSession.gif" width="1000" />  
<br/>
<br/>

- Click on individual messages from the user to examine the intents and entities identified by the Virtual Agent during the conversation.


- By carefully analyzing these transcripts and analytics, you can identify areas for improvement, understand user behavior, and refine the Virtual Agent's performance accordingly.

<img align="middle" src="../images/lab3/8-AnzlyeDepDive.gif" width="1000" />  
<br/>
<br/>



<p style="text-align:center"><strong>Congratulations, you have officially completed the Cisco Virtual Assistant lab! 🎉🎉 </strong></p>
		
<p style="text-align:center;"><img src="../images/webex-new-logo1.png" width="100"></p>
