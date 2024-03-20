function sendHelpCommand() {
  // Find the message input field in the DOM
  let messageBox = document.querySelector('div[contenteditable="true"]');

  // Focus the message input field
  messageBox.focus();

  // Create a new event for inputting text
  const textEvent = new Event('input', {
    bubbles: true,
    cancelable: true,
  });

  // Set the message
  messageBox.textContent = '/help';

  // Dispatch the input event
  messageBox.dispatchEvent(textEvent);

  // Create a new event for pressing Enter
  const keydownEvent = new KeyboardEvent('keydown', {
    bubbles: true,
    cancelable: true,
    key: "Enter"
  });

  // Dispatch the keydown event (Enter key press)
  messageBox.dispatchEvent(keydownEvent);
}

// Call sendHelpCommand twice
sendHelpCommand()
sendHelpCommand()
