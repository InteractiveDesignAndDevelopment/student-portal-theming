# Student Portal Theming

Out of the box, the portal is very blue.
This changes that.

This is targeting version 18.3.0.65


## Instructions for using this repo 
_For modifying files after a Portal Upgrade_

### Tools
- npm
- text editor (VSCode recommended)
- Bash shell recommended
- access to respective Web Roots on Share drive

### Steps
1. Clone repo
2. npm install
3. install npm extension in VS Code 
4. add new files from CMC to /in 
   - From [Portal Web Root]/Public/global/css/: add main.css, bootstrap.css, bootstrap_custom.css to /in/portal/
   - From [StaffSTS Web Root]/Styles: add signin.css to /in/staff/
   - From [StudentSTS Web Root]/Public/global/css/: add main.css, bootstrap.css, bootstrap_custom.css to /in/student/
5. In text editor, modify files in  /scss only
6. modify bootstrap_custom if you want to override styles essentially anywhere (it applies an !important tag)
7. npm: Run Script > Build (npm run-script run-s build)
8. new CSS files will be written in the /out directory

## Instructions for installation of /out files 
_After files have been modified by processes outlined above._ 

### Tools
- /out files from previous steps
- access to respective Web Roots on Share drive

### Steps
1. **CSS:** Copy and paste /out CSS files to their respective directories
2. **Images**
3. **Fonts**