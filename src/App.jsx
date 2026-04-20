import MyComponent from "./components/MyComponent";


const Box = (probs) => {
  const { text, bgColor, textColor, large } = probs;

  return <div style={{
    background: bgColor,
    color: textColor,
    fontSize: large ? "40px" : "12px"
  }}> {text}</div>
}

const TailwindExercise = () => {
  return <div>
    <div className="text-rose-300 bg-red-700"> one</div>
    <div className="text-slate-400 border-2 border-slate-600 py-3">two</div>
    <div className="text-2xl text-blue-600 bg-emerald-200 my-3">three</div>
    <div className="text-xl text-purple-500">
      <div className="border-4 border-sky-500">four</div>
      <div className="border-l-8 border-purple-800 bg-violet-200">five</div>
    </div>

  </div>
}

const ButtonExercise = () => {
  return <div>
    <button className="border-2 border-green-600 text-green-400 py-2 px-8  m-4 rounded-md">first</button>
    <button className="border-2 text-white bg-sky-400 px-10 py-4 rounded-lg text-xl m-4">second</button>
    <button className="text-lg text-cyan-200 bg-cyan-700 m-4 p-10 rounded-lg hover:text-cyan-700 hover:bg-cyan-200">third</button>

  </div>
}

const App = () => {
  return <div>
    {/* <Box text="my first preberty text" bgColor="Red" textColor="Black" /> */}
    {/* <Box
      text="my first preberty text"
      bgColor="CornFlowerBlue"
      textColor="Black"
      large={false}
    /> */}
    {/* <MyComponent bgColor="Yellow" height={60}>hello world</MyComponent>
    <br /> */}
    {/* <MyComponent>test</MyComponent> */}
    {/* <TailwindExercise /> */}
    <ButtonExercise />

  </div>

}


export default App
