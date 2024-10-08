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

# Lab 3
<!-- # Part 3: Virtual Agents -->

## Objectives

This lab is designed to provide an in-depth understanding of the Cisco Virtual Agents available in Webex Contact Center. By completing this section of the lab, you will:

- Gain practical skills and knowledge on how to effectively utilize Webex Contact Center's Virtual Agent capabilities to create self-service automation.
- Improve the containment rate of your contact center, increasing efficiency and reducing costs.
- Learn how to create an effective Virtual Agent Voice solution using Cisco's Webex Connect Bot builder platform and Webex Contact Center Flow Designer.
- Understand the use of Generative AI to fast-track bot development and save time.
- Troubleshoot Virtual Agent functionality to enhance performance.

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

### Step 1: Creating a Virtual Agent using a Template

- Log in to the Control Hub using the contact center admin credentials.
- Go to Contact Center from the left side navigation panel, and under Quick Links, click on Webex Connect Bot Builder.

<img align="middle" src="../images/lab3/1.png" width="1000" />  
<br/>
<br/>

- Click on "New Task Bot" to create a new bot.

<img align="middle" src="../images/lab3/2.png" width="1000" />  
<br/>
<br/>

- Select the `Appointment Booking` Template and click on `Next` button

<img align="middle" src="../images/lab3/3.png" width="1000" />  
<br/>
<br/>

- Update the Bot Name to CL\_bot\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID. Click on `Import` to create the bot.

<img align="middle" src="../images/lab3/4.png" width="1000" />  
<br/>
<br/>

- Make the bot live by clicking on the `Make Live` button on the top right.

<img align="middle" src="../images/lab3/5.png" width="1000" />  
<br/>
<br/>

- Enter `v1` in the popup modal which appears after clicking on `Make Live`.

<img align="middle" src="../images/lab3/6.png" width="1000" />  
<br/>
<br/>

- Click on the `Preview` button on the top right side to test the bot.

<img align="middle" src="../images/lab3/7.png" width="1000" />  
<br/>
<br/>

- Try the bot flow by typing "I would like to cancel an appointment" and continue the conversation.

<img align="middle" src="../images/lab3/8.png" width="1000" />  
<br/>
<br/>

- Go back and click on New Chat to initiate a new chat for "booking a new appointment" by typing "I would like to book an appointment" and continue the conversation.

<img align="middle" src="../images/lab3/9.png" width="1000" />  
<br/>
<br/>

### Step 2: Integrating the Bot with Flow for Voice Calls

- Log into Control Hub using your contact center admin credentials. Select 'Contact Center' from the left panel and then navigate to 'Flows' from the left panel.

- Click on "Manage Flows", then select "Create Flow".

<img align="middle" src="../images/lab3/10.png" width="1000" />  
<br/>
<br/>

- Name the new flow CL\_VirtualAgent\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID. Choose `NewPhoneContact` and click on "Start Building Flow".

<img align="middle" src="../images/lab3/11.png" width="1000" />  
<br/>
<br/>

- Make sure the Edit button at the top is set to "ON". Then, drag and drop the "Virtual Agent V2" activity from the left panel onto the canvas.

<img align="middle" src="../images/lab3/12.png" width="1000" />  
<br/>
<br/>

- Connect the "New Phone Contact" activity to the "Virtual Agent V2" activity by dragging a line between them.

<img align="middle" src="../images/lab3/13.png" width="1000" />  
<br/>
<br/>

- Click on the "Virtual Agent V2" activity to configure it. In the right-side panel, select "Webex CCAI Config" as the Contact Center AI Config from the dropdown menu.

- From the Virtual Agent dropdown, choose the bot you created in Step 1, labeled `CL_XXXX`.

<img align="middle" src="../images/lab3/14.png" width="1000" />  
<br/>
<br/>

- From the left side panel, find and select the "Disconnect Contact" activity.

<img align="middle" src="../images/lab3/15.png" width="1000" />  
<br/>
<br/>

- Drag and drop the "Disconnect Contact" activity onto the canvas, placing it in your flow.

<img align="middle" src="../images/lab3/16.png" width="1000" />  
<br/>
<br/>

- Connect the handled, escalated, and errored outputs from the "Virtual Agent V2" activity to the "Disconnect Contact" activity.

<img align="middle" src="../images/lab3/17.png" width="1000" />  
<br/>
<br/>

- Activate the validation by turning the "Validation" button "ON". Make sure there are no errors in your flow.

<img align="middle" src="../images/lab3/18.png" width="1000" />  
<br/>
<br/>

- Click on the "Publish Flow" button. Enter "Virtual Agent V1" in the Publish Note field and click on "Publish Flow".

<img align="middle" src="../images/lab3/19.png" width="1000" />  
<br/>
<br/>

- Log in to the Control Hub using the contact center admin credentials.
- Go to Contact Center from the left side navigation panel

<img align="middle" src="../images/lab3/1.png" width="1000" />  
<br/>
<br/>

