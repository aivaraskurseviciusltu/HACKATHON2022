import AllClosedChallenges from "./AllChallenges/AllChallenges";

const mockData = [
  {
    title: "Challenge - 'The best way out is always through.'",
    duration: 50,
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
    title: "Challenge - 'There is a way to do it better - find it.'",
    duration: 30,
    startDate: "2022-12-29",
    users: [
      {
        name: "Algirdas",
        surname: "Rusteika",
        learnings: [
        ],
      },
      {
        name: "Alius",
        surname: "Petraska",
        learnings: [
        ],
      },
      {
        name: "Audrius",
        surname: "Ramanauskas",
        learnings: [
        ],
      },
      {
        name: "Aurimas",
        surname: "Jocys",
        learnings: [
        ],
      },
      {
        name: "Aurimas",
        surname: "Zaleckas",
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