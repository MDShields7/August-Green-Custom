# August Green Custom Code

## Contents - Tutorials
* [Add a 3d walkthrough to squarespace](#user-content-add-a-3d-walkthrough-to-squarespace)<br/>
* [Add clickable dropdown menus](#user-content-add-clickable-dropdown-menus)<br/>

### Add a 3d walkthrough to squarespace

#### Creating your Marzipano Walkthrough
+  Create a walkthrough on [marzipano.net](https://www.marzipano.net/) ( not covered in this tutorial)</br>

#### Creating your Netlify Site
1.  Create an account at [netlify.com](https://www.netlify.com/)</br>
2.  Go to [Netlify Drag & Drop](https://app.netlify.com/drop). Drag the 'app-files' folder onto the site. FYI: the index.html file should be just inside the folder you drop.</br>
4.  Netlify will automatically build and deploy your site, giving it a random name. I highly recommend changing the site name, so you can keep track of each site easier. Go to settings at the tops, then under Site Details, change site name button.</br>

![Netlify Settings page](https://github.com/MDShields7/August-Green-Custom/blob/master/images/netlify-setting-page.png)<!-- .element width="80%" --><br>

#### Create the Squarespace page
1.  Find the page where you will place the walkthrough. Insert a code block ( under MORE, with </> symbol ).</br>
2.  Delete the placeholder code, and copy the code I made [here](https://github.com/MDShields7/August-Green-Custom/blob/master/3d-walkthrough.html), and paste that code into the squarespace code block.</br>
3.  Go back to your netlify dashboard and click on the link to your site. A new tab should open, showing your walkthrough. Click on the URL, and select all and copy. (Do not change the name of you site after this step.)</br>
6.  Go back to the code block, on line 6 of the code you will see const myURL = ''. Insert your walkthrough's URL here in between the quotes.</br>
7.  Apply changes to the code block, and save the page.</br>

![Squarespace Code Editing](https://github.com/MDShields7/August-Green-Custom/blob/master/images/ss-code-block.png)<!-- .element width="80%" --><br>

+  You can go back and find your [Netlify Dashboard](https://app.netlify.com/) at any time to view, edit or delete websites.</br>

### Add clickable dropdown menus

![Dropdown Accordion Gof](https://github.com/MDShields7/August-Green-Custom/blob/master/images/dropdown.gif)

1.  Insert a markdown section on your squarespace page in the editor.</br>
2.  Place the text you need, using #### before each section, and br tag after each individual line in that section. Follow the \[ Name \]\( link \) pattern for links too. Use my [dropdown markdown example](https://github.com/MDShields7/August-Green-Custom/blob/master/dropdown.md) (make sure to use raw version, click raw in top right).</br>
3.  Apply changes, and save page.</br>
4.  In editor pages manu, click the settings gear for that page. Go to advanced, and insert this [dropdown script](https://github.com/MDShields7/August-Green-Custom/blob/master/dropdown.html), and close.</br>
5.  If it doesn't work, check to make sure you have 4  pound signs with a space before the text. The script targets h4 tags, which correlates to '#### Title' in the markdown file. 