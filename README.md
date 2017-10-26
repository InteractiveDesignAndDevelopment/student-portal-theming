# Student Portal Theming

Out of the box, the portal is very blue.
This changes that.

This is targeting version 18.3.0.65


## Instructions for using this repo 
_For modifying files after a Portal Upgrade_

### Tools
- npm
- text editor (VSCode recommended)
- Bash shell (recommended)
- access to respective Web Roots on train/production servers

### Steps
1. Clone repo
2. Install NPM in the repository you cloned in step 1.
3. Add new files from CMC to `/src` 
   - From `[Portal Web Root]/Public/global/css/`: add `main.css`, `bootstrap.css`, `bootstrap_custom.css` to `/src/originals/portal/*`
   - From `[StaffSTS Web Root]/Styles`: add `signin.css` to `/src/originals/staff/*`
   - From `[StudentSTS Web Root]/Public/global/css/`: add `main.css`, `bootstrap.css`, `bootstrap_custom.css` to `/src/originals/student/*`
   - Images may be updated in `/src/images` **Note::** Take care to change file names in package.json if image source files change. 
   - Fonts may be updated in `/src/fonts` **Note::** Take care to change file names in package.json if font source files change. 
4. In text editor, *ONLY modify files in `/src/scss`*
   - **Note:** Modify `bootstrap_custom.scss` if you want to override styles essentially anywhere (it applies an `!important` tag)
5. In your cli, run `npm run-script run-s build` (If you have installed npm extension in VS Code, NPM Script > Build) 
6. Locate new CSS, Image, and Font files, which will be written in the `/build` directory, which should mimic the directory structure of each respective Web Root. 
7. Copy and paste `/build` CSS files/directories to a Share Drive

## Instructions for installation of /out files 
_After files have been modified by processes outlined above._ 

### Tools
- `/build` files from previous steps
- A Comparison tool suite, like [Beyond Compare](https://www.scootersoftware.com/)
- access to respective Web Roots on train/production servers

### Steps
1. Open your comparison tool. 
2. Select "Session > New Session > Folder Merge"
3. **For Portal:** 
   - Compare the `/build/portal` files to the [Portal web root]. 
   - On the line where it says "Merge to:", Select the [Portal web root]. 
   - Select the line comparing `[Portal web root]/Public/` to `build/portal/Public/`.
   - Copy to Left.
   - Hard refresh the page to ensure correct changes were applied.
4. **For Student:** 
   - Compare the `/build/student` files to the [Student web root]. 
   - On the line where it says "Merge to:", Select the [Student web root]. 
   - Select the line comparing `[Student web root]/Public/` to `build/student/Public/`.
   - Copy to Left.
   - Hard refresh the page to ensure correct changes were applied.
5. **For Staff:** 
   - Compare the `/build/staff` files to the [Staff web root]. 
   - On the line where it says "Merge to:", Select the [Staff web root]. 
   - Select the line comparing `[Staff web root]/Styles/` to `build/staff/Styles/`.
   - Copy to Left.
   - Hard refresh the page to ensure correct changes were applied.   
6. Profit.
