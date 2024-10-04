<!-- ## Objectives -->

<!-- This Lab has been split into four parts. -->

<!-- 1. First part of this Lab **introduces** you to the **current Analyzer User Interface** as well as the **New Analyzer User Interface (Analyzer UX Refresh).**

   > Note: **Important to point out** that the New Analyzer User Interface is in **Early Access phase** and has access only to Historical Stock Reports.
   > {: .block-warning }

2. In the second part we will look how **key Contact Center personas (Administrators, Supervisors and Contact Center Analysts) can use Analyzer** to extract some key Contact Center KPIs and actionable insights around **Contact Center Operational Performance, Customer Experience and Agent Performance** using the various **Stock** reports and dashboards.
3. In the third part we will walk through how we can **create custom reports** to extract key Contact Center data insights.
4. Last chapter covers key data and reporting capabilities like the **export of reporting data, report scheduling and the available Data APIs** to extract the data. -->

<!-- # Table of Contents

# Reporting Lab Table of Contents -->

<details>
  <summary style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 20px;">Pre-Requisites</span>
    <span style="display: flex; align-items: center;">
      <span style="background-color: #44cc44; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">Easy</span>&nbsp;&nbsp;
      <span style="background-color: #007AAE; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">10 min</span>
    </span>
  </summary>
  
  <table style="width: 100%; margin-top: 10px; border: 1px solid #ccc; border-collapse: collapse;">
    <thead>
      <tr style="background-color: #007AAE; color: white;">
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Topic</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Type</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">Pre-Requisites</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Activity</td>
        <td style="padding: 10px; border: 1px solid #ddd;"> <a href="../Labguide/PreRequisites" style="color: #007AAE; text-decoration: none;">Go to section</a> </td>
      </tr>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">Analyzer and Desktop Login Process</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Activity</td>
        <td style="padding: 10px; border: 1px solid #ddd;"><a href="../Labguide/PreRequisites/#analyzer-login-process" style="color: #007AAE; text-decoration: none;">Go to section</a></td>
      </tr>
    </tbody>
  </table>
</details>

<style>
  /* Default (Light Mode) Styles */
  :root {
    --bg-color: #f5f7fa;         /* Light background for the page */
    --table-border-color: #ccc;  /* Light border */
    --header-bg-color: #007AAE;  /* Header background */
    --header-border-color: #005073; /* Darker header border */
    --header-text-color: white;   /* White text for header */
    --row-bg-color: #f9f9f9;      /* Light gray for row */
    --text-color: #333;           /* Dark text for light mode */
    --link-color: #007AAE;        /* Link color */
  }

  /* Dark Mode Styles */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #2c2c2c;        /* Dark background for the page */
      --table-border-color: #555;  /* Darker border */
      --header-bg-color: #005073;  /* Darker header */
      --header-border-color: #333;  /* Darker header border */
      --header-text-color: white;   /* White text for header */
      --row-bg-color: #3b3b3b;     /* Darker row background */
      --text-color: #f5f5f5;       /* Light text for dark mode */
      --link-color: #66ccff;       /* Brighter link color */
    }
  }

  /* General styles for the details summary */
  details summary {
    cursor: pointer; /* Add a pointer cursor for better UX */
  }

  /* Link hover effect */
  a:hover {
    color: #33aaff; /* Hover effect for links */
  }
</style>

<!-- PART 1 -->

<details>
  <summary style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 20px;">LAB 1: Analyzer User Interface</span>
    <span style="display: flex; align-items: center;">
      <span style="background-color: #44cc44; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">Easy</span>&nbsp;&nbsp;
      <span style="background-color: #007AAE; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">15 min</span>
    </span>
  </summary>
  
  <table style="width: 100%; margin-top: 10px; border: 1px solid #ccc; border-collapse: collapse;">
    <thead>
      <tr style="background-color: #007AAE; color: white;">
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Topic</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Type</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">1.1: Analyzer User Interface</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Exploration</td>
        <td style="padding: 10px; border: 1px solid #ddd;"> <a href="../Labguide/Lab1/#11-analyzer-user-interface" style="color: #007AAE; text-decoration: none;">Go to section</a> </td>
      </tr>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">1.2: NEW Analyzer User Interface</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Activity</td>
        <td style="padding: 10px; border: 1px solid #ddd;"><a href="../Labguide/Lab1/#12-new-analyzer-user-interface" style="color: #007AAE; text-decoration: none;">Go to section</a></td>
      </tr>
    </tbody>
  </table>
