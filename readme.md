# August Green Custom Code

## Tutorial: How to add a 3d Walkthrough from Marzipano

### Creating your Marzipano Walkthrough
+  Create a walkthrough on [marzipano.net](https://www.marzipano.net/) ( not covered in this tutorial)</br>

### Creating your Netlify Site
1.  Create an account at [netlify.com](https://www.netlify.com/)</br>
2.  Go to [Netlify Drag & Drop](https://app.netlify.com/drop). Drag the 'app-files' folder onto the site. FYI: the index.html file should be just inside the folder you drop.</br>
4.  Netlify will automatically build and deploy your site, giving it a random name. I highly recommend changing the site name, so you can keep track of each site easier. Go to settings at the tops, then under Site Details, change site name button.</br>

![Netlify Settings page](https://github.com/MDShields7/August-Green-Custom/blob/master/images/netlify-setting-page.png "Setting page")<br>

### Create the Squarespace page
1.  Find the page where you will place the walkthrough. Insert a code block ( under MORE, with </> symbol ).</br>
2.  Delete the '<p>Hello, World!</p>', and copy the code I made [here](https://github.com/MDShields7/August-Green-Custom/blob/master/3d-walkthrough.html), and paste that code into the squarespace code block.</br>
3.  Go back to your netlify dashboard and click on the link to your site. A new tab should open, showing your walkthrough. Click on the URL, and select all and copy. (Do not change the name of you site after this step.)</br>
6.  Go back to the code block, on line 6 of the code you will see const myURL = ''. Insert your walkthrough's URL here in between the quotes.</br>
7.  Apply changes to the code block, and save the page.</br>

![Squarespace Code Editing](https://github.com/MDShields7/August-Green-Custom/blob/master/images/ss-code-block.png "Setting page")<br>

+  You can go back and find your [Netlify Dashboard](https://app.netlify.com/) at any time to view, edit or delete websites.</br>