- Go to Channels under Customer Experience on the left hand side navigation panel

<img align="middle" src="../images/lab3/channel.png" width="1000" />  
<br/>
<br/>

- Search on the top search bar with CL\_EP\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID. Click on CL\_VirtualAgent\_<w class = "attendee_out">attendeeID</w>

<img align="middle" src="../images/lab3/channel-1.png" width="1000" />  
<br/>
<br/>

- Update the Routing Flow to CL\_VirtualAgent\_<w class = "attendee_out">attendeeID</w>. Note down the Support Number and then click on Save.

- Dial the  Support Number from your mobile phone to test the Virtual Agent over a voice call.

### Step 3: Updating Bot Responses

- From the Control Hub Go to Contact center and the under Quick Links, open the Webex Connect Bot Builder. If you encounter an authentication error due to inactivity, log out from the control hub, log back in, and then access the Webex Connect Bot Builder.

<img align="middle" src="../images/lab3/20.png" width="1000" />  
<br/>
<br/>

- Click on the bot  CL\_bot\_<w class = "attendee_out">attendeeID</w>  that you created earlier.

<img align="middle" src="../images/lab3/21.png" width="1000" />  
<br/>
<br/>

- Go to the Responses tab on the left-hand panel.

<img align="middle" src="../images/lab3/22.png" width="1000" />  
<br/>
<br/>

- Select the Welcome message.

<img align="middle" src="../images/lab3/23-1.png" width="1000" />  
<br/>
<br/>

- Update the text to "Welcome to Cumulus Healthcare. How may I assist you today?" for the Default (web) channel.

<img align="middle" src="../images/lab3/24-1.png" width="1000" />  
<br/>
<br/>

- Navigate to the Voice Channel and update the text to "Welcome to Cumulus Healthcare. How may I assist you today?"

<img align="middle" src="../images/lab3/25-1.png" width="1000" />  
<br/>
<br/>

- Click on the update button to confirm the changes.Make the bot live by clicking on the "Make Live" button, then click on "Preview" to test if the Greeting has been successfully updated.

<img align="middle" src="../images/lab3/27.png" width="1000" />  
<br/>
<br/>

### Step 4: Adding New Intents & Entities

- Navigate to the Training Tab from the left-hand panel and click on the "Create Intent" button located in the top right corner.

<img align="middle" src="../images/lab3/28.png" width="1000" />  
<br/>
<br/>

- Add a new intent by providing the intent name as "ReferralRequest" and include the following two utterances:

  - "I would like a referral for a cardiologist."
  - "I need a referral to visit a neurologist."

<img align="middle" src="../images/lab3/29.png" width="1000" />  
<br/>
<br/>

- Click on "Link entity" and add "patient phone number" as an entity.

<img align="middle" src="../images/lab3/30.png" width="1000" />  
<br/>
<br/>

- Check the "Required" checkbox and select the template key as "askPhoneNumber", which will be used to prompt the patient for their phone number.

<img align="middle" src="../images/lab3/31.png" width="1000" />  
<br/>
<br/>

- Again, click on "Link Entity" and add "patient dob" (date of birth) as a required entity with the template key as "askPatientDob". When this intent is matched, it will trigger the Virtual Agent to ask the user to provide their phone number and date of birth for verification purposes.

<img align="middle" src="../images/lab3/32.png" width="1000" />  
<br/>
<br/>

- At the bottom of the "Final Template Key" section, click on "Create new".

<img align="middle" src="../images/lab3/33.png" width="1000" />  
<br/>
<br/>

- Create a new template with the name "ReferralResponse" and with the text: "Your request has been logged and will be reviewed by our team. You will receive a callback once it's approved. Is there anything else I can assist you with?"

<img align="middle" src="../images/lab3/34.png" width="1000" />  
<br/>
<br/>

- Click on "Save".

<img align="middle" src="../images/lab3/35.png" width="1000" />  
<br/>
<br/>

- Return to the Training tab and click on the "Train" button to update the bot's understanding with the new intent and entities.

<img align="middle" src="../images/lab3/36.png" width="1000" />  
<br/>
<br/>

- Add a comment such as "Added referral request intent" to track the changes.

<img align="middle" src="../images/lab3/37.png" width="1000" />  
<br/>
<br/>

- Click on "Make Live" to update the live version of the bot with these changes.

<img align="middle" src="../images/lab3/38.png" width="1000" />  
<br/>
<br/>

- Provide a description for the update and choose "Make Live" or "Make Live both" if there are other unsaved changes pending.

<img align="middle" src="../images/lab3/39.png" width="1000" />  
<br/>
<br/>

- Use the "Preview" feature to test the bot flow with the input query: "I need a referral for a cardiologist".

<img align="middle" src="../images/lab3/40.png" width="1000" />  
<br/>
<br/>

- You can also test this interaction in voice mode by dialing the PSTN number assigned to your pod.

### Step 5: Adding Training Data using Generative AI