</details>

<style>
  /* Default (Light Mode) Styles */
  :root {
    --bg-color: #f5f7fa;         /* Light background for the page */
    --table-border-color: #ccc;  /* Light border */
    --header-bg-color: #007AAE;  /* Header background */
    --header-border-color: #005073; /* Darker header border */
    --header-text-color: white;   /* White text for header */
    --row-bg-color: #f9f9f9;      /* Light gray for row */
    --text-color: #333;           /* Dark text for light mode */
    --link-color: #007AAE;        /* Link color */
  }

  /* Dark Mode Styles */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #2c2c2c;        /* Dark background for the page */
      --table-border-color: #555;  /* Darker border */
      --header-bg-color: #005073;  /* Darker header */
      --header-border-color: #333;  /* Darker header border */
      --header-text-color: white;   /* White text for header */
      --row-bg-color: #3b3b3b;     /* Darker row background */
      --text-color: #f5f5f5;       /* Light text for dark mode */
      --link-color: #66ccff;       /* Brighter link color */
    }
  }

  /* General styles for the details summary */
  details summary {
    cursor: pointer; /* Add a pointer cursor for better UX */
  }

  /* Link hover effect */
  a:hover {
    color: #33aaff; /* Hover effect for links */
  }
</style>


<!-- PART 2 -->

<details>
  <summary style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 20px;">LAB 2: Analyzer Stock reports</span>
    <span style="display: flex; align-items: center;">
      <span style="background-color: #FF7F50; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">Intermediate</span>&nbsp;&nbsp;
      <span style="background-color: #007AAE; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">15 min</span>
    </span>
  </summary>
  
  <table style="width: 100%; margin-top: 10px; border: 1px solid #ccc; border-collapse: collapse;">
    <thead>
      <tr style="background-color: #007AAE; color: white;">
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Topic</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Type</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">2.1: High-level Contact Center Performance and Usage insights</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Exploration</td>
        <td style="padding: 10px; border: 1px solid #ddd;"> <a href="../Labguide/Lab2/#21-high-level-contact-center-performance-and-usage-insights" style="color: #007AAE; text-decoration: none;">Go to section</a> </td>
      </tr>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">2.2: Customer Experience and Queue Performance</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Activity</td>
        <td style="padding: 10px; border: 1px solid #ddd;"><a href="../Labguide/Lab2/#22-customer-experience-and-queue-performance" style="color: #007AAE; text-decoration: none;">Go to section</a></td>
      </tr>
    </tbody>
  </table>
</details>

<style>
  /* Default (Light Mode) Styles */
  :root {
    --bg-color: #f5f7fa;         /* Light background for the page */
    --table-border-color: #ccc;  /* Light border */
    --header-bg-color: #007AAE;  /* Header background */
    --header-border-color: #005073; /* Darker header border */
    --header-text-color: white;   /* White text for header */
    --row-bg-color: #f9f9f9;      /* Light gray for row */
    --text-color: #333;           /* Dark text for light mode */
    --link-color: #007AAE;        /* Link color */
  }

  /* Dark Mode Styles */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #2c2c2c;        /* Dark background for the page */
      --table-border-color: #555;  /* Darker border */
      --header-bg-color: #005073;  /* Darker header */
      --header-border-color: #333;  /* Darker header border */
      --header-text-color: white;   /* White text for header */
      --row-bg-color: #3b3b3b;     /* Darker row background */
      --text-color: #f5f5f5;       /* Light text for dark mode */
      --link-color: #66ccff;       /* Brighter link color */
    }
  }

  /* General styles for the details summary */
  details summary {
    cursor: pointer; /* Add a pointer cursor for better UX */
  }

  /* Link hover effect */
  a:hover {
    color: #33aaff; /* Hover effect for links */
  }
</style>

<!-- PART 3 -->

<details>
  <summary style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 20px;">LAB 3: Analyzer Custom reports</span>
    <span style="display: flex; align-items: center;">
      <span style="background-color: #FF7F50; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">Intermediate</span>&nbsp;&nbsp;
      <span style="background-color: #007AAE; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">15 min</span>
    </span>
  </summary>
  
  <table style="width: 100%; margin-top: 10px; border: 1px solid #ccc; border-collapse: collapse;">
    <thead>
      <tr style="background-color: #007AAE; color: white;">
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Topic</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Type</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">3.1: Create Custom Realtime Agent Report</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Exploration</td>
        <td style="padding: 10px; border: 1px solid #ddd;"> <a href="../Labguide/Lab3/#31-create-custom-realtime-agent-report" style="color: #007AAE; text-decoration: none;">Go to section</a> </td>
      </tr>
      <!-- <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">2.2: Customer Experience and Queue Performance</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Activity</td>
        <td style="padding: 10px; border: 1px solid #ddd;"><a href="../ReportingExperience/#22-customer-experience-and-queue-performance" style="color: #007AAE; text-decoration: none;">Go to section</a></td>
      </tr> -->
    </tbody>
  </table>
