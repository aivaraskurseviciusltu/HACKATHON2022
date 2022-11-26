import AllClosedChallenges from "./AllChallenges/AllChallenges";

const mockData = [
    {
    title: "Java Developer Challenge",
    duration: 60,
    startDate: "2022-10-29",
    users: [
      {
        name: "John",
        surname: "Doe",
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
        name: "Jane",
        surname: "Doe",
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
    title: "HR Challenge",
    duration: 30,
    startDate: "2022-12-29",
    users: [
      {
        name: "John",
        surname: "Doe",
        learnings: [
        ],
      },
      {
        name: "Jane",
        surname: "Doe",
        learnings: [
        ],
      },
      {
        name: "John",
        surname: "Doe",
        learnings: [
        ],
      },
      {
        name: "Jane",
        surname: "Doe",
        learnings: [
        ],
      },
    ],
  }
];

const Challenges = () => {
  return (
    mockData.map((item, index) => 
        <AllClosedChallenges data={item} key={index}/>
    )
  );
};

export default Challenges;