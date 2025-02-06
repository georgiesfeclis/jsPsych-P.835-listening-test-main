/*

EXPERIMENT CONFIGURATION FILE: 

Here's the configuration file, to modify the parameters of the experiment.

*/

// ISI between the slider response and the sound listening
const ISI = 250;

// for the instructions
const CONSIGNE1 =
  "Please take a moment to carefully read through the instructions on the upcoming pages before starting the experiment.";

// prompt of the main instructions of each subtest
const PROMPT1 =
  "Based only on the quality of the <b>SPEECH SIGNAL</b> you hear, select the category that best describes it.</p> Play audio again if necessary.</p>";
const PROMPT2 =
  "Based only on the <b>BACKGROUND</b> intrusiveness you hear, select the category that best describes it.</p> Play audio again if necessary.</p>";
const PROMPT3 =
  "Based on the quality of the <b>OVERALL SPEECH SAMPLE</b> you hear, select the category that best describes it.</p> Play audio again if necessary.</p>";

// preprompt for the defferent scales before listening to the sound
const PREPROMPT1 =
  "<p>Play the audio, and listen carefully to the <b>SPEECH SIGNAL</b>.</p> <p>Evaluate <b>ONLY</b> the <b>SPEECH SIGNAL</b></p>";
const PREPROMPT2 =
  "<p>Play the audio, and listen carefully to the <b>BACKGROUND</b> sound.</p> <p>Evaluate <b>ONLY</b> the <b>BACKGROUND</b></p>";
const PREPROMPT3 =
  "<p>Play the audio, and listen carefully to the <b>OVERALL SPEECH SAMPLE</b>.</p> <p> Evaluate <b>BOTH</b> the <b>SPEECH SIGNAL</b> and the <b>BACKGROUND</b></p>";

// the labels of the first task
const LABELS1 = [
  "1: Very distorted, very unnatural",
  "2: Fairly distorted, fairly unnatural",
  "3: Somewhat distorted, somewhat unnatural",
  "4: Slightly distorted, fairly natural",
  "5: Not distorted, very natural",
];
const LABELS2 = [
  "1: Very intrusive",
  "2: Somewat intrusive",
  "3: Noticeable but not intrusive",
  "4: Slightly noticeable",
  "5: Not noticeable",
];
const LABELS3 = ["1: Bad", "2: Poor", "3: Fair", "4: Good", "5: Excellent"];
