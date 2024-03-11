# Visual Pinger

## Overview

Visual Pinger is a Chrome extension designed to detect Questions on the Expert page of the Chegg Expert webisite.

### Prerequisites

- Google Chrome browser installed on your machine.
- A Telegram bot with a valid token obtained from BotFather.
- The Telegram chat ID of the user to receive notifications.

### Installation

1. Clone the repository or download the project files to your local machine.

```bash
git clone https://github.com/dwanerichard/visual-pinger.git
```

2. Open Google Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" in the top-right corner.

4. Click on "Load unpacked" and select the directory where you cloned/downloaded the project.

### Configuration

1. Open the `background.js` file and replace the placeholder values in the `tg` object with your Telegram bot token and chat ID.

```javascript
const tg = {
  token: "YOUR_TELEGRAM_BOT_TOKEN",
  chat_id: "YOUR_TELEGRAM_CHAT_ID",
};
```

2. Customize the `sendMessage` function if needed, e.g., modify the notification message.

```javascript
function sendMessage(text) {
  // Customize the message format if necessary
  const obj = {
    chat_id: tg.chat_id,
    text: text,
  };
  // ... rest of the function
}
```

3. Adjust the `inform` function logic if needed, e.g., modify the class name used for detecting questions.

```javascript
function inform() {
  var temp = document.getElementsByClassName("YOUR_QUESTION_CLASS_NAME");
  // ... rest of the function
}
```

### Usage

1. After installing the extension, navigate to the target website (e.g., `https://expert.chegg.com/qna/authoring/answer`).

2. The extension will automatically run in the background and check for questions every 30 seconds (adjustable via `setTimeout` in `background.js`).

3. If a question is detected, a notification will be sent to the specified Telegram chat.