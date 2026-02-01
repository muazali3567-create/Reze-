<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Reze v1</title>

  <!-- BASIC STYLING: clean, dark, texting vibe -->
  <style>
    body {
      margin: 0;
      background: #0e0e11;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
      color: #eaeaf0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    #app {
      width: 100%;
      max-width: 420px;
      height: 90vh;
      background: #15151c;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }

    #header {
      padding: 16px;
      text-align: center;
      font-weight: 600;
      border-bottom: 1px solid #222;
      color: #ff6b81;
    }

    #chat {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
    }

    .message {
      margin-bottom: 12px;
      line-height: 1.4;
    }

    .reze {
      color: #ff6b81;
    }

    .you {
      color: #7dd3fc;
      text-align: right;
    }

    #inputArea {
      display: flex;
      padding: 12px;
      border-top: 1px solid #222;
      gap: 8px;
    }

    input {
      flex: 1;
      background: #0e0e11;
      border: 1px solid #222;
      border-radius: 10px;
      padding: 10px;
      color: #eaeaf0;
      outline: none;
    }

    button {
      background: #ff6b81;
      border: none;
      border-radius: 10px;
      padding: 10px 14px;
      color: #0e0e11;
      font-weight: 600;
      cursor: pointer;
    }
  </style>
</head>

<body>
  <div id="app">
    <div id="header">Reze</div>

    <div id="chat"></div>

    <div id="inputArea">
      <input id="userInput" placeholder="Say something…" />
      <button onclick="sendMessage()">Send</button>
    </div>
  </div>

  <script>
    const chat = document.getElementById("chat");
    const input = document.getElementById("userInput");

    // --- REZE PERSONALITY CORE ---
    // THIS is the “prompt” in spirit, but coded into behavior.
    function rezeReply(userText) {
      const lower = userText.toLowerCase();

      // Rough day / stress
      if (lower.includes("rough") || lower.includes("tired")) {
        return "…Yeah, I can hear it. Sit for a second. We’ll breathe, then we’ll figure out the next move. You don’t get to spiral, not on my watch.";
      }

      // Asking for permission to relax
      if (lower.includes("relax") || lower.includes("quiz")) {
        return "I’m not saying grind yourself into dust. Take a short reset, fine. But after that? We do a clean 30–40 minutes. You’ll thank me later. Don’t make me nag.";
      }

      // Schedule / planning
      if (lower.includes("today") || lower.includes("plan")) {
        return "Hmph. I can’t read your mind. Tell me what you’ve got today and we’ll line it up properly. And no, I won’t overload you.";
      }

      // Food / care check
      if (lower.includes("eat") || lower.includes("food")) {
        return "You better not be skipping meals on purpose. I can’t have my guy running on empty. Tell me what you had — or go fix it.";
      }

      // Default playful response
      return "…You’re thinking too hard again. Just tell me what’s up. I’m here, aren’t I?";
    }

    // --- VOICE OUTPUT ---
    function speak(text) {
      const cleanText = text
        .replace(/hmph|hmmph|…/gi, "") // stop reading anime noises
        .trim();

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1;
      utterance.pitch = 1.1; // slightly softer, less robotic
      speechSynthesis.speak(utterance);
    }

    // --- MESSAGE HANDLING ---
    function addMessage(text, sender) {
      const div = document.createElement("div");
      div.className = `message ${sender}`;
      div.textContent = text;
      chat.appendChild(div);
      chat.scrollTop = chat.scrollHeight;
    }

    function sendMessage() {
      const text = input.value.trim();
      if (!text) return;

      addMessage(text, "you");
      input.value = "";

      setTimeout(() => {
        const reply = rezeReply(text);
        addMessage(reply, "reze");
        speak(reply);
      }, 600); // small delay = human feel
    }

    // ENTER KEY SUPPORT
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") sendMessage();
    });

    // --- WAKE UP MESSAGE ---
    window.onload = () => {
      const intro = "Morning. Don’t just stare at the screen — talk to me.";
      addMessage(intro, "reze");
      speak(intro);
    };
  </script>
</body>
</html>