</details>

<style>
  /* Default (Light Mode) Styles */
  :root {
    --bg-color: #f5f7fa;         /* Light background for the page */
    --table-border-color: #ccc;  /* Light border */
    --header-bg-color: #007AAE;  /* Header background */
    --header-border-color: #005073; /* Darker header border */
    --header-text-color: white;   /* White text for header */
    --row-bg-color: #f9f9f9;      /* Light gray for row */
    --text-color: #333;           /* Dark text for light mode */
    --link-color: #007AAE;        /* Link color */
  }

  /* Dark Mode Styles */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #2c2c2c;        /* Dark background for the page */
      --table-border-color: #555;  /* Darker border */
      --header-bg-color: #005073;  /* Darker header */
      --header-border-color: #333;  /* Darker header border */
      --header-text-color: white;   /* White text for header */
      --row-bg-color: #3b3b3b;     /* Darker row background */
      --text-color: #f5f5f5;       /* Light text for dark mode */
      --link-color: #66ccff;       /* Brighter link color */
    }
  }

  /* General styles for the details summary */
  details summary {
    cursor: pointer; /* Add a pointer cursor for better UX */
  }

  /* Link hover effect */
  a:hover {
    color: #33aaff; /* Hover effect for links */
  }
</style>

<!-- PART 4 -->

<details>
  <summary style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 20px;">LAB 4: (BONUS) Data extraction and scheduling Capabilities</span>
    <span style="display: flex; align-items: center;">
      <span style="background-color: #FF7F50; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">Intermediate</span>&nbsp;&nbsp;
      <span style="background-color: #007AAE; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">20 min</span>
    </span>
  </summary>
  
  <table style="width: 100%; margin-top: 10px; border: 1px solid #ccc; border-collapse: collapse;">
    <thead>
      <tr style="background-color: #007AAE; color: white;">
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Topic</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Type</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">4.1: Export Data as Excel or CSV</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Exploration</td>
        <td style="padding: 10px; border: 1px solid #ddd;"> <a href="../Labguide/Lab4/#41-export-data-as-excel-or-csv" style="color: #007AAE; text-decoration: none;">Go to section</a> </td>
      </tr>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">4.2: Visualization Scheduler</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Activity</td>
        <td style="padding: 10px; border: 1px solid #ddd;"><a href="../Labguide/Lab4/#42-visualization-scheduler" style="color: #007AAE; text-decoration: none;">Go to section</a></td>
      </tr>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">4.3: Search APIs</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Activity</td>
        <td style="padding: 10px; border: 1px solid #ddd;"><a href="../Labguide/Lab4/#43-search-apis" style="color: #007AAE; text-decoration: none;">Go to section</a></td>
      </tr>
    </tbody>
  </table>
</details>

<style>
  /* Default (Light Mode) Styles */
  :root {
    --bg-color: #f5f7fa;         /* Light background for the page */
    --table-border-color: #ccc;  /* Light border */
    --header-bg-color: #007AAE;  /* Header background */
    --header-border-color: #005073; /* Darker header border */
    --header-text-color: white;   /* White text for header */
    --row-bg-color: #f9f9f9;      /* Light gray for row */
    --text-color: #333;           /* Dark text for light mode */
    --link-color: #007AAE;        /* Link color */
  }

  /* Dark Mode Styles */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #2c2c2c;        /* Dark background for the page */
      --table-border-color: #555;  /* Darker border */
      --header-bg-color: #005073;  /* Darker header */
      --header-border-color: #333;  /* Darker header border */
      --header-text-color: white;   /* White text for header */
      --row-bg-color: #3b3b3b;     /* Darker row background */
      --text-color: #f5f5f5;       /* Light text for dark mode */
      --link-color: #66ccff;       /* Brighter link color */
    }
  }

  /* General styles for the details summary */
  details summary {
    cursor: pointer; /* Add a pointer cursor for better UX */
  }

  /* Link hover effect */
  a:hover {
    color: #33aaff; /* Hover effect for links */
  }
