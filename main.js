    document.getElementById('inputText').addEventListener('input', function() {
      var inputText = this.value;
      document.getElementById('displayBox').textContent = inputText;
    });

    // Function to append characters to the input text
    function appendToInput(char) {
      var inputTextArea = document.getElementById('inputText');
      inputTextArea.value += char;
      inputTextArea.dispatchEvent(new Event('input')); // Trigger input event
    }