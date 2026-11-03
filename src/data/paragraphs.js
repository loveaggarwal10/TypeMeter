// All the paragraphs used in the typing test, grouped by difficulty.

export const paragraphs = {
  easy: [
    
  "Every morning is a new chance to learn something useful and make our lives better. We should always try to improve ourselves by reading books, learning new skills, and spending time with people who make us happy. Small steps taken every day can help us achieve big goals in the future. The most important thing is to stay positive and never stop trying.",

  "Life is full of beautiful moments, but sometimes we become so busy that we forget to enjoy them. Spending time with family, talking to friends, playing games, and visiting new places can make us feel happy. We should take care of our health and give ourselves enough time to rest. A happy life is not about having everything, but about enjoying what we already have.",

  "College life is one of the most exciting parts of being a student. We meet new people, make friends, learn different subjects, and take part in many activities. Every day brings a new lesson and a new experience. Sometimes studies become difficult, but with regular practice and support from friends, we can solve most problems and move towards our dreams.",

  "The world around us is changing every day. New machines, better phones, and faster computers have made many tasks easier. People can now study online, talk to friends from different countries, and learn new things without leaving their homes. Technology has become an important part of our daily lives, and learning how to use it wisely can help us in many ways.",

  "A good friend is someone who stays with us during both happy and difficult times. Friends share their thoughts, help each other, and create memories that remain special for many years. We should always respect our friends, listen to their problems, and support them whenever possible. True friendship is not about how many friends we have, but about how much we care for each other."

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
