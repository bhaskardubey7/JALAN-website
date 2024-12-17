// Function to close the floating help box when the cross icon is clicked
function closeHelp() {
    const helpBox = document.querySelector('.floating-help');
    helpBox.style.opacity = '0';
    helpBox.style.transform = 'translateY(50px)';
    setTimeout(() => {
        helpBox.style.display = 'none';  // Hide the box after the animation
    }, 300);  // Match the time of the animation for smooth transition
}
