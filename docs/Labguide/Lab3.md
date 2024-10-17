---
#icon: material/numeric-2-box-multiple
icon: material/folder-open-outline

title: Intelligent Virtual Agent Handoffs
author: Bhushan Suresh, Chandramouli Valithiyanathan, Sara Santos
date: 2024-10-02
layout: post
---

<script>
    function update(){them = Array.from(document.querySelectorAll("input")).reduce((acc, input) => ({...acc, [input.id + "_out"] : input.value}),{});
   Object.entries(them).forEach((entry) => {
    Array.from(document.getElementsByClassName(entry[0])).forEach((element,index) => 
    {
      console.log(document.getElementsByClassName(entry[0])[index].innerHTML); 
      document.getElementsByClassName(entry[0])[index].innerHTML = entry[1];
    })})

  event.preventDefault()
   if(document.forms["attendee-form"][1].value != "Your_Attendee_ID"){
    localStorage.setItem("attendeeID",document.forms["attendee-form"][1].value)
  }  
  }
</script>

!!! tip "Please submit the form below with your Attendee ID in 3 digits long format (e.g. if your attendee ID is 51, please enter 051) and click Save. All configuration items in the lab guide will be renamed with that prefix."

    <script>
    document.forms["attendee-form"][1].value = localStorage.getItem("attendeeID") || "Your Attendee ID"; 
    update();
    </script>
    <form id="attendee-form">
    <label for="attendee">Attendee ID:</label>
    <input type="text" id="attendee" name="attendee" onChange="update()" style="border: 2px solid black; padding: 5px; border-radius: 4px; background-color: orange;"><br>
    <br>
    <button type="button" onclick="update()" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Save</button>
    </form>
    <script>
    document.forms["attendee-form"][1].value = localStorage.getItem("attendeeID") || "Your Attendee ID";
    update();
    </script>


# Lab 3: Intelligent Virtual Agent Handoffs

## Objectives

This lab is designed to explore how to pass contextual intelligence from Virtual Agents to Webex Contact Center agents. It involves leveraging AI for virtual agent conversational transcripts and summaries. By completing this lab, you will gain practical skills and knowledge on how to provide the right context to agents to better handle customer queries.

By the end of this lab, you will:

- Understand how to effectively transfer and hand off to Human Agents.
- Learn how to provide the relevant call context to Human Agents.

## Step by Step Guide

- Before you start this lab, please make sure the webex contact center `channel` is set to correct `Flow` 

<img align="middle" src="../images/lab4/0_Channel_Configuration.gif" width="1000" />  
<br/>
<br/>


### Step 1: Transfer to Human Agent

- Log into Control Hub using your `contact center admin credentials`. Select 'Contact Center' from the left panel and then navigate to `Flows` from the left panel.


- Search For flow Wx1_VA\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID by using the search bar and then clicking on the cross launch icon

<img align="middle" src="../images/lab4/1_1-openVAFlow.gif" width="1000" />  
<br/>
<br/>

- Switch the `Edit` button to on to enable Edit mode in the flow builder.

- Drag and drop the `Queue Contact` activity onto the Flow from the left side panel 

- Drag and drop the `Play Music` activity onto the Flow from the left side panel.

- connect the `Escalated` path from the `Virtual Agent V2` activity to the `Queue Contact` activity.

<img align="middle" src="../images/lab4/1_2_DDQnPM.gif" width="1000" />  
<br/>
<br/>

- Select the `Play Music` activity and choose the `defaultmusic_on_hold.wav` file from the `Music File` dropdown.

- Select the `Queue Contact` activity and set the Queue name to <w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w>_Queue 

- Example 101_Queue where `101` is your `Attendee Id`

- Connect the `Queue Contact` activity to the `Play Music` activity.

<img align="middle" src="../images/lab4/1_3_ConQnPM.gif" width="1000" />  
<br/>
<br/>

- Create a loop by connecting the `Play Music` activity back to itself - to create a music loop, following the diagram provided.

- Connect the `Failure` path from the `Queue Contact` activity to the `Disconnect Contact` activity.

- Connect the `Failure` path from the `Play Music` activity to the `Disconnect Contact` activity.

<img align="middle" src="../images/lab4/1_4_connect_Loop.gif" width="1000" />  
<br/>
<br/>



- Enable the `Validation` toggle, verify there are no Flow Errors, and then publish the flow.

<img align="middle" src="../images/lab4/1_5-Val_Pub.gif" width="1000" />  
<br/>
<br/>