</style>

<!-- PART 5 -->

<details>
  <summary style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 20px;">LAB 5: Auto CSAT score</span>
    <span style="display: flex; align-items: center;">
      <span style="background-color: #44cc44; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">Easy</span>&nbsp;&nbsp;
      <span style="background-color: #007AAE; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">5 min</span>
    </span>
  </summary>
  
  <table style="width: 100%; margin-top: 10px; border: 1px solid #ccc; border-collapse: collapse;">
    <thead>
      <tr style="background-color: #007AAE; color: white;">
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Topic</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Type</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">5.1: What is Auto CSAT score?</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Exploration</td>
        <td style="padding: 10px; border: 1px solid #ddd;"> <a href="../Labguide/Lab5/#51-what-is-auto-csat-score" style="color: #007AAE; text-decoration: none;">Go to section</a> </td>
      </tr>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">5.2: How to setup Auto CSAT feature?</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Exploration</td>
        <td style="padding: 10px; border: 1px solid #ddd;"> <a href="../Labguide/Lab5/#52-how-to-setup-auto-csat-feature" style="color: #007AAE; text-decoration: none;">Go to section</a> </td>
      </tr>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">5.3: Where can the Auto CSAT score be viewed?</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Exploration</td>
        <td style="padding: 10px; border: 1px solid #ddd;"> <a href="../Labguide/Lab5/#53-where-can-the-auto-csat-score-be-viewed" style="color: #007AAE; text-decoration: none;">Go to section</a> </td>
      </tr>
    </tbody>
  </table>
</details>

<style>

  /* Default (Light Mode) Styles */
  :root {
    --bg-color: #f5f7fa;         /* Light background for the page */
    --table-border-color: #ccc;  /* Light border */
    --header-bg-color: #007AAE;  /* Header background */
    --header-border-color: #005073; /* Darker header border */
    --header-text-color: white;   /* White text for header */
    --row-bg-color: #f9f9f9;      /* Light gray for row */
    --text-color: #333;           /* Dark text for light mode */
    --link-color: #007AAE;        /* Link color */
  }

  /* Dark Mode Styles */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #2c2c2c;        /* Dark background for the page */
      --table-border-color: #555;  /* Darker border */
      --header-bg-color: #005073;  /* Darker header */
      --header-border-color: #333;  /* Darker header border */
      --header-text-color: white;   /* White text for header */
      --row-bg-color: #3b3b3b;     /* Darker row background */
      --text-color: #f5f5f5;       /* Light text for dark mode */
      --link-color: #66ccff;       /* Brighter link color */
    }
  }

  /* General styles for the details summary */
  details summary {
    cursor: pointer; /* Add a pointer cursor for better UX */
  }

  /* Link hover effect */
  a:hover {
    color: #33aaff; /* Hover effect for links */
  }
</style>

<!-- PART 6 -->

<details>
  <summary style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 20px;">LAB 6: Topic Analytics</span>
    <span style="display: flex; align-items: center;">
      <span style="background-color: #44cc44; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">Easy</span>&nbsp;&nbsp;
      <span style="background-color: #007AAE; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">5 min</span>
    </span>
  </summary>
  
  <table style="width: 100%; margin-top: 10px; border: 1px solid #ccc; border-collapse: collapse;">
    <thead>
      <tr style="background-color: #007AAE; color: white;">
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Topic</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Type</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">6.1: Access the Topic Analytics Portal</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Exploration</td>
        <td style="padding: 10px; border: 1px solid #ddd;"> <a href="../Labguide/Lab6/#61-access-the-topic-analytics-portal" style="color: #007AAE; text-decoration: none;">Go to section</a> </td>
      </tr>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">6.2: Review the Topic Collection</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Activity</td>
        <td style="padding: 10px; border: 1px solid #ddd;"><a href="../Labguide/Lab6/#62-review-the-topic-collection" style="color: #007AAE; text-decoration: none;">Go to section</a></td>
      </tr>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">6.3: Analyzing Conversations for a Given Topic</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Activity</td>
        <td style="padding: 10px; border: 1px solid #ddd;"><a href="../Labguide/Lab6/#63-analyzing-conversations-for-a-given-topic" style="color: #007AAE; text-decoration: none;">Go to section</a></td>
      </tr>
    </tbody>
  </table>
</details>

