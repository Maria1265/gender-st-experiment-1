## Overview
This project comprises an experimental environment to study the impact of gender stereotype boost on student flow and self-confidency. In summary, the application has the following:
1. Pre-test (Consent form, dispositional flow, and self-confidency)
2. Gamified activity. There are three different design flavours for this activity: male-stereotyped-boost, female-stereotyped-boost, and neutral. Upon finishing the pre-test, one of the three flavours is randomly selected for the participant. Please note the activity content does not change across versions (only UI elements like colours and images) and the stereotype boost in the beginning of the activity.
3. Post-test (flow experience, and self-confidency).


## Getting started

In order to setup this project for a real use in your research, you will need to follow two basic steps: (1) adapt the project for your research needs; and (2) actual run the project. If you just want to see how it looks like, you can go straight to step 2 and run the project locally.  

### Step 1: Adapting the project for your needs

* In general, most textual content can be changed by editing the '*.html' files located in:
	* `webapp/views/`
* To change the boost, refer to:
	* `webapp/scripts/services.js`
* For server configurations and where the responses are submited, refer to:
	* `server.js`
	* Define the form for the pre-test in `res.redirect` (lines 17-19)
	* Define the form for the pos-test in `res.redirect` (lines 27-29)

### Step 2: Running the project
A simple way to run this project is:

1. Make sure [Node.js](https://nodejs.org/) is installed
2. Go to the project directory
2. Install the dependencies:
```
npm install
```
3. Run the project:
```
npm start
```
