# AI Reflections

Going through the modules for week 11 couldn't figure out where the components
for PhotoDetails and PhotoEdit came from. I'm pretty sure that I heard the professor say that he asked AI to generate those and so did I with the follow prompt.

`For my projects I need two additional components, MealDetails and MealEdit. The MealDetails needs to show the meal name, the image, and the description. For now I just need a page to land on for edit and will add more code later. Please build those componets and let me know if you need to make any changes to any other files. `

The AI built the two components and included navigational links to go back to the history page and details page, very helpful AI! I did have to change the param lookup to use watch instead of computed. 

I asked the AI to build out the form on the edit page and had to follow up with a request to redirect to the details page after sumbit.

`On the @src/components/MealEdit.vue add form functionality to update the mealName, Description, and image url using v-model for two way input binding. @sumit.prevent to keep the control in Vue and use watch to keep the form state in syn when the id changes`

I realized that I wasn't using methods in my mealData.ts service so I asked AI to refactor the Details page. 