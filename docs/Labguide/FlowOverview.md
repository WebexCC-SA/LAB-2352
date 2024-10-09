## Understanding WxCC Flow Builder 

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
