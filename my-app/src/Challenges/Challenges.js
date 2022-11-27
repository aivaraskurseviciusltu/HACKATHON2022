import AllClosedChallenges from "./AllChallenges/AllChallenges";

const mockData = [
  {
    title: "Challenge - 'Let's go !'",
    duration: 56,
    startDate: "2022-10-29",
    users: [
      {
        name: "Aivaras",
        surname: "Kursevicius",
        learnings: [
          {
            title: "Learning JS",
            duration: 2,
            startDate: "2022-11-20",
            endDate: "2022-11-25",

          },
          {
            title: "Learning JS",
            duration: 6,
            startDate: "2022-11-20",
            endDate: "2022-11-25",

          },
        ],
      },
      {
        name: "Audrius",
        surname: "Burkauskas",
        learnings: [
          {
            title: "Learning JS",
            duration: 25,
            startDate: "2022-11-20",
            endDate: "2022-11-25",

          },
          {
            title: "Learning JS",
            duration: 6,
            startDate: "2022-11-20",
            endDate: "2022-11-25",

          },
        ],
      },
    ],
  },
  {
    title: "Challenge - 'Lets see who's best'",
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
        name: "Matas",
        surname: "Dregva",
        learnings: [
        ],
      },
      {
        name: "Aurimas",
        surname: "Zedelis",
        learnings: [
        ],
      },
      {
        name: "Kasparas",
        surname: "Andrikys",
        learnings: [
        ],
      },
      {
        name: "Marius",
        surname: "Gliaudelis",
        learnings: [
        ],
      },
      {
        name: "Oleg",
        surname: "Valujev",
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