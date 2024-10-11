---
#icon: material/numeric-2-box-multiple
icon: material/folder-open-outline

title: Topic Analytics
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

# Lab 7: Topic Analytics

## Lab Objective

The objective of this lab is to gain a comprehensive understanding of **Topic Analytics** in Webex Contact Center to help identify potential candidates for automation, and apply the insights gained to enable subsequent AI-powered automation processes. This involves exploring various Topics identified by the AI model, analyzing individual conversations to identify areas of Automation. In this lab you are tasked to identify the top two opportunities for automation and capture the essential information needed to create the automation workflow by reviewing the customer conversations.

**Pre-requisites**

- You have received the access credentials with a contact center administrator access.

- Your Attendee ID will be used as the login in all the web pages, in the format: `wxcclabs+admin_ID***@gmail.com`

| **User Role** | **User Login Credentials**                                          |
| ------------- | ------------------------------------------------------------------- |
| Administrator | wxcclabs+admin_ID<w class = "attendee_out">attendeeID</w>@gmail.com |

**Quick Links**

- Control Hub: [https://admin.webex.com/](https://admin.webex.com/){:target="\_blank"}
- Topic Analytics: [https://webexcc-pcap.produs1.ciscoccservice.com](https://webexcc-pcap.produs1.ciscoccservice.com){:target="\_blank"}

### Step 1: Access the Topic Analytics Portal

- Login to the Webex Control Hub using the admin credentials provided. ( Launch **[https://admin.webex.com/](https://admin.webex.com/){:target="\_blank"}** )

<img align="middle" src="../images/lab9/0-0.png" width="1000" />  
<br/>
<br/>

- Login using the same admin credentials if you are redirected to Okta login
  <img align="middle" src="../images/lab9/0-1.png" width="1000" />  
  <br/>
  <br/>

- Scoll down the the left navigation panel and click on Contact Center under Services
  <img align="middle" src="../images/lab9/1-0.png" width="1000" />  
  <br/>
  <br/>

- Launch Topic Analytics Portal by clicking on Topic Analytics (Beta) under the Quick Links. Enter the admin email address to sign-in. Once you are signed-in accept the Oauth2 Notification.
  <img align="middle" src="../images/lab9/1.png" width="1000" />  
  <br/>
  <br/>

- Once logged in, click on the Topic Analytics from the left side navigation panel.

<img align="middle" src="../images/lab9/3.png" width="1000" />  
<br/>
<br/>

- Note creation of Topic collection can take up to 24 hours hence a Topic collection `Cisco_Live_May_Collection` is already pre-created for you.

<img align="middle" src="../images/lab9/4.png" width="1000" />  
<br/>
<br/>

### Step 2: Review the Topic Collection

- Click on the `Cisco_Live_May_Collection` to review the Topic collection.

<img align="middle" src="../images/lab9/4.png" width="1000" />  
<br/>
<br/>

- Under the Overview Tab, Notice the filter criteria used to create this collection.

<img align="middle" src="../images/lab9/5.png" width="1000" />  
<br/>
<br/>

- Click on the Topics Tab to view all the topics identified by AI for this filter criteria.

<img align="middle" src="../images/lab9/6.png" width="1000" />  
<br/>
<br/>

- Additionally, you can click on the Expand button (>) to view all the call drivers associated with the Topic.

<img align="middle" src="../images/lab9/7.png" width="1000" />  
<br/>
<br/>

- Click on the Export button on the top right to download the result in the excel sheet.

<img align="middle" src="../images/lab9/7_1.png" width="1000" />  
<br/>
<br/>

### Step 3: Analyzing Conversations for a Given Topic

- Click on a Topic to view all the calls related to that Topic.

<img align="middle" src="../images/lab9/8.png" width="1000" />  
<br/>
<br/>

- Click on individual call record to view more details such as the call recording, transcript and the Contact Details.

<img align="middle" src="../images/lab9/9.png" width="1000" />  
<br/>
<br/>

<img align="middle" src="../images/lab9/10.png" width="1000" />  
<br/>
<br/>

### Step 4: Prepare for Virtual Agent Automation

- Review the rank and the transcript to identify the top use case for automation.

<img align="middle" src="../images/lab9/11.png" width="1000" />  
<br/>
<br/>

> Analyze few transcripts for the top topic `Cancel Appointment Now`. Based on the conversations, Identify the following information needed for automating calls for Cancelling an Appointment :

- Welcome Message
- Contact Reason/Intent
- Information needed to be Collected from the caller
- Action to be Performed
- Parting Phrase

<img align="middle" src="../images/lab9/12.png" width="1000" />  
<br/>
<br/>

> Confirm if you captured similar responses for Cancelling an appointment. We will be using this information to create Automation workflows in the subsequent labs :

- Welcome Message: Thank you for calling Cumulus Healthcare. How can I assist you today?
- Contact Reason/Intent: Cancelling an appointment
- Information needed to be Collected from the caller: Phone number and Insurance Number
- Action to be Performed: Lookup the appointment, confirm and cancel
- Parting Phrase: Have a great day.

**Congratulations! You just completed the lab!**

> Feel free to reach out to the proctors for any questions or clarifications.
