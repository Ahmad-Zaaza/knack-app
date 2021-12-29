## Knack test documentation

The project was initialized with ```create-next-app``` and is using Next JS 12 and Typescript . 

Styling library of choice: ```tailwindcss```.
Data fetching libraries of choice: ```axios``` and ```react-query```.
 
### Reason for choosing ```tailwindcss``` as a styling library : 

Tailwind is great for doing projects. It allows us to have **full control over styling** and **faster CSS styling process** .

### Reason for choosing ```react-query``` as a fetching library : 
React query provides high-quality UX and DX. It allows us to cache the responses and set cache durations which in turn can and will reduce the calls to the server.  

## User story for end-user
```"As an employee, I want to be recommended a list of professional development goals (e.g, Improve communication skills, Improve team management, etc) that I can select from or customize my own so that I can track them and measure my progress against them"```

### Acceptance criteria:
* Ability to create professional goals
* Page to view all goals
* Ability to add progress towards goals

## App views : 

### Home page (Dashboard):

The dashboard view mimics the feeling of a SaaS dashboard, with a side navbar that only shows the dashboard link for demo purposes. 

A widget for development goals is present to show the progress towards them.
There is also a quick access button to create a new development goal.

### Create new goal:

In this view, you will be able to create a new development goal. suggestions for goal objective are present (which can be fetched from an API ), you can also add a description for the goal itself.

You can also add tasks related to the goal. Tasks can be fetched from an API and for this demo only creating new custom tasks is possible.

The strategy I used to track a goal's progress is with checking finished tasks. Each checked task adds progress towards the goal.


#### I hope you find this demo interesting. for any technical questions please don't hesitate to discuss.

