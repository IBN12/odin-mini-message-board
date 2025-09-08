const main = document.querySelector('main'); 
const title = document.querySelector('h1');
const newLink = document.querySelector('nav > a');
const newPostButton = document.querySelector('.new-post-section > button > svg');
const newPostButtonNonSvg = document.querySelector('.new-post-section > button'); 
const userPostWindow = document.querySelector('.user-post-window'); 
const userPostWindowCloseBtn = document.querySelector('.user-post-window > section:nth-child(1) > svg');
const mssgBoardForm = document.querySelector(".user-post-window > section:nth-child(2) > form");
const submitButton = document.querySelector('.user-post-window > section:nth-child(2) > form > div:nth-child(3) > button');
const nameInput = document.querySelector('.user-post-window > section:nth-child(2) > form > div:nth-child(1) > input');
const mssgInput = document.querySelector('.user-post-window > section:nth-child(2) > form > div:nth-child(2) > textarea'); 

let validNameInput = false;
let validMssgInput = false;  

userPostWindow.classList.add('hide'); 

newPostButton.addEventListener('click', OpenUserPostWindow);

// OpenUserPostwindow(): Will open a window where the user can make a new post. 
function OpenUserPostWindow(e){
    // Disable clickable buttons:
    newPostButton.classList.add('no-click'); 
    newPostButtonNonSvg.disabled = true;
    newLink.classList.add('no-click');  
    newLink.setAttribute("tabindex", "-1"); 
    
    // Enable clickable buttons (These are the clickable buttons in 'New Post' window): 
    userPostWindowCloseBtn.classList.remove('no-click'); 

    // Blur the 'title', 'main', and 'links' sections: 
    main.classList.add('blur'); 
    title.classList.add('blur'); 
    newLink.classList.add('blur');  

    // Peform opertions on the User Post Window:
    userPostWindow.classList.remove('hide'); 
    userPostWindow.classList.remove('close-animation'); 
    userPostWindow.classList.add('open-animation'); 
    nameInput.removeAttribute('tabindex');
    mssgInput.removeAttribute('tabindex'); 
    submitButton.removeAttribute('tabindex');   

    // Close the user post window:
    userPostWindowCloseBtn.addEventListener('click', CloseUserPostWindow);

    // Will submit a new post that the user makes (Small Sanitization and validation process implemented): 
    submitButton.addEventListener("click", ValidatePostEntries); 
}

// CloseUserPostWindow(): Will close the window that allows the user to make a new post. 
function CloseUserPostWindow(e){
    // Perform operations on the User Post Window:
    userPostWindow.classList.add('close-animation'); 
    nameInput.setAttribute('tabindex', '-1'); 
    mssgInput.setAttribute('tabindex', '-1'); 
    submitButton.setAttribute('tabindex', '-1'); 

    // Disable the 'Close User Post Window Button' to prevent glitches:
    userPostWindowCloseBtn.classList.add('no-click'); 

    // Unblur the body of the page:
    title.classList.remove('blur');
    main.classList.remove('blur'); 
    newLink.classList.remove('blur'); 

    // WGO: Will remove the 'open animation' class after 1 sec of close to prevent animation collapse.
    setTimeout(() => {
        userPostWindow.classList.remove('open-animation');    
        userPostWindow.classList.add('hide'); 
    }, 1000);

    // WGO: Will enable certain buttons as clickable again once the 'close animation' finishes. 
    setTimeout(() => {
        newPostButton.classList.remove('no-click');
        newLink.classList.remove('no-click'); 
        newLink.removeAttribute('tabindex'); 
        newPostButtonNonSvg.disabled = false;
    }, 1200);
}

// ValidatePostEntries(): Will perform client-side form validation. 
function ValidatePostEntries(){
    // More common validation browsing testing is needed.  
    let nameTextSpace = nameInput.value;
    nameTextSpace = nameTextSpace.replace(" ", "");

    let mssgTextSpace = mssgInput.value;
    mssgTextSpace = mssgTextSpace.replace(" ", ""); 

    let mssgText = mssgInput.value;
    mssgText = mssgText.replace(/(\r\n|\r|\n)/g, ""); 
    mssgText = mssgText.replace(/(\s\r\n|\s|\r|\n|)/g, "");
    mssgText = mssgText.replace(/(\r\n\s|\r|\n|\s)/g, ""); 

    // Name input validation: 
    if (nameInput.validity.valueMissing)
    {
        nameInput.setCustomValidity("Needs name entry, please enter a name"); 
        validNameInput = false;
    }
    else if (nameTextSpace === "")
    {
        nameInput.setCustomValidity("Needs name entry, please enter a name"); 
        validNameInput = false;
    }
    else
    {
        nameInput.setCustomValidity("");
        validNameInput = true;
    }

    // Message input validation: 
    if (mssgInput.validity.valueMissing)
    {
        mssgInput.setCustomValidity("Needs message entry, please enter a message"); 
        validMssgInput = false;
    }
    else if (mssgText === "")
    {
        mssgInput.setCustomValidity("Needs message entry, please enter a message"); 
        validMssgInput = false;
    }
    else if (mssgTextSpace === "")
    {
        mssgInput.setCustomValidity("Needs message entry, please enter a message"); 
        validMssgInput = false;
    }
    else
    {
        mssgInput.setCustomValidity(""); 
        validMssgInput = true; 
    }

    // initiate form submission: 
    if ((validNameInput) && (validMssgInput))
    {
        SubmitNewPost();  
    }
}

// SubmitNewPost(): Will close the window after the user submits a new post. 
function SubmitNewPost(){
    // The user post window close animation will be initiated after the submission.
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