---
#icon: material/numeric-4-box-multiple
icon: material/folder-open-outline
---

title: Future Agent and Supervisor sign in
author: Bhushan Suresh 
date: 2024-10-02
layout: post

# Part 6: Supervisor Experience

**Objective**

This lab is designed to introduce the audience to the Extensible Supervisor Desktop (ESD), its configuration and capabilities.

At the end of the lab, you should have a good understanding of the Supervisor role on Webex Contact Center, the Supervisor Desktop and common Supervisor workflows available.

**You are provided two users on Control Hub to simulate the lab activities**

| **User Role** | **User email**                                                          | **User Extension**                                          |
| ------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------- |
| Agent         | wxcclabs+agent_ID<w class="attendee_out">Your_Attendee_ID</w>@gmail.com | WebRTC (Browser)                                            |
| Supervisor    | wxcclabs+supvr_ID<w class="attendee_out">Your_Attendee_ID</w>@gmail.com | <w class= "supervisorEXT_out">Your Supervisor Extension</w> |

#### Quick Links

> Control Hub: **[https://admin.webex.com](https://admin.webex.com/)**  
> Supervisor Desktop: **[https://desktop.wxcc-us1.cisco.com](https://desktop.wxcc-us1.cisco.com/)**
> Webex App (Download): \*\*\*\*

## 6.1: Supervisor Desktop Modes

> **The following section explains the types of login modes into the Supervisor Desktop**
>
> The Supervisor Role is assigned as a part of the Control Hub License.
> When you assign a Control Hub Supervisor License, you are automatically assigned the Default Supervisor User Profile.

We will review this on Control Hub Settings.

> Control Hub > Contact Center Users > Supervisor User > User Profile: Supervisor Profile

- Look up your Supervisor User bu going to admin.webex.com > Contact Center > User Management (Category) > Contact Center Users
- Ensure that the Supervisor user wxcclabs+supvr_ID<w class="attendee_out">Your_Attendee_ID</w>@gmail.com has the `Supervisor Profile` in the `User Profile` field

![Supervisor_UserProfile](/assets/images/Supervisor/Supervisor_UserProfile.gif)

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

![Supervisor_And_Agent_Role](/assets/images/Supervisor/Supervisor_And_Agent_Role.gif)

---

### Pre-requisites:

1.  A supervisor user configured as described below.
2.  A agent logged in and in conversation with a customer so you can monitor the call.
3.  Webex App Installed - Please install and download the Webex App from: https://www.webex.com/downloads.html

> **We will use the [Webex App](https://www.webex.com/downloads.html) as the Supervisor endpoint Device.**

---

<br>

## 6.2: Supervisor Login

- Sign in to the **Supervisor Desktop**: https://desktop.wxcc-us1.cisco.com with your supervisor credentials.

- In the next window, set your role as **Supervisor** and your **own extension**. Please note that you can set your role either as **supervisor** or **agent and supervisor**. We will select this second option at the end of this lab.

> **This mode will help you perform midcall monitoring and reporting**

<br>

![Supervisor_Login](/assets/images/Supervisor/Supervisor_Login.gif)

- When you sign in to the **Supervisor Desktop**, the appearance depends on how the Webex Contact Center administrator has configured the desktop layout. The **Supervisor Desktop** display size must be greater than 500 x 500 pixels (width x height). You must set your web browser zoom to 100% for the best experience with the Supervisor Desktop. With this lab layout you get :

1. **Home Page**: Displays a user friendly interface that provides a consolidated view of key contact center metrics and filters. This is the default landing page in the Supervisor Desktop. The administrator can customize the Home Page in the layout JSON file.

![Supervisor_Home](/assets/images/Supervisor/Supervisor_Home.png)

2. **Task**: Displays all the tasks when you sign in to the Desktop in dual role (supervisor and agent) or as a supervisor, interactions such as voice, chat, email, and social messaging conversations, along with monitoring. The icon displays a badge indicating the number of requests that you have not accepted across various channels.

![Supervisor_Task](/assets/images/Supervisor/Supervisor_Task.gif)

3. **Team Performance**: Displays real-time information about an agent and a consolidated view of an agent’s performance as part of the team. You can also monitor and send 1:1 messages to an agent.

![Supervisor_TeamPerformance](/assets/images/Supervisor/Supervisor_TeamPerformace.gif)

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

![Supervisor_Modify_Columns](/assets/images/Supervisor/Supervisor_Modify_Columns.gif)

## 6.3: Chat with your agents

Collaboration between agents and supervisors can help your Contact Center to be more effective and efficient for your customers and this is why we have enabled Webex messaging features in both Agent and Supervisor desktops.

- Click on the **Send Message** button

![Supervisor_Message](/assets/images/Supervisor/Supervisor_Message.gif)

---

- Fill the chat window with a message to send to your agent

![Supervisor_Message_Sent](/assets/images/Supervisor/Supervisor_Message_Sent.gif)

---

- On the agent side, observe the message notification received

![Supervisor_Message_Sent_Agent](/assets/images/Supervisor/Supervisor_Message_Sent_Agent.gif)

---

- If, as an agent, you want to answer to the supervisor, your will need to click on the **Webex logo** to open the Webex app embedded in the **Agent Desktop**. You can then reply to the supervisor directly.

![Supervisor_Message_Sent_To_Sup](/assets/images/Supervisor/Supervisor_Message_Sent_To_Sup.gif)

---

- On the supervisor side, observe the message notification received

![Supervisor_Message_Received_from_Agent](/assets/images/Supervisor/Supervisor_Message_Received_from_Agent.gif)

## 6.4: Monitor calls

- As a supervisor, the **Team Performance Details** page allows you to see all connected agents and decide to monitor calls by clicking on the **Review and Monitor** icon.

![Supervisor_Monitor](/assets/images/Supervisor/Supervisor_Monitor.gif)

---

- The following popup will be displayed. Click on **Start Monitoring**. Please note a supervisor can monitor other call types such as callbacks, outdial calls, outbound preview campaign calls.

![Supervisor_Monitor_Accept](/assets/images/Supervisor/Supervisor_Monitor_Accept.gif)

---

- In your **Supervisor Desktop**, an incoming popover window will be displayed and your softphone will ring as Webex Contact Center is now trying to reach you. You recognize the agent you want to monitor and other call variables are displayed. The Flow configuration defines variables to display on this popover (max 6). Accept the call on your supervisor softphone.

![Supervisor_Monitor_Floating](/assets/images/Supervisor/Supervisor_Monitor_Floating.gif)

---

- As a supervisor, the call you are now monitoring is displayed in your desktop with agent and customer details of which the call variables so you are aware of the context of the call. You can view previous communications with a customer across all channels (voice, email, chat, and social) in the **Contact History** pane. The pane displays details for the last 24 hours.

![Supervisor_Monitor_History](/assets/images/Supervisor/Supervisor_Monitor_History.gif)

---

- You can pause the monitoring and start is again if you will

![Supervisor_Monitor_Pause](/assets/images/Supervisor/Supervisor_Monitor_Pause.gif)

---

## 6.5: Supervisor and Agent role

- When you sign in to the Supervisor Desktop, you can - depending or your team assignement - choose either the supervisor role or supervisor AND agent role.

![Supervisor_LoginOptions](/assets/images/Supervisor/Supervisor_LoginOptions.gif)

---

- In the case, the supervisor experience is a bit different as your agent status appears in the header section of the Desktop.

![Lab_4_ESD](/assets/images/Supervisor/Supervisor_No_Message.gif)

---

- If, as a supervisor, you chose to monitor a call, your status is set to **Engaged** and you cannot take other calls as an agent.

![Supervisor_Engaged](/assets/images/Supervisor/Supervisor_Engaged.gif)

---


## 2.6: Desktop Layout Regions for Supervisor

> **The following section outlines where you can find the main configuration settings for Supervisors, and their Teams, Queues and other segmentation settings**

- The Supervisor Layout is enabled for a user via the [Desktop Layout JSON](https://webexone.github.io/assets/files/WebexOne_Layout.json) file for supervisor from GitHub.
- Open the file in any JSON editor, check and make sure it contains **_supervisor_** and **_supervisorAgent_** sections.
  - **_supervisor_** section is used when the user signs in to supervisor desktop with **_Supervisor_** role.
  - **_supervisorAdmin_** section is used when the user signs in to supervisor desktop with **_Supervisor and Agent_** role.

![Lab_4_WebexCC_Config_1](/assets/images/Supervisor/DC_Lab_4_Supervisor_WebexCC_1.png)

---

- Lets see where this is uploaded.
- On Webex Control Hub (admin.webex.com) - Go to _DESKTOP EXPERIENCE_ -> _Desktop Layout_

![CH_DesktopLayout](/assets/images/Supervisor/CH_DesktopLayout.gif)

---

- To verify layout Assignments, go to Control Hub _Contact Center > USER MANAGEMENT > Teams_ and search for your Team (Team1 or Team2). You will find the WebexOne_desktopLayout in there.

![Supervisor_Teams_Layout](/assets/images/Supervisor/Supervisor_Teams_Layout.gif)

---

- To verify layout Assignments, go to Control Hub > **_Teams_** and search for your Team (Team1 or Team2). You will find the WebexOne_desktopLayout in there.

![Lab_4_WebexCC_Config_4](/assets/images/Supervisor/DC_Lab_4_Supervisor_WebexCC_4.png)

## 2.7: User Profile Settings for Supervisor

- Under **_USER MANAGEMENT_** -> **_User Profiles_**, find default **_Supervisor Profile_**, and let us take a look at it.

![Supervisor_userProfile_Verify](/assets/images/Supervisor/Supervisor_userProfile_Verify.gif)

---

- We are able to view Supervisor settings including Access Rights.

![Supervisor_AccessRights](/assets/images/Supervisor/Supervisor_AccessRights.gif)

---

## 2.8 Supervisor Licensing

> In This section, we will review the Supervisor Licensing that creates the supervisor.

- Login to Control Hub using your administrator account.
- Go to **_Users_**,
- Search for your Supervisor
- Click on supervisor's account, scroll dow to **_Licenses_** section and press **_Edit Licenses_** button.
- Click again **_Edit Licenses_** button, located bottom right
- Click **_Contact Center_**
- View license options (Do not change, please)

![Supervisor_License](/assets/images/Supervisor/Supervisor_License.gif)

---

- Check and make sure supervisor license is displayed in **_Licenses_** section of user seetings on Control Hub.

![Lab_4_Supervisor_Config_5](/assets/images/Supervisor/Supervisor_License_Verify.gif)

---

- To Synchronize Users - Go to **_Contact Center_** -> **_TENANT SETTINGS_** > **General** and press **_Synchronize Users_** button in order to synchronize Webex users with Contact Center licenses in order to successfully assign Contact Center user privileges.

![CH_Synchronize](/assets/images/Supervisor/CH_Synchronize.gif)