<style>
  
  /* Default (Light Mode) Styles */
  :root {
    --bg-color: #f5f7fa;         /* Light background for the page */
    --table-border-color: #ccc;  /* Light border */
    --header-bg-color: #007AAE;  /* Header background */
    --header-border-color: #005073; /* Darker header border */
    --header-text-color: white;   /* White text for header */
    --row-bg-color: #f9f9f9;      /* Light gray for row */
    --text-color: #333;           /* Dark text for light mode */
    --link-color: #007AAE;        /* Link color */
  }

  /* Dark Mode Styles */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #2c2c2c;        /* Dark background for the page */
      --table-border-color: #555;  /* Darker border */
      --header-bg-color: #005073;  /* Darker header */
      --header-border-color: #333;  /* Darker header border */
      --header-text-color: white;   /* White text for header */
      --row-bg-color: #3b3b3b;     /* Darker row background */
      --text-color: #f5f5f5;       /* Light text for dark mode */
      --link-color: #66ccff;       /* Brighter link color */
    }
  }

  /* General styles for the details summary */
  details summary {
    cursor: pointer; /* Add a pointer cursor for better UX */
  }

  /* Link hover effect */
  a:hover {
    color: #33aaff; /* Hover effect for links */
  }
</style>

<!-- PART 7 -->

<details>
  <summary style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 20px;">LAB 7: Survey Insights</span>
    <span style="display: flex; align-items: center;">
      <span style="background-color: #44cc44; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">Easy</span>&nbsp;&nbsp;
      <span style="background-color: #007AAE; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">5 min</span>
    </span>
  </summary>
  
  <table style="width: 100%; margin-top: 10px; border: 1px solid #ccc; border-collapse: collapse;">
    <thead>
      <tr style="background-color: #007AAE; color: white;">
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Topic</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Type</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">3.1: Create Custom Realtime Agent Report</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Exploration</td>
        <td style="padding: 10px; border: 1px solid #ddd;"> <a href="../Labguide/Lab5" style="color: #007AAE; text-decoration: none;">Go to section</a> </td>
      </tr>
      <!-- <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">2.2: Customer Experience and Queue Performance</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Activity</td>
        <td style="padding: 10px; border: 1px solid #ddd;"><a href="../ReportingExperience/#22-customer-experience-and-queue-performance" style="color: #007AAE; text-decoration: none;">Go to section</a></td>
      </tr> -->
    </tbody>
  </table>
</details>

<style>
  
  /* Default (Light Mode) Styles */
  :root {
    --bg-color: #f5f7fa;         /* Light background for the page */
    --table-border-color: #ccc;  /* Light border */
    --header-bg-color: #007AAE;  /* Header background */
    --header-border-color: #005073; /* Darker header border */
    --header-text-color: white;   /* White text for header */
    --row-bg-color: #f9f9f9;      /* Light gray for row */
    --text-color: #333;           /* Dark text for light mode */
    --link-color: #007AAE;        /* Link color */
  }

  /* Dark Mode Styles */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #2c2c2c;        /* Dark background for the page */
      --table-border-color: #555;  /* Darker border */
      --header-bg-color: #005073;  /* Darker header */
      --header-border-color: #333;  /* Darker header border */
      --header-text-color: white;   /* White text for header */
      --row-bg-color: #3b3b3b;     /* Darker row background */
      --text-color: #f5f5f5;       /* Light text for dark mode */
      --link-color: #66ccff;       /* Brighter link color */
    }
  }

  /* General styles for the details summary */
  details summary {
    cursor: pointer; /* Add a pointer cursor for better UX */
  }

  /* Link hover effect */
  a:hover {
    color: #33aaff; /* Hover effect for links */
  }
</style>

<!-- PART 8 -->

<details>
  <summary style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 20px;">LAB 8: Customer Journey</span>
    <span style="display: flex; align-items: center;">
      <span style="background-color: #44cc44; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">Easy</span>&nbsp;&nbsp;
      <span style="background-color: #007AAE; color: white; padding: 5px 15px; font-weight: bold; border-radius: 5px; font-size: 14px;">10 min</span>
    </span>
  </summary>
  
  <table style="width: 100%; margin-top: 10px; border: 1px solid #ccc; border-collapse: collapse;">
    <thead>
      <tr style="background-color: #007AAE; color: white;">
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Topic</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Type</th>
        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #005073;">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">3.1: Create Custom Realtime Agent Report</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Exploration</td>
        <td style="padding: 10px; border: 1px solid #ddd;"> <a href="../Labguide/Lab5" style="color: #007AAE; text-decoration: none;">Go to section</a> </td>
      </tr>
      <!-- <tr style="background-color: #f9f9f9; color: #333;">
        <td style="padding: 10px; border: 1px solid #ddd;">2.2: Customer Experience and Queue Performance</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Activity</td>
        <td style="padding: 10px; border: 1px solid #ddd;"><a href="../ReportingExperience/#22-customer-experience-and-queue-performance" style="color: #007AAE; text-decoration: none;">Go to section</a></td>
      </tr> -->
    </tbody>
  </table>
