import "./App.css";

function App() {
  return (
    <>
      <h1>hankiou.com</h1>
      <h2 className="text-neutral-500">Developper from france</h2>
      <div className="border border-neutral-700 flex flex-col gap-1 p-1">
        <a
          href="https://geowarmup.hankiou.com"
          className="flex gap-1 items-center p-1 justify-between"
        >
          <img className="w-8" src="/gw128.png" />
          <span>geowarmup❚</span>
          <i className="fa-solid fa-up-right-from-square"></i>
        </a>

        <a
          href="https://hankiou.github.io/cv/"
          className="flex gap-1 items-center p-1 justify-between"
        >
          <img className="w-8" src="/vite.svg" />
          <span>cv</span>
          <i className="fa-solid fa-up-right-from-square"></i>
        </a>

        <a
          href="https://dofus-games.onrender.com/"
          className="flex gap-1 items-center p-1 justify-between"
        >
          <img className="w-8" src="/dg.png" />
          <span>dofus: les gardiens de donjons</span>
          <i className="fa-solid fa-up-right-from-square"></i>
        </a>
      </div>
    </>
  );
}

export default App;
