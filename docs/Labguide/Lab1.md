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



# Lab 1 Native TTS 
<!-- # Part 1: Native Text To Speech -->

In this lab, we will learn how Native Text To Speech can be used to transform flows into intelligent and personalized interactions using text-to-speech. 

We will discover how Cisco's text-to-speech capability can enhance the customer experience by personalizing interactions within flows. Then, we will elevate these flows by integrating virtual agents in a subsequent lab.

## Objectives

By the end of this lab, attendees will:

- Transform traditional flows using text-to-speech to enhance the call path and introduce personalization through data.

##  Eligibility Criteria for TTS in the Real World 

### 1 Flex 3 Subscription
Must have an active Flex 3 subscription for WxCC contact Center – “SKU = A-Flex-3-CC”

### 2 Next Generation Media platform
Customer tenant ”MUST” be on an enhancement media platform (RTMS)


**Pre-requisites**

- You have received the access credentials with a contact center administrator access.

- Your Attendee ID will be used as the login in all the web pages, in the format: `wxcclabs+admin_ID***@gmail.com`

| **User Role** | **User Login Credentials**                                          |
| ------------- | ------------------------------------------------------------------- |
| Administrator | wxcclabs+admin_ID<w class = "attendee_out">attendeeID</w>@gmail.com |

## Step 1: Creating a  Flow through the Flow Template

- Log into Control Hub with your Administrator User - wxcclabs+admin_ID<w class = "attendee_out">attendeeID</w>@gmail.com

<img align="middle" src="../images/lab2/1.gif" width="1000" />  
<br/>
<br/>

- Verify that an entry point named <w class = "attendee_out">attendeeID</w>\_EP exists in the system,  where <w class = "attendee_out">attendeeID</w> is your attendeeID. Make sure to take a note of the support Number assigned to your entry point. This will the number you dial in to make test call.

<img align="middle" src="../images/lab2/2.gif" width="1000" />  
<br/>
<br/>

- Create a a flow by using the flow template and choose template **Hello World**

- Check the Play Message node to see the connector used and the text-to-Speeh Message that is added 

- Validate the flow by clicking "Validate" and then "Publish" the Flow.

<img align="middle" src="../images/lab2/8.gif" width="1000" />  
<br/>
<br/>

- Assign the Flow to your Channel (Entry Point) - Do this by first going to Channel > Search for your channel <w class = "attendee_out">attendeeID</w>\_EP  where <w class = "attendee_out">attendeeID</w> is your attendeeID
- Select the Latest version of the flow > Click Save.

<img align="middle" src="../images/lab2/9.gif" width="1000" />  
<br/>
<br/>

- Click "Save".

- Make a test call by calling the Support Number provided, which is configured in your Channel Configuration.

- Reopen the flow designer by choosing your Flow > `CL_`<w class = "attendee_out">attendeeID</w>`_SimpleFlow`  where <w class = "attendee_out">attendeeID</w> is your attendeeID

- Open the debug view and explore the call path and the steps taken in the flow.

<img align="middle" src="../images/lab2/10.gif" width="1000" />  
<br/>
<br/>

- Note that the interaction ID uniquely identifies the flow and assists in debugging.


## Step 2: Transform the Flow with Text-to-Speech

> In this section, we will use the same flow, and convert all the media activities to use Cisco Text to Speech.

- Follow the steps in the GIF below to replace your welcome prompt from using Audio file to  text-to-speech. Enable the Cisco text-to-speech and enter the welcome message you want played, for example, "Welcome to Cisco Live!"

Welcome Prompt: `Welcome to Cisco Live!`

<img align="middle" src="../images/lab2/15.gif" width="1000" />  
<br/>
<br/>

- Follow this by now requesting for the 3 digit attendee ID.

Collect Digit Prompt: `Press Enter your 3 digit attendee ID followed by pound.`

<img align="middle" src="../images/lab2/16.gif" width="1000" />  
<br/>
<br/>

- Now edit the Play Message connected to the collect digit activity as well - you can experiment with any text.

Prompt: `Thanks. Please hold while we find you an expert.`

<img align="middle" src="../images/lab2/17_1.gif" width="1000" />  
<br/>
<br/>

- Feel free to Modify the Comfort message while in Queue as well by changing the prompt in Play message activity connected to the play music activity

Prompt: `Thank you for waiting. Please Hold while we get you an expert.`

<img align="middle" src="../images/lab2/17_2.gif" width="1000" />  
<br/>
<br/>

- Validate and publish the flow.

<img align="middle" src="../images/lab2/8.gif" width="1000" />  
<br/>
<br/>

- Make another test call to the same DN by dialing the number - and notice the change in the prompts, which are now using text-to-speech.


  **Congratulations! You just completed the lab!**
  
> You can refer to this [URL](https://cloud.google.com/text-to-speech/docs/ssml){:target="\_blank"} if you would like to learn more about SSML tags.

> Feel free to reach out to the proctors for any questions or clarifications.
