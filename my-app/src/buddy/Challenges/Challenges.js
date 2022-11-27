import AllClosedChallenges from "./AllChallenges/AllChallenges";

const mockData = [
  {
    title: "Challenge - 'Warm Winter Welcome!'",
    duration: 48,
    startDate: "2022-10-29",
    users: [
      {
        name: "Aivaras",
        surname: "Kursevicius",
        learnings: [
          {
            title: "Learning JS",
            duration: 1,
            startDate: "2022-11-20",
            endDate: "2022-11-25",

          },
        ],
      },
      {
        name: "Audrius",
        surname: "Burkauskas",
        learnings: [
          
        ],
      },
    ],
  },
  {
    title: "Challenge - 'Lead by example'",
    duration: 30,
    startDate: "2022-12-29",
    users: [
      {
        name: "Aivaras",
        surname: "Stanaitis",
        learnings: [
        ],
      },
      {
        name: "Algirdas",
        surname: "Rusteika",
        learnings: [
        ],
      },
      {
        name: "Migle",
        surname: "Ankstutyte",
        learnings: [
        ],
      },
      {
        name: "Vytautas Ginteris",
        surname: "Andrikys",
        learnings: [
        ],
      },
      {
        name: "Arnas Siaudvytis",
        surname: "Gliaudelis",
        learnings: [
        ],
      },
      {
        name: "Mindaugas",
        surname: "Ramanauskas",
        learnings: [
        ],
      },
    ],
  }
];

const Challenges = () => {
  return (
    mockData.map((item, index) =>
      <AllClosedChallenges data={item} key={index} color={index === 0 ? 'violet' : 'yellow'}/>
    )
  );
};

export default Challenges;