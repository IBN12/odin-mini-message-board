const main = document.querySelector('main'); 
const title = document.querySelector('h1');
const newPostButton = document.querySelector('.new-post-section > button > svg');
const newPostButtonNonSvg = document.querySelector('.new-post-section > button'); 
const userPostWindow = document.querySelector('.user-post-window'); 
const userPostWindowCloseBtn = document.querySelector('.user-post-window > section:nth-child(1) > svg');
const submitButton = document.querySelector('.user-post-window > section:nth-child(2) > form > div:nth-child(3) > button');

userPostWindow.classList.add('hide'); 

newPostButton.addEventListener('click', OpenUserPostWindow);

// OpenUserPostwindow(): Will open a window where the user can make a new post. 
function OpenUserPostWindow(e){
    // Disable clickable buttons:
    newPostButton.classList.add('no-click'); 
    newPostButtonNonSvg.disabled = true;

    // Enable clickable buttons:
    userPostWindowCloseBtn.classList.remove('no-click'); 

    // Blur the 'title' and 'main' sections: 
    main.classList.add('blur'); 
    title.classList.add('blur'); 

    // Peform opertions on the User Post Window:
    userPostWindow.classList.remove('hide'); 
    userPostWindow.classList.remove('close-animation'); 
    userPostWindow.classList.add('open-animation'); 

    userPostWindowCloseBtn.addEventListener('click', CloseUserPostWindow);
    submitButton.addEventListener('click', SubmitNewPost);
}

// CloseUserPostWindow(): Will close the window that allows the user to make a new post. 
function CloseUserPostWindow(e){
    // Perform operations on the User Post Window:
    userPostWindow.classList.add('close-animation'); 

    // Disable the 'Close User Post Window Button' to prevent glitches:
    userPostWindowCloseBtn.classList.add('no-click'); 

    // Unblur the body of the page:
    title.classList.remove('blur');
    main.classList.remove('blur'); 

    // WGO: Will remove the 'open animation' class after 1 sec of close to prevent animation collapse.
    setTimeout(() => {
        userPostWindow.classList.remove('open-animation');    
        userPostWindow.classList.add('hide'); 
    }, 1000);

    // WGO: Will enable certain buttons as clickable again once the 'close animation' finishes. 
    setTimeout(() => {
        newPostButton.classList.remove('no-click');
        newPostButtonNonSvg.disabled = false;
        console.log('New Post Button: ', newPostButton); // Testing 
        console.log('New Post Button: ', newPostButtonNonSvg); // Testing  
        console.log('\n'); // Testing 
    }, 1200);
}

// SubmitNewPost(): Will close the window after the user submits a new post. 
function SubmitNewPost(){
    userPostWindow.classList.add('close-animation'); 

    // Remove the blur from 'title' and 'main' sections.
    title.classList.remove('blur');
    main.classList.remove('blur'); 

    // Disable the 'Close User Post Window Button' to prevent glitches.
    userPostWindowCloseBtn.classList.add('no-click'); 

    // WGO: Will remove the 'open animation' class after 1 sec of close to prevent animation collapse.
    setTimeout(() => {
        userPostWindow.classList.remove('open-animation'); 
        userPostWindow.classList.add('hide'); 
    }, 1000);

    // WGO: Will enable certain buttons as clickable again once the 'close animation' finishes. 
    setTimeout(() => {
        newPostButton.classList.remove('no-click');
        newPostButtonNonSvg.disabled = false;
    }, 1200); 

}