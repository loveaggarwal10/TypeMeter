// All the paragraphs used in the typing test, grouped by difficulty.

export const paragraphs = {
  easy: [
    "The sun rises in the east and brings a beautiful new day. Every morning gives us a fresh chance to learn something new and work towards our dreams.",
    "Reading books is a good habit. It improves our knowledge, develops our imagination and helps us understand the world in a better way.",
    "Practice makes a person better. Small efforts every day can create big improvements over time. Never stop learning and trying new things.",
  ],

  medium: [
    "Technology has changed the way people communicate, work and learn. Computers and the internet have made information easily available to everyone.",
    "Time management is an important skill for students. Planning daily activities helps us complete our tasks efficiently and achieve our goals.",
    "Learning programming requires patience and regular practice. Writing code, finding mistakes and solving problems improve our logical thinking.",
  ],

  hard: [
    "Modern software development requires creativity, problem-solving skills and a strong understanding of programming principles. Developers continuously improve their applications.",
    "Artificial intelligence is transforming industries through automation, intelligent systems and data-driven decisions. Responsible development remains extremely important.",
    "A successful programmer understands that debugging is an essential part of development. Careful analysis helps identify errors and produce reliable solutions.",
  ],
};

// Pick one random paragraph for the given difficulty.
export function getRandomParagraph(difficulty) {
  const list = paragraphs[difficulty];
  return list[Math.floor(Math.random() * list.length)];
}
