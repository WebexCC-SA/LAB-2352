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

# Lab 4: Intelligent Virtual Agent Handoffs

## Objectives

This lab is designed to explore how to pass contextual intelligence from Virtual Agents to Webex Contact Center agents. It involves leveraging AI for virtual agent conversational transcripts and summaries. By completing this lab, you will gain practical skills and knowledge on how to provide the right context to agents to better handle customer queries.

By the end of this lab, you will:

- Understand how to effectively transfer and hand off to Human Agents.
- Learn how to provide the relevant call context to Human Agents.

## Step by Step Guide

### Step 1: Transfer to Human Agent

- Log into Control Hub using your contact center admin credentials. Select 'Contact Center' from the left panel and then navigate to 'Flows' from the left panel.

<img align="middle" src="../images/lab4/flow.png" width="1000" />  
<br/>
<br/>

- Open your flow CL_VirtualAgent\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID by using the search bar and then clicking on the cross launch icon

<img align="middle" src="../images/lab4/flow-2.png" width="1000" />  
<br/>
<br/>

<img align="middle" src="../images/lab4/1.png" width="1000" />  
<br/>
<br/>

- Drag and drop the `Queue Contact` activity onto the Flow from the left side panel and connect the `Escalated` path from the `Virtual Agent V2` activity to the `Queue Contact` activity.

<img align="middle" src="../images/lab4/2.png" width="1000" />  
<br/>
<br/>

- Connect the `Failure` path from the `Queue Contact` activity to the `Disconnect Contact` activity.

<img align="middle" src="../images/lab4/3.png" width="1000" />  
<br/>
<br/>

- Drag and drop the `Play Music` activity onto the Flow from the left side panel.

<img align="middle" src="../images/lab4/4.png" width="1000" />  
<br/>
<br/>

- Connect the `Queue Contact` activity to the `Play Music` activity.

<img align="middle" src="../images/lab4/5.png" width="1000" />  
<br/>
<br/>

- Connect the `Failure` path from the `Play Music` activity to the `Disconnect Contact` activity.

<img align="middle" src="../images/lab4/6.png" width="1000" />  
<br/>
<br/>

- Create a loop by connecting the `Play Music` activity back to itself - to create a music loop, following the diagram provided.

<img align="middle" src="../images/lab4/7.png" width="1000" />  
<br/>
<br/>

- Select the `Queue Contact` activity and set the Queue name to CL_Queue\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID

<img align="middle" src="../images/lab4/8.png" width="1000" />  
<br/>
<br/>

- Select the `Play Music` activity and choose the `defaultmusic_on_hold.wav` file from the `Music File` dropdown.

<img align="middle" src="../images/lab4/9.png" width="1000" />  
<br/>
<br/>

- Enable the `Validation` toggle, verify there are no Flow Errors, and then publish the flow.

<img align="middle" src="../images/lab4/10.png" width="1000" />  
<br/>
<br/>

<img align="middle" src="../images/lab4/11.png" width="1000" />  
<br/>
<br/>