- Return to the "Referral Request" intent that you created in the previous exercise.

<img align="middle" src="../images/lab3/41.png" width="1000" />  
<br/>
<br/>

- Click on the "Generate" button to utilize Generative AI for creating additional training phrases.

<img align="middle" src="../images/lab3/42.png" width="1000" />  
<br/>
<br/>

- Enter a description such as "generate intents for requesting a referral to different doctor specialties from primary care." Set the Number of Variants to "10", which will determine the number of new phrases to be generated.

<img align="middle" src="../images/lab3/43.png" width="1000" />  
<br/>
<br/>

- Once the new phrases are generated, click on the "Save" button located in the top right corner to add them to your intent.

<img align="middle" src="../images/lab3/44.png" width="1000" />  
<br/>
<br/>

- After saving, navigate back to the Training tab and click on the "Train" button to incorporate the new generative data into the bot's model.

<img align="middle" src="../images/lab3/45.png" width="1000" />  
<br/>
<br/>

- Add a comment such as "added generative training data" to keep track of this specific update.

<img align="middle" src="../images/lab3/46.png" width="1000" />  
<br/>
<br/>

- Click on the "Make Live" button situated in the top right corner to apply the changes to the live version of your bot.

<img align="middle" src="../images/lab3/47.png" width="1000" />  
<br/>
<br/>

- Confirm the update by clicking on "Make Live" in the modal that appears.

<img align="middle" src="../images/lab3/48.png" width="1000" />  
<br/>
<br/>

- Test the updated bot flow by using the "Preview" button and inputting queries related to the new training data.

<img align="middle" src="../images/lab3/49.png" width="1000" />  
<br/>
<br/>

### Step 6: Bot Transcripts & Analytics

- Click on "Sessions" in the left-hand panel of your bot builder interface to view all the call history. Click on any Session ID to delve into a more detailed analysis of that particular interaction.

<img align="middle" src="../images/lab3/50.png" width="1000" />  
<br/>
<br/>

- If you encounter encrypted content, click on "Decrypt Content" to proceed with the review.

<img align="middle" src="../images/lab3/51.png" width="1000" />  
<br/>
<br/>

- Review the transcript for the selected interaction to gain insights into how the conversation unfolded.

<img align="middle" src="../images/lab3/52.png" width="1000" />  
<br/>
<br/>

- Click on individual messages from the user to examine the intents and entities identified by the Virtual Agent during the conversation.

<img align="middle" src="../images/lab3/53.png" width="1000" />  
<br/>
<br/>

By carefully analyzing these transcripts and analytics, you can identify areas for improvement, understand user behavior, and refine the Virtual Agent's performance accordingly.

<img align="middle" src="../images/lab3/54.png" width="1000" />  
<br/>
<br/>


### Step 7: Generative Fallback with ChatGPT

- Begin by creating a new bot. Click on `New Task Bot` within the Webex Connect Bot Builder interface.

<img align="middle" src="../images/lab3/54.png" width="1000" />  
<br/>
<br/>

- Navigate to the "Create bot" tab to set up your new bot.

<img align="middle" src="../images/lab3/55.png" width="1000" />  
<br/>
<br/>

- Assign the name CL\_fallback\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID. Click on ‘Done’ button on the bottom right side.

<img align="middle" src="../images/lab3/56.png" width="1000" />  
<br/>
<br/>

- Download the `fallback.json` file from [https://cisco.box.com/s/b0ptxk10gfid1jk09a3e68jg39jb2hbd](https://cisco.box.com/s/b0ptxk10gfid1jk09a3e68jg39jb2hbd){:target="\_blank"}

- Go to the Training Tab, click on the "ellipsis" (three dots), and then select "Import from JSON".

<img align="middle" src="../images/lab3/57.png" width="1000" />  
   <br/>
   <br/>
   
   
- Browse your computer and select the `fallback.json` file you downloaded earlier.
<img align="middle" src="../images/lab3/59.png" width="1000" />  
   <br/>
   <br/>


- Choose the option "Overwrite current intents and entities" and click on "Import" to upload the JSON content into your bot.

<img align="middle" src="../images/lab3/60.png" width="1000" />  
   <br/>
   <br/>

- After importing, click on the NLU Engine and update the Score below which fallback is shown to 0.7

<img align="middle" src="../images/lab3/fallback_config.png" width="1000" />  
   <br/>
   <br/>

- Click on "Make Live" to apply the changes, and confirm the action.

<img align="middle" src="../images/lab3/64.png" width="1000" />  
<br/>
<br/>

- Test the fallback functionality by using the "Preview" button. Try inputting medical queries such as "Which doctor should I consult for a nasal infection?" to see how the bot responds with the new fallback mechanism.

<img align="middle" src="../images/lab3/65.png" width="1000" />  
<br/>
<br/>

**Congratulations! You just completed the lab!**

> Feel free to reach out to the proctors for any questions or clarifications.
