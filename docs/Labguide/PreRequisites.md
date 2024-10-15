---
#icon: material/numeric-2-box-multiple
icon: material/folder-open-outline

title: IVR Experience
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




# Lab Pre-Requisites

Welcome to the **Webex Contact Center Agent and Flow Experience!**

In **Part 1**, we will explore the **Webex Contact Center Agent Experience** and the associated administrative toggles for configuring agents in the Webex Contact Center.

In **Part 2**, we will examine the **Webex Contact Center Flow Experience** and the associated administrative toggles for configuring supervisors in the Webex Contact Center.



**Table of Contents**

| Topic                                                                                  | Type             | Dificulty    | Time   |
| -------------------------------------------------------------------------------------- | ---------------- | ------------ | ------ |
| [Part 1: Agent Experience](#part-1-agent-experience)                                   | Exploration      | EASY         | 5 mins |
| [1.1: Agent Desktop Overview](#11-desktop-login-process)                               | Exploration      | EASY         | 	    |
| [1.2: Make an Incoming Call](#12-make-an-incoming-call)                                | Activity         | EASY         |        |
| [1.3: (Optional) Troubleshooting Tips for WebRTC](#13-troubleshooting-agent-desktop)   | Exploration      | EASY         |        |
| [Part 2: Flow Experience](#part-2-flow-experience)                         	         | Exploration      | EASY         | 5 mins |
| [2.1: Flow Experience](#part-2-flow-experience)                         	         | Exploration      | EASY         | 5 mins |
| [Part 2: Flow Experience](#part-2-flow-experience)                         	         | Exploration      | EASY         | 5 mins |

## Part 1: Agent Experience

**Objectives**

- Explore the Agent Experience on the Webex Contact Center by logging into the Agent Desktop application and navigating its out-of-the-box capabilities.
- Familiarize yourself with the complete Agent Desktop interface and its functions


<!-- md:option type:warning -->

!!! warning "README"

    The initial section of the lab is a walkthrough, the Desktop has been configured for you. This ensures you can experience a fully configured Agent desktop. **The Password sent through the email is the same for Agent and Admin login**



**Create Chrome Profiles**

- For the lab, create new Chrome profiles so that you can login the Administrators, Agents and Supervisors using the same Browser.

  - Select `Profiles` on Chrome
  - Select `Add Profile`
  - Select `continue without an account`
  - Give it a name .i.e `Admin`
  - Click `done`
  - Create 2 more profiles for `Supervisor` and `Agent`

![CH-Desktop-Call-In-Accepted](../images/agent/Chrome-Create-Profile.gif)


**Quick Links**

For this lab, you'll only require access to two web portals:

> Control Hub Administration: **[https://admin.webex.com](https://admin.webex.com){:target="\_blank"}**\
> Contact Center Desktop: **[https://desktop.wxcc-us1.cisco.com](https://desktop.wxcc-us1.cisco.com){:target="\_blank"}**
> {: .block-success }

**Lab Configuration***

The following Administration entities have been configured for you via [Webex Control Hub](https://admin.webex.com){:target="\_blank"}

Please note, that to proceed to the next section, you will need to use the accounts shown in the top 3 rows.

| **Entity**           | **Name**                                                            |
| -------------------- | ------------------------------------------------------------------- |
| Agent                | wxcclabs+agent_ID<w class = "attendee_out">attendeeID</w>@gmail.com |
| Administrator        | wxcclabs+admin_ID<w class = "attendee_out">attendeeID</w>@gmail.com |
| Desktop Profile      | <w class = "attendee_out">attendeeID</w>\_desktopProfile            |
| Entry Point          | <w class = "attendee_out">attendeeID</w>\_EP                        |
| Queue                | <w class = "attendee_out">attendeeID</w>\_Q                         |
| Team                 | <w class = "attendee_out">attendeeID</w>\_team1                     |
| Inbound Flow         | WebexOne_Inboundflow                                                |
| Multimedia Profile   | <w class = "attendee_out">attendeeID</w>\_MMP                       |


### 1.1: Desktop Login Process

<!-- md:option type:note -->

!!! note "Lab Learning"

    In this section, we will go through the agent desktop login process and explore agent states and idle codes. Please keep your agent ID and password handy. 

- To Login to the Agent Desktop, launch Google Chrome and navigate to the URL: [https://desktop.wxcc-us1.cisco.com](https://desktop.wxcc-us1.cisco.com)

> **Note: Please use Google Chrome as the browser to take advantage of the all new WebRTC Voice Option.**

> Tip: You can also find this link under Control Hub: [admin.webex.com](https://admin.webex.com) > Contact Center > Settings
> {: .block-warning }

- Once you're in the login page, enter the agent credentials (username and password)

> In this example, please use the specific login for your attendee ID
> {: .block-warning }

![agent-desktop](../images/agent/01-image.png)

---

![agent-desktop](../images/agent/02-image.png)

---

- This is the station Login Screen. Agents may input the number where they need to receive incoming and outdial calls.

- Notice that the voice option defaults to "Desktop".


- Check the **Remember My Credentials** box to save your credentials for future sign-ins.

- Click Sign in to be connected to telephony and complete the login process.

![agent-desktop](../images/agent/03-image.png)

> NOTE: Agents cannot access the Agent Desktop from multiple browsers or multiple tabs of the same browser window. In that case, a warning message will be displayed.
> {: .block-warning }

![agent-desktop](../images/agent/04-image.png)

---

> The below shows a demo about the agent login process and the available options:

![agent-desktop](../images/agent/AgentLogin.gif)

---


**Explore Agent State and Idle codes**

The header section of the agent desktop contains the State change toggle where the agent can make themselves available.

This also has the section where you can view the Idle codes.

![agent-desktop-State-Idle](../images/agent/Agent_State_Idle.gif)

---

> Note: The Idle codes are customizable and configured under **Webex Control Hub > Contact Center Settings > Idle / Wrap up Codes**
> These Idle codes can indeed be customized per Desktop Profile, on a per user level.
> Desktop Profiles can also be segmented on a Tenant or Site, or even Team level - i.e one Profile per Team
> {: .block-warning }

---


### 1.2: Make an Incoming Call

<!-- md:option type:note -->

!!! note "Lab Learning"

    In this section, you will will interact as an agent and test an Incoming call. Please keep the Dial Number assigned to the you handy to place the incoming call. 


- In order to test properly an incoming call, first we need to make sure that we have all the call handling options enabled


<!-- md:option type:warning -->

!!! warning "README"

   Before place call to you are logged in and available on agent desktop 


- Now place it's time to test the incoming call

  - Login the **Agent Desktop** with _your Agent 1_ user
  - Move to **`Available`** state
  
- When the call arrives - you will be able to see an incoming popover when the Agent is offered the contact. It will have an Accept and Decline button since it is a Browser powered softphone.

![Agent Popover](../images/agent/Agent_Popover.png)

---

> **Click on the Accept Button to take the call**

![CH-Desktop-Call-In](../images/agent/CH_Desktop_Call_In.gif)

---

### 1.3: (Optional lab) Troubleshooting Tips for WebRTC 

<!-- md:option type:warning -->

!!! warning "README"

    This is an optional lab that goes over few tips to settings to ensure WebRTC to work correctly that can be completed now or revisited at a later time. 

**Launch the Notification Pane**

The notification pane on the desktop shows you the notifications of incoming calls or messages.
The agent can also launch previously delivered screenpops from this pane.

![agent-desktop-Notification-Pane](../images/agent/Agent_Notification_Pane.gif)

---

**Launch the Agent Settings Pane**

To review or change the Desktop Settings, click on the persona icon on the top right.

![agent-desktop-Settings-Pane](../images/agent/Agent_Settings_Pane.gif)

---


**Verify Notification Settings**

The notification settings under user settings allows you to Enable/Disable the Notifications, Enable Silent Notifications, or Enable/Disable the sound. You can also change the volume of the Chime for the incoming contact.

> Note: These settings persist as long as the browser cache is retained for the user.
> {: .block-warning }

![agent-desktop-Notification-Pane](../images/agent/Agent_Notification_Pane.gif)

---


**View Desktop Mic & Speaker Options**

This is a setting that is enabled for all logged in Agents with the Desktop (WebRTC) option. This can help troubleshoot any audio related settings for the Agent's microphone or speaker volumes.

![agent-desktop-Mic-Speaker](../images/agent/Agent_Mic_Speaker.gif)

---


> What you will notice when you open the file:
> The Desktop uses a combination of secure HTTPS as well as Websocket connectivity to stay connected to the backend.
> From a connectivity standpoint, this means that the Agent's Desktop requires network access, latency and bandwidth requirements to facilitate streamlined HTTPS traffic for both pure REST as well as WebSocket payloads.
> {: .block-warning }

---

**Test Your Network**

This is specifically for the Desktop Voice option. Agents can also test their local network connectivity for latency and bandwidth requirements on the Agent Desktop - eespecially for diagnostics.

![agent-desktop-Test-Network](../images/agent/Agent_Test_Network.gif)

---


## Part 2. Flow Experience 

<!-- md:option type:note -->

!!! note "Lab Learning"

    The objective of this lab is to familiarize you with the Flow Builder in Webex Contact Center by explore the flow that ensured that the call reached the agent in the previous step 

**Navigating to the Flow**

  - Sign into   [Admin Portal](https://admin.webex.com) using Admin Credentials
  - Click on  `Contact Center`
  - Click on  `Flows`
  - Search for flow in `WebexOne_Inboundflow` in the search bar 
  - Open the flow in Read-Only mode 


**Decrypting the flow**

Explore the flow and use the Debug function in the flow to step through the nodes and outputs from them. If you have any further questions, please reach out to your lab proctor 

![flow-debug](../images/agent/flow_debug.gif)
 
<!-- md:option type:warning -->

!!! TIP "README"
    1. **`Flow variable`** AttendeeEmail that has a default value assigned as **`wxcclabs+agent_ID`**
    2. **`Collect Digits Activity Settings`** - Configured with the **`Cisco TTS Cisco Cloud Text-to-Speech`** for a TTS message to collect the attendee ID. The attendeeID is captured in the **`AttendeeID.DigitsEntered`** output variable 
    3. **`SetVariable`** node has a flow Variable **`(AttendeeEmail)`** that is set with value **`{{AttendeeEmail}}{{AttendeeID.DigitsEntered}}@gmail.com`**. With the inputs from the prevous two steps based on the agent ID the Attendee Email is constructe. Example Attendee ID entered in Step 2 is 050 **`wxcclabs+agent_ID050@gmail.com`** is constructed  
    4. **`QueueToAgent`** is configured to perform an Agent Loop Type as Email and uses the AttendeeEmail output from the previous to route the call to the agent


<p style="text-align:center"><strong>Congratulations, you have officially completed the Agent and Supervisor Experience labs!</strong></p>
		
<p style="text-align:center;"><img src="/Labguide/gitbook../images/webex.png" width="100"></p>