- Log in to the agent desktop using the link [https://desktop.wxcc-us1.cisco.com/](https://desktop.wxcc-us1.cisco.com/){:target="\_blank"} and the agent login wxcclabs+agent_ID<w class = "attendee_out">attendeeID</w>@gmail.com

-  select the `Team` shown

- Set the Agent status to `Available`from the top right corner.


<img align="middle" src="../images/lab4/1_6_Agent_Login.gif" width="1000" />  
<br/>
<br/>

- Dial the support number assigned to your POD and during the conversation with the virtual Agent, say, "Please transfer me to an Agent." Answer the call on the agent desktop when you receive a ring notification and verify the trasciption is passed to Agent Desktop.

- Once the call is answered, disconnect the call by clicking on the `End` button.

<img align="middle" src="../images/lab4/1_7callNVerify.mov" width="1000" />  
<br/>
<br/>


### Step 2: Disable Virtual Agent Transcript

- Open your flow Wx1_VA\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID


- Select the `Virtual Agent` activity and, in the right side panel, scroll down and notice the option for `Enable Conversation Transcript`.

- Disable the Virtual Agent transcript by  unchecking `Enable Conversation Transcript` option for the `Virtual Agent V2` activity, and publishing the flow again.


<img align="middle" src="../images/lab4/2_DisbaleTrsct.gif" width="1000" />  
<br/>
<br/>

- You can dial into the same support and observe that the conversation transcript is "Not available" on the Agent Desktop when `Enable Conversation Transcript` is `unchecked`.

<img align="middle" src="../images/lab4/2_2callNVerify.mov" width="1000" />  
<br/>
<br/>

### Step 3: Routing Based on Last Intent

**Important Prereq for Step 3**

-Before Starting this lab, please make sure to Enable the Virtual Agent transcript by  checking `Enable Conversation Transcript` option for the `Virtual Agent V2` activity, and publishing the flow again



- Open your flow Wx1_VA\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID

- In the global flow properties section, click on `Add Flow Variable`.

- Enter a new variable named `last_intent`. Variable Type should be set as ‘String’ then click on ‘Save’ button.

<img align="middle" src="../images/lab4/3_2_AdLstInt.gif" width="1000" />  
<br/>
<br/>

- Drag and drop the `Parse` activity to the flow from the left panel.

- Configure the `Parse` activity with the following settings:

  - **Output variable**: `VirtualAgentV2.MetaData`
  - **Content Type**: `JSON`
  - **Output Variable**: `last_intent`
  - **Path Expression**: `$.last-matched-intent.intent-name`

- Connect the `Escalated` output from the `Virtual Agent V2` activity to the `Parse` activity.

<img align="middle" src="../images/lab4/3_3_AddParse.gif" width="1000" />  
<br/>
<br/>

- Add the `Condition` activity to the flow from the left panel.

- Configure the expression in the `Condition` activity to `{{ last_intent == "Book appointment" }}`
- Link the `Parse` activity to the `Condition` activity.

<img align="middle" src="../images/lab4/3_4_AddCondition.gif" width="1000" />  
<br/>
<br/>

- Insert the `Play Message` activity into the flow from the left panel.


- In the `Play Message` activity settings, enable `Text-to-Speech` and select the `Cisco cloud Text-to-Speech` connector.

- Click on `Add Text-to-Speech Message`.

- Click the `Delete` button next to the `Audio file` dropdown to remove any existing audio file.

- Enter the text "Routing to an agent skilled at booking an appointment" in the `Text-to-Speech Message` area.

- Connect the `True` output of the `Condition` activity to the `Play Message` activity.

- Connect the `Play Message` activity to the `Queue Contact` activity.

- Direct the `False` output from the `Condition` activity to the `Queue Contact` activity.

<img align="middle" src="../images/lab4/3_5_AdPM.gif" width="1000" />  
<br/>
<br/>



- Enable `Flow Validation` to check for errors, then publish the flow.

<img align="middle" src="../images/lab4/3_6_ValidateNpublish.gif" width="1000" />  
<br/>
<br/>


- Log in to the agent desktop using the link [https://desktop.wxcc-us1.cisco.com/](https://desktop.wxcc-us1.cisco.com/){:target="\_blank"} and the agent login wxcclabs+agent_ID<w class = "attendee_out">attendeeID</w>@gmail.com


- Set the Agent status to `Available`from the top right corner.


<img align="middle" src="../images/lab4/3_7_Agent_Login copy.gif" width="1000" />  
<br/>
<br/>

- During your interaction with the virtual Agent, request a transfer by saying, "Please transfer me to an Agent." If the last intent was "Book appointment," you will hear the Text-to-Speech message: "Routing to an agent skilled at booking an appointment." Answer the call on the agent desktop when it rings.


- End the call by clicking the `End` button, choose a wrap-up reason, and submit it with the `Submit Wrap Up` button.



### Step 4: Virtual Agent Summary

- Log in to Control Hub with the admin credentials provided, and navigate to the Contact Center tab on the left panel.

<img align="middle" src="../images/lab4/34-1-Admin_Login.gif" width="1000" />  
<br/>
<br/>

- Click on `Teams` in the left panel.

- Search for your team with the identifier <w class = "attendee_out">attendeeID</w>\_team where <w class = "attendee_out">attendeeID</w> is your attendeeID

-Verify the Desktop Layout setting is set to ` VA-summary`  if not change it to `VA-summary`  and then click on Save

<img align="middle" src="../images/lab4/34-2-TeamNavNLayout.gif" width="1000" />  
<br/>
<br/>


-  Only if the Desktop Layout was different, please sign out and sign in back again   into the agent desktop using the link [https://desktop.wxcc-us1.cisco.com/](https://desktop.wxcc-us1.cisco.com/)


<img align="middle" src="../images/lab4/34-3-Agent_Login.gif" width="1000" />  
<br/>
<br/>

- Click on the AI assistant icon located on the top left navigation panel.

<img align="middle" src="../images/lab4/34-4-checkAIIcon.gif" width="1000" />  
<br/>
<br/>


- Dial the support number assigned to your POD and initiate a conversation with below 

<!-- md:option type:note -->

!!! note "Sample Conversation"

    "I would like to Book  an appointment"

     What date are you considering for your visit 

     "Nov 20th"

     Could tell us preferred time for your visit 

     "3PM"

     Which doctor you want appointment with
  
     "Dr John"

     What is name of the  patience 

     "Peter<any name>"

     Could you tell us patience Date of Birth

     "Please transfer me to an agent "


- During the interaction with the virtual Agent, request a transfer by saying, "Please transfer me to an Agent." Answer the call on the agent desktop upon receiving the ring notification.
-	Observe that, after answering the call, a summary of the Virtual Agent interaction is now displayed on the agent desktop

<img align="middle" src="../images/lab4/34-5-ValidateAgentSummary.gif" width="1000" />  
<br/>
<br/>

**Congratulations! You just completed the lab!**

> Feel free to reach out to the proctors for any questions or clarifications.
