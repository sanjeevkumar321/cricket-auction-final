import React from "react";
import ConfettiPopper from "./ConfettiPopper";
// import SchoolPridePopper from "./SchoolPridePopper";

export const LiveAuction = () => {
  // const { user } = useUser();

  const [currentValue, setCurrentValue] = React.useState(10);

  const [teamsValue, setTeamsValue] = React.useState([
    { id: 1, name: "DiggiRampage 11", value: 0 },
    { id: 2, name: "Diggi Strikes XI", value: 0 },
    { id: 3, name: "Byte Blasters", value: 0 },
  ]);

  const playersList = [
    { id: 1, name: "Sharan Kumar D", role: "Batsmen" },
    { id: 2, name: "Mahananda", role: "Batsmen" },
    { id: 3, name: "Potturi Tulasiram", role: "Batsmen" },
    { id: 4, name: "Divakar C", role: "Batsmen" },
    { id: 5, name: "Sujan kiran J", role: "Batsmen" },
    { id: 6, name: "Yashas R Reddy", role: "Allrounder" },
    { id: 7, name: "Tanna Manohar", role: "Allrounder" },
    { id: 8, name: "Vikash Kumar", role: "Allrounder" },
    { id: 9, name: "Rahul Kumar", role: "Allrounder" },
    { id: 10, name: "Noel John", role: "Allrounder" },
    { id: 11, name: "Edwin A", role: "Bowlers" },
    { id: 12, name: "Parthiban Raja", role: "Bowlers" },
    { id: 13, name: "Sanjeev Kumar Sahoo", role: "Allrounder" },
    { id: 14, name: "Nikhil Kumar", role: "Batsmen" },
    { id: 15, name: "Renson Selvaraj", role: "Batsmen" },
    { id: 16, name: "Vinay Boddu", role: "Batsmen" },
    { id: 17, name: "Ayyappa", role: "Batsmen" },
    { id: 18, name: "Kabin M", role: "Batsmen" },
    { id: 19, name: "kesavan k", role: "All-rounder" },
    { id: 20, name: "Sairam", role: "All-rounder" },
    { id: 21, name: "Arjun Reddy", role: "All-rounder" },
    { id: 22, name: "Stewart Prince PM", role: "Batsmen" },
    { id: 23, name: "Vipul Tapare", role: "Batsmen" },
    { id: 24, name: "Basheer Ahmed", role: "Batsmen" },
    { id: 25, name: "Chanakya Raju", role: "Batsmen" },
    { id: 26, name: "Udhayakumar T", role: "Batsmen" },
    { id: 27, name: "Kuldeep Managoli", role: "Batsmen" },
    { id: 28, name: "Shripad Dhanraj Hotkar", role: "Batsmen" },
    { id: 29, name: "Amit Bhat", role: "Batsmen" },
    { id: 30, name: "Saket kumar Jha", role: "Batsmen" },
    { id: 31, name: "Siddhant Parate", role: "Batsmen" },
    { id: 32, name: "Pragadeeshwaran", role: "Batsmen" },
    { id: 33, name: "Kishore Rajan", role: "Batsmen" },
    { id: 34, name: "Pragadeeshwaran", role: "Batsmen" },
  ];

  const [currentPlayer, setCurrentPlayer] = React.useState(playersList[0]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = React.useState(0);
  const handleNextPlayer = () => {
    setIsRunning(false);
    handleReset();
    const nextIndex = (currentPlayerIndex + 1) % playersList.length;
    setCurrentPlayer(playersList[nextIndex]);
    setCurrentPlayerIndex(nextIndex);
  };
  const handlePreviousPlayer = () => {
    setIsRunning(false);
    handleReset();
    const prevIndex =
      (currentPlayerIndex - 1 + playersList.length) % playersList.length;
    setCurrentPlayer(playersList[prevIndex]);
    setCurrentPlayerIndex(prevIndex);
  };

  const handleIncrement = (teamId) => {
    setTeamsValue((prevValues) =>
      prevValues.map((team) => {
        if (team.id === teamId) {
          if (currentValue == 0) {
            setCurrentValue((prev) => prev + 10);
            return { ...team, value: currentValue };
          } else {
            setCurrentValue((prev) => prev + 2);
            return { ...team, value: currentValue };
          }
        }
        return team;
      })
    );
  };

  const handleDecrement = (teamId) => {
    setTeamsValue((prevValues) =>
      prevValues.map((team) =>
        team.id === teamId ? { ...team, value: team.value - 1 } : team
      )
    );
  };

  const [isSoldOut, setIsSoldOut] = React.useState(false);
  const handleSoldOut = (teamId) => {
    setIsRunning(true);
    setIsSoldOut(true);
  };

  const handleReset = () => {
    setIsSoldOut(false);
    setTeamsValue([
      { id: 1, name: "DiggiRampage 11", value: 0 },
      { id: 2, name: "Diggi Strikes XI", value: 0 },
      { id: 3, name: "Byte Blasters", value: 0 },
    ]);
    setCurrentValue(10);
  };
  const maxTeam = teamsValue.reduce((prev, current) => {
    return current.value > prev.value ? current : prev;
  });
  const [isRunning, setIsRunning] = React.useState(false);
  // const [isRunning, setIsRunning] = React.useState(true);
  return (
    <div className="bg-blue-900 h-screen select-none">
      {/* <SchoolPridePopper /> */}

      {/* <button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? "🛑 Stop Confetti" : "🎉 Start Confetti"}
      </button> */}

      <ConfettiPopper
        running={isRunning}
        colors={["#ffff", "#FFCB05"]} // Example: University of Michigan colors
        duration={10000} // Optional: Auto-stop after 10 seconds
        onStop={() => console.log("Confetti stopped")}
      />
      <div className="flex">
        <div className="w-full bg-blue-950 p-4 text-white text-center">
          <h1 className="text-5xl font-bold mb-4 ">
            {" "}
            Diggibyte’s Live Cricket Auction
          </h1>
        </div>
      </div>

      <div className="flex mt-20">
        <div className="w-1/2">
          <div className="flex items-center justify-center p-4">
            <img
              src={`https://sanjeevkumar321.github.io/cricket-auction-final/images/${currentPlayer.name}.jpg`}
              alt="Profile"
              className="w-[600px] h-[600px] rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>
        <div className="w-1/2">
          {isSoldOut ? (
            <>
              {" "}
              <div className="flex  items-center p-4 h-full gap-7">
                <div className="flex flex-col justify-center items-center p-4 h-full">
                  <div className="mt-7"></div>
                  <h1 className="text-6xl font-bold text-white">
                    Sold To{" "}
                    <span className="text-yellow-400">{maxTeam.name}</span>
                  </h1>
                  <h1 className="text-9xl font-bold text-white">
                    {maxTeam.value}
                  </h1>
                  <div className="mt-7"></div>
                </div>
              </div>{" "}
            </>
          ) : (
            <>
              {" "}
              <div className="flex  items-center p-4 h-full gap-7">
                <div className="flex flex-col justify-center items-center p-4 h-full">
                  <button
                    className="px-4 py-1 bg-yellow-400 text-white  text-3xl font-semibold rounded hover:bg-yellow-500 transition"
                    onClick={() => handleIncrement(1)}
                  >
                    +
                  </button>
                  <div className="mt-7"></div>
                  <h1 className="text-3xl font-bold text-white">
                    {teamsValue[0].name}
                  </h1>
                  <h1 className="text-9xl font-bold text-white">
                    {teamsValue[0].value}
                  </h1>
                  <div className="mt-7"></div>
                  <button
                    className="px-4 py-1 bg-yellow-400 text-white  text-3xl font-semibold rounded hover:bg-yellow-500 transition"
                    onClick={() => handleDecrement(1)}
                  >
                    -
                  </button>
                </div>

                <div className="flex flex-col justify-center items-center p-4 h-full">
                  <button
                    className="px-4 py-1 bg-yellow-400 text-white  text-3xl font-semibold rounded hover:bg-yellow-500 transition"
                    onClick={() => handleIncrement(2)}
                  >
                    +
                  </button>
                  <div className="mt-7"></div>
                  <h1 className="text-3xl font-bold text-white">
                    {teamsValue[1].name}
                  </h1>
                  <h1 className="text-9xl font-bold text-white">
                    {teamsValue[1].value}
                  </h1>
                  <div className="mt-7"></div>
                  <button
                    className="px-4 py-1 bg-yellow-400 text-white  text-3xl font-semibold rounded hover:bg-yellow-500 transition"
                    onClick={() => handleDecrement(2)}
                  >
                    -
                  </button>
                </div>

                <div className="flex flex-col justify-center items-center p-4 h-full">
                  <button
                    className="px-4 py-1 bg-yellow-400 text-white  text-3xl font-semibold rounded hover:bg-yellow-500 transition"
                    onClick={() => handleIncrement(3)}
                  >
                    +
                  </button>
                  <div className="mt-7"></div>
                  <h1 className="text-3xl font-bold text-white">
                    {teamsValue[2].name}
                  </h1>
                  <h1 className="text-9xl font-bold text-white">
                    {teamsValue[2].value}
                  </h1>
                  <div className="mt-7"></div>
                  <button
                    className="px-4 py-1 bg-yellow-400 text-white  text-5xl font-semibold rounded hover:bg-yellow-500 transition"
                    onClick={() => handleDecrement(3)}
                  >
                    -
                  </button>
                </div>

                {/* <div className="flex flex-col justify-center items-center p-4 h-full">
              <button className="px-4 py-1 bg-yellow-400 text-white  text-3xl font-semibold rounded hover:bg-yellow-500 transition">
                +
              </button>
              <div className="mt-7"></div>
              <h1 className="text-5xl font-bold text-white">Current Bid</h1>
              <h1 className="text-9xl font-bold text-white">80</h1>
              <div className="mt-7"></div>
              <button className="px-4 py-1 bg-yellow-400 text-white  text-3xl font-semibold rounded hover:bg-yellow-500 transition">
                -
              </button>
            </div> */}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 p-4">
          <div className="flex justify-evenly">
            <button
              className="px-4 py-2 bg-yellow-400 text-white  text-3xl font-semibold rounded hover:bg-yellow-500 transition"
              onClick={handlePreviousPlayer}
            >
              {"<"}
            </button>

            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-white">
                {currentPlayer.name}
              </h1>
              {/* <br />
              <p className="text-lg text-gray-300 mt-1">Frontend Developer</p> */}
              {/* <div className="mt-4"></div> */}
            </div>

            <button
              className="px-4 py-2 text-3xl bg-yellow-400 text-white font-semibold rounded hover:bg-yellow-500 transition"
              onClick={handleNextPlayer}
            >
              {">"}
            </button>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="flex justify-evenly">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-white">Base Price</h3>

              <p className="text-5xl font-bold text-white">10</p>
              {/* <div className="mt-4"></div> */}
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-white"> Role</h3>

              <p className="text-5xl font-bold text-white">
                {currentPlayer.role}
              </p>
              {/* <div className="mt-4"></div> */}
            </div>
          </div>
        </div>
      </div>

      {!isSoldOut && (
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-yellow-400 text-white text-5xl font-semibold rounded hover:bg-yellow-500 transition mt-4"
            onClick={() => handleSoldOut(1)}
          >
            Sold Out
          </button>
        </div>
      )}

      {/* <div className="flex">
        <div className="w-2/3 bg-yellow-200 p-4">Left Column</div>
        <div className="w-1/3 bg-blue-200 p-4">Right Column</div>
      </div> */}
    </div>
  );
};

export default LiveAuction;
