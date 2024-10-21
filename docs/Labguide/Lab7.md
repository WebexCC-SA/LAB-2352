---
#icon: material/numeric-4-box-multiple
icon: material/folder-open-outline
---

title: Future Agent and Supervisor sign in
author: Bhushan Suresh 
date: 2024-10-02
layout: post

<!-- md:option type:warning -->
!!! Warning "Disclaimer"
    This section gives you an insight into the upcoming feature that is still in development and is subject to change. 

# LAB 7 (Bonus): Enhanced Agent and Supervisor Sign-in Experience

## 7.1: Overview

Enhanced Webex Contact Center Desktop Sign-in with Streamlined Station Credentials

To streamline the agent and supervisor sign-in process, we will enhance the Webex Contact Center station credentials dialog for users. This feature aims to eliminate friction, improve efficiency, and enhance the overall user experience for both agents and supervisors.

This lab is designed to give you a **basic understanding** of the new experience and all you to **experience it first-hand**. You will be using a working prototype to complete the steps in this lab.


## 7.2: Prototype: What to expect and what’s new

**Reduced user error:**

- Unnecessary information fields during sign-in are removed from the dialog (requires admin set up of user telephony options to be configured).

- Leverages dial plans to prevent agents from entering invalid dial numbers (DN) at sign-in, reducing potential RONA scenarios

- Admins must configure dial plans in Control Hub. Learn more on Webex Help Center at https://help.webex.com/article/n3jurrk/


**Simplified Sign-In Process:**

- Webex Contact Center Single sign-on (SSO) for both agents and supervisors.

- New user-friendly dialog design and field copy

- Skip voice credential input during sign-in for digital-only deployments.


**Save Station Credential Selections for Future Sign-ins:**

- Users can save their selection/preferences and skip the station credential dialog for subsequent sign-ins.

- Users can change their selection/preferences at any time post-sign in from the avatar menu>Change Profile Settings (at the top right-hand corner of Desktop).

- Agents can select their team upon sign-in to determine the appropriate layout, routing, and generating relevant reports.

## 7.3: Prototype: What to expect and what’s new

Step 1: Click the email dialog and enter email and password to log in

<img align="middle" src="../images/lab7/1.png" width="1000" />  
<br/>
<br/>	


<img align="middle" src="../images/lab7/2.png" width="1000" />  
<br/>
<br/>	

Step 2: When prompted with the station credentials dialog:

- Click the drop down for **Handle calls using** and select “Extension”
- Click the drop down for **Extension** and select **302**
- **Your team** will be pre-populated as “Debit card”
- **Save preferences to Profile Settings** will be checked by default


Step 3: **Confirm** your selection

<img align="middle" src="../images/lab7/3.png" width="1000" />  
<br/>
<br/>	

<img align="middle" src="../images/lab7/4.png" width="1000" />  
<br/>
<br/>	


Step 4.	**Click on the avatar menu** to review your selections in **Change Profile Settings**


<img align="middle" src="../images/lab7/5.png" width="1000" />  
<br/>
<br/>	

      

## 7.4: Review user value

This new experience will help solve key friction points when signing in. Because a user’s selection can be saved for future sign ins, it will reduce time, errors, and the number of repetitive steps required at sign in.


<p style="text-align:center"><strong>Congratulations, you have officially completed the Enhanced Agent and Supervisor Sign-in Experience lab! 🎉🎉 </strong></p>
		
<p style="text-align:center;"><img src="../images/webex-new-logo1.png" width="100"></p>