- Log in to the agent desktop using the link [https://desktop.wxcc-us1.cisco.com/](https://desktop.wxcc-us1.cisco.com/){:target="\_blank"} and the agent login wxcclabs+agent_ID<w class = "attendee_out">attendeeID</w>@gmail.com

<img align="middle" src="../images/lab4/12.png" width="1000" />  
<br/>
<br/>

<img align="middle" src="../images/lab4/13.png" width="1000" />  
<br/>
<br/>

- Select the telephony option as `Desktop`, verify the team CL_Team\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID is selected, and click submit.

<img align="middle" src="../images/lab4/14.png" width="1000" />  
<br/>
<br/>

- Set the Agent status to `Available`from the top right corner.

<img align="middle" src="../images/lab4/15.png" width="1000" />  
<br/>
<br/>

<img align="middle" src="../images/lab4/16.png" width="1000" />  
<br/>
<br/>

- Dial the support number assigned to your POD and during the conversation with the virtual Agent, say, "Please transfer me to an Agent." Answer the call on the agent desktop when you receive a ring notification.

<img align="middle" src="../images/lab4/17.png" width="1000" />  
<br/>
<br/>

- Once the call is answered, disconnect the call by clicking on the `End` button.

<img align="middle" src="../images/lab4/19.png" width="1000" />  
<br/>
<br/>

- Select one of the wrap-up reasons and click on `Submit Wrap Up`.

<img align="middle" src="../images/lab4/20.png" width="1000" />  
<br/>
<br/>

### Step 2: Routing Based on Last Intent

- Open your flow CL_VirtualAgent\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID

<img align="middle" src="../images/lab4/21.png" width="1000" />  
<br/>
<br/>

- In the global flow properties section, click on `Add Flow Variable`.

<img align="middle" src="../images/lab4/22.png" width="1000" />  
<br/>
<br/>

- Enter a new variable named `last_intent`. Variable Type should be set as ‘String’ then click on ‘Save’ button.

<img align="middle" src="../images/lab4/23.png" width="1000" />  
<br/>
<br/>

- Drag and drop the `Parse` activity to the flow from the left panel.

<img align="middle" src="../images/lab4/26.png" width="1000" />  
<br/>
<br/>

- Configure the `Parse` activity with the following settings:

  - **Output variable**: `VirtualAgentV2.MetaData`
  - **Content Type**: `JSON`
  - **Output Variable**: `last_intent`
  - **Path Expression**: `$.last-matched-intent.intent-name`

<img align="middle" src="../images/lab4/27.png" width="1000" />  
<br/>
<br/>

- Connect the `Escalated` output from the `Virtual Agent V2` activity to the `Parse` activity.

<img align="middle" src="../images/lab4/28.png" width="1000" />  
<br/>
<br/>

- Add the `Condition` activity to the flow from the left panel.

<img align="middle" src="../images/lab4/29.png" width="1000" />  
<br/>
<br/>

- Configure the expression in the `Condition` activity to `{{ last_intent == "Book appointment" }}`

<img align="middle" src="../images/lab4/30.png" width="1000" />  
<br/>
<br/>

- Link the `Parse` activity to the `Condition` activity.

<img align="middle" src="../images/lab4/31.png" width="1000" />  
<br/>
<br/>

- Insert the `Play Message` activity into the flow from the left panel.

<img align="middle" src="../images/lab4/32.png" width="1000" />  
<br/>
<br/>

- In the `Play Message` activity settings, enable `Text-to-Speech` and select the `Cisco cloud Text-to-Speech` connector.

<img align="middle" src="../images/lab4/33.png" width="1000" />  
<br/>
<br/>

- Click on `Add Text-to-Speech Message`.

<img align="middle" src="../images/lab4/34.png" width="1000" />  
<br/>
<br/>

- Click the `Delete` button next to the `Audio file` dropdown to remove any existing audio file.

<img align="middle" src="../images/lab4/35.png" width="1000" />  
<br/>
<br/>

- Enter the text "Routing to an agent skilled at booking an appointment" in the `Text-to-Speech Message` area.

<img align="middle" src="../images/lab4/36.png" width="1000" />  
<br/>
<br/>

- Connect the `True` output of the `Condition` activity to the `Play Message` activity.

<img align="middle" src="../images/lab4/37.png" width="1000" />  
<br/>
<br/>

- Connect the `Play Message` activity to the `Queue Contact` activity.

<img align="middle" src="../images/lab4/38.png" width="1000" />  
<br/>
<br/>

- Direct the `False` output from the `Condition` activity to the `Queue Contact` activity.

<img align="middle" src="../images/lab4/39.png" width="1000" />  
<br/>
<br/>

- Enable `Flow Validation` to check for errors, then publish the flow.

<img align="middle" src="../images/lab4/40.png" width="1000" />  
<br/>
<br/>

<img align="middle" src="../images/lab4/41.png" width="1000" />  
<br/>
<br/>

- Log in to the agent desktop using the link [https://desktop.wxcc-us1.cisco.com/](https://desktop.wxcc-us1.cisco.com/){:target="\_blank"} and the agent login wxcclabs+agent_ID<w class = "attendee_out">attendeeID</w>@gmail.com

<img align="middle" src="../images/lab4/12.png" width="1000" />  
<br/>
<br/>

<img align="middle" src="../images/lab4/13.png" width="1000" />  
<br/>
<br/>

- Select the telephony option as `Desktop`, verify the team CL_Team\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID is selected, and click submit.

<img align="middle" src="../images/lab4/14.png" width="1000" />  
<br/>
<br/>

- Set the Agent status to `Available`from the top right corner.

<img align="middle" src="../images/lab4/15.png" width="1000" />  
<br/>
<br/>

<img align="middle" src="../images/lab4/16.png" width="1000" />  
<br/>
<br/>

- During your interaction with the virtual Agent, request a transfer by saying, "Please transfer me to an Agent." If the last intent was "Book appointment," you will hear the Text-to-Speech message: "Routing to an agent skilled at booking an appointment." Answer the call on the agent desktop when it rings.

<img align="middle" src="../images/lab4/44.png" width="1000" />  
<br/>
<br/>

- End the call by clicking the `End` button, choose a wrap-up reason, and submit it with the `Submit Wrap Up` button.

<img align="middle" src="../images/lab4/45.png" width="1000" />  
<br/>
<br/>

### Step 3: Virtual Agent Transcript

- Open your flow CL_VirtualAgent\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID

<img align="middle" src="../images/lab4/46.png" width="1000" />  
<br/>
<br/>

- Select the `Virtual Agent` activity and, in the right side panel, scroll down and notice the option for `Enable Conversation Transcript`.

- You can enable or disable the Virtual Agent transcript by checking or unchecking `Enable Conversation Transcript` option for the `Virtual Agent V2` activity, and publishing the flow again.

<img align="middle" src="../images/lab4/47.png" width="1000" />  
<br/>
<br/>

<img align="middle" src="../images/lab4/54.png" width="1000" />  
<br/>
<br/>

- You can dial into the same support and observe that the conversation transcript is available on the Agent Desktop when `Enable Conversation Transcript` is checked and the call is transferred to the agent from the Virtual Agent.

<img align="middle" src="../images/lab4/55.png" width="1000" />  
<br/>
<br/>

### Step 4: Virtual Agent Summary

- Log in to Control Hub with the admin credentials provided, and navigate to the Contact Center tab on the left panel.

<img align="middle" src="../images/lab4/56.png" width="1000" />  
<br/>
<br/>

- Click on `Teams` in the left panel.

<img align="middle" src="../images/lab4/57.png" width="1000" />  
<br/>
<br/>

- Search for your team with the identifier CL_Team\_<w class = "attendee_out">attendeeID</w> where <w class = "attendee_out">attendeeID</w> is your attendeeID

<img align="middle" src="../images/lab4/58.png" width="1000" />  
<br/>
<br/>

- Change the Desktop Layout setting from `Global Layout` to `VA-summary`and then click on Save.

<img align="middle" src="../images/lab4/59.png" width="1000" />  
<br/>
<br/>
<img align="middle" src="../images/lab4/60.png" width="1000" />  
<br/>
<br/>

- Sign out from the agent desktop.
  <img align="middle" src="../images/lab4/61.png" width="1000" />  
  <br/>
  <br/>

- Log back into the agent desktop using the link [https://desktop.wxcc-us1.cisco.com/](https://desktop.wxcc-us1.cisco.com/){:target="\_blank"} and the agent login wxcclabs+agent_ID<w class = "attendee_out">attendeeID</w>@gmail.com`.
  <img align="middle" src="../images/lab4/62.png" width="1000" />  
  <br/>
  <br/>

- Choose `Desktop` as your Telephony Option.

<img align="middle" src="../images/lab4/63.png" width="1000" />  
<br/>
<br/>

- Click on the AI assistant icon located on the top left navigation panel.

<img align="middle" src="../images/lab4/64.png" width="1000" />  
<br/>
<br/>

<img align="middle" src="../images/lab4/65.png" width="1000" />  
<br/>
<br/>

- Dial the support number assigned to your POD and initiate a conversation with "I would like to cancel my appointment." During the interaction with the virtual Agent, request a transfer by saying, "Please transfer me to an Agent." Answer the call on the agent desktop upon receiving the ring notification.

- Observe that, after answering the call, a summary of the Virtual Agent interaction is now displayed on the agent desktop.

<img align="middle" src="../images/lab4/66.png" width="1000" />  
<br/>
<br/>

**Congratulations! You just completed the lab!**

> Feel free to reach out to the proctors for any questions or clarifications.
