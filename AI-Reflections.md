# AI Reflections

Going through the modules for week 11 couldn't figure out where the components
for PhotoDetails and PhotoEdit came from. I'm pretty sure that I heard the professor say that he asked AI to generate those and so did I with the follow prompt.

`For my projects I need two additional components, MealDetails and MealEdit. The MealDetails needs to show the meal name, the image, and the description. For now I just need a page to land on for edit and will add more code later. Please build those componets and let me know if you need to make any changes to any other files. `

The AI built the two components and included navigational links to go back to the history page and details page, very helpful AI! I did have to change the param lookup to use watch instead of computed. 

I asked the AI to build out the form on the edit page and had to follow up with a request to redirect to the details page after sumbit.

`On the @src/components/MealEdit.vue add form functionality to update the mealName, Description, and image url using v-model for two way input binding. @sumit.prevent to keep the control in Vue and use watch to keep the form state in syn when the id changes`

I realized that I wasn't using methods in my mealData.ts service so I asked AI to refactor the Details page. After that I asked AI to create helper methods (updateMeal and deleteMeal) on the edit page.

`Now add a method deleteMeal to handle deletion. Use confirm() so that the user is sure they want to delete that meal. After deletion redirect to the gallery page instead of the detials page.`

With very little prompting I'm getting great results. Which is very exciting but I can't help but feel some dread for the future.

After the first deployment to render I found an issue when I deleted a meal that the page only returned a not "not found" message. I explained the issue to the AI and it implemented some changes. It suggested using router.replace instead of .push. It also suggested building in a successful delete message that goes away after 5 seconds. 

After the main functionality was implemented in render I wanted to have a little fun an build a healthiness ranking with donuts and gave the AI this prompt in planning mode.

`I want to add the funtionality to give each meal a healthRank. Similar to a movie rating functionality, unstead of stars I want to use the donut image I'm using as a favicon. I want the user to be able to rank the meal on the gallery page and detail page. How could I do that?`

After looking over the plan I let the AI implement the plan and it worked pretty well needed only a few tweaks. 