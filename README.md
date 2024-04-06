101356431 - Stefan Kepinski
Lab Test 2

Below is the service.ts page that contains my routes for pulling from the spacex API. There is a route for all launches, details for one, filtering by year, and filtering by flight number.
![api-backend](https://github.com/stefk13/101356431-lab-test2-comp3133/assets/123743947/8dd8d933-ad97-4634-975a-7e174593925e)

Below are the mission details html and backend. The backend imports the items needed such as CommonModule, which allows you to use elements in the HTML such as *ngIf. It also exports the component so it can get used.
The HTML is pretty straight forward. div and elements for displaying description of the flight, which gets pulled in the mission list portion.
![missiondetails-html](https://github.com/stefk13/101356431-lab-test2-comp3133/assets/123743947/95fe133b-9c0b-48b1-9f0a-86be0e2d7204)
![missiondetails-backend](https://github.com/stefk13/101356431-lab-test2-comp3133/assets/123743947/2fccf71c-6b55-4b8f-bbe7-103ddf2ff5f0)

Below are the mission list html and backend. The backend imports the items needed such as CommonModule, SpaceXApiService (backend for connecting to API), MissionDetails so that it can get used, and FormsModule so that we can create forms.
This is also where all the code for fetching the data pulled from the API is. The HTML then takes that data and displays it. 
![missionlist-html](https://github.com/stefk13/101356431-lab-test2-comp3133/assets/123743947/a0a2b5c7-5ba4-4e24-9190-7378437e4cc1)
![missionlist-backend](https://github.com/stefk13/101356431-lab-test2-comp3133/assets/123743947/3a7571a1-eb93-40c4-a1b0-3028a644aed8)

Example of what clicking on a flight from the list looks like. 
![clicking_on_list_details](https://github.com/stefk13/101356431-lab-test2-comp3133/assets/123743947/e39672e1-cf98-437f-8b31-22764c9b4a82)

Example of searching by flight, then clicking on the item return
![filer_by_flight](https://github.com/stefk13/101356431-lab-test2-comp3133/assets/123743947/d30f10df-9698-442e-91d3-1e6366843f6c)

Exmaple of filtering by year, then clicking on one of the items returned.
![filter_by_year](https://github.com/stefk13/101356431-lab-test2-comp3133/assets/123743947/0511109a-c42d-4271-b920-ff626838bb68)

I tried multiple different combinations of set up in the deployment portion on Vercel and had no luck. I tried deploying on another site that was supposed to let you just drop the dist folder in after doing ng build, and that also did not work. 
![deployment_attempt](https://github.com/stefk13/101356431-lab-test2-comp3133/assets/123743947/176788f5-558c-40c2-b46f-f3709c9872d7)
![vercel_attempt_failed](https://github.com/stefk13/101356431-lab-test2-comp3133/assets/123743947/d2ceeb27-5b5a-4b09-b9a6-5205c3b0b6d1)
