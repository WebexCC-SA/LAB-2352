---
#icon: material/numeric-4-box-multiple
icon: material/folder-open-outline

title: Reporting Experience
author: Gagarin Sathiyanarayanan
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

<table>
  <tr>
    <td style="background-color: #d9edf7; font-weight: bold;">Your Administrator Login</td>
    <td>wxcclabs+admin_ID<w class = "attendee_out">AttendeeID</w>@gmail.com</td>
  </tr>
    <tr>
    <td style="background-color: #d9edf7; font-weight: bold;">Your Agent Login</td>
    <td>wxcclabs+agent_ID<w class = "attendee_out">AttendeeID</w>@gmail.com</td>
  </tr>
   <tr>
    <td style="background-color: #d9edf7; font-weight: bold;">Your Supervisor Login</td>
    <td>wxcclabs+supvr_ID<w class = "attendee_out">AttendeeID</w>@gmail.com</td>
  </tr>
    <tr>
    <td style="background-color: #d9edf7; font-weight: bold;">Your Voice Entrypoint ID</td>
    <td>WX1_EP_<w class = "attendee_out">AttendeeID</w></td>
  </tr>
   <tr>
    <td style="background-color: #d9edf7; font-weight: bold;">Your Team1</td>
    <td><w class = "attendee_out">AttendeeID</w>_Team1</td>
  </tr>
     <tr>
    <td style="background-color: #d9edf7; font-weight: bold;">Your Team2</td>
    <td><w class = "attendee_out">AttendeeID</w>_Team2</td>
  </tr>

  
  
   <tr>
    <td style="background-color: #d9edf7; font-weight: bold;">Control Hub</td>
    <td><a href="https://admin.webex.com/">https://admin.webex.com/</a></td>
  </tr>
  <tr>
    <td style="background-color: #d9edf7; font-weight: bold;">Agent Desktop</td>
    <td><a href="https://desktop.wxcc-us1.cisco.com/">https://desktop.wxcc-us1.cisco.com/</a></td>
  </tr>
  <tr>
    <td style="background-color: #d9edf7; font-weight: bold;">Analyzer</td>
    <td><a href="https://analyzer-v2.wxcc-us1.cisco.com/analyzer">Analyzer</a></td>
  </tr>
    <tr>
    <td style="background-color: #d9edf7; font-weight: bold;">Search Task API Documentation</td>
    <td><a href="https://developer.webex-cx.com/documentation/search/v1/search-tasks">Search Task API</a></td>
  </tr>
</table>
