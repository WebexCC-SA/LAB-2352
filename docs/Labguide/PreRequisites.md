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

Welcome to the **Webex Contact Center Agent and Supervisor Experience!**

In **Part 1**, we will explore the **Webex Contact Center Agent Experience** and the associated administrative toggles for configuring agents in the Webex Contact Center.

In **Part 2**, we will examine the **Webex Contact Center Flow Experience** and the associated administrative toggles for configuring supervisors in the Webex Contact Center.




**Table of Contents**

| Topic                                                                                  | Type             | Dificulty    | Time   |
| -------------------------------------------------------------------------------------- | ---------------- | ------------ | ------ |
| [Part 1: Agent Experience](#part-1-agent-experience)                                   | Exploration      | EASY         | 5 mins |
| [1.1: Agent Desktop Overview](#11-desktop-login-process)                               | Exploration      | EASY         | 	    |
| [1.2: Make an Incoming Call](#12-make-an-incoming-call)                                | Activity         | EASY         |        |
| [1.3: (Optional) Troubleshooting Agent Desktop](#13-troubleshooting-agent-desktop)     | Exploration      | EASY         |        |
| [Part 2: Flow Experience](#part-3-flow-experience)                         	         | Exploration      | EASY         | 5 mins |

## Part 1: Agent Experience

**Objectives**

- Explore the Agent Experience on the Webex Contact Center by logging into the Agent Desktop application and navigating its out-of-the-box capabilities.
- Familiarize yourself with the complete Agent Desktop interface and its functions


<!-- md:option type:warning -->

!!! warning "README"

    The initial section of the lab is a walkthrough, the **Desktop has been configured for you**. This ensures you can experience a fully configured Agent desktop. **The Password that is sent throught the email is the same for Agent and Admin login **


**Pre-Requisites**

> Note: The initial section of the lab is a walkthrough, the **Desktop has been configured for you**. This ensures you can experience a fully configured Agent desktop. For more insights on Desktop Administration and Configuration toggles available, please refer to the `Verify Desktop Administration` section in the lab.

> We'll delve into each Administrative element in the following **Verify Desktop Administration** section that covers `Configuration and Administrative tasks`.



**Create Chrome Profiles**

- For the lab, create new Chrome profiles so that you can login the Administrators, Agents and Supervisors using the same Browser.

  - Select `Profiles` on Chrome
  - Select `Add Profile`
  - Select `continue without an account`
  - Give it a name .i.e `Admin`
  - Click `done`
  - Create 2 more profiles for `Supervisor` and `Agent`

![CH-Desktop-Call-In-Accepted](../images/agent/Chrome-Create-Profile.gif)

(1) **One additional device** (like your personal phone) to test inbound calls to the Webex Contact Center. You can use your cell phone for this purpose.

- Administrator credentials for the Control Hub: [admin.webex.com](https://admin.webex.com).
- Agent Login Credentials for the Agent Desktop: [desktop.wxcc-us1.cisco.com](https://desktop.wxcc-us1.cisco.com).

(2) The items listed below have been pre-configured for you:

- Agent and Admin user accounts are configured and ready for logins.
- You can access the Agent Desktop via the URL: [https://desktop.wxcc-us1.cisco.com](https://desktop.wxcc-us1.cisco.com).
- As an agent, you're associated with a team—designated by your Attendee ID—as "Team" 

Example:

> If your attendee ID is 100:
>
> 100_Team


(4) Agents will use browsers for voice calls using WebRTC (Web Real-time Communication) endpoints. Additionally, Webex Calling extensions have been assigned to users (both agents and supervisors) to facilitate alternate device experiences. Webex Contact Center agents and supervisors can opt for any mix of these devices, encompassing PSTN endpoints and mobile phones.

(5) A preset inbound Voice flow is available for test calls.

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
| Agent 1              | wxcclabs+agent_ID<w class = "attendee_out">attendeeID</w>@gmail.com |
| Supervisor 1         | wxcclabs+supvr_ID<w class = "attendee_out">attendeeID</w>@gmail.com |
| Administrator        | wxcclabs+admin_ID<w class = "attendee_out">attendeeID</w>@gmail.com |
| Desktop Profile      | <w class = "attendee_out">attendeeID</w>\_desktopProfile            |
| Entry Point          | <w class = "attendee_out">attendeeID</w>\_EP                        |
| Queue                | <w class = "attendee_out">attendeeID</w>\_Q                         |
| Team 1               | <w class = "attendee_out">attendeeID</w>\_team1                     |
| Team 2               | <w class = "attendee_out">attendeeID</w>\_team2                     |
| Multimedia Profile   | <w class = "attendee_out">attendeeID</w>\_MMP                       |


### 1.1: Desktop Login Process

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

> We will use the new feature of Desktop telephony that uses the browser as a device to directly receive calls.

- Notice that the voice option defaults to "Desktop".

- Select Team1 from the list. Agents can belong to multiple teams, but they can only receive calls of 1 specific team. Your agent is configured for 2 teams.

- Check the **Remember My Credentials** box to save your credentials for future sign-ins.

- Click Sign in to be connected to telephony and complete the login process.

![agent-desktop](../images/agent/03-image.png)

> NOTE: Agents cannot access the Agent Desktop from multiple browsers or multiple tabs of the same browser window. In that case, a warning message will be displayed.
> {: .block-warning }

![agent-desktop](../images/agent/04-image.png)

---

> The video below shows a demo about the agent login process and the available options:

![agent-desktop](../images/agent/AgentLogin.gif)

---

**NOTE:**

> The login device and DN can be enforced on the Desktop Profile as follows
> {: .block-warning }

- If your administrator configures the default Dial Number (DN), the default DN is prepopulated in the Dial Number and Extension fields.
- If your administrator restricts the DN to the default DN, you cannot edit the prepopulated DN when signing in to the Agent Desktop.

- They can choose between Dial Number or Extension or Desktop

  - Extension: Just in case the agent is using Webex Calling or some other softphone as calling endpoint

    - Dial Number: E.164 format phone number
      - If you check the **International Dialing Format** box, you can choose the country code based on your geographical location from the drop-down list. You can also enter a country code or country name to filter the list. Dial numbers are validated based on the country code

**Explore Agent Desktop Header Actions**

The following section explores the Agent Desktop header actions.

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

> In this section, you will will interact as an agent and test an Incoming call. Review the video of the lab section above to understand the different call handling options.

- In order to test properly an incoming call, first we need to make sure that we have all the call handling options enabled

- Login with your administrator user in the **Control Hub**: [https://admin.webex.com](https://admin.webex.com)
  Navigate to SERVICES > Contact Center > TENANT SETTINGS > Desktop
  - Make sure that **`End Call`** and **`End Consult`** are enabled
  - You can also configure _Auto Wrapup and RONA timeouts_

![CH-Settings-Desktop](../images/agent/CH_Settings_Desktop.gif)

---

- Now place it's time to test the incoming call

  - Login the **Agent Desktop** with _your Agent 1_ user
  - Move to **`Available`** state
  
- When the call arrives - you will be able to see an incoming popover when the Agent is offered the contact. It will have an Accept and Decline button since it is a Browser powered softphone.

![Agent Popover](../images/agent/Agent_Popover.png)

---

> **Click on the Accept Button to take the call**

![CH-Desktop-Call-In](../images/agent/CH_Desktop_Call_In.gif)

---

### 1.3: Troubleshooting Agent Desktop


**Launch the Notification Pane**

The notification pane on the desktop shows you the notifications of incoming calls or messages.
The agent can also launch previously delivered screenpops from this pane.

![agent-desktop-Notification-Pane](../images/agent/Agent_Notification_Pane.gif)

---

**Launch the Agent Settings Pane**

To review or change the Desktop Settings, click on the persona icon on the top right.

![agent-desktop-Settings-Pane](../images/agent/Agent_Settings_Pane.gif)

---

**Verify Profile Settings**

The Profile settings shows the Agent which Device(s) or Teams are configured for use, allowing the agent to switch the Device OR Teams that they wish to login.

> This is defined in the **Desktop Profile** on the User or Team level.
> Teams are defined on the **User Settings** under Contact Center Settings

![agent-desktop-Profile-Settings](../images/agent/Agent_Profile_Settings.gif)

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

**Objective**

- The objective of this lab is to familiarize you with the Flow Builder in Webex Contact Center. It is divided into two parts: Part 1 covers navigating to the Flow Builder, and Part 2 focuses on understanding how it works.


**Navigating to the Flow Builder**

  - Sign into   [Admin Portal](https://admin.webex.com) using Admin Credentials
  - Click on  `Contact Center`
  - Click on  `Flows`
  - On the top right click on `Manage Flows`
  - Select  `Create Flow`
  - Click on  `Start Fresh`
  - Enter a name `Wx1_Flow1_<ID>`

  Example:

> If your attendee ID is 101:
>
> Wx1_Flow1_101

<img align="middle" src="../images/lab2/CreateFirstFlow.gif" width="1000" />  
<br/>
<br/>

**Create Your First Flow**

  - Drag and Drop `Play Mesasge ` Activity from the Activity Library
  - Drag and Drop `Disconnect Contact` Activity from the Activity Library
  - Connect to output of the `NewPhonecontact` node to the  `PlayMesasge` Node
  - Connect to output of the `PlayMesasge` node to the  `Disconnect Contact` Node
  - Click on  `PlayMesasge` on the right side select `default_music_on_hold` as the Audio File

<img align="middle" src="../images/lab2/CreateFirstFlow.gif" width="1000" />  
<br/>
<br/>
  
**Validate Your First Flow**

- At the bottom right toggle   `Validation` to on 
- Click on  `Publish Flow` and Add `Live` version label and click on `Publish Flow` 


<img align="middle" src="../images/lab2/FlowValidate.gif" width="1000" />  
<br/>
<br/>


---

<p style="text-align:center"><strong>Congratulations, you have officially completed the Agent and Supervisor Experience labs!</strong></p>
		
<p style="text-align:center;"><img src="/Labguide/gitbook../images/webex.png" width="100"></p>
