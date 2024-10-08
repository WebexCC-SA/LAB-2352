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

# Lab 10: Auto CSAT Reporting

## Objectives

By the end of this lab, you will:

- Be able to identify understand how to run reports for the AutoCSAT feature that relies on a combination of AI technologies to automatically.

## Step by Step Guide

#### Step 1: Login to Control Hub

- Log-in with your admin credentials to admin.webex.com

- Launch the Analyzer application that is used for Reporting on Webex Contact Center

<img align="middle" src="../images/lab10/1.gif" width="1000" />  
<br/>
<br/>

#### Step 2: Open Auto CSAT Reporting

- Open the Analyzer Report titled "Auto CSAT Report"

<img align="middle" src="../images/lab10/2.gif" width="1000" />  
<br/>

#### Step 3: Explore creating filters

- Observe the actions taken by the contact center system once a burnout event is detected.
- Note how contact center administrators have tools today to address and support the wellness of their agents.

<img align="middle" src="../images/lab10/2.gif" width="1000" />  
<br/>

(Note: The details for the reset process are not provided in the document and should be completed by the instructor or the person responsible for the lab content.)

**Congratulations! You just completed the lab!**

> Feel free to reach out to the proctors for any questions or clarifications.