</details>

<style>
  
  /* Default (Light Mode) Styles */
  :root {
    --bg-color: #f5f7fa;         /* Light background for the page */
    --table-border-color: #ccc;  /* Light border */
    --header-bg-color: #007AAE;  /* Header background */
    --header-border-color: #005073; /* Darker header border */
    --header-text-color: white;   /* White text for header */
    --row-bg-color: #f9f9f9;      /* Light gray for row */
    --text-color: #333;           /* Dark text for light mode */
    --link-color: #007AAE;        /* Link color */
  }

  /* Dark Mode Styles */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #2c2c2c;        /* Dark background for the page */
      --table-border-color: #555;  /* Darker border */
      --header-bg-color: #005073;  /* Darker header */
      --header-border-color: #333;  /* Darker header border */
      --header-text-color: white;   /* White text for header */
      --row-bg-color: #3b3b3b;     /* Darker row background */
      --text-color: #f5f5f5;       /* Light text for dark mode */
      --link-color: #66ccff;       /* Brighter link color */
    }
  }

  /* General styles for the details summary */
  details summary {
    cursor: pointer; /* Add a pointer cursor for better UX */
  }

  /* Link hover effect */
  a:hover {
    color: #33aaff; /* Hover effect for links */
  }
</style>



--------------------------------------------------
<!-- Backup

### [Pre-Requisites](./ReportingExperience.md/#pre-requisites)

| Topic                                                                                                                                             | Type        | Dificulty    | Time   |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------ | ------ |
| [Pre-Requisites](./ReportingExperience.md/#pre-requisites)                                                                                                                 | Activity    | EASY         | 5 min  |
| [Analyzer and Desktop Login Process](./ReportingExperience.md/#analyzer-login-process)                                                                                     | Activity    | EASY         | 5 min  |

### [Part 1: Analyzer User Interface](./ReportingExperience.md/#part-1-webex-contact-center-analyzer-user-interface)

| Topic                                                                                                                                             | Type        | Dificulty    | Time   |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------ | ------ |
| [1.1: Analyzer User Interface](./ReportingExperience.md/#11-analyzer-user-interface)                                                                                       | Exploration | EASY         |  5 min |
| [1.2: NEW Analyzer User Interface](./ReportingExperience.md/#12-new-analyzer-user-interface)                                                                               | Activity    | EASY         |  10 min|

### [Part 2: Analyzer Stock reports](./ReportingExperience.md/#part-2-contact-center-insights-with-new-analyzer-stock-reports)

| Topic                                                                                                                                             | Type        | Dificulty    | Time   |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------ | ------ |
| [2.1: High-level Contact Center Performance and Usage insights](./ReportingExperience.md/#21-high-level-contact-center-performance-and-usage-insights)                     | Activity    | EASY         |        |
| [2.2: Customer Experience and Queue Performance](./ReportingExperience.md/#22-customer-experience-and-queue-performance)                                                   | Activity    | INTERMEDIATE |        |

### [Part 3: Analyzer custom reports](./ReportingExperience.md/#part-3-bonus-contact-center-insights-with-analyzer-custom-reports-and-dashboards)

| Topic                                                                                                                                             | Type        | Dificulty    | Time   |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------ | ------ |
| [3.1: Create Custom Realtime Agent Report](./ReportingExperience.md/#31-create-custom-realtime-agent-report)                                                               | Activity    | INTERMEDIATE |        |

### [Part 4: (BONUS) Data extraction and scheduling Capabilities](./ReportingExperience.md/#part-4-bonus-data-extraction-and-scheduling-capabilities)

| Topic                                                                                                                                             | Type        | Dificulty    | Time   |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------ | ------ |
| [4.1: Export Data as Excel or CSV](./ReportingExperience.md/#41-export-data-as-excel-or-csv)                                                                               | Activity    | EASY         |        |
| [4.2: Visualization Scheduler](./ReportingExperience.md/#42-visualization-scheduler)                                                                                       | Activity    | EASY         |        |
| [4.3: Search APIs](./ReportingExperience.md/#43-search-apis)    -->
