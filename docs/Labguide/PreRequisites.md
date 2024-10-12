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

Please **`submit the form below with your Attendee or pod ID`** and hit **Save**. All configuration entries in the lab guide will be renamed to include your pod ID. 
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
</br>



# Lab Pre-Requisites

Welcome to the **Webex Contact Center Agent and Supervisor Experience!**

In **Part 1**, we will explore the **Webex Contact Center Agent Experience** and the associated administrative toggles for configuring agents in the Webex Contact Center.

In **Part 2**, we will examine the **Webex Contact Center Supervisor Experience** and the associated administrative toggles for configuring supervisors in the Webex Contact Center.




** Table of Contents

| Topic                                                                                  | Type             | Dificulty    | Time   |
| -------------------------------------------------------------------------------------- | ---------------- | ------------ | ------ |
| [Part 1: Agent Experience](#part-1-agent-experience)                                   | Exploration      | EASY         | 5 mins |
| [1.1: Agent Desktop Overview](#11-desktop-login-process)                               | Exploration      | EASY         | 	    |
| [1.2: Make an Incoming Call](#12-make-an-incoming-call)                                | Activity         | EASY         |        |
| [Part 2: Supervisor Experience](#part-2-supervisor-experience)                         | Exploration      | EASY         | 5 mins |
| [2.1: Supervisor Desktop Modes](#21-supervisor-desktop-modes)                          | Exploration      | EASY         |        |
| [2.2: Supervisor Login](#22-supervisor-login)                                          | Activity         | EASY         |        |
| [Part 3: Flow Experience](#part-3-flow-experience)                         	         | Exploration      | EASY         | 5 mins  |

## Part 1: Agent Experience

**Objectives**

- Explore the Agent Experience on the Webex Contact Center by logging into the Agent Desktop application and navigating its out-of-the-box capabilities.
- Familiarize yourself with the complete Agent Desktop interface and its functions, covering Inbound, Outbound, and Omnichannel contact workflows.
- Dive into extensions of the Agent Desktop Experience, understanding the available widgets—both out-of-the-box and custom—and recognizing the potential of Desktop Widgets and customized workflows.
- The Bonus section (OPTIONAL) delves into advanced Desktop extensions, focusing on Desktop layout design and programmatic extensions.

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

(2) **Webex App** Installed and Logged in. Provided your `Supervisor Login ID` - use the **Webex App** to login your **Supervisor User.**

- This user is in the format:

> **wxcclabs+supvr_ID<w class = "attendee_out">attendeeID</w>@@gmail.com**

(3) The items listed below have been pre-configured for you:

- Agent and Supervisor user accounts are configured and ready for logins.
- You can access the Agent Desktop via the URL: [https://desktop.wxcc-us1.cisco.com](https://desktop.wxcc-us1.cisco.com).
- As an agent, you're associated with two teams—designated by your Attendee ID—as "Team1" and "Team2".

Example:

> If your attendee ID is 100:
>
> 100_Team1
>
> 100_Team2

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


## 1.1: Desktop Login Process

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

**Explore the Agent Personal Statistics**

The Agent can access the out of box Agent Personal Statistics Reports on the left navigation screen.

![agent-desktop-Personal-Statistics](../images/agent/Agent_Personal_Statistics.gif)

---

> Note: These Agent Personal Statistics are canned reports out of the box. However, one can configure custom Analyzer Reports for Agents in the Layout if custom reporting views are needed. The Supervisor Desktop Layout allows you to hide/show certain Personal Statistics.
> {: .block-warning }

---

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

## 1.3: Make an Incoming Call

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


## Part 2: Supervisor Experience

- Now, lets create a new Chrome profile so we can login the Supervisor on the same browser

  - Select `Profiles` on Chrome
  - Select `Add Profile`
  - Select `continue without an account`
  - Give it a name .i.e `supervisor`
  - Click `done`

![CH-Desktop-Call-In-Accepted](../images/agent/Chrome-Create-Profile.gif)

**Objective**

This lab is designed to introduce the audience to the Extensible Supervisor Desktop (ESD), its configuration and capabilities.

At the end of the lab, you should have a good understanding of the Supervisor role on Webex Contact Center, the Supervisor Desktop and common Supervisor workflows available.

You are provided two users on Control Hub to simulate the lab activities

| **User Role** | **User email**                                                          | **User Extension**                                          |
| ------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------- |
| Agent         | wxcclabs+agent_ID<w class="attendee_out">Your_Attendee_ID</w>@gmail.com | WebRTC (Browser)                                            |
| Supervisor    | wxcclabs+supvr_ID<w class="attendee_out">Your_Attendee_ID</w>@gmail.com | <w class= "supervisorEXT_out">Your Supervisor Extension</w> |

**Quick Links**

> Control Hub: **[https://admin.webex.com](https://admin.webex.com/)**  
> Supervisor Desktop: **[https://desktop.wxcc-us1.cisco.com](https://desktop.wxcc-us1.cisco.com/)**
> Webex App (Download): \*\*\*\*

## 2.1: Supervisor Desktop Modes

> **The following section explains the types of login modes into the Supervisor Desktop**
>
> The Supervisor Role is assigned as a part of the Control Hub License.
> When you assign a Control Hub Supervisor License, you are automatically assigned the Default Supervisor User Profile.

We will review this on Control Hub Settings.

> Control Hub > Contact Center Users > Supervisor User > User Profile: Supervisor Profile

- Look up your Supervisor User bu going to admin.webex.com > Contact Center > User Management (Category) > Contact Center Users
- Ensure that the Supervisor user wxcclabs+supvr_ID<w class="attendee_out">Your_Attendee_ID</w>@gmail.com has the `Supervisor Profile` in the `User Profile` field

![Supervisor_UserProfile](../images/Supervisor/Supervisor_UserProfile.gif)

---

**Supervisor Only Mode:**

- You can choose not to be an Agent but still login to the Supervisor Desktop. This is called the **Supervisor Only Role**.
- This is enabled by setting up a User with the Supervisor License and a Primary Team.
- Contact Center need not be enabled for the User.
- In this role, you will still need a Primary Team assigment which will be used to display the statistics.
- The Supervisor Only Role is used for Team Statistics and Reporting.

**Supervisor and Agent Mode**

- You can to take calls from the Queue as a supervisor. This is called the **Supervisor and Agent Role**
- This is enabled by setting up a User with the Supervisor License, a Primary Team AND marking the user Contact Center enabled.

![Supervisor_And_Agent_Role](../images/Supervisor/Supervisor_And_Agent_Role.gif)

---

**Pre-requisites:**

1.  A supervisor user configured as described below.
2.  A agent logged in and in conversation with a customer so you can monitor the call.
3.  Webex App Installed - Please install and download the Webex App from: https://www.webex.com/downloads.html

> **We will use the [Webex App](https://www.webex.com/downloads.html) as the Supervisor endpoint Device.**

---

<br>

## 2.2: Supervisor Login

- Sign in to the **Supervisor Desktop**: https://desktop.wxcc-us1.cisco.com with your supervisor credentials.

- In the next window, set your role as **Supervisor** and your **own extension**. Please note that you can set your role either as **supervisor** or **agent and supervisor**. We will select this second option at the end of this lab.

> **This mode will help you perform midcall monitoring and reporting**

<br>

![Supervisor_Login](../images/Supervisor/Supervisor_Login.gif)

- When you sign in to the **Supervisor Desktop**, the appearance depends on how the Webex Contact Center administrator has configured the desktop layout. The **Supervisor Desktop** display size must be greater than 500 x 500 pixels (width x height). You must set your web browser zoom to 100% for the best experience with the Supervisor Desktop. With this lab layout you get :

1. **Home Page**: Displays a user friendly interface that provides a consolidated view of key contact center metrics and filters. This is the default landing page in the Supervisor Desktop. The administrator can customize the Home Page in the layout JSON file.

![Supervisor_Home](../images/Supervisor/Supervisor_Home.png)

2. **Task**: Displays all the tasks when you sign in to the Desktop in dual role (supervisor and agent) or as a supervisor, interactions such as voice, chat, email, and social messaging conversations, along with monitoring. The icon displays a badge indicating the number of requests that you have not accepted across various channels.

![Supervisor_Task](../images/Supervisor/Supervisor_Task.gif)

3. **Team Performance**: Displays real-time information about an agent and a consolidated view of an agent’s performance as part of the team. You can also monitor and send 1:1 messages to an agent.

![Supervisor_TeamPerformance](../images/Supervisor/Supervisor_TeamPerformace.gif)

> Note: **Supervisor Desktop** supports localization in 30 languages. The following are the supported languages:
> Bulgarian, Catalan, Chinese (China), Chinese (Taiwan), Croatian, Czech, Danish, Dutch, English (UK), English (US),Finnish,French, German, Hungarian, Italian,Japanese, Korean, Norwegian,Polish,Portuguese (Brazil), Portuguese (Portugal), Romanian, Russian, Serbian, Slovak, Slovenian, Spanish, Swedish, Turkish, and Ukrainian.
>
> The Supervisor Desktop language is based on the language preference settings on your browser.
>
> For example, let us consider that you have selected the preferred language as French on the Google Chrome browser.
>
> When you launch the Supervisor Desktop in the Google Chrome browser, the Supervisor Desktop UI appears in Français (French).

- Click on the third menu option, you now see the **Team Performance Details** page where your agents activities are displayed : status, call duration, team, ... In the last column, you are presented two options : **chat** or **monitor**. The monitoring option is obvisously only enabled when an agent is in conversation with a customer otherwise the icon will be greyed.

- The columns displayed are the following

| **Column**             | **Description**                                                                                                                                                                                                                                                                                                                                |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent Name             | Displays name and avatar (Webex image) of the agent.                                                                                                                                                                                                                                                                                           |
| Agent State            | The work status while using the Supervisor Desktop. The agent availability state includes Available, Idle codes, or RONA.                                                                                                                                                                                                                      |
| Agent State Duration   | The time that the agent has been in the current state. The state timer format is hh:mm:ss (for example, 01:10:25).                                                                                                                                                                                                                             |
| Phone Number           | Dial number or extension of the agent signed in.                                                                                                                                                                                                                                                                                               |
| Site                   | Name of the site with which the agent is associated.                                                                                                                                                                                                                                                                                           |
| Team                   | Name of the team with which the agent is associated.                                                                                                                                                                                                                                                                                           |
| Channels               | The mode of communication through which an agent can communicate.For example, voice call.                                                                                                                                                                                                                                                      |
| Contact Queue          | Name of the queue from where the agent receives the incoming call.                                                                                                                                                                                                                                                                             |
| Contact Status         | The status of the agent in an active call. Example: Connected, Consulting, Conference, or Wrap up                                                                                                                                                                                                                                              |
| Time in Contact Status | The time spent by an agent in an active call. For example, the time an agent is in conference call.                                                                                                                                                                                                                                            |
| Total Contact Duration | Total duration of the contact from when it was first connected (including any other state like consult or conference in the same contact). The time elapsed since the agent accepted the request. The connected timer format is hh:mm:ss (for example, 01:10:25).                                                                              |
| Sign In Time           | The time an agent has signed in to the Supervisor Desktop. The date and time format is dynamic and displays according to location.                                                                                                                                                                                                             |
| Action                 | You can perform the following actions:• Review and Monitor - Based on the privilege provided by Administrator as part of user profile, you can review and monitor an ongoing agent call silently. • Send1:1 message to Agent – Based on the privilege provided by Administrator as part of user profile, you can send 1:1 message to an agent. |

- you can customize this view to show / hide columns or group information at your convenience.

![Supervisor_Modify_Columns](../images/Supervisor/Supervisor_Modify_Columns.gif)

## 3. Flow Experience 

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
