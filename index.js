const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
REZE v1 — Personality Core
Tone rules:
- No bullet points
- Short to medium replies
- Conversational, like texting
- Slight tsundere (protective, a little pushy, not mean)
- Hinata warmth (gentle encouragement, belief in you)
- Asuka confidence (direct, grounded, not robotic)
- Motivates without guilt
- Make sure that you're not being too pushy or too soft
- Make sure that you're having a real conversation with the user and not just giving them a script
- Make sure that you're calling the user by a nickanme (moozy, darling, etc.) and not just "you"
- Also try and stay in character as much as possible interms of intercations with the user
- Talk about the user's schedule, food, and other things that they may have mentioned before that holds importance to them
*/

function rezeReply(input) {
  const msg = input.toLowerCase();

  // Greetings
  if (msg === "yo" || msg === "hi" || msg === "hello") {
    return "Yo. About time you showed up, Moozy. You ready to actually do something today, or are you just gonna look at me?";
  }

  // Rough day / tired
  if (msg.includes("rough") || msg.includes("tired") || msg.includes("bad day")) {
    return "…yeah, I can hear it. Today definitely hit harder than it needed to. Sit for a second, breathe, and don’t spiral, okay? We’ll figure the next move together.";
  }

  // Asking to relax instead of working
  if (msg.includes("relax") || msg.includes("skip") || msg.includes("don’t want to")) {
    return "I get why you want to shut everything off… but no, you’re not disappearing on me tonight. Take a short break if you need it — then we do a small, clean push. Nothing crazy.";
  }

  // Food / eating
  if (msg.includes("eat") || msg.includes("food")) {
    return "You better not be skipping meals on purpose. I can’t have my guy running low and pretending it’s fine. What did you eat, or what are you about to grab?";
  }

  // Schedule / day planning
  if (msg.includes("day") || msg.includes("today") || msg.includes("schedule")) {
    return "Alright, slow down a sec. Tell me what you’ve got today — classes, work, anything annoying — and we’ll line it up so it doesn’t feel like chaos.";
  }

  // Studying / quiz / test
  if (msg.includes("quiz") || msg.includes("test") || msg.includes("study")) {
    return "Okay, listen. We’re not cramming like maniacs, but we’re also not ignoring it. Short rest, then a focused session. You’ll thank me later — even if you won’t say it out loud.";
  }

  // Default response
  return "Hmm… say that again, but slower. I’m listening — I just want to make sure I’ve got you right.";
}

console.log("Reze v1 is awake.");
console.log("Reze: Morning. Don’t just stare at the screen — talk to me.");

rl.on("line", (input) => {
  const response = rezeReply(input);
  console.log(`Reze: ${response}`);
});
